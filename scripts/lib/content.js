/*
 * scripts/lib/content.js — bộ sinh NỘI DUNG GÕ, dùng chung cho mọi khoá học.
 *
 * Tách ra từ scripts/build-lessons-en.js ngày 2026-09-23, khi khoá thứ ba (tiếng Pháp) cần đúng
 * bộ luật đó. Trước khi tách, `node scripts/build-lessons-en.js --check` được chạy để chốt rằng
 * 27 file JSON tiếng Anh ra byte y hệt sau khi tách — nếu một hàm ở đây đổi hành vi thì lệnh đó
 * là thứ báo, và nó phải được chạy lại mỗi lần file này bị sửa.
 *
 * ĐÂY CHỈ LÀ NỘI DUNG GÕ. Thứ tự dạy phím, lời dạy, cấu trúc bài — không có gì ở đây. Chúng khác
 * nhau giữa các khoá và sống ở bên gọi: `scripts/lessons-en/*.js` viết tay cho tiếng Anh,
 * `scripts/build-course.mjs` suy ra từ layout cho các khoá Tier 2.
 *
 * KHÔNG DÙNG Math.random, và đó là điều kiện sống còn của cả hệ: cùng đầu vào phải cho cùng byte,
 * mọi lần chạy, mọi máy. Nếu không thì `--check` vô nghĩa và mỗi lần chạy lại là một diff giả.
 */
'use strict';

/* ---------- ngẫu nhiên nhưng cố định ---------- */
// xorshift32 gieo bằng chính tên screen: cùng screen luôn ra cùng dãy, khác screen thì khác.
function seeded(label) {
  let state = 2166136261;
  for (const character of label) {
    state ^= character.charCodeAt(0);
    state = Math.imul(state, 16777619);
  }
  return () => {
    state ^= state << 13; state >>>= 0;
    state ^= state >>> 17;
    state ^= state << 5; state >>>= 0;
    return state / 4294967296;
  };
}

const pick = (rand, list) => list[Math.floor(rand() * list.length)];

function shuffled(rand, list) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ---------- gõ được hay chưa ---------- */
// Dấu tổ hợp (sau khi NFD tách ra) → phím chết gõ ra nó. Cùng bảng mà keyboard.js dùng để tô
// sáng phím chết, chép lại ở đây chứ không import: file kia là ES module chạy trong trình duyệt.
const DEAD_FOR = new Map([
  ['́', '´'],   // sắc  → ´   (á é í ó ú)
  ['̀', '`'],    // huyền → `   (à è ù)
  ['̂', '^'],    // mũ   → ^   (â ê î ô û)
  ['̃', '~'],    // ngã  → ~   (ã ñ õ)
  ['̈', '¨']    // hai chấm → ¨ (ä ë ï ö ü)
]);

// `deadKeys` là tập phím chết ĐÃ DẠY. Không truyền thì hàm cư xử y như trước: chữ có dấu chỉ
// gõ được khi chính nó nằm trên một phím. Đó là đúng cho tiếng Anh và cho ñ của tiếng Tây Ban
// Nha (ñ có phím riêng), nhưng sai cho á é í ó ú — chúng gõ bằng ´ rồi tới nguyên âm, nên phải
// đợi tới bài dạy ô phím đó. Trước khi có hàm này, kho từ tiếng Tây Ban Nha hoặc phải bỏ hết
// dấu — tức là không còn là tiếng Tây Ban Nha — hoặc phải đẩy từ có dấu vào bài mà người học
// chưa gõ nổi.
// Bộ gõ GHÉP (tiếng Hàn 2-set): một ký tự trên màn hình là nhiều phím — "한" = ㅎ ㅏ ㄴ. Khoá nào
// cần thì đặt `setExpander(fn)`; fn trả mảng phím cho ký tự ghép, hoặc null. Không đặt thì hàm
// này cư xử y như trước, byte cho byte.
let expander = null;
const setExpander = fn => { expander = typeof fn === 'function' ? fn : null; };

const typeableWith = (text, keys, deadKeys = null) => [...text].every(character => {
  if (keys.has(character)) return true;
  if (expander) {
    const parts = expander(character);
    if (parts && parts.length > 1) return parts.every(part => keys.has(part));
  }
  const lower = character.toLowerCase();
  if (lower !== character && keys.has('SHIFT') && keys.has(lower)) return true;
  if (!deadKeys || !deadKeys.size) return false;
  // Chữ ghép: tách ra dấu + chữ gốc, rồi hỏi cả hai đã dạy chưa.
  const parts = [...character.normalize('NFD')];
  if (parts.length < 2) return false;
  const mark = parts.find(part => DEAD_FOR.has(part));
  if (!mark || !deadKeys.has(DEAD_FOR.get(mark))) return false;
  const base = parts.filter(part => part !== mark).join('').normalize('NFC');
  return base.length === 1 && typeableWith(base, keys, deadKeys);
});

