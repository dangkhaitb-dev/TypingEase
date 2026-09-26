/* i18n/ui.it.js — lớp tiếng Ý.
 *
 * Nạp bởi mọi trang dưới /it/, bằng <script src="/i18n/ui.it.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Trang tiếng Việt không nạp gì cả: mỗi module dùng chung giữ bảng tiếng Việt
 * của nó làm mặc định sẵn có rồi trải object này lên trên, nên khách tiếng Việt không tải thêm
 * một byte nào và không chạy thêm một nhánh nào.
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt. Đó là chủ ý — sai trông thấy vẫn hơn ô trống, và nếu cả
 * file này hỏng thì player tiếng Ý vẫn chạy chứ không trắng màn hình. Cũng có nghĩa là tên khoá
 * bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 */
window.TypingEaseUI = {
  lang: 'it',

  /* Tuyệt đối, vì /it/imparare/ nằm sâu hai cấp và một liên kết tương đối viết cho /hoc/ sẽ
     giải ra /it/luyen-phim-yeu/ — đúng độ sâu, sai tên, 404 lặng lẽ. */
  routes: {
    home: '/it/',
    lessons: '/it/lezioni/',
    learn: '/it/imparare/',
    // Chưa có năm trang này bằng tiếng Ý. `null` là tín hiệu BỎ liên kết, không phải trỏ sang
    // bản tiếng Anh hay tiếng Việt — xem cách `R.weak` bị chặn trong player.js.
    test: null,
    progress: '/it/progressi/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /it/ */
  home: {
    nav: ['Esercitati', 'Corso'],
    roadmapKicker: '{total} lezioni · {units} unità',
    roadmapAll: 'Vedi tutte le {total} lezioni →',
    unitTitle: 'Unità {index} · {title}',
    unitDone: '{done}/{total} lezioni ✓',
    railDone: '✓',
    railSoon: 'Presto',
    railNote: 'Le unità successive sono in scrittura — le lezioni non ancora aperte restano in grigio.',
    teaser: 'Unità {index} · {title} ({count} lezioni)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Altra pratica',
    shortcuts: [
      ['Prova di velocità', 'Misura le tue battute al minuto e la tua precisione.'],
      ['Tasti deboli', 'Esercizi costruiti sui tasti che sbagli di più.'],
      ['Pratica libera', 'Incolla un testo tuo e scrivilo come vuoi.']
    ],
    continueKicker: 'CONTINUA',
    continueName: 'Lezione {n} · {title}',
    continueCount: 'Unità {unit} · schermata {screen}/{screens}',
    continueGo: '▶ Continua (Invio)',
    continueRedo: '↻ Ripeti la lezione {n}',
    continueMap: 'Vedi il corso',
    streak: '🔥 {days} giorni · {minutes} min oggi',
    coachWeak: 'Attenzione: <b>{keys}</b> ti stanno rallentando — un minuto con questi?',
    legacy: 'Hai finito {n} lezioni del corso precedente — le unità 1 e 2 sono già aperte.',
    doneKicker: 'TIENI IL RITMO',
    doneName: 'Hai finito tutto quello che è scritto',
    doneCount: "L'unità successiva è in arrivo. Ripassa una lezione per non perdere il ritmo.",
    doneGo: '▶ Vedi il corso (Invio)',
    exploreKicker: 'Risorse di TypingEase',
    footer: "Vai un po' più piano e arriverai molto più lontano.",
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /it/ chưa có khối explore nào, nên chỉ hai khoá
     mà `applyCopy()` thật sự đọc. */
  localized: {
    exploreTitle: 'Scopri TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Ý không bao giờ đặt inputMode
     "telex", nên nhánh mã đó không tới được. */
  player: {
    loading: 'Caricamento della lezione…',
    missingTitle: 'Questa lezione non ha ancora contenuto',
    missingBody: 'Non è stato caricato niente da <code>{path}</code>. La lezione è ancora in scrittura — riprova più tardi oppure scegline un\'altra nel corso.',
    noCurriculum: "Non è stato caricato l'indice del corso (<code>data/curriculum.it.js</code>).",
    fixtureNote: 'In funzione con il contenuto di esempio di <code>hoc/_fixture/</code> — la lezione vera non è ancora in <code>data/lessons/</code>.',
    screenOf: 'Schermata {n} / {total}',
    newKey: 'TASTO NUOVO',
    pressToContinue: 'Premi <b>{key}</b> per continuare',
    enterToContinue: 'Premi <b>Invio</b> per continuare',
    found: 'Eccolo.',
    foundBody: 'Ricorda dove sta <b>{key}</b> — adesso lo pratichiamo.',
    accuracyLive: '{accuracy}% di precisione',
    errorsLive: '{count} errori',
    tokensLive: '{count} parole',
    great: 'Ottimo.',
    good: 'Molto bene.',
    pass: 'Superata.',
    fail: 'Sotto il {min}% — vale la pena ripetere questa schermata.',
    resultAccuracy: '{accuracy}% di precisione',
    resultWpm: '{wpm} PPM',
    resultErrors: '{count} errori',
    resultTokens: '{count} parole corrette',
    slowKey: '<b>{key}</b> è stato il tuo tasto più lento ({ms} s ciascuno) — lascia che il dito lo raggiunga e rientri subito alla riga di riposo.',
    keepAccuracy: 'Rallenta e la precisione sale — la velocità viene dopo, mai il contrario.',
    continueEnter: 'Continua → (Invio)',
    redoScreen: 'Ripeti questa schermata',
    redoScreenAdvised: 'Ripeti questa schermata (consigliato)',
    skipScreen: 'Salta',
    lessonDone: 'COMPLETATA',
    learned: 'Conosci già {count} tasti:',
    statWpm: 'Velocità',
    statAccuracy: 'Precisione',
    statTime: 'Tempo',
    statStars: 'Stelle',
    technique: 'Vale la pena ricordarlo',
    weakTitle: 'Tasti da praticare di più',
    weakButton: 'Pratica un minuto',
    unitProgress: '{unit} · {done}/{total} lezioni',
    nextLesson: '▶ {title} (Invio)',
    finishAll: '▶ Torna alla pagina principale (Invio)',
    redoLesson: '↻ Ricomincia la lezione',
    home: 'Pagina principale',
    noMoreTitle: 'Sei arrivato alla fine di quello che è scritto',
    noMoreBody: "L'unità successiva è ancora in lavorazione. Nel frattempo ripassa una lezione — un secondo giro a buon ritmo vale più di quanto sembri.",
    notReadyTitle: 'Questa lezione non ha ancora contenuto',
    notReadyBody: '<b>{title}</b> sta nel corso, ma il suo contenuto è ancora in scrittura. Scegli una lezione già aperta.',
    weakPage: 'Pratica sui tasti deboli',
    badgeNew: 'Nuovo distintivo',
    badgeAll: 'Vedi tutti i distintivi →',
    shiftFinger: "il mignolo dell'altra mano",
    testPage: 'Prova di velocità',
    mobileNote: 'Questo corso è fatto per una tastiera da computer — dieci dita hanno bisogno di dieci tasti veri. Puoi provarlo sul telefono, ma torna a una tastiera per imparare davvero.',
    mobileNoteClose: 'Ho capito',
    tapToType: 'Tocca per scrivere',
    menuTitle: 'In pausa',
    menuResume: 'Continua a scrivere',
    menuRedo: 'Ripeti questa schermata',
    menuSkip: 'Salta questa schermata',
    menuExit: 'Torna alla pagina principale',
    clock: '{seconds} s',
    lessonNumber: 'Lezione {number}',
    pageTitle: 'Lezione · TypingEase',
    screenTip: 'Schermata {number} · {type}',
    firstLesson: 'Torna alla prima lezione'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'il mignolo sinistro', LR: "l'anulare sinistro", LM: 'il medio sinistro',
    LI: "l'indice sinistro", LT: 'il pollice sinistro',
    RT: 'il pollice destro', RI: "l'indice destro", RM: 'il medio destro',
    RR: "l'anulare destro", RP: 'il mignolo destro'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. Hai bảng, vì dữ
     liệu bài học và widget bàn phím gọi tên ngón khác nhau. */
  keyboardFingers: {
    'left-pinky': 'il mignolo sinistro', 'left-ring': "l'anulare sinistro",
    'left-middle': 'il medio sinistro', 'left-index': "l'indice sinistro",
    'left-thumb': 'il pollice sinistro', thumb: 'il pollice',
    'right-index': "l'indice destro", 'right-middle': 'il medio destro',
    'right-ring': "l'anulare destro", 'right-pinky': 'il mignolo destro'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Impostazioni della tastiera',
    showKeyboard: 'Mostra la tastiera',
    showHands: 'Mostra le mani',
    rightHandOnly: 'Solo la mano destra',
    leftHandOnly: 'Solo la mano sinistra',
    animatedHands: 'Le mani seguono i tasti',
    letterCase: 'Lettere sui tasti',
    uppercase: 'MAIUSCOLE',
    lowercase: 'minuscole',
    boardAria: 'Tastiera su schermo', keypadAria: 'Tastierino numerico su schermo',
    keyboardShape: 'Tipo di tastiera', shapeAuto: 'Come la disposizione', shapeAnsi: '104 tasti (Maiusc sinistro lungo)', shapeIso: '105 tasti (tasto accanto a Maiusc sinistro)',
    layout: 'Disposizione della tastiera',
    save: 'Salva',
    cancel: 'Annulla',
    close: 'Chiudi'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} lezioni fatte`,
    legacy: n => `Hai finito ${n} lezioni del corso precedente — le unità 1 e 2 sono già aperte.`,
    ctaResume: '▶ Continua', ctaStart: '▶ Comincia',
    ctaLesson: (verb, number, title) => `${verb} la lezione ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Sei arrivato alla fine di quello che è scritto <span>→</span>',
    rowResume: (screen, total) => `▶ Continua · schermata ${screen}/${total}`,
    rowStart: '▶ Comincia',
    rowDone: '✓ Fatta',
    unlocked: 'Aperta',
    unlockAfter: n => `Si apre dopo la lezione ${n}`,
    unlockNow: 'Apri questa unità adesso'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ mà công cụ kiểm tra tốc độ ghi lúc chạy (xem khối `test` của ui.en.js).
     Không câu nào bắt đầu bằng "È": bàn phím Ý chuẩn không có phím gõ thẳng chữ hoa có dấu. */
  test: {
    wpmUnit: 'PPM',
    passage: "Stamattina il cielo era grigio e sulla città soffiava un vento fresco. Verso mezzogiorno le nuvole si sono aperte e il sole ha asciugato i marciapiedi in pochi minuti. La gente si è tolta la giacca, i tavolini dei bar si sono riempiti e si sentiva ridere un po' dappertutto. La sera è tornata una pioggia sottile e tiepida, come per ricordare che la stagione non aveva ancora deciso da che parte stare.",
    passages: [
      "Stamattina il cielo era grigio e sulla città soffiava un vento fresco. Verso mezzogiorno le nuvole si sono aperte e il sole ha asciugato i marciapiedi in pochi minuti. La gente si è tolta la giacca, i tavolini dei bar si sono riempiti e si sentiva ridere un po' dappertutto. La sera è tornata una pioggia sottile e tiepida, come per ricordare che la stagione non aveva ancora deciso da che parte stare.",
      "Il sabato mattina il mercato riempie la piazza davanti al municipio. Ci sono pomodori ancora caldi di sole, formaggi di capra, pane casereccio e mazzi di fiori tagliati all'alba. Il fruttivendolo conosce i clienti per nome e fa assaggiare una pesca prima che scelgano. Chi vuole le fragole deve arrivare presto, perché finiscono sempre prima delle dieci, e allora resta solo qualche cestino di ciliegie.",
      "Il treno è partito in orario, cosa che ha sorpreso quasi tutta la carrozza. Dal finestrino i palazzi hanno lasciato il posto ai campi di grano e poi a un fiume circondato da pioppi. Una signora leggeva un romanzo molto spesso, due bambini giocavano a carte e un uomo dormiva con la testa appoggiata al vetro. Dopo due ore si è visto il mare, di un azzurro chiarissimo, e tutti hanno alzato gli occhi.",
      "Per un buon minestrone bastano qualche carota, una zucchina, due patate, un po' di sedano e una cipolla. Si taglia tutto a pezzetti, si fa rosolare la cipolla con un filo d'olio e poi si aggiungono le verdure e l'acqua. Dopo una quarantina di minuti a fuoco basso si sala, si aggiunge una manciata di pasta corta e si lascia cuocere ancora un po'. Con un cucchiaio di formaggio grattugiato diventa un piatto completo.",
      "Imparare a scrivere senza guardare la tastiera richiede soprattutto pazienza. All'inizio le dita esitano e ogni tasto sembra lontano dal suo posto. Poi, giorno dopo giorno, la mano ritrova da sola la riga centrale e le parole escono senza bisogno di pensarci. La cosa più utile è esercitarsi un po' ogni giorno, con calma, puntando sulla precisione più che sulla velocità. La rapidità arriva dopo, quasi senza fatica.",
      "La biblioteca del quartiere apre alle nove. Nella sala grande c'è un silenzio tranquillo, rotto appena dal fruscio delle pagine e dai passi leggeri di chi entra. Vicino alla finestra uno studente prende appunti, una signora anziana sfoglia il giornale e un bambino cerca un libro sui vulcani. Si può restare qui per ore senza accorgersi del tempo che passa, e nessuno chiede niente in cambio.",
      "Siamo partiti in bicicletta la mattina presto, quando l'aria profumava ancora di erba bagnata. La strada correva lungo un canale dove scivolavano poche barche, e sulla riva gli aironi stavano immobili. Verso le undici ci siamo fermati in un paese per bere un caffè e comprare delle albicocche. Il ritorno è stato più faticoso, con il vento contro, ma nessuno si è lamentato, perché la giornata era bellissima.",
      "Traslocare significa scoprire tutto quello che si possiede senza saperlo. In fondo a un armadio saltano fuori vecchie lettere, una sveglia rotta, una scatola di bottoni e foto di vacanze dimenticate. Ogni scatolone diventa una piccola decisione: tenere, regalare o buttare. Il giorno della partenza l'appartamento vuoto sembra all'improvviso più grande, e ci si stupisce di averci vissuto così a lungo.",
      "Tre anni fa abbiamo trasformato un angolo del giardino in un piccolo orto. Il primo anno le lumache hanno mangiato quasi tutta l'insalata e i pomodori si sono spaccati con il temporale. Da allora abbiamo imparato ad annaffiare la sera, a coprire la terra con la paglia e a piantare il basilico tra le file. Quest'estate il raccolto è stato così abbondante che abbiamo dovuto regalare le zucchine a tutti i vicini.",
      "Domenica pomeriggio siamo saliti sulla collina dietro il paese. Il sentiero passava tra ulivi e muretti di pietra, e ogni tanto si apriva sulla valle, dove i tetti rossi sembravano minuscoli. In cima c'era una piccola chiesa chiusa e una panchina all'ombra di un castagno. Ci siamo seduti a mangiare pane e formaggio, guardando le nuvole che si muovevano piano sopra le montagne lontane."
    ],
    title: 'Test di battitura di {seconds} secondi',
    titleMinutes: 'Test di battitura di {minutes} min',
    ready: 'Pronto quando vuoi.',
    running: 'Il risultato si calcola in tempo reale.',
    finished: 'Tempo scaduto dopo {seconds} secondi. Risultato: {wpm} PPM, {accuracy}% di precisione, {errors} errori.',
    finishedMinutes: 'Tempo scaduto dopo {minutes} min. Risultato: {wpm} PPM, {accuracy}% di precisione, {errors} errori.',
    comparisonSame: 'Come il tuo risultato precedente.',
    comparisonDelta: '{delta} PPM rispetto al tuo risultato precedente',
    progressEmpty: 'Non ci sono ancora abbastanza dati. Fai qualche test per vedere i tuoi progressi.',
    progressNone: 'Ancora nessun dato sui progressi.',
    metricEmpty: 'Non ci sono dati per questa misura.',
    chartEmpty: 'Non ci sono dati adatti per disegnare questo grafico.',
    chartLabel: '{metric} nel tempo',
    trendEmpty: 'Non ci sono abbastanza dati per calcolare una tendenza.',
    trendSame: "Nessun cambiamento dall'inizio di questo periodo.",
    trendDelta: "{change} {measure} dall'inizio di questo periodo.",
    measureAccuracy: 'punti di precisione',
    accuracyName: 'Precisione',
    progressSummary: '{count} test negli ultimi {days} giorni. PPM medie {wpm}, precisione media {accuracy}%.',
    dateLocale: 'it-IT'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ ghi lúc chạy (xem khối `progress` của ui.en.js) */
  progress: {
    levels: ['Agli inizi', 'In crescita', 'Costante', 'Veloce', 'Fluido'],
    legacy: n => `Hai finito ${n} lezioni del corso precedente — le unità 1 e 2 sono già aperte.`,
    unit: index => `Unità ${index}`,
    soon: ' · presto',
    trendHint: n => (n === 1 ? 'Ancora una lezione e ci saranno abbastanza dati per tracciare una tendenza.'
      : `Ancora ${n} lezioni e ci saranno abbastanza dati per tracciare una tendenza.`),
    stripLevel: level => `Livello: ${level}`,
    statWpm: 'PPM recenti',
    statAccuracy: 'Precisione',
    statSessions: 'Sessioni',
    target: (wpm, accuracy) => `Prossimo obiettivo: <b>${wpm}</b> PPM · <b>${accuracy}</b>% di precisione`,
    adviceStart: 'Fai una lezione e questa pagina saprà a che punto sei.',
    actionStart: 'Comincia la lezione 1 →',
    adviceWeak: keys => `${keys} ti stanno rallentando — un minuto solo su questi tasti vale molto.`,
    actionWeak: keys => `Pratica ${keys} →`,
    adviceSteady: 'Stai andando avanti — una lezione al giorno tiene il ritmo.',
    actionLesson: (number, title) => `Lezione ${number} · ${title} →`,
    actionTest: 'Prova di velocità →',
    actionLessons: 'Vedi il corso →',
    heatLegend: 'Precisione per tasto',
    heatStrong: 'Sicuro',
    heatFair: 'Incerto',
    heatWeak: 'Da allenare',
    badgeDate: at => new Date(at).toLocaleDateString('it-IT', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Sbloccato il ${date}` : 'Sbloccato'),
    number: value => value.toLocaleString('it-IT'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minuti`,
    streak: days => `🔥 ${days} ${days === 1 ? 'giorno' : 'giorni'} di fila`,
    bestStreak: days => `Record: ${days} ${days === 1 ? 'giorno' : 'giorni'}`,
    today: minutes => `${minutes} ${minutes === 1 ? 'minuto' : 'minuti'} oggi`,
    clearConfirm: 'Cancellare tutti i progressi e i punteggi salvati su questo dispositivo?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`: giáo trình
     tiếng Ý khai `features: []` nên badges.js bỏ hẳn huy hiệu đó. */
  badges: {
    'first-step': { title: 'Primo passo', hint: 'Finisci la tua prima lezione.' },
    'unit-1': { title: "Un'unità fatta", hint: "Finisci un'unità intera." },
    'stars-30': { title: '30 stelle', hint: 'Raccogli 30 stelle nel corso.' },
    'stars-90': { title: '90 stelle', hint: 'Raccogli 90 stelle nel corso.' },
    'streak-3': { title: 'Tre giorni di fila', hint: 'Raggiungi il tuo obiettivo giornaliero tre giorni di fila.' },
    'streak-7': { title: 'Una settimana intera', hint: 'Raggiungi il tuo obiettivo giornaliero sette giorni di fila.' },
    'clean-40': { title: '40 PPM pulite', hint: 'Un giro a 40 PPM con il 95% di precisione o più.' },
    'clean-60': { title: '60 PPM pulite', hint: 'Un giro a 60 PPM con il 95% di precisione o più.' },
    'typed-5000': { title: '5.000 battute', hint: 'Scrivi cinquemila battute in totale.' }
  }
};
