/* content/typing-test/ms.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Mã Lai (/ms/ujian-menaip/),
 * cho tooling/pages/typing-tests.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 * Bố cục khoá học = Malay (Latin) 116, giống QWERTY Mỹ, không phím chết. Đơn vị là PSM (perkataan seminit)
 * như ui.ms.js và content/games/ms.mjs. Xưng "anda". Bahasa Melayu không chia số nhiều.
 */
export default {
  slug: 'ujian-menaip',
  title: 'Ujian menaip online percuma: PSM dan ketepatan | TypingEase',
  description: 'Ujian menaip percuma dalam pelayar: taip selama 1, 5 atau 10 minit, kemudian lihat kelajuan menaip dalam PSM, ketepatan dan jumlah kesilapan anda.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Halaman utama',
  crumb: 'Ujian menaip',
  eyebrow: 'Ujian menaip percuma',
  h1: 'Ujian kelajuan menaip',
  intro: 'Pilih tempoh dari 15 saat hingga 10 minit, kemudian taip semula petikan itu untuk melihat kelajuan anda dalam perkataan seminit, ketepatan dan kesilapan. Masa mula berjalan pada ketukan kekunci pertama anda, bukan apabila anda menekan butang.',
  durationAria: 'Tempoh ujian',
  durationLabel: seconds => (seconds < 60 ? `${seconds} saat` : `${seconds / 60} minit`),
  liveAria: 'Keputusan semasa',
  stats: { time: 'Masa', wpm: 'PSM', accuracy: 'Ketepatan', errors: 'Kesilapan', consistency: 'Konsistensi' },
  promptAria: 'Petikan yang perlu ditaip',
  inputLabel: 'Mula menaip di sini',
  soundTitle: 'Bunyi klik kekunci semasa menaip (Alt+S)',
  soundLabel: 'Bunyi klik',
  placeholder: 'Klik di sini dan mula menaip...',
  restart: 'Cuba lagi',
  wpmNote: 'PSM: jumlah aksara yang anda taip dibahagi lima, bagi setiap minit menaip.',
  result: { title: 'Keputusan anda' },
  progress: {
    eyebrow: 'Log latihan', title: 'Kemajuan anda', rangeAria: 'Julat masa',
    days: n => `${n} hari`,
    metricAria: 'Ukuran pada carta', note: 'Keputusan mungkin datang daripada ujian yang berlainan tempoh.',
    summaryAria: 'Ringkasan kemajuan', avgWpm: 'Purata PSM', bestWpm: 'PSM terbaik',
    avgAccuracy: 'Purata ketepatan', count: 'Ujian selesai', chartAria: 'Carta kemajuan'
  },
  sections: [
    {
      h2: 'Cara ujian menaip ini berfungsi',
      html: '<p>Di atas terdapat petikan dalam Bahasa Melayu dengan huruf besar, koma, noktah dan tanda baca lain. Dalam tempoh yang anda pilih, taip semula petikan itu setepat mungkin. Setiap aksara terus dibandingkan dengan contohnya: yang betul kekal biasa, yang salah ditandakan dengan warna. Selagi masa berjalan, kesilapan boleh dipadam dengan Backspace dan dibetulkan.</p><p>Ujian kelajuan menaip online ini percuma dan direka untuk papan kekunci QWERTY biasa, susun atur yang digunakan pada hampir semua komputer riba dan komputer meja di Malaysia. Semuanya dikira terus dalam pelayar, tanpa mendaftar akaun, dan keputusan anda hanya disimpan pada peranti ini.</p>'
    },
    {
      h2: 'Apa itu PSM (perkataan seminit)',
      html: '<p>Kelajuan di sini ditunjukkan dalam <em>perkataan seminit</em> atau PSM, yang dalam bahasa Inggeris dipanggil WPM. Panjang perkataan tidak sama, jadi satu perkataan dikira sebagai lima aksara, termasuk ruang dan tanda baca. Dengan cara ini keputusan tidak bergantung pada sama ada petikan penuh dengan perkataan pendek atau perkataan panjang.</p><p>Perkataan Bahasa Melayu selalunya panjang kerana imbuhan, contohnya <em>memperkenalkan</em> atau <em>kebersihan</em>. Oleh sebab satu perkataan dikira sebagai lima aksara, perkataan panjang tidak menjadikan skor anda kelihatan lebih rendah. Untuk mendapatkan aksara seminit, darabkan PSM dengan lima: 40 PSM lebih kurang sama dengan 200 aksara seminit.</p>'
    },
    {
      h2: 'Apa yang dikira sebagai satu aksara',
      html: '<p>Setiap huruf, nombor, ruang dan tanda baca dikira sebagai satu aksara. Huruf besar juga satu aksara, walaupun memerlukan dua kekunci: Shift dan huruf itu. Aksara yang berlebihan atau tertinggal akan menganjakkan baki perkataan, jadi kesilapan begitu mudah dilihat.</p><p>Bahasa Melayu dalam tulisan Rumi tidak menggunakan huruf beraksen, jadi semua huruf terdapat terus pada papan kekunci QWERTY tanpa gabungan khas. Yang lebih kerap melambatkan ialah huruf besar pada awal ayat dan nama, tanda sempang pada kata ganda seperti <em>kanak-kanak</em> atau <em>sehari-hari</em>, serta tanda baca yang memerlukan Shift, contohnya tanda soal, titik bertindih dan tanda petik.</p>'
    },
    {
      h2: 'Memilih tempoh yang sesuai: 1, 5 atau 10 minit',
      html: '<p>Ujian pendek menunjukkan kelajuan puncak: tumpuan penuh dan hampir tiada letih, tetapi satu kesilapan sangat mempengaruhi keputusan. Ujian panjang mengukur daya tahan, jadi keputusannya biasanya sedikit lebih rendah, tetapi lebih hampir dengan kelajuan anda ketika menulis laporan atau tugasan yang panjang. Untuk membandingkan diri anda dengan diri sendiri, pilih tempoh yang sama setiap kali.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Tempoh mana untuk tujuan apa</caption><thead><tr><th scope="col">Tempoh</th><th scope="col">Bila ia berguna</th></tr></thead><tbody><tr><th scope="row">15 atau 30 saat</th><td>Untuk memanaskan jari sebelum ujian sebenar, atau melatih satu kelemahan seperti tanda sempang; angkanya terlalu turun naik untuk dijadikan rekod.</td></tr><tr><th scope="row">Ujian menaip 1 minit</th><td>Ukuran harian yang paling berguna: cukup panjang supaya satu kesilapan tidak menentukan segalanya, cukup pendek untuk diulang tiga kali berturut-turut.</td></tr><tr><th scope="row">Ujian menaip 5 minit</th><td>Cuba apabila PSM satu minit anda sudah stabil; jurang yang besar antara keduanya menunjukkan teknik anda longgar apabila penat.</td></tr><tr><th scope="row">Ujian menaip 10 minit</th><td>Paling hampir dengan kerja sebenar seperti menaip minit mesyuarat; sekali seminggu sudah cukup, kerana keletihan mengaburkan kemajuan harian.</td></tr></tbody></table></div>'
    },
    {
      h2: 'Cara membaca ketepatan',
      html: '<p>Ketepatan menunjukkan berapa peratus aksara yang anda taip sepadan dengan contohnya. Jumlah kesilapan di sebelahnya ialah bilangan aksara yang masih salah ketika ujian tamat: kesilapan yang sudah dibetulkan tidak dikira lagi, tetapi masa untuk membetulkannya sudah digunakan. PSM mengira semua aksara yang ditaip, termasuk yang salah, jadi kelajuan tinggi dengan banyak kesilapan kelihatan lebih baik daripada sebenarnya.</p><p>Peraturan kasarnya: jika ketepatan anda di bawah 95%, perlahankan sedikit. Dalam kerja harian setiap kesilapan memakan masa, dan terlalu kerap menekan Backspace mengganggu rentak. Konsistensi menunjukkan sama ada rentak anda sekata sepanjang ujian atau turun naik.</p>'
    },
    {
      h2: 'Ujian menaip untuk pemula sepatutnya bukan perlumbaan',
      html: '<p>Pada hari pertama, saya tidak peduli berapa PSM anda. Pilih butang 1 minit dan taip petikan Bahasa Melayu itu pada kelajuan yang anda mampu kekalkan tanpa memandang papan kekunci, walaupun angkanya kelihatan rendah. Angka jujur pada hari pertama lebih berguna daripada angka besar yang dicapai dengan mata melekat pada kekunci.</p><p>Selepas ujian, lihat di mana aksara bertanda warna berkumpul. Dalam Bahasa Melayu, saya akan menyemak kata ganda seperti <em>kanak-kanak</em> dahulu, kerana tanda sempang terletak jauh di baris atas untuk kelingking kanan, kemudian huruf besar selepas noktah. Jika kesilapan berkumpul di situ, perlahankan pada dua tempat itu sahaja; bahagian lain petikan tidak perlu dikorbankan.</p><p>Jika anda masih mencari huruf satu demi satu, saya cadangkan latihan papan kekunci dalam <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a> dahulu, bermula dari baris asas.</p>'
    },
    {
      h2: 'Selepas ujian: apa yang perlu dilatih seterusnya',
      html: '<ul><li>Belajar menaip 10 jari dari baris asas: jari kiri pada A S D F, jari kanan pada J K L dan koma bertitik, ibu jari pada bar ruang.</li><li>Jangan pandang papan kekunci. Pada mulanya kelajuan akan turun, tetapi hanya dengan cara ini jari menghafal kedudukan setiap kekunci.</li><li>Tekan Shift dengan jari kelingking tangan yang bertentangan dengan huruf yang hendak dibesarkan.</li><li>Latihan menaip pantas lebih berkesan dalam sesi pendek setiap hari berbanding satu sesi panjang pada hujung minggu.</li><li>Utamakan ketepatan dahulu. Kelajuan akan datang apabila gerakan jari sudah biasa.</li></ul><p><a class="inline-link" href="{course}">Kursus menaip {lessons} pelajaran</a> membimbing anda langkah demi langkah pada papan kekunci anda sendiri, dari baris asas hingga tanda baca.</p><p>Untuk pelan latihan yang lebih terperinci, baca panduan <a class="inline-link" href="/ms/cara-menaip-dengan-cepat/">cara menaip dengan cepat</a> dalam Bahasa Melayu.</p>'
    }
  ],
  faqTitle: 'Soalan lazim',
  faq: [
    ['Apa itu PSM?', 'PSM ialah perkataan seminit, dalam bahasa Inggeris WPM. Satu perkataan dikira sebagai lima aksara, termasuk ruang, supaya keputusan tidak bergantung pada panjang perkataan dalam petikan.'],
    ['Adakah PSM sama dengan WPM?', 'Ya. PSM hanyalah nama Bahasa Melayu bagi WPM, dan cara pengiraannya sama: aksara yang ditaip dibahagi lima, bagi setiap minit. Jadi keputusan anda di sini boleh dibandingkan dengan ujian WPM bahasa Inggeris yang menggunakan peraturan lima aksara yang sama.'],
    ['Tempoh mana yang patut saya pilih?', 'Satu minit menunjukkan kelajuan puncak, manakala lima atau sepuluh minit menunjukkan daya tahan. Untuk membandingkan dengan keputusan lalu, sentiasa pilih tempoh yang sama.'],
    ['Bolehkah saya menggunakannya pada komputer riba?', 'Boleh. Ujian ini menggunakan susun atur QWERTY yang sama dengan hampir semua komputer riba. Pada telefon atau tablet, gunakan papan kekunci fizikal supaya keputusannya bermakna.'],
    ['Adakah keputusan saya disimpan?', 'Hanya dalam pelayar pada peranti ini. Tiada akaun dan tidak perlu mendaftar. Jika data pelayar dipadam, sejarahnya juga hilang.'],
    ['Adakah ujian ini sesuai untuk kanak-kanak?', 'Sesuai, asalkan dicuba bersama orang dewasa. Tiada mod khas untuk kanak-kanak dan petikannya ditulis untuk orang dewasa, jadi butang 30 atau 60 saat sudah memadai. Pujilah ketepatan, bukan angka PSM.']
  ],
  cta: { eyebrow: 'Mahu menaip lebih pantas?', title: 'Belajar menaip sentuh', text: '{lessons} pelajaran, semuanya pada papan kekunci anda sendiri, bermula dari baris asas.', button: 'Lihat kursus' }
};
