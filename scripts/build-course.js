#!/usr/bin/env node
/*
 * scripts/build-course.js — sinh CẢ một khoá học (chỉ mục + 27 bài) từ một bố cục bàn phím.
 *
 * Chạy:  node scripts/build-course.js --lang fr                    họ mặc định (AZERTY)
 *        node scripts/build-course.js --lang fr --course fr-bepo   một họ khác
 *        node scripts/build-course.js --lang fr --layout 184       họ chứa bố cục 184
 *        node scripts/build-course.js --lang fr --all              mọi họ của tiếng Pháp
 *        node scripts/build-course.js                              mọi khoá sinh tự động
 *        thêm --check: không ghi, chỉ báo file nào lệch
 *
 * VÌ SAO KHÁC build-lessons-en.js. Khoá tiếng Anh có 27 công thức viết tay: mỗi bài một bài văn
 * riêng, và nó hay hơn bất cứ thứ gì máy sinh ra được. Nhưng viết 27 bài văn cho mỗi ngôn ngữ mới
 * là thứ không nhân bản nổi, và nó cũng không phải phần khó thật. Phần khó thật — THỨ TỰ DẠY PHÍM
 * — lại là thứ SUY RA ĐƯỢC, vì mỗi file trong data/keyboards/layouts/ đã ghi sẵn `hardware` (ô
 * phím vật lý) và `finger` (ngón phụ trách) cho từng phím.
 *
 * Nên khoá Tier 2 được mô tả bằng VỊ TRÍ VẬT LÝ, không bằng chữ cái: "bài 4 dạy ô KeyA và ô
 * Semicolon". Trên QWERTY ra `a` và `;`, trên AZERTY ra `q` và `m`, trên QWERTZ Đức ra `a` và `ö`.
 * Một bản kế hoạch, đúng cho mọi bàn phím Latin — và đúng theo nghĩa mạnh: nó dạy đúng những ngón
 * ấy với đúng những phím mà bàn phím ấy thật sự có.
 *
 * HÀNG CƠ SỞ KHÔNG CÓ NGUYÊN ÂM. AZERTY là ca duy nhất trong Tier 2: hàng cơ sở của nó là
 * q s d f g h j k l m ù, không có nguyên âm nào dùng được. Dạy thẳng theo thứ tự vật lý thì bốn
 * bài đầu không viết nổi MỘT từ tiếng Pháp, và bài ôn tập thứ năm không có gì để ôn. Generator tự
 * phát hiện chuyện đó và kéo bài nguyên âm gần nhất lên trước bài ôn tập — xem `promoteVowel`.
 * Không chốt cứng cho tiếng Pháp: luật chạy theo kho từ, nên bàn phím nào rơi vào cảnh ấy cũng được
 * cứu, và bàn phím có sẵn `a` thì không bị đụng tới.
 *
 * LỜI DẠY đến từ bảng câu trong data/courses/<lang>.js — khoảng 40 mẫu có chỗ trống, dịch một lần
 * cho mỗi ngôn ngữ. Đó không phải văn xuôi hay như bản tiếng Anh viết tay, và không giả vờ là thế;
 * nó là lời dạy thật, đúng ngữ pháp, nói đúng việc đang xảy ra dưới ngón tay.
 *
 * KHÔNG DÙNG Math.random (xem scripts/lib/content.js). Cùng đầu vào, cùng byte, mọi lần chạy.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { seeded, shuffled, typeableWith, drillLines, wordsFor, wordLines, serialize } = require('./lib/content');
const { buildSymbolUnit } = require('./lib/unit-symbols');
const { setExpander } = require('./lib/content');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const option = name => (args.indexOf(name) >= 0 ? args[args.indexOf(name) + 1] : null);
const LANG = option('--lang');

/* ---------- nạp dữ liệu ---------- */
function loadGlobal(file) {
  const window = {};
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(window);
  return window;
}
const readLayout = id => JSON.parse(fs.readFileSync(
  path.join(ROOT, 'data', 'keyboards', 'layouts', `${id}.json`), 'utf8'));

/*
 * HỌ CHUỖI PHÍM. Khoá học không gắn với một bố cục mà với một HỌ: những bố cục mà bản kế hoạch
 * giải ra CÙNG một chuỗi phím, bài nào cũng vậy. US/UK/Canada là một họ; BÉPO là một họ riêng dù
 * cùng là tiếng Pháp, vì bài 1 của nó dạy `e` và `t` chứ không phải `f` và `j`.
 *
 * Danh sách họ nằm ở data/languages.js (`courses`), không ở đây: trang đầu cũng cần nó để biết
 * bấm vào bố cục nào thì dẫn tới khoá nào, và hai bản danh sách là hai bản sẽ lệch nhau. Việc của
 * script này là KHÔNG TIN danh sách đó — xem `checkFamily` ở dưới.
 *
 * Họ mặc định (đứng đầu `courses`) giữ mã khoá là mã ngôn ngữ, nên data/curriculum.fr.js và
 * data/lessons/fr/ vẫn ở chỗ cũ. Họ khác mang mã `fr-bepo`: data/curriculum.fr-bepo.js,
 * data/lessons/fr-bepo/.
 */
const LANGUAGES = loadGlobal(path.join('data', 'languages.js')).TypingEaseLanguages.list;
const generatedFamilies = entry => (entry.courses || []).filter(family => !family.handwritten);

// Không --lang: chạy lại TẤT CẢ các khoá sinh tự động. --all: mọi họ của một ngôn ngữ. Mỗi họ
// chạy trong một tiến trình riêng, vì cả phần dưới đây viết bằng hằng số cấp module (COURSE,
// LAYOUT, T…) — một khoá mỗi lần chạy, như trước giờ.
if (!LANG || args.includes('--all')) {
  const entries = LANG ? LANGUAGES.filter(entry => entry.code === LANG) : LANGUAGES;
  if (LANG && !entries.length) { console.error(`không có ngôn ngữ ${LANG} trong data/languages.js`); process.exit(1); }
  const { spawnSync } = require('child_process');
  let failed = 0;
  for (const entry of entries) {
    for (const family of generatedFamilies(entry)) {
      const run = spawnSync(process.execPath, [__filename, '--lang', entry.code, '--course', family.id,
        ...(CHECK ? ['--check'] : [])], { stdio: 'inherit' });
      if (run.status !== 0) failed += 1;
    }
  }
  process.exit(failed ? 1 : 0);
}

const ENTRY = LANGUAGES.find(entry => entry.code === LANG);
if (!ENTRY) { console.error(`không có ngôn ngữ ${LANG} trong data/languages.js`); process.exit(1); }
const FAMILY = (() => {
  const wantedCourse = option('--course');
  const wantedLayout = option('--layout');
  const families = ENTRY.courses || [];
  let found;
  if (wantedCourse) found = families.find(family => family.id === wantedCourse);
  else if (wantedLayout) found = families.find(family => family.layouts.includes(Number(wantedLayout)));
  else found = families[0];
  if (!found) {
    console.error(`${LANG}: không có họ nào khớp ${wantedCourse || wantedLayout || '(mặc định)'} — xem \`courses\` trong data/languages.js`);
    process.exit(1);
  }
  if (found.handwritten) {
    console.error(`${found.id}: khoá này viết tay, không sinh bằng script này`);
    process.exit(1);
  }
  return found;
})();
const CODE = FAMILY.id;
const IS_DEFAULT = CODE === LANG;
const SLUG = IS_DEFAULT ? null : CODE.slice(LANG.length + 1);

