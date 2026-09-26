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
 *
 * Bộ sinh NỘI DUNG GÕ (drill, dòng từ, burst, seeded RNG) đã chuyển sang scripts/lib/content.js
 * ngày 23/09/2026 để khoá tiếng Pháp dùng chung. Chỉ nội dung gõ — thứ tự dạy phím và lời dạy
 * vẫn ở đây và ở scripts/lessons-en/. `--check` là thứ chốt rằng lần tách đó không đổi một byte
 * nào của 27 file; chạy lại nó sau mỗi lần sửa lib.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { seeded, shuffled, typeableWith, drillLines, wordsFor, wordLines, serialize } = require('./lib/content');

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
      lines = wordLines(rand, BANK, keys, {
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
      const pool = wordsFor(BANK, keys, { bias: screen.bias || [], only: !!screen.only, maxLength: screen.maxLength || 8 });
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
