/* data/curriculum.it-dvorak.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/it.js (families.dvorak) + bố cục bàn phím 197
   (Italian Dvorak). Sửa lời dạy ở data/courses/it.js, sửa kho từ ở data/words/it.js,
   rồi chạy lại:  node scripts/build-course.js --lang it --course it-dvorak

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'it',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'it-dvorak',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 197,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [197],
  progressKey: 'typingease-progress-it-dvorak-v1',
  badgesKey: 'typingease-badges-it-dvorak-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "La riga di riposo",
      summary: "Otto tasti sotto le dita, poi I D, il punto e C e P G — abbastanza per scrivere parole vere senza guardare in basso.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Comincia da qui", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Allunga le dita", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Chiudi l'unità", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Il resto dell'alfabeto",
      summary: "Riga superiore, riga inferiore, punteggiatura, le vocali accentate e le maiuscole — tutto l'alfabeto, più Shift e Invio.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Comincia da qui", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Allunga le dita", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Chiudi l'unità", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Numeri, segni e velocità",
      summary: "La riga dei numeri, i segni di ogni giorno, indirizzi e link veri, e poi paragrafi lunghi a ritmo costante.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Numeri e segni", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Velocità", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Tutti gli altri tasti",
      summary: "I 24 caratteri di questa tastiera che il corso non ha ancora usato, ognuno scritto dove si usa davvero.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "I tasti che mancano", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "Chiudi l'unità", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "U e H, più la barra spaziatrice", newKeys: ["u","h"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "E e T", newKeys: ["e","t"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "O e N", newKeys: ["o","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A e S", newKeys: ["a","s"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Ripasso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "I e D", newKeys: ["i","d"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "Il punto e C", newKeys: [".","c"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "P e G", newKeys: ["p","g"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Tasti deboli", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Prova dell'unità 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "Y e F", newKeys: ["y","f"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "R e la virgola", newKeys: ["r",","], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "J e B", newKeys: ["j","b"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M e K", newKeys: ["m","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Ripasso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "À e L", newKeys: ["à","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "X e Q", newKeys: ["x","q"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Ò, V, W e il trattino", newKeys: ["ò","v","w","-"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift e Invio", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Tasti deboli", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Prova dell'unità 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "La riga dei numeri", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La colonna esterna", newKeys: ["z","'","ì","è","+","ù"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Indirizzi, link e numeri", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Testi e ritmo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Testi e ritmo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Prova dell'unità 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "\\, |, ! e \"", newKeys: ["\\","|","!","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "£, $, % e &", newKeys: ["£","$","%","&"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "/, (, ) e =", newKeys: ["/","(",")","="], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "? e ^", newKeys: ["?","^"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "°, il punto e virgola e i due punti", newKeys: ["°",";",":"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "<, > e Ç", newKeys: ["<",">","ç"], screens: 8, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "É, *, § e _", newKeys: ["é","*","§","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "Tutti i segni insieme", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "Prova dell'unità 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "u u uu\nuuuu\nuuuuuu uuuuuu",
    hint: "Appoggia gli indici sui due tasti con il rilievo e scrivi quello che vedi, senza guardare la tastiera."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/it-dvorak/u1-l01.json?v=cc55d5f2a24cfa4b",
  "u1-l02": "/data/lessons/it-dvorak/u1-l02.json?v=21b3d5b95ae16e90",
  "u1-l03": "/data/lessons/it-dvorak/u1-l03.json?v=45e990031231c055",
  "u1-l04": "/data/lessons/it-dvorak/u1-l04.json?v=26c6a569ba4628d4",
  "u1-l05": "/data/lessons/it-dvorak/u1-l05.json?v=08e344d85432ace2",
  "u1-l06": "/data/lessons/it-dvorak/u1-l06.json?v=c7c477eb4543aa7f",
  "u1-l07": "/data/lessons/it-dvorak/u1-l07.json?v=76e33e307c1cb4e6",
  "u1-l08": "/data/lessons/it-dvorak/u1-l08.json?v=ba85fd24d5208842",
  "u1-l09": "/data/lessons/it-dvorak/u1-l09.json?v=54556f22fab65986",
  "u1-l10": "/data/lessons/it-dvorak/u1-l10.json?v=523833d8aae81c73",
  "u2-l01": "/data/lessons/it-dvorak/u2-l01.json?v=9112a3f9bb05ce14",
  "u2-l02": "/data/lessons/it-dvorak/u2-l02.json?v=22c0e15a273f7cc4",
  "u2-l03": "/data/lessons/it-dvorak/u2-l03.json?v=06d17636378cecef",
  "u2-l04": "/data/lessons/it-dvorak/u2-l04.json?v=afc23dcc949e4b39",
  "u2-l05": "/data/lessons/it-dvorak/u2-l05.json?v=fb7a449362008bfa",
  "u2-l06": "/data/lessons/it-dvorak/u2-l06.json?v=5d7153fa1d915aef",
  "u2-l07": "/data/lessons/it-dvorak/u2-l07.json?v=91fdc5b3149522fa",
  "u2-l08": "/data/lessons/it-dvorak/u2-l08.json?v=56a24b8b81f577a1",
  "u2-l09": "/data/lessons/it-dvorak/u2-l09.json?v=f984eb5068e56d2a",
  "u2-l10": "/data/lessons/it-dvorak/u2-l10.json?v=049af8d27429b157",
  "u2-l11": "/data/lessons/it-dvorak/u2-l11.json?v=12b33aeed27d4716",
  "u3-l01": "/data/lessons/it-dvorak/u3-l01.json?v=122186436e10d1a9",
  "u3-l02": "/data/lessons/it-dvorak/u3-l02.json?v=02db58d9868420ff",
  "u3-l03": "/data/lessons/it-dvorak/u3-l03.json?v=5507dfe548c5fe06",
  "u3-l04": "/data/lessons/it-dvorak/u3-l04.json?v=3adee1ae77511acb",
  "u3-l05": "/data/lessons/it-dvorak/u3-l05.json?v=033a3602bf42795b",
  "u3-l06": "/data/lessons/it-dvorak/u3-l06.json?v=f65610795c8c8159",
  "u4-l01": "/data/lessons/it-dvorak/u4-l01.json?v=bcc41f29fde2ed27",
  "u4-l02": "/data/lessons/it-dvorak/u4-l02.json?v=c109de9921e69c9c",
  "u4-l03": "/data/lessons/it-dvorak/u4-l03.json?v=4e335658238c4bb2",
  "u4-l04": "/data/lessons/it-dvorak/u4-l04.json?v=01eb86ce5b4782bd",
  "u4-l05": "/data/lessons/it-dvorak/u4-l05.json?v=47631c3d55981e03",
  "u4-l06": "/data/lessons/it-dvorak/u4-l06.json?v=0d73f4786548db19",
  "u4-l07": "/data/lessons/it-dvorak/u4-l07.json?v=3e7dbc37d6b164a9",
  "u4-l08": "/data/lessons/it-dvorak/u4-l08.json?v=3124144f6c47d5d5",
  "u4-l09": "/data/lessons/it-dvorak/u4-l09.json?v=08d17a5ec581ad77"
};
/* </auto:lesson-urls> */
