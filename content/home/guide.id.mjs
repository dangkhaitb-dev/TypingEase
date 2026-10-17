/* content/home/guide.id.mjs — hướng dẫn dưới trang chủ /id/ (tooling/lib/home-seo-content.mjs).
 * Xưng "Anda" như phần còn lại của trang chủ /id/. Sự thật đối chiếu: content/data/curriculum.id.js +
 * lessons/id, bố cục 115 = QWERTY Mỹ (b r t = ngón trỏ trái, n y = ngón trỏ phải), player.js (sao 98/94/80). */
export default {
  guide: {
    label: 'Panduan latihan mengetik',
    title: 'Pilih yang perlu dilatih hari ini: letak tombol, kata utuh, atau tes.',
    topics: ['Mulai dari mana', 'Papan ketik', 'Satu sesi latihan', 'Membaca hasil', 'Pendapat saya']
  },
  sections: [
    ['Dari mana latihan mengetik sebaiknya dimulai?', [
      ['Masih mencari huruf: mulai dari kursus', 'Unit pertama <a href="/id/pelajaran/">kursus mengetik 10 jari</a> dimulai dari f, j, dan spasi, lalu menambah dua atau tiga huruf per pelajaran. Kata bahasa Indonesia sungguhan cepat muncul: begitu a masuk, Anda sudah mengetik <em>salak</em>, <em>kakak</em>, dan <em>lada</em> hanya dengan baris dasar. Huruf kapital dan tanda baca baru muncul di Unit 3.'],
      ['Sudah mengetik setiap hari: tes dulu', '<a href="/id/tes-mengetik/">Tes mengetik</a> memakai kalimat dengan huruf kapital dan tanda baca, jadi hasilnya dekat dengan cara Anda menulis pesan atau laporan. Pakai hasilnya untuk memilih unit, bukan sebagai nilai rapor: satu tes, lalu satu pelajaran yang sesuai, lebih berguna daripada lima tes berturut-turut.'],
      ['Butuh selingan: main game', '<a href="/id/game-mengetik/">Game mengetik</a> memakai kosakata yang sama dengan kursus, semuanya huruf kecil tanpa tanda baca. Cocok untuk memeriksa apakah huruf yang baru dipelajari tetap bisa dijangkau jari saat dikejar waktu, tetapi game tidak mengajarkan jari mana untuk tombol mana.']
    ]],
    ['Sebelum mengetik 10 jari, cocokkan papan ketik dengan layar', [
      ['Tata letaknya sama dengan QWERTY Amerika', 'Kursus memakai tata letak bernama Indonesian (Latin), yang tombol demi tombol sama dengan QWERTY Amerika. Sebelum pelajaran pertama, ketik beberapa huruf dan tanda baca, lalu bandingkan dengan papan ketik di layar. Kalau tanda kutip dan @ tertukar, sistem Anda kemungkinan memakai tata letak UK; perbaiki pengaturannya dulu daripada menghafal posisi yang salah. Bahasa Indonesia tidak memerlukan bahasa input atau tata letak khusus, jadi pilihan "US" di sistem sudah cukup.'],
      ['Shift untuk nama, Caps Lock untuk papan pengumuman', 'Nama orang, kota, dan awal kalimat cukup dengan Shift. Caps Lock baru dipakai untuk deretan huruf kapital seperti <em>BUKA SENIN SAMPAI JUMAT</em>, dan di kursus pun tombol ini baru diajarkan paling akhir di Unit 3. Pastikan Caps Lock mati sebelum mulai; halaman pelajaran memang menampilkan peringatan kecil saat Caps Lock menyala, tetapi huruf kapital yang tidak diminta tetap dihitung sebagai kesalahan.']
    ]],
    ['Satu sesi latihan mengetik 10 jari yang berguna', [
      ['Pilih satu imbuhan, bukan satu angka target', 'Imbuhan muncul di hampir setiap kalimat bahasa Indonesia, jadi gerakannya layak dilatih tersendiri. Awalan <em>ber-</em> dan <em>ter-</em>, misalnya, meminta telunjuk kiri menekan b atau t, jari tengah menekan e, lalu telunjuk kiri lagi untuk r. Ketik <em>bersama</em>, <em>tertulis</em>, <em>bersih</em> pelan-pelan sampai lompatan itu tidak membuat Anda ragu.'],
      ['Pindah ke kalimat utuh', 'Setelah satu layar latihan, buka unit kalimat yang sudah terbuka dan ketik satu layar penuh tanpa melihat tangan. Perhatikan apakah gerakan tadi masih rapi ketika muncul di tengah kata panjang seperti <em>ditandatangani</em>, saat Anda juga harus membaca beberapa kata ke depan.'],
      ['Tutup dengan dua kalimat tanpa singkatan', 'Tulis dua kalimat sendiri, misalnya pesan untuk rekan kerja, tanpa <em>yg</em>, <em>dgn</em>, atau <em>tdk</em>. Kebiasaan menyingkat dari chat membuat jari jarang melatih kata utuh, padahal kata utuhlah yang Anda perlukan untuk surat, laporan, atau tugas sekolah.']
    ]],
    ['Baca hasil kecepatan mengetik sebelum memilih pelajaran berikutnya', [
      ['Bintang, ketepatan, dan tombol paling lambat', 'Setiap layar pelajaran ditutup dengan ketepatan dan bintang: tiga bintang di atas 98%, dua di atas 94%, satu kalau melewati batas unit (80%). Di bawah batas itu, layar disarankan untuk diulang. Kadang ditampilkan juga tombol paling lambat Anda. Catat tombol itu: itulah bahan latihan berikutnya, bukan angka KPM. Kalau tujuan Anda latihan mengetik cepat, saran ini mungkin terdengar terlalu pelan, padahal tombol yang membuat ragu itulah yang menahan kecepatan.'],
      ['Salah huruf atau salah ejaan?', 'Kalau kesalahan menumpuk di huruf yang sama, kembali ke pelajaran huruf itu di Unit 1. Kalau yang salah justru <em>di</em> yang seharusnya terpisah atau menempel, atau ng yang tertukar dengan ny, itu urusan Unit 10 "Presisi Ejaan", bukan urusan jari. Riwayat pelajaran Anda ada di <a href="/id/kemajuan/">halaman kemajuan</a>, tersimpan hanya di browser ini.']
    ]],
    ['Pendapat saya tentang belajar mengetik dalam bahasa Indonesia', [
      ['Kata utuh lebih penting daripada kecepatan chat', 'Menurut saya, kebiasaan menyingkat di chat membuat banyak orang merasa sudah cepat mengetik, padahal yang terlatih hanya beberapa pola pendek. Begitu harus menulis surat lamaran atau laporan dengan ejaan baku, kata berimbuhan panjang seperti <em>pertanggungjawaban</em> langsung memperlihatkan jari yang belum tahu jalannya. Karena itu kursus ini memakai kalimat lengkap sejak Unit 5, bukan daftar singkatan atau kata acak.'],
      ['Untuk anak: kata pendek dulu, angka KPM belakangan', 'Untuk anak yang baru mulai mengerjakan tugas di komputer, saya lebih suka kata pendek dari baris dasar daripada mengejar KPM. Orang dewasa bisa membantu memastikan Caps Lock mati dan tata letaknya benar, lalu membiarkan anak mengetik namanya sendiri dan satu kalimat tentang harinya. Ketepatan dan kebiasaan tidak menunduk lebih berharga daripada angka di layar.']
    ]]
  ]
};
