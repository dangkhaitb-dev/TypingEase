#!/usr/bin/env node
/*
 * tooling/data/build-tasters.mjs — DỮ LIỆU của MỘT bài "hàng cơ sở" cho mỗi ngôn ngữ chưa có khoá học.
 *
 * Chạy:  node tooling/data/build-tasters.mjs           ghi chỉ mục + bài, xoá bài nếm thử cũ
 *        node tooling/data/build-tasters.mjs --check   không ghi, báo file nào lệch
 *
 * VÌ SAO. 21 ngôn ngữ trên trang đầu có bàn phím thật mà không có khoá: chưa có kho từ, nên
 * build-course.js không sinh được gì cho chúng. Bấm vào chúng thì trước đây chỉ có nút "học khoá
 * tiếng Anh thay thế". Nhưng bài ĐẦU của mọi khoá không cần một từ nào: nó là tám phím dưới tám
 * ngón, luyện theo mẫu. Thứ đó suy thẳng từ file bố cục — ô phím nào, ngón nào — y như kế hoạch
 * của build-course.js, nên nó đúng cho tiếng Hindi, tiếng Nhật hay tiếng Ả Rập như cho tiếng Pháp.
 *
 * MỖI NGÔN NGỮ MỘT KHOÁ NẾM THỬ, mã `<slug>-taster`, dựng trên bố cục ĐẦU TIÊN của ngôn ngữ đó:
 *   content/data/curriculum.<slug>-taster.js   chỉ mục một bài
 *   content/data/lessons/<slug>-taster/u1-l01.json
 * Trang player try/<slug>/index.html do Eleventy dựng (tooling/pages/tasters.mjs); danh sách bài
 * (`tasterJobs`) lấy từ chính module đó, để trang và dữ liệu không bao giờ lệch nhau. Sau khi ghi,
 * chạy node tooling/data/stamp-data.mjs để băm chỉ mục mới.
 *
 * KHÔNG DÙNG Math.random (xem tooling/lib/content.js). Cùng đầu vào, cùng byte.
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import paths from '../lib/paths.cjs';
import { loadLanguages, tasterJobs } from '../pages/tasters.mjs';

const { seeded, shuffled, drillLines, serialize } = createRequire(import.meta.url)('../lib/content.js');

const CHECK = process.argv.includes('--check');
const LANGUAGES = loadLanguages();

const FINGER_CODE = { 1: 'LP', 2: 'LR', 3: 'LM', 4: 'LI', 5: 'LT', 6: 'RT', 7: 'RI', 8: 'RM', 9: 'RR', 10: 'RP' };
const FINGER_NAME = {
  LP: 'your left little finger', LR: 'your left ring finger', LM: 'your left middle finger',
  LI: 'your left index finger', RI: 'your right index finger', RM: 'your right middle finger',
  RR: 'your right ring finger', RP: 'your right little finger'
};
// Cùng bốn cặp đầu của kế hoạch build-course.js: trỏ, giữa, áp út, út — từ trong ra ngoài.
const PAIRS = [['KeyF', 'KeyJ'], ['KeyD', 'KeyK'], ['KeyS', 'KeyL'], ['KeyA', 'Semicolon']];
// Phím chết không in ra gì khi gõ một mình — một dòng luyện ngón chứa nó là dòng không gõ nổi.
const DEAD = new Set(['´', '`', '^', '~', '¨', 'ˇ', '¸']);

const plain = value => (value == null ? '' : typeof value === 'object' ? String(value.key || '') : String(value));

function slotsFor(layout) {
  const by = new Map();
  for (const row of layout.structure) for (const key of row) if (key.hardware && !by.has(key.hardware)) by.set(key.hardware, key);
  return PAIRS.map(pair => pair.map(hardware => {
    const entry = by.get(hardware);
    const key = plain(entry && entry.main);
    // Một ký tự đơn, gõ ra được, không phải khoảng trắng. Chữ dựng (matra của Devanagari) vẫn là
    // một ký tự — nó hiện kèm vòng chấm, nhưng nó đúng là thứ phím đó in ra.
    if (!entry || [...key].length !== 1 || DEAD.has(key) || /\s/.test(key)) return null;
    return { hardware, key, finger: FINGER_CODE[entry.finger] || 'RT' };
  }).filter(Boolean)).filter(pair => pair.length);
}

const label = key => {
  const up = key.toUpperCase();
  return up !== key && [...up].length === 1 ? up : key;
};

function lessonFor(entry, layout, orphan = false) {
  const pairs = slotsFor(layout);
  const all = pairs.flat();
  if (all.length < 4) throw new Error(`${entry.code}: bố cục ${layout.keyboard_id} chỉ có ${all.length} phím hàng cơ sở gõ được`);
  const letterTest = { test: key => all.some(slot => slot.key === key) };
  const lessonId = 'u1-l01';
  const screens = [];
  const keys = new Set([' ']);
  const block = (focus, text) => {
    const rand = seeded(`${entry.code}:${screens.length}:block`);
    return { type: 'block', text, content: drillLines(rand, keys, { lines: 3, focus, letterTest }).join('\n') };
  };

  pairs.forEach((pair, index) => {
    for (const slot of pair) {
      keys.add(slot.key);
      screens.push({ type: 'intro', key: slot.key, finger: slot.finger,
        text: `This key belongs to ${FINGER_NAME[slot.finger] || 'your thumb'}. Find it without looking, press it once, and let the finger come back.`,
        hint: `Press ${label(slot.key)} to continue` });
      screens.push({ ...block([slot.key], `Only ${label(slot.key)} and what you already have. Slowly — the finger returns to the home row after every press.`), newKey: slot.key });
    }
    if (index === 0) {
      screens.push({ type: 'intro', key: ' ', finger: 'RT', text: 'The space bar belongs to your right thumb. The thumbs do nothing else.', hint: 'Press the space bar to continue' });
      screens.push({ ...block(pair.map(slot => slot.key), 'Short groups with spaces between them. The thumb goes down and up; nothing else moves.'), newKey: ' ' });
    }
    screens.push(block(pair.map(slot => slot.key), 'The two together, then back and forth.'));
  });

  const rand = seeded(`${entry.code}:burst`);
  const combos = new Set();
  const focus = all.map(slot => slot.key);
  while (combos.size < 12) {
    const length = 2 + Math.floor(rand() * 3);
    combos.add(Array.from({ length }, () => focus[Math.floor(rand() * focus.length)]).join(''));
  }
  screens.push({ type: 'burst', seconds: 25, text: 'Short groups from all eight keys, one after another. Keep going to the end.', tokens: shuffled(rand, [...combos]) });
  screens.push(block(focus, 'The whole home row. Eyes on the screen, not on your hands.'));
  screens.push(block(focus, 'One last round. If the fingers found their way home on their own, the lesson is done.'));

  const newKeys = [...all.map(slot => slot.key), ' '];
  return {
    id: lessonId, unit: 'u1', group: 'start', order: 1, slug: 'home-row',
    title: 'The home row',
    summary: `The eight keys under your fingers on ${layout.name}, and the space bar.`,
    newKeys, keysSoFar: newKeys, minAccuracy: 70, estMinutes: 5, inputMode: 'ascii',
    // Bố cục lẻ của một ngôn ngữ ĐÃ có khoá: khoá có thật, chỉ không dạy bàn phím này.
    intro: orphan
      ? `This is ${layout.name} as it really is, and its home row, the eight keys every course starts from. The ${entry.english} course is built on another layout; this one has no course of its own yet. What there is, is the part that does not need words at all: each finger finding its key without looking, and coming back.`
      : `This is the ${entry.english} keyboard as it really is — ${layout.name} — and its home row, the eight keys every course starts from. There are no words yet: the full ${entry.english} course is still being written. What there is, is the part that does not need words at all: each finger finding its key without looking, and coming back.`,
    congrats: orphan
      ? `That is the home row of ${layout.name}. The ${entry.english} course teaches the same habits on its own layout.`
      : `That is the home row of ${layout.name}. The rest of the ${entry.english} course is on its way; until then, the English course teaches the same habits.`,
    screens
  };
}

// Chú thích đầu file giữ nguyên chữ cũ (tooling/pages/tasters.mjs): đổi nó là đổi byte của chỉ mục,
// tức đổi mã băm của nó trên site, mà không vì nội dung nào.
function curriculumSource(entry, layout, lesson, code) {
  const first = lesson.screens.findIndex(screen => screen.type === 'block');
  return `/* data/curriculum.${code}.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-tasters.js + bố cục bàn phím ${layout.keyboard_id} (${layout.name}).
   Bài nếm thử "hàng cơ sở" cho ${entry.english}: một bài, không cần kho từ. Chạy lại:
   node scripts/build-tasters.js
*/
window.TypingEaseCurriculum = {
  lang: '${entry.code}',
  course: '${code}',${entry.dir === 'rtl' ? `
  dir: 'rtl',` : ''}
  keyboardId: ${layout.keyboard_id},
  layouts: [${layout.keyboard_id}],
  progressKey: 'typingease-progress-${code}-v1',
  badgesKey: 'typingease-badges-${code}-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: 'The home row',
      summary: ${JSON.stringify(lesson.summary)},
      minAccuracy: 70,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: 'Start here', lessons: ['u1-l01'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: ${JSON.stringify(lesson.title)}, newKeys: ${JSON.stringify(lesson.newKeys)}, screens: ${lesson.screens.length}, estMinutes: 5, kind: 'keys', ready: true }
  },

  sequence: [
    'u1-l01'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: ${first + 1},
    content: ${JSON.stringify(lesson.screens[first].content)},
    hint: 'Rest your index fingers on the two keys with bumps and type what you see, without looking at the keyboard.'
  }
};
`;
}

const rel = file => path.relative(paths.ROOT, file).split(path.sep).join('/');

let drift = 0, written = 0;
// Phần do tooling/data/stamp-data.mjs viết (khối `lessonUrls`, `?v=` trên thẻ chỉ mục) không phải đầu
// ra của script này: bỏ qua khi so sánh, và băm lại sau khi ghi.
const STAMP = '/* <auto:lesson-urls>';
const unstamped = text => {
  if (text == null) return text;
  const at = text.indexOf(STAMP);
  const body = at >= 0 ? text.slice(0, at).replace(/\s*$/, '\n') : text;
  return body.replace(/(data\/curriculum\.[a-z0-9-]+\.js)\?v=[a-f0-9]+/g, '$1');
};
function emit(file, text) {
  const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
  if (unstamped(current) === unstamped(text)) return;
  if (CHECK) { drift += 1; console.error(`LỆCH  ${rel(file)}`); return; }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text);
  written += 1;
}

const FIELD_ORDER = ['id', 'unit', 'group', 'order', 'slug', 'title', 'summary', 'newKeys',
  'keysSoFar', 'minAccuracy', 'estMinutes', 'inputMode', 'intro', 'congrats', 'screens'];
let count = 0;
const produced = new Set();
for (const { entry, layoutId, orphan, code } of tasterJobs(LANGUAGES)) {
  produced.add(code);
  const layout = JSON.parse(fs.readFileSync(paths.dataFile('keyboards', 'layouts', `${layoutId}.json`), 'utf8'));
  const lesson = lessonFor(entry, layout, orphan);
  const ordered = {};
  for (const field of FIELD_ORDER) ordered[field] = lesson[field];
  emit(paths.dataFile('lessons', code, 'u1-l01.json'), serialize(ordered));
  emit(paths.dataFile(`curriculum.${code}.js`), curriculumSource(entry, layout, lesson, code));
  count += 1;
}
// Ngôn ngữ vừa có khoá thật thì bài nếm thử cũ của nó phải đi: dữ liệu của nó (trang /try/ cũ thì
// tự biến mất ở lần build sau, vì tooling/pages/tasters.mjs dựng theo cùng danh sách).
for (const name of fs.readdirSync(paths.DATA)) {
  const match = /^curriculum\.(.+-taster)\.js$/.exec(name);
  if (!match || produced.has(match[1])) continue;
  const code = match[1];
  const stale = [paths.dataFile(name), paths.dataFile('lessons', code)];
  if (CHECK) { drift += 1; console.error(`THỪA  ${code}`); continue; }
  for (const target of stale) fs.rmSync(target, { recursive: true, force: true });
  written += 1;
}
if (CHECK) {
  console.log(drift ? `\n${drift} file lệch — chạy lại script` : `${count} bài nếm thử, mọi file khớp`);
  process.exit(drift ? 1 : 0);
}
console.log(`${count} bài nếm thử · ${written} file đã ghi`);
