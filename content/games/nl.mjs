/* content/games/nl.mjs — Nederlandse pagina met typespelletjes (tooling/pages/games.mjs). De
 * woorden komen uit data/words/nl.js, dezelfde woordenlijst als de cursus op de Nederlandse
 * indeling (198, QWERTY). é typ je met de dode toets ´, ë ï ö ü met de dode toets ¨. */
export default {
  worlds: {"rain": "Vuurvliegjestuin", "race": "Circuit bij zonsondergang", "keys": "Ruimtestation"},
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
    { h2: 'Typespelletjes: kies het spel bij wat je nu lastig vindt', html: `<p>De drie spelletjes oefenen niet hetzelfde. <b>Toetsenjacht</b> vraagt alleen dat je een toets vindt: de juiste keuze als je de letters onderaan nog zoekt. <b>Woordregen</b> vraagt een heel woord, met trema en accent, voordat het de bodem raakt: handig als de letters zitten maar woorden haperen. <b>Spookrace</b> vraagt dat je een hele regel volhoudt: pas zinvol als woorden lukken, maar je ritme na een paar seconden breekt.</p>
<p>Mijn advies gaat tegen je eerste ingeving in: begin niet met de race. Zolang je voor een ë of een cijfer nog naar het toetsenbord kijkt, leert de race je vooral haasten met je ogen op je handen. Kies het spel dat bij je probleem past, ook als het minder spannend lijkt, en bewaar de race voor later.</p>
<p>Geen van de drie zegt of je „goed” typt. Ze laten een plek zien waar het hapert: een toets die je mist, een woord dat je halverwege laat vallen, een fout die de auto stilzet. Die plek neem je mee naar de volgende les, niet de score.</p>` },
    { h2: 'Woordregen: trema’s, accenten en de apostrof', html: `<p>De woorden komen uit dezelfde woordenlijst als de cursus en staan allemaal in kleine letters. Typ een vallend woord en bevestig met Spatie of Enter. Het moet precies kloppen: „ideeen” haalt „ideeën” niet weg, „cafe” niet „café”. Raken drie woorden de bodem, dan is het spel afgelopen.</p>
<h3>Makkelijk, Normaal, Moeilijk</h3>
<p>Op Makkelijk hebben de woorden hoogstens vijf letters, op Normaal hoogstens acht, op Moeilijk valt die grens weg. Na elke acht weggewerkte woorden telt de ronde één op en vallen de woorden sneller. Een spel dat rustig begint, wordt dus vanzelf lastiger.</p>
<h3>Waar Nederlandse woorden tijd kosten</h3>
<p>Woorden als „patiënt”, „financiële” en „ideeën” vragen een dode toets: eerst het trema, dan de klinker, twee aanslagen terwijl het woord valt. Daarnaast zitten er meervouden met apostrof in de lijst, zoals „auto's”, „foto's” en „menu's”. Mis je vooral díe woorden, dan is dat geen tempoprobleem maar een beweging die nog niet automatisch gaat. Punten hangen af van woordlengte en ronde; vergelijk ze alleen tussen spellen op hetzelfde niveau.</p>` },
    { h2: 'Spookrace: een race tegen je eigen tempo', html: `<p>Voor de duidelijkheid: er is geen andere speler. De tempoauto rijdt gelijkmatig, op de snelheid die jij kiest, tussen 20 en 80 WPM, of op je beste racetijd die in deze browser is opgeslagen. Zonder eerdere race begint die optie bij 30 WPM; een heel laag record wordt opgehoogd naar 15 WPM. Er is geen ranglijst en geen online race. De uitdaging ben jij tegen een tempo dat je zelf instelt.</p>
<p>Druk op „Start de race”; de race begint pas bij je eerste letter, dus je hebt tijd om je handen op de thuisrij te leggen. De tekst bestaat uit woorden uit de cursus, die je op volgorde overtypt, met alle spaties.</p>
<h3>Eén fout zet de auto stil</h3>
<p>Je auto rijdt tot de eerste fout en niet verder. Typ je „bij” waar „bijna” moest staan en ga je meteen door, dan telt alles daarna pas als je terug bent bij de fout. In Nederlandse teksten blijft de auto vaak hangen op een ij die als ei uit je vingers komt, of op een vergeten trema. Kies een tempo dat ruimte laat om terug te gaan. Verlies je elke keer, zet het lager en laat het een paar races gelijk, zodat je kunt vergelijken.</p>` },
    { h2: 'Toetsenjacht: de letters van de Nederlandse indeling', html: `<p>Op het schermtoetsenbord licht een toets op; druk dezelfde toets in op je eigen toetsenbord. Je hebt 60 seconden. Elke treffer telt, een verkeerde toets breekt je reeks. Kijk naar allebei: veel treffers met korte reeksen betekent vaak dat je gokt in plaats van weet.</p>
<p>Het spel laat alle toetsen oplichten die in de basislaag een letter dragen. Op de Nederlandse indeling zijn dat de 26 letters, zonder aparte toetsen voor é of ë; accenten maak je met dode toetsen, en die oefen je in Woordregen. Toetsenjacht is dus puur een spel om letterposities, en precies daarom handig voor de rij onderaan: z, x, c, v, b, n en m, waar veel mensen die met twee vingers typen nog het vaakst kijken.</p>
<p>Het spel leest de fysieke plek van de toets, volgens het getoonde toetsenbord. Het controleert niet welke vinger je gebruikt of of je kijkt; dat moet je zelf in de gaten houden. Je hebt een echt toetsenbord nodig; op een telefoon werkt Toetsenjacht niet.</p>` },
    { h2: 'Van spelresultaat naar de volgende les', html: `<p>Neem voor je speelt één vraag mee: zoek ik de m nog? Vergeet ik het trema in ideeën? Blijft mijn auto steeds op ij hangen? Beantwoord die na het spel, voordat je op „Nog een keer” drukt. Een notitie als „ij en ei door elkaar” wordt een oefening. „Moet beter” wordt niets.</p>
<p>Is het een toets die je ontglipt, ga dan terug naar unit 1 van de <a class="inline-link" href="{course}">cursus van {lessons} lessen</a>; daar hebben de accenten en het trema eigen lessen. Gaat het om ei en ij, apostroffen of bedragen met een komma, dan is de unit Precisie ervoor gemaakt. Wil je je echte typsnelheid weten, doe dan de <a class="inline-link" href="{test}">typetest</a>: spelpunten en een testresultaat meten verschillende dingen, vergelijk ze niet.</p>
<p>Je beste scores blijven in deze browser, per taal apart. Stop zodra je alleen nog naar de animatie zit te kijken; dat is het goede moment voor een les.</p>` }
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    ['Kan ik tegen andere mensen spelen?', 'Nee. Spookrace is tegen een tempoauto die de snelheid aanhoudt die je kiest, of je eigen beste. Er zijn geen andere spelers en er is geen ranglijst.'],
    ['Waar worden mijn beste scores bewaard?', 'Alleen in deze browser op dit apparaat. Geen account, en er wordt niets verstuurd.'],
    ['Kan ik op een telefoon spelen?', 'Woordregen en Spookrace werken met het toetsenbord van een telefoon. Toetsenjacht heeft een echt toetsenbord nodig, omdat het leert waar de toetsen zitten.'],
    ['Waarom verdween een goed woord niet?', 'Het moet precies kloppen voordat je op Spatie drukt. Let op een verdwaalde hoofdletter, een ontbrekende letter of een accent: na de dode toets ´ of ¨ moet je nog de klinker typen.'],
    ['Waarom licht er in Toetsenjacht nooit een é of ë op?', 'Toetsenjacht laat alleen toetsen oplichten die zelf een letter dragen. Op de Nederlandse indeling hebben é en ë geen eigen toets; je maakt ze met een dode toets en daarna de klinker. Die combinatie oefen je in Woordregen en in de accentlessen van unit 1.'],
    ['Welk spel past bij een beginner?', 'Toetsenjacht zolang je toetsen nog zoekt, daarna Woordregen op Makkelijk. Bewaar Spookrace voor later, met een laag, vast tempo. Weet je nog niet welke vinger waarheen gaat, begin dan met les 1 van de cursus en kom daarna terug.']
  ],
  cta: { eyebrow: 'Wil je beter spelen?', title: 'Leer blind typen', text: '{lessons} lessen op je eigen toetsenbordindeling, te beginnen met de thuisrij.', button: 'Bekijk de cursus' }
};
