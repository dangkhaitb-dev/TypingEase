/* content/games/de.mjs — deutsche Spieleseite (tooling/pages/games.mjs). Die Wörter kommen aus
 * data/words/de.js, derselben Bank wie der Kurs /de/ (QWERTZ, ä ö ß auf eigenen Tasten, alles klein). */
export default {
  worlds: {"rain": "Glühwürmchengarten", "race": "Rennstrecke im Abendrot", "keys": "Raumstation"},
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
    { h2: 'Tippspiele: welches Spiel zu deiner Schwierigkeit passt', html: `<p>Die drei Spiele üben nicht dasselbe. <b>Tastenjagd</b> verlangt nur, eine Taste zu finden: richtig, wenn du ü oder ß noch suchst. <b>Wörterregen</b> verlangt ein ganzes Wort mit allen Umlauten, bevor es unten ankommt: passend, wenn die Buchstaben sitzen, die Wörter aber stocken. <b>Geisterrennen</b> verlangt, eine ganze Zeile durchzuhalten: erst dann sinnvoll, wenn Wörter gehen, der Rhythmus aber nach ein paar Sekunden zerfällt.</p>
<p>Mein Rat geht gegen den ersten Impuls: Fang nicht mit dem Rennen an. Solange du für ein Ö oder eine Ziffer noch auf die Tastatur schaust, bringt dir das Rennen vor allem bei, mit Blick auf die Hände zu hetzen. Nimm das Spiel, das zu deinem Problem passt, auch wenn es weniger aufregend wirkt, und heb dir das Rennen für später auf.</p>
<p>Keines der drei sagt dir, ob du „gut“ tippst. Jedes zeigt dir eine Stelle, an der es hakt: eine Taste, die du verfehlst, ein Wort, das du abbrichst, ein Fehler, der das Auto stoppt. Diese Stelle nimmst du in die nächste Lektion mit, nicht den Punktestand.</p>` },
    { h2: 'Wörterregen: Umlaute zählen, Großschreibung nicht', html: `<p>Die Wörter stammen aus demselben Wortschatz wie der Kurs und stehen alle klein, auch die Substantive. Das ist im Spiel bewusst so: Hier geht es um Buchstaben und Umlaute, nicht um Shift. Tipp ein fallendes Wort und schick es mit Leertaste oder Enter ab. Es muss genau stimmen; „strasse“ räumt „straße“ nicht ab, und „Haus“ mit großem H trifft „haus“ nicht. Nach dem dritten Wort, das unten ankommt, ist die Runde vorbei.</p>
<h3>Leicht, Mittel, Schwer</h3>
<p>Auf Leicht haben die Wörter höchstens fünf Buchstaben, auf Mittel höchstens acht, auf Schwer fällt diese Grenze weg. Nach jeweils acht abgeräumten Wörtern zählt die Anzeige „Runde“ eins hoch, und die Wörter fallen schneller. Ein Spiel, das ruhig beginnt, wird also von selbst schwerer.</p>
<h3>Wo deutsche Wörter Zeit kosten</h3>
<p>Wörter mit ä, ö, ü und ß kosten keinen zusätzlichen Anschlag, weil jeder dieser Buchstaben eine eigene Taste hat. Sie kosten aber einen weiten Weg für den rechten kleinen Finger. Wenn du gerade bei „größe“, „gespräch“ oder „fußball“ danebenliegst, ist das kein Tempoproblem, sondern ein Griff, der noch nicht sitzt. Punkte richten sich nach Wortlänge und Runde; vergleich sie nur zwischen Spielen auf derselben Stufe.</p>` },
    { h2: 'Geisterrennen: ein Rennen gegen dein eigenes Tempo', html: `<p>Damit es klar ist: Es gibt keinen anderen Spieler. Der Geist ist ein Auto, das gleichmäßig fährt, mit dem Tempo, das du wählst, zwischen 20 und 80 WPM, oder mit deinem gespeicherten Rennrekord aus diesem Browser. Ohne Rekord startet diese Option bei 30 WPM; ein sehr niedriger Rekord wird auf 15 WPM angehoben. Es gibt weder Rangliste noch Online-Rennen. Die Herausforderung bist du gegen ein Tempo, das du selbst festlegst.</p>
<p>Drück „Rennen starten“; los geht es erst mit deinem ersten Buchstaben, du hast also Zeit, die Hände in Grundstellung zu bringen. Der Text besteht aus Wörtern des Kurses, die du der Reihe nach mit allen Leerzeichen abtippst.</p>
<h3>Ein Fehler hält das Auto an</h3>
<p>Dein Auto fährt bis zum ersten Fehler, nicht weiter. Tippst du „schon“ statt „schön“, zählt alles danach erst, wenn das o korrigiert ist. Bei deutschen Texten bleibt das Auto oft an einem Umlaut oder an einem vertauschten y und z hängen. Wähle ein Tempo, das dir Zeit zum Zurückgehen lässt. Verlierst du jedes Mal, stell es niedriger und lass es ein paar Rennen lang gleich, damit du vergleichen kannst.</p>` },
    { h2: 'Tastenjagd: Umlaute und ß auf QWERTZ finden', html: `<p>Auf der Bildschirmtastatur leuchtet eine Taste auf; drück dieselbe Taste auf deiner Tastatur. Du hast 60 Sekunden. Jeder Treffer zählt, eine falsche Taste beendet deine Serie. Schau auf beide Werte: Viele Treffer mit kurzen Serien heißen oft, dass du rätst statt weißt.</p>
<p>Auf QWERTZ leuchten alle Tasten auf, die in der Grundebene einen Buchstaben tragen. Dazu gehören ä, ö und ü am rechten Rand des Buchstabenfelds und das ß in der Zahlenreihe. Es ist das einzige der drei Spiele, das dich diese Tasten ohne Wort drumherum finden lässt. Wenn du das ß im Text mit dem Fragezeichen verwechselst oder das ü mit dem Plus daneben, ist das hier die richtige Übung.</p>
<p>Auch das z oben und das y unten links leuchten auf, und zwar dort, wo QWERTZ sie hat. Das Spiel liest die physische Position der Taste nach der angezeigten Tastatur. Es prüft nicht, welchen Finger du benutzt oder ob du hinsiehst; das musst du selbst beobachten. Du brauchst eine echte Tastatur; auf dem Handy funktioniert die Tastenjagd nicht.</p>` },
    { h2: 'Vom Spielergebnis zur nächsten Lektion', html: `<p>Bevor du spielst, nimm dir eine Frage vor: Suche ich das ß noch? Vertausche ich y und z? Bleibt mein Auto immer am Umlaut hängen? Beantworte sie nach der Runde, bevor du „Noch mal“ drückst. Eine Notiz wie „ü und + verwechselt“ wird zu einer Übung. „Muss besser werden“ wird zu gar nichts.</p>
<p>Ist es eine Taste, die dir entgleitet, geh zurück in die erste Einheit des <a class="inline-link" href="{course}">Kurses mit {lessons} Lektionen</a>; dort haben ä, ö, ü und ß eigene Lektionen. Sind es lange Wörter oder ß und ss, ist die Einheit Orthografische Präzision dafür gemacht. Willst du dein echtes Tempo wissen, mach den <a class="inline-link" href="{test}">Tipptest</a>: Spielpunkte und Testergebnis messen verschiedene Dinge, vergleich sie nicht.</p>
<p>Deine Bestwerte bleiben in diesem Browser, getrennt nach Sprache. Hör auf, wenn du nur noch der Animation zuschaust; das ist der richtige Moment für eine Lektion. Und wenn ein neuer Bestwert kommt, schau kurz, auf welcher Stufe er entstanden ist: Ein Rekord auf Leicht und einer auf Schwer erzählen nicht dasselbe.</p>` }
  ],
  faqTitle: 'Häufige Fragen',
  faq: [
    ['Kann ich gegen andere Leute spielen?', 'Nein. Im Geisterrennen trittst du gegen einen Geist an, der das gewählte Tempo hält, oder gegen deinen eigenen Bestwert. Es gibt keine anderen Spieler und keine Rangliste.'],
    ['Wo werden meine Bestwerte gespeichert?', 'Nur in diesem Browser auf diesem Gerät. Kein Konto, und nichts wird irgendwohin gesendet.'],
    ['Kann ich auf dem Handy spielen?', 'Wörterregen und Geisterrennen funktionieren mit der Handytastatur. Die Tastenjagd braucht eine echte Tastatur, weil sie beibringt, wo die Tasten liegen.'],
    ['Warum ist ein richtiges Wort nicht verschwunden?', 'Es muss genau stimmen, bevor du die Leertaste drückst. Achte auf einen Großbuchstaben, der sich eingeschlichen hat (auch bei Substantiven gilt hier klein), oder auf einen fehlenden Buchstaben.'],
    ['Warum leuchten in der Tastenjagd auch ä, ö, ü und ß?', 'Auf QWERTZ haben sie eigene Tasten ohne Shift. Die Tastenjagd lässt alle Tasten aufleuchten, die in der Grundebene einen Buchstaben tragen, also auch diese vier. Das ß liegt in der Zahlenreihe rechts neben der 0.'],
    ['Welches Spiel passt für den Anfang?', 'Die Tastenjagd, solange du Tasten noch suchst, dann Wörterregen auf Leicht. Das Geisterrennen hebst du dir für später auf, mit einem niedrigen, festen Tempo. Wenn du noch nicht weißt, welcher Finger wohin gehört, fang mit Lektion 1 des Kurses an und komm danach zurück.']
  ],
  cta: { eyebrow: 'Willst du besser spielen?', title: 'Lerne das Zehnfingersystem', text: '{lessons} Lektionen auf deiner eigenen Tastatur, angefangen mit der Grundreihe.', button: 'Zum Kurs' }
};
