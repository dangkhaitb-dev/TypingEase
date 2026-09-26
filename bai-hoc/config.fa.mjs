/* bai-hoc/config.fa.mjs — cấu hình trang lộ trình cho bản tiếng Ba Tư (فارسی).
 *
 * Một file mỗi ngôn ngữ; bai-hoc/generate.mjs nạp file này theo `--lang fa`. Trang ra dir="rtl"
 * (generate.mjs đọc `dir` trong data/languages.js).
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.fa.js: chữ sinh lúc build đã nằm sẵn trong HTML.
 *
 * `null` trong `routes` = trang đó chưa có bản tiếng Ba Tư; mọi danh sách bên dưới lọc null ra.
 * Xưng hô: شما.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'fa', 'darsha', 'index.html'),
  url: 'https://typingease.site/fa/darsha/',
  alt: 'https://typingease.site/en/lessons/',
  curriculumScript: '/data/curriculum.fa.js',
  ui: '/i18n/ui.fa.js',
  routes: {
    home: '/fa/', lessons: '/fa/darsha/', learn: '/fa/amoozesh/', test: '/fa/test-tayp/',
    progress: '/fa/pishraft/', games: '/fa/bazi-tayp/', free: null, weak: null, guide: null, wpm: null
  },
  s: {
    title: c => `دورهٔ آموزش تایپ فارسی: ${c.sequence.length} درس | TypingEase`,
    // Trang lộ trình của MỘT HỌ bàn phím khác (--course fa-windows). Xem config.en.mjs.
    family: {
      title: (c, f) => `تایپ ده‌انگشتی، صفحه‌کلید فارسی ${f.name}: ${c.sequence.length} درس | TypingEase`,
      description: (c, f) => `دورهٔ رایگان تایپ ده‌انگشتی که روی خود ${f.keyboard} ساخته شده، کلید به کلید: ${c.units.length} بخش و ${c.sequence.length} درس، از ردیف پایه تا اعداد، نشانه‌ها و متن‌های بلند.`,
      h1: (c, f) => `دورهٔ تایپ ده‌انگشتی · ${f.name} · ${c.sequence.length} درس`
    },
    description: c => `دورهٔ رایگان تمرین تایپ فارسی: ${c.units.length} بخش و ${c.sequence.length} درس روی صفحه‌کلید استاندارد فارسی، از ردیف پایه تا رقم‌های فارسی، نشانه‌ها و متن‌های بلند.`,
    nav: r => [[r.home, 'تمرین'], [r.lessons, 'دوره'], [r.progress, 'پیشرفت'], [r.test, 'آزمون'], [r.games, 'بازی']],
    navAria: 'ناوبری اصلی',
    enter: 'شروع',
    eyebrow: 'دورهٔ TypingEase',
    h1: c => `دورهٔ تایپ ده‌انگشتی · ${c.sequence.length} درس · ${c.units.length} بخش`,
    intro: 'از دو کلید برجسته تا بندهای کامل با ریتم خوب. هر درس دو کلید تازه را\n          در چند صفحهٔ کوتاه یاد می‌دهد و تمرین و سری‌های زمان‌دار را پشت سر هم\n          می‌آورد — هر درس حدود پنج دقیقه.',
    countDone: total => `0/${total} درس انجام شده`,
    cta: 'شروع درس ۱',
    sideUnit: 'بخش‌ها', sideOther: 'بیشتر', sideAria: 'فهرست بخش‌ها',
    otherLinks: r => [[r.home, 'صفحهٔ اصلی'], [r.test, 'آزمون سرعت'], [r.progress, 'پیشرفت شما']],
    unitKicker: n => `بخش ${n}`,
    locked: 'بسته',
    unitScore: 'درس انجام شده',
    noteNone: 'این بخش هنوز در حال نوشتن است — درس‌ها کم‌کم باز می‌شوند.',
    noteSome: (ready, total) => `${ready} درس از ${total} درس نوشته شده؛ بقیه در راه است.`,
    kind: { keys: '', review: 'مرور', weak: 'شخصی', test: 'آزمون' },
    lessonMeta: (n, meta, tag) => `درس ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} ثانیه`, screens: n => `${n} صفحه`, minutes: n => `${n} دقیقه`,
    soon: 'به‌زودی',
    exploreEyebrow: 'پیش از شروع', exploreTitle: 'خوب است بدانید',
    explore: r => [
      [r.learn, 'از ردیف پایه شروع کنید', 'هشت کلید، هشت انگشت، و عادت نگاه نکردن به پایین. بخش اول همهٔ بخش‌های بعدی را تعیین می‌کند.', 'باز کردن درس ۱'],
      [r.home, 'دو صفحه‌کلید فارسی', 'این دوره هم برای چیدمان استاندارد فارسی ساخته شده و هم برای چیدمان قدیمی ویندوز. رقم‌ها و جای پ در این دو فرق دارد، و هر کدام دورهٔ خودش را دارد.', 'صفحهٔ اصلی']
    ],
    footerAria: 'منابع TypingEase',
    footerLinks: r => [[r.home, 'تمرین'], [r.lessons, 'دوره'], [r.progress, 'پیشرفت']],
    footerTag: 'کمی آهسته‌تر بروید، خیلی دورتر می‌رسید.'
  }
};