// Lớp phủ của họ: một họ khác bố cục thì có thể khác công tắc (BÉPO có dấu chấm riêng nên
// không cần `shiftUnlocks`) và khác vài câu dạy (câu nào nói về AZERTY thì sai trên BÉPO).
// Trộn một tầng cho `teaching` và một tầng nữa cho các bảng con của nó (`intro`, `units`…).
function overlay(base, extra) {
  if (!extra) return base;
  const teaching = { ...base.teaching };
  for (const [name, value] of Object.entries(extra.teaching || {})) {
    teaching[name] = value && typeof value === 'object' && !Array.isArray(value)
      && teaching[name] && typeof teaching[name] === 'object'
      ? { ...teaching[name], ...value } : value;
  }
  return { ...base, ...extra, teaching };
}
const BASE_COURSE = loadGlobal(path.join('data', 'courses', `${LANG}.js`)).TypingEaseCourse[LANG];
const COURSE = {
  ...overlay(BASE_COURSE, SLUG ? (BASE_COURSE.families || {})[SLUG] : null),
  // Bố cục đầu tiên của họ là bố cục khoá được sinh ra từ đó và hiện trên màn hình.
  keyboardId: FAMILY.layouts[0],
  progressKey: IS_DEFAULT ? BASE_COURSE.progressKey : `typingease-progress-${CODE}-v1`,
  badgesKey: IS_DEFAULT ? BASE_COURSE.badgesKey : `typingease-badges-${CODE}-v1`
};
if (IS_DEFAULT && BASE_COURSE.keyboardId && BASE_COURSE.keyboardId !== COURSE.keyboardId) {
  console.error(`${LANG}: data/courses/${LANG}.js khai keyboardId ${BASE_COURSE.keyboardId}, `
    + `nhưng họ mặc định trong data/languages.js bắt đầu bằng ${COURSE.keyboardId}`);
  process.exit(1);
}
if (SLUG && !(BASE_COURSE.families || {})[SLUG]) {
  console.error(`${CODE}: data/courses/${LANG}.js thiếu \`families.${SLUG}\``);
  process.exit(1);
}
const BANK = loadGlobal(path.join('data', 'words', `${LANG}.js`)).TypingEaseWords[LANG];
const LAYOUT = readLayout(COURSE.keyboardId);
// Chữ KHÔNG phân hoa/thường (Ả Rập, Hebrew, Devanagari, Bengali, Thái…): bài Shift không có chữ hoa
// nào để dạy. Nó dạy TẦNG SHIFT của các phím đã học thay vào đó — trên bàn phím Ả Rập đó là các dấu
// nguyên âm (fatha, kasra…), trên InScript là nguyên âm độc lập và phụ âm bật hơi.
// Kho từ tiếng Anh không khai `alphabet`, nên khi thiếu thì đọc chữ từ chính kho từ.
const CASELESS = COURSE.caseless ?? !/\p{Lu}/u.test(String(BANK.alphabet || (BANK.words || []).join('')).toUpperCase());

const T = COURSE.teaching;
// Viết hoa THEO NGÔN NGỮ: tiếng Thổ Nhĩ Kỳ viết hoa `i` thành `İ`, không phải `I` — `toUpperCase()`
// trơn từng in "Ii" ở bài Shift và gọi phím i chấm là "I". Với mọi ngôn ngữ khác kết quả y hệt.
const UP = text => String(text).toLocaleUpperCase(LANG);
const DOWN = text => String(text).toLocaleLowerCase(LANG);

/*
 * BỘ GÕ GHÉP — tiếng Hàn 2-set (`inputMode: 'hangul'` trong data/courses/<lang>.js). Phím là jamo
 * (ㅎ ㅏ ㄴ), còn chữ trên màn hình là âm tiết (한): bộ gõ ghép chúng lại. Nên:
 *   - một âm tiết "gõ được" khi mọi jamo của nó đã được dạy (setExpander → content.js);
 *   - bài luyện ngón ra ÂM TIẾT ghép từ phụ âm + nguyên âm đã học (러, 러러, 럴), không ra jamo rời
 *     — dưới bộ gõ thật, hai jamo rời đứng cạnh nhau tự ghép lại (ㄱ ㅅ → ㄳ, ㅗ ㅏ → ㅘ);
 *   - màn tầng Shift ra âm tiết có phụ âm căng/nguyên âm Shift (빠, 쩌, 얘).
 * player.js chấm bằng hangul-match.js, cùng giao diện với bộ Telex.
 */
const INPUT_MODE = COURSE.inputMode === 'hangul' ? 'hangul' : 'ascii';
const HANGUL = INPUT_MODE === 'hangul' ? (require('../hangul-match.js'), globalThis.TypingEaseHangul) : null;
if (HANGUL) setExpander(character => (HANGUL.isSyllable(character) ? HANGUL.keysFor(character) : null));
const JAMO_CONSONANTS = new Set('ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ');
const JAMO_VOWELS = new Set('ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅛㅜㅠㅡㅣ');
const FINAL_OK = new Set('ㄱㄲㄴㄷㄹㅁㅂㅅㅆㅇㅈㅊㅋㅌㅍㅎ');
// Âm tiết luyện ngón từ các jamo đang có; mỗi âm tiết phải chứa ít nhất một jamo trong `focus`.
function hangulSyllables(rand, keys, focus) {
  const consonants = [...keys].filter(key => JAMO_CONSONANTS.has(key));
  const vowels = [...keys].filter(key => JAMO_VOWELS.has(key));
  if (!vowels.length) return [];
  const initials = consonants.length ? consonants : [];
  const out = new Set();
  for (const l of initials.length ? initials : ['ㅇ']) {
    for (const v of vowels) {
      const plain = HANGUL.compose(l, v);
      if (plain) out.add(plain);
      for (const t of consonants) if (FINAL_OK.has(t)) { const closed = HANGUL.compose(l, v, t); if (closed) out.add(closed); }
    }
  }
  const wanted = new Set(focus || []);
  const list = [...out].filter(syllable => !wanted.size || HANGUL.keysFor(syllable).some(key => wanted.has(key)));
  return shuffled(rand, list.length ? list : [...out]);
}
function hangulDrill(rand, keys, { lines = 3, focus = [] }) {
  // Phím không phải jamo trong `focus` (; . , ' chữ số, cột ngoài) gõ như chính nó, xen giữa các âm
  // tiết — không thì màn dạy dấu chấm phẩy lại chẳng có dấu chấm phẩy nào.
  const extras = (focus || []).filter(key => !JAMO_CONSONANTS.has(key) && !JAMO_VOWELS.has(key));
  const jamoFocus = (focus || []).filter(key => JAMO_CONSONANTS.has(key) || JAMO_VOWELS.has(key));
  const pool = hangulSyllables(rand, keys, jamoFocus.length ? jamoFocus : (extras.length ? [] : focus));
  if (!pool.length) return null;
  if (extras.length) {
    const out = [];
    for (let i = 0; i < lines; i += 1) {
      const tokens = [];
      for (let j = 0; j < 4; j += 1) {
        const extra = extras[(i * 4 + j) % extras.length];
        tokens.push(j % 2 ? extra.repeat(1 + Math.floor(rand() * 2)) : pool[Math.floor(rand() * pool.length)] + extra);
      }
      out.push(tokens.join(' '));
    }
    return out;
  }
  const out = [];
  let at = 0;
  for (let i = 0; i < lines; i += 1) {
    const tokens = [];
    for (let j = 0; j < 4; j += 1) {
      const size = 1 + Math.floor(rand() * 2);
      let token = '';
      for (let k = 0; k < size; k += 1) { token += pool[at % pool.length]; at += 1; }
      tokens.push(token);
    }
    out.push(tokens.join(' '));
  }
  return out;
}

/* ---------- đọc bố cục ---------- */
// Bảng mã ngón của DỮ LIỆU BÀI HỌC ('LI'), không phải của widget bàn phím ('left-index').
// player.js có hai bảng vì hai nguồn gọi khác nhau; chỗ này sinh dữ liệu bài nên dùng bảng bài.
const FINGER_CODE = { 1: 'LP', 2: 'LR', 3: 'LM', 4: 'LI', 5: 'LT', 6: 'RT', 7: 'RI', 8: 'RM', 9: 'RR', 10: 'RP' };

function byHardware(layout) {
  const map = new Map();
  for (const row of layout.structure) {
    for (const key of row) {
      if (key.hardware && !map.has(key.hardware)) map.set(key.hardware, key);
    }
  }
  map.id = layout.keyboard_id;
  return map;
}
const BY_HARDWARE = byHardware(LAYOUT);

const plainValue = value => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object') return String(value.key || '');
  return String(value);
};

// Một ô phím vật lý → ký tự nó in ra, ngón giữ nó, và tên hiển thị.
function slot(hardware, by = BY_HARDWARE) {
  const entry = by.get(hardware);
  if (!entry) throw new Error(`bố cục ${by.id} không có ô ${hardware}`);
  const main = plainValue(entry.main);
  if (!main || main.length !== 1) {
    throw new Error(`ô ${hardware} của bố cục ${by.id} in ra "${main}" — không phải một ký tự đơn`);
  }
  return { hardware, key: main, finger: FINGER_CODE[entry.finger] || 'RT', shifted: plainValue(entry.shifted) };
}

