/* data/curriculum.en.js — English curriculum index, the sibling of data/curriculum.vi.js.
   Loaded with <script src="/data/curriculum.en.js"></script>. NOT fetched.
   Assigned to window.TypingEaseCurriculum, exactly like the Vietnamese one.

   Read this before touching lesson ids: `u3-l01` here and `u3-l01` in the Vietnamese
   curriculum are DIFFERENT LESSONS. The two live in separate directories
   (data/lessons/en/ and data/lessons/vi/) and separate progress stores, so nothing
   collides — but grepping an id alone will find both, so always include the language.

   Why three units and not four. The Vietnamese course spends Unit 3 on typing tone marks
   with Telex, which English has no equivalent of. Dropping it and renumbering is why this
   `u3` is the Vietnamese `u4`: a course that showed "Unit 1, Unit 2, Unit 4" would read as
   a bug, and bai-hoc/generate.mjs prints `unit.index` literally.

   The one key the Vietnamese course never teaches and English cannot do without is the
   apostrophe. Without it there is no `don't`, `it's`, `you're` — and apostrophe-free
   English is exactly what makes drill text read as though a machine wrote it. It is a
   home-row key (right little finger, just right of `;`) and it is taught in u2-l08.
   `"` then comes free through SHIFT_MAP in Unit 3, with no extra physical key.

   `ready: false` everywhere for now: the index is the contract, the 27 lesson files are
   written against it one unit at a time. The roadmap page already renders an unready
   lesson as "coming soon" rather than a dead link, so units can be switched on as they
   land. Check with: node scripts/validate-lessons.js --lang en
*/
window.TypingEaseCurriculum = {
  lang: 'en',
  // Its own store. Lesson ids repeat across languages, so one shared key would mean two
  // courses overwriting each other's progress, unlocks and "continue" pointer.
  progressKey: 'typingease-progress-en-v3',
  badgesKey: 'typingease-badges-en-v1',
  // No Telex here, so badges.js hides the badge that requires it rather than showing a
  // tenth award that can never be earned.
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: 'The home row',
      summary: 'Eight keys under your fingers, then G H, E I, R U — enough to type real English words without looking down.',
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: 'Start here', lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: 'Reaching out', lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: 'Finish the unit', lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: 'The rest of the alphabet',
      summary: 'Upper row, bottom row, punctuation and capitals — the whole alphabet, plus Shift and Enter.',
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: 'Start here', lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: 'Reaching out', lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: 'Finish the unit', lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: 'Numbers, symbols and speed',
      summary: 'The number row, everyday symbols, real addresses and links, then long paragraphs at full speed.',
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: 'Numbers and symbols', lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: 'Speed', lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    }
  ],

  /* kind: keys | review | weak | test */
  lessons: {
    // Unit 1 — the key order is the Vietnamese one unchanged, because it is not Vietnamese:
    // it is index → middle → ring → little finger across the home row, then the same mirrored
    // stretch on each row. By the end of this unit the learner has 9 of the 12 most common
    // English letters, so there is nothing to gain by reordering for letter frequency and a
    // great deal to lose by breaking the row discipline.
    'u1-l01': { title: 'F, J and the space bar', newKeys: ['f', 'j', ' '], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: 'D and K', newKeys: ['d', 'k'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l03': { title: 'S and L', newKeys: ['s', 'l'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l04': { title: 'A and the semicolon', newKeys: ['a', ';'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l05': { title: 'Home row review', newKeys: [], screens: 9, estMinutes: 5, kind: 'review', ready: false },
    'u1-l06': { title: 'G and H', newKeys: ['g', 'h'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l07': { title: 'E and I', newKeys: ['e', 'i'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l08': { title: 'R and U', newKeys: ['r', 'u'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u1-l09': { title: 'Weak key drill', newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: false },
    'u1-l10': { title: 'Unit 1 test', newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: false },

    // Unit 2
    'u2-l01': { title: 'T and Y', newKeys: ['t', 'y'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l02': { title: 'O and W', newKeys: ['o', 'w'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l03': { title: 'C and N', newKeys: ['c', 'n'], screens: 12, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l04': { title: 'M and V', newKeys: ['m', 'v'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l05': { title: 'Twenty-key review', newKeys: [], screens: 9, estMinutes: 5, kind: 'review', ready: false },
    'u2-l06': { title: 'Q and P', newKeys: ['q', 'p'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l07': { title: 'B and X', newKeys: ['b', 'x'], screens: 11, estMinutes: 5, kind: 'keys', ready: false },
    // Four new keys, so one more screen than its Vietnamese counterpart: the validator
    // requires every key in `newKeys` to be introduced by a `block` screen of its own.
    'u2-l08': { title: 'Z, punctuation and the apostrophe', newKeys: ['z', '.', ',', "'"], screens: 12, estMinutes: 6, kind: 'keys', ready: false },
    'u2-l09': { title: 'Shift and Enter', newKeys: ['shift', 'enter'], screens: 9, estMinutes: 5, kind: 'keys', ready: false },
    'u2-l10': { title: 'Weak key drill', newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: false },
    'u2-l11': { title: 'Unit 2 test', newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: false },

    // Unit 3 — `/` and `-` are the only new physical keys. Every other symbol this unit uses
    // (? ! @ # : _ " and the brackets) is Shift plus a key already taught, so it costs the
    // learner a reach they already know rather than a new one.
    'u3-l01': { title: 'The number row', newKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], screens: 12, estMinutes: 6, kind: 'keys', ready: false },
    'u3-l02': { title: 'Everyday symbols', newKeys: ['/', '-'], screens: 10, estMinutes: 5, kind: 'keys', ready: false },
    'u3-l03': { title: 'Addresses, links and passwords', newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: false },
    'u3-l04': { title: 'Paragraphs and pace 1', newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: false },
    'u3-l05': { title: 'Paragraphs and pace 2', newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: false },
    'u3-l06': { title: 'Final test', newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: false }
  },

  sequence: [
    'u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05', 'u1-l06', 'u1-l07', 'u1-l08', 'u1-l09', 'u1-l10',
    'u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05', 'u2-l06', 'u2-l07', 'u2-l08', 'u2-l09', 'u2-l10', 'u2-l11',
    'u3-l01', 'u3-l02', 'u3-l03', 'u3-l04', 'u3-l05', 'u3-l06'
  ],

  /* The taster line on the home page hero, inline so it needs no fetch. It must byte-match
     the content of the screen it points at, so that a newcomer who types it gets that screen
     credited. F comes before J here because "F and J" is how the lesson title reads in
     English; the Vietnamese hero says the same thing in the opposite order. */
  starter: {
    lessonId: 'u1-l01',
    screen: 6,
    content: 'fff jjj fff jjj fj jf',
    hint: 'Rest both index fingers on F and J — the two keys with a raised bump — then type the letter that lights up.'
  }
};
