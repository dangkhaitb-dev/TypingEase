/* data/words/pl.js — kho từ tiếng Ba Lan cho khoá /pl/ (và họ /pl/qwertz/).
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * HAI HỌ, HAI SỐ PHẬN CHO CÙNG MỘT KHO.
 *
 *   `pl` (mặc định, bố cục 102 "Polish (programmer)" + 201): chính là QWERTY Mỹ. Đây là bàn phím
 *   mà gần như mọi người Ba Lan dùng, và trên nó ą ć ę ł ń ó ś ź ż gõ bằng AltGr (Alt phải) + chữ
 *   gốc. Player CHƯA biết chỉ AltGr, nên khoá này không dạy AltGr — và `typeableWith` tự loại
 *   MỌI từ có dấu khỏi họ này. Vì thế phần lớn kho dưới đây cố ý là từ tiếng Ba Lan KHÔNG dấu
 *   (dom, kot, woda, rano, kiedy, jeszcze, przez…): chúng là từ thật, viết đúng chính tả, và
 *   tiếng Ba Lan có rất nhiều từ như vậy. Không có từ nào bị bỏ dấu cho vừa bàn phím.
 *   Thứ tự phím:
 *     f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *     t y · o w · c n · m v · [ôn] · q p · b x · z . , ' · Shift+Enter · [yếu] · [kiểm tra]
 *     hàng số · / - = [ ] \ · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 *   Nhóm bên dưới ghi theo mốc này.
 *
 *   `pl-qwertz` (bố cục 200 "Polish (QWERTZ)"): chữ Ba Lan có ô riêng. ł ở ô Semicolon (bài 4),
 *   ą ở ô Quote (u2-l08), ę = Shift + ą (mở ở bài Shift, xem `families.qwertz.shiftUnlocks`),
 *   ż ś ó ở cột ngoài (u3-l02). ń ć ź là tầng Shift của ż ś ó — chúng chỉ tới ở unit 4 "mọi phím
 *   còn lại", nên từ chứa ń ć ź (dzień, być, późno…) KHÔNG xuất hiện trong bài nào của unit 1–3.
 *   Chúng vẫn ở trong kho vì weak-keys.js và vì chúng là tiếng Ba Lan bình thường. Trên QWERTZ,
 *   z ở ô KeyY (u2-l01) và y ở ô KeyZ (u2-l08) — ngược với họ mặc định.
 *
 * NGUỒN GỐC. Từ vựng thông dụng, dựng độc lập, soát tay. Không lấy từ nội dung bài của site dạy
 * gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ chữ trong `alphabet`. Không chữ hoa (Shift dạy muộn), không gạch nối.
 *   - Chính tả chuẩn. Từ có dấu thì viết ĐỦ dấu — không bao giờ "dzien" thay cho "dzień".
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị hay khó chịu khi
 *     bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.pl = {
  lang: 'pl',

  // q v x có trong bảng chữ vì bàn phím có chúng, dù từ Ba Lan gần như không dùng.
  alphabet: 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż',

  words: [
    // --- a s d f j k l ;  (u1-l04) ------------------------------------------------------
    // Hàng cơ sở chỉ có một nguyên âm là a — danh sách ngắn, và đó là hình dạng thật của
    // ràng buộc, không phải chỗ trống cần độn từ bịa.
    'a', 'ja', 'da', 'dla', 'las', 'sad', 'dal', 'sala', 'fala', 'lalka', 'laska', 'kasa',
    'klasa', 'skala', 'kajak', 'jak', 'jaka', 'fajka', 'jajka', 'kask', 'salsa',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'hak', 'hala', 'gaj', 'flaga', 'gala', 'saga', 'haka', 'flagi',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'i', 'ale', 'lek', 'leki', 'lis', 'lisa', 'ile', 'kilka', 'klej', 'kleje', 'fale', 'sale',
    'liga', 'lekki', 'lekka', 'idea', 'idee', 'jedli', 'kafelek', 'kafelki', 'hej', 'sieje',
    'dali', 'jajek', 'lalek', 'lalki', 'laski', 'klasie', 'sali', 'fali', 'kiedyś',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'u', 'ul', 'dar', 'rak', 'rura', 'ruda', 'kura', 'kula', 'ser', 'sera', 'gra', 'grad',
    'druk', 'rejs', 'kurs', 'raj', 'rada', 'radar', 'kefir', 'lider', 'seria', 'kreda',
    'harfa', 'dres', 'skarga', 'kasjer', 'figura', 'ulga', 'sfera', 'kara', 'rasa', 'jaskier',
    'druga', 'drugi', 'drugie', 'kurier', 'grudka', 'dary', 'gry', 'kule', 'kury', 'rady',
    'sklejka', 'kasjerka', 'rakiety', 'serial', 'seriale', 'figury',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'ty', 'tak', 'tu', 'tata', 'taki', 'taka', 'takie', 'tutaj', 'list', 'lista', 'listy',
    'stary', 'stara', 'stare', 'tyle', 'fakt', 'fakty', 'karta', 'karty', 'tekst', 'teksty',
    'kurtka', 'latarka', 'gitara', 'gitary', 'styl', 'stal', 'strata', 'trasa', 'trudy',
    'teatr', 'teatry', 'rajd', 'jest', 'jaki', 'jakie', 'dieta', 'litera', 'litery', 'sufit',
    'turysta', 'turystka', 'sztuka', 'sery', 'kasety', 'tygrys', 'fryzjer',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'o', 'w', 'do', 'to', 'od', 'kot', 'koty', 'woda', 'wody', 'lato', 'rok', 'roku', 'lata',
    'rower', 'rowery', 'worek', 'wtorek', 'wiatr', 'sowa', 'gotowy', 'gotowa', 'gotowe',
    'ogrody', 'droga', 'drogi', 'drogo', 'dwa', 'dwie', 'twoja', 'twoje', 'twoi', 'okres',
    'kolor', 'kolory', 'kolej', 'kolega', 'fotel', 'fotele', 'lot', 'loty', 'los', 'losy',
    'waga', 'wola', 'wiele', 'wiek', 'wieku', 'wieki', 'tego', 'tej', 'jej', 'jego', 'lody',
    'kwiat', 'kwiaty', 'otwarte', 'otwarty', 'otwarta', 'wiadro', 'klawiatura', 'klawiatury',
    'towar', 'wideo', 'gdy', 'woli', 'wiersz', 'stolik', 'stoliki', 'foto',
    'kolorowy', 'kolorowe', 'drewno', 'wtorki', 'swoje', 'swoja', 'swoi', 'wraca',
    'wiedzie', 'dworek', 'stoi', 'wujek', 'rokiem', 'kolegi',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'nie', 'na', 'co', 'ten', 'on', 'ona', 'ono', 'oni', 'one', 'noc', 'nic', 'nigdy', 'nikt',
    'noga', 'nogi', 'niego', 'nas', 'nowy', 'nowa', 'nowe', 'okno', 'okna', 'kino', 'kina',
    'wino', 'ciasto', 'ciocia', 'cicho', 'cena', 'ceny', 'cel', 'cele', 'cyfra', 'cyfry',
    'cukier', 'tani', 'tania', 'tanie', 'tanio', 'sen', 'sok', 'dane', 'danie', 'dania',
    'ciekawy', 'ciekawa', 'ciekawe', 'cienki', 'ciotka', 'jeden', 'jedna', 'jedno', 'jednak',
    'nauka', 'nauki', 'lekcja', 'lekcje', 'ulica', 'ulice', 'ulicy', 'taniec', 'okienko',
    'ogon', 'sekunda', 'sekundy', 'kolacja', 'kolacje', 'sytuacja', 'akcja', 'nowina',
    'ocean', 'tenis', 'kolano', 'kolana', 'ciasno', 'winda', 'nagroda', 'koniec', 'wiosna',
    'stacja', 'stacje', 'ranek', 'rano', 'notes', 'notatka', 'notatki', 'ekran', 'ekrany',
    'kiedy', 'nad', 'cicha', 'ciche', 'cichy', 'drogie', 'cytryna', 'cytryny', 'cebula',
    'kuchnia', 'kuchni', 'salon', 'kraj', 'kraje', 'niedziela', 'niedziele',
    'ludzie', 'rodzina', 'rodzice', 'godzina', 'godziny', 'jedzie', 'idzie',
    'siedzi', 'widzi', 'wie', 'zna', 'teraz', 'licznik', 'tory', 'strona', 'strony',
    'trudny', 'trudna', 'trudne', 'niski', 'niska', 'niskie', 'wysoki', 'wysoka', 'wysokie',
    'czerwony', 'dziecko', 'dzieci', 'dzisiaj', 'dziadek', 'dziennik', 'gdzie', 'niebo',
    'wolny', 'wolna', 'wolne', 'jesieni', 'kanion', 'ciocie', 'wiecie',
    'wiosny', 'wieczorem', 'ogniska', 'ognisko', 'tancerka',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'ma', 'mam', 'mama', 'mamy', 'mi', 'mnie', 'moja', 'moje', 'moi', 'mocno', 'mleko',
    'miasto', 'miasta', 'miejsce', 'most', 'mosty', 'matka', 'metro', 'minuta', 'minuty',
    'dom', 'domu', 'domy', 'domek', 'temat', 'tematy', 'system', 'tam', 'tamten', 'nam', 'wam',
    'sam', 'sama', 'samo', 'moc', 'mrok', 'mimo', 'motyl', 'komin', 'kamienie', 'ramka',
    'rama', 'mocny', 'mokry', 'mokra', 'mokre', 'imiona', 'moment', 'momenty', 'firma',
    'film', 'filmy', 'maj', 'metr', 'metry', 'miara', 'kamyk', 'kamyki', 'ramiona', 'im',
    'mieszkanie', 'mieszka', 'mieszkam', 'miejsca', 'miesza', 'muzeum', 'makaron',
    'marchew', 'moda', 'modny', 'mokro', 'numer', 'numery', 'tramwaj', 'samolot', 'komputer',
    'telefon', 'telefony', 'dym', 'rytm', 'rytmy', 'mecz', 'motor', 'mniej', 'myszka',
    'kotlet', 'kurczak', 'smutny', 'smutna', 'suchy', 'sucha', 'zimny', 'zima', 'zimno',
    'weto',

    // --- + q p  (u2-l06) — q không có trong từ Ba Lan ------------------------------------
    'po', 'pod', 'pan', 'pani', 'panie', 'pies', 'psa', 'praca', 'prace', 'park', 'parki',
    'piec', 'piosenka', 'piosenki', 'pomoc', 'pomocy', 'pokoje', 'potem', 'powoli', 'prosto',
    'prawda', 'prawo', 'prawie', 'papier', 'pole', 'pola', 'pomidor', 'pomidory', 'pora',
    'pory', 'plan', 'plany', 'plac', 'place', 'plecak', 'plecaki', 'poranek', 'pogoda',
    'pogody', 'punkt', 'punkty', 'lampa', 'lampy', 'mapa', 'mapy', 'sklep', 'sklepy',
    'lipiec', 'kopia', 'kapusta', 'kupuje', 'spacer', 'spacery', 'sport', 'sporty', 'sprawa',
    'sprawy', 'tempo', 'kapitan', 'pilot', 'pilnie', 'pewnie', 'pytanie', 'pytania', 'pytam',
    'palce', 'palec', 'pije', 'pisze', 'piszemy', 'pisz', 'patrz', 'patrzy', 'apteka',
    'poczta', 'program', 'programy', 'plik', 'pliki', 'pianino', 'koperta', 'pieprz',
    'kapelusz', 'szpital', 'lotnisko', 'autobus', 'portfel', 'pusty', 'pusta', 'puste',
    'prosty', 'prosta', 'proste', 'pracuje', 'pracujemy', 'pomaga', 'pyta', 'spokojnie',
    'przepraszam', 'przed', 'przez', 'przy', 'przyjaciel', 'przyjaciele', 'spotkanie',
    'dopiero', 'napisy', 'kupiec', 'tapeta', 'opera', 'pierwszy', 'pierwsza',

    // --- + b x  (u2-l07) — x cũng không có -----------------------------------------------
    'bo', 'bar', 'brat', 'bilet', 'bilety', 'brak', 'brama', 'bank', 'banku', 'bajka',
    'bajki', 'bok', 'boki', 'but', 'buty', 'obiad', 'obiady', 'obok', 'dobry', 'dobra',
    'dobre', 'chleb', 'robota', 'robi', 'robimy', 'ryba', 'ryby', 'sobota', 'soboty', 'osoba',
    'osoby', 'tablica', 'tablicy', 'tabela', 'herbata', 'herbaty', 'babcia', 'kubek', 'kubki',
    'ubranie', 'ubrania', 'obecnie', 'biurko', 'biurka', 'biuro', 'biblioteka', 'problem',
    'problemy', 'oba', 'obie', 'bieg', 'biega', 'biegnie', 'banan', 'banany', 'kabel',
    'kable', 'blok', 'bloki', 'globus', 'lubi', 'lubimy', 'lubisz', 'balkon', 'boisko',
    'niebieski', 'niebieska', 'niebieskie', 'obraz', 'obrazy', 'bardzo', 'burza', 'bluzka',
    'torba', 'torby', 'farba', 'farby', 'baton', 'robot', 'biel', 'herb', 'bez', 'zabawa',
    'zabawki', 'grzyby', 'grzyb',

    // --- + z . , '  (u2-l08) ------------------------------------------------------------
    // Trên họ mặc định z tới muộn, nên cz sz rz dz — một nửa tiếng Ba Lan — mở ra ở đây.
    'z', 'za', 'ze', 'raz', 'razem', 'zaraz', 'zawsze', 'zamek', 'zdanie', 'zdania',
    'zadanie', 'zadania', 'zegar', 'zegarek', 'zielony', 'zielona', 'zielone', 'zero', 'zoo',
    'zupa', 'zupy', 'czas', 'czasu', 'czasem', 'czy', 'czyta', 'czytam', 'czytamy', 'czysty',
    'czysta', 'czyste', 'czarny', 'czarna', 'czarne', 'cztery', 'czeka', 'czekam', 'szafa',
    'szafy', 'szansa', 'szybko', 'szybki', 'szybka', 'szyba', 'szary', 'szara', 'szare',
    'nasz', 'nasza', 'nasze', 'wasz', 'wasza', 'wszystko', 'wszyscy', 'rzeka', 'rzeki',
    'rzecz', 'rzeczy', 'trzeba', 'trzy', 'brzeg', 'drzewo', 'drzewa', 'drzwi', 'jezioro',
    'muzyka', 'morze', 'morza', 'gazeta', 'gazety', 'lekarz', 'lekarze', 'koszula', 'koszyk',
    'kasza', 'mysz', 'cisza', 'ciszy', 'wiedza', 'zeszyt', 'zeszyty', 'zapach', 'zamknij',
    'warzywa', 'zdrowie', 'zdrowy', 'zdrowa', 'brzuch', 'rzadko', 'marzec', 'dworzec',
    'orzech', 'klawisz', 'klawisze', 'jeszcze', 'wczoraj', 'dzwoni', 'szuka', 'szukam',
    'czwartek', 'czerwiec', 'deszcz', 'gwiazda', 'gwiazdy', 'chmura', 'chmury', 'wiatrak',
    'szynka', 'kucharz', 'kierowca', 'nauczyciel', 'uczy', 'rozumie', 'znam', 'znasz',
    'wiesz', 'dziewczyna', 'zawody', 'wyraz', 'wyrazy', 'raczej', 'znowu', 'wtedy', 'nadal',
    'chyba', 'blisko', 'daleko', 'wysoko', 'nisko', 'siedem', 'osiem', 'sto', 'jutro',
    'dlaczego', 'kto', 'razy', 'ziemniak', 'ziemniaki', 'czosnek', 'truskawka', 'truskawki',
    'gruszka', 'gruszki', 'winogrona', 'owoc', 'owoce', 'jajko', 'kawa', 'kawy',
    'szkolny', 'szklanka', 'wieczory', 'zegary', 'poczekaj', 'zobacz', 'zaczyna',
    'otwiera', 'zamyka', 'wstaje', 'rysuje', 'maluje', 'gotuje', 'piecze', 'sprzedaje',
    'odpowiada', 'spaceruje', 'kupujemy', 'macie', 'wiemy', 'ich', 'go', 'mu', 'my',
    'wy', 'ci', 'te', 'ta', 'sernik', 'urodziny', 'prezent', 'prezenty', 'szkoda',

    // --- chỉ họ QWERTZ: ł ą ę ż ś ó ----------------------------------------------------
    // ł từ bài 4, ą từ u2-l08, ę từ bài Shift, ż ś ó từ u3-l02. Trên họ mặc định tất cả tự rơi
    // ra vì chúng cần AltGr. Không có ń ć ź ở nhóm này: xem đầu file.
    'dał', 'jadł', 'kładł', 'ład', 'skład', 'łaska', 'łasa', 'fałda', 'szkła',
    'był', 'była', 'było', 'byłam', 'mało', 'mały', 'mała', 'małe', 'cały', 'cała', 'całe',
    'głowa', 'głowy', 'słowo', 'słowa', 'szkoła', 'szkoły', 'łatwo', 'łatwy', 'łatwa',
    'ładny', 'ładna', 'ładne', 'ładnie', 'długi', 'długa', 'długo', 'biały', 'biała', 'białe',
    'masło', 'mydło', 'krzesło', 'jabłko', 'jabłka', 'łazienka', 'ławka', 'głos', 'kłopot',
    'złoty', 'złota', 'złoto', 'ciepło', 'ciepły', 'ciepła', 'miły', 'miła', 'słownik',
    'wiosło', 'bułka', 'bułki', 'łyżka', 'łyżki', 'łóżko', 'ołówek', 'półka', 'stół', 'pół',
    'są', 'mąka', 'prąd', 'błąd', 'wąski', 'wąska', 'mądry', 'mądra', 'tysiąc', 'miesiąc',
    'pociąg', 'okrągły', 'ciągle', 'książka', 'książki', 'gąbka', 'dąb', 'ząb', 'łąka',
    'się', 'idę', 'mogę', 'chcę', 'piszę', 'robię', 'lubię', 'będę', 'będzie', 'proszę',
    'dziękuję', 'ręka', 'ręce', 'język', 'języki', 'mięso', 'więc', 'tędy', 'wędka', 'zęby',
    'piękny', 'piękna', 'pięknie', 'ciężki', 'ciężko', 'wszędzie', 'błędy', 'błędów',
    'że', 'już', 'może', 'też', 'także', 'dużo', 'duży', 'duża', 'duże', 'każdy', 'każda',
    'każde', 'ważny', 'ważne', 'żaba', 'żona', 'życie', 'żart', 'żarty', 'żeby', 'żaden',
    'żadna', 'leży', 'leżą', 'również', 'podróż', 'róża', 'świeży',
    'coś', 'ktoś', 'gdzieś', 'środa', 'środek', 'ślad', 'śnieg', 'świat', 'światło', 'święto',
    'ściana', 'ściany', 'śmiech', 'śliwka', 'śpi', 'śpiewa', 'wieś', 'wcześnie', 'jesteś',
    'mój', 'który', 'która', 'które', 'córka', 'córki', 'góra', 'góry', 'ogród', 'próba',
    'powód', 'wschód', 'zachód', 'północ', 'dół', 'ósmy', 'szósty', 'ogórek', 'mówi', 'mówię',
    'wrócę', 'kółko',

    // --- ń ć ź: chỉ tới ở unit 4 của QWERTZ, không dùng trong unit 1–3 của họ nào -------
    'dzień', 'koń', 'być', 'mieć', 'pięć', 'sześć', 'późno', 'źle', 'dłoń', 'jesień',
    'słońce', 'miłość', 'kończy', 'tańczy', 'wiśnia', 'uczeń', 'zdjęcie'
  ],

  /* Tên riêng cho bài dạy Enter (mỗi tên một dòng). Tên có Ł chỉ gõ được trên QWERTZ; không tên
     nào bắt đầu bằng Ś Ż Ó — Shift + ô đó trên QWERTZ in ra ć ń ź, không phải chữ hoa. */
  names: [
    'anna', 'ewa', 'adam', 'piotr', 'marek', 'kasia', 'tomek', 'jan', 'maria', 'zofia',
    'karol', 'olga', 'magda', 'agata', 'wojtek', 'ola', 'kuba', 'marta', 'jacek', 'basia',
    'igor', 'krzysztof', 'paweł', 'łukasz', 'michał',
    'warszawa', 'lublin', 'sopot', 'opole', 'radom', 'kielce', 'gdynia', 'kraków', 'wrocław'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm.
     Nhóm đầu KHÔNG có chữ có dấu nào — họ mặc định chỉ gõ được nhóm này, nên nó phải đủ dài cho
     sáu màn đoạn văn mà không lặp quá nhiều. Mỗi câu vẫn phải là tiếng Ba Lan tự nhiên, không
     phải câu bị lột dấu. Nhóm sau có ł ą ę ż ś ó (không ń ć ź) và chỉ QWERTZ dùng tới. */
  sentences: [
    'to jest nasz nowy dom',
    'kot pije mleko w kuchni',
    'mama kupuje chleb i ser',
    'jutro rano idziemy do parku',
    'w lesie jest cicho i ciemno',
    'moja siostra mieszka nad morzem',
    'lubimy spacery po lesie',
    'okno w kuchni jest otwarte',
    'na stole stoi kubek herbaty',
    'brat gra na gitarze',
    'pies czeka przy drzwiach',
    'wieczorem pada deszcz',
    'nauczyciel pisze na tablicy',
    'w zimie jest bardzo zimno',
    'kawa stoi na biurku',
    'ile kosztuje ten chleb',
    'nasz dom ma zielone okna',
    'rower stoi przed domem',
    'ten film jest bardzo dobry',
    'babcia piecze sernik na urodziny',
    'dziecko rysuje kota',
    'poczekaj na mnie przy bramie',
    'wiatr wieje od morza',
    'to jest moja ulubiona piosenka',
    'czy masz czas jutro wieczorem',
    'pisz powoli i patrz na ekran',
    'zamknij okno bo jest zimno',
    'w tym roku jedziemy nad morze',
    'codziennie piszemy na klawiaturze bez patrzenia na palce',

    'ta książka leży na półce',
    'dzisiaj jest ładna pogoda',
    'mój brat mieszka w małym mieście',
    'idę do sklepu po chleb i masło',
    'w środę mamy lekcję polskiego',
    'pociąg przyjeżdża o ósmej',
    'wszyscy siedzą przy dużym stole',
    'ona pisze szybko i bez błędów',
    'mój pies lubi długie spacery',
    'wieczorem czytam książkę',
    'lato było ciepłe i słoneczne',
    'rano piję kawę z mlekiem',
    'na dworze pada śnieg',
    'moja córka dużo czyta',
    'dziękuję za pomoc',
    'ręce leżą spokojnie na klawiaturze',
    'palce wracają na swoje miejsce'
  ]
};
