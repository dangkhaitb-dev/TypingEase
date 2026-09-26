/* tro-choi/text/tr.mjs — Türkçe klavye oyunları sayfası (scripts/build-game-pages.mjs). Kelimeler
 * data/words/tr.js'ten gelir, Türkçe Q kursunun kullandığı listenin aynısı. Bütün harfler (ç ğ ı i ö ş ü)
 * kendi tuşundadır; ölü tuş yok, â î û yok. Birim: KDK (ui.tr.js `test.wpmUnit`). */
export default {
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
    { h2: 'Üç oyun, tek beceri', html: '<p>Her oyun 10 parmak yazmanın bir parçasını çalıştırır. <b>Tuş Avı</b> her tuşun yerini oturtur: yanan tuş, aşağı bakmadan hangi parmağın hareket edeceğini söyler. <b>Kelime Yağmuru</b> zaman baskısı altında bütün kelimeler yazmayı çalıştırır. <b>Hayalet Yarışı</b> bütün bir metin boyunca düzenli bir ritmi, seçtiğin hızda giden bir tempo arabasına karşı çalıştırır.</p>' },
    { h2: 'Kendi klavye düzeninde', html: '<p>Tuş Avı\'ndaki ekran klavyesi kursun düzenidir (Türkçe Q ya da Türkçe F) ve tuşlar, sistemin yazdığı karaktere göre değil fiziksel konumlarına göre tanınır. Kelime Yağmuru ve Hayalet Yarışı, <a class="inline-link" href="{course}">{lessons} derslik kursun</a> kelimelerini kullanır; ş, ğ, ü, ç, ö, ı ve i ile birlikte.</p>' },
    { h2: 'Nasıl fayda sağlarsın', html: '<ul><li>Bir dersten sonra oyna; beş ila on dakika yeter.</li><li>Kelimelerin çoğunu doğru yazdığın bir seviye seç, sürekli kaçırıyorsan bir seviye düş.</li><li>Hayalet Yarışı\'nda tempo arabasını gerçek hızının biraz altına ayarla ve zamanla yükselt.</li><li>Hızını gerçekten ölçmek için oyunu değil, <a class="inline-link" href="{test}">kurstaki</a> süreli testleri kullan.</li></ul>' }
  ],
  faqTitle: 'Sık sorulan sorular',
  faq: [
    ['Başka insanlara karşı oynayabilir miyim?', 'Henüz değil. Hayalet Yarışı, seçtiğin hızı ya da kendi rekorunu koruyan bir tempo arabasına karşıdır. Başka oyuncu yok, sıralama tablosu da yok.'],
    ['En iyi skorlarım nerede saklanıyor?', 'Yalnızca bu cihazdaki bu tarayıcıda. Hesap yok ve hiçbir şey bir yere gönderilmiyor.'],
    ['Telefonda oynayabilir miyim?', 'Kelime Yağmuru ve Hayalet Yarışı telefon klavyesiyle çalışır. Tuş Avı gerçek bir klavye ister, çünkü tuşların yerini öğretir.'],
    ['Doğru kelime neden temizlenmedi?', 'Boşluk tuşuna basmadan önce birebir eşleşmesi gerekir. Yanlışlıkla büyük harf, eksik bir harf ya da i yerine ı olup olmadığına bak.']
  ],
  cta: { eyebrow: 'Daha iyi oynamak mı istiyorsun?', title: '10 parmak yazmayı öğren', text: 'Kendi klavye düzeninde {lessons} ders, temel sıradan başlayarak.', button: 'Kursu gör' }
};
