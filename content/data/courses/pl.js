/* data/courses/pl.js — khoá học tiếng Ba Lan: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/pl/*.json khi
 * trình duyệt nhận được.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` là chỗ trống generator điền vào.
 *
 * BÀN PHÍM MẶC ĐỊNH LÀ "POLISH (PROGRAMMER)" — QWERTY Mỹ, chữ Ba Lan qua AltGr. Đó là bàn phím
 * thật của gần như mọi người Ba Lan. Player chưa biết chỉ AltGr, nên họ này KHÔNG dạy ą ć ę ł ń
 * ó ś ź ż, và lời dạy nói thẳng điều đó (units.u2.summary, symbols.congrats*) thay vì giả vờ là
 * khoá đã dạy hết bàn phím. Kho từ vì thế phần lớn là từ Ba Lan không dấu — xem data/words/pl.js.
 *
 * HỌ QWERTZ (bố cục 200) thì chữ Ba Lan có ô riêng, và `families.qwertz` ở dưới sửa mọi câu dạy
 * mà trên bàn phím đó sẽ sai.
 *
 * NGỮ PHÁP CỦA CHỖ TRỐNG. Tên ngón tay ở dạng NGUYÊN CÁCH (`lewy palec wskazujący`), nên mẫu câu
 * nào chứa `{finger}`/`{fingers}` phải đặt nó vào vị trí chủ ngữ: "Ten klawisz naciska {finger}".
 * `{fingers}` luôn có ít nhất hai tên, nên động từ đi với nó chia số nhiều ("naciskają").
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Xưng hô bằng **ty**, nhất quán — và TRÁNH thì quá khứ ngôi hai
 * (pisałeś/pisałaś), vì nó bắt phải đoán giới tính người học.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.pl = {
  lang: 'pl',
  name: 'Polski',

  // Bố cục 102 — Polish (programmer). Hàng cơ sở y như QWERTY Mỹ: bài 4 dạy `a` và `;`.
  keyboardId: 102,

  progressKey: 'typingease-progress-pl-v1',
  badgesKey: 'typingease-badges-pl-v1',

  // Như tiếng Anh: chữ a-z cộng dấu câu nằm trong vùng phím chữ của QWERTY Mỹ.
  letterTest: "^[a-z;',.\\/-]$",

  // Trên Polish (programmer) của Windows, ^ và ` là ký tự thật. ~ thì KHÔNG: nó là phím chết
  // (~ rồi a ra ą — một lối thay cho AltGr), nên không khai ở đây và unit 4 không dạy nó.
  symbolsLive: ['^', '`'],

  families: {
    // Polish (QWERTZ) (200): z và y đổi chỗ; ł ở ô Semicolon, ą ở ô Quote, ż ś ó ở cột ngoài.
    // ę ń ć ź không có ô riêng: chúng là tầng Shift của ą ż ś ó.
    qwertz: {
      // KHÔNG có ą: `shiftpairs` (bài Shift) dựng cặp hoa/thường bằng toUpperCase() cho mọi chữ
      // trong letterTest, và sẽ in ra "Ąą" — nhưng trên bố cục này Shift + ô ą ra ę, còn Ą thì
      // không gõ được. Bài dạy ą vẫn luyện nó, vì màn đó truyền `focus` tường minh.
      letterTest: '^[a-złżśó,.\\-]$',
      // ę = Shift + ô ą, mà ô đó dạy ở u2-l08 — ngay trước bài Shift. ; và : là tầng Shift của
      // ô Comma/Period, đã dạy cùng bài. Ba ký tự để generator dựng màn luyện nhóm thay vì dán ę
      // vào cuối từ (một ký tự thì nó ra "domę", "kotę" — không phải tiếng Ba Lan).
      // ń ć ź KHÔNG ở đây: ô gốc của chúng (ż ś ó) tới ở u3-l02, và dạy Shift + một ô chưa học
      // là dạy ngược. Chúng tới ở unit 4.
      shiftUnlocks: ['ę', ';', ':'],
      // Bố cục này không có ^ ` ~; ˙ và ˛ ở ô Backquote là phím chết.
      symbolsLive: [],
      teaching: {
        introEdge: 'Klawisze przy prawej krawędzi, wszystkie dla małego palca. Na tej klawiaturze trzy z nich to litery: ż, ś i ó.',
        edgeBackToWords: 'Powrót do słów — teraz także z ż, ś i ó.',
        drillShiftUnlocks: 'Shift daje też ę — to Shift i klawisz ą, bo ę nie ma własnego klawisza — a na przecinku i kropce średnik i dwukropek.',
        summary: {
          edge: 'Kolumna przy prawej krawędzi: sześć klawiszy małego palca, a wśród nich ż, ś i ó.',
          shift: 'Wielkie litery małym palcem drugiej ręki, przejście do nowej linii i litera ę.'
        },
        intro: {
          edge: 'Prawy mały palec obsługuje więcej klawiszy niż jakikolwiek inny, a tych przy krawędzi prawie nikt nie ćwiczy. Tutaj liczą się podwójnie: leżą na nich ż, ś i ó. Bez tej kolumny nie napiszesz ani już, ani coś, ani mój. Z Shiftem te same klawisze dają ń, ć i ź — do nich dojdziesz w ostatniej części kursu.',
          shift: 'Do tej pory wszystko było pisane małymi literami. Shift to zmienia i od początku warto przyjąć jedną zasadę: wciska go mały palec ręki przeciwnej do litery. Małym palcem po tej samej stronie dłoń się wykręca i w końcu zaczynasz patrzeć na klawiaturę. Na tej klawiaturze Shift daje też ę: to Shift i klawisz ą, bo ę nie ma własnego klawisza.'
        },
        congrats: {
          edge: 'Z ż, ś i ó brakuje już tylko ń, ć i ź — czekają w ostatniej części kursu.',
          shift: 'Z Shiftem, Enterem i literą ę możesz napisać cały tekst tak, jak pisze się go poza kursem.'
        },
        units: {
          u1: { title: 'Rząd podstawowy',
            summary: 'Osiem klawiszy pod palcami — wśród nich Ł, pod prawym małym palcem — potem {reach}. Wystarczy, żeby pisać prawdziwe polskie słowa bez patrzenia w dół.' },
          u2: { title: 'Reszta alfabetu',
            summary: 'Górny rząd, dolny rząd, interpunkcja i wielkie litery. Na tej klawiaturze Z jest w górnym rzędzie, a Y w dolnym; Ą ma własny klawisz obok Ł, a Ę to Shift i ten sam klawisz.' },
          u3: { title: 'Cyfry, polskie litery i tempo',
            summary: 'Rząd cyfr, prawa kolumna z Ż, Ś i Ó, a potem długie akapity w równym tempie.' }
        },
        symbols: {
          congratsReview: 'Każdy klawisz tej klawiatury miał swoją kolej.',
          congratsTest: 'To była cała klawiatura. Nie został na niej żaden klawisz, którego ten kurs by nie przećwiczył.'
        }
      }
    }
  },

  teaching: {
    and: ' i ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'przecinek', '.': 'kropka', ';': 'średnik', ':': 'dwukropek', "'": 'apostrof', '-': 'łącznik', '/': 'ukośnik' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Wszystkie pozostałe klawisze',
      unitSummary: 'Znaki tej klawiatury, których kurs jeszcze nie używał — jest ich {count} — każdy wpisywany tam, gdzie naprawdę się go używa.',
      groupSymbols: 'Pozostałe klawisze',
      groupFinish: 'Koniec części',
      titleNumberRow: 'Znaki z rzędu cyfr',
      titleKeys: '{keys}',
      titleReview: 'Wszystkie znaki razem',
      summaryKeys: 'W programie: {keys}.',
      summaryReview: 'Wszystkie znaki tej części, wymieszane ze słowami i liczbami.',
      summaryTest: 'Test na czas ze wszystkimi klawiszami klawiatury.',
      introLesson: 'Klawisze, których kurs jeszcze nie używał: {keys}. {shiftNote}',
      shiftNote: 'Każdy z nich to Shift i klawisz, który twoje palce już znają — Shift małym palcem drugiej ręki.',
      shiftNoteMixed: 'Niektóre wymagają Shiftu, małym palcem drugiej ręki; pozostałe mają własny klawisz, którego kurs jeszcze nie używał.',
      introKey: 'Ten znak — {key} — naciska {finger}{shift}.',
      introKeyShift: ', a Shift przytrzymuje druga ręka',
      drillOne: 'Najpierw sam {key}, potem tam, gdzie naprawdę się go używa.',
      burst: 'Seria krótkich kawałków z tymi znakami.',
      together: 'Wszystko, co przyniosła ta lekcja, wymieszane.',
      inWords: 'Znowu słowa, ze znakami na swoich miejscach.',
      introReview: 'Żadnych nowych klawiszy. Wszystkie znaki tej części, wymieszane ze słowami i liczbami.',
      reviewFirst: 'Znaki w tym samym tempie co litery wokół nich.',
      reviewLine: 'Trzymaj rytm także na znakach; to klawisze jak wszystkie inne.',
      congratsKeys: '{keys}: teraz pod twoimi palcami. Znak przychodzi tak łatwo jak litera obok.',
      congratsReview: 'Każdy klawisz tej klawiatury miał swoją kolej — poza polskimi literami pod prawym Altem, których ten kurs jeszcze nie uczy.',
      introTest: 'Test na czas ze wszystkim, znaki też.',
      congratsTest: 'To była cała klawiatura bez prawego Altu. Polskie litery, które on daje, są następnym krokiem, a tego ten kurs jeszcze nie ma.',
      testText: 'Słowa, liczby i znaki. Jedno tempo od początku do końca.'
    },

    fingers: {
      LP: 'lewy mały palec', LR: 'lewy palec serdeczny', LM: 'lewy palec środkowy',
      LI: 'lewy palec wskazujący', LT: 'lewy kciuk', RT: 'prawy kciuk',
      RI: 'prawy palec wskazujący', RM: 'prawy palec środkowy', RR: 'prawy palec serdeczny',
      RP: 'prawy mały palec'
    },

    /* --- kolumna przy prawej krawędzi --- */
    introEdge: 'Klawisze przy prawej krawędzi, wszystkie dla małego palca: ukośnik, łącznik, znak równości, dwa nawiasy kwadratowe i ukośnik wsteczny. To najdalsze ruchy tego palca.',
    drillEdgePair: 'Teraz {keys}. Mały palec wychodzi na zewnątrz i wraca; dłoń za nim nie idzie.',
    burstEdge: 'Seria z tym, co masz już z tej kolumny.',
    drillEdgeAll: 'Wszystkie sześć razem. To miejsce na klawiaturze, gdzie nadgarstek najbardziej się wykręca, jeśli palec nie wraca.',
    burstEdgeWords: 'Znowu słowa, żeby rozluźnić dłoń po całej tej krawędzi.',
    edgeBackToWords: 'Powrót do słów, z całą klawiaturą do dyspozycji.',
    edgeClose: 'Całe zdania na zakończenie lekcji z klawiszami.',

    /* --- ekran przedstawiający klawisz --- */
    introKey: 'Ten klawisz naciska {finger}. Znajdź go bez patrzenia, naciśnij raz i pozwól palcowi wrócić na miejsce. Powrót jest tak samo ważny jak uderzenie.',
    pressToContinue: 'Naciśnij <b>{key}</b>, aby przejść dalej',
    introSpace: 'Spacja należy do prawego kciuka. Kciuki nie robią nic innego i dlatego nigdy nie trzeba jej szukać.',
    pressSpace: 'Naciśnij <b>spację</b>, aby przejść dalej',

    /* --- ćwiczenia palców --- */
    drillSpace: 'Krótkie grupy rozdzielone spacjami. Prawy kciuk opada i wraca; pozostałe palce nie ruszają się ze swoich klawiszy.',
    drillNew: 'Tylko {key} i to, co już znasz. Powoli, a po każdym uderzeniu palec wraca do rzędu podstawowego.',
    drillMixed: 'Nowe klawisze wymieszane ze starymi, tak jak pojawią się w słowach.',
    drillAgain: 'Jeszcze raz nowe klawisze. Nie ma jeszcze słów, które dałoby się nimi napisać, i to normalne.',
    drillWide: 'Wszystko, co masz, w krótkich grupach. Patrz na ekran, nie na dłonie.',
    drillAll: 'Ostatnia seria ze wszystkim, co było do tej pory.',
    patternsBack: 'Na chwilę wracamy do wzorów, żeby sprawdzić, czy palce zawsze wracają na swoje miejsce.',

    /* --- serie --- */
    burstKeys: 'Krótkie grupy, jedna po drugiej. Dojdź do końca, nawet jeśli coś pomylisz.',
    burstLonger: 'Trochę dłuższe grupy. Pośpiech jeszcze nie pomaga.',
    burstWords: 'Seria krótkich słów z nowymi klawiszami.',

    /* --- słowa --- */
    wordsNew: 'Prawdziwe słowa z nowymi klawiszami. Pisz całe słowo jednym ruchem, nie litera po literze.',
    wordsOne: 'Teraz z naciskiem na <b>{key}</b> — tego klawisza było do tej pory najmniej.',
    wordsAll: 'Wszystko, co masz, wymieszane. Zobacz, ile słów wychodzi już bez zastanowienia.',

    /* --- powtórka --- */
    introReview: 'W tej lekcji nie ma nowych klawiszy. Tylko te, które znasz — szybciej i dłużej.',
    introReviewMixed: 'Litery, cyfry i znaki razem, tak jak pojawiają się poza kursem.',
    pressEnter: 'Naciśnij <b>Enter</b>, aby zacząć',
    reviewWords1: 'Na początek pojedyncze słowa. Bez pośpiechu: szybkość bierze się z dokładności, nigdy odwrotnie.',
    reviewBurst: 'Krótka seria. Dokończ listę, nawet jeśli coś ci umknie.',
    reviewWords2: 'Pięć słów w linii. Niech oczy wyprzedzają palce.',
    reviewPatterns: 'Znowu wzory, żeby sprawdzić, czy palce wracają do rzędu podstawowego.',
    reviewShort: 'Krótkie słowa w dobrym tempie. Te powinny wychodzić prawie same.',
    reviewBurst2: 'Więcej czasu i więcej słów. Trzymaj to samo tempo od początku do końca.',
    reviewClose: 'Dłuższe linie. Tu widać, czy dłoń wraca na miejsce sama.',
    reviewLast: 'Ostatnia seria. Jeśli udało ci się tu dojść bez patrzenia na klawiaturę, lekcja jest zrobiona.',

    /* --- Shift i Enter --- */
    introShift: 'Wielkie litery pisze się małym palcem ręki przeciwnej do litery. Przytrzymaj Shift, naciśnij literę, puść. Nigdy małym palcem, który pisze.',
    pressShift: 'Przytrzymaj <b>Shift</b> i naciśnij literę, aby przejść dalej',
    drillShift: 'Wielkie i małe litery na zmianę. Mały palec opada i wraca; druga ręka się nie rusza.',
    wordsShift: 'Słowa, a wielka litera przyjdzie za chwilę — najpierw niech ręce wrócą do rytmu.',
    introEnter: 'Enter należy do prawego małego palca, na prawo od rzędu podstawowego. To największy klawisz, do którego ten palec sięga.',
    pressEnterKey: 'Naciśnij <b>Enter</b>, aby przejść dalej',
    drillEnter: 'Imię, Enter, następne imię. Mały palec wychodzi i wraca, nie zabierając ze sobą dłoni.',
    shiftSentences: 'Zdania z wielką literą na początku i kropką na końcu. To już zaczyna przypominać prawdziwe pisanie.',
    shiftBurst: 'Seria, która utrwala to, czego uczy ta lekcja.',
    shiftWords2: 'Pięć w linii. Mały palec odpoczywa, zanim znowu wróci do Shiftu.',
    shiftClose: 'Na koniec całe zdania. Shift, litera, puść — bez zatrzymywania się, żeby o tym myśleć.',

    /* --- rząd cyfr --- */
    introDigits: 'Rząd cyfr leży nad górnym rzędem liter. Każdy palec idzie prosto w górę i tak samo wraca. To najdłuższe ruchy w całym kursie.',
    drillDigitPair: 'Klawisze {keys} naciskają {finger} i ten sam palec prawej ręki. W górę, uderz, wróć do rzędu podstawowego.',
    drillDigitIndex: 'Dwa pozostałe należą do palców wskazujących, które i tak sięgają do większej liczby klawiszy niż jakikolwiek inny palec.',
    drillDigitsShifted: 'Te same klawisze z Shiftem.',
    burstDigits: 'Krótka seria z tym, czego właśnie się uczysz.',
    burstDigitsAll: 'Wszystkie dziesięć, wymieszane. Na początku myli się tu dużo; to normalne.',
    digitsAll: 'Cały rząd w grupach. Nie spuszczaj wzroku, żeby szukać.',
    digitsBackToWords: 'Na chwilę wracamy do słów, żeby dłonie pamiętały, gdzie mieszkają.',
    digitsClose: 'Znowu zdania, z całą klawiaturą do dyspozycji.',

    /* --- teksty --- */
    introProse: 'Długie, ciągłe teksty. Nie ćwiczy się tu nowych klawiszy, tylko utrzymanie tego samego tempa przez kilka linii.',
    proseLine: 'Czytaj naprzód, przed tym, co piszesz. Jeśli zatrzymasz się, żeby spojrzeć, stracisz więcej czasu niż na poprawianiu.',
    proseBurst: 'Ostatnia długa seria na koniec.',

    /* --- słabe klawisze i testy --- */
    weakText: 'Ćwiczenie zbudowane z klawiszy, które mylisz najczęściej. Za każdym razem jest inne.',
    testText: 'Żadnych nowych klawiszy. Pisz w tempie, które utrzymasz do końca.',

    /* --- tytuły --- */
    titleFirst: '{keys} oraz spacja',
    titleKeys: '{keys}',
    titleReview: 'Powtórka',
    titleReviewMixed: 'Litery, cyfry i znaki',
    titleShift: 'Shift i Enter',
    titleEdge: 'Prawa kolumna',
    titleDigits: 'Rząd cyfr',
    titleProse: 'Teksty i tempo {n}',
    titleWeak: 'Słabe klawisze',
    titleTest: 'Test z części {unit}',

    /* --- opisy na stronie z listą lekcji --- */
    summary: {
      edge: 'Kolumna przy prawej krawędzi: sześć klawiszy, wszystkie dla małego palca.',
      first: 'Dwa klawisze z wypustkami, spacja i nawyk niepatrzenia w dół.',
      keys: 'Nowe klawisze: {keys}. Palec wychodzi, uderza i wraca.',
      review: 'Bez nowych klawiszy. Wszystko, co było wcześniej, szybciej i dłużej.',
      shift: 'Wielkie litery małym palcem drugiej ręki i przejście do nowej linii.',
      digits: 'Dziesięć cyfr, każdy palec prosto w górę.',
      prose: 'Całe akapity, żeby utrzymać tempo dłużej niż przez jedną linię.',
      weak: 'Ćwiczenie z klawiszy, które mylisz najczęściej.',
      test: 'Test na czas ze wszystkim, co już umiesz.'
    },

    /* --- wstęp do lekcji --- */
    intro: {
      edge: 'Prawy mały palec obsługuje więcej klawiszy niż jakikolwiek inny, a tych przy krawędzi prawie nikt nie ćwiczy. Leżą dalej od rzędu podstawowego niż cokolwiek innego, więc sposób jest ten sam co zawsze: wyjdź, naciśnij, wróć — bez przesuwania dłoni.',
      first: 'Klawisze z małą wypustką są punktem wyjścia. Oba palce wskazujące kładą się na nich i już się z nich nie ruszają; cała reszta kursu mierzy się od tej pozycji. Zacznij od położenia obu dłoni i patrz tylko na ekran.',
      keys: 'Nowe klawisze w tej lekcji: {keys}. Naciskają je {fingers}. Ruch jest zawsze ten sam — wyjść, uderzyć, wrócić — i ćwiczy się tu właśnie powrót, bo palec, który został na zewnątrz, myli następną literę.',
      review: 'Ta lekcja nie uczy niczego nowego. To moment, żeby sprawdzić, czy to, co było wcześniej, wychodzi bez myślenia — a to nie to samo, co wiedzieć, gdzie są klawisze.',
      shift: 'Do tej pory wszystko było pisane małymi literami. Shift to zmienia i od początku warto przyjąć jedną zasadę: wciska go mały palec ręki przeciwnej do litery. Małym palcem po tej samej stronie dłoń się wykręca i w końcu zaczynasz patrzeć na klawiaturę.',
      digits: 'Rząd cyfr leży nad wszystkim, co było do tej pory, i to jedyny rząd, w którym palce sięgają w górę zamiast w dół. Tu myli się więcej niż gdziekolwiek indziej w kursie, a naprawia się to tak jak wszystko inne: najpierw powoli.',
      prose: 'Wszystkie klawisze tego kursu są już pod palcami. Zostało nie uczenie się klawiszy, tylko utrzymanie tempa: czytać naprzód, nie zatrzymywać się, żeby spojrzeć, i nie przyspieszać pod koniec linii.',
      weak: 'To ćwiczenie buduje się z klawiszy, które mylisz ty, a nie z gotowej listy. Kiedy ty się zmieniasz, zmienia się i ono.',
      test: 'Test na czas. Nic nowego: tylko to, co już umiesz, w tempie, które utrzymasz.'
    },

    /* --- zakończenie lekcji --- */
    congrats: {
      edge: 'Tę kolumnę większość kursów zostawia w połowie. Tutaj została przerobiona do końca.',
      first: 'Dłonie są na miejscu. Od teraz każdy klawisz to ruch z tej pozycji i powrót.',
      keys: 'Nowe klawisze pod palcami. Jeśli {keys} wychodzą już bez szukania, lekcja zrobiła swoje.',
      review: 'Nic nowego, a jednak szybciej. Dokładnie tak miało być.',
      shift: 'Z Shiftem i Enterem możesz napisać cały tekst tak, jak pisze się go poza kursem.',
      digits: 'Rząd cyfr jest najtrudniejszy i potem najrzadziej ćwiczony. Wracaj czasem do tej lekcji.',
      prose: 'Całe akapity w równym tempie. To już nie nauka pisania; to pisanie.',
      weak: 'Słabe klawisze przestają być słabe dzięki minucie dziennie, a nie godzinie w miesiącu.',
      test: 'Test zaliczony. Liczba znaczy mniej niż to, że udało się dojść do końca bez patrzenia.'
    },

    units: {
      u1: { title: 'Rząd podstawowy',
        summary: 'Osiem klawiszy pod palcami, potem {reach} — wystarczy, żeby pisać prawdziwe polskie słowa bez patrzenia w dół.' },
      u2: { title: 'Reszta alfabetu',
        summary: 'Górny rząd, dolny rząd, interpunkcja i wielkie litery — cały alfabet łaciński, a do tego Shift i Enter. Polskie litery (ą, ę, ł, ó, ś, ż…) na klawiaturze programisty wpisuje się prawym Altem, a tego ten kurs jeszcze nie uczy — dlatego ćwiczenia używają słów bez nich.' },
      u3: { title: 'Cyfry, znaki i tempo',
        summary: 'Rząd cyfr, znaki przy prawej krawędzi, a potem długie akapity w równym tempie.' }
    },

    groups: {
      start: 'Zacznij tutaj',
      reach: 'Sięganie palcami',
      finish: 'Koniec części',
      'numbers-symbols': 'Cyfry i znaki',
      speed: 'Tempo'
    },

    starterHint: 'Połóż palce wskazujące na dwóch klawiszach z wypustkami i przepisz to, co widzisz, bez patrzenia na klawiaturę.'
  }
};
