#!/usr/bin/env node
/*
 * scripts/build-lessons-en.js — sinh data/lessons/en/*.json từ công thức trong scripts/lessons-en/.
 *
 * Chạy:  node scripts/build-lessons-en.js            sinh lại tất cả
 *        node scripts/build-lessons-en.js --only u1-l06
 *        node scripts/build-lessons-en.js --check    không ghi, chỉ báo file nào lệch (dùng cho CI)
 *
 * VÌ SAO CÓ SCRIPT NÀY. 230 screen nội dung gõ đều bị một ràng buộc chi phối: mỗi screen chỉ
 * được dùng phím đã dạy tới đúng thời điểm đó. Chọn tay 1.300 từ theo ràng buộc đó là việc
 * người làm sẽ sai, còn máy làm thì không. Nhưng máy KHÔNG viết được lời dạy — nên công thức
 * là nơi người viết văn xuôi, còn script chỉ trải nội dung gõ ra.
 *
 * ĐÂY KHÔNG PHẢI BƯỚC BUILD CỦA SITE. Site vẫn nạp file tĩnh; JSON sinh ra được commit vào
 * repo, y như bai-hoc/index.html và data/keyboards/*. Chạy tay khi công thức đổi.
 *
 * MỘT CÔNG THỨC, MỘT CÁCH GHI ĐÈ. Mỗi screen trong công thức hoặc có `gen` (script trải ra),
 * hoặc không có (chép nguyên văn). Không thích screen script sinh thì chép kết quả vào công
 * thức, sửa, rồi bỏ `gen` đi. Không có cờ `lock`, không có file phụ, không có chỗ nào mơ hồ
 * về việc bên nào thắng.
 *
 * KHÔNG DÙNG Math.random. Cùng công thức phải cho ra cùng byte, mọi lần chạy, mọi máy — nếu
 * không thì `--check` vô nghĩa và mỗi lần chạy lại là một diff giả.
 *
 * Script này tự tính tập phím cho phép, KHÔNG dùng chung mã với validate-lessons.js. Đó là
 * chủ ý: hai phép tính độc lập, và validator là bên gác. Lệch nhau thì validator kêu ngay,
 * to và rõ — tốt hơn nhiều so với một thư viện chung sai ở cả hai nơi cùng lúc.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const RECIPE_DIR = path.join(ROOT, 'scripts', 'lessons-en');
const OUT_DIR = path.join(ROOT, 'data', 'lessons', 'en');

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const ONLY = args.indexOf('--only') >= 0 ? args[args.indexOf('--only') + 1] : null;

/* ---------- nạp dữ liệu ---------- */
function loadGlobal(file) {
  const window = {};
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(window);
  return window;
}
const curriculum = loadGlobal(path.join('data', 'curriculum.en.js')).TypingEaseCurriculum;
const BANK = loadGlobal(path.join('data', 'words', 'en.js')).TypingEaseWords.en;

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

/* ---------- tập phím cho phép ---------- */
// `shift` và `enter` là phím chức năng: shift mở ra chữ hoa, enter mở ra ký tự xuống dòng thật.
const NAMED = { shift: 'SHIFT', enter: '\n', tab: '\t', backspace: 'BACKSPACE' };

// HAI TẬP PHÍM, KHÁC NHAU CÓ CHỦ Ý. `named: true` cho tập dùng để SINH nội dung: ở đó `shift`
// phải thành 'SHIFT' và `enter` thành ký tự xuống dòng, vì cái được hỏi là "ký tự này gõ được
// chưa".
// `named: false` cho `keysSoFar` GHI RA FILE: chỗ đó phải đúng nguyên tên phím như chỉ mục
// khai, vì validator so nó với tập luỹ tiến lấy thẳng từ `newKeys`.
function keysBeforeLesson(lessonId, { named = true } = {}) {
  const taught = new Set([' ']);
  for (const id of curriculum.sequence) {
    if (id === lessonId) break;
    for (const key of curriculum.lessons[id]?.newKeys || []) {
      taught.add(named && key in NAMED ? NAMED[key] : key);
    }
  }
  return taught;
}

const typeableWith = (text, keys) => [...text].every(character => {
  if (keys.has(character)) return true;
  // Chữ hoa chỉ hợp lệ khi đã dạy Shift VÀ đã dạy chính chữ thường của nó.
  const lower = character.toLowerCase();
  return lower !== character && keys.has('SHIFT') && keys.has(lower);
});

