/* i18n/ui.de.js — lớp tiếng Đức.
 *
 * Nạp bởi mọi trang dưới /de/, bằng <script src="/i18n/ui.de.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Trang tiếng Việt không nạp gì cả: mỗi module dùng chung giữ bảng tiếng Việt
 * của nó làm mặc định sẵn có rồi trải object này lên trên, nên khách tiếng Việt không tải thêm
 * một byte nào và không chạy thêm một nhánh nào.
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt. Đó là chủ ý — sai trông thấy vẫn hơn ô trống, và nếu cả
 * file này hỏng thì player tiếng Đức vẫn chạy chứ không trắng màn hình. Cũng có nghĩa là tên
 * khoá bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 */
window.TypingEaseUI = {
  lang: 'de',

  /* Tuyệt đối, vì /de/lernen/ nằm sâu hai cấp và một liên kết tương đối viết cho /hoc/ sẽ
     giải ra /de/luyen-phim-yeu/ — đúng độ sâu, sai tên, 404 lặng lẽ. */
  routes: {
    home: '/de/',
    lessons: '/de/lektionen/',
    learn: '/de/lernen/',
    // Chưa có năm trang này bằng tiếng Đức. `null` là tín hiệu BỎ liên kết, không phải trỏ sang
    // bản tiếng Anh hay tiếng Việt — xem cách `R.weak` bị chặn trong player.js.
    test: '/de/tipptest/',
    progress: '/de/fortschritt/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /de/ */
  home: {
    nav: ['Üben', 'Kurs'],
    roadmapKicker: '{total} Lektionen · {units} Einheiten',
    roadmapAll: 'Alle {total} Lektionen ansehen →',
    unitTitle: 'Einheit {index} · {title}',
    unitDone: '{done}/{total} Lektionen ✓',
    railDone: '✓',
    railSoon: 'Bald',
    railNote: 'Die nächsten Einheiten werden noch geschrieben — Lektionen, die noch nicht offen sind, stehen grau da.',
    teaser: 'Einheit {index} · {title} ({count} Lektionen)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Mehr üben',
    shortcuts: [
      ['Tempotest', 'Miss deine Anschläge pro Minute und deine Genauigkeit.'],
      ['Schwache Tasten', 'Übungen aus den Tasten, die dir am häufigsten danebengehen.'],
      ['Freies Üben', 'Füg deinen eigenen Text ein und schreib ihn auf deine Art.']
    ],
    continueKicker: 'WEITERMACHEN',
    continueName: 'Lektion {n} · {title}',
    continueCount: 'Einheit {unit} · Bildschirm {screen}/{screens}',
    continueGo: '▶ Weiter (Enter)',
    continueRedo: '↻ Lektion {n} wiederholen',
    continueMap: 'Kurs ansehen',
    streak: '🔥 {days} Tage · {minutes} Min heute',
    coachWeak: 'Achtung: <b>{keys}</b> bremsen dich — eine Minute damit?',
    legacy: 'Du hast {n} Lektionen aus dem alten Kurs geschafft — Einheit 1 und 2 sind offen.',
    doneKicker: 'BLEIB IM TAKT',
    doneName: 'Du hast alles geschafft, was geschrieben ist',
    doneCount: 'Die nächste Einheit ist unterwegs. Wiederhol eine Lektion, damit das Tempo bleibt.',
    doneGo: '▶ Kurs ansehen (Enter)',
    exploreKicker: 'TypingEase entdecken',
    footer: 'Geh ein wenig langsamer, dann kommst du deutlich weiter.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /de/ chưa có khối explore nào, nên chỉ hai khoá
     mà `applyCopy()` thật sự đọc. */
  localized: {
    exploreTitle: 'TypingEase entdecken',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Đức không bao giờ đặt inputMode
     "telex", nên nhánh mã đó không tới được. */
  player: {
    loading: 'Lektion wird geladen…',
    missingTitle: 'Diese Lektion hat noch keinen Inhalt',
    missingBody: 'Aus <code>{path}</code> wurde nichts geladen. Die Lektion wird noch geschrieben — versuch es später wieder oder wähl eine andere im Kurs.',
    noCurriculum: 'Das Kursverzeichnis wurde nicht geladen (<code>data/curriculum.de.js</code>).',
    fixtureNote: 'Läuft mit dem Beispielinhalt aus <code>hoc/_fixture/</code> — die echte Lektion liegt noch nicht in <code>data/lessons/</code>.',
    screenOf: 'Bildschirm {n} / {total}',
    newKey: 'NEUE TASTE',
    pressToContinue: 'Drücke <b>{key}</b>, um weiterzugehen',
    enterToContinue: 'Drücke <b>Enter</b>, um weiterzugehen',
    found: 'Das ist sie.',
    foundBody: 'Merk dir, wo <b>{key}</b> liegt — gleich wird sie geübt.',
    accuracyLive: '{accuracy}% genau',
    errorsLive: '{count} Fehler',
    tokensLive: '{count} Wörter',
    great: 'Ausgezeichnet.',
    good: 'Gut gemacht.',
    pass: 'Bestanden.',
    fail: 'Unter {min}% — dieser Bildschirm lohnt eine Wiederholung.',
    resultAccuracy: '{accuracy}% genau',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} Fehler',
    resultTokens: '{count} richtige Wörter',
    slowKey: '<b>{key}</b> war deine langsamste Taste ({ms} s pro Anschlag) — lass den Finger hingehen und sofort in die Grundstellung zurück.',
    keepAccuracy: 'Geh langsamer, dann steigt die Genauigkeit — das Tempo kommt danach, nie umgekehrt.',
    continueEnter: 'Weiter → (Enter)',
    redoScreen: 'Diesen Bildschirm wiederholen',
    redoScreenAdvised: 'Diesen Bildschirm wiederholen (empfohlen)',
    skipScreen: 'Überspringen',
    lessonDone: 'GESCHAFFT',
    learned: 'Du kennst jetzt {count} Tasten:',
    statWpm: 'Tempo',
    statAccuracy: 'Genauigkeit',
    statTime: 'Zeit',
    statStars: 'Sterne',
    technique: 'Das lohnt sich zu merken',
    weakTitle: 'Tasten, die mehr Übung vertragen',
    weakButton: 'Eine Minute üben',
    unitProgress: '{unit} · {done}/{total} Lektionen',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Zurück zur Startseite (Enter)',
    redoLesson: '↻ Lektion noch einmal beginnen',
    home: 'Startseite',
    noMoreTitle: 'Du bist am Ende von dem, was geschrieben ist',
    noMoreBody: 'Die nächste Einheit entsteht noch. Wiederhol in der Zwischenzeit eine Lektion — ein zweiter Durchgang in gutem Tempo ist mehr wert, als er aussieht.',
    notReadyTitle: 'Diese Lektion hat noch keinen Inhalt',
    notReadyBody: '<b>{title}</b> steht im Kurs, aber der Inhalt wird noch geschrieben. Wähl eine Lektion, die schon offen ist.',
    weakPage: 'Übung für schwache Tasten',
    badgeNew: 'Neues Abzeichen',
    badgeAll: 'Alle Abzeichen ansehen →',
    shiftFinger: 'der kleine Finger der anderen Hand',
    testPage: 'Tempotest',
    mobileNote: 'Dieser Kurs ist für eine Computertastatur gemacht — zehn Finger brauchen zehn echte Tasten. Du kannst ihn am Handy ausprobieren, aber zum Lernen komm an eine Tastatur zurück.',
    mobileNoteClose: 'Verstanden',
    tapToType: 'Zum Schreiben tippen',
    menuTitle: 'Pause',
    menuResume: 'Weiterschreiben',
    menuRedo: 'Diesen Bildschirm wiederholen',
    menuSkip: 'Diesen Bildschirm überspringen',
    menuExit: 'Zurück zur Startseite',
    clock: '{seconds} s',
    lessonNumber: 'Lektion {number}',
    pageTitle: 'Lektion · TypingEase',
    screenTip: 'Bildschirm {number} · {type}',
    firstLesson: 'Zurück zur ersten Lektion'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'der linke kleine Finger', LR: 'der linke Ringfinger', LM: 'der linke Mittelfinger',
    LI: 'der linke Zeigefinger', LT: 'der linke Daumen',
    RT: 'der rechte Daumen', RI: 'der rechte Zeigefinger', RM: 'der rechte Mittelfinger',
    RR: 'der rechte Ringfinger', RP: 'der rechte kleine Finger'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. Hai bảng, vì dữ
     liệu bài học và widget bàn phím gọi tên ngón khác nhau. */
  keyboardFingers: {
    'left-pinky': 'der linke kleine Finger', 'left-ring': 'der linke Ringfinger',
    'left-middle': 'der linke Mittelfinger', 'left-index': 'der linke Zeigefinger',
    'left-thumb': 'der linke Daumen', thumb: 'der Daumen',
    'right-index': 'der rechte Zeigefinger', 'right-middle': 'der rechte Mittelfinger',
    'right-ring': 'der rechte Ringfinger', 'right-pinky': 'der rechte kleine Finger'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Tastatureinstellungen',
    showKeyboard: 'Tastatur anzeigen',
    showHands: 'Hände anzeigen',
    rightHandOnly: 'Nur die rechte Hand',
    leftHandOnly: 'Nur die linke Hand',
    animatedHands: 'Die Hände folgen den Tasten',
    letterCase: 'Beschriftung der Tasten',
    uppercase: 'GROSSBUCHSTABEN',
    lowercase: 'kleinbuchstaben',
    boardAria: 'Bildschirmtastatur', keypadAria: 'Ziffernblock auf dem Bildschirm',
    keyboardShape: 'Tastaturform', shapeAuto: 'Wie das Layout', shapeAnsi: '104 Tasten (lange linke Umschalttaste)', shapeIso: '105 Tasten (Taste neben der linken Umschalttaste)',
    layout: 'Tastaturbelegung',
    save: 'Speichern',
    cancel: 'Abbrechen',
    close: 'Schließen'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} Lektionen geschafft`,
    legacy: n => `Du hast ${n} Lektionen aus dem alten Kurs geschafft — Einheit 1 und 2 sind offen.`,
    ctaResume: '▶ Weiter', ctaStart: '▶ Anfangen',
    ctaLesson: (verb, number, title) => `${verb} — Lektion ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Du bist am Ende von dem, was geschrieben ist <span>→</span>',
    rowResume: (screen, total) => `▶ Weiter · Bildschirm ${screen}/${total}`,
    rowStart: '▶ Anfangen',
    rowDone: '✓ Geschafft',
    unlocked: 'Offen',
    unlockAfter: n => `Öffnet sich nach Lektion ${n}`,
    unlockNow: 'Diese Einheit jetzt öffnen'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Chữ tĩnh ở tien-do/text/de.mjs. */
  progress: {
    levels: ['Am Anfang', 'Auf dem Weg', 'Sicher', 'Schnell', 'Flüssig'],
    legacy: n => `Du hast ${n} Lektionen aus dem alten Kurs geschafft — Einheit 1 und 2 sind offen.`,
    unit: index => `Einheit ${index}`,
    soon: ' · bald',
    trendHint: n => (n === 1 ? 'Noch eine Lektion, dann reicht es für eine Kurve.'
      : `Noch ${n} Lektionen, dann reicht es für eine Kurve.`),
    stripLevel: level => `Stufe: ${level}`,
    statWpm: 'WPM zuletzt',
    statAccuracy: 'Genauigkeit',
    statSessions: 'Durchgänge',
    target: (wpm, accuracy) => `Nächstes Ziel: <b>${wpm}</b> WPM · <b>${accuracy}</b>% genau`,
    adviceStart: 'Schreib eine Lektion, dann weiß diese Seite, wo du stehst.',
    actionStart: 'Lektion 1 beginnen →',
    adviceWeak: keys => `${keys} bremsen dich — eine Minute nur mit diesen Tasten bringt viel.`,
    actionWeak: keys => `${keys} üben →`,
    adviceSteady: 'Du kommst gut voran — eine Lektion am Tag hält das Tempo.',
    actionLesson: (number, title) => `Lektion ${number} · ${title} →`,
    actionTest: 'Tempotest →',
    actionLessons: 'Kurs ansehen →',
    heatLegend: 'Genauigkeit pro Taste',
    heatStrong: 'Sicher',
    heatFair: 'Mal so, mal so',
    heatWeak: 'Braucht Übung',
    badgeDate: at => new Date(at).toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Freigeschaltet am ${date}` : 'Freigeschaltet'),
    number: value => value.toLocaleString('de-DE'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} Minuten`,
    streak: days => `🔥 ${days} ${days === 1 ? 'Tag' : 'Tage'} am Stück`,
    bestStreak: days => `Rekord: ${days} ${days === 1 ? 'Tag' : 'Tage'}`,
    today: minutes => `${minutes} Minuten heute`,
    clearConfirm: 'Alle Fortschritte und Ergebnisse auf diesem Gerät löschen?'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ trang tipptest ghi lúc chạy. Chữ tĩnh ở kiem-tra-toc-do-go/text/de.mjs. */
  test: {
    passage: 'Am Samstagmorgen ist der Wochenmarkt schon um sieben Uhr voll. Zwischen den Ständen riecht es nach frischem Brot, Äpfeln und Kaffee. Eine Frau wiegt Kartoffeln ab, ein Junge trägt zwei Kisten Erdbeeren zum Auto seines Vaters. Wer früh kommt, bekommt die schönsten Tomaten. Gegen Mittag wird es ruhiger, die Händler packen langsam ein und verschenken manchmal das letzte Bund Petersilie.',
    passages: [
      'Am Samstagmorgen ist der Wochenmarkt schon um sieben Uhr voll. Zwischen den Ständen riecht es nach frischem Brot, Äpfeln und Kaffee. Eine Frau wiegt Kartoffeln ab, ein Junge trägt zwei Kisten Erdbeeren zum Auto seines Vaters. Wer früh kommt, bekommt die schönsten Tomaten. Gegen Mittag wird es ruhiger, die Händler packen langsam ein und verschenken manchmal das letzte Bund Petersilie.',
      'Der Zug nach Hamburg fährt pünktlich ab. Draußen ziehen Felder, kleine Dörfer und Windräder vorbei, und im Abteil ist es angenehm still. Eine ältere Dame löst ein Kreuzworträtsel, ein Student hört Musik über Kopfhörer. Nach zwei Stunden kündigt eine Durchsage den nächsten Halt an. Wer aussteigen möchte, nimmt schon mal die Tasche vom Gepäckfach und stellt sich an die Tür.',
      'Für eine gute Gemüsesuppe braucht man nicht viel: Zwiebeln, Karotten, Sellerie, ein paar Kartoffeln und etwas Brühe. Zuerst werden die Zwiebeln in Öl glasig gedünstet, dann kommt das übrige Gemüse dazu. Nach etwa zwanzig Minuten ist alles weich. Mit Salz, Pfeffer und einer Prise Muskat abschmecken. Dazu passt ein Stück kräftiges Brot, und am nächsten Tag schmeckt die Suppe oft noch besser.',
      'Seit einigen Wochen übe ich jeden Abend zehn Minuten Tippen. Am Anfang war es mühsam, weil meine Finger immer wieder auf die Tasten schauen wollten. Inzwischen finde ich das ä und das ö ohne Blick nach unten, nur das ß erwische ich manchmal nicht. Mein Tempo ist noch nicht hoch, aber ich mache weniger Fehler. Das fühlt sich besser an als jede schnelle Zahl auf dem Bildschirm.',
      'Der Wetterbericht hatte Sonne versprochen, doch gegen Nachmittag ziehen dunkle Wolken über den Hügel. Innerhalb weniger Minuten frischt der Wind auf, und die ersten schweren Tropfen fallen auf die Straße. Die Leute im Park suchen Schutz unter den Bäumen oder laufen zur Bushaltestelle. Eine halbe Stunde später ist alles vorbei. Die Luft riecht nach nassem Gras, und über den Dächern steht ein Regenbogen.',
      'Im Treppenhaus hängt ein neuer Zettel: Am Freitag trifft sich die Hausgemeinschaft im Hof. Jeder bringt etwas mit, einen Salat, Getränke oder einen Kuchen. Herr Braun aus dem dritten Stock will seinen Grill aufstellen, und die Kinder dürfen mit Kreide auf den Boden malen. Solche Abende sind selten, aber sie sorgen dafür, dass man sich im Haus nicht nur kurz im Aufzug grüßt.',
      'Die kleine Stadtbibliothek hat samstags bis vierzehn Uhr geöffnet. Hinten im Lesesaal stehen große Tische, an denen Schüler für Prüfungen lernen und Rentner die Zeitung lesen. Vorne gibt es eine Ecke mit Bilderbüchern und bunten Kissen. Wer ein Buch zurückgibt, legt es in eine Kiste neben dem Eingang. Die Bibliothekarin kennt fast alle Besucher beim Namen und hat für jeden einen Tipp.',
      'Wer im Herbst wandern geht, sollte früh aufbrechen, denn die Tage werden kürzer. Der Weg führt zuerst durch einen Buchenwald, dessen Blätter gelb und rot leuchten. Später geht es steil bergauf bis zu einer Hütte, in der es heiße Suppe und Tee gibt. Von der Terrasse aus sieht man bei klarem Wetter bis zu den Alpen. Für den Rückweg lohnt sich eine warme Jacke, weil es schnell kühl wird.',
      'Mein Fahrrad stand den ganzen Winter im Keller, und jetzt ist es Zeit für eine Pflege. Zuerst pumpe ich die Reifen auf und prüfe die Bremsen. Die Kette ist trocken und quietscht, also bekommt sie ein paar Tropfen Öl. Danach putze ich den Rahmen mit einem feuchten Tuch. Bei der ersten Runde um den Block fühlt sich alles leicht an, und ich freue mich schon auf längere Ausflüge im Frühling.',
      'Übung macht den Meister, sagt ein altes Sprichwort, und beim Zehnfingersystem stimmt es. Die Hände ruhen auf der Grundreihe, links auf ASDF, rechts auf JKLÖ. Von dort aus greift jeder Finger nur die Tasten in seiner Spalte. Große Buchstaben entstehen mit der Umschalttaste der anderen Hand. Wer so übt, schreibt nach einigen Wochen nicht nur schneller, sondern auch entspannter und mit weniger Fehlern.'
    ],
    title: 'Tipptest über {seconds} Sekunden',
    titleMinutes: 'Tipptest über {minutes} min',
    ready: 'Bereit, wenn du es bist.',
    running: 'Dein Ergebnis wird laufend berechnet.',
    finished: 'Die Zeit ist um ({seconds} s). Ergebnis: {wpm} WPM, {accuracy} % Genauigkeit, {errors} Fehler.',
    finishedMinutes: 'Die Zeit ist um ({minutes} min). Ergebnis: {wpm} WPM, {accuracy} % Genauigkeit, {errors} Fehler.',
    accuracyName: 'Genauigkeit',
    comparisonSame: 'Genauso wie dein letztes Ergebnis.',
    comparisonDelta: '{delta} WPM im Vergleich zum letzten Ergebnis',
    progressEmpty: 'Noch zu wenige Daten. Mach ein paar Tests, dann siehst du deinen Fortschritt.',
    progressNone: 'Noch keine Fortschrittsdaten.',
    metricEmpty: 'Für diese Kennzahl gibt es keine Daten.',
    chartEmpty: 'Es gibt keine passenden Daten für dieses Diagramm.',
    chartLabel: '{metric} im Zeitverlauf',
    trendEmpty: 'Zu wenige Daten für einen Trend.',
    trendSame: 'Keine Veränderung seit Beginn dieses Zeitraums.',
    trendDelta: '{change} {measure} seit Beginn dieses Zeitraums.',
    measureAccuracy: 'Prozentpunkte Genauigkeit',
    progressSummary: '{count} Tests in den letzten {days} Tagen. WPM im Schnitt {wpm}, Genauigkeit im Schnitt {accuracy} %.',
    dateLocale: 'de-DE'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`: giáo trình
     tiếng Đức khai `features: []` nên badges.js bỏ hẳn huy hiệu đó. */
  badges: {
    'first-step': { title: 'Erster Schritt', hint: 'Schließ deine erste Lektion ab.' },
    'unit-1': { title: 'Eine Einheit geschafft', hint: 'Schließ eine ganze Einheit ab.' },
    'stars-30': { title: '30 Sterne', hint: 'Sammle 30 Sterne im Kurs.' },
    'stars-90': { title: '90 Sterne', hint: 'Sammle 90 Sterne im Kurs.' },
    'streak-3': { title: 'Drei Tage am Stück', hint: 'Erreich dein Tagesziel an drei Tagen hintereinander.' },
    'streak-7': { title: 'Eine ganze Woche', hint: 'Erreich dein Tagesziel an sieben Tagen hintereinander.' },
    'clean-40': { title: 'Saubere 40 WPM', hint: 'Ein Durchgang mit 40 WPM bei mindestens 95% Genauigkeit.' },
    'clean-60': { title: 'Saubere 60 WPM', hint: 'Ein Durchgang mit 60 WPM bei mindestens 95% Genauigkeit.' },
    'typed-5000': { title: '5.000 Anschläge', hint: 'Schreib insgesamt fünftausend Anschläge.' }
  }
};
