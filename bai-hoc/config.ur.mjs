/* bai-hoc/config.ur.mjs — cau hinh trang lo trinh cho ban ur (Urdu, viet phai sang trai).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file. bai-hoc/generate.mjs nap file nay theo
 * `--lang`, va tu dat dir="rtl" cho trang (doc tu data/languages.js).
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.ur.js: chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Urdu. Moi danh sach ben duoi loc null ra.
 * Mui ten "di tiep" tro sang trai (←), vi trang doc tu phai sang trai.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'ur', 'asbaq', 'index.html'),
    url: 'https://typingease.site/ur/asbaq/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.ur.js',
    ui: '/i18n/ui.ur.js',
    routes: {
      home: '/ur/', lessons: '/ur/asbaq/', learn: '/ur/seekhein/', test: null,
      progress: '/ur/taraqqi/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `اردو ٹائپنگ کورس: دس انگلیوں سے، ${c.sequence.length} اسباق | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course ur-crulp). Xem config.en.mjs.
      family: {
        title: (c, f) => `${f.name} کی بورڈ پر اردو ٹائپنگ: ${c.sequence.length} اسباق | TypingEase`,
        description: (c, f) => `${f.keyboard} پر بنا مفت اردو ٹائپنگ کورس، کلید بہ کلید: ${c.units.length} حصے اور ${c.sequence.length} اسباق، بنیادی قطار سے ہندسوں، علامتوں اور لمبی عبارتوں تک۔`,
        h1: (c, f) => `ٹائپنگ کورس · ${f.name} · ${c.sequence.length} اسباق`
      },
      description: c => `دس انگلیوں سے اردو ٹائپنگ کا مفت کورس: ${c.units.length} حصے اور ${c.sequence.length} اسباق، بنیادی قطار سے ہندسوں، علامتوں اور لمبی عبارتوں تک، صوتی اردو کی بورڈ پر ھ اور ں سمیت۔`,
      nav: r => [[r.home, 'مشق'], [r.lessons, 'کورس'], [r.progress, 'پیش رفت'], [r.test, 'امتحان']],
      navAria: 'مرکزی نیویگیشن',
      enter: 'شروع کریں',
      eyebrow: 'TypingEase کا کورس',
      h1: c => `ٹائپنگ کورس · ${c.sequence.length} اسباق · ${c.units.length} حصے`,
      intro: 'ابھرے ہوئے نشان والی دو کلیدوں سے اچھی رفتار پر پورے پیراگراف تک۔ ہر سبق\n          دو نئی کلیدیں سکھاتا ہے، چھوٹی چھوٹی اسکرینوں میں، مشقوں اور وقت والے سلسلوں\n          کے ساتھ — ہر سبق لگ بھگ پانچ منٹ کا۔',
      countDone: total => `0/${total} اسباق مکمل`,
      cta: 'سبق 1 شروع کریں',
      sideUnit: 'حصے', sideOther: 'مزید', sideAria: 'حصوں کی فہرست',
      otherLinks: r => [[r.home, 'اپنا کی بورڈ منتخب کریں'], [r.test, 'رفتار کا امتحان'], [r.progress, 'آپ کی پیش رفت']],
      unitKicker: n => `حصہ ${n}`,
      locked: 'بند',
      unitScore: 'اسباق مکمل',
      noteNone: 'یہ حصہ ابھی لکھا جا رہا ہے — اسباق ایک ایک کر کے کھلیں گے۔',
      noteSome: (ready, total) => `${total} میں سے ${ready} اسباق لکھے جا چکے ہیں؛ باقی آ رہے ہیں۔`,
      kind: { keys: '', review: 'دہرائی', weak: 'ذاتی', test: 'امتحان' },
      lessonMeta: (n, meta, tag) => `سبق ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} سیکنڈ`, screens: n => `${n} اسکرینیں`, minutes: n => `${n} منٹ`,
      soon: 'جلد',
      exploreEyebrow: 'شروع کرنے سے پہلے', exploreTitle: 'جاننے کی باتیں',
      explore: r => [
        [r.learn, 'بنیادی قطار سے شروع کریں', 'آٹھ کلیدیں، آٹھ انگلیاں، اور نیچے نہ دیکھنے کی عادت۔ پہلا حصہ باقی سب کا فیصلہ کرتا ہے۔', 'سبق 1 کھولیں'],
        [r.home, 'اپنے کی بورڈ پر لکھیں', 'اردو صوتی، CRULP، QWERTY، AZERTY، عربی، دیوناگری — اصلی کی بورڈ ترتیبیں، اور کورس آپ کی چنی ہوئی ترتیب کے مطابق چلتا ہے۔', 'ترتیبیں دیکھیں']
      ],
      footerAria: 'TypingEase کے وسائل',
      footerLinks: r => [[r.home, 'مشق'], [r.lessons, 'کورس'], [r.progress, 'پیش رفت']],
      footerTag: 'آہستہ چلنے والا دور تک جاتا ہے۔'
    }
};
