/* content/games/en.mjs — English typing-games page (tooling/pages/games.mjs). Words come from
 * data/words/en.js, the bank the English courses are built from. */
export default {
  worlds: {"rain": "Firefly garden", "race": "Sunset circuit", "keys": "Space station"},
  slug: 'typing-games',
  title: "Typing games: Word Rain, Ghost Race & Key Hunt | TypingEase",
  description: "Play free typing games in your browser: type falling words, race a chosen pace and find keyboard positions. Three single-player games, no signup needed.",
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Home',
  crumb: 'Typing games',
  eyebrow: 'Practice that feels like play',
  h1: "Free typing games for words, speed and keyboard practice",
  intro: "Choose a game and start playing: clear falling words in Word Rain, follow a chosen pace in Ghost Race, or find lit keys in Key Hunt. No signup is needed. Read the guide below when you want to choose a focus or understand a result.",
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
    { h2: "Free typing games: choose what you want to practise", html: `<p>A game gives you a small task with a clear ending. That can make a useful change after a lesson, especially when you want to apply a movement rather than read another explanation. The three games here ask for different things: Key Hunt is about finding a key, Word Rain is about completing a word before it falls, and Ghost Race is about keeping a sequence of text moving against a chosen pace.</p>
<p>Start with the task that resembles your current difficulty. If you still search for letters, choose Key Hunt. If individual keys feel familiar but you hesitate when combining them, try Word Rain. If you can type words but lose your rhythm across a longer line, use Ghost Race. You can play without signing up; you do not need to finish the course before opening a game.</p>
<p>These are practice choices, not a promise that winning a round proves you have mastered touch typing. A game can tell you where an attempt went wrong. What you do with that observation matters more than replaying until a number goes up.</p>` },
    { h2: "Word Rain: type falling words before they reach the bottom", html: `<p>Choose Easy, Normal or Hard, then start the round. Read a word that is still falling, type it in the input field and press Space to submit it. Enter also submits on a physical keyboard. The text must match a word currently on screen. A word you remember from the previous round will not count if it is no longer falling.</p>
<p>Each word that reaches the bottom costs a life; three missed words end the round. The difficulty settings change the starting conditions, including falling speed and the word-length pool. As you clear words, the stage increases and the game becomes more demanding. A round that starts comfortably can therefore become difficult without you having changed the setting.</p>
<h3>Choose a word you can finish</h3>
<p>Try reading the whole word before you begin typing. Starting one word, abandoning it and switching to another often leaves you with an input that matches neither. If a word is close to the bottom, decide whether you can finish it in time. On the next round, lower the difficulty if most words disappear before you can even inspect what you typed.</p>
<p>A failed submission clears the input, so take a moment to check the word you intended to enter. Capitals and missing letters matter. Do not assume a correct-looking prefix is the complete word: the target highlighting shows a matching beginning, while clearing requires the whole word and a submission.</p>
<h3>Treat points as a game result</h3>
<p>Word Rain awards points according to word length and the current stage. Its accuracy result reflects successful submissions, rather than measuring every finger movement. A higher score can involve a longer round or a later stage. Use it to compare similar attempts, but do not read it as a general certificate of typing accuracy or compare it directly with another game's score.</p>` },
    { h2: "Typing race: set your own pace in Ghost Race", html: `<p>Ghost Race puts a pace car beside your progress. Pick a fixed pace such as 20, 30 or 40 WPM, or use the option based on your saved race best. This is a single-player typing race, and the typing challenge is the pace you picked: the other car follows that speed, not another person waiting online, and it is not a replay of your exact earlier keystrokes.</p>
<p>Press Start race and read the text. Movement begins when you enter the first character, so you can find your starting position first. Copy the displayed sequence from the beginning, including its spaces. The prompt is assembled from the game's word bank; it is a copying exercise, not a story you should try to finish from memory.</p>
<h3>Fix the first mismatch before adding more text</h3>
<p>Your car advances according to the matching beginning of what you have typed. If an early character is wrong, adding correct characters after it will not move that boundary past the error. Look back for the first mismatch and correct it. This makes a useful distinction between typing more characters and completing the requested text correctly.</p>
<p>Choose a pace that leaves room to read and correct. If every attempt becomes a scramble, lower it. When you can finish with control, try a higher pace and observe which transitions become difficult. There is no need to choose the highest setting just because it appears in the menu.</p>
<h3>Know what the saved-best option means</h3>
<p>Without a saved race best, that option starts from 30 WPM. A saved result supplies a pace target, with a minimum pace of 15 WPM. It does not reproduce where you paused in a previous attempt. If you want predictable comparisons while working on a specific problem, select a fixed pace and keep it unchanged for a few rounds.</p>` },
    { h2: "Key Hunt: typing practice games for keyboard positions", html: `<p>Key Hunt lights a target on the on-screen keyboard. Press the corresponding physical key, then find the next target. A round lasts 60 seconds. Correct hits increase the hit count; a wrong recognised key breaks the current streak. Watch both the number of hits and the longest streak so that a rush of guesses does not look like the same result as a controlled sequence.</p>
<p>The game reads physical key positions using the keyboard layout shown on screen. That is different from Word Rain and Ghost Race, which ask you to produce matching text. Before starting, check that the displayed arrangement is the one you intend to practise. A different operating-system layout does not turn a different physical position into the target shown by the game.</p>
<h3>Keep your attention on one movement</h3>
<p>Use the target to locate the key, then try the movement without looking down at your hands. If you need a glance, make it a specific check and return your eyes to the screen. The game detects the key press; it cannot verify which finger you used or whether you looked down. Those are things to observe yourself.</p>
<p>Do not treat Key Hunt as a complete test of punctuation, capitals or sentence typing. It selects letter targets from the available layout. When the positions feel more familiar, move to words or open a lesson that combines the keys you are learning. A high hit count is a useful game result, not evidence that every kind of text will now feel easy.</p>` },
    { h2: "Turn a game result into your next typing lesson", html: `<p>Before playing, pick one question: do I lose my place after a reach, miss spaces, or rush past a wrong character? After the round, answer that question before pressing Play again. A note such as “lose position after P” gives you something to practise. “Need a better score” does not identify the movement behind the result.</p>
<p>If the same position keeps causing trouble, use the <a class="inline-link" href="{course}">{lessons}-lesson typing course</a> to find structured practice. If the game feels straightforward but you want a separate speed sample, use the <a class="inline-link" href="{test}">typing test</a>. Keep language, input method and duration in mind when comparing results. Scores from a falling-word game, a race and a test describe different tasks.</p>
<p>The approach behind TypingEase is to offer intentional keyboard habits when someone begins using a computer regularly. We want the learner to have something more useful than “go faster”: find a position, complete a word, notice a mismatch. For a child beginning schoolwork on a computer, those small tasks can be preparation for writing independently. They are not a reason to impose an adult speed target or turn every round into a competition.</p>
<p>That same approach works as a way to organise adult practice: choose a task you actually need and pay attention to one difficulty. Stop replaying when you are only chasing the animation. Return to a lesson, change the task or leave a clear note for the next session.</p>` }
  ],
  faqTitle: "Questions about the typing games",
  faq: [
    [
        "Can I race other players?",
        "Ghost Race is single-player. The pace car holds the speed you choose, including an option based on your saved best. It does not connect you to other players or provide a public leaderboard. Choose a fixed pace if you want the same target across several attempts."
    ],
    [
        "Where are my best scores saved?",
        "The games store their best-score records in this browser's local storage, separately by language. They are not an account-based score history that automatically follows you to another device. Clearing site data can remove them, and blocked storage may prevent a result from being retained."
    ],
    [
        "Why did Word Rain reject my word?",
        "Check that the complete word is still falling and that your text matches it, including capitals. Then submit with Space or Enter. A highlighted beginning is not enough. If the word has already reached the bottom, typing it afterwards will not clear a new target."
    ],
    [
        "Why is my race car stuck while I keep typing?",
        "The car follows the correct beginning of your input. An earlier mismatch holds that progress back even if later characters look right. Find the first error, correct it and check the spaces. Adding more text after the error does not resolve it."
    ],
    [
        "Can I play these typing games on a phone?",
        "Word Rain and Ghost Race accept text input and include handling for software keyboards. Keyboard and browser behaviour can still differ. Key Hunt needs physical key-position events, so use a physical keyboard for it. A phone typing result is a different task from ten-finger practice on a computer."
    ],
    [
        "Which game should a beginner choose?",
        "Choose Key Hunt when finding letter positions is the difficulty, Word Rain when you want to combine letters into words, and Ghost Race when you want a chosen pace for copying text. Start with manageable settings. If you need finger-placement instruction, begin with a lesson and return to the game afterwards."
    ]
],
  cta: { eyebrow: 'Want to play better?', title: 'Learn to touch type', text: '{lessons} lessons on your own keyboard layout, starting with the home row.', button: 'See the course' }
};
