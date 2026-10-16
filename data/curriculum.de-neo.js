/* data/curriculum.de-neo.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/de.js (families.neo) + bố cục bàn phím 190
   (Neo). Sửa lời dạy ở data/courses/de.js, sửa kho từ ở data/words/de.js,
   rồi chạy lại:  node scripts/build-course.js --lang de --course de-neo

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'de',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'de-neo',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 190,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [190],
  progressKey: 'typingease-progress-de-neo-v1',
  badgesKey: 'typingease-badges-de-neo-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Die Grundstellung",
      summary: "Acht Tasten unter den Fingern, danach O S, L G und C H — auf Neo liegen die Vokale schon hier, also gibt es von Anfang an echte Wörter.",
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
      summary: "Obere Reihe, untere Reihe mit Ü, Ö und Ä, Punkt und Komma — fast das ganze Alphabet, danach Shift und Enter. J und ß folgen in der nächsten Einheit.",
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
      summary: "Die Zahlenreihe, der Bindestrich und das Eszett, Adressen und Links aus dem Alltag, danach lange Absätze in gleichmäßigem Tempo.",
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
      summary: "Die 13 Zeichen dieser Tastatur, die der Kurs noch nicht benutzt hat, jedes dort getippt, wo es im Text wirklich vorkommt.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Die restlichen Tasten", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04'] },
        { id: 'finish', title: "Die Einheit abschließen", lessons: ['u4-l05', 'u4-l06'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "E und N, dazu die Leertaste", newKeys: ["e","n"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "A und R", newKeys: ["a","r"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "I und T", newKeys: ["i","t"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "U und D", newKeys: ["u","d"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Wiederholung", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "O und S", newKeys: ["o","s"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "L und G", newKeys: ["l","g"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "C und H", newKeys: ["c","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Schwache Tasten", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test zu Einheit 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "W und K", newKeys: ["w","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "F und V", newKeys: ["f","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "Ä und B", newKeys: ["ä","b"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M und P", newKeys: ["m","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Wiederholung", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "X und Q", newKeys: ["x","q"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "Z und Ö", newKeys: ["z","ö"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Ü, Punkt, Komma und Y", newKeys: ["ü",".",",","y"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift und Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Schwache Tasten", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test zu Einheit 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Die Zahlenreihe", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Die äußere Spalte", newKeys: ["j","-","ß"], screens: 8, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Adressen, Links und Zahlen", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Text und Tempo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Text und Tempo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test zu Einheit 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "°, §, ℓ und »", newKeys: ["°","§","ℓ","»"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "«, $, € und „", newKeys: ["«","$","€","„"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "“, ” und —", newKeys: ["“","”","—"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "– und •", newKeys: ["–","•"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Alle Zeichen zusammen", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l06': { title: "Test zu Einheit 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "e e ee\neeee\neeeeee eeeeee",
    hint: "Leg die Zeigefinger auf die beiden Tasten mit der Erhebung und schreib, was du siehst, ohne auf die Tastatur zu sehen."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/de-neo/u1-l01.json?v=be8b023742d0c13d",
  "u1-l02": "/data/lessons/de-neo/u1-l02.json?v=161bdb8bbdd61ec8",
  "u1-l03": "/data/lessons/de-neo/u1-l03.json?v=5ffcaa514d81af72",
  "u1-l04": "/data/lessons/de-neo/u1-l04.json?v=2ba964ea15f632c9",
  "u1-l05": "/data/lessons/de-neo/u1-l05.json?v=836ceedf2222a22a",
  "u1-l06": "/data/lessons/de-neo/u1-l06.json?v=e5ed71756f388c8e",
  "u1-l07": "/data/lessons/de-neo/u1-l07.json?v=b3484c39e625ad3b",
  "u1-l08": "/data/lessons/de-neo/u1-l08.json?v=d991c1ca26a060ff",
  "u1-l09": "/data/lessons/de-neo/u1-l09.json?v=be58a878b01a96b9",
  "u1-l10": "/data/lessons/de-neo/u1-l10.json?v=d3bc4ad0d2f41b28",
  "u2-l01": "/data/lessons/de-neo/u2-l01.json?v=5700cc616d915ab4",
  "u2-l02": "/data/lessons/de-neo/u2-l02.json?v=bf80732a7b27d27e",
  "u2-l03": "/data/lessons/de-neo/u2-l03.json?v=c8756656a5fba39e",
  "u2-l04": "/data/lessons/de-neo/u2-l04.json?v=89dd703c59f1dd5a",
  "u2-l05": "/data/lessons/de-neo/u2-l05.json?v=26666e9bb0ae689d",
  "u2-l06": "/data/lessons/de-neo/u2-l06.json?v=59911ccc8746fb37",
  "u2-l07": "/data/lessons/de-neo/u2-l07.json?v=dd8144fa0eb1ee3d",
  "u2-l08": "/data/lessons/de-neo/u2-l08.json?v=97172170f41b02a8",
  "u2-l09": "/data/lessons/de-neo/u2-l09.json?v=69d8572dac06d798",
  "u2-l10": "/data/lessons/de-neo/u2-l10.json?v=5a771af5bf143642",
  "u2-l11": "/data/lessons/de-neo/u2-l11.json?v=f0ac151bc8b6dc04",
  "u3-l01": "/data/lessons/de-neo/u3-l01.json?v=4740d1bc2c9d3da2",
  "u3-l02": "/data/lessons/de-neo/u3-l02.json?v=8dfaee5857cc194d",
  "u3-l03": "/data/lessons/de-neo/u3-l03.json?v=20d7439eada93fc0",
  "u3-l04": "/data/lessons/de-neo/u3-l04.json?v=7150923867f584b5",
  "u3-l05": "/data/lessons/de-neo/u3-l05.json?v=ec8ee64149171be9",
  "u3-l06": "/data/lessons/de-neo/u3-l06.json?v=620dd2a12769668a",
  "u4-l01": "/data/lessons/de-neo/u4-l01.json?v=91001c72515b1de5",
  "u4-l02": "/data/lessons/de-neo/u4-l02.json?v=a925b21270860d51",
  "u4-l03": "/data/lessons/de-neo/u4-l03.json?v=7f54661a991cd205",
  "u4-l04": "/data/lessons/de-neo/u4-l04.json?v=d35682527af69ce8",
  "u4-l05": "/data/lessons/de-neo/u4-l05.json?v=9c540022730c9c1e",
  "u4-l06": "/data/lessons/de-neo/u4-l06.json?v=c6fc9fb0847f4c24"
};
/* </auto:lesson-urls> */
