/* data/curriculum.de-schweiz.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/de.js (families.schweiz) + bố cục bàn phím 193
   (Swiss German). Sửa lời dạy ở data/courses/de.js, sửa kho từ ở data/words/de.js,
   rồi chạy lại:  node scripts/build-course.js --lang de --course de-schweiz

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'de',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'de-schweiz',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 193,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [193],
  progressKey: 'typingease-progress-de-schweiz-v1',
  badgesKey: 'typingease-badges-de-schweiz-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Die Grundstellung",
      summary: "Acht Tasten unter den Fingern, danach G H, E I und R U — genug für echte deutsche Wörter, ohne nach unten zu sehen. Das Ö liegt schon hier, unter dem rechten kleinen Finger.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Hier fängt es an", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Die Finger strecken sich", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Die Einheit abschließen", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Der Rest des Alphabets",
      summary: "Obere Reihe, untere Reihe, Punkt und Komma, dazu das Ä — fast das ganze Alphabet, danach Shift und Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Hier fängt es an", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Die Finger strecken sich", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Die Einheit abschließen", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Zahlen, Zeichen und Tempo",
      summary: "Die Zahlenreihe, der rechte Rand mit dem Ü, Adressen und Links aus dem Alltag, danach lange Absätze in gleichmäßigem Tempo.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Zahlen und Zeichen", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Tempo", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Alle übrigen Tasten",
      summary: "Die 23 Zeichen dieser Tastatur, die der Kurs noch nicht benutzt hat, jedes dort getippt, wo es im Text wirklich vorkommt.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Die restlichen Tasten", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "Die Einheit abschließen", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F und J, dazu die Leertaste", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D und K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S und L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A und Ö", newKeys: ["a","ö"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Wiederholung", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G und H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E und I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R und U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Schwache Tasten", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test zu Einheit 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T und Z", newKeys: ["t","z"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O und W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C und N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M und V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Wiederholung", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q und P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B und X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Y, Punkt, Komma und Ä", newKeys: ["y",".",",","ä"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift und Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Schwache Tasten", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test zu Einheit 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Die Zahlenreihe", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Die äußere Spalte", newKeys: ["-","'","ü","$"], screens: 8, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Adressen, Links und Zahlen", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Text und Tempo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Text und Tempo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test zu Einheit 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "§, °, + und \"", newKeys: ["§","°","+","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "*, Ç, % und &", newKeys: ["*","ç","%","&"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "/, (, ) und =", newKeys: ["/","(",")","="], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "?", newKeys: ["?"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "< und >", newKeys: ["<",">"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "È, !, £ und É", newKeys: ["è","!","£","é"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "À, Semikolon, Doppelpunkt und _", newKeys: ["à",";",":","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "Alle Zeichen zusammen", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "Test zu Einheit 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    hint: "Leg die Zeigefinger auf die beiden Tasten mit der Erhebung und schreib, was du siehst, ohne auf die Tastatur zu sehen."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/de-schweiz/u1-l01.json?v=aedef5bf9bdfbba5",
  "u1-l02": "/data/lessons/de-schweiz/u1-l02.json?v=fe01085de22df640",
  "u1-l03": "/data/lessons/de-schweiz/u1-l03.json?v=e7e105733566bcb1",
  "u1-l04": "/data/lessons/de-schweiz/u1-l04.json?v=629be29d4e24261c",
  "u1-l05": "/data/lessons/de-schweiz/u1-l05.json?v=b1e42fa72cfb01a1",
  "u1-l06": "/data/lessons/de-schweiz/u1-l06.json?v=bda87db76b1fef1b",
  "u1-l07": "/data/lessons/de-schweiz/u1-l07.json?v=fedd6b9b6fbbfbcb",
  "u1-l08": "/data/lessons/de-schweiz/u1-l08.json?v=53f91132d90d9ad8",
  "u1-l09": "/data/lessons/de-schweiz/u1-l09.json?v=66cbcea9b3084055",
  "u1-l10": "/data/lessons/de-schweiz/u1-l10.json?v=0fe3211d701cac7a",
  "u2-l01": "/data/lessons/de-schweiz/u2-l01.json?v=d4c3826c58a84052",
  "u2-l02": "/data/lessons/de-schweiz/u2-l02.json?v=67fa2b9cbc7fc42e",
  "u2-l03": "/data/lessons/de-schweiz/u2-l03.json?v=5ed591129031f182",
  "u2-l04": "/data/lessons/de-schweiz/u2-l04.json?v=48942ae4eb5b8d22",
  "u2-l05": "/data/lessons/de-schweiz/u2-l05.json?v=2a5a8bf7424c29f3",
  "u2-l06": "/data/lessons/de-schweiz/u2-l06.json?v=5bdc6fb18f546d7a",
  "u2-l07": "/data/lessons/de-schweiz/u2-l07.json?v=99a64819a8665d98",
  "u2-l08": "/data/lessons/de-schweiz/u2-l08.json?v=fdeb01c850dc05ba",
  "u2-l09": "/data/lessons/de-schweiz/u2-l09.json?v=092fa81b809b5561",
  "u2-l10": "/data/lessons/de-schweiz/u2-l10.json?v=a3c1590918010d6a",
  "u2-l11": "/data/lessons/de-schweiz/u2-l11.json?v=4c1e27ef0fe1e1bd",
  "u3-l01": "/data/lessons/de-schweiz/u3-l01.json?v=bd15860d3681ebfc",
  "u3-l02": "/data/lessons/de-schweiz/u3-l02.json?v=f2b4d6da4077f682",
  "u3-l03": "/data/lessons/de-schweiz/u3-l03.json?v=86bcab2146610b6a",
  "u3-l04": "/data/lessons/de-schweiz/u3-l04.json?v=c2f8ee309b24ea4d",
  "u3-l05": "/data/lessons/de-schweiz/u3-l05.json?v=0c7b97820ebd7bef",
  "u3-l06": "/data/lessons/de-schweiz/u3-l06.json?v=c5280ebb9c4024e5",
  "u4-l01": "/data/lessons/de-schweiz/u4-l01.json?v=bc350558175b8c40",
  "u4-l02": "/data/lessons/de-schweiz/u4-l02.json?v=2f15002240abe544",
  "u4-l03": "/data/lessons/de-schweiz/u4-l03.json?v=aced913ee3a4f247",
  "u4-l04": "/data/lessons/de-schweiz/u4-l04.json?v=b0f60a356092654d",
  "u4-l05": "/data/lessons/de-schweiz/u4-l05.json?v=cfc229a1e0bfc180",
  "u4-l06": "/data/lessons/de-schweiz/u4-l06.json?v=e7ea21a1ab41c5a6",
  "u4-l07": "/data/lessons/de-schweiz/u4-l07.json?v=ef548993b33149bd",
  "u4-l08": "/data/lessons/de-schweiz/u4-l08.json?v=feb6b810bbee874c",
  "u4-l09": "/data/lessons/de-schweiz/u4-l09.json?v=ab346b99f098a279"
};
/* </auto:lesson-urls> */
