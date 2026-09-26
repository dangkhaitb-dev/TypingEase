#!/usr/bin/env node
/*
 * scripts/test-hangul.js — kiểm hangul-match.js bằng một bộ gõ 2-set giả lập.
 *
 * Chạy: node scripts/test-hangul.js
 *
 * Bộ giả lập làm đúng việc một IME tiếng Hàn làm với ô nhập: nhận từng jamo, ghép vào âm tiết
 * đang dở, và VIẾT LẠI phần đuôi của ô. Sau MỖI phím, compare() không được chấm một ký tự nào là
 * sai khi người gõ gõ đúng — kể cả lúc phụ âm cuối đang "mượn tạm" của âm tiết sau ("한" giữa
 * đường tới "하나"). Và gõ sai một phím thì phải có ký tự sai.
 */
'use strict';
require('../hangul-match.js');
const H = globalThis.TypingEaseHangul;

const CONSONANTS = new Set('ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ');
const FINAL_OK = new Set('ㄱㄲㄴㄷㄹㅁㅂㅅㅆㅇㅈㅊㅋㅌㅍㅎ');   // ㄸ ㅃ ㅉ không làm phụ âm cuối
const PAIR = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ',
  'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ',
  'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };
const UNPAIR = Object.fromEntries(Object.entries(PAIR).map(([k, v]) => [v, [...k]]));

function ime(keys) {
  let done = '', l = '', v = '', t = '';
  const shown = () => done + (l && v ? H.compose(l, v, t) : l || v);
  const commit = () => { done += l && v ? H.compose(l, v, t) : l || v; l = v = t = ''; };
  const trail = [];
  for (const key of keys) {
    if (key === ' ') { commit(); done += ' '; trail.push(shown()); continue; }
    if (CONSONANTS.has(key)) {
      if (!l && !v) l = key;
      else if (l && !v) { commit(); l = key; }
      else if (!l && v) { commit(); l = key; }
      else if (!t) { if (FINAL_OK.has(key)) t = key; else { commit(); l = key; } }
      else if (PAIR[t + key]) t = PAIR[t + key];
      else { commit(); l = key; }
    } else {
      if (l && !v) v = key;
      else if (l && v && !t && PAIR[v + key]) v = PAIR[v + key];
      else if (l && v && t) {
        // Phụ âm cuối nhảy sang âm tiết mới; phụ âm cuối kép thì chỉ nửa sau nhảy.
        let move;
        if (UNPAIR[t]) { [t, move] = UNPAIR[t]; } else { move = t; t = ''; }
        commit(); l = move; v = key;
      } else { commit(); v = key; }
    }
    trail.push(shown());
  }
  return trail;
}

let failures = 0;
const check = (label, condition, detail = '') => {
  if (!condition) { failures += 1; console.error(`FAIL ${label} ${detail}`); }
};

const WORDS = ['하나', '한국', '안자', '앉아', '왜', '닭', '읽다', '사람 사랑', '감사합니다', '학교에 가요', '없어요', '괜찮아'];
for (const target of WORDS) {
  const keys = [...target].flatMap(character => (character === ' ' ? [' '] : H.keysFor(character)));
  const trail = ime(keys);
  trail.forEach((value, i) => {
    const view = H.compare(value, target);
    check(`${target} @${i + 1} "${value}"`, view.bad === 0, JSON.stringify(view.states));
  });
  const end = H.compare(trail[trail.length - 1], target);
  check(`${target} complete`, end.complete, trail[trail.length - 1]);
}

// Gõ sai phải bị bắt: "하나" mà gõ ㅎ ㅓ.
check('wrong vowel is bad', H.compare('허', '하나').bad === 1);
// Không có IME: "한" thành "gks".
check('no IME detected', H.looksUncomposed('gks', '한'));
check('keysFor 닭', H.keysFor('닭').join('') === 'ㄷㅏㄹㄱ');

if (failures) { console.error(`\n${failures} lỗi`); process.exit(1); }
console.log(`KẾT QUẢ: PASS — ${WORDS.length} từ, mọi bước gõ đều không bị chấm sai oan`);
