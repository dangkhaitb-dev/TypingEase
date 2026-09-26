/*
 * scripts/lib/unit-symbols.js — unit cuối "mọi phím còn lại": dạy MỌI ký tự của bố cục mà khoá
 * chưa dùng tới.
 *
 * VÌ SAO. Kế hoạch 27 bài của build-course.js dạy theo Ô PHÍM (hàng cơ sở, hàng trên, hàng dưới,
 * hàng số, cột ngoài) ở tầng không Shift. Tầng Shift chỉ được mở cho chữ hoa. Kết quả là mỗi khoá
 * còn 8–27 ký tự người học chưa bao giờ gõ: khoá tiếng Đức không có `?`, `!`, `:`; khoá tiếng Anh
 * viết tay không có `( ) $ % & *`. Người học vào bài văn là gặp ngay chúng. typingstudy.com dạy hết
 * bàn phím, nên số bài của họ thay đổi theo bố cục (15 bài cho US, 24 cho BÉPO); unit này làm đúng
 * điều đó mà vẫn giữ nguyên hình dạng bài học của site.
 *
 * DÙNG CHUNG cho khoá sinh tự động (build-course.js gọi sau bài 27) và cho hai khoá viết tay
 * (scripts/build-unit-symbols.js ghi vào khối <auto:symbols> của curriculum.en.js/curriculum.vi.js).
 * "Đã dạy" đo bằng NỘI DUNG BÀI, không bằng `newKeys`: bài viết tay dùng `? ! @` từ unit 3 mà
 * không khai, và đòi dạy lại chúng là dạy thừa.
 *
 * KHÔNG DẠY: phím chết (một mình nó không in ra gì — `¨` của AZERTY, `ˇ` của Neo) và tầng AltGr
 * (player chưa có cách chỉ AltGr). Cả hai được liệt kê trong `skipped` để người gọi in ra.
 *
 * MỖI KÝ HIỆU Ở ĐÚNG CHỖ NÓ ĐƯỢC DÙNG — xem `usage()`: dấu câu đứng sau từ, ngoặc bao quanh từ,
 * `%` và `°` sau một con số, `$` trước nó, `_` và `-` nối hai từ, `+ =` giữa hai số. Một dòng
 * "!! ?? !? ?!" chỉ dạy vị trí phím; dòng "sao? được! (nhà)" dạy cả thói quen của ngón tay.
 */
'use strict';
const { seeded, shuffled, typeableWith } = require('./content');

const FINGER_CODE = { 1: 'LP', 2: 'LR', 3: 'LM', 4: 'LI', 5: 'LT', 6: 'RT', 7: 'RI', 8: 'RM', 9: 'RR', 10: 'RP' };
// Ký tự dấu: trên bàn phím Đức, Pháp, Tây Ban Nha… chúng là PHÍM CHẾT (gõ một mình không in ra
// gì, đợi chữ cái tiếp theo), trên bàn phím Mỹ và Ý thì là ký tự thật. File bố cục không ghi cờ
// nào phân biệt hai trường hợp, nên mặc định là phím chết — không dạy — trừ khi khoá khai chúng
// trong `symbolsLive` (data/courses/en.js khai ^ ` ~, data/courses/it.js khai ^).
const DEAD = new Set(['´', '`', '^', '~', '¨', 'ˇ', '¸', '˙', '˛', '˝', '˘']);

const plain = value => (value == null ? '' : typeof value === 'object' ? String(value.key || '') : String(value));
const fill = (template, values) => String(template ?? '')
  .replace(/\{(\w+)\}/g, (whole, name) => (name in values ? String(values[name]) : whole));

const PAIRS = { '(': ')', '[': ']', '{': '}', '<': '>', '«': '»', '“': '”', '¿': '?', '¡': '!' };
const CLOSERS = Object.fromEntries(Object.entries(PAIRS).map(([a, b]) => [b, a]));
// Dấu câu đứng SAU từ — cả bộ của chữ Ả Rập/Ba Tư/Urdu (؟ ، ؛ ۔ ٫) và của Devanagari (। ॥).
const AFTER = new Set(['.', ',', ';', ':', '!', '?', '…', '؟', '،', '؛', '۔', '٫', '।', '॥']);
const NUMBER_AFTER = new Set(['%', '°', '²', '³', 'µ', '€', '‰']);
const NUMBER_BEFORE = new Set(['$', '£', '¥', '§', '#', '№', '৳', '₹', '฿', '﷼']);
const JOIN = new Set(['_', '-', '/', '\\', '|', '–', '—']);
const MATH = new Set(['+', '=', '*', '×', '÷', '±']);

