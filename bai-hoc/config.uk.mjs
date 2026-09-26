/* bai-hoc/config.uk.mjs — cau hinh trang lo trinh cho ban uk (tieng Ukraina).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file. bai-hoc/generate.mjs nap file nay theo
 * `--lang uk`. Bang chuoi nam o day, khong o i18n/ui.uk.js: chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Ukraina. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 *
 * SO NHIEU. Danh tu tieng Ukraina doi dang theo con so (1 урок, 2 уроки, 5 уроків), nen moi cho
 * co so deu di qua `plural()`.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const plural = (n, one, few, many) => {
  const tens = n % 100, units = n % 10;
  if (tens >= 11 && tens <= 14) return many;
  if (units === 1) return one;
  if (units >= 2 && units <= 4) return few;
  return many;
};
const lessons = n => `${n} ${plural(n, 'урок', 'уроки', 'уроків')}`;
// Після «з» — родовий відмінок: «з 34 уроків», «з 31 уроку».
const ofLessons = n => `${n} ${n % 10 === 1 && n % 100 !== 11 ? 'уроку' : 'уроків'}`;
const units = n => `${n} ${plural(n, 'розділ', 'розділи', 'розділів')}`;

export default {
    out: path.join(root, 'uk', 'uroky', 'index.html'),
    url: 'https://typingease.site/uk/uroky/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.uk.js',
    ui: '/i18n/ui.uk.js',
    routes: {
      home: '/uk/', lessons: '/uk/uroky/', learn: '/uk/vchytysia/', test: '/uk/test-shvydkosti-druku/',
      progress: '/uk/prohres/', games: '/uk/ihry-dlia-druku/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Друк десятьма пальцями: курс, ${lessons(c.sequence.length)} | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course uk-fonetyka). Xem config.en.mjs.
      family: {
        title: (c, f) => `Курс сліпого друку — ${f.keyboard} | TypingEase`,
        description: (c, f) => `Безкоштовний курс сліпого друку для розкладки «${f.name}», клавіша за клавішею: ${units(c.units.length)} і ${lessons(c.sequence.length)}, від основного ряду до цифр, знаків і довгих текстів.`,
        h1: (c, f) => `Курс сліпого друку · ${f.name} розкладка · ${lessons(c.sequence.length)}`
      },
      description: c => `Безкоштовний курс друку десятьма пальцями на українській розкладці ЙЦУКЕН: ${units(c.units.length)} і ${lessons(c.sequence.length)}, від основного ряду до цифр, знаків і довгих текстів.`,
      nav: r => [[r.home, 'Практика'], [r.lessons, 'Курс'], [r.progress, 'Прогрес'], [r.test, 'Тест'], [r.games, 'Ігри']],
      navAria: 'Головна навігація',
      enter: 'Почати',
      eyebrow: 'Курс TypingEase',
      h1: c => `Курс сліпого друку · ${lessons(c.sequence.length)} · ${units(c.units.length)}`,
      intro: 'Від двох клавіш з рисками до цілих абзаців у рівному темпі. Кожен урок дає\n          дві нові клавіші, розкладені на короткі екрани, де вправи чергуються з серіями\n          на час, — приблизно п’ять хвилин на урок.',
      countDone: total => `Пройдено 0 з ${ofLessons(total)}`,
      cta: 'Почати урок 1',
      sideUnit: 'Розділи', sideOther: 'Ще', sideAria: 'Список розділів',
      otherLinks: r => [[r.home, 'Обери свою клавіатуру'], [r.test, 'Тест швидкості'], [r.progress, 'Твій прогрес']],
      unitKicker: n => `Розділ ${n}`,
      locked: 'Закрито',
      unitScore: 'уроків пройдено',
      noteNone: 'Цей розділ ще пишеться — уроки відкриватимуться поступово.',
      noteSome: (ready, total) => `Написано ${ready} з ${ofLessons(total)}; решта готується.`,
      kind: { keys: '', review: 'Повторення', weak: 'Персональна', test: 'Тест' },
      lessonMeta: (n, meta, tag) => `Урок ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} с`, screens: n => `${n} ${plural(n, 'екран', 'екрани', 'екранів')}`, minutes: n => `${n} хв`,
      soon: 'Скоро',
      exploreEyebrow: 'Перед початком', exploreTitle: 'Варто знати',
      explore: r => [
        [r.learn, 'Почни з основного ряду', 'Вісім клавіш, вісім пальців і звичка не дивитися вниз. Перший розділ визначає всі інші.', 'Відкрити урок 1'],
        [r.home, 'Справжня українська розкладка', 'Курс іде за клавішами саме твоєї розкладки — стандартної ЙЦУКЕН або фонетичної. У кожної свій порядок уроків, бо літери стоять на різних місцях.', 'Головна сторінка']
      ],
      footerAria: 'Ресурси TypingEase',
      footerLinks: r => [[r.home, 'Практика'], [r.lessons, 'Курс'], [r.progress, 'Прогрес']],
      footerTag: 'Трохи повільніше — і зайдеш набагато далі.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
