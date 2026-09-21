/* scripts/lessons-en/u2-l03.js — C and N.
 * First trip to the bottom row for the left hand, and N is the last really common letter the
 * course is missing. Twelve screens rather than eleven: downward reaches are less natural than
 * upward ones, so this lesson gets an extra drill before it moves on to words.
 */
module.exports = {
  slug: 'c-and-n',

  summary: 'Down to the bottom row, and the last of the very common consonants.',

  intro: 'Everything you have reached for so far has been above the home row. C and N go the other '
    + 'way, and the movement is different: the finger curls under rather than stretching out, and the '
    + 'hand wants to drop with it. Keep the wrist where it is and let the finger travel alone. N is '
    + 'the sixth most common letter in English, so this reach is one of the most valuable in the course.',

  congrats: 'You now have every letter in and, in, on, no, not and can — the joints that hold English '
    + 'sentences together. The bottom row is the least comfortable row on the keyboard, and you have '
    + 'just made a start on it.',

  screens: [
    {
      type: 'intro', key: 'c', finger: 'LM',
      text: 'Left middle finger, curling down and slightly inward from D. It is a shorter movement than '
        + 'it looks — if you are moving your whole hand, you are reaching too far.',
      hint: 'Press C to continue'
    },
    {
      gen: 'block', newKey: 'c', lines: 3, focus: ['c', 'd', 'e', 's'],
      text: 'C and D, down and back. The middle finger now covers three rows on its own.'
    },
    {
      type: 'intro', key: 'n', finger: 'RI',
      text: 'Right index finger, down and inward from J. Your busiest finger takes on a sixth key — and '
        + 'this one is worth the trouble, because N turns up in almost every sentence.',
      hint: 'Press N to continue'
    },
    {
      gen: 'block', newKey: 'n', lines: 3, focus: ['n', 'j', 'h', 'u'],
      text: 'N and J. Curl the finger down rather than pushing the hand forward, and let it come back '
        + 'to the bump every time.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['c', 'n', 'd', 'j'],
      text: 'Both new keys against their home keys. This is the drill that teaches the return — do it '
        + 'slowly enough that you feel the bump each time.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['c', 'n', 'd', 'j'], count: 10,
      text: 'The same movement under a little time pressure. Accuracy first; the clock is there for '
        + 'rhythm, not for speed.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['n'], only: true,
      text: 'N first, because you will type it more than almost anything else. Watch for the nd and in '
        + 'pairs — they come up constantly.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['c'], only: true,
      text: 'Now C, which rarely stands alone: it arrives with H, K or L right behind it more often '
        + 'than not.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['c', 'n'], only: true, count: 12, maxLength: 6,
      text: 'Short words with both keys. If your hand lifts off the home row between words, you are '
        + 'working harder than you need to.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Twenty-one keys, mixed. Most of the words on this screen were impossible for you two '
        + 'lessons ago.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Sentences with real grammar in them now, not just strings of nouns. Keep your eyes a word '
        + 'ahead of your hands.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Last screen. Next lesson finishes the bottom row for your index and middle fingers.'
    }
  ]
};
