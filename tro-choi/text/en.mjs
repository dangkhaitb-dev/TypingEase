/* tro-choi/text/en.mjs — English typing-games page (scripts/build-game-pages.mjs). Words come from
 * data/words/en.js, the bank the English courses are built from. */
export default {
  slug: 'typing-games',
  title: 'Free typing games on your own keyboard | TypingEase',
  description: 'Three free typing games: Word Rain, Ghost Race and Key Hunt. Practise touch typing on your real keyboard layout in the browser, no signup needed.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Home',
  crumb: 'Typing games',
  eyebrow: 'Practice that feels like play',
  h1: 'Typing games',
  intro: 'Three short games to play between lessons: clear falling words, race your own pace, and hunt keys on an on-screen keyboard. Your best scores stay on this device.',
  tabsAria: 'Choose a game',
  locale: 'en-US',
  howAria: "How to play",
  how: {
    rain: ["Words fall from the top.", "Type the word exactly.", "Press Space to clear it. Miss three and it is over."],
    race: ["Pick a speed for the pace car.", "Type the passage from the first letter.", "Reach the flag before the pace car."],
    keys: ["A key lights up on the keyboard.", "Keep your eyes on the screen and press it.", "Hit as many as you can in 60 seconds."]
  },
  modes: {
    rain: ['Word Rain', 'Type the falling word and press Space to clear it.'],
    race: ['Ghost Race', 'Finish the passage before the pace car does.'],
    keys: ['Key Hunt', 'Hit the lit key, as many times as you can in 60 seconds.']
  },
  rain: {
    difficulty: 'Level', easy: 'Easy', normal: 'Normal', hard: 'Hard',
    score: 'Score', level: 'Stage', lives: 'Lives', best: 'Best',
    start: 'Start', placeholder: 'Type a falling word, then Space',
    hint: 'Let three words reach the bottom and the game is over.'
  },
  race: {
    pace: 'Pace car', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Start race', you: 'You', ghost: 'Pace', placeholder: 'Type the passage above, from the first letter'
  },
  keys: {
    start: 'Start hunting', time: 'Seconds', hits: 'Hits', streak: 'Streak', best: 'Best',
    hint: 'Eyes on the screen, not on your hands. Keys are read by position, so any system layout works.'
  },
  runtime: {
    over: 'Game over', again: 'Play again', newBest: 'New best on this device!',
    rainResult: '{score} points · {words} words cleared · {wpm} WPM · {accuracy}% on target',
    raceReady: 'The pace car runs at {wpm} WPM. Press "Start race", then type the first letter to go.',
    raceGo: 'Go!', raceWin: 'You finished first!', raceLose: 'The pace car won this time.',
    racePaused: 'Stopped. Press "Start race" to go again.',
    raceResult: '{seconds} seconds · {wpm} WPM · {accuracy}% accuracy · pace car {ghost} WPM',
    paceBest: 'Your best ({wpm} WPM)',
    keysResult: '{hits} hits · longest streak {streak} · {accuracy}% accuracy'
  },
  sections: [
    { h2: 'Three games, one skill', html: '<p>Each game trains one part of touch typing. <b>Key Hunt</b> drills where every key is: the lit key tells you which finger moves, without looking down. <b>Word Rain</b> trains typing whole words under time pressure. <b>Ghost Race</b> trains an even rhythm across a whole passage, against a pace car set to the speed you pick.</p>' },
    { h2: 'On your own keyboard layout', html: '<p>The on-screen keyboard in Key Hunt is the layout of your course, and keys are recognised by their physical position rather than by the character your system types. Word Rain and Ghost Race use the same words as the <a class="inline-link" href="{course}">{lessons}-lesson course</a>.</p>' },
    { h2: 'How to get something out of it', html: '<ul><li>Play after a lesson; five to ten minutes is plenty.</li><li>Pick a level where you get most words right, and drop down if you keep missing.</li><li>In Ghost Race, set the pace car a little below your real speed and raise it over time.</li><li>For a proper speed measurement use the <a class="inline-link" href="{test}">typing test</a>, not a game.</li></ul>' }
  ],
  faqTitle: 'Common questions',
  faq: [
    ['Can I play against other people?', 'Not yet. Ghost Race is against a pace car that holds the speed you choose, or your own best. There are no other players and no leaderboard.'],
    ['Where are my best scores kept?', 'Only in this browser on this device. No account, and nothing is sent anywhere.'],
    ['Can I play on a phone?', 'Word Rain and Ghost Race work with a phone keyboard. Key Hunt needs a real keyboard, because it teaches where the keys are.'],
    ['Why did a correct word not clear?', 'It has to match exactly before you press Space. Check for a stray capital or a missing letter.']
  ],
  cta: { eyebrow: 'Want to play better?', title: 'Learn to touch type', text: '{lessons} lessons on your own keyboard layout, starting with the home row.', button: 'See the course' }
};
