/* scripts/lessons-en/u1-l08.js — R and U.
 * Last new keys of Unit 1. Word count reaches 306 and the sentence bank opens up, so this is
 * the first lesson that can end on whole sentences rather than word lists.
 */
module.exports = {
  slug: 'r-and-u',

  summary: 'The last two keys of the unit, and the first complete English sentences.',

  intro: 'R and U are index-finger reaches upward — the same fingers that already stretch inward for '
    + 'G and H, now going up instead. That makes them the busiest fingers on the keyboard, which is '
    + 'exactly why touch typing assigns them the most common letters. After this lesson you will have '
    + 'fifteen keys, and enough of the language to type real sentences rather than lists of words.',

  congrats: 'Fifteen keys, and you have typed English sentences without looking at your hands. The rest '
    + 'of the alphabet is the next unit, but the hard part — trusting your fingers to know where they '
    + 'are — is already behind you.',

  screens: [
    {
      type: 'intro', key: 'r', finger: 'LI',
      text: 'Left index finger, up from F. This finger now covers four keys: F, G, R and later more. '
        + 'Each one is a different direction from the same starting point.',
      hint: 'Press R to continue'
    },
    {
      gen: 'block', newKey: 'r', lines: 3, focus: ['r', 'f', 'g'],
      text: 'R, F, G — up, home, inward. Three directions from one bump.'
    },
    {
      type: 'intro', key: 'u', finger: 'RI',
      text: 'Right index finger, up from J. The mirror of R, and the last new key in this unit.',
      hint: 'Press U to continue'
    },
    {
      gen: 'block', newKey: 'u', lines: 3, focus: ['u', 'j', 'h'],
      text: 'U, J, H. If the reaches start to blur together, slow down until each one lands deliberately.'
    },
    {
      gen: 'burst', seconds: 20, source: 'words', bias: ['r', 'u'], count: 10, maxLength: 6,
      text: 'Words with the new keys. Both of them appear constantly in English, so this will feel '
        + 'natural quickly.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['r'],
      text: 'R first. It follows almost every consonant in English, so the reach rarely happens in isolation.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['u'],
      text: 'Now U, which usually arrives just after a consonant too. Let the pairs flow rather than '
        + 'typing each letter separately.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 7,
      text: 'Everything you have, as a burst. Fifteen keys is already most of what ordinary English needs.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Longer lines. Try to keep your eyes a word ahead of your fingers — that is where real speed '
        + 'comes from.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 2,
      text: 'Your first complete sentences. No capital letters or full stops yet — Shift and the full '
        + 'stop come in Unit 2 — but these are real English, typed without looking.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Last screen of the last new-key lesson in this unit. Next comes a drill built from '
        + 'whichever keys you personally keep missing.'
    }
  ]
};
