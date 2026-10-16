/* data/curriculum.nl-mac.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/nl.js (families.mac) + bố cục bàn phím 199
   (Dutch (Macintosh)). Sửa lời dạy ở data/courses/nl.js, sửa kho từ ở data/words/nl.js,
   rồi chạy lại:  node scripts/build-course.js --lang nl --course nl-mac

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'nl',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'nl-mac',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 199,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [199],
  progressKey: 'typingease-progress-nl-mac-v1',
  badgesKey: 'typingease-badges-nl-mac-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "De thuisrij",
      summary: "Acht toetsen onder je vingers, daarna G H, E I en R U — genoeg om echte woorden te typen zonder omlaag te kijken.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Begin hier", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Strek je vingers", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Sluit de unit af", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "De rest van het alfabet",
      summary: "De bovenste rij, de onderste rij, de leestekens met de apostrof, en hoofdletters — het hele alfabet, plus Shift en Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Begin hier", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Strek je vingers", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Sluit de unit af", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Cijfers, tekens en tempo",
      summary: "De cijferrij, de buitenste kolom, en daarna lange alinea's in een vast tempo.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Cijfers en tekens", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Tempo", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Alle andere toetsen",
      summary: "De 22 tekens van dit toetsenbord die de cursus nog niet heeft gebruikt, elk geschreven op de plek waar je het echt gebruikt.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "De toetsen die nog ontbreken", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "Sluit de unit af", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F en J, plus de spatiebalk", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D en K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S en L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A en de puntkomma", newKeys: ["a",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Herhaling", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G en H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E en I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R en U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Zwakke toetsen", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test van unit 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T en Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O en W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C en N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M en V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Herhaling", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q en P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B en X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, de punt, de komma en de apostrof", newKeys: ["z",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift en Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Zwakke toetsen", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test van unit 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "De cijferrij", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "De buitenste kolom", newKeys: ["/","-","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Letters, cijfers en tekens", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Tekst en tempo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Tekst en tempo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test van unit 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, ! en @", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % en ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( en )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ en het plusteken", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "< en >", newKeys: ["<",">"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "{, }, | en de dubbele punt", newKeys: ["{","}","|",":"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "\" en ?", newKeys: ["\"","?"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "Alle tekens samen", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "Test van unit 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l09'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "f f ff\nffff\nffffff ffffff",
    hint: "Leg je wijsvingers op de twee toetsen met een ribbeltje en typ wat je ziet, zonder naar het toetsenbord te kijken."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/nl-mac/u1-l01.json?v=3a02e1663326a5e1",
  "u1-l02": "/data/lessons/nl-mac/u1-l02.json?v=b6fc639c3db0b300",
  "u1-l03": "/data/lessons/nl-mac/u1-l03.json?v=268537da511fa6cc",
  "u1-l04": "/data/lessons/nl-mac/u1-l04.json?v=f366f100911f909b",
  "u1-l05": "/data/lessons/nl-mac/u1-l05.json?v=7497decb1e812805",
  "u1-l06": "/data/lessons/nl-mac/u1-l06.json?v=fae82c835520e0c5",
  "u1-l07": "/data/lessons/nl-mac/u1-l07.json?v=aa209a1bc2752f3e",
  "u1-l08": "/data/lessons/nl-mac/u1-l08.json?v=520cd0f7130f12de",
  "u1-l09": "/data/lessons/nl-mac/u1-l09.json?v=1f64514ad4481ac3",
  "u1-l10": "/data/lessons/nl-mac/u1-l10.json?v=8de52321d5717d52",
  "u2-l01": "/data/lessons/nl-mac/u2-l01.json?v=76e1fbfa19b16cd4",
  "u2-l02": "/data/lessons/nl-mac/u2-l02.json?v=79ccfca846e3a090",
  "u2-l03": "/data/lessons/nl-mac/u2-l03.json?v=2718c50c957b9046",
  "u2-l04": "/data/lessons/nl-mac/u2-l04.json?v=14c43b52a46c58ec",
  "u2-l05": "/data/lessons/nl-mac/u2-l05.json?v=352c09bf5309897e",
  "u2-l06": "/data/lessons/nl-mac/u2-l06.json?v=4897afa78110dff0",
  "u2-l07": "/data/lessons/nl-mac/u2-l07.json?v=362f9538126f7854",
  "u2-l08": "/data/lessons/nl-mac/u2-l08.json?v=c7e99ac951437872",
  "u2-l09": "/data/lessons/nl-mac/u2-l09.json?v=6e0d2221746e5383",
  "u2-l10": "/data/lessons/nl-mac/u2-l10.json?v=a1b06246dbfb9fc7",
  "u2-l11": "/data/lessons/nl-mac/u2-l11.json?v=958c66e8cc8ebb4e",
  "u3-l01": "/data/lessons/nl-mac/u3-l01.json?v=e57cc93d33869079",
  "u3-l02": "/data/lessons/nl-mac/u3-l02.json?v=1f530bb11cf9bb3f",
  "u3-l03": "/data/lessons/nl-mac/u3-l03.json?v=6fc6930440d73195",
  "u3-l04": "/data/lessons/nl-mac/u3-l04.json?v=19412cb489586ffe",
  "u3-l05": "/data/lessons/nl-mac/u3-l05.json?v=e6311e77c66d9162",
  "u3-l06": "/data/lessons/nl-mac/u3-l06.json?v=e91a8e60b21e2732",
  "u4-l01": "/data/lessons/nl-mac/u4-l01.json?v=947c2f2f15edc48c",
  "u4-l02": "/data/lessons/nl-mac/u4-l02.json?v=8522ab24c1047d8c",
  "u4-l03": "/data/lessons/nl-mac/u4-l03.json?v=cb64fc72f31db873",
  "u4-l04": "/data/lessons/nl-mac/u4-l04.json?v=22138e1dd442d1a1",
  "u4-l05": "/data/lessons/nl-mac/u4-l05.json?v=1ca5d9706366f8be",
  "u4-l06": "/data/lessons/nl-mac/u4-l06.json?v=c50f4c6901972a8f",
  "u4-l07": "/data/lessons/nl-mac/u4-l07.json?v=b898677db9dfb4b6",
  "u4-l08": "/data/lessons/nl-mac/u4-l08.json?v=3ff388278a2059cc",
  "u4-l09": "/data/lessons/nl-mac/u4-l09.json?v=b5c003634ee436bc"
};
/* </auto:lesson-urls> */
