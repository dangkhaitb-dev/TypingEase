/* i18n/ui.en.js — the English layer.
 *
 * Loaded ONLY by pages under /en/, with <script src="/i18n/ui.en.js"></script> placed before
 * every other script on the page. Vietnamese pages load nothing: each shared module keeps its
 * Vietnamese table inline as the built-in default and spreads this object over the top, so a
 * Vietnamese visitor downloads not one extra byte and runs not one new branch.
 *
 * A key missing from here renders in Vietnamese. That is deliberate — visibly wrong beats
 * blank, and if this whole file failed to load the English player would still run rather than
 * white-screen. It also means the keys below must match the tables they override EXACTLY;
 * an invented key name is silently ignored and the Vietnamese string stays on screen.
 *
 * ORDERING. keyboard/preferences.js is an ES module and reads `globalThis.TypingEaseUI`.
 * Classic scripts always execute before deferred modules, so a plain <script src> for this
 * file is safe — but do not add `defer` to it, which would reverse that.
 */
window.TypingEaseUI = {
  lang: 'en',

  /* Absolute, because /en/learn/ sits two directories deep and a relative link written for
     /hoc/ would resolve to /en/luyen-phim-yeu/ — right depth, wrong name, silent 404. */
  routes: {
    home: '/en/',
    lessons: '/en/lessons/',
    learn: '/en/learn/',
    test: '/en/typing-test/',
    progress: '/en/progress/',
    free: '/en/practice/',
    // No English weak-key page in this phase. `null` is the signal to omit the button
    // entirely rather than link somewhere that does not exist.
    weak: null,
    guide: '/en/touch-typing/'
  },

  /* player.js — the `T` table. Telex keys (imeNote, asciiNote…) are deliberately absent:
     the English course never sets inputMode "telex", so that code path is unreachable. */
  player: {
    loading: 'Loading the lesson…',
    missingTitle: 'This lesson has no content yet',
    missingBody: 'Nothing loaded from <code>{path}</code>. The lesson is still being written — try again later, or pick another one from the roadmap.',
    noCurriculum: 'The course index did not load (<code>data/curriculum.en.js</code>).',
    fixtureNote: 'Running on the sample content in <code>hoc/_fixture/</code> — the real lesson is not in <code>data/lessons/</code> yet.',
    screenOf: 'Screen {n} / {total}',
    newKey: 'NEW KEY',
    pressToContinue: 'Press <b>{key}</b> to continue',
    enterToContinue: 'Press <b>Enter</b> to continue',
    found: 'That is the one.',
    foundBody: 'Remember where <b>{key}</b> lives — we are about to drill it.',
    accuracyLive: '{accuracy}% accurate',
    errorsLive: '{count} errors',
    tokensLive: '{count} words',
    great: 'Excellent.',
    good: 'Nicely done.',
    pass: 'That passes.',
    fail: 'Under {min}% — this screen is worth another go.',
    resultAccuracy: '{accuracy}% accurate',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} errors',
    resultTokens: '{count} words correct',
    slowKey: '<b>{key}</b> was your slowest key ({ms} s each) — let the finger reach for it, then bring it straight back to the home row.',
    keepAccuracy: 'Ease off the pace and accuracy climbs — speed follows it, never the other way round.',
    continueEnter: 'Continue → (Enter)',
    redoScreen: 'Repeat this screen',
    redoScreenAdvised: 'Repeat this screen (recommended)',
    skipScreen: 'Skip',
    lessonDone: 'COMPLETE',
    learned: 'You have learned {count} keys:',
    statWpm: 'Speed',
    statAccuracy: 'Accuracy',
    statTime: 'Time',
    statStars: 'Stars',
    technique: 'Worth remembering',
    weakTitle: 'Keys worth more practice',
    weakButton: 'Drill for a minute',
    unitProgress: '{unit} · {done}/{total} lessons',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Back to the home page (Enter)',
    redoLesson: '↻ Start the lesson again',
    home: 'Home page',
    noMoreTitle: 'You have reached the end of what is written',
    noMoreBody: 'The next unit is still being made. In the meantime, try the typing test.',
    notReadyTitle: 'This lesson has no content yet',
    notReadyBody: '<b>{title}</b> is on the roadmap, but its content is still being written. Pick a lesson that is already open.',
    weakPage: 'Weak key practice',
    badgeNew: 'New badge',
    badgeAll: 'See every badge →',
    shiftFinger: 'the little finger on the other hand',
    testPage: 'Typing test',
    mobileNote: 'This course is built for a computer keyboard — ten fingers need ten real keys. You can try it on a phone, but come back to a keyboard to actually learn.',
    mobileNoteClose: 'Understood',
    tapToType: 'Tap to type',
    menuTitle: 'Paused',
    menuResume: 'Keep typing',
    menuRedo: 'Repeat this screen',
    menuSkip: 'Skip this screen',
    menuExit: 'Back to the home page',
    clock: '{seconds} s',
    lessonNumber: 'Lesson {number}',
    pageTitle: 'Lesson · TypingEase',
    screenTip: 'Screen {number} · {type}',
    firstLesson: 'Back to the first lesson'
  },

  /* player.js — FINGER_NAMES, keyed by the code the lesson data uses */
  fingers: {
    LP: 'left little finger', LR: 'left ring finger', LM: 'left middle finger',
    LI: 'left index finger', LT: 'left thumb',
    RT: 'right thumb', RI: 'right index finger', RM: 'right middle finger',
    RR: 'right ring finger', RP: 'right little finger'
  },

  /* keyboard/boot.js — the same fingers again, but keyed by the name the KEYBOARD uses.
     Two tables because the lesson data and the keyboard widget name fingers differently,
     and the player reads whichever one the screen came from. */
  keyboardFingers: {
    'left-pinky': 'left little finger', 'left-ring': 'left ring finger',
    'left-middle': 'left middle finger', 'left-index': 'left index finger',
    'left-thumb': 'left thumb', thumb: 'thumb',
    'right-index': 'right index finger', 'right-middle': 'right middle finger',
    'right-ring': 'right ring finger', 'right-pinky': 'right little finger'
  },

  /* keyboard/preferences.js — the settings dialog, and the link that opens it */
  keyboard: {
    title: 'Keyboard settings',
    showKeyboard: 'Show the keyboard',
    showHands: 'Show the hands',
    rightHandOnly: 'Right hand only',
    leftHandOnly: 'Left hand only',
    animatedHands: 'Hands follow the keys',
    letterCase: 'Key lettering',
    uppercase: 'UPPERCASE',
    lowercase: 'lowercase',
    layout: 'Keyboard layout',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close'
  },

  /* bai-hoc/curriculum-page.js — only the text the script WRITES at runtime. Everything
     printed into the page by generate.mjs already arrives in English. */
  curriculum: {
    done: (a, b) => `${a}/${b} lessons done`,
    legacy: n => `You finished ${n} lessons in the old course — Units 1 and 2 are already open.`,
    ctaResume: '▶ Continue', ctaStart: '▶ Start',
    ctaLesson: (verb, number, title) => `${verb} lesson ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'You have reached the end of what is written <span>→</span>',
    rowResume: (screen, total) => `▶ Continue · screen ${screen}/${total}`,
    rowStart: '▶ Start',
    rowDone: '✓ Done',
    unlocked: 'Open',
    unlockAfter: n => `Opens after lesson ${n}`,
    unlockNow: 'Open this unit now'
  },

  /* badges.js — titles and hints only; the rules stay in the code */
  badges: {
    'first-step': { title: 'First step', hint: 'Finish your first lesson.' },
    'unit-1': { title: 'A unit done', hint: 'Finish a whole unit.' },
    'stars-30': { title: '30 stars', hint: 'Collect 30 stars across the course.' },
    'stars-90': { title: '90 stars', hint: 'Collect 90 stars across the course.' },
    'streak-3': { title: 'Three days running', hint: 'Hit your daily goal three days in a row.' },
    'streak-7': { title: 'A full week', hint: 'Hit your daily goal seven days in a row.' },
    'clean-40': { title: '40 WPM clean', hint: 'One run at 40 WPM with 95% accuracy or better.' },
    'clean-60': { title: '60 WPM clean', hint: 'One run at 60 WPM with 95% accuracy or better.' },
    'typed-5000': { title: '5,000 keys', hint: 'Type five thousand keystrokes in total.' },
    'typed-20000': { title: '20,000 keys', hint: 'Type twenty thousand keystrokes in total.' }
  }
};
