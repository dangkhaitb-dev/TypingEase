/* data/words/sw.js — kho từ tiếng Swahili (Kiswahili sanifu) cho khoá /sw/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 118 (Swahili (Kenya)), giống QWERTY Mỹ từng phím. Thứ tự phím vì thế là:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ' · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - = · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * TIẾNG SWAHILI KHÔNG CÓ DẤU, và không dùng q, x; c chỉ đi trong `ch`. Nên bài q p thực chất
 * là bài p, bài b x là bài b. Hàng cơ sở a s d f j k l đã viết được từ thật từ bài 4
 * (kaa, saa, dada, kaka, sasa), vì tiếng Swahili giàu nguyên âm `a` hơn hầu hết các ngôn ngữ.
 *
 * DẤU NHÁY ' là một phần của chính tả chuẩn: ng'ombe, ng'ambo, ng'aa — `ng'` là một âm riêng,
 * khác với `ng` trong ngoma. Phím ' dạy ở u2-l08, và `typeableWith` tự giữ những từ ấy lại đến
 * lúc đó.
 *
 * NGUỒN GỐC. Từ vựng phổ thông, dựng độc lập, xếp theo mốc phím rồi soát tay. Không lấy từ nội
 * dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md. Hai câu
 * cuối là tục ngữ dân gian, không thuộc về ai.
 *
 * LUẬT NHÀ:
 *   - Chỉ /^[a-z']+$/. Không chữ hoa (Shift dạy muộn), không gạch nối.
 *   - Kiswahili sanifu. Không tiếng lóng Sheng, không biến thể vùng miền.
 *   - Không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính trị, tôn giáo.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.sw = {
  lang: 'sw',

  alphabet: "abcdefghijklmnopqrstuvwxyz'",

  words: [
    // --- a s d f j k l  (u1-l04) --------------------------------------------------------
    'la', 'kaa', 'saa', 'jaa', 'ada', 'dada', 'kaka', 'sasa', 'lala', 'kasa',
    'jalada', 'falsafa', 'ala', 'faa',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'haja', 'hasa', 'shaka', 'saga', 'ghala', 'hadaa', 'shada', 'hafla',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'kila', 'hii', 'hili', 'hiki', 'kisa', 'sikia', 'safi', 'fikia', 'fika', 'kiasi',
    'jiji', 'sifa', 'hisia', 'shida', 'dhidi', 'sisi', 'kike', 'fisi', 'kijiji', 'hisi',
    'isha', 'kifaa', 'afisa', 'dakika', 'kasi', 'sahihi', 'hifadhi', 'lile', 'shika',
    'shikilia', 'safisha', 'faida', 'hadithi', 'likizo', 'ile',
    'hiyo', 'haki', 'fahali', 'elea', 'kisiki', 'jifiche',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'rafiki', 'siku', 'kujua', 'kufika', 'kusikia', 'kula', 'kuku', 'juu', 'ukurasa',
    'duka', 'fursa', 'shukuru', 'shule', 'ruka', 'rudi', 'furaha', 'haraka', 'sura',
    'usiku', 'hali', 'huru', 'uhuru', 'sukari', 'jua', 'shauri', 'dirisha', 'daraja',
    'sherehe', 'fedha', 'ruhusa', 'aridhi', 'safari', 'shairi', 'kusafiri', 'kufurahi',
    'kiu', 'ugali', 'saruji', 'rafu', 'kufua', 'kulia', 'fahari', 'suala', 'kuruhusu',
    'ushauri', 'darasa', 'gari', 'lugha', 'kusaidia', 'saidia', 'ajili', 'sheria',
    'hasara', 'shughuli', 'hudhuria', 'uji', 'ua', 'kua', 'ardhi', 'kurasa',
    'kurudi', 'rudia', 'kurudia', 'huduma', 'jirani', 'rahisi', 'kuishi',
    'duara', 'ukali', 'usafi', 'kusafisha', 'sahau',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'ya', 'tatu', 'tu', 'kitu', 'kutaka', 'taka', 'tafuta', 'yai', 'yake', 'yetu',
    'yule', 'yeye', 'tayari', 'kiti', 'hatua', 'tarehe', 'taifa', 'tisa', 'sita',
    'tiketi', 'jitihada', 'uhakika', 'tulia', 'tafadhali', 'hatari', 'utafiti',
    'kutaja', 'tai', 'desturi', 'tahadhari', 'shati', 'kutafuta', 'kuta', 'tatua',
    'fikiria', 'kufikiri', 'fikiri', 'sauti', 'kitalu', 'utaratibu', 'yeyote',
    'ukuta', 'kutua', 'itikia', 'historia', 'dereva', 'tahajia', 'kiatu',
    'tufaha',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'wa', 'wewe', 'kwa', 'watu', 'wote', 'sawa', 'wakati', 'hapo', 'leo', 'kesho',
    'kidole', 'wiki', 'dawa', 'kahawa', 'ofisi', 'hoteli', 'yako', 'hayo', 'yote',
    'kitabu', 'tofauti', 'kituo', 'tukio', 'redio', 'kushoto', 'dola', 'sehemu',
    'rangi', 'wao', 'kweli', 'ukweli', 'kawaida', 'wazo', 'wali', 'swali', 'maswali',
    'kwaheri', 'kuwa', 'kuwasili', 'wageni', 'wasiwasi', 'kufuata', 'fuata',
    'ukubwa', 'kiwanja', 'shauku', 'korosho', 'kitoweo', 'doa', 'shoka', 'soko',
    'jiko', 'wajibu', 'wakala', 'kioo', 'kilo', 'kote', 'lori', 'utoto',
    'kukaa', 'kuwaka', 'kufaa', 'kuwafikia', 'rudisha', 'wasichana', 'giza',
    'hilo', 'hivyo', 'kidogo', 'kikombe', 'kuosha', 'osha', 'sufuria',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'na', 'ni', 'nini', 'ndani', 'nje', 'nane', 'nne', 'nyumba', 'nyingi', 'ndiyo',
    'hapana', 'sana', 'chai', 'chakula', 'chini', 'cheti', 'kucheka', 'kucheza',
    'chungwa', 'nchi', 'kwenda', 'ngoma', 'nguo', 'kuanza', 'anza', 'kuona',
    'ona', 'jina', 'majina', 'nyota', 'nyuma', 'nzuri', 'lini', 'wanafunzi', 'lakini',
    'kuandika', 'andika', 'kusoma', 'soma', 'kitanda', 'nyanya', 'nanasi', 'ndizi',
    'chungu', 'uchafu', 'kuchora', 'chora', 'ndoto', 'nguvu',
    'kiini', 'nafasi', 'chuo', 'chumba', 'choo', 'kuchukua', 'chukua',
    'kinywaji', 'ngazi', 'jino', 'meno', 'nyeupe', 'nyekundu', 'kijani', 'njano',
    'nyeusi', 'kuendesha', 'endelea', 'kuendelea', 'uwanja', 'nafaka',
    'shangazi', 'tangu', 'hadi', 'kutana', 'kukutana', 'yaani', 'kwanza', 'tena',
    'kando', 'nyasi', 'chanzo', 'kinanda', 'jana', 'jioni', 'saidiana',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'mimi', 'mtu', 'mama', 'maji', 'moja', 'mbili', 'tano', 'saba', 'kumi', 'mia',
    'mti', 'miti', 'mji', 'miji', 'mvua', 'mwaka', 'miaka', 'mwezi', 'miezi', 'mkono',
    'mikono', 'mguu', 'miguu', 'mlango', 'milango', 'mwalimu', 'walimu', 'mtoto',
    'watoto', 'mlima', 'milima', 'mto', 'mito', 'moto', 'mwisho', 'mzuri', 'muda',
    'mahali', 'maisha', 'mambo', 'jambo', 'kama', 'kumaliza', 'maliza', 'mwanzo',
    'vizuri', 'vile', 'vitu', 'vitabu', 'vidole', 'vyakula', 'viti', 'vyumba', 'viatu',
    'kuvaa', 'vaa', 'vuta', 'kuvuta', 'mavazi', 'mvulana', 'msichana', 'mzee',
    'mkate', 'maziwa', 'mboga', 'matunda', 'embe', 'samaki', 'nyama', 'mchele',
    'mchana', 'asubuhi', 'muziki', 'mchezo', 'michezo', 'kompyuta', 'simu', 'mashine',
    'mstari', 'mistari', 'mfano', 'mifano', 'kamusi', 'mazoezi', 'zoezi', 'mwendo',
    'polepole', 'vema', 'kuvuka', 'vuka', 'mawingu', 'wingu',
    'mawe', 'jiwe', 'mchanga', 'msitu', 'misitu', 'mnyama', 'wanyama', 'maua',
    'mwanga', 'mwili', 'mkutano', 'mpira', 'mfuko', 'mifuko', 'kalamu', 'dunia',
    'maneno', 'neno', 'kumbuka', 'kukumbuka', 'kumbukumbu', 'matumaini',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'pia', 'pole', 'papo', 'hapa', 'pale', 'pamoja', 'penda', 'kupenda', 'pata',
    'kupata', 'pesa', 'pwani', 'picha', 'pikipiki', 'pilipili', 'pua', 'pumzika',
    'kupumzika', 'panda', 'kupanda', 'pana', 'pembe', 'pembeni', 'pili', 'pipi',
    'kupika', 'pika', 'kipindi', 'vipindi', 'kupiga', 'piga', 'pungufu', 'upande',
    'upepo', 'upendo', 'kipaji', 'kupita', 'pita', 'mpaka', 'paka', 'papai', 'pete',
    'kupokea', 'pokea', 'posta', 'ripoti', 'kipimo', 'kupima',
    'pima', 'mpango', 'mipango', 'kipande', 'vipande', 'shamba', 'mpishi',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bado', 'baba', 'bibi', 'babu', 'bahari', 'bei', 'basi', 'bila', 'bora', 'baridi',
    'barua', 'barabara', 'bustani', 'kibodi', 'kibao', 'bafu', 'bega', 'beba',
    'kubeba', 'bonyeza', 'kubonyeza', 'bahati', 'sababu', 'jibu', 'majibu', 'kujibu',
    'jaribu', 'kujaribu', 'tabia', 'habari', 'hebu', 'ubao', 'kabati', 'kabla',
    'baadaye', 'baada', 'biashara', 'benki', 'boma', 'blanketi', 'buibui',
    'kuoga', 'bati', 'mbuzi', 'mbwa', 'ubora', 'kibanda', 'nyuki',

    // --- + z . , '  (u2-l08) — dấu nháy mở ra ng' từ đây ---------------------------------
    'zaidi', 'zamani', 'zawadi', 'ziwa', 'zote', 'kazi', 'kuzaliwa', 'zima',
    'kuzima', 'ziara', 'zungumza', 'kuzungumza', 'mazungumzo', 'uzito', 'uzuri',
    'zaa', 'kuzaa', 'tazama', 'kutazama', 'lazima', 'baiskeli', 'mazingira',
    'kujifunza', 'jifunze', 'funza', 'fundisha', 'kufundisha', 'zoea', 'kuzoea', 'zuri',
    'kizuri', 'vizazi', 'kizazi', 'mizigo', 'mzigo', 'zeituni', 'sikiliza',
    'kusikiliza', 'eleza', 'kueleza', 'maelezo', 'tatizo', 'matatizo', 'wazazi', 'mzazi',
    "ng'ombe", "ng'ambo", "ng'aa", "kung'aa", "ng'ara", "ng'oa", "kung'oa", "ng'ang'ania",
    "ning'inia", "kuning'inia"
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ. */
  names: [
    'amani', 'baraka', 'neema', 'juma', 'zawadi', 'imani', 'rehema', 'halima',
    'amina', 'salma', 'jabari', 'faraji', 'hamisi', 'upendo', 'tumaini',
    'mombasa', 'nairobi', 'arusha', 'dodoma', 'kisumu', 'tanga', 'lamu'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. */
  sentences: [
    'mama anapika chakula jikoni',
    'watoto wanacheza nje ya nyumba',
    'nina kitabu kipya cha hadithi',
    'mvua ilinyesha usiku wote',
    'kesho tutasafiri kwenda pwani',
    'baba yangu anafanya kazi mjini',
    'tafadhali funga mlango wa darasa',
    'ninajifunza kuandika bila kutazama kibodi',
    'rafiki yangu anaishi karibu na soko',
    'chai hii ni moto sana',
    'tulikula wali na samaki jana jioni',
    'mwalimu anasoma habari kwa sauti',
    'kila siku natembea hadi kituo cha basi',
    'dada yangu anapenda kuimba nyimbo za zamani',
    'maji ya mto huu ni baridi sana',
    'vidole vyako vinarudi kwenye safu ya msingi',
    'tunapanda miti mingi kila mwaka',
    'duka hili linafunguliwa saa tatu asubuhi',
    "ng'ombe wanakula majani shambani",
    'haba na haba hujaza kibaba',
    'polepole ndio mwendo'
  ]
};
