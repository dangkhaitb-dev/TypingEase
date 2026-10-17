/* data/courses/id.js — khoá học tiếng Indonesia: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/id/*.json khi
 * trình duyệt nhận được.
 *
 * Cùng hình dạng với data/courses/es.js — xem chú thích ở đó. Kho từ nằm ở data/words/id.js.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Gọi người học là "kamu", xuyên suốt — không trộn "Anda".
 *
 * KHÔNG CÓ `families`. Tiếng Indonesia chỉ có một bố cục trong danh mục (115), và nó trùng từng
 * phím với QWERTY Mỹ; không có dấu nào, không có phím chết nào cần dạy.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.id = {
  lang: 'id',
  name: 'Bahasa Indonesia',

  // Bố cục 115 — "Indonesian (Latin)", giống hệt QWERTY Mỹ. Nên thứ tự phím cũng là của khoá
  // tiếng Anh: bài 4 dạy `a` và `;`.
  keyboardId: 115,

  // Kho riêng: mã bài trùng nhau giữa các ngôn ngữ, dùng chung khoá là hai giáo trình ghi đè nhau.
  progressKey: 'typingease-progress-id-v1',
  badgesKey: 'typingease-badges-id-v1',

  // Như data/courses/en.js: bàn phím Mỹ, chỉ a-z và dấu câu ở các ô chữ.
  letterTest: "^[a-z;',.\\/-]$",

  // Ký tự dấu nào là ký tự THẬT trên bố cục này, không phải phím chết — xem
  // scripts/lib/unit-symbols.js. Giống QWERTY Mỹ.
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' dan ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'koma', '.': 'titik', ';': 'titik koma', ':': 'titik dua', "'": 'apostrof', '-': 'tanda hubung', '/': 'garis miring' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Semua tombol lainnya',
      unitSummary: '{count} karakter di papan ketik ini yang belum dipakai kursus — kurung, simbol mata uang, sisa lapisan Shift — masing-masing diketik di tempat ia memang dipakai.',
      groupSymbols: 'Tombol yang tersisa',
      groupFinish: 'Tutup unit ini',
      titleNumberRow: 'Simbol di baris angka',
      titleKeys: '{keys}',
      titleReview: 'Semua simbol sekaligus',
      summaryKeys: 'Di pelajaran ini: {keys}.',
      summaryReview: 'Semua simbol di unit ini, dicampur dengan kata dan angka.',
      summaryTest: 'Tes berwaktu dengan semua tombol di papan ketik.',
      introLesson: 'Tombol yang belum dipakai kursus ini: {keys}. {shiftNote}',
      shiftNote: 'Semuanya keluar dengan Shift ditambah tombol yang sudah dikenal jarimu — Shift ditekan kelingking tangan yang lain.',
      shiftNoteMixed: 'Sebagian perlu Shift, ditekan kelingking tangan yang lain; sisanya punya tombol sendiri yang belum pernah dipakai kursus ini.',
      introKey: '{key} ditekan dengan {finger}{shift}.',
      introKeyShift: ', sambil tangan yang lain menahan Shift',
      drillOne: 'Pertama {key} saja, lalu di tempat ia memang dipakai.',
      burst: 'Rentetan potongan pendek yang berisi karakter-karakter ini.',
      together: 'Semua isi pelajaran ini, dicampur.',
      inWords: 'Kata-kata lagi, dengan simbol di tempatnya.',
      introReview: 'Tidak ada tombol baru. Semua karakter unit ini, dicampur dengan kata dan angka.',
      reviewFirst: 'Ketik simbolnya dengan irama yang sama seperti huruf di sekitarnya.',
      reviewLine: 'Jaga irama juga saat bertemu simbol; mereka tombol seperti yang lain.',
      congratsKeys: '{keys}: sekarang sudah di bawah jarimu. Shift dengan tangan yang lain, dan simbol keluar semudah huruf di sebelahnya.',
      congratsReview: 'Setiap tombol di papan ketik ini sudah mendapat gilirannya.',
      introTest: 'Tes berwaktu dengan semuanya, termasuk simbol.',
      congratsTest: 'Itu tadi seluruh papan ketik. Tidak ada lagi tombol di sana yang belum diajarkan kursus ini.',
      testText: 'Kata, angka, dan simbol. Satu irama dari awal sampai akhir.'
    },

    fingers: {
      LP: 'kelingking kiri', LR: 'jari manis kiri', LM: 'jari tengah kiri',
      LI: 'telunjuk kiri', LT: 'ibu jari kiri', RT: 'ibu jari kanan',
      RI: 'telunjuk kanan', RM: 'jari tengah kanan', RR: 'jari manis kanan',
      RP: 'kelingking kanan'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'Tombol-tombol di tepi kanan, semuanya milik kelingking. Inilah jangkauan terjauh jari itu, dan tombol yang paling jarang dilatih sesudahnya.',
    drillEdgePair: 'Sekarang {keys}. Kelingking keluar lalu kembali; tangan tetap di tempatnya.',
    burstEdge: 'Rentetan dengan tombol kolom ini yang sudah kamu punya.',
    drillEdgeAll: 'Keenamnya sekaligus. Di sudut papan ketik inilah pergelangan paling mudah terpelintir kalau jarinya tidak pulang.',
    burstEdgeWords: 'Kata-kata lagi, untuk melemaskan tangan setelah sekian banyak tombol tepi.',
    edgeBackToWords: 'Kembali ke kata-kata, dengan seluruh papan ketik sudah bisa dipakai.',
    edgeClose: 'Kalimat utuh untuk menutup pelajaran tombol.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Tombol ini ditekan dengan {finger}. Cari tanpa melihat, tekan sekali, lalu biarkan jarinya kembali. Jalan pulang sama pentingnya dengan tekanannya.',
    pressToContinue: 'Tekan <b>{key}</b> untuk lanjut',
    introSpace: 'Tombol spasi milik ibu jari kanan. Ibu jari tidak mengerjakan hal lain, jadi kamu tidak perlu mencarinya.',
    pressSpace: 'Tekan <b>spasi</b> untuk lanjut',

    /* --- luyện ngón --- */
    drillSpace: 'Kelompok pendek yang dipisahkan spasi. Ibu jari kanan turun dan naik; jari lain tetap di tempatnya.',
    drillNew: 'Hanya {key} dan yang sudah kamu tahu. Pelan-pelan, dan kembalikan jari ke baris dasar setiap selesai menekan.',
    drillMixed: 'Tombol baru dicampur dengan yang lama, seperti nanti muncul di dalam kata.',
    drillAgain: 'Dua tombol baru sekali lagi. Belum ada kata yang bisa ditulis dengan keduanya, dan itu wajar.',
    drillWide: 'Semua yang sudah kamu punya, dalam kelompok pendek. Mata ke layar, bukan ke tangan.',
    drillAll: 'Satu putaran terakhir dengan semua yang sudah dipelajari sampai sini.',
    patternsBack: 'Kembali ke pola sebentar, untuk memastikan jari masih menemukan jalan pulang.',

    /* --- rentetan --- */
    burstKeys: 'Kelompok pendek, satu demi satu. Terus sampai akhir meskipun ada yang meleset.',
    burstLonger: 'Kelompok yang sedikit lebih panjang. Buru-buru belum ada gunanya.',
    burstWords: 'Rentetan kata pendek yang berisi tombol baru.',

    /* --- kata --- */
    wordsNew: 'Kata sungguhan dengan tombol baru. Ketik setiap kata dalam satu tarikan, bukan huruf demi huruf.',
    wordsOne: 'Sekarang bebannya di <b>{key}</b>, tombol yang paling jarang kamu tekan.',
    wordsAll: 'Semua yang kamu punya, dicampur. Perhatikan berapa banyak kata yang sudah keluar tanpa dipikir.',

    /* --- ulangan --- */
    introReview: 'Tidak ada tombol baru di pelajaran ini. Hanya yang sudah kamu kenal, lebih rapat dan lebih cepat daripada sebelumnya.',
    introReviewMixed: 'Huruf, angka, dan simbol bersama-sama, seperti yang muncul di luar kursus.',
    pressEnter: 'Tekan <b>Enter</b> untuk mulai',
    reviewWords1: 'Untuk mulai, kata-kata lepas. Tidak usah buru-buru: kecepatan datang dari ketepatan, tidak pernah sebaliknya.',
    reviewBurst: 'Rentetan pendek. Selesaikan daftarnya meskipun ada yang terlewat.',
    reviewWords2: 'Lima kata per baris. Biarkan mata berjalan di depan jari.',
    reviewPatterns: 'Pola lagi, untuk memastikan jari masih kembali ke baris dasar.',
    reviewShort: 'Kata-kata pendek, dengan irama yang baik. Yang ini seharusnya sudah keluar hampir dengan sendirinya.',
    reviewBurst2: 'Lebih lama dan lebih banyak kata. Jaga irama yang sama dari awal sampai akhir.',
    reviewClose: 'Kalimat utuh. Di sini terlihat apakah tangan kembali ke tempatnya sendiri.',
    reviewLast: 'Putaran terakhir. Kalau kamu sampai di sini tanpa melihat papan ketik, pelajaran ini selesai.',

    /* --- Shift và Enter --- */
    introShift: 'Huruf kapital dibuat dengan kelingking tangan yang berlawanan dengan hurufnya. Tahan Shift, tekan hurufnya, lepaskan. Jangan pernah dengan kelingking yang sedang mengetik.',
    pressShift: 'Tahan <b>Shift</b> dan tekan satu huruf untuk lanjut',
    drillShift: 'Huruf kapital dan huruf kecil bergantian. Kelingking turun dan naik; tangan yang lain tidak berpindah.',
    wordsShift: 'Kata dengan huruf kapital di depan, seperti nama orang.',
    introEnter: 'Enter milik kelingking kanan, di sebelah kanan baris dasar. Ini tombol terbesar yang harus dijangkau jari itu.',
    pressEnterKey: 'Tekan <b>Enter</b> untuk lanjut',
    drillEnter: 'Satu baris, Enter, baris berikutnya. Kelingking keluar dan kembali tanpa menyeret tangan.',
    shiftSentences: 'Kalimat dengan huruf kapital di awal dan titik di akhir. Ini sudah mirip menulis sungguhan.',
    shiftBurst: 'Rentetan untuk memantapkan isi pelajaran ini.',
    shiftWords2: 'Lima per baris, dengan kelingking bekerja ke dua arah.',
    shiftClose: 'Sebagai penutup, kalimat utuh. Shift, huruf, lepas — tanpa berhenti untuk berpikir.',

    /* --- baris angka --- */
    introDigits: 'Baris angka ada di atas baris atas. Setiap jari naik lurus dan turun dengan cara yang sama. Inilah jangkauan terjauh di seluruh kursus.',
    drillDigitPair: '{keys} ditekan dengan {finger} dan jari yang sama di tangan satunya. Naik, tekan, turun ke baris dasar.',
    drillDigitIndex: 'Dua yang tersisa milik telunjuk, yang sudah menjangkau lebih banyak tombol daripada jari lain.',
    burstDigits: 'Rentetan pendek dengan angka yang sudah kamu punya.',
    burstDigitsAll: 'Kesepuluhnya, dicampur. Di awal memang banyak yang meleset di sini; itu wajar.',
    digitsAll: 'Seluruh baris, dalam kelompok. Jangan menunduk untuk mencari angka 6.',
    digitsBackToWords: 'Kembali ke kata-kata sebentar, supaya tangan ingat di mana rumahnya.',
    digitsClose: 'Kalimat lagi, sekarang dengan seluruh papan ketik.',

    /* --- teks panjang --- */
    introProse: 'Teks panjang yang bersambung. Yang dilatih di sini bukan tombol baru, tetapi menjaga irama yang sama selama beberapa baris.',
    proseLine: 'Terus baca di depan apa yang sedang kamu ketik. Berhenti untuk melihat memakan lebih banyak waktu daripada memperbaiki.',
    proseBurst: 'Satu rentetan panjang terakhir untuk menutup.',

    /* --- phím yếu và kiểm tra --- */
    weakText: 'Latihan yang dibuat dari tombol yang paling sering salah kamu ketik. Isinya berubah setiap kali kamu berlatih.',
    testText: 'Tidak ada tombol baru. Ketik dengan irama yang bisa kamu pertahankan sampai akhir.',

    /* --- judul --- */
    titleFirst: '{keys}, ditambah spasi',
    titleKeys: '{keys}',
    titleReview: 'Ulangan',
    titleReviewMixed: 'Alamat, tautan, dan angka',
    titleShift: 'Shift dan Enter',
    titleEdge: 'Kolom luar',
    titleDigits: 'Baris angka',
    titleProse: 'Teks dan irama {n}',
    titleWeak: 'Tombol lemah',
    titleTest: 'Tes unit {unit}',

    /* --- ringkasan di halaman peta kursus --- */
    summary: {
      edge: 'Kolom di tepi kanan: enam tombol, semuanya milik kelingking.',
      first: 'Dua tombol yang bertonjolan, tombol spasi, dan kebiasaan tidak menunduk.',
      keys: 'Tombol baru: {keys}. Jari keluar, menekan, lalu kembali.',
      review: 'Tidak ada tombol baru. Semua yang sebelumnya, lebih rapat dan lebih cepat.',
      shift: 'Huruf kapital dengan kelingking seberang, dan pindah baris.',
      digits: 'Sepuluh angka, setiap jari naik lurus ke atas.',
      prose: 'Paragraf utuh, untuk menjaga irama lebih dari satu baris.',
      weak: 'Latihan yang dibuat dari tombol yang paling sering salah kamu ketik.',
      test: 'Tes berwaktu dengan semua yang sudah dipelajari.'
    },

    /* --- pembuka --- */
    intro: {
      edge: 'Kelingking kanan memegang lebih banyak tombol daripada jari lain, dan tombol di tepinya hampir tidak pernah dilatih orang. Tombol-tombol itu paling jauh dari baris dasar, jadi caranya tetap sama: keluar, tekan, kembali, tanpa menyeret tangan di belakangnya.',
      first: 'Tombol dengan tonjolan kecil adalah titik berangkat. Kedua telunjuk bertumpu di sana dan tidak pergi; semua hal lain di kursus ini diukur dari posisi itu. Mulailah dengan meletakkan kedua tangan dan melihat ke layar saja.',
      keys: 'Tombol baru di pelajaran ini: {keys}. Ditekan dengan {fingers}. Gerakannya selalu sama — keluar, tekan, kembali — dan jalan pulang itulah yang dilatih, karena kalau jarinya tertinggal di luar, huruf berikutnya akan salah.',
      review: 'Pelajaran ini tidak mengajarkan hal baru. Saatnya memastikan yang sebelumnya keluar tanpa dipikir, dan itu berbeda dengan tahu letak setiap tombol.',
      shift: 'Sampai sini semuanya ditulis dengan huruf kecil. Shift mengubahnya, dan ada satu aturan yang sebaiknya dipelajari dengan benar sejak awal: Shift ditekan kelingking tangan yang berlawanan dengan hurufnya. Dengan kelingking di sisi yang sama, tangan akan terpelintir dan akhirnya kamu melihat papan ketik.',
      digits: 'Baris angka berada di atas semua yang sudah kamu ketik, dan di situlah jari menjangkau paling jauh. Di sini lebih banyak yang meleset daripada di bagian lain kursus, dan cara memperbaikinya sama saja: pelan-pelan dulu.',
      prose: 'Seluruh papan ketik sudah kamu punya. Yang tersisa bukan belajar tombol, tetapi menjaga irama: membaca di depan, tidak berhenti untuk melihat, dan tidak mempercepat di akhir baris.',
      weak: 'Latihan ini disusun dari tombol yang kamu salah ketik, bukan dari daftar tetap. Kalau kamu berubah, latihannya ikut berubah.',
      test: 'Tes berwaktu. Tidak ada yang baru: hanya yang sudah kamu tahu, dengan irama yang bisa kamu pertahankan.'
    },

    /* --- penutup --- */
    congrats: {
      edge: 'Kolom itulah yang biasanya setengah jadi di hampir semua kursus. Di kursusmu tidak lagi.',
      first: 'Tanganmu sudah di posisinya. Mulai sekarang semuanya adalah tombol yang dijangkau dari posisi ini lalu dilepas lagi.',
      keys: 'Makin banyak tombol di bawah jarimu. Kalau {keys} sudah keluar tanpa dicari, pelajaran ini sudah menjalankan tugasnya.',
      review: 'Tidak ada yang baru, tetapi lebih cepat. Memang itu yang seharusnya terjadi.',
      shift: 'Dengan Shift dan Enter kamu bisa menulis teks utuh persis seperti menulis di luar sini.',
      digits: 'Baris angka adalah yang paling sulit dan paling jarang dilatih sesudahnya. Sesekali kembalilah ke pelajaran ini.',
      prose: 'Paragraf utuh dengan irama yang terjaga. Ini bukan lagi belajar mengetik; ini mengetik.',
      weak: 'Tombol lemah berhenti lemah dengan satu menit sehari, bukan satu jam sebulan.',
      test: 'Tes selesai. Angkanya kurang penting dibanding kenyataan bahwa kamu sampai di akhir tanpa melihat.'
    },

    units: {
      u1: { title: 'Baris dasar',
        summary: 'Delapan tombol di bawah jari, lalu {reach} — cukup untuk menulis kata sungguhan tanpa menunduk.' },
      u2: { title: 'Sisa alfabet',
        summary: 'Baris atas, baris bawah, tanda baca, dan huruf kapital — seluruh alfabet, ditambah Shift dan Enter.' },
      u3: { title: 'Angka, simbol, dan kecepatan',
        summary: 'Baris angka, simbol sehari-hari, alamat dan tautan sungguhan, lalu paragraf panjang dengan irama yang terjaga.' }
    },

    groups: {
      start: 'Mulai di sini',
      reach: 'Meregangkan jari',
      finish: 'Tutup unit ini',
      'numbers-symbols': 'Angka dan simbol',
      speed: 'Kecepatan'
    },

    starterHint: 'Letakkan kedua telunjuk di dua tombol yang bertonjolan dan ketik apa yang kamu lihat, tanpa melihat papan ketik.'
  }
};
