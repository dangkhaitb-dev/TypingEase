/* data/curriculum.ur-crulp.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/ur.js (families.crulp) + bố cục bàn phím 139
   (Urdu (CRULP)). Sửa lời dạy ở data/courses/ur.js, sửa kho từ ở data/words/ur.js,
   rồi chạy lại:  node scripts/build-course.js --lang ur --course ur-crulp

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'ur',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'ur-crulp',
  // Chu viet tu phai sang trai: player dat dir="rtl" cho dong can go (player.js textDir).
  dir: 'rtl',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 139,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [139],
  progressKey: 'typingease-progress-ur-crulp-v1',
  badgesKey: 'typingease-badges-ur-crulp-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "بنیادی قطار",
      summary: "انگلیوں کے نیچے آٹھ کلیدیں، پھر گ ح، ع ی اور ر ء — نیچے دیکھے بغیر اصلی اردو الفاظ لکھنے کے لیے کافی۔",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "یہاں سے شروع کریں", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "انگلیاں پھیلائیں", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "حصہ مکمل کریں", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "باقی حروف",
      summary: "اوپر کی قطار، نیچے کی قطار، ختمہ اور سکتہ، پھر شفٹ سے کلید کا دوسرا حرف اور اینٹر۔",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "یہاں سے شروع کریں", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "انگلیاں پھیلائیں", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "حصہ مکمل کریں", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "ہندسے، علامتیں اور رفتار",
      summary: "اردو ہندسوں کی قطار، دائیں کنارے کی علامتیں، پھر لمبے پیراگراف ایک ہی رفتار سے۔",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "ہندسے اور علامتیں", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "رفتار", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "باقی تمام کلیدیں",
      summary: "اس کی بورڈ کے 38 حروف اور علامتیں جو کورس میں اب تک نہیں آئیں، ہر ایک وہیں جہاں وہ واقعی استعمال ہوتا ہے۔",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "باقی کلیدیں", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08', 'u4-l09', 'u4-l10', 'u4-l11'] },
        { id: 'finish', title: "حصہ مکمل کریں", lessons: ['u4-l12', 'u4-l13'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ف اور ج، اور اسپیس بار", newKeys: ["ف","ج"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "د اور ک", newKeys: ["د","ک"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "س اور ل", newKeys: ["س","ل"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ا اور وقفہ", newKeys: ["ا","؛"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "دہرائی", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "گ اور ح", newKeys: ["گ","ح"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "ع اور ی", newKeys: ["ع","ی"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ر اور ء", newKeys: ["ر","ء"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "کمزور کلیدیں", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "حصہ 1 کا امتحان", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ت اور ے", newKeys: ["ت","ے"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "ہ اور و", newKeys: ["ہ","و"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "چ اور ن", newKeys: ["چ","ن"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "م اور ط", newKeys: ["م","ط"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "دہرائی", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ق اور پ", newKeys: ["ق","پ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ب اور ش", newKeys: ["ب","ش"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ز، ختمہ، سکتہ اور اپوسٹروفی", newKeys: ["ز","۔","،","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "شفٹ اور اینٹر", newKeys: ["shift","enter","ھ","ں","آ","ئ","ٹ","ڑ","خ","ص"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "کمزور کلیدیں", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "حصہ 2 کا امتحان", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "اردو ہندسے", newKeys: ["۱","۲","۳","۴","۵","۶","۷","۸","۹","۰"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "دائیں کنارے کا ستون", newKeys: ["/","-","=","]","[","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "سب کچھ ایک ساتھ", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "عبارت اور روانی 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "عبارت اور روانی 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "حصہ 3 کا امتحان", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "◌ً، 1، 2 اور 3", newKeys: ["ً","1","2","3"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "4، 5، 6 اور 7", newKeys: ["4","5","6","7"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "8، 9، 0 اور _", newKeys: ["8","9","0","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "+", newKeys: ["+"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "◌ْ، ◌ّ، ◌ٰ اور ڈ", newKeys: ["ْ","ّ","ٰ","ڈ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "غ، ذ، ژ اور ث", newKeys: ["غ","ذ","ژ","ث"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "ظ اور .", newKeys: ["ظ","."], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "◌َ، ◌ِ، ۃ اور ◌ُ", newKeys: ["َ","ِ","ۃ","ُ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "}، {، | اور ض", newKeys: ["}","{","|","ض"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l10': { title: "◌ٔ، :، \" اور ◌٘", newKeys: ["ٔ",":","\"","٘"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l11': { title: "<، ٫ اور ؟", newKeys: ["<","٫","؟"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l12': { title: "تمام علامتیں ایک ساتھ", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l13': { title: "حصہ 4 کا امتحان", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l10',
    'u4-l11',
    'u4-l12',
    'u4-l13'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ف ف فف\nفففف\nفففففف فففففف",
    hint: "شہادت کی انگلیاں ابھرے ہوئے نشان والی دو کلیدوں پر رکھیں اور جو نظر آئے لکھیں، کی بورڈ دیکھے بغیر۔"
  }
};
