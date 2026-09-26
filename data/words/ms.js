/* data/words/ms.js — kho từ tiếng Mã Lai (Bahasa Melayu) cho khoá /ms/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 116 (Malay, Latin) — y hệt QWERTY Mỹ từng phím. Thứ tự phím vì thế là:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ' · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · cột ngoài · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * TIẾNG MÃ LAI KHÔNG DẤU. Chỉ a–z, không phím chết, không chữ riêng — nên thứ duy nhất chặn một
 * từ là chữ cái của nó. Cái khó thật nằm ở chỗ khác: `n`, `m` và `ng` có mặt trong gần nửa kho
 * từ, mà trên QWERTY chúng tới muộn (u2-l03, u2-l04). Nên Unit 1 dựa vào những từ như `ada`,
 * `saja`, `kakak`, `sudah`, `guru`, `jari` — ngắn, thật, và không cần phím nào chưa dạy.
 * `q` và `x` gần như không có trong từ Mã Lai thường ngày; bài của chúng sống bằng luyện ngón.
 *
 * CHÍNH TẢ MALAYSIA, không phải Indonesia: kerana (không karena), wang (không uang), percuma,
 * boleh, kereta, kasut, teksi, universiti, televisyen.
 *
 * NGUỒN GỐC. Từ vựng phổ thông, dựng độc lập và soát tay. Không lấy từ nội dung bài của site dạy
 * gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-z]+$/. Không chữ hoa, không gạch nối (nên không có `kanak-kanak`, `terima kasih`
 *     chỉ vào qua câu).
 *   - Không danh từ riêng ngoài `names`; không từ cổ; không gì bạo lực, y khoa, chính trị, tôn
 *     giáo hay khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.ms = {
  lang: 'ms',

  alphabet: 'abcdefghijklmnopqrstuvwxyz',

  words: [
    // --- a s d f j k l  (u1-l04) --------------------------------------------------------
    'ada', 'dada', 'lada', 'kala', 'jala', 'akal', 'asal', 'sajak', 'salak', 'laksa',
    'fasal', 'jaja', 'alas', 'sasa', 'lasak', 'ajak', 'akad', 'kakak', 'saja', 'salad',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gajah', 'galah', 'sah', 'salah', 'halal', 'lagak', 'dahaga', 'hal', 'hala', 'gagah',
    'kalah', 'sahaja', 'khas', 'akhlak', 'gagal', 'galak', 'hak',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'dia', 'ia', 'lagi', 'kaki', 'adik', 'jika', 'kali', 'gigi', 'sedia', 'sila', 'jelas',
    'gelas', 'kelas', 'lidah', 'helai', 'ikhlas', 'sedih', 'kekal', 'gelak', 'sekali',
    'halia', 'kedai', 'sesi', 'kasih', 'hadiah', 'hasil', 'idea', 'fail', 'sehelai',
    'kesal', 'selesa', 'desa', 'gali', 'jeli', 'lekas', 'sisi', 'kafe', 'lelah', 'segala',
    'kelak', 'selesai', 'saiz', 'isi', 'ahli', 'faedah', 'sedikit', 'kek', 'lif',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'rasa', 'hari', 'lahir', 'fikir', 'air', 'dari', 'kerja', 'keras', 'jarak', 'rusa',
    'guru', 'susu', 'sudah', 'dulu', 'juga', 'kuda', 'udara', 'suara', 'lagu', 'laju',
    'rugi', 'harga', 'segera', 'keluarga', 'sukar', 'gula', 'kuku', 'dagu', 'sejuk',
    'lurus', 'haus', 'kalau', 'harus', 'risau', 'kira', 'sedar', 'daerah', 'ukur', 'usaha',
    'gerai', 'jari', 'dadu', 'gurau', 'ragu', 'hadir', 'kiri', 'kerusi', 'suka', 'saudara',
    'jauh', 'keju', 'sesuai', 'urus', 'kuasa', 'sejarah', 'hijau', 'jadual', 'keluar',
    'dahulu', 'luar', 'lari', 'ular', 'sikit', 'segar', 'garis', 'rehat', 'selalu',
    'sekarang', 'raja', 'uji', 'guna', 'jual', 'kurus', 'duka', 'ekor', 'akhir',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'saya', 'tidak', 'tiga', 'tua', 'tahu', 'kata', 'atau', 'kita', 'satu', 'lihat',
    'hati', 'sayur', 'ayah', 'ayat', 'kayu', 'tujuh', 'tulis', 'duduk', 'tidur', 'ketua',
    'kertas', 'raya', 'kaya', 'setia', 'surat', 'hayat', 'tali', 'tikus', 'tayar', 'fakta',
    'tugas', 'tukar', 'utara', 'tadi', 'ketiga', 'letak', 'sifat', 'sakit', 'jahat',
    'ikut', 'kereta', 'kilat', 'latih', 'teh', 'tetikus', 'ketika', 'setuju', 'tarikh',
    'itu', 'situ', 'tiada', 'terus', 'tertib', 'giat', 'rakyat', 'kuat', 'lutut', 'syarat',
    'syukur', 'hilang', 'tutup', 'alat', 'kait',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'roti', 'awal', 'dewasa', 'wajah', 'waktu', 'kawal', 'sewa', 'sawah', 'roda', 'otak',
    'kota', 'tolak', 'hotel', 'radio', 'foto', 'kotak', 'kolej', 'wira', 'wau', 'lori',
    'soal', 'tawar', 'awak', 'doktor', 'otot', 'sosial', 'kilo', 'stor', 'wilayah', 'gol',
    'logo', 'lewat', 'awas', 'esok', 'dua', 'tolakan', 'kawat', 'tokoh',
    'hos', 'kosa', 'jiwa',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'dan', 'dengan', 'yang', 'untuk', 'akan', 'orang', 'cari', 'cuaca', 'cerita', 'cantik',
    'kecil', 'cara', 'cawan', 'cuci', 'cahaya', 'nasi', 'anak', 'angin', 'kuning', 'dengar',
    'tangan', 'hujan', 'jalan', 'jangan', 'senang', 'dinding', 'tengah', 'tahun', 'sungai',
    'siang', 'kucing', 'cuti', 'cili', 'cincin', 'coklat', 'cerah', 'negara', 'negeri',
    'nanti', 'nenek', 'ringan', 'lengan', 'kanan', 'sendiri', 'setengah', 'tangga', 'kunci',
    'contoh', 'hanya', 'sayang', 'kawan', 'tanah', 'tenang', 'tinggi', 'lain', 'ingat',
    'ingin', 'yakin', 'kening', 'kain', 'jarang', 'siaran', 'senarai', 'latihan', 'soalan',
    'wang', 'kawasan', 'goreng', 'gunung', 'hutan', 'hiasan', 'hidangan', 'tolong', 'kosong',
    'tengok', 'keadaan', 'salin', 'ini', 'sini', 'sana', 'kerana', 'jiran', 'cukup',
    'kacang', 'ketinggian', 'tinggal', 'kenal', 'lancar', 'cawangan', 'cekal', 'cucu',
    'cuka', 'cadangan', 'cergas', 'lukisan', 'tulisan', 'nilai', 'rancangan',
    'selatan', 'tenaga', 'ceria', 'sayangnya', 'sekolah', 'kedua', 'naik', 'turun', 'kena',
    'nyata', 'nyanyi', 'lagunya', 'tangisan', 'cendana', 'catatan', 'kenderaan', 'jenis',
    'sunyi', 'lencana', 'hendak', 'ikan', 'itik', 'selain',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'makan', 'minum', 'rumah', 'hitam', 'malam', 'masa', 'mata', 'muka', 'kami', 'kamu',
    'mereka', 'mahu', 'mana', 'semua', 'sama', 'macam', 'mudah', 'musim', 'minggu', 'meja',
    'masalah', 'mula', 'maklumat', 'lama', 'nama', 'dalam', 'enam', 'lima', 'ramai', 'masak',
    'mandi', 'video', 'van', 'visa', 'vitamin', 'universiti', 'novel', 'versi', 'televisyen',
    'cermin', 'kemas', 'semak', 'manis', 'masin', 'garam', 'malas', 'mesin', 'mesyuarat',
    'maaf', 'mesti', 'semalam', 'minit', 'jam', 'menulis', 'senyum', 'tanam', 'umur',
    'umum', 'ramah', 'cermat', 'mangga', 'manusia', 'muncul', 'terima', 'masuk', 'kemudian',
    'semasa', 'mungkin', 'memang', 'mahal', 'murah', 'merah', 'muda',
    'selamat', 'minat', 'maksud', 'mesra', 'cemerlang', 'musang', 'kumpulan', 'makanan',
    'minuman', 'mainan', 'main', 'rakaman', 'kemahiran', 'mengira', 'menunggu', 'meminta',
    'melihat', 'mencari', 'menjadi', 'mendengar', 'tamat', 'teman', 'iklim',
    'muzium', 'vokal', 'variasi', 'visual', 'servis', 'unit', 'lemah', 'mentah',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'pagi', 'pintu', 'apa', 'siapa', 'pergi', 'pula', 'pun', 'pasar', 'pulau', 'padi',
    'pandai', 'pantai', 'panas', 'perlu', 'penting', 'pelajar', 'pelajaran', 'papan',
    'kapal', 'hidup', 'tempat', 'empat', 'lapan', 'tetapi', 'sampai', 'dapat', 'cakap',
    'jumpa', 'sapu', 'sepuluh', 'petang', 'pukul', 'pinggan', 'pisau', 'pokok', 'pensel',
    'punya', 'harap', 'lampu', 'mimpi', 'rapat', 'cepat', 'tepat', 'kopi', 'sup', 'lipat',
    'kapur', 'pinjam', 'pilih', 'selepas', 'percuma', 'perkara', 'pertama', 'peta',
    'pakai', 'pakaian', 'payung', 'pendek', 'panjang', 'penuh', 'pusat', 'putih',
    'pasang', 'pesan', 'petik', 'pinggir', 'polis', 'program', 'projek', 'kampung',
    'simpan', 'tampal', 'sapa', 'siap', 'sempat', 'tiap', 'setiap', 'hampir',
    'lompat', 'menaip', 'taip', 'papar', 'paparan', 'pilihan', 'jumpaan', 'petua', 'akuarium',
   

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'boleh', 'baik', 'baru', 'buku', 'bapa', 'banyak', 'bawah', 'belajar', 'besar', 'bulan',
    'bunga', 'bola', 'beli', 'bila', 'bukan', 'bersama', 'sebab', 'sebelum', 'berapa',
    'berjalan', 'bekerja', 'bahasa', 'badan', 'biru', 'bas', 'bantu', 'bandar', 'bangun',
    'basikal', 'baca', 'membaca', 'bijak', 'bumi', 'bintang', 'bukit', 'bilik', 'botol',
    'bagus', 'bersih', 'biasa', 'sembilan', 'jawab', 'lebih', 'habis', 'hebat',
    'nombor', 'tebal', 'sebelah', 'sabar', 'belakang', 'bawa', 'buah', 'burung', 'baju',
    'beras', 'bekas', 'benar', 'berita', 'bijirin', 'bumbung', 'bunyi', 'kabut', 'sebuah',
    'sebarang', 'jambatan', 'kebun', 'lembut', 'ribut', 'rambut', 'tambah', 'timbang',
    'kebanyakan', 'baharu', 'bermain', 'berlari', 'bercakap', 'bertanya', 'buka', 'dibuka',
    'suratkhabar', 'jawapan', 'kabinet', 'teksi', 'kasut',

    // --- + z . , '  (u2-l08) --------------------------------------------------------------
    'zaman', 'zon', 'muzik', 'zaitun', 'zirafah', 'izin', 'lazat', 'ziarah', 'zink', 'zoo',
    'zip', 'zebra', 'azam', 'lazim', 'zat', 'zamrud', 'ozon', 'kuiz', 'zapin'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ. */
  names: [
    'aminah', 'siti', 'nurul', 'aisyah', 'farah', 'lina', 'mei', 'priya',
    'ahmad', 'ali', 'hafiz', 'faizal', 'kumar', 'hassan', 'zainal', 'ravi',
    'melaka', 'ipoh', 'johor', 'kedah', 'sabah', 'sarawak', 'perak', 'kuantan'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Mỗi câu phải đọc như tiếng Mã Lai
     bình thường, không phải như một bài tập ngữ âm. Không danh từ riêng: generator chỉ viết hoa
     được chữ đầu câu. */
  sentences: [
    'saya suka minum teh pada waktu pagi',
    'adik saya membaca buku di dalam bilik',
    'ibu memasak nasi goreng untuk kami',
    'kami berjalan ke pasar setiap hujung minggu',
    'kucing itu tidur di atas kerusi',
    'hujan turun sejak petang tadi',
    'bapa bekerja di sebuah kedai di bandar',
    'rumah kami dekat dengan sungai',
    'dia menulis surat kepada kawan lamanya',
    'buku yang saya cari ada di atas meja',
    'kereta itu berwarna merah dan putih',
    'cuaca hari ini sangat panas',
    'budak itu bermain bola di padang',
    'saya belajar menaip tanpa melihat papan kekunci',
    'nenek menanam sayur di belakang rumah',
    'kami makan malam bersama keluarga',
    'pintu kedai itu dibuka pada pukul lapan',
    'air sungai itu jernih dan sejuk',
    'setiap orang ada cara belajar sendiri',
    'masa berlalu dengan cepat apabila kita sibuk',
    'saya menunggu bas di hadapan sekolah'
  ]
};
