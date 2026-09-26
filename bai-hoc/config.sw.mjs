/* bai-hoc/config.sw.mjs — cau hinh trang lo trinh cho ban sw (Kiswahili).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file. bai-hoc/generate.mjs nap file nay theo
 * `--lang sw`. Bang chuoi nam o day, khong o i18n/ui.sw.js: chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Swahili. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'sw', 'masomo', 'index.html'),
    url: 'https://typingease.site/sw/masomo/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.sw.js',
    ui: '/i18n/ui.sw.js',
    routes: {
      home: '/sw/', lessons: '/sw/masomo/', learn: '/sw/jifunze/', test: null,
      progress: '/sw/maendeleo/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Kozi ya kuandika kwa vidole kumi: masomo ${c.sequence.length} | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac. Tieng Swahili hien chi co mot ho (QWERTY), nhung
      // generate.mjs doi khoi nay cho moi ngon ngu co the co them ho ve sau.
      family: {
        title: (c, f) => `Kozi ya kuandika kwa vidole kumi kwa ${f.keyboard}: masomo ${c.sequence.length} | TypingEase`,
        description: (c, f) => `Kozi ya bure ya kuandika kwa vidole kumi, iliyojengwa juu ya ${f.keyboard}, kitufe kwa kitufe: vitengo ${c.units.length} na masomo ${c.sequence.length}, kuanzia safu ya msingi hadi namba, alama na maandishi marefu.`,
        h1: (c, f) => `Kozi ya kuandika · ${f.name} · masomo ${c.sequence.length}`
      },
      description: c => `Masomo ${c.sequence.length} ya kuandika kwa vidole kumi katika vitengo ${c.units.length}, kuanzia safu ya msingi hadi namba, alama na maandishi marefu. Bure, kwa maneno ya Kiswahili sanifu.`,
      nav: r => [[r.home, 'Fanya mazoezi'], [r.lessons, 'Kozi'], [r.progress, 'Maendeleo'], [r.test, 'Jaribio']],
      navAria: 'Urambazaji mkuu',
      enter: 'Anza',
      eyebrow: 'Kozi ya TypingEase',
      h1: c => `Kozi ya kuandika kwa vidole kumi · masomo ${c.sequence.length} · vitengo ${c.units.length}`,
      intro: 'Kuanzia vitufe viwili vyenye kivimbe hadi aya nzima kwa mwendo mzuri. Kila somo linafundisha\n          vitufe viwili vipya kwenye skrini fupi, likipokezana mazoezi na mifululizo\n          yenye muda — takriban dakika tano kila moja.',
      countDone: total => `Masomo 0/${total} yamekamilika`,
      cta: 'Anza somo la 1',
      sideUnit: 'Vitengo', sideOther: 'Zaidi', sideAria: 'Orodha ya vitengo',
      otherLinks: r => [[r.home, 'Ukurasa mkuu'], [r.test, 'Jaribio la kasi'], [r.progress, 'Maendeleo yako']],
      unitKicker: n => `Kitengo ${n}`,
      locked: 'Kimefungwa',
      unitScore: 'masomo yamekamilika',
      noteNone: 'Kitengo hiki bado kinaandikwa — masomo yatafunguliwa kadiri yanavyokamilika.',
      noteSome: (ready, total) => `Masomo ${ready} kati ya ${total} yameandikwa; mengine yanakuja.`,
      kind: { keys: '', review: 'Marudio', weak: 'Binafsi', test: 'Jaribio' },
      lessonMeta: (n, meta, tag) => `Somo ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `sekunde ${n}`, screens: n => `skrini ${n}`, minutes: n => `dakika ${n}`,
      soon: 'Hivi karibuni',
      exploreEyebrow: 'Kabla hujaanza', exploreTitle: 'Inafaa kujua',
      explore: r => [
        [r.learn, 'Anza na safu ya msingi', 'Vitufe vinane, vidole vinane, na mazoea ya kutotazama chini. Kitengo cha kwanza kinaamua vingine vyote.', 'Fungua somo la 1'],
        [r.home, 'Kibodi ya QWERTY', 'Mpangilio wa Kiswahili (Kenya) ni QWERTY ileile ya kawaida, kitufe kwa kitufe. Kozi hii inafundisha vitufe hivyo, pamoja na ritifaa ya ng\'ombe na ng\'ambo.', 'Ukurasa mkuu']
      ],
      footerAria: 'Rasilimali za TypingEase',
      footerLinks: r => [[r.home, 'Fanya mazoezi'], [r.lessons, 'Kozi'], [r.progress, 'Maendeleo']],
      footerTag: 'Nenda polepole kidogo, na utafika mbali zaidi.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
