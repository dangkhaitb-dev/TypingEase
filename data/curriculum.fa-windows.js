/* data/curriculum.fa-windows.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/fa.js (families.windows) + bố cục bàn phím 140
   (Persian (Windows)). Sửa lời dạy ở data/courses/fa.js, sửa kho từ ở data/words/fa.js,
   rồi chạy lại:  node scripts/build-course.js --lang fa --course fa-windows

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'fa',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'fa-windows',
  // Chu viet tu phai sang trai: player dat dir="rtl" cho dong can go (player.js textDir).
  dir: 'rtl',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 140,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [140],
  progressKey: 'typingease-progress-fa-windows-v1',
  badgesKey: 'typingease-badges-fa-windows-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "ردیف پایه",
      summary: "هشت کلید زیر انگشت‌ها، بعد ل ا، ث ه و ق ع — کافی برای نوشتن کلمه‌های واقعی فارسی بدون نگاه به پایین.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "از اینجا شروع کنید", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "باز کردن انگشت‌ها", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "پایان بخش", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "بقیهٔ حروف",
      summary: "ردیف بالا، ردیف پایین، نقطه و لایهٔ Shift — تقریباً همهٔ حروف، به‌علاوهٔ Shift و Enter. پ در این صفحه‌کلید در لبهٔ راست است و در بخش بعد می‌آید.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "از اینجا شروع کنید", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "باز کردن انگشت‌ها", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "پایان بخش", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "اعداد، نشانه‌ها و سرعت",
      summary: "رقم‌ها، ج و چ و پ در لبهٔ راست، و بعد بندهای بلند با ریتم ثابت.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "اعداد و نشانه‌ها", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "سرعت", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "همهٔ کلیدهای دیگر",
      summary: "41 نویسه از این صفحه‌کلید که دوره هنوز به کار نبرده، هر کدام همان جایی که واقعاً به کار می‌رود.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "کلیدهای باقی‌مانده", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08', 'u4-l09', 'u4-l10', 'u4-l11'] },
        { id: 'finish', title: "پایان بخش", lessons: ['u4-l12', 'u4-l13'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ب و ت، به‌علاوهٔ کلید فاصله", newKeys: ["ب","ت"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ی و ن", newKeys: ["ی","ن"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "س و م", newKeys: ["س","م"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ش و ک", newKeys: ["ش","ک"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "مرور", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "ل و ا", newKeys: ["ل","ا"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "ث و ه", newKeys: ["ث","ه"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ق و ع", newKeys: ["ق","ع"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "کلیدهای ضعیف", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "آزمون بخش 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ف و غ", newKeys: ["ف","غ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "خ و ص", newKeys: ["خ","ص"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "ز و د", newKeys: ["ز","د"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ئ و ر", newKeys: ["ئ","ر"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "مرور", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ض و ح", newKeys: ["ض","ح"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ذ و ط", newKeys: ["ذ","ط"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ظ، نقطه، واو و گ", newKeys: ["ظ",".","و","گ"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift و Enter", newKeys: ["shift","enter","آ","ژ","ء","ؤ","أ","«","»"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "کلیدهای ضعیف", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "آزمون بخش 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "ردیف اعداد", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "ستون راست", newKeys: ["/","-","=","ج","چ","پ"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "مرور با کل صفحه‌کلید", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "متن و ریتم 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "متن و ریتم 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "آزمون بخش 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "÷، ×، علامت تعجب و @", newKeys: ["÷","×","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#، $، % و ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&، *، ) و (", newKeys: ["&","*",")","("], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ و +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "◌ً، ◌ٌ، ◌ٍ و ﷼", newKeys: ["ً","ٌ","ٍ","﷼"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "ویرگول، ◌َ، ◌ُ و ◌ِ", newKeys: ["،","َ","ُ","ِ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "◌ّ، ۀ، ة و ي", newKeys: ["ّ","ۀ","ة","ي"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "نقطه‌ویرگول، ,، ] و [", newKeys: ["؛",",","]","["], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "بک‌اسلش، }، { و |", newKeys: ["\\","}","{","|"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l10': { title: "ـ، دونقطه، \" و إ", newKeys: ["ـ",":","\"","إ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l11': { title: "<، > و علامت سؤال", newKeys: ["<",">","؟"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l12': { title: "همهٔ نشانه‌ها با هم", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l13': { title: "آزمون بخش 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "ب ب بب\nبببب\nبببببب بببببب",
    hint: "انگشت‌های اشاره را روی دو کلید برجسته بگذارید و آنچه را می‌بینید بنویسید، بدون نگاه به صفحه‌کلید."
  }
};
