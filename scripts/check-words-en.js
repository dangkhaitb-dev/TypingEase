#!/usr/bin/env node
/*
 * scripts/check-words-en.js — soi kho từ tiếng Anh trước khi nó kịp lọt vào bài học.
 *
 * Chạy: node scripts/check-words-en.js [--lang en]
 *
 * Kho từ là thứ VIẾT TAY, nên nó sai theo đúng kiểu người viết tay hay sai: gõ nhầm một ký
 * tự lạ, để sót một chuỗi dở dang, lặp một từ ba lần, hoặc đặt một từ vào nhóm mà phím của nó
 * chưa được dạy. Không thứ nào trong số đó lộ ra khi đọc lướt một mảng 900 phần tử.
 *
 * Script này cũng in ra BẢNG PHỦ: tới mỗi bài, còn bao nhiêu từ thật gõ được. Đó là con số
 * quyết định bài đó soạn được hay không — không có nó thì chỉ là đoán.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const lang = args.indexOf('--lang') >= 0 ? args[args.indexOf('--lang') + 1] : 'en';

let errors = 0, warnings = 0;
const fail = message => { errors += 1; console.error(`  LỖI   ${message}`); };
const warn = message => { warnings += 1; console.error(`  CẢNH  ${message}`); };

function loadGlobal(file) {
  const source = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const window = {};
  new Function('window', source)(window);
  return window;
}

const bank = loadGlobal(path.join('data', 'words', `${lang}.js`)).TypingEaseWords?.[lang];
if (!bank) { console.error(`không đọc được kho từ data/words/${lang}.js`); process.exit(1); }
const curriculum = loadGlobal(path.join('data', `curriculum.${lang}.js`)).TypingEaseCurriculum;

/* ---------- 1. hình thức ---------- */
// `words` và `drill` chỉ được chứa chữ thường và dấu nháy đơn: mọi thứ khác (chữ hoa, gạch
// nối, ký tự có dấu, ký tự của bảng chữ khác) sẽ không gõ được bằng phím giáo trình đã dạy.
const WORD_SHAPE = /^[a-z']+$/;
for (const field of ['words', 'drill']) {
  const list = bank[field] || [];
  list.forEach((word, index) => {
    if (typeof word !== 'string' || !WORD_SHAPE.test(word)) {
      fail(`${field}[${index}] = ${JSON.stringify(word)} — chỉ cho phép a-z và dấu nháy đơn`);
    }
  });
}

// Câu mẫu được viết tay nên rộng tay hơn, nhưng vẫn phải là ký tự gõ được.
const SENTENCE_SHAPE = /^[a-z0-9 ',.!?]+$/;
(bank.sentences || []).forEach((line, index) => {
  if (typeof line !== 'string' || !SENTENCE_SHAPE.test(line)) {
    fail(`sentences[${index}] = ${JSON.stringify(line)} — có ký tự không gõ được`);
  } else if (line !== line.trim() || line.includes('  ')) {
    fail(`sentences[${index}] = ${JSON.stringify(line)} — thừa khoảng trắng`);
  } else if (line.split(' ').length < 3) {
    warn(`sentences[${index}] = ${JSON.stringify(line)} — ngắn quá, dưới 3 từ`);
  }
});

const NAME_SHAPE = /^[A-Z][a-z]+$/;
(bank.names || []).forEach((name, index) => {
  if (!NAME_SHAPE.test(name || '')) fail(`names[${index}] = ${JSON.stringify(name)} — phải là một tên viết hoa chữ đầu`);
});

/* ---------- 2. trùng lặp ---------- */
for (const field of ['words', 'drill', 'names', 'sentences']) {
  const seen = new Map();
  (bank[field] || []).forEach((item, index) => {
    const key = String(item).toLowerCase();
    if (seen.has(key)) warn(`${field}: ${JSON.stringify(item)} lặp ở vị trí ${seen.get(key)} và ${index}`);
    else seen.set(key, index);
  });
}

/* ---------- 3. mọi từ trong `drill` phải có trong `words` ---------- */
// `drill` là kho chạy lúc luyện phím yếu; nó không được chứa từ mà phần còn lại của giáo
// trình chưa từng công nhận, nếu không sẽ có từ chỉ xuất hiện đúng ở bài phím yếu.
const wordSet = new Set((bank.words || []).map(word => word.toLowerCase()));
const missing = (bank.drill || []).filter(word => !wordSet.has(word.toLowerCase()));
if (missing.length) warn(`drill có ${missing.length} từ không nằm trong words: ${missing.slice(0, 12).join(', ')}${missing.length > 12 ? '…' : ''}`);

/* ---------- 4. bảng phủ theo từng bài ---------- */
// Đi đúng thứ tự `sequence` và cộng dồn `newKeys`, giống hệt cách validate-lessons.js tính —
// nhưng tính ĐỘC LẬP, không dùng chung mã. Hai phép tính độc lập lệch nhau thì validator sẽ
// kêu, và đó là thứ ta muốn: một cái gác cái kia.
const NAMED = { shift: '', enter: '\n', tab: '\t', backspace: '' };
const taught = new Set([' ']);
const rows = [];
for (const id of curriculum.sequence || []) {
  const entry = curriculum.lessons[id] || {};
  for (const key of entry.newKeys || []) {
    const resolved = key in NAMED ? NAMED[key] : key;
    if (resolved) taught.add(resolved);
  }
  const typeable = word => [...word].every(character => taught.has(character));
  const words = (bank.words || []).filter(typeable);
  const sentences = (bank.sentences || []).filter(typeable);
  rows.push({ id, title: entry.title || '', keys: taught.size, words: words.length, sentences: sentences.length, sample: words.slice(-4).join(' ') });
}

console.log(`\nKHO TỪ data/words/${lang}.js — ${(bank.words || []).length} từ, ${(bank.drill || []).length} từ luyện, ${(bank.sentences || []).length} câu, ${(bank.names || []).length} tên\n`);
console.log('bài      phím  từ gõ được  câu  ví dụ');
console.log('-------  ----  ----------  ---  ------------------------------');
for (const row of rows) {
  console.log(
    row.id.padEnd(9) + String(row.keys).padStart(4)
    + String(row.words).padStart(12) + String(row.sentences).padStart(5)
    + '  ' + row.sample
  );
}

// Một bài dạy phím mà không có nổi vài từ để luyện thì phải soạn bằng chuỗi luyện ngón, và
// người soạn cần biết điều đó TRƯỚC khi ngồi viết, không phải lúc validator báo lỗi.
const thin = rows.filter(row => row.words < 10 && (curriculum.lessons[row.id]?.kind === 'keys'));
if (thin.length) {
  console.log(`\nMỏng (dưới 10 từ) — những bài này phải soạn bằng chuỗi luyện ngón, không phải từ:`);
  for (const row of thin) console.log(`  ${row.id}  ${row.words} từ  — ${row.title}`);
}

console.log(`\n${errors ? `KẾT QUẢ: FAIL — ${errors} lỗi` : 'KẾT QUẢ: PASS'}${warnings ? `, ${warnings} cảnh báo` : ''}\n`);
process.exit(errors ? 1 : 0);