/* ---------- bản kế hoạch, viết bằng Ô PHÍM chứ không bằng chữ cái ---------- */
// Thứ tự trong mỗi hàng: trỏ → giữa → áp út → út, rồi lặp lại y thế ở hàng trên và hàng dưới.
// Đây là kỷ luật hàng phím, và nó là thứ đang được dạy — không phải tần suất chữ cái. Đảo theo
// tần suất thì được vài chữ hay gặp sớm hơn và mất đúng cái đang cần rèn.
const PLAN = [
  { unit: 'u1', kind: 'first', hw: ['KeyF', 'KeyJ'] },
  { unit: 'u1', kind: 'keys', hw: ['KeyD', 'KeyK'] },
  { unit: 'u1', kind: 'keys', hw: ['KeyS', 'KeyL'] },
  { unit: 'u1', kind: 'keys', hw: ['KeyA', 'Semicolon'] },
  { unit: 'u1', kind: 'review' },
  { unit: 'u1', kind: 'keys', hw: ['KeyG', 'KeyH'] },
  { unit: 'u1', kind: 'keys', hw: ['KeyE', 'KeyI'] },
  { unit: 'u1', kind: 'keys', hw: ['KeyR', 'KeyU'] },
  { unit: 'u1', kind: 'weak', seconds: 120 },
  { unit: 'u1', kind: 'test', seconds: 60 },

  { unit: 'u2', kind: 'keys', hw: ['KeyT', 'KeyY'] },
  { unit: 'u2', kind: 'keys', hw: ['KeyO', 'KeyW'] },
  { unit: 'u2', kind: 'keys', hw: ['KeyC', 'KeyN'] },
  { unit: 'u2', kind: 'keys', hw: ['KeyM', 'KeyV'] },
  { unit: 'u2', kind: 'review' },
  { unit: 'u2', kind: 'keys', hw: ['KeyQ', 'KeyP'] },
  { unit: 'u2', kind: 'keys', hw: ['KeyB', 'KeyX'] },
  // Ô Quote đi cùng dấu chấm và dấu phẩy, vì với hầu hết bố cục nó CŨNG là dấu câu: dấu nháy
  // trên QWERTY, và trên các bố cục có dấu thì nó là phím chết — mở ra toàn bộ chữ có dấu
  // của ngôn ngữ đó. Trước bài này kho từ chỉ dùng được phần không dấu, và đó là đúng: người
  // học chưa có phím nào gõ ra dấu cả.
  { unit: 'u2', kind: 'keys', hw: ['KeyZ', 'Period', 'Comma', 'Quote'] },
  { unit: 'u2', kind: 'shift' },
  { unit: 'u2', kind: 'weak', seconds: 120 },
  { unit: 'u2', kind: 'test', seconds: 60 },

  { unit: 'u3', kind: 'digits' },
  // Cot ngoai cua ngon ut phai. Sau o, tat ca deu finger 10. Tren ban phim My chung la
  // dau cau; tren cac bo cuc khac chung la chu that — xem dau file.
  { unit: 'u3', kind: 'edge',
    hw: ['Slash', 'Minus', 'Equal', 'BracketLeft', 'BracketRight', 'Backslash'] },
  { unit: 'u3', kind: 'review', flavour: 'mixed' },
  { unit: 'u3', kind: 'prose' },
  { unit: 'u3', kind: 'prose' },
  { unit: 'u3', kind: 'test', seconds: 180 }
];

const UNITS = [
  { id: 'u1', index: 1, minAccuracy: 80, locked: false, unlockAfter: null,
    groups: [['start', 0, 5], ['reach', 5, 8], ['finish', 8, 10]] },
  { id: 'u2', index: 2, minAccuracy: 80, locked: true, unlockAfter: 'u1-l10',
    groups: [['start', 0, 5], ['reach', 5, 9], ['finish', 9, 11]] },
  { id: 'u3', index: 3, minAccuracy: 80, locked: true, unlockAfter: 'u2-l11',
    groups: [['numbers-symbols', 0, 3], ['speed', 3, 6]] }
];

/* ---------- phân giải kế hoạch trên bố cục thật ---------- */
const DIGITS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5',
  'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0'];

function resolve(by = BY_HARDWARE) {
  const at = hardware => slot(hardware, by);
  return PLAN.map(step => {
    if (step.kind === 'digits') {
      const slots = DIGITS.map(at);
      // `digitsAreShifted` cho AZERTY: hang so khong Shift in ra & é " ' ( - è _ ç à, tuc la
      // dung nhung chu co dau cua tieng Phap. Chu so that nam o tang Shift, va Shift da day
      // o bai truoc — nen bai nay day CA HAI TANG, va do la su that ve ban phim ay.
      const shifted = COURSE.digitsAreShifted
        ? slots.map(item => item.shifted).filter(value => value && value.length === 1)
        : [];
      return { ...step, slots, shifted, newKeys: [...slots.map(s => s.key), ...shifted] };
    }
    if (step.kind === 'shift') {
      // Ky tu chi ton tai o tang Shift cua mot o da day. Tren AZERTY dau cham la Shift + o
      // Comma, nen no mo ra dung tai day va khong som hon mot bai nao.
      let unlocks = (COURSE.shiftUnlocks || []).filter(value => value && value.length === 1);
      if (CASELESS && !unlocks.length) {
        // Tầng Shift của những ô đã dạy, theo đúng thứ tự dạy; tám ký tự là đủ một bài, phần còn lại
        // unit "mọi phím còn lại" sẽ dạy.
        const before = PLAN.slice(0, PLAN.indexOf(step)).filter(item => item.hw).flatMap(item => item.hw);
        const seen = new Set();
        for (const hardware of before) {
          const entry = by.get(hardware);
          const main = plainValue(entry && entry.main);
          const shifted = plainValue(entry && entry.shifted);
          if ([...shifted].length !== 1 || shifted === main || DEAD_CHARS.has(shifted) || /\s/.test(shifted) || seen.has(shifted)) continue;
          seen.add(shifted);
        }
        unlocks = [...seen].slice(0, 8);
      }
      return { ...step, slots: [], unlocks, newKeys: ['shift', 'enter', ...unlocks] };
    }
    if (!step.hw) return { ...step, slots: [], newKeys: [] };
    // Ký tự vô hình (ZWNJ/ZWJ — ô KeyQ của Bolnagri) không phải thứ để dạy như một phím: một dòng
    // luyện toàn ký tự không nhìn thấy là một dòng không ai đọc được.
    const slots = step.hw.map(at).filter(item => !/\p{Cf}/u.test(item.key));
    const newKeys = slots.map(s => s.key);
    if (step.kind === 'first') newKeys.push(' ');
    return { ...step, slots, newKeys };
  });
}

/*
 * Không tin danh sách họ: GIẢI LẠI bản kế hoạch trên từng bố cục trong họ và đòi mọi bài ra
 * đúng cùng phím, cùng ngón. Một bố cục lọt nhầm họ là người học nhìn bàn phím của mình mà làm
 * bài của bàn phím khác — đúng loại lỗi mà cả cơ chế họ này sinh ra để sửa. Tên gọi không phải
 * bằng chứng: bốn bố cục "Spanish" trong danh mục KHÔNG cùng một chuỗi (Latin America đặt ´ ở ô
 * khác), và Colemak-DH dời D, H, G khỏi chỗ của Colemak.
 */
function checkFamily() {
  const describe = steps => steps.map(step => step.slots.map(s => `${s.key}:${s.finger}`).join(' ')
    + (step.shifted && step.shifted.length ? ` ⇧${step.shifted.join('')}` : '')).join(' | ');
  const reference = describe(resolve());
  for (const id of FAMILY.layouts.slice(1)) {
    const by = byHardware(readLayout(id));
    const theirs = resolve(by);
    const mine = resolve();
    const text = describe(theirs);
    if (text !== reference) {
      const at = theirs.findIndex((step, i) => describe([step]) !== describe([mine[i]]));
      throw new Error(`${CODE}: bố cục ${id} không cùng họ với ${COURSE.keyboardId} — bước ${at + 1} ra `
        + `"${describe([theirs[at]])}" thay vì "${describe([mine[at]])}". Tách nó ra một họ riêng trong data/languages.js`);
    }
  }
  // Ký tự mở ra nhờ Shift là CÔNG TẮC trong data/courses, không suy từ bố cục — nên phải hỏi lại
  // từng bố cục xem nó có thật ở tầng Shift không.
  for (const id of FAMILY.layouts) {
    const by = id === COURSE.keyboardId ? BY_HARDWARE : byHardware(readLayout(id));
    const shiftLayer = new Set([...by.values()].map(key => plainValue(key.shifted)));
    for (const character of COURSE.shiftUnlocks || []) {
      if (!shiftLayer.has(character)) {
        throw new Error(`${CODE}: shiftUnlocks có "${character}" nhưng bố cục ${id} không có nó ở tầng Shift`);
      }
    }
  }
}

// Chữ cái nào ĐANG gõ được sau n bước đầu tiên.
const keysAfter = (steps, n) => {
  const keys = new Set([' ']);
  for (let i = 0; i < n; i += 1) {
    for (const key of steps[i].newKeys) keys.add(key === 'shift' ? 'SHIFT' : key === 'enter' ? '\n' : key);
  }
  return keys;
};

/*
 * Hàng cơ sở không có nguyên âm → bài ôn tập không có gì để ôn.
 *
 * Đo bằng kho từ chứ không bằng danh sách nguyên âm chốt cứng: câu hỏi thật không phải "hàng này
 * có nguyên âm không" mà là "tới đây đã viết nổi từ nào chưa", và chỉ kho từ của chính ngôn ngữ đó
 * trả lời được. Bàn phím có sẵn `a` thì hàm này không đổi gì cả.
 */
