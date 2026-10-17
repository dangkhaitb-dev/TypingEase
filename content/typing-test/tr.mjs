/* content/typing-test/tr.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Thổ Nhĩ Kỳ, cho
 * tooling/pages/typing-tests.mjs (cùng hình dạng với mẫu tiếng Anh). WPM = KDK (kelime/dakika),
 * nhất quán với i18n/ui.tr.js. Xưng hô "sen".
 * `{lessons}` = số bài của khoá chính tiếng Thổ (Q klavye), `{course}` = URL trang lộ trình của
 * khoá đó. Khoá F klavye (/tr/f/) được nhắc bằng liên kết viết tay.
 */
export default {
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
      html: `<p>Bu ücretsiz klavye hız testi online çalışır: her şey tarayıcında olur, hesap açman gerekmez. Seçtiğin süre boyunca yukarıdaki metni aynen yazarsın. Süre ancak ilk tuşa bastığında başlar; yani parmaklarını temel sıraya yerleştirip ilk satırı okuyacak kadar vaktin olur. Doğru karakterler olduğu gibi kalır, yanlış olanlar kırmızıya döner ve geri dönüp düzeltebilirsin.</p><p>Metinler günlük Türkçeyle yazılmış paragraflardır; büyük harfleri, noktalaması ve ğ, ü, ş, ı, ö, ç gibi harfleriyle birlikte. Uzun testlerde birkaç paragraf her seferinde farklı bir sırayla art arda gelir, böylece ezberden yazmazsın.</p>`
    },
    {
      h2: 'Dakikada kelime (KDK) ne anlatır',
      html: `<p>Yazma hızı, dakikada kelime olarak verilir: Türkçede KDK, İngilizcede WPM. Kelimelerin hepsi aynı uzunlukta olmadığı için yaygın kural, boşluk ve noktalama dahil her beş karakteri bir "kelime" sayar. Hesap şöyledir: yazılan karakterler, beşe bölünür, geçen dakika sayısına bölünür. Rakam sen yazarken değişir, süre bitince sabitlenir.</p><p>Bu kural, sonucunu aynı ölçüyü kullanan başka bir dakikada kelime testiyle ya da başka bir online yazma testi sonucuyla karşılaştırmanı sağlar, ama gerçek Türkçe kelime sayısına doğrudan karşılık gelmez. Türkçe ekler yüzünden kelimeler çoğu zaman uzundur; beş karakterlik ölçü sayesinde uzun kelimelerle dolu bir metin de kısa kelimelerle dolu bir metin de aşağı yukarı aynı KDK'yı verir.</p>`
    },
    {
      h2: 'Türkçe harfler: Q klavye ve F klavye',
      html: `<p>Türkiye'de iki standart düzen kullanılır. En yaygını olan Türkçe Q klavyede harflerin çoğu İngilizce düzendekiyle aynı yerdedir; <em>ğ</em>, <em>ü</em>, <em>ş</em>, <em>ı</em>, <em>i</em>, <em>ö</em> ve <em>ç</em> ise sağ taraftaki kendi tuşlarındadır. Türkçe F klavye ise harfleri Türkçedeki kullanım sıklığına göre dizer: temel sırada sol el <em>u i e a</em>, sağ el <em>ü t k m</em> üzerinde durur. İki düzende de her Türkçe harfin kendi tuşu vardır, ölü tuşa gerek kalmaz.</p><p>Noktalı ve noktasız i'ye dikkat: <em>ı</em> ile <em>i</em> ayrı harflerdir, büyükleri de <em>I</em> ve <em>İ</em> olur. Test karakterleri tek tek karşılaştırdığı için <em>i</em> yerine <em>ı</em> yazmak bir hata sayılır. Öte yandan <em>ğ</em> ya da <em>ş</em> gibi bir harf, tek bir karakter olarak sayılır.</p><p>Test hangi düzenle yazdığını sormaz, yalnızca ekrana düşen karakterlere bakar; Q klavyeyle de F klavyeyle de aynı şekilde çalışır. Yani bu sayfayı Q klavye hız testi olarak da F klavye hız testi olarak da kullanabilirsin; yeter ki sonuçları aynı düzendeki testlerle karşılaştır. Metinlerde düz kesme işareti (<em>'</em>) ve düz tırnak (<em>"</em>) kullanılır; "hala" ya da "rüzgar" gibi şapkalı harf isteyebilecek kelimeler bilerek dışarıda bırakıldı.</p>`
    },
    {
      h2: '1 dakika, 5 dakika ya da 10 dakika yazma testi',
      html: `<p>Kısa test ani hızını ölçer, uzun test dayanıklılığını: yorgunluk ve küçük dikkat kayıpları ortaya çıkar, sonuç da genellikle biraz düşer ama bir raporu yazarkenki gerçek hızına daha yakın olur. İlerlemeni takip etmek istiyorsan her seferinde aynı süreyi seç.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Hangi süreyi seçmeli</caption><thead><tr><th scope="col">Test süresi</th><th scope="col">Ne zaman seçmeli</th></tr></thead><tbody><tr><th scope="row">30 saniye</th><td>Seni yavaşlatan tek bir harfi, örneğin <em>ğ</em>'yi ya da <em>ı</em>/<em>i</em> ayrımını yorgunluk karışmadan kontrol etmek için.</td></tr><tr><th scope="row">1 dakika yazma testi</th><td>Ani hızını ölçen standart süre; sonucunu başkasının KDK’sıyla karşılaştıracaksan bunu kullan.</td></tr><tr><th scope="row">5 dakika yazma testi</th><td>Haftalık ilerlemeyi izlemek için en dengeli süre: tek bir duraksama sonucu bozmaz.</td></tr><tr><th scope="row">10 dakika yazma testi</th><td>Uzun bir e-postanın sonunda parmaklarının hâlâ temel sırada kalıp kalmadığını gösterir.</td></tr></tbody></table></div>`
    },
    {
      h2: 'Doğruluğu okumak ve sonucu değerlendirmek',
      html: `<p>Doğruluk, yazma alanındaki bütün karakterler içinde doğru olanların oranıdır. Geri silme tuşuyla düzelttiğin bir hata artık hata sayılmaz, ama sana zaman kaybettirmiştir ve bu KDK'ya yansır. İstikrar ise temponun düzenli mi kaldığını, yoksa inip çıkıp mı durduğunu gösterir.</p><p>İyi bir sonuç metne, süreye ve ne kadar düzeltme yaptığına bağlıdır. Yüzde 95'in üzerinde doğrulukla biraz daha düşük bir KDK, kırmızıyla dolu yüksek bir rakamdan daha değerlidir. Bir sayıyı hedeflemek yerine testi tek bir şeyi kontrol etmek için kullan: geçen haftaya göre daha düzenli ve daha az hatayla mı yazıyorsun?</p><p>Bazen hızı tamamen unutup bilerek yavaş yazmanı öneririm. O zaman bu sayfa bir yazma doğruluk testine dönüşür ve kırmızı karakterler sana hangi harflerde, örneğin <em>ı</em> ile <em>i</em>'de, gerçekten takıldığını gösterir.</p>`
    },
    {
      h2: 'Yeni başlayanlar için yazma testi',
      html: `<p>İlk testinde KDK'ya bakmamanı öneririm; asıl bakılacak yer kırmızı harfler. Hatalar <em>ı</em> ile <em>i</em>'de, <em>ğ</em>'de ya da <em>ş</em>'de toplanıyorsa sorun hız değil, parmaklarının Türkçe harf tuşlarını henüz bulamaması. Bence yeni başlayan biri için noktalı ve noktasız i'yi doğru yazmak birkaç KDK kazanmaktan daha önemli, çünkü bu karışıklık <em>kır</em> ile <em>kir</em> gibi kelimelerde anlamı değiştirir.</p><ul><li>30 saniye ya da 1 dakikayla başla. 5 ya da 10 dakika, başlangıçta daha çok yorgunluğu ölçer.</li><li>Aynı süreyle iki üç deneme yap ve en iyisini değil, ortadakini aklında tut.</li><li>Hâlâ iki parmakla yazıyorsan testi bir süre bırakıp <a class="inline-link" href="{course}">Q klavye kursuyla</a> başlamanı öneririm: {lessons} ders, temel sıradan itibaren. F klavye kullanıyorsan <a class="inline-link" href="/tr/f/">F klavye kursu</a> seni aynı yoldan götürür.</li></ul>`
    },
    {
      h2: 'Testten sonra ne çalışmalı',
      html: `<ul><li>Her parmağın temel sıradaki yerini öğren (Q klavyede <em>a s d f</em> ve <em>j k l ş</em>) ve her tuştan sonra oraya dön.</li><li>Önce doğruluğu hedefle: hız doğruluğun ardından gelir, tersi olmaz.</li><li>Türkçe harflerde bile gözünü klavyeye değil ekrana ver.</li><li>Gerçekten sürdürebileceğin kısa çalışmalar yap, her gün biraz.</li><li>Hareket artık düşünmeden yapılıyorsa ancak o zaman hızlan.</li></ul><p>Düzenli yazma egzersizleri istiyorsan <a class="inline-link" href="{course}">{lessons} derslik Q klavye kursu</a> bu adımları sırayla, kendi klavyende, işaretli iki tuştan bütün paragraflara kadar götürür. F klavye kullanıyorsan aynı uzunlukta bir <a class="inline-link" href="/tr/f/">F klavye kursu</a> da var.</p><p>ı ile i, kesme işareti ve eklerle ilgili ayrıntılı bir plan için <a class="inline-link" href="/tr/klavyede-hizli-yazma/">klavyede hızlı yazma</a> rehberine bak.</p>`
    }
  ],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    ['KDK ne demek?', "Dakikada kelime: bir dakikada yazdığın, boşluk dahil beşer karakterlik \"kelime\" sayısı. İngilizcedeki WPM ile aynı ölçüdür; yani bu sayfa aynı zamanda bir WPM testi."],
    ['Klavye hızımı nasıl test ederim?', 'Bir süre seç, yazma alanına tıkla ve metni aynen yaz. Süre ilk tuşa bastığında başlar, sonuç süre bitince görünür.'],
    ['Q klavye ve F klavyeyle aynı test mi kullanılır?', 'Evet. Test yalnızca yazdığın karakterleri metinle karşılaştırır, hangi tuşla yazdığına bakmaz. Ama sonuçları yalnızca aynı düzende yaptığın testlerle karşılaştır.'],
    ['ı ile i karıştırılırsa ne olur?', 'Bu iki harf ayrı karakterler olduğu için yanlış olanı yazmak bir hata sayılır ve doğruluğu düşürür. Geri dönüp düzeltirsen hata silinir, ama harcadığın zaman KDK\'ya yansır.'],
    ['1 dakikalık mı, 10 dakikalık test mi daha iyi?', 'Bir dakika ani hızını, on dakika dayanıklılığını ölçer. İkisi de işe yarar; ilerlemeni izlemek için hep aynı süreyi kullan.'],
    ['Bu yazma hızı testi çocuklar için uygun mu?', 'Bir yetişkinle birlikte kullanılabilir. Ayrı bir çocuk modu yok ve metinler sıradan düzyazı; 15 ile 60 saniyelik kısa testler seç ve hızdan önce doğruluğa bak.'],
    ['Sonuçlarım kaydediliyor mu?', 'Evet, ama yalnızca bu cihazda, tarayıcında. Hiçbir yere gönderilmez ve hesap gerekmez. Testin altındaki grafik KDK ve doğruluğunun zaman içindeki değişimini gösterir.']
  ],
  cta: { eyebrow: 'Daha iyi bir sonuç mu istiyorsun?', title: 'On parmak klavye kullanmayı öğren', text: 'Kendi klavye düzeninde {lessons} ders, temel sıradan başlayarak.', button: 'Kursu gör' }
};