/* Các ký tự bố cục có mà khoá chưa dùng, theo thứ tự nhìn thấy trên bàn phím. */
function remainingKeys(layout, taught, live = new Set(), lang = 'en', skip = null, caseless = false) {
  const seen = new Set();
  const out = [];
  const skipped = [];
  const isDead = character => DEAD.has(character) && !live.has(character);
  layout.structure.forEach((row, rowIndex) => {
    row.forEach(entry => {
      if (!entry.hardware || entry.hardware === 'Space') return;
      [['main', false], ['shifted', true]].forEach(([field, shifted]) => {
        const character = plain(entry[field]);
        if ([...character].length !== 1 || /\s/.test(character) || seen.has(character)) return;
        seen.add(character);
        // Theo ngôn ngữ: 'İ'.toLowerCase() là 'i̇' (hai ký tự), nên İ từng bị dạy lại như một ký hiệu.
        const lower = character.toLocaleLowerCase(lang);
        if (taught.has(character) || (lower !== character && taught.has(lower))) return;
        // Chữ hoa của một chữ đã dạy thì đã gõ được bằng Shift.
        if (shifted && character.toLocaleUpperCase(lang) === character && lower !== character && seen.has(lower)) return;
        if (isDead(character)) { skipped.push(character); return; }
        // Nhãn in trên phím nhưng KHÔNG gõ ra được ở chế độ khoá này dạy — kana trên bàn phím Nhật
        // chỉ ra khi bộ gõ ở chế độ kana, còn khoá dạy romaji (`symbolsSkip` trong data/courses).
        if (skip && skip.test(character)) { skipped.push(character); return; }
        if (/\p{Cf}/u.test(character)) { skipped.push(character); return; }   // ZWJ/ZWNJ: vô hình
        // Chữ Hebrew/Ả Rập không có hoa/thường; tầng Shift của phím chữ trên bàn phím Hebrew là chữ
        // Latin IN HOA (Q W E…) — dạy chúng trong một khoá tiếng Hebrew là dạy thừa bảy bài "QQQ WWW".
        if (shifted && caseless && /\p{Lu}/u.test(character)) { skipped.push(character); return; }
        out.push({ key: character, hardware: entry.hardware, row: rowIndex,
          finger: FINGER_CODE[entry.finger] || 'RT', shifted });
      });
    });
  });
  return { keys: out, skipped };
}

/* Chia thành bài: hàng số riêng, rồi tay trái, rồi tay phải; tối đa `size` ký tự mỗi bài. Hai
   ký tự của CÙNG một ô phím luôn ở cùng một bài. */
function chunk(keys, size = 4) {
  const groups = [
    keys.filter(item => item.row === 0),
    keys.filter(item => item.row !== 0 && /^L/.test(item.finger)),
    keys.filter(item => item.row !== 0 && !/^L/.test(item.finger))
  ].filter(group => group.length);
  // Nhóm quá nhỏ thì gộp vào nhóm kế: một bài cho đúng một ký tự là một bài thừa màn.
  const merged = [];
  for (const group of groups) {
    const last = merged[merged.length - 1];
    if (last && (last.length < 3 || group.length < 3) && last.length + group.length <= size + 2) last.push(...group);
    else merged.push([...group]);
  }
  const lessons = [];
  for (const group of merged) {
    let current = [];
    const byKey = [];
    for (const item of group) {
      const same = byKey.find(list => list[0].hardware === item.hardware);
      if (same) same.push(item); else byKey.push([item]);
    }
    for (const cell of byKey) {
      if (current.length && current.length + cell.length > size) { lessons.push(current); current = []; }
      current.push(...cell);
    }
    if (current.length) lessons.push(current);
  }
  return lessons;
}

