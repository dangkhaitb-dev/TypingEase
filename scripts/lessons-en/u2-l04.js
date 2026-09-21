/* scripts/lessons-en/u2-l04.js — M and V.
 * Second bottom-row lesson, and the one that finishes the letters an ordinary sentence needs:
 * 1015 words typeable after it, against 26 at the end of u1-l04. Everything left in the unit
 * is a letter you can go a whole paragraph without.
 */
module.exports = {
  slug: 'm-and-v',

  summary: 'Two more bottom-row reaches — and after them, most of written English is within reach.',

  intro: 'M and V are the second pair on the bottom row, and they go to fingers that have already '
    + 'learned the movement: the right index that curls down for N, and the left index that curls '
    + 'down and inward. V is the awkward one — it sits inward from F, so the finger travels down and '
    + 'across at the same time. Take it slowly and it will settle within a screen or two.',

  congrats: 'That is every letter in every one of the hundred most common English words except a '
    + 'handful. From here the course is less about new keys and more about getting quicker on the '
    + 'ones you have.',

  screens: [
    {
      type: 'intro', key: 'm', finger: 'RI',
      text: 'Right index finger, down and inward from J — one key further along than N. Same curl, '
        + 'slightly longer reach, same return to the bump afterwards.',
      hint: 'Press M to continue'
    },
    {
      gen: 'block', newKey: 'm', lines: 3, focus: ['m', 'n', 'j', 'h'],
      text: 'M and N side by side, because they are next to each other on the keyboard and easy to '
        + 'confuse for the first few minutes.'
    },
    {
      type: 'intro', key: 'v', finger: 'LI',
      text: 'Left index finger, down and inward from F. The hardest reach of the lesson: down and '
        + 'across at once, with the finger crossing under the hand rather than out from it.',
      hint: 'Press V to continue'
    },
    {
      gen: 'block', newKey: 'v', lines: 3, focus: ['v', 'c', 'f', 'd'],
      text: 'V and C together, the two bottom-row keys your left hand now owns. Let the finger come '
        + 'back to F between each one.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['m', 'v', 'n', 'c'], count: 10,
      text: 'The whole bottom row you know so far, both hands. These four keys are the ones people '
        + 'most often type with the wrong finger.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['m'], only: true,
      text: 'Words with M. It opens a lot of short common words, so this reach pays for itself faster '
        + 'than most.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['v'], only: true,
      text: 'Now V, which is rarer — but it sits in have, give and live, and you are not getting '
        + 'through a paragraph without those.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['m', 'v'], only: true, count: 12, maxLength: 6,
      text: 'Short words with both keys. Keep the wrists still; all of this movement belongs to the '
        + 'fingers.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['v', 'm', 'c', 'n'],
      text: 'Bottom-row patterns, to make sure each key is getting its own finger. If two of them feel '
        + 'identical, slow down until they do not.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Everything, five words to a line. This is close to the full alphabet in practice, if not '
        + 'yet on paper.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Ordinary sentences, typed with no capitals and no full stops. The next lesson has no new '
        + 'keys at all — it is there to make all of this automatic.'
    }
  ]
};
