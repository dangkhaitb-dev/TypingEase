/* scripts/lessons-en/u2-l02.js — O and W.
 * The first reaches for the ring fingers, and the lesson that makes the course readable: with
 * `o` the bank gains `to`, `of`, `for`, `not`, `you` and most of the short words a sentence
 * needs to hold together. 636 words by the end of it.
 */
module.exports = {
  slug: 'o-and-w',

  summary: 'The ring fingers reach up for the first time, and short everyday words arrive in bulk.',

  intro: 'Your ring fingers have done nothing but sit on S and L so far. O and W change that, and they '
    + 'are harder than the index reaches were: the ring finger is the least independent of the four, so '
    + 'its neighbours want to come along for the ride. Watch your little finger in particular — if it '
    + 'lifts off its home key every time you reach, slow down until it stops.',

  congrats: 'O is the fourth most common letter in English and you now have it. Read back over the last '
    + 'few screens and notice how much more like real writing they look than the ones in Unit 1.',

  screens: [
    {
      type: 'intro', key: 'o', finger: 'RR',
      text: 'Right ring finger, straight up from L. Keep the little finger on the semicolon while the '
        + 'ring finger goes — that is the whole difficulty of this key.',
      hint: 'Press O to continue'
    },
    {
      gen: 'block', newKey: 'o', lines: 3, focus: ['o', 'l', 'k', 'i'],
      text: 'O and L, over and over, with the neighbours mixed in. Straight up, straight back down.'
    },
    {
      type: 'intro', key: 'w', finger: 'LR',
      text: 'Left ring finger, straight up from S. The mirror of O, and the same problem: the little '
        + 'finger beside it would rather travel with it than stay at home.',
      hint: 'Press W to continue'
    },
    {
      gen: 'block', newKey: 'w', lines: 3, focus: ['w', 's', 'a', 'e'],
      text: 'W and S. If your left hand rolls outward as you reach, reset it on the home row and start '
        + 'the line again.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['o', 'w', 's', 'l'], count: 10,
      text: 'Both ring fingers, alternating. This is the least practised movement your hands have made '
        + 'so far, so expect it to feel clumsy.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['o'], only: true,
      text: 'Words with O in them, which turns out to be most words. Notice how many of these you '
        + 'could not type ten minutes ago.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['w'], only: true,
      text: 'Now W. It nearly always opens a word rather than closing one, so the reach happens while '
        + 'your hand is still settling.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['o', 'w'], only: true, count: 12, maxLength: 6,
      text: 'Short words carrying both keys. Keep the rhythm even — a burst is not a race against the clock.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['w', 'o', 's', 'l'],
      text: 'Patterns again, to check the ring fingers are returning home. Both little fingers should be '
        + 'touching their keys the whole way through.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Nineteen keys, five words to a line. Try reading each line once before you start typing it.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Three sentences that sound like ordinary English, because they are. Still no capitals — one '
        + 'more thing your little fingers will have to learn.'
    }
  ]
};
