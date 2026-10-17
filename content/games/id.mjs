/* content/games/id.mjs — halaman game mengetik bahasa Indonesia (tooling/pages/games.mjs). Kata-kata
 * diambil dari data/words/id.js, kumpulan kata yang sama dengan kursus /id/. Bố cục 115 = QWERTY Mỹ,
 * không phím chết: gõ thẳng. */
export default {
  worlds: {"rain": "Taman kunang-kunang", "race": "Sirkuit senja", "keys": "Stasiun luar angkasa"},
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
    { h2: 'Game mengetik: pilih sesuai kesulitanmu sekarang', html: '<p>Masih mencari letak huruf? Main <b>Buru Tombol</b>. Huruf sudah hafal, tetapi tersendat saat menyusun kata? Coba <b>Hujan Kata</b>. Kata sudah lancar, tetapi irama berantakan di teks panjang? Pakai <b>Balapan Bayangan</b>. Tidak perlu daftar, dan tidak perlu menyelesaikan kursus dulu. Hanya saja, kalau kamu belum pernah ikut satu pelajaran pun, mulailah dari Buru Tombol: Hujan Kata langsung meminta beberapa huruf berturut-turut, dan itu terasa berat selama letak hurufnya masih dicari dengan mata.</p><p>Ketiganya memakai kosakata dari kursus, dari kata pendek baris dasar seperti <em>ada</em> dan <em>salak</em> sampai <em>universitas</em>. Semua kata ditulis huruf kecil, tanpa angka dan tanda baca. Artinya game ini melatih huruf, bukan Shift atau tanda baca; untuk itu tetap ada Unit 3 di kursus. Menurut saya game paling berguna sebagai pemeriksaan singkat setelah satu pelajaran: apakah huruf yang baru dipelajari masih ketemu ketika ada tekanan waktu?</p>' },
    { h2: 'Hujan Kata: ketik sebelum kata menyentuh dasar', html: '<p>Pilih tingkat lalu tekan Mulai. Kata jatuh dari atas; ketik persis, lalu tekan Spasi atau Enter untuk menghapusnya. Tiga kata lolos ke bawah, game selesai. Tingkat Mudah hanya berisi kata 2 sampai 5 huruf, Sedang sampai 8 huruf, dan Sulit memasukkan kata yang lebih panjang. Setiap 8 kata terhapus, tahap naik: kata jatuh lebih cepat dan datang lebih rapat.</p><h3>Kata berimbuhan di tingkat Sulit</h3><p>Di tingkat Sulit muncul kata seperti <em>pekerjaan</em>, <em>permainan</em>, dan <em>perempuan</em>. Ketiganya sama-sama diawali pe dan diakhiri -an, jadi bedanya ada di tengah. Baca seluruh kata sebelum mulai mengetik; mengganti target di tengah jalan biasanya meninggalkan ketikan yang tidak cocok dengan kata mana pun.</p><h3>Membaca skor</h3><p>Poin tiap kata adalah jumlah huruf dikali tahap saat itu, jadi kata panjang di tahap akhir bernilai besar. Persentase tepat sasaran hanya menghitung kata yang kamu kirim, bukan setiap tombol yang salah di tengah jalan.</p>' },
    { h2: 'Balapan Bayangan: balapan dengan kecepatan pilihanmu sendiri', html: '<p>Pilih kecepatan mobil pemandu: 20, 30, 40, 60, atau 80 KPM, atau "Rekormu". Waktu baru berjalan saat kamu mengetik huruf pertama. Teksnya rangkaian kata acak dari kosakata kursus, sekitar 170 karakter, jadi tidak bisa ditebak dari alur kalimat.</p><p>Sejujurnya: tidak ada pemain lain dan tidak ada papan peringkat. Mobil pemandu hanya melaju rata pada kecepatan yang kamu pilih. Pilihan "Rekormu" memakai rekor balapan yang tersimpan di perangkat ini (paling rendah 15 KPM), atau 30 KPM kalau belum ada rekor. Kalau sedang memperbaiki satu kebiasaan, pilih kecepatan tetap supaya beberapa percobaan bisa dibandingkan.</p><h3>Mobilmu berhenti?</h3><p>Mobilmu hanya maju sejauh bagian awal yang sudah benar. Satu huruf salah di depan menahan semuanya, sebenar apa pun ketikan sesudahnya. Cari kesalahan pertama, sering kali spasi yang terlewat atau huruf kembar yang kurang satu seperti di <em>kakak</em>, lalu perbaiki.</p>' },
    { h2: 'Buru Tombol: letak 26 huruf di QWERTY', html: '<p>Satu ronde 60 detik. Satu huruf menyala di papan ketik layar; tekan tombol di posisi yang sama pada papan ketik fisik, lalu cari yang berikutnya. Salah tekan memutus rangkaian beruntun, jadi lihat juga beruntun terpanjang, bukan hanya jumlah kena: tebakan cepat dan tekanan yang yakin bisa menghasilkan jumlah yang sama.</p><p>Targetnya hanya 26 huruf, tanpa angka dan tanda baca, dan setiap huruf punya peluang muncul yang sama. Tombol dikenali dari posisi fisiknya, jadi tata letak sistem apa pun bisa dipakai, tetapi perlu papan ketik sungguhan; layar sentuh ponsel tidak mengirim posisi tombol.</p><p>Untuk bahasa Indonesia, perhatikan q, x, dan z. Huruf-huruf ini jarang muncul dalam kata sehari-hari, jadi wajar kalau terasa asing, padahal di Buru Tombol mereka muncul sesering a atau n. Kalau kamu tersendat di sana, tidak perlu cemas; ulangi saja pelajaran z, x, c di kursus.</p>' },
    { h2: 'Ubah hasil game menjadi pelajaran berikutnya', html: '<p>Setelah satu ronde, jawab satu pertanyaan sebelum menekan Main lagi: tersendat di huruf apa, atau di pola apa? "Selalu ragu di y setelah n" berarti gerakan -nya, yang dikerjakan telunjuk kanan dua kali berturut-turut; kembali ke pelajaran v, b, n dan r, t, y di <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a>. "Kata panjang selalu lolos" berarti kamu perlu membaca lebih awal, bukan mengetik lebih cepat.</p><p>Untuk angka yang bisa dibandingkan dari waktu ke waktu, kerjakan <a class="inline-link" href="{test}">tes mengetik</a>; teksnya punya huruf kapital dan tanda baca yang tidak ada di game. Skor Hujan Kata, KPM balapan, dan KPM tes adalah tiga tugas berbeda, jadi jangan disandingkan. Kalau ingin melihat apakah jarimu berubah, tetapkan satu tingkat Hujan Kata dan satu kecepatan mobil pemandu selama beberapa hari; kalau syaratnya berganti setiap kali, kamu tidak tahu apakah yang berubah tanganmu atau permainannya. Rekor game hanya tersimpan di browser perangkat ini dan hilang kalau data situs dihapus.</p>' }
  ],
  faqTitle: 'Pertanyaan umum',
  faq: [
    ['Bisakah aku bermain melawan orang lain?', 'Tidak. Balapan Bayangan melawan mobil pemandu yang menjaga kecepatan pilihanmu, atau rekormu sendiri. Tidak ada pemain lain dan tidak ada papan peringkat.'],
    ['Di mana skor terbaikku disimpan?', 'Hanya di browser ini, di perangkat ini. Tanpa akun, dan tidak ada yang dikirim ke mana pun.'],
    ['Bisakah dimainkan di ponsel?', 'Hujan Kata dan Balapan Bayangan bisa dengan papan ketik ponsel. Buru Tombol butuh papan ketik sungguhan, karena game ini mengajarkan letak tombol.'],
    ['Kenapa kata yang benar tidak terhapus?', 'Kata harus persis sama sebelum kamu menekan Spasi. Periksa huruf kapital yang tidak sengaja atau huruf yang terlewat.'],
    ['Kenapa tidak ada huruf kapital dan tanda baca di game?', 'Kata-kata game diambil dari kosakata kursus dan semuanya ditulis huruf kecil. Game melatih letak huruf dan kata; Shift, tanda baca, dan Enter dilatih di Unit 3 kursus.'],
    ['Apakah KPM di Balapan Bayangan sama dengan KPM di tes?', 'Cara hitungnya sama, lima karakter dihitung satu kata, tetapi tugasnya berbeda: teks balapan berisi kata acak huruf kecil, sedangkan tes memakai kalimat dengan huruf kapital dan tanda baca. Jangan bandingkan keduanya secara langsung.']
  ],
  cta: { eyebrow: 'Mau main lebih baik?', title: 'Belajar mengetik 10 jari', text: '{lessons} pelajaran di tata letak papan ketikmu sendiri, mulai dari baris dasar.', button: 'Lihat kursus' }
};
