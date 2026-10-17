/* scripts/lessons-en/u2-l09.js — Shift and Enter.
 *
 * Neither key prints anything, which is why they come last: everything before this lesson could
 * be practised as a stream of letters, and from here on the course can write. Almost every screen
 * is written out by hand, because the generator has no source of capitalised text — the word bank
 * is lowercase by house rule, and `names` exists precisely for this lesson.
 *
 * The thing being taught is the OPPOSITE little finger: hold the Shift on the far side from the
 * letter. Typing a capital A with the left hand alone is the habit this screen sequence exists to
 * prevent, and the 3D hands in the player move that way too — see DECISIONS.md.
 */
module.exports = {
  slug: 'shift-and-enter',

  summary: 'Two keys that print nothing, and turn everything you have learned into writing.',

  intro: 'Shift and Enter are held by the little fingers, and Shift has a rule worth learning properly: '
    + 'use the one on the OPPOSITE side from the letter you are capitalising. Left hand letter, right '
    + 'Shift; right hand letter, left Shift. Doing it the other way means one hand tries to make two '
    + 'movements at once, and it is the single most common reason capitals come out slowly.',

  congrats: 'That is the whole unit: twenty-six letters, three punctuation marks, capitals and line '
    + 'breaks. Anything written in plain English is now something you can type without looking. What '
    + 'is left is a drill on your own weak keys, and then the test.',

  screens: [
    {
      type: 'intro', key: 'shift', finger: 'RP',
      text: 'Little finger, on the Shift below the apostrophe — and the one below Z on the other side. '
        + 'Hold it down, press the letter, release. Opposite hands, always.',
      hint: 'Hold Shift and press a letter to continue'
    },
    {
      type: 'block', newKey: 'shift',
      content: 'Aa Ss Dd Ff\nJj Kk Ll Hh\nQq Ww Ee Rr Tt\nZz Xx Cc Vv Bb',
      text: 'Each letter twice, capital then small. Left-hand letters take the right Shift, and the '
        + 'other way round — if your hand is contorting, you are using the wrong one.'
    },
    {
      type: 'intro', key: 'enter', finger: 'RP',
      text: 'Right little finger, out to the right and down. Reach for it, press it, and bring the '
        + 'finger straight back to the semicolon rather than leaving the hand out there.',
      hint: 'Press Enter to continue'
    },
    {
      type: 'block', newKey: 'enter', linebreak: 'enter',
      content: 'Ada\nBen\nClara\nDev\nEva\nHugo',
      text: 'One name per line, so every line ends with a real Enter. Capital letter, name, Enter, and '
        + 'the little finger comes home.'
    },
    {
      type: 'burst', seconds: 20,
      tokens: ['Ada', 'Ben', 'Clara', 'Dev', 'Eva', 'Hugo', 'Ines', 'Kai', 'Nina', 'Omar'],
      text: 'Names, one after another. Every one of them starts with the opposite hand holding Shift.'
    },
    {
      type: 'standard', dictation: 'sentence',
      content: 'Nina asked Omar to wait outside.\nThe train leaves at six, and we are not ready yet.'
        + '\nClara types faster than she did last week.',
      text: 'Sentences with capitals and full stops, which is to say ordinary written English. This is '
        + 'the first screen in the course that looks like something you would actually send.',
      shifted: true
    },
    {
      type: 'standard', dictation: 'sentence', linebreak: 'enter',
      content: 'Dear Ada,\nThe meeting moved to the morning.\nSee you there.\nBen',
      text: 'A short note, with Enter at the end of every line. Short lines and a lot of Enters — that '
        + 'little finger is about to get a workout.',
      shifted: true
    },
    {
      type: 'burst', seconds: 25,
      tokens: ['Yes', 'No', 'Please', 'Thanks', 'Today', 'Perhaps', 'Sara', 'Theo', 'Vera', 'Zoe'],
      text: 'Capitalised words and names mixed. Keep the Shift held only as long as the letter needs '
        + 'it — press, letter, release, in one movement.'
    },
    {
      type: 'standard', dictation: 'sentence', linebreak: 'enter',
      content: 'Dear Nina,\nThank you for the book. It arrived this morning.\nI will bring it back next '
        + 'week, and the one you lent me before.\nBest wishes,\nOmar',
      text: 'The last screen of the unit, and a whole letter. Capitals, commas, full stops and line '
        + 'breaks, all at once — which is simply what writing is.',
      shifted: true
    }
  ]
};