/* ---------- các họ mẫu luyện ngón ---------- */
// Dùng cho những bài chưa đủ phím để thành từ. Mỗi dòng là một MẪU CÓ TÊN, không phải chuỗi
// ngẫu nhiên: lặp, đảo tay, luân phiên, cuộn ngón. Chuỗi vô nghĩa ở đây là đúng sư phạm —
// nhưng chuỗi vô nghĩa mà không theo mẫu nào thì chỉ là nhiễu.
//
// `letterTest` là thứ DUY NHẤT phải đổi theo ngôn ngữ: bản tiếng Anh chốt cứng [a-z;',./-],
// mà hàng cơ sở AZERTY có `ù`, QWERTZ có `öä`, Ba Lan có `łą`. Bỏ chúng đi là bỏ đúng những
// phím đặc thù của bàn phím đó ra khỏi mọi bài luyện ngón.
function drillLines(rand, keys, { lines, focus = [], letterTest = /^[a-z;',.\/-]$/ }) {
  const letters = [...keys].filter(key => letterTest.test(key));
  const core = focus.length ? focus : letters.slice(0, 4);
  const others = letters.filter(key => !core.includes(key));
  const out = [];
  const families = [
    // lặp khối — độ dài lấy theo bộ ngẫu nhiên, nếu không thì hai screen cùng `focus` sẽ ra
    // y hệt nhau và người học gõ lại đúng dòng vừa gõ
    () => shuffled(rand, core).map(key => key.repeat(3 + Math.floor(rand() * 2))).join(' '),
    () => {
      const [a, b] = [core[0], core[1] || core[0]];
      const n = 2 + Math.floor(rand() * 2);
      return `${(a + b).repeat(n)} ${(b + a).repeat(n)}`;                 // luân phiên
    },
    () => shuffled(rand, core).join('') + ' ' + shuffled(rand, core).join(''),  // cuộn ngón
    () => {
      const mix = shuffled(rand, [...core, ...others.slice(0, 3)]);
      const take = Math.max(2, Math.min(3, mix.length));
      return mix.slice(0, take).join('') + ' ' + mix.slice(take, take * 2).join('')
        + ' ' + mix.slice(0, 2).join('');
    },
    () => {
      const pair = shuffled(rand, core).slice(0, 2).join('');
      return `${pair} ${pair.split('').reverse().join('')} ${pair.repeat(2)}`;
    }
  ];
  // Mot ho mau co the sinh ra doan rong khi `core` qua ngan (hai phim thi `mix.slice(2,4)` la
  // rong), va hai dau cach lien nhau bi validator chan thang. Don o MOT cho thay vi bat moi ho
  // mau tu nho — cho nao quen la mot loi lot luoi.
  const tidy = line => line.split(' ').filter(Boolean).join(' ').trim();
  const offset = Math.floor(rand() * families.length);
  const seen = new Set();
  for (let i = 0; i < lines; i += 1) {
    let line = '', guard = 0;
    do { line = tidy(families[(offset + i + guard) % families.length]()); guard += 1; }
    while ((seen.has(line) || !line) && guard < 12);
    seen.add(line);
    out.push(line);
  }
  return out;
}

/* ---------- các họ mẫu bằng từ ---------- */
function wordsFor(bank, keys, { bias = [], only = false, minLength = 1, maxLength = 99, deadKeys = null } = {}) {
  const usable = bank.words.filter(word =>
    word.length >= minLength && word.length <= maxLength && typeableWith(word, keys, deadKeys));
  if (!bias.length) return usable;
  // Từ chứa phím mới được ưu tiên, nhưng phần còn lại vẫn ở lại — một bài toàn từ chứa `g`
  // đọc như bài tập ngữ âm chứ không như tiếng Anh.
  // Bộ gõ ghép: phím ㄹ nằm TRONG âm tiết 러, nên hỏi các phím của từ chứ không hỏi chuỗi ký tự.
  const has = (word, key) => word.includes(key)
    || Boolean(expander && [...word].some(character => (expander(character) || []).includes(key)));
  const hit = usable.filter(word => bias.some(key => has(word, key)));
  const rest = usable.filter(word => !bias.some(key => has(word, key)));
  // `only: true` — CHỈ lấy từ chứa phím đang dạy. Cần từ khi kho từ lớn lên: ở Unit 1 kho còn
  // nhỏ nên nhân đôi phần trúng là đủ để chúng xuất hiện, nhưng với 458 từ trở đi thì một màn
  // "từ chứa phím mới" lại ra toàn từ không có phím mới nào — tức là màn đó không dạy gì cả.
  // Ưu tiên mềm vẫn là mặc định, vì nó cho ra thứ đọc như tiếng Anh; `only` dành cho đúng
  // những màn mà phím mới LÀ nội dung. Pool cạn thì wordLines/burst đã báo lỗi sẵn.
  if (only) return hit;
  return hit.length >= 8 ? [...hit, ...hit, ...rest] : usable;
}

function wordLines(rand, bank, keys, { lines, perLine = 4, bias = [], only = false, maxLength = 99, deadKeys = null }) {
  const pool = wordsFor(bank, keys, { bias, only, maxLength, deadKeys });
  if (pool.length < perLine) return null;
  const out = [];
  const used = new Set();
  for (let i = 0; i < lines; i += 1) {
    const row = [];
    let guard = 0;
    while (row.length < perLine && guard < 400) {
      guard += 1;
      const word = pick(rand, pool);
      // Không lặp trong cùng một dòng, và hạn chế lặp trong cả screen khi kho còn rộng.
      if (row.includes(word)) continue;
      if (used.has(word) && pool.length > perLine * lines * 2) continue;
      used.add(word);
      row.push(word);
    }
    out.push(row.join(' '));
  }
  return out;
}

/* ---------- ghi ---------- */
// 2 dấu cách, LF, có dòng trắng cuối — khớp đúng data/lessons/vi/*.json. Trên Windows mà để
// writeFileSync tự xử lý thì ra CRLF, và `checkFormatting` của validator từ chối ký tự \r.
const serialize = lesson => JSON.stringify(lesson, null, 2).split('\r\n').join('\n') + '\n';

module.exports = { seeded, pick, shuffled, typeableWith, drillLines, wordsFor, wordLines, serialize, DEAD_FOR, setExpander };
