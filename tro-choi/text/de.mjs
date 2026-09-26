/* tro-choi/text/de.mjs — deutsche Spieleseite (scripts/build-game-pages.mjs). Die Wörter kommen aus
 * data/words/de.js, derselben Bank wie der Kurs /de/ (QWERTZ, ä ö ß auf eigenen Tasten, alles klein). */
export default {
  slug: 'tippspiele',
  title: 'Kostenlose Tippspiele auf deiner Tastatur | TypingEase',
  description: 'Drei kostenlose Tippspiele: Wörterregen, Geisterrennen und Tastenjagd. Übe das Zehnfingersystem auf deiner echten Tastatur im Browser, ohne Anmeldung.',
  breadcrumbAria: 'Brotkrümelnavigation',
  homeCrumb: 'Start',
  crumb: 'Tippspiele',
  eyebrow: 'Üben, das sich wie Spielen anfühlt',
  h1: 'Tippspiele',
  intro: 'Drei kurze Spiele für zwischen den Lektionen: fallende Wörter abräumen, gegen dein eigenes Tempo antreten und Tasten auf einer Bildschirmtastatur jagen. Deine Bestwerte bleiben auf diesem Gerät.',
  tabsAria: 'Spiel wählen',
  locale: 'de-DE',
  howAria: 'So wird gespielt',
  how: {
    rain: ['Wörter fallen von oben.', 'Tipp das Wort genau so ab, alles klein.', 'Mit der Leertaste räumst du es ab. Drei verpasst, und es ist vorbei.'],
    race: ['Wähl ein Tempo für den Geist.', 'Tipp den Text ab dem ersten Buchstaben.', 'Sei vor dem Geist an der Flagge.'],
    keys: ['Eine Taste leuchtet auf der Tastatur.', 'Schau auf den Bildschirm und drück sie.', 'Triff so viele wie möglich in 60 Sekunden.']
  },
  modes: {
    rain: ['Wörterregen', 'Tipp das fallende Wort und räum es mit der Leertaste ab.'],
    race: ['Geisterrennen', 'Schreib den Text fertig, bevor der Geist ankommt.'],
    keys: ['Tastenjagd', 'Triff die leuchtende Taste, so oft du kannst, in 60 Sekunden.']
  },
  rain: {
    difficulty: 'Stufe', easy: 'Leicht', normal: 'Mittel', hard: 'Schwer',
    score: 'Punkte', level: 'Runde', lives: 'Leben', best: 'Bestwert',
    start: 'Start', placeholder: 'Fallendes Wort tippen, dann Leertaste',
    hint: 'Alle Wörter stehen klein, auch Substantive; ä, ö und ß haben auf QWERTZ eigene Tasten. Erreichen drei Wörter den Boden, ist das Spiel vorbei.'
  },
  race: {
    pace: 'Geist', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Rennen starten', you: 'Du', ghost: 'Geist', placeholder: 'Tipp den Text oben ab, ab dem ersten Buchstaben'
  },
  keys: {
    start: 'Jagd starten', time: 'Sekunden', hits: 'Treffer', streak: 'Serie', best: 'Bestwert',
    hint: 'Augen auf den Bildschirm, nicht auf die Hände. Tasten werden nach ihrer Position erkannt, daher passt jedes Systemlayout.'
  },
  runtime: {
    over: 'Spiel vorbei', again: 'Noch mal', newBest: 'Neuer Bestwert auf diesem Gerät!',
    rainResult: '{score} Punkte · {words} Wörter abgeräumt · {wpm} WPM · {accuracy} % Treffer',
    raceReady: 'Der Geist fährt mit {wpm} WPM. Drück „Rennen starten“ und tipp den ersten Buchstaben, um loszulegen.',
    raceGo: 'Los!', raceWin: 'Du warst zuerst im Ziel!', raceLose: 'Diesmal hat der Geist gewonnen.',
    racePaused: 'Angehalten. Drück „Rennen starten“, um neu zu starten.',
    raceResult: '{seconds} Sekunden · {wpm} WPM · {accuracy} % Genauigkeit · Geist {ghost} WPM',
    paceBest: 'Dein Bestwert ({wpm} WPM)',
    keysResult: '{hits} Treffer · längste Serie {streak} · {accuracy} % Genauigkeit'
  },
  sections: [
    { h2: 'Drei Spiele, eine Fähigkeit', html: '<p>Jedes Spiel trainiert einen Teil des Zehnfingersystems. <b>Tastenjagd</b> übt, wo jede Taste liegt: Die leuchtende Taste zeigt dir, welcher Finger sich bewegt, ohne nach unten zu schauen. <b>Wörterregen</b> übt ganze Wörter unter Zeitdruck. <b>Geisterrennen</b> übt einen gleichmäßigen Rhythmus über einen ganzen Text, gegen einen Geist mit dem Tempo, das du wählst.</p>' },
    { h2: 'Auf deiner eigenen Tastatur', html: '<p>Die Bildschirmtastatur der Tastenjagd ist die des Kurses, die deutsche QWERTZ-Tastatur, und Tasten werden nach ihrer physischen Position erkannt, nicht nach dem Zeichen, das dein System ausgibt. Wörterregen und Geisterrennen nutzen dieselben Wörter wie der <a class="inline-link" href="{course}">Kurs mit {lessons} Lektionen</a>, samt ä, ö und ß.</p>' },
    { h2: 'So bringt es etwas', html: '<ul><li>Spiel nach einer Lektion; fünf bis zehn Minuten reichen.</li><li>Nimm eine Stufe, auf der du die meisten Wörter triffst, und geh runter, wenn du oft danebenliegst.</li><li>Stell den Geist im Geisterrennen etwas unter dein echtes Tempo und erhöhe es mit der Zeit.</li><li>Für eine echte Tempomessung nimm den <a class="inline-link" href="{test}">Tipptest</a>, kein Spiel.</li></ul>' }
  ],
  faqTitle: 'Häufige Fragen',
  faq: [
    ['Kann ich gegen andere Leute spielen?', 'Noch nicht. Im Geisterrennen trittst du gegen einen Geist an, der das gewählte Tempo hält, oder gegen deinen eigenen Bestwert. Es gibt keine anderen Spieler und keine Rangliste.'],
    ['Wo werden meine Bestwerte gespeichert?', 'Nur in diesem Browser auf diesem Gerät. Kein Konto, und nichts wird irgendwohin gesendet.'],
    ['Kann ich auf dem Handy spielen?', 'Wörterregen und Geisterrennen funktionieren mit der Handytastatur. Die Tastenjagd braucht eine echte Tastatur, weil sie beibringt, wo die Tasten liegen.'],
    ['Warum ist ein richtiges Wort nicht verschwunden?', 'Es muss genau stimmen, bevor du die Leertaste drückst. Achte auf einen Großbuchstaben, der sich eingeschlichen hat (auch bei Substantiven gilt hier klein), oder auf einen fehlenden Buchstaben.']
  ],
  cta: { eyebrow: 'Willst du besser spielen?', title: 'Lerne das Zehnfingersystem', text: '{lessons} Lektionen auf deiner eigenen Tastatur, angefangen mit der Grundreihe.', button: 'Zum Kurs' }
};
