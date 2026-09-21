/* scripts/lessons-en/u3-l02.js — Everyday symbols.
 *
 * Two new physical keys, / and -, and then six symbols that cost nothing new: ? ! @ # : and "
 * are Shift plus a key the learner already owns, which is the whole reason they are taught here
 * rather than spread across the unit. The screens that teach them carry `shifted: true` so the
 * player can say so on the keyboard.
 *
 * Written out rather than generated, for the same reason as the number row: the bank has no
 * symbols in it, and an email address is not something a word generator can assemble.
 */
module.exports = {
  slug: 'everyday-symbols',

  summary: 'Two new keys and six that come free with Shift — everything an address, a link or a price needs.',

  intro: 'Only two of the symbols in this lesson are new keys. The rest — the question mark, the '
    + 'exclamation mark, the at sign, the hash, the colon and the double quote — are Shift held '
    + 'down over a key you already know, so what you are learning is a combination rather than a '
    + 'reach. Use the opposite Shift, exactly as you did for capitals, and none of them is harder '
    + 'than a capital letter.',

  congrats: 'That is every character an ordinary email, link or price needs. Nothing in this lesson '
    + 'asked your fingers to go anywhere they had not already been — which is the payoff for '
    + 'learning the rows properly.',

  screens: [
    {
      type: 'intro', key: '/', finger: 'RP',
      text: 'Right little finger, down and out past the full stop. It is the bottom-right corner of '
        + 'the letters, and the key every web address is built from.',
      hint: 'Press the slash to continue'
    },
    {
      type: 'block', newKey: '/',
      content: '/// ;;; ;/ /;\n// // a/b c/d\n12/5 3/9 in/out',
      text: 'Slash against the semicolon, which is the home key the little finger comes back to. No '
        + 'spaces around it when it joins two things together.'
    },
    {
      type: 'intro', key: '-', finger: 'RP',
      text: 'Right little finger again, this time up on the number row past the 0. The longest '
        + 'diagonal either little finger makes, and worth taking slowly.',
      hint: 'Press the hyphen to continue'
    },
    {
      type: 'block', newKey: '-',
      content: '--- 000 0- -0\n-- -- a-b c-d\ne-mail on-line 2026-05-12',
      text: 'Hyphen against the 0 beside it. It joins words together and it splits dates apart, and '
        + 'in both cases it sits tight against what it joins.'
    },
    {
      type: 'block', shifted: true,
      content: '? ! ?? !!\nwho? why? where? when?\nyes! stop! at last!',
      text: 'Shift and the slash gives a question mark; Shift and the 1 gives an exclamation mark. '
        + 'Opposite hand on the Shift, as always.'
    },
    {
      type: 'block', shifted: true,
      content: '@ # @@ ##\nsam@mail.com\n#1 #2 #typing #home',
      text: 'The at sign is Shift and 2, the hash is Shift and 3. Both belong to fingers that are '
        + 'already up on the number row for the digit underneath.'
    },
    {
      type: 'block', shifted: true,
      content: ': _ " :: __\nat 7:30 and 8:45\nfile_name "quoted"',
      text: 'The colon is Shift and the semicolon — your little finger barely moves. The underscore '
        + 'is Shift and the hyphen, and the double quote is Shift and the apostrophe.'
    },
    {
      type: 'burst', seconds: 25,
      tokens: ['?', '!', '@', '#', ':', '_', '/', '-', 'a@b', 'x/y'],
      text: 'Single symbols, one after another. Hold Shift only as long as the symbol needs it and '
        + 'let it go straight afterwards.'
    },
    {
      type: 'standard', dictation: 'words',
      content: 'sam@mail.com anna@work.com\nwww.typingease.site/learn\nfile_name-2026.txt lessons/unit-3',
      text: 'Addresses and file names, typed the way they are actually written: no spaces anywhere '
        + 'inside them. Read each one to the end before you start.'
    },
    {
      type: 'standard', dictation: 'sentence',
      content: 'How are you today?\nWell done!\nMy address is sam@mail.com, and I will be there at 7:30.',
      text: 'Ordinary sentences that happen to need symbols. Next lesson is nothing but addresses, '
        + 'links and passwords, which is where all of this gets used at once.'
    }
  ]
};
