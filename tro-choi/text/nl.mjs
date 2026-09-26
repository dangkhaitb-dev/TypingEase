/* tro-choi/text/nl.mjs — Nederlandse pagina met typespelletjes (scripts/build-game-pages.mjs). De
 * woorden komen uit data/words/nl.js, dezelfde woordenlijst als de cursus op de Nederlandse
 * indeling (198, QWERTY). é typ je met de dode toets ´, ë ï ö ü met de dode toets ¨. */
export default {
  live: false,
  slug: 'typespelletjes',
  title: 'Gratis typespelletjes op je eigen toetsenbord | TypingEase',
  description: 'Drie gratis typespelletjes: Woordregen, Spookrace en Toetsenjacht. Oefen blind typen op je eigen toetsenbordindeling in de browser, zonder account.',
  breadcrumbAria: 'Kruimelpad',
  homeCrumb: 'Startpagina',
  crumb: 'Typespelletjes',
  eyebrow: 'Oefenen dat voelt als spelen',
  h1: 'Typespelletjes',
  intro: 'Drie korte spelletjes voor tussen de lessen door: vallende woorden wegtypen, racen tegen je eigen tempo en toetsen zoeken op een toetsenbord op het scherm. Je beste scores blijven op dit apparaat.',
  tabsAria: 'Kies een spel',
  locale: 'nl-NL',
  howAria: 'Zo speel je',
  how: {
    rain: ['Woorden vallen van boven naar beneden.', 'Typ het woord precies zoals het staat.', 'Druk op Spatie om het weg te halen. Mis je er drie, dan is het afgelopen.'],
    race: ['Kies een snelheid voor de tempoauto.', 'Typ de tekst vanaf de eerste letter.', 'Haal de vlag voordat de tempoauto er is.'],
    keys: ['Een toets licht op op het toetsenbord.', 'Houd je ogen op het scherm en druk hem in.', 'Raak er zoveel mogelijk in 60 seconden.']
  },
  modes: {
    rain: ['Woordregen', 'Typ het vallende woord en druk op Spatie om het weg te halen.'],
    race: ['Spookrace', 'Typ de tekst af voordat de tempoauto dat doet.'],
    keys: ['Toetsenjacht', 'Raak de oplichtende toets, zo vaak als je kunt in 60 seconden.']
  },
  rain: {
    difficulty: 'Niveau', easy: 'Makkelijk', normal: 'Normaal', hard: 'Moeilijk',
    score: 'Score', level: 'Ronde', lives: 'Levens', best: 'Beste',
    start: 'Start', placeholder: 'Typ een vallend woord, dan Spatie',
    hint: 'é typ je met de dode toets ´ en daarna e, ë met de dode toets ¨ en daarna e. Laat je drie woorden de bodem raken, dan is het spel voorbij.'
  },
  race: {
    pace: 'Tempoauto', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Start de race', you: 'Jij', ghost: 'Tempo', placeholder: 'Typ de tekst hierboven, vanaf de eerste letter'
  },
  keys: {
    start: 'Start de jacht', time: 'Seconden', hits: 'Raak', streak: 'Reeks', best: 'Beste',
    hint: 'Ogen op het scherm, niet op je handen. Toetsen worden herkend aan hun plek, dus elke systeemindeling werkt.'
  },
  runtime: {
    over: 'Afgelopen', again: 'Nog een keer', newBest: 'Nieuwe beste score op dit apparaat',
    rainResult: '{score} punten · {words} woorden weggetypt · {wpm} WPM · {accuracy}% raak',
    raceReady: 'De tempoauto rijdt {wpm} WPM. Druk op "Start de race" en typ de eerste letter om te beginnen.',
    raceGo: 'Start!', raceWin: 'Jij was als eerste binnen.', raceLose: 'De tempoauto was deze keer sneller.',
    racePaused: 'Gestopt. Druk op "Start de race" om opnieuw te beginnen.',
    raceResult: '{seconds} seconden · {wpm} WPM · {accuracy}% nauwkeurig · tempoauto {ghost} WPM',
    paceBest: 'Jouw beste ({wpm} WPM)',
    keysResult: '{hits} keer raak · langste reeks {streak} · {accuracy}% nauwkeurig'
  },
  sections: [
    { h2: 'Drie spelletjes, één vaardigheid', html: '<p>Elk spel traint één deel van blind typen. <b>Toetsenjacht</b> oefent waar elke toets zit: de oplichtende toets vertelt welke vinger beweegt, zonder omlaag te kijken. <b>Woordregen</b> oefent hele woorden typen onder tijdsdruk. <b>Spookrace</b> oefent een gelijkmatig ritme over een hele tekst, tegen een tempoauto op de snelheid die jij kiest.</p>' },
    { h2: 'Op je eigen toetsenbordindeling', html: '<p>Het toetsenbord op het scherm bij Toetsenjacht is de Nederlandse indeling (QWERTY) van de cursus, en toetsen worden herkend aan hun fysieke plek, niet aan het teken dat je systeem typt. Woordregen en Spookrace gebruiken dezelfde woorden als de <a class="inline-link" href="{course}">cursus van {lessons} lessen</a>, met hier en daar een é of ë via de dode toetsen.</p>' },
    { h2: 'Zo haal je er iets uit', html: '<ul><li>Speel na een les; vijf tot tien minuten is genoeg.</li><li>Kies een niveau waarop je de meeste woorden goed hebt, en ga een stap terug als je steeds mist.</li><li>Zet de tempoauto in Spookrace iets onder je echte snelheid en verhoog hem geleidelijk.</li><li>Wil je je snelheid echt meten, doe dan de getimede tests van de <a class="inline-link" href="{test}">cursus</a>, niet een spel.</li></ul>' }
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    ['Kan ik tegen andere mensen spelen?', 'Nog niet. Spookrace is tegen een tempoauto die de snelheid aanhoudt die je kiest, of je eigen beste. Er zijn geen andere spelers en er is geen ranglijst.'],
    ['Waar worden mijn beste scores bewaard?', 'Alleen in deze browser op dit apparaat. Geen account, en er wordt niets verstuurd.'],
    ['Kan ik op een telefoon spelen?', 'Woordregen en Spookrace werken met het toetsenbord van een telefoon. Toetsenjacht heeft een echt toetsenbord nodig, omdat het leert waar de toetsen zitten.'],
    ['Waarom verdween een goed woord niet?', 'Het moet precies kloppen voordat je op Spatie drukt. Let op een verdwaalde hoofdletter, een ontbrekende letter of een accent: na de dode toets ´ of ¨ moet je nog de klinker typen.']
  ],
  cta: { eyebrow: 'Wil je beter spelen?', title: 'Leer blind typen', text: '{lessons} lessen op je eigen toetsenbordindeling, te beginnen met de thuisrij.', button: 'Bekijk de cursus' }
};
