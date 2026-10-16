/* data/curriculum.it-mac.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/it.js (families.mac) + bố cục bàn phím 196
   (Italian (Macintosh)). Sửa lời dạy ở data/courses/it.js, sửa kho từ ở data/words/it.js,
   rồi chạy lại:  node scripts/build-course.js --lang it --course it-mac

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'it',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'it-mac',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 196,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [196],
  progressKey: 'typingease-progress-it-mac-v1',
  badgesKey: 'typingease-badges-it-mac-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "La riga di riposo",
      summary: "Otto tasti sotto le dita, poi G H, E I e R U — abbastanza per scrivere parole vere senza guardare in basso.",
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
      title: "Accenti, numeri e velocità",
      summary: "I due livelli della riga dei numeri — è, é e à compresi —, i segni di ogni giorno, e poi paragrafi lunghi a ritmo costante.",
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
      summary: "I 13 caratteri di questa tastiera che il corso non ha ancora usato, ognuno scritto dove si usa davvero.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "I tasti che mancano", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04'] },
        { id: 'finish', title: "Chiudi l'unità", lessons: ['u4-l05', 'u4-l06'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F e J, più la barra spaziatrice", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D e K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S e L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A e M", newKeys: ["a","m"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Ripasso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G e H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E e I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R e U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Tasti deboli", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Prova dell'unità 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T e Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O e Z", newKeys: ["o","z"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C e N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "La virgola e V", newKeys: [",","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Ripasso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q e P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B e X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "W, i due punti, il punto e virgola e Ù", newKeys: ["w",":",";","ù"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift e Invio", newKeys: ["shift","enter","."], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Tasti deboli", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Prova dell'unità 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Accenti e numeri", newKeys: ["&","\"","'","(","ç","è",")","£","à","é","1","2","3","4","5","6","7","8","9","0"], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La colonna esterna", newKeys: ["ò","-","=","ì","$","§"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Indirizzi, link e numeri", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Testi e ritmo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Testi e ritmo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Prova dell'unità 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "@, #, _ e +", newKeys: ["@","#","_","+"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "< e >", newKeys: ["<",">"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "^, *, ° e %", newKeys: ["^","*","°","%"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "?, / e !", newKeys: ["?","/","!"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Tutti i segni insieme", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l06': { title: "Prova dell'unità 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l06'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "f f ff\nffff\nffffff ffffff",
    hint: "Appoggia gli indici sui due tasti con il rilievo e scrivi quello che vedi, senza guardare la tastiera."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/it-mac/u1-l01.json?v=9e8a6f5484952558",
  "u1-l02": "/data/lessons/it-mac/u1-l02.json?v=19d198084ad08cc1",
  "u1-l03": "/data/lessons/it-mac/u1-l03.json?v=249977b9bcda597c",
  "u1-l04": "/data/lessons/it-mac/u1-l04.json?v=a38454365d1d8e84",
  "u1-l05": "/data/lessons/it-mac/u1-l05.json?v=b3478a72b0569920",
  "u1-l06": "/data/lessons/it-mac/u1-l06.json?v=abc26fe7fb4f0309",
  "u1-l07": "/data/lessons/it-mac/u1-l07.json?v=19968d2a038da391",
  "u1-l08": "/data/lessons/it-mac/u1-l08.json?v=2ddffb38907a07ca",
  "u1-l09": "/data/lessons/it-mac/u1-l09.json?v=39e2fc778d93bc87",
  "u1-l10": "/data/lessons/it-mac/u1-l10.json?v=b829f20bfde691ae",
  "u2-l01": "/data/lessons/it-mac/u2-l01.json?v=5624ef307c9c50b8",
  "u2-l02": "/data/lessons/it-mac/u2-l02.json?v=3681731876fc39b4",
  "u2-l03": "/data/lessons/it-mac/u2-l03.json?v=f7559eaba05386b8",
  "u2-l04": "/data/lessons/it-mac/u2-l04.json?v=1040b9a89de3b389",
  "u2-l05": "/data/lessons/it-mac/u2-l05.json?v=13b5f6772fb0a7e0",
  "u2-l06": "/data/lessons/it-mac/u2-l06.json?v=e1f1f3974031eaa9",
  "u2-l07": "/data/lessons/it-mac/u2-l07.json?v=7f3a9d9c76086d7d",
  "u2-l08": "/data/lessons/it-mac/u2-l08.json?v=434dcd1d296b834e",
  "u2-l09": "/data/lessons/it-mac/u2-l09.json?v=610478e87f887fc2",
  "u2-l10": "/data/lessons/it-mac/u2-l10.json?v=de1e2ea308f2a697",
  "u2-l11": "/data/lessons/it-mac/u2-l11.json?v=91eb3110466edf99",
  "u3-l01": "/data/lessons/it-mac/u3-l01.json?v=fc143a568a1f8fdc",
  "u3-l02": "/data/lessons/it-mac/u3-l02.json?v=0753568271f54bf8",
  "u3-l03": "/data/lessons/it-mac/u3-l03.json?v=32f5f0f848f388e7",
  "u3-l04": "/data/lessons/it-mac/u3-l04.json?v=74d8d09be0dc0931",
  "u3-l05": "/data/lessons/it-mac/u3-l05.json?v=373f5abc2cf00276",
  "u3-l06": "/data/lessons/it-mac/u3-l06.json?v=82130f50c66dd78d",
  "u4-l01": "/data/lessons/it-mac/u4-l01.json?v=c62e63a0542c7600",
  "u4-l02": "/data/lessons/it-mac/u4-l02.json?v=6639627f1d5b9b61",
  "u4-l03": "/data/lessons/it-mac/u4-l03.json?v=b1f3e609099dfd5c",
  "u4-l04": "/data/lessons/it-mac/u4-l04.json?v=1799e3f3addc933e",
  "u4-l05": "/data/lessons/it-mac/u4-l05.json?v=d1790fe447cfaf07",
  "u4-l06": "/data/lessons/it-mac/u4-l06.json?v=8c270e234f5015ad"
};
/* </auto:lesson-urls> */
