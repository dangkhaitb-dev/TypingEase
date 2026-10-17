/* data/words/fil.js — kho từ tiếng Filipino cho khoá /fil/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 117 (Filipino) — y hệt QWERTY Mỹ từng phím. Thứ tự phím vì thế là:
 *   f j · d k · s l · a ; · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , / · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - ' · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * KHÔNG CÓ Ñ. Bố cục 117 không có phím ñ (chỉ có ở tầng AltGr, mà player chưa dạy AltGr), nên
 * mọi từ chứa ñ (niño, señora, Santo Niño…) bị bỏ hẳn: một từ không gõ nổi là một dòng hỏng.
 *
 * TIẾNG FILIPINO HÀNG NGÀY, chính tả hiện hành (kuwarto, silya, estudyante, telepono). Chữ
 * c f j q v x z chỉ có trong từ mượn và tên riêng, nên các bài dạy chúng ít từ chứa chúng —
 * đó là hình dạng thật của ngôn ngữ, không phải lỗ hổng; generator tự rơi về từ trộn.
 * `ng` và `mga` tới muộn (n ở u2-l03, m ở u2-l04), đó là lý do Unit 1 nghe hơi cứng.
 *
 * GẠCH NỐI. Tiếng Filipino dùng gạch nối thật (mag-aral, araw-araw, pag-ibig). Vài từ như vậy
 * nằm ở cuối kho; `typeableWith` giữ chúng lại cho tới bài dạy phím `-`.
 *
 * NGUỒN GỐC. Soạn độc lập từ vốn từ phổ thông, xếp theo mốc phím, soát tay. Không lấy từ nội
 * dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ: chỉ /^[a-z-]+$/, không chữ hoa, không danh từ riêng ngoài `names`, không gì bạo
 * lực, y khoa, chính trị hay khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.fil = {
  lang: 'fil',

  alphabet: 'abcdefghijklmnopqrstuvwxyz-',

  words: [
    // --- a s d f j k l  (bài ôn tập đầu tiên) ---------------------------------------------
    // Không có i, o, u, e nào: chỉ còn những từ toàn a. Ít, và đó là hình dạng thật.
    'sa', 'ka', 'asa', 'sala', 'lasa', 'saka', 'kasal', 'kala', 'dala', 'dalas', 'dasal',
    'alaala', 'kalas', 'alas', 'lakad', 'lakas', 'laksa',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'haka', 'halaga', 'dagdag', 'hasa', 'hala', 'dagsa', 'lagda', 'alaga', 'alagad',
    'sagala', 'gaslaw', 'lagak',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'isa', 'sila', 'iisa', 'kilala', 'sisi', 'sigla', 'laki', 'lalaki', 'hila',
    'higa', 'sili', 'dilis', 'gilid', 'silid', 'sahig', 'halik', 'isda', 'halika', 'likas',
    'gilas', 'kilig', 'gisa', 'hilik', 'ilagak', 'sidhi', 'dikdik', 'kalahi',
    'kahel', 'kislap',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'aral', 'lugar', 'kuliglig', 'hugas', 'hula', 'sarili', 'iral', 'dagli', 'dahil',
    'suka', 'gusali', 'hari', 'alis', 'ugali', 'huli', 'sukli', 'lusak', 'lugi', 'usisa',
    'lagari', 'kulisap', 'usa', 'sulat', 'uhaw', 'dilaw', 'araw', 'gulay',
    'hiram', 'sariwa', 'kusa', 'laruan', 'laro', 'ilaw', 'sarsa', 'guhit',
    'lahi', 'saksi', 'hugis', 'luha', 'sulsi', 'kirot', 'ligaw', 'ahas', 'isip', 'lihim',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'at', 'ay', 'tayo', 'siya', 'kita', 'kaya', 'tatlo', 'lahat', 'ulit', 'dati',
    'tula', 'tulay', 'tuyo', 'ayaw', 'saya', 'tasa', 'tatay', 'lola', 'lolo', 'tita',
    'tito', 'ate', 'kuya', 'itlog', 'sigaw', 'sayaw', 'katulad', 'tulad', 'dalaga',
    'tuwa', 'titik', 'tahi', 'tuhod', 'talata', 'tigil', 'taas', 'itaas', 'tulog',
    'akyat', 'dikit', 'dagat', 'ilagay', 'huwag', 'hustisya', 'taya', 'layunin',
    'katawan', 'kalye', 'kulay', 'suriin', 'tali', 'sariling',
    'tuloy', 'sagot', 'kalat', 'katas', 'tigas', 'tiyak', 'hirit', 'likod', 'harap',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'o', 'ako', 'ito', 'iyo', 'ikaw', 'kayo', 'dito', 'doon', 'oo', 'sino', 'saloobin',
    'totoo', 'dalawa', 'oras', 'lugaw', 'tawa', 'sawa', 'awit', 'wala', 'walo', 'kotse',
    'tsokolate', 'kuwarto', 'kuwento', 'ulo', 'daliri', 'kuko', 'bibig', 'aso', 'lawa',
    'uwi', 'tawag', 'wika', 'sitaw', 'sigurado', 'dahon', 'hikaw', 'agaw',
    'kasiyahan', 'tahanan', 'gawa', 'gawain', 'kawali', 'lakaw', 'tuwalya',
    'toyo', 'kutsilyo', 'kutsara', 'gatas', 'tsaa', 'tawiran', 'dasalan', 'larawan',
    'gulong', 'sulok', 'ilog', 'bato', 'lutong', 'luto', 'hawak', 'tahol', 'tuktok',
    'kilos', 'sako', 'iwas', 'loob', 'sariwang',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    // `ng` và `na` mở ra từ đây: đây là bài tiếng Filipino bắt đầu nghe như tiếng Filipino.
    'ng', 'na', 'ang', 'nang', 'ano', 'sana', 'naku', 'hindi', 'ngayon', 'kanina',
    'kanan', 'kaliwa', 'kanin', 'tinapay', 'isang', 'dalawang', 'tatlong', 'anak',
    'kaibigan', 'aralin', 'ulan', 'hangin', 'init', 'langit', 'tanong', 'tanghali',
    'hapon', 'gabi', 'taon', 'linggo', 'ninyo', 'nila', 'niya', 'natin', 'kanila',
    'kanya', 'akin', 'atin', 'inyo', 'siyang', 'kailan', 'saan', 'ilan', 'alin',
    'hanggang', 'tungkol', 'noon', 'naman', 'lang', 'din', 'rin', 'tindahan', 'daan',
    'gitna', 'labas', 'itinuro', 'turo', 'ngiti', 'tingin', 'tunog', 'sining',
    'kanta', 'kanto', 'hintay', 'hanap', 'tandaan', 'handa', 'dinig', 'antok', 'unan',
    'unahin', 'una', 'huling', 'karinderya', 'talino', 'sagutin', 'sundin',
    'lungsod', 'bayan', 'bansa', 'kusina', 'hagdan', 'dingding', 'kalan', 'kandila',
    'ingat', 'ingay', 'ilong', 'tainga', 'dila', 'ngipin', 'noo', 'kilay', 'tiyan',
    'lindol', 'ninong', 'ninang', 'kuting', 'tandang', 'isinulat', 'nagsulat',
    'nakita', 'nakatayo', 'nakaupo', 'naglaro', 'nagluto', 'nagtanong', 'sinagot',
    'tinig', 'daing', 'singsing', 'sando', 'tinidor', 'saging', 'niyog',
    'sibuyas', 'kalinisan', 'dalangin', 'cebu',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    // `mga`, `may`, `mo` — cả nửa ngữ pháp còn lại.
    'mga', 'may', 'mo', 'ko', 'mayroon', 'kami', 'amin', 'namin', 'mama',
    'ama', 'ina', 'nanay', 'lima', 'anim', 'siyam', 'sampu', 'marami', 'kamay', 'mata',
    'mukha', 'mesa', 'mangga', 'manok', 'kamatis', 'mais', 'maalat', 'matamis',
    'masarap', 'malaki', 'maliit', 'mahaba', 'maikli', 'mataas', 'mababa', 'mabilis',
    'mabagal', 'malakas', 'mahina', 'mainit', 'malamig', 'maganda', 'mabait', 'masaya',
    'malinis', 'madali', 'mahirap', 'malayo', 'malapit', 'maaga', 'tahimik', 'maingay',
    'minsan', 'muli', 'mamaya', 'umaga', 'umuwi', 'umalis', 'uminom', 'kumain',
    'matulog', 'maligo', 'magluto', 'maglaro', 'magsulat', 'makinig', 'magsalita',
    'tumingin', 'tumayo', 'umupo', 'lumakad', 'maglakad', 'tumakbo', 'dumating',
    'tumulong', 'mahal', 'musika', 'minuto', 'numero', 'salamat', 'maraming', 'malamang',
    'iyan', 'iyon', 'kumusta', 'ngalan', 'mali', 'tama', 'damit', 'kama', 'kumot',
    'tuwing', 'lamang', 'mismo', 'maestra', 'maestro', 'guro', 'klase', 'silya',
    'sulatin', 'marunong', 'natuto', 'matuto', 'matandaan', 'hinliliit', 'hintuturo',
    'hinlalato', 'hinlalaki', 'daliring', 'tipa', 'magtipa', 'nagtipa', 'titigil',
    'video', 'vinta', 'visa',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'po', 'opo', 'pa', 'para', 'pero', 'paano', 'puwede', 'pito', 'apat', 'papel',
    'lapis', 'pinto', 'pader', 'paa', 'pisngi', 'puno', 'prutas', 'pinya', 'papaya',
    'patatas', 'pagkain', 'palengke', 'paaralan', 'probinsiya', 'pamilya', 'pinsan',
    'kapatid', 'kapitbahay', 'pangalan', 'panahon', 'paraan', 'pangarap', 'pagod',
    'pumunta', 'pumasok', 'pinindot', 'pindot', 'pindutin', 'upuan', 'kapag', 'pati',
    'palagi', 'pagkatapos', 'tapos', 'lapit', 'pula', 'puti', 'pasok', 'pantay', 'plato',
    'tapat', 'pakinig', 'sapatos', 'payong', 'pusa', 'ipon', 'aklatan', 'pahina',
    'pangungusap', 'tipan', 'sampung', 'pisara', 'kapit', 'hapag', 'paminta',
    'pulo', 'pumila', 'tamang', 'pansin', 'palad', 'pantig', 'pitaka', 'sipag',
    'quezon',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bata', 'babae', 'bahay', 'bago', 'bukas', 'bawat', 'baka', 'buhay', 'bulaklak',
    'bundok', 'bukid', 'buhangin', 'bituin', 'buwan', 'bibili', 'bumili', 'bumalik',
    'bumaba', 'bigay', 'ibigay', 'basa', 'magbasa', 'libro', 'aklat', 'baso', 'bote',
    'bigas', 'baboy', 'bawang', 'buhok', 'balikat', 'binti', 'braso', 'bubong',
    'bintana', 'bakuran', 'balita', 'bilis', 'biyahe', 'bisikleta', 'barko', 'bus',
    'bayad', 'magbayad', 'buo', 'berde', 'asul', 'itim', 'abo', 'kabayo',
    'ibon', 'isabit', 'sabaw', 'sabado', 'biyernes', 'lunes', 'martes', 'huwebes',
    'miyerkoles', 'bilang', 'bilog', 'babasahin', 'ubas', 'batang', 'bangko',
    'taxi',

    // --- + z . , /  (u2-l08) ------------------------------------------------------------
    'zoo', 'pizza', 'zipper',

    // --- mọi phím chữ đã có: những từ dài và thông dụng -----------------------------------
    'kailangan', 'dapat', 'gusto', 'alam', 'sabi', 'sinabi', 'ginawa', 'gumawa', 'kunin',
    'kinuha', 'hanapin', 'buksan', 'isara', 'hugasan', 'linisin', 'lutuin', 'basahin',
    'isulat', 'tumawag', 'sumayaw', 'kumanta', 'maghintay', 'magsimula', 'simula',
    'tapusin', 'lumabas', 'sumakay', 'umakyat', 'ngumiti', 'tumawa', 'subukan',
    'magturo', 'estudyante', 'kompyuter', 'telepono', 'teklado', 'eroplano', 'tren',
    'dyip', 'opisina', 'trabaho', 'magtrabaho', 'magsasaka', 'mangingisda', 'tindero',
    'tindera', 'almusal', 'tanghalian', 'hapunan', 'meryenda', 'ulam', 'karne', 'asukal',
    'asin', 'tubig', 'kape', 'luya', 'sabon', 'susi', 'pera', 'sombrero',
    'tsinelas', 'kahon', 'kaldero', 'pagkakataon', 'bagay', 'salita', 'kuwaderno',
    'bolpen', 'liham', 'awitin', 'sayawan', 'kaarawan', 'regalo', 'handaan',
    'simbahan', 'parke', 'palaruan', 'gubat', 'burol', 'lupa', 'apoy', 'usok',
    'dilim', 'ulap', 'bagyo', 'lamig', 'tag-init', 'tag-ulan', 'segundo', 'orasan',
    'ngunit', 'subalit', 'habang', 'kahit', 'mula', 'kasama', 'kasi', 'kung',
    'talaga', 'sabay', 'agad', 'sandali', 'madalas',
    'bihira', 'lagi', 'gaano', 'magkano', 'bakit', 'ilalim', 'ibabaw', 'tabi',
    'dulo', 'pagitan', 'paligid', 'lumang', 'luma', 'bagong', 'sarado',
    'kulang', 'sobra', 'sapat', 'buong', 'kalahati', 'ilang', 'iba',
    'ibang', 'pareho', 'magkaiba', 'mabuti', 'masama', 'maayos', 'magulo',
    'malungkot', 'galit', 'takot', 'gutom', 'busog', 'antukin', 'masipag', 'tamad',
    'matalino', 'matapang', 'mabango', 'malambot', 'matigas', 'mabigat', 'magaan',
    'makapal', 'manipis', 'malalim', 'mababaw', 'maluwag', 'masikip', 'mura',
    'mayaman', 'simple', 'tuwid', 'likuan', 'kaliwang', 'kanang', 'tuldok', 'kuwit',
    'letra', 'salitang', 'hilera',
    'pindutan', 'pagtipa', 'katumpakan', 'ritmo', 'pagsasanay',
    'magsanay', 'nagsasanay', 'sanayin', 'ulitin', 'dahan-dahan', 'araw-araw',
    'mag-aral', 'nag-aaral', 'pag-ibig', 'kay', 'si', 'ni', 'sina', 'nina', 'kina',
    'ba', 'daw', 'raw', 'pala', 'yata', 'sige', 'tara', 'halos', 'lalo', 'medyo', 'muna'
  ],

  /* Kho weak-keys.js đọc lúc chạy (poolFor đọc `drill`, KHÔNG đọc `words`). Không có mảng này
     thì bài phím yếu của /fil/ rơi về kho tiếng Việt mặc định. Từ gõ được bằng phím Unit 1 đứng
     đầu, vì bài phím yếu đầu tiên chỉ được dùng phím Unit 1. Chỉ từ ngắn. */
  drill: [
    // Unit 1: a s d f g h e i j k l r u
    'sa', 'ka', 'asa', 'sala', 'lasa', 'saka', 'kasal', 'kala', 'dala', 'dalas', 'dasal',
    'alaala', 'kalas', 'alas', 'lakad', 'lakas', 'laksa', 'haka', 'halaga', 'dagdag', 'hasa',
    'hala', 'dagsa', 'lagda', 'alaga', 'alagad', 'sagala', 'lagak', 'isa', 'sila', 'iisa',
    'kilala', 'sisi', 'sigla', 'laki', 'lalaki', 'hila', 'higa', 'sili', 'dilis', 'gilid',
    'silid', 'sahig', 'halik', 'isda', 'halika', 'likas', 'gilas', 'kilig', 'gisa', 'hilik',
    'ilagak', 'sidhi', 'dikdik', 'kalahi', 'kahel', 'aral', 'lugar', 'hugas', 'hula', 'sarili',
    'iral', 'dagli', 'dahil', 'suka', 'gusali', 'hari', 'alis', 'ugali', 'huli', 'sukli',
    'lusak', 'lugi', 'usisa', 'lagari', 'usa', 'kusa', 'sarsa', 'lahi', 'saksi', 'hugis',
    'luha', 'sulsi', 'ahas', 'dalaga', 'daliri', 'dila', 'klase', 'asul', 'isara', 'asukal',
    'susi', 'kasi', 'agad', 'lagi', 'hilera', 'si', 'sige',
    // phần còn lại
    'gaslaw', 'kislap', 'kulisap', 'sulat', 'uhaw', 'dilaw', 'araw', 'gulay', 'hiram', 'sariwa',
    'laruan', 'laro', 'ilaw', 'guhit', 'kirot', 'ligaw', 'isip', 'lihim', 'at', 'ay', 'tayo',
    'siya', 'kita', 'kaya', 'tatlo', 'lahat', 'ulit', 'dati', 'tula', 'tulay', 'tuyo', 'ayaw',
    'saya', 'tasa', 'tatay', 'lola', 'lolo', 'tita', 'tito', 'ate', 'kuya', 'itlog', 'sigaw',
    'sayaw', 'katulad', 'tulad', 'tuwa', 'titik', 'tahi', 'tuhod', 'talata', 'tigil', 'taas',
    'itaas', 'tulog', 'akyat', 'dikit', 'dagat', 'ilagay', 'huwag', 'taya', 'layunin',
    'katawan', 'kalye', 'kulay', 'suriin', 'tali', 'tuloy', 'sagot', 'kalat', 'katas', 'tigas',
    'tiyak', 'hirit', 'likod', 'harap', 'ako', 'ito', 'iyo', 'ikaw', 'kayo', 'dito', 'doon',
    'oo', 'sino', 'totoo', 'dalawa', 'oras', 'lugaw', 'tawa', 'sawa', 'awit', 'wala', 'walo',
    'kotse', 'kuwarto', 'kuwento', 'ulo', 'kuko', 'bibig', 'aso', 'lawa', 'uwi', 'tawag',
    'wika', 'sitaw', 'dahon', 'hikaw', 'agaw', 'tahanan', 'gawa', 'gawain', 'kawali', 'lakaw',
    'tuwalya', 'toyo', 'kutsara', 'gatas', 'tsaa', 'tawiran', 'dasalan', 'larawan', 'gulong',
    'sulok', 'ilog', 'bato', 'lutong', 'luto', 'hawak', 'tahol', 'tuktok', 'kilos', 'sako',
    'iwas', 'loob', 'ng', 'na', 'ang', 'nang', 'ano', 'sana', 'naku', 'hindi', 'ngayon',
    'kanina', 'kanan', 'kaliwa', 'kanin', 'tinapay', 'isang', 'tatlong', 'anak', 'aralin',
    'ulan', 'hangin', 'init', 'langit', 'tanong', 'hapon', 'gabi', 'taon', 'linggo', 'ninyo',
    'nila', 'niya', 'natin', 'kanila', 'kanya', 'akin', 'atin', 'inyo', 'siyang', 'kailan',
    'saan', 'ilan', 'alin', 'tungkol', 'noon', 'naman', 'lang', 'din', 'rin', 'daan', 'gitna',
    'labas', 'itinuro', 'turo', 'ngiti', 'tingin', 'tunog', 'sining', 'kanta', 'kanto',
    'hintay', 'hanap', 'tandaan', 'handa', 'dinig', 'antok', 'unan', 'unahin', 'una', 'huling',
    'talino', 'sagutin', 'sundin', 'lungsod', 'bayan', 'bansa', 'kusina', 'hagdan', 'kalan',
    'kandila', 'ingat', 'ingay', 'ilong', 'tainga', 'ngipin', 'noo', 'kilay', 'tiyan', 'lindol',
    'ninong', 'ninang', 'kuting', 'tandang', 'nakita', 'nakaupo', 'naglaro', 'nagluto',
    'sinagot', 'tinig', 'daing', 'sando', 'tinidor', 'saging', 'niyog', 'sibuyas', 'cebu',
    'mga', 'may', 'mo', 'ko', 'mayroon', 'kami', 'amin', 'namin', 'mama', 'ama', 'ina', 'nanay',
    'lima', 'anim', 'siyam', 'sampu', 'marami', 'kamay', 'mata', 'mukha', 'mesa', 'mangga',
    'manok', 'kamatis', 'mais', 'maalat', 'matamis', 'masarap', 'malaki', 'maliit', 'mahaba',
    'maikli', 'mataas', 'mababa', 'mabilis', 'mabagal', 'malakas', 'mahina', 'mainit',
    'malamig', 'maganda', 'mabait', 'masaya', 'malinis', 'madali', 'mahirap', 'malayo',
    'malapit', 'maaga', 'tahimik', 'maingay', 'minsan', 'muli', 'mamaya', 'umaga', 'umuwi',
    'umalis', 'uminom', 'kumain', 'matulog', 'maligo', 'magluto', 'maglaro', 'makinig',
    'tumayo', 'umupo', 'lumakad', 'tumakbo', 'mahal', 'musika', 'minuto', 'numero', 'salamat',
    'iyan', 'iyon', 'kumusta', 'ngalan', 'mali', 'tama', 'damit', 'kama', 'kumot', 'tuwing',
    'lamang', 'mismo', 'maestra', 'maestro', 'guro', 'silya', 'sulatin', 'natuto', 'matuto',
    'tipa', 'magtipa', 'nagtipa', 'titigil', 'video', 'vinta', 'visa', 'po', 'opo', 'pa',
    'para', 'pero', 'paano', 'puwede', 'pito', 'apat', 'papel', 'lapis', 'pinto', 'pader',
    'paa', 'pisngi', 'puno', 'prutas', 'pinya', 'papaya', 'patatas', 'pagkain', 'pamilya',
    'pinsan', 'kapatid', 'panahon', 'paraan', 'pagod', 'pumunta', 'pumasok', 'pindot', 'upuan',
    'kapag', 'pati', 'palagi', 'tapos', 'lapit', 'pula', 'puti', 'pasok', 'pantay', 'plato',
    'tapat', 'pakinig', 'sapatos', 'payong', 'pusa', 'ipon', 'aklatan', 'pahina', 'tipan',
    'sampung', 'pisara', 'kapit', 'hapag', 'paminta', 'pulo', 'pumila', 'tamang', 'pansin',
    'palad', 'pantig', 'pitaka', 'sipag', 'quezon', 'bata', 'babae', 'bahay', 'bago', 'bukas',
    'bawat', 'baka', 'buhay', 'bundok', 'bukid', 'bituin', 'buwan', 'bibili', 'bumili',
    'bumalik', 'bumaba', 'bigay', 'ibigay', 'basa', 'magbasa', 'libro', 'aklat', 'baso', 'bote',
    'bigas', 'baboy', 'bawang', 'buhok', 'balikat', 'binti', 'braso', 'bubong', 'bintana',
    'bakuran', 'balita', 'bilis', 'biyahe', 'barko', 'bus', 'bayad', 'buo', 'berde', 'itim',
    'abo', 'kabayo', 'ibon', 'isabit', 'sabaw', 'sabado', 'lunes', 'martes', 'huwebes',
    'bilang', 'bilog', 'ubas', 'batang', 'bangko', 'taxi', 'zoo', 'pizza', 'zipper', 'dapat',
    'gusto', 'alam', 'sabi', 'sinabi', 'ginawa', 'gumawa', 'kunin', 'kinuha', 'hanapin',
    'buksan', 'hugasan', 'linisin', 'lutuin', 'basahin', 'isulat', 'tumawag', 'sumayaw',
    'kumanta', 'simula', 'tapusin', 'lumabas', 'sumakay', 'umakyat', 'ngumiti', 'tumawa',
    'subukan', 'magturo', 'teklado', 'tren', 'dyip', 'opisina', 'trabaho', 'tindero', 'tindera',
    'almusal', 'hapunan', 'ulam', 'karne', 'asin', 'tubig', 'kape', 'luya', 'sabon', 'pera',
    'kahon', 'kaldero', 'bagay', 'salita', 'bolpen', 'liham', 'awitin', 'sayawan', 'regalo',
    'handaan', 'parke', 'gubat', 'burol', 'lupa', 'apoy', 'usok', 'dilim', 'ulap', 'bagyo',
    'lamig', 'segundo', 'orasan', 'ngunit', 'subalit', 'habang', 'kahit', 'mula', 'kasama',
    'kung', 'talaga', 'sabay', 'sandali', 'madalas', 'bihira', 'gaano', 'magkano', 'bakit',
    'ilalim', 'ibabaw', 'tabi', 'dulo', 'pagitan', 'paligid', 'lumang', 'luma', 'bagong',
    'sarado', 'kulang', 'sobra', 'sapat', 'buong', 'ilang', 'iba', 'ibang', 'pareho', 'mabuti',
    'masama', 'maayos', 'magulo', 'galit', 'takot', 'gutom', 'busog', 'antukin', 'masipag',
    'tamad', 'mabango', 'matigas', 'mabigat', 'magaan', 'makapal', 'manipis', 'malalim',
    'mababaw', 'maluwag', 'masikip', 'mura', 'mayaman', 'simple', 'tuwid', 'likuan', 'kanang',
    'tuldok', 'kuwit', 'letra', 'pagtipa', 'ritmo', 'sanayin', 'ulitin', 'kay', 'ni', 'sina',
    'nina', 'kina', 'ba', 'daw', 'raw', 'pala', 'yata', 'tara', 'halos', 'lalo', 'medyo',
    'muna'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ. */
  names: [
    'maria', 'jose', 'juan', 'ana', 'rosa', 'pedro', 'luis', 'carlo', 'miguel',
    'paolo', 'andrea', 'grace', 'joy', 'rico', 'liza', 'nena', 'tess', 'ramon',
    'manila', 'cebu', 'davao', 'iloilo', 'baguio'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. */
  sentences: [
    'ang bahay namin ay may pulang pinto',
    'nagbabasa ng libro ang bata sa sala',
    'nagtatrabaho ang nanay ko sa lungsod',
    'wala akong oras para sa lakad na iyan',
    'natutulog ang pusa sa ibabaw ng mesa',
    'naglalakad ako tuwing umaga papunta sa palengke',
    'masarap ang luto ng lola ko tuwing linggo',
    'kailangan kong bumili ng papel at dalawang lapis',
    'maagang dumating ang tren kaninang umaga',
    'sumusulat siya ng liham sa kanyang mga kaibigan',
    'mainit ang panahon sa buwan ng abril',
    'naglalaro ang mga bata sa bakuran ng paaralan',
    'gusto kong matutong magtipa nang hindi tumitingin sa mga daliri ko',
    'nakaharap sa kalye ang bintana ng kuwarto ko',
    'nagluluto ang tatay ko ng hapunan tuwing sabado',
    'wala sa mesa ang librong hinahanap ko',
    'may sariling bilis ang bawat tao',
    'malakas ang ulan sa buwan ng hulyo',
    'maglakad tayo sa parke mamayang hapon',
    'mabilis lumipas ang oras kapag masaya ka sa ginagawa mo',
    'bumalik ang daliri sa gitnang hanay pagkatapos ng bawat titik',
    'dahan-dahan muna bago bumilis'
  ]
};
