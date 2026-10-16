/* data/courses/ms.js — khoá học tiếng Mã Lai (Bahasa Melayu): cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/ms/*.json khi
 * trình duyệt nhận được.
 *
 * ĐÂY LÀ TOÀN BỘ PHẦN PHẢI DỊCH cho một ngôn ngữ Tier 2. Thứ tự dạy phím thì suy từ bố cục bàn
 * phím (scripts/build-course.js), kho từ nằm ở data/words/ms.js, còn chỗ này là lời dạy.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Gọi người học là "anda", nhất quán từ đầu tới cuối.
 *
 * THUẬT NGỮ, chốt một lần cho cả khoá: kekunci (phím), papan kekunci (bàn phím), baris asas
 * (hàng cơ sở), bar ruang (phím cách), pecutan (burst), ulang kaji (ôn tập), ujian (kiểm tra),
 * skrin (màn). Ngón: kelingking, manis, hantu, telunjuk, ibu jari.
 *
 * Tiếng Mã Lai không có dấu, nên không có câu nào nói về phím chết. Chỉ một họ (bố cục 116),
 * nên không có khối `families`. Bố cục Jawi (119) không thuộc khoá này.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.ms = {
  lang: 'ms',
  name: 'Bahasa Melayu',

  // Bố cục 116 — Malay (Latin). Từng phím y hệt QWERTY Mỹ, nên bài 4 dạy `a` và `;`.
  keyboardId: 116,

  // Kho riêng: mã bài trùng nhau giữa các ngôn ngữ, dùng chung khoá là hai giáo trình ghi đè
  // lên nhau.
  progressKey: 'typingease-progress-ms-v1',
  badgesKey: 'typingease-badges-ms-v1',

  // Như QWERTY Mỹ: không phím chết, dấu câu ở hàng cơ sở/hàng dưới tính là phím chữ.
  letterTest: "^[a-z;',.\\/-]$",

  // Ký tự dấu nào là ký tự THẬT trên bố cục này, không phải phím chết — xem
  // scripts/lib/unit-symbols.js. Trên 116 cả ba đều gõ ra thẳng.
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' dan ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'koma', '.': 'noktah', ';': 'koma bernoktah', ':': 'titik bertindih', "'": 'apostrof', '-': 'sempang', '/': 'garis condong' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Semua kekunci lain',
      unitSummary: '{count} aksara pada papan kekunci ini yang belum digunakan dalam kursus — kurungan, mata wang, selebihnya lapisan Shift — setiap satu ditaip di tempat ia benar-benar digunakan.',
      groupSymbols: 'Kekunci yang tinggal',
      groupFinish: 'Tamatkan unit',
      titleNumberRow: 'Simbol pada baris nombor',
      titleKeys: '{keys}',
      titleReview: 'Semua simbol bersama',
      summaryKeys: 'Dalam pelajaran ini: {keys}.',
      summaryReview: 'Semua simbol unit ini, bercampur dengan perkataan dan nombor.',
      summaryTest: 'Ujian bermasa dengan setiap kekunci pada papan kekunci.',
      introLesson: 'Kekunci yang belum digunakan dalam kursus ini: {keys}. {shiftNote}',
      shiftNote: 'Setiap satu ialah Shift bersama kekunci yang jari anda sudah kenal — Shift ditekan oleh kelingking tangan yang sebelah lagi.',
      shiftNoteMixed: 'Sebahagiannya perlu Shift, ditekan oleh kelingking tangan yang sebelah lagi; selebihnya ada kekunci sendiri yang belum pernah digunakan dalam kursus.',
      introKey: '{key} ditekan oleh {finger}{shift}.',
      introKeyShift: ', dengan Shift di tangan yang sebelah lagi',
      drillOne: '{key} seorang diri dahulu, kemudian di tempat ia benar-benar digunakan.',
      burst: 'Satu pecutan cebisan pendek yang mengandungi aksara ini.',
      together: 'Semua yang ada dalam pelajaran ini, bercampur.',
      inWords: 'Perkataan semula, dengan simbol di tempatnya.',
      introReview: 'Tiada kekunci baharu. Setiap aksara unit ini, bercampur dengan perkataan dan nombor.',
      reviewFirst: 'Taip simbol pada rentak yang sama dengan huruf di sekelilingnya.',
      reviewLine: 'Kekalkan rentak ketika melalui simbol; ia kekunci seperti yang lain juga.',
      congratsKeys: '{keys}: kini di bawah jari anda. Simbol keluar semudah huruf di sebelahnya.',
      congratsReview: 'Setiap kekunci pada papan kekunci ini sudah mendapat gilirannya.',
      introTest: 'Ujian bermasa dengan semuanya, termasuk simbol.',
      congratsTest: 'Itulah seluruh papan kekunci. Tiada lagi kekunci padanya yang belum diajar oleh kursus ini.',
      testText: 'Perkataan, nombor dan simbol. Satu rentak dari awal hingga akhir.'
    },

    fingers: {
      LP: 'jari kelingking kiri', LR: 'jari manis kiri', LM: 'jari hantu kiri',
      LI: 'jari telunjuk kiri', LT: 'ibu jari kiri', RT: 'ibu jari kanan',
      RI: 'jari telunjuk kanan', RM: 'jari hantu kanan', RR: 'jari manis kanan',
      RP: 'jari kelingking kanan'
    },

    /* --- lajur luar kelingking kanan --- */
    introEdge: 'Kekunci di tepi kanan, semuanya untuk kelingking. Inilah jangkauan paling jauh jari itu, dan yang paling jarang dilatih selepas ini.',
    drillEdgePair: 'Sekarang {keys}. Kelingking keluar dan kembali; tangan kekal di tempatnya.',
    burstEdge: 'Satu pecutan dengan kekunci lajur ini yang sudah anda pelajari.',
    drillEdgeAll: 'Keenam-enamnya bersama. Di sudut inilah pergelangan tangan paling mudah terpulas jika jari tidak kembali.',
    burstEdgeWords: 'Perkataan semula, untuk melonggarkan tangan selepas banyak kekunci tepi.',
    edgeBackToWords: 'Kembali kepada perkataan, dengan seluruh papan kekunci tersedia.',
    edgeClose: 'Ayat penuh untuk menutup pelajaran kekunci.',

    /* --- skrin pengenalan kekunci --- */
    introKey: 'Kekunci ini milik {finger}. Cari tanpa melihat, tekan sekali, dan biarkan jari kembali ke tempatnya. Perjalanan pulang sama penting dengan tekanan.',
    pressToContinue: 'Tekan <b>{key}</b> untuk meneruskan',
    introSpace: 'Bar ruang milik ibu jari kanan. Ibu jari tidak melakukan kerja lain, sebab itu anda tidak perlu mencarinya.',
    pressSpace: 'Tekan <b>bar ruang</b> untuk meneruskan',

    /* --- latih tubi --- */
    drillSpace: 'Kumpulan pendek dipisahkan oleh ruang. Ibu jari kanan turun dan naik; jari lain kekal di tempatnya.',
    drillNew: 'Hanya {key} dan apa yang anda sudah tahu. Perlahan-lahan, dan bawa jari kembali ke baris asas selepas setiap tekanan.',
    drillMixed: 'Kekunci baharu bercampur dengan yang lama, seperti rupanya nanti di dalam perkataan.',
    drillAgain: 'Dua kekunci baharu sekali lagi. Belum ada perkataan yang boleh ditaip dengannya, dan itu memang dijangka.',
    drillWide: 'Semua yang anda ada setakat ini, dalam kumpulan pendek. Mata pada skrin, bukan pada tangan.',
    drillAll: 'Satu pusingan terakhir dengan semua yang dipelajari setakat ini.',
    patternsBack: 'Kembali kepada corak sebentar, untuk memastikan jari masih tahu jalan pulang.',

    /* --- pecutan --- */
    burstKeys: 'Kumpulan pendek, satu demi satu. Teruskan hingga habis walaupun anda tersilap.',
    burstLonger: 'Kumpulan yang lebih panjang sedikit. Tergesa-gesa belum membantu.',
    burstWords: 'Satu pecutan perkataan pendek yang mengandungi kekunci baharu.',

    /* --- perkataan --- */
    wordsNew: 'Perkataan sebenar dengan kekunci baharu. Taip setiap perkataan sekali gus, bukan huruf demi huruf.',
    wordsOne: 'Sekarang tumpuan pada <b>{key}</b>, kekunci yang paling jarang anda tekan.',
    wordsAll: 'Semua yang anda ada, bercampur. Perhatikan berapa banyak perkataan yang sudah keluar tanpa difikirkan.',

    /* --- ulang kaji --- */
    introReview: 'Tiada kekunci baharu dalam pelajaran ini. Hanya yang anda sudah kenal, lebih berturut-turut dan lebih laju daripada sebelum ini.',
    introReviewMixed: 'Huruf, nombor dan simbol bersama, seperti rupanya di luar kursus.',
    pressEnter: 'Tekan <b>Enter</b> untuk bermula',
    reviewWords1: 'Mula dengan perkataan satu-satu. Jangan tergesa-gesa: kelajuan datang daripada ketepatan, bukan sebaliknya.',
    reviewBurst: 'Satu pecutan pendek. Habiskan senarai walaupun ada yang terlepas.',
    reviewWords2: 'Lima perkataan sebaris. Biarkan mata mendahului jari.',
    reviewPatterns: 'Corak sekali lagi, untuk memastikan jari masih kembali ke baris asas.',
    reviewShort: 'Perkataan pendek, pada rentak yang baik. Yang ini sepatutnya sudah keluar hampir sendiri.',
    reviewBurst2: 'Lebih lama dan lebih banyak perkataan. Kekalkan rentak yang sama dari awal hingga akhir.',
    reviewClose: 'Ayat penuh. Di sinilah kelihatan sama ada tangan kembali sendiri ke tempatnya.',
    reviewLast: 'Pusingan terakhir. Jika anda sampai di sini tanpa melihat papan kekunci, pelajaran ini selesai.',

    /* --- Shift dan Enter --- */
    introShift: 'Huruf besar ditaip dengan kelingking tangan yang bertentangan dengan huruf itu. Tahan Shift, tekan huruf, lepaskan. Jangan sekali-kali dengan kelingking yang sama yang menaip huruf.',
    pressShift: 'Tahan <b>Shift</b> dan tekan satu huruf untuk meneruskan',
    drillShift: 'Huruf besar dan huruf kecil berselang-seli. Kelingking turun dan naik; tangan yang satu lagi tidak berganjak.',
    wordsShift: 'Perkataan dengan huruf besar di awal, seperti nama orang dan tempat.',
    introEnter: 'Enter milik kelingking kanan, di sebelah kanan baris asas. Inilah kekunci paling besar yang perlu dicapai oleh jari itu.',
    pressEnterKey: 'Tekan <b>Enter</b> untuk meneruskan',
    drillEnter: 'Satu baris, Enter, baris seterusnya. Kelingking keluar dan kembali tanpa menarik tangan.',
    shiftSentences: 'Ayat dengan huruf besar di awal dan noktah di akhir. Sudah hampir seperti menaip sebenar.',
    shiftBurst: 'Satu pecutan untuk mengukuhkan pelajaran ini.',
    shiftWords2: 'Lima sebaris, dengan kelingking bekerja ke dua-dua arah.',
    shiftClose: 'Sebagai penutup, ayat penuh. Shift, huruf, lepas — tanpa berhenti untuk berfikir.',

    /* --- baris nombor --- */
    introDigits: 'Baris nombor terletak di atas baris atas. Setiap jari naik lurus dan turun dengan cara yang sama. Inilah jangkauan paling jauh dalam kursus ini.',
    drillDigitPair: '{keys} ditekan oleh {finger} dan jari yang sama di tangan sebelah lagi. Naik, tekan, turun ke baris asas.',
    drillDigitIndex: 'Dua yang tinggal milik jari telunjuk, yang sudah mencapai lebih banyak kekunci daripada jari lain.',
    burstDigits: 'Satu pecutan pendek dengan nombor yang sudah anda pelajari.',
    burstDigitsAll: 'Kesemua sepuluh, bercampur. Pada mulanya banyak kesilapan di sini; itu biasa.',
    digitsAll: 'Seluruh baris, dalam kumpulan. Jangan tunduk untuk mencari angka 6.',
    digitsBackToWords: 'Kembali kepada perkataan sebentar, supaya tangan ingat di mana tempatnya.',
    digitsClose: 'Ayat semula, kini dengan seluruh papan kekunci tersedia.',

    /* --- teks panjang --- */
    introProse: 'Teks panjang yang bersambung. Yang dilatih di sini bukan kekunci baharu, tetapi mengekalkan rentak yang sama selama beberapa baris.',
    proseLine: 'Terus membaca mendahului apa yang anda taip. Jika anda berhenti untuk melihat, lebih banyak masa hilang daripada membetulkan kesilapan.',
    proseBurst: 'Satu pecutan panjang terakhir sebagai penutup.',

    /* --- kekunci lemah dan ujian --- */
    weakText: 'Latihan yang dibina daripada kekunci yang paling kerap anda tersilap. Ia berubah setiap kali anda berlatih.',
    testText: 'Tiada kekunci baharu. Taip pada rentak yang boleh anda kekalkan hingga akhir.',

    /* --- tajuk --- */
    titleFirst: '{keys}, serta bar ruang',
    titleKeys: '{keys}',
    titleReview: 'Ulang kaji',
    titleReviewMixed: 'Alamat, pautan dan nombor',
    titleShift: 'Shift dan Enter',
    titleEdge: 'Lajur luar',
    titleDigits: 'Baris nombor',
    titleProse: 'Teks dan rentak {n}',
    titleWeak: 'Kekunci lemah',
    titleTest: 'Ujian unit {unit}',

    /* --- ringkasan pada halaman laluan --- */
    summary: {
      edge: 'Lajur di tepi kanan: enam kekunci, semuanya untuk kelingking.',
      first: 'Dua kekunci yang ada bonjolan, bar ruang, dan tabiat tidak melihat ke bawah.',
      keys: 'Kekunci baharu: {keys}. Jari keluar, tekan dan kembali.',
      review: 'Tiada kekunci baharu. Semua yang lepas, lebih berturut-turut dan lebih laju.',
      shift: 'Huruf besar dengan kelingking bertentangan, dan baris baharu.',
      digits: 'Sepuluh nombor, setiap jari naik lurus.',
      prose: 'Perenggan penuh, untuk mengekalkan rentak lebih daripada satu baris.',
      weak: 'Latihan yang dijana daripada kekunci yang paling kerap anda tersilap.',
      test: 'Ujian bermasa dengan semua yang telah dipelajari.'
    },

    /* --- pembukaan --- */
    intro: {
      edge: 'Kelingking kanan memegang lebih banyak kekunci daripada jari lain, dan kekunci di tepi ialah yang hampir tidak pernah dilatih. Ia paling jauh dari baris asas, jadi caranya sama seperti biasa: keluar, tekan dan kembali, tanpa menarik tangan bersamanya.',
      first: 'Kekunci yang ada bonjolan kecil ialah titik permulaan. Kedua-dua jari telunjuk berehat di situ dan tidak pergi ke mana-mana; semua yang lain dalam kursus ini diukur dari kedudukan itu. Mula dengan meletakkan kedua-dua tangan dan lihat skrin sahaja.',
      keys: 'Kekunci baharu dalam pelajaran ini: {keys}. Ia ditekan oleh {fingers}. Gerakannya sentiasa sama — keluar, tekan dan kembali — dan perjalanan pulang itulah yang dilatih, kerana jika jari tertinggal di luar, huruf seterusnya akan tersilap.',
      review: 'Pelajaran ini tidak mengajar apa-apa yang baharu. Inilah masa untuk memastikan yang lepas keluar tanpa difikirkan, yang berbeza daripada sekadar tahu di mana letaknya setiap kekunci.',
      shift: 'Setakat ini semuanya ditaip dalam huruf kecil. Shift mengubahnya, dan ada satu peraturan yang elok dipelajari betul-betul dari awal: ia ditekan oleh kelingking tangan yang bertentangan dengan huruf itu. Dengan kelingking di sebelah yang sama, tangan terpulas dan akhirnya anda melihat papan kekunci.',
      digits: 'Baris nombor terletak di atas semua yang telah anda taip setakat ini, dan di sinilah jari mencapai paling jauh. Kesilapan lebih banyak di sini berbanding bahagian lain kursus, dan ia dibaiki dengan cara yang sama: perlahan-lahan dahulu.',
      prose: 'Anda sudah ada seluruh papan kekunci. Yang tinggal bukan lagi belajar kekunci, tetapi mengekalkan rentak: membaca mendahului jari, tidak berhenti untuk melihat, dan tidak mempercepat di hujung baris.',
      weak: 'Latihan ini dibina daripada kekunci yang anda sendiri tersilap, bukan daripada senarai tetap. Jika anda berubah, ia pun berubah.',
      test: 'Ujian bermasa. Tiada yang baharu: hanya apa yang anda sudah tahu, pada rentak yang boleh anda kekalkan.'
    },

    /* --- penutup --- */
    congrats: {
      edge: 'Lajur itulah yang biasanya ditinggalkan separuh jalan dalam kebanyakan kursus. Bukan lagi dalam kursus anda.',
      first: 'Tangan anda sudah di tempatnya. Mulai sekarang, semuanya ialah kekunci yang dicapai dari kedudukan ini dan dilepaskan semula.',
      keys: 'Lebih banyak kekunci di bawah jari. Jika {keys} sudah keluar tanpa dicari, pelajaran ini telah menjalankan tugasnya.',
      review: 'Tiada yang baharu, tetapi lebih laju. Itulah yang sepatutnya berlaku.',
      shift: 'Dengan Shift dan Enter, anda boleh menaip satu teks penuh seperti ditaip di luar sini.',
      digits: 'Baris nombor paling sukar dan paling jarang dilatih selepas ini. Kembalilah ke pelajaran ini sekali-sekala.',
      prose: 'Perenggan penuh pada rentak yang tetap. Itu bukan lagi belajar menaip; itu menaip.',
      weak: 'Kekunci lemah berhenti menjadi lemah dengan seminit sehari, bukan sejam sebulan.',
      test: 'Ujian lulus. Angkanya kurang penting berbanding hakikat anda sampai ke hujung tanpa melihat.'
    },

    units: {
      u1: { title: 'Baris asas',
        summary: 'Lapan kekunci di bawah jari, kemudian {reach} — cukup untuk menaip perkataan sebenar tanpa melihat ke bawah.' },
      u2: { title: 'Selebihnya abjad',
        summary: 'Baris atas, baris bawah, tanda baca dan huruf besar — seluruh abjad, serta Shift dan Enter.' },
      u3: { title: 'Nombor, simbol dan kelajuan',
        summary: 'Baris nombor, simbol harian, alamat dan pautan sebenar, kemudian perenggan panjang pada rentak yang tetap.' }
    },

    groups: {
      start: 'Mula di sini',
      reach: 'Meregangkan jari',
      finish: 'Tamatkan unit',
      'numbers-symbols': 'Nombor dan simbol',
      speed: 'Kelajuan'
    },

    starterHint: 'Letakkan jari telunjuk pada dua kekunci yang ada bonjolan dan taip apa yang anda lihat, tanpa melihat papan kekunci.'
  }
};
