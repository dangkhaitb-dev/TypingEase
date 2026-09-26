/* i18n/ui.pl.js — lớp tiếng Ba Lan.
 *
 * Nạp bởi mọi trang dưới /pl/, bằng <script src="/i18n/ui.pl.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên — khoá thiếu ở đây thì hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC với bảng
 * nó ghi đè (xem i18n/ui.es.js).
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — đừng
 * thêm `defer`.
 *
 * Xưng hô bằng "ty", nhất quán, và tránh thì quá khứ ngôi hai (ukończyłeś/ukończyłaś) vì nó bắt
 * phải đoán giới tính người học.
 */
window.TypingEaseUI = {
  lang: 'pl',

  /* Tuyệt đối, vì /pl/nauka/ nằm sâu hai cấp. */
  routes: {
    home: '/pl/',
    lessons: '/pl/lekcje/',
    learn: '/pl/nauka/',
    // Chưa có các trang này bằng tiếng Ba Lan. `null` = bỏ liên kết.
    test: '/pl/test-pisania/',
    progress: '/pl/postepy/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /pl/ */
  home: {
    nav: ['Ćwicz', 'Kurs'],
    roadmapKicker: '{total} lekcji · {units} części',
    roadmapAll: 'Zobacz wszystkie lekcje ({total}) →',
    unitTitle: 'Część {index} · {title}',
    unitDone: '{done}/{total} lekcji ✓',
    railDone: '✓',
    railSoon: 'Wkrótce',
    railNote: 'Kolejne części są w przygotowaniu — lekcje, które nie są jeszcze otwarte, są wyszarzone.',
    teaser: 'Część {index} · {title} (lekcje: {count})',
    teaserLocked: '🔒',
    shortcutsTitle: 'Więcej ćwiczeń',
    shortcuts: [
      ['Test szybkości', 'Zmierz, ile słów na minutę piszesz i jak dokładnie.'],
      ['Słabe klawisze', 'Ćwiczenia z klawiszy, które mylisz najczęściej.'],
      ['Wolne pisanie', 'Wklej własny tekst i przepisz go po swojemu.']
    ],
    continueKicker: 'KONTYNUUJ',
    continueName: 'Lekcja {n} · {title}',
    continueCount: 'Część {unit} · ekran {screen}/{screens}',
    continueGo: '▶ Kontynuuj (Enter)',
    continueRedo: '↻ Powtórz lekcję {n}',
    continueMap: 'Zobacz kurs',
    streak: '🔥 dni z rzędu: {days} · dziś {minutes} min',
    coachWeak: 'Uwaga: <b>{keys}</b> spowalniają cię — minuta ćwiczeń z nimi?',
    legacy: 'Lekcje ukończone w poprzednim kursie: {n} — części 1 i 2 są już otwarte.',
    doneKicker: 'UTRZYMAJ RYTM',
    doneName: 'Wszystko, co jest napisane, masz już za sobą',
    doneCount: 'Następna część jest w drodze. Powtórz jakąś lekcję, żeby nie stracić rytmu.',
    doneGo: '▶ Zobacz kurs (Enter)',
    exploreKicker: 'Zasoby TypingEase',
    footer: 'Pisz trochę wolniej, a zajdziesz dużo dalej.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Poznaj TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Ba Lan không bao giờ đặt inputMode
     "telex". */
  player: {
    loading: 'Wczytywanie lekcji…',
    missingTitle: 'Ta lekcja nie ma jeszcze treści',
    missingBody: 'Nic nie zostało wczytane z <code>{path}</code>. Lekcja jest jeszcze pisana — spróbuj później albo wybierz inną w kursie.',
    noCurriculum: 'Nie udało się wczytać spisu kursu (<code>data/curriculum.pl.js</code>).',
    fixtureNote: 'Działa na przykładowej treści z <code>hoc/_fixture/</code> — prawdziwej lekcji nie ma jeszcze w <code>data/lessons/</code>.',
    screenOf: 'Ekran {n} / {total}',
    newKey: 'NOWY KLAWISZ',
    pressToContinue: 'Naciśnij <b>{key}</b>, aby przejść dalej',
    enterToContinue: 'Naciśnij <b>Enter</b>, aby przejść dalej',
    found: 'To ten.',
    foundBody: 'Zapamiętaj, gdzie jest <b>{key}</b> — teraz go poćwiczymy.',
    accuracyLive: 'dokładność {accuracy}%',
    errorsLive: 'błędy: {count}',
    tokensLive: 'słowa: {count}',
    great: 'Świetnie.',
    good: 'Bardzo dobrze.',
    pass: 'Zaliczone.',
    fail: 'Poniżej {min}% — warto powtórzyć ten ekran.',
    resultAccuracy: 'dokładność {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: 'błędy: {count}',
    resultTokens: 'poprawne słowa: {count}',
    slowKey: '<b>{key}</b> był twoim najwolniejszym klawiszem ({ms} s na jedno naciśnięcie) — niech palec do niego sięga i od razu wraca do rzędu podstawowego.',
    keepAccuracy: 'Zwolnij, a dokładność wzrośnie — szybkość przychodzi potem, nigdy odwrotnie.',
    continueEnter: 'Dalej → (Enter)',
    redoScreen: 'Powtórz ten ekran',
    redoScreenAdvised: 'Powtórz ten ekran (zalecane)',
    skipScreen: 'Pomiń',
    lessonDone: 'UKOŃCZONO',
    learned: 'Znasz już tyle klawiszy: {count}',
    statWpm: 'Szybkość',
    statAccuracy: 'Dokładność',
    statTime: 'Czas',
    statStars: 'Gwiazdki',
    technique: 'Warto zapamiętać',
    weakTitle: 'Klawisze, które warto poćwiczyć',
    weakButton: 'Poćwicz minutę',
    unitProgress: '{unit} · {done}/{total} lekcji',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Wróć na stronę główną (Enter)',
    redoLesson: '↻ Zacznij lekcję od nowa',
    home: 'Strona główna',
    noMoreTitle: 'To koniec tego, co jest już napisane',
    noMoreBody: 'Następna część jest jeszcze w przygotowaniu. W międzyczasie powtórz jakąś lekcję — drugie przejście w dobrym tempie daje więcej, niż się wydaje.',
    notReadyTitle: 'Ta lekcja nie ma jeszcze treści',
    notReadyBody: '<b>{title}</b> jest w kursie, ale jej treść jest jeszcze pisana. Wybierz lekcję, która jest już otwarta.',
    weakPage: 'Ćwiczenie słabych klawiszy',
    badgeNew: 'Nowa odznaka',
    badgeAll: 'Zobacz wszystkie odznaki →',
    shiftFinger: 'mały palec drugiej ręki',
    testPage: 'Test szybkości',
    mobileNote: 'Ten kurs jest zrobiony do klawiatury komputera — dziesięć palców potrzebuje dziesięciu prawdziwych klawiszy. Możesz go wypróbować na telefonie, ale do nauki wróć do klawiatury.',
    mobileNoteClose: 'Rozumiem',
    tapToType: 'Dotknij, aby pisać',
    menuTitle: 'Pauza',
    menuResume: 'Pisz dalej',
    menuRedo: 'Powtórz ten ekran',
    menuSkip: 'Pomiń ten ekran',
    menuExit: 'Wróć na stronę główną',
    clock: '{seconds} s',
    lessonNumber: 'Lekcja {number}',
    pageTitle: 'Lekcja · TypingEase',
    screenTip: 'Ekran {number} · {type}',
    firstLesson: 'Wróć do pierwszej lekcji'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'lewy mały palec', LR: 'lewy palec serdeczny', LM: 'lewy palec środkowy',
    LI: 'lewy palec wskazujący', LT: 'lewy kciuk',
    RT: 'prawy kciuk', RI: 'prawy palec wskazujący', RM: 'prawy palec środkowy',
    RR: 'prawy palec serdeczny', RP: 'prawy mały palec'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'lewy mały palec', 'left-ring': 'lewy palec serdeczny',
    'left-middle': 'lewy palec środkowy', 'left-index': 'lewy palec wskazujący',
    'left-thumb': 'lewy kciuk', thumb: 'kciuk',
    'right-index': 'prawy palec wskazujący', 'right-middle': 'prawy palec środkowy',
    'right-ring': 'prawy palec serdeczny', 'right-pinky': 'prawy mały palec'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Ustawienia klawiatury',
    showKeyboard: 'Pokaż klawiaturę',
    showHands: 'Pokaż dłonie',
    rightHandOnly: 'Tylko prawa ręka',
    leftHandOnly: 'Tylko lewa ręka',
    animatedHands: 'Dłonie podążają za klawiszami',
    letterCase: 'Litery na klawiszach',
    uppercase: 'WIELKIE',
    lowercase: 'małe',
    boardAria: 'Klawiatura na ekranie', keypadAria: 'Klawiatura numeryczna na ekranie',
    keyboardShape: 'Rodzaj klawiatury', shapeAuto: 'Według układu', shapeAnsi: '104 klawisze (długi lewy Shift)', shapeIso: '105 klawiszy (klawisz obok lewego Shiftu)',
    layout: 'Układ klawiatury',
    save: 'Zapisz',
    cancel: 'Anuluj',
    close: 'Zamknij'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} lekcji ukończonych`,
    legacy: n => `Lekcje ukończone w poprzednim kursie: ${n} — części 1 i 2 są już otwarte.`,
    ctaResume: '▶ Kontynuuj', ctaStart: '▶ Zacznij',
    ctaLesson: (verb, number, title) => `${verb} lekcję ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'To koniec tego, co jest już napisane <span>→</span>',
    rowResume: (screen, total) => `▶ Kontynuuj · ekran ${screen}/${total}`,
    rowStart: '▶ Zacznij',
    rowDone: '✓ Ukończona',
    unlocked: 'Otwarta',
    unlockAfter: n => `Otworzy się po lekcji ${n}`,
    unlockNow: 'Otwórz tę część teraz'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ GHI lúc chạy. Chữ tĩnh ở tien-do/text/pl.mjs.
     Số đếm để sau dấu hai chấm ("dni z rzędu: 3") cho khỏi chia số nhiều, như các bảng trên. */
  progress: {
    levels: ['Początki', 'W drodze', 'Pewnie', 'Szybko', 'Płynnie'],
    legacy: n => `Lekcje ukończone w poprzednim kursie: ${n} — części 1 i 2 są już otwarte.`,
    unit: index => `Część ${index}`,
    soon: ' · wkrótce',
    trendHint: n => (n === 1 ? 'Jeszcze jedna lekcja i będzie dość danych, żeby narysować trend.'
      : `Jeszcze ${n} lekcje i będzie dość danych, żeby narysować trend.`),
    stripLevel: level => `Poziom: ${level}`,
    statWpm: 'Ostatnie WPM',
    statAccuracy: 'Dokładność',
    statSessions: 'Sesje',
    target: (wpm, accuracy) => `Następny cel: <b>${wpm}</b> WPM · dokładność <b>${accuracy}</b>%`,
    adviceStart: 'Przepisz jedną lekcję, a ta strona będzie wiedzieć, na czym stoisz.',
    actionStart: 'Zacznij lekcję 1 →',
    adviceWeak: keys => `${keys} spowalniają cię — minuta ćwiczeń tylko z nimi daje bardzo dużo.`,
    actionWeak: keys => `Poćwicz ${keys} →`,
    adviceSteady: 'Idzie ci dobrze — jedna lekcja dziennie utrzyma tempo.',
    actionLesson: (number, title) => `Lekcja ${number} · ${title} →`,
    actionTest: 'Test szybkości →',
    actionLessons: 'Zobacz kurs →',
    heatLegend: 'Dokładność dla każdego klawisza',
    heatStrong: 'Pewnie',
    heatFair: 'Różnie',
    heatWeak: 'Do poprawy',
    badgeDate: at => new Date(at).toLocaleDateString('pl-PL', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Zdobyta ${date}` : 'Zdobyta'),
    number: value => value.toLocaleString('pl-PL'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} min`,
    streak: days => `🔥 dni z rzędu: ${days}`,
    bestStreak: days => `Rekord: ${days} ${days === 1 ? 'dzień' : 'dni'}`,
    today: minutes => `dziś: ${minutes} min`,
    clearConfirm: 'Usunąć wszystkie postępy i wyniki zapisane na tym urządzeniu?'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ trang test tốc độ /pl/test-pisania/ ghi lúc chạy.
     Chữ tĩnh ở kiem-tra-toc-do-go/text/pl.mjs. Đơn vị giữ WPM (không có `wpmUnit`): trang test
     tiếng Ba Lan dùng WPM, "znaki na minutę" chỉ nhắc trong phần giải thích. Số đếm đặt sau dấu
     hai chấm hoặc trong ngoặc để khỏi chia số nhiều. Các đoạn chỉ dùng ký tự gõ được trên bàn
     phím lập trình viên (ą ć ę ł ń ó ś ź ż qua AltGr), không ngoặc kép cong, không gạch dài. */
  test: {
    passage: 'W sobotę rano targ na rynku jest pełen ludzi już o siódmej. Między straganami pachnie świeżym chlebem, jabłkami i kawą. Starsza pani waży ziemniaki, a chłopiec niesie do samochodu dwie skrzynki truskawek. Kto przyjdzie wcześnie, kupi najładniejsze pomidory. Około południa robi się spokojniej, sprzedawcy powoli pakują towar i czasem oddają za darmo ostatni pęczek pietruszki.',
    passages: [
      'W sobotę rano targ na rynku jest pełen ludzi już o siódmej. Między straganami pachnie świeżym chlebem, jabłkami i kawą. Starsza pani waży ziemniaki, a chłopiec niesie do samochodu dwie skrzynki truskawek. Kto przyjdzie wcześnie, kupi najładniejsze pomidory. Około południa robi się spokojniej, sprzedawcy powoli pakują towar i czasem oddają za darmo ostatni pęczek pietruszki.',
      'Pociąg nad morze odjeżdża punktualnie. Za oknem przesuwają się pola, małe wsie i rzędy brzóz, a w przedziale panuje przyjemna cisza. Ktoś rozwiązuje krzyżówkę, ktoś inny słucha muzyki w słuchawkach i patrzy na chmury. Po dwóch godzinach konduktor przechodzi przez wagon i sprawdza bilety. Przed następną stacją kilka osób zdejmuje torby z półki i ustawia się przy drzwiach, żeby szybko wysiąść.',
      'Dobra zupa pomidorowa nie wymaga wielu składników. Wystarczy bulion, kilka dojrzałych pomidorów, marchewka, cebula i odrobina śmietany. Najpierw podsmaż cebulę na maśle, potem dodaj pokrojone warzywa i zalej je gorącym bulionem. Po dwudziestu minutach zmiksuj wszystko na gładko i dopraw solą oraz pieprzem. Wiele osób podaje ją z makaronem albo ryżem, a następnego dnia smakuje jeszcze lepiej.',
      'Od kilku tygodni codziennie wieczorem ćwiczę pisanie przez dziesięć minut. Na początku było ciężko, bo wzrok sam uciekał na klawiaturę. Teraz trafiam w ą i ę bez patrzenia, choć ź i ż wciąż czasem mi się mylą. Moje tempo nie jest jeszcze wysokie, ale robię coraz mniej błędów. To daje mi więcej satysfakcji niż jakikolwiek szybki wynik na ekranie, bo czuję, że palce same wiedzą, dokąd iść.',
      'Prognoza zapowiadała słońce, ale po południu nad lasem zbierają się ciemne chmury. W ciągu kilku minut zrywa się wiatr i na chodnik spadają pierwsze ciężkie krople. Ludzie w parku chowają się pod drzewami albo biegną na przystanek. Pół godziny później jest już po wszystkim. Powietrze pachnie mokrą trawą, kałuże lśnią w słońcu, a nad dachami pojawia się tęcza.',
      'Na klatce schodowej wisi nowa kartka: w piątek sąsiedzi spotykają się na podwórku. Każdy przynosi coś od siebie, sałatkę, napoje albo ciasto. Pan z trzeciego piętra obiecał rozpalić grilla, a dzieci mogą rysować kredą po betonie. Takie wieczory zdarzają się rzadko, ale dzięki nim ludzie znają się nie tylko z krótkiego dzień dobry w windzie.',
      'Mała biblioteka miejska jest w soboty otwarta do czternastej. W czytelni stoją duże stoły, przy których uczniowie przygotowują się do egzaminów, a emeryci czytają gazety. Przy wejściu jest kącik z książkami dla dzieci i kolorowymi poduszkami. Zwrócone książki odkłada się do skrzynki obok lady. Bibliotekarka zna prawie wszystkich czytelników z imienia i dla każdego ma jakąś ciekawą propozycję.',
      'Kto jesienią wybiera się w góry, powinien wyruszyć wcześnie, bo dni są coraz krótsze. Szlak prowadzi najpierw przez las bukowy, którego liście świecą na żółto i czerwono. Później ścieżka stromo pnie się w górę aż do schroniska, gdzie można zjeść gorącą zupę i napić się herbaty. Przy dobrej pogodzie z tarasu widać odległe szczyty. Na drogę powrotną warto wziąć ciepłą kurtkę, bo wieczorem szybko robi się chłodno.',
      'Mój rower przez całą zimę stał w piwnicy, więc przyszedł czas na przegląd. Najpierw pompuję opony i sprawdzam hamulce. Łańcuch jest suchy i skrzypi, dlatego dostaje kilka kropel oleju. Potem przecieram ramę wilgotną szmatką i dokręcam poluzowany dzwonek. Podczas pierwszej przejażdżki wokół osiedla wszystko chodzi lekko, a ja już cieszę się na dłuższe wycieczki za miasto.',
      'Ćwiczenie czyni mistrza, a przy pisaniu bezwzrokowym to powiedzenie naprawdę się sprawdza. Dłonie spoczywają na środkowym rzędzie: lewa na ASDF, prawa na JKL i średniku. Każdy palec sięga tylko do klawiszy w swojej kolumnie. Wielkie litery pisze się z klawiszem Shift pod drugą ręką, a polskie znaki z prawym Altem. Po kilku tygodniach takiej nauki pisze się nie tylko szybciej, ale też spokojniej i z mniejszą liczbą błędów.'
    ],
    title: 'Test pisania ({seconds} s)',
    titleMinutes: 'Test pisania ({minutes} min)',
    ready: 'Zaczynaj, kiedy chcesz.',
    running: 'Wynik liczy się na bieżąco.',
    finished: 'Koniec czasu ({seconds} s). Wynik: {wpm} WPM, dokładność {accuracy}%, błędy: {errors}.',
    finishedMinutes: 'Koniec czasu ({minutes} min). Wynik: {wpm} WPM, dokładność {accuracy}%, błędy: {errors}.',
    accuracyName: 'Dokładność',
    comparisonSame: 'Tyle samo co w poprzednim wyniku.',
    comparisonDelta: '{delta} WPM w porównaniu z poprzednim wynikiem',
    progressEmpty: 'Za mało danych. Zrób kilka testów, a zobaczysz swoje postępy.',
    progressNone: 'Brak danych o postępach.',
    metricEmpty: 'Brak danych dla tego wskaźnika.',
    chartEmpty: 'Brak odpowiednich danych do narysowania wykresu.',
    chartLabel: '{metric} w czasie',
    trendEmpty: 'Za mało danych, żeby wyznaczyć trend.',
    trendSame: 'Bez zmian od początku tego okresu.',
    trendDelta: '{change} {measure} od początku tego okresu.',
    measureAccuracy: 'pkt proc. dokładności',
    progressSummary: 'Okres (dni): {days}. Testy: {count}. Średnio {wpm} WPM, średnia dokładność {accuracy}%.',
    dateLocale: 'pl-PL'
  },

  /* badges.js — chỉ tiêu đề và gợi ý. Không có `telex`: giáo trình khai `features: []`. */
  badges: {
    'first-step': { title: 'Pierwszy krok', hint: 'Ukończ pierwszą lekcję.' },
    'unit-1': { title: 'Cała część', hint: 'Ukończ całą część kursu.' },
    'stars-30': { title: '30 gwiazdek', hint: 'Zbierz 30 gwiazdek w kursie.' },
    'stars-90': { title: '90 gwiazdek', hint: 'Zbierz 90 gwiazdek w kursie.' },
    'streak-3': { title: 'Trzy dni z rzędu', hint: 'Wykonaj dzienny cel trzy dni z rzędu.' },
    'streak-7': { title: 'Cały tydzień', hint: 'Wykonaj dzienny cel siedem dni z rzędu.' },
    'clean-40': { title: 'Czyste 40 WPM', hint: 'Jedno przejście z szybkością 40 WPM i dokładnością co najmniej 95%.' },
    'clean-60': { title: 'Czyste 60 WPM', hint: 'Jedno przejście z szybkością 60 WPM i dokładnością co najmniej 95%.' },
    'typed-5000': { title: '5000 klawiszy', hint: 'Naciśnij w sumie pięć tysięcy klawiszy.' }
  }
};
