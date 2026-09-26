/* data/curriculum.ar-azerty.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/ar.js (families.azerty) + bố cục bàn phím 141
   (Arabic (AZERTY)). Sửa lời dạy ở data/courses/ar.js, sửa kho từ ở data/words/ar.js,
   rồi chạy lại:  node scripts/build-course.js --lang ar --course ar-azerty

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'ar',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'ar-azerty',
  // Chu viet tu phai sang trai: player dat dir="rtl" cho dong can go (player.js textDir).
  dir: 'rtl',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 141,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [141],
  progressKey: 'typingease-progress-ar-azerty-v1',
  badgesKey: 'typingease-badges-ar-azerty-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "صف الارتكاز",
      summary: "ثمانية مفاتيح تحت الأصابع، ثم اللام والألف، الثاء والهاء والقاف والعين: ما يكفي لكتابة كلمات عربية حقيقية من دون النظر إلى الأسفل.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "ابدأ هنا", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "تمديد الأصابع", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "ختام الوحدة", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "بقية الحروف",
      summary: "الصف العلوي والصف السفلي، ثم طبقة Shift التي تعطي الهمزة على الألف والفاصلة والنقطة، ثم Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "ابدأ هنا", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "تمديد الأصابع", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "ختام الوحدة", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "الرموز والأرقام والسرعة",
      summary: "صف الأرقام بطبقتيه، ثم الجيم والدال والظاء في العمود الأيمن، ثم فقرات طويلة بإيقاع ثابت.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "الرموز والأرقام", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "السرعة", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "كل المفاتيح الباقية",
      summary: "الرموز الـ29 التي لم تستعملها الدورة بعد على هذه اللوحة، كل رمز في المكان الذي يستعمل فيه فعلا.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "المفاتيح الباقية", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08'] },
        { id: 'finish', title: "ختام الوحدة", lessons: ['u4-l09', 'u4-l10'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "الباء والتاء، ومفتاح المسافة", newKeys: ["ب","ت"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "الياء والنون", newKeys: ["ي","ن"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "السين والميم", newKeys: ["س","م"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "الشين والكاف", newKeys: ["ش","ك"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "مراجعة", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "اللام والألف", newKeys: ["ل","ا"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "الثاء والهاء", newKeys: ["ث","ه"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "القاف والعين", newKeys: ["ق","ع"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "المفاتيح الضعيفة", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "اختبار الوحدة 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "الفاء والغين", newKeys: ["ف","غ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "الخاء والصاد", newKeys: ["خ","ص"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "الواو المهموزة والألف المقصورة", newKeys: ["ؤ","ى"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "التاء المربوطة والراء", newKeys: ["ة","ر"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "مراجعة", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "الضاد والحاء", newKeys: ["ض","ح"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "لام ألف والهمزة", newKeys: ["ﻻ","ء"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "الياء المهموزة، الزاي، الواو والطاء", newKeys: ["ئ","ز","و","ط"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift و Enter", newKeys: ["shift","enter","أ","إ","آ","،",".","؛","؟"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "المفاتيح الضعيفة", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "اختبار الوحدة 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "صف الرموز والأرقام", newKeys: ["&","é","\"","'","(","-","è","_","ç","à","1","2","3","4","5","6","7","8","9","0"], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "العمود الأيمن", newKeys: ["ظ",")","=","ج","د","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "مراجعة باللوحة كلها", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "نصوص وإيقاع 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "نصوص وإيقاع 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "اختبار الوحدة 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "الذال، الشدة، ° و+", newKeys: ["ذ","ّ","°","+"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "الفتحة، تنوين الفتح، الضمة وتنوين الضم", newKeys: ["َ","ً","ُ","ٌ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "لام ألف بهمزة تحتها، الكسرة، تنوين الكسر و]", newKeys: ["ﻹ","ِ","ٍ","]"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "[، لام ألف بهمزة فوقها، ~ والسكون", newKeys: ["[","ﻷ","~","ْ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "}، { ولام ألف ممدودة", newKeys: ["}","{","ﻵ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "`، علامة القسمة، علامة الضرب و<", newKeys: ["`","÷","×","<"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: ">، |، التطويل والشرطة المائلة", newKeys: [">","|","ـ","/"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "النقطتان والفاصلة اللاتينية", newKeys: [":",","], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "كل الرموز معا", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l10': { title: "اختبار الوحدة 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "ب ب بب\nبببب\nبببببب بببببب",
    hint: "ضع السبابتين على المفتاحين اللذين عليهما علامة بارزة، واكتب ما تراه من دون أن تنظر إلى اللوحة."
  }
};
