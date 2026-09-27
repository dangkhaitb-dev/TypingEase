/* bai-hoc/config.de.mjs — cấu hình trang lộ trình tiếng Đức cho bai-hoc/generate.mjs.
 *
 * Chạy:  node bai-hoc/generate.mjs --lang de   → de/lektionen/index.html
 *
 * Bảng chuỗi nằm ở đây chứ không ở i18n/ui.de.js, vì generate.mjs là công cụ chạy lúc build:
 * mọi chữ bên dưới đã nằm sẵn trong HTML khi trình duyệt nhận được. Đẩy chúng sang file i18n là
 * bắt mọi khách tải về một bảng chuỗi chỉ để dựng lại thứ đã có trong trang.
 *
 * ĐƯỜNG DẪN TUYỆT ĐỐI, như mọi bản khác: trang này nằm sâu hai cấp (/de/lektionen/), `../` viết
 * cho bản tiếng Việt sâu một cấp sẽ trượt ở đây.
 *
 * Năm route của tiếng Đức là `null` (kiểm tra tốc độ, tiến độ, luyện tự do, phím yếu, hướng dẫn):
 * chưa có trang nào trong số đó bằng tiếng Đức. generate.mjs lọc `null` ra, nên không in liên kết
 * — đúng luật của ui.de.js, và KHÔNG trỏ sang bản tiếng Anh.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'de', 'lektionen', 'index.html'),
  url: 'https://typingease.site/de/lektionen/',
  alt: 'https://typingease.site/lessons/',
  curriculumScript: '/data/curriculum.de.js',
  ui: '/i18n/ui.de.js',

  routes: {
    home: '/de/', lessons: '/de/lektionen/', learn: '/de/lernen/',
    test: '/de/tipptest/', progress: '/de/fortschritt/', games: '/de/tippspiele/', free: null, weak: null, guide: null, wpm: null
  },

  s: {
    title: c => `Tastschreiben lernen: Kurs mit ${c.sequence.length} Lektionen | TypingEase`,
    // Trang lo trinh cua MOT HO ban phim khac (--course de-neo…). Xem config.en.mjs.
    family: {
      title: (c, f) => `10 Finger Schreiben für ${f.keyboard} | TypingEase`,
      description: (c, f) => `Kostenloser Kurs im Tastschreiben für ${f.keyboard}, gebaut auf dem echten Layout statt auf umbenanntem QWERTZ: ${c.units.length} Einheiten und ${c.sequence.length} Lektionen.`,
      h1: (c, f) => `Zehnfingersystem · ${f.name} · ${c.sequence.length} Lektionen`
    },
    description: c => `Tastschreiben lernen auf der deutschen QWERTZ-Tastatur: ${c.units.length} Einheiten und ${c.sequence.length} Lektionen, von der Grundstellung bis zu Zahlen, Zeichen und ganzen Absätzen.`,
    nav: r => [[r.home, 'Üben'], [r.lessons, 'Kurs'], [r.progress, 'Fortschritt'], [r.test, 'Tipptest'], [r.games, 'Spiele']],
    navAria: 'Hauptnavigation',
    enter: 'Loslegen',
    eyebrow: 'Der TypingEase-Kurs',
    h1: c => `Zehnfingersystem · ${c.sequence.length} Lektionen · ${c.units.length} Einheiten`,
    intro: 'Von den zwei Tasten mit der kleinen Erhebung bis zu ganzen Absätzen im Tempo. Jede Lektion\n          bringt zwei neue Tasten über ein paar kurze Bildschirme, im Wechsel aus Übung und Runde auf\n          Zeit — etwa fünf Minuten pro Lektion.',
    countDone: total => `0/${total} Lektionen geschafft`,
    cta: 'Lektion 1 beginnen',
    sideUnit: 'Einheiten', sideOther: 'Mehr', sideAria: 'Liste der Einheiten',
    otherLinks: r => [[r.learn, 'Zur ersten Lektion'], [r.home, 'Startseite'], [r.progress, 'Dein Fortschritt']],
    unitKicker: n => `Einheit ${n}`,
    locked: 'Noch zu',
    unitScore: 'Lektionen geschafft',
    noteNone: 'Diese Einheit wird noch geschrieben — die Lektionen öffnen sich, sobald sie fertig sind.',
    noteSome: (ready, total) => `${ready} von ${total} Lektionen sind geschrieben; der Rest ist unterwegs.`,
    kind: { keys: '', review: 'Wiederholung', weak: 'Persönlich', test: 'Test' },
    lessonMeta: (n, meta, tag) => `Lektion ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} Sekunden`, screens: n => `${n} Bildschirme`, minutes: n => `${n} Min`,
    soon: 'Bald',
    exploreEyebrow: 'Bevor du anfängst', exploreTitle: 'Gut zu wissen',
    explore: r => [
      [r.learn, 'Fang mit der Grundstellung an', 'Acht Tasten, acht Finger und die Gewohnheit, nicht nach unten zu sehen. Die erste Einheit entscheidet über den Rest.', 'Lektion 1 öffnen'],
      [r.lessons, 'Der ganze Weg auf einen Blick', 'Drei Einheiten, von der Grundstellung über Ä und Ö bis zur Zahlenreihe und dem Eszett.', 'Kurs ansehen']
    ],
    footerAria: 'TypingEase-Ressourcen',
    footerLinks: r => [[r.lessons, 'Kurs'], [r.learn, 'Lektionen'], [r.progress, 'Fortschritt'], [r.test, 'Tipptest'], [r.home, 'Startseite'], [r.games, 'Tippspiele']],
    footerTag: 'Geh ein wenig langsamer, dann kommst du deutlich weiter.',

    // Mọi ngôn ngữ KHÁC, chứ không phải một cái: với bốn bản thì "một nút đổi ngôn ngữ" không
    // còn trả lời được "đổi sang cái nào".
    switches: [
      ['EN', '/lessons/', 'en', 'English version'],
      ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']
    ]
  }
};
