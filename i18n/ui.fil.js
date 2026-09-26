/* i18n/ui.fil.js — lớp tiếng Filipino.
 *
 * Nạp bởi mọi trang dưới /fil/, bằng <script src="/i18n/ui.fil.js"></script> đặt TRƯỚC mọi
 * script khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải
 * object này lên trên, nên khoá thiếu ở đây thì hiện tiếng Việt — tên khoá phải khớp CHÍNH XÁC
 * với bảng nó ghi đè. Cùng bộ khoá với i18n/ui.es.js.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên đừng thêm `defer` vào thẻ nạp file này.
 *
 * GIỌNG VĂN. Gọi người học là "ikaw/mo". "Key", "keyboard", "Shift", "Enter" giữ nguyên tiếng
 * Anh như người Philippines vẫn nói. Không dấu chấm than.
 */
window.TypingEaseUI = {
  lang: 'fil',

  /* Tuyệt đối, vì /fil/matuto/ nằm sâu hai cấp. */
  routes: {
    home: '/fil/',
    lessons: '/fil/aralin/',
    learn: '/fil/matuto/',
    // Wala pang bersiyong Filipino ang mga pahinang ito. `null` = alisin ang link.
    test: null,
    progress: '/fil/pag-unlad/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /fil/ */
  home: {
    nav: ['Magsanay', 'Kurso'],
    roadmapKicker: '{total} aralin · {units} yunit',
    roadmapAll: 'Tingnan ang {total} aralin →',
    unitTitle: 'Yunit {index} · {title}',
    unitDone: '{done}/{total} aralin ✓',
    railDone: '✓',
    railSoon: 'Malapit na',
    railNote: 'Isinusulat pa ang mga susunod na yunit — kulay abo ang mga aralin na hindi pa bukas.',
    teaser: 'Yunit {index} · {title} ({count} aralin)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Dagdag na pagsasanay',
    shortcuts: [
      ['Pagsusulit sa bilis', 'Sukatin ang salita bawat minuto at ang katumpakan mo.'],
      ['Mahihinang key', 'Mga pagsasanay mula sa mga key na pinakamadalas mong mamali.'],
      ['Malayang pagsasanay', 'Idikit ang sarili mong teksto at tipahin ito.']
    ],
    continueKicker: 'IPAGPATULOY',
    continueName: 'Aralin {n} · {title}',
    continueCount: 'Yunit {unit} · screen {screen}/{screens}',
    continueGo: '▶ Ipagpatuloy (Enter)',
    continueRedo: '↻ Ulitin ang aralin {n}',
    continueMap: 'Tingnan ang kurso',
    streak: '🔥 {days} araw · {minutes} min ngayon',
    coachWeak: 'Pansinin: pinababagal ka ng <b>{keys}</b> — isang minuto para sa kanila?',
    legacy: 'Natapos mo ang {n} aralin ng dating kurso — bukas na ang yunit 1 at 2.',
    doneKicker: 'PANATILIHIN ANG RITMO',
    doneName: 'Natapos mo na ang lahat ng naisulat',
    doneCount: 'Paparating na ang susunod na yunit. Balikan ang isang aralin para hindi mawala ang ritmo.',
    doneGo: '▶ Tingnan ang kurso (Enter)',
    exploreKicker: 'Mga gamit ng TypingEase',
    footer: 'Bagalan nang kaunti, at mas malayo ang mararating mo.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Kilalanin ang TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex. */
  player: {
    loading: 'Nilo-load ang aralin…',
    missingTitle: 'Wala pang laman ang araling ito',
    missingBody: 'Walang na-load mula sa <code>{path}</code>. Isinusulat pa ang aralin — subukan mamaya o pumili ng iba sa kurso.',
    noCurriculum: 'Hindi na-load ang talaan ng kurso (<code>data/curriculum.fil.js</code>).',
    fixtureNote: 'Gumagamit ng halimbawang laman mula sa <code>hoc/_fixture/</code> — wala pa sa <code>data/lessons/</code> ang totoong aralin.',
    screenOf: 'Screen {n} / {total}',
    newKey: 'BAGONG KEY',
    pressToContinue: 'Pindutin ang <b>{key}</b> para magpatuloy',
    enterToContinue: 'Pindutin ang <b>Enter</b> para magpatuloy',
    found: 'Iyan nga.',
    foundBody: 'Tandaan kung nasaan ang <b>{key}</b> — sasanayin natin ito ngayon.',
    accuracyLive: '{accuracy}% katumpakan',
    errorsLive: '{count} mali',
    tokensLive: '{count} salita',
    great: 'Napakahusay.',
    good: 'Magaling.',
    pass: 'Pasado.',
    fail: 'Mababa sa {min}% — sulit ulitin ang screen na ito.',
    resultAccuracy: '{accuracy}% katumpakan',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} mali',
    resultTokens: '{count} tamang salita',
    slowKey: 'Ang <b>{key}</b> ang pinakamabagal mong key ({ms} s bawat isa) — hayaang abutin ito ng daliri at bumalik agad sa gitnang hanay.',
    keepAccuracy: 'Bagalan at tataas ang katumpakan — sumusunod ang bilis, hindi baligtad.',
    continueEnter: 'Magpatuloy → (Enter)',
    redoScreen: 'Ulitin ang screen na ito',
    redoScreenAdvised: 'Ulitin ang screen na ito (inirerekomenda)',
    skipScreen: 'Laktawan',
    lessonDone: 'TAPOS',
    learned: 'Kilala mo na ang {count} key:',
    statWpm: 'Bilis',
    statAccuracy: 'Katumpakan',
    statTime: 'Oras',
    statStars: 'Bituin',
    technique: 'Dapat tandaan',
    weakTitle: 'Mga key na dapat pang sanayin',
    weakButton: 'Magsanay nang isang minuto',
    unitProgress: '{unit} · {done}/{total} aralin',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Bumalik sa pangunahing pahina (Enter)',
    redoLesson: '↻ Simulan ulit ang aralin',
    home: 'Pangunahing pahina',
    noMoreTitle: 'Narating mo na ang dulo ng naisulat',
    noMoreBody: 'Ginagawa pa ang susunod na yunit. Habang naghihintay, balikan ang isang aralin — mas malaki ang naitutulong ng ikalawang ikot sa maayos na bilis kaysa sa inaakala mo.',
    notReadyTitle: 'Wala pang laman ang araling ito',
    notReadyBody: 'Nasa kurso ang <b>{title}</b>, pero isinusulat pa ang laman nito. Pumili ng araling bukas na.',
    weakPage: 'Pagsasanay sa mahihinang key',
    badgeNew: 'Bagong badge',
    badgeAll: 'Tingnan ang lahat ng badge →',
    shiftFinger: 'hinliliit ng kabilang kamay',
    testPage: 'Pagsusulit sa bilis',
    mobileNote: 'Ginawa ang kursong ito para sa keyboard ng computer — kailangan ng sampung daliri ang sampung totoong key. Puwede mo itong subukan sa telepono, pero bumalik sa keyboard para talagang matuto.',
    mobileNoteClose: 'Sige',
    tapToType: 'Pindutin para magtipa',
    menuTitle: 'Nakahinto',
    menuResume: 'Ituloy ang pagtipa',
    menuRedo: 'Ulitin ang screen na ito',
    menuSkip: 'Laktawan ang screen na ito',
    menuExit: 'Bumalik sa pangunahing pahina',
    clock: '{seconds} s',
    lessonNumber: 'Aralin {number}',
    pageTitle: 'Aralin · TypingEase',
    screenTip: 'Screen {number} · {type}',
    firstLesson: 'Bumalik sa unang aralin'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'kaliwang hinliliit', LR: 'kaliwang palasingsingan', LM: 'kaliwang hinlalato',
    LI: 'kaliwang hintuturo', LT: 'kaliwang hinlalaki',
    RT: 'kanang hinlalaki', RI: 'kanang hintuturo', RM: 'kanang hinlalato',
    RR: 'kanang palasingsingan', RP: 'kanang hinliliit'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'kaliwang hinliliit', 'left-ring': 'kaliwang palasingsingan',
    'left-middle': 'kaliwang hinlalato', 'left-index': 'kaliwang hintuturo',
    'left-thumb': 'kaliwang hinlalaki', thumb: 'hinlalaki',
    'right-index': 'kanang hintuturo', 'right-middle': 'kanang hinlalato',
    'right-ring': 'kanang palasingsingan', 'right-pinky': 'kanang hinliliit'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Mga setting ng keyboard',
    showKeyboard: 'Ipakita ang keyboard',
    showHands: 'Ipakita ang mga kamay',
    rightHandOnly: 'Kanang kamay lang',
    leftHandOnly: 'Kaliwang kamay lang',
    animatedHands: 'Sumusunod ang mga kamay sa mga key',
    letterCase: 'Mga titik sa key',
    uppercase: 'MALALAKING TITIK',
    lowercase: 'maliliit na titik',
    boardAria: 'Keyboard sa screen', keypadAria: 'Number pad sa screen',
    keyboardShape: 'Uri ng keyboard', shapeAuto: 'Ayon sa layout', shapeAnsi: '104 key (mahabang kaliwang Shift)', shapeIso: '105 key (may key sa tabi ng kaliwang Shift)',
    layout: 'Layout ng keyboard',
    save: 'I-save',
    cancel: 'Kanselahin',
    close: 'Isara'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} aralin ang tapos`,
    legacy: n => `Natapos mo ang ${n} aralin ng dating kurso — bukas na ang yunit 1 at 2.`,
    ctaResume: '▶ Ipagpatuloy', ctaStart: '▶ Simulan',
    ctaLesson: (verb, number, title) => `${verb} ang aralin ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Narating mo na ang dulo ng naisulat <span>→</span>',
    rowResume: (screen, total) => `▶ Ipagpatuloy · screen ${screen}/${total}`,
    rowStart: '▶ Simulan',
    rowDone: '✓ Tapos',
    unlocked: 'Bukas',
    unlockAfter: n => `Mabubuksan pagkatapos ng aralin ${n}`,
    unlockNow: 'Buksan na ang yunit na ito'
  },

  /* kiem-tra-toc-do-go/typing-test.js — trang test tốc độ gõ. Đoạn văn chỉ dùng ký tự QWERTY Mỹ
     (bố cục 117): không ñ, không dấu, dùng " và ' thẳng. Đơn vị WPM. */
  test: {
    passage: 'Kaya ng sinuman na matutong mag-type nang hindi tumitingin sa keyboard, basta may kaunting tiyaga. Ilagay ang mga daliri sa gitnang hanay: ang kaliwang kamay sa A, S, D, F at ang kanang kamay sa J, K, L at semicolon. May maliliit na umbok sa F at J na nakakapa kahit hindi ka tumingin sa ibaba. Sa simula, mabagal ka at madalas magkamali, at normal iyon. Magsanay nang sampung minuto araw-araw, at pagkaraan ng ilang linggo, kusa nang mahahanap ng mga daliri mo ang tamang key.',
    passages: [
      'Kaya ng sinuman na matutong mag-type nang hindi tumitingin sa keyboard, basta may kaunting tiyaga. Ilagay ang mga daliri sa gitnang hanay: ang kaliwang kamay sa A, S, D, F at ang kanang kamay sa J, K, L at semicolon. May maliliit na umbok sa F at J na nakakapa kahit hindi ka tumingin sa ibaba. Sa simula, mabagal ka at madalas magkamali, at normal iyon. Magsanay nang sampung minuto araw-araw, at pagkaraan ng ilang linggo, kusa nang mahahanap ng mga daliri mo ang tamang key.',
      'Maaliwalas ang langit kaninang umaga at mainit ang sikat ng araw. Bago magtanghali, dumating ang maiitim na ulap mula sa dagat at lumakas ang hangin. Nagmamadaling tinakpan ng mga tindero sa gilid ng kalsada ang kanilang paninda. Hindi nagtagal, bumuhos ang malakas na ulan at bumaha sa ilang bahagi ng daan. Makalipas ang isang oras, tumila ang ulan, lumamig ang hangin, at lumabas ang mga bata para maglaro sa bakuran.',
      'Tuwing Linggo ng umaga, laging maingay sa palengke malapit sa bahay. Inaayos ng mga tindera ang kamatis, sibuyas, bawang at kangkong sa ibabaw ng mesang kahoy, habang sa dulo ng pasilyo ay may nagtitinda ng sariwang isda at tokwa. Matiyagang tumatawad ang isang ale sa presyo ng mangga, at may batang may bitbit na supot ng dalandan. Kadalasan, ang maagang dumating ang nakakakuha ng pinakasariwa. Pagsapit ng tanghali, kumokonti na ang mamimili.',
      'Umalis ang bus sa terminal nang eksakto sa oras. Sa bintana, tanaw ang luntiang palayan, mga hanay ng puno ng niyog at maliliit na baryo na may mga bahay na yari sa kahoy. Tahimik sa loob ng bus: may lalaking nagbabasa ng libro, at dalawang estudyanteng naghahati sa baon nilang kanin at itlog. Sa isang hintuan, may umakyat na nagtitinda ng mani at tubig. Pagdating ng hapon, inanunsiyo ng konduktor na matagal-tagal ang susunod na hinto.',
      'Madaling magluto ng sinangag mula sa mga sangkap na nasa kusina. Kailangan ng lumang kanin na malamig na, bawang, kaunting mantika, asin at isang itlog. Unang igisa ang dinikdik na bawang hanggang maging kulay ginto at mabango. Idagdag ang kanin at haluin nang mabuti para hindi magdikit-dikit. Budburan ng asin, at kung gusto mo, magprito ng itlog sa tabi. Pinakamasarap itong kainin nang mainit, kasama ang tuyo o longganisa sa almusal.',
      'Bukas ang aklatan ng bayan hanggang alas-kuwatro ng hapon tuwing Sabado. Sa silid-basahan ay may mahahabang mesa kung saan nag-aaral ang mga estudyante para sa kanilang pagsusulit, habang nagbabasa ng dyaryo ang ilang matatanda. Sa isang sulok ay may puwesto para sa mga bata, may makukulay na aklat at malalambot na unan. Kilala ng tagapangasiwa ang maraming suki at laging may maimumungkahing aklat para sa katapusan ng linggo.',
      'Laging gumigising si Lolo bago magbukang-liwayway para alagaan ang kanyang halamanan. Dinidiligan niya ang mga tanim na sili at talong, binubunot ang mga damo, at sinisilip ang puno ng saging sa tabi ng bakod. Kapag may naninilaw na dahon, maingat niya itong pinuputol. Bihirang gumising nang maaga ang kanyang mga apo, pero sila ang pinakamasaya kapag anihan na. Sa hapon, nakaupo ang buong pamilya sa beranda habang umiinom ng salabat.',
      'Nakatambak ang bisikleta sa bodega buong tag-ulan, at ngayon ay oras na para ayusin ito. Una, bombahan ang dalawang gulong at suriin ang preno. Tuyo na ang kadena at lumalangitngit, kaya kailangan itong lagyan ng kaunting langis. Pagkatapos, punasan ang kuwadro ng basang basahan at higpitan ang manibela. Laging masaya ang unang ikot sa paligid ng subdivision: hangin sa mukha, magaan na pagpadyak, at mga plano para sa mahabang biyahe sa bakasyon.',
      'May bagong paskil sa pisara ng barangay hall: sa Sabado, magbabayanihan ang lahat ng residente para linisin ang kapaligiran. Bawat isa ay may dalang kapaki-pakinabang, may nagdala ng walis, may nagdala ng pintura para sa bakod, at may nagdala ng kakanin para pagsaluhan. Gumuguhit ang mga bata gamit ang tisa sa kalye, habang nagtatanim ng bulaklak ang matatanda sa may tarangkahan. Pagkatapos ng araw na iyon, mas madalas nang nagbabatian ang magkakapitbahay.',
      'Magandang ugali sa pagta-type ang tumingin sa screen, hindi sa keyboard. Ang malalaking titik ay ginagawa sa pagpindot ng Shift gamit ang hinliliit ng kabilang kamay. Nasa ibabang hanay ang kuwit at tuldok, sa kanan ng titik M, habang kailangan ng Shift ang tandang pananong. Kung magsasanay ka nang 15 minuto bawat araw, sa loob ng isang buwan ay mas mabilis mo nang matatapos ang talatang may 500 character kaysa ngayon.'
    ],
    title: 'Typing test na {seconds} segundo',
    titleMinutes: 'Typing test na {minutes} minuto',
    ready: 'Magsimula kapag handa ka na.',
    running: 'Kinukuwenta ang resulta mo ngayon.',
    finished: 'Tapos na ang oras pagkaraan ng {seconds} segundo. Resulta: {wpm} WPM, {accuracy}% katumpakan, {errors} mali.',
    finishedMinutes: 'Tapos na ang oras pagkaraan ng {minutes} minuto. Resulta: {wpm} WPM, {accuracy}% katumpakan, {errors} mali.',
    accuracyName: 'Katumpakan',
    comparisonSame: 'Kapareho ng dati mong resulta.',
    comparisonDelta: '{delta} WPM kumpara sa dati mong resulta',
    progressEmpty: 'Kulang pa ang data. Tapusin ang ilang test para makita ang pag-unlad mo.',
    progressNone: 'Wala pang data ng pag-unlad.',
    metricEmpty: 'Walang data para sa sukat na ito.',
    chartEmpty: 'Walang angkop na data para sa chart na ito.',
    chartLabel: '{metric} sa paglipas ng panahon',
    trendEmpty: 'Kulang pa ang data para makita ang trend.',
    trendSame: 'Walang pagbabago mula sa simula ng panahong ito.',
    trendDelta: '{change} {measure} mula sa simula ng panahong ito.',
    measureAccuracy: 'puntos ng katumpakan',
    progressSummary: '{count} test sa huling {days} araw. Karaniwang {wpm} WPM, karaniwang katumpakan {accuracy}%.',
    dateLocale: 'fil-PH'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ /fil/pag-unlad/ ghi lúc chạy. */
  progress: {
    levels: ['Nagsisimula', 'Umuusad', 'Matatag', 'Mabilis', 'Bihasa'],
    legacy: n => `Natapos mo ang ${n} aralin ng dating kurso — bukas na ang yunit 1 at 2.`,
    unit: index => `Yunit ${index}`,
    soon: ' · malapit na',
    trendHint: n => (n === 1 ? 'Isa pang aralin at sapat na ang datos para makita ang takbo.'
      : `${n} pang aralin at sapat na ang datos para makita ang takbo.`),
    stripLevel: level => `Antas: ${level}`,
    statWpm: 'Kamakailang WPM',
    statAccuracy: 'Katumpakan',
    statSessions: 'Mga sesyon',
    target: (wpm, accuracy) => `Susunod na target: <b>${wpm}</b> WPM · <b>${accuracy}</b>% katumpakan`,
    adviceStart: 'Magtipa ng isang aralin at malalaman ng pahinang ito kung nasaan ka.',
    actionStart: 'Simulan ang aralin 1 →',
    adviceWeak: keys => `Pinababagal ka ng ${keys} — malaki ang maitutulong ng isang minuto para sa kanila lang.`,
    actionWeak: keys => `Sanayin ang ${keys} →`,
    adviceSteady: 'Umuusad ka — isang aralin bawat araw ang magpapanatili ng bilis mo.',
    actionLesson: (number, title) => `Aralin ${number} · ${title} →`,
    actionTest: 'Pagsusulit sa bilis →',
    actionLessons: 'Tingnan ang kurso →',
    heatLegend: 'Katumpakan bawat key',
    heatStrong: 'Matatag',
    heatFair: 'Minsang tama, minsang mali',
    heatWeak: 'Kailangan pang sanayin',
    badgeDate: at => new Date(at).toLocaleDateString('fil-PH', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Nakuha noong ${date}` : 'Nakuha'),
    number: value => value.toLocaleString('fil-PH'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minuto`,
    streak: days => `🔥 ${days} araw na sunod-sunod`,
    bestStreak: days => `Pinakamahaba: ${days} araw`,
    today: minutes => `${minutes} minuto ngayong araw`,
    clearConfirm: 'Burahin ang lahat ng pag-unlad at markang nakatago sa device na ito?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'Unang hakbang', hint: 'Tapusin ang una mong aralin.' },
    'unit-1': { title: 'Isang yunit ang tapos', hint: 'Tapusin ang isang buong yunit.' },
    'stars-30': { title: '30 bituin', hint: 'Mag-ipon ng 30 bituin sa kurso.' },
    'stars-90': { title: '90 bituin', hint: 'Mag-ipon ng 90 bituin sa kurso.' },
    'streak-3': { title: 'Tatlong araw na sunod-sunod', hint: 'Abutin ang layunin mo sa araw na ito nang tatlong araw na sunod-sunod.' },
    'streak-7': { title: 'Isang buong linggo', hint: 'Abutin ang layunin mo sa araw na ito nang pitong araw na sunod-sunod.' },
    'clean-40': { title: 'Malinis na 40 WPM', hint: 'Isang ikot sa 40 WPM na may 95% katumpakan o higit pa.' },
    'clean-60': { title: 'Malinis na 60 WPM', hint: 'Isang ikot sa 60 WPM na may 95% katumpakan o higit pa.' },
    'typed-5000': { title: '5,000 key', hint: 'Magtipa ng limang libong pindot sa kabuuan.' }
  }
};
