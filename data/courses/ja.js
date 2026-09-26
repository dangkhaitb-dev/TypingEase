/* data/courses/ja.js — khoá học tiếng Nhật: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/ja/*.json khi
 * trình duyệt nhận được.
 *
 * KHOÁ NÀY DẠY GÕ ROMAJI CHO IME. Tiếng Nhật được gõ qua bộ gõ kana-kanji, và cách nhập phổ biến
 * nhất là romaji: ngón tay gõ `gakkou`, IME đổi thành がっこう rồi 学校. Nên nội dung bài là chữ
 * Latin đúng như gõ vào IME (xem đầu data/words/ja.js), và lời dạy nói thẳng điều đó ở bài 1,
 * trang đầu và trang lộ trình. Player so từng ký tự ASCII, nên người học phải TẮT IME (半角英数)
 * khi luyện — lời dạy bài 1 và dòng gợi ý trên trang đầu nói điều này.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Thể lịch sự です/ます, ngắn, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ
 * quảng cáo, không dấu chấm than. Không gọi tên người học; câu mệnh lệnh dùng 〜てください.
 *
 * THUẬT NGỮ, chốt một lần: キー, キーボード, ホームポジション (hàng cơ sở), スペースキー, 連打
 * (burst), 復習 (ôn tập), テスト, 画面 (màn). Ngón: 小指, 薬指, 中指, 人差し指, 親指.
 *
 * HAI HỌ. Mặc định là JIS (216): chữ cái ở y chỗ QWERTY, nhưng dấu câu khác — ô Quote in ra `:`,
 * cột ngoài là / - ^ @ [ ], và bố cục có thêm ¥ và \ (ô IntlYen, IntlRo). Họ `us` (19) là bố cục
 * kiểu Mỹ: ô Quote là `'`, cột ngoài là / - = [ ] \. Chuỗi chữ cái như nhau, nên chỉ những câu nói
 * về dấu câu là phải viết lại cho họ `us`.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.ja = {
  lang: 'ja',
  name: '日本語',

  // Bố cục 216 — Japanese (JIS / Romaji).
  keyboardId: 216,

  progressKey: 'typingease-progress-ja-v1',
  badgesKey: 'typingease-badges-ja-v1',

  // Chữ cái cộng dấu câu mà JIS đặt ở vùng phím chữ: `;` `:` ở hàng cơ sở, `, . /` ở hàng dưới.
  letterTest: "^[a-z;:,.\\/-]$",

  // Trên Windows, bố cục JIS không có phím chết: ^ (ô Equal), ~ (Shift + ô đó) và ` (Shift + ô
  // BracketLeft) đều in ra thẳng — xem scripts/lib/unit-symbols.js.
  symbolsLive: ['^', '`', '~'],

  families: {
    // US配列 (19): dấu câu kiểu Mỹ. Không phím chết nào, nên ^ ` ~ cũng là ký tự thật.
    us: {
      // Bố cục 19 ghi kana (た て い…) làm ký tự tầng Shift — đó là nhãn cho chế độ gõ kana, không
      // phải thứ Shift gõ ra khi bộ gõ tắt. Khoá dạy romaji, nên unit "mọi phím còn lại" bỏ qua chúng.
      symbolsSkip: '[\\p{Script=Hiragana}\\p{Script=Katakana}ー]',
      letterTest: "^[a-z;',.\\/-]$",
      symbolsLive: ['^', '`', '~'],
      teaching: {
        keyNames: { ',': 'コンマ', '.': 'ピリオド', ';': 'セミコロン', ':': 'コロン', "'": 'アポストロフィ', '-': 'マイナス', '/': 'スラッシュ' },
        introEdge: '右端の列のキーです。すべて右手の小指で押します。US配列では / - = [ ] \\ が並びます。「-」は、IME で長音の「ー」になるキーです。',
        edgeBackToWords: '単語に戻ります。ここからは「-」を使う、コーヒー（ko-hi-）のようなカタカナ語も出てきます。',
        summary: {
          edge: '右端の列の6つのキー。すべて右手の小指で押します。長音「ー」を打つ「-」もここにあります。'
        },
        intro: {
          edge: '右手の小指は、ほかのどの指よりも多くのキーを受け持ちます。右端の列はホームポジションからいちばん遠く、練習されることもいちばん少ない場所です。US配列では / - = [ ] \\ が並び、そのうち「-」は IME で長音の「ー」になります。コーヒーは ko-hi-、ラーメンは ra-menn と打ちます。'
        }
      }
    }
  },

  teaching: {
    and: ' と ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'コンマ', '.': 'ピリオド', ';': 'セミコロン', ':': 'コロン', "'": 'アポストロフィ', '-': 'マイナス', '/': 'スラッシュ' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: '残りのすべてのキー',
      unitSummary: 'このキーボードで、講座にまだ出てきていない {count} 個の文字。どれも、実際に使われる形で打ちます。',
      groupSymbols: '残りのキー',
      groupFinish: 'ユニットの仕上げ',
      titleNumberRow: '数字の段の記号',
      titleKeys: '{keys}',
      titleReview: '記号をまとめて',
      summaryKeys: 'このレッスンのキー：{keys}',
      summaryReview: 'このユニットの記号を、単語や数字と混ぜて打ちます。',
      summaryTest: 'キーボードのすべてのキーを使う、時間つきのテストです。',
      introLesson: 'この講座でまだ使っていないキーです：{keys}。{shiftNote}',
      shiftNote: 'どれも、指がすでに知っているキーを Shift と一緒に押します。Shift は反対の手の小指で押してください。',
      shiftNoteMixed: 'Shift が必要なものは、反対の手の小指で Shift を押します。そのほかは専用のキーがあり、この講座ではまだ使っていなかったものです。',
      introKey: '{key} は{finger}で押します{shift}。押したら、指はすぐにホームポジションへ戻してください。',
      introKeyShift: '。Shift は反対の手で押します',
      drillOne: 'まず {key} だけを打ち、次に実際に使われる形で打ちます。',
      burst: 'これらの文字を含む短いかたまりの連打です。',
      together: 'このレッスンで出てきたものを、すべて混ぜて打ちます。',
      inWords: 'もう一度単語です。記号はそれぞれ使われる位置にあります。',
      introReview: '新しいキーはありません。このユニットのすべての文字を、単語や数字と混ぜて打ちます。',
      reviewFirst: '記号も、まわりの文字と同じリズムで打ってください。',
      reviewLine: '記号のところでリズムを崩さないでください。ほかと同じ、ただのキーです。',
      congratsKeys: '{keys}も指が覚えました。記号も、となりの文字と同じように出てきます。',
      congratsReview: 'このキーボードのすべてのキーを、実際に使われる形で一度ずつ打ちました。記号も文字と同じリズムで出てくるはずです。',
      introTest: '記号も含めた、すべてのキーを使う時間つきのテストです。最後まで保てるリズムで打ってください。',
      congratsTest: 'これでキーボード全体です。この講座で習っていないキーは、もう残っていません。',
      testText: '単語、数字、記号。最初から最後まで同じリズムで打ってください。'
    },

    fingers: {
      LP: '左手の小指', LR: '左手の薬指', LM: '左手の中指',
      LI: '左手の人差し指', LT: '左手の親指', RT: '右手の親指',
      RI: '右手の人差し指', RM: '右手の中指', RR: '右手の薬指',
      RP: '右手の小指'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: '右端の列のキーです。すべて右手の小指で押します。JIS配列では / - ^ @ [ ] が並びます。「-」は、IME で長音の「ー」になるキーです。',
    drillEdgePair: '次は {keys} です。小指が外へ出て、また戻ります。手は動かしません。',
    burstEdge: 'この列で覚えたキーを使う連打です。',
    drillEdgeAll: '6つをまとめて。指が戻らないと、手首がいちばんねじれやすい場所です。',
    burstEdgeWords: 'もう一度単語です。端のキーが続いたあとで、手をほぐします。',
    edgeBackToWords: '単語に戻ります。ここからは「-」を使う、コーヒー（ko-hi-）のようなカタカナ語も出てきます。',
    edgeClose: 'キーを覚えるレッスンの締めくくりに、文を打ちます。',

    /* --- màn giới thiệu phím --- */
    introKey: 'このキーは{finger}で押します。見ないで探し、一度押して、指を元の位置に戻してください。戻る動きも、押す動きと同じくらい大切です。',
    pressToContinue: '<b>{key}</b> を押して次へ',
    introSpace: 'スペースキーは右手の親指で押します。親指はほかのキーを受け持たないので、探す必要はありません。',
    pressSpace: '<b>スペースキー</b>を押して次へ',

    /* --- luyện ngón --- */
    drillSpace: 'スペースで区切った短いかたまりです。右手の親指が下りて戻ります。ほかの指はキーの上から動かしません。',
    drillNew: '{key} と、もう覚えたキーだけです。ゆっくり打ち、一打ごとに指をホームポジションに戻してください。',
    drillMixed: '新しいキーを、覚えたキーと混ぜて打ちます。単語の中で出てくるのと同じ形です。',
    drillAgain: 'もう一度、新しい2つのキーです。これだけで打てる単語はまだありませんが、それで問題ありません。',
    drillWide: 'ここまでのキーすべてを、短いかたまりで。見るのは画面で、手ではありません。',
    drillAll: 'ここまで覚えたキーすべてで、最後の一回です。',
    patternsBack: '少しだけ打鍵パターンに戻ります。指が帰り道を覚えているかを確かめます。',

    /* --- liên hoàn --- */
    burstKeys: '短いかたまりが次々に出ます。間違えても最後まで続けてください。',
    burstLonger: '少し長いかたまりです。まだ急いでも速くはなりません。',
    burstWords: '新しいキーを含む、短い単語の連打です。',

    /* --- từ --- */
    wordsNew: '新しいキーを使う、本物の日本語の単語です。一文字ずつではなく、単語をひと続きに打ってください。',
    wordsOne: '次は、いちばん押す回数が少なかった <b>{key}</b> を多めに打ちます。',
    wordsAll: 'ここまでのキーすべてを混ぜて。考えなくても出てくる単語が、もうかなりあるはずです。',

    /* --- ôn tập --- */
    introReview: 'このレッスンに新しいキーはありません。覚えたキーだけを、前より長く、前より速く打ちます。',
    introReviewMixed: '文字、数字、記号をまとめて。講座の外で出てくるのと同じ形です。',
    pressEnter: '<b>Enter</b> を押して始める',
    reviewWords1: 'まずは単語をひとつずつ。急がないでください。速さは正確さから生まれ、その逆はありません。',
    reviewBurst: '短い連打です。取りこぼしがあっても最後まで打ってください。',
    reviewWords2: '1行に5語です。目を指より先に進めてください。',
    reviewPatterns: 'もう一度打鍵パターンです。指がホームポジションに戻っているかを確かめます。',
    reviewShort: '短い単語を、いいリズムで。このあたりは、もうほとんど自然に出てくるはずです。',
    reviewBurst2: '時間も単語も多めです。最初から最後まで同じリズムを保ってください。',
    reviewClose: '文を打ちます。手がひとりでに元の位置に戻るかどうかが、ここでわかります。',
    reviewLast: '最後の一回です。キーボードを見ずにここまで来られたなら、このレッスンは終わりです。',

    /* --- Shift và Enter --- */
    introShift: '大文字は、その文字と反対の手の小指で Shift を押しながら打ちます。Shift を押したまま文字を打ち、離します。その文字を打つ側の小指では押しません。',
    pressShift: '<b>Shift</b> を押したまま文字を打って次へ',
    drillShift: '大文字と小文字を交互に。小指が下りて戻ります。もう一方の手は動かしません。',
    wordsShift: 'いつもの単語に戻ります。Shift を押したあとも、手がホームポジションに戻っているかを確かめてください。',
    introEnter: 'Enter は右手の小指で押します。ホームポジションの右にあり、この指が届くキーの中でいちばん大きなキーです。',
    pressEnterKey: '<b>Enter</b> を押して次へ',
    drillEnter: '1行打って Enter、また次の行。小指が出て戻り、手はついていきません。',
    shiftSentences: '頭を大文字に、終わりをピリオドにした文です。IME で入力するときは、ピリオドが「。」になります。',
    shiftBurst: 'このレッスンの内容を固める連打です。',
    shiftWords2: '1行に5語。小指が両方向に働きます。',
    shiftClose: '最後に文を打ちます。Shift、文字、離す。考えるために止まらないでください。',

    /* --- hàng số --- */
    introDigits: '数字の段は、上の段のさらに上にあります。どの指もまっすぐ上がって、まっすぐ戻ります。この講座でいちばん遠い動きです。',
    drillDigitPair: '{keys} は、{finger}と、反対の手の同じ指で押します。上がって押し、ホームポジションに戻ります。',
    drillDigitIndex: '残りの2つは人差し指です。人差し指は、もともとほかのどの指よりも多くのキーを受け持っています。',
    burstDigits: '覚えたばかりの数字で、短い連打です。',
    burstDigitsAll: '10個すべてを混ぜて。はじめはここでよく間違えますが、それが普通です。',
    digitsAll: '数字の段全体を、かたまりで。探すために下を見ないでください。',
    digitsBackToWords: '少しだけ単語に戻ります。手が自分の位置を思い出せるように。',
    digitsClose: 'もう一度文を打ちます。キーボード全体が使えます。',

    /* --- văn dài --- */
    introProse: '長く続く文章です。ここで練習するのは新しいキーではなく、何行も同じリズムを保つことです。',
    proseLine: '打っているところより先を読み続けてください。止まって手を見ると、間違いを直すより多くの時間を失います。',
    proseBurst: '最後に長めの連打です。',

    /* --- phím yếu và kiểm tra --- */
    weakText: 'いちばんよく間違えるキーから作る練習です。練習するたびに内容が変わります。',
    testText: '新しいキーはありません。最後まで保てるリズムで打ってください。',

    /* --- tiêu đề --- */
    titleFirst: '{keys}、そしてスペースキー',
    titleKeys: '{keys}',
    titleReview: '復習',
    titleReviewMixed: '文字、数字、記号',
    titleShift: 'Shift と Enter',
    titleEdge: '右端の列',
    titleDigits: '数字の段',
    titleProse: '文章とリズム {n}',
    titleWeak: '苦手なキー',
    titleTest: 'ユニット {unit} のテスト',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: '右端の列の6つのキー。すべて右手の小指で押します。長音「ー」を打つ「-」もここにあります。',
      first: '突起のある2つのキー、スペースキー、そして下を見ない習慣。',
      keys: '新しいキー：{keys}。指が出て、押して、戻ります。',
      review: '新しいキーはありません。ここまでのすべてを、前より長く、前より速く。',
      shift: '反対の手の小指で打つ大文字と、改行の Enter。',
      digits: '10個の数字。どの指もまっすぐ上がります。',
      prose: '1行を超えてリズムを保つための、まとまった文章。',
      weak: 'いちばんよく間違えるキーから作る練習。',
      test: 'ここまで覚えたすべてを使う、時間つきのテスト。'
    },

    /* --- mở bài --- */
    intro: {
      edge: '右手の小指は、ほかのどの指よりも多くのキーを受け持ちます。右端の列はホームポジションからいちばん遠く、練習されることもいちばん少ない場所です。JIS配列では / - ^ @ [ ] が並び、そのうち「-」は IME で長音の「ー」になります。コーヒーは ko-hi-、ラーメンは ra-menn と打ちます。',
      first: 'この講座では、日本語を IME に入力するときのローマ字の打鍵を練習します。たとえば gakkou と打つと、IME がそれを「がっこう」にし、「学校」に変換します。練習の画面ではローマ字をそのまま打つので、IME はオフ（半角英数）にしてください。まずは小さな突起のある F と J に両手の人差し指を置きます。人差し指はそこから動かさず、講座のすべてのキーをこの位置から測ります。両手を置いたら、見るのは画面だけにしてください。',
      keys: 'このレッスンの新しいキー：{keys}。{fingers}で押します。動きはいつも同じで、出て、押して、戻ります。練習するのは戻る動きです。指が外に残ったままだと、次の文字を間違えるからです。',
      review: 'このレッスンでは新しいことは習いません。ここまでのキーが考えなくても出てくるかを確かめる時間です。キーの位置を知っていることと、それは同じではありません。',
      shift: 'ここまではすべて小文字でした。Shift を使うと大文字になります。最初に身につけたい決まりがひとつあります。Shift は、打つ文字と反対の手の小指で押します。同じ側の小指で押すと手がねじれ、結局キーボードを見ることになります。日本語を IME で入力するときに大文字はほとんど使いませんが、ローマ字で名前を書くときや英字の入力では必要になります。',
      digits: '数字の段は、ここまで打ってきたどの段よりも上にあり、指がいちばん遠くまで伸びる場所です。講座のほかのどこよりも間違いが多くなりますが、直し方は同じです。まずはゆっくり打ってください。',
      prose: 'キーボード全体が使えるようになりました。残っているのはキーを覚えることではなく、リズムを保つことです。指より先を読み、止まって手を見ず、行の終わりで急がないこと。',
      weak: 'この練習は決まったリストではなく、あなたが間違えたキーから作られます。上達すれば、内容も変わります。',
      test: '時間つきのテストです。新しいことはありません。覚えたことだけを、最後まで保てるリズムで。'
    },

    /* --- kết bài --- */
    congrats: {
      edge: '右端の列は、多くの講座が途中で終わらせてしまう場所です。この講座では、もう終わりました。',
      first: '手の位置が決まりました。ここからは、すべてこの位置から届くキーを押して、離すだけです。',
      keys: '指の下のキーが増えました。{keys} を探さずに打てるなら、このレッスンの役目は果たせています。',
      review: '新しいことはないのに、前より速くなりました。それがこのレッスンの目的です。',
      shift: 'Shift と Enter で、複数行の文章をまとめて打てるようになりました。',
      digits: '数字の段はいちばん難しく、この先いちばん練習されない段です。ときどきこのレッスンに戻ってきてください。',
      prose: '文章を同じリズムで打てました。もう打ち方を習っているのではなく、打っています。',
      weak: '苦手なキーは、月に一時間より、毎日一分の練習で苦手でなくなります。',
      test: 'テストに合格しました。数字よりも、キーボードを見ずに最後まで打てたことに意味があります。'
    },

    units: {
      u1: { title: 'ホームポジション',
        summary: '指の下の8つのキー、そして {reach}。下を見ずに、日本語の単語をローマ字で打てるようになります。' },
      u2: { title: '残りのアルファベット',
        summary: '上の段、下の段、句読点、大文字。アルファベットすべてと、Shift と Enter。' },
      u3: { title: '数字、記号、スピード',
        summary: '数字の段、長音「ー」を打つ「-」を含む右端の列、そしてリズムを保って打つ長い文章。' }
    },

    groups: {
      start: 'ここから始める',
      reach: '指を伸ばす',
      finish: 'ユニットの仕上げ',
      'numbers-symbols': '数字と記号',
      speed: 'スピード'
    },

    starterHint: 'IME をオフ（半角英数）にして、突起のある2つのキーに人差し指を置き、キーボードを見ずに画面の文字を打ってください。'
  }
};
