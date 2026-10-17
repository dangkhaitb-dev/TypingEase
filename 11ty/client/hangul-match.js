(function (global) {
  'use strict';
  // Korean 2-set (두벌식) matching — the same seam as telex-match.js, for the same reason.
  //
  // With a Korean IME on, the field never holds the jamo that were pressed: ㅎ ㅏ ㄴ arrive as
  // "ㅎ" → "하" → "한", rewritten in place. So the comparison is still per character, but a
  // character may be "on its way" (pending) instead of wrong. Two kinds of pending:
  //   - a PREFIX of the target syllable: "ㅎ" or "하" on the way to "한";
  //   - a BORROWED FINAL: typing "하나", the field shows "한" after the ㄴ — the IME has put the
  //     next syllable's initial under the current one, and gives it back when the vowel ㅏ lands.
  //     Same with a double final: "안자" passes through "앉".
  // Only the LAST character of the field can be pending; anything earlier is settled.
  //
  // Errors are counted per word (space-separated), exactly like Telex counts per syllable.
  // API mirrors TypingEaseTelex so player.js can swap one engine for the other.

  const BASE = 0xac00, LAST = 0xd7a3;
  const L = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  const V = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
  const T = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  // Compound vowels and finals are two key presses on a 2-set keyboard.
  const SPLIT = {
    'ㅘ': ['ㅗ', 'ㅏ'], 'ㅙ': ['ㅗ', 'ㅐ'], 'ㅚ': ['ㅗ', 'ㅣ'], 'ㅝ': ['ㅜ', 'ㅓ'], 'ㅞ': ['ㅜ', 'ㅔ'],
    'ㅟ': ['ㅜ', 'ㅣ'], 'ㅢ': ['ㅡ', 'ㅣ'],
    'ㄳ': ['ㄱ', 'ㅅ'], 'ㄵ': ['ㄴ', 'ㅈ'], 'ㄶ': ['ㄴ', 'ㅎ'], 'ㄺ': ['ㄹ', 'ㄱ'], 'ㄻ': ['ㄹ', 'ㅁ'],
    'ㄼ': ['ㄹ', 'ㅂ'], 'ㄽ': ['ㄹ', 'ㅅ'], 'ㄾ': ['ㄹ', 'ㅌ'], 'ㄿ': ['ㄹ', 'ㅍ'], 'ㅀ': ['ㄹ', 'ㅎ'], 'ㅄ': ['ㅂ', 'ㅅ']
  };
  const COMBINE = {};
  for (const [joined, [a, b]] of Object.entries(SPLIT)) COMBINE[a + b] = joined;
  // Which Latin key each jamo sits on (2-set). Used only to recognise a missing IME.
  const LATIN = {
    'ㅂ': 'q', 'ㅈ': 'w', 'ㄷ': 'e', 'ㄱ': 'r', 'ㅅ': 't', 'ㅛ': 'y', 'ㅕ': 'u', 'ㅑ': 'i', 'ㅐ': 'o', 'ㅔ': 'p',
    'ㅁ': 'a', 'ㄴ': 's', 'ㅇ': 'd', 'ㄹ': 'f', 'ㅎ': 'g', 'ㅗ': 'h', 'ㅓ': 'j', 'ㅏ': 'k', 'ㅣ': 'l',
    'ㅋ': 'z', 'ㅌ': 'x', 'ㅊ': 'c', 'ㅍ': 'v', 'ㅠ': 'b', 'ㅜ': 'n', 'ㅡ': 'm',
    'ㅃ': 'Q', 'ㅉ': 'W', 'ㄸ': 'E', 'ㄲ': 'R', 'ㅆ': 'T', 'ㅒ': 'O', 'ㅖ': 'P'
  };

  const nfc = text => String(text == null ? '' : text).normalize('NFC');
  const isSyllable = character => {
    const code = String(character).codePointAt(0);
    return code >= BASE && code <= LAST;
  };
  function parts(character) {
    if (!isSyllable(character)) return null;
    const index = character.codePointAt(0) - BASE;
    return { l: L[Math.floor(index / 588)], v: V[Math.floor((index % 588) / 28)], t: T[index % 28] };
  }
  const compose = (l, v, t = '') => {
    const li = L.indexOf(l), vi = V.indexOf(v), ti = T.indexOf(t);
    if (li < 0 || vi < 0 || ti < 0) return '';
    return String.fromCharCode(BASE + (li * 21 + vi) * 28 + ti);
  };
  const split = jamo => SPLIT[jamo] || (jamo ? [jamo] : []);

  // The physical keys for one character: "한" → ㅎ ㅏ ㄴ, "왜" → ㅇ ㅗ ㅐ, "닭" → ㄷ ㅏ ㄹ ㄱ.
  function keysFor(character) {
    const p = parts(character);
    if (!p) return split(character).length ? split(character) : [character];
    return [p.l, ...split(p.v), ...split(p.t)];
  }

  // Every value the field legally passes through while this character is composed.
  function steps(character) {
    const p = parts(character);
    if (!p) return [character];
    const list = [p.l];
    const vowel = split(p.v);
    list.push(compose(p.l, vowel[0]));
    if (vowel.length > 1) list.push(compose(p.l, p.v));
    const final = split(p.t);
    if (final.length) list.push(compose(p.l, p.v, final[0]));
    if (final.length > 1) list.push(character);
    list.push(character);
    return [...new Set(list.filter(Boolean))];
  }
  const isIntermediate = (typed, target) => typed !== target && steps(target).includes(typed);

  // "한" while typing "하나": the next syllable's initial sits under this one for a moment.
  function isBorrowed(typed, target, next) {
    const a = parts(typed), b = parts(target), n = parts(next);
    if (!a || !b || !n || a.l !== b.l || a.v !== b.v) return false;
    const wanted = b.t ? COMBINE[b.t + n.l] : n.l;
    return Boolean(wanted) && a.t === wanted;
  }

  const isBoundary = character => character === ' ' || character === '\n';

  function compare(typedText, targetText) {
    const typed = [...nfc(typedText)];
    const target = [...nfc(targetText)];
    const states = [];
    let ok = 0, bad = 0, pending = 0;
    typed.forEach((character, i) => {
      const want = target[i];
      const last = i === typed.length - 1;
      let state;
      if (want === undefined) state = 'bad';
      else if (character === want) state = 'ok';
      else if (last && (isIntermediate(character, want) || isBorrowed(character, want, target[i + 1]))) state = 'pending';
      else state = 'bad';
      states.push(state);
      if (state === 'ok') ok += 1; else if (state === 'bad') bad += 1; else pending += 1;
    });
    let tokens = 0, badTokens = 0, hasBad = false, length = 0;
    const close = () => { if (length) { tokens += 1; if (hasBad) badTokens += 1; } hasBad = false; length = 0; };
    typed.forEach((character, i) => {
      if (isBoundary(character)) { close(); return; }
      length += 1;
      if (states[i] === 'bad') hasBad = true;
    });
    close();
    return {
      states, ok, bad, pending, tokens, badTokens,
      accuracy: ok + bad ? Math.round(ok / (ok + bad) * 100) : 100,
      complete: typed.length >= target.length && bad === 0 && pending === 0
    };
  }

  // No IME: the field fills with Latin letters ("gks" for "한") — or, with some IMEs in a broken
  // state, with loose jamo ("ㅎㅏㄴ"). Either one, on a finished word, means composition is off.
  function looksUncomposed(typedToken, targetToken) {
    const typed = nfc(typedToken), target = nfc(targetToken);
    if (!typed || !target || typed === target) return false;
    const keys = [...target].flatMap(keysFor);
    return typed === keys.join('') || typed === keys.map(key => LATIN[key] || key).join('');
  }

  // There is no "without diacritics" form of Hangul; the fallback types the same text.
  const toAscii = text => nfc(text);

  global.TypingEaseHangul = { nfc, parts, compose, keysFor, steps, isIntermediate, isBorrowed, compare, looksUncomposed, toAscii, isSyllable, LATIN };
})(typeof window !== 'undefined' ? window : globalThis);
