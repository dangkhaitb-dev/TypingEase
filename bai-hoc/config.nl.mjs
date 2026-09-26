/* bai-hoc/config.nl.mjs — cấu hình trang lộ trình tiếng Hà Lan cho bai-hoc/generate.mjs.
 *
 * Chạy:  node bai-hoc/generate.mjs --lang nl   →  nl/lessen/index.html
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.nl.js: đây là công cụ chạy lúc build, chữ nó sinh ra đã
 * nằm sẵn trong HTML khi trình duyệt nhận được.
 *
 * ĐƯỜNG DẪN TUYỆT ĐỐI, vì cùng một chuỗi được dùng cho trang sâu hai cấp (/nl/lessen/) lẫn cho
 * các liên kết trỏ về gốc.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'nl', 'lessen', 'index.html'),
  url: 'https://typingease.site/nl/lessen/',
  // `alt` chỉ còn là di sản: hreflang nay dựng từ bảng ALTERNATES trong generate.mjs.
  alt: 'https://typingease.site/en/lessons/',
  curriculumScript: '/data/curriculum.nl.js',
  ui: '/i18n/ui.nl.js',

  routes: {
    home: '/nl/', lessons: '/nl/lessen/', learn: '/nl/leren/',
    // Năm trang này chưa có bản tiếng Hà Lan. `null` là tín hiệu BỎ liên kết.
    test: null, progress: '/nl/voortgang/', free: null, weak: null, guide: null, wpm: null
  },

  s: {
    title: c => `Typecursus: 10 vingers typen in ${c.sequence.length} lessen | TypingEase`,
    // Trang lộ trình của MỘT HỌ bàn phím khác (--course nl-mac). Xem config.en.mjs.
    family: {
      title: (c, f) => `Blind typen op ${f.keyboard} | TypingEase`,
      description: (c, f) => `Gratis typecursus gebouwd op ${f.keyboard}, toets voor toets: ${c.units.length} units en ${c.sequence.length} lessen, van de thuisrij tot cijfers, tekens en lange teksten.`,
      h1: (c, f) => `Typecursus · ${f.name} · ${c.sequence.length} lessen`
    },
    description: c => `Gratis typecursus voor typen met tien vingers: ${c.units.length} units en ${c.sequence.length} lessen op het Nederlandse toetsenbord, van de thuisrij tot cijfers, tekens en lange teksten.`,
    nav: r => [[r.home, 'Oefenen'], [r.lessons, 'Cursus'], [r.progress, 'Voortgang'], [r.test, 'Snelheidstest']],
    navAria: 'Hoofdnavigatie',
    enter: 'Beginnen',
    eyebrow: 'De cursus van TypingEase',
    h1: c => `Typecursus · ${c.sequence.length} lessen · ${c.units.length} units`,
    intro: 'Van de twee toetsen met een ribbeltje tot hele alinea\'s in een goed tempo. Elke les leert\n          twee nieuwe toetsen, verdeeld over korte schermen met oefeningen en reeksen op tijd —\n          ongeveer vijf minuten per les.',
    countDone: total => `0/${total} lessen afgerond`,
    cta: 'Begin met les 1',
    sideUnit: 'Unit', sideOther: 'Overig', sideAria: 'Lijst van units',
    otherLinks: r => [[r.home, 'Kies je toetsenbord'], [r.test, 'Snelheidstest'], [r.progress, 'Je voortgang']],
    unitKicker: n => `Unit ${n}`,
    locked: 'Gesloten',
    unitScore: 'lessen afgerond',
    noteNone: 'Deze unit wordt nog geschreven — de lessen gaan een voor een open.',
    noteSome: (ready, total) => `${ready} van de ${total} lessen zijn geschreven; de rest komt eraan.`,
    kind: { keys: '', review: 'Herhaling', weak: 'Persoonlijk', test: 'Test' },
    lessonMeta: (n, meta, tag) => `Les ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} seconden`, screens: n => `${n} schermen`, minutes: n => `${n} min`,
    soon: 'Binnenkort',
    exploreEyebrow: 'Voordat je begint', exploreTitle: 'Goed om vooraf te weten',
    explore: r => [
      [r.learn, 'Begin bij de thuisrij', 'Acht toetsen, acht vingers en de gewoonte om niet omlaag te kijken. De eerste unit bepaalt alle andere.', 'Open les 1'],
      [r.home, 'Typ op je eigen toetsenbord', 'QWERTY, AZERTY, QWERTZ, devanagari, Arabisch, JIS — echte indelingen, en de cursus volgt de indeling die je kiest.', 'Bekijk de indelingen']
    ],
    footerAria: 'Bronnen van TypingEase',
    footerLinks: r => [[r.lessons, 'Cursus'], [r.learn, 'Lessen'], [r.progress, 'Voortgang'], [r.test, 'Snelheidstest']],
    footerTag: 'Typ iets langzamer, en je komt veel verder.',
    switches: [
      ['EN', '/en/lessons/', 'en', 'English version'],
      ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']
    ]
  }
};
