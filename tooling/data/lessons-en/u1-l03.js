/* scripts/lessons-en/u1-l03.js — S and L.
 * Six keys now, and still no English word: `s`, `l`, `d`, `f`, `j`, `k` has no vowel. The
 * next lesson brings `a` and the course can finally say something.
 */
module.exports = {
  slug: 's-and-l',

  summary: 'The ring fingers join in — the two laziest fingers on the keyboard, and the two most worth training.',

  intro: 'Ring fingers are weak and slow, and most people who type by looking never use them properly '
    + 'at all. That is exactly why they get their own lesson. S and L sit one step further out than D '
    + 'and K, and the reach is short — the difficulty is not distance, it is that the ring finger does '
    + 'not like moving on its own. It will, with practice.',

  congrats: 'Six keys. Your ring fingers are probably the slowest part of this so far, and they will '
    + 'stay that way for a while — that is normal, and it is why the course comes back to them. One '
    + 'more key and real words become possible.',

  screens: [
    {
      type: 'intro', key: 's', finger: 'LR',
      text: 'Left ring finger, one key left of D. Try to move only that finger: the others should stay '
        + 'resting where they are, especially the index finger on its bump.',
      hint: 'Press S to continue'
    },
    {
      gen: 'block', newKey: 's', lines: 3, focus: ['s', 'd', 'f'],
      text: 'Work outward and back: S, then D, then F. Let the ring finger return to its own key each time.'
    },
    {
      type: 'intro', key: 'l', finger: 'RR',
      text: 'Right ring finger, one key right of K. The same reach mirrored — and probably the same '
        + 'reluctance from the finger.',
      hint: 'Press L to continue'
    },
    {
      gen: 'block', newKey: 'l', lines: 3, focus: ['l', 'k', 'j'],
      text: 'Outward and back on the right hand now. Slow is fine; sloppy is not.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['s', 'l', 'd', 'k'], count: 10,
      text: 'Ring and middle fingers together, both hands. This is the combination most people find hardest.'
    },
    {
      gen: 'block', lines: 3, focus: ['s', 'd', 'f', 'j', 'k', 'l'],
      text: 'All six keys. Read the line once before you start typing it — it costs a second and saves three.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['s', 'l', 'd', 'k'],
      text: 'If the ring finger drags the middle finger along with it, slow right down until it stops doing that.'
    },
    {
      gen: 'burst', seconds: 25, focus: ['s', 'd', 'f', 'j', 'k', 'l'], count: 10,
      text: 'Everything you have so far, at whatever pace stays accurate.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['l', 's', 'k', 'd'],
      text: 'Both hands doing the same job at the same time. They learn from each other faster than you would expect.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['d', 's', 'k', 'l'],
      text: 'Keep your wrists off the desk and your fingers curved. A flat hand makes the ring finger even lazier.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['s', 'k', 'l', 'd'],
      text: 'Last one before the course starts using actual words. One key to go.'
    }
  ]
};
