/* scripts/lessons-en/u1-l02.js — D and K.
 * Still no English word is typeable with f j d k, so every drill here is a named finger
 * pattern. That is not a gap being padded: it is what the first week of touch typing is.
 */
module.exports = {
  slug: 'd-and-k',

  summary: 'Two more middle-row keys, one for each middle finger, without moving your hands.',

  intro: 'Your index fingers already know where they live. D and K sit directly beside them, '
    + 'under the middle fingers, so nothing about your hand position changes — only which finger '
    + 'does the work. If you find yourself moving a whole hand to reach one of these, the hand has '
    + 'drifted and the index fingers will tell you: they should still be touching their bumps.',

  congrats: 'Four keys, four fingers, and your hands have not moved once. That is the whole trick '
    + 'of the home row, and everything that follows is the same idea applied further out.',

  screens: [
    {
      type: 'intro', key: 'd', finger: 'LM',
      text: 'Left middle finger, one key to the left of F. Leave the index finger where it is — '
        + 'it stays on its bump while the middle finger reaches.',
      hint: 'Press D to continue'
    },
    {
      gen: 'block', newKey: 'd', lines: 3, focus: ['d', 'f'],
      text: 'Alternate between the two left-hand fingers. The hand itself should stay completely still.'
    },
    {
      type: 'intro', key: 'k', finger: 'RM',
      text: 'Right middle finger, one key to the right of J. Same movement as D, mirrored across '
        + 'the keyboard — your two hands do the same things in opposite directions.',
      hint: 'Press K to continue'
    },
    {
      gen: 'block', newKey: 'k', lines: 3, focus: ['k', 'j'],
      text: 'Now the right hand. If this feels easier than D did, that is your left hand having '
        + 'already taught your right one the movement.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['d', 'k', 'f', 'j'], count: 10,
      text: 'All four keys, mixed. Do not rush — the point is that your fingers already know where to go.'
    },
    {
      gen: 'block', lines: 3, focus: ['d', 'k', 'f', 'j'],
      text: 'Hands alternating. Notice how much easier it is when consecutive letters are on different hands.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['d', 'k', 'f', 'j'],
      text: 'Keep the rhythm even. A steady slow pace builds the habit faster than a fast uneven one.'
    },
    {
      gen: 'burst', seconds: 25, focus: ['d', 'k', 'f', 'j'], count: 10,
      text: 'A longer burst. Eyes forward for the whole thing, even when you feel a mistake coming.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['f', 'd', 'j', 'k'],
      text: 'Same four keys in a different order. Your fingers should be deciding this, not your eyes.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['k', 'd', 'j', 'f'],
      text: 'If a finger hesitates, let it. Hesitating in the right place beats guessing quickly.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['d', 'j', 'k', 'f'],
      text: 'Last one. Two lessons in, and half the home row is already under your fingers.'
    }
  ]
};
