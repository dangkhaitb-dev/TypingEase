/* i18n/ui.ur.js — lớp tiếng Urdu.
 *
 * Nạp bởi mọi trang dưới /ur/, bằng <script src="/i18n/ui.ur.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên — tên khoá phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra bị bỏ qua lặng lẽ.
 *
 * VIẾT PHẢI SANG TRÁI. Trang /ur/ mang dir="rtl", nên mũi tên "đi tiếp" trong chuỗi ở đây trỏ
 * sang TRÁI (←): hướng đọc tới trước của tiếng Urdu. Xưng hô với người học: آپ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 */
window.TypingEaseUI = {
  lang: 'ur',

  /* Tuyệt đối, vì /ur/seekhein/ nằm sâu hai cấp. `null` = trang đó chưa có bản tiếng Urdu:
     tín hiệu BỎ liên kết, không trỏ sang bản ngôn ngữ khác. */
  routes: {
    home: '/ur/',
    lessons: '/ur/asbaq/',
    learn: '/ur/seekhein/',
    test: '/ur/typing-test/',
    progress: '/ur/taraqqi/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /ur/ */
  home: {
    nav: ['مشق', 'کورس'],
    roadmapKicker: '{total} اسباق · {units} حصے',
    roadmapAll: 'تمام {total} اسباق دیکھیں ←',
    unitTitle: 'حصہ {index} · {title}',
    unitDone: '{done}/{total} اسباق ✓',
    railDone: '✓',
    railSoon: 'جلد',
    railNote: 'اگلے حصے لکھے جا رہے ہیں — جو اسباق ابھی نہیں کھلے وہ ہلکے رنگ میں ہیں۔',
    teaser: 'حصہ {index} · {title} ({count} اسباق)',
    teaserLocked: '🔒',
    shortcutsTitle: 'مزید مشق',
    shortcuts: [
      ['رفتار کا امتحان', 'فی منٹ الفاظ اور درستی ناپیں۔'],
      ['کمزور کلیدیں', 'ان کلیدوں کی مشق جن میں آپ سے سب سے زیادہ غلطیاں ہوتی ہیں۔'],
      ['آزاد مشق', 'اپنی عبارت چسپاں کریں اور اسے لکھیں۔']
    ],
    continueKicker: 'جاری رکھیں',
    continueName: 'سبق {n} · {title}',
    continueCount: 'حصہ {unit} · اسکرین {screen}/{screens}',
    continueGo: '▶ جاری رکھیں (Enter)',
    continueRedo: '↻ سبق {n} دوبارہ کریں',
    continueMap: 'کورس دیکھیں',
    streak: '🔥 {days} دن · آج {minutes} منٹ',
    coachWeak: 'دھیان دیں: <b>{keys}</b> آپ کی رفتار روک رہی ہیں — ان کے ساتھ ایک منٹ؟',
    legacy: 'آپ نے پچھلے کورس کے {n} اسباق مکمل کیے — حصہ 1 اور 2 پہلے سے کھلے ہیں۔',
    doneKicker: 'رفتار قائم رکھیں',
    doneName: 'جو کچھ لکھا جا چکا ہے، وہ سب مکمل ہو گیا',
    doneCount: 'اگلا حصہ تیار ہو رہا ہے۔ رفتار برقرار رکھنے کے لیے کوئی سبق دہرائیں۔',
    doneGo: '▶ کورس دیکھیں (Enter)',
    exploreKicker: 'TypingEase کے وسائل',
    footer: 'آہستہ چلنے والا دور تک جاتا ہے۔',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /ur/ chưa có khối explore nào. */
  localized: {
    exploreTitle: 'TypingEase کو جانیں',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Urdu không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'سبق لوڈ ہو رہا ہے…',
    missingTitle: 'اس سبق میں ابھی مواد نہیں',
    missingBody: '<code>{path}</code> سے کچھ لوڈ نہیں ہوا۔ سبق ابھی لکھا جا رہا ہے — بعد میں کوشش کریں یا کورس سے کوئی اور سبق چنیں۔',
    noCurriculum: 'کورس کی فہرست (<code>data/curriculum.ur.js</code>) لوڈ نہیں ہوئی۔',
    fixtureNote: '<code>hoc/_fixture/</code> کے نمونہ مواد پر چل رہا ہے — اصل سبق ابھی <code>data/lessons/</code> میں نہیں۔',
    screenOf: 'اسکرین {n} / {total}',
    newKey: 'نئی کلید',
    pressToContinue: 'آگے بڑھنے کے لیے <b>{key}</b> دبائیں',
    enterToContinue: 'آگے بڑھنے کے لیے <b>Enter</b> دبائیں',
    found: 'یہی ہے۔',
    foundBody: 'یاد رکھیں <b>{key}</b> کہاں ہے — اب اس کی مشق کرتے ہیں۔',
    accuracyLive: '{accuracy}% درستی',
    errorsLive: '{count} غلطیاں',
    tokensLive: '{count} الفاظ',
    great: 'بہت عمدہ۔',
    good: 'بہت اچھا۔',
    pass: 'کامیاب۔',
    fail: '{min}% سے کم — یہ اسکرین دوبارہ کرنا بہتر ہے۔',
    resultAccuracy: '{accuracy}% درستی',
    resultWpm: '{wpm} الفاظ فی منٹ',
    resultErrors: '{count} غلطیاں',
    resultTokens: '{count} درست الفاظ',
    slowKey: '<b>{key}</b> آپ کی سب سے سست کلید رہی ({ms} سیکنڈ فی بار) — انگلی کو وہاں پہنچنے دیں اور فوراً بنیادی قطار پر واپس لائیں۔',
    keepAccuracy: 'رفتار کم کریں تو درستی بڑھتی ہے — رفتار بعد میں آتی ہے، اس کا الٹ کبھی نہیں۔',
    continueEnter: 'جاری رکھیں ← (Enter)',
    redoScreen: 'یہ اسکرین دوبارہ',
    redoScreenAdvised: 'یہ اسکرین دوبارہ (مشورہ)',
    skipScreen: 'چھوڑیں',
    lessonDone: 'مکمل',
    learned: '{count} کلیدیں اب آپ کی انگلیوں کے نیچے ہیں:',
    statWpm: 'رفتار',
    statAccuracy: 'درستی',
    statTime: 'وقت',
    statStars: 'ستارے',
    technique: 'یاد رکھنے کی بات',
    weakTitle: 'جن کلیدوں کو مزید مشق چاہیے',
    weakButton: 'ایک منٹ مشق کریں',
    unitProgress: '{unit} · {done}/{total} اسباق',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ صفحۂ اول پر واپس (Enter)',
    redoLesson: '↻ سبق دوبارہ شروع کریں',
    home: 'صفحۂ اول',
    noMoreTitle: 'جو کچھ لکھا جا چکا ہے، وہ یہاں ختم ہوتا ہے',
    noMoreBody: 'اگلا حصہ ابھی تیار ہو رہا ہے۔ تب تک کوئی سبق دہرائیں — اچھی رفتار سے دوسرا چکر جتنا لگتا ہے اس سے زیادہ فائدہ دیتا ہے۔',
    notReadyTitle: 'اس سبق میں ابھی مواد نہیں',
    notReadyBody: '<b>{title}</b> کورس میں شامل ہے، لیکن اس کا مواد ابھی لکھا جا رہا ہے۔ کوئی کھلا ہوا سبق چنیں۔',
    weakPage: 'کمزور کلیدوں کی مشق',
    badgeNew: 'نیا تمغہ',
    badgeAll: 'تمام تمغے دیکھیں ←',
    shiftFinger: 'دوسرے ہاتھ کی چھوٹی انگلی',
    testPage: 'رفتار کا امتحان',
    mobileNote: 'یہ کورس کمپیوٹر کے کی بورڈ کے لیے بنا ہے — دس انگلیوں کو دس اصلی کلیدیں چاہییں۔ موبائل پر آزمایا جا سکتا ہے، لیکن سیکھنے کے لیے کی بورڈ پر واپس آئیں۔',
    mobileNoteClose: 'ٹھیک ہے',
    tapToType: 'لکھنے کے لیے چھوئیں',
    menuTitle: 'وقفہ',
    menuResume: 'لکھنا جاری رکھیں',
    menuRedo: 'یہ اسکرین دوبارہ',
    menuSkip: 'یہ اسکرین چھوڑیں',
    menuExit: 'صفحۂ اول پر واپس',
    clock: '{seconds} سیکنڈ',
    lessonNumber: 'سبق {number}',
    pageTitle: 'سبق · TypingEase',
    screenTip: 'اسکرین {number} · {type}',
    firstLesson: 'پہلے سبق پر واپس'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'بائیں ہاتھ کی چھوٹی انگلی', LR: 'بائیں ہاتھ کی انگوٹھی والی انگلی', LM: 'بائیں ہاتھ کی درمیانی انگلی',
    LI: 'بائیں ہاتھ کی شہادت کی انگلی', LT: 'بائیں ہاتھ کا انگوٹھا',
    RT: 'دائیں ہاتھ کا انگوٹھا', RI: 'دائیں ہاتھ کی شہادت کی انگلی', RM: 'دائیں ہاتھ کی درمیانی انگلی',
    RR: 'دائیں ہاتھ کی انگوٹھی والی انگلی', RP: 'دائیں ہاتھ کی چھوٹی انگلی'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'بائیں ہاتھ کی چھوٹی انگلی', 'left-ring': 'بائیں ہاتھ کی انگوٹھی والی انگلی',
    'left-middle': 'بائیں ہاتھ کی درمیانی انگلی', 'left-index': 'بائیں ہاتھ کی شہادت کی انگلی',
    'left-thumb': 'بائیں ہاتھ کا انگوٹھا', thumb: 'انگوٹھا',
    'right-index': 'دائیں ہاتھ کی شہادت کی انگلی', 'right-middle': 'دائیں ہاتھ کی درمیانی انگلی',
    'right-ring': 'دائیں ہاتھ کی انگوٹھی والی انگلی', 'right-pinky': 'دائیں ہاتھ کی چھوٹی انگلی'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó. Urdu không có chữ hoa, nên
     hai lựa chọn hoa/thường chỉ đổi nhãn Latin (Tab, Shift…) trên bàn phím. */
  keyboard: {
    title: 'کی بورڈ کی ترتیبات',
    showKeyboard: 'کی بورڈ دکھائیں',
    showHands: 'ہاتھ دکھائیں',
    rightHandOnly: 'صرف دایاں ہاتھ',
    leftHandOnly: 'صرف بایاں ہاتھ',
    animatedHands: 'ہاتھ کلیدوں کے ساتھ حرکت کریں',
    letterCase: 'کلیدوں پر حروف',
    uppercase: 'بڑے (ABC)',
    lowercase: 'چھوٹے (abc)',
    boardAria: 'اسکرین پر کی بورڈ', keypadAria: 'اسکرین پر ہندسوں کا پیڈ',
    keyboardShape: 'کی بورڈ کی قسم', shapeAuto: 'ترتیب کے مطابق', shapeAnsi: '104 کلیدیں (لمبی بائیں شفٹ)', shapeIso: '105 کلیدیں (بائیں شفٹ کے ساتھ ایک کلید)',
    layout: 'کی بورڈ کی ترتیب',
    save: 'محفوظ کریں',
    cancel: 'منسوخ',
    close: 'بند کریں'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} اسباق مکمل`,
    legacy: n => `آپ نے پچھلے کورس کے ${n} اسباق مکمل کیے — حصہ 1 اور 2 پہلے سے کھلے ہیں۔`,
    ctaResume: '▶ جاری رکھیں', ctaStart: '▶ شروع کریں',
    ctaLesson: (verb, number, title) => `${verb} · سبق ${number} · ${title} <span>←</span>`,
    ctaAllDone: 'جو کچھ لکھا جا چکا ہے، وہ یہاں ختم ہوتا ہے <span>←</span>',
    rowResume: (screen, total) => `▶ جاری رکھیں · اسکرین ${screen}/${total}`,
    rowStart: '▶ شروع کریں',
    rowDone: '✓ مکمل',
    unlocked: 'کھلا ہوا',
    unlockAfter: n => `سبق ${n} کے بعد کھلے گا`,
    unlockNow: 'یہ حصہ ابھی کھولیں'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `T` của trang test (/ur/typing-test/). Chữ tĩnh ở
     kiem-tra-toc-do-go/text/ur.mjs. Đơn vị "الفاظ فی منٹ" như player/progress. Đoạn văn chỉ dùng ký tự
     của bố cục 108: ی ے ک ہ ھ ں ٹ ڈ ڑ, ۔ cuối câu, ، ؟ và :; không ۓ, không ۂ/ٔ, không harakat, không
     tanwin, không chữ số. سیکنڈ، منٹ، دن không đổi theo số. */
  test: {
    wpmUnit: 'الفاظ فی منٹ',
    passage: 'ٹچ ٹائپنگ کسی بھی عمر میں سیکھی جا سکتی ہے، بس تھوڑے صبر کی ضرورت ہے۔ اپنی انگلیاں کی بورڈ کی درمیانی قطار پر رکھیں۔ ف اور ج کی کلیدوں پر چھوٹے ابھار ہوتے ہیں جن کی مدد سے آپ نیچے دیکھے بغیر اپنی جگہ ڈھونڈ سکتے ہیں۔ شروع میں رفتار کم اور غلطیاں زیادہ ہوں گی، اور یہ بالکل عام بات ہے۔ روزانہ دس منٹ مشق کریں، چند ہفتوں میں انگلیاں خود ہی صحیح حروف تلاش کرنے لگیں گی۔',
    passages: [
      'ٹچ ٹائپنگ کسی بھی عمر میں سیکھی جا سکتی ہے، بس تھوڑے صبر کی ضرورت ہے۔ اپنی انگلیاں کی بورڈ کی درمیانی قطار پر رکھیں۔ ف اور ج کی کلیدوں پر چھوٹے ابھار ہوتے ہیں جن کی مدد سے آپ نیچے دیکھے بغیر اپنی جگہ ڈھونڈ سکتے ہیں۔ شروع میں رفتار کم اور غلطیاں زیادہ ہوں گی، اور یہ بالکل عام بات ہے۔ روزانہ دس منٹ مشق کریں، چند ہفتوں میں انگلیاں خود ہی صحیح حروف تلاش کرنے لگیں گی۔',
      'صبح آسمان بالکل صاف تھا اور لگ رہا تھا کہ دن گرم ہوگا۔ دوپہر سے پہلے سمندر کی طرف سے گہرے بادل آئے، ٹھنڈی ہوا چلنے لگی اور سڑک پر بارش کے پہلے موٹے قطرے گرے۔ پارک میں لوگوں نے چھتریاں کھول لیں یا درختوں کے نیچے کھڑے ہو گئے۔ بارش زیادہ دیر نہیں رہی، بیس منٹ کے بعد دھوپ پھر نکل آئی اور ہوا میں گیلی مٹی کی خوشبو پھیل گئی۔',
      'اتوار کی صبح گھر کے قریب والے بازار میں ہمیشہ رونق ہوتی ہے۔ دکاندار ٹماٹر، کھیرے، آم اور ہری سبزیاں لکڑی کے تختوں پر سجاتے ہیں، اور آخری قطار میں ایک بزرگ شہد، دہی اور تازہ انڈے بیچتے ہیں۔ ایک خاتون دیر تک آلو چنتی ہے اور بار بار قیمت پوچھتی ہے، جبکہ ایک بچہ خوشی سے امرودوں کا تھیلا اٹھائے گھر جاتا ہے۔ جو جلدی آتا ہے اسے سب سے تازہ چیزیں ملتی ہیں۔',
      'ریل گاڑی ٹھیک وقت پر روانہ ہوئی۔ کھڑکی کے باہر کھیت، چھوٹی بستیاں اور خاموش اسٹیشن گزرتے رہے۔ ڈبے میں سکون تھا: ایک صاحب اخبار پڑھ رہے تھے اور کھڑکی کے پاس بیٹھی ایک خاتون معمے حل کر رہی تھیں اور کبھی کبھی سب سے کوئی مناسب لفظ پوچھ لیتی تھیں۔ ایک لڑکا گرم چائے بیچتا ہوا گزرا۔ شام سے پہلے اعلان ہوا کہ آدھے گھنٹے بعد بڑا اسٹیشن آئے گا، اور مسافر اپنا سامان سمیٹنے لگے۔',
      'دال پکانے کے لیے کسی خاص چیز کی ضرورت نہیں: مسور کی دال، ایک پیاز، دو ٹماٹر، لہسن، نمک، ہلدی اور تھوڑی سی مرچ۔ پہلے دال کو دھو کر پانی میں ابالیں۔ الگ سے پیاز کو تیل میں سنہرا ہونے تک بھونیں، پھر لہسن اور ٹماٹر ڈال دیں۔ جب مسالا تیار ہو جائے تو اسے دال میں ملا دیں اور دس منٹ ہلکی آنچ پر رہنے دیں۔ گرم دال روٹی یا چاول کے ساتھ پیش کریں۔',
      'محلے کی لائبریری ہفتے کے دن چار بجے تک کھلی رہتی ہے۔ مطالعے کے کمرے میں لمبی میزیں ہیں جن پر طالب علم امتحان کی تیاری کرتے ہیں، اور کونے میں بزرگ اخبار پڑھتے ہیں۔ بچوں کے لیے ایک الگ حصہ ہے جس میں رنگین کتابیں اور نرم کرسیاں رکھی ہیں۔ لائبریرین زیادہ تر مستقل آنے والوں کو نام سے جانتی ہیں اور ہمیشہ کوئی اچھی کتاب تجویز کر دیتی ہیں۔',
      'شام کو پارک میں سیر کرنا بہت اچھا لگتا ہے۔ گرمی کم ہو جاتی ہے، درختوں کے سائے لمبے ہو جاتے ہیں اور ہوا میں پھولوں کی ہلکی خوشبو ہوتی ہے۔ کچھ لوگ تیز تیز چلتے ہیں، کچھ بینچ پر بیٹھ کر باتیں کرتے ہیں اور بچے جھولوں کی طرف دوڑتے ہیں۔ اگر آپ روز آدھا گھنٹہ پیدل چلیں تو دن بھر کی تھکن اتر جاتی ہے اور رات کو نیند بھی اچھی آتی ہے۔',
      'پوری سردیاں سائیکل برآمدے میں کھڑی رہی، اور بہار آتے ہی اسے ٹھیک کرنے کا وقت آ گیا۔ سب سے پہلے ٹائروں میں ہوا بھرنی ہے اور بریک دیکھنے ہیں۔ زنجیر سوکھ کر آواز کرنے لگی ہے، اس لیے اس پر تیل کے چند قطرے ڈالنے ہوں گے۔ پھر گیلے کپڑے سے فریم صاف کریں اور ہینڈل کو کس دیں۔ گلی میں پہلا چکر ہمیشہ ایک سادہ سی خوشی دیتا ہے: چہرے پر ہوا، ہلکی رفتار اور گرمیوں کے لمبے سفروں کے خیال۔',
      'عمارت کے دروازے پر ایک کاغذ لگا تھا: اتوار کو سب رہنے والے مل کر صحن کی صفائی کریں گے۔ ہر کوئی کچھ نہ کچھ لایا، کوئی جھاڑو، کوئی بینچوں کے لیے رنگ اور کوئی چائے کے ساتھ کیک۔ بچوں نے چاک سے زمین پر تصویریں بنائیں اور بڑوں نے دروازے کے پاس پودے لگائے۔ ایسے دن کم آتے ہیں، لیکن اس کے بعد پڑوسی صرف لفٹ میں نہیں، گلی میں بھی ایک دوسرے کو سلام کرنے لگے۔',
      'ٹائپ کرتے وقت ایک اچھی عادت یہ ہے کہ آپ اسکرین کو دیکھیں، کی بورڈ کو نہیں۔ ھ اور ں جیسے حروف شفٹ کے ساتھ لکھے جاتے ہیں، اسی طرح سوالیہ نشان بھی۔ کیا آپ جانتے ہیں کہ ختمہ کہاں ہے؟ وہ نیچے والی قطار میں سکتے کے بالکل ساتھ ہے۔ اگر آپ روزانہ پندرہ منٹ مشق کریں تو ایک مہینے بعد لمبی تحریر لکھنے میں آج سے کہیں کم وقت لگے گا۔'
    ],
    title: '{seconds} سیکنڈ کا ٹائپنگ ٹیسٹ',
    titleMinutes: '{minutes} منٹ کا ٹائپنگ ٹیسٹ',
    ready: 'جب تیار ہوں، شروع کریں۔',
    running: 'آپ کا نتیجہ ابھی حساب ہو رہا ہے۔',
    finished: 'وقت ختم ({seconds} سیکنڈ)۔ نتیجہ: {wpm} الفاظ فی منٹ، درستی {accuracy}%، غلطیاں: {errors}۔',
    finishedMinutes: 'وقت ختم ({minutes} منٹ)۔ نتیجہ: {wpm} الفاظ فی منٹ، درستی {accuracy}%، غلطیاں: {errors}۔',
    accuracyName: 'درستی',
    comparisonSame: 'پچھلے نتیجے جتنا ہی۔',
    comparisonDelta: 'پچھلے نتیجے کے مقابلے میں {delta} الفاظ فی منٹ',
    progressEmpty: 'ابھی کافی ڈیٹا نہیں۔ چند ٹیسٹ مکمل کریں، پھر یہاں آپ کی پیش رفت دکھائی دے گی۔',
    progressNone: 'ابھی پیش رفت کا کوئی ڈیٹا نہیں۔',
    metricEmpty: 'اس پیمانے کا کوئی ڈیٹا نہیں۔',
    chartEmpty: 'یہ چارٹ بنانے کے لیے مناسب ڈیٹا نہیں۔',
    chartLabel: '{metric}: وقت کے ساتھ تبدیلی',
    trendEmpty: 'رجحان دیکھنے کے لیے ڈیٹا بہت کم ہے۔',
    trendSame: 'اس مدت کے شروع سے کوئی تبدیلی نہیں۔',
    trendDelta: 'اس مدت کے شروع سے {change} {measure}۔',
    measureAccuracy: 'درستی کے پوائنٹ',
    progressSummary: 'پچھلے {days} دن میں {count} ٹیسٹ۔ اوسط رفتار {wpm} الفاظ فی منٹ، اوسط درستی {accuracy}%۔',
    dateLocale: 'ur-PK'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Chữ số Latin như phần còn lại
     của site /ur/. Số nhiều: 1 سبق, còn lại اسباق; دن và منٹ không đổi. */
  progress: {
    levels: ['آغاز', 'بہتری کی راہ پر', 'مستحکم', 'تیز', 'رواں'],
    legacy: n => `آپ نے پچھلے کورس کے ${n} اسباق مکمل کیے — حصہ 1 اور 2 پہلے سے کھلے ہیں۔`,
    unit: index => `حصہ ${index}`,
    soon: ' · جلد',
    trendHint: n => (n === 1 ? 'بس ایک سبق اور، پھر رجحان دکھانے کے لیے کافی ڈیٹا ہو جائے گا۔'
      : `بس ${n} اسباق اور، پھر رجحان دکھانے کے لیے کافی ڈیٹا ہو جائے گا۔`),
    stripLevel: level => `سطح: ${level}`,
    statWpm: 'حالیہ رفتار',
    statAccuracy: 'درستی',
    statSessions: 'نشستیں',
    target: (wpm, accuracy) => `اگلا ہدف: <b>${wpm}</b> الفاظ فی منٹ · <b>${accuracy}</b>% درستی`,
    adviceStart: 'ایک سبق لکھیں اور یہ صفحہ جان لے گا کہ آپ کہاں کھڑے ہیں۔',
    actionStart: 'سبق 1 شروع کریں ←',
    adviceWeak: keys => `${keys} آپ کو پیچھے روک رہی ہیں — صرف ان پر ایک منٹ بہت فائدہ دیتا ہے۔`,
    actionWeak: keys => `${keys} کی مشق کریں ←`,
    adviceSteady: 'آپ آگے بڑھ رہے ہیں — روز ایک سبق رفتار قائم رکھتا ہے۔',
    actionLesson: (number, title) => `سبق ${number} · ${title} ←`,
    actionTest: 'رفتار کا امتحان ←',
    actionLessons: 'کورس دیکھیں ←',
    heatLegend: 'ہر کلید کی درستی',
    heatStrong: 'پختہ',
    heatFair: 'کبھی ٹھیک، کبھی غلط',
    heatWeak: 'مشق چاہیے',
    badgeDate: at => new Date(at).toLocaleDateString('ur', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} کو حاصل کیا` : 'حاصل کر لیا'),
    number: value => value.toLocaleString('ur'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} منٹ`,
    streak: days => `🔥 لگاتار ${days} دن`,
    bestStreak: days => `بہترین: ${days} دن`,
    today: minutes => `آج ${minutes} منٹ`,
    clearConfirm: 'اس ڈیوائس پر محفوظ تمام پیش رفت اور اسکور مٹا دیں؟'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'پہلا قدم', hint: 'اپنا پہلا سبق مکمل کریں۔' },
    'unit-1': { title: 'ایک حصہ مکمل', hint: 'ایک پورا حصہ مکمل کریں۔' },
    'stars-30': { title: '30 ستارے', hint: 'کورس میں 30 ستارے جمع کریں۔' },
    'stars-90': { title: '90 ستارے', hint: 'کورس میں 90 ستارے جمع کریں۔' },
    'streak-3': { title: 'لگاتار تین دن', hint: 'تین دن لگاتار اپنا روزانہ ہدف پورا کریں۔' },
    'streak-7': { title: 'پورا ہفتہ', hint: 'سات دن لگاتار اپنا روزانہ ہدف پورا کریں۔' },
    'clean-40': { title: '40 الفاظ فی منٹ، صاف', hint: '95% یا زیادہ درستی کے ساتھ 40 الفاظ فی منٹ کا ایک چکر۔' },
    'clean-60': { title: '60 الفاظ فی منٹ، صاف', hint: '95% یا زیادہ درستی کے ساتھ 60 الفاظ فی منٹ کا ایک چکر۔' },
    'typed-5000': { title: '5,000 کلیدیں', hint: 'کل پانچ ہزار بار کلیدیں دبائیں۔' }
  }
};
