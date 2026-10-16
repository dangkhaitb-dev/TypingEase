/* scripts/lessons-en/u2-l07.js — B and X.
 * The last two letters the left hand has to learn, and the two that most often end up under the
 * wrong finger: B is the longest reach the left index makes, and X sits where people expect the
 * middle finger rather than the ring finger to go.
 */
module.exports = {
  slug: 'b-and-x',

  summary: 'The last two letters for the left hand, and the two most often typed with the wrong finger.',

  intro: 'B is the furthest the left index finger ever travels — down a row and two keys inward — and '
    + 'X sits below S, which means the ring finger, not the middle one. Both are commonly learned '
    + 'wrong and then stay wrong for years, because nothing about typing them badly feels like an '
    + 'error. Get them on the right fingers now, while there is no habit to undo.',

  congrats: 'Every letter except Z is now yours, and the left hand is finished entirely. X is rare '
    + 'enough that you may not meet it again for several screens, but B will be along in the very '
    + 'next sentence you type.',

  screens: [
    {
      type: 'intro', key: 'b', finger: 'LI',
      text: 'Left index finger, down a row and two keys inward from F. It is the longest reach in the '
        + 'alphabet, and the only one where the finger crosses well past the middle of the keyboard.',
      hint: 'Press B to continue'
    },
    {
      gen: 'block', newKey: 'b', lines: 3, focus: ['b', 'v', 'f', 'g'],
      text: 'B, V and F. Three keys, one finger, and the longest of the three is the new one — come '
        + 'back to the bump each time so you can feel where home is.'
    },
    {
      type: 'intro', key: 'x', finger: 'LR',
      text: 'Left ring finger, down from S. The ring finger, not the middle one: it feels wrong for '
        + 'about a minute and then it feels like nothing at all.',
      hint: 'Press X to continue'
    },
    {
      gen: 'block', newKey: 'x', lines: 3, focus: ['x', 's', 'w', 'c'],
      text: 'X below S, with W above it — the same finger covering all three rows. C is next door and '
        + 'belongs to the middle finger, so keep them separate.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['b', 'x', 'v', 'c'], count: 10,
      text: 'The bottom row of the left hand, all four keys. This is the row that rewards going slowly '
        + 'more than any other.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['b'], only: true,
      text: 'Words with B. It opens words far more often than it closes them, so the reach usually '
        + 'happens from a standing start.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['x'], only: true,
      text: 'Now X, which almost always sits in the middle of a word — often right after an E. Let the '
        + 'ring finger drop and come straight back.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['b', 'x'], only: true, count: 12, maxLength: 7,
      text: 'Both keys in short words. Watch that your left hand has not crept forward over the bottom '
        + 'row while you were busy.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['b', 'x', 'c', 'v'],
      text: 'Bottom-row patterns for the left hand alone. Four keys, four different fingers, no '
        + 'borrowing.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Twenty-five letters, five words to a line. Only Z is left, and it comes with the '
        + 'punctuation in the next lesson.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Sentences using the whole alphabet bar one letter. If these feel easier than the ones two '
        + 'lessons ago, that is the point of the whole unit.'
    }
  ]
};
