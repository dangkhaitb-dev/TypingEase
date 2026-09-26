/* i18n/ui.ar.js — lớp tiếng Ả Rập.
 *
 * Nạp bởi mọi trang dưới /ar/, bằng <script src="/i18n/ui.ar.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên.
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt. Đó là chủ ý — sai trông thấy vẫn hơn ô trống. Cũng có
 * nghĩa là tên khoá bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn là an toàn — đừng thêm `defer`.
 *
 * Xưng hô: ngôi thứ hai số ít, câu mệnh lệnh — cùng giọng với data/courses/ar.js.
 */
window.TypingEaseUI = {
  lang: 'ar',

  routes: {
    home: '/ar/',
    lessons: '/ar/durus/',
    learn: '/ar/taallam/',
    // Ba trang này chưa có bản tiếng Ả Rập. `null` = BỎ liên kết, không phải trỏ sang bản tiếng
    // Anh hay tiếng Việt — xem cách `R.weak` bị chặn trong player.js.
    test: '/ar/ikhtibar-alkitaba/',
    progress: '/ar/taqaddum/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /ar/ */
  home: {
    nav: ['تدرب', 'الدورة'],
    roadmapKicker: '{total} درسا · {units} وحدات',
    roadmapAll: 'اعرض الدروس الـ{total} ←',
    unitTitle: 'الوحدة {index} · {title}',
    unitDone: '{done}/{total} دروس ✓',
    railDone: '✓',
    railSoon: 'قريبا',
    railNote: 'الوحدات التالية قيد الكتابة، والدروس التي لم تفتح بعد تظهر باللون الرمادي.',
    teaser: 'الوحدة {index} · {title} ({count} دروس)',
    teaserLocked: '🔒',
    shortcutsTitle: 'تدريب إضافي',
    shortcuts: [
      ['اختبار السرعة', 'قس عدد الكلمات في الدقيقة ودقتك.'],
      ['المفاتيح الضعيفة', 'تمارين مبنية على المفاتيح التي تخطئ فيها أكثر من غيرها.'],
      ['تدريب حر', 'الصق نصك واكتبه على طريقتك.']
    ],
    continueKicker: 'تابع',
    continueName: 'الدرس {n} · {title}',
    continueCount: 'الوحدة {unit} · الشاشة {screen}/{screens}',
    continueGo: '▶ تابع (Enter)',
    continueRedo: '↻ أعد الدرس {n}',
    continueMap: 'اعرض الدورة',
    streak: '🔥 {days} أيام · {minutes} دقيقة اليوم',
    coachWeak: 'انتبه: <b>{keys}</b> تبطئك. هل تخصص لها دقيقة؟',
    legacy: 'أنهيت {n} دروس من الدورة السابقة، والوحدتان 1 و2 مفتوحتان الآن.',
    doneKicker: 'حافظ على الإيقاع',
    doneName: 'أنهيت كل ما كتب حتى الآن',
    doneCount: 'الوحدة التالية في الطريق. راجع درسا حتى لا تفقد الإيقاع.',
    doneGo: '▶ اعرض الدورة (Enter)',
    exploreKicker: 'موارد TypingEase',
    footer: 'اكتب أبطأ قليلا، تصل أبعد بكثير.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /ar/ chưa có khối explore nào. */
  localized: {
    exploreTitle: 'اكتشف TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Ả Rập không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'جار تحميل الدرس…',
    missingTitle: 'هذا الدرس بلا محتوى بعد',
    missingBody: 'لم يحمل شيء من <code>{path}</code>. الدرس قيد الكتابة، فحاول لاحقا أو اختر درسا آخر من الدورة.',
    noCurriculum: 'لم يحمل فهرس الدورة (<code>data/curriculum.ar.js</code>).',
    fixtureNote: 'يعمل بمحتوى تجريبي من <code>hoc/_fixture/</code>، فالدرس الحقيقي ليس في <code>data/lessons/</code> بعد.',
    screenOf: 'الشاشة {n} / {total}',
    newKey: 'مفتاح جديد',
    pressToContinue: 'اضغط <b>{key}</b> للمتابعة',
    enterToContinue: 'اضغط <b>Enter</b> للمتابعة',
    found: 'هذا هو.',
    foundBody: 'تذكر مكان <b>{key}</b>، فسنتدرب عليه الآن.',
    accuracyLive: 'الدقة {accuracy}%',
    errorsLive: 'الأخطاء: {count}',
    tokensLive: 'الكلمات: {count}',
    great: 'ممتاز.',
    good: 'جيد جدا.',
    pass: 'ناجح.',
    fail: 'أقل من {min}%، فالأفضل أن تعيد هذه الشاشة.',
    resultAccuracy: 'الدقة {accuracy}%',
    resultWpm: '{wpm} كلمة في الدقيقة',
    resultErrors: 'الأخطاء: {count}',
    resultTokens: 'الكلمات الصحيحة: {count}',
    slowKey: '<b>{key}</b> كان أبطأ مفاتيحك ({ms} ث لكل ضغطة). دع الإصبع يصل إليه ثم يعود فورا إلى صف الارتكاز.',
    keepAccuracy: 'خفف السرعة ترتفع الدقة. السرعة تأتي بعد ذلك، لا العكس.',
    continueEnter: 'تابع ← (Enter)',
    redoScreen: 'أعد هذه الشاشة',
    redoScreenAdvised: 'أعد هذه الشاشة (ننصح بذلك)',
    skipScreen: 'تخط',
    lessonDone: 'انتهى الدرس',
    learned: 'تعرف الآن {count} مفتاحا:',
    statWpm: 'السرعة',
    statAccuracy: 'الدقة',
    statTime: 'الوقت',
    statStars: 'النجوم',
    technique: 'تذكر هذا',
    weakTitle: 'مفاتيح تحتاج إلى تدريب أكثر',
    weakButton: 'تدرب دقيقة واحدة',
    unitProgress: '{unit} · {done}/{total} دروس',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ عد إلى الصفحة الرئيسية (Enter)',
    redoLesson: '↻ ابدأ الدرس من جديد',
    home: 'الصفحة الرئيسية',
    noMoreTitle: 'وصلت إلى آخر ما كتب',
    noMoreBody: 'الوحدة التالية قيد الإعداد. إلى ذلك الحين راجع درسا، فالجولة الثانية بإيقاع جيد تفيد أكثر مما تظن.',
    notReadyTitle: 'هذا الدرس بلا محتوى بعد',
    notReadyBody: '<b>{title}</b> موجود في الدورة، لكن محتواه قيد الكتابة. اختر درسا مفتوحا.',
    weakPage: 'تدريب المفاتيح الضعيفة',
    badgeNew: 'شارة جديدة',
    badgeAll: 'اعرض كل الشارات ←',
    shiftFinger: 'خنصر اليد الأخرى',
    testPage: 'اختبار السرعة',
    mobileNote: 'هذه الدورة مصممة للوحة مفاتيح حاسوب، فالأصابع العشرة تحتاج إلى عشرة مفاتيح حقيقية. يمكنك أن تجربها على الهاتف، لكن عد إلى لوحة مفاتيح لتتعلم فعلا.',
    mobileNoteClose: 'فهمت',
    tapToType: 'المس للكتابة',
    menuTitle: 'متوقف مؤقتا',
    menuResume: 'تابع الكتابة',
    menuRedo: 'أعد هذه الشاشة',
    menuSkip: 'تخط هذه الشاشة',
    menuExit: 'عد إلى الصفحة الرئيسية',
    clock: '{seconds} ث',
    lessonNumber: 'الدرس {number}',
    pageTitle: 'درس · TypingEase',
    screenTip: 'الشاشة {number} · {type}',
    firstLesson: 'عد إلى الدرس الأول'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'الخنصر الأيسر', LR: 'البنصر الأيسر', LM: 'الوسطى اليسرى',
    LI: 'السبابة اليسرى', LT: 'الإبهام الأيسر',
    RT: 'الإبهام الأيمن', RI: 'السبابة اليمنى', RM: 'الوسطى اليمنى',
    RR: 'البنصر الأيمن', RP: 'الخنصر الأيمن'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng */
  keyboardFingers: {
    'left-pinky': 'الخنصر الأيسر', 'left-ring': 'البنصر الأيسر',
    'left-middle': 'الوسطى اليسرى', 'left-index': 'السبابة اليسرى',
    'left-thumb': 'الإبهام الأيسر', thumb: 'الإبهام',
    'right-index': 'السبابة اليمنى', 'right-middle': 'الوسطى اليمنى',
    'right-ring': 'البنصر الأيمن', 'right-pinky': 'الخنصر الأيمن'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'إعدادات لوحة المفاتيح',
    showKeyboard: 'أظهر لوحة المفاتيح',
    showHands: 'أظهر اليدين',
    rightHandOnly: 'اليد اليمنى فقط',
    leftHandOnly: 'اليد اليسرى فقط',
    animatedHands: 'اليدان تتبعان المفاتيح',
    letterCase: 'حروف المفاتيح',
    uppercase: 'حروف كبيرة (ABC)',
    lowercase: 'حروف صغيرة (abc)',
    boardAria: 'لوحة المفاتيح على الشاشة', keypadAria: 'لوحة الأرقام على الشاشة',
    keyboardShape: 'نوع لوحة المفاتيح', shapeAuto: 'حسب التخطيط', shapeAnsi: '104 مفاتيح (Shift أيسر طويل)', shapeIso: '105 مفاتيح (مفتاح بجانب Shift الأيسر)',
    layout: 'تخطيط لوحة المفاتيح',
    save: 'احفظ',
    cancel: 'إلغاء',
    close: 'إغلاق'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} دروس منتهية`,
    legacy: n => `أنهيت ${n} دروس من الدورة السابقة، والوحدتان 1 و2 مفتوحتان الآن.`,
    ctaResume: '▶ تابع', ctaStart: '▶ ابدأ',
    ctaLesson: (verb, number, title) => `${verb} الدرس ${number} · ${title} <span>←</span>`,
    ctaAllDone: 'وصلت إلى آخر ما كتب <span>←</span>',
    rowResume: (screen, total) => `▶ تابع · الشاشة ${screen}/${total}`,
    rowStart: '▶ ابدأ',
    rowDone: '✓ منته',
    unlocked: 'مفتوحة',
    unlockAfter: n => `تفتح بعد الدرس ${n}`,
    unlockNow: 'افتح هذه الوحدة الآن'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `T` của trang test (/ar/ikhtibar-alkitaba/). Chữ tĩnh ở
     kiem-tra-toc-do-go/text/ar.mjs. Đơn vị "كلمة في الدقيقة" như player/progress ở trên. Đoạn văn chỉ
     dùng ký tự của bố cục 110: chữ Ả Rập chuẩn (ي ك), ، ؛ ؟ và dấu chấm; không harakat, không tanwin,
     không kashida, không chữ số. Số phút đổi dạng theo số, nên chuỗi có {minutes} dùng dấu hai chấm. */
  test: {
    wpmUnit: 'كلمة في الدقيقة',
    passage: 'تعلم الكتابة باللمس ممكن في أي عمر، وكل ما يحتاجه قليل من الصبر. ضع أصابعك على الصف الأوسط من لوحة المفاتيح، وستجد على مفتاحي الباء والتاء نتوءا صغيرا يساعدك على معرفة مكانك دون أن تنظر إلى الأسفل. في البداية ستكون السرعة بطيئة والأخطاء كثيرة، وهذا أمر طبيعي. تدرب عشر دقائق كل يوم، وبعد أسابيع قليلة ستجد أصابعك الحروف وحدها.',
    passages: [
      'تعلم الكتابة باللمس ممكن في أي عمر، وكل ما يحتاجه قليل من الصبر. ضع أصابعك على الصف الأوسط من لوحة المفاتيح، وستجد على مفتاحي الباء والتاء نتوءا صغيرا يساعدك على معرفة مكانك دون أن تنظر إلى الأسفل. في البداية ستكون السرعة بطيئة والأخطاء كثيرة، وهذا أمر طبيعي. تدرب عشر دقائق كل يوم، وبعد أسابيع قليلة ستجد أصابعك الحروف وحدها.',
      'كانت السماء صافية في الصباح، وبدا أن اليوم سيكون دافئا. لكن قبل الظهر جاءت غيوم ثقيلة من جهة البحر، وهبت ريح باردة، وسقطت أول قطرات المطر على الرصيف. فتح الناس في الحديقة مظلاتهم أو احتموا تحت الأشجار. لم يستمر المطر أكثر من عشرين دقيقة، ثم عادت الشمس، وامتلأ الهواء برائحة التراب المبلل والعشب، وخرج الأطفال إلى الساحة من جديد.',
      'في صباح كل سبت يمتلئ السوق القريب من البيت بالناس. يرتب الباعة الطماطم والخيار والبرتقال على طاولات خشبية، وفي آخر الصف يبيع رجل عجوز العسل والجبن والزيتون. تقف امرأة طويلا أمام صندوق البطاطس وتسأل عن السعر أكثر من مرة، ويحمل طفل كيسا من الفراولة بفخر. من يأتي مبكرا يجد أفضل ما في السوق، ومع الظهر يبدأ الباعة بجمع صناديقهم.',
      'انطلق القطار في موعده تماما. مرت من النافذة حقول واسعة، ثم قرى صغيرة ومحطات هادئة. في العربة كان الجو هادئا، رجل يقرأ كتابا، وامرأة قرب النافذة تحل الكلمات المتقاطعة وتسأل من حولها أحيانا عن كلمة مناسبة. مر موظف يبيع الشاي والماء. وقبل المساء أعلن السائق أن المحطة الكبيرة بعد نصف ساعة، فبدأ الركاب يجمعون حقائبهم.',
      'لا تحتاج شوربة العدس إلى شيء خاص، يكفي عدس أحمر وبصلة وجزرة وقليل من الكمون والملح. يقلى البصل أولا في قليل من الزيت حتى يصبح ذهبيا، ثم يضاف الجزر المقطع والعدس المغسول والماء. تترك القدر على نار هادئة نحو نصف ساعة، ثم تهرس الشوربة حتى تصبح ناعمة. تقدم ساخنة مع عصير الليمون وقطعة من الخبز الطازج، ويمكن حفظ ما يبقى منها في الثلاجة يومين.',
      'تفتح مكتبة الحي أبوابها يوم السبت حتى الرابعة عصرا. في قاعة القراءة طاولات طويلة يجلس إليها الطلاب استعدادا للامتحانات، بينما يقرأ كبار السن الصحف في الزاوية. وهناك ركن للأطفال فيه كتب ملونة ومقاعد مريحة. تعرف أمينة المكتبة أغلب الزوار الدائمين بأسمائهم، ويمكنها دائما أن تقترح كتابا مناسبا لعطلة نهاية الأسبوع.',
      'في الخريف يصبح المشي في الغابة متعة حقيقية. يمر الطريق بين أشجار عالية، وتحت الأقدام أوراق جافة تصدر صوتا خفيفا. وقد ترى في الطريق طيورا صغيرة تبحث عن طعامها بين الشجيرات. تغيب الشمس مبكرا في هذا الفصل، لذلك من الأفضل أن تخرج في الصباح وأن تأخذ معك ماء وشيئا تأكله. تعود في آخر النهار متعبا، لكنك راض عن يوم كامل قضيته بعيدا عن الشاشات وضجيج المدينة.',
      'بقيت الدراجة في الشرفة طوال الشتاء، ومع الربيع جاء وقت إصلاحها. أولا يجب نفخ العجلات والتأكد من الفرامل. السلسلة جافة وتصدر صريرا، فتحتاج إلى قطرات من الزيت. بعد ذلك يمكن مسح الإطار بقطعة قماش مبللة وشد المقود جيدا. الجولة الأولى في الشارع تجلب دائما فرحا بسيطا، هواء على الوجه، وحركة خفيفة، وأفكار عن رحلات الصيف الطويلة.',
      'علقت على باب العمارة ورقة صغيرة، يوم السبت يجتمع السكان لتنظيف الساحة وزراعة بعض الأشجار. كل واحد يحضر شيئا مفيدا، هذا يحضر مكنسة، وذاك يحضر دهانا للمقاعد، وتلك تحضر كعكة للشاي. يرسم الأطفال بالطباشير على الأرض، ويزرع الكبار الورد قرب المدخل. مثل هذه الأيام قليلة، لكن الجيران بعدها يتبادلون التحية في الشارع وليس في المصعد فقط.',
      'من العادات الجيدة عند الكتابة أن تنظر إلى الشاشة لا إلى لوحة المفاتيح. الهمزة فوق الألف تكتب مع مفتاح التبديل، وكذلك الفاصلة وعلامة الاستفهام. هل تعرف أين تقع التاء المربوطة؟ إنها في الصف السفلي، بجانب الواو. أما الفاصلة المنقوطة فتجدها فوق الحاء؛ وهي أقل استعمالا. إذا تدربت ربع ساعة كل يوم، فبعد شهر واحد ستكتب نصا طويلا في وقت أقل بكثير مما تحتاجه الآن.'
    ],
    title: 'اختبار سرعة الكتابة لمدة {seconds} ثانية',
    titleMinutes: 'اختبار سرعة الكتابة، عدد الدقائق: {minutes}',
    ready: 'ابدأ حين تكون مستعدا.',
    running: 'تحسب نتيجتك الآن.',
    finished: 'انتهى الوقت بعد {seconds} ثانية. النتيجة: {wpm} كلمة في الدقيقة، والدقة {accuracy}%، وعدد الأخطاء: {errors}.',
    finishedMinutes: 'انتهى الوقت (عدد الدقائق: {minutes}). النتيجة: {wpm} كلمة في الدقيقة، والدقة {accuracy}%، وعدد الأخطاء: {errors}.',
    accuracyName: 'الدقة',
    comparisonSame: 'مثل نتيجتك السابقة.',
    comparisonDelta: '{delta} كلمة في الدقيقة مقارنة بنتيجتك السابقة',
    progressEmpty: 'لا توجد بيانات كافية بعد. أكمل بعض الاختبارات لترى تقدمك هنا.',
    progressNone: 'لا توجد بيانات عن التقدم بعد.',
    metricEmpty: 'لا توجد بيانات لهذا المقياس.',
    chartEmpty: 'لا توجد بيانات مناسبة لرسم هذا المخطط.',
    chartLabel: '{metric}: التغير مع الوقت',
    trendEmpty: 'البيانات قليلة جدا لمعرفة الاتجاه.',
    trendSame: 'لا تغيير منذ بداية هذه الفترة.',
    trendDelta: '{change} {measure} منذ بداية هذه الفترة.',
    measureAccuracy: 'نقطة من الدقة',
    progressSummary: 'عدد الاختبارات في الفترة المختارة (بالأيام: {days}): {count}. متوسط السرعة {wpm} كلمة في الدقيقة، ومتوسط الدقة {accuracy}%.',
    dateLocale: 'ar-u-nu-latn'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Số viết bằng chữ số Latin như
     phần còn lại của site /ar/ (ar-u-nu-latn, để trình duyệt nào cũng ra cùng một kiểu).
     Số ngày: 1 يوم واحد, 2 يومان, 3–10 أيام, 11+ يوما. */
  progress: {
    levels: ['بداية', 'تقدم', 'ثبات', 'سرعة', 'طلاقة'],
    legacy: n => `أنهيت ${n} دروس من الدورة السابقة، والوحدتان 1 و2 مفتوحتان الآن.`,
    unit: index => `الوحدة ${index}`,
    soon: ' · قريبا',
    trendHint: n => (n === 1 ? 'درس واحد آخر ويصبح لدينا ما يكفي لرسم اتجاه تقدمك.'
      : n === 2 ? 'درسان آخران ويصبح لدينا ما يكفي لرسم اتجاه تقدمك.'
        : `${n} دروس أخرى ويصبح لدينا ما يكفي لرسم اتجاه تقدمك.`),
    stripLevel: level => `المستوى: ${level}`,
    statWpm: 'السرعة الأخيرة',
    statAccuracy: 'الدقة',
    statSessions: 'الجلسات',
    target: (wpm, accuracy) => `الهدف التالي: <b>${wpm}</b> كلمة في الدقيقة · دقة <b>${accuracy}</b>%`,
    adviceStart: 'اكتب درسا واحدا وستعرف هذه الصفحة أين تقف.',
    actionStart: 'ابدأ الدرس 1 ←',
    adviceWeak: keys => `${keys} تبطئك، ودقيقة عليها وحدها تفيدك كثيرا.`,
    actionWeak: keys => `تدرب على ${keys} ←`,
    adviceSteady: 'أنت تتقدم. درس واحد كل يوم يحفظ الإيقاع.',
    actionLesson: (number, title) => `الدرس ${number} · ${title} ←`,
    actionTest: 'اختبار السرعة ←',
    actionLessons: 'اعرض الدورة ←',
    heatLegend: 'الدقة لكل مفتاح',
    heatStrong: 'متقن',
    heatFair: 'متذبذب',
    heatWeak: 'يحتاج إلى تدريب',
    badgeDate: at => new Date(at).toLocaleDateString('ar-u-nu-latn', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `حصلت عليها في ${date}` : 'حصلت عليها'),
    number: value => value.toLocaleString('ar-u-nu-latn'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} دقيقة`,
    streak: days => `🔥 ${days === 1 ? 'يوم واحد' : days === 2 ? 'يومان' : days >= 3 && days <= 10 ? `${days} أيام` : days > 10 ? `${days} يوما` : `${days} يوم`} على التوالي`,
    bestStreak: days => `الأفضل: ${days === 1 ? 'يوم واحد' : days === 2 ? 'يومان' : days >= 3 && days <= 10 ? `${days} أيام` : days > 10 ? `${days} يوما` : `${days} يوم`}`,
    today: minutes => `${minutes} دقيقة اليوم`,
    clearConfirm: 'أتريد حذف كل التقدم والنتائج المحفوظة على هذا الجهاز؟'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'الخطوة الأولى', hint: 'أكمل درسك الأول.' },
    'unit-1': { title: 'وحدة كاملة', hint: 'أكمل وحدة كاملة.' },
    'stars-30': { title: '30 نجمة', hint: 'اجمع 30 نجمة في الدورة.' },
    'stars-90': { title: '90 نجمة', hint: 'اجمع 90 نجمة في الدورة.' },
    'streak-3': { title: 'ثلاثة أيام متتالية', hint: 'حقق هدفك اليومي ثلاثة أيام متتالية.' },
    'streak-7': { title: 'أسبوع كامل', hint: 'حقق هدفك اليومي سبعة أيام متتالية.' },
    'clean-40': { title: '40 كلمة نظيفة', hint: 'جولة بسرعة 40 كلمة في الدقيقة ودقة 95% أو أكثر.' },
    'clean-60': { title: '60 كلمة نظيفة', hint: 'جولة بسرعة 60 كلمة في الدقيقة ودقة 95% أو أكثر.' },
    'typed-5000': { title: '5000 ضغطة', hint: 'اكتب خمسة آلاف ضغطة في المجموع.' }
  }
};
