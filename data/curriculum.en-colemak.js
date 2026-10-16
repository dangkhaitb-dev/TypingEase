/* data/curriculum.en-colemak.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/en.js (families.colemak) + bố cục bàn phím 131
   (Colemak). Sửa lời dạy ở data/courses/en.js, sửa kho từ ở data/words/en.js,
   rồi chạy lại:  node scripts/build-course.js --lang en --course en-colemak

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'en',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'en-colemak',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 131,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [131],
  progressKey: 'typingease-progress-en-colemak-v1',
  badgesKey: 'typingease-badges-en-colemak-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "The home row",
      summary: "Eight keys under your fingers, then D H, F U and P L — enough to type real words without looking down.",
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
    'u1-l06': { title: "D and H", newKeys: ["d","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "F and U", newKeys: ["f","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "P and L", newKeys: ["p","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Weak keys", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Unit 1 test", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "G and J", newKeys: ["g","j"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "Y and W", newKeys: ["y","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C and K", newKeys: ["c","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M and V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Review", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q and semicolon", newKeys: ["q",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B and X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, period, comma and apostrophe", newKeys: ["z",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
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
  "u1-l01": "/data/lessons/en-colemak/u1-l01.json?v=efd6503c29e7f2a4",
  "u1-l02": "/data/lessons/en-colemak/u1-l02.json?v=43be8c849e9a7ce3",
  "u1-l03": "/data/lessons/en-colemak/u1-l03.json?v=43b81214b86d962f",
  "u1-l04": "/data/lessons/en-colemak/u1-l04.json?v=5ba79711b261fcb0",
  "u1-l05": "/data/lessons/en-colemak/u1-l05.json?v=f2f67217eba4156e",
  "u1-l06": "/data/lessons/en-colemak/u1-l06.json?v=6ff332a4da99fb55",
  "u1-l07": "/data/lessons/en-colemak/u1-l07.json?v=f700f7e0fa4cd24e",
  "u1-l08": "/data/lessons/en-colemak/u1-l08.json?v=8fc376e79595b5f2",
  "u1-l09": "/data/lessons/en-colemak/u1-l09.json?v=4608970ebdba5a78",
  "u1-l10": "/data/lessons/en-colemak/u1-l10.json?v=cd2972ab9eae8e91",
  "u2-l01": "/data/lessons/en-colemak/u2-l01.json?v=f7fe294d084a3b5c",
  "u2-l02": "/data/lessons/en-colemak/u2-l02.json?v=562a6dc8306e25bf",
  "u2-l03": "/data/lessons/en-colemak/u2-l03.json?v=f0693f2973ef00de",
  "u2-l04": "/data/lessons/en-colemak/u2-l04.json?v=7845cf93dbaadc5c",
  "u2-l05": "/data/lessons/en-colemak/u2-l05.json?v=65c9d578a963f9e6",
  "u2-l06": "/data/lessons/en-colemak/u2-l06.json?v=c16c4118ebf23ac6",
  "u2-l07": "/data/lessons/en-colemak/u2-l07.json?v=99226673a4d665e7",
  "u2-l08": "/data/lessons/en-colemak/u2-l08.json?v=d04981023e44aad2",
  "u2-l09": "/data/lessons/en-colemak/u2-l09.json?v=a32b465c7e9c7c5c",
  "u2-l10": "/data/lessons/en-colemak/u2-l10.json?v=3e59960ebe2bafe1",
  "u2-l11": "/data/lessons/en-colemak/u2-l11.json?v=e17bc5ce5e4fe938",
  "u3-l01": "/data/lessons/en-colemak/u3-l01.json?v=72da5657c82a60a6",
  "u3-l02": "/data/lessons/en-colemak/u3-l02.json?v=138e6c82eb1115a1",
  "u3-l03": "/data/lessons/en-colemak/u3-l03.json?v=c55a162e88771e63",
  "u3-l04": "/data/lessons/en-colemak/u3-l04.json?v=988722b14029d6ba",
  "u3-l05": "/data/lessons/en-colemak/u3-l05.json?v=2baa706c3999b7c5",
  "u3-l06": "/data/lessons/en-colemak/u3-l06.json?v=401276231279ec1b",
  "u4-l01": "/data/lessons/en-colemak/u4-l01.json?v=315fa0614a32f473",
  "u4-l02": "/data/lessons/en-colemak/u4-l02.json?v=8ccc4b648b53691c",
  "u4-l03": "/data/lessons/en-colemak/u4-l03.json?v=3bb866164d7ad9c9",
  "u4-l04": "/data/lessons/en-colemak/u4-l04.json?v=ef988996d9a76bdb",
  "u4-l05": "/data/lessons/en-colemak/u4-l05.json?v=990cb7a737a2cc0c",
  "u4-l06": "/data/lessons/en-colemak/u4-l06.json?v=307df0dba34b6da6",
  "u4-l07": "/data/lessons/en-colemak/u4-l07.json?v=ca1721ccfb3f3acd",
  "u4-l08": "/data/lessons/en-colemak/u4-l08.json?v=17f58b13ffdadf03"
};
/* </auto:lesson-urls> */
