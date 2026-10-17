/* content/typing-test/it.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Ý (/it/test-di-battitura/),
 * cho tooling/pages/typing-tests.mjs (cùng hình dạng với mẫu tiếng Anh). Đợt 2: `live: false`.
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
      h2: 'Come funziona il test di battitura online',
      html: `<p>Ricopi il testo mostrato sopra per la durata che hai scelto. Il cronometro parte solo al primo tasto, quindi puoi appoggiare le dita sulla riga centrale e leggere la prima frase con calma prima di cominciare. I caratteri giusti restano neutri, quelli sbagliati diventano rossi, e puoi tornare indietro per correggerli.</p><p>I testi sono brevi paragrafi in italiano corrente, con maiuscole, punteggiatura e lettere accentate. Nei test lunghi più paragrafi si susseguono in un ordine diverso ogni volta, così non finisci per scrivere a memoria.</p>`
    },
    {
      h2: 'Parole al minuto: cosa dice il numero',
      html: `<p>Come in ogni test di parole al minuto, la velocità si misura in PPM (in inglese WPM). Siccome le parole non sono tutte lunghe uguali, per convenzione una "parola" vale cinque caratteri, spazi e punteggiatura compresi. Il calcolo è quindi questo: caratteri inseriti, divisi per cinque, divisi per i minuti trascorsi. Il numero si aggiorna mentre scrivi e si ferma allo scadere del tempo.</p><p>Questa convenzione serve a confrontare un test con l'altro, ma non corrisponde esattamente al numero di parole italiane vere: l'italiano ha molte parole lunghe, eppure un testo pieno di parole brevi dà più o meno le stesse PPM, perché conta la quantità di caratteri, non di parole.</p>`
    },
    {
      h2: 'Le lettere accentate sulla tastiera italiana',
      html: `<p>La tastiera italiana standard ha un tasto proprio per <em>è</em>, <em>ò</em>, <em>à</em>, <em>ù</em> e <em>ì</em>, a destra della <em>P</em> e della <em>L</em>. La <em>é</em> di <em>perché</em>, <em>poiché</em> o <em>né</em> si ottiene con <em>Maiusc</em> + <em>è</em>. Non ci sono tasti morti: ogni lettera accentata si scrive con un solo tasto, o con un tasto più <em>Maiusc</em>.</p><p>Nel test una lettera accentata conta come un solo carattere, e scrivere <em>e'</em> al posto di <em>è</em> conta come errore. Lo sbaglio più frequente è confondere <em>è</em> ed <em>é</em>, che stanno sullo stesso tasto: vale la pena fermarsi un momento su quelle parole.</p><p>Un dettaglio pratico: la tastiera italiana non ha un tasto diretto per la <em>È</em> maiuscola, perciò nessuna frase dei testi comincia con <em>È</em>. I testi usano l'apostrofo dritto (il tasto accanto allo <em>0</em>) e le virgolette semplici. Il test funziona anche con altre tastiere: confronta solo i caratteri, qualunque sia il tasto che li produce.</p>`
    },
    {
      h2: 'Test di battitura di 1 minuto, 5 minuti o 10 minuti',
      html: `<p>I test brevi misurano la velocità di punta, quando resti concentrato dall'inizio alla fine; quelli lunghi misurano la resistenza e somigliano di più al lavoro vero, come una lunga email o un verbale, con un punteggio di solito un po' più basso. Se vuoi seguire i tuoi progressi, usa sempre la stessa durata.</p>`
        + `<div class="guide-table-wrap"><table class="wpm-table"><caption>Che cosa ti dice ogni durata</caption><thead><tr><th scope="col">Durata</th><th scope="col">A cosa serve</th></tr></thead><tbody>`
        + `<tr><th scope="row">15 o 30 secondi</th><td>Riscaldamento: scioglie le dita, ma una sola esitazione sposta molto il numero.</td></tr>`
        + ``
        + `<tr><th scope="row">Test battitura 1 minuto</th><td>Il tuo riferimento per la velocità di punta, e la durata più facile da ripetere ogni giorno.</td></tr>`
        + `<tr><th scope="row">2 o 3 minuti</th><td>Finisce lo slancio della partenza e vedi se la precisione regge anche senza.</td></tr>`
        + ``
        + `<tr><th scope="row">Test battitura 5 minuti</th><td>Misura la resistenza: guarda quanto scende il numero rispetto al test da un minuto.</td></tr>`
        + `<tr><th scope="row">Test battitura 10 minuti</th><td>Il più vicino a scrivere una lunga email; tienilo per quando il test da 5 minuti ti riesce regolare.</td></tr>`
        + `</tbody></table></div>`
    },
    {
      h2: 'Leggere la precisione e valutare il punteggio',
      html: `<p>La precisione è la percentuale di caratteri giusti tra tutti quelli presenti nella casella di scrittura. Un errore corretto con il tasto Backspace non conta più come errore, ma ti è costato tempo, e questo si vede nelle PPM. La costanza indica se il tuo ritmo resta stabile o se va a strappi.</p><p>Un buon punteggio dipende dal testo, dalla durata e da quanto hai dovuto correggere. Qualche PPM in meno con una precisione sopra il 95% vale più di un numero alto pieno di rosso. Invece di inseguire una cifra, usa il test per verificare una cosa sola: scrivi in modo più regolare, e con meno errori, rispetto alla settimana scorsa?</p>`
    },
    {
      h2: 'Test di battitura per principianti',
      html: `<p>Per il primo tentativo ti sconsiglio il test da 10 minuti che molti scelgono "per vedere il proprio livello vero". Scegli 1 minuto e cura soprattutto la <em>è</em> e la <em>é</em>: stanno sullo stesso tasto, e scrivere <em>perchè</em> invece di <em>perché</em> qui conta come errore. Preferisco che tu chiuda il primo minuto a 20 PPM quasi senza rosso piuttosto che a 40 con gli accenti sbagliati, perché quell'abitudine poi andrebbe disimparata.</p><ul><li>Prima di cominciare, controlla in un editor di testo che a destra della L esca la <em>ò</em>. Questa pagina non è un test della tastiera per scovare tasti guasti, ma un sistema impostato sul layout americano rovina il risultato.</li><li>Ripeti la stessa durata per qualche giorno e solo allora prova 5 minuti.</li></ul><p>Se cerchi ancora la <em>è</em> con gli occhi, il <a class="inline-link" href="{course}">corso di {lessons} lezioni</a> ti servirà più che ripetere il test.</p>`
    },
    {
      h2: 'Dopo il test: cosa allenare',
      html: `<ul><li>Impara la posizione di ogni dito sulla riga centrale (<em>a s d f</em> e <em>j k l ò</em>) e torna lì dopo ogni tasto.</li><li>Punta prima sulla precisione: la velocità viene dopo, mai il contrario.</li><li>Tieni gli occhi sullo schermo e non sulla tastiera, anche per le lettere accentate.</li><li>Allenati con sessioni brevi che riesci davvero a mantenere, un po' ogni giorno.</li><li>Accelera solo quando il movimento non richiede più di pensarci.</li></ul><p>Il <a class="inline-link" href="{course}">corso di dattilografia in {lessons} lezioni</a> mette questi passi in ordine, con esercizi di battitura sulla tua tastiera, dai due tasti con il segno in rilievo fino ai paragrafi interi, per imparare a scrivere con dieci dita.</p><p>Per un piano passo per passo, leggi <a class="inline-link" href="/it/scrivere-piu-veloce/">come scrivere più veloce sulla tastiera</a> italiana, tra accenti e apostrofi.</p>`
    }
  ],
  faqTitle: 'Domande frequenti',
  faq: [
    ['È un test WPM o un test parole al minuto?', 'Sono la stessa cosa: PPM, parole al minuto, è il nome italiano del WPM inglese. Una "parola" vale cinque caratteri, spazi compresi, quindi il numero si confronta con quello dei test in inglese.'],
    ['Questo test di velocità di battitura online è gratis?', 'Sì, e senza registrazione: si apre nel browser, non c’è niente da installare e il risultato compare appena scade il tempo.'],
    ['Come faccio a misurare la mia velocità di battitura?', 'Scegli una durata, fai clic nella casella di scrittura e ricopia il testo. Il cronometro parte al primo tasto e il risultato compare allo scadere del tempo.'],
    ['Le lettere accentate contano nel calcolo?', "Sì. Una lettera accentata come à, è o é conta come un carattere. Scrivere e' al posto di è, oppure è al posto di é, conta come errore."],
    ['Meglio un test di 1 minuto o di 10 minuti?', 'Un minuto misura la velocità di punta, dieci minuti la resistenza. Sono utili tutti e due; per seguire i progressi, ripeti sempre la stessa durata.'],
    ['I miei risultati vengono salvati?', "Sì, ma solo su questo dispositivo, nel tuo browser. Non viene inviato nulla altrove e non serve un account. Il grafico sotto il test mostra l'andamento delle tue PPM e della precisione."],
    ['Per un principiante, quale test di battitura conviene?', 'Quello da 1 minuto, ripetuto identico per qualche giorno. Se cerchi ancora i tasti con gli occhi, il test misura soprattutto quanto tempo passi a cercarli: parti dalla lezione 1 del corso.'],
    ['Va bene come test di battitura per bambini?', "Sì, con un adulto accanto, ma non c'è una modalità per bambini: i testi sono scritti per adulti. Meglio durate da 15 a 60 secondi, guardando la precisione prima delle PPM."]
  ],
  cta: { eyebrow: 'Vuoi un punteggio migliore?', title: 'Impara a scrivere con dieci dita', text: '{lessons} lezioni sul tuo layout di tastiera, a partire dalla riga centrale.', button: 'Vedi il corso' }
};
