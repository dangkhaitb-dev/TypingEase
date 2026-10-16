/* scripts/lessons-en/u3-l06.js — Final test. One screen, three minutes.
 *
 * Written rather than generated, unlike the two unit tests. Those measure a unit and can be
 * ordinary words at ordinary frequency; this one is the last thing a learner types in the
 * course, and it is read as much as typed. It uses every group of keys the course taught —
 * letters, punctuation, capitals, digits, a time, an address — at the frequency ordinary
 * writing uses them, rather than at the frequency a test would choose to look thorough.
 */
module.exports = {
  slug: 'final-test',

  summary: 'Three minutes, one passage, everything the course taught — and a number to keep.',

  intro: 'Three minutes on a single passage. It has letters, punctuation, capitals, numbers and an '
    + 'address in it, in roughly the proportions ordinary writing uses, so the number it gives you '
    + 'is closer to your real speed than any drill has been. Do not race it. The figure worth '
    + 'having is the one you can repeat tomorrow.',

  congrats: 'That is the course. You can type without looking at your hands, which is a thing most '
    + 'people who use a keyboard every day never learn to do — and from here it improves on its '
    + 'own, because every page you write from now on is practice.',

  screens: [
    {
      type: 'test', seconds: 180,
      content: 'Three months ago I typed with two fingers and looked at the keyboard the whole time.'
        + '\nWriting a long message took me twice as long as it took anyone else in the room.'
        + '\nI decided to start again from the beginning, with the eight keys of the home row.'
        + '\nThe first week was uncomfortable, because my hands were slower than my old habit.'
        + '\nBy the third week my fingers began to find the keys before I had thought about them.'
        + '\nI learned the top row, then the bottom row, then the punctuation and the capitals.'
        + '\nThe numbers came last, and they were the only part that still needed my eyes.'
        + '\nNow I write to sam@mail.com every morning at 8:30 without looking down once.'
        + '\nI type about 50 words a minute, and the number goes up a little every month.'
        + '\nNone of it was talent. It was ten minutes a day for three months, and that is all.',
      text: 'Three minutes. Accuracy counts for more than the word count, and if you lose your place '
        + 'keep going rather than starting the line again.'
    }
  ]
};
