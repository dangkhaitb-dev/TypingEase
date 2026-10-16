/* scripts/lessons-en/u1-l05.js — Home row review. No new keys.
 * A review lesson exists to make the eight keys automatic before the hands start leaving the
 * row. Nine screens, no intro screens, and more words than drills.
 */
module.exports = {
  slug: 'home-row-review',

  summary: 'No new keys. Eight fingers, eight keys, until you stop thinking about any of them.',

  intro: 'Nothing new here on purpose. Every reach in the rest of this course starts from the eight '
    + 'keys you already have, and returns to them — so the more automatic they are now, the less work '
    + 'the next twenty-two lessons will be. If you can get through this lesson without looking down '
    + 'once, you are ready to leave the row.',

  congrats: 'The home row is yours. From here your fingers start reaching — up a row, down a row — '
    + 'and every one of those reaches ends by coming back to exactly where they are now.',

  screens: [
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['a', 's', 'd', 'f'],
      text: 'Left hand alone, outward and back. Watch that your index finger stays put while the others move.'
    },
    {
      gen: 'block', lines: 3, focus: ['j', 'k', 'l', ';'],
      text: 'Right hand alone. Same shape, mirrored.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['a', 's', 'd', 'f', 'j', 'k', 'l'], count: 10,
      text: 'Both hands, mixed. Let it be a little uncomfortable; that is where the learning is.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['a', 'j', 's', 'k'],
      text: 'Pairs that cross between the hands. These are the fastest combinations on a keyboard '
        + 'once your fingers know them.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Words again. Read the whole word before your fingers start moving — typing letter by '
        + 'letter is a habit worth not building.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 6,
      text: 'A burst of whole words. Speed here comes from not stopping, not from moving faster.'
    },
    {
      gen: 'block', lines: 4, focus: ['a', 's', 'd', 'f'],
      text: 'The full row, straight across and back. This is the drill worth repeating on a bad day.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: [';', 'a', 'l', 's'],
      text: 'Little fingers again. They are still the weakest and they always will be — which is why '
        + 'they get the last word in this lesson.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Last screen of the review. Next lesson your index fingers reach inward for the first time.'
    }
  ]
};
