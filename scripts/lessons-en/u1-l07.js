/* scripts/lessons-en/u1-l07.js — E and I.
 * The lesson where the word count jumps from 54 to 170: two vowels turn a set of letters
 * into a language. Almost every drill here can now be words rather than patterns.
 */
module.exports = {
  slug: 'e-and-i',

  summary: 'Two vowels, one row up — and suddenly most of what you can type is real English.',

  intro: 'E is the most common letter in English and I is not far behind, so these two reaches will '
    + 'end up being among the most worn-in movements you own. Both are upward, with the middle fingers, '
    + 'from D and K. As before: reach, press, return. Adding these two keys roughly triples how much '
    + 'English you can write, which you will notice within a screen or two.',

  congrats: 'That is the moment the course stops feeling like exercises. With E and I you can write '
    + 'hundreds of real words, and from here every lesson is mostly reading and typing rather than drilling.',

  screens: [
    {
      type: 'intro', key: 'e', finger: 'LM',
      text: 'Left middle finger, up and slightly left from D. The most common letter in the language — '
        + 'this reach is worth getting exactly right.',
      hint: 'Press E to continue'
    },
    {
      gen: 'block', newKey: 'e', lines: 3, focus: ['e', 'd', 's'],
      text: 'E then D, up and back. The finger should return far enough to feel D under it again.'
    },
    {
      type: 'intro', key: 'i', finger: 'RM',
      text: 'Right middle finger, up from K. Same movement mirrored, and the last of the four reaches '
        + 'this unit teaches.',
      hint: 'Press I to continue'
    },
    {
      gen: 'block', newKey: 'i', lines: 3, focus: ['i', 'k', 'l'],
      text: 'I then K. If your whole hand lifts, the reach is too big — only the finger needs to travel.'
    },
    {
      gen: 'burst', seconds: 20, source: 'words', bias: ['e'], count: 10, maxLength: 6,
      text: 'Words already, rather than letter patterns. That is what two vowels buy you.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['e', 'i'],
      text: 'Both new keys in real words. Read each word whole; your fingers can handle the spelling.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['i'],
      text: 'Weighted towards I. It appears in more English words than any consonant.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['e', 'i'], count: 12, maxLength: 6,
      text: 'A longer burst. If you make a mistake, keep going — stopping to feel bad about it costs '
        + 'more than the mistake did.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['e', 'i', 'd', 'k'],
      text: 'One pattern screen to check the return. Middle fingers up and back, index fingers never moving.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Longer lines now that there are enough words to fill them. Keep an even pace across the whole line.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Last screen. Two more keys next lesson and Unit 1 is done.'
    }
  ]
};
