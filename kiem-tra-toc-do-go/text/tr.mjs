/* kiem-tra-toc-do-go/text/tr.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Thổ Nhĩ Kỳ, cho
 * scripts/build-test-pages.mjs (cùng hình dạng với mẫu tiếng Anh). WPM = KDK (kelime/dakika),
 * nhất quán với i18n/ui.tr.js. Xưng hô "sen".
 * `{lessons}` = số bài của khoá chính tiếng Thổ (Q klavye), `{course}` = URL trang lộ trình của
 * khoá đó. Khoá F klavye (/tr/f/) được nhắc bằng liên kết viết tay.
 */
export default {
  live: false,
  slug: 'klavye-hiz-testi',
  title: 'Klavye hız testi: KDK ve doğruluk ölç | TypingEase',
  description: 'Ücretsiz klavye hız testi: tarayıcında 1, 5 ya da 10 dakika yaz, dakikada kaç kelime (KDK) yazdığını, doğruluğunu ve hatalarını gör. Üyelik yok.',
  breadcrumbAria: 'İçerik yolu',
  homeCrumb: 'Ana sayfa',
  crumb: 'Klavye hız testi',
  eyebrow: 'Ücretsiz yazma testi',
  h1: 'Klavye hız testi',
  intro: 'On beş saniyeden on dakikaya kadar bir süre seç, metni aynen yaz; dakikada kaç kelime yazdığını, doğruluğunu ve hatalarını gör. Süre bir düğmeyle değil, ilk tuşa bastığın anda başlar.',
  durationAria: 'Test süresi',
  durationLabel: seconds => (seconds < 60 ? `${seconds} sn` : `${seconds / 60} dk`),
  liveAria: 'Anlık sonuç',
  stats: { time: 'Süre', wpm: 'KDK', accuracy: 'Doğruluk', errors: 'Hata', consistency: 'İstikrar' },
  promptAria: 'Yazılacak metin',
  inputLabel: 'Buraya yazmaya başla',
  soundTitle: 'Her tuşta hafif bir tık sesi (Alt+S)',
  soundLabel: 'Tuş sesi',
  placeholder: 'Buraya tıkla ve yazmaya başla...',
  restart: 'Yeniden dene',
  wpmNote: 'KDK, yazdığın karakter sayısının beşe bölünüp yazarak geçirdiğin dakikalara oranlanmasıyla bulunur.',
  result: { title: 'Sonucun' },
  progress: {
    eyebrow: 'Çalışma günlüğü', title: 'İlerlemen', rangeAria: 'Zaman aralığı', days: n => `${n} gün`,
    metricAria: 'Gösterilen ölçü', note: 'Sonuçlar farklı sürelerdeki testlerden gelebilir.',
    summaryAria: 'İlerleme özeti', avgWpm: 'Ortalama KDK', bestWpm: 'En iyi KDK',
    avgAccuracy: 'Ortalama doğruluk', count: 'Yapılan test', chartAria: 'İlerleme grafiği'
  },
  sections: [
    {
      h2: 'Klavye hız testi nasıl çalışır',
      html: `<p>Seçtiğin süre boyunca yukarıdaki metni aynen yazarsın. Süre ancak ilk tuşa bastığında başlar; yani parmaklarını temel sıraya yerleştirip ilk satırı okuyacak kadar vaktin olur. Doğru karakterler olduğu gibi kalır, yanlış olanlar kırmızıya döner ve geri dönüp düzeltebilirsin.</p><p>Metinler günlük Türkçeyle yazılmış paragraflardır; büyük harfleri, noktalaması ve ğ, ü, ş, ı, ö, ç gibi harfleriyle birlikte. Uzun testlerde birkaç paragraf her seferinde farklı bir sırayla art arda gelir, böylece ezberden yazmazsın.</p>`
    },
    {
      h2: 'Dakikada kelime (KDK) ne anlatır',
      html: `<p>Hız, dakikada kelime olarak verilir: Türkçede KDK, İngilizcede WPM. Kelimelerin hepsi aynı uzunlukta olmadığı için yaygın kural, boşluk ve noktalama dahil her beş karakteri bir "kelime" sayar. Hesap şöyledir: yazılan karakterler, beşe bölünür, geçen dakika sayısına bölünür. Rakam sen yazarken değişir, süre bitince sabitlenir.</p><p>Bu kural iki testi birbiriyle karşılaştırmayı sağlar, ama gerçek Türkçe kelime sayısına doğrudan karşılık gelmez. Türkçe ekler yüzünden kelimeler çoğu zaman uzundur; beş karakterlik ölçü sayesinde uzun kelimelerle dolu bir metin de kısa kelimelerle dolu bir metin de aşağı yukarı aynı KDK'yı verir.</p>`
    },
    {
      h2: 'Türkçe harfler: Q klavye ve F klavye',
      html: `<p>Türkiye'de iki standart düzen kullanılır. En yaygını olan Türkçe Q klavyede harflerin çoğu İngilizce düzendekiyle aynı yerdedir; <em>ğ</em>, <em>ü</em>, <em>ş</em>, <em>ı</em>, <em>i</em>, <em>ö</em> ve <em>ç</em> ise sağ taraftaki kendi tuşlarındadır. Türkçe F klavye ise harfleri Türkçedeki kullanım sıklığına göre dizer: temel sırada sol el <em>u i e a</em>, sağ el <em>ü t k m</em> üzerinde durur. İki düzende de her Türkçe harfin kendi tuşu vardır, ölü tuşa gerek kalmaz.</p><p>Noktalı ve noktasız i'ye dikkat: <em>ı</em> ile <em>i</em> ayrı harflerdir, büyükleri de <em>I</em> ve <em>İ</em> olur. Test karakterleri tek tek karşılaştırdığı için <em>i</em> yerine <em>ı</em> yazmak bir hata sayılır. Öte yandan <em>ğ</em> ya da <em>ş</em> gibi bir harf, tek bir karakter olarak sayılır.</p><p>Test hangi düzenle yazdığını sormaz, yalnızca ekrana düşen karakterlere bakar; Q klavyeyle de F klavyeyle de aynı şekilde çalışır. Metinlerde düz kesme işareti (<em>'</em>) ve düz tırnak (<em>"</em>) kullanılır; "hala" ya da "rüzgar" gibi şapkalı harf isteyebilecek kelimeler bilerek dışarıda bırakıldı.</p>`
    },
    {
      h2: '1 dakika mı, 5 ya da 10 dakika mı',
      html: `<p>1 dakikalık bir test, hatta 15 ya da 30 saniyelik bir deneme, en çok ani hızını ölçer: baştan sona dikkatin dağılmaz ve tek bir duraksama sonucu epey etkiler. Hızlı bir deneme ya da seni yavaşlatan belirli bir harfi, örneğin <em>ğ</em>'yi kontrol etmek için kullanışlıdır.</p><p>5 ya da 10 dakikalık bir test ise dayanıklılığı ölçer; bu, bir e-postayı ya da bir raporu yazarkenki gerçek duruma daha çok benzer. Yorgunluk ve küçük dikkat kayıpları ortaya çıkar, sonuç da genellikle bir dakikalık testten biraz düşük olur. İlerlemeni takip etmek istiyorsan her seferinde aynı süreyi seç.</p>`
    },
    {
      h2: 'Doğruluğu okumak ve sonucu değerlendirmek',
      html: `<p>Doğruluk, yazma alanındaki bütün karakterler içinde doğru olanların oranıdır. Geri silme tuşuyla düzelttiğin bir hata artık hata sayılmaz, ama sana zaman kaybettirmiştir ve bu KDK'ya yansır. İstikrar ise temponun düzenli mi kaldığını, yoksa inip çıkıp mı durduğunu gösterir.</p><p>İyi bir sonuç metne, süreye ve ne kadar düzeltme yaptığına bağlıdır. Yüzde 95'in üzerinde doğrulukla biraz daha düşük bir KDK, kırmızıyla dolu yüksek bir rakamdan daha değerlidir. Bir sayıyı hedeflemek yerine testi tek bir şeyi kontrol etmek için kullan: geçen haftaya göre daha düzenli ve daha az hatayla mı yazıyorsun?</p>`
    },
    {
      h2: 'Daha hızlı yazmak için',
      html: `<ul><li>Her parmağın temel sıradaki yerini öğren (Q klavyede <em>a s d f</em> ve <em>j k l ş</em>) ve her tuştan sonra oraya dön.</li><li>Önce doğruluğu hedefle: hız doğruluğun ardından gelir, tersi olmaz.</li><li>Türkçe harflerde bile gözünü klavyeye değil ekrana ver.</li><li>Gerçekten sürdürebileceğin kısa çalışmalar yap, her gün biraz.</li><li>Hareket artık düşünmeden yapılıyorsa ancak o zaman hızlan.</li></ul><p><a class="inline-link" href="{course}">{lessons} derslik Q klavye kursu</a> bu adımları sırayla, kendi klavyende, işaretli iki tuştan bütün paragraflara kadar götürür. F klavye kullanıyorsan aynı uzunlukta bir <a class="inline-link" href="/tr/f/">F klavye kursu</a> da var.</p>`
    }
  ],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    ['KDK ne demek?', "Dakikada kelime: bir dakikada yazdığın, boşluk dahil beşer karakterlik \"kelime\" sayısı. İngilizcedeki WPM ile aynı ölçüdür."],
    ['Klavye hızımı nasıl test ederim?', 'Bir süre seç, yazma alanına tıkla ve metni aynen yaz. Süre ilk tuşa bastığında başlar, sonuç süre bitince görünür.'],
    ['Q klavye ve F klavyeyle aynı test mi kullanılır?', 'Evet. Test yalnızca yazdığın karakterleri metinle karşılaştırır, hangi tuşla yazdığına bakmaz. Ama sonuçları yalnızca aynı düzende yaptığın testlerle karşılaştır.'],
    ['ı ile i karıştırılırsa ne olur?', 'Bu iki harf ayrı karakterler olduğu için yanlış olanı yazmak bir hata sayılır ve doğruluğu düşürür. Geri dönüp düzeltirsen hata silinir, ama harcadığın zaman KDK\'ya yansır.'],
    ['1 dakikalık mı, 10 dakikalık test mi daha iyi?', 'Bir dakika ani hızını, on dakika dayanıklılığını ölçer. İkisi de işe yarar; ilerlemeni izlemek için hep aynı süreyi kullan.'],
    ['Sonuçlarım kaydediliyor mu?', 'Evet, ama yalnızca bu cihazda, tarayıcında. Hiçbir yere gönderilmez ve hesap gerekmez. Testin altındaki grafik KDK ve doğruluğunun zaman içindeki değişimini gösterir.']
  ],
  cta: { eyebrow: 'Daha iyi bir sonuç mu istiyorsun?', title: 'On parmak klavye kullanmayı öğren', text: 'Kendi klavye düzeninde {lessons} ders, temel sıradan başlayarak.', button: 'Kursu gör' }
};