const REVIEW_NEEDS_WORDS = 12;
function promoteVowel(steps) {
  const reviewAt = steps.findIndex(step => step.kind === 'review');
  if (reviewAt < 0) return { steps, promoted: null };
  const enough = at => {
    const keys = keysAfter(steps, at);
    return wordsFor(BANK, keys, { deadKeys: deadIn(keys) }).length >= REVIEW_NEEDS_WORDS;
  };
  if (enough(reviewAt)) {
    return { steps, promoted: null };
  }
  // Tìm bài DẠY PHÍM gần nhất sau bài ôn tập mà kéo lên thì bài ôn tập có từ để ôn.
  for (let i = reviewAt + 1; i < steps.length; i += 1) {
    if (steps[i].kind !== 'keys') continue;
    const trial = [...steps];
    const [moved] = trial.splice(i, 1);
    trial.splice(reviewAt, 0, moved);
    const trialKeys = keysAfter(trial, reviewAt + 1);
    if (wordsFor(BANK, trialKeys, { deadKeys: deadIn(trialKeys) }).length >= REVIEW_NEEDS_WORDS) {
      return { steps: trial, promoted: moved };
    }
  }
  throw new Error(`bố cục ${COURSE.keyboardId}: không bài nào kéo lên đủ cho bài ôn tập — kho từ quá nhỏ?`);
}

/* ---------- lời dạy ---------- */
const fill = (template, values) => String(template ?? '')
  .replace(/\{(\w+)\}/g, (whole, name) => (name in values ? String(values[name]) : whole));

// `'ß'.toUpperCase()` la 'SS' — hai ky tu. Mot nhan phim dai hai ky tu la mot nhan sai, nen
// chu nao no ra dai hon thi giu nguyen dang thuong. (Tieu de bai u3-l02 cua tieng Duc tung doc
// la "- und SS" trong khi bai do day dung chu ß.)
const upper = key => {
  const up = UP(key);
  if (up === DOWN(key) || up.length !== key.length || DOWN(up) !== key) return key;
  return up;
};
// Hai phim thi "A va B"; ba phim tro len thi "A, B, C va D". Noi tat ca bang lien tu cho ra
// "Y und . und , und Ä" — doc nhu mot danh sach hong, o moi ngon ngu.
// Dấu câu trong một danh sách phím được gọi bằng TÊN (`T.keyNames`), không bằng ký tự: tóm tắt
// unit 1 của BÉPO từng đọc "puis , C, P D et O V", và tiêu đề bài dấu câu là "Z, ., , et ;".
// Chỉ ở danh sách — màn "nhấn phím X" vẫn hiện đúng ký tự, vì đó là thứ in trên phím.
const keyName = key => (T.keyNames && T.keyNames[key]) || upper(key);
const keyList = slots => {
  const names = slots.map(s => keyName(s.key));
  if (names.length <= 1) return names.join('');
  // `listSep`: dấu phẩy CỦA ngôn ngữ đó (Urdu, Ba Tư: ، ). Mặc định là ", ".
  return names.slice(0, -1).join(T.listSep || ', ') + T.and + names[names.length - 1];
};
const fingerName = code => T.fingers[code] || code;

/* ---------- screen ---------- */
// Mỗi loại bài là một dãy screen cố định. Chốt ở đây chứ không rải trong bảng câu: hình dạng bài
// là sư phạm, còn bảng câu chỉ là ngôn ngữ — trộn hai thứ là mỗi bản dịch lại đẻ ra một khoá khác.
function screensFor(step, context) {
  const { slots, kind } = step;
  const out = [];
  const [a, b, c] = slots;

  const drill = (opts, text) => ({ gen: 'block', ...opts, text });
  const words = (opts, text) => ({ gen: 'standard', dictation: 'words', lines: 3, perLine: 4, ...opts, text });

  if (kind === 'first' || kind === 'keys') {
    slots.forEach((s, i) => {
      out.push({
        type: 'intro', key: s.key, finger: s.finger,
        text: fill(T.introKey, { key: upper(s.key), finger: fingerName(s.finger) }),
        hint: fill(T.pressToContinue, { key: upper(s.key) })
      });
      out.push(drill({ newKey: s.key, lines: 3, focus: slots.slice(0, i + 1).map(x => x.key) },
        fill(T.drillNew, { key: upper(s.key) })));
    });
    if (kind === 'first') {
      out.push({ type: 'intro', key: ' ', finger: 'RT', text: T.introSpace, hint: T.pressSpace });
      // Phai co MOT man `block` mang `newKey: ' '`: validator doi moi phim moi duoc dua vao
      // bang mot man go that, chu khong chi bang mot man gioi thieu doc xong roi thoi.
      out.push({ gen: 'block', newKey: ' ', lines: 3, focus: slots.map(x => x.key),
        text: T.drillSpace });
    }
    const focus = slots.map(s => s.key);
    out.push({ gen: 'burst', seconds: 20, focus, count: 10, text: T.burstKeys });
    out.push(drill({ lines: 3, focus: [...focus, ...context.earlier.slice(0, 2)] }, T.drillMixed));
    if (context.hasWords) {
      out.push(words({ bias: focus, only: context.canOnly }, T.wordsNew));
      out.push({ gen: 'burst', seconds: 25, source: 'words', bias: focus, count: 10, maxLength: 7, text: T.burstWords });
      // "Giờ dồn vào phím X" chỉ đúng khi có từ chứa X. Tiếng Mã Lai và Indonesia gần như không có từ
      // nào chứa q hay x, nên màn này từng nói "tập trung vào Q" trên những dòng không có chữ Q nào.
      // Chọn phím mới ĐẦU TIÊN có từ; không phím nào có thì là một màn luyện ngón.
      if (context.oneKey) out.push(words({ bias: [context.oneKey] }, fill(T.wordsOne, { key: upper(context.oneKey) })));
      else out.push(drill({ lines: 3, focus }, T.drillAgain));
    } else {
      out.push(drill({ lines: 3, focus }, T.drillAgain));
      out.push({ gen: 'burst', seconds: 25, focus, count: 12, text: T.burstLonger });
      out.push(drill({ lines: 3, focus: [...focus, ...context.earlier.slice(0, 3)] }, T.drillWide));
    }
    out.push({ gen: 'standard', dictation: 'letters', lines: 3, focus, text: T.patternsBack });
    out.push(context.hasWords ? words({}, T.wordsAll) : drill({ lines: 3 }, T.drillAll));
    return out;
  }

  if (kind === 'review') {
    // Không có màn intro: intro phải giới thiệu MỘT phím (validator đòi `key` + `finger`), mà
    // bài ôn tập không giới thiệu phím nào. Khoá tiếng Anh cũng vào thẳng nội dung. Lời mở bài
    // đã nằm ở `intro` của cả bài rồi, nên chẳng mất gì.
    out.push(words({}, T.reviewWords1));
    out.push({ gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 7, text: T.reviewBurst });
    out.push(words({ perLine: 5 }, T.reviewWords2));
    out.push({ gen: 'standard', dictation: 'letters', lines: 3, text: T.reviewPatterns });
    out.push(words({ maxLength: 5 }, T.reviewShort));
    out.push({ gen: 'burst', seconds: 30, source: 'words', count: 14, maxLength: 9, text: T.reviewBurst2 });
    out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3, text: T.reviewClose });
    out.push(words({ perLine: 5 }, T.reviewLast));
    return out;
  }

  if (kind === 'shift') {
    out.push({ type: 'intro', key: 'shift', finger: 'LP', text: T.introShift, hint: T.pressShift });
    if (CASELESS) {
      // Không có cặp hoa/thường: màn đầu gõ chính các ký tự tầng Shift, và đánh dấu `shifted` để
      // validator công nhận Shift đã được dùng (nó không tìm được chữ hoa nào trong nội dung).
      out.push({ gen: 'shifted', newKeys: ['shift', ...step.unlocks], chars: step.unlocks, shifted: true, lines: 4,
        text: fill(T.drillShiftUnlocks || T.drillShift, { keys: step.unlocks.join(T.and) }) });
    } else {
      out.push({ gen: 'shiftpairs', newKey: 'shift', lines: 4, text: T.drillShift });
    }
    out.push(words({}, T.wordsShift));
    out.push({ type: 'intro', key: 'enter', finger: 'RP', text: T.introEnter, hint: T.pressEnterKey });
    out.push({ gen: 'names', newKey: 'enter', linebreak: 'enter', lines: 6, text: T.drillEnter });
    // Validator doi MOI phim trong `newKeys` cua bai phai duoc mot man go that gioi thieu, nen
    // ky tu mo ra nho Shift can man rieng cua no — khong the chi khai roi thoi.
    if (!CASELESS && step.unlocks && step.unlocks.length) {
      out.push({ gen: 'shifted', newKeys: step.unlocks, chars: step.unlocks, lines: 3,
        text: fill(T.drillShiftUnlocks || T.drillShift, { keys: step.unlocks.join(T.and) }) });
    }
    out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3, text: T.shiftSentences });
    out.push({ gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 7, text: T.shiftBurst });
    out.push(words({ perLine: 5 }, T.shiftWords2));
    out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3, text: T.shiftClose });
    return out;
  }

  if (kind === 'digits') {
    out.push({ type: 'intro', key: slots[0].key, finger: slots[0].finger, text: T.introDigits,
      hint: fill(T.pressToContinue, { key: slots[0].key }) });
    // Hàng số dạy theo CẶP NGÓN: mỗi ngón nhận hai chữ số, trái rồi phải, chứ không phải 1→0.
    // Bốn màn, mỗi màn một cặp ngón, đúng kỷ luật hàng phím của cả khoá.
    const pairs = [[0, 9], [1, 8], [2, 7], [3, 6]];
    pairs.forEach(([left, right], i) => {
      const keys = [slots[left].key, slots[right].key];
      out.push({ gen: 'block', newKeys: keys, lines: 3, focus: keys,
        text: fill(T.drillDigitPair, { keys: keys.join(T.and), finger: fingerName(slots[left].finger) }) });
      // Chỉ những chữ số ĐÃ dạy tới đây — hai cặp đầu là bốn ô, không phải bốn ô đầu dãy.
      if (i === 1) {
        const taught = pairs.slice(0, 2).flat().map(n => slots[n].key);
        out.push({ gen: 'burst', seconds: 20, focus: taught, count: 10, text: T.burstDigits });
      }
    });
    out.push({ gen: 'block', newKeys: [slots[4].key, slots[5].key], lines: 3,
      focus: [slots[4].key, slots[5].key], text: T.drillDigitIndex });
    if (step.shifted && step.shifted.length) {
      out.push({ gen: 'shifted', newKeys: step.shifted, chars: step.shifted, lines: 3,
        text: T.drillDigitsShifted || T.digitsAll });
    }
    out.push({ gen: 'standard', dictation: 'letters', lines: 3, focus: slots.map(s => s.key), text: T.digitsAll });
    out.push({ gen: 'burst', seconds: 30, focus: slots.map(s => s.key), count: 14, text: T.burstDigitsAll });
    out.push(words({}, T.digitsBackToWords));
    out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3, text: T.digitsClose });
    return out;
  }

  if (kind === 'edge') {
    // Sau phim mot luc, nen day theo CAP chu khong tung phim mot: mot man intro cho ca nhom roi
    // ba man cap. Cung hinh dang voi bai hang so, va vi cung mot ly do — mot bai co muoi hai man
    // intro doc nhu mot danh sach chu khong nhu mot bai hoc.
    out.push({ type: 'intro', key: slots[0].key, finger: slots[0].finger, text: T.introEdge,
      hint: fill(T.pressToContinue, { key: upper(slots[0].key) }) });
    for (let i = 0; i < slots.length; i += 2) {
      const pair = slots.slice(i, i + 2);
      const chars = pair.map(item => item.key);
      out.push({ gen: 'block', newKeys: chars, lines: 3, focus: chars,
        text: fill(T.drillEdgePair, { keys: chars.join(T.and) }) });
      if (i === 2) {
        out.push({ gen: 'burst', seconds: 20, focus: slots.slice(0, 4).map(item => item.key),
          count: 10, text: T.burstEdge });
      }
    }
    out.push({ gen: 'block', lines: 3, focus: slots.map(item => item.key), text: T.drillEdgeAll });
    out.push({ gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 8, text: T.burstEdgeWords });
    // Uu tien tu chua chinh nhung chu bai nay vua mo ra — khong thi man "quay lai voi tu"
    // cua mot bai day e-huyen lai khong co mot chu e-huyen nao.
    out.push(words({ bias: slots.map(item => item.key) }, T.edgeBackToWords));
    out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3,
      text: T.edgeClose });
    return out;
  }

  if (kind === 'prose') {
    for (let i = 0; i < 6; i += 1) {
      out.push({ gen: 'standard', dictation: context.hasSentences ? 'sentence' : 'words', lines: 3, text: T.proseLine });
    }
    out.push({ gen: 'burst', seconds: 30, source: 'words', count: 14, maxLength: 9, text: T.proseBurst });
    return out;
  }

  if (kind === 'weak') {
    // `type: 'test'` chứ không phải 'weak': validator chỉ nhận năm loại màn, và bài phím yếu là
    // một bài kiểm tra có `source: "weak-keys"` — nội dung do weak-keys.js dựng lúc chạy.
    return [{ type: 'test', seconds: step.seconds, source: 'weak-keys', minKeys: 2, text: T.weakText }];
  }

  if (kind === 'test') {
    // Bốn dòng nên cần bốn câu. Colemak tới bài kiểm tra unit 1 mới gõ được đúng ba.
    return [{ gen: 'standard', type: 'test', dictation: context.sentenceCount >= 4 ? 'sentence' : 'words',
      lines: 4, seconds: step.seconds, text: T.testText }];
  }

  throw new Error(`không biết loại bài "${kind}"`);
}

