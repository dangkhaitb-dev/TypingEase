/* scripts/lessons-en/u2-l01.js — T and Y.
 * First lesson of Unit 2, and the first upward reach that is not an index finger going straight
 * up: T and Y sit inward as well as up. The word bank leaps from 306 to 458 because `t` and
 * `the` carry so much of English — which is why this lesson can already end on sentences.
 */
module.exports = {
  slug: 't-and-y',

  summary: 'Two more index-finger reaches, and the letter that starts the most common word in English.',

  intro: 'T is the second most common letter in the language and Y closes the top row for your index '
    + 'fingers, so between them these two keys turn up in almost every sentence you will ever type. '
    + 'The reach is upward and inward — further than R and U, and easy to undershoot. Aim with the '
    + 'finger, not the wrist, and let the hand stay where it is.',

  congrats: 'With T you can type the, that, this and to — four of the ten most common words in '
    + 'English, all from one new key. Seventeen keys down, and the sentences are getting longer.',

  screens: [
    {
      type: 'intro', key: 't', finger: 'LI',
      text: 'Left index finger, up and one key inward from F. It is a longer stretch than R, so the '
        + 'temptation is to move the whole hand — resist it and let the finger do the reaching.',
      hint: 'Press T to continue'
    },
    {
      gen: 'block', newKey: 't', lines: 3, focus: ['t', 'r', 'f', 'g'],
      text: 'T, R, F, G — four keys, one finger, four directions. Come back to the bump between each one.'
    },
    {
      type: 'intro', key: 'y', finger: 'RI',
      text: 'Right index finger, up and one key inward from J. The mirror of T, and the last of the '
        + 'six keys your index fingers are responsible for on the top row.',
      hint: 'Press Y to continue'
    },
    {
      gen: 'block', newKey: 'y', lines: 3, focus: ['y', 'u', 'j', 'h'],
      text: 'Y, U, J, H. Y is the furthest reach on this hand — if it starts to feel cramped, drop your '
        + 'wrist rather than twisting it.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['t', 'y', 'r', 'u'], count: 10,
      text: 'The four upper index-finger keys, alternating hands. Slow is fine; landing on the right key '
        + 'is the whole exercise.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['t'], only: true,
      text: 'Words built around T. Notice how often it arrives with H right after it — that pair is '
        + 'worth learning as one movement.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['y'], only: true,
      text: 'Now Y, which mostly turns up at the end of a word. Your little finger should still be '
        + 'resting on its home key while the index reaches.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['t', 'y'], only: true, count: 12, maxLength: 6,
      text: 'A burst of short words carrying both new keys. Read the whole word before you start typing it.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['t', 'y', 'f', 'j'],
      text: 'Back to patterns for one screen, to check that the reaches still end at home. Both index '
        + 'fingers on their bumps between every stretch.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Everything you have so far, five words to a line. Seventeen keys is enough for a surprising '
        + 'amount of ordinary English.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 2,
      text: 'Sentences again, longer than the ones in Unit 1. Still no capitals or full stops — those '
        + 'arrive at the end of this unit.'
    }
  ]
};
