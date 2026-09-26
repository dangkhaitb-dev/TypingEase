/* data/courses/nl.js — khoá học tiếng Hà Lan: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/nl/*.json khi
 * trình duyệt nhận được.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Xưng hô "je/jij" từ đầu tới
 * cuối. Không tính từ quảng cáo, không dấu chấm than.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.nl = {
  lang: 'nl',
  name: 'Nederlands',

  // Bố cục 198 — Dutch (standard), QWERTY. Ô Semicolon in ra `+` (không phải chữ), ô Quote là
  // phím chết ´ (Shift: `), ô BracketLeft là phím chết ¨ (Shift: ^). Bố cục 101 cùng một chuỗi.
  // Nên bài 4 dạy A và dấu cộng, `é` mở ra ở u2-l08 cùng dấu chấm và dấu phẩy, còn `ë ï` mở ra ở
  // bài cột ngoài.
  keyboardId: 198,

  progressKey: 'typingease-progress-nl-v1',
  badgesKey: 'typingease-badges-nl-v1',

  // Hàng số in ra chữ số khi không giữ Shift.
  digitsAreShifted: false,

  // "Phím chữ" khi dựng bài luyện ngón: chữ cái, cộng `+` (ô Semicolon, hàng cơ sở) và `-`
  // (ô Slash). KHÔNG có ´ và ¨: chúng là phím chết.
  letterTest: "^[a-z+,.\\-]$",

  // Không có `symbolsLive` cho họ mặc định: trên Windows, ´ ` ¨ ^ ~ của bố cục Hà Lan đều là
  // phím chết.

  families: {
    // Dutch (Macintosh) (199): thực chất là QWERTY Mỹ. Ô Semicolon là `;`, ô Quote là dấu nháy
    // thật (nên auto's, zo'n gõ được từ u2-l08), cột ngoài là / - = [ ] \. Không phím chết nào:
    // é và ë trên Mac gõ bằng Option, thứ player chưa dạy — kho từ tự lọc chúng ra. ^ ` ~ là ký
    // tự thật, nên unit ký hiệu dạy chúng.
    mac: {
      letterTest: "^[a-z;',.\\/-]$",
      symbolsLive: ['^', '`', '~'],
      teaching: {
        introEdge: 'De toetsen aan de rechterrand, allemaal voor de pink. Het zijn de langste strekkingen die deze vinger maakt, en de toetsen die daarna het minst geoefend worden.',
        edgeBackToWords: 'Terug naar woorden, nu met het hele toetsenbord.',
        summary: {
          edge: 'De kolom aan de rechterrand: zes toetsen, allemaal voor de pink.'
        },
        intro: {
          edge: 'De rechterpink heeft meer toetsen dan elke andere vinger, en de toetsen aan de rand oefent bijna niemand. Ze liggen verder van de thuisrij dan alle andere, dus de truc is dezelfde als altijd: uitstrekken, aanslaan en terug, zonder dat de hand meegaat.'
        },
        congrats: {
          edge: 'Dat is de kolom die in bijna elke cursus half blijft liggen. In de jouwe niet.'
        },
        units: {
          u2: { title: 'De rest van het alfabet',
            summary: 'De bovenste rij, de onderste rij, de leestekens met de apostrof, en hoofdletters — het hele alfabet, plus Shift en Enter.' },
          u3: { title: 'Cijfers, tekens en tempo',
            summary: 'De cijferrij, de buitenste kolom, en daarna lange alinea\'s in een vast tempo.' }
        }
      }
    }
  },

  teaching: {
    and: ' en ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'de komma', '.': 'de punt', ';': 'de puntkomma', ':': 'de dubbele punt',
      "'": 'de apostrof', '-': 'het streepje', '+': 'het plusteken', '´': 'het accent aigu' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Alle andere toetsen',
      unitSummary: 'De {count} tekens van dit toetsenbord die de cursus nog niet heeft gebruikt, elk geschreven op de plek waar je het echt gebruikt.',
      groupSymbols: 'De toetsen die nog ontbreken',
      groupFinish: 'Sluit de unit af',
      titleNumberRow: 'De tekens op de cijferrij',
      titleKeys: '{keys}',
      titleReview: 'Alle tekens samen',
      summaryKeys: 'In deze les: {keys}.',
      summaryReview: 'Alle tekens van deze unit, gemengd met woorden en cijfers.',
      summaryTest: 'Een test op tijd met alle toetsen van het toetsenbord.',
      introLesson: 'Toetsen die de cursus nog niet heeft gebruikt: {keys}. {shiftNote}',
      shiftNote: 'Je krijgt ze allemaal met Shift en een toets die je vingers al kennen — Shift met de pink van de andere hand.',
      shiftNoteMixed: 'Voor sommige heb je Shift nodig, met de pink van de andere hand; de andere hebben een eigen toets die de cursus nog niet had gebruikt.',
      introKey: '{key} typ je met {finger}{shift}.',
      introKeyShift: ', terwijl de andere hand Shift vasthoudt',
      drillOne: 'Eerst alleen {key}, daarna op de plek waar je het echt gebruikt.',
      burst: 'Een reeks korte stukjes met deze tekens.',
      together: 'Alles van deze les, door elkaar.',
      inWords: 'Weer woorden, met de tekens op hun plek.',
      introReview: 'Geen nieuwe toetsen. Alle tekens van deze unit, gemengd met woorden en cijfers.',
      reviewFirst: 'De tekens in hetzelfde tempo als de letters eromheen.',
      reviewLine: 'Houd het tempo ook bij de tekens; het zijn toetsen zoals alle andere.',
      congratsKeys: '{keys}: nu onder je vingers. Het teken komt er net zo makkelijk uit als de letter ernaast.',
      congratsReview: 'Elke toets van dit toetsenbord is aan de beurt geweest.',
      introTest: 'Een test op tijd met alles, tekens inbegrepen.',
      congratsTest: 'Dit was het hele toetsenbord. Er is geen toets meer die deze cursus je niet heeft geleerd.',
      testText: 'Woorden, cijfers en tekens. Hetzelfde tempo van begin tot eind.'
    },

    fingers: {
      LP: 'de linkerpink', LR: 'de linkerringvinger', LM: 'de linkermiddelvinger',
      LI: 'de linkerwijsvinger', LT: 'de linkerduim', RT: 'de rechterduim',
      RI: 'de rechterwijsvinger', RM: 'de rechtermiddelvinger', RR: 'de rechterringvinger',
      RP: 'de rechterpink'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'De toetsen aan de rechterrand, allemaal voor de pink. Eén ervan is het trema ¨: een dode toets. Je slaat hem aan en daarna de klinker, en zo ontstaan ë en ï.',
    drillEdgePair: 'Nu {keys}. De pink gaat naar buiten en komt terug; de hand blijft waar hij is.',
    burstEdge: 'Een korte reeks met wat je van deze kolom hebt.',
    drillEdgeAll: 'Alle zes samen. Hier draait de pols het meest als de vinger niet terugkomt.',
    burstEdgeWords: 'Weer woorden, om de hand los te maken na al die randtoetsen.',
    edgeBackToWords: 'Terug naar woorden, nu met het hele toetsenbord — het trema inbegrepen.',
    edgeClose: 'Hele zinnen om de lessen met nieuwe toetsen af te sluiten.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Deze toets is voor {finger}. Zoek hem zonder te kijken, druk één keer en laat de vinger teruggaan naar zijn plek. Het terugkeren telt net zo zwaar als het aanslaan.',
    pressToContinue: 'Druk op <b>{key}</b> om verder te gaan',
    introSpace: 'De spatiebalk is voor de rechterduim. De duimen doen verder niets, en daarom hoef je hem nooit te zoeken.',
    pressSpace: 'Druk op de <b>spatiebalk</b> om verder te gaan',

    /* --- luyện ngón --- */
    drillSpace: 'Korte groepjes met spaties ertussen. De rechterduim gaat omlaag en weer omhoog; de andere vingers blijven waar ze zijn.',
    drillNew: 'Alleen {key} en wat je al kent. Rustig, en na elke aanslag gaat de vinger terug naar de thuisrij.',
    drillMixed: 'De nieuwe toetsen gemengd met de vorige, zoals je ze straks in woorden tegenkomt.',
    drillAgain: 'Nog eens de twee nieuwe toetsen. Er zijn nog geen woorden om ermee te typen, en dat is normaal.',
    drillWide: 'Alles wat je hebt, in korte groepjes. Kijk naar het scherm, niet naar je handen.',
    drillAll: 'Een laatste ronde met alles wat je tot nu toe hebt geleerd.',
    patternsBack: 'Even terug naar de patronen, om te controleren dat de vingers nog steeds naar hun plek teruggaan.',

    /* --- reeks --- */
    burstKeys: 'Korte groepjes, de een na de ander. Maak de lijst af, ook als je er een paar mist.',
    burstLonger: 'Iets langere groepjes. Haast helpt nog niet.',
    burstWords: 'Een reeks korte woorden met de nieuwe toetsen erin.',

    /* --- từ --- */
    wordsNew: 'Echte woorden met de nieuwe toetsen. Typ het hele woord in één beweging, niet letter voor letter.',
    wordsOne: 'Nu met de nadruk op <b>{key}</b>, de toets die je het minst hebt aangeslagen.',
    wordsAll: 'Alles wat je hebt, door elkaar. Kijk hoeveel woorden al vanzelf gaan.',

    /* --- ôn tập --- */
    introReview: 'Geen nieuwe toetsen in deze les. Alleen de toetsen die je kent, langer achter elkaar en sneller dan je ze tot nu toe hebt getypt.',
    introReviewMixed: 'Letters, cijfers en tekens samen, zoals ze buiten een cursus voorkomen.',
    pressEnter: 'Druk op <b>Enter</b> om te beginnen',
    reviewWords1: 'We beginnen met losse woorden. Zonder haast: snelheid komt uit nauwkeurigheid, nooit andersom.',
    reviewBurst: 'Een korte reeks. Maak de lijst af, ook als er eentje misgaat.',
    reviewWords2: 'Vijf woorden per regel. Laat je ogen vooruitlopen op je vingers.',
    reviewPatterns: 'Weer de patronen, om te controleren dat de vingers naar de thuisrij teruggaan.',
    reviewShort: 'Korte woorden, in een goed tempo. Deze zouden bijna vanzelf moeten gaan.',
    reviewBurst2: 'Meer tijd en meer woorden. Houd hetzelfde tempo van begin tot eind.',
    reviewClose: 'Hele zinnen. Hier zie je of de hand vanzelf naar zijn plek teruggaat.',
    reviewLast: 'De laatste ronde. Ben je hier gekomen zonder naar het toetsenbord te kijken, dan is de les klaar.',

    /* --- Shift en Enter --- */
    introShift: 'Hoofdletters maak je met de pink van de hand tegenover de letter. Houd Shift ingedrukt, sla de letter aan, laat los. Nooit met de pink van de hand die de letter typt.',
    pressShift: 'Houd <b>Shift</b> ingedrukt en druk op een letter om verder te gaan',
    drillShift: 'Hoofdletters en kleine letters om en om. De pink gaat omlaag en weer omhoog; de andere hand blijft staan.',
    wordsShift: 'Woorden met een hoofdletter aan het begin, zoals namen.',
    introEnter: 'Enter is voor de rechterpink, rechts van de thuisrij. Het is de verste toets die deze vinger moet halen.',
    pressEnterKey: 'Druk op <b>Enter</b> om verder te gaan',
    drillEnter: 'Een regel, Enter, nog een regel. De pink gaat naar buiten en terug zonder de hand mee te slepen.',
    shiftSentences: 'Zinnen met een hoofdletter aan het begin en een punt aan het eind. Dit begint op echt schrijven te lijken.',
    shiftBurst: 'Een reeks om vast te zetten wat je in deze les hebt gezien.',
    shiftWords2: 'Vijf per regel, met de pink die in beide richtingen werkt.',
    shiftClose: 'Tot slot hele zinnen. Shift, letter, loslaten — zonder erbij stil te staan.',

    /* --- cijferrij --- */
    introDigits: 'De cijferrij ligt boven de bovenste rij. Elke vinger gaat recht omhoog en op dezelfde manier weer terug. Dit zijn de langste strekkingen van de cursus.',
    drillDigitPair: 'De toetsen {keys} sla je aan met {finger} en met dezelfde vinger van de andere hand. Omhoog, aanslaan en terug naar de thuisrij.',
    drillDigitIndex: 'De twee die overblijven zijn voor de wijsvingers, die inmiddels meer toetsen halen dan elke andere vinger.',
    burstDigits: 'Een korte reeks met de cijfers die je hebt geleerd.',
    burstDigitsAll: 'Alle tien, door elkaar. In het begin gaat hier veel mis; dat is normaal.',
    digitsAll: 'De hele rij, in groepjes. Kijk niet omlaag om de 6 te zoeken.',
    digitsBackToWords: 'Even terug naar woorden, zodat de handen onthouden waar ze thuishoren.',
    digitsClose: 'Weer zinnen, nu met het hele toetsenbord tot je beschikking.',

    /* --- teksten --- */
    introProse: 'Lange, doorlopende teksten. Hier oefen je geen nieuwe toetsen, maar hetzelfde tempo over meerdere regels.',
    proseLine: 'Blijf vooruitlezen op wat je typt. Als je stopt om te kijken, verlies je meer tijd dan met verbeteren.',
    proseBurst: 'Een laatste lange reeks om af te sluiten.',

    /* --- zwakke toetsen en test --- */
    weakText: 'Een oefening gebouwd op de toetsen waarbij je de meeste fouten maakt. Elke keer dat je oefent is hij anders.',
    testText: 'Geen nieuwe toetsen. Typ in een tempo dat je tot het eind kunt volhouden.',

    /* --- titels --- */
    titleFirst: '{keys}, plus de spatiebalk',
    titleKeys: '{keys}',
    titleReview: 'Herhaling',
    titleReviewMixed: 'Letters, cijfers en tekens',
    titleShift: 'Shift en Enter',
    titleEdge: 'De buitenste kolom',
    titleDigits: 'De cijferrij',
    titleProse: 'Tekst en tempo {n}',
    titleWeak: 'Zwakke toetsen',
    titleTest: 'Test van unit {unit}',

    /* --- samenvatting op de overzichtspagina --- */
    summary: {
      edge: 'De kolom aan de rechterrand: zes toetsen voor de pink, met het streepje en het trema.',
      first: 'De twee toetsen met een ribbeltje, de spatiebalk, en de gewoonte om niet omlaag te kijken.',
      keys: 'Nieuwe toetsen: {keys}. De vinger strekt, slaat aan en keert terug.',
      review: 'Geen nieuwe toetsen. Alles van hiervoor, langer achter elkaar en sneller.',
      shift: 'Hoofdletters met de tegenovergestelde pink, en een nieuwe regel.',
      digits: 'De tien cijfers, elke vinger recht omhoog.',
      prose: 'Hele alinea\'s, om het tempo langer dan een regel vast te houden.',
      weak: 'Een oefening gemaakt van de toetsen waarbij je de meeste fouten maakt.',
      test: 'Een test op tijd met alles wat je hebt geleerd.'
    },

    /* --- opening van elke les --- */
    intro: {
      edge: 'De rechterpink heeft meer toetsen dan elke andere vinger, en de toetsen aan de rand oefent bijna niemand. Hier liggen het streepje, dat je nodig hebt voor samengestelde woorden, en het trema: een dode toets. Sla hem aan en daarna de klinker, en zo schrijf je ideeën, knieën en ruïne.',
      first: 'De toetsen met een klein ribbeltje zijn het vertrekpunt. De twee wijsvingers rusten daar en gaan er niet weg; de rest van de cursus wordt gemeten vanuit die houding. Begin met je handen op hun plek te leggen en kijk alleen naar het scherm.',
      keys: 'Nieuwe toetsen in deze les: {keys}. Je slaat ze aan met {fingers}. De beweging is altijd dezelfde — uitstrekken, aanslaan en terug — en het terugkeren is wat je oefent, want als de vinger buiten blijft, gaat de volgende letter scheef.',
      review: 'Deze les leert je niets nieuws. Het is het moment om te controleren dat wat je hiervoor hebt geleerd vanzelf gaat, en dat is iets anders dan weten waar elke toets zit.',
      shift: 'Tot nu toe heb je alles in kleine letters getypt. Shift verandert dat, en er is één regel die je meteen goed moet leren: je drukt hem in met de pink van de hand tegenover de letter. Met de pink van dezelfde hand draait de hand en ga je naar het toetsenbord kijken.',
      digits: 'De cijferrij ligt boven alles wat je tot nu toe hebt getypt, en hier gaan de vingers het verst. Hier gaat meer mis dan waar ook in de cursus, en het wordt beter zoals de rest: eerst langzaam.',
      prose: 'Nu heb je het hele toetsenbord. Wat overblijft is geen toetsen leren maar het tempo vasthouden: vooruitlezen, niet stoppen om te kijken en niet versnellen aan het eind van de regel.',
      weak: 'Deze oefening wordt gebouwd op de toetsen waarbij jij fouten maakt, niet op een vaste lijst. Als jij verandert, verandert hij mee.',
      test: 'Een test op tijd. Er is niets nieuws: alleen wat je al kunt, in een tempo dat je kunt volhouden.'
    },

    /* --- afsluiting van elke les --- */
    congrats: {
      edge: 'Met het streepje en het trema ontbreekt er bijna niets meer om gewoon Nederlands te schrijven. Dit is de kolom die in de meeste cursussen half blijft liggen.',
      first: 'Nu liggen je handen op hun plek. Vanaf hier zijn het allemaal toetsen die je vanuit deze houding bereikt en meteen weer loslaat.',
      keys: 'Weer toetsen onder je vingers. Als {keys} er zonder zoeken uitkomen, heeft de les zijn werk gedaan.',
      review: 'Niets nieuws en toch sneller. Dat is precies wat er moest gebeuren.',
      shift: 'Met Shift en Enter kun je een hele tekst typen zoals je buiten deze cursus schrijft.',
      digits: 'De cijferrij kost het meeste moeite en wordt daarna het minst geoefend. Kom af en toe terug naar deze les.',
      prose: 'Hele alinea\'s in een vast tempo. Dit is geen typen leren meer; dit is typen.',
      weak: 'Zwakke toetsen worden sterk met een minuut per dag, niet met een uur per maand.',
      test: 'Test gehaald. Het getal telt minder dan dat je het einde hebt gehaald zonder te kijken.'
    },

    units: {
      u1: { title: 'De thuisrij',
        summary: 'Acht toetsen onder je vingers, daarna {reach} — genoeg om echte woorden te typen zonder omlaag te kijken.' },
      u2: { title: 'De rest van het alfabet',
        summary: 'De bovenste rij, de onderste rij, de leestekens, de é met het accent aigu en hoofdletters — het hele alfabet, plus Shift en Enter.' },
      u3: { title: 'Cijfers, tekens en tempo',
        summary: 'De cijferrij, de buitenste kolom met het trema, en daarna lange alinea\'s in een vast tempo.' }
    },

    groups: {
      start: 'Begin hier',
      reach: 'Strek je vingers',
      finish: 'Sluit de unit af',
      'numbers-symbols': 'Cijfers en tekens',
      speed: 'Tempo'
    },

    starterHint: 'Leg je wijsvingers op de twee toetsen met een ribbeltje en typ wat je ziet, zonder naar het toetsenbord te kijken.'
  }
};
