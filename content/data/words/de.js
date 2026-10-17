/* data/words/de.js — kho từ tiếng Đức cho khoá /de/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, check-words.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 188 (German QWERTZ). Thứ tự phím suy từ ô phím vật lý, nên nó ra thế này:
 *   f j · d k · s l · a ö · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t z · o w · c n · m v · [ôn] · q p · b x · y . , ä · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - ß · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại. Chúng tồn tại
 * để người đọc thấy ngay khoá học mỏng ở chỗ nào — và với tiếng Đức nó mỏng ở đúng bốn bài
 * đầu, vì `a d f j k l s ö` chỉ viết nổi hơn hai chục từ.
 *
 * HAI LUẬT VIẾT HOA KHÁC NHAU, VÀ ĐÓ LÀ CỐ Ý.
 *
 *   `words` và `names` — TOÀN BỘ VIẾT THƯỜNG, kể cả danh từ. Đây là thứ trông sai nhất với
 *   người biết tiếng Đức: chính tả Đức viết hoa mọi danh từ, mà ở đây `haus`, `kind`, `zeit`
 *   đều thường. Lý do là thứ tự dạy: Shift mãi tới u2-l09 mới có, nhưng `haus` đã phải gõ được
 *   từ u1-l08 — một chữ hoa trong `words` là một dòng luyện mà người học chưa gõ nổi, và nó sẽ
 *   nằm im ở đó cho tới khi ai đó mở đúng bài ấy ra đọc. `scripts/check-words.js` vì thế chặn
 *   thẳng mọi chữ hoa trong `words`. Bài dạy Enter tự viết hoa `names` khi dựng nội dung.
 *
 *   `sentences` — VIẾT HOA ĐÚNG CHÍNH TẢ: đầu câu và MỌI DANH TỪ (`Das Wetter ist heute sehr
 *   schön`). Câu chỉ được dùng ở những màn `dictation: 'sentence'`, và màn đầu tiên như thế
 *   nằm sau bài Shift — nên chữ hoa ở đây luôn gõ được. Trước đây danh sách này cũng viết
 *   thường và generator chỉ viết hoa CHỮ ĐẦU, nên bài sinh ra là tiếng Đức sai chính tả:
 *   `Die katze schläft den ganzen tag auf dem sofa`. Một người tập gõ câu đó là đang tập gõ
 *   sai. `typeableWith` đòi SHIFT cho mọi chữ hoa, nên câu tự động không xuất hiện ở bài nào
 *   chưa dạy Shift — không cần canh tay.
 *
 * Nên: thêm TỪ thì viết thường, thêm CÂU thì viết hoa như khi viết thật. Hai luật, một file.
 *
 * ü ĐÃ CÓ, từ 23/09/2026. Trên bố cục 188, ü nằm ở ô BracketLeft, và bản kế hoạch của
 * build-course.js không dạy ô đó (nó dừng ở KeyP cho hàng trên). Không có phím chết nào cứu
 * được: QWERTZ Đức gõ ü bằng một phím riêng, không bằng ¨ + u. Nên Bài `cột ngoài` (u3-l02) nay dạy ô đó, nên `alphabet`
 * khai luôn ü và `für`, `über`, `müssen`, `fünf`, `glück`, `bücher`, `tür` đều gõ được — nhưng
 * chỉ từ bài đó trở đi, và `typeableWith` tự chặn chúng khỏi các bài trước. ö thì ngược lại: nó ở hàng cơ sở, dạy ngay bài 4, nên `öl` là một trong
 * những từ đầu tiên của khoá. ä tới ở u2-l08, ß tới ở u3-l02 — sau chót, nên không có
 * `groß`, `heißen`, `straße` trước mốc đó.
 *
 * NGUỒN GỐC. Từ vựng tiếng Đức thông dụng không thuộc về ai, nhưng một DANH SÁCH được biên
 * soạn thì có thể mang quyền biên tập mỏng — nên danh sách này dựng độc lập: từ vựng phổ
 * thông, xếp theo mốc phím ở trên, rồi soát tay. Không lấy từ nội dung bài của site dạy gõ nào
 * — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-zäöüß]+$/. Không chữ hoa, không gạch nối.
 *   - Chính tả chuẩn sau cải cách 1996 (`dass`, `muss`, `fluss` — không `daß`).
 *   - Không danh từ riêng ngoài `names`; không từ cổ; không gì bạo lực, y khoa, chính trị hay
 *     khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.de = {
  lang: 'de',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được. Có ü từ khi bài `cột ngoài` dạy ô BracketLeft,
  // nên một từ có ü lọt vào đây là một từ không bài nào dùng được. Khai đúng thì máy chặn ngay
  // thay vì để nó nằm im trong kho.
  alphabet: 'abcdefghijklmnopqrstuvwxyzäöüß',

  words: [
    // --- a d f j k l s ö  (u1-l04) ------------------------------------------------------
    // Chỗ đầu tiên trong khoá có từ tiếng Đức thật. Danh sách ngắn, và đó là hình dạng thật
    // của ràng buộc, không phải chỗ trống cần độn từ bịa. `öl` vào được ngay vì ö nằm ở hàng
    // cơ sở dưới ngón út phải — đúng ô mà QWERTY Mỹ để dấu chấm phẩy.
    'da', 'das', 'dass', 'ja', 'als', 'all', 'fall', 'falls', 'fad', 'fass', 'lass',
    'saal', 'aal', 'ass', 'skala', 'kalk', 'kajak', 'alfalfa', 'salsa', 'öl', 'ölfass',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gas', 'glas', 'gala', 'lag', 'sag', 'saga', 'jagd', 'hals', 'hall', 'halal',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    // Hai nguyên âm này mở ra gần hết từ chức năng của tiếng Đức: die, dies, des, sie.
    'die', 'dies', 'diese', 'des', 'es', 'je', 'jede', 'sei', 'seid', 'sie', 'alle',
    'alles', 'elf', 'hell', 'helle', 'halle', 'held', 'geld', 'feld', 'idee', 'ideal',
    'eile', 'esel', 'edel', 'eis', 'kleid', 'seide', 'seil', 'seife', 'hilfe', 'flagge',
    'leise', 'siegel', 'diesel', 'klasse', 'kasse', 'hase', 'see', 'seele', 'segel',
    'igel', 'fliege', 'liege', 'sieg', 'keil', 'ei',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'der', 'er', 'ihr', 'ihre', 'hier', 'dir', 'aus', 'auf', 'raus', 'heraus', 'uhr',
    'rad', 'haus', 'frau', 'haar', 'erde', 'rede', 'reise', 'regel', 'riesig', 'sieger',
    'krise', 'flur', 'fluss', 'kuss', 'sauer', 'dauer', 'feuer', 'lied', 'lieder',
    'leider', 'kleider', 'adler', 'freude', 'geduld', 'gerade', 'ruhe', 'ruhig', 'kuh',
    'frage', 'figur', 'gras', 'griff', 'kaiser', 'kurs', 'lager', 'lauf', 'ufer',
    'eier', 'euer', 'eure', 'reif', 'drei',

    // --- + t z  (u2-l01) ----------------------------------------------------------------
    // QWERTZ: ô KeyY in ra `z`, nên `z` tới rất sớm — sớm hơn hẳn mọi bố cục QWERTY. Đó là
    // lý do `zeit`, `jetzt`, `zahl` có mặt từ bài đầu của Unit 2.
    'alt', 'gut', 'gute', 'tag', 'tage', 'tal', 'teil', 'tief', 'tier', 'tiger', 'taste',
    'tasse', 'test', 'stufe', 'stelle', 'still', 'stark', 'start', 'stadt', 'steht',
    'geht', 'sagt', 'hast', 'ist', 'hart', 'halt', 'haltestelle', 'heute', 'leute',
    'letzte', 'jetzt', 'gitarre', 'glatt', 'direkt', 'gast', 'zeit', 'zeigt', 'zahl',
    'ziel', 'zug', 'zelt', 'zettel', 'ziegel', 'zusage', 'zuerst', 'zart', 'zeug',
    'dazu', 'sitz', 'hitze', 'arzt',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'also', 'oder', 'oft', 'ohr', 'ort', 'rot', 'gold', 'sofa', 'foto', 'hotel', 'hof',
    'höfe', 'hose', 'holz', 'dose', 'doktor', 'dort', 'dorf', 'los', 'rolle', 'rose',
    'sorge', 'stoff', 'stolz', 'total', 'tor', 'wo', 'was', 'wer', 'wie', 'wir', 'weg',
    'weit', 'welt', 'wald', 'wetter', 'wasser', 'weiter', 'wolf', 'wolke', 'wohl',
    'wurst', 'wahl', 'warte', 'weise', 'werk', 'wert', 'wild', 'wort', 'witz',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    // Nhóm lớn nhất của khoá, và đúng như vậy: `n` là chữ hay gặp thứ hai của tiếng Đức, còn
    // `c` gần như không đứng một mình — nó tới cùng `ch`, `sch`, `ck`, tức là ba tổ hợp phủ
    // kín chính tả Đức.
    'und', 'in', 'an', 'ein', 'eine', 'einer', 'kein', 'keine', 'nein', 'nicht', 'nur',
    'nach', 'noch', 'neu', 'nase', 'nacht', 'nadel', 'natur', 'neun', 'nuss', 'dann',
    'wann', 'kann', 'denn', 'wenn', 'ohne', 'offen', 'unten', 'unter', 'uns', 'unser',
    'stunde', 'finden', 'sind', 'sonne', 'sand', 'schule', 'schon', 'schnell', 'schwer',
    'schwarz', 'schön', 'strand', 'hand', 'hund', 'kind', 'kinder', 'land', 'licht',
    'acht', 'auch', 'ich', 'sich', 'kuchen', 'lachen', 'flasche', 'tasche', 'woche',
    'chef', 'decke', 'ecke', 'jacke', 'rock', 'zucker', 'danke', 'durch', 'ende',
    'essen', 'garten', 'hinter', 'können', 'kunst', 'lesen', 'richtig', 'sechs',
    'wand', 'winter', 'zehn',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'man', 'mann', 'mehr', 'mein', 'meine', 'mensch', 'menschen', 'mitte', 'mit',
    'moment', 'monat', 'morgen', 'musik', 'mutter', 'macht', 'machen', 'markt', 'marke',
    'maus', 'meer', 'milch', 'minute', 'mond', 'mund', 'möglich', 'möchte', 'immer',
    'kommen', 'nehmen', 'zimmer', 'sommer', 'himmel', 'name', 'nummer', 'warm', 'traum',
    'raum', 'zusammen', 'stimme', 'viel', 'viele', 'vier', 'vater', 'von', 'vor',
    'vorne', 'voll', 'vogel', 'volk', 'vase', 'video', 'vorher', 'versuch',
    'verstehen', 'verkauf', 'verein', 'vielleicht', 'vorsicht',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    // Chưa có `b`, nên không có `problem`, `probe`, `paar` thì được nhưng `pub` thì không.
    'papier', 'park', 'pause', 'person', 'pferd', 'pflanze', 'platz', 'plan', 'post',
    'preis', 'programm', 'punkt', 'puppe', 'pilz', 'paar', 'pass', 'perfekt', 'privat',
    'pilot', 'pinguin', 'pizza', 'putzen', 'apfel', 'lippe', 'treppe', 'gruppe',
    'kappe', 'kopf', 'kopie', 'kupfer', 'oper', 'spiel', 'spielen', 'sport', 'sprache',
    'sprechen', 'springen', 'spur', 'quadrat', 'quark', 'quelle', 'quer', 'quiz',
    'quote', 'qualle', 'quartal',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'aber', 'bald', 'ball', 'band', 'bank', 'bauen', 'baum', 'bein', 'beispiel',
    'bekannt', 'berg', 'beruf', 'besser', 'bett', 'bier', 'bild', 'bilder', 'bis',
    'bitte', 'blatt', 'blau', 'blick', 'blume', 'boden', 'brief', 'bringen', 'brot',
    'bruder', 'buch', 'butter', 'oben', 'leben', 'geben', 'haben', 'sieben', 'liebe',
    'arbeit', 'abend', 'sauber', 'taxi', 'text', 'texte', 'box', 'exakt', 'examen',
    'extra', 'experte', 'komplex', 'index', 'lexikon', 'luxus', 'praxis',

    // --- + y . , ä  (u2-l08) — ä tới ở đây, cùng dấu chấm và dấu phẩy -------------------
    // `y` trên QWERTZ nằm ở ô KeyZ, tức ô mà QWERTY Mỹ để `z`. Nó là chữ hiếm nhất của tiếng
    // Đức và gần như chỉ sống trong từ mượn — danh sách dưới đây phản ánh đúng điều đó.
    'mädchen', 'später', 'länder', 'länge', 'käse', 'bäcker', 'wäsche', 'gespräch',
    'erklären', 'nächste', 'während', 'täglich', 'hände', 'kälte', 'wärme', 'räume',
    'bäume', 'städte', 'gäste', 'jäger', 'stärke', 'äpfel', 'ändern', 'erzählen',
    'zählen', 'wählen', 'hängen', 'träumen', 'lächeln', 'rätsel', 'spät', 'qualität',
    'yoga', 'typ', 'typen', 'typisch', 'system', 'systeme', 'handy', 'hobby', 'baby',
    'party', 'symbol', 'analyse', 'dynamik', 'zylinder', 'physik', 'lyrik', 'rhythmus',
    'mythos', 'synonym', 'pyramide', 'yacht',

    // --- + ß  (u3-l02) — chữ cuối cùng của khoá -----------------------------------------
    // ß nằm ở ô Minus, cạnh số 0, và nó là ô cuối cùng bản kế hoạch chạm tới. Nên mọi từ
    // dưới đây chỉ gõ được ở bài áp chót — kể cả `groß`, thứ mà một người học tiếng Đức
    // gặp trong tuần đầu tiên.
    'groß', 'große', 'größe', 'heißen', 'heißt', 'straße', 'straßen', 'straßenbahn',
    'fuß', 'fußball', 'weiß', 'weiße', 'spaß', 'maß', 'fleißig', 'schließen', 'gießen',
    'genießen', 'draußen', 'außen', 'außer', 'außerdem', 'gruß', 'strauß', 'soße',
    'stoß',

    // --- + ü  (u3-l02, cột ngoài của ngón út phải) ----------------------------------------
    // Ô BracketLeft. Trước khi bài này tồn tại, khóa tiếng Đức không gõ nổi `für` hay `fünf`.
    'für', 'über', 'müssen', 'müsste', 'fünf', 'glück', 'glücklich', 'stück', 'stücke',
    'zurück', 'natürlich', 'grün', 'grüne', 'müde', 'früh', 'früher', 'küche', 'kühl',
    'tür', 'türen', 'bücher', 'bühne', 'süden', 'südlich', 'wünschen', 'wunsch', 'gemüse',
    'frühstück', 'prüfen', 'prüfung', 'schüler', 'begründen', 'berühmt', 'geblüht',
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ — và
     không có ü, vì khoá không dạy phím đó: không `münchen`, không `düsseldorf`, không `jürgen`. */
  names: [
    'anna', 'lena', 'maria', 'sophie', 'laura', 'julia', 'emma', 'klara', 'greta',
    'jonas', 'lukas', 'felix', 'david', 'max', 'paul', 'tobias', 'stefan', 'martin',
    'berlin', 'hamburg', 'bremen', 'dresden', 'leipzig', 'potsdam', 'mainz', 'kiel',
    'erfurt', 'rostock', 'weimar', 'bonn', 'köln', 'wien', 'graz', 'basel'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. VIẾT HOA ĐÚNG CHÍNH TẢ ĐỨC — xem chú thích ở đầu
     file. Không có dấu câu cuối: generator tự thêm dấu chấm. Mỗi câu phải đọc như tiếng Đức
     bình thường, không phải như một bài tập ngữ âm — và không câu nào được chứa ü, vì khoá
     không dạy phím ấy. */
  sentences: [
    'Das Wetter ist heute sehr schön',
    'Wir gehen am Morgen in den Park',
    'Meine Schwester wohnt in einer kleinen Stadt',
    'Der Zug kommt in zehn Minuten an',
    'Ich lese jeden Abend ein paar Seiten',
    'Die Kinder spielen im Garten hinter dem Haus',
    'Am Wochenende fahren wir an die See',
    'Er kocht heute eine Suppe mit frischen Kartoffeln',
    'Der Laden an der Ecke hat immer offen',
    'Sie schreibt einen langen Brief an ihre Freundin',
    'Im Sommer wird es hier sehr warm',
    'Der Lehrer erklärt die Aufgabe noch einmal',
    'Wir haben noch genug Zeit und trinken Kaffee',
    'Das Buch liegt auf dem Tisch neben der Lampe',
    'Mein Bruder arbeitet in einem kleinen Betrieb',
    'Die Blumen auf dem Balkon brauchen Wasser',
    'Nach dem Essen machen wir einen Spaziergang',
    'Er hat das Handy in der Jacke vergessen',
    'Am Freitag treffen wir uns vor dem Bahnhof',
    'Die Katze schläft den ganzen Tag auf dem Sofa'
  ]
};
