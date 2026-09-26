/* kiem-tra-toc-do-go/text/it.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Ý (/it/test-di-battitura/),
 * cho scripts/build-test-pages.mjs (cùng hình dạng với mẫu tiếng Anh). Đợt 2: `live: false`.
 * `{lessons}` = số bài của khoá chính tiếng Ý, `{course}` = URL trang lộ trình của khoá đó.
 */
export default {
  slug: 'test-di-battitura',
  title: 'Test di battitura: velocità in PPM e precisione | TypingEase',
  description: 'Test di battitura gratis nel browser: scrivi per 1, 5 o 10 minuti e vedi parole al minuto, precisione ed errori. Senza registrazione.',
  breadcrumbAria: 'Percorso di navigazione',
  homeCrumb: 'Home',
  crumb: 'Test di battitura',
  eyebrow: 'Test di battitura gratis',
  h1: 'Test di velocità di battitura',
  intro: 'Scegli una durata, da 15 secondi a 10 minuti, e ricopia il testo per vedere le tue parole al minuto, la precisione e gli errori. Il cronometro parte al primo tasto, non da un pulsante.',
  durationAria: 'Durata del test',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Risultato in tempo reale',
  stats: { time: 'Tempo', wpm: 'PPM', accuracy: 'Precisione', errors: 'Errori', consistency: 'Costanza' },
  promptAria: 'Il testo da scrivere',
  inputLabel: 'Comincia a scrivere qui',
  soundTitle: 'Piccolo clic a ogni tasto (Alt+S)',
  soundLabel: 'Clic dei tasti',
  placeholder: 'Fai clic qui e comincia a scrivere...',
  restart: 'Ricomincia',
  wpmNote: 'Le PPM contano i caratteri inseriti, divisi per cinque, rispetto ai minuti passati a scrivere.',
  result: { title: 'Il tuo risultato' },
  progress: {
    eyebrow: 'Diario di allenamento', title: 'I tuoi progressi', rangeAria: 'Periodo', days: n => `${n} giorni`,
    metricAria: 'Misura mostrata', note: 'I risultati possono venire da test di durata diversa.',
    summaryAria: 'Riepilogo dei progressi', avgWpm: 'PPM medie', bestWpm: 'PPM migliori',
    avgAccuracy: 'Precisione media', count: 'Test fatti', chartAria: 'Grafico dei progressi'
  },
  sections: [
    {
      h2: 'Come funziona il test di battitura',
      html: `<p>Ricopi il testo mostrato sopra per la durata che hai scelto. Il cronometro parte solo al primo tasto, quindi puoi appoggiare le dita sulla riga centrale e leggere la prima frase con calma prima di cominciare. I caratteri giusti restano neutri, quelli sbagliati diventano rossi, e puoi tornare indietro per correggerli.</p><p>I testi sono brevi paragrafi in italiano corrente, con maiuscole, punteggiatura e lettere accentate. Nei test lunghi più paragrafi si susseguono in un ordine diverso ogni volta, così non finisci per scrivere a memoria.</p>`
    },
    {
      h2: 'Parole al minuto: cosa dice il numero',
      html: `<p>La velocità si misura in parole al minuto (PPM, in inglese WPM). Siccome le parole non sono tutte lunghe uguali, per convenzione una "parola" vale cinque caratteri, spazi e punteggiatura compresi. Il calcolo quindi è: caratteri inseriti, divisi per cinque, divisi per i minuti trascorsi. Il numero si aggiorna mentre scrivi e si ferma allo scadere del tempo.</p><p>Questa convenzione serve a confrontare un test con l'altro, ma non corrisponde esattamente al numero di parole italiane vere: l'italiano ha molte parole lunghe, eppure un testo pieno di parole brevi dà più o meno le stesse PPM, perché conta la quantità di caratteri, non di parole.</p>`
    },
    {
      h2: 'Le lettere accentate sulla tastiera italiana',
      html: `<p>La tastiera italiana standard ha un tasto proprio per <em>è</em>, <em>ò</em>, <em>à</em>, <em>ù</em> e <em>ì</em>, a destra della <em>P</em> e della <em>L</em>. La <em>é</em> di <em>perché</em>, <em>poiché</em> o <em>né</em> si ottiene con <em>Maiusc</em> + <em>è</em>. Non ci sono tasti morti: ogni lettera accentata si scrive con un solo tasto, o con un tasto più <em>Maiusc</em>.</p><p>Nel test una lettera accentata conta come un solo carattere, e scrivere <em>e'</em> al posto di <em>è</em> conta come errore. Lo sbaglio più frequente è confondere <em>è</em> ed <em>é</em>, che stanno sullo stesso tasto: vale la pena fermarsi un momento su quelle parole.</p><p>Un dettaglio pratico: la tastiera italiana non ha un tasto diretto per la <em>È</em> maiuscola, perciò nessuna frase dei testi comincia con <em>È</em>. I testi usano l'apostrofo dritto (il tasto accanto allo <em>0</em>) e le virgolette semplici. Il test funziona anche con altre tastiere: confronta solo i caratteri, qualunque sia il tasto che li produce.</p>`
    },
    {
      h2: '1 minuto, 5 o 10 minuti: quale durata scegliere',
      html: `<p>Un test di 1 minuto, o anche di 15 o 30 secondi, misura soprattutto la velocità di punta: resti concentrato dall'inizio alla fine e una sola esitazione pesa molto sul risultato. È comodo per una prova veloce o per controllare un gesto preciso, per esempio un accento che ti rallenta.</p><p>Un test di 5 o 10 minuti misura la resistenza, e somiglia di più al lavoro vero, come scrivere una lunga email o un verbale. La stanchezza e i piccoli cali di attenzione si fanno sentire, e il punteggio di solito è un po' più basso che su un minuto. Se vuoi seguire i tuoi progressi, usa sempre la stessa durata.</p>`
    },
    {
      h2: 'Leggere la precisione e valutare il punteggio',
      html: `<p>La precisione è la quota di caratteri giusti tra tutti quelli presenti nella casella di scrittura. Un errore corretto con il tasto Backspace non conta più come errore, ma ti è costato tempo, e questo si vede nelle PPM. La costanza indica se il tuo ritmo resta stabile o se va a strappi.</p><p>Un buon punteggio dipende dal testo, dalla durata e da quanto hai dovuto correggere. Qualche PPM in meno con una precisione sopra il 95% vale più di un numero alto pieno di rosso. Invece di inseguire una cifra, usa il test per verificare una cosa sola: scrivi in modo più regolare, e con meno errori, rispetto alla settimana scorsa?</p>`
    },
    {
      h2: 'Come scrivere più velocemente',
      html: `<ul><li>Impara la posizione di ogni dito sulla riga centrale (<em>a s d f</em> e <em>j k l ò</em>) e torna lì dopo ogni tasto.</li><li>Cerca prima la precisione: la velocità segue la precisione, mai il contrario.</li><li>Tieni gli occhi sullo schermo e non sulla tastiera, anche per le lettere accentate.</li><li>Allenati con sessioni brevi che riesci davvero a mantenere, un po' ogni giorno.</li><li>Accelera solo quando il movimento non richiede più di pensarci.</li></ul><p>Il <a class="inline-link" href="{course}">corso di dattilografia in {lessons} lezioni</a> mette questi passi in ordine, sulla tua tastiera, dai due tasti con il segno in rilievo fino ai paragrafi interi, per imparare a scrivere con dieci dita.</p>`
    }
  ],
  faqTitle: 'Domande frequenti',
  faq: [
    ['Cosa vuol dire PPM?', 'Parole al minuto: il numero di "parole" da cinque caratteri, spazi compresi, che scrivi in un minuto. È la stessa misura che in inglese si chiama WPM.'],
    ['Come faccio a misurare la mia velocità di battitura?', 'Scegli una durata, fai clic nella casella di scrittura e ricopia il testo. Il cronometro parte al primo tasto e il risultato compare allo scadere del tempo.'],
    ['Le lettere accentate contano nel calcolo?', "Sì. Una lettera accentata come à, è o é conta come un carattere. Scrivere e' al posto di è, oppure è al posto di é, conta come errore."],
    ['Meglio un test di 1 minuto o di 10 minuti?', 'Un minuto misura la velocità di punta, dieci minuti la resistenza. Sono utili tutti e due; per seguire i progressi, ripeti sempre la stessa durata.'],
    ['I miei risultati vengono salvati?', "Sì, ma solo su questo dispositivo, nel tuo browser. Non viene inviato niente altrove e non serve un account. Il grafico sotto il test mostra l'andamento delle tue PPM e della precisione."]
  ],
  cta: { eyebrow: 'Vuoi un punteggio migliore?', title: 'Impara a scrivere con dieci dita', text: '{lessons} lezioni sul tuo layout di tastiera, a partire dalla riga centrale.', button: 'Vedi il corso' }
};
