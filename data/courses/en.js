/* data/courses/en.js — lời dạy tiếng Anh cho các khoá tiếng Anh SINH TỰ ĐỘNG.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/en-<họ>/*.json.
 *
 * KHOÁ QWERTY TIẾNG ANH KHÔNG ĐI QUA FILE NÀY. Nó có 27 công thức viết tay trong scripts/lessons-en/
 * và hay hơn mọi thứ sinh ra ở đây; data/languages.js đánh dấu nó `handwritten: true` để
 * build-course.js từ chối đụng vào. File này chỉ phục vụ những họ trước đây không có gì cả —
 * Dvorak, Colemak, Colemak-DH, Workman — và với người dùng các bố cục ấy, một khoá sinh tự động
 * đúng từng phím hơn hẳn một khoá QWERTY viết hay mà dạy sai chỗ.
 *
 * Không có họ "mặc định" ở đây nên không có `keyboardId`: mỗi họ lấy bố cục đầu tiên của nó trong
 * data/languages.js. Kho từ là data/words/en.js, dùng chung với khoá viết tay.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo, không
 * dấu chấm than. Không câu nào được nhắc tới một chữ cái cụ thể nằm ở đâu: file này phục vụ bốn bố
 * cục đặt chữ cái ở bốn chỗ khác nhau, nên chỗ nào cần chữ thì dùng chỗ trống.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.en = {
  lang: 'en',
  name: 'English',

  // Mặc định của build-course.js là đúng bộ này — nhắc lại cho rõ. Dvorak đặt `-` ở hàng cơ sở
  // và `' , .` ở hàng trên, nên chúng phải được tính là phím chữ khi dựng bài luyện ngón.
  letterTest: "^[a-z;',.\\/-]$",

  // Ký tự dấu nào là ký tự THẬT trên bố cục của khoá này, không phải phím chết — xem
  // scripts/lib/unit-symbols.js. Unit ký hiệu chỉ dạy những cái này.
  symbolsLive: ['^', '`', '~'],

  // Cả bốn họ đều in chữ số thật ở hàng số và có dấu chấm ở ô riêng, nên không họ nào cần công
  // tắc. Câu dạy cũng không cần sửa: mọi chỗ nói tới chữ cái đều là chỗ trống.
  families: {
    dvorak: {},
    colemak: {},
    'colemak-dh': {},
    workman: {}
  },

  teaching: {
    and: ' and ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'comma', '.': 'period', ';': 'semicolon', "'": 'apostrophe', '-': 'hyphen', '/': 'slash' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Every other key',
      unitSummary: 'The {count} characters this keyboard has that the course has not used yet — brackets, currency, the rest of the Shift layer — each typed where it is actually used.',
      groupSymbols: 'The remaining keys',
      groupFinish: 'Finish the unit',
      titleNumberRow: 'Symbols on the number row',
      titleKeys: '{keys}',
      titleReview: 'All the symbols together',
      summaryKeys: 'The last keys: {keys}.',
      summaryReview: 'Every symbol of this unit, mixed into words and numbers.',
      summaryTest: 'A timed test with every key on the keyboard.',
      introLesson: 'Keys this course has not used yet: {keys}. {shiftNote}',
      shiftNote: 'Each of them is Shift plus a key your fingers already know — Shift with the little finger of the other hand.',
      shiftNoteMixed: 'Some need Shift, held by the little finger of the other hand; the rest sit on a key the course has not used before.',
      introKey: '{key} belongs to {finger}{shift}.',
      introKeyShift: ', with Shift held by the other hand',
      drillOne: '{key} on its own first, then where it is actually used.',
      burst: 'A burst of short pieces with these characters in them.',
      together: 'Everything from this lesson, mixed.',
      inWords: 'Words again, with the symbols where they belong.',
      introReview: 'No new keys. Every character of this unit, mixed into words and numbers.',
      reviewFirst: 'Take the symbols at the same pace as the letters around them.',
      reviewLine: 'Keep the rhythm through the symbols; they are keys like any other.',
      congratsKeys: '{keys}: under your fingers now. Shift with the other hand, and a symbol comes as easily as the letter beside it.',
      congratsReview: 'Every key of this keyboard has had its turn.',
      introTest: 'A timed test with everything, symbols included.',
      congratsTest: 'That was the whole keyboard. There is no key left on it that this course has not taught you.',
      testText: 'Words, numbers and symbols. Hold one pace from start to finish.'
    },

    fingers: {
      LP: 'your left little finger', LR: 'your left ring finger', LM: 'your left middle finger',
      LI: 'your left index finger', LT: 'your left thumb', RT: 'your right thumb',
      RI: 'your right index finger', RM: 'your right middle finger', RR: 'your right ring finger',
      RP: 'your right little finger'
    },

    /* --- the right little finger's outer column --- */
    introEdge: 'The keys along the right edge, all of them for the little finger. They are the longest reaches that finger makes, and the ones least practised afterwards.',
    drillEdgePair: 'Now {keys}. The little finger goes out and comes back; the hand stays where it is.',
    burstEdge: 'A burst with what you have of this column so far.',
    drillEdgeAll: 'All six together. This is the corner of the keyboard where the wrist twists most if the finger does not come home.',
    burstEdgeWords: 'Words again, to loosen the hand after all that edge.',
    edgeBackToWords: 'Back to words, with the whole keyboard available.',
    edgeClose: 'Whole sentences to close the key lessons.',

    /* --- key introductions --- */
    introKey: 'This key belongs to {finger}. Find it without looking, press it once, and let the finger return. The way back matters as much as the press.',
    pressToContinue: 'Press <b>{key}</b> to continue',
    introSpace: 'The space bar belongs to your right thumb. The thumbs do nothing else, which is why you never have to look for it.',
    pressSpace: 'Press the <b>space bar</b> to continue',

    /* --- drills --- */
    drillSpace: 'Short groups with spaces between them. The right thumb goes down and up; every other finger stays put.',
    drillNew: 'Only {key} and what you already know. Slowly, and bring the finger back to the home row after every press.',
    drillMixed: 'The new keys mixed with the old ones, which is how they will turn up inside words.',
    drillAgain: 'The two new keys once more. There are no words to write with them yet, and that is expected.',
    drillWide: 'Everything you have so far, in short groups. Eyes on the screen, not on your hands.',
    drillAll: 'One last round with everything learned up to here.',
    patternsBack: 'Back to patterns for a moment, to check that the fingers still find their way home.',

    /* --- bursts --- */
    burstKeys: 'Short groups, one after another. Keep going to the end even if you miss one.',
    burstLonger: 'Slightly longer groups. Hurrying does not help yet.',
    burstWords: 'A burst of short words with the new keys in them.',

    /* --- words --- */
    wordsNew: 'Real words with the new keys. Type each word in one go, not letter by letter.',
    wordsOne: 'Now the weight is on <b>{key}</b>, the one you have pressed least.',
    wordsAll: 'Everything you have, mixed together. Notice how many words already come without thinking.',

    /* --- review --- */
    introReview: 'No new keys in this lesson. Only the ones you know, longer and faster than you have typed them so far.',
    introReviewMixed: 'Letters, numbers and symbols together, the way they appear outside a course.',
    pressEnter: 'Press <b>Enter</b> to begin',
    reviewWords1: 'Single words to start. No rush: speed comes out of accuracy, never the other way round.',
    reviewBurst: 'A short burst. Finish the list even if one gets away from you.',
    reviewWords2: 'Five words to a line. Let your eyes run ahead of your fingers.',
    reviewPatterns: 'Patterns again, to check the fingers keep returning to the home row.',
    reviewShort: 'Short words at a good pace. These should almost type themselves by now.',
    reviewBurst2: 'More time and more words. Hold the same rhythm from start to finish.',
    reviewClose: 'Whole sentences. This is where you find out whether the hand goes home on its own.',
    reviewLast: 'The last round. If you got here without looking at the keyboard, the lesson is done.',

    /* --- Shift and Enter --- */
    introShift: 'Capitals come from the little finger of the hand opposite the letter. Hold Shift, press the letter, let go. Never with the same little finger that types it.',
    pressShift: 'Hold <b>Shift</b> and press a letter to continue',
    drillShift: 'Capitals and lower case, alternating. The little finger goes down and up; the other hand does not move.',
    wordsShift: 'Words with a capital at the front, the way names are written.',
    introEnter: 'Enter belongs to your right little finger, to the right of the home row. It is the biggest key that finger has to reach.',
    pressEnterKey: 'Press <b>Enter</b> to continue',
    drillEnter: 'A line, Enter, the next line. The little finger goes out and back without dragging the hand along.',
    shiftSentences: 'Sentences with a capital at the start and a period at the end. This is starting to look like real writing.',
    shiftBurst: 'A burst to settle what this lesson taught.',
    shiftWords2: 'Five to a line, with the little finger working in both directions.',
    shiftClose: 'Whole sentences to finish. Shift, letter, release — without stopping to think about it.',

    /* --- number row --- */
    introDigits: 'The number row sits above the top row. Each finger goes straight up and straight back down. These are the longest reaches in the course.',
    drillDigitPair: '{keys} belong to {finger} and its partner on the other hand. Up, press, back to the home row.',
    drillDigitIndex: 'The two that are left go to the index fingers, which already reach more keys than any other finger.',
    burstDigits: 'A short burst with the numbers you have so far.',
    burstDigitsAll: 'All ten, mixed. People miss a lot here at first; that is normal.',
    digitsAll: 'The whole row, in groups. Do not look down to find the 6.',
    digitsBackToWords: 'Back to words for a moment, so your hands remember where they live.',
    digitsClose: 'Sentences again, now with the whole keyboard available.',

    /* --- prose --- */
    introProse: 'Long, continuous text. What gets trained here is not a new key but holding the same rhythm over several lines.',
    proseLine: 'Keep reading ahead of what you type. Stopping to look costs more time than fixing a mistake.',
    proseBurst: 'One last long burst to finish.',

    /* --- weak keys and tests --- */
    weakText: 'A drill built from the keys you miss most. It changes every time you practise.',
    testText: 'No new keys. Type at a pace you can hold all the way to the end.',

    /* --- titles --- */
    titleFirst: '{keys} and the space bar',
    titleKeys: '{keys}',
    titleReview: 'Review',
    titleReviewMixed: 'Addresses, links and numbers',
    titleShift: 'Shift and Enter',
    titleEdge: 'The outer column',
    titleDigits: 'The number row',
    titleProse: 'Text and rhythm {n}',
    titleWeak: 'Weak keys',
    titleTest: 'Unit {unit} test',

    /* --- roadmap summaries --- */
    summary: {
      edge: 'The column along the right edge: six keys, all for the little finger.',
      first: 'The two keys with bumps, the space bar, and the habit of not looking down.',
      keys: 'Two new keys: {keys}. The finger goes out, presses, and comes back.',
      review: 'No new keys. Everything so far, longer and faster.',
      shift: 'Capitals with the opposite little finger, and the line break.',
      digits: 'All ten numbers, each finger going straight up.',
      prose: 'Whole paragraphs, to hold the rhythm past a single line.',
      weak: 'A drill generated from the keys you miss most.',
      test: 'A timed test with everything learned so far.'
    },

    /* --- lesson openings --- */
    intro: {
      edge: 'Your right little finger carries more keys than any other, and the ones on the edge are the ones almost nobody practises. They sit further from the home row than anything else, so the trick is the usual one: out, press, back, without the hand following.',
      first: 'The keys with a small bump are where everything starts. Both index fingers rest there and do not wander; the rest of the course is measured from that position. Start by placing both hands and looking only at the screen.',
      keys: 'Two new keys in this lesson: {keys}. They belong to {fingers}. The movement is always the same — out, press, back — and the way back is the part being trained, because a finger left out of place spoils the next letter.',
      review: 'This lesson teaches nothing new. It is the moment to check that what came before comes out without thinking, which is not the same as knowing where each key is.',
      shift: 'Everything so far has been lower case. Shift changes that, and it has one rule worth getting right from the start: the little finger of the hand opposite the letter presses it. With the same little finger the hand twists and you end up looking at the keyboard.',
      digits: 'The number row is above everything you have typed so far, and it is the only row where the fingers reach up instead of down. More goes wrong here than anywhere else in the course, and it gets fixed the same way as everything else: slowly at first.',
      prose: 'You have the whole keyboard now. What is left is not learning keys but holding a rhythm: read ahead, do not stop to look, and do not speed up at the end of a line.',
      weak: 'This drill is built from the keys you miss, not from a fixed list. When you change, it changes.',
      test: 'A timed test. Nothing new: only what you already know, at a pace you can keep up.'
    },

    /* --- lesson endings --- */
    congrats: {
      edge: 'That column is the one most courses leave half-done. Not yours.',
      first: 'Your hands are in place. From here on, everything is a key you reach from this position and let go of again.',
      keys: 'Two more keys under your fingers. If {keys} already come without searching, the lesson has done its job.',
      review: 'Nothing new, and faster anyway. That is exactly what was supposed to happen.',
      shift: 'With Shift and Enter you can type a whole piece of text the way it is written outside this course.',
      digits: 'The number row is the hardest one and the least practised afterwards. Come back to this lesson now and then.',
      prose: 'Whole paragraphs at a steady pace. That is no longer learning to type; it is typing.',
      weak: 'Weak keys stop being weak with a minute a day, not an hour a month.',
      test: 'Test passed. The number matters less than getting to the end without looking.'
    },

    units: {
      u1: { title: 'The home row',
        summary: 'Eight keys under your fingers, then {reach} — enough to type real words without looking down.' },
      u2: { title: 'The rest of the alphabet',
        summary: 'Top row, bottom row, punctuation and capitals — the whole alphabet, plus Shift and Enter.' },
      u3: { title: 'Numbers, symbols and speed',
        summary: 'The number row, the right-hand edge, real addresses and links, then long paragraphs at a steady pace.' }
    },

    groups: {
      start: 'Start here',
      reach: 'Reaching out',
      finish: 'Finish the unit',
      'numbers-symbols': 'Numbers and symbols',
      speed: 'Speed'
    },

    starterHint: 'Rest your index fingers on the two keys with bumps and type what you see, without looking at the keyboard.'
  }
};
