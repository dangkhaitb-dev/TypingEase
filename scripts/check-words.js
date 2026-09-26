#!/usr/bin/env node
/*
 * scripts/check-words.js — bên gác của data/words/<lang>.js.
 *
 * Chạy:  node scripts/check-words.js --lang es
 *
 * VÌ SAO CÓ FILE NÀY. `scripts/check-words-en.js` đã gác kho tiếng Anh, nhưng nó chốt cứng
 * bảng chữ cái a-z. Kho tiếng Tây Ban Nha có ñ và á é í ó ú, kho Ba Lan có ą ć ę ł ń ó ś ź ż —
 * mỗi ngôn ngữ một bộ chữ hợp lệ, nên bộ chữ phải là DỮ LIỆU, khai ngay trong kho từ.
 *
 * Và nó cần thiết hơn nghe tưởng. Bản nháp đầu của data/words/es.js lọt bốn mục viết bằng
 * chữ Cyrillic và chữ Hán ('урна', '해', '留', 'ределя') — soát bằng mắt trên một danh sách
 * 400 từ thì không bắt được, còn một phép so bảng chữ cái thì bắt ngay lập tức. Từ sai chính
 * tả vẫn phải soát tay; nhưng từ viết bằng một hệ chữ khác thì máy phải chặn.
 *
 * Phép kiểm:
 *   1. mọi từ khớp `alphabet` mà kho tự khai
 *   2. không trùng lặp
 *   3. không chữ hoa (Shift dạy muộn, và chữ hoa trong kho là bẫy im lặng)
 *   4. câu trong `sentences` cũng chỉ dùng đúng bộ chữ đó cộng dấu cách
 *   5. mỗi mốc phím của khoá phải có đủ từ để xếp nổi một màn — tức là kho không thủng ở giữa
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const LANG = args.indexOf('--lang') >= 0 ? args[args.indexOf('--lang') + 1] : null;
if (!LANG) { console.error('thiếu --lang <mã>'); process.exit(1); }

function loadGlobal(file) {
  const window = {};
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(window);
  return window;
}
const BANK = loadGlobal(path.join('data', 'words', `${LANG}.js`)).TypingEaseWords[LANG];

// Kho tự khai bộ chữ của mình; thiếu thì rơi về a-z, đúng cho tiếng Anh và Indonesia.
const alphabet = BANK.alphabet || "abcdefghijklmnopqrstuvwxyz'";
const allowed = new Set([...alphabet]);
const problems = [];

const describe = word => [...word]
  .map(ch => (allowed.has(ch) ? ch : `[U+${ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')}]`))
  .join('');

/* 1 + 3. bộ chữ và chữ hoa */
for (const word of BANK.words) {
  if (typeof word !== 'string' || !word) { problems.push(`mục rỗng hoặc không phải chuỗi: ${JSON.stringify(word)}`); continue; }
  if (word !== word.toLowerCase()) problems.push(`có chữ hoa: "${word}"`);
  const bad = [...word].filter(ch => !allowed.has(ch));
  if (bad.length) problems.push(`ngoài bộ chữ ${LANG}: "${describe(word)}"`);
}

/* 2. trùng lặp */
const seen = new Map();
for (const word of BANK.words) seen.set(word, (seen.get(word) || 0) + 1);
for (const [word, n] of seen) if (n > 1) problems.push(`lặp ${n} lần: "${word}"`);

/* 4. câu */
// Câu ĐƯỢC PHÉP có chữ hoa, khác với `words`. Lý do là tiếng Đức: nó viết hoa MỌI danh từ, nên
// một câu toàn chữ thường là một câu sai chính tả, và generator thì chỉ viết hoa được chữ đầu
// câu. Bắt kho từ giữ đúng chính tả rồi để `typeableWith` lo phần "đã dạy Shift chưa" là cách
// duy nhất không dạy sai. Với tiếng Tây Ban Nha/Pháp/Ý thì không đổi gì: câu của chúng vẫn
// viết thường và vẫn được generator viết hoa chữ đầu.
for (const line of BANK.sentences || []) {
  if (/[.!?,;:]/.test(line)) problems.push(`câu có sẵn dấu câu (generator tự thêm): "${line}"`);
  const bad = [...line].filter(ch => ch !== ' ' && !allowed.has(ch) && !allowed.has(ch.toLowerCase()));
  if (bad.length) problems.push(`câu ngoài bộ chữ: "${line}"`);
}

/* 5. kho có thủng ở giữa không */
// Chạy lại đúng phép lọc của generator ở từng mốc phím, để biết khoá học có chỗ nào cạn từ.
const COURSE_FILE = path.join(ROOT, 'data', 'courses', `${LANG}.js`);
if (fs.existsSync(COURSE_FILE)) {
  const { typeableWith, setExpander } = require('./lib/content');
  // Tiếng Hàn: một âm tiết là nhiều phím jamo — cùng móc tách phím mà build-course.js dùng.
  const COURSE_HEAD = loadGlobal(path.join('data', 'courses', `${LANG}.js`)).TypingEaseCourse[LANG];
  if (COURSE_HEAD.inputMode === 'hangul') {
    require('../hangul-match.js');
    const H = globalThis.TypingEaseHangul;
    setExpander(character => (H.isSyllable(character) ? H.keysFor(character) : null));
  }
  const COURSE = loadGlobal(path.join('data', 'courses', `${LANG}.js`)).TypingEaseCourse[LANG];
  const curriculumFile = path.join(ROOT, 'data', `curriculum.${LANG}.js`);
  if (fs.existsSync(curriculumFile)) {
    const curriculum = loadGlobal(path.join('data', `curriculum.${LANG}.js`)).TypingEaseCurriculum;
    const keys = new Set([' ']);
    const dead = new Set();
    const DEADS = new Set(['´', '`', '^', '~', '¨']);
    // Cac bai TRUOC bai on tap dau tien khong doi kho tu. Tren nhieu bo cuc, bon phim dau chua
    // du mot nguyen am nao — AZERTY khong co nguyen am nao tren ca hang co so — nen chung von
    // la bai luyen ngon, va generator tu chon the. Bat dau doi tu bai on tap: do la bai dau
    // tien mang danh nghia "on lai", va on lai cai gi neu chua viet noi mot tu.
    const firstReview = curriculum.sequence.findIndex(id => curriculum.lessons[id].kind === 'review');
    for (const [position, id] of curriculum.sequence.entries()) {
      for (const key of curriculum.lessons[id].newKeys) {
        keys.add(key === 'shift' ? 'SHIFT' : key === 'enter' ? '\n' : key);
        if (DEADS.has(key)) dead.add(key);
      }
      const usable = BANK.words.filter(word => typeableWith(word, keys, dead));
      const entry = curriculum.lessons[id];
      // Bài luyện phím yếu và bài kiểm tra không xếp dòng từ, nên không đòi kho.
      if (entry.kind === 'weak') continue;
      if (firstReview >= 0 && position < firstReview) continue;
      const need = entry.kind === 'test' ? 20 : 12;
      if (usable.length < need) {
        problems.push(`${id} (${entry.kind}): chỉ ${usable.length} từ gõ được, cần ${need}`);
      }
    }
    void COURSE;
  }
}

if (problems.length) {
  console.error(`data/words/${LANG}.js — ${problems.length} vấn đề:\n`);
  for (const line of problems) console.error(`  ${line}`);
  process.exit(1);
}
console.log(`data/words/${LANG}.js: ${BANK.words.length} từ, ${(BANK.sentences || []).length} câu — PASS`);