/* ---------- trải screen ---------- */
const NAMED = { shift: 'SHIFT', enter: '\n' };

// Phim chet KHONG can mot duong ong rieng: chung nam ngay trong tap phim da day, chi viec loc
// ra. Truyen chung xuong `typeableWith` la dieu kien de chu ghep (a-sac, e-sac...) duoc coi la
// go duoc — thieu buoc nay thi kho tu co dau cua mot ngon ngu bi bo qua hoan toan, va khong co
// gi bao ca.
const DEAD_CHARS = new Set(['\u00b4', '`', '^', '~', '\u00a8']);
// `symbolsLive`: dấu nào là ký tự THẬT trên bố cục này (ABNT2 không phím chết: `~` gõ ra `~`). Nó
// không mở chữ ghép, nên không được tính là phím chết — trước đây khoá đó có bài chứa ã, õ.
const LIVE = new Set(COURSE.symbolsLive || []);
const deadIn = keys => new Set([...keys].filter(key => DEAD_CHARS.has(key) && !LIVE.has(key)));
const LETTER_TEST = COURSE.letterTest ? new RegExp(COURSE.letterTest) : /^[a-z;',.\/-]$/;

function expand(screen, { keys, lessonId, index, used }) {
  // Man chep nguyen van (intro, luyen phim yeu) di thang ra: chung khong co `gen` nao de trai,
  // va viec don field ben duoi tung xoa mat `source: "weak-keys"` cua man luyen phim yeu — mot
  // truong no CAN de weak-keys.js dung noi dung luc chay.
  if (!screen.gen) return { ...screen };

  const rand = seeded(`${lessonId}:${index}:${screen.gen}`);
  const base = { ...screen };
  for (const field of ['gen', 'pattern', 'lines', 'perLine', 'bias', 'focus', 'count', 'source',
    'maxLength', 'only', 'dictation', 'chars']) delete base[field];
  if (screen.dictation) base.dictation = screen.dictation;

  if (screen.gen === 'block' || screen.gen === 'standard') {
    let lines = null;
    if (screen.gen === 'standard' && screen.dictation === 'sentence') {
      const usable = BANK.sentences.filter(line => typeableWith(line, keys, deadIn(keys)));
      if (usable.length < (screen.lines || 3)) {
        throw new Error(`${lessonId} screen ${index + 1}: chỉ có ${usable.length} câu gõ được, cần ${screen.lines || 3}`);
      }
      // Uu tien cau chua dung o bai nay; het thi moi quay vong.
      const want = screen.lines || 3;
      const fresh = shuffled(rand, usable.filter(line => !used || !used.has(line)));
      const rest = shuffled(rand, usable.filter(line => used && used.has(line)));
      lines = [...fresh, ...rest].slice(0, want);
      if (used) for (const line of lines) used.add(line);
      // Dấu kết câu của chính ngôn ngữ (`sentenceEnd`: tiếng Hindi là ।), khi phím của nó đã dạy.
      const end = COURSE.sentenceEnd && keys.has(COURSE.sentenceEnd) ? COURSE.sentenceEnd : '.';
      if (keys.has('SHIFT') && keys.has(end)) {
        lines = lines.map(line => UP(line[0]) + line.slice(1) + end);
      }
    } else if (screen.gen === 'standard' && screen.dictation === 'words') {
      lines = wordLines(rand, BANK, keys, {
        lines: screen.lines || 3, perLine: screen.perLine || 4,
        bias: screen.bias || [], only: !!screen.only, maxLength: screen.maxLength || 99,
        deadKeys: deadIn(keys)
      });
      if (!lines) throw new Error(`${lessonId} screen ${index + 1}: không đủ từ gõ được để xếp dòng`);
    } else {
      lines = (HANGUL && hangulDrill(rand, keys, { lines: screen.lines || 3, focus: screen.focus || [] }))
        || drillLines(rand, keys, { lines: screen.lines || 3, focus: screen.focus || [], letterTest: LETTER_TEST });
    }
    base.type = screen.type || screen.gen;
    base.content = lines.join('\n');
    return base;
  }

  // Bài Shift: validator đòi content PHẢI có chữ hoa (`usesKey` kiểm `\p{Lu}`), mà bộ luyện
  // ngón thường chỉ sinh chữ thường. Cặp `Aa Ss Dd` là đúng thứ bài này dạy: giữ Shift, gõ,
  // nhả — rồi gõ lại chính chữ đó không có Shift.
  if (screen.gen === 'shiftpairs') {
    const letters = [...keys].filter(key => LETTER_TEST.test(key) && UP(key) !== key);
    // Chu dac trung cua ngon ngu do len dau, roi moi den phan xao. Man nay lay 16 chu dau, va
    // mot lan xao khong may tung bo ca Ä lan Ö ra khoi bai day Shift cua tieng Duc — trong khi
    // Ä/Ö co Shift chinh la thu bai ay ton tai de day. Khong phai chuyen may rui.
    const special = letters.filter(key => !/^[a-z]$/.test(key));
    const plain = letters.filter(key => /^[a-z]$/.test(key));
    const order = [...shuffled(rand, special), ...shuffled(rand, plain)];
    const lines = [];
    const perLine = 4;
    for (let i = 0; i < (screen.lines || 4); i += 1) {
      const row = order.slice(i * perLine, i * perLine + perLine);
      if (row.length < 2) break;
      lines.push(row.map(letter => `${UP(letter)}${letter}`).join(' '));
    }
    if (!lines.length) throw new Error(`${lessonId} screen ${index + 1}: không đủ chữ để dựng cặp hoa/thường`);
    base.type = 'block';
    base.content = lines.join('\n');
    return base;
  }

  // Bài Enter: `usesKey` chỉ công nhận Enter khi màn có `linebreak: "enter"` VÀ content xuống
  // dòng thật. Một tên trên mỗi dòng là bài tập tự nhiên nhất cho việc đó.
  if (screen.gen === 'names') {
    const pool = (BANK.names || []).filter(name => typeableWith(name, keys));
    if (pool.length < 3) throw new Error(`${lessonId} screen ${index + 1}: chỉ có ${pool.length} tên gõ được`);
    const chosen = shuffled(rand, [...new Set(pool)]).slice(0, screen.lines || 6);
    base.type = 'block';
    base.content = chosen.map(name => UP(name[0]) + name.slice(1)).join('\n');
    return base;
  }

  // Nhung ky tu vua mo ra o tang Shift, xep thanh nhom ngan. Khong dung drillLines vi ham do
  // chay tren `keys` va loc bang letterTest — con day chinh xac la nhung ky tu KHONG phai chu.
  if (screen.gen === 'shifted') {
    let chars = (screen.chars || []).filter(Boolean);
    // Tiếng Hàn: jamo tầng Shift đứng một mình sẽ bị bộ gõ ghép với jamo bên cạnh; gõ chúng
    // trong âm tiết — phụ âm căng + nguyên âm đã học (빠), nguyên âm Shift sau ㅇ (얘).
    if (HANGUL) {
      const vowels = [...keys].filter(key => JAMO_VOWELS.has(key) && !chars.includes(key));
      chars = chars.map((jamo, i) => (JAMO_CONSONANTS.has(jamo)
        ? HANGUL.compose(jamo, vowels[i % Math.max(1, vowels.length)] || 'ㅏ') : HANGUL.compose('ㅇ', jamo)) || jamo);
    }
    if (!chars.length) throw new Error(`${lessonId} screen ${index + 1}: khong co ky tu nao de day`);
    const lines = [];

    if (chars.length < 3) {
      // Mot hoac hai ky tu: xep cap se ra ba dong chi co `.` — dung nghia la khong day gi.
      // Gan chung vao cuoi nhung tu ngan da go duoc, tuc dung cho chung thuc su xuat hien.
      const pool = wordsFor(BANK, keys, { maxLength: 6, deadKeys: deadIn(keys) });
      if (pool.length < 4) throw new Error(`${lessonId} screen ${index + 1}: chua du tu de dung man nay`);
      for (let i = 0; i < (screen.lines || 3); i += 1) {
        const picked = shuffled(rand, [...new Set(pool)]).slice(0, 4);
        lines.push(picked.map((word, n) => word + chars[n % chars.length]).join(' '));
      }
    } else {
      for (let i = 0; i < (screen.lines || 3); i += 1) {
        const order = shuffled(rand, chars);
        const groups = [];
        for (let j = 0; j < order.length; j += 2) groups.push(order.slice(j, j + 2).join(''));
        lines.push(groups.join(' '));
      }
    }

    base.type = 'block';
    base.content = lines.join('\n');
    return base;
  }

  if (screen.gen === 'burst') {
    const count = screen.count || 8;
    let tokens;
    if (screen.source === 'words') {
      const pool = wordsFor(BANK, keys, { bias: screen.bias || [], only: !!screen.only, maxLength: screen.maxLength || 8, deadKeys: deadIn(keys) });
      if (pool.length < count) throw new Error(`${lessonId} screen ${index + 1}: chỉ có ${pool.length} từ, cần ${count}`);
      tokens = shuffled(rand, [...new Set(pool)]).slice(0, count);
    } else {
      const focus = screen.focus || [...keys].filter(key => LETTER_TEST.test(key)).slice(0, 4);
      const combos = new Set(HANGUL ? [] : focus);
      if (HANGUL) {
        const pool = hangulSyllables(rand, keys, focus);
        // Mọi cặp rồi mọi bộ ba — hai âm tiết 러, 럴 vẫn cho đủ cụm khác nhau (러럴, 럴러, 러러럴…).
        // Dừng ngay khi đủ: pool có thể là vài trăm âm tiết, và ba vòng lồng nhau chạy hết là hàng trăm triệu lượt.
        const enough = () => combos.size >= count * 2;
        outer2: for (const a of pool) for (const b of pool) { if (enough()) break outer2; combos.add(a + b); }
        outer3: for (const a of pool) for (const b of pool) for (const c of pool) { if (enough()) break outer3; combos.add(a + b + c); }
      }
      for (let length = 2; !HANGUL && length <= 4 && combos.size < count * 2; length += 1) {
        const build = (prefix, left) => {
          if (combos.size >= count * 3) return;
          if (!left) { combos.add(prefix); return; }
          for (const key of focus) build(prefix + key, left - 1);
        };
        build('', length);
      }
      // Chỉ một phím trọng tâm (Hindi Bolnagri u2-l06) thì tổ hợp của riêng nó chỉ có kk, kkk, kkkk:
      // ghép nó với từng phím chữ đã học, hai chiều, cho đủ cụm.
      if (!HANGUL && focus.length === 1) {
        const others = [...keys].filter(key => key !== focus[0] && LETTER_TEST.test(key));
        for (const other of others) {
          if (combos.size >= count * 2) break;
          combos.add(focus[0] + other); combos.add(other + focus[0]);
        }
      }
      tokens = shuffled(rand, [...combos].filter(token => token.length > 1)).slice(0, count);
    }
    base.type = screen.type || 'burst';
    base.tokens = tokens;
    return base;
  }

  return base;   // screen chép nguyên văn (intro, weak)
}

/* ---------- ghép ---------- */
const FIELD_ORDER = ['id', 'unit', 'group', 'order', 'slug', 'title', 'summary', 'newKeys',
  'keysSoFar', 'minAccuracy', 'estMinutes', 'inputMode', 'intro', 'congrats', 'screens'];

function lessonMeta(step, index, steps) {
  const number = index + 1;
  if (step.kind === 'weak') return { title: T.titleWeak, slug: `weak-${step.unit}`, kind: 'weak', minutes: 2 };
  if (step.kind === 'test') {
    return { title: fill(T.titleTest, { unit: step.unit.slice(1) }), slug: `test-${step.unit}`, kind: 'test',
      minutes: step.seconds >= 180 ? 3 : 1 };
  }
  if (step.kind === 'review') {
    return { title: step.flavour === 'mixed' ? T.titleReviewMixed : T.titleReview,
      slug: `review-${step.unit}-${number}`, kind: 'review', minutes: 5 };
  }
  if (step.kind === 'shift') return { title: T.titleShift, slug: 'shift-and-enter', kind: 'keys', minutes: 5 };
  if (step.kind === 'digits') return { title: T.titleDigits, slug: 'number-row', kind: 'keys', minutes: 6 };
  if (step.kind === 'edge') return { title: T.titleEdge, slug: 'outer-column', kind: 'keys', minutes: 6 };
  if (step.kind === 'prose') {
    const which = steps.slice(0, index).filter(s => s.kind === 'prose').length + 1;
    return { title: fill(T.titleProse, { n: which }), slug: `prose-${which}`, kind: 'review', minutes: 6 };
  }
  const label = keyList(step.slots);
  // Tiêu đề mở bằng tên dấu câu thì viết hoa chữ đầu: "La virgule et C", không phải "la virgule…".
  const capital = text => UP(text.charAt(0)) + text.slice(1);
  return {
    title: capital(step.kind === 'first' ? fill(T.titleFirst, { keys: label }) : fill(T.titleKeys, { keys: label })),
    slug: step.slots.map(s => s.hardware.replace('Key', '').toLowerCase()).join('-'),
    kind: 'keys', minutes: 5
  };
}

function build() {
  checkFamily();
  const { steps, promoted } = promoteVowel(resolve());

  // id gán theo VỊ TRÍ SAU KHI ĐÃ XẾP LẠI, nên u1-l05 luôn là bài thứ năm của unit 1 dù nội
  // dung của nó vừa bị hoán chỗ. Người học đọc số bài, không đọc bản kế hoạch.
  const perUnit = {};
  const ids = steps.map(step => {
    perUnit[step.unit] = (perUnit[step.unit] || 0) + 1;
    return `${step.unit}-l${String(perUnit[step.unit]).padStart(2, '0')}`;
  });

  const lessons = {};
  const files = [];
  const carried = new Set([' ']);

  steps.forEach((step, index) => {
    const id = ids[index];
    const meta = lessonMeta(step, index, steps);
    const before = new Set(carried);
    for (const key of step.newKeys) carried.add(key);

    const genKeys = new Set([...before].map(k => NAMED[k] || k));
    const earlier = [...before].filter(k => LETTER_TEST.test(k));
    const afterStep = new Set([...genKeys, ...step.newKeys.map(k => NAMED[k] || k)]);
    const afterDead = deadIn(afterStep);
    const hasWords = wordsFor(BANK, afterStep, { deadKeys: afterDead }).length >= 12;
    // Ba câu, không phải một: màn câu nào cũng xếp ba dòng. Với "có một câu là đủ", BÉPO chết ở
    // bài ôn tập unit 2 — tới đó nó chưa có m, g, h, f, và cả kho chỉ còn đúng một câu gõ được.
    // Khoá nào đang chạy được thì vốn đã có ≥ 3 câu ở mọi chỗ này, nên luật mới không đổi byte nào.
    const sentenceCount = BANK.sentences.filter(line => typeableWith(line, afterStep, afterDead)).length;
    const hasSentences = sentenceCount >= 3;
    const canOnly = wordsFor(BANK, afterStep,
      { bias: step.newKeys, only: true, deadKeys: afterDead }).length >= 12;

    const oneKey = (step.slots || []).map(slot => slot.key).find(key =>
      wordsFor(BANK, afterStep, { bias: [key], only: true, deadKeys: afterDead }).length >= 4) || null;
    const blueprint = screensFor(step, { earlier, hasWords, hasSentences, sentenceCount, canOnly, oneKey });

    const keys = new Set(genKeys);
    // Song theo ca bai, khong theo tung man: do la ly do cau tung lap giua cac man canh nhau.
    const usedSentences = new Set();
    const screens = blueprint.map((screen, i) => {
      for (const key of [].concat(screen.newKey || [], screen.newKeys || [])) {
        keys.add(NAMED[key] || key);
      }
      if (screen.type === 'intro' && screen.key) keys.add(NAMED[screen.key] || screen.key);
      return expand(screen, { keys, lessonId: id, index: i, used: usedSentences });
    });

    // player.js ESCAPE `text` và `hint` (escapeHtml) — nó không bao giờ dựng HTML từ dữ liệu bài.
    // Nên `<b>` trong bảng lời dạy hiện ra NGUYÊN VĂN: "Pulsa <b>F</b> para continuar". Lỗi đó nằm
    // trong mọi khoá sinh tự động cho tới 2026-09-23. Bỏ thẻ ở đây, một chỗ, thay vì sửa từng bảng.
    for (const screen of screens) {
      for (const field of ['text', 'hint']) {
        if (typeof screen[field] === 'string') screen[field] = screen[field].replace(/<\/?b>/g, '');
      }
    }

    const unit = UNITS.find(u => u.id === step.unit);
    // Vị trí của bài TRONG unit, đọc lại từ chính mã bài đã gán. `perUnit` ở trên đã đếm xong
    // trước vòng lặp này, nên lấy nó ra dùng thì mọi bài trong cùng unit đều nhận đúng một con
    // số — tổng trừ một — và cả unit 3 rơi hết vào nhóm cuối.
    const withinUnit = Number(id.slice(-2)) - 1;
    const group = unit.groups.find(([, from, to]) => withinUnit >= from && withinUnit < to);
    if (!group) throw new Error(`${id}: bài thứ ${withinUnit + 1} của ${step.unit} không thuộc nhóm nào`);

    lessons[id] = {
      title: meta.title, newKeys: step.newKeys, screens: screens.length,
      estMinutes: meta.minutes, kind: meta.kind, ready: true,
      ...(step.seconds && meta.kind !== 'keys' ? { seconds: step.seconds } : {})
    };

    files.push({
      id,
      unit: step.unit,
      group: group[0],
      order: index + 1,
      slug: meta.slug,
      title: meta.title,
      summary: fill(T.summary[step.kind] || T.summary.keys, { keys: step.slots.length ? keyList(step.slots) : '' }),
      newKeys: step.newKeys,
      keysSoFar: [...carried],
      minAccuracy: index < 4 ? 70 : 80,
      estMinutes: meta.minutes,
      inputMode: INPUT_MODE,
      intro: fill(T.intro[step.kind] || T.intro.keys, {
        keys: step.slots.length ? keyList(step.slots) : '',
        // "A, B và C" như keyList, không phải "A và B và C và D" (bài dấu câu có bốn ngón).
        fingers: step.slots.length ? (names => (names.length <= 1 ? names.join('')
          : names.slice(0, -1).join(', ') + T.and + names[names.length - 1]))([...new Set(step.slots.map(s => fingerName(s.finger)))]) : ''
      }),
      congrats: fill(T.congrats[step.kind] || T.congrats.keys, { keys: step.slots.length ? keyList(step.slots) : '' }),
      screens
    });
  });

  // Những phím unit 1 dạy SAU hàng cơ sở, theo đúng thứ tự dạy: "G H, E I và R U" trên QWERTY,
  // "E I, G H và R U" trên AZERTY (bài nguyên âm đã bị kéo lên), "C T, S R và N M"… trên bố cục
  // khác. Trước đây câu tóm tắt unit 1 viết cứng chuỗi QWERTY, và nó sai trên mọi họ khác.
  const HOME = new Set(['KeyF', 'KeyJ', 'KeyD', 'KeyK', 'KeyS', 'KeyL', 'KeyA', 'Semicolon']);
  const reachSteps = steps.filter(step => step.unit === 'u1' && step.kind === 'keys'
    && step.slots.every(s => !HOME.has(s.hardware)));
  // Hai phím chữ thì "G H"; có dấu câu thì phải có liên từ, không thì "la virgule C" đọc như một tên.
  const reachNames = reachSteps.map(step => (step.slots.some(s => T.keyNames && T.keyNames[s.key])
    ? keyList(step.slots) : step.slots.map(s => upper(s.key)).join(' ')));
  const reach = reachNames.length <= 1 ? reachNames.join('')
    : reachNames.slice(0, -1).join(T.listSep || ', ') + T.and + reachNames[reachNames.length - 1];

  // Unit 4: MỌI phím còn lại của bố cục này (scripts/lib/unit-symbols.js). "Đã dạy" đo bằng nội
  // dung 27 bài thật, không bằng bản kế hoạch — dấu câu nào đã lọt vào câu văn thì không dạy lại.
  let symbols = null;
  if (T.symbols) {
    const taught = new Set();
    for (const file of files) {
      for (const key of file.newKeys) taught.add(key);
      for (const screen of file.screens) {
        for (const character of [...(screen.content || ''), ...(screen.tokens || []).join('')]) taught.add(character);
      }
    }
    const everything = new Set([...carried].map(key => NAMED[key] || key));
    // Kho chung của unit: chỉ những gì gõ được TRƯỚC unit. Từ cần một ký tự của chính unit (м'ясо
    // cần `'`, dzień cần `ń`) vào qua `wordsWith`, từ đúng bài dạy ký tự ấy trở đi.
    const words = wordsFor(BANK, everything, { maxLength: 8, deadKeys: deadIn(everything) });
    symbols = buildSymbolUnit({
      inputMode: INPUT_MODE,
      code: CODE, lang: LANG, layout: LAYOUT, taught, words, deadKeys: deadIn(everything), S: T.symbols, T,
      wordsWith: keys => wordsFor(BANK, new Set([...everything, ...keys]), { maxLength: 8, deadKeys: deadIn(new Set([...everything, ...keys])) }),
      live: COURSE.symbolsLive || [],
      skip: COURSE.symbolsSkip || null,
      caseless: CASELESS,
      unitIndex: UNITS.length + 1, previousLast: ids[ids.length - 1], keysSoFar: [...carried]
    });
    symbols.lessons.forEach(lesson => {
      lesson.order = ids.length + 1;
      ids.push(lesson.id);
      lessons[lesson.id] = { title: lesson.title, newKeys: lesson.newKeys, screens: lesson.screens.length,
        estMinutes: lesson.estMinutes, kind: lesson.kind, ready: true, ...(lesson.seconds ? { seconds: lesson.seconds } : {}) };
      files.push(lesson);
    });
  }

  return { steps, ids, lessons, files, promoted, reach, symbols };
}

/* ---------- chỉ mục giáo trình ---------- */
// Dòng gõ thử trên hero KHÔNG chép tay: nó là màn luyện đầu tiên của bài 1, lấy nguyên văn.
// Chép tay thì có ngày nó lệch với màn nó trỏ tới, và người mới gõ đúng dòng ở trang chủ lại
// không được ghi nhận vì nội dung không khớp.
function starterFrom(files) {
  const first = files[0];
  const index = first.screens.findIndex(screen => screen.type === 'block' && screen.content);
  if (index < 0) throw new Error('bài đầu không có màn luyện nào để lấy làm dòng gõ thử');
  return { lessonId: first.id, screen: index + 1, content: first.screens[index].content };
}

function curriculumSource({ ids, lessons, promoted, files, reach, symbols }) {
  const extra = symbols && symbols.unit ? [symbols.unit] : [];
  const extraBlocks = extra.map(unit => `    {
      id: '${unit.id}',
      index: ${unit.index},
      title: ${JSON.stringify(unit.title)},
      summary: ${JSON.stringify(unit.summary)},
      minAccuracy: ${unit.minAccuracy},
      locked: ${unit.locked},
      unlockAfter: '${unit.unlockAfter}',
      groups: [
${unit.groups.map(group => `        { id: '${group.id}', title: ${JSON.stringify(group.title)}, lessons: [${group.lessons.map(id => `'${id}'`).join(', ')}] }`).join(',\n')}
      ]
    }`);
  const unitBlocks = UNITS.map(unit => {
    const own = ids.filter(id => id.startsWith(`${unit.id}-`));
    const groups = unit.groups.map(([name, from, to]) =>
      `        { id: '${name}', title: ${JSON.stringify(T.groups[name] || name)}, lessons: [${own.slice(from, to).map(id => `'${id}'`).join(', ')}] }`);
    return `    {
      id: '${unit.id}',
      index: ${unit.index},
      title: ${JSON.stringify(T.units[unit.id].title)},
      summary: ${JSON.stringify(fill(T.units[unit.id].summary, { reach }))},
      minAccuracy: ${unit.minAccuracy},
      locked: ${unit.locked},
      unlockAfter: ${unit.unlockAfter ? `'${unit.unlockAfter}'` : 'null'},
      groups: [
${groups.join(',\n')}
      ]
    }`;
  });

  const lessonLines = ids.map(id => {
    const entry = lessons[id];
    const fields = [`title: ${JSON.stringify(entry.title)}`,
      `newKeys: ${JSON.stringify(entry.newKeys)}`,
      `screens: ${entry.screens}`, `estMinutes: ${entry.estMinutes}`,
      `kind: '${entry.kind}'`];
    if (entry.seconds) fields.push(`seconds: ${entry.seconds}`);
    fields.push('ready: true');
    return `    '${id}': { ${fields.join(', ')} }`;
  });

  const starter = starterFrom(files);
  const rerun = IS_DEFAULT ? `--lang ${LANG}` : `--lang ${LANG} --course ${CODE}`;
  return `/* data/curriculum.${CODE}.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/${LANG}.js${SLUG ? ` (families.${SLUG})` : ''} + bố cục bàn phím ${COURSE.keyboardId}
   (${LAYOUT.name}). Sửa lời dạy ở data/courses/${LANG}.js, sửa kho từ ở data/words/${LANG}.js,
   rồi chạy lại:  node scripts/build-course.js ${rerun}

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.${promoted
    ? `\n\n   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy ${keyList(promoted.slots)}
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.`
    : ''}
*/
window.TypingEaseCurriculum = {
  lang: '${LANG}',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: '${CODE}',${ENTRY.dir === 'rtl' ? `
  // Chu viet tu phai sang trai: player dat dir="rtl" cho dong can go (player.js textDir).
  dir: 'rtl',` : ''}${COURSE.typeByPosition ? `
  // Go THEO VI TRI PHIM (Chu am Dai Loan): bo go Chu am doi phim thanh chu Han nen trang khong doc
  // duoc phim vua bam. Nguoi hoc tat bo go (che do tieng Anh); player.js doi ma phim vat ly
  // (event.code) thanh ky tu cua bo cuc nay. Xem data/courses/${LANG}.js.
  typeByPosition: true,` : ''}
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: ${COURSE.keyboardId},
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: ${JSON.stringify(FAMILY.layouts)},
  progressKey: '${COURSE.progressKey}',
  badgesKey: '${COURSE.badgesKey}',
  features: [],

  units: [
${[...unitBlocks, ...extraBlocks].join(',\n')}
  ],

  lessons: {
${lessonLines.join(',\n')}
  },

  sequence: [
${ids.map(id => `    '${id}'`).join(',\n')}
  ],

  starter: {
    lessonId: '${starter.lessonId}',
    screen: ${starter.screen},
    content: ${JSON.stringify(starter.content)},
    hint: ${JSON.stringify(T.starterHint)}
  }
};
`;
}

/* ---------- chạy ---------- */
function main() {
  const result = build();
  const outDir = path.join(ROOT, 'data', 'lessons', CODE);
  const curriculumFile = path.join(ROOT, 'data', `curriculum.${CODE}.js`);
  const wanted = new Map([[curriculumFile, curriculumSource(result)]]);
  for (const lesson of result.files) {
    const ordered = {};
    for (const field of FIELD_ORDER) ordered[field] = lesson[field];
    wanted.set(path.join(outDir, `${lesson.id}.json`), serialize(ordered));
  }

  let drift = 0, written = 0;
  if (!CHECK) fs.mkdirSync(outDir, { recursive: true });
  // Số bài của unit ký hiệu thay đổi theo bố cục, nên một lần chạy có thể sinh ÍT bài hơn lần
  // trước. File thừa trong thư mục là bài không có trong chỉ mục — validator gọi là "file lạc".
  if (fs.existsSync(outDir)) {
    for (const name of fs.readdirSync(outDir)) {
      const file = path.join(outDir, name);
      if (!name.endsWith('.json') || wanted.has(file)) continue;
      if (CHECK) { drift += 1; console.error(`THỪA  ${path.relative(ROOT, file).split(path.sep).join('/')}`); }
      else { fs.unlinkSync(file); written += 1; }
    }
  }
  for (const [file, text] of wanted) {
    const current = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (current === text) continue;
    if (CHECK) { drift += 1; console.error(`LỆCH  ${path.relative(ROOT, file).split(path.sep).join('/')}`); }
    else { fs.writeFileSync(file, text); written += 1; }
  }

  if (CHECK) {
    console.log(drift ? `\n${drift}/${wanted.size} file lệch — chạy lại script rồi commit` : `\n${wanted.size} file khớp`);
    process.exit(drift ? 1 : 0);
  }
  const screens = result.files.reduce((n, lesson) => n + lesson.screens.length, 0);
  console.log(`${CODE}: ${result.files.length} bài, ${screens} screen, bố cục ${COURSE.keyboardId} (${LAYOUT.name})`);
  if (result.promoted) console.log(`      kéo bài ${keyList(result.promoted.slots)} lên trước bài ôn tập (hàng cơ sở không có nguyên âm)`);
  if (result.symbols && result.symbols.keys.length) {
    console.log(`      unit ${result.symbols.unit.index}: ${result.symbols.keys.length} ký tự còn lại · ${result.symbols.keys.map(item => item.key).join('')}`
      + (result.symbols.skipped.length ? ` · bỏ qua phím chết ${result.symbols.skipped.join('')}` : ''));
  }
  console.log(`      ${written} file đã ghi`);
}

try { main(); } catch (error) { console.error(`\nLỖI: ${error.message}\n`); process.exit(1); }
