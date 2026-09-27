/* bai-hoc/config.tr.mjs — cau hinh trang lo trinh cho ban tr (Türkçe Q; ho F dung `s.family`).
 *
 * Mot file moi ngon ngu: bai-hoc/generate.mjs nap file nay theo `--lang`.
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.tr.js. Day la cong cu chay luc build; chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc.
 *
 * `null` trong `routes` = trang do chua co ban tieng Tho. Moi danh sach ben duoi loc null ra, nen
 * khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'tr', 'dersler', 'index.html'),
    url: 'https://typingease.site/tr/dersler/',
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.tr.js',
    ui: '/i18n/ui.tr.js',
    routes: {
      home: '/tr/', lessons: '/tr/dersler/', learn: '/tr/ogren/', test: '/tr/klavye-hiz-testi/',
      progress: '/tr/ilerleme/', games: '/tr/klavye-oyunlari/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `10 parmak yazma kursu: ${c.sequence.length} ders | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course tr-f). Xem config.en.mjs.
      family: {
        title: (c, f) => `${f.keyboard} için 10 parmak yazma kursu | TypingEase`,
        description: (c, f) => `${f.keyboard} üzerine kurulmuş ücretsiz 10 parmak yazma kursu, tuş tuş: temel sıradan sayılara, işaretlere ve uzun metinlere kadar ${c.units.length} ünite ve ${c.sequence.length} ders.`,
        h1: (c, f) => `On parmak kursu · ${f.name} · ${c.sequence.length} ders`
      },
      description: c => `Türkçe Q klavye için ücretsiz 10 parmak yazma kursu: temel sıradan sayılara, işaretlere ve uzun metinlere kadar ${c.units.length} ünite ve ${c.sequence.length} ders.`,
      nav: r => [[r.home, 'Pratik'], [r.lessons, 'Kurs'], [r.progress, 'İlerleme'], [r.test, 'Test'], [r.games, 'Oyunlar']],
      navAria: 'Ana gezinme',
      enter: 'Başla',
      eyebrow: 'TypingEase kursu',
      h1: c => `On parmak klavye kursu · ${c.sequence.length} ders · ${c.units.length} ünite`,
      intro: 'Kabartmalı iki tuştan iyi bir ritimle yazılan bütün paragraflara kadar. Her ders iki yeni tuşu\n          kısa ekranlara bölerek öğretir, alıştırmalarla süreli serileri sırayla verir — her biri\n          yaklaşık beş dakika.',
      countDone: total => `0/${total} ders bitti`,
      cta: '1. derse başla',
      sideUnit: 'Üniteler', sideOther: 'Daha fazla', sideAria: 'Ünite listesi',
      otherLinks: r => [[r.home, 'Klavyeni seç'], [r.test, 'Hız testi'], [r.progress, 'İlerlemen']],
      unitKicker: n => `Ünite ${n}`,
      locked: 'Kilitli',
      unitScore: 'ders bitti',
      noteNone: 'Bu ünite hâlâ yazılıyor — dersler zamanla açılacak.',
      noteSome: (ready, total) => `${total} dersin ${ready} tanesi yazıldı; kalanı yolda.`,
      kind: { keys: '', review: 'Tekrar', weak: 'Kişisel', test: 'Test' },
      lessonMeta: (n, meta, tag) => `Ders ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} saniye`, screens: n => `${n} ekran`, minutes: n => `${n} dk`,
      soon: 'Yakında',
      exploreEyebrow: 'Başlamadan önce', exploreTitle: 'Bilmekte yarar var',
      explore: r => [
        [r.learn, 'Temel sıradan başla', 'Sekiz tuş, sekiz parmak ve aşağı bakmama alışkanlığı. İlk ünite, ötekilerin hepsini belirler.', '1. dersi aç'],
        [r.home, 'Kendi klavyende yaz', 'QWERTY, AZERTY, QWERTZ, Türkçe F, devanagari, Arapça, JIS — gerçek klavye düzenleri, ve kurs seçtiğin düzeni izler.', 'Düzenleri gör']
      ],
      footerAria: 'TypingEase kaynakları',
      footerLinks: r => [[r.home, 'Pratik'], [r.lessons, 'Kurs'], [r.progress, 'İlerleme']],
      footerTag: 'Biraz daha yavaş git, çok daha uzağa varırsın.',
      switches: [['EN', '/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
