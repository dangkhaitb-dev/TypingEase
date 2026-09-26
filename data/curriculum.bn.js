/* data/curriculum.bn.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/bn.js + bố cục bàn phím 107
   (Bangla (National)). Sửa lời dạy ở data/courses/bn.js, sửa kho từ ở data/words/bn.js,
   rồi chạy lại:  node scripts/build-course.js --lang bn

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.

   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy হসন্ত, আ-কার
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.
*/
window.TypingEaseCurriculum = {
  lang: 'bn',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'bn',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 107,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [107],
  progressKey: 'typingease-progress-bn-v1',
  badgesKey: 'typingease-badges-bn-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "মূল সারি",
      summary: "আঙুলের নিচের আটটি কী, তারপর হসন্ত, আ-কার, ড হ, প জ — না তাকিয়ে আসল বাংলা শব্দ লেখার মতো যথেষ্ট।",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "এখান থেকে শুরু", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "আঙুল ছড়ানো", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "ইউনিট শেষ করুন", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "বাকি অক্ষর",
      summary: "ওপরের সারি, নিচের সারি, যতিচিহ্ন আর শিফটের স্তর — প্রায় সব অক্ষর, সঙ্গে শিফট আর এন্টার।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "এখান থেকে শুরু", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "আঙুল ছড়ানো", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "ইউনিট শেষ করুন", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "সংখ্যা, চিহ্ন আর গতি",
      summary: "বাংলা অঙ্কের সারি, ডান প্রান্তের চিহ্ন, তারপর লম্বা অনুচ্ছেদ টানা ছন্দে।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "সংখ্যা আর চিহ্ন", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "গতি", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "বাকি সব কী",
      summary: "এই কিবোর্ডের যে 26টি অক্ষর ও চিহ্ন কোর্সে এখনো আসেনি, প্রতিটি যেখানে সত্যিই লাগে সেখানে।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "যে কীগুলো বাকি", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08'] },
        { id: 'finish', title: "ইউনিট শেষ করুন", lessons: ['u4-l09', 'u4-l10'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ব, ক আর স্পেস বার", newKeys: ["ব","ক"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ই-কার, ত", newKeys: ["ি","ত"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "উ-কার, দ", newKeys: ["ু","দ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ঋ-কার, সেমিকোলন", newKeys: ["ৃ",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "হসন্ত, আ-কার", newKeys: ["্","া"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l06': { title: "পুনরাবৃত্তি", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l07': { title: "ড, হ", newKeys: ["ড","হ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "প, জ", newKeys: ["প","জ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "দুর্বল কী", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "ইউনিট 1-এর পরীক্ষা", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ট, চ", newKeys: ["ট","চ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "গ, য", newKeys: ["গ","য"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "এ-কার, স", newKeys: ["ে","স"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ম, র", newKeys: ["ম","র"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "পুনরাবৃত্তি", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ঙ, ড়", newKeys: ["ঙ","ড়"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ন, ও-কার", newKeys: ["ন","ো"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "চন্দ্রবিন্দু, বিন্দু, কমা, ঊর্ধ্বকমা", newKeys: ["ঁ",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "শিফট আর এন্টার", newKeys: ["shift","enter","ী","ল","য়","শ","ভ","খ","থ","ধ","ং","ণ","ষ","ছ","ূ","ফ","ঘ","ঠ","অ","ঢ","ৈ","ৌ","ঝ","।"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "দুর্বল কী", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "ইউনিট 2-এর পরীক্ষা", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "সংখ্যার সারি", newKeys: ["১","২","৩","৪","৫","৬","৭","৮","৯","০"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "ডান প্রান্তের কলাম", newKeys: ["/","-","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "অক্ষর, সংখ্যা আর চিহ্ন", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "লেখা আর ছন্দ 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "লেখা আর ছন্দ 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "ইউনিট 3-এর পরীক্ষা", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, !, @", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, %, ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, (, )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_, +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "ঔ-কারের চিহ্ন, বিসর্গ", newKeys: ["ৗ","ঃ"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "ঞ, ঢ়, {, }", newKeys: ["ঞ","ঢ়","{","}"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "|, কোলন, উদ্ধৃতিচিহ্ন, <", newKeys: ["|",":","\"","<"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: ">, ?", newKeys: [">","?"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "সব চিহ্ন একসঙ্গে", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l10': { title: "ইউনিট 4-এর পরীক্ষা", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
  },

  sequence: [
    'u1-l01',
    'u1-l02',
    'u1-l03',
    'u1-l04',
    'u1-l05',
    'u1-l06',
    'u1-l07',
    'u1-l08',
    'u1-l09',
    'u1-l10',
    'u2-l01',
    'u2-l02',
    'u2-l03',
    'u2-l04',
    'u2-l05',
    'u2-l06',
    'u2-l07',
    'u2-l08',
    'u2-l09',
    'u2-l10',
    'u2-l11',
    'u3-l01',
    'u3-l02',
    'u3-l03',
    'u3-l04',
    'u3-l05',
    'u3-l06',
    'u4-l01',
    'u4-l02',
    'u4-l03',
    'u4-l04',
    'u4-l05',
    'u4-l06',
    'u4-l07',
    'u4-l08',
    'u4-l09',
    'u4-l10'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ব ব বব\nবববব\nবববববব বববববব",
    hint: "দুই তর্জনী চিহ্ন-দেওয়া দুটি কী-তে রাখুন, আর কিবোর্ডের দিকে না তাকিয়ে যা দেখছেন তা লিখুন।"
  }
};
