/* data/languages.js — the catalogue the landing page picker is built from.
 *
 * Loaded with <script src="/data/languages.js"></script>. NOT fetched, exactly like
 * data/curriculum.*.js: it is small, it is needed before first paint, and a fetch would
 * put a spinner in the one place on the site that has to be instant.
 *
 * WHY THIS FILE EXISTS AT ALL. Three things that people constantly conflate are three
 * separate columns here, and the whole design of the landing page rests on keeping them apart:
 *
 *   1. the language someone wants to TYPE            → `code`, `native`
 *   2. the keyboard layout they type it ON           → `layouts`
 *   3. whether a COURSE for it is written yet        → `course`
 *
 * They do not line up one-to-one, and the clearest proof is the language this site was born
 * in. Vietnamese is typed by most people on a plain US QWERTY board with Telex — the tone
 * marks come from the letters s/f/r/x/j, not from dedicated keys. So `vi` below defaults to
 * layout 1 (United States Standard), not to layout 208 ("Vietnamese"), even though 208 exists
 * and has ă â ê ô sitting on the number row. Offering 208 first would be technically tidy and
 * wrong for almost every visitor. Since 2026-09-23 the national layouts are not listed at all:
 * they type tone marks from keys of their own, and showing one above a Telex lesson draws a
 * keyboard the lesson never uses. They come back when a direct-input course exists.
 *
 * `layouts` holds keyboard_id values from data/keyboards/index.json; the FIRST is the default.
 * The names are deliberately NOT copied here — landing.js reads them from the catalogue that
 * keyboard/boot.js already fetched, so a layout renamed in index.json is renamed everywhere.
 * An id listed here that is missing from index.json is dropped silently by landing.js rather
 * than rendering an option that resolves to the US fallback and quietly lies.
 *
 * `courses` — ONE COURSE PER KEY-SEQUENCE FAMILY, not per layout. A family is the set of layouts
 * on which scripts/build-course.js's lesson plan comes out as the same keys, lesson for lesson:
 * US/UK/Canadian English share one; BÉPO does not share with AZERTY even though both are French,
 * because its first lesson teaches `e` and `t`. Every id in `layouts` belongs to exactly one
 * family; the first family is the language's default and keeps the course code equal to the
 * language code (data/lessons/fr/), the others are `fr-bepo` and live at their own URL. Nobody
 * has to trust this list: build-course.js re-solves the plan on every layout of a family and
 * refuses to build if one of them disagrees. `name` labels the family on the landing page;
 * `keyboard` is the same thing as a phrase in the course's language, for page titles.
 * `handwritten: true` marks a course the generator must not touch (en, vi).
 *
 * `course.status`:
 *   'ready' — lessons exist, `href` opens the player and `roadmap` the lesson list.
 *   'soon'  — no lessons yet. The keyboard still renders in full. This is the honest state
 *             for 25 of the 27 entries and it is not a placeholder to be embarrassed about:
 *             showing someone their own keyboard, correctly, is worth more than hiding the
 *             language until a course exists for it.
 *
 * `dir: 'rtl'` is recorded but NOT yet acted on by the player — the four right-to-left entries
 * are all `soon`, and turning the lesson player around is its own piece of work. It is here so
 * that work has a single place to read from when it starts.
 *
 * `script` groups entries by writing system. Nothing uses it for logic yet; it is what a font
 * loader will key off, since "Be Vietnam Pro" has no Arabic, Devanagari, Thai, Hebrew, Hangul
 * or CJK glyphs and every one of those entries will need a font of its own.
 *
 * NO FLAG EMOJI, and this was tried first. Windows has never shipped a font with flag glyphs, so
 * a regional-indicator pair falls back to rendering its two letters: 🇺🇸 comes out as "us", 🇸🇦 as
 * "sa". A touch-typing course is used on a physical keyboard, which means it is overwhelmingly a
 * Windows audience, so the degraded form is the COMMON case here, not the edge case. The picker
 * showed "us English" and the grid showed "sa العربية" on the first screenshot taken of it.
 * The list therefore leans on the native name, and the grid badges the language code instead —
 * which is also the more honest label, since a flag is a country and these are languages. Arabic
 * is not Saudi Arabia, English is not the United States, and Spanish is neither Spain nor Mexico.
 */
