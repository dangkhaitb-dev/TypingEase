/* bai-hoc/config.it.mjs — cấu hình trang lộ trình tiếng Ý cho bai-hoc/generate.mjs.
 *
 * Chạy:  node bai-hoc/generate.mjs --lang it   →  it/lezioni/index.html
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.it.js. Đây là công cụ chạy lúc build; chữ nó sinh ra
 * đã nằm sẵn trong HTML khi trình duyệt nhận được. Đẩy chúng sang file i18n là bắt mọi khách
 * tải về một bảng chuỗi chỉ để dựng lại thứ đã có trong trang.
 *
 * ĐƯỜNG DẪN TUYỆT ĐỐI, vì cùng một chuỗi được dùng cho trang sâu hai cấp (/it/lezioni/) lẫn cho
 * các liên kết trỏ về gốc.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'it', 'lezioni', 'index.html'),
  url: 'https://typingease.site/it/lezioni/',
  // `alt` chỉ còn là di sản: hreflang nay dựng từ bảng ALTERNATES trong generate.mjs. Giữ lại
  // để mọi config cùng một hình dạng.
  alt: 'https://typingease.site/en/lessons/',
  curriculumScript: '/data/curriculum.it.js',
  ui: '/i18n/ui.it.js',

  routes: {
    home: '/it/', lessons: '/it/lezioni/', learn: '/it/imparare/',
    // Năm trang này chưa có bản tiếng Ý. `null` là tín hiệu BỎ liên kết: generate.mjs lọc mọi
    // hàng có href rỗng khỏi nav, sidebar, explore và footer.
    test: null, progress: '/it/progressi/', free: null, weak: null, guide: null, wpm: null
  },

  s: {
    title: c => `Corso di dattilografia online: ${c.sequence.length} lezioni | TypingEase`,
    // Trang lo trinh cua MOT HO ban phim khac (--course it-mac…). Xem config.en.mjs.
    family: {
      title: (c, f) => `Corso di dattilografia su tastiera ${f.name} | TypingEase`,
      description: (c, f) => `Corso di dattilografia gratuito costruito ${f.keyboard.replace(/^la /, 'sulla ')}: ${c.units.length} unità e ${c.sequence.length} lezioni, dalla riga di riposo ai numeri e ai testi lunghi.`,
      h1: (c, f) => `Corso di dattilografia · ${f.name} · ${c.sequence.length} lezioni`
    },
    description: c => `Corso di dattilografia online e gratuito in italiano: ${c.units.length} unità e ${c.sequence.length} lezioni, dalla riga di riposo ai numeri e ai testi lunghi, con Ò e À al loro posto.`,
    nav: r => [[r.home, 'Esercitati'], [r.lessons, 'Corso'], [r.progress, 'Progressi'], [r.test, 'Prova di velocità']],
    navAria: 'Navigazione principale',
    enter: 'Comincia',
    eyebrow: 'Il corso di TypingEase',
    h1: c => `Corso di dattilografia · ${c.sequence.length} lezioni · ${c.units.length} unità`,
    intro: 'Dai due tasti con il rilievo fino a paragrafi interi a buon ritmo. Ogni lezione insegna\n          due tasti nuovi distribuiti su schermate corte, alternando esercizi e raffiche a tempo —\n          circa cinque minuti ciascuna.',
    countDone: total => `0/${total} lezioni fatte`,
    cta: 'Comincia la lezione 1',
    sideUnit: 'Unità', sideOther: 'Altro', sideAria: 'Elenco delle unità',
    otherLinks: r => [[r.home, 'Scegli la tua tastiera'], [r.test, 'Prova di velocità'], [r.progress, 'I tuoi progressi']],
    unitKicker: n => `Unità ${n}`,
    locked: 'Chiusa',
    unitScore: 'lezioni fatte',
    noteNone: 'Questa unità è ancora in scrittura — le lezioni si apriranno man mano.',
    noteSome: (ready, total) => `${ready} lezioni su ${total} sono scritte; il resto sta arrivando.`,
    kind: { keys: '', review: 'Ripasso', weak: 'Personalizzata', test: 'Prova' },
    lessonMeta: (n, meta, tag) => `Lezione ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} secondi`, screens: n => `${n} schermate`, minutes: n => `${n} min`,
    soon: 'Presto',
    exploreEyebrow: 'Prima di cominciare', exploreTitle: 'Vale la pena saperlo prima',
    explore: r => [
      [r.learn, 'Comincia dalla riga di riposo', 'Otto tasti, otto dita e l’abitudine di non guardare in basso. La prima unità decide tutte le altre.', 'Apri la lezione 1'],
      [r.home, 'Scrivi sulla tua tastiera', 'QWERTY, AZERTY, QWERTZ, devanagari, arabo, JIS — disposizioni vere, e il corso segue quella che scegli.', 'Vedi le disposizioni']
    ],
    footerAria: 'Risorse di TypingEase',
    footerLinks: r => [[r.lessons, 'Corso'], [r.learn, 'Lezioni'], [r.progress, 'Progressi'], [r.test, 'Prova di velocità']],
    footerTag: 'Vai un po’ più piano e arriverai molto più lontano.',
    // Mọi ngôn ngữ KHÁC, chứ không phải một cái: với bốn bản thì "một nút đổi ngôn ngữ" không
    // còn trả lời được "đổi sang cái nào".
    switches: [
      ['EN', '/en/lessons/', 'en', 'English version'],
      ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']
    ]
  }
};