/* Một mẩu gõ có ký tự `c` ở đúng chỗ nó hay đứng. */
// `known` = những gì ĐÃ gõ được tới đúng màn này (không phải cả unit): ngoặc mở chỉ được đóng
// khi ngoặc đóng đã được dạy. `tight` cho màn burst — burst hiện từng cụm liền, không có dấu cách.
function usage(c, rand, words, known, tight = false) {
  const gap = tight ? '' : ' ';
  const word = () => words[Math.floor(rand() * words.length)];
  // Dấu nháy của tiếng Ukraina (м'ясо, п'ять), tiếng Swahili (ng'ombe) nằm TRONG từ, không phải
  // dấu trích dẫn. Kho từ có từ như thế thì dạy nó ở đó.
  // Dấu kết hợp (harakat Ả Rập/Ba Tư, matra lẻ…) không đứng một mình: đặt nó lên chữ đầu của một từ.
  if (/\p{M}/u.test(c)) {
    const host = word();
    return [...host][0] + c + [...host].slice(1).join('');
  }
  if (c === "'") {
    const inside = words.filter(item => item.includes("'"));
    if (inside.length) return inside[Math.floor(rand() * inside.length)];
  }
  // Chữ số CỦA BÀN PHÍM NÀY: bàn phím Ba Tư, Hindi, Bengali in ra ۱۲۳ / १२३ / ১২৩ ở hàng số, không
  // phải 1 2 3. Lấy mười chữ số (Nd) có trong tập phím đã dạy, xếp theo giá trị.
  const digits = [...known].filter(ch => /\p{Nd}/u.test(ch)).sort((a, b) => a.codePointAt(0) - b.codePointAt(0));
  const glyphs = digits.length >= 10 ? digits.slice(0, 10) : [...'0123456789'];
  // Bàn phím chưa gõ được đủ mười chữ số (Kedmanee Thái giữ chữ số ở tầng Shift, rải rác): khi đó
  // chỗ cần "một con số" dùng một từ, còn hơn một con số không gõ nổi.
  const hasDigits = glyphs.every(glyph => known.has(glyph));
  const number = () => (hasDigits ? String(2 + Math.floor(rand() * 97)).replace(/\d/g, d => glyphs[Number(d)]) : word());
  if (PAIRS[c] && known.has(PAIRS[c])) return `${c}${word()}${PAIRS[c]}`;
  if (CLOSERS[c] && known.has(CLOSERS[c])) return `${CLOSERS[c]}${word()}${c}`;
  if (c === '"' || c === "'" || c === '`' || c === '*') return `${c}${word()}${c}`;
  if (PAIRS[c]) return `${c}${word()}`;
  if (CLOSERS[c] || AFTER.has(c)) return `${word()}${c}`;
  if (NUMBER_AFTER.has(c)) return `${number()}${c}`;
  if (NUMBER_BEFORE.has(c)) return `${c}${number()}`;
  if (c === '@') return `${word()}@${word()}`;
  if (c === '&') return `${word()}${gap}&${gap}${word()}`;
  if (c === '^') return hasDigits ? `${number()}^${glyphs[1 + Math.floor(rand() * 3)]}` : `${word()}^${word()}`;
  if (c === '~') return `~${number()}`;
  if (JOIN.has(c)) return `${word()}${c}${word()}`;
  if (MATH.has(c)) return `${number()}${gap}${c}${gap}${number()}`;
  // Chữ cái (é, ç, ü…) hay ký hiệu hiếm (¤, µ): nếu có từ chứa nó thì dùng từ, không thì lặp.
  const containing = words.filter(item => item.includes(c));
  if (containing.length) return containing[Math.floor(rand() * containing.length)];
  return `${c}${c}${c}`;
}

function lines(rand, count, perLine, make) {
  const out = [];
  for (let i = 0; i < count; i += 1) {
    const tokens = [];
    for (let j = 0; j < perLine; j += 1) tokens.push(make(j));
    out.push(tokens.join(' '));
  }
  return out.join('\n');
}

/*
 * opts: {
 *   code, layout, taught (Set ký tự đã xuất hiện), words (mảng từ đã gõ được), deadKeys (Set),
 *   S (bảng câu `symbols` của ngôn ngữ), T (bảng câu chung: fingers, and, keyNames, pressToContinue,
 *   titleTest), unitIndex, previousLast (mã bài cuối trước unit này), keysSoFar (mảng)
 * }
 */