window.TypingEaseLanguages = {
  // The language a visitor gets when nothing else tells us better. English, per the decision
  // that `/` is the English page; landing.js will still offer to switch on a mismatch.
  fallback: 'en',

  // Remembered across visits so the second arrival skips the picker. Bumping the suffix resets
  // everyone's choice, which is only ever the right move if the shape of the value changes.
  storageKey: 'typingease-language-v1',

  list: [
    /* ---- courses that exist ---------------------------------------------------------- */
    {
      code: 'en', native: 'English', english: 'English',
      script: 'latin', dir: 'ltr',
      // US first, then the other English-speaking standards, then the three alternative
      // layouts. Dvorak/Colemak/Workman are not languages, so this is the only place they
      // sensibly live: a choice an English typist makes, not a country they come from.
      layouts: [1, 120, 128, 123, 125, 129, 131, 132, 133],
      course: { status: 'ready', href: '/en/learn/', roadmap: '/en/lessons/', lessons: 34, units: 4 },
      courses: [
        { id: 'en', lessons: 34, units: 4, name: 'QWERTY', keyboard: 'the QWERTY keyboard', layouts: [1, 120, 128, 123, 125], href: '/en/learn/', roadmap: '/en/lessons/', handwritten: true },
        { id: 'en-dvorak', lessons: 35, units: 4, name: 'Dvorak', keyboard: 'the Dvorak layout', layouts: [129], href: '/en/dvorak/learn/', roadmap: '/en/dvorak/' },
        { id: 'en-colemak', lessons: 35, units: 4, name: 'Colemak', keyboard: 'the Colemak layout', layouts: [131], href: '/en/colemak/learn/', roadmap: '/en/colemak/' },
        { id: 'en-colemak-dh', lessons: 35, units: 4, name: 'Colemak-DH', keyboard: 'the Colemak-DH layout', layouts: [132], href: '/en/colemak-dh/learn/', roadmap: '/en/colemak-dh/' },
        { id: 'en-workman', lessons: 35, units: 4, name: 'Workman', keyboard: 'the Workman layout', layouts: [133], href: '/en/workman/learn/', roadmap: '/en/workman/' }
      ]
    },
    {
      code: 'es', native: 'Español', english: 'Spanish',
      script: 'latin', dir: 'ltr',
      // 175 trước: nó đặt ñ ở ô Semicolon, tức ngay hàng cơ sở dưới ngón út phải — và giáo trình
      // sinh ra từ chính bố cục đó nên bài 4 dạy "A y Ñ". Đổi sang 174 (Latin America) thì bài học
      // vẫn đúng, vì nó cũng đặt ñ ở đó.
      layouts: [175, 174, 176, 177],
      course: { status: 'ready', href: '/es/aprender/', roadmap: '/es/lecciones/', lessons: 35, units: 4 },
      courses: [
        { id: 'es', lessons: 35, units: 4, name: 'España', keyboard: 'el teclado español', layouts: [175, 176], href: '/es/aprender/', roadmap: '/es/lecciones/' },
        { id: 'es-latinoamerica', lessons: 36, units: 4, name: 'Latinoamérica', keyboard: 'el teclado latinoamericano', layouts: [174], href: '/es/latinoamerica/aprender/', roadmap: '/es/latinoamerica/' },
        { id: 'es-sin-teclas-muertas', lessons: 35, units: 4, name: 'Latinoamérica, sin teclas muertas', short: 'Latino (sin teclas muertas)', keyboard: 'el teclado latinoamericano sin teclas muertas', layouts: [177], href: '/es/sin-teclas-muertas/aprender/', roadmap: '/es/sin-teclas-muertas/' }
      ]
    },
    {
      code: 'de', native: 'Deutsch', english: 'German',
      script: 'latin', dir: 'ltr',
      // 188 trước, và giáo trình sinh ra từ chính nó: ö nằm ngay hàng cơ sở nên bài 4 dạy "A und Ö",
      // còn ü thì KHÔNG ở ô nào kế hoạch dạy — xem đầu data/words/de.js.
      layouts: [188, 189, 193, 190],
      course: { status: 'ready', href: '/de/lernen/', roadmap: '/de/lektionen/', lessons: 35, units: 4 },
      courses: [
        { id: 'de', lessons: 35, units: 4, name: 'QWERTZ', keyboard: 'die deutsche QWERTZ-Tastatur', layouts: [188, 189], href: '/de/lernen/', roadmap: '/de/lektionen/' },
        { id: 'de-schweiz', lessons: 36, units: 4, name: 'Schweiz', keyboard: 'die Schweizer Tastatur', layouts: [193], href: '/de/schweiz/lernen/', roadmap: '/de/schweiz/' },
        { id: 'de-neo', lessons: 33, units: 4, name: 'Neo', keyboard: 'die Neo-Tastatur', layouts: [190], href: '/de/neo/lernen/', roadmap: '/de/neo/' }
      ]
    },
    {
      code: 'it', native: 'Italiano', english: 'Italian',
      script: 'latin', dir: 'ltr',
      // 194 trước: ò ở hàng cơ sở, à ở bài dấu câu, còn dấu nháy — thứ tiếng Ý cần cho `l'acqua` —
      // chỉ tới ở u3-l02.
      layouts: [194, 195, 196, 197],
      course: { status: 'ready', href: '/it/imparare/', roadmap: '/it/lezioni/', lessons: 36, units: 4 },
      courses: [
        { id: 'it', lessons: 36, units: 4, name: 'QWERTY', keyboard: 'la tastiera italiana', layouts: [194, 195], href: '/it/imparare/', roadmap: '/it/lezioni/' },
        { id: 'it-mac', lessons: 33, units: 4, name: 'Mac', keyboard: 'la tastiera italiana del Mac', layouts: [196], href: '/it/mac/imparare/', roadmap: '/it/mac/' },
        { id: 'it-dvorak', lessons: 35, units: 4, name: 'Dvorak', keyboard: 'la tastiera Dvorak italiana', layouts: [197], href: '/it/dvorak/imparare/', roadmap: '/it/dvorak/' }
      ]
    },
    {
      code: 'fr', native: 'Français', english: 'French',
      script: 'latin', dir: 'ltr',
      // 181 trước, và giáo trình sinh ra từ chính nó. AZERTY là bố cục khó nhất trong Tier 2:
      // hàng cơ sở không có nguyên âm nào, dấu chấm là Maj + ô `;`, và hàng số không Maj in ra
      // é è ç à chứ không phải chữ số — xem đầu data/courses/fr.js.
      layouts: [181, 183, 186, 187, 184],
      course: { status: 'ready', href: '/fr/apprendre/', roadmap: '/fr/lecons/', lessons: 33, units: 4 },
      courses: [
        { id: 'fr', lessons: 33, units: 4, name: 'AZERTY', keyboard: 'le clavier AZERTY', layouts: [181, 183], href: '/fr/apprendre/', roadmap: '/fr/lecons/' },
        { id: 'fr-canadien', lessons: 35, units: 4, name: 'Canada', keyboard: 'le clavier canadien français', layouts: [186], href: '/fr/canadien/apprendre/', roadmap: '/fr/canadien/' },
        { id: 'fr-suisse', lessons: 33, units: 4, name: 'Suisse', keyboard: 'le clavier suisse romand', layouts: [187], href: '/fr/suisse/apprendre/', roadmap: '/fr/suisse/' },
        { id: 'fr-bepo', lessons: 32, units: 4, name: 'BÉPO', keyboard: 'le clavier BÉPO', layouts: [184], href: '/fr/bepo/apprendre/', roadmap: '/fr/bepo/' }
      ]
    },
    {
      code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese',
      script: 'latin', dir: 'ltr',
      // Layout 1 only. The course is Telex on a US board; layouts 208-212 ("Vietnamese") type
      // the tone marks from keys of their own, which is a different course nobody has written.
      // Listing them here drew those boards under Telex lessons that never use their keys.
      layouts: [1],
      course: { status: 'ready', href: '/hoc/', roadmap: '/bai-hoc/', lessons: 43, units: 5 },
      courses: [
        { id: 'vi', lessons: 43, units: 5, name: 'US', keyboard: 'bàn phím US', layouts: [1], href: '/hoc/', roadmap: '/bai-hoc/', handwritten: true }
      ]
    },

    /* ---- keyboard now, course later --------------------------------------------------- */
    { code: 'ar', native: 'العربية', english: 'Arabic', script: 'arabic', dir: 'rtl', layouts: [110, 141], course: { status: 'ready', href: '/ar/taallam/', roadmap: '/ar/durus/', lessons: 40, units: 4 },
      courses: [
        { id: 'ar', lessons: 40, units: 4, name: 'القياسية', keyboard: 'لوحة المفاتيح العربية القياسية', layouts: [110], href: '/ar/taallam/', roadmap: '/ar/durus/' },
        { id: 'ar-azerty', lessons: 37, units: 4, name: 'AZERTY', keyboard: 'لوحة المفاتيح العربية AZERTY', layouts: [141], href: '/ar/azerty/taallam/', roadmap: '/ar/azerty/' }
      ] },
    { code: 'bn', native: 'বাংলা', english: 'Bangla', script: 'bengali', dir: 'ltr', layouts: [107, 138], course: { status: 'ready', href: '/bn/shikhun/', roadmap: '/bn/path/', lessons: 37, units: 4 },
      courses: [
        { id: 'bn', lessons: 37, units: 4, name: 'জাতীয়', keyboard: 'জাতীয় কিবোর্ড', layouts: [107], href: '/bn/shikhun/', roadmap: '/bn/path/' },
        { id: 'bn-probhat', lessons: 36, units: 4, name: 'প্রভাত', keyboard: 'প্রভাত কিবোর্ড', layouts: [138], href: '/bn/probhat/shikhun/', roadmap: '/bn/probhat/' }
      ] },
    // Khoá tiếng Trung dạy gõ BÍNH ÂM trên QWERTY (bố cục 217) — đúng cách người dùng thật gõ qua bộ gõ.
    // Bố cục 18 là dữ liệu kiểu cũ không có `hardware`: không sinh được khoá hay bài nếm thử.
    { code: 'zh', native: '中文（简体）', english: 'Chinese (Simplified)', script: 'han', dir: 'ltr', layouts: [217], course: { status: 'ready', href: '/zh/xuexi/', roadmap: '/zh/kecheng/', lessons: 35, units: 4 },
      courses: [{ id: 'zh', lessons: 35, units: 4, name: '拼音', keyboard: '拼音 QWERTY 键盘', layouts: [217], href: '/zh/xuexi/', roadmap: '/zh/kecheng/' }] },
    { code: 'zh-tw', native: '中文（繁體）', english: 'Chinese (Traditional)', script: 'han', dir: 'ltr', layouts: [215], course: { status: 'ready', href: '/zh-tw/xuexi/', roadmap: '/zh-tw/kecheng/', lessons: 31, units: 4 },
      courses: [{ id: 'zh-tw', lessons: 31, units: 4, name: '注音', keyboard: '注音鍵盤', layouts: [215], href: '/zh-tw/xuexi/', roadmap: '/zh-tw/kecheng/' }] },
    { code: 'nl', native: 'Nederlands', english: 'Dutch', script: 'latin', dir: 'ltr', layouts: [198, 101, 199], course: { status: 'ready', href: '/nl/leren/', roadmap: '/nl/lessen/', lessons: 36, units: 4 },
      courses: [
        { id: 'nl', lessons: 36, units: 4, name: 'standaard', keyboard: 'het standaard Nederlandse toetsenbord', layouts: [198, 101], href: '/nl/leren/', roadmap: '/nl/lessen/' },
        { id: 'nl-mac', lessons: 35, units: 4, name: 'Mac', keyboard: 'het Nederlandse Mac-toetsenbord', layouts: [199], href: '/nl/mac/leren/', roadmap: '/nl/mac/' }
      ] },
    { code: 'fil', native: 'Filipino', english: 'Filipino', script: 'latin', dir: 'ltr', layouts: [117], course: { status: 'ready', href: '/fil/matuto/', roadmap: '/fil/aralin/', lessons: 35, units: 4 },
      courses: [{ id: 'fil', lessons: 35, units: 4, name: 'QWERTY', keyboard: 'ang QWERTY na keyboard', layouts: [117], href: '/fil/matuto/', roadmap: '/fil/aralin/' }] },
    { code: 'he', native: 'עברית', english: 'Hebrew', script: 'hebrew', dir: 'rtl', layouts: [142, 143, 144], course: { status: 'ready', href: '/he/lilmod/', roadmap: '/he/shiurim/', lessons: 35, units: 4 },
      courses: [
        { id: 'he', lessons: 35, units: 4, name: 'תקני', keyboard: 'המקלדת העברית התקנית', layouts: [142], href: '/he/lilmod/', roadmap: '/he/shiurim/' },
        { id: 'he-si1452', lessons: 34, units: 4, name: 'SI-1452', keyboard: 'מקלדת SI-1452', layouts: [143], href: '/he/si1452/lilmod/', roadmap: '/he/si1452/' },
        { id: 'he-fonetit', lessons: 35, units: 4, name: 'פונטית', keyboard: 'מקלדת עברית פונטית', layouts: [144], href: '/he/fonetit/lilmod/', roadmap: '/he/fonetit/' }
      ] },
    { code: 'hi', native: 'हिन्दी', english: 'Hindi', script: 'devanagari', dir: 'ltr', layouts: [106, 137], course: { status: 'ready', href: '/hi/seekhen/', roadmap: '/hi/path/', lessons: 36, units: 4 },
      courses: [
        { id: 'hi', lessons: 36, units: 4, name: 'इनस्क्रिप्ट', keyboard: 'इनस्क्रिप्ट कीबोर्ड', layouts: [106], href: '/hi/seekhen/', roadmap: '/hi/path/' },
        { id: 'hi-bolnagri', lessons: 36, units: 4, name: 'बोलनागरी', keyboard: 'बोलनागरी फ़ोनेटिक कीबोर्ड', layouts: [137], href: '/hi/bolnagri/seekhen/', roadmap: '/hi/bolnagri/' }
      ] },
    { code: 'id', native: 'Bahasa Indonesia', english: 'Indonesian', script: 'latin', dir: 'ltr', layouts: [115], course: { status: 'ready', href: '/id/belajar/', roadmap: '/id/pelajaran/', lessons: 35, units: 4 },
      courses: [{ id: 'id', lessons: 35, units: 4, name: 'QWERTY', keyboard: 'papan ketik QWERTY', layouts: [115], href: '/id/belajar/', roadmap: '/id/pelajaran/' }] },
    // Khoá tiếng Nhật dạy gõ ROMAJI — đúng cách người dùng thật gõ qua bộ gõ kana-kanji.
    { code: 'ja', native: '日本語', english: 'Japanese', script: 'japanese', dir: 'ltr', layouts: [216, 19], course: { status: 'ready', href: '/ja/manabu/', roadmap: '/ja/renshu/', lessons: 36, units: 4 },
      courses: [
        { id: 'ja', lessons: 36, units: 4, name: 'JIS', keyboard: 'JIS配列のキーボード', layouts: [216], href: '/ja/manabu/', roadmap: '/ja/renshu/' },
        { id: 'ja-us', lessons: 35, units: 4, name: 'US配列', keyboard: 'US配列のキーボード', layouts: [19], href: '/ja/us/manabu/', roadmap: '/ja/us/' }
      ] },
    // Khoá tiếng Hàn gõ qua bộ gõ 2-set: player chấm bằng hangul-match.js (jamo → âm tiết).
    { code: 'ko', native: '한국어', english: 'Korean', script: 'hangul', dir: 'ltr', layouts: [214], course: { status: 'ready', href: '/ko/baeugi/', roadmap: '/ko/gangui/', lessons: 35, units: 4 },
      courses: [{ id: 'ko', lessons: 35, units: 4, name: '두벌식', keyboard: '두벌식 자판', layouts: [214], href: '/ko/baeugi/', roadmap: '/ko/gangui/' }] },
    // 119 (Jawi, chữ Ả Rập) không thuộc khoá nào: khoá tiếng Mã Lai là chữ Latin. Nó vẫn nằm trong
    // bộ chọn, và landing.js dẫn nó tới bài nếm thử riêng thay vì một khoá dạy bàn phím khác.
    { code: 'ms', native: 'Bahasa Melayu', english: 'Malay', script: 'latin', dir: 'ltr', layouts: [116, 119], course: { status: 'ready', href: '/ms/belajar/', roadmap: '/ms/pelajaran/', lessons: 35, units: 4 },
      courses: [{ id: 'ms', lessons: 35, units: 4, name: 'QWERTY', keyboard: 'papan kekunci QWERTY', layouts: [116], href: '/ms/belajar/', roadmap: '/ms/pelajaran/' }] },
    { code: 'fa', native: 'فارسی', english: 'Persian', script: 'arabic', dir: 'rtl', layouts: [109, 140], course: { status: 'ready', href: '/fa/amoozesh/', roadmap: '/fa/darsha/', lessons: 40, units: 4 },
      courses: [
        { id: 'fa', lessons: 40, units: 4, name: 'استاندارد', keyboard: 'صفحه\u200cکلید استاندارد فارسی', layouts: [109], href: '/fa/amoozesh/', roadmap: '/fa/darsha/' },
        { id: 'fa-windows', lessons: 40, units: 4, name: 'ویندوز', keyboard: 'صفحه\u200cکلید فارسی ویندوز', layouts: [140], href: '/fa/windows/amoozesh/', roadmap: '/fa/windows/' }
      ] },
    { code: 'pl', native: 'Polski', english: 'Polish', script: 'latin', dir: 'ltr', layouts: [102, 201, 200], course: { status: 'ready', href: '/pl/nauka/', roadmap: '/pl/lekcje/', lessons: 35, units: 4 },
      courses: [
        { id: 'pl', lessons: 35, units: 4, name: 'programisty', keyboard: 'klawiatura polska programisty', layouts: [102, 201], href: '/pl/nauka/', roadmap: '/pl/lekcje/' },
        { id: 'pl-qwertz', lessons: 34, units: 4, name: 'QWERTZ', keyboard: 'klawiatura polska QWERTZ', layouts: [200], href: '/pl/qwertz/nauka/', roadmap: '/pl/qwertz/' }
      ] },
    { code: 'pt', native: 'Português', english: 'Portuguese', script: 'latin', dir: 'ltr', layouts: [178, 179], course: { status: 'ready', href: '/pt/aprender/', roadmap: '/pt/licoes/', lessons: 36, units: 4 },
      courses: [
        { id: 'pt', lessons: 36, units: 4, name: 'ABNT2', keyboard: 'o teclado brasileiro ABNT2', layouts: [178], href: '/pt/aprender/', roadmap: '/pt/licoes/' },
        { id: 'pt-sem-teclas-mortas', lessons: 36, units: 4, name: 'ABNT2 sem teclas mortas', keyboard: 'o teclado ABNT2 sem teclas mortas', layouts: [179], href: '/pt/sem-teclas-mortas/aprender/', roadmap: '/pt/sem-teclas-mortas/' }
      ] },
    { code: 'ru', native: 'Русский', english: 'Russian', script: 'cyrillic', dir: 'ltr', layouts: [103, 134], course: { status: 'ready', href: '/ru/uchitsya/', roadmap: '/ru/uroki/', lessons: 34, units: 4 },
      courses: [
        { id: 'ru', lessons: 34, units: 4, name: 'ЙЦУКЕН', keyboard: 'стандартная русская раскладка ЙЦУКЕН', layouts: [103], href: '/ru/uchitsya/', roadmap: '/ru/uroki/' },
        { id: 'ru-fonetika', lessons: 34, units: 4, name: 'фонетическая', keyboard: 'фонетическая раскладка', layouts: [134], href: '/ru/fonetika/uchitsya/', roadmap: '/ru/fonetika/' }
      ] },
    { code: 'sw', native: 'Kiswahili', english: 'Swahili', script: 'latin', dir: 'ltr', layouts: [118], course: { status: 'ready', href: '/sw/jifunze/', roadmap: '/sw/masomo/', lessons: 35, units: 4 },
      courses: [{ id: 'sw', lessons: 35, units: 4, name: 'QWERTY', keyboard: 'kibodi ya QWERTY', layouts: [118], href: '/sw/jifunze/', roadmap: '/sw/masomo/' }] },
    { code: 'th', native: 'ไทย', english: 'Thai', script: 'thai', dir: 'ltr', layouts: [105, 136], course: { status: 'ready', href: '/th/rian/', roadmap: '/th/bot-rian/', lessons: 36, units: 4 },
      courses: [
        { id: 'th', lessons: 36, units: 4, name: 'เกษมณี', keyboard: 'แป้นพิมพ์เกษมณี', layouts: [105], href: '/th/rian/', roadmap: '/th/bot-rian/' },
        { id: 'th-pattachote', lessons: 39, units: 4, name: 'ปัตตะโชติ', keyboard: 'แป้นพิมพ์ปัตตะโชติ', layouts: [136], href: '/th/pattachote/rian/', roadmap: '/th/pattachote/' }
      ] },
    { code: 'tr', native: 'Türkçe', english: 'Turkish', script: 'latin', dir: 'ltr', layouts: [204, 205], course: { status: 'ready', href: '/tr/ogren/', roadmap: '/tr/dersler/', lessons: 34, units: 4 },
      courses: [
        { id: 'tr', lessons: 34, units: 4, name: 'Q', keyboard: 'Türkçe Q klavye', layouts: [204], href: '/tr/ogren/', roadmap: '/tr/dersler/' },
        { id: 'tr-f', lessons: 34, units: 4, name: 'F', keyboard: 'Türkçe F klavye', layouts: [205], href: '/tr/f/ogren/', roadmap: '/tr/f/' }
      ] },
    { code: 'uk', native: 'Українська', english: 'Ukrainian', script: 'cyrillic', dir: 'ltr', layouts: [104, 135], course: { status: 'ready', href: '/uk/vchytysia/', roadmap: '/uk/uroky/', lessons: 34, units: 4 },
      courses: [
        { id: 'uk', lessons: 34, units: 4, name: 'стандартна', keyboard: 'стандартна українська розкладка', layouts: [104], href: '/uk/vchytysia/', roadmap: '/uk/uroky/' },
        { id: 'uk-fonetyka', lessons: 31, units: 4, name: 'фонетична', keyboard: 'фонетична розкладка', layouts: [135], href: '/uk/fonetyka/vchytysia/', roadmap: '/uk/fonetyka/' }
      ] },
    { code: 'ur', native: 'اردو', english: 'Urdu', script: 'arabic', dir: 'rtl', layouts: [108, 139], course: { status: 'ready', href: '/ur/seekhein/', roadmap: '/ur/asbaq/', lessons: 40, units: 4 },
      courses: [
        { id: 'ur', lessons: 40, units: 4, name: 'صوتی', keyboard: 'صوتی اردو کی بورڈ', layouts: [108], href: '/ur/seekhein/', roadmap: '/ur/asbaq/' },
        { id: 'ur-crulp', lessons: 40, units: 4, name: 'CRULP', keyboard: 'اردو کی بورڈ CRULP', layouts: [139], href: '/ur/crulp/seekhein/', roadmap: '/ur/crulp/' }
      ] }
  ]
};
