/* tro-choi/text/it.mjs — pagina dei giochi in italiano (scripts/build-game-pages.mjs). Le parole vengono da
 * data/words/it.js, la stessa banca del corso /it/ (QWERTY italiana: ò e à hanno un tasto proprio).
 * L'italiano non ha ancora una pagina di test: {test} ricade sul corso. */
export default {
  live: false,
  slug: 'giochi-di-dattilografia',
  title: 'Giochi di dattilografia gratis sulla tastiera | TypingEase',
  description: 'Tre giochi di dattilografia gratis: Pioggia di parole, Corsa fantasma e Caccia ai tasti. Esercitati sulla tua vera tastiera, nel browser e senza account.',
  breadcrumbAria: 'Percorso di navigazione',
  homeCrumb: 'Home',
  crumb: 'Giochi di dattilografia',
  eyebrow: 'Pratica che sembra un gioco',
  h1: 'Giochi di dattilografia',
  intro: 'Tre giochi brevi da fare tra una lezione e l’altra: elimina le parole che cadono, gareggia contro il tuo stesso ritmo e caccia i tasti su una tastiera a schermo. I tuoi record restano su questo dispositivo.',
  tabsAria: 'Scegli un gioco',
  locale: 'it-IT',
  howAria: 'Come si gioca',
  how: {
    rain: ['Le parole cadono dall’alto.', 'Scrivi la parola esattamente, accenti compresi.', 'Premi Spazio per eliminarla. Se ne perdi tre, è finita.'],
    race: ['Scegli la velocità del fantasma.', 'Scrivi il testo dalla prima lettera.', 'Arriva alla bandiera prima del fantasma.'],
    keys: ['Un tasto si accende sulla tastiera.', 'Guarda lo schermo, non le mani, e premilo.', 'Colpiscine il più possibile in 60 secondi.']
  },
  modes: {
    rain: ['Pioggia di parole', 'Scrivi la parola che cade e premi Spazio per eliminarla.'],
    race: ['Corsa fantasma', 'Finisci il testo prima del fantasma.'],
    keys: ['Caccia ai tasti', 'Premi il tasto acceso, più volte che puoi in 60 secondi.']
  },
  rain: {
    difficulty: 'Livello', easy: 'Facile', normal: 'Normale', hard: 'Difficile',
    score: 'Punti', level: 'Fase', lives: 'Vite', best: 'Record',
    start: 'Inizia', placeholder: 'Scrivi una parola che cade, poi Spazio',
    hint: 'Sulla tastiera italiana ò e à hanno un tasto proprio: scrivile direttamente. Se tre parole arrivano in fondo, la partita è finita.'
  },
  race: {
    pace: 'Fantasma', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} PPM`,
    start: 'Inizia la corsa', you: 'Tu', ghost: 'Fantasma', placeholder: 'Scrivi il testo qui sopra, dalla prima lettera'
  },
  keys: {
    start: 'Inizia la caccia', time: 'Secondi', hits: 'Colpi', streak: 'Serie', best: 'Record',
    hint: 'Occhi sullo schermo, non sulle mani. I tasti vengono letti per posizione fisica, quindi va bene qualsiasi layout di sistema.'
  },
  runtime: {
    over: 'Partita finita', again: 'Gioca ancora', newBest: 'Nuovo record su questo dispositivo!',
    rainResult: '{score} punti · {words} parole eliminate · {wpm} PPM · {accuracy}% a segno',
    raceReady: 'Il fantasma va a {wpm} PPM. Premi «Inizia la corsa», poi scrivi la prima lettera per partire.',
    raceGo: 'Via!', raceWin: 'Sei arrivato primo!', raceLose: 'Stavolta ha vinto il fantasma.',
    racePaused: 'Fermo. Premi «Inizia la corsa» per ripartire.',
    raceResult: '{seconds} secondi · {wpm} PPM · {accuracy}% di precisione · fantasma {ghost} PPM',
    paceBest: 'Il tuo record ({wpm} PPM)',
    keysResult: '{hits} colpi · serie più lunga {streak} · {accuracy}% di precisione'
  },
  sections: [
    { h2: 'Tre giochi, una sola abilità', html: '<p>Ogni gioco allena una parte della dattilografia a dieci dita. <b>Caccia ai tasti</b> allena dove si trova ogni tasto: il tasto acceso ti dice quale dito si muove, senza guardare in basso. <b>Pioggia di parole</b> allena a scrivere parole intere sotto pressione. <b>Corsa fantasma</b> allena un ritmo regolare su tutto un testo, contro un fantasma alla velocità che scegli tu.</p>' },
    { h2: 'Sulla tua tastiera', html: '<p>La tastiera a schermo di Caccia ai tasti è quella del corso, la QWERTY italiana con ò e à sulla fila di base, e i tasti sono riconosciuti per posizione fisica, non per il carattere che scrive il tuo sistema. Pioggia di parole e Corsa fantasma usano le stesse parole del <a class="inline-link" href="{course}">corso di {lessons} lezioni</a>.</p>' },
    { h2: 'Come trarne profitto', html: '<ul><li>Gioca dopo una lezione; bastano cinque-dieci minuti.</li><li>Scegli un livello in cui azzecchi quasi tutte le parole, e scendi se sbagli spesso.</li><li>In Corsa fantasma, metti il fantasma un po’ sotto la tua velocità reale e alzalo col tempo.</li><li>Per una misura vera della velocità, fai le <a class="inline-link" href="{test}">prove a tempo del corso</a>, non un gioco.</li></ul>' }
  ],
  faqTitle: 'Domande frequenti',
  faq: [
    ['Posso giocare contro altre persone?', 'Non ancora. Corsa fantasma è contro un fantasma che tiene la velocità che scegli, o il tuo stesso record. Non ci sono altri giocatori né classifiche.'],
    ['Dove vengono salvati i miei record?', 'Solo in questo browser, su questo dispositivo. Nessun account, e niente viene inviato da nessuna parte.'],
    ['Posso giocare dal telefono?', 'Pioggia di parole e Corsa fantasma funzionano con la tastiera del telefono. Caccia ai tasti ha bisogno di una tastiera vera, perché insegna dove sono i tasti.'],
    ['Perché una parola giusta non è sparita?', 'Deve corrispondere esattamente prima che tu prema Spazio. Controlla se manca un accento o una lettera, o se è scappata una maiuscola.']
  ],
  cta: { eyebrow: 'Vuoi giocare meglio?', title: 'Impara a scrivere a dieci dita', text: '{lessons} lezioni sulla tua tastiera, a partire dalla fila di base.', button: 'Vedi il corso' }
};
