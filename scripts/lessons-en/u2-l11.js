/* scripts/lessons-en/u2-l11.js — Unit 2 test. One timed screen.
 * Sentences rather than the word list u1-l10 used: with capitals, full stops and the whole
 * alphabet in hand, a test made of loose words would be measuring less than the learner can do.
 */
module.exports = {
  slug: 'unit-2-test',

  summary: 'Sixty seconds of real sentences — capitals, punctuation and all.',

  intro: 'One minute on everything the unit taught. It is the same length as the Unit 1 test, so the '
    + 'two numbers can be compared directly — but this one is made of whole sentences rather than '
    + 'lists of words, because that is what you can type now. Expect the speed to be lower than your '
    + 'best drill and the accuracy to matter more.',

  congrats: 'Unit 2 is done. Twenty-six letters, punctuation, capitals and line breaks — everything '
    + 'ordinary writing asks for. Unit 3 is the number row, the symbols behind it, and getting '
    + 'quicker at all of it.',

  screens: [
    {
      type: 'test', gen: 'standard', seconds: 60, lines: 5, dictation: 'sentence',
      text: 'Sixty seconds. Punctuation counts, capitals count, and if you lose your place keep going '
        + 'rather than starting the line again.'
    }
  ]
};
