/* kiem-tra-toc-do-go/text/de.mjs — statischer Text der deutschen Tipptest-Seite (/de/tipptest/),
 * für scripts/build-test-pages.mjs. `{lessons}` = Lektionen des Hauptkurses, `{course}` = seine URL.
 */
export default {
  slug: 'tipptest',
  title: 'Tipp Test: Tippgeschwindigkeit online messen | TypingEase',
  description: 'Kostenloser Tipp Test im Browser: Tippe 1, 5 oder 10 Minuten auf deiner QWERTZ-Tastatur und sieh WPM, Genauigkeit und Fehler. Ohne Anmeldung.',
  breadcrumbAria: 'Brotkrümelnavigation',
  homeCrumb: 'Start',
  crumb: 'Tipptest',
  eyebrow: 'Kostenloser Tipptest',
  h1: 'Tipp Test: Wie schnell tippst du?',
  intro: 'Wähle eine Dauer zwischen 15 Sekunden und 10 Minuten und schreib den Text ab. Du siehst WPM, Genauigkeit und Fehler. Die Uhr startet mit deinem ersten Anschlag, nicht mit einem Knopf.',
  durationAria: 'Testdauer',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Aktuelles Ergebnis',
  stats: { time: 'Zeit', wpm: 'WPM', accuracy: 'Genauigkeit', errors: 'Fehler', consistency: 'Gleichmäßigkeit' },
  promptAria: 'Der Text zum Abtippen',
  inputLabel: 'Hier lostippen',
  soundTitle: 'Tastenklick beim Tippen (Alt+S)',
  soundLabel: 'Tastenklick',
  placeholder: 'Hier klicken und lostippen...',
  restart: 'Noch einmal',
  wpmNote: 'WPM zählt die eingegebenen Zeichen, geteilt durch fünf, pro Minute Tippzeit. Mal fünf ergibt das die Anschläge pro Minute.',
  result: { title: 'Dein Ergebnis' },
  progress: {
    eyebrow: 'Übungsprotokoll', title: 'Dein Fortschritt', rangeAria: 'Zeitraum', days: n => `${n} Tage`,
    metricAria: 'Kennzahl im Diagramm', note: 'Die Ergebnisse können aus Tests unterschiedlicher Dauer stammen.',
    summaryAria: 'Zusammenfassung des Fortschritts', avgWpm: 'WPM im Schnitt', bestWpm: 'Beste WPM',
    avgAccuracy: 'Genauigkeit im Schnitt', count: 'Tests', chartAria: 'Fortschrittsdiagramm'
  },
  sections: [
    {
      h2: 'So funktioniert der Tipptest',
      html: '<p>Oben steht ein deutscher Text mit Groß- und Kleinschreibung, Satzzeichen und Umlauten. Du schreibst ihn in der gewählten Zeit so genau wie möglich ab. Jedes Zeichen wird sofort mit der Vorlage verglichen: Richtiges bleibt unauffällig, Falsches wird markiert. Mit der Rücktaste kannst du Fehler korrigieren, solange die Zeit läuft.</p><p>Gedacht ist der Test für eine deutsche <em>QWERTZ</em>-Tastatur, wie sie in Deutschland, Österreich und der Schweiz üblich ist. Wenn dein System auf ein englisches Layout eingestellt ist, landen Z und Y vertauscht und die Umlaute fehlen ganz. Prüf also vorher kurz die Tastatureinstellung.</p>'
    },
    {
      h2: 'WPM und Anschläge pro Minute',
      html: '<p><em>WPM</em> steht für „words per minute“, also Wörter pro Minute. Weil Wörter unterschiedlich lang sind, gilt ein Wort hier einheitlich als fünf Zeichen, Leerzeichen und Satzzeichen eingeschlossen. So lassen sich Ergebnisse vergleichen, egal ob der Text kurze oder lange Wörter enthält.</p><p>Im deutschsprachigen Raum ist aus der Bürowelt eher die Angabe <em>Anschläge pro Minute</em> bekannt. Die Umrechnung ist einfach: WPM mal fünf ergibt ungefähr die Anschläge pro Minute. 40 WPM entsprechen also rund 200 Anschlägen.</p>'
    },
    {
      h2: 'Wie Umlaute, ß und Großbuchstaben zählen',
      html: '<p>Auf der QWERTZ-Tastatur haben ä, ö, ü und ß eigene Tasten rechts neben dem Buchstabenfeld. Jedes davon zählt als ein Zeichen, genau wie ein a oder ein s. Ein großes Ä, Ö oder Ü tippst du mit Umschalt plus der Umlauttaste; auch das ist ein Zeichen, obwohl du zwei Tasten drückst.</p><p>Umschreibungen gelten nicht: Wer „ae“ statt „ä“ oder „ss“ statt „ß“ tippt, macht einen Fehler, und das zweite Zeichen verschiebt den Rest des Wortes. Das ist Absicht, denn im echten Schreiben willst du die Umlaute ebenfalls blind und ohne Umweg treffen. Häufige Stolpersteine sind außerdem das Z in der oberen Reihe und die Satzzeichen, die bei QWERTZ auf Umschalt liegen, etwa der Doppelpunkt über dem Punkt.</p>'
    },
    {
      h2: '1, 5 oder 10 Minuten: welche Dauer passt?',
      html: '<p>Ein Test über eine Minute oder kürzer misst vor allem dein Spitzentempo. Du kannst dich voll konzentrieren, Müdigkeit spielt kaum eine Rolle, und ein einzelner Fehler fällt stark ins Gewicht.</p><p>Fünf oder zehn Minuten zeigen etwas anderes: dein Dauertempo. Irgendwann lässt die Konzentration nach, die Hände werden müde, und genau dann zeigt sich, ob deine Technik trägt. Das Ergebnis liegt meist etwas unter dem Wert aus dem kurzen Test und ist näher an dem, was du beim Schreiben einer langen E-Mail oder eines Berichts tatsächlich schaffst. Für den Vergleich mit dir selbst gilt: Nimm immer dieselbe Dauer, sonst vergleichst du Sprint mit Ausdauer.</p>'
    },
    {
      h2: 'Genauigkeit richtig lesen',
      html: '<p>Die Genauigkeit ist der Anteil der eingegebenen Zeichen, die mit der Vorlage übereinstimmen. Die Fehlerzahl daneben zeigt, wie viele Zeichen am Ende noch falsch stehen. WPM zählt alle eingegebenen Zeichen, auch falsche. Ein hohes Tempo mit vielen Fehlern sieht also besser aus, als es ist.</p><p>Als grobe Faustregel gilt: Unter etwa 95 Prozent lohnt es sich, langsamer zu werden. Jeder Fehler kostet im Alltag Zeit für die Korrektur, und wer ständig auf die Rücktaste greift, verliert den Rhythmus. Die Gleichmäßigkeit zeigt dir, ob dein Tempo während des Tests stabil bleibt oder stark schwankt.</p>'
    },
    {
      h2: 'Schneller tippen: was wirklich hilft',
      html: '<ul><li>Lerne das Zehnfingersystem von der Grundreihe aus: links ASDF, rechts JKLÖ, die Daumen auf der Leertaste.</li><li>Schau nicht auf die Tasten. Anfangs wirst du langsamer, doch nur so wird der Weg zu jeder Taste automatisch.</li><li>Übe die Umlaute und das ß gezielt mit dem kleinen Finger der rechten Hand, statt sie mit dem Zeigefinger zu suchen.</li><li>Übe lieber täglich zehn Minuten als einmal pro Woche eine Stunde.</li><li>Achte zuerst auf Genauigkeit. Das Tempo kommt, wenn die Bewegungen sitzen.</li></ul><p>Der <a class="inline-link" href="{course}">Kurs mit {lessons} Lektionen</a> führt dich Schritt für Schritt über die deutsche QWERTZ-Tastatur, von der Grundreihe bis zu den Umlauten.</p>'
    }
  ],
  faqTitle: 'Häufige Fragen',
  faq: [
    ['Was bedeutet WPM?', 'WPM heißt Wörter pro Minute. Ein Wort zählt dabei als fünf Zeichen, Leerzeichen eingeschlossen. So sind Ergebnisse unabhängig von der Wortlänge vergleichbar.'],
    ['Wie rechne ich WPM in Anschläge pro Minute um?', 'Multipliziere den WPM-Wert mit fünf. 50 WPM entsprechen ungefähr 250 Anschlägen pro Minute.'],
    ['Zählen Umlaute als ein Zeichen?', 'Ja. Ä, ö, ü und ß sind jeweils ein Zeichen, auch wenn du für den Großbuchstaben die Umschalttaste brauchst. Umschreibungen wie ae oder ss gelten als Fehler.'],
    ['Welche Testdauer ist die richtige?', 'Eine Minute zeigt dein Spitzentempo, fünf oder zehn Minuten dein Dauertempo. Wähle für Vergleiche mit früheren Ergebnissen immer dieselbe Dauer.'],
    ['Werden meine Ergebnisse gespeichert?', 'Nur in deinem Browser auf diesem Gerät. Es gibt kein Konto und keine Anmeldung. Wenn du die Browserdaten löschst, ist auch der Verlauf weg.'],
    ['Funktioniert der Test mit einer Schweizer Tastatur?', 'Die Schweizer Tastatur ist ebenfalls QWERTZ, aber große Umlaute liegen dort nicht auf der Umschalttaste, und ein ß gibt es nicht. Die Texte enthalten beides, daher passt der Test am besten zur deutschen und österreichischen Tastatur.']
  ],
  cta: { eyebrow: 'Mehr Tempo gewünscht?', title: 'Zehnfingersystem lernen', text: '{lessons} Lektionen auf deiner eigenen Tastatur, angefangen mit der Grundreihe.', button: 'Zum Kurs' }
};
