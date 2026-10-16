/* data/curriculum.en-dvorak.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/en.js (families.dvorak) + bố cục bàn phím 129
   (Dvorak). Sửa lời dạy ở data/courses/en.js, sửa kho từ ở data/words/en.js,
   rồi chạy lại:  node scripts/build-course.js --lang en --course en-dvorak

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'en',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'en-dvorak',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 129,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [129],
  progressKey: 'typingease-progress-en-dvorak-v1',
  badgesKey: 'typingease-badges-en-dvorak-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "The home row",
      summary: "Eight keys under your fingers, then I D, period and C and P G — enough to type real words without looking down.",
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
    'u1-l01': { title: "U and H and the space bar", newKeys: ["u","h"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "E and T", newKeys: ["e","t"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "O and N", newKeys: ["o","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A and S", newKeys: ["a","s"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Review", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "I and D", newKeys: ["i","d"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "Period and C", newKeys: [".","c"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "P and G", newKeys: ["p","g"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Weak keys", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Unit 1 test", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "Y and F", newKeys: ["y","f"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "R and comma", newKeys: ["r",","], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "J and B", newKeys: ["j","b"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M and K", newKeys: ["m","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Review", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Apostrophe and L", newKeys: ["'","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "X and Q", newKeys: ["x","q"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Semicolon, V, W and hyphen", newKeys: [";","v","w","-"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift and Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Weak keys", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Unit 2 test", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "The number row", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "The outer column", newKeys: ["z","[","]","/","=","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Addresses, links and numbers", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Text and rhythm 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Text and rhythm 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Unit 3 test", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, ! and @", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % and ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( and )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "{ and }", newKeys: ["{","}"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "\", <, > and :", newKeys: ["\"","<",">",":"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "?, +, | and _", newKeys: ["?","+","|","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
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
    content: "u u uu\nuuuu\nuuuuuu uuuuuu",
    hint: "Rest your index fingers on the two keys with bumps and type what you see, without looking at the keyboard."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/en-dvorak/u1-l01.json?v=1b51ad327ebb0f7d",
  "u1-l02": "/data/lessons/en-dvorak/u1-l02.json?v=85d4f570fe5a8183",
  "u1-l03": "/data/lessons/en-dvorak/u1-l03.json?v=c48ba9ae8cf98b0c",
  "u1-l04": "/data/lessons/en-dvorak/u1-l04.json?v=11824a4c40e4e6b8",
  "u1-l05": "/data/lessons/en-dvorak/u1-l05.json?v=ccf2a6640929f6d1",
  "u1-l06": "/data/lessons/en-dvorak/u1-l06.json?v=c54b13b75d79348f",
  "u1-l07": "/data/lessons/en-dvorak/u1-l07.json?v=7fc474aa95025c07",
  "u1-l08": "/data/lessons/en-dvorak/u1-l08.json?v=86e96f3e84e12b17",
  "u1-l09": "/data/lessons/en-dvorak/u1-l09.json?v=b77caeeaeac543af",
  "u1-l10": "/data/lessons/en-dvorak/u1-l10.json?v=1e6e741ed8fb0af8",
  "u2-l01": "/data/lessons/en-dvorak/u2-l01.json?v=8a478cfb5326a19d",
  "u2-l02": "/data/lessons/en-dvorak/u2-l02.json?v=bd0ba6c3266d634e",
  "u2-l03": "/data/lessons/en-dvorak/u2-l03.json?v=b3d9a99b1e3b23d4",
  "u2-l04": "/data/lessons/en-dvorak/u2-l04.json?v=bc9262a048df812c",
  "u2-l05": "/data/lessons/en-dvorak/u2-l05.json?v=623fec6fb3d3dd30",
  "u2-l06": "/data/lessons/en-dvorak/u2-l06.json?v=930a36a04b06aef2",
  "u2-l07": "/data/lessons/en-dvorak/u2-l07.json?v=2d49db06475fd923",
  "u2-l08": "/data/lessons/en-dvorak/u2-l08.json?v=22804c5e13977cfa",
  "u2-l09": "/data/lessons/en-dvorak/u2-l09.json?v=4bc17d41db12e625",
  "u2-l10": "/data/lessons/en-dvorak/u2-l10.json?v=1045ce877ca5eb04",
  "u2-l11": "/data/lessons/en-dvorak/u2-l11.json?v=010f0d1137c9ef28",
  "u3-l01": "/data/lessons/en-dvorak/u3-l01.json?v=941f1d44ae0cbaec",
  "u3-l02": "/data/lessons/en-dvorak/u3-l02.json?v=7f54cae6d894927e",
  "u3-l03": "/data/lessons/en-dvorak/u3-l03.json?v=3a1e1562074c8a51",
  "u3-l04": "/data/lessons/en-dvorak/u3-l04.json?v=a76c66d73218d628",
  "u3-l05": "/data/lessons/en-dvorak/u3-l05.json?v=448f61a036bbc180",
  "u3-l06": "/data/lessons/en-dvorak/u3-l06.json?v=91b3c92c9c3f413e",
  "u4-l01": "/data/lessons/en-dvorak/u4-l01.json?v=6e1509d28838db6d",
  "u4-l02": "/data/lessons/en-dvorak/u4-l02.json?v=ede4d952b8988f1c",
  "u4-l03": "/data/lessons/en-dvorak/u4-l03.json?v=24b2266267edd02f",
  "u4-l04": "/data/lessons/en-dvorak/u4-l04.json?v=1337b03754555391",
  "u4-l05": "/data/lessons/en-dvorak/u4-l05.json?v=a8c0ad135eaeb155",
  "u4-l06": "/data/lessons/en-dvorak/u4-l06.json?v=017b5856aa64758a",
  "u4-l07": "/data/lessons/en-dvorak/u4-l07.json?v=114418fc218fa988",
  "u4-l08": "/data/lessons/en-dvorak/u4-l08.json?v=c0d4f399d6fc2682"
};
/* </auto:lesson-urls> */