/* ---------- các họ mẫu luyện ngón ---------- */
// Dùng cho những bài chưa đủ phím để thành từ. Mỗi dòng là một MẪU CÓ TÊN, không phải chuỗi
// ngẫu nhiên: lặp, đảo tay, luân phiên, cuộn ngón. Chuỗi vô nghĩa ở đây là đúng sư phạm —
// nhưng chuỗi vô nghĩa mà không theo mẫu nào thì chỉ là nhiễu.
function drillLines(rand, keys, { lines, focus = [] }) {
  const letters = [...keys].filter(key => /^[a-z;',.\/-]$/.test(key));
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
function wordsFor(keys, { bias = [], only = false, minLength = 1, maxLength = 99 } = {}) {
  const usable = BANK.words.filter(word =>
    word.length >= minLength && word.length <= maxLength && typeableWith(word, keys));
  if (!bias.length) return usable;
  // Từ chứa phím mới được ưu tiên, nhưng phần còn lại vẫn ở lại — một bài toàn từ chứa `g`
  // đọc như bài tập ngữ âm chứ không như tiếng Anh.
  const hit = usable.filter(word => bias.some(key => word.includes(key)));
  const rest = usable.filter(word => !bias.some(key => word.includes(key)));
  // `only: true` — CHỈ lấy từ chứa phím đang dạy. Cần từ khi kho từ lớn lên: ở Unit 1 kho còn
  // nhỏ nên nhân đôi phần trúng là đủ để chúng xuất hiện, nhưng với 458 từ trở đi thì một màn
  // "từ chứa phím mới" lại ra toàn từ không có phím mới nào — tức là màn đó không dạy gì cả.
  // Ưu tiên mềm vẫn là mặc định, vì nó cho ra thứ đọc như tiếng Anh; `only` dành cho đúng
  // những màn mà phím mới LÀ nội dung. Pool cạn thì wordLines/burst đã báo lỗi sẵn.
  if (only) return hit;
  return hit.length >= 8 ? [...hit, ...hit, ...rest] : usable;
}

function wordLines(rand, keys, { lines, perLine = 4, bias = [], only = false, maxLength = 99 }) {
  const pool = wordsFor(keys, { bias, only, maxLength });
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

/* ---------- screen ---------- */
function expand(screen, context) {
  const { keys, lessonId, index } = context;
  const rand = seeded(`${lessonId}:${index}:${screen.gen}`);
  const base = { ...screen };
  delete base.gen;
  delete base.pattern; delete base.lines; delete base.perLine; delete base.bias;
  delete base.focus; delete base.count; delete base.source; delete base.maxLength;
  delete base.only;

  if (screen.gen === 'block' || screen.gen === 'standard') {
    const wantWords = screen.gen === 'standard' && screen.dictation === 'words';
    const wantSentence = screen.gen === 'standard' && screen.dictation === 'sentence';
    let lines = null;

    if (wantSentence) {
      const usable = BANK.sentences.filter(line => typeableWith(line, keys));
      if (usable.length < (screen.lines || 3)) {
        throw new Error(`${lessonId} screen ${index + 1}: chỉ có ${usable.length} câu gõ được, cần ${screen.lines || 3}`);
      }
      lines = shuffled(rand, usable).slice(0, screen.lines || 3);
      // Câu chỉ được viết hoa và chấm câu khi giáo trình đã dạy Shift và dấu chấm.
      if (keys.has('SHIFT') && keys.has('.')) {
        lines = lines.map(line => line[0].toUpperCase() + line.slice(1) + '.');
      }
    } else if (wantWords) {
      lines = wordLines(rand, keys, {
        lines: screen.lines || 3, perLine: screen.perLine || 4,
        bias: screen.bias || [], only: !!screen.only, maxLength: screen.maxLength || 99
      });
      if (!lines) throw new Error(`${lessonId} screen ${index + 1}: không đủ từ gõ được để xếp dòng`);
    } else {
      lines = drillLines(rand, keys, { lines: screen.lines || 3, focus: screen.focus || [] });
    }

    // `gen` quyết định HÌNH DẠNG nội dung, `type` quyết định loại screen. Bài kiểm tra cũng là
    // một đoạn văn như screen `standard`, chỉ khác nó đếm giờ — nên nó mượn chung bộ sinh nội
    // dung mà không phải mang theo `dictation`.
    base.type = screen.type || screen.gen;
    base.content = lines.join('\n');
    return base;
  }

  if (screen.gen === 'burst') {
    const count = screen.count || 8;
    let tokens;
    if (screen.source === 'words') {
      const pool = wordsFor(keys, { bias: screen.bias || [], only: !!screen.only, maxLength: screen.maxLength || 8 });
      if (pool.length < count) throw new Error(`${lessonId} screen ${index + 1}: chỉ có ${pool.length} từ, cần ${count}`);
      tokens = shuffled(rand, [...new Set(pool)]).slice(0, count);
    } else {
      // Tổ hợp ngắn từ chính các phím đang học — dùng cho những bài chưa có từ nào.
      const focus = screen.focus || [...keys].filter(key => /^[a-z]$/.test(key)).slice(0, 4);
      // Hai phím chỉ cho bốn tổ hợp hai ký tự, nên với những bài đầu phải lên tới ba ký tự mới
      // đủ token. Thêm dần độ dài cho tới khi đủ, chứ không cắt bớt yêu cầu.
      const combos = new Set(focus);
      for (let length = 2; length <= 4 && combos.size < count * 2; length += 1) {
        const build = (prefix, left) => {
          if (combos.size >= count * 3) return;
          if (!left) { combos.add(prefix); return; }
          for (const key of focus) build(prefix + key, left - 1);
        };
        build('', length);
      }
      tokens = shuffled(rand, [...combos].filter(token => token.length > 1)).slice(0, count);
    }
    base.type = screen.type || 'burst';
    base.tokens = tokens;
    return base;
  }

  throw new Error(`${lessonId} screen ${index + 1}: không biết gen="${screen.gen}"`);
}

/* ---------- ghép cả bài ---------- */
const FIELD_ORDER = ['id', 'unit', 'group', 'order', 'slug', 'title', 'summary', 'newKeys',
  'keysSoFar', 'minAccuracy', 'estMinutes', 'inputMode', 'intro', 'congrats', 'screens'];

function buildLesson(lessonId) {
  const recipe = require(path.join(RECIPE_DIR, `${lessonId}.js`));
  const entry = curriculum.lessons[lessonId];
  const position = curriculum.sequence.indexOf(lessonId);
  const unit = curriculum.units.find(u => u.groups.some(g => g.lessons.includes(lessonId)));
  const group = unit.groups.find(g => g.lessons.includes(lessonId));

  const keys = keysBeforeLesson(lessonId);
  const screens = [];
  recipe.screens.forEach((screen, index) => {
    // Phím do CHÍNH screen này giới thiệu có hiệu lực ngay từ screen đó, đúng như validator tính.
    for (const key of [].concat(screen.newKey || [], screen.newKeys || [])) {
      keys.add(key in NAMED ? NAMED[key] : key);
    }
    screens.push(screen.gen ? expand(screen, { keys, lessonId, index }) : { ...screen });
  });

  if (screens.length !== entry.screens) {
    throw new Error(`${lessonId}: công thức có ${screens.length} screen, chỉ mục khai ${entry.screens}`);
  }

  const lesson = {
    id: lessonId,
    unit: unit.id,
    group: group.id,
    order: position + 1,
    slug: recipe.slug,
    title: entry.title,
    summary: recipe.summary,
    newKeys: entry.newKeys,
    // Dau cach thuoc tap phim day RAT som va khong bao gio bi loai: validator so keysSoFar voi
    // tap luy tien theo `sequence`, va tap do co ' ' ngay tu bai dau.
    keysSoFar: [...new Set([
      ...keysBeforeLesson(lessonId, { named: false }),
      ...entry.newKeys
    ])],
    // DECISIONS.md: 70 cho bốn bài đầu, 80 từ bài thứ năm.
    minAccuracy: position < 4 ? 70 : 80,
    estMinutes: entry.estMinutes,
    inputMode: 'ascii',
    intro: recipe.intro,
    congrats: recipe.congrats,
    screens
  };
  const ordered = {};
  for (const field of FIELD_ORDER) ordered[field] = lesson[field];
  return ordered;
}

/* ---------- ghi ---------- */
// 2 dấu cách, LF, có dòng trắng cuối — khớp đúng data/lessons/vi/*.json. Trên Windows mà để
// writeFileSync tự xử lý thì ra CRLF, và `checkFormatting` của validator từ chối ký tự \r.
const serialize = lesson => JSON.stringify(lesson, null, 2).split('\r\n').join('\n') + '\n';

function main() {
  if (!fs.existsSync(RECIPE_DIR)) { console.error(`chưa có thư mục công thức ${RECIPE_DIR}`); process.exit(1); }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const ids = curriculum.sequence.filter(id =>
    (!ONLY || id === ONLY) && fs.existsSync(path.join(RECIPE_DIR, `${id}.js`)));
  if (!ids.length) { console.error(ONLY ? `không có công thức cho ${ONLY}` : 'chưa có công thức nào'); process.exit(1); }

  let written = 0, drift = 0;
  for (const id of ids) {
    const text = serialize(buildLesson(id));
    const file = path.join(OUT_DIR, `${id}.json`);
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (CHECK) {
      if (current !== text) { drift += 1; console.error(`LỆCH  ${id}.json — công thức và file đã sinh không khớp`); }
    } else if (current !== text) {
      fs.writeFileSync(file, text);
      written += 1;
      console.log(`ghi   data/lessons/en/${id}.json`);
    }
  }

  if (CHECK) {
    console.log(drift ? `\n${drift}/${ids.length} file lệch — chạy lại script rồi commit` : `\n${ids.length} file khớp công thức`);
    process.exit(drift ? 1 : 0);
  }
  console.log(`\n${written ? `${written} file đã ghi` : 'không có gì đổi'}, ${ids.length} bài dựng từ công thức`);
}

try { main(); } catch (error) { console.error(`\nLỖI: ${error.message}\n`); process.exit(1); }
