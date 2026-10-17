/* content/games/tr.mjs — Türkçe klavye oyunları sayfası (tooling/pages/games.mjs). Kelimeler
 * data/words/tr.js'ten gelir, Türkçe Q kursunun kullandığı listenin aynısı. Bütün harfler (ç ğ ı i ö ş ü)
 * kendi tuşundadır; ölü tuş yok, â î û yok. Birim: KDK (ui.tr.js `test.wpmUnit`). */
export default {
  worlds: {"rain": "Ateş böceği bahçesi", "race": "Gün batımı pisti", "keys": "Uzay istasyonu"},
  slug: 'klavye-oyunlari',
  title: 'Ücretsiz klavye oyunları, kendi klavyende | TypingEase',
  description: 'Üç ücretsiz klavye oyunu: Kelime Yağmuru, Hayalet Yarışı ve Tuş Avı. Kendi klavye düzeninde 10 parmak yazma pratiği yap, tarayıcıda ve kayıt olmadan.',
  breadcrumbAria: 'Sayfa yolu',
  homeCrumb: 'Ana sayfa',
  crumb: 'Klavye oyunları',
  eyebrow: 'Oyun gibi gelen pratik',
  h1: 'Klavye oyunları',
  intro: 'Dersler arasında oynanacak üç kısa oyun: düşen kelimeleri temizle, kendi hızınla yarış ve ekrandaki klavyede tuş avla. En iyi skorların bu cihazda kalır.',
  tabsAria: 'Bir oyun seç',
  locale: 'tr-TR',
  howAria: 'Nasıl oynanır',
  how: {
    rain: ['Kelimeler yukarıdan düşer.', 'Kelimeyi tam olarak yaz.', 'Temizlemek için Boşluk tuşuna bas. Üçünü kaçırırsan oyun biter.'],
    race: ['Tempo arabası için bir hız seç.', 'Metni ilk harften itibaren yaz.', 'Bayrağa tempo arabasından önce ulaş.'],
    keys: ['Klavyede bir tuş yanar.', 'Gözün ekranda kalsın ve o tuşa bas.', '60 saniyede olabildiğince çok vur.']
  },
  modes: {
    rain: ['Kelime Yağmuru', 'Düşen kelimeyi yaz ve temizlemek için Boşluk tuşuna bas.'],
    race: ['Hayalet Yarışı', 'Metni tempo arabasından önce bitir.'],
    keys: ['Tuş Avı', 'Yanan tuşa vur, 60 saniyede olabildiğince çok.']
  },
  rain: {
    difficulty: 'Seviye', easy: 'Kolay', normal: 'Normal', hard: 'Zor',
    score: 'Puan', level: 'Aşama', lives: 'Can', best: 'En iyi',
    start: 'Başla', placeholder: 'Düşen bir kelimeyi yaz, sonra Boşluk',
    hint: 'Türkçe harflerin hepsi kendi tuşunda; ı ile i farklı tuşlardır, karıştırma. Üç kelime dibe ulaşırsa oyun biter.'
  },
  race: {
    pace: 'Tempo arabası', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} KDK`,
    start: 'Yarışı başlat', you: 'Sen', ghost: 'Tempo', placeholder: 'Yukarıdaki metni ilk harften itibaren yaz'
  },
  keys: {
    start: 'Avı başlat', time: 'Saniye', hits: 'İsabet', streak: 'Seri', best: 'En iyi',
    hint: 'Gözün ekranda olsun, ellerinde değil. Tuşlar konumlarına göre okunur, bu yüzden sistemde hangi düzen seçili olursa olsun çalışır.'
  },
  runtime: {
    over: 'Oyun bitti', again: 'Tekrar oyna', newBest: 'Bu cihazda yeni rekor',
    rainResult: '{score} puan · {words} kelime temizlendi · {wpm} KDK · %{accuracy} isabet',
    raceReady: 'Tempo arabası {wpm} KDK hızla gidiyor. "Yarışı başlat"a bas, sonra başlamak için ilk harfi yaz.',
    raceGo: 'Başla!', raceWin: 'Önce sen bitirdin.', raceLose: 'Bu sefer tempo arabası kazandı.',
    racePaused: 'Durduruldu. Yeniden başlamak için "Yarışı başlat"a bas.',
    raceResult: '{seconds} saniye · {wpm} KDK · %{accuracy} doğruluk · tempo arabası {ghost} KDK',
    paceBest: 'Senin en iyin ({wpm} KDK)',
    keysResult: '{hits} isabet · en uzun seri {streak} · %{accuracy} doğruluk'
  },
  sections: [
    { h2: 'Klavye oyunları: hangisini, ne zaman oynamalı', html: `<p>Üç oyunun her biri başka bir şeyi sınar; o yüzden en güzel görüneni değil, bugün seni neyin takıldığına göre seç. Tuşları hâlâ arıyorsan <b>Tuş Avı</b>'nı aç: orada yalnızca parmağın doğru yere gidip gitmediği sayılır. Harfleri biliyor ama kelimeler aceleyle dağılıyorsa <b>Kelime Yağmuru</b>'nu seç. Kelimeler oturmuş ama uzun bir satırda ritmi kaybediyorsan <b>Hayalet Yarışı</b>'nı oyna. Bir oturumda tek oyun yeter, yeter ki içinde ne aradığını bil. Üçünü art arda oynamak çoğu zaman yalnızca rekor kovalamaya dönüşür.</p>
<p>Bence oyunlar en iyi, derste çalışılmış bir hareketin sınavı olarak işe yarar. Sana ı ile i'yi hangi parmakla yazacağını öğretmezler, elinin temel sıradan kaydığını da göstermezler. Ama bu hareketlere acele ettiğinde ne olduğunu gösterirler. O yüzden önce ders, sonra birkaç tur; tersi değil. Kursun ilk ünitesini bitirmeden Kelime Yağmuru'nda Zor seviyeyi denemek, çoğu zaman yalnızca aşağı bakma alışkanlığını pekiştirir. Rekorlar yalnızca bu tarayıcıda saklanır: hesap, sıralama tablosu ya da başka oyuncu yoktur.</p>` },
    { h2: 'Kelime Yağmuru: Türkçe harfli kelimeler zamana karşı', html: `<p>Kelimeler yukarıdan düşer. Birini yaz ve Boşluk ya da Enter ile gönder. Yalnızca ekranda hâlâ düşmekte olan bir kelimenin tamamı sayılır; dibe ulaşan üç kelime turu bitirir. Seviye kelime uzunluğunu belirler: Kolay'da iki ila beş harf, Normal'de en fazla sekiz, Zor'da her uzunluk. Her sekiz kelimede aşama bir artar ve kelimeler daha hızlı düşer.</p>
<p>Kelimeler kursla aynı listeden gelir, küçük harfle ve noktalamasız yazılır. Yaklaşık üçte birinde ç, ğ, ı, ö, ş ya da ü vardır: “şal”, “kaş”, “ışık” gibi. ı yerine i, ş yerine s yazılan kelime kabul edilmez ve başarısız gönderim kutuyu temizler; yani “isik” yazmak sana zaman, bazen de can kaybettirir.</p>
<h3>Bu oyunda neye bakmalı</h3>
<p>Hataların aynı harflerde toplanıp toplanmadığına bak. Hep ı'da kaybediyorsan sorun hız değil, sağ orta parmağın üst sıraya mı yoksa sağ serçe parmağın temel sıraya mı gideceğine karar verememesidir. Puan, harf sayısı çarpı aşamadır; uzun kelimeler geç aşamalarda en çok puanı verir ama Türkçe harf kaçırmak da en çok onlarda olur. Normal'de kelimelerin çoğunu ekranın ortasına varmadan temizleyemiyorsan Zor'a geçmenin anlamı yok.</p>` },
    { h2: 'Hayalet Yarışı: insanlara değil, kendi temponla yarış', html: `<p>Hayalet Yarışı tek kişilik bir oyundur. “Hayalet”, seçtiğin hızda eşit giden bir tempo arabasıdır: 20, 30, 40, 60 ya da 80 KDK. Kendi rekorunu da seçebilirsin; henüz rekorun yoksa araba 30 KDK ile başlar. Karşı tarafta yazan kimse yok, sıralama tablosu da yok. Bu, kendinle girdiğin bir meydan okumadır.</p>
<p>Metin yaklaşık 170 karakterdir ve kursla aynı listeden, iki ila dokuz harfli kelimelerden oluşur; Türkçe harfler de içindedir. Yarış ancak ilk karakteri yazdığında başlar, yani parmaklarını f ve j'ye rahatça yerleştirebilirsin.</p>
<h3>İlk hata arabayı durdurur</h3>
<p>Araban, yazdıklarının doğru olan başlangıcı kadar ilerler. Üçüncü kelimede ğ yerine g yazdıysan, sonraki doğru kelimeler o harfi düzeltene kadar bir işe yaramaz. Türkçe metinde bu çoğunlukla bir ı/i karışıklığıdır ve gözle fark edilmesi zordur, çünkü iki harf yan yana neredeyse aynı görünür. Metni okuyacak vaktin kalan bir tempo seç ve onu ancak geri dönmeden birkaç kez üst üste önde bitirdiğinde yükselt.</p>` },
    { h2: 'Tuş Avı: Türkçe Q klavyede harflerin yeri', html: `<p>Ekrandaki klavyede bir harf yanar. Onu fiziksel klavyede bul ve hemen bir sonrakine geç. Tur 60 saniye sürer; isabetler artar, yanlış tuş seriyi bozar. İki sayıya birden bak: kısa serilerle gelen çok isabet, tahmin ettiğin anlamına gelir.</p>
<p>Oyun tuşları sistemin yazdığı karaktere göre değil, fiziksel konumuna göre tanır. Hedefler, ekranda gösterilen düzenin tuşlarında basılı harflerdir. Türkçe Q'da bu, ç, ğ, ı, i, ö, ş ve ü dahil bütün harfler demektir, çünkü her birinin kendi tuşu vardır. Tuş Avı bu yüzden Türkçe harflerin yerini oturtmak için iyi bir yerdir.</p>
<h3>Gözlemlemeye değer yerler</h3>
<p>Q'da sağ elin sağ ucunda dört harf toplanır: ğ ve ü üst sırada, ş ve i temel sırada. Burada isabet sayısından çok serinin kırıldığı harfe bak. ö ve ç ise İngilizce düzende virgülle noktanın olduğu yerde, alt sırada durur; bu iki harfte elin aşağı bakmak istiyorsa bunu not et. Tuş Avı gerçek bir klavye ister, telefonda çalışmaz.</p>` },
    { h2: 'Oyun sonucunu bir sonraki derse çevirmek', html: `<p>Turdan önce tek bir soru seç: Türkçe harfleri mi kaçırıyorum, boşlukları mı, satır sonunda ritmi mi? Turdan sonra, “Tekrar oyna”ya basmadan önce bu soruya cevap ver. Oyun sonucu ancak belirli bir dersi gösterdiğinde işe yarar.</p>
<ul><li>Kelime Yağmuru'nda ı/i ya da ğ/g yüzünden reddedilen kelimeler: <a class="inline-link" href="{course}">{lessons} derslik kursta</a> “Harf tuşları” ünitesinin “Tuşlar l, ş, i”, “Tuşlar u, ı, o” ve “Tuşlar p, ğ, ü” derslerine, daha sonra “Hassasiyet” ünitesindeki “Işık ile İpek” ve “G ve ğ ayrımı” derslerine dön.</li>
<li>Tuş Avı'nda ö ya da ç'de kırılan seriler: “Tuşlar m, ö, ç” dersini tekrarla.</li>
<li>Kelimeleri bildiğin hâlde tempo arabası kazanıyorsa: “Ritim” ünitesi, sürekli metinde eşit tempoyu çalıştırır.</li></ul>
<p>Aynı oyunu art arda beşinci kez oynuyorsan ve sonuç değişmiyorsa, dur: bu artık çalışma değil, animasyon izlemek. Derse dön ya da notunu bir sonraki oturuma bırak.</p>
<p>Oyun sonuçlarını testle karşılaştırma. Kelime Yağmuru kelime başına puan sayar, yarış kısa bir metindeki temponu ölçer. Yazma hızını ölçmek için her seferinde aynı süre ve aynı tür metinle <a class="inline-link" href="{test}">klavye hız testini</a> kullan.</p>` }
  ],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    ['Başka insanlara karşı oynayabilir miyim?', 'Henüz değil. Hayalet Yarışı, seçtiğin hızı ya da kendi rekorunu koruyan bir tempo arabasına karşıdır. Başka oyuncu yok, sıralama tablosu da yok.'],
    ['En iyi skorlarım nerede saklanıyor?', 'Yalnızca bu cihazdaki bu tarayıcıda. Hesap yok ve hiçbir şey bir yere gönderilmiyor.'],
    ['Telefonda oynayabilir miyim?', 'Kelime Yağmuru ve Hayalet Yarışı telefon klavyesiyle çalışır. Tuş Avı gerçek bir klavye ister, çünkü tuşların yerini öğretir.'],
    ['Doğru kelime neden temizlenmedi?', 'Boşluk tuşuna basmadan önce birebir eşleşmesi gerekir. Yanlışlıkla büyük harf, eksik bir harf ya da i yerine ı olup olmadığına bak.'],
    ['Tuş Avı F klavyede de çalışır mı?', 'Oyun, ekranda gösterilen düzenin tuşlarını fiziksel konumlarına göre okur. Q ile F arasında harflerin yeri çok farklı olduğundan, ekrandaki düzenin gerçekten yazdığın düzenle aynı olduğunu turdan önce kontrol et.'],
    ['Oyunlarda büyük harf ve noktalama var mı?', 'Hayır. Kelime Yağmuru’ndaki kelimeler ve Hayalet Yarışı’ndaki metin küçük harfle, noktasız ve virgülsüz yazılır. Büyük I ve İ, kesme işareti ve diğer işaretler kursun “Büyük harf ve noktalama” ünitesinde çalışılır.']
  ],
  cta: { eyebrow: 'Daha iyi oynamak mı istiyorsun?', title: '10 parmak yazmayı öğren', text: 'Kendi klavye düzeninde {lessons} ders, temel sıradan başlayarak.', button: 'Kursu gör' }
};
