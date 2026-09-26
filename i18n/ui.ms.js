/* i18n/ui.ms.js — lớp tiếng Mã Lai (Bahasa Melayu).
 *
 * Nạp bởi mọi trang dưới /ms/, bằng <script src="/i18n/ui.ms.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên, nên tên khoá bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè (xem ui.es.js).
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt — sai trông thấy vẫn hơn ô trống.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên đừng thêm `defer` cho thẻ nạp file này.
 *
 * Gọi người học là "anda" ở mọi chỗ. Thuật ngữ khớp data/courses/ms.js: kekunci, papan kekunci,
 * baris asas, pelajaran, unit, skrin, ujian, kekunci lemah.
 */
window.TypingEaseUI = {
  lang: 'ms',

  /* Tuyệt đối, vì /ms/belajar/ nằm sâu hai cấp. */
  routes: {
    home: '/ms/',
    lessons: '/ms/pelajaran/',
    learn: '/ms/belajar/',
    // Chưa có các trang này bằng tiếng Mã Lai. `null` là tín hiệu BỎ liên kết.
    test: null,
    progress: '/ms/kemajuan/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /ms/ */
  home: {
    nav: ['Berlatih', 'Kursus'],
    roadmapKicker: '{total} pelajaran · {units} unit',
    roadmapAll: 'Lihat kesemua {total} pelajaran →',
    unitTitle: 'Unit {index} · {title}',
    unitDone: '{done}/{total} pelajaran ✓',
    railDone: '✓',
    railSoon: 'Akan datang',
    railNote: 'Unit seterusnya sedang ditulis — pelajaran yang belum dibuka ditunjukkan dalam warna kelabu.',
    teaser: 'Unit {index} · {title} ({count} pelajaran)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Latihan lain',
    shortcuts: [
      ['Ujian kelajuan', 'Ukur perkataan seminit dan ketepatan anda.'],
      ['Kekunci lemah', 'Latihan yang dibina daripada kekunci yang paling kerap anda tersilap.'],
      ['Latihan bebas', 'Tampal teks anda sendiri dan taip mengikut cara anda.']
    ],
    continueKicker: 'SAMBUNG',
    continueName: 'Pelajaran {n} · {title}',
    continueCount: 'Unit {unit} · skrin {screen}/{screens}',
    continueGo: '▶ Sambung (Enter)',
    continueRedo: '↻ Ulang pelajaran {n}',
    continueMap: 'Lihat kursus',
    streak: '🔥 {days} hari · {minutes} min hari ini',
    coachWeak: 'Perhatian: <b>{keys}</b> sedang memperlahankan anda — seminit dengannya?',
    legacy: 'Anda telah menamatkan {n} pelajaran daripada kursus lama — unit 1 dan 2 sudah dibuka.',
    doneKicker: 'KEKALKAN RENTAK',
    doneName: 'Anda telah menamatkan semua yang sudah ditulis',
    doneCount: 'Unit seterusnya sedang disediakan. Ulang satu pelajaran supaya rentak tidak hilang.',
    doneGo: '▶ Lihat kursus (Enter)',
    exploreKicker: 'Sumber TypingEase',
    footer: 'Perlahan sedikit, dan anda akan pergi lebih jauh.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Terokai TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'Memuatkan pelajaran…',
    missingTitle: 'Pelajaran ini belum ada kandungan',
    missingBody: 'Tiada apa-apa dimuatkan daripada <code>{path}</code>. Pelajaran ini masih sedang ditulis — cuba lagi nanti atau pilih pelajaran lain dalam kursus.',
    noCurriculum: 'Indeks kursus tidak dapat dimuatkan (<code>data/curriculum.ms.js</code>).',
    fixtureNote: 'Menggunakan kandungan contoh daripada <code>hoc/_fixture/</code> — pelajaran sebenar belum ada dalam <code>data/lessons/</code>.',
    screenOf: 'Skrin {n} / {total}',
    newKey: 'KEKUNCI BAHARU',
    pressToContinue: 'Tekan <b>{key}</b> untuk meneruskan',
    enterToContinue: 'Tekan <b>Enter</b> untuk meneruskan',
    found: 'Itulah dia.',
    foundBody: 'Ingat di mana letaknya <b>{key}</b> — kita akan melatihnya sekarang.',
    accuracyLive: 'ketepatan {accuracy}%',
    errorsLive: '{count} kesilapan',
    tokensLive: '{count} perkataan',
    great: 'Cemerlang.',
    good: 'Bagus.',
    pass: 'Lulus.',
    fail: 'Di bawah {min}% — elok ulang skrin ini.',
    resultAccuracy: 'ketepatan {accuracy}%',
    resultWpm: '{wpm} PSM',
    resultErrors: '{count} kesilapan',
    resultTokens: '{count} perkataan betul',
    slowKey: '<b>{key}</b> ialah kekunci paling perlahan anda ({ms} s setiap satu) — biarkan jari mencapainya dan terus kembali ke baris asas.',
    keepAccuracy: 'Perlahankan rentak dan ketepatan akan naik — kelajuan datang kemudian, bukan sebaliknya.',
    continueEnter: 'Teruskan → (Enter)',
    redoScreen: 'Ulang skrin ini',
    redoScreenAdvised: 'Ulang skrin ini (disyorkan)',
    skipScreen: 'Langkau',
    lessonDone: 'SELESAI',
    learned: 'Anda sudah kenal {count} kekunci:',
    statWpm: 'Kelajuan',
    statAccuracy: 'Ketepatan',
    statTime: 'Masa',
    statStars: 'Bintang',
    technique: 'Elok diingat',
    weakTitle: 'Kekunci yang perlu dilatih lagi',
    weakButton: 'Berlatih seminit',
    unitProgress: '{unit} · {done}/{total} pelajaran',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Kembali ke halaman utama (Enter)',
    redoLesson: '↻ Mulakan pelajaran semula',
    home: 'Halaman utama',
    noMoreTitle: 'Anda sudah sampai ke hujung apa yang telah ditulis',
    noMoreBody: 'Unit seterusnya masih sedang disediakan. Sementara itu, ulang satu pelajaran — pusingan kedua pada rentak yang baik lebih berguna daripada yang disangka.',
    notReadyTitle: 'Pelajaran ini belum ada kandungan',
    notReadyBody: '<b>{title}</b> ada dalam kursus, tetapi kandungannya masih sedang ditulis. Pilih pelajaran yang sudah dibuka.',
    weakPage: 'Latihan kekunci lemah',
    badgeNew: 'Lencana baharu',
    badgeAll: 'Lihat semua lencana →',
    shiftFinger: 'kelingking tangan yang sebelah lagi',
    testPage: 'Ujian kelajuan',
    mobileNote: 'Kursus ini dibina untuk papan kekunci komputer — sepuluh jari memerlukan sepuluh kekunci sebenar. Anda boleh mencubanya pada telefon, tetapi kembalilah ke papan kekunci untuk benar-benar belajar.',
    mobileNoteClose: 'Faham',
    tapToType: 'Sentuh untuk menaip',
    menuTitle: 'Dijeda',
    menuResume: 'Teruskan menaip',
    menuRedo: 'Ulang skrin ini',
    menuSkip: 'Langkau skrin ini',
    menuExit: 'Kembali ke halaman utama',
    clock: '{seconds} s',
    lessonNumber: 'Pelajaran {number}',
    pageTitle: 'Pelajaran · TypingEase',
    screenTip: 'Skrin {number} · {type}',
    firstLesson: 'Kembali ke pelajaran pertama'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'jari kelingking kiri', LR: 'jari manis kiri', LM: 'jari hantu kiri',
    LI: 'jari telunjuk kiri', LT: 'ibu jari kiri',
    RT: 'ibu jari kanan', RI: 'jari telunjuk kanan', RM: 'jari hantu kanan',
    RR: 'jari manis kanan', RP: 'jari kelingking kanan'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'jari kelingking kiri', 'left-ring': 'jari manis kiri',
    'left-middle': 'jari hantu kiri', 'left-index': 'jari telunjuk kiri',
    'left-thumb': 'ibu jari kiri', thumb: 'ibu jari',
    'right-index': 'jari telunjuk kanan', 'right-middle': 'jari hantu kanan',
    'right-ring': 'jari manis kanan', 'right-pinky': 'jari kelingking kanan'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Tetapan papan kekunci',
    showKeyboard: 'Tunjukkan papan kekunci',
    showHands: 'Tunjukkan tangan',
    rightHandOnly: 'Tangan kanan sahaja',
    leftHandOnly: 'Tangan kiri sahaja',
    animatedHands: 'Tangan mengikut kekunci',
    letterCase: 'Huruf pada kekunci',
    uppercase: 'HURUF BESAR',
    lowercase: 'huruf kecil',
    boardAria: 'Papan kekunci pada skrin', keypadAria: 'Pad nombor pada skrin',
    keyboardShape: 'Jenis papan kekunci', shapeAuto: 'Ikut susun atur', shapeAnsi: '104 kekunci (Shift kiri panjang)', shapeIso: '105 kekunci (kekunci di sebelah Shift kiri)',
    layout: 'Susun atur papan kekunci',
    save: 'Simpan',
    cancel: 'Batal',
    close: 'Tutup'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} pelajaran selesai`,
    legacy: n => `Anda telah menamatkan ${n} pelajaran daripada kursus lama — unit 1 dan 2 sudah dibuka.`,
    ctaResume: '▶ Sambung', ctaStart: '▶ Mula',
    ctaLesson: (verb, number, title) => `${verb} pelajaran ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Anda sudah sampai ke hujung apa yang telah ditulis <span>→</span>',
    rowResume: (screen, total) => `▶ Sambung · skrin ${screen}/${total}`,
    rowStart: '▶ Mula',
    rowDone: '✓ Selesai',
    unlocked: 'Dibuka',
    unlockAfter: n => `Dibuka selepas pelajaran ${n}`,
    unlockNow: 'Buka unit ini sekarang'
  },

  /* kiem-tra-toc-do-go/typing-test.js — trang test tốc độ gõ. Đoạn văn chỉ dùng ký tự QWERTY Mỹ
     (bố cục 116): Bahasa Melayu chữ Rumi không có dấu, dùng " và ' thẳng. Đơn vị PSM. */
  test: {
    wpmUnit: 'PSM',
    passage: 'Menaip tanpa memandang papan kekunci boleh dipelajari oleh sesiapa sahaja, asalkan sabar. Letakkan jari pada baris asas: tangan kiri pada A, S, D, F dan tangan kanan pada J, K, L serta koma bertitik. Pada kekunci F dan J ada bonjolan kecil yang boleh dirasa tanpa melihat ke bawah. Pada mulanya anda akan menaip perlahan dan kerap tersilap, dan itu perkara biasa. Berlatihlah sepuluh minit setiap hari, dan dalam beberapa minggu jari anda akan menemui kekunci dengan sendirinya.',
    passages: [
      'Menaip tanpa memandang papan kekunci boleh dipelajari oleh sesiapa sahaja, asalkan sabar. Letakkan jari pada baris asas: tangan kiri pada A, S, D, F dan tangan kanan pada J, K, L serta koma bertitik. Pada kekunci F dan J ada bonjolan kecil yang boleh dirasa tanpa melihat ke bawah. Pada mulanya anda akan menaip perlahan dan kerap tersilap, dan itu perkara biasa. Berlatihlah sepuluh minit setiap hari, dan dalam beberapa minggu jari anda akan menemui kekunci dengan sendirinya.',
      'Pagi tadi langit cerah dan matahari bersinar hangat. Menjelang tengah hari, awan gelap berarak dari arah laut dan angin mula bertiup kencang. Peniaga di tepi jalan cepat-cepat menutup barang jualan mereka dengan kanvas. Tidak lama kemudian hujan turun dengan lebat, dan air bertakung di beberapa bahagian jalan. Sejam selepas itu hujan berhenti, udara menjadi nyaman, dan kanak-kanak keluar bermain di halaman rumah.',
      'Setiap pagi Ahad, pasar tani berhampiran rumah sentiasa sesak. Penjual sayur menyusun tomato, cili, kangkung dan bawang di atas meja kayu, manakala di hujung lorong ada yang menjual ikan segar dan tauhu. Seorang mak cik tawar-menawar harga manggis dengan sabar, dan seorang budak membawa beg berisi limau. Sesiapa yang datang awal biasanya mendapat barang paling segar. Menjelang tengah hari pembeli semakin kurang dan peniaga mula berkemas.',
      'Kereta api bertolak tepat pada masanya dari stesen. Dari tingkap kelihatan sawah padi yang menghijau, deretan pokok kelapa sawit dan kampung kecil dengan rumah kayu bertiang. Di dalam gerabak suasananya tenang: seorang pak cik membaca buku, sementara dua pelajar berkongsi bekal nasi lemak. Petugas lalu sambil menolak troli berisi kopi dan roti. Petang itu kedengaran pengumuman bahawa kereta api akan berhenti agak lama di stesen seterusnya.',
      'Nasi goreng mudah dimasak dengan bahan yang ada di dapur. Sediakan nasi putih yang sudah sejuk, bawang merah, bawang putih, cili, kicap manis dan sebiji telur. Tumis bahan yang sudah dikisar sehingga naik bau, kemudian masukkan telur dan kacau sebentar. Tambahkan nasi, kicap dan sedikit garam, lalu kacau sehingga sebati dengan api yang besar. Hidangkan selagi panas bersama hirisan timun, tomato dan keropok.',
      'Perpustakaan awam dibuka sehingga pukul empat petang pada hari Sabtu. Di ruang bacaan ada meja panjang tempat pelajar mengulang kaji untuk peperiksaan, sementara beberapa warga emas membaca surat khabar hari ini. Di satu sudut ada ruang khas kanak-kanak dengan buku bergambar dan kusyen yang lembut. Pustakawan mengenali ramai pengunjung tetap dan sentiasa boleh mencadangkan buku yang sesuai untuk dibaca pada hujung minggu.',
      'Atuk selalu bangun sebelum subuh untuk menjaga kebunnya. Dia menyiram pokok cili dan terung, mencabut rumput liar, kemudian memeriksa pokok pisang di tepi pagar. Jika ada daun yang menguning, dia memotongnya dengan berhati-hati. Cucu-cucunya jarang bangun awal, tetapi merekalah yang paling gembira apabila musim menuai tiba. Pada waktu petang seluruh keluarga duduk di beranda sambil minum teh dan mengira buah yang sudah masak.',
      'Basikal itu tersimpan di stor sepanjang musim tengkujuh, dan kini tiba masanya untuk dibaiki. Mula-mula, pam kedua-dua tayarnya dan periksa breknya. Rantainya kering dan berbunyi, jadi perlu diletakkan sedikit minyak. Selepas itu lap rangkanya dengan kain lembap dan ketatkan hendalnya. Pusingan pertama di sekitar taman perumahan sentiasa menyeronokkan: angin di muka, kayuhan yang ringan dan rancangan berbasikal jauh pada hari cuti.',
      'Di papan notis dewan orang ramai ada pengumuman baru: pada hari Sabtu semua penduduk akan bergotong-royong membersihkan kawasan kejiranan. Setiap orang membawa sesuatu yang berguna, ada yang membawa penyapu, ada yang membawa cat untuk pagar, dan ada yang membawa kuih untuk dimakan bersama. Kanak-kanak melukis dengan kapur di jalan, orang dewasa menanam bunga di pintu masuk. Selepas hari itu, jiran-jiran lebih kerap bertegur sapa.',
      'Tabiat yang baik semasa menaip ialah memandang skrin, bukan papan kekunci. Huruf besar ditaip dengan menahan kekunci Shift menggunakan jari kelingking tangan yang lain. Koma dan noktah terletak di baris bawah, di sebelah kanan huruf M, manakala tanda soal memerlukan Shift. Jika anda berlatih 15 minit sehari, dalam masa sebulan petikan sepanjang 500 aksara akan terasa jauh lebih cepat siap berbanding sekarang.'
    ],
    title: 'Ujian menaip {seconds} saat',
    titleMinutes: 'Ujian menaip {minutes} minit',
    ready: 'Mulakan apabila anda bersedia.',
    running: 'Keputusan anda sedang dikira.',
    finished: 'Masa tamat selepas {seconds} saat. Keputusan: {wpm} PSM, ketepatan {accuracy}%, {errors} kesilapan.',
    finishedMinutes: 'Masa tamat selepas {minutes} minit. Keputusan: {wpm} PSM, ketepatan {accuracy}%, {errors} kesilapan.',
    accuracyName: 'Ketepatan',
    comparisonSame: 'Sama seperti keputusan sebelumnya.',
    comparisonDelta: '{delta} PSM berbanding keputusan sebelumnya',
    progressEmpty: 'Data belum mencukupi. Selesaikan beberapa ujian untuk melihat kemajuan anda.',
    progressNone: 'Belum ada data kemajuan.',
    metricEmpty: 'Tiada data untuk ukuran ini.',
    chartEmpty: 'Tiada data yang sesuai untuk carta ini.',
    chartLabel: '{metric} dari semasa ke semasa',
    trendEmpty: 'Data belum mencukupi untuk melihat trend.',
    trendSame: 'Tiada perubahan sejak awal tempoh ini.',
    trendDelta: '{change} {measure} sejak awal tempoh ini.',
    measureAccuracy: 'mata ketepatan',
    progressSummary: '{count} ujian dalam {days} hari lepas. Purata {wpm} PSM, purata ketepatan {accuracy}%.',
    dateLocale: 'ms-MY'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy; chữ tĩnh ở tien-do/text/ms.mjs.
     Bahasa Melayu không chia số nhiều, nên trendHint chỉ đổi "Satu" / số. */
  progress: {
    levels: ['Baru bermula', 'Semakin lancar', 'Stabil', 'Pantas', 'Mahir'],
    legacy: n => `Anda telah menamatkan ${n} pelajaran daripada kursus lama — unit 1 dan 2 sudah dibuka.`,
    unit: index => `Unit ${index}`,
    soon: ' · akan datang',
    trendHint: n => (n === 1 ? 'Satu pelajaran lagi dan trend anda sudah boleh dilukis.'
      : `${n} pelajaran lagi dan trend anda sudah boleh dilukis.`),
    stripLevel: level => `Tahap: ${level}`,
    statWpm: 'PSM terkini',
    statAccuracy: 'Ketepatan',
    statSessions: 'Sesi',
    target: (wpm, accuracy) => `Sasaran seterusnya: <b>${wpm}</b> PSM · ketepatan <b>${accuracy}</b>%`,
    adviceStart: 'Taip satu pelajaran dan halaman ini akan tahu tahap anda.',
    actionStart: 'Mula pelajaran 1 →',
    adviceWeak: keys => `${keys} sedang memperlahankan anda — seminit khas untuknya sangat berbaloi.`,
    actionWeak: keys => `Latih ${keys} →`,
    adviceSteady: 'Anda terus maju — satu pelajaran sehari mengekalkan rentak.',
    actionLesson: (number, title) => `Pelajaran ${number} · ${title} →`,
    actionTest: 'Ujian kelajuan →',
    actionLessons: 'Lihat kursus →',
    heatLegend: 'Ketepatan setiap kekunci',
    heatStrong: 'Mantap',
    heatFair: 'Kadang-kadang tersasar',
    heatWeak: 'Perlu dilatih',
    badgeDate: at => new Date(at).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Dibuka ${date}` : 'Dibuka'),
    number: value => value.toLocaleString('ms-MY'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minit`,
    streak: days => `🔥 ${days} hari berturut-turut`,
    bestStreak: days => `Terbaik: ${days} hari`,
    today: minutes => `${minutes} minit hari ini`,
    clearConfirm: 'Padam semua kemajuan dan markah yang disimpan dalam peranti ini?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'Langkah pertama', hint: 'Tamatkan pelajaran pertama anda.' },
    'unit-1': { title: 'Satu unit selesai', hint: 'Tamatkan satu unit penuh.' },
    'stars-30': { title: '30 bintang', hint: 'Kumpul 30 bintang dalam kursus.' },
    'stars-90': { title: '90 bintang', hint: 'Kumpul 90 bintang dalam kursus.' },
    'streak-3': { title: 'Tiga hari berturut-turut', hint: 'Capai sasaran harian anda tiga hari berturut-turut.' },
    'streak-7': { title: 'Seminggu penuh', hint: 'Capai sasaran harian anda tujuh hari berturut-turut.' },
    'clean-40': { title: '40 PSM bersih', hint: 'Satu pusingan pada 40 PSM dengan ketepatan 95% atau lebih.' },
    'clean-60': { title: '60 PSM bersih', hint: 'Satu pusingan pada 60 PSM dengan ketepatan 95% atau lebih.' },
    'typed-5000': { title: '5,000 kekunci', hint: 'Taip lima ribu tekanan kekunci secara keseluruhan.' }
  }
};
