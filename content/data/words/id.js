/* data/words/id.js — kho từ tiếng Indonesia cho khoá /id/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 115 (Indonesian (Latin), trùng từng phím với QWERTY Mỹ). Thứ tự phím vì thế là:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , / · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - ' · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc mảng
 * `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * TIẾNG INDONESIA KHÔNG DẤU. Bộ chữ là a-z trơn, không phím chết nào. Và nó giàu nguyên âm `a`:
 * chỉ với a s d f j k l đã viết được ada, saja, kakak, salak — nên bài ôn tập đầu tiên có từ thật
 * để ôn, không phải chuỗi luyện ngón.
 *
 * TỪ LÁY viết bằng gạch nối (anak-anak, kupu-kupu) nên KHÔNG vào kho: gạch nối dạy muộn, và một
 * nửa từ láy thì không phải từ. Câu mẫu cũng tránh chúng.
 *
 * NGUỒN GỐC. Từ vựng phổ thông, dựng độc lập từ vốn từ thông dụng và soát tay. Không lấy từ nội
 * dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-z]+$/. Không chữ hoa, không gạch nối.
 *   - Chính tả chuẩn (EYD/KBBI). Không tiếng lóng, không viết tắt kiểu chat.
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị, tôn giáo hay khó
 *     chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.id = {
  lang: 'id',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được.
  alphabet: 'abcdefghijklmnopqrstuvwxyz',

  words: [
    // --- a s d f j k l  (u1-l04) --------------------------------------------------------
    // Điểm đầu tiên có từ thật. Chỉ một nguyên âm, nhưng tiếng Indonesia dựng được khá nhiều từ.
    'ada', 'saja', 'lada', 'salak', 'jaksa', 'kala', 'dada', 'asal', 'kasa', 'jala',
    'adas', 'alas', 'lafal', 'kas', 'las', 'jas', 'kakak', 'sajak', 'fasal', 'laksa',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gajah', 'halal', 'salah', 'gagal', 'hal', 'gala', 'galak', 'gas', 'sah', 'sahaja',
    'dahaga', 'adakah', 'lagak', 'kalah', 'gagah', 'galah', 'haluan',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    // Hai nguyên âm này mở ra phần lớn từ chức năng: di, ia, dia, lagi, jadi, sekali.
    'di', 'ia', 'dia', 'ide', 'kaki', 'kali', 'lagi', 'jadi', 'sekali', 'sedih', 'gigi',
    'fisik', 'kasih', 'kekasih', 'fiksi', 'lelah', 'segi', 'desa', 'jelas', 'lidah',
    'kelas', 'kakek', 'sedia', 'saksi', 'adik', 'ikal', 'dahi', 'gali', 'gadis', 'sisi',
    'isi', 'helai', 'kelak', 'kilas', 'gelas', 'geli', 'gigih', 'jahe', 'kedai',
    'keladi', 'kisah', 'sejak', 'fiskal', 'dasi', 'ikhlas', 'khas', 'kedelai', 'seleksi',
    'ideal', 'hadiah', 'sehelai', 'legal', 'gegas', 'lekas', 'kilah',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'sudah', 'dari', 'juga', 'harus', 'hari', 'air', 'rasa', 'suka', 'kurus', 'rusa',
    'susu', 'suara', 'lurus', 'keras', 'udara', 'ular', 'kuda', 'gula', 'jeruk', 'jari',
    'segar', 'raja', 'kira', 'lagu', 'ruas', 'gurih', 'garis', 'sehari', 'rugi', 'keju',
    'guru', 'dulu', 'selalu', 'seluruh', 'gerak', 'kasur', 'kursi', 'lusa', 'jujur',
    'keluarga', 'lari', 'diri', 'sisir', 'jauh', 'luas', 'salju', 'hadir', 'gelar',
    'khusus', 'usaha', 'kerja', 'sekolah', 'dahulu', 'jalur', 'gurau', 'risau', 'ukur',
    'akhir', 'kuasa', 'rahasia', 'sejarah', 'urus', 'aula', 'suku', 'kesal', 'agar',
    'raksasa', 'sukar', 'kaldu', 'sadar', 'ragu', 'saudara', 'kiri',
    'segera', 'ekstra', 'dasar', 'redup', 'selisih',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'itu', 'kita', 'saya', 'kata', 'atau', 'tidak', 'tahu', 'tua', 'tugas', 'tas', 'tali',
    'tiga', 'tulis', 'tadi', 'ayah', 'kayu', 'hati', 'satu', 'tujuh', 'surat', 'sudut',
    'laut', 'rakyat', 'usia', 'setia', 'titik', 'kaya', 'raya', 'lihat', 'sehat', 'atas',
    'takut', 'terus', 'tegas', 'kuat', 'kereta', 'kartu', 'ketua', 'tersedia', 'setuju',
    'gitar', 'tikus', 'tulus', 'tekad', 'teras', 'syarat', 'syukur', 'kalau', 'sayur',
    'tiket', 'tiruan', 'kritik', 'tertulis', 'tertarik', 'sastra', 'tetesan',
    'hasrat', 'sifat', 'serta', 'lekat', 'dekat', 'sedikit', 'rajut', 'aturan',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'kota', 'toko', 'roti', 'otak', 'wajah', 'waktu', 'warga', 'wajar', 'dewasa', 'awal',
    'awas', 'sore', 'radio', 'foto', 'kokoh', 'tokoh', 'roda', 'lokasi', 'tawa', 'kawat',
    'sawah', 'jiwa', 'dua', 'wilayah', 'waduk', 'wortel', 'wisata', 'wujud', 'kawah',
    'sewa', 'rawat', 'lawak', 'hawa', 'otot', 'fokus', 'hotel', 'soto', 'sosis', 'kodok',
    'solusi', 'lowong', 'sosial', 'olahraga', 'gelora', 'kuota', 'waras', 'awet', 'kawasan',
    'loket', 'dodol', 'tolak', 'tahukah', 'lewat',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'dan', 'ini', 'akan', 'dengan', 'tanah', 'anak', 'untuk', 'ingin', 'senang', 'orang',
    'sekarang', 'jalan', 'hujan', 'tangan', 'kanan', 'angin', 'nasi', 'nanti', 'naik',
    'dingin', 'ruang', 'hilang', 'datang', 'sayang', 'tetangga', 'lain', 'kain', 'tanya',
    'jangan', 'dunia', 'hanya', 'sendiri', 'santai', 'indah', 'kencang', 'celana',
    'cahaya', 'cincin', 'kacang', 'kucing', 'cicak', 'cokelat', 'nyanyi', 'nyata',
    'sangat', 'tenang', 'tengah', 'tinggi', 'turun', 'hutan', 'gunung', 'sungai', 'daun',
    'kuning', 'kunci', 'kering', 'senja', 'tahun', 'kenal', 'tahan', 'ringan', 'lancar',
    'sinar', 'jernih', 'rencana', 'riang', 'danau', 'cara', 'cari', 'cinta', 'cuci',
    'cerita', 'cocok', 'kecil', 'cucu', 'kaca', 'cuaca', 'celah', 'ruangan', 'sendok',
    'kantor', 'hijau', 'gunting', 'cekatan', 'teguran', 'kincir', 'nyaring', 'tiang',
    'tunggu', 'kenangan', 'kertas', 'hitung', 'cantik', 'lincah', 'dengar', 'rendah',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'makan', 'minum', 'malam', 'mata', 'mau', 'masuk', 'memang', 'mereka', 'mulai',
    'mudah', 'musim', 'meja', 'lima', 'rumah', 'kamu', 'kami', 'sama', 'semua', 'masak',
    'minggu', 'mandi', 'muka', 'muda', 'mungkin', 'mana', 'macam', 'masih', 'maksud',
    'menit', 'meter', 'merah', 'mesin', 'dalam', 'hitam', 'hemat', 'jam', 'jamur',
    'kamar', 'kemarin', 'lama', 'diam', 'garam', 'nama', 'teman', 'enam', 'tamu', 'umum',
    'umur', 'ramai', 'senyum', 'semangat', 'musik', 'mangga', 'manis', 'motor', 'malas',
    'video', 'vitamin', 'visi', 'versi', 'vokal', 'vas', 'vila', 'variasi', 'aktivitas',
    'universitas', 'kemudian', 'menulis', 'membaca', 'menanam', 'mengetik', 'melihat',
    'makanan', 'minuman', 'mainan', 'semut', 'timur', 'masalah', 'mengapa', 'memakai',
    'nomor', 'mentega', 'madu', 'murid', 'tamat', 'selamat', 'kamus', 'ilmu', 'emas',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'pagi', 'pintu', 'pergi', 'pasar', 'pakai', 'pulang', 'punya', 'pasti', 'penting',
    'perlu', 'pada', 'para', 'apa', 'siapa', 'kapan', 'sampai', 'tempat', 'dapat',
    'empat', 'hidup', 'kapal', 'piring', 'pena', 'pensil', 'pohon', 'pesan', 'pelan',
    'petani', 'peta', 'pilih', 'pikir', 'pipi', 'putih', 'sepatu', 'sapu', 'lampu',
    'api', 'sepeda', 'kopi', 'sapi', 'tepat', 'harap', 'siap', 'atap', 'cepat', 'cukup',
    'tutup', 'mimpi', 'tiap', 'setiap', 'tetapi', 'sepuluh', 'delapan', 'pelajaran',
    'pelajar', 'pekerjaan', 'perempuan', 'papan', 'pukul', 'pantai', 'panas', 'pendek',
    'panjang', 'pintar', 'sepi', 'kapur', 'kupas', 'sampah', 'perahu', 'pisang', 'pesta',
    'paman', 'permainan', 'sopan', 'dapur', 'sayap', 'tetap', 'lapar', 'hampir', 'upacara',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'baru', 'baik', 'besar', 'buku', 'bisa', 'bulan', 'bunga', 'bola', 'bawah', 'baju',
    'bahasa', 'berapa', 'belum', 'bersama', 'biru', 'bumi', 'bus', 'burung', 'badan',
    'bagus', 'bantu', 'bapak', 'banyak', 'beli', 'berat', 'bersih', 'biasa', 'bicara',
    'bibir', 'bintang', 'bawa', 'sabun', 'sebab', 'sebelum', 'tabel', 'hebat', 'jawab',
    'jembatan', 'kabar', 'lebih', 'sebentar', 'terbang', 'tubuh', 'sebuah', 'belajar',
    'bekerja', 'berjalan', 'bertemu', 'boleh', 'buah', 'bebas', 'batu', 'bambu', 'bantal',
    'bensin', 'bidang', 'bukit', 'buka', 'cabang', 'kebun', 'ribut', 'sabar', 'tebal',
    'rebus', 'lembut', 'kambing', 'kerbau', 'bekal', 'ember', 'bawang', 'membeli', 'xilofon',

    // --- + z . , /  (u2-l08) ------------------------------------------------------------
    'zaman', 'izin', 'zat', 'zebra', 'zona', 'zamrud', 'lezat', 'ozon', 'asas'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ. */
  names: [
    'budi', 'siti', 'dewi', 'rina', 'andi', 'agus', 'rudi', 'sari', 'ayu', 'eko',
    'putri', 'joko', 'maya', 'bayu', 'lestari', 'hendra', 'fajar', 'nina',
    'jakarta', 'bandung', 'medan', 'bogor', 'surabaya', 'bali'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Không từ láy có gạch nối. */
  sentences: [
    'saya suka minum kopi di pagi hari',
    'adik membaca buku di ruang tamu',
    'ibu memasak nasi dan sayur untuk makan malam',
    'kami pergi ke pasar setiap hari minggu',
    'kucing itu tidur di atas meja kayu',
    'hari ini cuaca cerah dan angin terasa sejuk',
    'ayah bekerja di kantor dekat stasiun',
    'para murid bermain bola di halaman sekolah',
    'kereta datang tepat pukul tujuh pagi',
    'dia menulis surat untuk teman lamanya',
    'jendela kamar saya menghadap ke jalan',
    'kita perlu membeli buah dan air minum',
    'saya belajar mengetik tanpa melihat papan ketik',
    'hujan turun sejak sore sampai malam',
    'rumah baru itu punya pintu berwarna hijau',
    'setiap orang punya irama sendiri',
    'kakak menanam bunga di depan rumah',
    'perpustakaan kota buka sampai jam delapan',
    'kami berjalan kaki ke taman setelah makan',
    'waktu terasa cepat kalau kita bekerja dengan tenang',
    'nenek bercerita tentang desa tempat ia tumbuh'
  ]
};
