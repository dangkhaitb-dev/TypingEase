/* tro-choi/text/id.mjs — halaman game mengetik bahasa Indonesia (scripts/build-game-pages.mjs). Kata-kata
 * diambil dari data/words/id.js, kumpulan kata yang sama dengan kursus /id/. Bố cục 115 = QWERTY Mỹ,
 * không phím chết: gõ thẳng. */
export default {
  slug: 'game-mengetik',
  title: 'Game mengetik gratis di papan ketik sendiri | TypingEase',
  description: 'Tiga game mengetik gratis: Hujan Kata, Balapan Bayangan, dan Buru Tombol. Latihan mengetik 10 jari di papan ketikmu sendiri, di browser, tanpa daftar.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Halaman utama',
  crumb: 'Game mengetik',
  eyebrow: 'Latihan yang terasa seperti bermain',
  h1: 'Game mengetik',
  intro: 'Tiga game singkat untuk dimainkan di sela pelajaran: hapus kata yang jatuh, balapan dengan kecepatanmu sendiri, dan buru tombol di papan ketik layar. Skor terbaikmu hanya tersimpan di perangkat ini.',
  tabsAria: 'Pilih game',
  locale: 'id-ID',
  howAria: 'Cara bermain',
  how: {
    rain: ['Kata-kata jatuh dari atas.', 'Ketik katanya persis sama.', 'Tekan Spasi untuk menghapusnya. Tiga kata lolos, game selesai.'],
    race: ['Pilih kecepatan mobil pemandu.', 'Ketik teksnya dari huruf pertama.', 'Capai bendera sebelum mobil pemandu.'],
    keys: ['Satu tombol menyala di papan ketik.', 'Tetap lihat layar, lalu tekan tombol itu.', 'Tekan sebanyak mungkin dalam 60 detik.']
  },
  modes: {
    rain: ['Hujan Kata', 'Ketik kata yang jatuh, lalu tekan Spasi untuk menghapusnya.'],
    race: ['Balapan Bayangan', 'Selesaikan teks sebelum mobil pemandu sampai.'],
    keys: ['Buru Tombol', 'Tekan tombol yang menyala, sebanyak mungkin dalam 60 detik.']
  },
  rain: {
    difficulty: 'Tingkat', easy: 'Mudah', normal: 'Sedang', hard: 'Sulit',
    score: 'Skor', level: 'Tahap', lives: 'Nyawa', best: 'Terbaik',
    start: 'Mulai', placeholder: 'Ketik kata yang jatuh, lalu Spasi',
    hint: 'Kalau tiga kata sampai ke bawah, game selesai. Tidak ada huruf beraksen: semua kata diketik langsung.'
  },
  race: {
    pace: 'Mobil pemandu', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} KPM`,
    start: 'Mulai balapan', you: 'Kamu', ghost: 'Pemandu', placeholder: 'Ketik teks di atas, dari huruf pertama'
  },
  keys: {
    start: 'Mulai berburu', time: 'Detik', hits: 'Kena', streak: 'Beruntun', best: 'Terbaik',
    hint: 'Mata ke layar, bukan ke tangan. Tombol dikenali dari posisinya, jadi tata letak sistem apa pun bisa dipakai.'
  },
  runtime: {
    over: 'Game selesai', again: 'Main lagi', newBest: 'Rekor baru di perangkat ini!',
    rainResult: '{score} poin · {words} kata terhapus · {wpm} KPM · {accuracy}% tepat sasaran',
    raceReady: 'Mobil pemandu melaju {wpm} KPM. Tekan "Mulai balapan", lalu ketik huruf pertama untuk berangkat.',
    raceGo: 'Mulai!', raceWin: 'Kamu sampai lebih dulu!', raceLose: 'Kali ini mobil pemandu yang menang.',
    racePaused: 'Berhenti. Tekan "Mulai balapan" untuk mulai lagi.',
    raceResult: '{seconds} detik · {wpm} KPM · ketepatan {accuracy}% · mobil pemandu {ghost} KPM',
    paceBest: 'Rekormu ({wpm} KPM)',
    keysResult: '{hits} kena · beruntun terpanjang {streak} · ketepatan {accuracy}%'
  },
  sections: [
    { h2: 'Tiga game, satu keterampilan', html: '<p>Tiap game melatih satu bagian dari mengetik 10 jari. <b>Buru Tombol</b> melatih letak setiap tombol: tombol yang menyala memberi tahu jari mana yang bergerak, tanpa melihat ke bawah. <b>Hujan Kata</b> melatih mengetik kata utuh di bawah tekanan waktu. <b>Balapan Bayangan</b> melatih irama yang rata sepanjang satu teks, melawan mobil pemandu dengan kecepatan yang kamu pilih.</p>' },
    { h2: 'Di papan ketikmu sendiri', html: '<p>Papan ketik layar di Buru Tombol adalah tata letak kursusmu, Indonesian (Latin), yang sama tombol demi tombol dengan QWERTY Amerika. Tombol dikenali dari posisi fisiknya, bukan dari karakter yang dikeluarkan sistem. Hujan Kata dan Balapan Bayangan memakai kata-kata yang sama dengan <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a>.</p>' },
    { h2: 'Supaya ada hasilnya', html: '<ul><li>Main setelah satu pelajaran; lima sampai sepuluh menit sudah cukup.</li><li>Pilih tingkat di mana sebagian besar kata kamu ketik dengan benar, dan turunkan kalau terus meleset.</li><li>Di Balapan Bayangan, atur mobil pemandu sedikit di bawah kecepatan aslimu, lalu naikkan pelan-pelan.</li><li>Untuk mengukur kecepatan sungguhan, kerjakan tes berwaktu di <a class="inline-link" href="{test}">kursus</a>, bukan game.</li></ul>' }
  ],
  faqTitle: 'Pertanyaan umum',
  faq: [
    ['Bisakah aku bermain melawan orang lain?', 'Belum. Balapan Bayangan melawan mobil pemandu yang menjaga kecepatan pilihanmu, atau rekormu sendiri. Tidak ada pemain lain dan tidak ada papan peringkat.'],
    ['Di mana skor terbaikku disimpan?', 'Hanya di browser ini, di perangkat ini. Tanpa akun, dan tidak ada yang dikirim ke mana pun.'],
    ['Bisakah dimainkan di ponsel?', 'Hujan Kata dan Balapan Bayangan bisa dengan papan ketik ponsel. Buru Tombol butuh papan ketik sungguhan, karena game ini mengajarkan letak tombol.'],
    ['Kenapa kata yang benar tidak terhapus?', 'Kata harus persis sama sebelum kamu menekan Spasi. Periksa huruf kapital yang tidak sengaja atau huruf yang terlewat.']
  ],
  cta: { eyebrow: 'Mau main lebih baik?', title: 'Belajar mengetik 10 jari', text: '{lessons} pelajaran di tata letak papan ketikmu sendiri, mulai dari baris dasar.', button: 'Lihat kursus' }
};
