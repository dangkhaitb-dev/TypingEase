/* i18n/ui.en.js — the English layer.
 *
 * Loaded by every English page — the landing page at `/` and everything under /en/ — with
 * <script src="/i18n/ui.en.js"></script> placed before every other script on the page. Vietnamese pages load nothing: each shared module keeps its
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
    // `/`, not `/en/`: English is what a visitor gets by default, so it lives at the root and
    // `/en/index.html` is now a redirect for the URL that used to be here. The course and the
    // article pages stay under /en/ — those are real pages with real content.
    home: '/',
    lessons: '/en/lessons/',
    learn: '/en/learn/',
    test: '/en/typing-test/',
    progress: '/en/progress/',
    free: '/en/practice/',
    // No English weak-key page in this phase. `null` is the signal to omit the button
    // entirely rather than link somewhere that does not exist — see how player.js guards
    // `R.weak`, and note that `R.progress` and `R.test` are guarded the same way now, so
    // turning any future page off again is one line here and nothing else.
    weak: null,
    guide: '/en/touch-typing/'
  },

  /* script.js — the `homeUi` table, shared by BOTH home pages. `shortcuts` is a fixed list of
     three and the landing page shows only two of them: script.js looks each card up by its own
     id, so the absent #sc-weak is skipped and #sc-free still gets index 2. Leave the middle
     entry in place — it is what the card will say when an English weak-key page exists. */
  home: {
    nav: ['Practice', 'Course', 'Progress', 'Typing test'],
    roadmapKicker: '{total} lessons · {units} units',
    roadmapAll: 'See all {total} lessons →',
    unitTitle: 'Unit {index} · {title}',
    unitDone: '{done}/{total} lessons ✓',
    railDone: '✓',
    railSoon: 'Soon',
    railNote: 'The later units are still being written — lessons that are not open yet are greyed out.',
    teaser: 'Unit {index} · {title} ({count} lessons)',
    teaserLocked: '🔒',
    shortcutsTitle: 'More practice',
    shortcuts: [
      ['Typing test', 'Measure your WPM and accuracy in a test from 15 seconds to 10 minutes.'],
      ['Weak key drill', 'Exercises generated from the keys you actually get wrong.'],
      ['Free practice', 'Paste your own text and type it your own way.']
    ],
    continueKicker: 'CONTINUE',
    continueName: 'Lesson {n} · {title}',
    continueCount: 'Unit {unit} · screen {screen}/{screens}',
    continueGo: '▶ Continue (Enter)',
    continueRedo: '↻ Start lesson {n} again',
    continueMap: 'See the course',
    streak: '🔥 {days} days · {minutes} min today',
    coachWeak: 'Coach: <b>{keys}</b> are holding you back — one minute on them?',
    legacy: 'You finished {n} lessons in the old course — Units 1 and 2 are already open.',
    doneKicker: 'KEEP IT UP',
    doneName: 'You have finished everything that is written',
    doneCount: 'The next unit is on the way. A timed test holds your pace in the meantime.',
    doneGo: '▶ Typing test (Enter)',
    exploreKicker: 'TypingEase resources',
    footer: 'Go a little slower, and you will get a lot further.',
    contentVi: ''
  },

  /* script.js — the `localizedUi` table. The landing page has no explore cards today, so only
     the two keys `applyCopy()` actually reads are here; the rest would be invented copy for
     blocks that do not exist. */
  localized: {
    exploreTitle: 'Explore TypingEase',
    explore: []
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
    boardAria: 'On-screen keyboard', keypadAria: 'On-screen number pad',
    keyboardShape: 'Keyboard shape', shapeAuto: 'Match the layout', shapeAnsi: '104 keys (long left Shift)', shapeIso: '105 keys (extra key by left Shift)',
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

  /* kiem-tra-toc-do-go/typing-test.js — the `T` table on /en/typing-test/: the passage itself,
     the status line above the box, the comparison with the previous run and every string the
     progress chart writes. Stat labels, duration buttons and the article around the tool are
     plain HTML and already arrive in English.

     Most of these strings are not new — typing-test.js used to carry them in a `text(vi, en)`
     helper and they moved here unchanged. Two did not: `measureAccuracy` follows a signed
     number ("+3 …"), where the old "% Accuracy" read badly, and `dateLocale` is the argument to
     toLocaleDateString, so the chart labels days as 09/22 rather than 22/09. */
  test: {
    passage: 'Touch typing is a skill built through calm, consistent practice. Keep your eyes on the screen, return your fingers to the home row, and focus on each accurate keystroke. As the movements become familiar, your speed can improve naturally and reliably.',
    title: '{seconds}-second typing test',
    titleMinutes: '{minutes}-minute typing test',
    finishedMinutes: 'Time is up after {minutes} min. Result: {wpm} WPM, {accuracy}% accuracy, {errors} errors.',
    accuracyName: 'Accuracy',
    // Passages the test chains together for long runs (up to 10 minutes): ordinary written English
    // with capitals, commas and apostrophes. The first is the old single passage.
    passages: [
      'Touch typing is a skill built through calm, consistent practice. Keep your eyes on the screen, return your fingers to the home row, and focus on each accurate keystroke. As the movements become familiar, your speed can improve naturally and reliably.',
      'Ten minutes a day is enough for your hands to learn where the keys are. What counts at the start is not speed but hitting the right key without looking down, over and over, until you stop having to think about it.',
      'Sit up, put both feet flat on the floor, rest your index fingers on F and J, and work through a few short lines before you take on a long paragraph. Stop when you notice your shoulders climbing toward your ears.',
      'The bus was late, so we waited under the awning and watched the rain come down the street in sheets. By the time it pulled in the sky had cleared, and none of us could remember what we had been arguing about.',
      'Accuracy comes first. Once your fingers know the way to each key, speed turns up on its own and you never have to reach for it. Typing fast and wrong only means going back to fix it, which costs more than it saves.',
      'The market opens before sunrise. By six the stalls are full of tomatoes, peppers and bunches of fresh herbs, and the baker at the corner has already sold half of his bread. Most people come early, before the heat and the crowds arrive.',
      'My neighbour keeps a small notebook by the window and writes down every bird she sees. Last spring she counted twenty-three kinds, from sparrows to a heron that stood in the pond for an hour and then flew off without a sound.',
      'A good soup starts with an onion, a little oil and some patience. Let the onion soften slowly, add the vegetables you have, cover everything with water and leave it alone for half an hour. Salt it at the end, not at the start.'
    ],
    ready: 'Ready when you are.',
    running: 'Calculating your result in real time.',
    finished: 'Time is up after {seconds} seconds. Result: {wpm} WPM, {accuracy}% accuracy, {errors} errors.',
    comparisonSame: 'Same as your previous result.',
    comparisonDelta: '{delta} WPM from your previous result',
    progressEmpty: 'Not enough data yet. Complete a few tests to see your progress.',
    progressNone: 'No progress data yet.',
    metricEmpty: 'No data is available for this metric.',
    chartEmpty: 'There is no suitable data to draw this chart.',
    chartLabel: '{metric} over time',
    trendEmpty: 'Not enough data to calculate a trend.',
    trendSame: 'No change from the start of this period.',
    trendDelta: '{change} {measure} from the start of this period.',
    measureAccuracy: 'points of accuracy',
    progressSummary: '{count} tests in the last {days} days. Average WPM {wpm}, average accuracy {accuracy}%.',
    dateLocale: 'en-US'
  },

  /* tien-do/progress-page.js — the `S_VI` table: every string the progress page writes at
     runtime (coach, heat map legend, badge meta, streak, lesson table). Static copy lives in
     en/progress/index.html and already arrives in English. `progress: '/en/progress/'` in
     `routes` above is what turns the badge link in player.js back on. */
  progress: {
    // profile.js buckets a learner at 0/20/35/50/70 WPM; these are the labels for those five.
    levels: ['Starting out', 'Getting there', 'Steady', 'Fast', 'Fluent'],
    // Kept in step with `home.legacy` and `curriculum.legacy`: the old 30-lesson store is not
    // per-language, so an English page can meet it too and has to say something sensible.
    legacy: n => `You finished ${n} lessons in the old course — Units 1 and 2 are already open.`,
    unit: index => `Unit ${index}`,
    soon: ' · soon',
    trendHint: n => (n === 1 ? 'One more lesson and there is enough to draw a trend.'
      : `${n} more lessons and there is enough to draw a trend.`),
    stripLevel: level => `Level: ${level}`,
    statWpm: 'Recent WPM',
    statAccuracy: 'Accuracy',
    statSessions: 'Sessions',
    target: (wpm, accuracy) => `Next target: <b>${wpm}</b> WPM · <b>${accuracy}</b>% accurate`,
    adviceStart: 'Type one lesson and this page will know where you stand.',
    actionStart: 'Start lesson 1 →',
    adviceWeak: keys => `${keys} are holding you back — a minute on them alone is worth a lot.`,
    actionWeak: keys => `Drill ${keys} →`,
    adviceSteady: 'You are moving along — one lesson a day keeps the pace.',
    actionLesson: (number, title) => `Lesson ${number} · ${title} →`,
    actionTest: 'Typing test →',
    actionLessons: 'See the course →',
    heatLegend: 'Accuracy per key',
    heatStrong: 'Solid',
    heatFair: 'Hit and miss',
    heatWeak: 'Needs work',
    // A named month, never `3/12/2026`, which is two different days depending on who reads it.
    // en-US to match `test.dateLocale` on the other English page that prints dates.
    badgeDate: at => new Date(at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Unlocked ${date}` : 'Unlocked'),
    number: value => value.toLocaleString('en-US'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minutes`,
    streak: days => `🔥 ${days} days running`,
    bestStreak: days => `Best: ${days} days`,
    today: minutes => `${minutes} minutes today`,
    clearConfirm: 'Delete all progress and scores stored on this device?'
  },

  /* luyen-tu-do/free-page.js — the free-practice page: its sample passages and the four
     feedback lines the script writes under the input. Everything else on /en/practice/ is
     static English in the markup.

     The samples are written here rather than generated from data/words/en.js. That file is a
     word bank — the generator's own comment says the groups are "commentary, not structure" —
     and words drawn from it in any order come out as word salad with no sentence in it, which
     is exactly what a free-practice passage must not be. Its `sentences` array is no better:
     those lines are each constrained to one lesson's key set, so stringing them together reads
     like a drill, not like prose. These four are ordinary written English instead: two on how
     to practise, two that are just text worth typing, with the commas, apostrophes and capitals
     you would meet in a real paragraph. Not a translation of the Vietnamese four — a
     translation of those would read as one. */
  free: {
    samples: [
      'Ten minutes a day is enough for your hands to learn where the keys are. What counts at the start is not speed but hitting the right key without looking down, over and over, until you stop having to think about it.',
      'Sit up, put both feet flat on the floor, rest your index fingers on F and J, and work through a few short lines before you take on a long paragraph. Stop when you notice your shoulders climbing toward your ears.',
      'The bus was late, so we waited under the awning and watched the rain come down the street in sheets. By the time it pulled in the sky had cleared, and none of us could remember what we had been arguing about.',
      'Accuracy comes first. Once your fingers know the way to each key, speed turns up on its own and you never have to reach for it. Typing fast and wrong only means going back to fix it, which costs more than it saves.'
    ],
    empty: 'Choose a passage to start typing.',
    idle: 'Paste something of your own, or take a sample passage.',
    done: 'Finished. Pick another passage to keep going.',
    clean: 'That is clean. Hold the rhythm steady.',
    mistakes: 'Some characters are off. Slow down a little.'
  },

  /* badges.js — titles and hints only; the rules stay in the code. Keys must match the ids in
     badges.js exactly; `typed-20000` sat here until 2026-09-22 describing a badge that has
     never existed. `telex` is absent on purpose — the English curriculum declares
     `features: []`, so badges.js drops that badge rather than showing an award nobody can
     earn, and a title for it would be a translation of something never rendered. */
  badges: {
    'first-step': { title: 'First step', hint: 'Finish your first lesson.' },
    'unit-1': { title: 'A unit done', hint: 'Finish a whole unit.' },
    'stars-30': { title: '30 stars', hint: 'Collect 30 stars across the course.' },
    'stars-90': { title: '90 stars', hint: 'Collect 90 stars across the course.' },
    'streak-3': { title: 'Three days running', hint: 'Hit your daily goal three days in a row.' },
    'streak-7': { title: 'A full week', hint: 'Hit your daily goal seven days in a row.' },
    'clean-40': { title: '40 WPM clean', hint: 'One run at 40 WPM with 95% accuracy or better.' },
    'clean-60': { title: '60 WPM clean', hint: 'One run at 60 WPM with 95% accuracy or better.' },
    'typed-5000': { title: '5,000 keys', hint: 'Type five thousand keystrokes in total.' }
  }
};
