/* bai-hoc/config.ms.mjs — cau hinh trang lo trinh cho ban ms (Bahasa Melayu).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file, va hai nguoi them hai ngon ngu cung luc thi
 * khong dam vao nhau. bai-hoc/generate.mjs nap file nay theo `--lang`.
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.ms.js: day la cong cu chay luc build, chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc.
 *
 * `null` trong `routes` = trang do chua co ban tieng Ma Lai. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'ms', 'pelajaran', 'index.html'),
    url: 'https://typingease.site/ms/pelajaran/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.ms.js',
    ui: '/i18n/ui.ms.js',
    routes: {
      home: '/ms/', lessons: '/ms/pelajaran/', learn: '/ms/belajar/', test: '/ms/ujian-menaip/',
      progress: '/ms/kemajuan/', games: '/ms/permainan-menaip/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Latihan menaip 10 jari: ${c.sequence.length} pelajaran percuma | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac. Tieng Ma Lai hien chi co mot ho (116), nhung
      // generate.mjs doi khoi nay co mat. Xem config.en.mjs.
      family: {
        title: (c, f) => `Kursus menaip sentuh untuk ${f.keyboard}: ${c.sequence.length} pelajaran | TypingEase`,
        description: (c, f) => `Kursus menaip sentuh percuma yang dibina di atas ${f.keyboard}, kekunci demi kekunci: ${c.units.length} unit dan ${c.sequence.length} pelajaran, dari baris asas hingga nombor, simbol dan teks panjang.`,
        h1: (c, f) => `Kursus menaip sentuh · ${f.name} · ${c.sequence.length} pelajaran`
      },
      description: c => `Kursus menaip sentuh percuma: ${c.units.length} unit dan ${c.sequence.length} pelajaran, dari baris asas hingga nombor, simbol dan teks panjang, dengan perkataan Melayu sebenar.`,
      nav: r => [[r.home, 'Berlatih'], [r.lessons, 'Kursus'], [r.progress, 'Kemajuan'], [r.test, 'Ujian'], [r.games, 'Permainan']],
      navAria: 'Navigasi utama',
      enter: 'Mula',
      eyebrow: 'Kursus TypingEase',
      h1: c => `Kursus menaip sentuh · ${c.sequence.length} pelajaran · ${c.units.length} unit`,
      intro: 'Dari dua kekunci yang ada bonjolan hingga perenggan penuh pada rentak yang baik. Setiap\n          pelajaran mengajar dua kekunci baharu dalam skrin-skrin pendek, berselang-seli antara latihan\n          dan pecutan bermasa — kira-kira lima minit setiap satu.',
      countDone: total => `0/${total} pelajaran selesai`,
      cta: 'Mulakan pelajaran 1',
      sideUnit: 'Unit', sideOther: 'Lain-lain', sideAria: 'Senarai unit',
      otherLinks: r => [[r.home, 'Pilih papan kekunci anda'], [r.test, 'Ujian kelajuan'], [r.progress, 'Kemajuan anda']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Dikunci',
      unitScore: 'pelajaran selesai',
      noteNone: 'Unit ini masih sedang ditulis — pelajaran akan dibuka satu demi satu.',
      noteSome: (ready, total) => `${ready} daripada ${total} pelajaran sudah ditulis; selebihnya akan menyusul.`,
      kind: { keys: '', review: 'Ulang kaji', weak: 'Peribadi', test: 'Ujian' },
      lessonMeta: (n, meta, tag) => `Pelajaran ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} saat`, screens: n => `${n} skrin`, minutes: n => `${n} min`,
      soon: 'Akan datang',
      exploreEyebrow: 'Sebelum bermula', exploreTitle: 'Elok diketahui',
      explore: r => [
        [r.learn, 'Mula dengan baris asas', 'Lapan kekunci, lapan jari, dan tabiat tidak melihat ke bawah. Unit pertama menentukan semua unit yang lain.', 'Buka pelajaran 1'],
        [r.home, 'Menaip pada papan kekunci anda sendiri', 'QWERTY, AZERTY, QWERTZ, Devanagari, Arab, JIS — 119 susun atur sebenar di laman ini. Kursus bahasa Melayu ini dibina untuk QWERTY.', 'Lihat susun atur']
      ],
      footerAria: 'Sumber TypingEase',
      footerLinks: r => [[r.home, 'Berlatih'], [r.lessons, 'Kursus'], [r.progress, 'Kemajuan']],
      footerTag: 'Perlahan sedikit, dan anda akan pergi lebih jauh.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
