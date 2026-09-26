/* bai-hoc/config.fr.mjs — cấu hình trang lộ trình cho bản tiếng Pháp.
 *
 * Một file mỗi ngôn ngữ, không phải một bảng CONFIG chung: thêm ngôn ngữ là thêm file, và hai
 * người thêm hai ngôn ngữ cùng lúc thì không đâm vào nhau. bai-hoc/generate.mjs nạp file này
 * theo `--lang`.
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.fr.js. Đây là công cụ chạy lúc build; chữ nó sinh ra đã
 * nằm sẵn trong HTML khi trình duyệt nhận được.
 *
 * `null` trong `routes` = trang đó chưa có bản tiếng Pháp. Mọi danh sách bên dưới lọc null ra,
 * nên không có liên kết nào trỏ vào 404 hay sang một trang ngôn ngữ khác.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'fr', 'lecons', 'index.html'),
  url: 'https://typingease.site/fr/lecons/',
  alt: 'https://typingease.site/en/lessons/',
  curriculumScript: '/data/curriculum.fr.js',
  ui: '/i18n/ui.fr.js',
  routes: {
    home: '/fr/', lessons: '/fr/lecons/', learn: '/fr/apprendre/', test: '/fr/test-de-frappe/',
    progress: '/fr/progres/', games: '/fr/jeux-de-dactylographie/', free: null, weak: null, guide: null, wpm: null
  },
  s: {
    title: c => `Cours de dactylographie AZERTY : ${c.sequence.length} leçons | TypingEase`,
    // Trang lo trinh cua MOT HO ban phim khac (--course fr-bepo…). Xem config.en.mjs.
    family: {
      title: (c, f) => `Dactylographie sur ${f.keyboard} | TypingEase`,
      description: (c, f) => `Cours de dactylographie gratuit construit sur ${f.keyboard} : ${c.units.length} unités et ${c.sequence.length} leçons, de la rangée de repos aux textes longs.`,
      h1: (c, f) => `Cours de dactylographie · ${f.name} · ${c.sequence.length} leçons`
    },
    description: c => `Cours de dactylographie gratuit : ${c.units.length} unités et ${c.sequence.length} leçons sur clavier AZERTY, de la rangée de repos aux accents, aux chiffres et aux textes longs.`,
    nav: r => [[r.home, 'Pratiquer'], [r.lessons, 'Cours'], [r.progress, 'Progrès'], [r.test, 'Test'], [r.games, 'Jeux']],
    navAria: 'Navigation principale',
    enter: 'Commencer',
    eyebrow: 'Le cours TypingEase',
    h1: c => `Cours de dactylographie · ${c.sequence.length} leçons · ${c.units.length} unités`,
    intro: "Des deux touches à repère jusqu'aux paragraphes entiers à bon rythme. Chaque leçon\n          enseigne deux touches nouvelles réparties sur des écrans courts, en alternant\n          exercices et séries chronométrées — environ cinq minutes chacune.",
    countDone: total => `0/${total} leçons faites`,
    cta: 'Commencer la leçon 1',
    sideUnit: 'Unités', sideOther: 'Plus', sideAria: 'Liste des unités',
    otherLinks: r => [[r.home, 'Choisis ton clavier'], [r.test, 'Test de vitesse'], [r.progress, 'Tes progrès']],
    unitKicker: n => `Unité ${n}`,
    locked: 'Fermée',
    unitScore: 'leçons faites',
    noteNone: "Cette unité est encore en cours d'écriture — les leçons s'ouvriront au fur et à mesure.",
    noteSome: (ready, total) => `${ready} leçons sur ${total} sont écrites ; le reste arrive.`,
    kind: { keys: '', review: 'Révision', weak: 'Personnalisée', test: 'Test' },
    lessonMeta: (n, meta, tag) => `Leçon ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} secondes`, screens: n => `${n} écrans`, minutes: n => `${n} min`,
    soon: 'Bientôt',
    exploreEyebrow: 'Avant de commencer', exploreTitle: 'Bon à savoir',
    explore: r => [
      [r.learn, 'Commence par la rangée de repos', "Huit touches, huit doigts, et l'habitude de ne pas regarder en bas. La première unité décide de toutes les autres.", 'Ouvrir la leçon 1'],
      [r.home, 'Écris sur ton propre clavier', 'QWERTY, AZERTY, QWERTZ, devanagari, arabe, JIS — 119 dispositions réelles, et le cours suit celle que tu choisis.', 'Voir les dispositions']
    ],
    footerAria: 'Ressources TypingEase',
    footerLinks: r => [[r.home, 'Pratiquer'], [r.lessons, 'Cours'], [r.progress, 'Progrès'], [r.test, 'Test de frappe'], [r.games, 'Jeux de dactylographie']],
    footerTag: 'Va un peu plus lentement, et tu iras beaucoup plus loin.',
    switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
  }
};
