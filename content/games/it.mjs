/* content/games/it.mjs — pagina dei giochi in italiano (tooling/pages/games.mjs). Le parole vengono da
 * data/words/it.js, la stessa banca del corso /it/ (QWERTY italiana: ò e à hanno un tasto proprio).
 * L'italiano non ha ancora una pagina di test: {test} ricade sul corso. */
export default {
  worlds: {"rain": "Giardino delle lucciole", "race": "Circuito al tramonto", "keys": "Stazione spaziale"},
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
    { h2: 'Giochi di dattilografia: scegli in base a cosa ti blocca oggi', html: `<p>I tre giochi usano le parole del corso di italiano, ma ognuno spinge su un punto diverso. Se esiti ancora a trovare la ò o la ù, apri <b>Caccia ai tasti</b>. Se le lettere singole ormai escono e quello che non va è chiudere una parola con l’accento o l’apostrofo senza fermarti, prova <b>Pioggia di parole</b>. Se scrivi parole intere ma il ritmo si spezza a metà riga, <b>Corsa fantasma</b>.</p>
<p>Una cosa da sapere prima di giocare: le parole dei giochi sono tutte minuscole e senza punteggiatura, a parte l’apostrofo dentro parole come «l'acqua» o «un'idea». Niente maiuscole, niente virgole, niente punto interrogativo. Sono ottimi per quello che fanno e deboli per tutto il resto, quindi non sostituiscono l’unità del corso su maiuscole e punteggiatura.</p>
<p>La mia opinione: un gioco funziona meglio dopo una lezione che al posto di una lezione. Dieci minuti di partita con un obiettivo chiaro, come «non guardare la à» o «non perdere la serie sulla fila in alto», valgono più di un’ora passata a battere un record. Un record si può alzare con trucchetti che poi non servono a scrivere una mail; una serie pulita no.</p>` },
    { h2: 'Pioggia di parole: accenti e apostrofi prima che tocchino terra', html: `<p>Scegli Facile, Normale o Difficile e premi Inizia. Scrivi una delle parole che cadono e premi Spazio o Invio per inviarla. Se corrisponde a una parola ancora sullo schermo, sparisce; se no, il campo si svuota. Ogni parola che arriva in fondo ti costa una vita, e con tre la partita finisce. Ogni otto parole eliminate sali di fase e tutto cade un po’ più in fretta.</p>
<h3>Accenti e apostrofi contano</h3>
<p>«Citta» non elimina «città». Il gioco confronta la parola intera, accento compreso, e la tastiera italiana ti aiuta: niente tasti morti, la à ha il suo tasto. Il punto delicato è la é di «perché» o «poiché», che si scrive con Maiusc più è; se ti scappa la è, la parola non va. Lo stesso vale per «po'»: si scrive con l’apostrofo dritto, il tasto accanto allo 0, e non con la ò.</p>
<h3>Cosa fare con i punti</h3>
<p>I punti dipendono dalla lunghezza della parola e dalla fase, e una lettera accentata vale una lettera come le altre. Se in Difficile le parole spariscono prima che tu riesca a leggerle, scendi a Normale. In Facile cadono solo parole corte: buono per scaldarsi, meno utile per allenare la é e gli apostrofi, che stanno quasi sempre in parole più lunghe.</p>` },
    { h2: 'Corsa fantasma: una sfida contro il tuo ritmo, senza avversari', html: `<p>Qui non gareggi contro nessuno. Il fantasma è un’auto che va a velocità costante: 20, 30, 40, 60 o 80 PPM, oppure «Il tuo record», che usa la tua migliore corsa salvata (30 PPM se non ne hai ancora una). Non ci sono altri giocatori collegati né classifiche, e il fantasma non ripete i tasti di una tua partita precedente: tiene solo un ritmo.</p>
<p>Premi «Inizia la corsa»; nessuno si muove finché non scrivi la prima lettera. Il testo è di circa 170 caratteri, fatto di parole del corso in minuscolo separate da spazi. La tua auto avanza con la parte corretta dell’inizio di quello che hai scritto: se all’inizio sbagli un accento, tutto quello che scrivi dopo non ti fa avanzare finché non lo correggi.</p>
<h3>Come scegliere il ritmo</h3>
<p>Metti il fantasma un po’ sotto quello che fai nel test, non sopra. Il bello è arrivare al traguardo senza cancellare all’impazzata. Quando lo batti tre volte di fila con margine, alzalo di un gradino. «Il tuo record» serve a mantenere il livello, ma se cambi ritmo a ogni partita non capisci cosa è migliorato.</p>` },
    { h2: 'Caccia ai tasti: le cinque accentate al loro posto', html: `<p>Un tasto si accende sulla tastiera dello schermo; premi lo stesso sulla tua senza guardare le mani. Hai 60 secondi. Ogni colpo giusto conta e ogni tasto sbagliato interrompe la serie, quindi alla fine guarda tutti e due i numeri: tanti colpi con serie corte vogliono dire che stai tirando a indovinare.</p>
<p>Il gioco riconosce il tasto dalla posizione fisica, non dalla lettera che scrive il tuo sistema. Se usi la tastiera italiana del Mac e sullo schermo vedi quella dei PC, la caccia ti insegnerà posizioni che non sono le tue: cambia la tastiera nelle impostazioni del gioco prima di cominciare.</p>
<h3>Quali tasti escono</h3>
<p>Solo le lettere del livello principale: dalla a alla z e le cinque accentate con tasto proprio, à, è, ì, ò e ù. La é no, perché sta sullo stesso tasto della è con Maiusc; per quella c’è Pioggia di parole. Fai caso al mignolo destro: tutte e cinque le accentate sono sue, e di solito è il primo a perdere la serie.</p>` },
    { h2: 'Dal gioco alla prossima lezione del corso', html: `<p>Prima di premere «Gioca ancora», rispondi a una domanda: cosa mi ha fatto perdere? Se sono stati gli accenti in Pioggia di parole, la prima unità del <a class="inline-link" href="{course}">corso di {lessons} lezioni</a> insegna tutte le accentate, dalla ò e la à alla ì. Se in Caccia ai tasti la serie si rompeva sempre sulla fila in alto, ripeti le lezioni della prima unità dalla Q alla P. Se in Corsa fantasma arrivavi tardi perché correggevi troppo, le unità Ritmo e accuratezza e Precisione lavorano proprio su questo, in testo continuo.</p>
<p>I numeri dei giochi non si confrontano tra loro né con il <a class="inline-link" href="{test}">test di battitura</a>: una partita di parole corte che cadono e una corsa di 170 caratteri sono compiti diversi, e il test ha maiuscole e punteggiatura che qui non ci sono. I tuoi record restano salvati solo in questo browser.</p>
<p>Un appunto utile sta in una riga: «perdo la ù quando arrivo dalla p», «rallento sulle parole con l’apostrofo». Scrivilo, apri la lezione giusta e lascia il gioco alla fine della sessione.</p>` }
  ],
  faqTitle: 'Domande frequenti',
  faq: [
    ['Posso giocare contro altre persone?', 'Non ancora. Corsa fantasma è contro un fantasma che tiene la velocità che scegli, o il tuo stesso record. Non ci sono altri giocatori né classifiche.'],
    ['Dove vengono salvati i miei record?', 'Solo in questo browser, su questo dispositivo. Nessun account, e niente viene inviato da nessuna parte.'],
    ['Posso giocare dal telefono?', 'Pioggia di parole e Corsa fantasma funzionano con la tastiera del telefono. Caccia ai tasti ha bisogno di una tastiera vera, perché insegna dove sono i tasti.'],
    ['Perché una parola giusta non è sparita?', 'Deve corrispondere esattamente prima che tu prema Spazio. Controlla se manca un accento o una lettera, o se è scappata una maiuscola.'],
    ['Nei giochi posso esercitarmi con maiuscole e punteggiatura?', 'No. Le parole dei giochi sono minuscole e senza punteggiatura; l’unico segno che compare è l’apostrofo, in parole come «l\'acqua» o «po\'». Per maiuscole, virgole e simboli usa le lezioni della terza unità del corso.'],
    ['I giochi funzionano con la tastiera italiana del Mac?', 'Pioggia di parole e Corsa fantasma confrontano il testo, quindi vanno bene con qualsiasi tastiera che scriva le accentate. Caccia ai tasti va per posizione: scegli la tastiera del Mac nelle impostazioni del gioco, altrimenti il tasto acceso non corrisponde a quello che premi.']
  ],
  cta: { eyebrow: 'Vuoi giocare meglio?', title: 'Impara a scrivere a dieci dita', text: '{lessons} lezioni sulla tua tastiera, a partire dalla fila di base.', button: 'Vedi il corso' }
};
