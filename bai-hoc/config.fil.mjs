/* bai-hoc/config.fil.mjs — cau hinh trang lo trinh cho ban fil (tieng Filipino).
 *
 * Mot file moi ngon ngu; bai-hoc/generate.mjs nap file nay theo `--lang fil`. Xem
 * config.es.mjs de biet vi sao bang chuoi nam o day chu khong o i18n/ui.fil.js.
 *
 * `null` trong `routes` = trang do chua co ban tieng Filipino. Moi danh sach ben duoi loc null
 * ra, nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'fil', 'aralin', 'index.html'),
    url: 'https://typingease.site/fil/aralin/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.fil.js',
    ui: '/i18n/ui.fil.js',
    routes: {
      home: '/fil/', lessons: '/fil/aralin/', learn: '/fil/matuto/', test: '/fil/typing-test/',
      progress: '/fil/pag-unlad/', games: '/fil/laro-sa-pagta-type/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Typing lessons sa Filipino: ${c.sequence.length} libreng aralin | TypingEase`,
      family: {
        title: (c, f) => `Kurso sa pagtitipa para sa ${f.keyboard}: ${c.sequence.length} aralin | TypingEase`,
        description: (c, f) => `Libreng kurso sa pagtitipa na ginawa para sa ${f.keyboard}, isa-isang key: ${c.units.length} yunit at ${c.sequence.length} aralin, mula sa gitnang hanay hanggang sa mga numero, simbolo at mahahabang teksto.`,
        h1: (c, f) => `Kurso sa pagtitipa · ${f.name} · ${c.sequence.length} aralin`
      },
      description: c => `Libreng kurso sa pagtitipa: ${c.units.length} yunit at ${c.sequence.length} aralin, mula sa gitnang hanay hanggang sa mga numero, simbolo at mahahabang teksto, sa totoong salitang Filipino.`,
      nav: r => [[r.home, 'Magsanay'], [r.lessons, 'Kurso'], [r.progress, 'Pag-unlad'], [r.test, 'Pagsusulit'], [r.games, 'Laro']],
      navAria: 'Pangunahing nabigasyon',
      enter: 'Simulan',
      eyebrow: 'Ang kurso ng TypingEase',
      h1: c => `Kurso sa pagtitipa · ${c.sequence.length} aralin · ${c.units.length} yunit`,
      intro: 'Mula sa dalawang key na may umbok hanggang sa buong talata sa maayos na bilis. Bawat aralin\n          ay nagtuturo ng dalawang bagong key sa maiikling screen, salitan ang pagsasanay at\n          ang mga bugsong may oras — mga limang minuto bawat isa.',
      countDone: total => `0/${total} aralin ang tapos`,
      cta: 'Simulan ang aralin 1',
      sideUnit: 'Mga yunit', sideOther: 'Iba pa', sideAria: 'Listahan ng mga yunit',
      otherLinks: r => [[r.home, 'Pangunahing pahina'], [r.test, 'Pagsusulit sa bilis'], [r.progress, 'Ang progreso mo']],
      unitKicker: n => `Yunit ${n}`,
      locked: 'Sarado',
      unitScore: 'aralin ang tapos',
      noteNone: 'Isinusulat pa ang yunit na ito — isa-isang magbubukas ang mga aralin.',
      noteSome: (ready, total) => `${ready} sa ${total} aralin ang naisulat na; paparating ang iba.`,
      kind: { keys: '', review: 'Balik-aral', weak: 'Para sa iyo', test: 'Pagsusulit' },
      lessonMeta: (n, meta, tag) => `Aralin ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} segundo`, screens: n => `${n} screen`, minutes: n => `${n} min`,
      soon: 'Malapit na',
      exploreEyebrow: 'Bago ka magsimula', exploreTitle: 'Mabuting malaman',
      explore: r => [
        [r.learn, 'Magsimula sa gitnang hanay', 'Walong key, walong daliri, at ang ugaling hindi tumingin sa ibaba. Ang unang yunit ang nagtatakda ng lahat ng kasunod.', 'Buksan ang aralin 1'],
        [r.home, 'Ang keyboard ng kurso', 'QWERTY ang itinuturo ng kursong ito, ang karaniwang layout sa Pilipinas. Walang key para sa ñ ang layout na ito, kaya wala ring ñ sa mga aralin.', 'Bumalik sa simula']
      ],
      footerAria: 'Mga gamit ng TypingEase',
      footerLinks: r => [[r.home, 'Magsanay'], [r.lessons, 'Kurso'], [r.progress, 'Pag-unlad']],
      footerTag: 'Bagalan nang kaunti, at mas malayo ang mararating mo.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
