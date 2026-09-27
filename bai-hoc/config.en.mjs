/* bai-hoc/config.en.mjs — cau hinh trang lo trinh cho ban en.
 *
 * Mot file moi ngon ngu, khong phai mot bang CONFIG chung: them ngon ngu la them file, va hai
 * nguoi them hai ngon ngu cung luc thi khong dam vao nhau. bai-hoc/generate.mjs nap file nay
 * theo `--lang`.
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.en.js. Day la cong cu chay luc build; chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc. Day chung sang file i18n la bat moi khach tai
 * ve mot bang chuoi chi de dung lai thu da co trong trang.
 *
 * `null` trong `routes` = trang do chua co ban ngon ngu nay. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'lessons', 'index.html'),
    url: 'https://typingease.site/lessons/',
    alt: 'https://typingease.site/bai-hoc/',
    curriculumScript: '/data/curriculum.en.js',
    ui: '/i18n/ui.en.js',
    // `null` = the page does not exist in English yet, and every list below filters nulls out
    // rather than linking at a redirect stub that lands on a Vietnamese article. Same table,
    // same meaning, as `routes` in i18n/ui.en.js — keep the two in step.
    // Still null: `weak` (no English weak-key drill page).
    routes: {
      home: '/', lessons: '/lessons/', learn: '/learn/', test: '/typing-test/',
      progress: '/progress/', free: '/practice/', weak: null, games: '/typing-games/',
      guide: '/touch-typing/', wpm: '/how-to-type-faster/'
    },
    s: {
      title: c => `Learn touch typing: a free ${c.sequence.length}-lesson course | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course en-dvorak…). `f` la dong cua ho do trong
      // data/languages.js: `f.name` la nhan ngan, `f.keyboard` la ten day du trong cau.
      family: {
        title: (c, f) => `${f.name} typing course: ${c.sequence.length} free lessons | TypingEase`,
        description: (c, f) => `Learn touch typing on ${f.keyboard}, not on QWERTY with the letters moved: ${c.units.length} units and ${c.sequence.length} free lessons, from the home row to full paragraphs.`,
        h1: (c, f) => `Touch typing on ${f.name} · ${c.sequence.length} lessons · ${c.units.length} units`
      },
      description: c => `Learn touch typing in ${c.sequence.length} free lessons over ${c.units.length} units, from the home row to numbers, symbols and full paragraphs. Every lesson saves your progress.`,
      nav: r => [[r.home, 'Practice'], [r.lessons, 'Course'], [r.progress, 'Progress'], [r.test, 'Typing test'], [r.games, 'Games']],
      navAria: 'Main navigation',
      enter: 'Start learning',
      eyebrow: 'The TypingEase course',
      h1: c => `Touch typing course · ${c.sequence.length} lessons · ${c.units.length} units`,
      intro: 'From the two keys with a raised bump to full paragraphs at speed. Every lesson teaches\n          two new keys across a handful of short screens, alternating drills with timed bursts —\n          about five minutes each.',
      countDone: total => `0/${total} lessons done`,
      cta: 'Start lesson 1',
      sideUnit: 'Units', sideOther: 'More', sideAria: 'Unit list',
      otherLinks: r => [[r.home, 'Choose your keyboard'], [r.test, 'Typing test'], [r.progress, 'Your progress'], [r.free, 'Free practice'], [r.guide, 'How to touch type']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Locked',
      unitScore: 'lessons done',
      noteNone: 'This unit is still being written — lessons will open as they land.',
      noteSome: (ready, total) => `${ready} of ${total} lessons are written; the rest are on the way.`,
      kind: { keys: '', review: 'Review', weak: 'Personalised', test: 'Test' },
      lessonMeta: (n, meta, tag) => `Lesson ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} seconds`, screens: n => `${n} screens`, minutes: n => `${n} min`,
      soon: 'Coming soon',
      exploreEyebrow: 'Before you start', exploreTitle: 'Worth knowing first',
      explore: r => [
        [r.learn, 'Start with the home row', 'Eight keys, eight fingers, and the habit of not looking down. The first unit is the one that decides the rest.', 'Open lesson 1'],
        [r.home, 'Type on your own keyboard', 'QWERTY, AZERTY, QWERTZ, Devanagari, Arabic, JIS — 119 real layouts, and the course follows the one you pick.', 'See the layouts'],
        [r.test, 'Measure where you are', 'A timed test from 15 seconds to 10 minutes, so the number you improve on is a real one.', 'Take the test']
      ],
      footerAria: 'TypingEase resources',
      footerLinks: r => [[r.home, 'Practice'], [r.lessons, 'Course'], [r.progress, 'Progress'], [r.test, 'Typing test'], [r.games, 'Typing games']],
      footerTag: 'Go a little slower, and you will get a lot further.',
      switches: [['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt'], ['ES', '/es/lecciones/', 'es', 'Versión en español']]
    }
};
