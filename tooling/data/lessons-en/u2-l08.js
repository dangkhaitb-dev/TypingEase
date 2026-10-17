/* scripts/lessons-en/u2-l08.js — Z, punctuation and the apostrophe.
 *
 * Four new keys and the last letter of the alphabet. Twelve screens because each key needs its
 * own intro and its own drill, and the drills here are WRITTEN rather than generated: a pattern
 * generator that knows nothing about English produces `.a. a.a` and calls it practice, whereas a
 * full stop is only worth anything at the end of something. The apostrophe is the reason this
 * lesson exists at all — without it the rest of the course cannot write `don't`.
 */
module.exports = {
  slug: 'z-punctuation-and-the-apostrophe',

  summary: 'The last letter, the full stop, the comma and the apostrophe — the alphabet, finished.',

  intro: 'Z is the rarest letter in English, and the three punctuation marks beside it are among the '
    + 'most common characters you will ever type. All four go to fingers that are already carrying '
    + 'more than their share: the left little finger takes Z, and the right hand picks up the full '
    + 'stop, the comma and the apostrophe. After this lesson every ordinary sentence in the language '
    + 'is something you can type.',

  congrats: 'The alphabet is complete, and you can punctuate. One lesson left in this unit — capital '
    + 'letters and the Enter key — and after that there is nothing standing between you and an '
    + 'ordinary page of writing.',

  screens: [
    {
      type: 'intro', key: 'z', finger: 'LP',
      text: 'Left little finger, down from A. The last letter of the alphabet and the rarest in the '
        + 'language, which is exactly why it has waited until now.',
      hint: 'Press Z to continue'
    },
    {
      gen: 'block', newKey: 'z', lines: 3, focus: ['z', 'a', 'x', 's'],
      text: 'Z below A, with X next door. Three keys on the bottom row for the left hand, three '
        + 'different fingers.'
    },
    {
      type: 'intro', key: '.', finger: 'RR',
      text: 'Right ring finger, down from L. The same finger that reaches up for O now reaches down '
        + 'for the full stop — up, home, down, from one key.',
      hint: 'Press the full stop to continue'
    },
    {
      // Written out, not generated. A full stop only means anything at the end of something, and a
      // pattern generator does not know that. Same for the comma and the apostrophe below.
      type: 'block', newKey: '.',
      content: 'l.l. l.l.\n.l l. .l. l.l\nyes. no. so. go.',
      text: 'The reach first, then the thing it is for. Notice there is no space before a full stop '
        + 'and one space after it.'
    },
    {
      type: 'intro', key: ',', finger: 'RM',
      text: 'Right middle finger, down from K. It sits just to the left of the full stop, so the two '
        + 'are easy to swap by accident until the fingers learn them apart.',
      hint: 'Press the comma to continue'
    },
    {
      type: 'block', newKey: ',',
      content: 'k,k, k,k,\n,k k, ,k, k,k\nyes, no, well, then,',
      text: 'Comma below K, full stop below L. Say which is which to yourself once; after that your '
        + 'fingers will remember.'
    },
    {
      type: 'intro', key: "'", finger: 'RP',
      text: 'Right little finger, just to the right of the semicolon. It is a short reach for a finger '
        + 'that has already learned two long ones, and it makes contractions possible.',
      hint: 'Press the apostrophe to continue'
    },
    {
      type: 'block', newKey: "'",
      content: "'; ;' '; ;'\nl' k' j' ;'\ndon't isn't can't won't",
      text: 'The apostrophe sits beside the semicolon, so the little finger barely moves. No spaces '
        + 'around it — it lives inside the word.'
    },
    {
      gen: 'burst', seconds: 20, source: 'words', bias: ["'"], only: true, count: 10, maxLength: 8,
      text: 'Contractions, one after another. These are the words you will type most often in anything '
        + 'that sounds like a person talking.'
    },
    {
      // Written out for the same reason as the Q screen in u2-l06: twenty-two words in the bank
      // carry a Z, and left to itself the generator picks two of them twice.
      type: 'standard', dictation: 'words',
      content: 'zero zone size lazy\ndozen frozen freeze prize\npuzzle quiz citizen magazine',
      text: 'Words with Z. There are not many, and now you have met most of them.'
    },
    {
      type: 'standard', dictation: 'sentence',
      content: 'the box is open, and the letters are inside.\nwe can meet at six, or later if you like.'
        + '\nshe types well now, but she still looks down.',
      text: 'Sentences that stop and breathe properly. Still no capital letters — that is the very '
        + 'next lesson.'
    },
    {
      type: 'standard', dictation: 'sentence',
      content: "i don't look at the keys any more.\nit isn't speed that matters first, it's accuracy."
        + "\nyou'll get there, one line at a time.",
      text: 'The apostrophe in ordinary use. Keep the rhythm through it — it is a key like any other, '
        + 'not a pause.'
    }
  ]
};
