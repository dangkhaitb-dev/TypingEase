/* data/courses/fil.js — khoá học tiếng Filipino: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/fil/*.json.
 *
 * Bản dịch của data/courses/es.js, không có khối `families`: tiếng Filipino chỉ có một họ.
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Gọi người học là "ikaw/mo". "Key", "space bar", "Shift", "Enter" để
 * nguyên tiếng Anh: đó là chữ người Philippines thật sự dùng khi nói về bàn phím, và cũng là
 * chữ in trên phím. Tên ngón theo tiếng Filipino chuẩn: hinliliit (út), palasingsingan (áp út),
 * hinlalato (giữa), hintuturo (trỏ), hinlalaki (cái).
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.fil = {
  lang: 'fil',
  name: 'Filipino',

  // Bố cục 117 — "Filipino", y hệt QWERTY Mỹ từng phím. Ô Semicolon là dấu chấm phẩy, và bàn
  // phím này KHÔNG có phím ñ.
  keyboardId: 117,

  progressKey: 'typingease-progress-fil-v1',
  badgesKey: 'typingease-badges-fil-v1',

  // Như data/courses/en.js: bàn phím Mỹ, không phím chết nào.
  letterTest: "^[a-z;',.\\/-]$",
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' at ',
    keyNames: { ',': 'kuwit', '.': 'tuldok', ';': 'tuldok-kuwit', ':': 'tutuldok', "'": 'kudlit', '-': 'gitling', '/': 'slash' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Lahat ng iba pang key',
      unitSummary: 'Ang {count} na character ng keyboard na ito na hindi pa nagagamit ng kurso — mga panaklong, pera, ang natitira sa Shift — bawat isa ay tinitipa kung saan talaga ito ginagamit.',
      groupSymbols: 'Ang mga natitirang key',
      groupFinish: 'Tapusin ang yunit',
      titleNumberRow: 'Mga simbolo sa hanay ng numero',
      titleKeys: '{keys}',
      titleReview: 'Lahat ng simbolo nang sabay',
      summaryKeys: 'Sa araling ito: {keys}.',
      summaryReview: 'Lahat ng simbolo ng yunit, kahalo ng mga salita at numero.',
      summaryTest: 'Isang pagsusulit na may oras, gamit ang lahat ng key ng keyboard.',
      introLesson: 'Mga key na hindi pa nagagamit ng kurso: {keys}. {shiftNote}',
      shiftNote: 'Lahat sila ay Shift at isang key na kilala na ng mga daliri mo — ang Shift ay sa hinliliit ng kabilang kamay.',
      shiftNoteMixed: 'Ang ilan ay kailangan ng Shift, sa hinliliit ng kabilang kamay; ang iba ay may sariling key na hindi pa nagagamit ng kurso.',
      introKey: 'Ang {key} ay para sa {finger}{shift}.',
      introKeyShift: ', habang hawak ng kabilang kamay ang Shift',
      drillOne: 'Una, {key} nang mag-isa, saka kung saan talaga ito ginagamit.',
      burst: 'Isang bugso ng maiikling piraso na may ganitong mga character.',
      together: 'Lahat ng nasa araling ito, magkakahalo.',
      inWords: 'Mga salita ulit, nasa tamang lugar ang mga simbolo.',
      introReview: 'Walang bagong key. Lahat ng character ng yunit, kahalo ng mga salita at numero.',
      reviewFirst: 'Tipahin ang mga simbolo sa parehong bilis ng mga titik sa paligid nila.',
      reviewLine: 'Panatilihin ang ritmo kahit sa mga simbolo; key rin sila tulad ng iba.',
      congratsKeys: '{keys}: nasa ilalim na ng mga daliri mo. Shift sa kabilang kamay, at kasindali na ng katabing titik ang simbolo.',
      congratsReview: 'Nagkaroon na ng pagkakataon ang bawat key ng keyboard na ito.',
      introTest: 'Isang pagsusulit na may oras, kasama ang lahat, pati ang mga simbolo.',
      congratsTest: 'Iyon na ang buong keyboard. Wala nang key dito na hindi naituro sa iyo ng kursong ito.',
      testText: 'Mga salita, numero at simbolo. Isang bilis mula umpisa hanggang dulo.'
    },

    fingers: {
      LP: 'kaliwang hinliliit', LR: 'kaliwang palasingsingan', LM: 'kaliwang hinlalato',
      LI: 'kaliwang hintuturo', LT: 'kaliwang hinlalaki', RT: 'kanang hinlalaki',
      RI: 'kanang hintuturo', RM: 'kanang hinlalato', RR: 'kanang palasingsingan',
      RP: 'kanang hinliliit'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'Ang mga key sa kanang gilid, lahat ay para sa hinliliit. Ito ang pinakamalalayong abot ng daliring iyon, at ang pinakabihirang sanayin pagkatapos.',
    drillEdgePair: 'Ngayon, {keys}. Lumalabas ang hinliliit at bumabalik; hindi sumusunod ang kamay.',
    burstEdge: 'Isang bugso gamit ang nakuha mo na sa hanay na ito.',
    drillEdgeAll: 'Anim nang sabay. Dito sa sulok ng keyboard pinakamadalas mapilipit ang pulso kapag hindi bumabalik ang daliri.',
    burstEdgeWords: 'Mga salita ulit, para lumuwag ang kamay pagkatapos ng gilid.',
    edgeBackToWords: 'Balik sa mga salita, magagamit na ang buong keyboard.',
    edgeClose: 'Buong pangungusap para tapusin ang mga aralin sa key.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Ang key na ito ay para sa {finger}. Hanapin ito nang hindi tumitingin, pindutin nang isang beses, at hayaang bumalik ang daliri. Kasinghalaga ng pagpindot ang pagbalik.',
    pressToContinue: 'Pindutin ang <b>{key}</b> para magpatuloy',
    introSpace: 'Ang space bar ay para sa kanang hinlalaki. Wala nang ibang ginagawa ang mga hinlalaki, kaya hindi mo ito kailangang hanapin.',
    pressSpace: 'Pindutin ang <b>space bar</b> para magpatuloy',

    /* --- luyện ngón --- */
    drillSpace: 'Maiikling grupo na may espasyo sa pagitan. Bumababa at umaangat ang kanang hinlalaki; hindi gumagalaw ang ibang daliri.',
    drillNew: '{key} lang at ang alam mo na. Dahan-dahan, at ibalik ang daliri sa gitnang hanay pagkatapos ng bawat pindot.',
    drillMixed: 'Ang mga bagong key na kahalo ng mga luma, gaya ng paglabas nila sa loob ng mga salita.',
    drillAgain: 'Ang dalawang bagong key ulit. Wala pang salitang matitipa sa kanila, at inaasahan iyon.',
    drillWide: 'Lahat ng mayroon ka na, sa maiikling grupo. Sa screen ang tingin, hindi sa mga kamay.',
    drillAll: 'Isang huling ikot gamit ang lahat ng natutunan mo hanggang dito.',
    patternsBack: 'Balik muna sa mga pattern, para matiyak na nakakabalik pa rin ang mga daliri.',

    /* --- bugso --- */
    burstKeys: 'Maiikling grupo, sunod-sunod. Ituloy hanggang dulo kahit may mamali.',
    burstLonger: 'Mas mahahabang grupo. Hindi pa nakakatulong ang pagmamadali.',
    burstWords: 'Isang bugso ng maiikling salita na may mga bagong key.',

    /* --- salita --- */
    wordsNew: 'Totoong mga salita na may mga bagong key. Tipahin ang bawat salita nang tuloy-tuloy, hindi titik-titik.',
    wordsOne: 'Ngayon, nasa <b>{key}</b> ang bigat, ang key na pinakakaunti mong napindot.',
    wordsAll: 'Lahat ng mayroon ka, magkakahalo. Pansinin kung ilang salita na ang lumalabas nang hindi pinag-iisipan.',

    /* --- balik-aral --- */
    introReview: 'Walang bagong key sa araling ito. Ang mga alam mo lang, mas mahaba at mas mabilis kaysa dati.',
    introReviewMixed: 'Mga titik, numero at simbolo nang sabay, gaya ng paglabas nila sa labas ng kurso.',
    pressEnter: 'Pindutin ang <b>Enter</b> para magsimula',
    reviewWords1: 'Isa-isang salita muna. Walang pagmamadali: sa katumpakan nanggagaling ang bilis, hindi baligtad.',
    reviewBurst: 'Isang maikling bugso. Tapusin ang listahan kahit may makalusot.',
    reviewWords2: 'Limang salita bawat linya. Hayaang mauna ang mga mata sa mga daliri.',
    reviewPatterns: 'Mga pattern ulit, para matiyak na bumabalik pa rin ang mga daliri sa gitnang hanay.',
    reviewShort: 'Maiikling salita sa maayos na bilis. Dapat halos kusa na silang lumalabas.',
    reviewBurst2: 'Mas mahabang oras at mas maraming salita. Iisang ritmo mula umpisa hanggang dulo.',
    reviewClose: 'Buong pangungusap. Dito mo malalaman kung kusang bumabalik ang kamay.',
    reviewLast: 'Ang huling ikot. Kung nakarating ka rito nang hindi tumitingin sa keyboard, tapos na ang aralin.',

    /* --- Shift at Enter --- */
    introShift: 'Ang malaking titik ay galing sa hinliliit ng kamay na kabila ng titik. Hawakan ang Shift, pindutin ang titik, bitawan. Huwag gamitin ang hinliliit na nagtitipa ng titik.',
    pressShift: 'Hawakan ang <b>Shift</b> at pindutin ang isang titik para magpatuloy',
    drillShift: 'Malaki at maliit na titik, salitan. Bumababa at umaangat ang hinliliit; hindi gumagalaw ang kabilang kamay.',
    wordsShift: 'Mga salitang may malaking titik sa unahan, gaya ng pagsulat ng pangalan.',
    introEnter: 'Ang Enter ay para sa kanang hinliliit, sa kanan ng gitnang hanay. Ito ang pinakamalaking key na kailangang abutin ng daliring iyon.',
    pressEnterKey: 'Pindutin ang <b>Enter</b> para magpatuloy',
    drillEnter: 'Isang linya, Enter, ang susunod na linya. Lumalabas at bumabalik ang hinliliit nang hindi hinihila ang kamay.',
    shiftSentences: 'Mga pangungusap na may malaking titik sa simula at tuldok sa dulo. Parang totoong pagsusulat na.',
    shiftBurst: 'Isang bugso para tumatak ang itinuro ng araling ito.',
    shiftWords2: 'Lima bawat linya, gumagana ang hinliliit sa magkabilang direksiyon.',
    shiftClose: 'Buong pangungusap para tapusin. Shift, titik, bitaw — nang hindi humihinto para mag-isip.',

    /* --- hàng số --- */
    introDigits: 'Nasa itaas ng itaas na hanay ang hanay ng mga numero. Diretsong umaakyat ang bawat daliri at diretsong bumababa. Ito ang pinakamalalayong abot sa kurso.',
    drillDigitPair: 'Ang {keys} ay para sa {finger} at sa kapares nito sa kabilang kamay. Akyat, pindot, balik sa gitnang hanay.',
    drillDigitIndex: 'Ang dalawang natitira ay para sa mga hintuturo, na mas maraming key nang naaabot kaysa sa ibang daliri.',
    burstDigits: 'Isang maikling bugso gamit ang mga numerong mayroon ka na.',
    burstDigitsAll: 'Lahat ng sampu, magkakahalo. Madalas magkamali rito sa simula; normal iyon.',
    digitsAll: 'Ang buong hanay, sa mga grupo. Huwag yumuko para hanapin ang 6.',
    digitsBackToWords: 'Balik sa mga salita sandali, para maalala ng mga kamay kung saan sila nakatira.',
    digitsClose: 'Mga pangungusap ulit, magagamit na ang buong keyboard.',

    /* --- talata --- */
    introProse: 'Mahahaba at tuloy-tuloy na teksto. Hindi bagong key ang sinasanay dito kundi ang pagpapanatili ng iisang ritmo sa maraming linya.',
    proseLine: 'Patuloy na magbasa nang mas nauuna sa tinitipa mo. Mas maraming oras ang nasasayang sa pagtingin kaysa sa pagtatama ng mali.',
    proseBurst: 'Isang huling mahabang bugso para tapusin.',

    /* --- mahihinang key at pagsusulit --- */
    weakText: 'Isang pagsasanay na binuo mula sa mga key na pinakamadalas mong mamali. Nagbabago ito tuwing magsasanay ka.',
    testText: 'Walang bagong key. Magtipa sa bilis na kaya mong panatilihin hanggang dulo.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, pati ang space bar',
    titleKeys: '{keys}',
    titleReview: 'Balik-aral',
    titleReviewMixed: 'Mga address, link at numero',
    titleShift: 'Shift at Enter',
    titleEdge: 'Ang panlabas na hanay',
    titleDigits: 'Ang hanay ng mga numero',
    titleProse: 'Teksto at ritmo {n}',
    titleWeak: 'Mahihinang key',
    titleTest: 'Pagsusulit ng yunit {unit}',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'Ang hanay sa kanang gilid: anim na key, lahat para sa hinliliit.',
      first: 'Ang dalawang key na may umbok, ang space bar, at ang ugaling hindi tumingin sa ibaba.',
      keys: 'Mga bagong key: {keys}. Lumalabas ang daliri, pumipindot, at bumabalik.',
      review: 'Walang bagong key. Lahat ng nauna, mas mahaba at mas mabilis.',
      shift: 'Malaking titik gamit ang kabilang hinliliit, at ang paglipat ng linya.',
      digits: 'Lahat ng sampung numero, diretsong umaakyat ang bawat daliri.',
      prose: 'Buong talata, para mapanatili ang ritmo nang higit sa isang linya.',
      weak: 'Isang pagsasanay na binuo mula sa mga key na pinakamadalas mong mamali.',
      test: 'Isang pagsusulit na may oras, gamit ang lahat ng natutunan mo.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'Mas maraming key ang hawak ng kanang hinliliit kaysa sa ibang daliri, at ang mga nasa gilid ang halos walang nagsasanay. Mas malayo sila sa gitnang hanay kaysa sa iba, kaya pareho pa rin ang paraan: labas, pindot, balik, nang hindi sumusunod ang kamay.',
      first: 'Nagsisimula ang lahat sa mga key na may maliit na umbok. Doon nakapatong ang dalawang hintuturo at hindi sila umaalis; mula sa posisyong iyon sinusukat ang buong kurso. Ilagay muna ang dalawang kamay, at sa screen lang tumingin.',
      keys: 'Mga bagong key sa araling ito: {keys}. Para sila sa {fingers}. Laging pareho ang galaw — labas, pindot, balik — at ang pagbalik ang sinasanay, dahil ang daliring naiwan sa labas ang sumisira sa susunod na titik.',
      review: 'Walang itinuturong bago ang araling ito. Ito ang sandali para tiyakin na lumalabas ang mga nauna nang hindi pinag-iisipan, na iba sa pag-alam kung nasaan ang bawat key.',
      shift: 'Puro maliliit na titik ang lahat hanggang dito. Binabago iyon ng Shift, at may isang tuntunin itong dapat matutunan nang tama mula sa simula: ang hinliliit ng kamay na kabila ng titik ang pumipindot dito. Kapag ang hinliliit sa parehong panig, napipilipit ang kamay at napapatingin ka sa keyboard.',
      digits: 'Nasa itaas ng lahat ng natipa mo ang hanay ng mga numero, at dito pinakamalayo ang abot ng mga daliri. Mas madalas magkamali rito kaysa saanman sa kurso, at inaayos ito sa parehong paraan ng lahat: dahan-dahan muna.',
      prose: 'Nasa iyo na ang buong keyboard. Ang natitira ay hindi pag-aaral ng key kundi pagpapanatili ng ritmo: magbasa nang mauna, huwag huminto para tumingin, at huwag bumilis sa dulo ng linya.',
      weak: 'Binuo ang pagsasanay na ito mula sa mga key na minamali mo, hindi mula sa isang nakapirming listahan. Kapag nagbago ka, nagbabago rin ito.',
      test: 'Isang pagsusulit na may oras. Walang bago: ang alam mo na lang, sa bilis na kaya mong panatilihin.'
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Iyan ang hanay na iniiwang kalahati ng karamihan ng kurso. Hindi ang sa iyo.',
      first: 'Nasa puwesto na ang mga kamay mo. Mula rito, bawat key ay inaabot mula sa posisyong ito at binibitawan ulit.',
      keys: 'Mas maraming key sa ilalim ng mga daliri mo. Kung lumalabas na ang {keys} nang hindi hinahanap, nagawa na ng aralin ang trabaho nito.',
      review: 'Walang bago, pero mas mabilis pa rin. Iyon mismo ang dapat mangyari.',
      shift: 'Gamit ang Shift at Enter, kaya mo nang magtipa ng buong teksto gaya ng pagsulat nito sa labas ng kurso.',
      digits: 'Ang hanay ng mga numero ang pinakamahirap at pinakabihirang sanayin pagkatapos. Balikan ang araling ito paminsan-minsan.',
      prose: 'Buong talata sa tuloy-tuloy na bilis. Hindi na iyan pag-aaral magtipa; pagtitipa na iyan.',
      weak: 'Humihina ang mahinang key sa isang minuto bawat araw, hindi sa isang oras bawat buwan.',
      test: 'Pasado. Mas mahalaga ang pagtapos nang hindi tumitingin kaysa sa numero.'
    },

    units: {
      u1: { title: 'Ang gitnang hanay',
        summary: 'Walong key sa ilalim ng mga daliri, saka {reach} — sapat para magtipa ng totoong salita nang hindi tumitingin sa ibaba.' },
      u2: { title: 'Ang natitirang alpabeto',
        summary: 'Itaas na hanay, ibabang hanay, bantas at malalaking titik — ang buong alpabeto, pati Shift at Enter.' },
      u3: { title: 'Mga numero, simbolo at bilis',
        summary: 'Ang hanay ng mga numero, ang kanang gilid, totoong mga address at link, saka mahahabang talata sa tuloy-tuloy na bilis.' }
    },

    groups: {
      start: 'Magsimula rito',
      reach: 'Pag-abot ng mga daliri',
      finish: 'Tapusin ang yunit',
      'numbers-symbols': 'Mga numero at simbolo',
      speed: 'Bilis'
    },

    starterHint: 'Ipatong ang mga hintuturo sa dalawang key na may umbok at tipahin ang nakikita mo, nang hindi tumitingin sa keyboard.'
  }
};
