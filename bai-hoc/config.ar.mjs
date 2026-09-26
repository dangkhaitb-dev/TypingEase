/* bai-hoc/config.ar.mjs — cau hinh trang lo trinh cho ban ar (tieng A Rap).
 *
 * Mot file moi ngon ngu, khong phai mot bang CONFIG chung: them ngon ngu la them file, va hai
 * nguoi them hai ngon ngu cung luc thi khong dam vao nhau. bai-hoc/generate.mjs nap file nay
 * theo `--lang`, va tu dat dir="rtl" cho trang (doc tu data/languages.js).
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.ar.js. Day la cong cu chay luc build; chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc.
 *
 * `null` trong `routes` = trang do chua co ban ngon ngu nay. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'ar', 'durus', 'index.html'),
    url: 'https://typingease.site/ar/durus/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.ar.js',
    ui: '/i18n/ui.ar.js',
    routes: {
      home: '/ar/', lessons: '/ar/durus/', learn: '/ar/taallam/', test: '/ar/ikhtibar-alkitaba/',
      progress: '/ar/taqaddum/', games: '/ar/alaab-alkitaba/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `دورة الكتابة باللمس بالعربية: ${c.sequence.length} درسا | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course ar-azerty). Xem config.en.mjs.
      family: {
        title: (c, f) => `دورة الكتابة باللمس على ${f.name} العربية: ${c.sequence.length} درسا | TypingEase`,
        description: (c, f) => `دورة مجانية للكتابة باللمس على ${f.keyboard}، مفتاحا بعد مفتاح: ${c.units.length} وحدات و${c.sequence.length} درسا، من صف الارتكاز إلى الأرقام والرموز والنصوص الطويلة.`,
        h1: (c, f) => `دورة الكتابة باللمس · ${f.name} · ${c.sequence.length} درسا`
      },
      description: c => `دورة مجانية للكتابة باللمس بالعربية: ${c.units.length} وحدات و${c.sequence.length} درسا، من صف الارتكاز إلى الهمزات والأرقام والنصوص الطويلة، على لوحة المفاتيح العربية نفسها.`,
      nav: r => [[r.home, 'تدرب'], [r.lessons, 'الدورة'], [r.progress, 'التقدم'], [r.test, 'اختبار'], [r.games, 'ألعاب']],
      navAria: 'التنقل الرئيسي',
      enter: 'ابدأ',
      eyebrow: 'دورة TypingEase',
      h1: c => `دورة الكتابة باللمس · ${c.sequence.length} درسا · ${c.units.length} وحدات`,
      intro: 'من المفتاحين اللذين عليهما علامة بارزة إلى فقرات كاملة بإيقاع ثابت. كل درس يعلم\n          مفتاحين جديدين في شاشات قصيرة، تتناوب فيها التمارين والسلاسل الموقوتة،\n          في نحو خمس دقائق.',
      countDone: total => `0/${total} دروس منتهية`,
      cta: 'ابدأ الدرس 1',
      sideUnit: 'الوحدات', sideOther: 'المزيد', sideAria: 'قائمة الوحدات',
      otherLinks: r => [[r.home, 'اختر لوحة المفاتيح'], [r.test, 'اختبار السرعة'], [r.progress, 'تقدمك']],
      unitKicker: n => `الوحدة ${n}`,
      locked: 'مغلقة',
      unitScore: 'دروس منتهية',
      noteNone: 'هذه الوحدة قيد الكتابة، وستفتح الدروس تباعا.',
      noteSome: (ready, total) => `${ready} من ${total} دروس مكتوبة، والباقي في الطريق.`,
      kind: { keys: '', review: 'مراجعة', weak: 'مخصص لك', test: 'اختبار' },
      lessonMeta: (n, meta, tag) => `الدرس ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} ثانية`, screens: n => `${n} شاشات`, minutes: n => `${n} دقائق`,
      soon: 'قريبا',
      exploreEyebrow: 'قبل أن تبدأ', exploreTitle: 'من المفيد أن تعرف',
      explore: r => [
        [r.learn, 'ابدأ بصف الارتكاز', 'ثمانية مفاتيح، ثمانية أصابع، وعادة ألا تنظر إلى الأسفل. الوحدة الأولى تحدد كل ما بعدها.', 'افتح الدرس 1'],
        [r.home, 'اكتب على لوحتك أنت', 'العربية، QWERTY، AZERTY، QWERTZ، JIS: تخطيطات حقيقية كثيرة، والدورة تتبع التخطيط الذي تختاره.', 'اعرض التخطيطات']
      ],
      footerAria: 'موارد TypingEase',
      footerLinks: r => [[r.home, 'تدرب'], [r.lessons, 'الدورة'], [r.progress, 'التقدم']],
      footerTag: 'اكتب أبطأ قليلا، تصل أبعد بكثير.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
