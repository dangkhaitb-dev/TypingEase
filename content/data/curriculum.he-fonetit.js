/* data/curriculum.he-fonetit.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/he.js (families.fonetit) + bố cục bàn phím 144
   (Hebrew (phonetic)). Sửa lời dạy ở data/courses/he.js, sửa kho từ ở data/words/he.js,
   rồi chạy lại:  node scripts/build-course.js --lang he --course he-fonetit

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'he',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'he-fonetit',
  // Chu viet tu phai sang trai: player dat dir="rtl" cho dong can go (player.js textDir).
  dir: 'rtl',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 144,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [144],
  progressKey: 'typingease-progress-he-fonetit-v1',
  badgesKey: 'typingease-badges-he-fonetit-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "שורת הבית",
      summary: "שמונה מקשים מתחת לאצבעות, ואחר כך ג ה, א י ו־ר ו — מספיק כדי להקליד מילים אמיתיות בעברית בלי להסתכל למטה.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "מתחילים כאן", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "מותחים את האצבעות", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "סיום היחידה", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "שאר האותיות",
      summary: "השורה העליונה, השורה התחתונה וסימני הפיסוק, ואז Shift לאותיות הסופיות ו־Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "מתחילים כאן", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "מותחים את האצבעות", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "סיום היחידה", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "ספרות, סימנים ומהירות",
      summary: "שורת הספרות, הסימנים שבקצה הימני, ואז פסקאות ארוכות בקצב קבוע.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "ספרות וסימנים", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "מהירות", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "כל שאר המקשים",
      summary: "20 התווים של המקלדת הזו שהקורס עוד לא השתמש בהם, כל אחד במקום שבו כותבים אותו באמת.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "המקשים שנשארו", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06'] },
        { id: 'finish', title: "סיום היחידה", lessons: ['u4-l07', 'u4-l08'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "פ ו־י ומקש הרווח", newKeys: ["פ","י"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ד ו־כ", newKeys: ["ד","כ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "ש ו־ל", newKeys: ["ש","ל"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "א ו־נקודה־פסיק", newKeys: ["א",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "חזרה", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "ג ו־ה", newKeys: ["ג","ה"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "א ו־י", newKeys: ["א","י"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ר ו־ו", newKeys: ["ר","ו"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "מקשים חלשים", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "מבחן יחידה 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ת ו־ע", newKeys: ["ת","ע"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "ס ו־ו", newKeys: ["ס","ו"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "צ ו־נ", newKeys: ["צ","נ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "מ ו־ו", newKeys: ["מ","ו"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "חזרה", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ק ו־פ", newKeys: ["ק","פ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ב ו־ח", newKeys: ["ב","ח"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ז, נקודה, פסיק ו־גרש", newKeys: ["ז",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift ו־Enter", newKeys: ["shift","enter","ף","ך","ט","ץ","ן","ם",":","\""], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "מקשים חלשים", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "מבחן יחידה 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "שורת הספרות", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "העמודה הימנית", newKeys: ["/","-","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "אותיות, ספרות וסימנים", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "טקסט וקצב 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "טקסט וקצב 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "מבחן יחידה 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, סימן קריאה ו־@", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % ו־^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( ו־)", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ ו־+", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "{, }, | ו־<", newKeys: ["{","}","|","<"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "> ו־סימן שאלה", newKeys: [">","?"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "כל הסימנים יחד", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l08': { title: "מבחן יחידה 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l08'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "פ פ פפ\nפפפפ\nפפפפפפ פפפפפפ",
    hint: "הניחו את האצבעות המורות על שני המקשים המסומנים והקלידו את מה שאתם רואים, בלי להסתכל על המקלדת."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/he-fonetit/u1-l01.json?v=37c602879b31a366",
  "u1-l02": "/data/lessons/he-fonetit/u1-l02.json?v=476dfa52161d1002",
  "u1-l03": "/data/lessons/he-fonetit/u1-l03.json?v=438303a8ab359b89",
  "u1-l04": "/data/lessons/he-fonetit/u1-l04.json?v=c69c0ca6f7ce19aa",
  "u1-l05": "/data/lessons/he-fonetit/u1-l05.json?v=6fb53f1b883b87e2",
  "u1-l06": "/data/lessons/he-fonetit/u1-l06.json?v=d34ac9a6099fa2de",
  "u1-l07": "/data/lessons/he-fonetit/u1-l07.json?v=04aba5cdd7b4a359",
  "u1-l08": "/data/lessons/he-fonetit/u1-l08.json?v=16c229d8b49d5365",
  "u1-l09": "/data/lessons/he-fonetit/u1-l09.json?v=c6bc154b32f2630b",
  "u1-l10": "/data/lessons/he-fonetit/u1-l10.json?v=711ed7c141a8b539",
  "u2-l01": "/data/lessons/he-fonetit/u2-l01.json?v=a6e5b23afe6aab63",
  "u2-l02": "/data/lessons/he-fonetit/u2-l02.json?v=e44a5ab95cbd3292",
  "u2-l03": "/data/lessons/he-fonetit/u2-l03.json?v=064bb723e3a7feeb",
  "u2-l04": "/data/lessons/he-fonetit/u2-l04.json?v=9d704a1a3cb3255c",
  "u2-l05": "/data/lessons/he-fonetit/u2-l05.json?v=3ebfc6800dedf5ab",
  "u2-l06": "/data/lessons/he-fonetit/u2-l06.json?v=59c29ea7224419f2",
  "u2-l07": "/data/lessons/he-fonetit/u2-l07.json?v=a193c2bb51a22db4",
  "u2-l08": "/data/lessons/he-fonetit/u2-l08.json?v=3d2dfdb1de5988f8",
  "u2-l09": "/data/lessons/he-fonetit/u2-l09.json?v=1bd8622b882ea127",
  "u2-l10": "/data/lessons/he-fonetit/u2-l10.json?v=96fd60bce0ef0ae1",
  "u2-l11": "/data/lessons/he-fonetit/u2-l11.json?v=5566ed423c375bc7",
  "u3-l01": "/data/lessons/he-fonetit/u3-l01.json?v=3914d4bd032ef99e",
  "u3-l02": "/data/lessons/he-fonetit/u3-l02.json?v=d64b54972774e471",
  "u3-l03": "/data/lessons/he-fonetit/u3-l03.json?v=473f1ac2c413c11a",
  "u3-l04": "/data/lessons/he-fonetit/u3-l04.json?v=0ca549c87ca1d6e0",
  "u3-l05": "/data/lessons/he-fonetit/u3-l05.json?v=b8cccb9fcb2937cf",
  "u3-l06": "/data/lessons/he-fonetit/u3-l06.json?v=05c24bb47f751875",
  "u4-l01": "/data/lessons/he-fonetit/u4-l01.json?v=3af663c4c7f59bc0",
  "u4-l02": "/data/lessons/he-fonetit/u4-l02.json?v=0cb5d32f178389e1",
  "u4-l03": "/data/lessons/he-fonetit/u4-l03.json?v=3d0a448a370af0d2",
  "u4-l04": "/data/lessons/he-fonetit/u4-l04.json?v=6e9ce9b073153440",
  "u4-l05": "/data/lessons/he-fonetit/u4-l05.json?v=695c3474e9a7be9c",
  "u4-l06": "/data/lessons/he-fonetit/u4-l06.json?v=25ff75f8ad671486",
  "u4-l07": "/data/lessons/he-fonetit/u4-l07.json?v=b65d0c8393822d88",
  "u4-l08": "/data/lessons/he-fonetit/u4-l08.json?v=8a376ecabd079426"
};
/* </auto:lesson-urls> */
