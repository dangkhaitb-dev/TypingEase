/* content/typing-test/id.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Indonesia (/id/tes-mengetik/),
 * cho tooling/pages/typing-tests.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 * Bố cục khoá học = Indonesian (Latin) 115, giống QWERTY Mỹ, không phím chết. Đơn vị là KPM (kata per
 * menit) như ui.id.js và content/games/id.mjs. Xưng "kamu". Tiếng Indonesia không chia số nhiều.
 */
export default {
  slug: 'tes-mengetik',
  title: 'Tes mengetik online gratis: KPM dan ketepatan | TypingEase',
  description: 'Tes mengetik gratis di browser: ketik selama 1, 5, atau 10 menit, lalu lihat kecepatan mengetik dalam KPM, ketepatan, dan jumlah salah. Tanpa daftar.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Halaman utama',
  crumb: 'Tes mengetik',
  eyebrow: 'Tes mengetik gratis',
  h1: 'Tes kecepatan mengetik',
  intro: 'Pilih durasi dari 15 detik sampai 10 menit, lalu ketik ulang teksnya untuk melihat kecepatanmu dalam kata per menit, ketepatan, dan jumlah salah. Waktu mulai berjalan saat tombol pertama kamu tekan, bukan saat menekan sebuah tombol di layar.',
  durationAria: 'Durasi tes',
  durationLabel: seconds => (seconds < 60 ? `${seconds} detik` : `${seconds / 60} menit`),
  liveAria: 'Hasil saat ini',
  stats: { time: 'Waktu', wpm: 'KPM', accuracy: 'Ketepatan', errors: 'Salah', consistency: 'Konsistensi' },
  promptAria: 'Teks yang harus diketik',
  inputLabel: 'Mulai mengetik di sini',
  soundTitle: 'Bunyi klik tombol saat mengetik (Alt+S)',
  soundLabel: 'Bunyi klik',
  placeholder: 'Klik di sini dan mulai mengetik...',
  restart: 'Ulangi',
  wpmNote: 'KPM: jumlah karakter yang kamu ketik dibagi lima, untuk setiap menit mengetik.',
  result: { title: 'Hasilmu' },
  progress: {
    eyebrow: 'Catatan latihan', title: 'Kemajuanmu', rangeAria: 'Rentang waktu',
    days: n => `${n} hari`,
    metricAria: 'Ukuran di grafik', note: 'Hasil bisa berasal dari tes dengan durasi yang berbeda.',
    summaryAria: 'Ringkasan kemajuan', avgWpm: 'Rata-rata KPM', bestWpm: 'KPM terbaik',
    avgAccuracy: 'Rata-rata ketepatan', count: 'Tes selesai', chartAria: 'Grafik kemajuan'
  },
  sections: [
    {
      h2: 'Cara kerja tes mengetik ini',
      html: '<p>Berbeda dengan <em>typing test</em> berbahasa Inggris, ini tes kecepatan mengetik bahasa Indonesia: di atas ada teks dengan huruf besar, koma, titik, dan tanda baca lain. Selama waktu yang kamu pilih, ketik ulang teks itu setepat mungkin. Setiap karakter langsung dibandingkan dengan contohnya: yang benar tampil biasa, yang salah diberi warna. Selama waktu masih berjalan, kesalahan boleh dihapus dengan Backspace lalu diperbaiki.</p><p>Tes ini dibuat untuk papan ketik QWERTY biasa, yang dipakai hampir semua laptop dan komputer di Indonesia. Sebagai tes kecepatan mengetik online, semuanya dihitung langsung di browser, tanpa daftar akun, dan hasilnya hanya tersimpan di perangkat ini.</p>'
    },
    {
      h2: 'Apa itu KPM (kata per menit)',
      html: '<p>Kecepatan di sini ditampilkan dalam <em>kata per menit</em> atau KPM, yang dalam bahasa Inggris disebut WPM. Panjang kata berbeda-beda, jadi satu kata dihitung sama dengan lima karakter, termasuk spasi dan tanda baca. Dengan begitu hasilnya tidak bergantung pada teks yang kebetulan penuh kata pendek atau kata panjang.</p><p>Kata dalam bahasa Indonesia cenderung panjang karena imbuhan, seperti <em>memperhatikan</em> atau <em>keberangkatan</em>. Karena ukuran lima karakter per kata, hal itu tidak membuat skormu terlihat lebih rendah. Kalau kamu ingin tahu jumlah karakter per menit, kalikan KPM dengan lima: 40 KPM kira-kira sama dengan 200 karakter per menit.</p>'
    },
    {
      h2: 'Apa yang dihitung sebagai satu karakter',
      html: '<p>Setiap huruf, angka, spasi, dan tanda baca dihitung sebagai satu karakter. Huruf besar juga satu karakter, walaupun perlu dua tombol: Shift dan hurufnya. Karakter yang kelebihan atau terlewat akan menggeser sisa kata, jadi kesalahan seperti itu cepat terlihat.</p><p>Bahasa Indonesia tidak memakai huruf beraksen, jadi semua huruf ada langsung di papan ketik QWERTY tanpa kombinasi khusus. Yang sering memperlambat justru huruf besar di awal kalimat dan nama, tanda hubung pada kata ulang seperti <em>anak-anak</em> atau <em>sehari-hari</em>, serta tanda baca yang perlu Shift, misalnya tanda tanya, titik dua, dan tanda kutip.</p>'
    },
    {
      h2: 'Tes mengetik 1 menit, 5 menit, atau 10 menit: pilih yang mana',
      html: '<p>Tes satu menit atau kurang menunjukkan kecepatan puncakmu, sedangkan tes lima atau sepuluh menit mengukur daya tahan. Hasil tes panjang biasanya sedikit lebih rendah, dan lebih dekat dengan kecepatanmu saat benar-benar menulis laporan atau tugas panjang. Supaya bisa membandingkan dirimu dengan dirimu sendiri, pilih durasi yang sama setiap kali.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Kapan memilih setiap durasi</caption><thead><tr><th scope="col">Durasi</th><th scope="col">Kapan dipilih</th></tr></thead><tbody><tr><th scope="row">15 detik</th><td>Hanya beberapa kata, cocok untuk pemanasan atau mengecek satu kebiasaan, misalnya Shift di awal kalimat.</td></tr><tr><th scope="row">30 detik</th><td>Cukup untuk satu atau dua kalimat, pas untuk membandingkan sebelum dan sesudah melatih satu bagian sulit.</td></tr><tr><th scope="row">Tes mengetik 1 menit</th><td>Durasi standar yang paling umum: hampir tanpa lelah, tetapi satu kesalahan sangat memengaruhi hasil akhir.</td></tr><tr><th scope="row">2 menit</th><td>Pengaruh satu kesalahan tinggal separuh, jadi angkanya lebih stabil untuk dicatat setiap hari.</td></tr><tr><th scope="row">3 menit</th><td>Selisih tempo antara awal dan akhir mulai terlihat; lihat angka konsistensi untuk tahu iramamu rata atau tidak.</td></tr><tr><th scope="row">Tes mengetik 5 menit</th><td>Perhatian mulai berkurang dan tangan mulai lelah, di situ terlihat apakah teknik 10 jarimu tetap terjaga.</td></tr><tr><th scope="row">Tes mengetik 10 menit</th><td>Masalah posisi duduk dan pergelangan tangan biasanya baru muncul di paruh kedua; cocok untuk tahu berapa lama kamu bisa mengetik stabil.</td></tr></tbody></table></div>'
    },
    {
      h2: 'Cara membaca ketepatan',
      html: '<p>Ketepatan menunjukkan berapa bagian dari karakter yang kamu ketik yang sama dengan contohnya. Angka salah di sebelahnya adalah jumlah karakter yang masih salah saat tes selesai: kesalahan yang sudah diperbaiki tidak dihitung lagi, tetapi waktu untuk memperbaikinya sudah terpakai. KPM menghitung semua karakter yang diketik, termasuk yang salah, sehingga kecepatan tinggi dengan banyak kesalahan terlihat lebih bagus daripada kenyataannya.</p><p>Aturan kasarnya: kalau ketepatanmu di bawah 95%, pelankan sedikit. Dalam pekerjaan sehari-hari setiap kesalahan memakan waktu, dan terlalu sering menekan Backspace merusak irama. Konsistensi menunjukkan apakah temponya rata sepanjang tes atau naik turun.</p>'
    },
    {
      h2: 'Tes mengetik untuk pemula: saran saya',
      html: '<p>Untuk tes pertamamu, saya sarankan tombol 1 menit, bukan 15 detik. Lima belas detik terlalu singkat untuk teks bahasa Indonesia: satu kata panjang seperti <em>memperhatikan</em> yang salah di tengah sudah cukup membuat hasilnya acak. Satu menit memberi cukup kalimat untuk menunjukkan kebiasaanmu yang sebenarnya.</p><p>Setelah selesai, lihat ketepatan dulu, baru KPM. Alat ini menghitung semua karakter yang diketik, termasuk yang salah, jadi KPM tinggi dengan ketepatan 88% bukan kemajuan. Perhatikan juga di mana karakter berwarna menumpuk. Kalau kesalahanmu berkumpul di tanda hubung kata ulang seperti <em>sehari-hari</em> atau di huruf besar setelah titik, masalahnya ada di tombol minus dan Shift, bukan di kecepatan, dan cukup dua tempat itu saja yang kamu perlambat.</p><p>Kalau kamu masih mencari huruf dengan mata, menurut saya angka tes belum banyak artinya. Latihan keyboard di <a class="inline-link" href="{course}">kursus {lessons} pelajaran</a>, mulai dari baris tengah, akan lebih berguna dulu.</p>'
    },
    {
      h2: 'Setelah tes, latihan apa berikutnya',
      html: '<ul><li>Belajar mengetik 10 jari dari baris tengah: jari kiri di A S D F, jari kanan di J K L dan titik koma, ibu jari di spasi.</li><li>Jangan melihat papan ketik. Awalnya kecepatan akan turun, tetapi hanya dengan cara ini jari hafal letak setiap tombol.</li><li>Tekan Shift dengan kelingking dari tangan yang berlawanan dengan huruf yang ingin dibuat besar.</li><li>Untuk latihan mengetik cepat, sepuluh menit setiap hari lebih baik daripada satu jam seminggu sekali.</li><li>Utamakan ketepatan dulu. Kecepatan akan datang setelah gerakan jari terasa biasa.</li></ul><p><a class="inline-link" href="{course}">Kursus mengetik {lessons} pelajaran</a> menuntunmu langkah demi langkah di papan ketikmu sendiri, dari baris tengah sampai tanda baca. Penjelasan lengkapnya, dengan latihan untuk imbuhan, <em>ny</em>, dan kata ulang, ada di panduan <a class="inline-link" href="/id/cara-mengetik-cepat/">cara mengetik cepat</a>.</p>'
    }
  ],
  faqTitle: 'Pertanyaan umum',
  faq: [
    ['Apa itu KPM?', 'KPM adalah kata per menit, dalam bahasa Inggris WPM. Satu kata dihitung lima karakter, termasuk spasi, sehingga hasilnya tidak bergantung pada panjang kata di dalam teks.'],
    ['Apakah KPM sama dengan WPM?', 'Ya. KPM hanya nama bahasa Indonesia untuk WPM, dan cara menghitungnya sama: karakter yang diketik dibagi lima, per menit. Jadi hasil tes kata per menit di sini bisa dibandingkan dengan tes WPM berbahasa Inggris yang memakai aturan lima karakter yang sama.'],
    ['Apakah ini typing test Indonesia?', 'Ya. Teksnya ditulis dalam bahasa Indonesia, lengkap dengan imbuhan, kata ulang, huruf besar, dan tanda baca, dan kecepatannya ditampilkan dalam KPM, bukan WPM.'],
    ['Durasi mana yang sebaiknya dipilih?', 'Satu menit menunjukkan kecepatan puncak, sedangkan lima atau sepuluh menit menunjukkan daya tahan. Untuk membandingkan dengan hasil sebelumnya, selalu pilih durasi yang sama.'],
    ['Apakah bisa dipakai di laptop?', 'Bisa. Tes ini memakai tata letak QWERTY yang sama dengan hampir semua laptop. Di ponsel atau tablet, pakai papan ketik fisik supaya hasilnya berarti.'],
    ['Apakah ini bisa dipakai sebagai tes keyboard?', 'Tidak untuk mencari tombol yang rusak, karena ini tes kecepatan mengetik. Namun sebelum mulai, pastikan tata letak papan ketikmu QWERTY dan semua tombol berfungsi, supaya hasilnya tidak terganggu.'],
    ['Apakah hasil saya disimpan?', 'Hanya di browser pada perangkat ini. Tidak ada akun dan tidak perlu daftar. Kalau data browser dihapus, riwayatnya juga hilang.'],
    ['Apakah tes ini cocok untuk anak-anak?', 'Bisa, asal dicoba bersama orang dewasa. Tidak ada mode khusus anak dan teksnya ditulis untuk orang dewasa, jadi pilih tombol 30 atau 60 detik dan puji ketepatannya, bukan angka KPM-nya.']
  ],
  cta: { eyebrow: 'Ingin mengetik lebih cepat?', title: 'Belajar mengetik 10 jari', text: '{lessons} pelajaran, semuanya di papan ketikmu sendiri, mulai dari baris tengah.', button: 'Lihat kursus' }
};
