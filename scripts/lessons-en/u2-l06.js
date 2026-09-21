/* scripts/lessons-en/u2-l06.js — Q and P.
 * Back to the top row, and both keys go to little fingers: the longest reaches in the course so
 * far, made by the weakest fingers. Q is also the rarest letter in English after Z, so the drills
 * lean on P and let Q arrive through the small set of words that actually contain it.
 */
module.exports = {
  slug: 'q-and-p',

  summary: 'The little fingers reach for the corners — the longest stretch either hand makes.',

  intro: 'Q and P are the outermost keys of the top row, and they belong to the little fingers, which '
    + 'are the shortest and weakest you have. That combination is why these two reaches are the ones '
    + 'people quietly give up on and start doing with the ring finger instead. Do not: the ring finger '
    + 'has its own key to cover, and borrowing it costs you more than the reach does.',

  congrats: 'Q is the second rarest letter in English and it is almost always followed by U, so in '
    + 'practice you have learned one movement rather than two. P you will use constantly — and both '
    + 'of them just made your little fingers considerably more useful.',

  screens: [
    {
      type: 'intro', key: 'q', finger: 'LP',
      text: 'Left little finger, straight up from A. Keep the other fingers resting on their home keys '
        + 'while it goes — the hand should stay flat rather than rolling over to help.',
      hint: 'Press Q to continue'
    },
    {
      gen: 'block', newKey: 'q', lines: 3, focus: ['q', 'a', 'w', 's'],
      text: 'Q and A, up and back. In English Q is nearly always followed by U, so the drill after this '
        + 'one will teach the pair rather than the letter.'
    },
    {
      type: 'intro', key: 'p', finger: 'RP',
      text: 'Right little finger, up from the semicolon. It is a long reach and the wrist will want to '
        + 'turn with it — let the finger stretch instead and the hand stay square.',
      hint: 'Press P to continue'
    },
    {
      gen: 'block', newKey: 'p', lines: 3, focus: ['p', ';', 'o', 'l'],
      text: 'P and the semicolon. Your right little finger now covers both, and it will pick up most of '
        + 'the punctuation later in the unit.'
    },
    {
      gen: 'burst', seconds: 20, focus: ['q', 'p', 'a', ';'], count: 10,
      text: 'Both corners, alternating hands. If the reach starts pulling your whole hand out of '
        + 'position, stop and reset on the home row.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 4, bias: ['p'], only: true,
      text: 'Words with P. It turns up at the start, the middle and the end of words equally, so the '
        + 'reach has to work from every direction.'
    },
    {
      // Written out rather than generated: the bank holds exactly eleven words with a Q in them,
      // and asking the generator for twelve slots means it repeats two of them. Eleven is the
      // honest size of this list, so the screen says eleven.
      type: 'standard', dictation: 'words',
      content: 'quick quiet quite quote\nquestion questions quickly quietly\nquality quarter square',
      text: 'Now Q, and this is very nearly the whole list — English has few of these. Notice the U '
        + 'behind every single one.'
    },
    {
      gen: 'burst', seconds: 25, source: 'words', bias: ['p'], only: true, count: 12, maxLength: 7,
      text: 'A burst of P words. The little finger tires faster than the others, so keep the pressure '
        + 'light and let the key do the work.'
    },
    {
      gen: 'standard', dictation: 'letters', lines: 3, focus: ['q', 'p', 'w', 'o'],
      text: 'The corner reaches against the ring-finger keys beside them. These four are easy to mix up '
        + 'and worth separating deliberately.'
    },
    {
      gen: 'standard', dictation: 'words', lines: 3, perLine: 5,
      text: 'Everything you have, five to a line. Twenty-three letters now, and only three missing.'
    },
    {
      gen: 'standard', dictation: 'sentence', lines: 3,
      text: 'Sentences, including a few about typing itself. Two lessons left in the alphabet.'
    }
  ]
};
