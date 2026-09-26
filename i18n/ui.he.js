/* i18n/ui.he.js — lớp tiếng Hebrew.
 *
 * Nạp bởi mọi trang dưới /he/, bằng <script src="/i18n/ui.he.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên — khoá thiếu ở đây thì hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC bảng nó
 * ghi đè (cùng bộ khoá với i18n/ui.es.js).
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`.
 *
 * XƯNG HÔ: mệnh lệnh số nhiều (הקישו, חזרו, בחרו) — cách giao diện tiếng Hebrew thường dùng để
 * không phân giống — giống hệt data/courses/he.js.
 */
window.TypingEaseUI = {
  lang: 'he',

  routes: {
    home: '/he/',
    lessons: '/he/shiurim/',
    learn: '/he/lilmod/',
    // Chưa có các trang này bằng tiếng Hebrew. `null` là tín hiệu BỎ liên kết.
    test: '/he/mivchan-hakldada/',
    progress: '/he/hitkadmut/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /he/ */
  home: {
    nav: ['תרגול', 'קורס'],
    roadmapKicker: '{total} שיעורים · {units} יחידות',
    roadmapAll: 'לכל {total} השיעורים ←',
    unitTitle: 'יחידה {index} · {title}',
    unitDone: '{done}/{total} שיעורים ✓',
    railDone: '✓',
    railSoon: 'בקרוב',
    railNote: 'היחידות הבאות עדיין בכתיבה — שיעורים שעוד לא נפתחו מופיעים באפור.',
    teaser: 'יחידה {index} · {title} ({count} שיעורים)',
    teaserLocked: '🔒',
    shortcutsTitle: 'עוד תרגול',
    shortcuts: [
      ['מבחן מהירות', 'מדדו כמה מילים לדקה אתם מקלידים, ובאיזה דיוק.'],
      ['מקשים חלשים', 'תרגילים שנבנים מהמקשים שבהם אתם טועים הכי הרבה.'],
      ['תרגול חופשי', 'הדביקו טקסט משלכם והקלידו אותו בקצב שלכם.']
    ],
    continueKicker: 'להמשיך',
    continueName: 'שיעור {n} · {title}',
    continueCount: 'יחידה {unit} · מסך {screen}/{screens}',
    continueGo: '▶ להמשיך (Enter)',
    continueRedo: '↻ לחזור על שיעור {n}',
    continueMap: 'לקורס',
    streak: '🔥 {days} ימים · {minutes} דק׳ היום',
    coachWeak: 'שימו לב: <b>{keys}</b> מאטים אתכם — דקה איתם?',
    legacy: 'סיימתם {n} שיעורים בקורס הקודם — יחידות 1 ו־2 כבר פתוחות.',
    doneKicker: 'לשמור על הקצב',
    doneName: 'סיימתם את כל מה שכבר נכתב',
    doneCount: 'היחידה הבאה בדרך. חזרו על שיעור כדי לא לאבד את הקצב.',
    doneGo: '▶ לקורס (Enter)',
    exploreKicker: 'משאבים של TypingEase',
    footer: 'קצת יותר לאט, והרבה יותר רחוק.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi` */
  localized: {
    exploreTitle: 'להכיר את TypingEase',
    explore: []
  },

  /* player.js — bảng `T` */
  player: {
    loading: 'השיעור נטען…',
    missingTitle: 'לשיעור הזה עוד אין תוכן',
    missingBody: 'שום דבר לא נטען מ־<code>{path}</code>. השיעור עדיין בכתיבה — נסו שוב מאוחר יותר או בחרו שיעור אחר בקורס.',
    noCurriculum: 'אינדקס הקורס לא נטען (<code>data/curriculum.he.js</code>).',
    fixtureNote: 'רץ עם תוכן הדוגמה מ־<code>hoc/_fixture/</code> — השיעור האמיתי עוד לא נמצא ב־<code>data/lessons/</code>.',
    screenOf: 'מסך {n} / {total}',
    newKey: 'מקש חדש',
    pressToContinue: 'הקישו <b>{key}</b> כדי להמשיך',
    enterToContinue: 'הקישו <b>Enter</b> כדי להמשיך',
    found: 'זה המקש.',
    foundBody: 'זכרו איפה נמצא <b>{key}</b> — עכשיו מתרגלים אותו.',
    accuracyLive: '{accuracy}% דיוק',
    errorsLive: '{count} טעויות',
    tokensLive: '{count} מילים',
    great: 'מצוין.',
    good: 'טוב מאוד.',
    pass: 'עבר.',
    fail: 'פחות מ־{min}% — כדאי לחזור על המסך הזה.',
    resultAccuracy: '{accuracy}% דיוק',
    resultWpm: '{wpm} מילים לדקה',
    resultErrors: '{count} טעויות',
    resultTokens: '{count} מילים נכונות',
    slowKey: '<b>{key}</b> היה המקש האיטי ביותר ({ms} שנ׳ כל הקשה) — תנו לאצבע להגיע אליו ולחזור מיד לשורת הבית.',
    keepAccuracy: 'מאטים, והדיוק עולה — המהירות באה אחריו, אף פעם לא להפך.',
    continueEnter: 'להמשיך ← (Enter)',
    redoScreen: 'לחזור על המסך',
    redoScreenAdvised: 'לחזור על המסך (מומלץ)',
    skipScreen: 'לדלג',
    lessonDone: 'הושלם',
    learned: 'אתם כבר מכירים {count} מקשים:',
    statWpm: 'מהירות',
    statAccuracy: 'דיוק',
    statTime: 'זמן',
    statStars: 'כוכבים',
    technique: 'כדאי לזכור',
    weakTitle: 'מקשים שכדאי לתרגל עוד',
    weakButton: 'דקה של תרגול',
    unitProgress: '{unit} · {done}/{total} שיעורים',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ חזרה לדף הראשי (Enter)',
    redoLesson: '↻ להתחיל את השיעור מחדש',
    home: 'הדף הראשי',
    noMoreTitle: 'הגעתם לסוף מה שכבר נכתב',
    noMoreBody: 'היחידה הבאה עדיין בעבודה. בינתיים חזרו על שיעור — סיבוב שני בקצב טוב שווה יותר ממה שנדמה.',
    notReadyTitle: 'לשיעור הזה עוד אין תוכן',
    notReadyBody: '<b>{title}</b> נמצא בקורס, אבל התוכן שלו עדיין בכתיבה. בחרו שיעור שכבר פתוח.',
    weakPage: 'תרגול מקשים חלשים',
    badgeNew: 'תג חדש',
    badgeAll: 'לכל התגים ←',
    shiftFinger: 'הזרת של היד השנייה',
    testPage: 'מבחן מהירות',
    mobileNote: 'הקורס הזה בנוי למקלדת של מחשב — עשר אצבעות צריכות עשרה מקשים אמיתיים. אפשר לנסות בטלפון, אבל כדי ללמוד באמת חזרו למקלדת.',
    mobileNoteClose: 'הבנתי',
    tapToType: 'הקישו כאן כדי להקליד',
    menuTitle: 'בהשהיה',
    menuResume: 'להמשיך להקליד',
    menuRedo: 'לחזור על המסך',
    menuSkip: 'לדלג על המסך',
    menuExit: 'חזרה לדף הראשי',
    clock: '{seconds} שנ׳',
    lessonNumber: 'שיעור {number}',
    pageTitle: 'שיעור · TypingEase',
    screenTip: 'מסך {number} · {type}',
    firstLesson: 'חזרה לשיעור הראשון'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'הזרת השמאלית', LR: 'הקמיצה השמאלית', LM: 'האמה השמאלית',
    LI: 'האצבע המורה השמאלית', LT: 'האגודל השמאלי',
    RT: 'האגודל הימני', RI: 'האצבע המורה הימנית', RM: 'האמה הימנית',
    RR: 'הקמיצה הימנית', RP: 'הזרת הימנית'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng */
  keyboardFingers: {
    'left-pinky': 'הזרת השמאלית', 'left-ring': 'הקמיצה השמאלית',
    'left-middle': 'האמה השמאלית', 'left-index': 'האצבע המורה השמאלית',
    'left-thumb': 'האגודל השמאלי', thumb: 'האגודל',
    'right-index': 'האצבע המורה הימנית', 'right-middle': 'האמה הימנית',
    'right-ring': 'הקמיצה הימנית', 'right-pinky': 'הזרת הימנית'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'הגדרות מקלדת',
    showKeyboard: 'להציג את המקלדת',
    showHands: 'להציג את הידיים',
    rightHandOnly: 'רק יד ימין',
    leftHandOnly: 'רק יד שמאל',
    animatedHands: 'הידיים עוקבות אחרי המקשים',
    letterCase: 'אותיות על המקשים',
    uppercase: 'גדולות',
    lowercase: 'קטנות',
    boardAria: 'מקלדת על המסך', keypadAria: 'מקלדת מספרים על המסך',
    keyboardShape: 'סוג המקלדת', shapeAuto: 'לפי הפריסה', shapeAnsi: '104 מקשים (Shift שמאלי ארוך)', shapeIso: '105 מקשים (מקש ליד Shift השמאלי)',
    layout: 'פריסת המקלדת',
    save: 'שמירה',
    cancel: 'ביטול',
    close: 'סגירה'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} שיעורים הושלמו`,
    legacy: n => `סיימתם ${n} שיעורים בקורס הקודם — יחידות 1 ו־2 כבר פתוחות.`,
    ctaResume: '▶ להמשיך', ctaStart: '▶ להתחיל',
    ctaLesson: (verb, number, title) => `${verb} את שיעור ${number} · ${title} <span>←</span>`,
    ctaAllDone: 'הגעתם לסוף מה שכבר נכתב <span>←</span>',
    rowResume: (screen, total) => `▶ להמשיך · מסך ${screen}/${total}`,
    rowStart: '▶ להתחיל',
    rowDone: '✓ הושלם',
    unlocked: 'פתוחה',
    unlockAfter: n => `נפתחת אחרי שיעור ${n}`,
    unlockNow: 'לפתוח את היחידה עכשיו'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `T` của trang test (/he/mivchan-hakldada/). Chữ tĩnh ở
     kiem-tra-toc-do-go/text/he.mjs. Đơn vị "מילים לדקה" như player/progress. Đoạn văn KHÔNG niqqud và
     chỉ dùng chữ Hebrew, dấu cách, dấu phẩy và dấu chấm: gõ được trên cả 142 lẫn SI-1452 (143), nơi
     tầng Shift của ô dấu câu trống (không ? " '). Không chữ số. Phút viết tắt דק׳ như trang chủ /he/. */
  test: {
    wpmUnit: 'מילים לדקה',
    passage: 'אפשר ללמוד הקלדה עיוורת בכל גיל, וכל מה שצריך הוא מעט סבלנות. הניחו את האצבעות על השורה האמצעית של המקלדת. על שני מקשים בשורה הזו יש בליטות קטנות, כך שאפשר למצוא את המקום הנכון בלי להסתכל למטה. בהתחלה הקצב יהיה איטי ויהיו הרבה טעויות, וזה טבעי לגמרי. תרגלו עשר דקות בכל יום, ואחרי כמה שבועות האצבעות כבר ימצאו את האותיות בעצמן.',
    passages: [
      'אפשר ללמוד הקלדה עיוורת בכל גיל, וכל מה שצריך הוא מעט סבלנות. הניחו את האצבעות על השורה האמצעית של המקלדת. על שני מקשים בשורה הזו יש בליטות קטנות, כך שאפשר למצוא את המקום הנכון בלי להסתכל למטה. בהתחלה הקצב יהיה איטי ויהיו הרבה טעויות, וזה טבעי לגמרי. תרגלו עשר דקות בכל יום, ואחרי כמה שבועות האצבעות כבר ימצאו את האותיות בעצמן.',
      'בבוקר השמיים היו בהירים, ונראה היה שהיום יהיה חם. אבל לפני הצהריים הגיעו מכיוון הים עננים כבדים, נשבה רוח קרה, והטיפות הראשונות נפלו על המדרכה. אנשים בפארק פתחו מטריות או עמדו מתחת לעצים. הגשם לא נמשך יותר מעשרים דקות. אחר כך השמש חזרה, ובאוויר היה ריח של אדמה רטובה ודשא. הילדים יצאו מיד לשחק בחצר וקפצו בשלוליות.',
      'בכל יום שישי בבוקר השוק הקרוב לבית מלא אנשים. המוכרים מסדרים על הדוכנים עגבניות, מלפפונים, תפוזים וירקות עלים, ובקצה השורה מוכר זקן דבש, גבינות וזיתים. אישה אחת בוחרת תפוחי אדמה הרבה זמן ושואלת שוב ושוב על המחיר, וילד קטן סוחב הביתה בגאווה שקית תותים. מי שמגיע מוקדם מקבל את הסחורה הטרייה ביותר, ולקראת הצהריים המוכרים מתחילים לאסוף את הארגזים.',
      'הרכבת יצאה בדיוק בזמן. מבעד לחלון עברו שדות ירוקים, כפרים קטנים ותחנות שקטות. בקרון היה שקט, גבר אחד קרא ספר, ואישה ליד החלון פתרה תשבץ ומדי פעם שאלה את כולם אם הם מכירים מילה מתאימה. מישהו עבר בין הספסלים ומכר קפה ומים. לפני הערב הודיעו ברמקול שבעוד חצי שעה מגיעים לתחנה הגדולה, והנוסעים התחילו לאסוף את החפצים שלהם.',
      'שקשוקה טובה לא דורשת שום דבר מיוחד, רק עגבניות בשלות, פלפל אדום, בצל, שום, מלח ומעט פפריקה. קודם מטגנים את הבצל והפלפל בשמן זית עד שהם מתרככים, ואז מוסיפים את השום ואת העגבניות החתוכות. אחרי רבע שעה של בישול על אש נמוכה שוברים לתוך הרוטב כמה ביצים ומכסים את המחבת. מגישים חם, ישר מהמחבת, עם לחם טרי. מי שאוהב חריף מוסיף גם פלפל ירוק.',
      'הספרייה השכונתית פתוחה ביום שישי עד אחת בצהריים. באולם הקריאה יש שולחנות ארוכים, ליד אחד מהם סטודנטים מתכוננים למבחנים, ובפינה אנשים מבוגרים קוראים עיתון. יש גם פינה לילדים עם ספרים צבעוניים וכריות רכות על הרצפה. הספרנית מכירה כמעט את כל הקוראים הקבועים בשמם, ותמיד יש לה המלצה על ספר טוב לסוף השבוע.',
      'בסתיו נעים במיוחד לטייל ביער. השביל עובר בין עצים גבוהים, והעלים היבשים מרשרשים מתחת לרגליים. לפעמים רואים בדרך ציפורים קטנות שמחפשות אוכל בין השיחים. השמש שוקעת מוקדם בעונה הזו, ולכן כדאי לצאת בבוקר ולקחת איתכם מים, כובע ומשהו קטן לאכול. בסוף היום חוזרים עייפים, אבל מרוצים מיום שלם שעבר רחוק מהמסכים ומהרעש של העיר.',
      'כל החורף עמדו האופניים במרפסת, ועכשיו, עם בוא האביב, הגיע הזמן לסדר אותם. קודם צריך לנפח את הצמיגים ולבדוק את הבלמים. השרשרת יבשה וחורקת, אז כדאי לטפטף עליה כמה טיפות שמן. אחר כך מנגבים את השלדה בסמרטוט לח ומהדקים את הכידון. הסיבוב הראשון ברחוב תמיד מביא שמחה פשוטה, רוח בפנים, תנועה קלה ומחשבות על טיולים ארוכים בקיץ.',
      'על דלת הבניין נתלתה מודעה קטנה, ביום שישי בבוקר הדיירים נפגשים כדי לנקות את החצר. כל אחד מביא משהו שימושי, אחד מביא מטאטא, אחת מביאה צבע לספסלים, ומישהו אחר מביא עוגה לקפה. הילדים מציירים בגיר על המדרכה, והמבוגרים שותלים פרחים ליד הכניסה. ימים כאלה לא קורים הרבה, אבל אחריהם השכנים אומרים שלום זה לזה גם ברחוב, ולא רק במעלית.',
      'הרגל טוב בזמן הקלדה הוא להסתכל על המסך ולא על המקלדת. בפריסה העברית הרגילה הפסיק והנקודה נמצאים במקומות שלא מצפים להם. הפסיק יושב על המקש שמימין לאות ף, והנקודה נמצאת בקצה השורה התחתונה. כדאי לתרגל אותם כמו כל אות אחרת, כי הם מופיעים כמעט בכל משפט. אם תתרגלו רבע שעה בכל יום, אחרי חודש אחד טקסט ארוך ייקח לכם הרבה פחות זמן מאשר היום.'
    ],
    title: 'מבחן הקלדה של {seconds} שניות',
    titleMinutes: 'מבחן הקלדה של {minutes} דק׳',
    ready: 'מתחילים כשאתם מוכנים.',
    running: 'התוצאה מחושבת עכשיו.',
    finished: 'הזמן נגמר ({seconds} שניות). התוצאה: {wpm} מילים לדקה, דיוק {accuracy}%, שגיאות: {errors}.',
    finishedMinutes: 'הזמן נגמר ({minutes} דק׳). התוצאה: {wpm} מילים לדקה, דיוק {accuracy}%, שגיאות: {errors}.',
    accuracyName: 'דיוק',
    comparisonSame: 'בדיוק כמו בפעם הקודמת.',
    comparisonDelta: '{delta} מילים לדקה לעומת התוצאה הקודמת',
    progressEmpty: 'עדיין אין מספיק נתונים. עשו כמה מבחנים, וההתקדמות שלכם תופיע כאן.',
    progressNone: 'עדיין אין נתוני התקדמות.',
    metricEmpty: 'אין נתונים למדד הזה.',
    chartEmpty: 'אין נתונים מתאימים לגרף הזה.',
    chartLabel: '{metric}: שינוי לאורך זמן',
    trendEmpty: 'אין מספיק נתונים כדי לראות מגמה.',
    trendSame: 'אין שינוי מתחילת התקופה.',
    trendDelta: '{change} {measure} מתחילת התקופה.',
    measureAccuracy: 'נקודות דיוק',
    progressSummary: 'מבחנים בתקופה של {days} הימים האחרונים: {count}. מהירות ממוצעת {wpm} מילים לדקה, דיוק ממוצע {accuracy}%.',
    dateLocale: 'he-IL'
  },

  /* tien-do/progress-page.js — bảng `S_VI`: chữ trang tiến độ GHI lúc chạy. RTL nên mũi tên là ←.
     Số đôi tiếng Hebrew: יום אחד · יומיים · 3 ימים. Phút dùng dạng tắt דק׳ như trang chủ. */
  progress: {
    // profile.js xếp người học ở mốc 0/20/35/50/70 מילים לדקה.
    levels: ['צעדים ראשונים', 'בדרך הנכונה', 'קצב יציב', 'קצב מהיר', 'הקלדה שוטפת'],
    legacy: n => `סיימתם ${n} שיעורים בקורס הקודם — יחידות 1 ו־2 כבר פתוחות.`,
    unit: index => `יחידה ${index}`,
    soon: ' · בקרוב',
    trendHint: n => (n === 1 ? 'עוד שיעור אחד, ויהיו מספיק נתונים כדי לשרטט מגמה.'
      : `עוד ${n === 2 ? 'שני' : n} שיעורים, ויהיו מספיק נתונים כדי לשרטט מגמה.`),
    stripLevel: level => `רמה: ${level}`,
    statWpm: 'מילים לדקה לאחרונה',
    statAccuracy: 'דיוק',
    statSessions: 'אימונים',
    target: (wpm, accuracy) => `היעד הבא: <b>${wpm}</b> מילים לדקה · <b>${accuracy}</b>% דיוק`,
    adviceStart: 'הקלידו שיעור אחד, והדף הזה כבר יידע איפה אתם עומדים.',
    actionStart: 'להתחיל את שיעור 1 ←',
    adviceWeak: keys => `${keys} מעכבים אתכם — דקה של תרגול רק עליהם שווה הרבה.`,
    actionWeak: keys => `לתרגל את ${keys} ←`,
    adviceSteady: 'אתם מתקדמים יפה — שיעור אחד ביום שומר על הקצב.',
    actionLesson: (number, title) => `שיעור ${number} · ${title} ←`,
    actionTest: 'מבחן מהירות ←',
    actionLessons: 'לקורס ←',
    heatLegend: 'דיוק לפי מקש',
    heatStrong: 'יציב',
    heatFair: 'פעם כן, פעם לא',
    heatWeak: 'דורש תרגול',
    badgeDate: at => new Date(at).toLocaleDateString('he-IL', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `הושג ב־${date}` : 'הושג'),
    number: value => value.toLocaleString('he-IL'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} דק׳`,
    streak: days => `🔥 ${days === 1 ? 'יום אחד' : days === 2 ? 'יומיים' : `${days} ימים`} ברצף`,
    bestStreak: days => `שיא: ${days === 1 ? 'יום אחד' : days === 2 ? 'יומיים' : `${days} ימים`}`,
    today: minutes => `${minutes} דק׳ היום`,
    clearConfirm: 'למחוק את כל ההתקדמות והתוצאות השמורות במכשיר הזה?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. */
  badges: {
    'first-step': { title: 'צעד ראשון', hint: 'סיימו את השיעור הראשון.' },
    'unit-1': { title: 'יחידה שלמה', hint: 'סיימו יחידה שלמה.' },
    'stars-30': { title: '30 כוכבים', hint: 'אספו 30 כוכבים בקורס.' },
    'stars-90': { title: '90 כוכבים', hint: 'אספו 90 כוכבים בקורס.' },
    'streak-3': { title: 'שלושה ימים ברצף', hint: 'עמדו ביעד היומי שלושה ימים ברצף.' },
    'streak-7': { title: 'שבוע שלם', hint: 'עמדו ביעד היומי שבעה ימים ברצף.' },
    'clean-40': { title: '40 מילים לדקה, נקי', hint: 'סיבוב של 40 מילים לדקה בדיוק של 95% או יותר.' },
    'clean-60': { title: '60 מילים לדקה, נקי', hint: 'סיבוב של 60 מילים לדקה בדיוק של 95% או יותר.' },
    'typed-5000': { title: '5,000 הקשות', hint: 'הקלידו חמשת אלפים הקשות בסך הכול.' }
  }
};
