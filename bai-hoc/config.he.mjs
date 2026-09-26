/* bai-hoc/config.he.mjs — cau hinh trang lo trinh cho ban he (tieng Hebrew).
 *
 * Mot file moi ngon ngu: bai-hoc/generate.mjs nap file nay theo `--lang he`. Bang chuoi nam o
 * day chu khong o i18n/ui.he.js, vi chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Hebrew. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 * Chieu viet (dir="rtl") do generator tu dat theo data/languages.js.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'he', 'shiurim', 'index.html'),
    url: 'https://typingease.site/he/shiurim/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.he.js',
    ui: '/i18n/ui.he.js',
    routes: {
      home: '/he/', lessons: '/he/shiurim/', learn: '/he/lilmod/', test: '/he/mivchan-hakldada/',
      progress: '/he/hitkadmut/', games: '/he/mishakei-hakldada/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `קורס הקלדה עיוורת בעברית: ${c.sequence.length} שיעורים | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course he-si1452, he-fonetit). Xem config.en.mjs.
      family: {
        title: (c, f) => `קורס הקלדה עיוורת, מקלדת ${f.name}: ${c.sequence.length} שיעורים | TypingEase`,
        description: (c, f) => `קורס הקלדה עיוורת בחינם שבנוי על ${f.keyboard} עצמה, מקש אחרי מקש: ${c.units.length} יחידות ו־${c.sequence.length} שיעורים, משורת הבית ועד הספרות, הסימנים והטקסטים הארוכים.`,
        h1: (c, f) => `קורס הקלדה עיוורת · ${f.name} · ${c.sequence.length} שיעורים`
      },
      description: c => `קורס הקלדה עיוורת בחינם על המקלדת העברית התקנית: ${c.units.length} יחידות ו־${c.sequence.length} שיעורים, משורת הבית ועד הספרות, הסימנים והטקסטים הארוכים, עם האותיות הסופיות במקומן.`,
      nav: r => [[r.home, 'תרגול'], [r.lessons, 'קורס'], [r.progress, 'התקדמות'], [r.test, 'מבחן'], [r.games, 'משחקים']],
      navAria: 'ניווט ראשי',
      enter: 'להתחיל',
      eyebrow: 'הקורס של TypingEase',
      h1: c => `קורס הקלדה עיוורת · ${c.sequence.length} שיעורים · ${c.units.length} יחידות`,
      intro: 'משני המקשים המסומנים ועד פסקאות שלמות בקצב טוב. כל שיעור מלמד\n          שני מקשים חדשים במסכים קצרים, עם תרגילים וסדרות על זמן\n          לסירוגין — בערך חמש דקות לשיעור.',
      countDone: total => `0/${total} שיעורים הושלמו`,
      cta: 'להתחיל את שיעור 1',
      sideUnit: 'יחידות', sideOther: 'עוד', sideAria: 'רשימת היחידות',
      otherLinks: r => [[r.home, 'בחירת מקלדת'], [r.test, 'מבחן מהירות'], [r.progress, 'ההתקדמות שלכם']],
      unitKicker: n => `יחידה ${n}`,
      locked: 'נעולה',
      unitScore: 'שיעורים הושלמו',
      noteNone: 'היחידה הזו עדיין בכתיבה — השיעורים ייפתחו בהדרגה.',
      noteSome: (ready, total) => `${ready} מתוך ${total} שיעורים כבר כתובים; השאר בדרך.`,
      kind: { keys: '', review: 'חזרה', weak: 'מותאם אישית', test: 'מבחן' },
      lessonMeta: (n, meta, tag) => `שיעור ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} שניות`, screens: n => `${n} מסכים`, minutes: n => `${n} דק׳`,
      soon: 'בקרוב',
      exploreEyebrow: 'לפני שמתחילים', exploreTitle: 'כדאי לדעת',
      explore: r => [
        [r.learn, 'מתחילים בשורת הבית', 'שמונה מקשים, שמונה אצבעות וההרגל לא להסתכל למטה. היחידה הראשונה קובעת את כל השאר.', 'לשיעור 1'],
        [r.home, 'שלוש מקלדות עבריות', 'תקנית, SI-1452 ופונטית — ולכל אחת קורס משלה, שבנוי על המקשים שלה.', 'לדף התרגול']
      ],
      footerAria: 'משאבים של TypingEase',
      footerLinks: r => [[r.home, 'תרגול'], [r.lessons, 'קורס'], [r.progress, 'התקדמות']],
      footerTag: 'קצת יותר לאט, והרבה יותר רחוק.',
      switches: []
    }
};
