/* i18n/ui.nl.js — lớp tiếng Hà Lan.
 *
 * Nạp bởi mọi trang dưới /nl/, bằng <script src="/i18n/ui.nl.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên. Khoá thiếu ở đây thì hiện tiếng Việt; tên khoá phải khớp CHÍNH XÁC với bảng nó
 * ghi đè.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên đừng thêm `defer` vào thẻ của file này.
 *
 * Xưng hô "je/jij" từ đầu tới cuối, như lời dạy trong data/courses/nl.js.
 */
window.TypingEaseUI = {
  lang: 'nl',

  /* Tuyệt đối, vì /nl/leren/ nằm sâu hai cấp. */
  routes: {
    home: '/nl/',
    lessons: '/nl/lessen/',
    learn: '/nl/leren/',
    // Chưa có năm trang này bằng tiếng Hà Lan. `null` là tín hiệu BỎ liên kết.
    test: null,
    progress: '/nl/voortgang/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /nl/ */
  home: {
    nav: ['Oefenen', 'Cursus'],
    roadmapKicker: '{total} lessen · {units} units',
    roadmapAll: 'Bekijk alle {total} lessen →',
    unitTitle: 'Unit {index} · {title}',
    unitDone: '{done}/{total} lessen ✓',
    railDone: '✓',
    railSoon: 'Binnenkort',
    railNote: 'De volgende units worden nog geschreven — lessen die nog niet open zijn, blijven grijs.',
    teaser: 'Unit {index} · {title} ({count} lessen)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Meer oefenen',
    shortcuts: [
      ['Snelheidstest', 'Meet je woorden per minuut en je nauwkeurigheid.'],
      ['Zwakke toetsen', 'Oefeningen gebouwd op de toetsen waarbij je de meeste fouten maakt.'],
      ['Vrij oefenen', 'Plak je eigen tekst en typ hem zoals je wilt.']
    ],
    continueKicker: 'VERDERGAAN',
    continueName: 'Les {n} · {title}',
    continueCount: 'Unit {unit} · scherm {screen}/{screens}',
    continueGo: '▶ Verdergaan (Enter)',
    continueRedo: '↻ Les {n} opnieuw doen',
    continueMap: 'Bekijk de cursus',
    streak: '🔥 {days} dagen · {minutes} min vandaag',
    coachWeak: 'Let op: <b>{keys}</b> houden je op — een minuutje daarmee?',
    legacy: 'Je hebt {n} lessen van de vorige cursus afgerond — unit 1 en 2 zijn al open.',
    doneKicker: 'HOUD HET TEMPO',
    doneName: 'Je hebt alles afgerond wat er geschreven is',
    doneCount: 'De volgende unit komt eraan. Herhaal een les om je tempo vast te houden.',
    doneGo: '▶ Bekijk de cursus (Enter)',
    exploreKicker: 'Bronnen van TypingEase',
    footer: 'Typ iets langzamer, en je komt veel verder.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Ontdek TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex. */
  player: {
    loading: 'De les wordt geladen…',
    missingTitle: 'Deze les heeft nog geen inhoud',
    missingBody: 'Er is niets geladen uit <code>{path}</code>. De les wordt nog geschreven — probeer het later opnieuw of kies een andere les in de cursus.',
    noCurriculum: 'Het overzicht van de cursus is niet geladen (<code>data/curriculum.nl.js</code>).',
    fixtureNote: 'Draait op de voorbeeldinhoud uit <code>hoc/_fixture/</code> — de echte les staat nog niet in <code>data/lessons/</code>.',
    screenOf: 'Scherm {n} / {total}',
    newKey: 'NIEUWE TOETS',
    pressToContinue: 'Druk op <b>{key}</b> om verder te gaan',
    enterToContinue: 'Druk op <b>Enter</b> om verder te gaan',
    found: 'Gevonden.',
    foundBody: 'Onthoud waar <b>{key}</b> zit — nu gaan we ermee oefenen.',
    accuracyLive: '{accuracy}% nauwkeurig',
    errorsLive: '{count} fouten',
    tokensLive: '{count} woorden',
    great: 'Uitstekend.',
    good: 'Heel goed.',
    pass: 'Gehaald.',
    fail: 'Onder de {min}% — het is de moeite waard dit scherm opnieuw te doen.',
    resultAccuracy: '{accuracy}% nauwkeurig',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} fouten',
    resultTokens: '{count} woorden goed',
    slowKey: '<b>{key}</b> was je langzaamste toets ({ms} s per aanslag) — laat de vinger hem halen en meteen terugkeren naar de thuisrij.',
    keepAccuracy: 'Ga langzamer en je nauwkeurigheid stijgt — snelheid komt daarna, nooit andersom.',
    continueEnter: 'Verder → (Enter)',
    redoScreen: 'Dit scherm opnieuw',
    redoScreenAdvised: 'Dit scherm opnieuw (aangeraden)',
    skipScreen: 'Overslaan',
    lessonDone: 'AFGEROND',
    learned: 'Je kent al {count} toetsen:',
    statWpm: 'Snelheid',
    statAccuracy: 'Nauwkeurigheid',
    statTime: 'Tijd',
    statStars: 'Sterren',
    technique: 'Goed om te onthouden',
    weakTitle: 'Toetsen om meer te oefenen',
    weakButton: 'Een minuut oefenen',
    unitProgress: '{unit} · {done}/{total} lessen',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Terug naar de startpagina (Enter)',
    redoLesson: '↻ Les opnieuw beginnen',
    home: 'Startpagina',
    noMoreTitle: 'Je bent aan het eind van wat er geschreven is',
    noMoreBody: 'De volgende unit wordt nog gemaakt. Herhaal intussen een les — een tweede ronde in een goed tempo levert meer op dan je denkt.',
    notReadyTitle: 'Deze les heeft nog geen inhoud',
    notReadyBody: '<b>{title}</b> staat in de cursus, maar de inhoud wordt nog geschreven. Kies een les die al open is.',
    weakPage: 'Zwakke toetsen oefenen',
    badgeNew: 'Nieuwe badge',
    badgeAll: 'Bekijk alle badges →',
    shiftFinger: 'de pink van de andere hand',
    testPage: 'Snelheidstest',
    mobileNote: 'Deze cursus is gemaakt voor een computertoetsenbord — tien vingers hebben tien echte toetsen nodig. Je kunt het op je telefoon proberen, maar ga terug naar een toetsenbord om het echt te leren.',
    mobileNoteClose: 'Begrepen',
    tapToType: 'Tik om te typen',
    menuTitle: 'Gepauzeerd',
    menuResume: 'Verder typen',
    menuRedo: 'Dit scherm opnieuw',
    menuSkip: 'Dit scherm overslaan',
    menuExit: 'Terug naar de startpagina',
    clock: '{seconds} s',
    lessonNumber: 'Les {number}',
    pageTitle: 'Les · TypingEase',
    screenTip: 'Scherm {number} · {type}',
    firstLesson: 'Terug naar de eerste les'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'de linkerpink', LR: 'de linkerringvinger', LM: 'de linkermiddelvinger',
    LI: 'de linkerwijsvinger', LT: 'de linkerduim',
    RT: 'de rechterduim', RI: 'de rechterwijsvinger', RM: 'de rechtermiddelvinger',
    RR: 'de rechterringvinger', RP: 'de rechterpink'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'de linkerpink', 'left-ring': 'de linkerringvinger',
    'left-middle': 'de linkermiddelvinger', 'left-index': 'de linkerwijsvinger',
    'left-thumb': 'de linkerduim', thumb: 'de duim',
    'right-index': 'de rechterwijsvinger', 'right-middle': 'de rechtermiddelvinger',
    'right-ring': 'de rechterringvinger', 'right-pinky': 'de rechterpink'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Toetsenbordinstellingen',
    showKeyboard: 'Toetsenbord tonen',
    showHands: 'Handen tonen',
    rightHandOnly: 'Alleen de rechterhand',
    leftHandOnly: 'Alleen de linkerhand',
    animatedHands: 'Handen volgen de toetsen',
    letterCase: 'Letters op de toetsen',
    uppercase: 'HOOFDLETTERS',
    lowercase: 'kleine letters',
    boardAria: 'Toetsenbord op het scherm', keypadAria: 'Numeriek toetsenblok op het scherm',
    keyboardShape: 'Soort toetsenbord', shapeAuto: 'Zoals de indeling', shapeAnsi: '104 toetsen (lange linker Shift)', shapeIso: '105 toetsen (toets naast linker Shift)',
    layout: 'Toetsenbordindeling',
    save: 'Opslaan',
    cancel: 'Annuleren',
    close: 'Sluiten'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} lessen afgerond`,
    legacy: n => `Je hebt ${n} lessen van de vorige cursus afgerond — unit 1 en 2 zijn al open.`,
    ctaResume: '▶ Verdergaan', ctaStart: '▶ Beginnen',
    ctaLesson: (verb, number, title) => `${verb} met les ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Je bent aan het eind van wat er geschreven is <span>→</span>',
    rowResume: (screen, total) => `▶ Verdergaan · scherm ${screen}/${total}`,
    rowStart: '▶ Beginnen',
    rowDone: '✓ Afgerond',
    unlocked: 'Open',
    unlockAfter: n => `Gaat open na les ${n}`,
    unlockNow: 'Deze unit nu openen'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ trang kiểm tra tốc độ ghi lúc chạy. Chữ tĩnh ở
     kiem-tra-toc-do-go/text/nl.mjs. Đoạn văn chỉ dùng ký tự gõ được trên bố cục Hà Lan và US
     International; không có dấu nháy trước nguyên âm (phím chết trên US International). */
  test: {
    passage: 'Op zaterdagochtend is de markt al vroeg druk. Tussen de kramen ruikt het naar vers brood, kaas en gebakken vis. Een vrouw weegt een kilo appels af, terwijl haar zoontje een zak mandarijnen vasthoudt. Wie op tijd komt, heeft de mooiste tomaten. Tegen de middag wordt het rustiger. De kooplui pakken langzaam in en geven soms de laatste bos peterselie gratis mee aan een vaste klant.',
    passages: [
      'Op zaterdagochtend is de markt al vroeg druk. Tussen de kramen ruikt het naar vers brood, kaas en gebakken vis. Een vrouw weegt een kilo appels af, terwijl haar zoontje een zak mandarijnen vasthoudt. Wie op tijd komt, heeft de mooiste tomaten. Tegen de middag wordt het rustiger. De kooplui pakken langzaam in en geven soms de laatste bos peterselie gratis mee aan een vaste klant.',
      'De trein naar het noorden vertrekt precies op tijd. Buiten glijden weilanden, sloten en kleine dorpen voorbij, en in de coupé is het aangenaam stil. Een oudere man lost een kruiswoordpuzzel op, een studente luistert naar muziek. Na een uur klinkt er een omroepbericht over het volgende station. Wie wil uitstappen, pakt alvast zijn tas uit het bagagerek en loopt rustig naar de deur.',
      'Voor een goede groentesoep heb je niet veel nodig: uien, wortels, een stuk selderij, een paar aardappels en wat bouillon. Eerst fruit je de uien glazig in een beetje olie. Daarna gaat de rest van de groenten erbij. Na ongeveer twintig minuten is alles zacht. Breng de soep op smaak met zout, peper en een snufje nootmuskaat. Met een stevige boterham erbij heb je een complete maaltijd.',
      'Sinds een paar weken oefen ik elke avond tien minuten met typen. In het begin ging het moeizaam, omdat mijn ogen steeds naar de toetsen wilden kijken. Nu vind ik de meeste letters zonder te kijken, alleen de leestekens gaan nog wel eens mis. Mijn snelheid is nog niet hoog, maar ik maak minder fouten. Dat voelt beter dan een snel getal op het scherm met een hele rij rode letters.',
      'Het weerbericht had zon beloofd, maar in de loop van de middag trekken er donkere wolken over de polder. Binnen een paar minuten steekt de wind op en vallen de eerste zware druppels op het fietspad. Mensen in het park schuilen onder de bomen of rennen naar de bushalte. Een halfuur later is de bui voorbij. De lucht ruikt naar nat gras, en boven de daken staat een regenboog.',
      'In het trappenhuis hangt een nieuw briefje: vrijdagavond is er een burenavond op het binnenplein. Iedereen neemt iets mee, een salade, drinken of een zelfgebakken taart. De buurman van driehoog zet zijn barbecue neer, en de kinderen hebben al ideeën voor spelletjes met stoepkrijt. Zulke avonden zijn zeldzaam, maar ze zorgen ervoor dat je elkaar niet alleen kort in de lift groet.',
      'De kleine bibliotheek in het dorp is op zaterdag open tot twee uur. Achter in de leeszaal staan lange tafels, waar scholieren voor hun examens leren en gepensioneerden de krant lezen. Voorin is een hoek met prentenboeken en gekleurde kussens. Wie een boek terugbrengt, legt het in een bak naast de ingang. De bibliothecaresse kent bijna iedereen bij naam en heeft voor elke bezoeker wel een tip.',
      'Mijn fiets heeft de hele winter in de schuur gestaan, dus het is tijd voor een onderhoudsbeurt. Eerst pomp ik de banden op en controleer ik de remmen. De ketting is droog en piept, dus die krijgt een paar druppels olie. Daarna poets ik het frame met een vochtige doek. Tijdens het eerste rondje door de wijk voelt alles licht, en ik verheug me al op lange tochten langs de rivier.',
      'Wie in de herfst gaat wandelen, kan beter vroeg vertrekken, want de dagen worden korter. Het pad loopt eerst door een beukenbos waar de bladeren geel en rood kleuren. Daarna gaat het over de heide naar een theehuis, waar je warme soep en appeltaart kunt bestellen. Bij helder weer zie je vanaf het terras de kerktorens van drie dorpen. Neem voor de terugweg wel een warme jas mee.',
      'Oefening baart kunst, zegt een oud spreekwoord, en bij blind typen klopt dat zeker. Je handen rusten op de middelste rij, links op ASDF en rechts op JKL. Vanuit die plek pakt elke vinger alleen de toetsen in zijn eigen kolom. Hoofdletters maak je met de Shift-toets van de andere hand. Wie zo oefent, typt na een paar weken niet alleen sneller, maar ook ontspannener en met minder fouten.'
    ],
    title: 'Typetest van {seconds} seconden',
    titleMinutes: 'Typetest van {minutes} min',
    ready: 'Klaar wanneer jij het bent.',
    running: 'Je resultaat wordt live berekend.',
    finished: 'De tijd is om ({seconds} s). Resultaat: {wpm} WPM, {accuracy}% nauwkeurigheid, {errors} fouten.',
    finishedMinutes: 'De tijd is om ({minutes} min). Resultaat: {wpm} WPM, {accuracy}% nauwkeurigheid, {errors} fouten.',
    accuracyName: 'Nauwkeurigheid',
    comparisonSame: 'Precies gelijk aan je vorige resultaat.',
    comparisonDelta: '{delta} WPM ten opzichte van je vorige resultaat',
    progressEmpty: 'Nog te weinig gegevens. Doe een paar tests, dan zie je je voortgang.',
    progressNone: 'Nog geen voortgangsgegevens.',
    metricEmpty: 'Er zijn geen gegevens voor deze waarde.',
    chartEmpty: 'Er zijn geen geschikte gegevens voor deze grafiek.',
    chartLabel: '{metric} door de tijd',
    trendEmpty: 'Te weinig gegevens voor een trend.',
    trendSame: 'Geen verandering sinds het begin van deze periode.',
    trendDelta: '{change} {measure} sinds het begin van deze periode.',
    measureAccuracy: 'procentpunt nauwkeurigheid',
    progressSummary: '{count} tests in de laatste {days} dagen. Gemiddeld {wpm} WPM, gemiddelde nauwkeurigheid {accuracy}%.',
    dateLocale: 'nl-NL'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Chữ tĩnh ở tien-do/text/nl.mjs. */
  progress: {
    levels: ['Beginner', 'Op weg', 'Stabiel', 'Snel', 'Vloeiend'],
    legacy: n => `Je hebt ${n} lessen van de vorige cursus afgerond — unit 1 en 2 zijn al open.`,
    unit: index => `Unit ${index}`,
    soon: ' · binnenkort',
    trendHint: n => (n === 1 ? 'Nog één les en er is genoeg om een trend te tekenen.'
      : `Nog ${n} lessen en er is genoeg om een trend te tekenen.`),
    stripLevel: level => `Niveau: ${level}`,
    statWpm: 'Recente WPM',
    statAccuracy: 'Nauwkeurigheid',
    statSessions: 'Sessies',
    target: (wpm, accuracy) => `Volgend doel: <b>${wpm}</b> WPM · <b>${accuracy}</b>% nauwkeurig`,
    adviceStart: 'Typ één les en deze pagina weet waar je staat.',
    actionStart: 'Begin met les 1 →',
    adviceWeak: keys => `${keys} houden je op — een minuut alleen daarop levert veel op.`,
    actionWeak: keys => `Oefen ${keys} →`,
    adviceSteady: 'Je komt goed vooruit — één les per dag houdt het tempo erin.',
    actionLesson: (number, title) => `Les ${number} · ${title} →`,
    actionTest: 'Snelheidstest →',
    actionLessons: 'Bekijk de cursus →',
    heatLegend: 'Nauwkeurigheid per toets',
    heatStrong: 'Zit goed',
    heatFair: 'Wisselend',
    heatWeak: 'Meer oefenen',
    badgeDate: at => new Date(at).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Behaald op ${date}` : 'Behaald'),
    number: value => value.toLocaleString('nl-NL'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minuten`,
    streak: days => `🔥 ${days} ${days === 1 ? 'dag' : 'dagen'} op rij`,
    bestStreak: days => `Record: ${days} ${days === 1 ? 'dag' : 'dagen'}`,
    today: minutes => `${minutes} minuten vandaag`,
    clearConfirm: 'Alle voortgang en scores op dit apparaat verwijderen?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý. */
  badges: {
    'first-step': { title: 'Eerste stap', hint: 'Rond je eerste les af.' },
    'unit-1': { title: 'Een unit klaar', hint: 'Rond een hele unit af.' },
    'stars-30': { title: '30 sterren', hint: 'Verzamel 30 sterren in de cursus.' },
    'stars-90': { title: '90 sterren', hint: 'Verzamel 90 sterren in de cursus.' },
    'streak-3': { title: 'Drie dagen op rij', hint: 'Haal je dagdoel drie dagen op rij.' },
    'streak-7': { title: 'Een hele week', hint: 'Haal je dagdoel zeven dagen op rij.' },
    'clean-40': { title: '40 WPM foutloos', hint: 'Een ronde op 40 WPM met 95% nauwkeurigheid of meer.' },
    'clean-60': { title: '60 WPM foutloos', hint: 'Een ronde op 60 WPM met 95% nauwkeurigheid of meer.' },
    'typed-5000': { title: '5.000 aanslagen', hint: 'Typ in totaal vijfduizend aanslagen.' }
  }
};
