/* bai-hoc/config.pl.mjs — cau hinh trang lo trinh cho ban pl (tieng Ba Lan).
 *
 * Mot file moi ngon ngu; bai-hoc/generate.mjs nap file nay theo `--lang pl`. Xem
 * config.es.mjs de biet vi sao bang chuoi nam o day chu khong o i18n/ui.pl.js.
 *
 * `null` trong `routes` = trang do chua co ban tieng Ba Lan. Moi danh sach ben duoi loc null
 * ra, nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 *
 * SO NHIEU. Tieng Ba Lan co ba dang: 1 lekcja, 2–4 lekcje (tru 12–14), 5+ lekcji. Ho mac dinh co
 * 35 bai, ho QWERTZ co 34 — mot chuoi viet cung "lekcji" se sai o mot trong hai. Nen moi con so
 * di qua `count()`.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const form = (n, one, few, many) => (n === 1 ? one
  : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many);
const lessons = n => `${n} ${form(n, 'lekcja', 'lekcje', 'lekcji')}`;
const units = n => `${n} ${form(n, 'część', 'części', 'części')}`;

export default {
    out: path.join(root, 'pl', 'lekcje', 'index.html'),
    url: 'https://typingease.site/pl/lekcje/',
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.pl.js',
    ui: '/i18n/ui.pl.js',
    routes: {
      home: '/pl/', lessons: '/pl/lekcje/', learn: '/pl/nauka/', test: '/pl/test-pisania/',
      progress: '/pl/postepy/', games: '/pl/gry-do-pisania/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Kurs pisania dziesięcioma palcami: ${lessons(c.sequence.length)} | TypingEase`,
      family: {
        title: (c, f) => `Kurs pisania bezwzrokowego — układ ${f.name} | TypingEase`,
        description: (c, f) => `Darmowy kurs pisania bezwzrokowego na układzie ${f.name}, klawisz po klawiszu: ${units(c.units.length)} i ${lessons(c.sequence.length)}, od rzędu podstawowego po cyfry, znaki i teksty.`,
        h1: (c, f) => `Kurs pisania bezwzrokowego · ${f.name} · ${lessons(c.sequence.length)}`
      },
      description: c => `Darmowy kurs pisania dziesięcioma palcami na polskiej klawiaturze programisty: ${units(c.units.length)} i ${lessons(c.sequence.length)}, od rzędu podstawowego po cyfry, znaki i długie teksty.`,
      nav: r => [[r.home, 'Ćwicz'], [r.lessons, 'Kurs'], [r.progress, 'Postępy'], [r.test, 'Test'], [r.games, 'Gry']],
      navAria: 'Nawigacja główna',
      enter: 'Zacznij',
      eyebrow: 'Kurs TypingEase',
      h1: c => `Kurs pisania bezwzrokowego · ${lessons(c.sequence.length)} · ${units(c.units.length)}`,
      intro: 'Od dwóch klawiszy z wypustkami do całych akapitów w dobrym tempie. Każda lekcja uczy\n          dwóch nowych klawiszy na krótkich ekranach, na zmianę ćwiczenia i serie na czas —\n          około pięciu minut każda.',
      countDone: total => `0/${total} lekcji ukończonych`,
      cta: 'Zacznij lekcję 1',
      sideUnit: 'Części', sideOther: 'Więcej', sideAria: 'Lista części kursu',
      otherLinks: r => [[r.home, 'Strona główna kursu'], [r.test, 'Test szybkości'], [r.progress, 'Twoje postępy']],
      unitKicker: n => `Część ${n}`,
      locked: 'Zamknięta',
      unitScore: 'lekcji ukończonych',
      noteNone: 'Ta część jest jeszcze pisana — lekcje będą się otwierać po kolei.',
      noteSome: (ready, total) => `Napisane lekcje: ${ready} z ${total}; reszta jest w drodze.`,
      kind: { keys: '', review: 'Powtórka', weak: 'Dla ciebie', test: 'Test' },
      lessonMeta: (n, meta, tag) => `Lekcja ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} s`,
      screens: n => `${n} ${form(n, 'ekran', 'ekrany', 'ekranów')}`,
      minutes: n => `${n} min`,
      soon: 'Wkrótce',
      exploreEyebrow: 'Zanim zaczniesz', exploreTitle: 'Warto wiedzieć',
      explore: r => [
        [r.learn, 'Zacznij od rzędu podstawowego', 'Osiem klawiszy, osiem palców i nawyk niepatrzenia w dół. Pierwsza część decyduje o wszystkich kolejnych.', 'Otwórz lekcję 1'],
        // Trang lo trinh cua ho QWERTZ dung lai chinh bang nay (generate.mjs --course pl-qwertz),
        // nen the nay phai noi dung ve BAN PHIM CUA TRANG DO — `r.lessons` cho biet la trang nao.
        r.lessons === '/pl/qwertz/'
          ? [r.home, 'Klawiatura tego kursu', 'Ten kurs jest zbudowany na polskiej klawiaturze QWERTZ, na której polskie litery mają własne klawisze: Ł i Ą w rzędzie podstawowym, Ż, Ś i Ó przy prawej krawędzi, a Ę, Ń, Ć i Ź z Shiftem.', 'Wróć na początek']
          : [r.home, 'Klawiatura tego kursu', 'Kurs jest zbudowany na polskiej klawiaturze programisty. Polskie litery wpisuje się na niej prawym Altem, a tego kurs jeszcze nie uczy — dlatego ćwiczenia używają słów bez nich. Na klawiaturze QWERTZ polskie litery mają własne klawisze i osobny kurs.', 'Wróć na początek']
      ],
      footerAria: 'Zasoby TypingEase',
      footerLinks: r => [[r.home, 'Ćwicz'], [r.lessons, 'Kurs'], [r.progress, 'Postępy']],
      footerTag: 'Pisz trochę wolniej, a zajdziesz dużo dalej.',
      switches: [['EN', '/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
