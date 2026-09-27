/* bai-hoc/config.bn.mjs — cau hinh trang lo trinh cho ban bn (বাংলা).
 *
 * Mot file moi ngon ngu: them ngon ngu la them file. bai-hoc/generate.mjs nap file nay theo
 * `--lang bn`. Bang chuoi nam o day, khong o i18n/ui.bn.js: chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Bengali. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 *
 * Xung ho voi nguoi hoc bang আপনি; tieng Bengali chuan (চলিত ভাষা).
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'bn', 'path', 'index.html'),
    url: 'https://typingease.site/bn/path/',
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.bn.js',
    ui: '/i18n/ui.bn.js',
    routes: {
      home: '/bn/', lessons: '/bn/path/', learn: '/bn/shikhun/', test: '/bn/typing-test/',
      progress: '/bn/agragati/', games: '/bn/typing-games/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `বাংলা টাইপিং কোর্স: দশ আঙুলে ${c.sequence.length}টি পাঠ | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course bn-probhat).
      family: {
        title: (c, f) => `${f.keyboard}-এ বাংলা টাইপিং: ${c.sequence.length}টি পাঠ | TypingEase`,
        description: (c, f) => `${f.keyboard}-এর জন্য কী ধরে ধরে তৈরি বিনামূল্যের বাংলা টাইপিং কোর্স: ${c.units.length}টি ইউনিট আর ${c.sequence.length}টি পাঠ, মূল সারি থেকে বাংলা অঙ্ক, চিহ্ন আর লম্বা লেখা পর্যন্ত।`,
        h1: (c, f) => `টাইপিং কোর্স · ${f.name} · ${c.sequence.length}টি পাঠ`
      },
      description: c => `দশ আঙুলে বাংলা টাইপিং শেখার বিনামূল্যের কোর্স: ${c.units.length}টি ইউনিট আর ${c.sequence.length}টি পাঠ, জাতীয় কিবোর্ডের মূল সারি থেকে বাংলা অঙ্ক, চিহ্ন আর লম্বা লেখা পর্যন্ত।`,
      nav: r => [[r.home, 'অনুশীলন'], [r.lessons, 'কোর্স'], [r.progress, 'অগ্রগতি'], [r.test, 'পরীক্ষা'], [r.games, 'গেম']],
      navAria: 'প্রধান মেনু',
      enter: 'শুরু করুন',
      eyebrow: 'TypingEase-এর কোর্স',
      h1: c => `দশ আঙুলে টাইপিং কোর্স · ${c.sequence.length}টি পাঠ · ${c.units.length}টি ইউনিট`,
      intro: 'চিহ্ন-দেওয়া দুটি কী থেকে শুরু করে ভালো ছন্দে পুরো অনুচ্ছেদ পর্যন্ত। প্রতিটি পাঠ ছোট ছোট\n          স্ক্রিনে দুটি নতুন কী শেখায়, অনুশীলন আর সময় ধরা সারি পালা করে — প্রতিটি\n          মোটামুটি পাঁচ মিনিটের।',
      countDone: total => `0/${total}টি পাঠ শেষ`,
      cta: 'পাঠ ১ শুরু করুন',
      sideUnit: 'ইউনিট', sideOther: 'আরও', sideAria: 'ইউনিটের তালিকা',
      otherLinks: r => [[r.home, 'প্রথম পাতা'], [r.test, 'গতির পরীক্ষা'], [r.progress, 'আপনার অগ্রগতি']],
      unitKicker: n => `ইউনিট ${n}`,
      locked: 'বন্ধ',
      unitScore: 'পাঠ শেষ',
      noteNone: 'এই ইউনিট এখনো লেখা হচ্ছে — পাঠগুলো একে একে খুলবে।',
      noteSome: (ready, total) => `${total}টির মধ্যে ${ready}টি পাঠ লেখা হয়েছে; বাকিগুলো আসছে।`,
      kind: { keys: '', review: 'পুনরাবৃত্তি', weak: 'আপনার জন্য', test: 'পরীক্ষা' },
      lessonMeta: (n, meta, tag) => `পাঠ ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} সেকেন্ড`, screens: n => `${n}টি স্ক্রিন`, minutes: n => `${n} মিনিট`,
      soon: 'শিগগির',
      exploreEyebrow: 'শুরু করার আগে', exploreTitle: 'জেনে রাখা ভালো',
      explore: r => [
        [r.learn, 'মূল সারি দিয়ে শুরু করুন', 'আটটি কী, আটটি আঙুল, আর নিচে না তাকানোর অভ্যাস। প্রথম ইউনিটই বাকি সবকিছু ঠিক করে দেয়।', 'পাঠ ১ খুলুন'],
        [r.home, 'শিফটের স্তর', 'বাংলায় বড় হাতের অক্ষর নেই। জাতীয় কিবোর্ডে ী ল শ ভ খ-এর মতো অক্ষর শিফট ধরে আসে, আর কোর্স সেগুলো আলাদা একটি পাঠে শেখায়।', 'প্রথম পাতা']
      ],
      footerAria: 'TypingEase-এর আরও কিছু',
      footerLinks: r => [[r.home, 'অনুশীলন'], [r.lessons, 'কোর্স'], [r.progress, 'অগ্রগতি']],
      footerTag: 'একটু ধীরে চলুন, অনেক দূর যাবেন।'
    }
};
