/* data/curriculum.en-colemak-dh.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/en.js (families.colemak-dh) + bố cục bàn phím 132
   (Colemak-DH). Sửa lời dạy ở data/courses/en.js, sửa kho từ ở data/words/en.js,
   rồi chạy lại:  node scripts/build-course.js --lang en --course en-colemak-dh

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'en',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'en-colemak-dh',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 132,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [132],
  progressKey: 'typingease-progress-en-colemak-dh-v1',
  badgesKey: 'typingease-badges-en-colemak-dh-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "The home row",
      summary: "Eight keys under your fingers, then G M, F U and P L — enough to type real words without looking down.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Start here", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Reaching out", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Finish the unit", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "The rest of the alphabet",
      summary: "Top row, bottom row, punctuation and capitals — the whole alphabet, plus Shift and Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Start here", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Reaching out", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Finish the unit", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Numbers, symbols and speed",
      summary: "The number row, the right-hand edge, real addresses and links, then long paragraphs at a steady pace.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Numbers and symbols", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Speed", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Every other key",
      summary: "The 22 characters this keyboard has that the course has not used yet — brackets, currency, the rest of the Shift layer — each typed where it is actually used.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "The remaining keys", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06'] },
        { id: 'finish', title: "Finish the unit", lessons: ['u4-l07', 'u4-l08'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "T and N and the space bar", newKeys: ["t","n"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "S and E", newKeys: ["s","e"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "R and I", newKeys: ["r","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A and O", newKeys: ["a","o"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Review", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G and M", newKeys: ["g","m"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "F and U", newKeys: ["f","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "P and L", newKeys: ["p","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Weak keys", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Unit 1 test", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "B and J", newKeys: ["b","j"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "Y and W", newKeys: ["y","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "D and K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "H and V", newKeys: ["h","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Review", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q and semicolon", newKeys: ["q",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "Z and C", newKeys: ["z","c"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "X, period, comma and apostrophe", newKeys: ["x",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift and Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Weak keys", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Unit 2 test", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "The number row", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "The outer column", newKeys: ["/","-","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Addresses, links and numbers", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Text and rhythm 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Text and rhythm 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Unit 3 test", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, ! and @", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % and ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( and )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ and +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: ":, {, } and |", newKeys: [":","{","}","|"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "\", <, > and ?", newKeys: ["\"","<",">","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "All the symbols together", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l08': { title: "Unit 4 test", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "t t tt\ntttt\ntttttt tttttt",
    hint: "Rest your index fingers on the two keys with bumps and type what you see, without looking at the keyboard."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/en-colemak-dh/u1-l01.json?v=efd6503c29e7f2a4",
  "u1-l02": "/data/lessons/en-colemak-dh/u1-l02.json?v=43be8c849e9a7ce3",
  "u1-l03": "/data/lessons/en-colemak-dh/u1-l03.json?v=43b81214b86d962f",
  "u1-l04": "/data/lessons/en-colemak-dh/u1-l04.json?v=5ba79711b261fcb0",
  "u1-l05": "/data/lessons/en-colemak-dh/u1-l05.json?v=f2f67217eba4156e",
  "u1-l06": "/data/lessons/en-colemak-dh/u1-l06.json?v=1f1002e6b04dc3f1",
  "u1-l07": "/data/lessons/en-colemak-dh/u1-l07.json?v=af2d393d687bf774",
  "u1-l08": "/data/lessons/en-colemak-dh/u1-l08.json?v=75feef50f7f1812a",
  "u1-l09": "/data/lessons/en-colemak-dh/u1-l09.json?v=fcfbfe78aaafaed0",
  "u1-l10": "/data/lessons/en-colemak-dh/u1-l10.json?v=170ce759a20a9ad5",
  "u2-l01": "/data/lessons/en-colemak-dh/u2-l01.json?v=9c35f303bfedc5fa",
  "u2-l02": "/data/lessons/en-colemak-dh/u2-l02.json?v=a79ce8c10fa5b6dd",
  "u2-l03": "/data/lessons/en-colemak-dh/u2-l03.json?v=9789eb62b247a8a4",
  "u2-l04": "/data/lessons/en-colemak-dh/u2-l04.json?v=bcbfa16b32e1df0f",
  "u2-l05": "/data/lessons/en-colemak-dh/u2-l05.json?v=d122a312f74a140f",
  "u2-l06": "/data/lessons/en-colemak-dh/u2-l06.json?v=b72b551d728945ae",
  "u2-l07": "/data/lessons/en-colemak-dh/u2-l07.json?v=a28c27f410d16d43",
  "u2-l08": "/data/lessons/en-colemak-dh/u2-l08.json?v=06ec307df7e1bb9b",
  "u2-l09": "/data/lessons/en-colemak-dh/u2-l09.json?v=10d7f7a9021f4973",
  "u2-l10": "/data/lessons/en-colemak-dh/u2-l10.json?v=161d61128620c3fe",
  "u2-l11": "/data/lessons/en-colemak-dh/u2-l11.json?v=0b1dce945976bf27",
  "u3-l01": "/data/lessons/en-colemak-dh/u3-l01.json?v=8b9a359503800fe0",
  "u3-l02": "/data/lessons/en-colemak-dh/u3-l02.json?v=4ff94b724812a4c0",
  "u3-l03": "/data/lessons/en-colemak-dh/u3-l03.json?v=25d80752261997b6",
  "u3-l04": "/data/lessons/en-colemak-dh/u3-l04.json?v=a2bf97c5e2a04be3",
  "u3-l05": "/data/lessons/en-colemak-dh/u3-l05.json?v=4aee8df1f47d1bba",
  "u3-l06": "/data/lessons/en-colemak-dh/u3-l06.json?v=816193d49661473a",
  "u4-l01": "/data/lessons/en-colemak-dh/u4-l01.json?v=02f941a824bebbbf",
  "u4-l02": "/data/lessons/en-colemak-dh/u4-l02.json?v=61ae1e9788a6c3b7",
  "u4-l03": "/data/lessons/en-colemak-dh/u4-l03.json?v=91a05aa0a263658a",
  "u4-l04": "/data/lessons/en-colemak-dh/u4-l04.json?v=77e8da6c321cd340",
  "u4-l05": "/data/lessons/en-colemak-dh/u4-l05.json?v=670cb713f32004e7",
  "u4-l06": "/data/lessons/en-colemak-dh/u4-l06.json?v=cca44cdcda01eec5",
  "u4-l07": "/data/lessons/en-colemak-dh/u4-l07.json?v=7ecbfecf4ff65979",
  "u4-l08": "/data/lessons/en-colemak-dh/u4-l08.json?v=acf7df31dfd08405"
};
/* </auto:lesson-urls> */
