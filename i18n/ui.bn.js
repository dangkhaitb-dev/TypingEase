/* i18n/ui.bn.js — lớp tiếng Bengali (বাংলা).
 *
 * Nạp bởi mọi trang dưới /bn/, bằng <script src="/i18n/ui.bn.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên. Khoá thiếu ở đây thì hiện tiếng Việt — tên khoá phải khớp CHÍNH XÁC với bảng nó
 * ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * Xưng hô với người học bằng আপনি, nhất quán; tiếng Bengali chuẩn (চলিত ভাষা).
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 */
window.TypingEaseUI = {
  lang: 'bn',

  /* Tuyệt đối, vì /bn/shikhun/ nằm sâu hai cấp. */
  routes: {
    home: '/bn/',
    lessons: '/bn/path/',
    learn: '/bn/shikhun/',
    // Chưa có các trang này bằng tiếng Bengali. `null` là tín hiệu BỎ liên kết.
    test: '/bn/typing-test/',
    progress: '/bn/agragati/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /bn/ */
  home: {
    nav: ['অনুশীলন', 'কোর্স'],
    roadmapKicker: '{total}টি পাঠ · {units}টি ইউনিট',
    roadmapAll: '{total}টি পাঠই দেখুন →',
    unitTitle: 'ইউনিট {index} · {title}',
    unitDone: '{done}/{total}টি পাঠ ✓',
    railDone: '✓',
    railSoon: 'শিগগির',
    railNote: 'পরের ইউনিটগুলো লেখা হচ্ছে — যে পাঠগুলো এখনো খোলেনি সেগুলো ধূসর দেখায়।',
    teaser: 'ইউনিট {index} · {title} ({count}টি পাঠ)',
    teaserLocked: '🔒',
    shortcutsTitle: 'আরও অনুশীলন',
    shortcuts: [
      ['গতির পরীক্ষা', 'প্রতি মিনিটে কত শব্দ আর কতটা নির্ভুল, মেপে দেখুন।'],
      ['দুর্বল কী', 'আপনি যে কীগুলোতে সবচেয়ে বেশি ভুল করেন, সেগুলো দিয়ে অনুশীলন।'],
      ['মুক্ত অনুশীলন', 'নিজের লেখা বসিয়ে নিজের মতো করে টাইপ করুন।']
    ],
    continueKicker: 'চালিয়ে যান',
    continueName: 'পাঠ {n} · {title}',
    continueCount: 'ইউনিট {unit} · স্ক্রিন {screen}/{screens}',
    continueGo: '▶ চালিয়ে যান (Enter)',
    continueRedo: '↻ পাঠ {n} আবার করুন',
    continueMap: 'কোর্স দেখুন',
    streak: '🔥 {days} দিন · আজ {minutes} মিনিট',
    coachWeak: 'খেয়াল করুন: <b>{keys}</b> আপনার গতি কমাচ্ছে — এগুলো নিয়ে এক মিনিট?',
    legacy: 'আগের কোর্সের {n}টি পাঠ আপনি শেষ করেছেন — ইউনিট ১ আর ২ এখন খোলা।',
    doneKicker: 'ছন্দ ধরে রাখুন',
    doneName: 'যা লেখা হয়েছে তার সবই আপনি শেষ করেছেন',
    doneCount: 'পরের ইউনিট আসছে। ছন্দ না হারাতে একটি পাঠ আবার করুন।',
    doneGo: '▶ কোর্স দেখুন (Enter)',
    exploreKicker: 'TypingEase-এর আরও কিছু',
    footer: 'একটু ধীরে চলুন, অনেক দূর যাবেন।',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'TypingEase ঘুরে দেখুন',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'পাঠ লোড হচ্ছে…',
    missingTitle: 'এই পাঠে এখনো কিছু নেই',
    missingBody: '<code>{path}</code> থেকে কিছুই লোড হয়নি। পাঠটি এখনো লেখা হচ্ছে — পরে আবার চেষ্টা করুন, অথবা কোর্স থেকে অন্য একটি পাঠ বেছে নিন।',
    noCurriculum: 'কোর্সের সূচি (<code>data/curriculum.bn.js</code>) লোড হয়নি।',
    fixtureNote: '<code>hoc/_fixture/</code>-এর নমুনা দিয়ে চলছে — আসল পাঠ এখনো <code>data/lessons/</code>-এ নেই।',
    screenOf: 'স্ক্রিন {n} / {total}',
    newKey: 'নতুন কী',
    pressToContinue: 'এগোতে <b>{key}</b> চাপুন',
    enterToContinue: 'এগোতে <b>Enter</b> চাপুন',
    found: 'এটাই।',
    foundBody: '<b>{key}</b> কোথায় আছে মনে রাখুন — এখন এটা অনুশীলন করব।',
    accuracyLive: '{accuracy}% নির্ভুল',
    errorsLive: '{count}টি ভুল',
    tokensLive: '{count}টি শব্দ',
    great: 'চমৎকার।',
    good: 'খুব ভালো।',
    pass: 'পাস।',
    fail: '{min}%-এর নিচে — এই স্ক্রিনটি আবার করা ভালো।',
    resultAccuracy: '{accuracy}% নির্ভুল',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count}টি ভুল',
    resultTokens: '{count}টি শব্দ ঠিক',
    slowKey: '<b>{key}</b> ছিল আপনার সবচেয়ে ধীর কী (প্রতিবার {ms} সেকেন্ড) — আঙুলকে কীটি ছুঁয়েই মূল সারিতে ফিরে আসতে দিন।',
    keepAccuracy: 'গতি কমালে নির্ভুলতা বাড়ে — গতি আসে পরে, উল্টোটা কখনো নয়।',
    continueEnter: 'এগিয়ে যান → (Enter)',
    redoScreen: 'এই স্ক্রিন আবার করুন',
    redoScreenAdvised: 'এই স্ক্রিন আবার করুন (পরামর্শ)',
    skipScreen: 'বাদ দিন',
    lessonDone: 'শেষ হয়েছে',
    learned: 'আপনি এখন {count}টি কী জানেন:',
    statWpm: 'গতি',
    statAccuracy: 'নির্ভুলতা',
    statTime: 'সময়',
    statStars: 'তারা',
    technique: 'মনে রাখার মতো',
    weakTitle: 'যে কীগুলো আরও অনুশীলন চায়',
    weakButton: 'এক মিনিট অনুশীলন করুন',
    unitProgress: '{unit} · {done}/{total}টি পাঠ',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ প্রথম পাতায় ফিরুন (Enter)',
    redoLesson: '↻ পাঠটি আবার শুরু করুন',
    home: 'প্রথম পাতা',
    noMoreTitle: 'যা লেখা হয়েছে তার শেষে পৌঁছে গেছেন',
    noMoreBody: 'পরের ইউনিট এখনো তৈরি হচ্ছে। ততক্ষণ একটি পাঠ আবার করুন — ভালো ছন্দে দ্বিতীয়বার করা যতটা মনে হয় তার চেয়ে বেশি কাজে দেয়।',
    notReadyTitle: 'এই পাঠে এখনো কিছু নেই',
    notReadyBody: '<b>{title}</b> কোর্সে আছে, কিন্তু এর বিষয়বস্তু এখনো লেখা হচ্ছে। যে পাঠ খোলা আছে এমন একটি বেছে নিন।',
    weakPage: 'দুর্বল কী অনুশীলন',
    badgeNew: 'নতুন ব্যাজ',
    badgeAll: 'সব ব্যাজ দেখুন →',
    shiftFinger: 'অন্য হাতের কড়ে আঙুল',
    testPage: 'গতির পরীক্ষা',
    mobileNote: 'এই কোর্স কম্পিউটারের কিবোর্ডের জন্য তৈরি — দশ আঙুলের জন্য দশটি আসল কী লাগে। ফোনে চেষ্টা করে দেখতে পারেন, কিন্তু সত্যিই শিখতে কিবোর্ডে ফিরে আসুন।',
    mobileNoteClose: 'বুঝেছি',
    tapToType: 'টাইপ করতে ছুঁয়ে দিন',
    menuTitle: 'বিরতি',
    menuResume: 'আবার টাইপ করুন',
    menuRedo: 'এই স্ক্রিন আবার করুন',
    menuSkip: 'এই স্ক্রিন বাদ দিন',
    menuExit: 'প্রথম পাতায় ফিরুন',
    clock: '{seconds} সে.',
    lessonNumber: 'পাঠ {number}',
    pageTitle: 'পাঠ · TypingEase',
    screenTip: 'স্ক্রিন {number} · {type}',
    firstLesson: 'প্রথম পাঠে ফিরুন'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'বাঁ হাতের কড়ে আঙুল', LR: 'বাঁ হাতের অনামিকা', LM: 'বাঁ হাতের মধ্যমা',
    LI: 'বাঁ হাতের তর্জনী', LT: 'বাঁ হাতের বুড়ো আঙুল',
    RT: 'ডান হাতের বুড়ো আঙুল', RI: 'ডান হাতের তর্জনী', RM: 'ডান হাতের মধ্যমা',
    RR: 'ডান হাতের অনামিকা', RP: 'ডান হাতের কড়ে আঙুল'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'বাঁ হাতের কড়ে আঙুল', 'left-ring': 'বাঁ হাতের অনামিকা',
    'left-middle': 'বাঁ হাতের মধ্যমা', 'left-index': 'বাঁ হাতের তর্জনী',
    'left-thumb': 'বাঁ হাতের বুড়ো আঙুল', thumb: 'বুড়ো আঙুল',
    'right-index': 'ডান হাতের তর্জনী', 'right-middle': 'ডান হাতের মধ্যমা',
    'right-ring': 'ডান হাতের অনামিকা', 'right-pinky': 'ডান হাতের কড়ে আঙুল'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó. Chữ Bengali không có hoa/thường,
     nên hai lựa chọn `letterCase` chỉ đổi nhãn của các phím ký hiệu Latin trên bàn phím. */
  keyboard: {
    title: 'কিবোর্ডের সেটিংস',
    showKeyboard: 'কিবোর্ড দেখান',
    showHands: 'হাত দেখান',
    rightHandOnly: 'শুধু ডান হাত',
    leftHandOnly: 'শুধু বাঁ হাত',
    animatedHands: 'হাত কী অনুসরণ করবে',
    letterCase: 'কী-এর লেখা',
    uppercase: 'বড় হাতের (ABC)',
    lowercase: 'ছোট হাতের (abc)',
    boardAria: 'পর্দার কিবোর্ড', keypadAria: 'পর্দার সংখ্যা-প্যাড',
    keyboardShape: 'কিবোর্ডের ধরন', shapeAuto: 'লেআউট অনুযায়ী', shapeAnsi: '১০৪ কী (বাঁ শিফট লম্বা)', shapeIso: '১০৫ কী (বাঁ শিফটের পাশে একটি কী)',
    layout: 'কিবোর্ড লেআউট',
    save: 'সংরক্ষণ করুন',
    cancel: 'বাতিল',
    close: 'বন্ধ করুন'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b}টি পাঠ শেষ`,
    legacy: n => `আগের কোর্সের ${n}টি পাঠ আপনি শেষ করেছেন — ইউনিট ১ আর ২ এখন খোলা।`,
    ctaResume: '▶ চালিয়ে যান', ctaStart: '▶ শুরু করুন',
    ctaLesson: (verb, number, title) => `${verb} · পাঠ ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'যা লেখা হয়েছে তার শেষে পৌঁছে গেছেন <span>→</span>',
    rowResume: (screen, total) => `▶ চালিয়ে যান · স্ক্রিন ${screen}/${total}`,
    rowStart: '▶ শুরু করুন',
    rowDone: '✓ শেষ',
    unlocked: 'খোলা',
    unlockAfter: n => `পাঠ ${n}-এর পর খুলবে`,
    unlockNow: 'এই ইউনিট এখনই খুলুন'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ trang test tốc độ GHI lúc chạy. `passages` là những đoạn
     test nối tiếp nhau cho bài dài (tới 10 phút): tiếng Bengali chuẩn (চলিত), gõ trên bố cục 107
     (জাতীয়) theo thứ tự Unicode, câu kết bằng দাঁড়ি । (Shift + G). Bố cục 107 KHÔNG có nguyên âm độc
     lập nào ngoài অ (xem đầu data/words/bn.js), nên các đoạn tránh mọi từ chứa আ ই উ এ ও (kể cả
     "আছে", "এবং", "সেই", đuôi nhấn -ও/-ই); cũng tránh ৎ ঞ ঃ ঈ ঊ ঐ ঔ như kho từ. য় ড় ঢ় là ký tự
     dựng sẵn (U+09DF U+09DC U+09DD), đúng thứ bố cục in ra. Gõ được y nguyên trên Probhat. */
  test: {
    passage: 'কিবোর্ডের দিকে না তাকিয়ে লেখা যেকোনো বয়সে শেখা যায়, শুধু খানিকটা ধৈর্য দরকার। মূল সারিতে হাত রাখুন, বাঁ হাত বাঁ দিকে, ডান হাত ডান দিকে। ব কী-তে, ক কী-তে ছোট ফোলা দাগ রয়েছে, তাকিয়ে না দেখে ছুঁয়ে সেগুলো চেনা যায়। শুরুতে গতি কম থাকবে, ভুল হবে বেশি, সেটা স্বাভাবিক। প্রতিদিন দশ মিনিট করে অনুশীলন করুন, কয়েক সপ্তাহ পরে হাত নিজে থেকে ঠিক কী খুঁজে নেবে।',
    passages: [
      'কিবোর্ডের দিকে না তাকিয়ে লেখা যেকোনো বয়সে শেখা যায়, শুধু খানিকটা ধৈর্য দরকার। মূল সারিতে হাত রাখুন, বাঁ হাত বাঁ দিকে, ডান হাত ডান দিকে। ব কী-তে, ক কী-তে ছোট ফোলা দাগ রয়েছে, তাকিয়ে না দেখে ছুঁয়ে সেগুলো চেনা যায়। শুরুতে গতি কম থাকবে, ভুল হবে বেশি, সেটা স্বাভাবিক। প্রতিদিন দশ মিনিট করে অনুশীলন করুন, কয়েক সপ্তাহ পরে হাত নিজে থেকে ঠিক কী খুঁজে নেবে।',
      'সকালে রোদ ঝলমল করছিল, মনে হচ্ছিল সারাদিন রোদ থাকবে। কিন্তু দুপুরের দিকে পশ্চিম থেকে ঘন কালো মেঘ জমতে শুরু করল, ঠান্ডা বাতাস ছুটল, রাস্তায় বড় বড় ফোঁটায় বৃষ্টি নামল। হাটের দোকানিরা মালপত্রের গায়ে ত্রিপল টাঙিয়ে দিল, কয়েকজন গাছের নিচে দাঁড়াল। বৃষ্টি চলল মাত্র বিশ মিনিট। তারপর ফের রোদ দেখা দিল, ভেজা মাটির গন্ধে চারপাশ ভরে গেল, ছেলেমেয়েরা জমা পানিতে লাফাতে ছুটল।',
      'প্রতি শুক্রবার পাড়ার বাজারে খুব ভিড় হয়। দোকানিরা টেবিলে টমেটো, পেঁয়াজ, বেগুন, কাঁচা মরিচ, কুমড়া সাজিয়ে রাখে, দূরের সারিতে মাছ, চাল, ডাল বিক্রি হয়। বয়স্ক মহিলাটি অনেকক্ষণ ধরে বেছে বেছে পটল কেনেন, দাম নিয়ে দর কষাকষি করেন। ছোট ছেলেটি ব্যাগ ভরে কমলা নিয়ে বাড়ি ফেরে। যারা সকাল সকাল হাজির হয়, তারা সবচেয়ে তাজা সবজি পায়। দুপুর গড়াতে ক্রেতা কমে যায়, দোকানিরা ঝুড়ি গোছাতে শুরু করে।',
      'ট্রেন ঠিক সময়ে স্টেশন ছাড়ল। জানালা দিয়ে দেখা যাচ্ছিল সবুজ ধানখেত, ছোট ছোট গ্রাম, দূরে নদীর রেখা। কামরায় সকলে চুপচাপ, সামনের যাত্রী খবরের কাগজ পড়ছিলেন, পাশের পরিবারটি বাড়ি থেকে খাবার বের করছিল। প্রতিটি বড় স্টেশনে চা বিক্রেতার ডাক শোনা যেত। সন্ধ্যার দিকে ঘোষণা হল, তিরিশ মিনিট পরে বড় স্টেশন, তখন যাত্রীরা মালপত্র গোছাতে লাগল।',
      'ভালো খিচুড়ি রাঁধতে বিশেষ কিছু লাগে না। প্রথমে চাল ডাল ধুয়ে রাখুন। হাঁড়িতে তেল গরম করে পেঁয়াজ, রসুন, তেজপাতা ভেজে নিন। তারপর হলুদ, মরিচ গুঁড়া, লবণ দিয়ে চাল ডাল কিছুক্ষণ নাড়ুন, গরম পানি ঢেলে ঢাকনা দিন। মাঝে মাঝে নেড়ে দিন, যেন তলায় না লেগে যায়। চাল ডাল নরম হলে নামিয়ে ফেলুন। বৃষ্টির দিনে গরম খিচুড়ির সঙ্গে ডিম ভাজা খুব জমে।',
      'পাড়ার গ্রন্থাগার শনিবার বিকাল চারটা পর্যন্ত খোলা থাকে। পড়ার ঘরে লম্বা টেবিল পাতা, সেখানে ছাত্রছাত্রীরা পরীক্ষার প্রস্তুতি নেয়, বয়স্করা দিনের খবরের কাগজ পড়েন। কোণে ছোটদের জন্য রঙিন ছড়ার পুস্তক, নরম চেয়ার রাখা। গ্রন্থাগারিক প্রায় সব নিয়মিত পাঠককে নামে চেনেন, ছুটির দিনে পড়ার মতো ভালো পুস্তক বেছে দিতে পারেন।',
      'শীতের সকালে গ্রামে কুয়াশা খুব ঘন থাকে, ফলে কয়েক হাত দূরের জিনিস দেখা যায় না। লোকজন চাদর মুড়ি দিয়ে রোদের খোঁজে বসে থাকে, গরম চা হাতে গল্প করে। মাঠে সরিষার হলুদ ফুল শিশিরে ভিজে থাকে। গাছ থেকে নামানো খেজুরের রসে পিঠা বানানো হয়। দুপুর নাগাদ রোদ চড়ে, তখন ছেলেমেয়েরা ঘুড়ি নিয়ে মাঠে ছোটে। সন্ধ্যা নামতে ফের ঠান্ডা জেঁকে বসে।',
      'বিকেলের দিকে মোড়ের চায়ের দোকানে ভিড় জমে। কাঠের টুলে বসে লোকজন গরম চায়ে চুমুক দেয়, খবরের কাগজ ভাগ করে পড়ে, খেলার খবর নিয়ে তর্ক করে। দোকানি কেটলিতে পানি ফোটান, মাটির ভাঁড়ে দুধ চা ঢালেন, পাশে বিস্কুট সাজিয়ে রাখেন। সন্ধ্যা নামলে দোকানের বাতি জ্বলে, রাস্তার পাশে রিকশার সারি দাঁড়িয়ে যায়, দিনের কাজ সেরে মানুষজন বাড়ি ফেরে।',
      'লেখার সময় কিবোর্ডের দিকে না তাকিয়ে পর্দার দিকে চোখ রাখুন। জাতীয় কিবোর্ডে প্রথমে অক্ষর, তারপর কার চিহ্ন চাপতে হয়, তবে কিছু কার চিহ্ন অক্ষরের বাঁ পাশে দেখা যায়। যুক্তাক্ষর তৈরি হয় হসন্ত দিয়ে, যেমন ক্ত লিখতে ক, হসন্ত, ত। বাক্যের শেষে দাঁড়ি বসে, সেটা শিফট চেপে লিখতে হয়। প্রতিদিন পনেরো মিনিট অনুশীলন করলে মাসখানেক পরে লম্বা অনুচ্ছেদ লিখতে অনেক কম সময় লাগবে।'
    ],
    title: '{seconds} সেকেন্ডের টাইপিং টেস্ট',
    titleMinutes: '{minutes} মিনিটের টাইপিং টেস্ট',
    ready: 'তৈরি হলে টাইপ শুরু করুন।',
    running: 'আপনার ফলাফল এখনই গোনা হচ্ছে।',
    finished: 'সময় শেষ ({seconds} সেকেন্ড)। ফলাফল: {wpm} WPM, নির্ভুলতা {accuracy}%, ভুল: {errors}।',
    finishedMinutes: 'সময় শেষ ({minutes} মিনিট)। ফলাফল: {wpm} WPM, নির্ভুলতা {accuracy}%, ভুল: {errors}।',
    accuracyName: 'নির্ভুলতা',
    comparisonSame: 'আগের বারের সমান।',
    comparisonDelta: 'আগের ফলাফলের তুলনায় {delta} WPM',
    progressEmpty: 'এখনও যথেষ্ট তথ্য নেই। কয়েকটি টেস্ট দিন, তারপর এখানে আপনার অগ্রগতি দেখা যাবে।',
    progressNone: 'এখনও অগ্রগতির তথ্য নেই।',
    metricEmpty: 'এই মাপের কোনো তথ্য নেই।',
    chartEmpty: 'এই চার্ট আঁকার মতো উপযুক্ত তথ্য নেই।',
    chartLabel: '{metric}: সময়ের সঙ্গে পরিবর্তন',
    trendEmpty: 'প্রবণতা বোঝার জন্য তথ্য খুব কম।',
    trendSame: 'এই সময়সীমার শুরু থেকে কোনো পরিবর্তন নেই।',
    trendDelta: 'এই সময়সীমার শুরু থেকে {change} {measure}।',
    measureAccuracy: 'পয়েন্ট নির্ভুলতা',
    progressSummary: 'গত {days} দিনে টেস্ট: {count}টি। গড় গতি {wpm} WPM, গড় নির্ভুলতা {accuracy}%।',
    dateLocale: 'bn-BD'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy (xem progress trong ui.en.js) */
  progress: {
    levels: ['শুরু করছেন', 'এগোচ্ছেন', 'স্থির গতি', 'দ্রুত', 'সাবলীল'],
    legacy: n => `আগের কোর্সের ${n}টি পাঠ আপনি শেষ করেছেন — ইউনিট ১ আর ২ এখন খোলা।`,
    unit: index => `ইউনিট ${index}`,
    soon: ' · শিগগির',
    trendHint: n => (n === 1 ? 'আর একটি পাঠ করলেই অগ্রগতির রেখা আঁকার মতো তথ্য জমবে।'
      : `আর ${n.toLocaleString('bn')}টি পাঠ করলেই অগ্রগতির রেখা আঁকার মতো তথ্য জমবে।`),
    stripLevel: level => `স্তর: ${level}`,
    statWpm: 'সাম্প্রতিক WPM',
    statAccuracy: 'নির্ভুলতা',
    statSessions: 'সেশন',
    target: (wpm, accuracy) => `পরের লক্ষ্য: <b>${wpm}</b> WPM · <b>${accuracy}</b>% নির্ভুল`,
    adviceStart: 'একটি পাঠ টাইপ করুন, তাহলেই এই পাতা বুঝবে আপনি কোথায় আছেন।',
    actionStart: 'পাঠ ১ শুরু করুন →',
    adviceWeak: keys => `${keys} আপনাকে পিছিয়ে দিচ্ছে — শুধু এগুলো নিয়ে এক মিনিট অনেক কাজে দেয়।`,
    actionWeak: keys => `${keys} অনুশীলন করুন →`,
    adviceSteady: 'ভালোই এগোচ্ছেন — দিনে একটি পাঠ ছন্দ ধরে রাখে।',
    actionLesson: (number, title) => `পাঠ ${number} · ${title} →`,
    actionTest: 'গতির পরীক্ষা →',
    actionLessons: 'কোর্স দেখুন →',
    heatLegend: 'প্রতিটি কী-এর নির্ভুলতা',
    heatStrong: 'পাকা',
    heatFair: 'কখনো ঠিক, কখনো ভুল',
    heatWeak: 'অনুশীলন দরকার',
    badgeDate: at => new Date(at).toLocaleDateString('bn', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `পেয়েছেন ${date}` : 'পেয়েছেন'),
    number: value => value.toLocaleString('bn'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} মিনিট`,
    streak: days => `🔥 টানা ${days} দিন`,
    bestStreak: days => `সেরা: টানা ${days} দিন`,
    today: minutes => `আজ ${minutes} মিনিট`,
    clearConfirm: 'এই ডিভাইসে রাখা সব অগ্রগতি আর স্কোর মুছে ফেলবেন?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. */
  badges: {
    'first-step': { title: 'প্রথম পদক্ষেপ', hint: 'প্রথম পাঠটি শেষ করুন।' },
    'unit-1': { title: 'একটি ইউনিট শেষ', hint: 'পুরো একটি ইউনিট শেষ করুন।' },
    'stars-30': { title: '৩০টি তারা', hint: 'কোর্সে ৩০টি তারা জমান।' },
    'stars-90': { title: '৯০টি তারা', hint: 'কোর্সে ৯০টি তারা জমান।' },
    'streak-3': { title: 'টানা তিন দিন', hint: 'টানা তিন দিন রোজকার লক্ষ্য পূরণ করুন।' },
    'streak-7': { title: 'পুরো এক সপ্তাহ', hint: 'টানা সাত দিন রোজকার লক্ষ্য পূরণ করুন।' },
    'clean-40': { title: 'নির্ভুল ৪০ WPM', hint: '৯৫% বা তার বেশি নির্ভুলতায় ৪০ WPM-এ একবার।' },
    'clean-60': { title: 'নির্ভুল ৬০ WPM', hint: '৯৫% বা তার বেশি নির্ভুলতায় ৬০ WPM-এ একবার।' },
    'typed-5000': { title: '৫,০০০ কী', hint: 'মোট পাঁচ হাজার বার কী চাপুন।' }
  }
};
