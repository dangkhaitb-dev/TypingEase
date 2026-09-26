/* data/courses/de.js — khoá học tiếng Đức: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/de/*.json khi
 * trình duyệt nhận được. Đẩy nó ra runtime là bắt mọi khách tải một bảng chữ chỉ để dựng lại thứ
 * đã có trong file bài học.
 *
 * ĐÂY LÀ TOÀN BỘ PHẦN PHẢI DỊCH cho một ngôn ngữ Tier 2. Thứ tự dạy phím thì suy từ bố cục bàn
 * phím (scripts/build-course.js), kho từ nằm ở data/words/de.js, còn chỗ này là lời dạy —
 * khoảng 60 mẫu câu có chỗ trống. Ngôn ngữ mới = ba file này cộng một bảng UI.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` là chỗ trống generator điền vào. Mẫu nào
 * không có chỗ trống thì là câu cố định — vẫn để ở đây, vì nó vẫn phải dịch.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Xưng hô bằng `du` xuyên suốt.
 * Không tính từ quảng cáo, không dấu chấm than.
 *
 * NGỮ PHÁP CỦA CHỖ TRỐNG. Tên ngón tay ở dưới đều ở dạng NGUYÊN CÁCH (`der linke Zeigefinger`),
 * nên mọi mẫu câu chứa `{finger}`/`{fingers}` phải đặt nó vào vị trí chủ ngữ — `Für diese Taste
 * ist {finger} zuständig`, chứ không phải `gehört {finger}` (đòi tặng cách). Đổi mẫu câu mà quên
 * luật này thì câu vẫn sinh ra được, chỉ là sai ngữ pháp và không ai thấy cho tới khi đọc bài.
 * `{fingers}` luôn có ít nhất hai tên nối bằng ` und `, nên động từ ở đó phải chia số nhiều.
 *
 * Lời dạy ở đây là văn xuôi hiển thị, KHÔNG phải nội dung gõ — nên nó được dùng ü và ß thoải
 * mái, dù khoá không dạy hai thứ đó. Ràng buộc chữ cái chỉ áp cho data/words/de.js.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.de = {
  lang: 'de',
  name: 'Deutsch',

  // Bố cục 188 — QWERTZ Đức. Ô Semicolon in ra ö, nên bài 4 dạy `a` và `ö`: một trong ba chữ có
  // Umlaut nằm ngay hàng cơ sở, dưới ngón út phải, và người học chạm vào nó ở bài thứ tư. Ô
  // Quote in ra ä nên ä tới ở u2-l08, còn ß ở ô Minus nên nó là chữ cuối cùng của khoá.
  // ü nằm ở ô BracketLeft — bản kế hoạch không dạy ô đó, nên khoá này không có ü ở đâu cả.
  keyboardId: 188,

  // Kho riêng, cùng lý do như mọi khoá khác: mã bài trùng nhau giữa các ngôn ngữ, dùng chung
  // khoá là hai giáo trình ghi đè lên nhau.
  progressKey: 'typingease-progress-de-v1',
  badgesKey: 'typingease-badges-de-v1',

  // Chữ cái nào được coi là "phím chữ" khi dựng bài luyện ngón. Có ä ö ß, cộng ba ô dấu câu mà
  // khoá thật sự dạy (`,` `.` `-`). KHÔNG có phím chết nào phải loại ra: QWERTZ Đức gõ mọi chữ
  // của nó bằng phím thật, kể cả ba chữ Umlaut — khác hẳn bố cục Tây Ban Nha, nơi ´ phải bị
  // cấm khỏi bài luyện ngón vì gõ một mình nó không hiện ra gì.
  letterTest: '^[a-zäöß,.-]$',
  /*
   * CÁC HỌ KHÁC CỦA TIẾNG ĐỨC. Mỗi họ là một khoá riêng (data/languages.js → `courses`), sinh bằng
   * `--course de-<họ>`. Ở đây chỉ có phần KHÁC khoá QWERTZ 188; mọi thứ khác dùng bản ở dưới.
   */
  families: {
    // Swiss German (193): chữ cái như QWERTZ Đức, nhưng KHÔNG có ß (tiếng Đức Thuỵ Sĩ không dùng
    // nó) và cột ngoài khác: ' ^ ü ¨ $. Từ có ß tự rơi khỏi khoá vì không gõ được.
    schweiz: {
      teaching: {
        units: {
          u3: { title: 'Zahlen, Zeichen und Tempo',
            summary: 'Die Zahlenreihe, der rechte Rand mit dem Ü, Adressen und Links aus dem Alltag, danach lange Absätze in gleichmäßigem Tempo.' }
        }
      }
    },

    // Neo (190): hàng cơ sở là u i a e o s n r t d y — nguyên âm ngay bài đầu. ü ö ä nằm ở hàng
    // dưới (u2), ß ở cột ngoài cùng với hai phím chết ` và ´. Câu nào nói "Ü ở mép phải" hay
    // "Ö đã ở hàng cơ sở" đều sai trên bố cục này.
    neo: {
      teaching: {
        introEdge: 'Die Tasten am rechten Rand, alle vom kleinen Finger. Auf Neo liegen hier das J, das ß und zwei tote Tasten für die Akzente.',
        edgeBackToWords: 'Zurück zu den Wörtern, jetzt mit der ganzen Tastatur — ß eingeschlossen.',
        summary: { edge: 'Die Spalte am rechten Rand: sechs Tasten, alle vom kleinen Finger, darunter J und ß.' },
        intro: {
          edge: 'Der rechte kleine Finger ist für mehr Tasten zuständig als jeder andere, und die am Rand übt fast niemand. Auf Neo liegen hier zwei Buchstaben, die man ständig braucht: das J und das ß. Ohne sie fehlen ja, groß, weiß und Straße.'
        },
        congrats: { edge: 'Mit J und ß fehlt kein Buchstabe mehr. Das ist die Spalte, die die meisten Kurse auslassen.' },
        units: {
          u1: { title: 'Die Grundstellung',
            summary: 'Acht Tasten unter den Fingern, danach {reach} — auf Neo liegen die Vokale schon hier, also gibt es von Anfang an echte Wörter.' },
          u2: { title: 'Der Rest des Alphabets',
            summary: 'Obere Reihe, untere Reihe mit Ü, Ö und Ä, Punkt und Komma — fast das ganze Alphabet, danach Shift und Enter. J und ß folgen in der nächsten Einheit.' }
        }
      }
    }
  },

  teaching: {
    and: ' und ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'Komma', '.': 'Punkt', ';': 'Semikolon', ':': 'Doppelpunkt', "'": 'Apostroph', '-': 'Bindestrich' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Alle übrigen Tasten',
      unitSummary: 'Die {count} Zeichen dieser Tastatur, die der Kurs noch nicht benutzt hat, jedes dort getippt, wo es im Text wirklich vorkommt.',
      groupSymbols: 'Die restlichen Tasten',
      groupFinish: 'Die Einheit abschließen',
      titleNumberRow: 'Die Zeichen der Zahlenreihe',
      titleKeys: '{keys}',
      titleReview: 'Alle Zeichen zusammen',
      summaryKeys: 'Neu in dieser Lektion: {keys}.',
      summaryReview: 'Alle Zeichen dieser Einheit, gemischt mit Wörtern und Zahlen.',
      summaryTest: 'Ein Test auf Zeit mit allen Tasten der Tastatur.',
      introLesson: 'Tasten, die der Kurs noch nicht benutzt hat: {keys}. {shiftNote}',
      shiftNote: 'Jedes davon entsteht aus Shift und einer Taste, die deine Finger schon kennen — Shift mit dem kleinen Finger der anderen Hand.',
      shiftNoteMixed: 'Manche brauchen Shift, mit dem kleinen Finger der anderen Hand; die übrigen haben eine eigene Taste, die der Kurs bisher nicht benutzt hat.',
      introKey: '{key}: Dafür ist {finger} zuständig{shift}.',
      introKeyShift: ', mit Shift von der anderen Hand',
      drillOne: 'Zuerst {key} für sich, dann dort, wo das Zeichen wirklich vorkommt.',
      burst: 'Eine Runde kurzer Stücke mit diesen Zeichen.',
      together: 'Alles aus dieser Lektion, gemischt.',
      inWords: 'Wieder Wörter, mit den Zeichen an ihrem Platz.',
      introReview: 'Keine neue Taste. Alle Zeichen dieser Einheit, gemischt mit Wörtern und Zahlen.',
      reviewFirst: 'Die Zeichen im selben Tempo wie die Buchstaben um sie herum.',
      reviewLine: 'Halte das Tempo auch bei den Zeichen; es sind Tasten wie alle anderen.',
      congratsKeys: '{keys}: jetzt unter deinen Fingern. Das Zeichen kommt so leicht wie der Buchstabe daneben.',
      congratsReview: 'Jede Taste dieser Tastatur war an der Reihe.',
      introTest: 'Ein Test auf Zeit mit allem, Zeichen eingeschlossen.',
      congratsTest: 'Das war die ganze Tastatur. Es gibt darauf keine Taste mehr, die dieser Kurs dir nicht beigebracht hat.',
      testText: 'Wörter, Zahlen und Zeichen. Dasselbe Tempo von Anfang bis Ende.'
    },

    fingers: {
      LP: 'der linke kleine Finger', LR: 'der linke Ringfinger', LM: 'der linke Mittelfinger',
      LI: 'der linke Zeigefinger', LT: 'der linke Daumen', RT: 'der rechte Daumen',
      RI: 'der rechte Zeigefinger', RM: 'der rechte Mittelfinger',
      RR: 'der rechte Ringfinger', RP: 'der rechte kleine Finger'
    },

    /* --- cot ngoai cua ngon ut phai --- */
    introEdge: 'Die Tasten am rechten Rand, alle vom kleinen Finger. Eine davon ist das Ü — ohne sie gibt es kein für, kein über und keine fünf.',
    drillEdgePair: 'Jetzt {keys}. Der kleine Finger geht nach außen und kommt zurück; die Hand bleibt, wo sie ist.',
    burstEdge: 'Eine Runde mit dem, was du aus dieser Spalte schon hast.',
    drillEdgeAll: 'Alle sechs zusammen. Hier verdreht sich das Handgelenk am schnellsten, wenn der Finger nicht zurückkehrt.',
    burstEdgeWords: 'Wieder Wörter, damit die Hand nach so viel Rand locker wird.',
    edgeBackToWords: 'Zurück zu den Wörtern, jetzt mit der ganzen Tastatur — Ü eingeschlossen.',
    edgeClose: 'Ganze Sätze zum Abschluss der Tastenlektionen.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Für diese Taste ist {finger} zuständig. Such sie ohne hinzusehen, tippe einmal und lass den Finger zurückgehen. Der Rückweg zählt genauso viel wie der Anschlag.',
    pressToContinue: 'Drücke <b>{key}</b>, um weiterzugehen',
    introSpace: 'Die Leertaste gehört dem rechten Daumen. Die Daumen machen sonst nichts, und deshalb muss man sie nie suchen.',
    pressSpace: 'Drücke die <b>Leertaste</b>, um weiterzugehen',

    /* --- luyện ngón --- */
    drillSpace: 'Kurze Gruppen, durch Leerzeichen getrennt. Der rechte Daumen geht runter und wieder hoch; die anderen Finger bleiben liegen.',
    drillNew: 'Nur {key} und das, was du schon kannst. Langsam, und nach jedem Anschlag geht der Finger zurück in die Grundstellung.',
    drillMixed: 'Die neuen Tasten gemischt mit den alten — so kommen sie später auch in Wörtern vor.',
    drillAgain: 'Noch einmal die beiden neuen Tasten. Es gibt damit noch keine Wörter zu schreiben, und das ist so gewollt.',
    drillWide: 'Alles, was du bis hierhin hast, in kurzen Gruppen. Sieh auf den Bildschirm, nicht auf die Hände.',
    drillAll: 'Ein letzter Durchgang mit allem aus dieser Lektion.',
    patternsBack: 'Kurz zurück zu den Mustern, um zu prüfen, ob die Finger noch in die Grundstellung zurückfinden.',

    /* --- ráfaga --- */
    burstKeys: 'Kurze Gruppen, eine nach der anderen. Geh bis zum Ende durch, auch wenn dir eine danebengeht.',
    burstLonger: 'Etwas längere Gruppen. Eile hilft hier noch nichts.',
    burstWords: 'Eine Runde kurzer Wörter mit den neuen Tasten darin.',

    /* --- palabras --- */
    wordsNew: 'Echte Wörter mit den neuen Tasten. Schreib das Wort in einem Zug, nicht Buchstabe für Buchstabe.',
    wordsOne: 'Jetzt mit dem Schwerpunkt auf <b>{key}</b> — die Taste, die du bisher am seltensten getroffen hast.',
    wordsAll: 'Alles gemischt, was du hast. Achte darauf, wie viele Wörter schon ohne Nachdenken kommen.',

    /* --- repaso --- */
    introReview: 'Keine neue Taste in dieser Lektion. Nur die, die du schon kennst — dichter hintereinander und schneller als bisher.',
    introReviewMixed: 'Buchstaben, Zahlen und Zeichen zusammen, so wie sie außerhalb eines Kurses vorkommen.',
    pressEnter: 'Drücke <b>Enter</b>, um anzufangen',
    reviewWords1: 'Zum Anfang einzelne Wörter. Ohne Eile: Tempo kommt aus Genauigkeit, nie umgekehrt.',
    reviewBurst: 'Eine kurze Runde. Mach die Liste zu Ende, auch wenn dir eins durchrutscht.',
    reviewWords2: 'Fünf Wörter pro Zeile. Lass die Augen den Fingern vorausgehen.',
    reviewPatterns: 'Noch einmal Muster, um zu prüfen, ob die Finger weiter in die Grundstellung zurückkehren.',
    reviewShort: 'Kurze Wörter in gutem Tempo. Die sollten inzwischen fast von allein kommen.',
    reviewBurst2: 'Mehr Zeit und mehr Wörter. Halte dasselbe Tempo von Anfang bis Ende.',
    reviewClose: 'Ganze Sätze. Hier zeigt sich, ob die Hand von allein zurückfindet.',
    reviewLast: 'Der letzte Durchgang. Wenn du bis hierhin nicht auf die Tastatur gesehen hast, ist die Lektion erledigt.',

    /* --- Shift và Enter --- */
    introShift: 'Großbuchstaben macht der kleine Finger der anderen Hand. Shift halten, Buchstabe tippen, loslassen. Nie mit demselben kleinen Finger, der auch den Buchstaben schreibt.',
    pressShift: 'Halte <b>Shift</b> und tippe einen Buchstaben, um weiterzugehen',
    drillShift: 'Groß und klein im Wechsel. Der kleine Finger geht runter und hoch; die andere Hand bleibt, wo sie ist.',
    wordsShift: 'Wörter mit großem Anfangsbuchstaben, so wie Namen geschrieben werden.',
    introEnter: 'Enter gehört dem rechten kleinen Finger, rechts neben der Grundstellung. Es ist die größte Taste, die dieser Finger erreichen muss.',
    pressEnterKey: 'Drücke <b>Enter</b>, um weiterzugehen',
    drillEnter: 'Eine Zeile, Enter, die nächste Zeile. Der kleine Finger geht raus und zurück, ohne die Hand mitzunehmen.',
    shiftSentences: 'Sätze mit großem Anfang und Punkt am Ende. Das sieht jetzt nach echtem Schreiben aus.',
    shiftBurst: 'Eine Runde, um das aus dieser Lektion festzumachen.',
    shiftWords2: 'Fünf pro Zeile, mit dem kleinen Finger in beide Richtungen.',
    shiftClose: 'Zum Schluss ganze Sätze. Shift, Buchstabe, loslassen — ohne darüber nachzudenken.',

    /* --- hàng số --- */
    introDigits: 'Die Zahlenreihe liegt über der oberen Buchstabenreihe. Jeder Finger geht geradeaus hoch und genauso wieder runter. Das sind die längsten Wege im ganzen Kurs.',
    drillDigitPair: '{keys}: {finger} und sein Gegenstück auf der anderen Hand. Hoch, tippen, zurück in die Grundstellung.',
    drillDigitIndex: 'Die zwei übrigen gehören den Zeigefingern, die ohnehin mehr Tasten erreichen als jeder andere Finger.',
    burstDigits: 'Eine kurze Runde mit den Zahlen, die du bis hierhin hast.',
    burstDigitsAll: 'Alle zehn, gemischt. Am Anfang geht hier viel daneben; das ist normal.',
    digitsAll: 'Die ganze Reihe, in Gruppen. Sieh nicht nach unten, um die 6 zu suchen.',
    digitsBackToWords: 'Kurz zurück zu den Wörtern, damit die Hände sich erinnern, wo sie wohnen.',
    digitsClose: 'Wieder Sätze, jetzt mit der ganzen Tastatur.',

    /* --- đoạn văn --- */
    introProse: 'Lange Texte am Stück. Geübt wird hier keine neue Taste, sondern dasselbe Tempo über mehrere Zeilen zu halten.',
    proseLine: 'Lies weiter, als du schreibst. Wer stehen bleibt und hinsieht, verliert mehr Zeit als beim Korrigieren.',
    proseBurst: 'Eine letzte lange Runde zum Abschluss.',

    /* --- phím yếu và kiểm tra --- */
    weakText: 'Eine Übung aus genau den Tasten, die dir am häufigsten danebengehen. Sie ändert sich mit jedem Mal.',
    testText: 'Keine neuen Tasten. Schreib in einem Tempo, das du bis zum Ende halten kannst.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, dazu die Leertaste',
    titleKeys: '{keys}',
    titleReview: 'Wiederholung',
    titleReviewMixed: 'Adressen, Links und Zahlen',
    titleShift: 'Shift und Enter',
    titleEdge: 'Die äußere Spalte',
    titleDigits: 'Die Zahlenreihe',
    titleProse: 'Text und Tempo {n}',
    titleWeak: 'Schwache Tasten',
    titleTest: 'Test zu Einheit {unit}',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'Die Spalte am rechten Rand: sechs Tasten, alle vom kleinen Finger, darunter das Ü.',
      first: 'Die zwei Tasten mit der Erhebung, die Leertaste und die Gewohnheit, nicht nach unten zu sehen.',
      keys: 'Neue Tasten: {keys}. Der Finger geht raus, tippt und kommt zurück.',
      review: 'Keine neue Taste. Alles Bisherige, dichter und schneller.',
      shift: 'Großbuchstaben mit dem gegenüberliegenden kleinen Finger, dazu der Zeilenumbruch.',
      digits: 'Die zehn Ziffern, jeder Finger geht geradeaus nach oben.',
      prose: 'Ganze Absätze, um das Tempo über mehr als eine Zeile zu halten.',
      weak: 'Eine Übung, gebaut aus den Tasten, die dir am häufigsten danebengehen.',
      test: 'Ein Test auf Zeit mit allem, was du bis hierhin gelernt hast.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'Der rechte kleine Finger ist für mehr Tasten zuständig als jeder andere, und die am Rand übt fast niemand. Eine davon zählt hier doppelt: das Ü. Ohne sie fehlen für, über, müssen, fünf und Glück — also ein gutes Stück Alltagsdeutsch.',
      first: 'Die beiden Tasten mit der kleinen Erhebung sind der Ausgangspunkt. Dort liegen die Zeigefinger und dort bleiben sie; alles andere im Kurs wird von dieser Stellung aus gemessen. Fang damit an, beide Hände aufzulegen und nur auf den Bildschirm zu sehen.',
      keys: 'Neu in dieser Lektion: {keys}. Dafür sind {fingers} zuständig. Die Bewegung ist immer dieselbe — raus, tippen, zurück — und der Rückweg ist der Teil, der geübt wird: bleibt der Finger draußen, geht der nächste Buchstabe daneben.',
      review: 'Diese Lektion bringt nichts Neues bei. Jetzt zeigt sich, ob das Bisherige ohne Nachdenken kommt, und das ist etwas anderes, als zu wissen, wo jede Taste liegt.',
      shift: 'Bis hierhin war alles klein geschrieben. Shift ändert das, und dazu gehört eine Regel, die man gleich richtig lernen sollte: Shift drückt der kleine Finger der Hand, die den Buchstaben nicht schreibt. Mit dem kleinen Finger derselben Hand verdreht sich die Hand, und am Ende siehst du wieder auf die Tastatur.',
      digits: 'Die Zahlenreihe liegt über allem, was du bisher geschrieben hast, und hier müssen die Finger am weitesten nach oben. Hier geht mehr daneben als irgendwo sonst im Kurs, und es lässt sich genauso beheben wie alles andere: erst langsam.',
      prose: 'Du hast jetzt die ganze Tastatur. Was bleibt, ist nicht mehr Tasten lernen, sondern das Tempo halten: vorauslesen, nicht stehen bleiben und am Zeilenende nicht schneller werden.',
      weak: 'Diese Übung wird aus den Tasten gebaut, die dir danebengehen, nicht aus einer festen Liste. Änderst du dich, ändert sie sich mit.',
      test: 'Ein Test auf Zeit. Es kommt nichts Neues: nur das, was du schon kannst, in einem Tempo, das du halten kannst.'
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Mit dem Ü fehlt kein Buchstabe mehr. Das ist die Spalte, die die meisten Kurse auslassen.',
      first: 'Die Hände liegen jetzt richtig. Ab hier sind alle Tasten solche, die man aus dieser Stellung erreicht und wieder loslässt.',
      keys: 'Wieder ein paar Tasten mehr unter den Fingern. Wenn {keys} ohne Suchen kommen, hat die Lektion ihre Arbeit getan.',
      review: 'Nichts Neues und trotzdem schneller. Genau das sollte passieren.',
      shift: 'Mit Shift und Enter kannst du einen ganzen Text so schreiben, wie er außerhalb dieses Kurses geschrieben wird.',
      digits: 'Die Zahlenreihe ist die schwerste und die, die danach am wenigsten geübt wird. Komm ab und zu zu dieser Lektion zurück.',
      prose: 'Ganze Absätze in gleichmäßigem Tempo. Das ist nicht mehr Tippen lernen; das ist Tippen.',
      weak: 'Schwache Tasten hören mit einer Minute am Tag auf, schwach zu sein — nicht mit einer Stunde im Monat.',
      test: 'Test bestanden. Die Zahl zählt weniger als die Tatsache, bis zum Ende gekommen zu sein, ohne hinzusehen.'
    },

    units: {
      u1: { title: 'Die Grundstellung',
        summary: 'Acht Tasten unter den Fingern, danach {reach} — genug für echte deutsche Wörter, ohne nach unten zu sehen. Das Ö liegt schon hier, unter dem rechten kleinen Finger.' },
      u2: { title: 'Der Rest des Alphabets',
        summary: 'Obere Reihe, untere Reihe, Punkt und Komma, dazu das Ä — fast das ganze Alphabet, danach Shift und Enter.' },
      u3: { title: 'Zahlen, Zeichen und Tempo',
        summary: 'Die Zahlenreihe, der Bindestrich und das Eszett, Adressen und Links aus dem Alltag, danach lange Absätze in gleichmäßigem Tempo.' }
    },

    groups: {
      start: 'Hier fängt es an',
      reach: 'Die Finger strecken sich',
      finish: 'Die Einheit abschließen',
      'numbers-symbols': 'Zahlen und Zeichen',
      speed: 'Tempo'
    },

    starterHint: 'Leg die Zeigefinger auf die beiden Tasten mit der Erhebung und schreib, was du siehst, ohne auf die Tastatur zu sehen.'
  }
};
