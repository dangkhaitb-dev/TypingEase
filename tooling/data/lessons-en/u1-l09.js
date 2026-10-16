/* scripts/lessons-en/u1-l09.js — Weak key drill. One screen, no fixed content.
 *
 * `source: "weak-keys"` means the player builds the drill at runtime from the keys THIS
 * learner has been missing, using weak-keys.js. That module carries a Vietnamese word pool
 * inline; the English pool lives in data/words/en.js under `drill`, and the page has to load
 * that file before weak-keys.js for this lesson to produce English.
 */
module.exports = {
  slug: 'weak-key-drill',

  summary: 'Built from the keys you personally keep missing — so no two learners get the same drill.',

  intro: 'This one has no fixed content. While you have been typing, the course has been counting which '
    + 'keys you hit wrong, and it builds two minutes of practice weighted towards exactly those. A key '
    + 'you are already good at will barely appear. If you have been accurate throughout, you will get a '
    + 'general review instead, which is a perfectly good outcome.',

  congrats: 'A weak key only stops being weak by being typed more often than the others. Two minutes '
    + 'here is worth more than ten minutes of the letters you already have.',

  screens: [
    {
      type: 'test', seconds: 120, source: 'weak-keys', minKeys: 2,
      text: 'Two minutes, built from your own weakest keys. Accuracy matters more than finishing — '
        + 'there is no end of the text to reach.'
    }
  ]
};
