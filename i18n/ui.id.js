/* i18n/ui.id.js — lớp tiếng Indonesia.
 *
 * Nạp bởi mọi trang dưới /id/, bằng <script src="/i18n/ui.id.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Cùng hình dạng với i18n/ui.es.js — xem chú thích ở đó. Khoá thiếu ở đây thì
 * hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC với bảng nó ghi đè.
 *
 * Đừng thêm `defer` cho thẻ script của file này: keyboard/preferences.js (ES module) đọc
 * `globalThis.TypingEaseUI` và cần nó có sẵn.
 */
window.TypingEaseUI = {
  lang: 'id',

  /* Tuyệt đối, vì /id/belajar/ nằm sâu hai cấp. */
  routes: {
    home: '/id/',
    lessons: '/id/pelajaran/',
    learn: '/id/belajar/',
    // Chưa có các trang này bằng tiếng Indonesia. `null` là tín hiệu BỎ liên kết.
    test: '/id/tes-mengetik/',
    progress: '/id/kemajuan/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /id/ */
  home: {
    nav: ['Latihan', 'Kursus'],
    roadmapKicker: '{total} pelajaran · {units} unit',
    roadmapAll: 'Lihat {total} pelajaran →',
    unitTitle: 'Unit {index} · {title}',
    unitDone: '{done}/{total} pelajaran ✓',
    railDone: '✓',
    railSoon: 'Segera',
    railNote: 'Unit berikutnya sedang ditulis — pelajaran yang belum dibuka tampil abu-abu.',
    teaser: 'Unit {index} · {title} ({count} pelajaran)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Latihan lainnya',
    shortcuts: [
      ['Tes kecepatan', 'Ukur kata per menit dan ketepatanmu.'],
      ['Tombol lemah', 'Latihan dari tombol yang paling sering salah kamu ketik.'],
      ['Latihan bebas', 'Tempel teksmu sendiri dan ketik dengan caramu.']
    ],
    continueKicker: 'LANJUTKAN',
    continueName: 'Pelajaran {n} · {title}',
    continueCount: 'Unit {unit} · layar {screen}/{screens}',
    continueGo: '▶ Lanjutkan (Enter)',
    continueRedo: '↻ Ulangi pelajaran {n}',
    continueMap: 'Lihat kursus',
    streak: '🔥 {days} hari · {minutes} menit hari ini',
    coachWeak: 'Perhatian: <b>{keys}</b> memperlambatmu — satu menit untuk tombol itu?',
    legacy: 'Kamu sudah menyelesaikan {n} pelajaran dari kursus sebelumnya — unit 1 dan 2 sudah terbuka.',
    doneKicker: 'JAGA IRAMANYA',
    doneName: 'Kamu sudah menyelesaikan semua yang sudah ditulis',
    doneCount: 'Unit berikutnya sedang disiapkan. Ulangi satu pelajaran supaya iramamu tidak hilang.',
    doneGo: '▶ Lihat kursus (Enter)',
    exploreKicker: 'Sumber TypingEase',
    footer: 'Sedikit lebih pelan, dan kamu akan sampai jauh lebih jauh.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Kenali TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'Memuat pelajaran…',
    missingTitle: 'Pelajaran ini belum punya isi',
    missingBody: 'Tidak ada yang dimuat dari <code>{path}</code>. Pelajaran ini masih ditulis — coba lagi nanti atau pilih pelajaran lain di kursus.',
    noCurriculum: 'Indeks kursus tidak termuat (<code>data/curriculum.id.js</code>).',
    fixtureNote: 'Berjalan dengan isi contoh dari <code>hoc/_fixture/</code> — pelajaran yang sebenarnya belum ada di <code>data/lessons/</code>.',
    screenOf: 'Layar {n} / {total}',
    newKey: 'TOMBOL BARU',
    pressToContinue: 'Tekan <b>{key}</b> untuk lanjut',
    enterToContinue: 'Tekan <b>Enter</b> untuk lanjut',
    found: 'Itu dia.',
    foundBody: 'Ingat letak <b>{key}</b> — sekarang kita latih.',
    accuracyLive: 'ketepatan {accuracy}%',
    errorsLive: '{count} salah',
    tokensLive: '{count} kata',
    great: 'Sangat bagus.',
    good: 'Bagus.',
    pass: 'Lulus.',
    fail: 'Di bawah {min}% — layar ini layak diulang.',
    resultAccuracy: 'ketepatan {accuracy}%',
    resultWpm: '{wpm} KPM',
    resultErrors: '{count} salah',
    resultTokens: '{count} kata benar',
    slowKey: '<b>{key}</b> adalah tombol terlambatmu ({ms} detik tiap kali) — biarkan jari menjangkaunya lalu segera kembali ke baris dasar.',
    keepAccuracy: 'Pelankan iramanya dan ketepatan naik — kecepatan menyusul, tidak pernah sebaliknya.',
    continueEnter: 'Lanjut → (Enter)',
    redoScreen: 'Ulangi layar ini',
    redoScreenAdvised: 'Ulangi layar ini (disarankan)',
    skipScreen: 'Lewati',
    lessonDone: 'SELESAI',
    learned: 'Kamu sudah mengenal {count} tombol:',
    statWpm: 'Kecepatan',
    statAccuracy: 'Ketepatan',
    statTime: 'Waktu',
    statStars: 'Bintang',
    technique: 'Patut diingat',
    weakTitle: 'Tombol yang perlu dilatih lagi',
    weakButton: 'Latihan satu menit',
    unitProgress: '{unit} · {done}/{total} pelajaran',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Kembali ke halaman utama (Enter)',
    redoLesson: '↻ Mulai pelajaran dari awal',
    home: 'Halaman utama',
    noMoreTitle: 'Kamu sudah sampai di ujung yang sudah ditulis',
    noMoreBody: 'Unit berikutnya masih dikerjakan. Sementara itu, ulangi satu pelajaran — putaran kedua dengan irama yang baik lebih berguna daripada kelihatannya.',
    notReadyTitle: 'Pelajaran ini belum punya isi',
    notReadyBody: '<b>{title}</b> ada di kursus, tetapi isinya masih ditulis. Pilih pelajaran yang sudah terbuka.',
    weakPage: 'Latihan tombol lemah',
    badgeNew: 'Lencana baru',
    badgeAll: 'Lihat semua lencana →',
    shiftFinger: 'kelingking tangan yang lain',
    testPage: 'Tes kecepatan',
    mobileNote: 'Kursus ini dibuat untuk papan ketik komputer — sepuluh jari butuh sepuluh tombol sungguhan. Kamu bisa mencobanya di ponsel, tetapi kembalilah ke papan ketik untuk benar-benar belajar.',
    mobileNoteClose: 'Mengerti',
    tapToType: 'Ketuk untuk mengetik',
    menuTitle: 'Dijeda',
    menuResume: 'Lanjut mengetik',
    menuRedo: 'Ulangi layar ini',
    menuSkip: 'Lewati layar ini',
    menuExit: 'Kembali ke halaman utama',
    clock: '{seconds} dtk',
    lessonNumber: 'Pelajaran {number}',
    pageTitle: 'Pelajaran · TypingEase',
    screenTip: 'Layar {number} · {type}',
    firstLesson: 'Kembali ke pelajaran pertama'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'kelingking kiri', LR: 'jari manis kiri', LM: 'jari tengah kiri',
    LI: 'telunjuk kiri', LT: 'ibu jari kiri',
    RT: 'ibu jari kanan', RI: 'telunjuk kanan', RM: 'jari tengah kanan',
    RR: 'jari manis kanan', RP: 'kelingking kanan'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'kelingking kiri', 'left-ring': 'jari manis kiri',
    'left-middle': 'jari tengah kiri', 'left-index': 'telunjuk kiri',
    'left-thumb': 'ibu jari kiri', thumb: 'ibu jari',
    'right-index': 'telunjuk kanan', 'right-middle': 'jari tengah kanan',
    'right-ring': 'jari manis kanan', 'right-pinky': 'kelingking kanan'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Pengaturan papan ketik',
    showKeyboard: 'Tampilkan papan ketik',
    showHands: 'Tampilkan tangan',
    rightHandOnly: 'Hanya tangan kanan',
    leftHandOnly: 'Hanya tangan kiri',
    animatedHands: 'Tangan mengikuti tombol',
    letterCase: 'Huruf pada tombol',
    uppercase: 'KAPITAL',
    lowercase: 'kecil',
    boardAria: 'Papan ketik di layar', keypadAria: 'Papan angka di layar',
    keyboardShape: 'Jenis papan ketik', shapeAuto: 'Sesuai tata letak', shapeAnsi: '104 tombol (Shift kiri panjang)', shapeIso: '105 tombol (ada tombol di samping Shift kiri)',
    layout: 'Tata letak papan ketik',
    save: 'Simpan',
    cancel: 'Batal',
    close: 'Tutup'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} pelajaran selesai`,
    legacy: n => `Kamu sudah menyelesaikan ${n} pelajaran dari kursus sebelumnya — unit 1 dan 2 sudah terbuka.`,
    ctaResume: '▶ Lanjutkan', ctaStart: '▶ Mulai',
    ctaLesson: (verb, number, title) => `${verb} pelajaran ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Kamu sudah sampai di ujung yang sudah ditulis <span>→</span>',
    rowResume: (screen, total) => `▶ Lanjutkan · layar ${screen}/${total}`,
    rowStart: '▶ Mulai',
    rowDone: '✓ Selesai',
    unlocked: 'Terbuka',
    unlockAfter: n => `Terbuka setelah pelajaran ${n}`,
    unlockNow: 'Buka unit ini sekarang'
  },

  /* kiem-tra-toc-do-go/typing-test.js — trang test tốc độ gõ. Đoạn văn chỉ dùng ký tự QWERTY Mỹ
     (bố cục 115): chữ tiếng Indonesia không có dấu, dùng " và ' thẳng. Đơn vị KPM. */
  test: {
    wpmUnit: 'KPM',
    passage: 'Mengetik tanpa melihat papan ketik bisa dipelajari oleh siapa saja, asalkan sabar. Letakkan jari di baris tengah: tangan kiri di A, S, D, F dan tangan kanan di J, K, L, serta titik koma. Pada tombol F dan J ada tonjolan kecil yang bisa dirasakan tanpa melihat ke bawah. Awalnya kamu akan mengetik pelan dan sering salah, dan itu wajar. Berlatihlah sepuluh menit setiap hari, maka dalam beberapa minggu jarimu akan menemukan tombolnya sendiri.',
    passages: [
      'Mengetik tanpa melihat papan ketik bisa dipelajari oleh siapa saja, asalkan sabar. Letakkan jari di baris tengah: tangan kiri di A, S, D, F dan tangan kanan di J, K, L, serta titik koma. Pada tombol F dan J ada tonjolan kecil yang bisa dirasakan tanpa melihat ke bawah. Awalnya kamu akan mengetik pelan dan sering salah, dan itu wajar. Berlatihlah sepuluh menit setiap hari, maka dalam beberapa minggu jarimu akan menemukan tombolnya sendiri.',
      'Pagi tadi langit cerah dan matahari bersinar hangat. Menjelang siang, awan gelap datang dari arah laut dan angin mulai bertiup kencang. Para pedagang di pinggir jalan buru-buru menutup dagangan mereka dengan terpal. Tidak lama kemudian hujan turun dengan deras, dan air menggenang di beberapa ruas jalan. Sekitar satu jam kemudian hujan reda, udara menjadi sejuk, dan anak-anak keluar rumah untuk bermain di halaman.',
      'Setiap Minggu pagi, pasar di dekat rumah selalu ramai. Penjual sayur menata tomat, cabai, kangkung, dan bawang di atas meja kayu, sementara di ujung lorong ada yang menjual ikan segar dan tahu. Seorang ibu menawar harga mangga dengan sabar, dan seorang anak membawa kantong berisi jeruk. Siapa yang datang lebih awal biasanya mendapat barang paling segar. Menjelang siang pembeli mulai sepi dan para pedagang bersiap pulang.',
      'Kereta berangkat tepat waktu dari stasiun. Dari jendela terlihat sawah yang hijau, deretan pohon kelapa, dan desa-desa kecil dengan atap genteng merah. Di gerbong suasananya tenang: seorang bapak membaca buku, sementara dua mahasiswa berbagi bekal nasi dan telur. Petugas lewat membawa troli berisi kopi dan roti. Sore harinya terdengar pengumuman bahwa kereta akan berhenti agak lama di stasiun berikutnya.',
      'Nasi goreng mudah dibuat dari bahan yang ada di dapur. Siapkan nasi putih yang sudah dingin, bawang merah, bawang putih, cabai, kecap manis, dan sebutir telur. Tumis bumbu yang sudah dihaluskan sampai harum, lalu masukkan telur dan aduk sebentar. Tambahkan nasi, kecap, dan sedikit garam, kemudian aduk rata dengan api besar. Sajikan selagi hangat dengan irisan mentimun, tomat, dan kerupuk di sampingnya.',
      'Perpustakaan kota buka sampai pukul empat sore pada hari Sabtu. Di ruang baca ada meja panjang tempat para pelajar belajar untuk ujian, sementara beberapa orang tua membaca koran hari ini. Di pojok ruangan ada tempat khusus anak-anak dengan buku bergambar dan bantal empuk. Petugas perpustakaan hafal nama banyak pengunjung tetap dan selalu bisa menyarankan buku yang cocok untuk dibaca di akhir pekan.',
      'Kakek selalu bangun sebelum subuh untuk merawat kebunnya. Ia menyiram tanaman cabai dan tomat, mencabut rumput liar, lalu memeriksa pohon pisang di dekat pagar. Kalau ada daun yang menguning, ia memotongnya dengan hati-hati. Cucu-cucunya jarang ikut bangun pagi, tetapi mereka paling senang saat panen tiba. Sore hari seluruh keluarga duduk di teras sambil minum teh dan menghitung buah yang sudah matang.',
      'Sepeda itu terparkir di gudang selama musim hujan, dan sekarang saatnya dirawat kembali. Pertama, pompa kedua bannya dan periksa remnya. Rantainya kering dan berbunyi, jadi perlu diberi sedikit oli. Setelah itu lap rangkanya dengan kain basah dan kencangkan setangnya. Putaran pertama di sekitar kompleks selalu terasa menyenangkan: angin di wajah, kayuhan yang ringan, dan rencana bersepeda jauh pada hari libur.',
      'Di papan pengumuman balai warga ada kabar baru: hari Sabtu semua warga akan kerja bakti membersihkan lingkungan. Setiap orang membawa sesuatu yang berguna, ada yang membawa sapu, ada yang membawa cat untuk pagar, dan ada yang membawa kue untuk dimakan bersama. Anak-anak menggambar dengan kapur di jalan, orang dewasa menanam bunga di depan gerbang. Setelah hari itu, tetangga jadi lebih sering saling menyapa.',
      'Kebiasaan yang baik saat mengetik adalah melihat layar, bukan papan ketik. Huruf besar dibuat dengan menahan tombol Shift memakai kelingking tangan yang lain. Titik dan koma ada di baris bawah, di sebelah kanan huruf M, sedangkan tanda tanya perlu Shift. Kalau kamu berlatih 15 menit sehari, dalam satu bulan teks sepanjang 500 karakter akan terasa jauh lebih cepat selesai daripada sekarang.'
    ],
    title: 'Tes mengetik {seconds} detik',
    titleMinutes: 'Tes mengetik {minutes} menit',
    ready: 'Mulai kapan pun kamu siap.',
    running: 'Hasilmu sedang dihitung.',
    finished: 'Waktu habis setelah {seconds} detik. Hasil: {wpm} KPM, ketepatan {accuracy}%, {errors} salah.',
    finishedMinutes: 'Waktu habis setelah {minutes} menit. Hasil: {wpm} KPM, ketepatan {accuracy}%, {errors} salah.',
    accuracyName: 'Ketepatan',
    comparisonSame: 'Sama dengan hasil sebelumnya.',
    comparisonDelta: '{delta} KPM dibanding hasil sebelumnya',
    progressEmpty: 'Datanya belum cukup. Selesaikan beberapa tes untuk melihat kemajuanmu.',
    progressNone: 'Belum ada data kemajuan.',
    metricEmpty: 'Tidak ada data untuk ukuran ini.',
    chartEmpty: 'Tidak ada data yang cocok untuk grafik ini.',
    chartLabel: '{metric} dari waktu ke waktu',
    trendEmpty: 'Datanya belum cukup untuk melihat tren.',
    trendSame: 'Tidak ada perubahan sejak awal periode ini.',
    trendDelta: '{change} {measure} sejak awal periode ini.',
    measureAccuracy: 'poin ketepatan',
    progressSummary: '{count} tes dalam {days} hari terakhir. Rata-rata {wpm} KPM, rata-rata ketepatan {accuracy}%.',
    dateLocale: 'id-ID'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy; chữ tĩnh ở tien-do/text/id.mjs.
     Tiếng Indonesia không chia số nhiều, nên trendHint chỉ đổi "Satu" / số. */
  progress: {
    levels: ['Baru mulai', 'Mulai lancar', 'Stabil', 'Cepat', 'Mahir'],
    legacy: n => `Kamu sudah menyelesaikan ${n} pelajaran dari kursus sebelumnya — unit 1 dan 2 sudah terbuka.`,
    unit: index => `Unit ${index}`,
    soon: ' · segera',
    trendHint: n => (n === 1 ? 'Satu pelajaran lagi dan trennya sudah bisa digambar.'
      : `${n} pelajaran lagi dan trennya sudah bisa digambar.`),
    stripLevel: level => `Tingkat: ${level}`,
    statWpm: 'KPM terkini',
    statAccuracy: 'Ketepatan',
    statSessions: 'Sesi',
    target: (wpm, accuracy) => `Target berikutnya: <b>${wpm}</b> KPM · ketepatan <b>${accuracy}</b>%`,
    adviceStart: 'Selesaikan satu pelajaran dan halaman ini akan tahu posisimu.',
    actionStart: 'Mulai pelajaran 1 →',
    adviceWeak: keys => `${keys} memperlambatmu — satu menit khusus untuk tombol itu sangat berguna.`,
    actionWeak: keys => `Latih ${keys} →`,
    adviceSteady: 'Kamu terus maju — satu pelajaran sehari menjaga iramamu.',
    actionLesson: (number, title) => `Pelajaran ${number} · ${title} →`,
    actionTest: 'Tes kecepatan →',
    actionLessons: 'Lihat kursus →',
    heatLegend: 'Ketepatan per tombol',
    heatStrong: 'Mantap',
    heatFair: 'Kadang meleset',
    heatWeak: 'Perlu dilatih',
    badgeDate: at => new Date(at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Terbuka ${date}` : 'Terbuka'),
    number: value => value.toLocaleString('id-ID'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} menit`,
    streak: days => `🔥 ${days} hari berturut-turut`,
    bestStreak: days => `Terbaik: ${days} hari`,
    today: minutes => `${minutes} menit hari ini`,
    clearConfirm: 'Hapus semua kemajuan dan nilai yang tersimpan di perangkat ini?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'Langkah pertama', hint: 'Selesaikan pelajaran pertamamu.' },
    'unit-1': { title: 'Satu unit selesai', hint: 'Selesaikan satu unit penuh.' },
    'stars-30': { title: '30 bintang', hint: 'Kumpulkan 30 bintang di kursus.' },
    'stars-90': { title: '90 bintang', hint: 'Kumpulkan 90 bintang di kursus.' },
    'streak-3': { title: 'Tiga hari berturut-turut', hint: 'Capai target harianmu tiga hari berturut-turut.' },
    'streak-7': { title: 'Satu minggu penuh', hint: 'Capai target harianmu tujuh hari berturut-turut.' },
    'clean-40': { title: '40 KPM bersih', hint: 'Satu putaran 40 KPM dengan ketepatan 95% atau lebih.' },
    'clean-60': { title: '60 KPM bersih', hint: 'Satu putaran 60 KPM dengan ketepatan 95% atau lebih.' },
    'typed-5000': { title: '5.000 tombol', hint: 'Ketik lima ribu tekanan tombol secara total.' }
  }
};
