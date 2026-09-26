/* i18n/ui.fa.js — lớp tiếng Ba Tư (فارسی).
 *
 * Nạp bởi mọi trang dưới /fa/, bằng <script src="/i18n/ui.fa.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt làm mặc định rồi trải object này
 * lên trên. Khoá thiếu ở đây thì hiện tiếng Việt; tên khoá phải khớp CHÍNH XÁC bảng nó ghi đè.
 *
 * Xưng hô: شما (lịch sự), nhất quán với data/courses/fa.js.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer — đừng thêm `defer` cho file này.
 */
window.TypingEaseUI = {
  lang: 'fa',

  /* Tuyệt đối, vì /fa/amoozesh/ nằm sâu hai cấp. `null` = trang đó chưa có bản tiếng Ba Tư:
     liên kết bị BỎ, không trỏ sang bản tiếng Anh hay tiếng Việt. */
  routes: {
    home: '/fa/',
    lessons: '/fa/darsha/',
    learn: '/fa/amoozesh/',
    test: null,
    progress: '/fa/pishraft/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /fa/ */
  home: {
    nav: ['تمرین', 'دوره'],
    roadmapKicker: '{total} درس · {units} بخش',
    roadmapAll: 'دیدن همهٔ {total} درس ←',
    unitTitle: 'بخش {index} · {title}',
    unitDone: '{done}/{total} درس ✓',
    railDone: '✓',
    railSoon: 'به‌زودی',
    railNote: 'بخش‌های بعدی در حال نوشتن‌اند — درس‌هایی که هنوز باز نیستند خاکستری‌اند.',
    teaser: 'بخش {index} · {title} ({count} درس)',
    teaserLocked: '🔒',
    shortcutsTitle: 'تمرین بیشتر',
    shortcuts: [
      ['آزمون سرعت', 'سرعت تایپ و دقت خود را بسنجید.'],
      ['کلیدهای ضعیف', 'تمرین‌هایی ساخته‌شده از کلیدهایی که بیشتر اشتباه می‌زنید.'],
      ['تمرین آزاد', 'متن خودتان را بچسبانید و به روش خودتان تایپ کنید.']
    ],
    continueKicker: 'ادامه',
    continueName: 'درس {n} · {title}',
    continueCount: 'بخش {unit} · صفحهٔ {screen}/{screens}',
    continueGo: '▶ ادامه (Enter)',
    continueRedo: '↻ تکرار درس {n}',
    continueMap: 'دیدن دوره',
    streak: '🔥 {days} روز · امروز {minutes} دقیقه',
    coachWeak: 'دقت کنید: <b>{keys}</b> سرعت شما را کم می‌کنند — یک دقیقه با آنها؟',
    legacy: '{n} درس از دورهٔ قبلی را تمام کرده‌اید — بخش ۱ و ۲ از حالا باز است.',
    doneKicker: 'ریتم را نگه دارید',
    doneName: 'هر چه نوشته شده را تمام کرده‌اید',
    doneCount: 'بخش بعدی در راه است. یک درس را مرور کنید تا ریتم از دست نرود.',
    doneGo: '▶ دیدن دوره (Enter)',
    exploreKicker: 'منابع TypingEase',
    footer: 'کمی آهسته‌تر بروید، خیلی دورتر می‌رسید.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /fa/ chưa có khối explore nào. */
  localized: {
    exploreTitle: 'با TypingEase آشنا شوید',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Ba Tư không bao giờ đặt inputMode
     "telex". */
  player: {
    loading: 'در حال بارگذاری درس…',
    missingTitle: 'این درس هنوز محتوایی ندارد',
    missingBody: 'چیزی از <code>{path}</code> بارگذاری نشد. این درس هنوز در حال نوشتن است — بعداً دوباره امتحان کنید یا درس دیگری از دوره انتخاب کنید.',
    noCurriculum: 'فهرست دوره (<code>data/curriculum.fa.js</code>) بارگذاری نشد.',
    fixtureNote: 'با محتوای نمونهٔ <code>hoc/_fixture/</code> اجرا می‌شود — درس واقعی هنوز در <code>data/lessons/</code> نیست.',
    screenOf: 'صفحهٔ {n} از {total}',
    newKey: 'کلید تازه',
    pressToContinue: 'برای ادامه <b>{key}</b> را بزنید',
    enterToContinue: 'برای ادامه <b>Enter</b> را بزنید',
    found: 'همین است.',
    foundBody: 'جای <b>{key}</b> را به خاطر بسپارید — حالا تمرینش می‌کنیم.',
    accuracyLive: 'دقت {accuracy}٪',
    errorsLive: '{count} خطا',
    tokensLive: '{count} کلمه',
    great: 'عالی.',
    good: 'خیلی خوب.',
    pass: 'قبول.',
    fail: 'کمتر از {min}٪ — بهتر است این صفحه را تکرار کنید.',
    resultAccuracy: 'دقت {accuracy}٪',
    resultWpm: '{wpm} کلمه در دقیقه',
    resultErrors: '{count} خطا',
    resultTokens: '{count} کلمهٔ درست',
    slowKey: '<b>{key}</b> کندترین کلید شما بود ({ms} ثانیه برای هر بار) — بگذارید انگشت به آن برسد و فوراً به ردیف پایه برگردد.',
    keepAccuracy: 'آهسته‌تر بروید تا دقت بالا برود — سرعت بعد از آن می‌آید، هرگز برعکس.',
    continueEnter: 'ادامه ← (Enter)',
    redoScreen: 'تکرار این صفحه',
    redoScreenAdvised: 'تکرار این صفحه (پیشنهاد می‌شود)',
    skipScreen: 'رد شدن',
    lessonDone: 'تمام شد',
    learned: 'حالا {count} کلید را می‌شناسید:',
    statWpm: 'سرعت',
    statAccuracy: 'دقت',
    statTime: 'زمان',
    statStars: 'ستاره',
    technique: 'ارزش به خاطر سپردن دارد',
    weakTitle: 'کلیدهایی که بهتر است بیشتر تمرین شوند',
    weakButton: 'یک دقیقه تمرین',
    unitProgress: '{unit} · {done}/{total} درس',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ بازگشت به صفحهٔ اصلی (Enter)',
    redoLesson: '↻ شروع دوبارهٔ درس',
    home: 'صفحهٔ اصلی',
    noMoreTitle: 'به پایان آنچه نوشته شده رسیده‌اید',
    noMoreBody: 'بخش بعدی هنوز در حال ساخت است. تا آن موقع یک درس را مرور کنید — دور دوم با ریتم خوب بیشتر از آنچه به نظر می‌رسد می‌ارزد.',
    notReadyTitle: 'این درس هنوز محتوایی ندارد',
    notReadyBody: '<b>{title}</b> در دوره هست، اما محتوایش هنوز در حال نوشتن است. درسی را انتخاب کنید که باز است.',
    weakPage: 'تمرین کلیدهای ضعیف',
    badgeNew: 'نشان تازه',
    badgeAll: 'دیدن همهٔ نشان‌ها ←',
    shiftFinger: 'انگشت کوچک دست دیگر',
    testPage: 'آزمون سرعت',
    mobileNote: 'این دوره برای صفحه‌کلید کامپیوتر ساخته شده — ده انگشت ده کلید واقعی لازم دارند. می‌توانید در تلفن امتحانش کنید، اما برای یاد گرفتن واقعی به صفحه‌کلید برگردید.',
    mobileNoteClose: 'متوجه شدم',
    tapToType: 'برای تایپ لمس کنید',
    menuTitle: 'مکث',
    menuResume: 'ادامهٔ تایپ',
    menuRedo: 'تکرار این صفحه',
    menuSkip: 'رد شدن از این صفحه',
    menuExit: 'بازگشت به صفحهٔ اصلی',
    clock: '{seconds} ثانیه',
    lessonNumber: 'درس {number}',
    pageTitle: 'درس · TypingEase',
    screenTip: 'صفحهٔ {number} · {type}',
    firstLesson: 'بازگشت به درس اول'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'انگشت کوچک دست چپ', LR: 'انگشت حلقهٔ دست چپ', LM: 'انگشت میانی دست چپ',
    LI: 'انگشت اشارهٔ دست چپ', LT: 'شست دست چپ',
    RT: 'شست دست راست', RI: 'انگشت اشارهٔ دست راست', RM: 'انگشت میانی دست راست',
    RR: 'انگشت حلقهٔ دست راست', RP: 'انگشت کوچک دست راست'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'انگشت کوچک دست چپ', 'left-ring': 'انگشت حلقهٔ دست چپ',
    'left-middle': 'انگشت میانی دست چپ', 'left-index': 'انگشت اشارهٔ دست چپ',
    'left-thumb': 'شست دست چپ', thumb: 'شست',
    'right-index': 'انگشت اشارهٔ دست راست', 'right-middle': 'انگشت میانی دست راست',
    'right-ring': 'انگشت حلقهٔ دست راست', 'right-pinky': 'انگشت کوچک دست راست'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'تنظیمات صفحه‌کلید',
    showKeyboard: 'نمایش صفحه‌کلید',
    showHands: 'نمایش دست‌ها',
    rightHandOnly: 'فقط دست راست',
    leftHandOnly: 'فقط دست چپ',
    animatedHands: 'دست‌ها کلیدها را دنبال می‌کنند',
    // Chữ Ba Tư không có hoa/thường; hai lựa chọn này chỉ đổi nhãn Latin trên phím (Shift, Enter…).
    letterCase: 'حروف روی کلیدها',
    uppercase: 'بزرگ (ABC)',
    lowercase: 'کوچک (abc)',
    boardAria: 'صفحه‌کلید روی صفحه', keypadAria: 'صفحه‌کلید عددی روی صفحه',
    keyboardShape: 'نوع صفحه‌کلید', shapeAuto: 'بر اساس چیدمان', shapeAnsi: '۱۰۴ کلید (Shift چپ بلند)', shapeIso: '۱۰۵ کلید (کلیدی کنار Shift چپ)',
    layout: 'چیدمان صفحه‌کلید',
    save: 'ذخیره',
    cancel: 'انصراف',
    close: 'بستن'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} درس انجام شده`,
    legacy: n => `${n} درس از دورهٔ قبلی را تمام کرده‌اید — بخش ۱ و ۲ از حالا باز است.`,
    ctaResume: '▶ ادامه', ctaStart: '▶ شروع',
    ctaLesson: (verb, number, title) => `${verb} درس ${number} · ${title} <span>←</span>`,
    ctaAllDone: 'به پایان آنچه نوشته شده رسیده‌اید <span>←</span>',
    rowResume: (screen, total) => `▶ ادامه · صفحهٔ ${screen}/${total}`,
    rowStart: '▶ شروع',
    rowDone: '✓ انجام شد',
    unlocked: 'باز',
    unlockAfter: n => `بعد از درس ${n} باز می‌شود`,
    unlockNow: 'همین حالا باز شود'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `T` của trang test (/fa/test-tayp/). Chữ tĩnh ở
     kiem-tra-toc-do-go/text/fa.mjs. Đơn vị "کلمه در دقیقه" như player/progress. Đoạn văn chỉ dùng ký
     tự của bố cục 109 (và cả 140): ی ک Ba Tư, ، ؟ « » và dấu chấm; KHÔNG nửa khoảng trắng (ZWNJ, như
     data/words/fa.js) nên câu kể ở thì quá khứ, không động từ می‌، ها chỉ sau chữ không nối; không
     harakat, không tanwin, không chữ số. Số trong chuỗi {seconds}/{minutes} là chữ số Latin (typing-test.js). */
  test: {
    wpmUnit: 'کلمه در دقیقه',
    passage: 'برای یادگرفتن تایپ ده انگشتی سن مهم نیست، فقط کمی صبر لازم است. انگشتان خود را روی ردیف میانی صفحه کلید بگذارید. روی کلیدهای ب و ت برجستگی کوچکی هست که کمک کند بدون نگاه کردن به پایین جای خود را پیدا کنید. در روزهای اول سرعت کم است و خطا زیاد، و این طبیعی است. هر روز ده دقیقه تمرین کنید تا بعد از چند هفته انگشتان شما خودشان حروف را پیدا کنند.',
    passages: [
      'برای یادگرفتن تایپ ده انگشتی سن مهم نیست، فقط کمی صبر لازم است. انگشتان خود را روی ردیف میانی صفحه کلید بگذارید. روی کلیدهای ب و ت برجستگی کوچکی هست که کمک کند بدون نگاه کردن به پایین جای خود را پیدا کنید. در روزهای اول سرعت کم است و خطا زیاد، و این طبیعی است. هر روز ده دقیقه تمرین کنید تا بعد از چند هفته انگشتان شما خودشان حروف را پیدا کنند.',
      'صبح آسمان صاف بود و به نظر رسید که روز گرمی در پیش است. اما نزدیک ظهر ابرهای سنگین از سمت دریا آمدند، باد سردی وزید و اولین قطرات باران روی خیابان افتاد. مردم در پارک چتر خود را باز کردند یا زیر درختان پناه گرفتند. باران بیشتر از بیست دقیقه طول نکشید. بعد دوباره آفتاب درآمد، هوا بوی خاک خیس گرفت و کودکان با خوشحالی به حیاط برگشتند.',
      'صبح جمعه بازار نزدیک خانه ما خیلی شلوغ بود. فروشندگان گوجه، خیار، سیب و سبزی تازه را روی میزهای چوبی چیده بودند و در انتهای ردیف پیرمردی عسل و پنیر و گردو برای فروش آورده بود. زنی مدت زیادی جلوی جعبه پرتقال ایستاد و چند بار قیمت را پرسید. پسر کوچکی با غرور یک کیسه گیلاس به خانه برد. کسانی که زود آمده بودند بهترین میوه را خریدند و نزدیک ظهر فروشندگان بساط خود را جمع کردند.',
      'قطار درست سر وقت حرکت کرد. از پنجره مزارع سبز، روستاهای کوچک و چند ایستگاه آرام گذشتند. در کوپه همه ساکت بودند. مردی سرگرم خواندن کتاب بود و زنی کنار پنجره جدول حل کرد و گاهی از بقیه یک کلمه مناسب پرسید. مهماندار قطار چای و آب آورد. نزدیک غروب اعلام کردند که تا ایستگاه بزرگ نیم ساعت راه مانده است، و مسافران کم کم وسایل خود را جمع کردند.',
      'برای یک سوپ ساده چیز خاصی لازم نیست: هویج، پیاز، کمی جو، نمک و سبزی تازه. اول پیاز را در کمی روغن سرخ کنید تا طلایی شود. بعد هویج خرد شده و جو را اضافه کنید و آب بریزید. قابلمه را روی حرارت کم بگذارید تا حدود یک ساعت بپزد. در آخر نمک، فلفل و سبزی را اضافه کنید. سوپ را داغ با نان تازه و کمی آبلیمو سر سفره بیاورید.',
      'دیروز به کتابخانه محله رفتم. در سالن مطالعه چند دانشجو پشت میزهای بلند نشسته بودند و سرگرم آماده شدن برای امتحان بودند. دو پیرمرد در گوشه سالن روزنامه را ورق زدند و آهسته با هم حرف زدند. بخش کودکان پر از کتاب رنگی و صندلی نرم بود. کتابدار اسم بیشتر اعضای ثابت را بلد بود و برای آخر هفته یک رمان کوتاه به من پیشنهاد کرد.',
      'آخر هفته گذشته با دوستانم به جنگل رفتیم. پاییز بود و مسیر از میان درختان بلند گذشت. برگ خشک زیر پایمان صدا کرد و هوا بوی باران داد. با خود فلاسک چای و کمی نان و پنیر برده بودیم. کنار رودخانه نشستیم و مدتی فقط به صدای آب گوش دادیم. آفتاب زود غروب کرد، پس قبل از تاریکی برگشتیم. خسته بودیم، اما از روزی که دور از صفحه گوشی گذشت راضی بودیم.',
      'دوچرخه تمام زمستان در بالکن ماند و با آمدن بهار وقت تعمیر آن رسید. اول باید باد لاستیک را بررسی کرد و ترمز را امتحان کرد. زنجیر خشک شده بود و صدا داد، پس چند قطره روغن لازم داشت. بعد بدنه را با یک پارچه خیس تمیز کردم و فرمان را محکم کردم. اولین دور در کوچه همیشه یک شادی ساده دارد: باد روی صورت، حرکت سبک و فکر سفرهای طولانی تابستان.',
      'روی در ساختمان کاغذی چسبانده بودند: روز جمعه ساکنان ساختمان دور هم جمع شدند تا حیاط را تمیز کنند. هر کس چیز مفیدی آورد، یکی جارو، یکی رنگ برای نیمکت و یکی هم کیک برای چای. کودکان با گچ روی زمین نقاشی کشیدند و بزرگترها کنار در ورودی گل کاشتند. چنین روزهایی کم است، اما از آن روز به بعد همسایگان در خیابان هم به هم سلام کردند، نه فقط در آسانسور.',
      'یک عادت خوب هنگام تایپ این است که به صفحه نمایش نگاه کنید، نه به صفحه کلید. حرف آ را با کلید تبدیل و کلید الف تایپ کنید. آیا جای ویرگول را پیدا کردید؟ باید کلید تبدیل را نگه دارید و عدد هفت را بزنید. برای نوشتن گیومه هم کلید تبدیل لازم است. اگر هر روز یک ربع تمرین کنید، بعد از یک ماه نوشتن یک متن بلند وقت خیلی کمتری از امروز لازم دارد.'
    ],
    title: 'تست تایپ {seconds} ثانیه‌ای',
    titleMinutes: 'تست تایپ {minutes} دقیقه‌ای',
    ready: 'هر وقت آماده بودید، شروع کنید.',
    running: 'نتیجه همین حالا محاسبه می‌شود.',
    finished: 'زمان تمام شد ({seconds} ثانیه). نتیجه: {wpm} کلمه در دقیقه، دقت {accuracy}٪، خطاها: {errors}.',
    finishedMinutes: 'زمان تمام شد ({minutes} دقیقه). نتیجه: {wpm} کلمه در دقیقه، دقت {accuracy}٪، خطاها: {errors}.',
    accuracyName: 'دقت',
    comparisonSame: 'همان نتیجهٔ دفعهٔ قبل.',
    comparisonDelta: '{delta} کلمه در دقیقه نسبت به نتیجهٔ قبلی',
    progressEmpty: 'هنوز دادهٔ کافی نیست. چند تست انجام دهید تا پیشرفت شما اینجا نشان داده شود.',
    progressNone: 'هنوز داده‌ای از پیشرفت نیست.',
    metricEmpty: 'برای این شاخص داده‌ای نیست.',
    chartEmpty: 'دادهٔ مناسبی برای کشیدن این نمودار نیست.',
    chartLabel: '{metric} در طول زمان',
    trendEmpty: 'داده برای دیدن روند کافی نیست.',
    trendSame: 'از آغاز این بازه تغییری نکرده است.',
    trendDelta: '{change} {measure} از آغاز این بازه.',
    measureAccuracy: 'واحد دقت',
    progressSummary: '{count} تست در {days} روز گذشته. میانگین سرعت {wpm} کلمه در دقیقه، میانگین دقت {accuracy}٪.',
    dateLocale: 'fa'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Mọi con số in bằng chữ số Ba Tư
     (toLocaleString('fa')), khớp trang đầu /fa/; ngày theo lịch Ba Tư mà locale 'fa' tự chọn. */
  progress: {
    levels: ['تازه‌کار', 'رو به پیشرفت', 'پایدار', 'سریع', 'روان'],
    legacy: n => `${Number(n).toLocaleString('fa')} درس از دورهٔ قبلی را تمام کرده‌اید — بخش ۱ و ۲ از حالا باز است.`,
    unit: index => `بخش ${typeof index === 'number' ? index.toLocaleString('fa') : index}`,
    soon: ' · به‌زودی',
    trendHint: n => (n === 1 ? 'فقط یک درس دیگر، و دادهٔ کافی برای کشیدن روند جمع می‌شود.'
      : `${n === 2 ? 'دو' : Number(n).toLocaleString('fa')} درس دیگر، و دادهٔ کافی برای کشیدن روند جمع می‌شود.`),
    stripLevel: level => `سطح: ${level}`,
    statWpm: 'سرعت اخیر',
    statAccuracy: 'دقت',
    statSessions: 'جلسه‌ها',
    target: (wpm, accuracy) => `هدف بعدی: <b>${Number(wpm).toLocaleString('fa')}</b> کلمه در دقیقه · دقت <b>${Number(accuracy).toLocaleString('fa')}</b>٪`,
    adviceStart: 'یک درس تایپ کنید تا این صفحه بفهمد کجای کار هستید.',
    actionStart: 'شروع درس ۱ ←',
    adviceWeak: keys => `${keys} شما را عقب نگه می‌دارند — یک دقیقه تمرین فقط روی آنها خیلی می‌ارزد.`,
    actionWeak: keys => `تمرین ${keys} ←`,
    adviceSteady: 'دارید پیش می‌روید — روزی یک درس ریتم را نگه می‌دارد.',
    actionLesson: (number, title) => `درس ${Number(number).toLocaleString('fa')} · ${title} ←`,
    actionTest: 'آزمون سرعت ←',
    actionLessons: 'دیدن دوره ←',
    heatLegend: 'دقت هر کلید',
    heatStrong: 'محکم',
    heatFair: 'نوسانی',
    heatWeak: 'نیاز به تمرین',
    badgeDate: at => new Date(at).toLocaleDateString('fa', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `دریافت‌شده در ${date}` : 'دریافت‌شده'),
    number: value => value.toLocaleString('fa'),
    dailyGoal: (minutes, goal) => `${Number(minutes).toLocaleString('fa')} / ${Number(goal).toLocaleString('fa')} دقیقه`,
    streak: days => `🔥 ${Number(days).toLocaleString('fa')} روز پشت سر هم`,
    bestStreak: days => `بهترین: ${Number(days).toLocaleString('fa')} روز`,
    today: minutes => `امروز ${Number(minutes).toLocaleString('fa')} دقیقه`,
    clearConfirm: 'همهٔ پیشرفت و نمره‌های ذخیره‌شده روی این دستگاه پاک شود؟'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'قدم اول', hint: 'اولین درس خود را تمام کنید.' },
    'unit-1': { title: 'یک بخش کامل', hint: 'یک بخش را کامل تمام کنید.' },
    'stars-30': { title: '۳۰ ستاره', hint: 'در دوره ۳۰ ستاره جمع کنید.' },
    'stars-90': { title: '۹۰ ستاره', hint: 'در دوره ۹۰ ستاره جمع کنید.' },
    'streak-3': { title: 'سه روز پشت سر هم', hint: 'سه روز پشت سر هم به هدف روزانه برسید.' },
    'streak-7': { title: 'یک هفتهٔ کامل', hint: 'هفت روز پشت سر هم به هدف روزانه برسید.' },
    'clean-40': { title: '۴۰ کلمه در دقیقه، تمیز', hint: 'یک دور با ۴۰ کلمه در دقیقه و دقت ۹۵٪ یا بیشتر.' },
    'clean-60': { title: '۶۰ کلمه در دقیقه، تمیز', hint: 'یک دور با ۶۰ کلمه در دقیقه و دقت ۹۵٪ یا بیشتر.' },
    'typed-5000': { title: '۵۰۰۰ ضربه', hint: 'در مجموع پنج هزار ضربه بزنید.' }
  }
};
