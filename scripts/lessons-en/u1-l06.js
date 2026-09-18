/* scripts/lessons-en/u1-l06.js — G and H.
 * The first reach off the home row: both index fingers move inward one key. Word count
 * roughly doubles, from 26 to 54 — still thin, so the drills lean on patterns as much as words.
 */
module.exports = {
  slug: 'g-and-h',

  summary: 'The index fingers reach inward — the first time your fingers leave home and come back.',

  intro: 'Everything so far has been one finger, one key, no movement. G and H change that: both index '
    + 'fingers stretch inward by one key, then return. The returning is the part that matters. If your '
    + 'index finger stays on G after typing it, the next letter it needs will be wrong — so the reach '
    + 'and the return are one single movement, not two.',

  congrats: 'Your first reach, and your first return. That pattern — leave, press, come back — is every '
    + 'remaining lesson in miniature. The next one is the same movement upward instead of inward.',

  screens: [
    {
      type: 'intro', key: 'g', finger: 'LI',
      text: 'Left index finger, one key to the right of F. Stretch, press, and let the finger fall back '
        + 'onto its bump — you should be able to feel that you have landed.',
      hint: 'Press G to continue'
    },
    {
      gen: 'block', newKey: 'g', lines: 3, focus: ['g', 'f', 'd'],
      text: 'G then F, over and over. The point of this drill is the return, not the reach.'
    },
    {
      type: 'intro', key: 'h', finger: 'RI',
      text: 'Right index finger, one key to the left of J. The mirror image — and H is one of the most '
        + 'common letters in English, so this reach will be well worn in by the end of the course.',
      hint: 'Press H to continue'
    },
    {
      gen: 'block', newKey: 'h', lines: 3, focus: ['h', 'j', 'k'],
      text: 'H then J. Same movement, other hand. Keep the little fingers resting where they belong.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['g', 'h', 'f', 'j'], count: 10,
      text: 'Both reaches, alternating. This is the busiest your index fingers have been so far.'
    },
    {
      gen: 'block', lines: 3, focus: ['g', 'h', 'a', 's'],
      text: 'Reaches mixed with the keys you already know, which is how they will actually appear in words.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['g', 'h'],
      text: 'Real words with the new keys in them. Twice as many as the last lesson had, and they are '
        + 'starting to sound like English.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['h'], count: 10, maxLength: 6,
      text: 'A burst weighted towards H. It is the fourth most common consonant in English — worth the drill.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['g'],
      text: 'Now G. Less common than H, and a slightly awkward stretch, so it gets its own screen.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['g', 'h', 'f', 'j'],
      text: 'Back to patterns for a moment, to check the return is still happening. Index fingers on '
        + 'their bumps between every reach.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Everything you have, mixed. Ten keys under your fingers and you have not moved your hands once.'
    }
  ]
};
