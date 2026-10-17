/* data/courses/tr.js — khoá học tiếng Thổ Nhĩ Kỳ: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/tr/*.json khi
 * trình duyệt nhận được.
 *
 * HAI HỌ, HAI BÀN PHÍM KHÁC HẲN NHAU.
 *
 *   Türkçe Q (204, họ mặc định): QWERTY có thêm chữ Thổ. Ô Semicolon in ra ş, ô Quote in ra i
 *   CÓ CHẤM, còn ô KeyI in ra ı KHÔNG chấm. ç và ö nằm ở ô Period và Comma, nên dấu chấm dời
 *   sang ô Slash và dấu phẩy sang ô Backslash — cả hai thuộc cột ngoài, dạy ở u3-l02 cùng ğ và ü.
 *   Hệ quả: bài Shift (u2-l09) CHƯA có dấu chấm, nên generator không viết hoa câu ở đó. Lời dạy
 *   của bài ấy nói đúng như vậy.
 *
 *   Türkçe F (205, `families.f`): bố cục thiết kế cho tiếng Thổ, hàng cơ sở u i e a ü t k m l y ş.
 *   Dấu chấm có ô riêng (Period, u2-l08), nên bài Shift CÓ viết hoa và chấm câu. Cột ngoài là
 *   dấu phẩy, `/`, `-` và q w x — ba chữ tiếng Thổ không dùng. Lớp phủ ở dưới sửa mọi câu dạy
 *   nói về Q mà sai trên F.
 *
 * Hàng số của cả hai là chữ số thật khi không giữ Shift: không `digitsAreShifted`, không
 * `shiftUnlocks`. Dấu mũ (^, Shift+3) là phím chết trên Windows ở cả hai, nên không `symbolsLive`.
 *
 * `keyNames.i = 'İ'`: chữ hoa của i là İ. Không có dòng này thì tiêu đề bài ô Quote đọc
 * "Z, Ç, Ö ve I" — tức là tên của phím ı. (Màn "nhấn phím X" vẫn qua `upper()` của generator,
 * xem báo cáo gửi lead.)
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Xưng hô với người học bằng **sen**, nhất quán.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.tr = {
  lang: 'tr',
  name: 'Türkçe',

  keyboardId: 204,

  progressKey: 'typingease-progress-tr-v1',
  badgesKey: 'typingease-badges-tr-v1',

  // Chữ Thổ + dấu chấm và dấu phẩy (hai bố cục đều đặt chúng ở vùng phím chữ) + gạch nối.
  letterTest: "^[a-zçğıöşü.,\\-]$",

  families: {
    f: {
      teaching: {
        introEdge: 'Sağ kenardaki tuşlar, hepsi sağ serçe parmakta. Bu klavyede virgül burada, bir de Türkçede pek kullanılmayan Q, W ve X.',
        edgeBackToWords: 'Yeniden kelimeler, artık bütün klavyeyle.',
        shiftSentences: 'Büyük harfle başlayan, noktayla biten cümleler. Artık gerçek bir yazıya benziyor.',
        shiftClose: 'Kapanışta tam cümleler. Shift, harf, bırak — durup düşünmeden.',
        summary: {
          edge: 'Sağ kenardaki sütun: altı tuş, hepsi serçe parmakta; aralarında virgül ile Q, W ve X.'
        },
        intro: {
          edge: 'Sağ serçe parmak öbür parmakların hepsinden çok tuşa bakar, ve kenardaki tuşlar en az çalışılanlardır. Türkçe F klavyede burada virgül var, bir de Türkçenin kullanmadığı üç harf: Q, W ve X. Yabancı adlarda ve internet adreslerinde yine de karşına çıkarlar.'
        },
        congrats: {
          edge: 'Virgülle birlikte cümleler eksiksiz yazılıyor. Çoğu kursun yarım bıraktığı sütun budur.',
          shift: 'Shift, Enter ve nokta ile bir metni, dışarıda nasıl yazılıyorsa öyle yazabilirsin.'
        },
        units: {
          u2: { title: 'Alfabenin geri kalanı',
            summary: 'Üst sıra, alt sıra, nokta ve büyük harfler — Türk alfabesinin tamamı, artı Shift ve Enter.' },
          u3: { title: 'Sayılar, işaretler ve hız',
            summary: 'Sayı sırası, sağ kenardaki virgül ve işaretler, sonra uzun paragraflar sabit bir ritimle.' }
        }
      }
    }
  },

  teaching: {
    and: ' ve ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'virgül', '.': 'nokta', ';': 'noktalı virgül', ':': 'iki nokta üst üste', "'": 'kesme işareti',
      '-': 'kısa çizgi', '*': 'yıldız', '/': 'eğik çizgi', i: 'İ' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Kalan bütün tuşlar',
      unitSummary: 'Bu klavyede kursun henüz kullanmadığı {count} karakter, her biri gerçekten kullanıldığı yerde.',
      groupSymbols: 'Kalan tuşlar',
      groupFinish: 'Üniteyi bitir',
      titleNumberRow: 'Sayı sırasındaki işaretler',
      titleKeys: 'Yeni tuşlar: {keys}',
      titleReview: 'Bütün işaretler bir arada',
      summaryKeys: 'Bu derste: {keys}.',
      summaryReview: 'Ünitedeki bütün işaretler, kelimeler ve sayılarla karışık.',
      summaryTest: 'Klavyenin bütün tuşlarıyla süreli bir test.',
      introLesson: 'Kursun henüz kullanmadığı tuşlar: {keys}. {shiftNote}',
      shiftNote: 'Hepsi Shift ve parmaklarının zaten tanıdığı bir tuşla çıkar — Shift öbür elin serçe parmağında.',
      shiftNoteMixed: 'Bazıları Shift ister, öbür elin serçe parmağıyla; ötekilerin kendi tuşu var, kurs onları henüz kullanmamıştı.',
      introKey: 'Bu karakter için {finger} çalışır: {key}{shift}.',
      introKeyShift: '; Shift öbür elde',
      drillOne: 'Önce yalnızca {key}, sonra gerçekten kullanıldığı yerde.',
      burst: 'Bu karakterlerle kısa parçalardan bir seri.',
      together: 'Bu derste gelen her şey, karışık.',
      inWords: 'Yeniden kelimeler, işaretler yerli yerinde.',
      introReview: 'Yeni tuş yok. Ünitedeki bütün karakterler, kelimeler ve sayılarla karışık.',
      reviewFirst: 'İşaretleri, çevrelerindeki harflerle aynı ritimde yaz.',
      reviewLine: 'İşaretlerde de ritmi koru; onlar da öbürleri gibi birer tuş.',
      congratsKeys: 'Artık parmaklarının altında: {keys}. İşaret de yanındaki harf kadar kolay çıkıyor.',
      congratsReview: 'Bu klavyenin bütün tuşları sırasını aldı.',
      introTest: 'Her şeyle, işaretler dahil, süreli bir test.',
      congratsTest: 'Bütün klavye buydu. Üzerinde bu kursun sana öğretmediği tek bir tuş kalmadı.',
      testText: 'Kelimeler, sayılar ve işaretler. Baştan sona aynı ritim.'
    },

    fingers: {
      LP: 'sol serçe parmak', LR: 'sol yüzük parmağı', LM: 'sol orta parmak',
      LI: 'sol işaret parmağı', LT: 'sol başparmak', RT: 'sağ başparmak',
      RI: 'sağ işaret parmağı', RM: 'sağ orta parmak', RR: 'sağ yüzük parmağı',
      RP: 'sağ serçe parmak'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'Sağ kenardaki tuşlar, hepsi sağ serçe parmakta. Bu klavyede Ğ ve Ü burada, nokta ve virgül de.',
    drillEdgePair: 'Şimdi {keys}. Serçe parmak dışarı çıkar ve geri döner; el onunla gitmez.',
    burstEdge: 'Bu sütundan öğrendiklerinle bir seri.',
    drillEdgeAll: 'Altısı bir arada. Parmak geri dönmezse bileğin en çok burada bükülür.',
    burstEdgeWords: 'Bunca kenar tuşundan sonra eli gevşetmek için yine kelimeler.',
    edgeBackToWords: 'Yeniden kelimeler, artık bütün klavyeyle — Ğ ve Ü dahil.',
    edgeClose: 'Tuş derslerini kapatmak için tam cümleler.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Bu tuşa {finger} basar. Bakmadan bul, bir kez bas ve parmağın yerine dönsün. Dönüş, basış kadar önemlidir.',
    pressToContinue: 'Devam etmek için <b>{key}</b> tuşuna bas',
    introSpace: 'Boşluk tuşu sağ başparmağındır. Başparmakların başka işi yok; bu yüzden onu hiç aramazsın.',
    pressSpace: 'Devam etmek için <b>boşluk tuşuna</b> bas',

    /* --- luyện ngón --- */
    drillSpace: 'Boşluklarla ayrılmış kısa gruplar. Sağ başparmak iner ve kalkar; öbür parmaklar tuşlarından ayrılmaz.',
    drillNew: 'Yalnızca {key} ve bildiklerin. Yavaşça; her basıştan sonra parmak temel sıraya dönsün.',
    drillMixed: 'Yeni tuşlar eskilerle karışık, kelimelerde karşına çıkacakları gibi.',
    drillAgain: 'Yine iki yeni tuş. Onlarla yazılacak kelime henüz yok, bu normal.',
    drillWide: 'Elindeki her şey, kısa gruplar halinde. Ellerine değil ekrana bak.',
    drillAll: 'Buraya kadar görülen her şeyle son bir tur.',
    patternsBack: 'Bir süre kalıplara dönüyoruz; parmakların hâlâ yerine döndüğünü görmek için.',

    /* --- seri --- */
    burstKeys: 'Kısa gruplar, art arda. Kaçırdığın olsa da sonuna kadar git.',
    burstLonger: 'Biraz daha uzun gruplar. Acele etmek henüz işe yaramaz.',
    burstWords: 'İçinde yeni tuşlar olan kısa kelimelerden bir seri.',

    /* --- kelimeler --- */
    wordsNew: 'Yeni tuşlarla gerçek kelimeler. Kelimeyi harf harf değil, tek hamlede yaz.',
    wordsOne: 'Şimdi ağırlık <b>{key}</b> tuşunda; en az bastığın tuş o.',
    wordsAll: 'Elindeki her şey, karışık. Kaç kelimenin artık düşünmeden çıktığına bak.',

    /* --- tekrar --- */
    introReview: 'Bu derste yeni tuş yok. Yalnızca bildiklerin, şimdiye kadarkinden daha seri ve daha hızlı.',
    introReviewMixed: 'Harfler, sayılar ve işaretler bir arada, kursun dışında karşına çıktıkları gibi.',
    pressEnter: 'Başlamak için <b>Enter</b> tuşuna bas',
    reviewWords1: 'Başlangıç için tek tek kelimeler. Acele yok: hız doğruluktan gelir, tersi olmaz.',
    reviewBurst: 'Kısa bir seri. Kaçırdığın olsa da listeyi bitir.',
    reviewWords2: 'Satırda beş kelime. Gözlerin parmaklarının önünden gitsin.',
    reviewPatterns: 'Yine kalıplar; parmakların temel sıraya döndüğünü görmek için.',
    reviewShort: 'Kısa kelimeler, iyi bir ritimle. Bunlar artık neredeyse kendiliğinden çıkmalı.',
    reviewBurst2: 'Daha uzun süre, daha çok kelime. Baştan sona aynı ritmi koru.',
    reviewClose: 'Satır satır, durmadan. Elin kendiliğinden yerine dönüyor mu, burada anlaşılır.',
    reviewLast: 'Son tur. Buraya klavyeye bakmadan geldiysen ders tamam.',

    /* --- Shift ve Enter --- */
    introShift: 'Büyük harf, harfin karşısındaki elin serçe parmağıyla yapılır. Shift\'i basılı tut, harfe bas, bırak. Yazan elin serçe parmağıyla asla.',
    pressShift: 'Devam etmek için <b>Shift</b> tuşunu basılı tut ve bir harfe bas',
    drillShift: 'Büyük ve küçük harf sırayla. Serçe parmak iner ve kalkar; öbür el yerinden oynamaz.',
    wordsShift: 'Yine kelimeler, küçük harfle. Serçe parmaklar dinlenirken ritmi koru.',
    introEnter: 'Enter sağ serçe parmağındır, temel sıranın sağında. Bu parmağın uzandığı en büyük tuş odur.',
    pressEnterKey: 'Devam etmek için <b>Enter</b> tuşuna bas',
    drillEnter: 'Bir satır, Enter, bir satır daha. Her satır büyük harfle başlıyor. Serçe parmak çıkar ve döner, eli sürüklemeden.',
    // Türkçe Q: nokta sağ kenarda (ô Slash) ve üçüncü ünitede geliyor, nên câu ở đây chưa viết hoa.
    shiftSentences: 'Tam cümleler. Bu klavyede nokta sağ kenarda, üçüncü ünitede gelecek; o zamana kadar cümleler küçük harfle ve noktasız.',
    shiftBurst: 'Bu dersi yerine oturtmak için bir seri.',
    shiftWords2: 'Satırda beş kelime, serçe parmak iki yönde de çalışarak.',
    shiftClose: 'Kapanışta tam cümleler. Satırın sonuna kadar gözün ekranda.',

    /* --- sayı sırası --- */
    introDigits: 'Sayı sırası üst sıranın da üstünde. Her parmak dümdüz yukarı çıkar ve aynı yoldan iner. Kurstaki en uzun uzanışlar bunlar.',
    drillDigitPair: '{keys}: {finger} ve öbür elde aynı parmak. Çık, bas, temel sıraya in.',
    drillDigitIndex: 'Kalan ikisi işaret parmaklarının; onlar zaten her parmaktan çok tuşa uzanır.',
    burstDigits: 'Öğrendiğin sayılarla kısa bir seri.',
    burstDigitsAll: 'Onu birden, karışık. Başta burada çok kaçırılır; bu normal.',
    digitsAll: 'Bütün sıra, gruplar halinde. 6 tuşunu aramak için aşağı bakma.',
    digitsBackToWords: 'Bir an kelimelere dönüyoruz; eller nerede oturduklarını unutmasın.',
    digitsClose: 'Yine cümleler, bütün klavye elinin altında.',

    /* --- paragraflar --- */
    introProse: 'Uzun ve kesintisiz metinler. Burada çalışılan yeni tuşlar değil, aynı ritmi birkaç satır boyunca korumak.',
    proseLine: 'Yazdığının önünden okumaya devam et. Bakmak için durursan, düzeltmekten daha çok zaman kaybedersin.',
    proseBurst: 'Bitirmek için son bir uzun seri.',

    /* --- zayıf tuşlar ve test --- */
    weakText: 'En çok kaçırdığın tuşlardan kurulan bir alıştırma. Her çalışmada değişir.',
    testText: 'Yeni tuş yok. Sonuna kadar tutabileceğin bir ritimle yaz.',

    /* --- başlıklar --- */
    titleFirst: '{keys}, bir de boşluk tuşu',
    titleKeys: '{keys}',
    titleReview: 'Tekrar',
    titleReviewMixed: 'Hepsi bir arada',
    titleShift: 'Shift ve Enter',
    titleEdge: 'Dış sütun',
    titleDigits: 'Sayı sırası',
    titleProse: 'Metin ve ritim {n}',
    titleWeak: 'Zayıf tuşlar',
    titleTest: '{unit}. ünite testi',

    /* --- yol haritası özetleri --- */
    summary: {
      edge: 'Sağ kenardaki sütun: altı tuş, hepsi serçe parmakta; aralarında Ğ, Ü, nokta ve virgül.',
      first: 'Kabartmalı iki tuş, boşluk tuşu ve aşağı bakmama alışkanlığı.',
      keys: 'Yeni tuşlar: {keys}. Parmak çıkar, basar ve döner.',
      review: 'Yeni tuş yok. Öncekilerin hepsi, daha seri ve daha hızlı.',
      shift: 'Karşı elin serçe parmağıyla büyük harfler, bir de satır başı.',
      digits: 'On rakam, her parmak dümdüz yukarı çıkarak.',
      prose: 'Bütün paragraflar; ritmi bir satırdan uzun tutmak için.',
      weak: 'En çok kaçırdığın tuşlardan kurulan bir alıştırma.',
      test: 'Öğrenilen her şeyle süreli bir test.'
    },

    /* --- ders girişleri --- */
    intro: {
      edge: 'Sağ serçe parmak öbür parmakların hepsinden çok tuşa bakar, ve kenardaki tuşlar en az çalışılanlardır. Türkçe Q klavyede bu sütun iki kat önemli: Ğ, Ü, nokta ve virgül burada. Onlarsız güzel, değil, bugün yazılmaz; cümleler de noktasız kalır.',
      first: 'Üzerinde küçük bir kabartma olan tuşlar başlangıç noktası. İki işaret parmağı oraya oturur ve oradan ayrılmaz; kursun geri kalanı bu konumdan ölçülür. İki elini yerleştirerek başla ve yalnızca ekrana bak.',
      keys: 'Bu dersteki yeni tuşlar: {keys}. Bunlara {fingers} basar. Hareket hep aynı — çık, bas, dön — ve çalışılan kısım dönüştür, çünkü dışarıda kalan parmak bir sonraki harfi kaçırtır.',
      review: 'Bu ders yeni bir şey öğretmiyor. Öncekilerin düşünmeden çıktığını görme zamanı; bu, tuşların nerede olduğunu bilmekle aynı şey değil.',
      shift: 'Buraya kadar her şey küçük harfle yazıldı. Shift bunu değiştirir, ve baştan öğrenmeye değer bir kuralı var: ona harfin karşısındaki elin serçe parmağı basar. Aynı taraftaki serçe parmakla basarsan el bükülür ve sonunda klavyeye bakarsın.',
      digits: 'Sayı sırası şimdiye kadar yazdığın her şeyin üstünde, ve parmakların en uzağa gittiği yer orası. Kursun hiçbir yerinde burada olduğu kadar hata yapılmaz; düzeltmesi de öbürleri gibi: önce yavaş.',
      prose: 'Artık bütün klavye elinde. Geriye tuş öğrenmek değil, ritmi korumak kalıyor: önden okumak, bakmak için durmamak, satır sonunda hızlanmamak.',
      weak: 'Bu alıştırma sabit bir listeden değil, senin kaçırdığın tuşlardan kurulur. Sen değişirsen o da değişir.',
      test: 'Süreli bir test. Yeni bir şey yok: yalnızca bildiklerin, tutabileceğin bir ritimle.'
    },

    /* --- ders sonları --- */
    congrats: {
      edge: 'Ğ ve Ü ile Türk alfabesinde eksik harf kalmadı. Çoğu kursun yarım bıraktığı sütun budur.',
      first: 'Ellerin yerinde. Buradan sonra her şey, bu konumdan uzanıp bırakılan bir tuş.',
      keys: 'Parmaklarının altında yeni tuşlar. {keys} artık aramadan çıkıyorsa ders işini yaptı.',
      review: 'Yeni bir şey yok ama daha hızlı. Olması gereken tam da buydu.',
      shift: 'Shift ve Enter tamam. Nokta ve virgül sağ kenarda; onlar üçüncü ünitede gelecek.',
      digits: 'Sayı sırası en zor olanı ve sonradan en az çalışılanı. Bu derse arada bir geri dön.',
      prose: 'Sabit ritimle bütün paragraflar. Bu artık yazmayı öğrenmek değil; yazmak.',
      weak: 'Zayıf tuşlar, ayda bir saatle değil, günde bir dakikayla zayıf olmaktan çıkar.',
      test: 'Test geçildi. Sayı, sona bakmadan varmış olmaktan daha az önemli.'
    },

    units: {
      u1: { title: 'Temel sıra',
        summary: 'Parmaklarının altında sekiz tuş, sonra {reach} — aşağı bakmadan gerçek Türkçe kelimeler yazmaya yeter.' },
      u2: { title: 'Alfabenin geri kalanı',
        summary: 'Üst sıra, alt sıra, Ç, Ö, İ ve büyük harfler — Ğ ve Ü dışında bütün alfabe, artı Shift ve Enter.' },
      u3: { title: 'Sayılar, Ğ, Ü ve hız',
        summary: 'Sayı sırası, sağ kenardaki Ğ, Ü, nokta ve virgül, sonra uzun paragraflar sabit bir ritimle.' }
    },

    groups: {
      start: 'Buradan başla',
      reach: 'Parmakları uzat',
      finish: 'Üniteyi bitir',
      'numbers-symbols': 'Sayılar ve işaretler',
      speed: 'Hız'
    },

    starterHint: 'İşaret parmaklarını kabartmalı iki tuşa koy ve klavyeye bakmadan gördüğünü yaz.'
  }
};