function buildSymbolUnit(opts) {
  const { code, layout, taught, S, T } = opts;
  const lang = opts.lang || 'en';
  const { keys, skipped } = remainingKeys(layout, taught, new Set(opts.live || []), lang,
    opts.skip ? new RegExp(opts.skip, 'u') : null, !!opts.caseless);
  if (!keys.length) return { lessons: [], unit: null, skipped, keys };
  const unitId = `u${opts.unitIndex}`;
  const known = new Set([...taught, ...keys.map(item => item.key)]);
  // Gõ được tới màn đang dựng: những gì khoá đã dạy, cộng những ký tự unit này đã giới thiệu.
  const available = new Set(taught);
  const words = [...new Set(opts.words.filter(word => /^\S{2,8}$/.test(word)))];
  if (words.length < 8) throw new Error(`${code}: chỉ có ${words.length} từ để dựng unit ký hiệu`);

  // Chỉ viết hoa khi đảo ngược được: `µ`.toUpperCase() là chữ Hy Lạp `Μ`, và tiêu đề từng ghi "£, M, % et ?".
  const upper = key => {
    const up = key.toLocaleUpperCase(lang);
    return up !== key && [...up].length === 1 && up.toLocaleLowerCase(lang) === key ? up : key;
  };
  // Dấu kết hợp in trên vòng chấm (◌َ) — đứng trần trong một tiêu đề thì nó dính vào dấu phẩy bên cạnh.
  const name = key => (T.keyNames && T.keyNames[key]) || (/\p{M}/u.test(key) ? `\u25CC${key}` : upper(key));
  const list = items => {
    const names = items.map(item => name(item.key));
    return names.length <= 1 ? names.join('') : names.slice(0, -1).join(T.listSep || ', ') + T.and + names[names.length - 1];
  };
  const fingerName = codeName => (T.fingers && T.fingers[codeName]) || codeName;
  const capital = text => text.charAt(0).toLocaleUpperCase(lang) + text.slice(1);

  const groups = chunk(keys);
  const lessons = [];
  const carried = new Set(opts.keysSoFar || []);
  const id = n => `${unitId}-l${String(n).padStart(2, '0')}`;

  groups.forEach((group, index) => {
    const lessonId = id(index + 1);
    const rand = seeded(`${code}:${lessonId}`);
    const chars = group.map(item => item.key);
    const screens = [];
    // Kho từ của RIÊNG bài này, lớn dần theo từng ký tự vừa dạy: bài dạy ё/ń/ю phải có được
    // "ещё", "dzień", "люблю" — không chỉ "ююю ю". `wordsWith` do build-course.js đưa vào (nó có
    // kho từ đầy đủ); thiếu thì dùng kho chung của unit như trước.
    let pool = words;
    const grow = () => {
      if (!opts.wordsWith) return;
      pool = [...new Set([...words, ...opts.wordsWith(new Set(available)).filter(word => /^\S{2,8}$/.test(word))])];
    };
    group.forEach((item, i) => {
      if (i === 0 || item.finger !== group[i - 1].finger || item.hardware !== group[i - 1].hardware) {
        screens.push({ type: 'intro', key: item.key, finger: item.finger,
          text: fill(S.introKey, { key: name(item.key), finger: fingerName(item.finger), shift: item.shifted ? S.introKeyShift : '' }),
          hint: fill(T.pressToContinue, { key: upper(item.key) }).replace(/<\/?b>/g, '') });
      }
      available.add(item.key);
      grow();
      screens.push({ type: 'block', newKey: item.key, text: fill(S.drillOne, { key: name(item.key) }),
        content: lines(rand, 3, 4, j => (j === 0 && !/\p{M}/u.test(item.key) ? `${item.key}${item.key} ${item.key}` : usage(item.key, rand, pool, available))) });
    });
    const mixed = (tight = false) => usage(chars[Math.floor(rand() * chars.length)], rand, pool, available, tight);
    const tokens = [];
    for (let guard = 0; tokens.length < 10 && guard < 200; guard += 1) {
      const token = mixed(true);
      if (!tokens.includes(token)) tokens.push(token);
    }
    // Kho từ nhỏ thì không đủ cụm khác nhau; lặp lại còn hơn một màn burst dưới 4 cụm.
    while (tokens.length && tokens.length < 6) tokens.push(tokens[tokens.length % Math.max(1, tokens.length)]);
    screens.push({ type: 'burst', seconds: 25, text: S.burst, tokens });
    screens.push({ type: 'block', text: S.together, content: lines(rand, 3, 4, mixed) });
    screens.push({ type: 'standard', dictation: 'words', text: S.inWords,
      content: lines(rand, 3, 5, j => (j % 2 ? pool[Math.floor(rand() * pool.length)] : mixed())) });

    for (const character of chars) carried.add(character);
    const title = group.every(item => item.row === 0) && group.length > 4
      ? S.titleNumberRow : capital(fill(S.titleKeys, { keys: list(group) }));
    lessons.push({
      id: lessonId, unit: unitId, group: 'symbols', order: 0, slug: `symbols-${index + 1}`,
      title, summary: fill(S.summaryKeys, { keys: list(group) }), newKeys: chars, keysSoFar: [...carried],
      minAccuracy: 80, estMinutes: 5, inputMode: opts.inputMode || 'ascii',
      // "Mọi phím đều là Shift + phím đã biết" chỉ đúng khi cả bài đều ở tầng Shift. Phím 105 của
      // AZERTY (`<`) là một ô phím mới thật, và câu ấy từng nói sai về nó.
      intro: fill(S.introLesson, { keys: list(group), shiftNote: group.every(item => item.shifted) ? S.shiftNote
        : group.some(item => item.shifted) ? (S.shiftNoteMixed || '') : '' }).trim(),
      congrats: fill(S.congratsKeys, { keys: list(group) }), screens, kind: 'keys'
    });
  });

  // Ôn tập: mọi ký hiệu của unit trộn vào từ và số, rồi một bài kiểm tra có giờ.
  const all = keys.map(item => item.key);
  const rand = seeded(`${code}:${unitId}:review`);
  const any = (tight = false) => usage(all[Math.floor(rand() * all.length)], rand, words, known, tight);
  const reviewScreens = [];
  for (let i = 0; i < 5; i += 1) {
    reviewScreens.push({ type: 'standard', dictation: 'words', text: i === 0 ? S.reviewFirst : S.reviewLine,
      content: lines(rand, 3, 5, j => (j % 2 ? words[Math.floor(rand() * words.length)] : any())) });
  }
  const burst = [];
  for (let guard = 0; burst.length < 14 && guard < 300; guard += 1) { const token = any(true); if (!burst.includes(token)) burst.push(token); }
  while (burst.length && burst.length < 6) burst.push(burst[burst.length % Math.max(1, burst.length)]);
  reviewScreens.splice(2, 0, { type: 'burst', seconds: 30, text: S.burst, tokens: burst });
  lessons.push({
    id: id(groups.length + 1), unit: unitId, group: 'finish', order: 0, slug: `review-${unitId}`,
    title: S.titleReview, summary: S.summaryReview, newKeys: [], keysSoFar: [...carried],
    minAccuracy: 80, estMinutes: 5, inputMode: opts.inputMode || 'ascii', intro: S.introReview, congrats: S.congratsReview,
    screens: reviewScreens, kind: 'review'
  });
  lessons.push({
    id: id(groups.length + 2), unit: unitId, group: 'finish', order: 0, slug: `test-${unitId}`,
    title: fill(T.titleTest, { unit: opts.unitIndex }), summary: S.summaryTest, newKeys: [], keysSoFar: [...carried],
    minAccuracy: 80, estMinutes: 2, inputMode: opts.inputMode || 'ascii', intro: S.introTest, congrats: S.congratsTest,
    screens: [{ type: 'test', dictation: 'words', seconds: 120, text: S.testText,
      content: lines(rand, 4, 6, j => (j % 2 ? words[Math.floor(rand() * words.length)] : any())) }],
    kind: 'test', seconds: 120
  });

  // Nội dung phải gõ được bằng đúng những gì đã dạy — kiểm ngay tại đây, không đợi validator.
  const typeable = new Set([...known, ' ', 'SHIFT', '\n']);
  for (const lesson of lessons) {
    for (const screen of lesson.screens) {
      const text = [screen.content || '', ...(screen.tokens || [])].join(' ');
      if (!typeableWith(text.replace(/\n/g, ' '), typeable, opts.deadKeys || new Set())) {
        const bad = [...text].filter(ch => !typeableWith(ch, typeable, opts.deadKeys || new Set()) && ch !== '\n');
        throw new Error(`${code} ${lesson.id}: màn có ký tự chưa gõ được: ${[...new Set(bad)].join(' ')}`);
      }
    }
  }

  const unit = {
    id: unitId, index: opts.unitIndex, title: S.unitTitle,
    summary: fill(S.unitSummary, { count: all.length }),
    minAccuracy: 80, locked: true, unlockAfter: opts.previousLast,
    groups: [
      { id: 'symbols', title: S.groupSymbols, lessons: lessons.filter(l => l.group === 'symbols').map(l => l.id) },
      { id: 'finish', title: S.groupFinish, lessons: lessons.filter(l => l.group === 'finish').map(l => l.id) }
    ]
  };
  return { lessons, unit, skipped, keys };
}

module.exports = { buildSymbolUnit, remainingKeys };
