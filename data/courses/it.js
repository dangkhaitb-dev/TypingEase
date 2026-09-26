/* data/courses/it.js — khoá học tiếng Ý: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/it/*.json khi
 * trình duyệt nhận được. Đẩy nó ra runtime là bắt mọi khách tải một bảng chữ chỉ để dựng lại thứ
 * đã có trong file bài học.
 *
 * ĐÂY LÀ TOÀN BỘ PHẦN PHẢI DỊCH cho một ngôn ngữ Tier 2. Thứ tự dạy phím thì suy từ bố cục bàn
 * phím (scripts/build-course.js), kho từ nằm ở data/words/it.js, còn chỗ này là lời dạy —
 * khoảng 60 mẫu câu có chỗ trống. Ngôn ngữ mới = ba file này cộng một bảng UI.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` là chỗ trống generator điền vào. Mẫu nào
 * không có chỗ trống thì là câu cố định — vẫn để ở đây, vì nó vẫn phải dịch.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Xưng hô "tu" từ đầu tới
 * cuối. Không tính từ quảng cáo, không dấu chấm than.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.it = {
  lang: 'it',
  name: 'Italiano',

  // Bố cục 194 — QWERTY Ý. Ô Semicolon in ra `ò` và ô Quote in ra `à`: hai nguyên âm có dấu
  // nằm ngay hàng cơ sở dưới ngón út phải. `ò` tới ở bài 4, `à` ở u2-l08 cùng dấu chấm và dấu
  // phẩy. Ba ô còn lại của tiếng Ý (`è é` ở BracketLeft, `ì` ở Equal, `ù` ở Backslash) bản kế
  // hoạch KHÔNG dạy — xem ghi chú ở data/words/it.js.
  keyboardId: 194,

  // Kho riêng, cùng lý do như mọi khoá khác: mã bài trùng nhau giữa các ngôn ngữ, dùng chung
  // khoá là hai giáo trình ghi đè lên nhau.
  progressKey: 'typingease-progress-it-v1',
  badgesKey: 'typingease-badges-it-v1',

  // Hàng số của bố cục Ý in ra chữ số khi KHÔNG giữ Shift (khác AZERTY), nên bài hàng số chỉ
  // dạy một tầng.
  digitsAreShifted: false,

  // Chữ cái nào được coi là "phím chữ" khi dựng bài luyện ngón.
  //
  // CỐ Ý KHÔNG CÓ `ò` VÀ `à`, dù chúng là chữ thật và có phím riêng. Lý do nằm ở màn
  // `shiftpairs` của bài Shift: nó lấy mọi ký tự khớp regex này rồi dựng cặp `Aa Ss Dd`. Trên
  // bố cục Ý, Shift + ò ra `ç` và Shift + à ra `°` — nên `Òò` và `Àà` là hai dòng không ai gõ
  // nổi bằng Shift. Đây là chỗ tiếng Ý khác tiếng Tây Ban Nha: `Ñ` nằm thật ở tầng Shift của ô
  // Semicolon, còn `Ò` thì không.
  // Giá phải trả: sau bài 4 thì `ò` (và sau u2-l08 thì `à`) không còn được trộn vào các mẫu
  // luyện ngón nữa — chúng chỉ sống trong từ (`falò`, `farò`, `città`, `qualità`).
  letterTest: "^[a-z',.\\-]$",

  // Ký tự dấu nào là ký tự THẬT trên bố cục của khoá này, không phải phím chết — xem
  // scripts/lib/unit-symbols.js. Unit ký hiệu chỉ dạy những cái này.
  symbolsLive: ['^'],
  /*
   * CÁC HỌ KHÁC CỦA TIẾNG Ý. Mỗi họ là một khoá riêng (data/languages.js → `courses`), sinh bằng
   * `--course it-<họ>`. Ở đây chỉ có phần KHÁC khoá 194; mọi thứ khác dùng bản ở dưới.
   */
  families: {
    // Italian (Macintosh) (196): QZERTY và gần AZERTY hơn là gần 194. Hàng số không Shift in ra
    // & " ' ( ç è ) £ à é — chữ số ở tầng Shift, nên bài hàng số dạy cả hai tầng, và è é à tới ở
    // ĐÓ chứ không ở bài dấu câu. Dấu chấm là Shift + ô Comma (ô ấy in ra `;`), như AZERTY. Cột
    // ngoài có ò và ì; ù ở ô Quote.
    mac: {
      shiftUnlocks: ['.'],
      digitsAreShifted: true,
      teaching: {
        introEdge: 'I tasti del bordo destro, tutti del mignolo. Su questa tastiera due di loro sono ò e ì.',
        summary: {
          edge: 'La colonna del bordo destro: sei tasti del mignolo, fra cui ò e ì.',
          digits: 'La riga dei numeri, su due livelli: è, é, à e ç senza Shift, i numeri con Shift.',
          shift: 'Le maiuscole con il mignolo opposto, il ritorno a capo e il punto.'
        },
        intro: {
          edge: 'Il mignolo destro ha più tasti di qualsiasi altro dito, e quelli del bordo sono i meno esercitati. Su questa tastiera qui stanno ò e ì: senza questa colonna non si scrivono né però, né farò, né lì.',
          digits: 'Sul Mac italiano la riga dei numeri ha due livelli: senza Shift dà è, é, à e ç, con Shift i numeri. È qui che arriva è, probabilmente la parola più frequente dell’italiano scritto — ed è la riga dove si sbaglia di più in tutto il corso.',
          shift: "Fino a qui hai scritto tutto in minuscolo. Shift lo cambia, e ha una regola che conviene imparare bene fin dall'inizio: lo preme il mignolo della mano opposta alla lettera. Su questa tastiera Shift dà anche il punto, che non ha un tasto suo."
        },
        congrats: {
          edge: 'Con ò e ì la colonna del bordo è fatta. È quella che quasi tutti i corsi lasciano a metà.',
          digits: 'Adesso è, perché e città si scrivono per intero. La riga dei numeri è quella che costa di più: torna a questa lezione ogni tanto.'
        },
        introDigits: 'La riga dei numeri ha due livelli: senza Shift è, é, à e ç, con Shift i numeri. Ogni dito sale in linea retta e scende allo stesso modo.',
        drillDigitsShifted: 'Gli stessi tasti con Shift: è lì che stanno i numeri su questa tastiera.',
        titleDigits: 'Accenti e numeri',
        units: {
          u3: { title: 'Accenti, numeri e velocità',
            summary: 'I due livelli della riga dei numeri — è, é e à compresi —, i segni di ogni giorno, e poi paragrafi lunghi a ritmo costante.' }
        }
      }
    },

    // Italian Dvorak (197): hàng cơ sở a o e u i d h t n s — nguyên âm ngay bài đầu. Cột ngoài
    // vẫn là è ì ù như bố cục 194, nên câu dạy của bài đó vẫn đúng; ò và à ở hàng dưới và hàng
    // trên. Chỉ câu tóm tắt unit 1 khác, và nó đã tự điền bằng {reach}.
    dvorak: {}
  },

  teaching: {
    and: ' e ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'la virgola', '.': 'il punto', ';': 'il punto e virgola', ':': 'i due punti', "'": "l'apostrofo", '-': 'il trattino' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Tutti gli altri tasti',
      unitSummary: 'I {count} caratteri di questa tastiera che il corso non ha ancora usato, ognuno scritto dove si usa davvero.',
      groupSymbols: 'I tasti che mancano',
      groupFinish: "Chiudi l'unità",
      titleNumberRow: 'I segni della riga dei numeri',
      titleKeys: '{keys}',
      titleReview: 'Tutti i segni insieme',
      summaryKeys: 'In questa lezione: {keys}.',
      summaryReview: "Tutti i segni dell'unità, mescolati a parole e numeri.",
      summaryTest: 'Una prova a tempo con tutti i tasti della tastiera.',
      introLesson: 'Tasti che il corso non ha ancora usato: {keys}. {shiftNote}',
      shiftNote: "Ognuno si ottiene con Shift e un tasto che le tue dita conoscono già — Shift con il mignolo dell'altra mano.",
      shiftNoteMixed: "Alcuni vogliono Shift, con il mignolo dell'altra mano; gli altri hanno un tasto tutto loro, che il corso non aveva ancora usato.",
      introKey: 'È {finger} a premere {key}{shift}.',
      introKeyShift: ", con Shift tenuto dall'altra mano",
      drillOne: 'Prima {key} e basta, poi dove si usa davvero.',
      burst: 'Una raffica di pezzi brevi con questi caratteri.',
      together: 'Tutto quello di questa lezione, mescolato.',
      inWords: 'Di nuovo parole, con i segni al loro posto.',
      introReview: "Nessun tasto nuovo. Tutti i caratteri dell'unità, mescolati a parole e numeri.",
      reviewFirst: 'I segni allo stesso ritmo delle lettere intorno.',
      reviewLine: 'Tieni il ritmo anche sui segni; sono tasti come gli altri.',
      congratsKeys: '{keys}: ora sotto le tue dita. Il segno esce facile come la lettera accanto.',
      congratsReview: 'Ogni tasto di questa tastiera ha avuto il suo turno.',
      introTest: 'Una prova a tempo con tutto, segni compresi.',
      congratsTest: "Questa era la tastiera intera. Non c'è più un tasto che questo corso non ti abbia insegnato.",
      testText: 'Parole, numeri e segni. Lo stesso ritmo dall’inizio alla fine.'
    },

    fingers: {
      LP: 'il mignolo sinistro', LR: "l'anulare sinistro", LM: 'il medio sinistro',
      LI: "l'indice sinistro", LT: 'il pollice sinistro', RT: 'il pollice destro',
      RI: "l'indice destro", RM: 'il medio destro', RR: "l'anulare destro",
      RP: 'il mignolo destro'
    },

    /* --- cot ngoai cua ngon ut phai --- */
    introEdge: 'I tasti del bordo destro, tutti del mignolo. Tre di loro sono è, ì e ù — senza il primo non si scrive nemmeno "è".',
    drillEdgePair: 'Adesso {keys}. Il mignolo esce verso il bordo e torna; la mano resta dov’è.',
    burstEdge: 'Una raffica con quello che hai di questa colonna.',
    drillEdgeAll: 'Tutti e sei insieme. È il punto in cui il polso si storce di più se il dito non torna.',
    burstEdgeWords: 'Di nuovo parole, per sciogliere la mano dopo tutto questo bordo.',
    edgeBackToWords: 'Si torna alle parole, ora con la tastiera intera — accenti compresi.',
    edgeClose: 'Frasi intere per chiudere le lezioni di tasti.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Questo tasto lo prende {finger}. Cercalo senza guardare, premi una volta e lascia che il dito torni al suo posto. Il rientro conta quanto la pressione.',
    pressToContinue: 'Premi <b>{key}</b> per continuare',
    introSpace: 'La barra spaziatrice è del pollice destro. I pollici non fanno altro, e per questo non serve mai cercarla.',
    pressSpace: 'Premi la <b>barra spaziatrice</b> per continuare',

    /* --- luyện ngón --- */
    drillSpace: 'Gruppi corti separati da spazi. Il pollice destro scende e risale; le altre dita restano dove sono.',
    drillNew: 'Solo {key} e quello che già conosci. Piano, e il dito torna alla riga di riposo dopo ogni pressione.',
    drillMixed: 'I tasti nuovi mescolati ai precedenti, che è come li troverai dentro le parole.',
    drillAgain: 'Di nuovo i due tasti nuovi. Non ci sono ancora parole da scrivere con loro, ed è normale.',
    drillWide: 'Tutto quello che hai, in gruppi corti. Guarda lo schermo, non le mani.',
    drillAll: 'Un ultimo giro con tutto quello che hai imparato fin qui.',
    patternsBack: 'Torniamo un momento agli schemi, per verificare che le dita continuino a rientrare al loro posto.',

    /* --- ráfaga --- */
    burstKeys: "Gruppi corti, uno dopo l'altro. Arriva in fondo anche se ne sbagli qualcuno.",
    burstLonger: "Gruppi un po' più lunghi. La fretta non aiuta ancora.",
    burstWords: 'Una raffica di parole corte con dentro i tasti nuovi.',

    /* --- từ --- */
    wordsNew: 'Parole vere con i tasti nuovi. Scrivi la parola intera di seguito, non lettera per lettera.',
    wordsOne: 'Adesso con il peso su <b>{key}</b>, il tasto che hai premuto meno volte.',
    wordsAll: 'Tutto quello che hai, mescolato. Guarda quante parole ti vengono già senza pensarci.',

    /* --- ôn tập --- */
    introReview: 'Nessun tasto nuovo in questa lezione. Solo quelli che conosci, più di seguito e più in fretta di come li hai scritti finora.',
    introReviewMixed: 'Lettere, numeri e segni insieme, che è come compaiono fuori da un corso.',
    pressEnter: 'Premi <b>Invio</b> per cominciare',
    reviewWords1: 'Si comincia con parole sciolte. Senza fretta: la velocità nasce dalla precisione, mai il contrario.',
    reviewBurst: 'Una raffica corta. Finisci la lista anche se qualcuna ti scappa.',
    reviewWords2: 'Cinque parole per riga. Lascia che gli occhi vadano avanti alle dita.',
    reviewPatterns: 'Di nuovo gli schemi, per controllare che le dita tornino alla riga di riposo.',
    reviewShort: 'Parole corte, a buon ritmo. Queste dovrebbero uscire quasi da sole.',
    reviewBurst2: "Più tempo e più parole. Tieni lo stesso ritmo dall'inizio alla fine.",
    reviewClose: 'Frasi intere. Qui si vede se la mano rientra da sola al suo posto.',
    reviewLast: "L'ultimo giro. Se sei arrivato fin qui senza guardare la tastiera, la lezione è fatta.",

    /* --- Shift và Invio --- */
    introShift: 'Le maiuscole si fanno con il mignolo della mano opposta alla lettera. Tieni premuto Shift, batti la lettera, rilascia. Mai con lo stesso mignolo che scrive.',
    pressShift: 'Tieni <b>Shift</b> e premi una lettera per continuare',
    drillShift: "Maiuscole e minuscole alternate. Il mignolo scende e risale; l'altra mano non si sposta.",
    wordsShift: 'Parole con la maiuscola iniziale, come i nomi propri.',
    introEnter: 'Invio è del mignolo destro, a destra della riga di riposo. È il tasto più lontano che quel dito debba raggiungere.',
    pressEnterKey: 'Premi <b>Invio</b> per continuare',
    drillEnter: "Una riga, Invio, un'altra riga. Il mignolo esce e rientra senza trascinare la mano.",
    shiftSentences: 'Frasi con la maiuscola iniziale e il punto finale. Comincia a somigliare a scrivere davvero.',
    shiftBurst: 'Una raffica per fissare quello che hai visto in questa lezione.',
    shiftWords2: 'Cinque per riga, con il mignolo che lavora nelle due direzioni.',
    shiftClose: 'Per chiudere, frasi intere. Shift, lettera, rilascia — senza fermarsi a pensarci.',

    /* --- hàng số --- */
    introDigits: 'La riga dei numeri sta sopra la riga superiore. Ogni dito sale in linea retta e scende allo stesso modo. Sono gli allunghi più lunghi del corso.',
    drillDigitPair: "I tasti {keys} si premono con {finger} e con lo stesso dito dell'altra mano. Sali, premi e torna alla riga di riposo.",
    drillDigitIndex: 'I due che restano sono degli indici, che ormai raggiungono più tasti di ogni altro dito.',
    burstDigits: 'Una raffica corta con i numeri che hai imparato.',
    burstDigitsAll: "Tutti e dieci, mescolati. All'inizio qui si sbaglia molto; è normale.",
    digitsAll: 'Tutta la riga, in gruppi. Non abbassare lo sguardo per cercare il 6.',
    digitsBackToWords: 'Torniamo un momento alle parole, perché le mani si ricordino dove abitano.',
    digitsClose: 'Di nuovo frasi, ormai con tutta la tastiera a disposizione.',

    /* --- đoạn văn --- */
    introProse: 'Testi lunghi e continui. Qui non si allenano tasti nuovi, ma il reggere lo stesso ritmo per più righe.',
    proseLine: 'Continua a leggere avanti a quello che scrivi. Se ti fermi a guardare, perdi più tempo di quanto ne perderesti a correggere.',
    proseBurst: "Un'ultima raffica lunga per finire.",

    /* --- phím yếu và kiểm tra --- */
    weakText: 'Un esercizio costruito sui tasti che sbagli di più. Cambia ogni volta che ti alleni.',
    testText: 'Nessun tasto nuovo. Scrivi a un ritmo che riesci a tenere fino in fondo.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, più la barra spaziatrice',
    titleKeys: '{keys}',
    titleReview: 'Ripasso',
    titleReviewMixed: 'Indirizzi, link e numeri',
    titleShift: 'Shift e Invio',
    titleEdge: 'La colonna esterna',
    titleDigits: 'La riga dei numeri',
    titleProse: 'Testi e ritmo {n}',
    titleWeak: 'Tasti deboli',
    titleTest: "Prova dell'unità {unit}",

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'La colonna del bordo destro: sei tasti del mignolo, fra cui è, ì e ù.',
      first: "I due tasti con il rilievo, la barra spaziatrice, e l'abitudine di non guardare in basso.",
      keys: 'Tasti nuovi: {keys}. Il dito esce, preme e rientra.',
      review: 'Nessun tasto nuovo. Tutto il precedente, più di seguito e più in fretta.',
      shift: 'Le maiuscole con il mignolo opposto, e il ritorno a capo.',
      digits: 'I dieci numeri, ogni dito che sale in linea retta.',
      prose: 'Paragrafi interi, per tenere il ritmo oltre una riga.',
      weak: 'Un esercizio generato con i tasti che sbagli di più.',
      test: 'Una prova a tempo con tutto quello che hai imparato.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'Il mignolo destro ha più tasti di qualsiasi altro dito, e quelli del bordo sono i meno esercitati. Qui valgono doppio: è, ì e ù stanno tutti su questa colonna. Fino a questa lezione non potevi scrivere è, che è probabilmente la parola più frequente dell’italiano scritto.',
      first: 'I tasti con un piccolo rilievo sono il punto di partenza. I due indici si appoggiano lì e non se ne vanno; tutto il resto del corso si misura da quella posizione. Comincia mettendo a posto le due mani e guardando solo lo schermo.',
      keys: 'Tasti nuovi in questa lezione: {keys}. Si premono con {fingers}. Il movimento è sempre lo stesso — uscire, premere e rientrare — e il rientro è la parte che si allena, perché se il dito resta fuori la lettera dopo esce storta.',
      review: "Questa lezione non insegna niente di nuovo. È il momento di verificare che quello di prima esca senza pensarci, che è un'altra cosa rispetto a sapere dove sta ogni tasto.",
      shift: "Fino a qui hai scritto tutto in minuscolo. Shift lo cambia, e ha una regola che conviene imparare bene fin dall'inizio: lo preme il mignolo della mano opposta alla lettera. Con il mignolo della stessa mano, la mano si storce e finisci per guardare la tastiera.",
      digits: "La riga dei numeri sta sopra tutto quello che hai scritto finora, ed è quella in cui le dita vanno più lontano. Qui si sbaglia più che in qualsiasi altro punto del corso, e si aggiusta come il resto: prima piano.",
      prose: 'Adesso hai la tastiera intera. Quello che resta non è imparare tasti ma tenere il ritmo: leggere avanti, non fermarsi a guardare e non accelerare a fine riga.',
      weak: 'Questo esercizio si costruisce sui tasti che sbagli tu, non su una lista fissa. Se cambi tu, cambia lui.',
      test: "Una prova a tempo. Non c'è niente di nuovo: solo quello che sai già, a un ritmo che riesci a tenere."
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Adesso è, perché, più e così si scrivono per intero. Era l’ultimo pezzo che mancava.',
      first: 'Adesso hai le mani a posto. Da qui in avanti sono tutti tasti che si raggiungono da questa posizione e che si lasciano subito.',
      keys: 'Altri tasti sotto le dita. Se {keys} ti escono senza cercarli, la lezione ha fatto il suo lavoro.',
      review: 'Niente di nuovo e comunque più in fretta. È esattamente quello che doveva succedere.',
      shift: 'Con Shift e Invio puoi scrivere un testo intero come si scrive fuori da qui.',
      digits: 'La riga dei numeri è quella che costa di più e quella che dopo si pratica di meno. Torna a questa lezione ogni tanto.',
      prose: 'Paragrafi interi a ritmo costante. Questo non è più imparare a scrivere; è scrivere.',
      weak: "I tasti deboli smettono di esserlo con un minuto al giorno, non con un'ora al mese.",
      test: 'Prova superata. Il numero conta meno del fatto di essere arrivato in fondo senza guardare.'
    },

    units: {
      u1: { title: 'La riga di riposo',
        summary: 'Otto tasti sotto le dita, poi {reach} — abbastanza per scrivere parole vere senza guardare in basso.' },
      u2: { title: "Il resto dell'alfabeto",
        summary: "Riga superiore, riga inferiore, punteggiatura, le vocali accentate e le maiuscole — tutto l'alfabeto, più Shift e Invio." },
      u3: { title: 'Numeri, segni e velocità',
        summary: 'La riga dei numeri, i segni di ogni giorno, indirizzi e link veri, e poi paragrafi lunghi a ritmo costante.' }
    },

    groups: {
      start: 'Comincia da qui',
      reach: 'Allunga le dita',
      finish: "Chiudi l'unità",
      'numbers-symbols': 'Numeri e segni',
      speed: 'Velocità'
    },

    starterHint: 'Appoggia gli indici sui due tasti con il rilievo e scrivi quello che vedi, senza guardare la tastiera.'
  }
};
