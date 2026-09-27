/* bai-hoc/config.ru.mjs — cau hinh trang lo trinh cho ban ru (Русский).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file. bai-hoc/generate.mjs nap file nay theo
 * `--lang ru`. Bang chuoi nam o day, khong o i18n/ui.ru.js: chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Nga. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// So nhieu tieng Nga: 1 урок, 2–4 урока, 5+ уроков (11–14 luon la dang thu ba).
const plural = (n, one, few, many) => {
  const mod10 = n % 10, mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
  return `${n} ${many}`;
};
const lessons = c => plural(c.sequence.length, 'урок', 'урока', 'уроков');
const units = c => plural(c.units.length, 'раздел', 'раздела', 'разделов');

export default {
    out: path.join(root, 'ru', 'uroki', 'index.html'),
    url: 'https://typingease.site/ru/uroki/',
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.ru.js',
    ui: '/i18n/ui.ru.js',
    routes: {
      home: '/ru/', lessons: '/ru/uroki/', learn: '/ru/uchitsya/', test: '/ru/test-skorosti-pechati/',
      progress: '/ru/progress/', games: '/ru/igry-dlya-pechati/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Печать десятью пальцами: курс, ${lessons(c)} | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course ru-fonetika). Xem config.en.mjs.
      family: {
        title: (c, f) => `Курс слепой печати — ${f.keyboard} | TypingEase`,
        description: (c, f) => `Курс слепой печати для раскладки «${f.name}», бесплатно и клавиша за клавишей: ${units(c)} и ${lessons(c)}, от основного ряда до цифр, знаков и текстов.`,
        h1: (c, f) => `Курс слепой печати · ${f.name} · ${lessons(c)}`
      },
      description: c => `Бесплатный курс печати десятью пальцами на раскладке ЙЦУКЕН: ${units(c)} и ${lessons(c)}, от основного ряда до цифр, знаков и длинных текстов.`,
      nav: r => [[r.home, 'Практика'], [r.lessons, 'Курс'], [r.progress, 'Прогресс'], [r.test, 'Тест'], [r.games, 'Игры']],
      navAria: 'Основная навигация',
      enter: 'Начать',
      eyebrow: 'Курс TypingEase',
      h1: c => `Курс слепой печати · ${lessons(c)} · ${units(c)}`,
      intro: 'От двух клавиш с выступом до целых абзацев в хорошем темпе. Каждый урок дает\n          две новые клавиши на коротких экранах, где упражнения чередуются с сериями\n          на время, — примерно пять минут на урок.',
      countDone: total => `Пройдено уроков: 0/${total}`,
      cta: 'Начать урок 1',
      sideUnit: 'Разделы', sideOther: 'Еще', sideAria: 'Список разделов',
      otherLinks: r => [[r.home, 'Главная'], [r.test, 'Тест скорости'], [r.progress, 'Твой прогресс']],
      unitKicker: n => `Раздел ${n}`,
      locked: 'Закрыт',
      unitScore: 'уроков пройдено',
      noteNone: 'Этот раздел еще пишется — уроки будут открываться по мере готовности.',
      noteSome: (ready, total) => `Написано уроков: ${ready} из ${total}; остальные на подходе.`,
      kind: { keys: '', review: 'Повторение', weak: 'Личное', test: 'Тест' },
      lessonMeta: (n, meta, tag) => `Урок ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} с`, screens: n => `экранов: ${n}`, minutes: n => `${n} мин`,
      soon: 'Скоро',
      exploreEyebrow: 'Перед началом', exploreTitle: 'Полезно знать',
      explore: r => [
        [r.learn, 'Начни с основного ряда', 'Восемь клавиш, восемь пальцев и привычка не смотреть вниз. Первый раздел решает все остальные.', 'Открыть урок 1'],
        [r.home, 'Две русские раскладки', 'У стандартной раскладки ЙЦУКЕН и у фонетической — отдельные курсы: каждый учит клавиши там, где они стоят на твоей клавиатуре.', 'Выбрать раскладку']
      ],
      footerAria: 'Материалы TypingEase',
      footerLinks: r => [[r.home, 'Практика'], [r.lessons, 'Курс'], [r.progress, 'Прогресс']],
      footerTag: 'Чуть медленнее сейчас — гораздо дальше потом.',
      switches: [['EN', '/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
