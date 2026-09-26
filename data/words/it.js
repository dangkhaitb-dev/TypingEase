/* data/words/it.js — kho từ tiếng Ý cho khoá /it/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 194 (Italian, QWERTY có ò ở ô Semicolon và à ở ô Quote). Thứ tự phím vì thế là:
 *   f j · d k · s l · a ò · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , à · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - ' · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại. Chúng tồn tại
 * để người đọc thấy ngay khoá học mỏng ở chỗ nào — và với tiếng Ý thì nó mỏng đúng ở bài 4.
 *
 * DẤU. Bàn phím Ý có năm nguyên âm có dấu, mỗi chữ một phím RIÊNG — không phím chết nào:
 *   ò = ô Semicolon (hàng cơ sở, út phải) → dạy ở u1-l04
 *   à = ô Quote     (hàng cơ sở, út phải) → dạy ở u2-l08, cùng dấu chấm và dấu phẩy
 *   è é = ô BracketLeft · ì = ô Equal · ù = ô Backslash → BẢN KẾ HOẠCH KHÔNG DẠY BA Ô NÀY.
 * Nên `è é ì ù` không gõ được ở bất kỳ bài nào của khoá, và mọi từ chứa chúng bị loại khỏi
 * kho: không có `è`, `perché`, `più`, `così`, `caffè`, `lunedì`, `martedì`. Đó là một lỗ thật
 * của bản kế hoạch, không phải một lựa chọn biên tập.
 * Bù lại `-tà` là một họ danh từ rất lớn của tiếng Ý (`città`, `qualità`, `verità`, `libertà`)
 * và cả họ ấy mở ra ở u2-l08, cùng thì tương lai ngôi một `farò`, `sarò`, `andrò` — những từ
 * này gõ được sớm hơn nhiều vì ò đã nằm dưới ngón út phải từ bài 4.
 *
 * DẤU NHÁY. `'` nằm ở ô Minus, dạy ở u3-l02 — nên MỌI hiện tượng nối âm (`l'acqua`, `un'altra`,
 * `dell'anno`) chỉ hợp lệ từ Unit 3 trở đi, và trước đó kho từ phải viết tiếng Ý không có một
 * dấu nháy nào. Với tiếng Ý đó là ràng buộc nặng hơn nghe tưởng: `l'` và `un'` là hai hình thái
 * xuất hiện gần như trong mỗi câu.
 *
 * NGUỒN GỐC. Từ vựng tiếng Ý thông dụng không thuộc về ai, nhưng một DANH SÁCH được biên soạn
 * thì có thể mang quyền biên tập mỏng — nên danh sách này dựng độc lập: từ vựng phổ thông, xếp
 * theo mốc phím ở trên, rồi soát tay. Không lấy từ nội dung bài của site dạy gõ nào — xem luật
 * "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-zàò']+$/. Không chữ hoa (Shift dạy muộn), không gạch nối.
 *   - Chính tả chuẩn tiếng Ý. Không trộn biến thể vùng miền trong cùng một màn.
 *   - Không danh từ riêng ngoài `names`; không từ cổ; không gì bạo lực, y khoa, chính trị hay
 *     khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.it = {
  lang: 'it',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được. Chỉ à và ò: hai nguyên âm có dấu DUY
  // NHẤT mà khoá này dạy tới phím của chúng. è é ì ù cố tình vắng mặt — thêm một từ chứa chúng
  // vào đây là thêm một từ không ai gõ nổi, và check-words phải chặn ngay.
  alphabet: "abcdefghijklmnopqrstuvwxyzàèéìòù'",

  words: [
    // --- a d f j k l s ò  (u1-l04) ------------------------------------------------------
    // Điểm đầu tiên trong khoá có từ tiếng Ý thật. Mười tám từ, và đó là hình dạng thật của
    // ràng buộc: hàng cơ sở tiếng Ý không có o, e hay i, nên chỉ còn `a` làm nguyên âm.
    'a', 'ad', 'al', 'la', 'da', 'dal', 'fa', 'sa', 'ala', 'alla', 'dalla', 'sala',
    'salda', 'falsa', 'falla', 'falda', 'falò', 'alfa',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gala', 'alga', 'saga', 'gas', 'galla',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    // Hai nguyên âm này mở ra gần như toàn bộ từ chức năng của tiếng Ý: mạo từ, giới từ nhập,
    // đại từ. Trước bài này cả khoá chỉ có `la` và `dalla`.
    'il', 'le', 'li', 'gli', 'dei', 'del', 'della', 'delle', 'dalle',
    'e', 'se', 'sei', 'lei', 'egli', 'idea', 'ideale',
    'fila', 'file', 'sale', 'sali', 'lega', 'alghe', 'ghiaia',
    'figlia', 'figlie', 'figli', 'gialla', 'sedia', 'sedile',
    'fedele', 'legale', 'agile', 'esile', 'legge', 'leggi', 'delega',
    'dea', 'ali', 'sfida', 'diga', 'giada',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    // `farò`, `sarò`, `darò`, `dirò` — thì tương lai ngôi một của tiếng Ý kết thúc bằng ò, và
    // ò đã nằm dưới ngón út phải từ bài 4, nên chúng gõ được trước mọi chữ có dấu khác.
    'su', 'sua', 'dura', 'durare', 'figura', 'figure', 'regale', 'sera', 'serie',
    'leggere', 'fiera', 'ferie', 'guida', 'guidare', 'erede', 'gara', 'girare',
    'fare', 'dare', 'frase', 'frasi', 'gradi', 'riga', 'righe', 'sfera', 'usare',
    'larga', 'larghe', 'laurea', 'agire', 'salire', 'ridere', 'ride', 'fuga',
    'grigia', 'uguale', 'dire', 'suggerire',
    'farò', 'sarò', 'darò', 'dirò',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    // Tiếng Ý không có từ bản ngữ nào chứa y; ở bài này y chỉ được rèn bằng mẫu luyện ngón,
    // và phải đợi `yoga`, `kiwi`, `yogurt` ở bài sau mới có từ thật.
    'tu', 'tutti', 'tutta', 'tre', 'stella', 'latte', 'letti', 'attesa', 'testa',
    'dita', 'estate', 'aiutare', 'state', 'strada', 'strade', 'festa', 'feste',
    'gustare', 'tesi', 'tastiera', 'tale', 'tali', 'tardi', 'teatrale',
    'tigre', 'tirare', 'taglia', 'tagliare', 'atleta', 'gita', 'gite',
    'giusta', 'giusti', 'ritardi', 'risultati', 'utile', 'lettura',
    'digitare', 'digitali', 'starò',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'o', 'lo', 'ho', 'ora', 'oro', 'loro', 'solo', 'sole', 'otto', 'oggi', 'olio',
    'storia', 'tutto', 'sotto', 'alto', 'alta', 'torta', 'rosa', 'radio', 'studio',
    'stadio', 'foglia', 'figlio', 'fuori', 'fiore', 'gioia', 'sorella', 'riso',
    'altro', 'ieri', 'dietro', 'teatro', 'forte', 'forse', 'gusto',
    'watt', 'kiwi', 'wafer', 'yoga', 'yogurt',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'con', 'non', 'un', 'una', 'uno', 'ne', 'in', 'nel', 'nella', 'nelle', 'nei', 'negli',
    'ci', 'chi', 'che', 'anche', 'ancora', 'noi', 'ciò',
    'cosa', 'casa', 'cane', 'cena', 'cento', 'cielo', 'centro', 'anno', 'notte',
    'nostra', 'nostro', 'nord', 'sud', 'dentro', 'lontano', 'natura', 'naturale',
    'cucina', 'cuore', 'corso', 'corsa', 'scuola', 'scuole', 'secondo', 'colore',
    'collina', 'conto', 'contare', 'caldo', 'certo', 'circa', 'gatto', 'nonno',
    'donna', 'nido', 'dolce', 'sono', 'stanco', 'giorno', 'giardino', 'antico',
    'canta', 'cantare', 'canto', 'racconto', 'credere', 'chiaro', 'chiudere',
    'chiesa', 'chiedere', 'incontro', 'crescere', 'cuoco', 'decidere', 'contento',
    'treno', 'andrò',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'me', 'mi', 'mio', 'mia', 'mai', 'meno', 'molto', 'molti', 'meglio', 'mare',
    'madre', 'mano', 'mani', 'mese', 'mondo', 'momento', 'minuto', 'mattina',
    'motore', 'moneta', 'macchina', 'mela', 'mucca', 'musica', 'museo', 'montagna',
    'migliore', 'medico', 'mercato', 'marito',
    'vita', 'via', 'vero', 'verde', 'verdi', 'vento', 'vedere', 'viaggio', 'viale',
    'voce', 'volta', 'vostro', 'visita', 'vicino', 'veloce', 'vetro', 'neve',
    'nuovo', 'avere', 'davvero', 'ovest', 'uova', 'vestito', 'inverno', 'valore',
    'vincere', 'vittoria', 'volere', 'vuole', 'voglio', 'avanti',
    'come', 'comune', 'amico', 'amici', 'animale', 'camera', 'cammino', 'camminare',
    'domenica', 'numero', 'nome', 'uomo', 'uomini', 'venire', 'vivere', 'verso',
    'tavolo', 'avrò', 'verrò',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'per', 'poco', 'pochi', 'parte', 'porta', 'padre', 'pane', 'parola', 'parole',
    'piede', 'pieno', 'posto', 'prima', 'primo', 'prato', 'pensare', 'persona',
    'piccolo', 'punto', 'paese', 'passo', 'partire', 'pesce', 'pioggia', 'potere',
    'pomodoro', 'pensiero', 'penna', 'porto', 'professore', 'primavera', 'presto',
    'pulire', 'pulito', 'portare', 'piatto', 'piano', 'però', 'perciò', 'potrò',
    'quando', 'quanto', 'quattro', 'questo', 'questa', 'qui', 'qua', 'quasi',
    'quaderno', 'quadro', 'qualcosa', 'quale', 'cinque', 'acqua', 'quercia',
    'quindici', 'qualche', 'quindi',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    // Chữ x của tiếng Ý chỉ sống trong từ mượn, và đó là tất cả những gì kho này có được.
    'bene', 'bello', 'bella', 'bambino', 'bambina', 'basso', 'bianco', 'bocca',
    'bosco', 'braccio', 'breve', 'buono', 'buona', 'barca', 'banco', 'banca',
    'burro', 'biblioteca', 'bisogno', 'bordo', 'libro', 'libri', 'libero',
    'nebbia', 'sabbia', 'sabato', 'bicicletta', 'bottiglia', 'bagno', 'bere',
    'beve', 'bottone', 'bicchiere', 'balcone', 'abitare',
    'taxi', 'fax', 'extra', 'xilofono', 'web',

    // --- + z . , à  (u2-l08) — à và cả họ danh từ -tà mở ra từ đây ---------------------
    'zero', 'zona', 'zucchero', 'zucca', 'zaino', 'zio', 'zia', 'mezzo', 'pizza',
    'piazza', 'ragazzo', 'ragazza', 'ragazzi', 'azzurro', 'stazione', 'canzone',
    'lezione', 'attenzione', 'informazione', 'stanza', 'senza', 'forza', 'terzo',
    'pezzo', 'prezzo', 'alzare', 'palazzo', 'grazie', 'vacanza', 'differenza',
    'esperienza', 'pranzo', 'mezzogiorno', 'indirizzo',
    'città', 'papà', 'già', 'qualità', 'verità', 'libertà', 'età', 'attività',
    'novità', 'felicità', 'università', 'realtà', 'difficoltà', 'là', 'dà',
    'sarà', 'andrà', 'farà', 'avrà', 'starà', 'potrà', 'società', 'velocità',
    'possibilità', 'necessità', 'comunità', 'unità', 'pubblicità',

    // --- + ' (u3-l02) — nối âm, thứ tiếng Ý dùng gần như mỗi câu và khoá phải đợi tới đây --
    "l'acqua", "l'amico", "l'amica", "l'ora", "l'isola", "l'albero", "l'anno",
    "l'arte", "l'estate", "l'inverno", "l'uomo", "l'idea", "l'altro", "l'aria",
    "l'occhio", "l'orologio", "dell'acqua", "dell'anno", "all'aperto", "dall'alto",
    "un'idea", "un'ora", "un'altra", "nell'aria", "d'accordo", "quest'anno",
    "c'era", "po'",
    // --- + è ì ù  (u3-l02, cột ngoài của ngón út phải) ------------------------------------
    // Ba ô BracketLeft, Equal, Backslash. Trước bài này, khóa tiếng Ý không gõ nổi `è` — dạng
    // chia của *essere*, gần như là từ hay gặp nhất trong tiếng Ý viết. `é` là Shift+è.
    'è', 'cioè', 'perché', 'poiché', 'affinché', 'benché', 'più', 'giù', 'così', 'lì',
    'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'caffè', 'tè', 'cioccolata',
    'ventitré', 'dirà', 'verrà', 'dovrà',
  ],
  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ — và
     không chứa chữ có dấu, vì bài Shift viết hoa chữ đầu và bàn phím Ý KHÔNG đặt À, Ò ở tầng
     Shift (Shift + à ra °, Shift + ò ra ç). */
  names: [
    'anna', 'maria', 'giulia', 'chiara', 'sofia', 'elena', 'laura', 'marta',
    'marco', 'luca', 'paolo', 'andrea', 'matteo', 'davide', 'stefano', 'giorgio',
    'roma', 'milano', 'torino', 'napoli', 'firenze', 'venezia', 'genova', 'verona'
  ],
  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Mỗi câu phải đọc như tiếng Ý bình
     thường, không phải như một bài tập ngữ âm.
     HAI RÀNG BUỘC ĐÃ ĐỊNH HÌNH CẢ DANH SÁCH NÀY:
     1. Không có `è`. Bố cục Ý đặt è ở ô BracketLeft và bản kế hoạch không dạy ô đó, nên động
        từ thông dụng nhất của tiếng Ý không gõ được. Mọi câu ở đây phải nói vòng qua nó:
        `ha`, `sono`, `ci sono`, `sta`, `resta`, `diventa`.
     2. Không có dấu nháy — `'` chỉ tới ở u3-l02, còn câu thì đã được dùng từ u2-l05. Nên
        không `l'`, không `un'`, không `c'`. Mười câu đầu còn tránh cả b p q x z à, vì bài ôn
        tập u2-l05 là chỗ đầu tiên đòi câu và tới đó năm phím ấy vẫn chưa được dạy. */
  sentences: [
    'il gatto dorme sul divano',
    'la mia casa ha una finestra molto grande',
    'ogni mattina faccio una lunga camminata',
    'mio fratello studia medicina da tre anni',
    'i nonni vivono in una casa vicino al mare',
    'la neve cade lenta sul tetto della scuola',
    'domani andiamo al museo insieme ai nostri amici',
    'il treno arriva alle sette del mattino',
    'il cane corre nel giardino dietro casa',
    'ogni sera leggo un fumetto sul divano',
    'la biblioteca apre presto la mattina',
    'il bambino gioca con una palla rossa',
    'questo quaderno costa meno di tre euro',
    'la pizza calda sa di pomodoro e origano',
    'durante il viaggio abbiamo visto molte montagne',
    'la mia amica lavora in una libreria del centro',
    'il professore spiega la lezione con molta calma',
    'questa strada porta dritta verso la stazione',
    'in primavera gli alberi del parco sono verdi',
    'in questa città ci sono molti giardini pubblici'
  ]
};
