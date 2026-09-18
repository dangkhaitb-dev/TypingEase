/* scripts/lessons-en/u1-l01.js — F, J and the space bar.
 *
 * Almost every screen here is written out in full rather than generated, and that is the
 * honest shape of the first lesson: with two letters there is nothing for a generator to
 * choose between. It starts paying for itself in u1-l04, where real words appear.
 *
 * Screen 6 must stay byte-identical to `starter.content` in data/curriculum.en.js — it is
 * the line on the home page hero, and a newcomer who types it there gets this screen
 * credited. validate-lessons.js fails if the two drift apart.
 */
module.exports = {
  slug: 'f-j-and-the-space-bar',

  summary: 'Find the two keys with a raised bump, and learn to come back to them without looking.',

  intro: 'Every other lesson in this course depends on this one. F and J carry a small raised '
    + 'bump so your index fingers can find them by touch alone, and every reach you learn later '
    + 'starts and ends here. Rest both index fingers on the bumps, let the other fingers fall '
    + 'onto the keys beside them, and keep your eyes on the screen rather than on your hands.',

  congrats: 'That is the hardest part of touch typing already behind you: not the letters, but '
    + 'the habit of not looking. Your fingers now know two keys by feel. The next lesson adds two '
    + 'more, and the pattern will start to feel familiar much faster than this one did.',

  screens: [
    {
      type: 'intro', key: 'f', finger: 'LI',
      text: 'Left index finger. Slide it across the middle row until you feel a raised bump — that is F. '
        + 'You never need to look for this key again; the bump is there so you can find it in the dark.',
      hint: 'Press F to continue'
    },
    {
      type: 'block', newKey: 'f',
      content: 'ffffffff\nffffffff',
      text: 'Tap it with the left index finger and let the finger settle back onto the key each time. '
        + 'Slow and even beats fast and scattered.'
    },
    {
      type: 'intro', key: 'j', finger: 'RI',
      text: 'Right index finger, same middle row, same raised bump. F and J are the two anchors your '
        + 'hands return to after every single reach in this course.',
      hint: 'Press J to continue'
    },
    {
      type: 'block', newKey: 'j',
      content: 'jjjjjjjj\njjjjffff\nffffjjjj\nfjfjfjfj',
      text: 'Now alternate. Notice that neither hand has to move — only the two index fingers do any work.'
    },
    {
      type: 'intro', key: ' ', finger: 'RT',
      text: 'The space bar belongs to your right thumb. Let the thumb rest on it and press from where it '
        + 'already is; there is no need to lift the hand or aim.',
      hint: 'Press the space bar to continue'
    },
    {
      // Literal on purpose: this exact line is the taster on the home page.
      type: 'block', newKey: ' ',
      content: 'fff jjj fff jjj fj jf',
      text: 'Thumb for the space, index fingers for the letters. Three separate fingers, one rhythm.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['f', 'j'], count: 8,
      text: 'A short burst. Type whatever appears; accuracy first, speed will follow on its own.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['f', 'j'],
      text: 'Keep both index fingers touching their bumps between taps. If you have to hunt for a key, '
        + 'you have drifted off the row.'
    },
    {
      gen: 'burst', seconds: 25, focus: ['f', 'j'], count: 8,
      text: 'Once more, a little longer. Try to keep your eyes off your hands for the whole burst.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['f', 'j'],
      text: 'Last one. If this feels dull, that is the point — dull is what a habit feels like while '
        + 'it is being built.'
    }
  ]
};
