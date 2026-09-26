/* tro-choi/text/ms.mjs — halaman permainan menaip Bahasa Melayu (scripts/build-game-pages.mjs). Perkataan
 * diambil daripada data/words/ms.js, bank perkataan yang sama dengan kursus /ms/. Bố cục 116 = QWERTY
 * Mỹ, không phím chết: gõ thẳng. Xưng "anda" như khoá học. */
export default {
  slug: 'permainan-menaip',
  title: 'Permainan menaip percuma di papan kekunci anda | TypingEase',
  description: 'Tiga permainan menaip percuma: Hujan Kata, Lumba Bayang dan Buru Kekunci. Berlatih menaip sentuh pada papan kekunci anda dalam pelayar, tanpa daftar.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Halaman utama',
  crumb: 'Permainan menaip',
  eyebrow: 'Latihan yang terasa seperti bermain',
  h1: 'Permainan menaip',
  intro: 'Tiga permainan pendek untuk dimainkan antara pelajaran: hapuskan perkataan yang jatuh, berlumba dengan kelajuan anda sendiri, dan buru kekunci pada papan kekunci skrin. Skor terbaik anda hanya disimpan pada peranti ini.',
  tabsAria: 'Pilih permainan',
  locale: 'ms-MY',
  howAria: 'Cara bermain',
  how: {
    rain: ['Perkataan jatuh dari atas.', 'Taip perkataan itu dengan tepat.', 'Tekan bar ruang untuk menghapuskannya. Terlepas tiga, permainan tamat.'],
    race: ['Pilih kelajuan kereta perentak.', 'Taip petikan dari huruf pertama.', 'Sampai ke bendera sebelum kereta perentak.'],
    keys: ['Satu kekunci menyala pada papan kekunci.', 'Pandang skrin dan tekan kekunci itu.', 'Tekan sebanyak mungkin dalam 60 saat.']
  },
  modes: {
    rain: ['Hujan Kata', 'Taip perkataan yang jatuh dan tekan bar ruang untuk menghapuskannya.'],
    race: ['Lumba Bayang', 'Habiskan petikan sebelum kereta perentak.'],
    keys: ['Buru Kekunci', 'Tekan kekunci yang menyala, sebanyak mungkin dalam 60 saat.']
  },
  rain: {
    difficulty: 'Tahap', easy: 'Mudah', normal: 'Sederhana', hard: 'Sukar',
    score: 'Skor', level: 'Peringkat', lives: 'Nyawa', best: 'Terbaik',
    start: 'Mula', placeholder: 'Taip perkataan yang jatuh, kemudian bar ruang',
    hint: 'Jika tiga perkataan sampai ke bawah, permainan tamat. Tiada huruf beraksen: semua perkataan ditaip terus.'
  },
  race: {
    pace: 'Kereta perentak', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} PSM`,
    start: 'Mula berlumba', you: 'Anda', ghost: 'Perentak', placeholder: 'Taip petikan di atas, dari huruf pertama'
  },
  keys: {
    start: 'Mula memburu', time: 'Saat', hits: 'Kena', streak: 'Berturut', best: 'Terbaik',
    hint: 'Mata pada skrin, bukan pada tangan. Kekunci dikenali mengikut kedudukannya, jadi apa-apa susun atur sistem boleh digunakan.'
  },
  runtime: {
    over: 'Permainan tamat', again: 'Main lagi', newBest: 'Rekod baharu pada peranti ini!',
    rainResult: '{score} mata · {words} perkataan dihapuskan · {wpm} PSM · {accuracy}% tepat sasaran',
    raceReady: 'Kereta perentak bergerak pada {wpm} PSM. Tekan "Mula berlumba", kemudian taip huruf pertama untuk bermula.',
    raceGo: 'Mula!', raceWin: 'Anda sampai dahulu!', raceLose: 'Kali ini kereta perentak menang.',
    racePaused: 'Berhenti. Tekan "Mula berlumba" untuk bermula semula.',
    raceResult: '{seconds} saat · {wpm} PSM · ketepatan {accuracy}% · kereta perentak {ghost} PSM',
    paceBest: 'Rekod anda ({wpm} PSM)',
    keysResult: '{hits} kena · berturut terpanjang {streak} · ketepatan {accuracy}%'
  },
  sections: [
    { h2: 'Tiga permainan, satu kemahiran', html: '<p>Setiap permainan melatih satu bahagian menaip sentuh. <b>Buru Kekunci</b> melatih kedudukan setiap kekunci: kekunci yang menyala memberitahu jari mana yang bergerak, tanpa memandang ke bawah. <b>Hujan Kata</b> melatih menaip perkataan penuh di bawah tekanan masa. <b>Lumba Bayang</b> melatih rentak yang sekata sepanjang satu petikan, menentang kereta perentak pada kelajuan yang anda pilih.</p>' },
    { h2: 'Pada papan kekunci anda sendiri', html: '<p>Papan kekunci skrin dalam Buru Kekunci ialah susun atur kursus anda, Malay (Latin), yang sama kekunci demi kekunci dengan QWERTY Amerika. Kekunci dikenali mengikut kedudukan fizikalnya, bukan mengikut aksara yang ditaip oleh sistem. Hujan Kata dan Lumba Bayang menggunakan perkataan yang sama dengan <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a>.</p>' },
    { h2: 'Cara mendapat manfaat', html: '<ul><li>Main selepas satu pelajaran; lima hingga sepuluh minit sudah memadai.</li><li>Pilih tahap di mana kebanyakan perkataan anda taip dengan betul, dan turunkan jika asyik tersasar.</li><li>Dalam Lumba Bayang, tetapkan kereta perentak sedikit di bawah kelajuan sebenar anda dan naikkan dari semasa ke semasa.</li><li>Untuk ukuran kelajuan yang sebenar, ambil ujian bermasa dalam <a class="inline-link" href="{test}">kursus</a>, bukan permainan.</li></ul>' }
  ],
  faqTitle: 'Soalan lazim',
  faq: [
    ['Bolehkah saya bermain menentang orang lain?', 'Belum. Lumba Bayang menentang kereta perentak yang mengekalkan kelajuan pilihan anda, atau rekod anda sendiri. Tiada pemain lain dan tiada papan pendahulu.'],
    ['Di manakah skor terbaik saya disimpan?', 'Hanya dalam pelayar ini, pada peranti ini. Tiada akaun, dan tiada apa-apa dihantar ke mana-mana.'],
    ['Bolehkah saya bermain di telefon?', 'Hujan Kata dan Lumba Bayang boleh dimainkan dengan papan kekunci telefon. Buru Kekunci memerlukan papan kekunci sebenar, kerana ia mengajar kedudukan kekunci.'],
    ['Kenapa perkataan yang betul tidak dihapuskan?', 'Perkataan mesti sama sepenuhnya sebelum anda menekan bar ruang. Periksa huruf besar yang tertaip atau huruf yang tertinggal.']
  ],
  cta: { eyebrow: 'Mahu bermain lebih baik?', title: 'Belajar menaip sentuh', text: '{lessons} pelajaran pada susun atur papan kekunci anda sendiri, bermula dengan baris asas.', button: 'Lihat kursus' }
};
