/* scripts/lessons-en/u2-l05.js — review, no new keys.
 * The midpoint of Unit 2. Every letter taught so far is one of the common ones, so this is the
 * last lesson where the whole keyboard is worth revising at once — after it the course is down
 * to the rare letters and the punctuation. Nine screens, no intro screens, words over patterns.
 */
module.exports = {
  slug: 'twenty-key-review',

  summary: 'No new keys. Every letter you have, until none of them needs thinking about.',

  intro: 'Nothing new in this lesson. You have been adding two keys every five minutes for a while '
    + 'now, and the reaches you learned first have had far more practice than the ones you learned '
    + 'last — this is where the rest catch up. The letters left in the unit are the rare ones, so '
    + 'what you consolidate here is most of what you will actually type for the rest of your life.',

  congrats: 'That is the common half of the keyboard, under your fingers and mostly automatic. What '
    + 'is left of the alphabet — Q, P, B, X and Z — you could go a whole page without needing, which '
    + 'is exactly why they come last.',

  screens: [
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4,
      text: 'Start with words rather than patterns, because words are what you came here for. Read '
        + 'each one whole before you begin typing it.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['t', 'y', 'o', 'w'],
      text: 'The top-row reaches from this unit. Every one of them ends with the finger back on its '
        + 'home key, and that is the part to check.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['c', 'n', 'm', 'v'],
      text: 'Now the bottom-row four. These are newer than the rest and they will feel it — which is '
        + 'the reason this screen exists.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['w', 'o', 'c', 'n', 'm', 'v', 't', 'y'], count: 10,
      text: 'All eight new keys of the unit, mixed. Let your fingers choose; if you have to think '
        + 'about which one, that key needs another minute.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Longer lines of ordinary words. Try to keep a steady rhythm rather than typing in bursts '
        + 'and pauses.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', count: 12, maxLength: 6,
      text: 'Short words at speed. Speed here means not stopping between words, not moving your '
        + 'fingers faster.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Whole sentences. This is the closest the course has come to ordinary writing, and there '
        + 'are still five letters missing.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['a', ';', 's', 'l'],
      text: 'The little fingers, one more time. They are about to be handed Q, P, Z and most of the '
        + 'punctuation, so they may as well be ready.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Last screen of the review. The rest of the alphabet is five lessons away from being '
        + 'finished.'
    }
  ]
};
