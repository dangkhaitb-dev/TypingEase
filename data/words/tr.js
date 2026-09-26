/* data/words/tr.js — kho từ tiếng Thổ Nhĩ Kỳ cho khoá /tr/ (Türkçe Q) và /tr/f/ (Türkçe F).
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, check-words.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC MẶC ĐỊNH LÀ 204 (Turkish Q). Thứ tự phím suy từ ô phím vật lý, nên nó ra thế này:
 *   f j · d k · s l · a ş · [ôn] · g h · e ı · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z ç ö i · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · . * - ğ ü , · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * i CÓ CHẤM TỚI MUỘN TRÊN Q. Trên Türkçe Q, ô KeyI in ra ı (không chấm), còn i có chấm nằm ở ô
 * Quote — bên phải ş, ngoài bản kế hoạch hàng cơ sở — nên nó chỉ mở ra ở u2-l08. Trước mốc đó
 * kho chỉ dùng được những từ không có i: từ nguyên âm sau (a ı o u) và từ có e. Đó là lý do nửa
 * đầu danh sách toàn `kara`, `yol`, `kuşlar`, `sokak`. ğ và ü thì ở cột ngoài (BracketLeft,
 * BracketRight), dạy ở u3-l02 — nên `güzel`, `değil`, `bugün` chỉ xuất hiện ở unit 3.
 *
 * HỌ F (bố cục 205) xếp chữ theo tần suất tiếng Thổ: hàng cơ sở là u i e a ü t k m l y ş, nên
 * i, e, a, u, ü có ngay unit 1 còn s chỉ tới ở u2-l04 và ş ở u2-l08. Cùng một kho phục vụ cả
 * hai: `typeableWith` tự chọn từ nào gõ được ở từng mốc của từng bố cục.
 *
 * VIẾT HOA. Chữ hoa của i là İ, của ı là I. `words` và `names` viết thường hết; câu cũng viết
 * thường, và generator viết hoa chữ đầu bằng toUpperCase() — hàm đó biến i thành I, sai với
 * tiếng Thổ. Nên KHÔNG câu nào và KHÔNG tên nào bắt đầu bằng i hay ı (không có İzmir, İstanbul,
 * İbrahim ở đây). Ai thêm vào thì giữ đúng luật này.
 *
 * NGUỒN GỐC. Từ vựng thông dụng, dựng độc lập từ kiến thức ngôn ngữ, xếp theo mốc phím ở trên
 * rồi soát tay. Không lấy từ nội dung bài của site dạy gõ nào — xem DECISIONS.md.
 *
 * LUẬT NHÀ:
 *   - Chỉ chữ trong `alphabet`. Không chữ hoa, không gạch nối, không dấu nháy.
 *   - Không â î û: dấu mũ trên Türkçe Q là phím chết ở tầng Shift, ngoài bản kế hoạch.
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị hay tôn giáo.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.tr = {
  lang: 'tr',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được. 29 chữ của bảng chữ cái Thổ.
  alphabet: 'abcçdefgğhıijklmnoöprsştuüvyz',

  words: [
    // --- a s d f j k l ş  (u1-l04) ----------------------------------------------------
    'a', 'al', 'ad', 'ak', 'as', 'da', 'dal', 'fal', 'kal', 'sal', 'şal', 'saf', 'laf',
    'kas', 'kaş', 'aşk', 'kasa', 'kafa', 'şaka', 'ada', 'kala', 'dalda', 'kasada',
    'kafada', 'salla', 'sakla', 'kalk', 'kalas', 'kalfa', 'şakak', 'adada',

    // --- + g h  (u1-l06) --------------------------------------------------------------
    'hak', 'hal', 'hala', 'halka', 'saha', 'sahada', 'daha', 'şah', 'gaga', 'ahlak',
    'gala', 'hakka', 'halkla',

    // --- + e ı  (u1-l07) --------------------------------------------------------------
    'el', 'ek', 'de', 'ses', 'sel', 'kes', 'eş', 'ele', 'ekle', 'hele', 'şef', 'kek',
    'keşke', 'esas', 'dede', 'kese', 'sade', 'hedef', 'jel', 'gel', 'sesle', 'elle',
    'ışık', 'kış', 'kıl', 'sık', 'sıkı', 'kısa', 'akıl', 'akıllı', 'halı', 'kaşık',
    'kafası', 'saklı', 'dış', 'kılık', 'kalış', 'alış', 'gelecek', 'ıslak',

    // --- + r u  (u1-l08) --------------------------------------------------------------
    'su', 'şu', 'kar', 'dar', 'sarı', 'arı', 'kuş', 'kur', 'er', 'ders', 'fark', 'far',
    'harf', 'kurs', 'kuru', 'kulak', 'uslu', 'kural', 'ruh', 'dua', 'duş', 'duru',
    'durak', 'kara', 'arka', 'aralık', 'kırk', 'sırf', 'sıra', 'sırada', 'kırsal',
    'ruhsal', 'kere', 'kader', 'sera', 'ferah', 'garaj', 'sular', 'kurallar', 'dersler',
    'kardeş', 'karar', 'sakal', 'kuşlar', 'harfler', 'kulaklar', 'hurda', 'kase',
    'duruş', 'kuruş', 'erkek', 'sesler', 'eller', 'kalkar', 'sarar', 'kurar', 'arar',
    'durur', 'kalır', 'alır', 'akar', 'dere', 'dereler', 'şeker', 'fare', 'kaşar',
    'ağır', 'uğraş', 'sarf', 'derse', 'haklar', 'dışarı', 'hurdalar', 'kuraklık',

    // --- + t y  (u2-l01) --------------------------------------------------------------
    'ya', 'yaş', 'yat', 'ay', 'at', 'et', 'tat', 'tatlı', 'tur', 'yer', 'ateş', 'tel',
    'tek', 'taş', 'kat', 'sat', 'hat', 'tuş', 'tuşlar', 'hayat', 'dert', 'kart', 'sert',
    'yurt', 'tuhaf', 'kaya', 'yay', 'sayı', 'kayıt', 'hayır', 'yeter', 'tarla', 'saat',
    'fakat', 'yastık', 'kayık', 'tarak', 'yatak', 'yaka', 'ayrı', 'artık', 'yarı',
    'yarar', 'yarış', 'kutu', 'turta', 'sayfa', 'saygı', 'yargı', 'hasta', 'teras',
    'ayak', 'tuşları', 'katlar', 'taşlar', 'hayatta', 'tatlılar', 'yataklar', 'uygar',
    'kutular', 'saatler', 'sayılar', 'yarışlar', 'kayak', 'dışa', 'yıl',
    'yıllar', 'tuşa', 'taraf', 'taraflar', 'yakalar', 'sağ',

    // --- + o w  (u2-l02) --------------------------------------------------------------
    'o', 'ot', 'ok', 'oda', 'okul', 'kol', 'yol', 'sol', 'dost', 'sokak', 'soru', 'sor',
    'otel', 'orta', 'koku', 'koşu', 'korku', 'koltuk', 'otur', 'hoş', 'sofra', 'kolay',
    'sokaklar', 'olur', 'olay', 'dolu', 'dolar', 'doktor', 'yok', 'tost', 'orada',
    'otoyol', 'sorular', 'yollar', 'dostlar', 'odalar', 'kollar', 'koyu', 'koy', 'oy',
    'oylar', 'şort', 'ortak', 'otlak', 'sorgu', 'oturur', 'yorgun', 'soda', 'okullar',
    'otlar', 'okur', 'sorar', 'olsa', 'odada', 'okulda', 'yolda', 'soldan',

    // --- + c n  (u2-l03) --------------------------------------------------------------
    'ne', 'ben', 'sen', 'on', 'can', 'an', 'ana', 'anne', 'yan', 'kan', 'nasıl',
    'ancak', 'cadde', 'cesur', 'sonra', 'unut', 'onlar', 'yakın', 'kadın', 'nane',
    'kent', 'yarın', 'koca', 'hoca', 'ceket', 'acele', 'acı', 'aynı', 'canlı', 'cesaret',
    'kanal', 'kanat', 'kanun', 'renk', 'neden', 'nerede', 'nereye', 'yanında', 'sonunda',
    'onun', 'ekran', 'anahtar', 'fırın', 'dans', 'yangın', 'tencere', 'ayna', 'tane',
    'onay', 'yanlış', 'sınıf', 'sınır', 'yanıt', 'konu', 'konuş', 'konuk', 'kenar',
    'dokun', 'kalın', 'tanık', 'yeterli', 'sonuna', 'oyun', 'oyuncak', 'sorun', 'erken',
    'sıcak', 'yolcu', 'ekranlar', 'renkler', 'oyunlar', 'kadınlar', 
    'nokta', 'noktalar', 'kentler', 'ulusal', 'ocak', 'insan', 'canım',

    // --- + m v  (u2-l04) --------------------------------------------------------------
    'ev', 'var', 'masa', 'kalem', 'mum', 'ama', 'amca', 'hava', 'kavun', 'havlu', 'dava',
    'tavan', 'yavaş', 'orman', 'adam', 'akşam', 'mutlu', 'mutfak', 'mal', 'mesafe',
    'merak', 'mesaj', 'metro', 'moda', 'motor', 'emek', 'ekmek', 'yemek', 'duvar',
    'davet', 'vasat', 'vardı', 'varsa', 'yumurta', 'yumuşak', 'yorum', 'maksat', 'mart',
    'mayıs', 'kasım', 'mantar', 'makas', 'mahalle', 'memur', 'marul', 'avlu', 'davul',
    'manav', 'soyadı', 'yavru', 'tava', 'mantık', 'sevda', 'sevmek', 'seven', 'seyahat',
    'hemen', 'numara', 'kamera', 'sanat', 'hafta', 'haftalar', 'mesela', 'kalemler',
    'masalar', 'masal', 'masallar', 'yemekler', 'evler', 'evet', 'mevcut', 'devam',
    'klavye', 'armut', 'akşamlar', 'moral', 'vatan', 'meyve', 'evde', 'evden',
    'masada', 'klavyede', 'yavaşça', 'tamam', 'ekmekler', 'damla', 'damlalar',
    'kavramak', 'sevgi', 'yumak', 'mont', 'maç', 'kum', 'kumsal', 'menü', 'mermer',

    // --- + q p  (u2-l06) --------------------------------------------------------------
    'para', 'park', 'pek', 'pul', 'kapı', 'kapak', 'kapan', 'top', 'toplam', 'toprak',
    'yaprak', 'yap', 'yapmak', 'yapı', 'hesap', 'sepet', 'pencere', 'posta', 'portakal',
    'patates', 'pasta', 'perde', 'paket', 'plan', 'program', 'problem', 'şapka', 'kopya',
    'pamuk', 'kupa', 'kapalı', 'kapat', 'yapraklar', 'kaplan', 'parmak', 'parmaklar',
    'yapay', 'hep', 'ampul', 'tepe', 'pırasa', 'kapsam', 'kamp', 'palto', 'puan',
    'pusula', 'pay', 'paylaş', 'parlak', 'hesaplar', 'paketler', 'planlar', 'yaptı',
    'yapar', 'tepsi', 'toplantı', 'pembe', 'pratik', 'kaptan',

    // --- + b x  (u2-l07) --------------------------------------------------------------
    'bu', 'baba', 'bal', 'bak', 'baş', 'balık', 'bardak', 'bahar', 'bayram', 'bulut',
    'burun', 'bana', 'banka', 'bebek', 'beş', 'boş', 'boy', 'boya', 'bulmaca',
    'bunlar', 'burada', 'sabah', 'kabul', 'araba', 'dolap', 'sebep', 'tabak', 'tabela',
    'tablo', 'bayrak', 'bakkal', 'balkon', 'bardaklar', 'kablo', 'kabak', 'sabun', 'sabır',
    'baston', 'bulmak', 'bulutlar', 'bekle', 'bey', 'boru', 'boyut', 'rahat', 
    'bakar', 'bakmadan', 'bavul', 'bahçe', 'balon', 'bardakta', 'sabahlar', 'bulvar',
    'buharlı', 'bora', 'bunu', 'buna', 'onu', 'bayat', 'barış', 'abla', 'arabalar',

    // --- + z ç ö i  (u2-l08) — i có chấm mở ra từ đây ---------------------------------
    'bir', 'iki', 'dört', 'altı', 'yedi', 'sekiz', 'dokuz', 'kız', 'göz', 'söz', 'çok',
    'çay', 'çiçek', 'çocuk', 'çanta', 'çarşı', 'çatı', 'çorba', 'çift', 'çizgi', 'göl',
    'gök', 'ön', 'önce', 'öte', 'ördek', 'örnek', 'öz', 'özel', 'ödev', 'köy', 'köpek',
    'kök', 'söyle', 'dönem', 'böyle', 'şöyle', 'öyle', 'yön', 'yönet', 'bölge', 'kiraz',
    'deniz', 'yeşil', 'beyaz', 'siyah', 'kırmızı', 'mavi', 'gri', 'iş', 'işçi', 'için',
    'ile', 'ilk', 'iyi', 'isim', 'istek', 'iste', 'izin', 'ince', 'kitap', 'kitaplar',
    'bilgi', 'bilgisayar', 'dil', 'diller', 'şiir', 'şehir', 'saniye', 'dakika', 'hafif',
    'gibi', 'bile', 'kim', 'kimse', 'niçin', 'hepsi', 'resim', 'defter', 'kişi',
    'birlikte', 'ekip', 'tatil', 'sebze', 'peynir', 'zeytin', 'simit', 'pilav', 'biber',
    'domates', 'patlıcan', 'havuç', 'elma', 'erik', 'incir', 'limon', 'mısır', 'çilek',
    'zaman', 'yaz', 'sonbahar', 'hazır', 'uzak', 'uzun', 'yazı', 'yazmak',
    'kızlar', 'zor', 'az', 'hız', 'hızlı', 'sıfır', 'zil', 'zemin', 'gazete', 'nazik',
    'temiz', 'pazar', 'pazartesi', 'salı', 'çarşamba', 'perşembe', 'cuma', 'cumartesi',
    'haziran', 'temmuz', 'ekim', 'nisan', 'şubat', 'gece', 'geç', 'gelir', 'gider',
    'git', 'okumak', 'yazar', 'çalış', 'çalışmak', 'dinle', 'dinlemek', 'izle',
    'izlemek', 'bil', 'bilmek', 'ver', 'vermek', 'almak', 'başla', 'bitir', 'iç', 'içmek',
    'yiyecek', 'serin', 'kuzey', 'batı', 'nehir', 'çiftlik', 'kasaba', 'kelime',
    'kelimeler', 'satır', 'satırlar', 'dikkat', 'alıştırma', 'hata', 'hatalar', 'ritim',
    'sessiz', 'sakin', 'rahatça', 'yazılar', 'dizi', 'metin', 'metinler', 'sınav',
    'aile', 'arkadaş', 'komşu', 'misafir', 'kahve', 'kahvaltı', 'çorap', 'ceviz',
    'bisiklet', 'tren', 'otobüs', 'vapur', 'istasyon', 'bilet', 'harita', 'resimler',
    'pencereler', 'kapılar', 'mektup', 'zarf', 'kutucuk', 'çekmece', 'sandalye', 'yatakta',
    'mutfakta', 'bahçede', 'işte', 'evimiz', 'odamız', 'bizim', 'sizin',
    'onların', 'biz', 'siz', 'şimdi', 'bazen', 'hiç', 'her', 'herkes', 'hepimiz',
    'birkaç', 'biraz', 'çabuk', 'dikkatli', 'sabırlı', 'sevinç', 'çalışkan', 'zeki',
    'yaşlı', 'genç', 'yeni', 'eski', 'kolaylık', 'kez', 'bitti', 'başka',

    // --- + ğ ü  (u3-l02) — cột ngoài của Q ---------------------------------------------
    'ağaç', 'dağ', 'yağmur', 'doğru', 'doğa', 'soğuk', 'değil', 'değer', 'eğer',
    'öğrenci', 'öğretmen', 'öğle', 'ağız', 'sağlık', 'çağ', 'bağlantı', 'uğur', 'yoğurt',
    'değişik', 'ağustos', 'üç', 'üst', 'üzüm', 'ürün', 'ülke', 'gün', 'bugün', 'dün',
    'yüz', 'yürü', 'gül', 'güzel', 'güneş', 'güney', 'süt', 'sözlük', 'gözlük', 'müzik',
    'kültür', 'düşün', 'düşünce', 'dünya', 'ütü', 'köprü', 'büyük', 'küçük', 'mümkün',
    'süre', 'sürekli', 'eylül', 'tüm', 'bütün', 'müdür', 'düğme', 'düğün',
    'öğrenmek', 'görmek', 'görüş', 'göster', 'gönder', 'dönüş', 'çünkü', 'üzerinde',
    'yüksek', 'çözüm', 'bölüm', 'ölçü', 'cümle', 'cümleler', 'türkçe', 'günler',
    'doğum', 'yağ', 'bağ', 'dağlar', 'ağaçlar', 'öğrenciler', 'gündüz',
    'düz', 'yüzme', 'üzgün', 'sütlaç', 'börek', 'güvercin', 'kütüphane', 'ödül',
    'düşük', 'yükseklik', 'gülümse', 'çiğ', 'iğne', 'eğitim', 'bilgiler', 'dağıt',
    'soğan', 'boğaz', 'çağır', 'değiştir', 'öğren', 'ağla', 'sağa', 'yoğun'
  ],

  /* Tên riêng cho bài Enter (một tên mỗi dòng, viết hoa chữ đầu). Không tên nào bắt đầu bằng i
     hay ı — xem đầu file. */
  names: [
    'ayşe', 'fatma', 'zeynep', 'elif', 'merve', 'selin', 'ceren', 'esra', 'derya',
    'mehmet', 'mustafa', 'ahmet', 'ali', 'emre', 'burak', 'murat', 'can', 'kerem',
    'hakan', 'ömer',
    'ankara', 'bursa', 'konya', 'adana', 'antalya', 'trabzon', 'samsun', 'kayseri', 'mersin'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Viết thường, không dấu chấm cuối: generator tự thêm
     chữ hoa đầu câu và dấu chấm khi khoá đã dạy Shift và dấu chấm. Không câu nào bắt đầu bằng i
     hay ı. Sáu câu đầu không có i, ğ, ü, b, p — để Türkçe Q có câu gõ được từ unit 2. */
  sentences: [
    'annem sofraya sıcak yemek koydu',
    'kardeşler akşam erken uyur',
    'yarın hava ılık olacak',
    'sokakta kar var ve yollar kaygan',
    'yarın okula erken gel',
    'mutfakta sıcak ekmek var',
    'bu sabah erken kalktım ve çay içtim',
    'annem mutfakta yemek yapıyor',
    'kardeşim her gün okula yürüyerek gider',
    'yarın hava güzel olursa denize gideriz',
    'kitabı masanın üstüne bıraktım',
    'bahçedeki ağaçlar çiçek açtı',
    'akşam yemeğinden sonra biraz kitap okurum',
    'babam işten eve geç geldi',
    'bu kelimeyi klavyeye bakmadan yaz',
    'kediler güneşte uyumayı sever',
    'otobüs durağında uzun süre bekledik',
    'pazar günü ailemle kahvaltı yaptık',
    'yeni bir dil öğrenmek zaman ister',
    'kış gelince dağlara kar yağar',
    'arkadaşım bana güzel bir mektup yazdı',
    'sokakta çocuklar top oynuyor',
    'çarşıdan taze ekmek ve peynir aldık',
    'yavaş yaz ama hata yapma',
    'kasabada küçük bir kütüphane var',
    'her sabah on dakika çalışırsan hızlanırsın',
    'deniz kenarında yürümek bana iyi gelir',
    'ekranda gördüğün harfleri sırayla yaz'
  ]
};
