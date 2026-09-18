/* scripts/lessons-en/u1-l10.js — Unit 1 test. One timed screen.
 * The passage is generated from the word bank rather than written, because a test should be
 * ordinary words at ordinary frequency, not a piece of prose someone tuned to feel good.
 */
module.exports = {
  slug: 'unit-1-test',

  summary: 'Sixty seconds on everything Unit 1 taught, to see where you actually are.',

  intro: 'One minute, fifteen keys, no new material. This is not a hurdle to clear — it is a reading. '
    + 'Whatever number comes out is your starting point, and the only one worth comparing against is '
    + 'the one you get next time. Accuracy is the figure to watch: speed follows it, never the other '
    + 'way round.',

  congrats: 'Unit 1 is done. You can type fifteen keys without looking, which is further than most '
    + 'people who use a keyboard every day ever get. Unit 2 is the rest of the alphabet, and it will '
    + 'go faster than this one did.',

  screens: [
    {
      type: 'test', gen: 'standard', seconds: 60, lines: 6, perLine: 6, dictation: 'words',
      text: 'Sixty seconds. Type as much as you can without sacrificing accuracy — and if you lose your '
        + 'place, keep going rather than starting the line again.'
    }
  ]
};
