/* scripts/lessons-en/u1-l04.js — A and the semicolon.
 *
 * The lesson where English arrives. With a s d f j k l the bank finally yields real words —
 * ask, fall, salad, flask — twenty-six of them. It is a short list and the drills say so
 * rather than padding it out with invented ones. From here the generator does the choosing.
 */
module.exports = {
  slug: 'a-and-the-semicolon',

  summary: 'The little fingers, the last two home-row keys, and the first real English words.',

  intro: 'Little fingers are the weakest of the eight, and they are asked to do a surprising amount '
    + 'of work: A, the semicolon, and later Shift, Enter and most of the punctuation. Start them off '
    + 'properly now and the rest of the course is much easier. With A in place you have every vowel '
    + 'the home row offers, which means that from the middle of this lesson you stop typing patterns '
    + 'and start typing words.',

  congrats: 'Eight keys, eight fingers, and you have typed English. The word list was short because '
    + 'the home row alone is short — the next three lessons add six more keys and it opens up quickly.',

  screens: [
    {
      type: 'intro', key: 'a', finger: 'LP',
      text: 'Left little finger, at the far left of the middle row. It is a small, weak finger doing '
        + 'a full-sized job; give it its own movement rather than swinging the whole hand.',
      hint: 'Press A to continue'
    },
    {
      gen: 'block', newKey: 'a', lines: 3, focus: ['a', 's', 'd', 'f'],
      text: 'The whole left hand, one finger per key, outward and back. This is the shape your left '
        + 'hand will hold for the rest of the course.'
    },
    {
      type: 'intro', key: ';', finger: 'RP',
      text: 'Right little finger. The semicolon is where your right hand rests, the mirror of A — and '
        + 'in a moment it becomes the anchor for reaching the punctuation further out.',
      hint: 'Press the semicolon to continue'
    },
    {
      gen: 'block', newKey: ';', lines: 3, focus: [';', 'l', 'k', 'j'],
      text: 'The right hand now has its full shape too. Both little fingers on the outside, both index '
        + 'fingers on their bumps.'
    },
    {
      gen: 'block', lines: 4, focus: ['a', 's', 'd', 'f'],
      text: 'All eight keys of the home row, which is what "home row" means: the row your hands live on.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['a', 's', 'd', 'f', 'j', 'k', 'l'], count: 10,
      text: 'Mixed, both hands. Let the fingers pick the keys; you pick the pace.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['a'],
      text: 'Real English words, all of them typed without your hands leaving the home row. There are '
        + 'not many yet — that is honestly all eight keys can make.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', count: 10, maxLength: 5,
      text: 'The same words as a burst. Whole words now, not letters — read the word, then type it, '
        + 'rather than reading one letter at a time.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 3,
      text: 'Notice what changed: you are thinking about words, and your fingers are handling the letters. '
        + 'That is the whole goal of the course, arriving early.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['a', ';', 's', 'l'],
      text: 'Back to the little fingers on their own for a moment. They are the ones that will slow you '
        + 'down later if they are neglected now.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Last one. Next lesson reviews all eight keys before the course starts reaching off the row.'
    }
  ]
};
