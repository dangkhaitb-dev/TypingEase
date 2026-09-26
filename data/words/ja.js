/* data/words/ja.js — kho từ tiếng Nhật cho khoá /ja/, viết bằng ROMAJI GÕ VÀO IME.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * VÌ SAO LÀ ROMAJI. Người Nhật gõ tiếng Nhật qua bộ gõ kana-kanji (IME), và gần như ai cũng nhập
 * bằng romaji: gõ `gakkou`, IME hiện がっこう rồi đổi thành 学校. Nên thứ ngón tay thật sự làm là
 * gõ chữ Latin a–z — và khoá này dạy đúng chuỗi phím đó. Mỗi mục bên dưới là MỘT từ tiếng Nhật
 * thông dụng, viết đúng như gõ vào IME (không phải phiên âm Hepburn in sách):
 *   - trường âm theo kana: おう → `ou` (gakkou, kyou), えい → `ei` (sensei), おお → `oo` (ookii)
 *   - âm ngắt っ → nhân đôi phụ âm (kitte, gakkou, ippai, kocchi)
 *   - trợ từ viết theo phím: は → `ha`, を → `wo`, へ → `he`
 *   - づ là `du` (tsuduku), không phải `zu`
 *   - ん cuối từ là `nn`, để IME không chờ chữ kế tiếp; ん trước phụ âm (không phải n/y) là một
 *     `n` (denwa, sensei, kanji). ん đứng trước nguyên âm/y thì cũng `nn` (kinnyoubi, tenninn).
 *   - KHÔNG có từ nào có ん đứng ngay trước hàng な (こんにちは, みんな, おんな, ざんねん): cách gõ
 *     chúng khác nhau giữa các IME (`nn` + `ni` hay `nnn`…), và dạy một chuỗi phím sai ở IME của
 *     người học là tệ hơn bỏ từ đó đi.
 *   - trường âm katakana ー là phím `-` (ko-hi-, ra-menn). Phím Minus chỉ được dạy ở bài cột
 *     ngoài của unit 3, và `typeableWith` tự chặn những từ này khỏi các bài trước đó.
 *
 * BỐ CỤC 216 (JIS) VÀ 19 (US). Chữ cái ở cùng ô trên cả hai, nên thứ tự phím là:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , (: trên JIS, ' trên US) · Shift+Enter · …
 *   hàng số · cột ngoài (/ - ^ @ [ ] trên JIS; / - = [ ] \ trên US) · [ôn] · đoạn văn ×2 · …
 * Hàng cơ sở chỉ có nguyên âm `a`, nên generator kéo bài e i lên trước bài ôn tập (promoteVowel).
 * `o` và `n` tới muộn (u2-l02, u2-l03), nên Unit 1 sống bằng những từ như sushi, kaisha,
 * daigaku, kirei, desu. `q`, `v`, `x` không có trong romaji IME thường ngày; bài của chúng sống
 * bằng luyện ngón. Nhóm dưới đây chỉ là chú thích: generator lọc mảng phẳng theo tập phím.
 *
 * NGUỒN GỐC. Từ vựng phổ thông, dựng độc lập và soát tay. Không lấy từ nội dung bài của site dạy
 * gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ: chỉ /^[a-z-]+$/, chữ thường; không danh từ riêng ngoài `names`; không gì bạo lực, y
 * khoa, chính trị, tôn giáo hay khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.ja = {
  lang: 'ja',

  alphabet: 'abcdefghijklmnopqrstuvwxyz-',

  words: [
    // --- a s d f j k l ;  (u1-l04) — chỉ một nguyên âm -------------------------------
    'asa', 'aka', 'kasa', 'saka', 'sakka', 'sakasa',

    // --- + g h ------------------------------------------------------------------------
    'ga', 'ha', 'haha', 'hada', 'gaka',

    // --- + e i  (bài nguyên âm, bị kéo lên trước bài ôn tập) -----------------------------
    'e', 'ie', 'iie', 'ii', 'ike', 'iki', 'ika', 'kaki', 'sake', 'shika', 'kage', 'kagi',
    'hashi', 'ashi', 'eki', 'seki', 'sekai', 'kaisha', 'kaigi', 'shiki', 'kiji', 'kaji',
    'dake', 'shi', 'ki', 'hi', 'ai', 'kashi', 'keshiki', 'kekka', 'gakki', 'sekkaku',
    'hakkiri', 'ikkai', 'sakki', 'shiai', 'shikashi', 'jishaku', 'hikaku', 'daiji',
    'daigaku', 'aki', 'akai', 'ikaga', 'kishi', 'kisha', 'kiseki', 'seiki', 'keiki',
    'sekkei', 'kaigai', 'eiga', 'ishi', 'isha', 'kaishi', 'deshi', 'hige', 'kiki', 'shiji',
    'jiki', 'hiji',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'sushi', 'suki', 'daisuki', 'kusa', 'kuri', 'desu', 'suru', 'kuru', 'iru', 'aru',
    'kiru', 'kiku', 'kaku', 'kau', 'au', 'ue', 'kaeru', 'kaeri', 'kaesu', 'hairu',
    'hashiru', 'agaru', 'sagaru', 'ageru', 'sageru', 'kakeru', 'sakura', 'saru', 'sara',
    'haru', 'hare', 'hiru', 'kare', 'fuku', 'fue', 'furu', 'furui', 'fukai', 'hikui',
    'karui', 'kurai', 'akarui', 'suika', 'rikai', 'rika', 'riku', 'kuuki', 'suugaku',
    'suuji', 'juku', 'juu', 'kagaku', 'igaku', 'keikaku', 'kagu', 'kusuri', 'arau',
    'arashi', 'aruku', 'erai', 'kariru', 'akiru', 'ikiru', 'ikura', 'kikai', 'dasu',
    'dekiru', 'deru', 'kasu', 'sugu', 'sugi', 'hikari', 'hidari', 'shiru', 'shiraseru',
    'uru', 'ukeru', 'urusai', 'ureshii', 'kurasu', 'kurashi', 'sakeru', 'fureru',
    'hakaru', 'kakaru', 'jikkuri', 'sukkari', 'gakkari', 'shikkari', 'kirei', 'kirai',
    'furikaeru', 'shiriai', 'fushigi', 'kara', 'hakase', 'ushiro', 'kaisuu',
    'gakusei', 'daigakusei', 'rieki', 'suisai', 'kaiga', 'kikaseru',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'ashita', 'kita', 'shita', 'deshita', 'atatakai', 'tatsu', 'tsukau', 'tsukuru', 'tsugi',
    'tsuki', 'tsukue', 'yasai', 'yasui', 'yuki', 'heya', 'hayai', 'kyaku', 'ryuugaku',
    'yuugata', 'tsuyu', 'atsui', 'kitte', 'itsu', 'utsukushii', 'katte', 'takai',
    'tasukeru', 'taisetsu', 'tetsudau', 'seikatsu', 'katei', 'te', 'tetsu', 'taiiku',
    'yakyuu', 'shukudai', 'yasashii', 'iu', 'yuuki', 'kyuukei', 'kyuuri', 'shitsurei',
    'jitsu', 'jissai', 'tsukare', 'tsukaeru', 'tsutaeru', 'itta', 'atta', 'katta', 'kaita',
    'kiita', 'hayaku', 'yukkuri', 'yakitori', 'yuuhi', 'itai', 'utau', 'atarashii',
    'taikai', 'tsukiai', 'yurusu', 'yureru', 'yuka', 'fuyu', 'keitai', 'tsuduku',
    'kyuujitsu', 'yuujin', 'jiyuu', 'tayasui', 'tsurai', 'kitai', 'taishi',
    'shiteki', 'tekisetsu', 'kaiketsu', 'kyuu', 'taisaku', 'ikiteiru',
    'tsuite', 'tsukiau', 'deatta', 'kayui',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'watashi', 'kore', 'sore', 'are', 'dore', 'kotoba', 'ohayou', 'arigatou', 'doko',
    'koko', 'soko', 'asoko', 'otoko', 'kowai', 'kawaii', 'warui', 'wakaru', 'wasureru',
    'watasu', 'kaiwa', 'ookii', 'osoi', 'oishii', 'hikouki', 'tokei', 'kyou', 'yoru',
    'shigoto', 'gakkou', 'koukou', 'eigo', 'kotoshi', 'kyoudai', 'otouto', 'oto', 'kao',
    'koe', 'karada', 'ude', 'kokoro', 'itoko', 'yoroshiku', 'dou', 'sou', 'kou', 'hoka',
    'shio', 'satou', 'iro', 'shiroi', 'kuroi', 'aoi', 'tori', 'tokoro', 'iwau', 'kawa',
    'sawaru', 'kowasu', 'suwaru', 'warau', 'owari', 'owaru', 'yowai', 'tsuyoi', 'ooi',
    'oyogu', 'oshieru', 'okiru', 'oriru', 'okuru', 'toshi', 'yoi', 'yoku', 'yotei',
    'yoyaku', 'ryokou', 'ryouri', 'shokuji', 'shousetsu', 'shokudou', 'kyoushitsu',
    'youji', 'youfuku', 'wafuku', 'washoku', 'wagashi', 'wadai', 'wake', 'wareru',
    'kawaru', 'kawari', 'kawaku', 'iwashi', 'iwa', 'uwagi', 'sorosoro', 'kotaeru',
    'tokidoki', 'dokoka', 'dougu', 'doushite', 'douyatte', 'hou', 'hoshii', 'hoshi',
    'kyori', 'kyouryoku', 'shiryou', 'jouhou', 'joushi', 'jugyou', 'sotsugyou', 'soto',
    'sugoi', 'sukoshi', 'tooi', 'tooku', 'toori', 'koori', 'ooku', 'kisetsu', 'seito',
    'tsugou', 'shiawase', 'kuukou', 'kyoukasho', 'rekishi', 'tokui', 'saikou', 'saigo',
    'saisho', 'jidousha', 'jitaku', 'shoushou', 'shoujiki', 'shougakusei', 'koutsuu',
    'gogo', 'goro', 'gorufu', 'rajio', 'ototoi', 'kowareru', 'oshii', 'dokusho', 'yousu',
    'otagai', 'o', 'wo', 'to', 'yo', 'sora', 'kaze', 'tsukaikata', 'yowaru', 'hiroi',
    'kouhai', 'koushi', 'kyouiku', 'kaisoku', 'oyatsu',
    'ashioto', 'hitsuyou', 'kousha', 'wasuremono', 'seikou', 'eikyou',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'nani', 'honn', 'nihonn', 'nihongo', 'sensei', 'kanji', 'hiragana', 'katakana', 'chikai',
    'chiisai', 'chotto', 'chikatetsu', 'chichi', 'ocha', 'kocchi', 'socchi', 'acchi',
    'docchi', 'uchi', 'tanoshii', 'onaji', 'hana', 'kuni', 'inu', 'neko', 'kinou',
    'kyonenn', 'rainenn', 'shinsetsu', 'shinkansenn', 'denki', 'denwa', 'densha', 'genki',
    'tenki', 'tenisu', 'kankou', 'nihonjinn', 'ningenn', 'onegai', 'kochira', 'sochira',
    'dochira', 'achira', 'shinai', 'shiranai', 'wakaranai', 'chigau', 'chikara', 'kuchi',
    'hachi', 'ichi', 'ni', 'sann', 'yonn', 'nana', 'hyaku', 'senn', 'hitotsu', 'futatsu',
    'chuui', 'chuusha', 'kanojo', 'kanashii', 'okane', 'nedann', 'ne', 'no', 'na',
    'nanika', 'naka', 'nagai', 'natsu', 'naru', 'nareru', 'nageru', 'nakusu', 'naosu',
    'narau', 'naku', 'nigai', 'nigiyaka', 'nishi', 'nikki', 'nioi', 'niwa', 'neru',
    'noru', 'nokoru', 'nodo', 'nochi', 'kinjo', 'kantann', 'kenkyuu', 'kenkou', 'tenninn',
    'renshuu', 'renraku', 'sentaku', 'senshuu', 'sengetsu', 'kondo', 'konshuu', 'kongetsu',
    'konnya', 'hanashi', 'hanasu', 'hitori', 'futari', 'hito', 'chikaku', 'chikyuu',
    'shachou', 'chuushoku', 'choushoku', 'yuushoku', 'kocha', 'chiketto', 'uchiawase',
    'tsuchi', 'kinchou', 'shinjiru', 'anshinn', 'onsenn', 'ongaku', 'onaka', 'kenchiku',
    'hontou', 'jinja', 'kinoko', 'nashi', 'ringo', 'ninjinn', 'hanko', 'ginkou', 'kouenn',
    'toshokann', 'honnya', 'kissatenn', 'resutorann', 'hoteru', 'ane', 'ani', 'kinyuu',
    'tachiagaru', 'nichijou', 'sanka', 'shinkou', 'tanka',
    'konkai', 'gohann', 'kenkyuusha', 'tokoroga', 'chousa', 'kaichou',
    'nenrei', 'ninki', 'shinchou', 'tanin', 'kokunai', 'chansu', 'nishiguchi',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'mado', 'michi', 'mimi', 'me', 'mae', 'ima', 'kimi', 'namae', 'tomodachi', 'atama',
    'kimochi', 'mainichi', 'maiasa', 'kumo', 'yama', 'umi', 'ame', 'samui', 'omoi',
    'omoshiroi', 'tsumetai', 'mottomo', 'mise', 'miru', 'matsu', 'motsu', 'mono',
    'tatemono', 'nomimono', 'sumimasenn', 'arimasu', 'imasu', 'shimasu', 'wakarimasu',
    'ikimasu', 'kimasu', 'mimasu', 'yomimasu', 'kakimasu', 'tsukaimasu', 'ikimashou',
    'mata', 'mada', 'mou', 'motto', 'mochiron', 'mukashi', 'musume', 'musuko', 'midori',
    'minami', 'migi', 'mijikai', 'muri', 'moji', 'mokuteki', 'mondai', 'kuruma', 'kamera',
    'kami', 'kaminari', 'hajimeru', 'hajimete', 'hajimemashite', 'kimeru', 'tsumori',
    'tomaru', 'nomu', 'yomu', 'sumu', 'umareru', 'yasumi', 'yasumu', 'yume', 'kome',
    'mame', 'tamago', 'sakana', 'niku', 'kudamono', 'miso', 'misoshiru', 'omise',
    'omiyage', 'mitsukeru', 'kumori', 'matsuri', 'kimono', 'shumi', 'semai', 'amai',
    'umai', 'mamoru', 'moshimoshi', 'momo', 'hima', 'imouto', 'okaasann', 'otousann',
    'nimotsu', 'sumaho', 'memo', 'manga', 'anime', 'mainenn', 'mokuhyou', 'kimatta',
    'natsuyasumi', 'mitai', 'yamanobori', 'umibe', 'omotenashi', 'kumitate', 'mushiatsui',
    'kaimono', 'tsumaranai', 'shimeru', 'akeru', 'yameru', 'tomeru', 'mayou', 'matomeru',
    'massugu', 'mochikaeru', 'makoto', 'mimamoru',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'pann', 'enpitsu', 'sanpo', 'tenpura', 'kanpai', 'shinpai', 'ippai', 'ippunn',
    'happyou', 'shuppatsu', 'kippu', 'pinku', 'piano', 'pasokonn', 'posuto', 'poketto',
    'pannya', 'kappu', 'koppu', 'sappari', 'yappari', 'shippai', 'jippunn', 'kanpeki',
    'shuppann', 'pittari', 'pikapika', 'purinn', 'pasuta', 'sanpunn', 'roppyaku',
    'happyaku', 'nanpunn', 'shinpo', 'teppann', 'kippari',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'benkyou', 'tabemono', 'taberu', 'asobu', 'yobu', 'erabu', 'hanabi', 'kabe', 'kabann',
    'bangohann', 'obaasann', 'ojiisann', 'obentou', 'benri', 'bijutsukann', 'bunka',
    'bunshou', 'sabishii', 'abunai', 'abura', 'ebi', 'tabunn', 'nabe', 'kubi', 'yubi',
    'basu', 'terebi', 'boushi', 'boku', 'bangou', 'bangumi', 'bentou', 'baito', 'bideo',
    'bara', 'shiraberu', 'kuraberu', 'naraberu', 'narabu', 'tobu', 'musubu', 'yorokobu',
    'hakobu', 'manabu', 'shibaraku', 'soba', 'tabi', 'kabinn', 'butaniku', 'gyuuniku',
    'toriniku', 'bubunn', 'kibou', 'kibunn', 'jibunn', 'junbi', 'hanbunn', 'shinbunn',
    'konbanha', 'konbini', 'nichiyoubi', 'getsuyoubi', 'kayoubi', 'suiyoubi',
    'mokuyoubi', 'kinnyoubi', 'doyoubi', 'tanjoubi', 'yuubinkyoku', 'bikkuri',
    'subarashii', 'kibishii', 'oboeru', 'yobikou', 'bijutsu', 'kabuki', 'obi', 'tebukuro',
    'beru', 'sabaku', 'binsenn', 'hibana',

    // --- + z . , : / '  (u2-l08) --------------------------------------------------------
    'zenbu', 'mizu', 'zutto', 'zasshi', 'kazoku', 'zehi', 'suzushii', 'chizu', 'zero',
    'shizuka', 'mazui', 'hazukashii', 'nezumi', 'gozaimasu', 'ohayougozaimasu', 'jouzu',
    'kanarazu', 'muzukashii', 'anzenn', 'shizenn', 'zenzenn', 'zuibunn', 'zubonn',
    'mezurashii', 'hizuke', 'kazu', 'mizuumi', 'wazawaza', 'gozenn', 'zou', 'rizumu',
    'purezento', 'piza', 'aizu', 'saizu', 'kazari', 'douzo', 'kizu', 'suzuri',
    'zaseki', 'zairyou', 'zatsudann', 'kizamu', 'hizashi',

    // --- + - = ^ [ ] @ \  (u3, cột ngoài) — trường âm katakana ー ------------------------
    'ko-hi-', 'bi-ru', 'ke-ki', 'su-pa-', 'takushi-', 'ka-do', 'me-ru', 'pe-ji',
    'ra-menn', 'konpyu-ta-', 'kare-', 'no-to', 'sa-bisu', 'te-buru', 'ge-mu', 'ki-bo-do',
    'ro-maji', 'ko-su', 'ka-tenn', 'de-ta', 'supo-tsu', 'depa-to', 'chokore-to',
    'aisukuri-mu', 'ju-su', 'ho-mu', 'bo-ru', 'ta-oru', 'te-ma', 'se-ta-', 'ko-to',
    'su-tsu', 'nyu-su', 'ru-ru', 'ri-da-', 'se-ru', 'ko-ra', 'bo-rupenn', 'ha-to',
    'su-pu', 'ba-ta-', 'ka-ra-', 'pu-ru', 'ne-mu', 'konsa-to', 'me-ta-', 'kopi-', 'hi-ta-'
  ],

  /* Tên riêng cho bài dạy Shift/Enter. Tên gọi Nhật thông dụng, viết romaji không trường âm để
     đọc như tên trên danh thiếp (bài Enter viết hoa chữ đầu). */
  names: [
    'yuki', 'haruka', 'sakura', 'aoi', 'hana', 'yui', 'riko', 'mei', 'emi', 'mika',
    'kenta', 'daiki', 'takumi', 'haruto', 'sora', 'kaito', 'hiroshi', 'takashi', 'kenji',
    'akira', 'naoki', 'mai', 'rika', 'kaori'
  ],

  /* Câu cho các màn `dictation: 'sentence'`: văn nói lịch sự hằng ngày, gõ đúng như vào IME, mỗi
     từ (cùng trợ từ) cách nhau một dấu cách. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi đã dạy Shift và dấu chấm (IME đổi `.` thành 。). Năm câu đầu gõ được ngay từ
     Unit 1 — chỉ cần a s d f g h j k l e i r u. */
  sentences: [
    'haha ha sushi ga daisuki desu',
    'haru ha sakura ga kirei desu',
    'kare ha daigakusei desu',
    'kaigi ha asa kara desu',
    'ie ha eki kara sugu desu',
    'watashi ha gakusei desu',
    'kyou ha ii tenki desu ne',
    'ashita ha ame ga furu sou desu',
    'mainichi nihongo wo benkyou shimasu',
    'eki made aruite juppunn desu',
    'kono honn ha totemo omoshiroi desu',
    'asa gohann wo tabemashita',
    'tomodachi to kouenn he ikimasu',
    'heya no mado wo akete kudasai',
    'kaisha ha eki no chikaku ni arimasu',
    'shigoto no ato de ocha wo nomimasu',
    'yoru ha hayaku nemasu',
    'kinou ha ichinichi uchi ni imashita',
    'kono michi wo massugu itte kudasai',
    'watashi no shumi ha ryouri desu',
    'natsuyasumi ni umi he ikitai desu',
    'densha ha jikann doori ni kimashita',
    'sumimasenn eki ha doko desu ka',
    'yukkuri hanashite kudasai',
    'niwa ni sakura ga saite imasu',
    'kodomo ha kouenn de asonde imasu',
    'kyou ha kaze ga tsuyoi desu',
    'toshokann de honn wo karimashita'
  ]
};
