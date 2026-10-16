/* i18n/ui.tr.js — lớp tiếng Thổ Nhĩ Kỳ.
 *
 * Nạp bởi mọi trang dưới /tr/, bằng <script src="/i18n/ui.tr.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên, nên khoá thiếu ở đây thì hiện tiếng Việt — tên khoá phải khớp CHÍNH XÁC với bảng
 * nó ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 *
 * Xưng hô với người học bằng "sen", nhất quán với lời dạy trong data/courses/tr.js.
 */
window.TypingEaseUI = {
  lang: 'tr',

  /* Tuyệt đối, vì /tr/ogren/ nằm sâu hai cấp. `null` là tín hiệu BỎ liên kết: ba trang này chưa
     có bản tiếng Thổ, và không trỏ sang bản tiếng Anh hay tiếng Việt. */
  routes: {
    home: '/tr/',
    lessons: '/tr/dersler/',
    learn: '/tr/ogren/',
    test: '/tr/klavye-hiz-testi/',
    progress: '/tr/ilerleme/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /tr/ */
  home: {
    nav: ['Pratik', 'Kurs'],
    roadmapKicker: '{total} ders · {units} ünite',
    roadmapAll: '{total} dersin hepsini gör →',
    unitTitle: 'Ünite {index} · {title}',
    unitDone: '{done}/{total} ders ✓',
    railDone: '✓',
    railSoon: 'Yakında',
    railNote: 'Sonraki üniteler yazılıyor — henüz açılmayan dersler gri görünür.',
    teaser: 'Ünite {index} · {title} ({count} ders)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Daha fazla pratik',
    shortcuts: [
      ['Hız testi', 'Dakikadaki kelime sayını ve doğruluğunu ölç.'],
      ['Zayıf tuşlar', 'En çok kaçırdığın tuşlardan kurulan alıştırmalar.'],
      ['Serbest pratik', 'Kendi metnini yapıştır ve istediğin gibi yaz.']
    ],
    continueKicker: 'DEVAM ET',
    continueName: 'Ders {n} · {title}',
    continueCount: 'Ünite {unit} · ekran {screen}/{screens}',
    continueGo: '▶ Devam et (Enter)',
    continueRedo: '↻ {n}. dersi tekrarla',
    continueMap: 'Kursu gör',
    streak: '🔥 {days} gün · bugün {minutes} dk',
    coachWeak: 'Dikkat: <b>{keys}</b> seni yavaşlatıyor — onlarla bir dakika çalışalım mı?',
    legacy: 'Önceki kurstan {n} ders bitirdin — 1. ve 2. üniteler artık açık.',
    doneKicker: 'RİTMİ KORU',
    doneName: 'Yazılmış olan her şeyi bitirdin',
    doneCount: 'Sonraki ünite yolda. Ritmi kaybetmemek için bir dersi tekrarla.',
    doneGo: '▶ Kursu gör (Enter)',
    exploreKicker: 'TypingEase kaynakları',
    footer: 'Biraz daha yavaş git, çok daha uzağa varırsın.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /tr/ chưa có khối explore nào. */
  localized: {
    exploreTitle: 'TypingEase\'i keşfet',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Thổ không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'Ders yükleniyor…',
    missingTitle: 'Bu dersin henüz içeriği yok',
    missingBody: '<code>{path}</code> adresinden hiçbir şey yüklenmedi. Ders hâlâ yazılıyor — daha sonra dene ya da kurstan başka bir ders seç.',
    noCurriculum: 'Kursun dizini yüklenmedi (<code>data/curriculum.tr.js</code>).',
    fixtureNote: '<code>hoc/_fixture/</code> içindeki örnek içerikle çalışıyor — asıl ders henüz <code>data/lessons/</code> içinde değil.',
    screenOf: 'Ekran {n} / {total}',
    newKey: 'YENİ TUŞ',
    pressToContinue: 'Devam etmek için <b>{key}</b> tuşuna bas',
    enterToContinue: 'Devam etmek için <b>Enter</b> tuşuna bas',
    found: 'İşte bu.',
    foundBody: '<b>{key}</b> tuşunun yerini aklında tut — şimdi onu çalışacağız.',
    accuracyLive: '%{accuracy} doğruluk',
    errorsLive: '{count} hata',
    tokensLive: '{count} kelime',
    great: 'Mükemmel.',
    good: 'Çok iyi.',
    pass: 'Geçti.',
    fail: '%{min} altında — bu ekranı tekrarlamaya değer.',
    resultAccuracy: '%{accuracy} doğruluk',
    resultWpm: '{wpm} KDK',
    resultErrors: '{count} hata',
    resultTokens: '{count} doğru kelime',
    slowKey: 'En yavaş tuşun <b>{key}</b> oldu (her biri {ms} sn) — parmak ona uzansın ve hemen temel sıraya dönsün.',
    keepAccuracy: 'Ritmi düşür, doğruluk yükselir — hız arkadan gelir, tersi olmaz.',
    continueEnter: 'Devam et → (Enter)',
    redoScreen: 'Bu ekranı tekrarla',
    redoScreenAdvised: 'Bu ekranı tekrarla (önerilir)',
    skipScreen: 'Atla',
    lessonDone: 'TAMAMLANDI',
    learned: 'Artık {count} tuş biliyorsun:',
    statWpm: 'Hız',
    statAccuracy: 'Doğruluk',
    statTime: 'Süre',
    statStars: 'Yıldız',
    technique: 'Aklında tutmaya değer',
    weakTitle: 'Daha çok çalışman gereken tuşlar',
    weakButton: 'Bir dakika çalış',
    unitProgress: '{unit} · {done}/{total} ders',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Ana sayfaya dön (Enter)',
    redoLesson: '↻ Dersi baştan başlat',
    home: 'Ana sayfa',
    noMoreTitle: 'Yazılmış olanın sonuna geldin',
    noMoreBody: 'Sonraki ünite hâlâ hazırlanıyor. Bu arada bir dersi tekrarla — iyi bir ritimle ikinci tur, göründüğünden daha değerlidir.',
    notReadyTitle: 'Bu dersin henüz içeriği yok',
    notReadyBody: '<b>{title}</b> kursta var, ama içeriği hâlâ yazılıyor. Açık olan bir ders seç.',
    weakPage: 'Zayıf tuş pratiği',
    badgeNew: 'Yeni rozet',
    badgeAll: 'Bütün rozetleri gör →',
    shiftFinger: 'öbür elin serçe parmağı',
    testPage: 'Hız testi',
    mobileNote: 'Bu kurs bilgisayar klavyesi için yapıldı — on parmağın on gerçek tuşa ihtiyacı var. Telefonda deneyebilirsin, ama gerçekten öğrenmek için klavyeye dön.',
    mobileNoteClose: 'Anladım',
    tapToType: 'Yazmak için dokun',
    menuTitle: 'Duraklatıldı',
    menuResume: 'Yazmaya devam et',
    menuRedo: 'Bu ekranı tekrarla',
    menuSkip: 'Bu ekranı atla',
    menuExit: 'Ana sayfaya dön',
    clock: '{seconds} sn',
    lessonNumber: 'Ders {number}',
    pageTitle: 'Ders · TypingEase',
    screenTip: 'Ekran {number} · {type}',
    firstLesson: 'İlk derse dön'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'sol serçe parmak', LR: 'sol yüzük parmağı', LM: 'sol orta parmak',
    LI: 'sol işaret parmağı', LT: 'sol başparmak',
    RT: 'sağ başparmak', RI: 'sağ işaret parmağı', RM: 'sağ orta parmak',
    RR: 'sağ yüzük parmağı', RP: 'sağ serçe parmak'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'sol serçe parmak', 'left-ring': 'sol yüzük parmağı',
    'left-middle': 'sol orta parmak', 'left-index': 'sol işaret parmağı',
    'left-thumb': 'sol başparmak', thumb: 'başparmak',
    'right-index': 'sağ işaret parmağı', 'right-middle': 'sağ orta parmak',
    'right-ring': 'sağ yüzük parmağı', 'right-pinky': 'sağ serçe parmak'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Klavye ayarları',
    showKeyboard: 'Klavyeyi göster',
    showHands: 'Elleri göster',
    rightHandOnly: 'Yalnızca sağ el',
    leftHandOnly: 'Yalnızca sol el',
    animatedHands: 'Eller tuşları izlesin',
    letterCase: 'Tuşlardaki harfler',
    uppercase: 'BÜYÜK HARF',
    lowercase: 'küçük harf',
    boardAria: 'Ekran klavyesi', keypadAria: 'Ekrandaki sayısal tuş takımı',
    keyboardShape: 'Klavye tipi', shapeAuto: 'Düzene göre', shapeAnsi: '104 tuş (uzun sol Shift)', shapeIso: '105 tuş (sol Shift\'in yanında bir tuş)',
    layout: 'Klavye düzeni',
    save: 'Kaydet',
    cancel: 'Vazgeç',
    close: 'Kapat'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} ders bitti`,
    legacy: n => `Önceki kurstan ${n} ders bitirdin — 1. ve 2. üniteler artık açık.`,
    ctaResume: '▶ Devam et', ctaStart: '▶ Başla',
    ctaLesson: (verb, number, title) => `${verb} · Ders ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Yazılmış olanın sonuna geldin <span>→</span>',
    rowResume: (screen, total) => `▶ Devam et · ekran ${screen}/${total}`,
    rowStart: '▶ Başla',
    rowDone: '✓ Bitti',
    unlocked: 'Açık',
    unlockAfter: n => `${n}. dersten sonra açılır`,
    unlockNow: 'Bu üniteyi şimdi aç'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ mà trang kiểm tra tốc độ gõ tiếng Thổ ghi lúc chạy.
     WPM = KDK. Các đoạn văn chỉ dùng ký tự gõ thẳng được trên Türkçe Q và F (không â/î/û). */
  test: {
    wpmUnit: 'KDK',
    passage: "Sabah gökyüzü griydi ve sokaklarda serin bir hava vardı. Öğleye doğru bulutlar dağıldı, güneş birkaç dakika içinde kaldırımları kuruttu. İnsanlar ceketlerini çıkardı, çay bahçeleri doldu ve her yerden kahkaha sesleri yükselmeye başladı. Akşam ise ince, ılık bir yağmur yeniden bastırdı; sanki mevsim henüz hangi tarafa geçeceğine karar vermemişti.",
    passages: [
      "Sabah gökyüzü griydi ve sokaklarda serin bir hava vardı. Öğleye doğru bulutlar dağıldı, güneş birkaç dakika içinde kaldırımları kuruttu. İnsanlar ceketlerini çıkardı, çay bahçeleri doldu ve her yerden kahkaha sesleri yükselmeye başladı. Akşam ise ince, ılık bir yağmur yeniden bastırdı; sanki mevsim henüz hangi tarafa geçeceğine karar vermemişti.",
      "Cumartesi günleri semt pazarı okulun arkasındaki geniş sokağa kurulur. Satıcıların önünde güneşte ısınmış domatesler, taze peynirler, köy ekmeği ve sabah toplanmış çiçekler durur. Meyveci, müşterilerinin çoğunu adıyla tanır ve seçmeden önce herkese bir şeftali tattırır. Çilek almak isteyen erken gelmeli, çünkü onlar her hafta saat ondan önce biter.",
      "Tren tam vaktinde kalktı, bu da vagondaki neredeyse herkesi şaşırttı. Pencereden bakınca önce apartmanlar, sonra buğday tarlaları ve kıyısı kavaklarla çevrili bir dere göründü. Bir kadın kalın bir roman okuyordu, iki çocuk iskambil oynuyordu, bir adam da başını cama dayamış uyuyordu. İki saat sonra uzakta soluk mavi bir deniz belirdi ve herkes aynı anda başını kaldırdı.",
      "Basit bir mercimek çorbası için bir su bardağı kırmızı mercimek, bir soğan, bir havuç ve biraz tereyağı yeter. Soğanı ve havucu doğrayıp tencerede birkaç dakika kavurursun, ardından yıkanmış mercimeği ve sıcak suyu eklersin. Kısık ateşte yirmi dakika kadar pişen çorbayı iyice ezip tuzunu ayarlarsın. Üzerine biraz pul biber ve bir dilim limon, her kaşığı ayrı bir lezzete dönüştürür.",
      "Klavyeye bakmadan yazmayı öğrenmek her şeyden önce sabır ister. İlk günlerde parmaklar tereddüt eder ve her tuş yerinden çok uzakmış gibi gelir. Sonra gün geçtikçe el temel sırayı kendiliğinden bulur, kelimeler düşünmeden akmaya başlar. En faydalısı her gün biraz, yavaşça ve hızdan çok doğruluğa odaklanarak çalışmaktır. Hız ondan sonra, neredeyse zahmetsizce gelir.",
      "Mahalle kütüphanesi kapılarını sabah dokuzda açar. Büyük salonda sayfa hışırtısı ve okurların hafif adımları dışında hiçbir ses duyulmaz. Pencere kenarında bir öğrenci not alıyor, yaşlı bir kadın gazetesini karıştırıyor, küçük bir çocuk da yanardağlarla ilgili bir kitap arıyor. Burada saatlerce oturup zamanın nasıl geçtiğini fark etmeyebilirsin ve kimse karşılığında senden bir şey istemez.",
      "Sabah erkenden, çimenler daha ıslakken bisikletlerle yola çıktık. Yol, üzerinde birkaç teknenin süzüldüğü bir kanalın kıyısından ilerliyordu ve kıyıda balıkçıllar kıpırdamadan duruyordu. Saat on bir sularında küçük bir köyde mola verip çay içtik, bir torba da kayısı aldık. Dönüş, karşıdan esen sert yel yüzünden daha zor geçti ama kimse sızlanmadı.",
      "Taşınmak, sahip olduğunu bilmediğin her şeyi yeniden keşfetmek demektir. Bir dolabın dibinden eski mektuplar, bozuk bir çalar saat, bir kutu düğme ve unutulmuş tatil fotoğrafları çıkar. Her koli küçük bir karar olur: saklamak, birine vermek ya da atmak. Gideceğin gün boş ev birden daha büyük görünür ve orada bu kadar uzun süre yaşamış olmana şaşırırsın.",
      "Üç yıl önce bahçenin bir köşesini küçük bir sebze bahçesine çevirdik. İlk yıl salyangozlar marulların neredeyse hepsini yedi, domatesler de bir yaz fırtınasında çatladı. O günden beri akşamları sulamayı, toprağı samanla örtmeyi ve sıraların arasına fesleğen dikmeyi öğrendik. Bu yaz ürün o kadar bol oldu ki kabakları bütün komşularla paylaşmak zorunda kaldık.",
      "Vapur iskeleden ayrılırken martılar hemen peşine takıldı. Yolcuların bir kısmı içeride sıcak çaylarını yudumluyor, bir kısmı da güvertede yüzüne vuran tuzlu havanın tadını çıkarıyordu. Karşı kıyıdaki evler yavaş yavaş büyüdü, pencerelerinde öğle güneşi parladı. Yolculuk yalnızca yirmi dakika sürdü, ama suyun üzerinde geçen bu kısa zamanda bütün haftanın yorgunluğu unutuluyordu."
    ],
    title: '{seconds} saniyelik yazma testi',
    titleMinutes: '{minutes} dakikalık yazma testi',
    ready: 'Hazır olduğunda başla.',
    running: 'Sonucun anlık olarak hesaplanıyor.',
    finished: '{seconds} saniye doldu. Sonuç: {wpm} KDK, %{accuracy} doğruluk, {errors} hata.',
    finishedMinutes: '{minutes} dakika doldu. Sonuç: {wpm} KDK, %{accuracy} doğruluk, {errors} hata.',
    comparisonSame: 'Önceki sonucunla aynı.',
    comparisonDelta: 'Önceki sonucuna göre {delta} KDK',
    progressEmpty: 'Henüz yeterli veri yok. İlerlemeni görmek için birkaç test yap.',
    progressNone: 'Şimdilik ilerleme verisi yok.',
    metricEmpty: 'Bu ölçü için veri yok.',
    chartEmpty: 'Bu grafiği çizmeye uygun veri yok.',
    chartLabel: 'Zaman içinde {metric}',
    trendEmpty: 'Eğilim hesaplamak için yeterli veri yok.',
    trendSame: 'Bu dönemin başından beri değişiklik yok.',
    trendDelta: 'Bu dönemin başından beri {change} {measure}.',
    measureAccuracy: 'doğruluk puanı',
    accuracyName: 'Doğruluk',
    progressSummary: 'Son {days} günde {count} test. Ortalama {wpm} KDK, ortalama doğruluk %{accuracy}.',
    dateLocale: 'tr-TR'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ /tr/ilerleme/ ghi lúc chạy. WPM = KDK. */
  progress: {
    levels: ['Başlangıç', 'Yol alıyor', 'İstikrarlı', 'Hızlı', 'Akıcı'],
    legacy: n => `Önceki kurstan ${n} ders bitirdin — 1. ve 2. üniteler artık açık.`,
    unit: index => `Ünite ${index}`,
    soon: ' · yakında',
    // Tiếng Thổ không chia số nhiều sau số đếm: "1 ders", "2 ders".
    trendHint: n => (n === 1 ? 'Bir ders daha yazarsan bir eğilim çizmeye yetecek veri olur.'
      : `${n} ders daha yazarsan bir eğilim çizmeye yetecek veri olur.`),
    stripLevel: level => `Seviye: ${level}`,
    statWpm: 'Son KDK',
    statAccuracy: 'Doğruluk',
    statSessions: 'Oturum',
    target: (wpm, accuracy) => `Sonraki hedef: <b>${wpm}</b> KDK · %<b>${accuracy}</b> doğruluk`,
    adviceStart: 'Bir ders yaz, bu sayfa nerede olduğunu bilsin.',
    actionStart: '1. derse başla →',
    adviceWeak: keys => `${keys} seni yavaşlatıyor — yalnızca onlara ayıracağın bir dakika çok şey kazandırır.`,
    actionWeak: keys => `${keys} tuşlarını çalış →`,
    adviceSteady: 'İyi gidiyorsun — günde bir ders temponu korur.',
    actionLesson: (number, title) => `Ders ${number} · ${title} →`,
    actionTest: 'Hız testi →',
    actionLessons: 'Kursu gör →',
    heatLegend: 'Tuş başına doğruluk',
    heatStrong: 'Sağlam',
    heatFair: 'Bazen tutuyor',
    heatWeak: 'Çalışılmalı',
    badgeDate: at => new Date(at).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} tarihinde açıldı` : 'Açıldı'),
    number: value => value.toLocaleString('tr-TR'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} dakika`,
    streak: days => `🔥 ${days} gün üst üste`,
    bestStreak: days => `En iyi: ${days} gün`,
    today: minutes => `Bugün ${minutes} dakika`,
    clearConfirm: 'Bu cihazda saklanan bütün ilerleme ve puanlar silinsin mi?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: 'İlk adım', hint: 'İlk dersini bitir.' },
    'unit-1': { title: 'Bir ünite tamam', hint: 'Bütün bir üniteyi bitir.' },
    'stars-30': { title: '30 yıldız', hint: 'Kursta 30 yıldız topla.' },
    'stars-90': { title: '90 yıldız', hint: 'Kursta 90 yıldız topla.' },
    'streak-3': { title: 'Üç gün üst üste', hint: 'Günlük hedefini üç gün üst üste tuttur.' },
    'streak-7': { title: 'Tam bir hafta', hint: 'Günlük hedefini yedi gün üst üste tuttur.' },
    'clean-40': { title: 'Temiz 40 KDK', hint: '%95 ya da üstü doğrulukla 40 KDK\'lık bir tur.' },
    'clean-60': { title: 'Temiz 60 KDK', hint: '%95 ya da üstü doğrulukla 60 KDK\'lık bir tur.' },
    'typed-5000': { title: '5.000 tuş', hint: 'Toplamda beş bin tuşa bas.' }
  }
};
