/* data/words/nl.js — kho từ tiếng Hà Lan cho khoá /nl/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 198 (Dutch standard, QWERTY; ô Semicolon in ra `+`, ô Quote là phím chết ´).
 * Thứ tự phím vì thế là:
 *   f j · d k · s l · a + · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ´ · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - / ° ¨ * < · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * DẤU. `é` gõ bằng phím chết ´ (ô Quote), dạy ở u2-l08; `ë ï ö ü` gõ bằng phím chết ¨ (ô
 * BracketLeft), dạy ở bài cột ngoài u3-l02. Tiếng Hà Lan dùng dấu ít — một nhúm từ như `één`,
 * `café`, `ideeën`, `ruïne` — nên khoá KHÔNG dựa vào chúng; chúng chỉ là phần thưởng cho hai
 * phím chết đã dạy. `è` (Shift + ´ = `) không bao giờ được dạy, nên không có từ nào ở đây dùng nó.
 * `ij` là HAI chữ i + j, đúng như người Hà Lan gõ trên bàn phím này.
 *
 * Dấu nháy (`auto's`, `zo'n`) chỉ gõ được trên họ Mac (199), nơi ô Quote in ra `'` thật; trên
 * bố cục 198 nó là Shift + 0 và bản kế hoạch không mở nó — generator tự lọc.
 *
 * NGUỒN GỐC. Từ vựng thông dụng, dựng độc lập và soát tay. Không lấy từ nội dung bài của site
 * dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ:
 *   - Chỉ bộ chữ `alphabet` bên dưới. Không chữ hoa, không gạch nối.
 *   - Chính tả chuẩn Hà Lan (Groene Boekje). Không từ Flemish riêng, không từ cổ.
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị hay khó chịu khi
 *     bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.nl = {
  lang: 'nl',

  alphabet: "abcdefghijklmnopqrstuvwxyzéëïöü'",

  words: [
    // --- a s d f j k l  (u1-l04) --------------------------------------------------------
    // Nguyên âm đôi aa cứu hàng cơ sở: kaas, kaal, sjaal.
    'al', 'als', 'af', 'ja', 'dak', 'dal', 'das', 'jas', 'kas', 'kaas', 'kaal', 'lak',
    'las', 'laf', 'sla', 'slak', 'aal', 'sjaal', 'kajak', 'salsa', 'alfa', 'kalk', 'kalf',
    'daal',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'ga', 'gas', 'gaf', 'dag', 'lag', 'hak', 'hal', 'hals', 'haas', 'haal', 'haak', 'slag',
    'gaas', 'jaag', 'half', 'had', 'gala', 'glas', 'glad', 'gaaf', 'dagjes',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    // Hai nguyên âm này mở ra hầu hết từ chức năng, và cả `ij`: hij, jij, ijs.
    'de', 'die', 'is', 'ik', 'ei', 'eis', 'eik', 'els', 'elk', 'elke', 'elf', 'alle',
    'alles', 'hij', 'jij', 'ijs', 'ijsje', 'kijk', 'lijk', 'lijf', 'dijk', 'kei', 'ski',
    'heel', 'deel', 'geel', 'keel', 'leek', 'lees', 'lief', 'lied', 'geld', 'held', 'heide',
    'hiel', 'kade', 'lade', 'gele', 'dief', 'kies', 'gids', 'gek', 'geef', 'gelijk', 'hield',
    'idee', 'ideaal', 'fles', 'ideale', 'leefde', 'kijkje',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'u', 'uur', 'duur', 'huur', 'rug', 'ruil', 'hier', 'haar', 'daar', 'raar', 'jaar',
    'klaar', 'graag', 'rijk', 'reis', 'rij', 'regel', 'regels', 'rek', 'drie', 'dier',
    'lekker', 'keer', 'leer', 'heer', 'sfeer', 'kerk', 'deur', 'geur', 'kleur', 'huis',
    'huid', 'dus', 'suiker', 'sluis', 'klus', 'jurk', 'kruid', 'druk', 'gras', 'grijs',
    'hard', 'uil', 'ui', 'jarig', 'kaars', 'raad', 'reiger', 'heerlijk', 'dagelijks',
    'lelijk', 'eerlijk', 'gelukkig', 'geluk', 'dik', 'druif', 'reus', 'eerder', 'fris',
    'frisse', 'kruk', 'duidelijk', 'akker', 'aarde', 'guur', 'haalde', 'kleurig',
    'lucifer', 'liefde', 'ruig', 'sluier',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'het', 'dat', 'dit', 'tijd', 'tafel', 'taal', 'tas', 'thee', 'thuis', 'iets', 'altijd',
    'straat', 'staat', 'stad', 'test', 'laat', 'straks', 'derde', 'rustig', 'feest',
    'fiets', 'kaart', 'hart', 'haast', 'heeft', 'eerst', 'lijst', 'rijst', 'fruit', 'kast',
    'gast', 'lastig', 'tekst', 'taart', 'tegel', 'trui', 'terug', 'jury', 'tuig', 'traag',
    'liter', 'later', 'sterk', 'ster', 'stil', 'stilte', 'uitje', 'leuk', 'leuke',
    'dertig',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'of', 'ook', 'door', 'wel', 'wat', 'wie', 'waar', 'wij', 'we', 'woord', 'wereld',
    'werk', 'wit', 'water', 'weg', 'week', 'weer', 'wijs', 'wolk', 'koud', 'goed', 'groot',
    'rood', 'oud', 'ouders', 'hoog', 'hoe', 'soort', 'sok', 'stoel', 'roos', 'toe', 'toets',
    'tot', 'fout', 'foto', 'hotel', 'kool', 'kost', 'koude', 'oog', 'oor', 'oost', 'rook',
    'sloot', 'slot', 'stok', 'trots', 'twee', 'twaalf', 'uw', 'wist', 'weet', 'wiel',
    'wijk', 'wijd', 'ooit', 'doel', 'goud', 'hoed', 'hoek', 'koek', 'koekje', 'kort',
    'hoofd', 'hoofdstad', 'wortel', 'dorst', 'fotograaf', 'wordt', 'hout', 'goede',
    'grote', 'oude', 'oudste', 'wijde', 'woest', 'worst', 'wedstrijd', 'weekdag',
    'etalage', 'deftig', 'fors',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'en', 'een', 'in', 'niet', 'nee', 'nu', 'naar', 'na', 'nog', 'noord', 'nieuw', 'nieuwe',
    'nacht', 'negen', 'tien', 'kunnen', 'gaan', 'staan', 'doen', 'kennen', 'denken',
    'lucht', 'licht', 'recht', 'echt', 'acht', 'achter', 'cijfer', 'citroen', 'concert',
    'dochter', 'kind', 'kinderen', 'hand', 'handen', 'land', 'landen', 'grond', 'rond',
    'onder', 'ander', 'andere', 'anders', 'tand', 'tanden', 'kant', 'krant', 'klant',
    'sneeuw', 'snel', 'snelle', 'trein', 'tuin', 'uien', 'eten', 'lang', 'lange', 'jong',
    'jongen', 'genoeg', 'honderd', 'keuken', 'koning', 'klein', 'kleine', 'nooit', 'niets',
    'nodig', 'oefenen', 'regen', 'regenen', 'richting', 'schoen', 'schoenen', 'tante',
    'toen', 'tegen', 'tuinen', 'uit', 'uitleg', 'winter', 'wind', 'winkel', 'winkels',
    'wachten', 'weinig', 'wonen', 'woning', 'eind', 'einde', 'eindelijk', 'tachtig',
    'achttien', 'dertien', 'negentig', 'drinken', 'dansen', 'fietsen', 'lachen', 'leren',
    'rennen', 'koken', 'kijken', 'hangen', 'horen', 'heten', 'gordijn', 'handig', 'haring',
    'erg', 'cent', 'centen', 'circus', 'lach', 'toch', 'ochtend', 'ochtenden', 'rechts',
    'links', 'slecht', 'gracht', 'grachten', 'kracht', 'tocht', 'wacht', 'ding', 'dingen',
    'ring', 'tong', 'eigen', 'geen', 'lente', 'agenda', 'fijn', 'fijne', 'school',
    'scholen', 'schrift', 'schoon', 'station', 'stations', 'tennis', 'garage', 'gewoon',
    'gewoonte', 'nicht', 'neef', 'koffie', 'kunst', 'cultuur', 'contact', 'deken',
    'danser', 'tekening', 'teken', 'kerstnacht', 'ontdekken', 'rekenen', 'reclame',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'me', 'mij', 'mijn', 'met', 'maar', 'meer', 'man', 'mens', 'mensen', 'moeder', 'maand',
    'morgen', 'middag', 'minuut', 'moet', 'moeten', 'mooi', 'markt', 'melk', 'meisje',
    'meneer', 'mevrouw', 'museum', 'misschien', 'kamer', 'kamers', 'naam', 'namen',
    'nemen', 'komen', 'kom', 'kwam', 'kwamen', 'samen', 'tomaat', 'tomaten', 'warm', 'arm',
    'ruim', 'van', 'voor', 'veel', 'vier', 'vijf', 'vis', 'vogel', 'vader', 'vandaag',
    'vaak', 'verder', 'vriend', 'vriendin', 'vrienden', 'vraag', 'vragen', 'vrij',
    'vrijdag', 'vroeg', 'vrouw', 'vorm', 'vol', 'avond', 'avonden', 'even', 'geven',
    'leven', 'over', 'hoeveel', 'woensdag', 'maandag', 'dinsdag', 'donderdag', 'maart',
    'mei', 'juni', 'juli', 'augustus', 'herfst', 'vlag', 'vliegen', 'vliegtuig', 'vloer',
    'verhaal', 'verhalen', 'verkeer', 'verkeerd', 'vergeten', 'verstaan', 'vinden', 'vind',
    'voeten', 'voet', 'vooral', 'vorige', 'gevonden', 'hemel', 'humor', 'klimmen',
    'moeilijk', 'makkelijk', 'minder', 'midden', 'modern', 'moment', 'mogen', 'maken',
    'meestal', 'meteen', 'maaltijd', 'aardig', 'dromen', 'emmer', 'gemeente', 'glimlach',
    'handdoek', 'komt', 'nummer', 'nummers', 'oom', 'rivier', 'stem', 'storm', 'stroom',
    'tram', 'vakantie', 'avontuur', 'wandelen', 'waarom', 'wolken', 'kilometer', 'veertig',
    'vijftig', 'veertien', 'vijftien', 'ongeveer', 'schrijven', 'televisie', 'thema',
    'moestuin', 'mooie', 'vriendelijk', 'vertrekken', 'verjaardag', 'drama', 'wekker',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'op', 'pen', 'papier', 'plaats', 'plan', 'park', 'post', 'praten', 'prijs', 'prima',
    'punt', 'pakken', 'paard', 'pas', 'plant', 'planten', 'plein', 'politie', 'appel',
    'appels', 'aardappel', 'hoop', 'hopen', 'kopen', 'kop', 'kopje', 'lopen', 'loop',
    'open', 'openen', 'opa', 'opnieuw', 'opstaan', 'soep', 'spel', 'spelen', 'sport',
    'spreken', 'spiegel', 'stap', 'stoep', 'stop', 'trap', 'typen', 'type', 'groep',
    'groepen', 'helpen', 'hulp', 'lamp', 'lampen', 'knop', 'knoppen', 'pinda',
    'pannenkoek', 'april', 'pakket', 'peer', 'peper', 'plek', 'poes', 'potlood',
    'precies', 'prettig', 'patat', 'computer', 'kapot', 'kip', 'schip', 'schepen',
    'slapen', 'slaap', 'spoor', 'tip', 'waarop', 'aquarium', 'opletten', 'oppervlak',
    'pauze', 'paraplu', 'pijl', 'piano', 'papa', 'mama', 'oma', 'kampeer', 'kamperen',
    'pret', 'plezier', 'spullen', 'springen', 'sprong', 'toppen', 'appelmoes',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bij', 'ben', 'bent', 'boek', 'boeken', 'boom', 'bomen', 'brood', 'broer', 'brief',
    'brug', 'bus', 'bed', 'beter', 'beste', 'begin', 'beginnen', 'blauw', 'blij', 'bloem',
    'bloemen', 'boot', 'bord', 'boven', 'buiten', 'buren', 'buurman', 'buurvrouw',
    'bureau', 'boer', 'boter', 'berg', 'bergen', 'bericht', 'betalen', 'bibliotheek',
    'hebben', 'hebt', 'heb', 'blijven', 'blijft', 'boodschappen', 'ober', 'oktober',
    'november', 'december', 'september', 'hobby', 'baby', 'tabel', 'fabriek', 'kabel',
    'geboren', 'gebruik', 'gebruiken', 'gebeurt', 'gebouw', 'probleem', 'problemen',
    'proberen', 'bijna', 'bijvoorbeeld', 'taxi', 'examen', 'extra', 'luxe', 'exact',
    'excuus', 'mixen', 'saxofoon', 'ontbijt', 'bank', 'banken', 'bal', 'ballen', 'bakker',
    'bakken', 'beetje', 'breed', 'bruin', 'bril', 'blad', 'bladeren', 'lucifers', 'hemd',
    'februari', 'januari', 'belangrijk', 'bezoeken', 'beneden', 'bloes', 'boterham',
    'boterhammen', 'fabel', 'lift', 'rib',

    // --- + z ´  (u2-l08) ----------------------------------------------------------------
    // `z` mở ra zijn, ze, zo — những từ ngắn nhất và hay gặp nhất. `´` mở ra `é`.
    'zijn', 'zij', 'ze', 'zo', 'zon', 'zee', 'zeer', 'zes', 'zeven', 'zien', 'zitten',
    'zeggen', 'zelf', 'zelfs', 'zaak', 'zaal', 'zak', 'zand', 'zacht', 'zomer', 'zondag',
    'zaterdag', 'zestig', 'zeventig', 'zeker', 'zetten', 'zoeken', 'zout', 'zuid', 'zus',
    'zwaar', 'zwart', 'zwemmen', 'zin', 'zinnen', 'zoon', 'zorg', 'zorgen', 'zullen',
    'zal', 'zou', 'zouden', 'zuur', 'lezen', 'reizen', 'gezin', 'gezond', 'gezicht',
    'duizend', 'muziek', 'huizen', 'kiezen', 'bezoek', 'bezig', 'pizza', 'quiz', 'deze',
    'dezelfde', 'zwembad', 'ezel', 'gezellig', 'zeep', 'zilver', 'zuinig', 'zolder',
    'zoet', 'zegt', 'zeventien', 'zestien', 'zuster', 'zwemles', 'vriezer', 'vergadering',
    'verzamelen', 'zonnig', 'zoveel', 'trouwens', 'rugzak', 'zakdoek', 'zebra',
    'één', 'café', 'cafés', 'privé', 'comité', 'cliché', 'logé', 'rosé', 'coupé',

    // --- + ¨  (u3-l02, cột ngoài) -------------------------------------------------------
    // Phím chết ¨ + nguyên âm = ë ï ö ü. Hiếm, nhưng có thật trong văn viết hằng ngày.
    'ideeën', 'zeeën', 'knieën', 'drieën', 'tweeën', 'patiënt', 'patiënten', 'financiële',
    'officiële', 'efficiënt', 'poëzie', 'ruïne', 'naïef', 'reünie', 'coördinatie',
    'hygiëne', 'geïnteresseerd', 'ingrediënt', 'ingrediënten', 'cliënt', 'kopiëren',
    'categorieën', 'industrieën', 'ruïnes', 'geëerd',

    // --- dấu nháy: chỉ họ Mac gõ được (ô Quote = ') --------------------------------------
    "auto's", "foto's", "zo'n", "menu's", "radio's", "baby's", "opa's", "oma's", "video's",
    "hobby's", "taxi's", "piano's"
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ.
     Không tên nào bắt đầu bằng `ij`: generator chỉ viết hoa chữ đầu, và "Ijsbrand" là sai. */
  names: [
    'emma', 'sanne', 'lotte', 'anna', 'julia', 'sophie', 'eva', 'fleur', 'lisa', 'noor',
    'daan', 'sem', 'lucas', 'milan', 'thomas', 'bram', 'jesse', 'ruben', 'lars', 'tim',
    'amsterdam', 'utrecht', 'leiden', 'delft', 'haarlem', 'breda', 'zwolle', 'gouda'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Không câu nào bắt đầu bằng `ij` hay
     `'s` — chữ hoa đầu câu sẽ sai. Năm câu đầu gõ được ngay sau unit 1 (chưa có n, t, o). */
  sentences: [
    'ik lees hier elke dag',
    'die jas is erg duur',
    'hij is al klaar',
    'de kaas is heerlijk',
    'de reis is duur',
    'de kat slaapt op de warme bank',
    'mijn broer woont in een klein huis aan het water',
    'we drinken koffie in de keuken',
    'het regent al de hele ochtend',
    'de trein naar de stad vertrekt om negen uur',
    'ze leest elke avond een boek voor het slapen',
    'op zaterdag gaan we naar de markt',
    'de kinderen spelen buiten in de tuin',
    'hij fietst elke dag naar zijn werk',
    'er staat een grote boom voor het huis',
    'mijn moeder bakt een taart voor mijn verjaardag',
    'in de winter wordt het vroeg donker',
    'wil je nog een kopje thee',
    'ik wil leren typen zonder naar het toetsenbord te kijken',
    'de winkel op de hoek is tot zes uur open',
    'we wandelen samen langs de rivier',
    'het museum is op maandag gesloten',
    'de bus was vandaag een beetje laat',
    'elke vinger heeft zijn eigen toetsen',
    'na het werk koken we samen',
    'mijn zus schrijft een brief aan haar oma',
    'de zon schijnt en de lucht is blauw'
  ]
};
