/* bai-hoc/config.id.mjs — cau hinh trang lo trinh cho ban id (tieng Indonesia).
 *
 * Cung hinh dang voi config.es.mjs — xem chu thich o do. bai-hoc/generate.mjs nap file nay
 * theo `--lang id`.
 *
 * `null` trong `routes` = trang do chua co ban tieng Indonesia. Moi danh sach ben duoi loc null
 * ra, nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'id', 'pelajaran', 'index.html'),
    url: 'https://typingease.site/id/pelajaran/',
    // `alt` chi con la di san: hreflang nay dung tu bang ALTERNATES trong generate.mjs.
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.id.js',
    ui: '/i18n/ui.id.js',
    routes: {
      home: '/id/', lessons: '/id/pelajaran/', learn: '/id/belajar/', test: '/id/tes-mengetik/',
      progress: '/id/kemajuan/', games: '/id/game-mengetik/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Latihan mengetik 10 jari: ${c.sequence.length} pelajaran gratis | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac. Tieng Indonesia hien chi co mot ho, nhung
      // generate.mjs doi khoi nay cho moi config, nen giu cho dong nhat.
      family: {
        title: (c, f) => `Kursus mengetik 10 jari untuk ${f.keyboard}: ${c.sequence.length} pelajaran | TypingEase`,
        description: (c, f) => `Kursus mengetik 10 jari gratis yang dibuat di atas ${f.keyboard}, tombol demi tombol: ${c.units.length} unit dan ${c.sequence.length} pelajaran, dari baris dasar sampai angka, simbol, dan teks panjang.`,
        h1: (c, f) => `Kursus mengetik · ${f.name} · ${c.sequence.length} pelajaran`
      },
      description: c => `Kursus mengetik 10 jari gratis: ${c.units.length} unit dan ${c.sequence.length} pelajaran, dari baris dasar sampai angka, simbol, dan teks panjang, dengan kata-kata Indonesia sungguhan.`,
      nav: r => [[r.home, 'Latihan'], [r.lessons, 'Kursus'], [r.progress, 'Kemajuan'], [r.test, 'Tes'], [r.games, 'Permainan']],
      navAria: 'Navigasi utama',
      enter: 'Mulai',
      eyebrow: 'Kursus TypingEase',
      h1: c => `Kursus mengetik 10 jari · ${c.sequence.length} pelajaran · ${c.units.length} unit`,
      intro: 'Dari dua tombol yang bertonjolan sampai paragraf utuh dengan irama yang baik. Setiap pelajaran\n          mengajarkan dua tombol baru, dibagi dalam layar-layar pendek yang bergantian antara latihan dan\n          rentetan berwaktu — sekitar lima menit per pelajaran.',
      countDone: total => `0/${total} pelajaran selesai`,
      cta: 'Mulai pelajaran 1',
      sideUnit: 'Unit', sideOther: 'Lainnya', sideAria: 'Daftar unit',
      otherLinks: r => [[r.home, 'Pilih papan ketikmu'], [r.test, 'Tes kecepatan'], [r.progress, 'Kemajuanmu']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Terkunci',
      unitScore: 'pelajaran selesai',
      noteNone: 'Unit ini masih ditulis — pelajarannya akan dibuka satu per satu.',
      noteSome: (ready, total) => `${ready} dari ${total} pelajaran sudah ditulis; sisanya menyusul.`,
      kind: { keys: '', review: 'Ulangan', weak: 'Pribadi', test: 'Tes' },
      lessonMeta: (n, meta, tag) => `Pelajaran ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} detik`, screens: n => `${n} layar`, minutes: n => `${n} menit`,
      soon: 'Segera',
      exploreEyebrow: 'Sebelum mulai', exploreTitle: 'Perlu kamu tahu',
      explore: r => [
        [r.learn, 'Mulai dari baris dasar', 'Delapan tombol, delapan jari, dan kebiasaan tidak menunduk. Unit pertama menentukan semua unit sesudahnya.', 'Buka pelajaran 1'],
        [r.home, 'Mengetik di papan ketikmu sendiri', 'QWERTY, AZERTY, QWERTZ, Dewanagari, Arab, JIS — 119 tata letak sungguhan, dan kursus mengikuti yang kamu pilih.', 'Lihat tata letaknya']
      ],
      footerAria: 'Sumber TypingEase',
      footerLinks: r => [[r.home, 'Latihan'], [r.lessons, 'Kursus'], [r.progress, 'Kemajuan']],
      footerTag: 'Sedikit lebih pelan, dan kamu akan sampai jauh lebih jauh.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
