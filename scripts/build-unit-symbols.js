#!/usr/bin/env node
/*
 * scripts/build-unit-symbols.js — unit "mọi phím còn lại" cho hai khoá VIẾT TAY (en, vi).
 *
 * Chạy:  node scripts/build-unit-symbols.js            ghi bài + khối <auto:symbols> trong chỉ mục
 *        node scripts/build-unit-symbols.js --check    không ghi, báo file nào lệch
 *
 * Khoá sinh tự động nhận unit này ngay trong build-course.js. Hai khoá viết tay thì không có máy
 * sinh nào để gắn vào, nên script này làm phần đó: đọc 27/35 bài có thật, xem ký tự nào của bàn
 * phím US CHƯA TỪNG xuất hiện trong nội dung của chúng, rồi dùng đúng bộ sinh của khoá tự động
 * (scripts/lib/unit-symbols.js) để dựng unit cuối.
 *
 * CHỈ MỤC VIẾT TAY KHÔNG BỊ SỬA TAY BỞI SCRIPT. Script chỉ thay những gì nằm giữa ba cặp dấu
 * `// <auto:symbols:units>` … `// </auto:symbols:units>` (và `:lessons`, `:sequence`) trong
 * data/curriculum.<mã>.js. Mọi thứ ngoài các cặp dấu ấy vẫn là của người viết.
 *
 * TỪ: khoá tiếng Anh dùng data/words/en.js. Khoá tiếng Việt không có kho từ riêng, nên lấy các từ
 * KHÔNG DẤU đã có trong chính những bài chế độ `ascii` của nó (unit 1–2, unit 4): đó là những từ
 * người học đã gõ, và gõ ở chế độ ascii không bị Telex biến "nhas" thành "nhá".
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { serialize, wordsFor } = require('./lib/content');
const { buildSymbolUnit } = require('./lib/unit-symbols');

const ROOT = path.resolve(__dirname, '..');
const CHECK = process.argv.includes('--check');
const loadGlobal = file => {
  const window = {};
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(window);
  return window;
};
const FIELD_ORDER = ['id', 'unit', 'group', 'order', 'slug', 'title', 'summary', 'newKeys',
  'keysSoFar', 'minAccuracy', 'estMinutes', 'inputMode', 'intro', 'congrats', 'screens'];
const MARK = name => [`    // <auto:symbols:${name}>`, `    // </auto:symbols:${name}>`];

let drift = 0, written = 0;
function emit(file, text) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (current === text) return;
  if (CHECK) { drift += 1; console.error(`LỆCH  ${path.relative(ROOT, file).split(path.sep).join('/')}`); return; }
  fs.writeFileSync(file, text);
  written += 1;
}

function replaceBlock(source, name, body, file) {
  const [open, close] = MARK(name);
  const start = source.indexOf(open);
  const end = source.indexOf(close);
  if (start < 0 || end < start) throw new Error(`${file}: thiếu cặp dấu ${open} … ${close}`);
  return source.slice(0, start + open.length) + '\n' + body + (body ? '\n' : '') + source.slice(end);
}

for (const code of ['en', 'vi']) {
  const curriculumFile = path.join('data', `curriculum.${code}.js`);
  const curriculum = loadGlobal(curriculumFile).TypingEaseCurriculum;
  const T = loadGlobal(path.join('data', 'courses', `${code}.js`)).TypingEaseCourse[code].teaching;
  const live = loadGlobal(path.join('data', 'courses', `${code}.js`)).TypingEaseCourse[code].symbolsLive || [];
  const layout = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'keyboards', 'layouts', `${curriculum.keyboardId}.json`), 'utf8'));
  const lessonDir = path.join(ROOT, 'data', 'lessons', code);

  // Bài viết tay = mọi bài trong chỉ mục TRỪ unit tự sinh (nếu đã có từ lần chạy trước).
  const own = curriculum.units.filter(unit => !unit.autoSymbols);
  const ownIds = own.flatMap(unit => unit.groups.flatMap(group => group.lessons));
  const taught = new Set();
  const asciiWords = new Set();
  const keysSoFar = new Set();
  for (const id of ownIds) {
    const lesson = JSON.parse(fs.readFileSync(path.join(lessonDir, `${id}.json`), 'utf8'));
    for (const key of lesson.newKeys || []) { taught.add(key); keysSoFar.add(key); }
    for (const key of lesson.keysSoFar || []) keysSoFar.add(key);
    for (const screen of lesson.screens) {
      const text = [screen.content || '', ...(screen.tokens || [])].join(' ');
      for (const character of text) taught.add(character);
      // Chỉ màn TỪ và CÂU: màn luyện ngón (`block`, `burst`) toàn mảnh như "lsdf", "wsw" — không phải từ.
      const ascii = (screen.inputMode || lesson.inputMode) !== 'telex';
      const wordy = screen.type === 'standard' || screen.type === 'test';
      if (ascii && wordy) for (const word of text.split(/\s+/)) if (/^[a-z]{2,8}$/.test(word)) asciiWords.add(word);
    }
  }

  let words;
  if (code === 'en') {
    const bank = loadGlobal(path.join('data', 'words', 'en.js')).TypingEaseWords.en;
    const keys = new Set([...taught].filter(key => [...key].length === 1));
    words = wordsFor(bank, keys, { maxLength: 8 });
  } else {
    // Màn "từ" của unit 1 vẫn có mẫu chữ ("dkdk", "kjls"). Một âm tiết tiếng Việt không dấu thì
    // phải có nguyên âm, và không bao giờ chứa f, j, w, z — bốn chữ đó chỉ là phím Telex.
    words = [...asciiWords].filter(word => /[aeiouy]/.test(word) && !/[fjwz]/.test(word)).sort();
  }

  const unitIndex = own.length + 1;
  const result = buildSymbolUnit({
    code, layout, taught, words, deadKeys: new Set(), S: T.symbols, T, live,
    unitIndex, previousLast: ownIds[ownIds.length - 1], keysSoFar: [...keysSoFar]
  });

  const wanted = new Set();
  result.lessons.forEach((lesson, index) => {
    lesson.order = ownIds.length + index + 1;
    const ordered = {};
    for (const field of FIELD_ORDER) ordered[field] = lesson[field];
    const file = path.join(lessonDir, `${lesson.id}.json`);
    wanted.add(file);
    emit(file, serialize(ordered));
  });
  // Bài tự sinh cũ không còn trong kết quả (số bài đổi theo nội dung) thì xoá.
  for (const name of fs.readdirSync(lessonDir)) {
    const file = path.join(lessonDir, name);
    if (!name.startsWith(`u${unitIndex}-`) || wanted.has(file)) continue;
    if (CHECK) { drift += 1; console.error(`THỪA  data/lessons/${code}/${name}`); } else { fs.unlinkSync(file); written += 1; }
  }

  const unit = result.unit;
  const unitBody = unit ? `    , {
      id: '${unit.id}',
      index: ${unit.index},
      // Sinh bởi scripts/build-unit-symbols.js — đừng sửa tay trong khối này.
      autoSymbols: true,
      title: ${JSON.stringify(unit.title)},
      summary: ${JSON.stringify(unit.summary)},
      minAccuracy: ${unit.minAccuracy},
      locked: true,
      unlockAfter: '${unit.unlockAfter}',
      groups: [
${unit.groups.map(group => `        { id: '${group.id}', title: ${JSON.stringify(group.title)}, lessons: [${group.lessons.map(id => `'${id}'`).join(', ')}] }`).join(',\n')}
      ]
    }` : '';
  const lessonBody = result.lessons.map(lesson => {
    const fields = [`title: ${JSON.stringify(lesson.title)}`, `newKeys: ${JSON.stringify(lesson.newKeys)}`,
      `screens: ${lesson.screens.length}`, `estMinutes: ${lesson.estMinutes}`, `kind: '${lesson.kind}'`];
    if (lesson.seconds) fields.push(`seconds: ${lesson.seconds}`);
    fields.push('ready: true');
    return `    , '${lesson.id}': { ${fields.join(', ')} }`;
  }).join('\n');
  const sequenceBody = result.lessons.length ? `    , ${result.lessons.map(lesson => `'${lesson.id}'`).join(', ')}` : '';

  let source = fs.readFileSync(path.join(ROOT, curriculumFile), 'utf8');
  source = replaceBlock(source, 'units', unitBody, curriculumFile);
  source = replaceBlock(source, 'lessons', lessonBody, curriculumFile);
  source = replaceBlock(source, 'sequence', sequenceBody, curriculumFile);
  emit(path.join(ROOT, curriculumFile), source);

  console.log(`${code}: unit ${unitIndex} · ${result.keys.length} ký tự · ${result.lessons.length} bài · ${result.keys.map(item => item.key).join('')}`
    + (result.skipped.length ? ` · bỏ qua ${result.skipped.join('')}` : ''));
}

if (CHECK) {
  console.log(drift ? `\n${drift} file lệch — chạy lại script` : 'mọi file khớp');
  process.exit(drift ? 1 : 0);
}
console.log(`${written} file đã ghi`);
