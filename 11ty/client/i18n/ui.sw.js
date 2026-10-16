/* i18n/ui.sw.js — lớp tiếng Swahili.
 *
 * Nạp bởi mọi trang dưới /sw/, bằng <script src="/i18n/ui.sw.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên. Khoá thiếu ở đây thì hiện tiếng Việt; tên khoá phải khớp CHÍNH XÁC với bảng nó
 * ghi đè, khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * TÊN FILE. Đây là i18n/ui.sw.js, KHÔNG phải /sw.js ở gốc — cái đó là service worker của cả
 * site. Mã ngôn ngữ ISO của tiếng Swahili tình cờ trùng tên với nó; hai file không liên quan.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 *
 * Thuật ngữ khớp với data/courses/sw.js: kitufe (phím), kibodi, safu ya msingi, somo/masomo,
 * kitengo, marudio, jaribio, usahihi. Ngôi thứ hai số ít xuyên suốt.
 */
window.TypingEaseUI = {
  lang: 'sw',

  routes: {
    home: '/sw/',
    lessons: '/sw/masomo/',
    learn: '/sw/jifunze/',
    // Chưa có các trang này bằng tiếng Swahili. `null` là tín hiệu BỎ liên kết.
    test: '/sw/jaribio-la-kuandika/',
    progress: '/sw/maendeleo/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /sw/ */
  home: {
    nav: ['Fanya mazoezi', 'Kozi'],
    roadmapKicker: 'Masomo {total} · vitengo {units}',
    roadmapAll: 'Tazama masomo yote {total} →',
    unitTitle: 'Kitengo {index} · {title}',
    unitDone: 'Masomo {done}/{total} ✓',
    railDone: '✓',
    railSoon: 'Hivi karibuni',
    railNote: 'Vitengo vinavyofuata bado vinaandikwa — masomo ambayo hayajafunguliwa yanaonekana kwa kijivu.',
    teaser: 'Kitengo {index} · {title} (masomo {count})',
    teaserLocked: '🔒',
    shortcutsTitle: 'Mazoezi zaidi',
    shortcuts: [
      ['Jaribio la kasi', 'Pima maneno yako kwa dakika na usahihi wako.'],
      ['Vitufe dhaifu', 'Mazoezi yaliyotengenezwa kwa vitufe unavyokosea zaidi.'],
      ['Mazoezi huru', 'Bandika maandishi yako mwenyewe na uyaandike kwa njia yako.']
    ],
    continueKicker: 'ENDELEA',
    continueName: 'Somo {n} · {title}',
    continueCount: 'Kitengo {unit} · skrini {screen}/{screens}',
    continueGo: '▶ Endelea (Enter)',
    continueRedo: '↻ Rudia somo {n}',
    continueMap: 'Tazama kozi',
    streak: '🔥 siku {days} · dakika {minutes} leo',
    coachWeak: 'Angalia: <b>{keys}</b> vinakupunguzia kasi — dakika moja navyo?',
    legacy: 'Ulimaliza masomo {n} ya kozi ya awali — vitengo 1 na 2 tayari vimefunguliwa.',
    doneKicker: 'SHIKA MDUNDO',
    doneName: 'Umemaliza kila kilichoandikwa',
    doneCount: 'Kitengo kinachofuata kinakuja. Rudia somo moja ili usipoteze mdundo.',
    doneGo: '▶ Tazama kozi (Enter)',
    exploreKicker: 'Rasilimali za TypingEase',
    footer: 'Nenda polepole kidogo, na utafika mbali zaidi.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Gundua TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex. */
  player: {
    loading: 'Somo linapakiwa…',
    missingTitle: 'Somo hili bado halina maudhui',
    missingBody: 'Hakuna kilichopakiwa kutoka <code>{path}</code>. Somo bado linaandikwa — jaribu tena baadaye au chagua jingine katika kozi.',
    noCurriculum: 'Faharasa ya kozi haikupakiwa (<code>data/curriculum.sw.js</code>).',
    fixtureNote: 'Inatumia maudhui ya mfano kutoka <code>hoc/_fixture/</code> — somo halisi bado halipo katika <code>data/lessons/</code>.',
    screenOf: 'Skrini {n} / {total}',
    newKey: 'KITUFE KIPYA',
    pressToContinue: 'Bonyeza <b>{key}</b> ili kuendelea',
    enterToContinue: 'Bonyeza <b>Enter</b> ili kuendelea',
    found: 'Ndicho hicho.',
    foundBody: 'Kumbuka <b>{key}</b> kiko wapi — sasa tutakifanyia mazoezi.',
    accuracyLive: 'usahihi {accuracy}%',
    errorsLive: 'makosa {count}',
    tokensLive: 'maneno {count}',
    great: 'Bora kabisa.',
    good: 'Vizuri sana.',
    pass: 'Umefaulu.',
    fail: 'Chini ya {min}% — inafaa kurudia skrini hii.',
    resultAccuracy: 'usahihi {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: 'makosa {count}',
    resultTokens: 'maneno sahihi {count}',
    slowKey: '<b>{key}</b> kilikuwa kitufe chako cha polepole zaidi (sekunde {ms} kila kimoja) — acha kidole kikifikie na kirudi mara moja kwenye safu ya msingi.',
    keepAccuracy: 'Punguza mwendo na usahihi unapanda — kasi hufuata baadaye, si kinyume chake.',
    continueEnter: 'Endelea → (Enter)',
    redoScreen: 'Rudia skrini hii',
    redoScreenAdvised: 'Rudia skrini hii (inashauriwa)',
    skipScreen: 'Ruka',
    lessonDone: 'IMEKAMILIKA',
    learned: 'Sasa unajua vitufe {count}:',
    statWpm: 'Kasi',
    statAccuracy: 'Usahihi',
    statTime: 'Muda',
    statStars: 'Nyota',
    technique: 'Inafaa kukumbuka',
    weakTitle: 'Vitufe vinavyofaa mazoezi zaidi',
    weakButton: 'Fanya mazoezi dakika moja',
    unitProgress: '{unit} · masomo {done}/{total}',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Rudi kwenye ukurasa mkuu (Enter)',
    redoLesson: '↻ Anza somo upya',
    home: 'Ukurasa mkuu',
    noMoreTitle: 'Umefika mwisho wa kilichoandikwa',
    noMoreBody: 'Kitengo kinachofuata bado kinaandaliwa. Kwa sasa, rudia somo moja — mzunguko wa pili kwa mwendo mzuri una thamani kuliko unavyodhani.',
    notReadyTitle: 'Somo hili bado halina maudhui',
    notReadyBody: '<b>{title}</b> liko katika kozi, lakini maudhui yake bado yanaandikwa. Chagua somo ambalo tayari limefunguliwa.',
    weakPage: 'Mazoezi ya vitufe dhaifu',
    badgeNew: 'Beji mpya',
    badgeAll: 'Tazama beji zote →',
    shiftFinger: 'kidole kidogo cha mkono mwingine',
    testPage: 'Jaribio la kasi',
    mobileNote: 'Kozi hii imetengenezwa kwa kibodi ya kompyuta — vidole kumi vinahitaji vitufe kumi halisi. Unaweza kuijaribu kwenye simu, lakini rudi kwenye kibodi ili ujifunze kweli.',
    mobileNoteClose: 'Nimeelewa',
    tapToType: 'Gusa ili kuandika',
    menuTitle: 'Imesitishwa',
    menuResume: 'Endelea kuandika',
    menuRedo: 'Rudia skrini hii',
    menuSkip: 'Ruka skrini hii',
    menuExit: 'Rudi kwenye ukurasa mkuu',
    clock: 'sek {seconds}',
    lessonNumber: 'Somo {number}',
    pageTitle: 'Somo · TypingEase',
    screenTip: 'Skrini {number} · {type}',
    firstLesson: 'Rudi kwenye somo la kwanza'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'kidole kidogo cha kushoto', LR: 'kidole cha pete cha kushoto', LM: 'kidole cha kati cha kushoto',
    LI: 'kidole cha shahada cha kushoto', LT: 'kidole gumba cha kushoto',
    RT: 'kidole gumba cha kulia', RI: 'kidole cha shahada cha kulia', RM: 'kidole cha kati cha kulia',
    RR: 'kidole cha pete cha kulia', RP: 'kidole kidogo cha kulia'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'kidole kidogo cha kushoto', 'left-ring': 'kidole cha pete cha kushoto',
    'left-middle': 'kidole cha kati cha kushoto', 'left-index': 'kidole cha shahada cha kushoto',
    'left-thumb': 'kidole gumba cha kushoto', thumb: 'kidole gumba',
    'right-index': 'kidole cha shahada cha kulia', 'right-middle': 'kidole cha kati cha kulia',
    'right-ring': 'kidole cha pete cha kulia', 'right-pinky': 'kidole kidogo cha kulia'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Mipangilio ya kibodi',
    showKeyboard: 'Onyesha kibodi',
    showHands: 'Onyesha mikono',
    rightHandOnly: 'Mkono wa kulia pekee',
    leftHandOnly: 'Mkono wa kushoto pekee',
    animatedHands: 'Mikono inafuata vitufe',
    letterCase: 'Herufi za vitufe',
    uppercase: 'HERUFI KUBWA',
    lowercase: 'herufi ndogo',
    boardAria: 'Kibodi ya skrini', keypadAria: 'Vitufe vya namba vya skrini',
    keyboardShape: 'Aina ya kibodi', shapeAuto: 'Kulingana na mpangilio', shapeAnsi: 'Vitufe 104 (Shift ndefu ya kushoto)', shapeIso: 'Vitufe 105 (kitufe kando ya Shift ya kushoto)',
    layout: 'Mpangilio wa kibodi',
    save: 'Hifadhi',
    cancel: 'Ghairi',
    close: 'Funga'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `Masomo ${a}/${b} yamekamilika`,
    legacy: n => `Ulimaliza masomo ${n} ya kozi ya awali — vitengo 1 na 2 tayari vimefunguliwa.`,
    ctaResume: '▶ Endelea', ctaStart: '▶ Anza',
    ctaLesson: (verb, number, title) => `${verb} somo ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Umefika mwisho wa kilichoandikwa <span>→</span>',
    rowResume: (screen, total) => `▶ Endelea · skrini ${screen}/${total}`,
    rowStart: '▶ Anza',
    rowDone: '✓ Limekamilika',
    unlocked: 'Limefunguliwa',
    unlockAfter: n => `Litafunguliwa baada ya somo ${n}`,
    unlockNow: 'Fungua kitengo hiki sasa'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ trang test tốc độ GHI lúc chạy. `passages` là những đoạn
     test nối tiếp nhau cho bài dài (tới 10 phút): tiếng Swahili chuẩn, QWERTY Mỹ (bố cục 118), chỉ
     dấu ASCII. Đoạn đầu cũng là `passage`. */
  test: {
    passage: 'Kujifunza kuandika bila kutazama kibodi kunahitaji subira kidogo tu. Weka vidole vyako kwenye safu ya msingi: mkono wa kushoto juu ya A S D F na mkono wa kulia juu ya J K L na nukta mkato. Vitufe vya F na J vina kivimbe kidogo, kwa hiyo unaweza kuvipata bila kuangalia chini. Mwanzoni kasi itakuwa ndogo na makosa yatakuwa mengi, na hiyo ni kawaida. Fanya mazoezi dakika kumi kila siku, na baada ya wiki chache vidole vitaanza kupata herufi vyenyewe.',
    passages: [
      'Kujifunza kuandika bila kutazama kibodi kunahitaji subira kidogo tu. Weka vidole vyako kwenye safu ya msingi: mkono wa kushoto juu ya A S D F na mkono wa kulia juu ya J K L na nukta mkato. Vitufe vya F na J vina kivimbe kidogo, kwa hiyo unaweza kuvipata bila kuangalia chini. Mwanzoni kasi itakuwa ndogo na makosa yatakuwa mengi, na hiyo ni kawaida. Fanya mazoezi dakika kumi kila siku, na baada ya wiki chache vidole vitaanza kupata herufi vyenyewe.',
      'Asubuhi anga lilikuwa safi, na ilionekana kwamba jua lingewaka siku nzima. Lakini kufikia mchana mawingu mazito yalitoka upande wa magharibi, upepo baridi ukavuma, na matone makubwa ya kwanza yakaanguka barabarani. Wauzaji sokoni walifunika bidhaa zao kwa turubai na wengine wakajificha chini ya miti. Mvua ilinyesha kwa dakika ishirini tu. Kisha jua likarudi, hewa ikawa na harufu ya udongo wenye unyevu, na watoto wakatoka nje kucheza kwenye madimbwi.',
      'Kila Jumamosi soko la mtaani huwa na kelele nyingi. Wauzaji hupanga nyanya, vitunguu, maembe na ndizi juu ya meza zao, na upande wa mwisho kuna wanaouza samaki, mchele na maharage. Mama mmoja anachagua viazi kwa muda mrefu na kujadiliana kuhusu bei, huku mvulana akibeba kikapu cha machungwa kurudi nyumbani. Anayefika mapema hupata vitu vibichi zaidi. Kufikia saa sita mchana wanunuzi hupungua, na wauzaji huanza kukusanya masanduku yao.',
      'Treni iliondoka kituoni kwa wakati uliopangwa. Nje ya dirisha tuliona mashamba ya mahindi, vijiji vidogo na milima ya mbali iliyofunikwa na ukungu. Ndani ya behewa kulikuwa kimya: jirani yangu alisoma kitabu, na mzee mmoja aliyekaa karibu na dirisha alisimulia hadithi za safari zake za zamani. Mhudumu alipita na chai ya moto na maandazi. Jioni tulitangaziwa kwamba baada ya nusu saa tungefika kituo kikubwa, na abiria wakaanza kukusanya mizigo yao.',
      'Pilau nzuri haihitaji vitu vingi vya ajabu. Kwanza kaanga vitunguu kwenye mafuta hadi viwe na rangi ya kahawia. Ongeza kitunguu saumu, tangawizi na viungo vya pilau, kisha weka nyama au mboga na ukoroge kwa dakika chache. Baada ya hapo mimina mchele uliooshwa pamoja na maji ya moto na chumvi. Funika sufuria na upike kwa moto mdogo mpaka maji yakauke. Pilau hupakuliwa ikiwa ya moto, pamoja na kachumbari ya nyanya na vitunguu.',
      'Maktaba ya mtaa wetu hufunguliwa hadi saa kumi jioni siku za Jumamosi. Katika chumba cha kusomea kuna meza ndefu ambapo wanafunzi hujiandaa kwa mitihani, na wazee husoma magazeti ya siku hiyo. Pembeni kuna sehemu ya watoto yenye vitabu vya picha na viti laini. Mkutubi anawajua wasomaji wengi wa kawaida kwa majina yao, na daima anaweza kupendekeza kitabu kizuri cha kusoma mwishoni mwa wiki.',
      'Babu yangu anaishi kijijini ng\'ambo ya mto. Kila asubuhi huamka kabla jua halijachomoza ili kukamua ng\'ombe wake watatu na kuwapeleka malishoni. Nyumbani kwake kuna shamba dogo la mboga, miti ya michungwa na kuku wanaozunguka uani siku nzima. Tunapomtembelea wakati wa likizo, hutusimulia hadithi jioni huku tukinywa maziwa ya moto. Usiku ni kimya sana, na angani nyota huonekana wazi kuliko mjini.',
      'Baiskeli ilikaa ghalani kwa miezi mingi, na sasa ni wakati wa kuitengeneza. Kwanza jaza upepo kwenye matairi na uhakikishe breki zinafanya kazi. Mnyororo umekauka na unatoa sauti, kwa hiyo weka matone machache ya mafuta. Kisha futa fremu kwa kitambaa chenye unyevu na kaza usukani vizuri. Mzunguko wa kwanza mtaani daima huleta furaha: upepo usoni, magurudumu yanazunguka kwa urahisi, na mawazo ya safari ndefu za likizo.',
      'Tangazo jipya limebandikwa kwenye mlango wa jengo: Jumamosi hii wakazi wote watakutana ili kusafisha uwanja. Kila mtu analeta kitu cha kusaidia, mmoja reki, mwingine rangi ya kupaka viti, na mwingine keki ya kula pamoja na chai. Watoto watachora kwa chaki sakafuni, na watu wazima watapanda maua karibu na lango. Siku kama hizi si nyingi, lakini baada yake majirani huanza kusalimiana si tu kwenye ngazi bali pia barabarani.',
      'Tabia nzuri unapoandika ni kutazama skrini, si kibodi. Herufi kubwa huandikwa pamoja na kitufe cha Shift, ambacho kinabonyezwa na kidole kidogo cha mkono mwingine. Nukta na koma ziko upande wa kulia wa safu ya chini, na alama ya \' inayotumika katika maneno kama ng\'ombe iko karibu na kitufe cha Enter. Ukifanya mazoezi dakika 15 kila siku, baada ya mwezi mmoja utaandika aya ya herufi 500 kwa muda mfupi zaidi kuliko sasa.'
    ],
    title: 'Jaribio la kuandika la sekunde {seconds}',
    titleMinutes: 'Jaribio la kuandika la dakika {minutes}',
    ready: 'Anza ukiwa tayari.',
    running: 'Matokeo yanahesabiwa sasa hivi.',
    finished: 'Muda umekwisha (sekunde {seconds}). Matokeo: {wpm} WPM, usahihi {accuracy}%, makosa: {errors}.',
    finishedMinutes: 'Muda umekwisha (dakika {minutes}). Matokeo: {wpm} WPM, usahihi {accuracy}%, makosa: {errors}.',
    accuracyName: 'Usahihi',
    comparisonSame: 'Sawa na matokeo yako ya awali.',
    comparisonDelta: '{delta} WPM ukilinganisha na matokeo ya awali',
    progressEmpty: 'Bado hakuna data ya kutosha. Fanya majaribio machache na maendeleo yako yataonekana hapa.',
    progressNone: 'Bado hakuna data ya maendeleo.',
    metricEmpty: 'Hakuna data ya kipimo hiki.',
    chartEmpty: 'Hakuna data inayofaa kuchora chati hii.',
    chartLabel: '{metric}: mabadiliko kwa muda',
    trendEmpty: 'Data ni chache mno kuona mwelekeo.',
    trendSame: 'Hakuna mabadiliko tangu mwanzo wa kipindi hiki.',
    trendDelta: '{change} {measure} tangu mwanzo wa kipindi hiki.',
    measureAccuracy: 'pointi za usahihi',
    progressSummary: 'Majaribio: {count} katika siku {days} zilizopita. Wastani wa WPM {wpm}, wastani wa usahihi {accuracy}%.',
    dateLocale: 'sw-KE'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ /sw/maendeleo/ ghi lúc chạy. */
  progress: {
    levels: ['Mwanzoni', 'Unasonga mbele', 'Thabiti', 'Mwepesi', 'Mahiri'],
    legacy: n => `Ulimaliza masomo ${n} ya kozi ya awali — vitengo 1 na 2 tayari vimefunguliwa.`,
    unit: index => `Kitengo ${index}`,
    soon: ' · hivi karibuni',
    // Số đứng sau danh từ, như ở mọi chỗ khác trong file này; 2 viết thành chữ "mawili".
    trendHint: n => (n === 1 ? 'Somo moja zaidi na kutakuwa na data ya kutosha kuchora mwelekeo.'
      : `Masomo ${n === 2 ? 'mawili' : n} zaidi na kutakuwa na data ya kutosha kuchora mwelekeo.`),
    stripLevel: level => `Kiwango: ${level}`,
    statWpm: 'WPM ya karibuni',
    statAccuracy: 'Usahihi',
    statSessions: 'Vipindi',
    target: (wpm, accuracy) => `Lengo linalofuata: <b>${wpm}</b> WPM · usahihi <b>${accuracy}</b>%`,
    adviceStart: 'Andika somo moja na ukurasa huu utajua ulipo.',
    actionStart: 'Anza somo la 1 →',
    adviceWeak: keys => `${keys} vinakupunguzia kasi — dakika moja navyo peke yake ina faida kubwa.`,
    actionWeak: keys => `Fanyia mazoezi ${keys} →`,
    adviceSteady: 'Unasonga mbele — somo moja kwa siku linashika mwendo.',
    actionLesson: (number, title) => `Somo ${number} · ${title} →`,
    actionTest: 'Jaribio la kasi →',
    actionLessons: 'Tazama kozi →',
    heatLegend: 'Usahihi kwa kila kitufe',
    heatStrong: 'Imara',
    heatFair: 'Kubahatisha',
    heatWeak: 'Inahitaji mazoezi',
    badgeDate: at => new Date(at).toLocaleDateString('sw-KE', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Imepatikana ${date}` : 'Imepatikana'),
    number: value => value.toLocaleString('sw-KE'),
    dailyGoal: (minutes, goal) => `dakika ${minutes} / ${goal}`,
    streak: days => `🔥 siku ${days} mfululizo`,
    bestStreak: days => `Bora zaidi: siku ${days}`,
    today: minutes => `dakika ${minutes} leo`,
    clearConfirm: 'Ufute maendeleo na alama zote zilizohifadhiwa kwenye kifaa hiki?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'Hatua ya kwanza', hint: 'Maliza somo lako la kwanza.' },
    'unit-1': { title: 'Kitengo kimoja', hint: 'Maliza kitengo kizima.' },
    'stars-30': { title: 'Nyota 30', hint: 'Kusanya nyota 30 katika kozi.' },
    'stars-90': { title: 'Nyota 90', hint: 'Kusanya nyota 90 katika kozi.' },
    'streak-3': { title: 'Siku tatu mfululizo', hint: 'Timiza lengo lako la kila siku kwa siku tatu mfululizo.' },
    'streak-7': { title: 'Wiki nzima', hint: 'Timiza lengo lako la kila siku kwa siku saba mfululizo.' },
    'clean-40': { title: '40 WPM safi', hint: 'Mzunguko mmoja wa 40 WPM kwa usahihi wa 95% au zaidi.' },
    'clean-60': { title: '60 WPM safi', hint: 'Mzunguko mmoja wa 60 WPM kwa usahihi wa 95% au zaidi.' },
    'typed-5000': { title: 'Vitufe 5,000', hint: 'Bonyeza vitufe elfu tano kwa jumla.' }
  }
};
