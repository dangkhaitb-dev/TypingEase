/* i18n/ui.fr.js — lớp tiếng Pháp.
 *
 * Nạp bởi mọi trang dưới /fr/, bằng <script src="/i18n/ui.fr.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Trang tiếng Việt không nạp gì cả: mỗi module dùng chung giữ bảng tiếng Việt
 * của nó làm mặc định sẵn có rồi trải object này lên trên.
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt. Đó là chủ ý — sai trông thấy vẫn hơn ô trống. Cũng có
 * nghĩa là tên khoá bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn là an toàn — đừng thêm `defer`.
 */
window.TypingEaseUI = {
  lang: 'fr',

  routes: {
    home: '/fr/',
    lessons: '/fr/lecons/',
    learn: '/fr/apprendre/',
    // Ba trang này chưa có bản tiếng Pháp. `null` = BỎ liên kết, không phải trỏ sang bản tiếng
    // Anh hay tiếng Việt — xem cách `R.weak` bị chặn trong player.js.
    test: '/fr/test-de-frappe/',
    progress: '/fr/progres/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /fr/ */
  home: {
    nav: ['Pratiquer', 'Cours'],
    roadmapKicker: '{total} leçons · {units} unités',
    roadmapAll: 'Voir les {total} leçons →',
    unitTitle: 'Unité {index} · {title}',
    unitDone: '{done}/{total} leçons ✓',
    railDone: '✓',
    railSoon: 'Bientôt',
    railNote: "Les unités suivantes sont en cours d'écriture — les leçons pas encore ouvertes sont en gris.",
    teaser: 'Unité {index} · {title} ({count} leçons)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Plus de pratique',
    shortcuts: [
      ['Test de vitesse', 'Mesure ta vitesse de frappe et ta précision.'],
      ['Touches faibles', 'Des exercices faits avec les touches que tu rates le plus.'],
      ['Pratique libre', 'Colle ton propre texte et écris-le à ta façon.']
    ],
    continueKicker: 'CONTINUER',
    continueName: 'Leçon {n} · {title}',
    continueCount: 'Unité {unit} · écran {screen}/{screens}',
    continueGo: '▶ Continuer (Entrée)',
    continueRedo: '↻ Refaire la leçon {n}',
    continueMap: 'Voir le cours',
    streak: '🔥 {days} jours · {minutes} min aujourd’hui',
    coachWeak: 'À noter : <b>{keys}</b> te freinent — une minute dessus ?',
    legacy: "Tu as terminé {n} leçons de l'ancien cours — les unités 1 et 2 sont déjà ouvertes.",
    doneKicker: 'GARDE LE RYTHME',
    doneName: "Tu as fini tout ce qui est écrit",
    doneCount: "L'unité suivante arrive. Refais une leçon pour garder le rythme.",
    doneGo: '▶ Voir le cours (Entrée)',
    exploreKicker: 'Ressources TypingEase',
    footer: 'Va un peu plus lentement, et tu iras beaucoup plus loin.',
    contentVi: ''
  },

  localized: {
    exploreTitle: 'Découvrir TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Pháp không bao giờ đặt
     inputMode "telex", nên nhánh mã đó không tới được. */
  player: {
    loading: 'Chargement de la leçon…',
    missingTitle: "Cette leçon n'a pas encore de contenu",
    missingBody: "Rien n'a été chargé depuis <code>{path}</code>. La leçon est encore en cours d'écriture — réessaie plus tard, ou choisis-en une autre dans le cours.",
    noCurriculum: "L'index du cours n'a pas été chargé (<code>data/curriculum.fr.js</code>).",
    fixtureNote: "Fonctionne avec le contenu d'exemple de <code>hoc/_fixture/</code> — la vraie leçon n'est pas encore dans <code>data/lessons/</code>.",
    screenOf: 'Écran {n} / {total}',
    newKey: 'NOUVELLE TOUCHE',
    pressToContinue: 'Appuie sur <b>{key}</b> pour continuer',
    enterToContinue: 'Appuie sur <b>Entrée</b> pour continuer',
    found: "C'est celle-là.",
    foundBody: "Retiens où se trouve <b>{key}</b> — on va la travailler maintenant.",
    accuracyLive: '{accuracy}% de précision',
    errorsLive: '{count} erreurs',
    tokensLive: '{count} mots',
    great: 'Excellent.',
    good: 'Bien joué.',
    pass: "C'est validé.",
    fail: 'Sous {min}% — cet écran vaut la peine d’être refait.',
    resultAccuracy: '{accuracy}% de précision',
    resultWpm: '{wpm} MPM',
    resultErrors: '{count} erreurs',
    resultTokens: '{count} mots corrects',
    slowKey: "<b>{key}</b> a été ta touche la plus lente ({ms} s chacune) — laisse le doigt l'atteindre, puis reviens tout de suite à la rangée de repos.",
    keepAccuracy: "Ralentis et la précision monte — la vitesse suit, jamais l'inverse.",
    continueEnter: 'Continuer → (Entrée)',
    redoScreen: 'Refaire cet écran',
    redoScreenAdvised: 'Refaire cet écran (conseillé)',
    skipScreen: 'Passer',
    lessonDone: 'TERMINÉE',
    learned: 'Tu connais maintenant {count} touches :',
    statWpm: 'Vitesse',
    statAccuracy: 'Précision',
    statTime: 'Temps',
    statStars: 'Étoiles',
    technique: 'À retenir',
    weakTitle: 'Touches à travailler davantage',
    weakButton: 'Travailler une minute',
    unitProgress: '{unit} · {done}/{total} leçons',
    nextLesson: '▶ {title} (Entrée)',
    finishAll: "▶ Retour à la page d'accueil (Entrée)",
    redoLesson: '↻ Recommencer la leçon',
    home: "Page d'accueil",
    noMoreTitle: 'Tu es arrivé au bout de ce qui est écrit',
    noMoreBody: "L'unité suivante est encore en préparation. En attendant, refais une leçon — un deuxième passage à bon rythme vaut plus qu'il n'y paraît.",
    notReadyTitle: "Cette leçon n'a pas encore de contenu",
    notReadyBody: "<b>{title}</b> est au programme, mais son contenu est encore en cours d'écriture. Choisis une leçon déjà ouverte.",
    weakPage: 'Travail des touches faibles',
    badgeNew: 'Nouveau badge',
    badgeAll: 'Voir tous les badges →',
    shiftFinger: "l'auriculaire de l'autre main",
    testPage: 'Test de vitesse',
    mobileNote: "Ce cours est fait pour un clavier d'ordinateur — dix doigts ont besoin de dix vraies touches. Tu peux essayer sur téléphone, mais reviens à un clavier pour apprendre vraiment.",
    mobileNoteClose: 'Compris',
    tapToType: 'Touche ici pour écrire',
    menuTitle: 'En pause',
    menuResume: 'Continuer à écrire',
    menuRedo: 'Refaire cet écran',
    menuSkip: 'Passer cet écran',
    menuExit: "Retour à la page d'accueil",
    clock: '{seconds} s',
    lessonNumber: 'Leçon {number}',
    pageTitle: 'Leçon · TypingEase',
    screenTip: 'Écran {number} · {type}',
    firstLesson: 'Revenir à la première leçon'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: "l'auriculaire gauche", LR: "l'annulaire gauche", LM: 'le majeur gauche',
    LI: "l'index gauche", LT: 'le pouce gauche',
    RT: 'le pouce droit', RI: "l'index droit", RM: 'le majeur droit',
    RR: "l'annulaire droit", RP: "l'auriculaire droit"
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng */
  keyboardFingers: {
    'left-pinky': "l'auriculaire gauche", 'left-ring': "l'annulaire gauche",
    'left-middle': 'le majeur gauche', 'left-index': "l'index gauche",
    'left-thumb': 'le pouce gauche', thumb: 'le pouce',
    'right-index': "l'index droit", 'right-middle': 'le majeur droit',
    'right-ring': "l'annulaire droit", 'right-pinky': "l'auriculaire droit"
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Réglages du clavier',
    showKeyboard: 'Afficher le clavier',
    showHands: 'Afficher les mains',
    rightHandOnly: 'Main droite seulement',
    leftHandOnly: 'Main gauche seulement',
    animatedHands: 'Les mains suivent les touches',
    letterCase: 'Lettres sur les touches',
    uppercase: 'MAJUSCULES',
    lowercase: 'minuscules',
    boardAria: "Clavier à l'écran", keypadAria: "Pavé numérique à l'écran",
    keyboardShape: 'Type de clavier', shapeAuto: 'Selon la disposition', shapeAnsi: '104 touches (Maj gauche longue)', shapeIso: '105 touches (touche à côté de Maj gauche)',
    layout: 'Disposition du clavier',
    save: 'Enregistrer',
    cancel: 'Annuler',
    close: 'Fermer'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} leçons faites`,
    legacy: n => `Tu as terminé ${n} leçons de l'ancien cours — les unités 1 et 2 sont déjà ouvertes.`,
    ctaResume: '▶ Continuer', ctaStart: '▶ Commencer',
    ctaLesson: (verb, number, title) => `${verb} la leçon ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Tu es arrivé au bout de ce qui est écrit <span>→</span>',
    rowResume: (screen, total) => `▶ Continuer · écran ${screen}/${total}`,
    rowStart: '▶ Commencer',
    rowDone: '✓ Faite',
    unlocked: 'Ouverte',
    unlockAfter: n => `S'ouvre après la leçon ${n}`,
    unlockNow: 'Ouvrir cette unité maintenant'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ mà công cụ kiểm tra tốc độ ghi lúc chạy (xem khối `test` của ui.en.js) */
  test: {
    wpmUnit: 'MPM',
    passage: "Ce matin, le ciel était gris et un vent frais soufflait sur la ville. Vers midi, les nuages se sont écartés et le soleil a séché les trottoirs en quelques minutes. Les gens ont retiré leur veste, les terrasses se sont remplies et on entendait rire un peu partout. Le soir, une petite pluie est revenue, fine et tiède, comme pour rappeler que la saison n'avait pas encore choisi son camp.",
    passages: [
      "Ce matin, le ciel était gris et un vent frais soufflait sur la ville. Vers midi, les nuages se sont écartés et le soleil a séché les trottoirs en quelques minutes. Les gens ont retiré leur veste, les terrasses se sont remplies et on entendait rire un peu partout. Le soir, une petite pluie est revenue, fine et tiède, comme pour rappeler que la saison n'avait pas encore choisi son camp.",
      "Le samedi, le marché s'installe sur la place devant la mairie. On y trouve des tomates encore chaudes de soleil, des fromages de chèvre, du pain de campagne et des fleurs coupées le matin même. Le marchand de fruits connaît ses clients par leur prénom et leur fait goûter une pêche avant qu'ils choisissent. Il faut arriver tôt si l'on veut des fraises, car elles partent toujours avant dix heures.",
      "Le train a quitté la gare à l'heure, ce qui a surpris presque tout le wagon. Par la fenêtre, les immeubles ont laissé place aux champs de blé, puis à une rivière bordée de peupliers. Une femme lisait un roman épais, deux enfants jouaient aux cartes et un homme dormait, la tête contre la vitre. Au bout de deux heures, on a aperçu la mer, d'un bleu très pâle, et tout le monde a levé les yeux.",
      "Pour une soupe de légumes simple, il suffit de quelques carottes, d'un poireau, de deux pommes de terre et d'un oignon. On coupe tout en morceaux, on fait revenir l'oignon dans un peu de beurre, puis on ajoute les légumes et de l'eau. Après une vingtaine de minutes à feu doux, on mixe, on sale et on poivre. Une cuillère de crème ou quelques herbes fraîches suffisent ensuite à la rendre différente chaque fois.",
      "Apprendre à taper sans regarder le clavier demande surtout de la patience. Au début, les doigts hésitent et chaque touche semble loin de sa place. Puis, jour après jour, la main retrouve seule la rangée de repos, et les mots sortent sans qu'on y pense. Le plus utile est de s'entraîner un peu chaque jour, lentement, en visant la justesse plutôt que la vitesse. La rapidité arrive ensuite, presque sans effort.",
      "La bibliothèque du quartier ouvre ses portes à neuf heures. Dans la grande salle règne un silence tranquille, à peine troublé par le bruit des pages et le pas léger des lecteurs. Près de la fenêtre, un étudiant prend des notes, une dame âgée feuillette un journal et un enfant cherche un livre sur les volcans. On peut rester ici des heures sans voir le temps passer, et personne ne demande rien en échange.",
      "Nous sommes partis à vélo tôt le matin, quand l'air sentait encore l'herbe mouillée. La route longeait un canal où glissaient quelques péniches, et des hérons se tenaient immobiles sur la rive. Vers onze heures, nous avons fait une pause dans un village pour boire un café et acheter des abricots. Le retour a été plus difficile, avec le vent de face, mais personne ne s'en est plaint.",
      "Déménager, c'est découvrir tout ce qu'on possède sans le savoir. Au fond d'un placard, on retrouve des lettres anciennes, un vieux réveil, une boîte de boutons et des photos de vacances oubliées. Chaque carton devient une petite décision : garder, donner ou jeter. Le jour du départ, l'appartement vide paraît soudain plus grand, et l'on s'étonne d'y avoir vécu si longtemps.",
      "Il y a trois ans, nous avons transformé un coin de pelouse en petit potager. La première année, les limaces ont mangé presque toutes les salades et les tomates ont éclaté sous l'orage. Depuis, nous avons appris à arroser le soir, à pailler la terre et à planter du basilic entre les rangs. Cet été, la récolte a été si généreuse qu'il a fallu partager les courgettes avec tous les voisins."
    ],
    title: 'Test de frappe de {seconds} secondes',
    titleMinutes: 'Test de frappe de {minutes} min',
    ready: 'Prêt quand tu veux.',
    running: 'Ton résultat se calcule en temps réel.',
    finished: 'Temps écoulé après {seconds} secondes. Résultat : {wpm} MPM, {accuracy} % de précision, {errors} erreurs.',
    finishedMinutes: 'Temps écoulé après {minutes} min. Résultat : {wpm} MPM, {accuracy} % de précision, {errors} erreurs.',
    comparisonSame: 'Comme ton résultat précédent.',
    comparisonDelta: '{delta} MPM par rapport à ton résultat précédent',
    progressEmpty: 'Pas encore assez de données. Fais quelques tests pour voir tes progrès.',
    progressNone: 'Aucune donnée de progrès pour le moment.',
    metricEmpty: "Aucune donnée n'est disponible pour cette mesure.",
    chartEmpty: "Il n'y a pas de données adaptées pour tracer ce graphique.",
    chartLabel: '{metric} au fil du temps',
    trendEmpty: 'Pas assez de données pour calculer une tendance.',
    trendSame: 'Aucun changement depuis le début de cette période.',
    trendDelta: '{change} {measure} depuis le début de cette période.',
    measureAccuracy: 'points de précision',
    accuracyName: 'Précision',
    progressSummary: '{count} tests ces {days} derniers jours. MPM moyens {wpm}, précision moyenne {accuracy} %.',
    dateLocale: 'fr-FR'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ ghi lúc chạy (xem khối `progress` của ui.en.js) */
  progress: {
    levels: ['Débutant', 'En progrès', 'Régulier', 'Rapide', 'Fluide'],
    legacy: n => `Tu as terminé ${n} leçons de l'ancien cours — les unités 1 et 2 sont déjà ouvertes.`,
    unit: index => `Unité ${index}`,
    soon: ' · bientôt',
    trendHint: n => (n === 1 ? 'Encore une leçon et il y aura assez de données pour tracer une tendance.'
      : `Encore ${n} leçons et il y aura assez de données pour tracer une tendance.`),
    stripLevel: level => `Niveau : ${level}`,
    statWpm: 'MPM récents',
    statAccuracy: 'Précision',
    statSessions: 'Séances',
    target: (wpm, accuracy) => `Prochain objectif : <b>${wpm}</b> MPM · <b>${accuracy}</b>% de précision`,
    adviceStart: 'Fais une leçon et cette page saura où tu en es.',
    actionStart: 'Commencer la leçon 1 →',
    adviceWeak: keys => `${keys} te freinent — une minute rien que sur elles, ça compte beaucoup.`,
    actionWeak: keys => `Travailler ${keys} →`,
    adviceSteady: 'Tu avances bien — une leçon par jour garde le rythme.',
    actionLesson: (number, title) => `Leçon ${number} · ${title} →`,
    actionTest: 'Test de vitesse →',
    actionLessons: 'Voir le cours →',
    heatLegend: 'Précision par touche',
    heatStrong: 'Solide',
    heatFair: 'Irrégulière',
    heatWeak: 'À travailler',
    badgeDate: at => new Date(at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Débloqué le ${date}` : 'Débloqué'),
    number: value => value.toLocaleString('fr-FR'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minutes`,
    streak: days => `🔥 ${days} ${days === 1 ? 'jour' : 'jours'} de suite`,
    bestStreak: days => `Record : ${days} ${days === 1 ? 'jour' : 'jours'}`,
    today: minutes => `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} aujourd’hui`,
    clearConfirm: 'Effacer tous les progrès et les scores enregistrés sur cet appareil ?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`: giáo trình
     tiếng Pháp khai `features: []` nên badges.js bỏ hẳn huy hiệu đó. */
  badges: {
    'first-step': { title: 'Premier pas', hint: 'Termine ta première leçon.' },
    'unit-1': { title: 'Une unité faite', hint: 'Termine une unité entière.' },
    'stars-30': { title: '30 étoiles', hint: 'Réunis 30 étoiles dans le cours.' },
    'stars-90': { title: '90 étoiles', hint: 'Réunis 90 étoiles dans le cours.' },
    'streak-3': { title: 'Trois jours de suite', hint: 'Atteins ton objectif quotidien trois jours de suite.' },
    'streak-7': { title: 'Une semaine entière', hint: 'Atteins ton objectif quotidien sept jours de suite.' },
    'clean-40': { title: '40 MPM propres', hint: 'Un passage à 40 MPM avec 95% de précision ou plus.' },
    'clean-60': { title: '60 MPM propres', hint: 'Un passage à 60 MPM avec 95% de précision ou plus.' },
    'typed-5000': { title: '5 000 touches', hint: 'Frappe cinq mille touches au total.' }
  }
};
