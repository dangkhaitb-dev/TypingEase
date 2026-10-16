/* data/curriculum.es-latinoamerica.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/es.js (families.latinoamerica) + bố cục bàn phím 174
   (Spanish (Latin America)). Sửa lời dạy ở data/courses/es.js, sửa kho từ ở data/words/es.js,
   rồi chạy lại:  node scripts/build-course.js --lang es --course es-latinoamerica

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'es',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'es-latinoamerica',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 174,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [174],
  progressKey: 'typingease-progress-es-latinoamerica-v1',
  badgesKey: 'typingease-badges-es-latinoamerica-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "La fila de reposo",
      summary: "Ocho teclas bajo los dedos, después G H, E I y R U — suficiente para escribir palabras de verdad sin mirar hacia abajo.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Empieza aquí", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Estirando los dedos", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Cierra la unidad", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "El resto del alfabeto",
      summary: "Fila superior, fila inferior, signos de puntuación y mayúsculas — el alfabeto entero, más Shift y Enter. Las tildes llegan en la unidad siguiente, porque este teclado las pone en el borde derecho.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Empieza aquí", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Estirando los dedos", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Cierra la unidad", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Números, signos y velocidad",
      summary: "La fila de números, los signos de cada día, direcciones y enlaces reales, y después párrafos largos a ritmo sostenido.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Números y signos", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Velocidad", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Todas las demás teclas",
      summary: "Los 22 caracteres de este teclado que el curso aún no ha usado, cada uno escrito donde de verdad se usa.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Las teclas que faltan", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "Cierra la unidad", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F y J, más la barra espaciadora", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D y K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S y L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A y Ñ", newKeys: ["a","ñ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Repaso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G y H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E y I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R y U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Teclas flojas", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Prueba de la unidad 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T y Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O y W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C y N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M y V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Repaso", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q y P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B y X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, el punto, la coma y {", newKeys: ["z",".",",","{"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift y Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Teclas flojas", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Prueba de la unidad 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "La fila de números", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La columna exterior", newKeys: ["-","'","¿","+","}"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Direcciones, enlaces y números", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Textos y ritmo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Textos y ritmo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Prueba de la unidad 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "|, °, ! y \"", newKeys: ["|","°","!","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % y &", newKeys: ["#","$","%","&"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "/, (, ) y =", newKeys: ["/","(",")","="], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "? y ¡", newKeys: ["?","¡"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "< y >", newKeys: ["<",">"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "*, ], [ y el punto y coma", newKeys: ["*","]","[",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "Los dos puntos y _", newKeys: [":","_"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "Todos los signos juntos", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "Prueba de la unidad 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    hint: "Apoya los índices en las dos teclas con relieve y escribe lo que veas, sin mirar el teclado."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/es-latinoamerica/u1-l01.json?v=8e93c61dfe752c8e",
  "u1-l02": "/data/lessons/es-latinoamerica/u1-l02.json?v=a576d8c71d0f182f",
  "u1-l03": "/data/lessons/es-latinoamerica/u1-l03.json?v=29844364fd8f619c",
  "u1-l04": "/data/lessons/es-latinoamerica/u1-l04.json?v=178bb81ac00a5a82",
  "u1-l05": "/data/lessons/es-latinoamerica/u1-l05.json?v=9d1065bc222493c4",
  "u1-l06": "/data/lessons/es-latinoamerica/u1-l06.json?v=e816a15b701d41a3",
  "u1-l07": "/data/lessons/es-latinoamerica/u1-l07.json?v=564f7692509b5a48",
  "u1-l08": "/data/lessons/es-latinoamerica/u1-l08.json?v=cffdbce91e38a894",
  "u1-l09": "/data/lessons/es-latinoamerica/u1-l09.json?v=7051a363ff88a85f",
  "u1-l10": "/data/lessons/es-latinoamerica/u1-l10.json?v=fc65390d5ea7484e",
  "u2-l01": "/data/lessons/es-latinoamerica/u2-l01.json?v=1c4360646a30c9a9",
  "u2-l02": "/data/lessons/es-latinoamerica/u2-l02.json?v=c24746e7bb9d674d",
  "u2-l03": "/data/lessons/es-latinoamerica/u2-l03.json?v=82f5e27d71d31914",
  "u2-l04": "/data/lessons/es-latinoamerica/u2-l04.json?v=f0536e90656fa929",
  "u2-l05": "/data/lessons/es-latinoamerica/u2-l05.json?v=879ebcf698d6cf6b",
  "u2-l06": "/data/lessons/es-latinoamerica/u2-l06.json?v=ad57c3c640ca0970",
  "u2-l07": "/data/lessons/es-latinoamerica/u2-l07.json?v=d3e957cf6225459a",
  "u2-l08": "/data/lessons/es-latinoamerica/u2-l08.json?v=a789a13e425ebece",
  "u2-l09": "/data/lessons/es-latinoamerica/u2-l09.json?v=39ee756c8a84293f",
  "u2-l10": "/data/lessons/es-latinoamerica/u2-l10.json?v=e3c21ac8fb500820",
  "u2-l11": "/data/lessons/es-latinoamerica/u2-l11.json?v=90d3082c8e901c99",
  "u3-l01": "/data/lessons/es-latinoamerica/u3-l01.json?v=09a3ad7324fcd0f4",
  "u3-l02": "/data/lessons/es-latinoamerica/u3-l02.json?v=9d10a5f15467e705",
  "u3-l03": "/data/lessons/es-latinoamerica/u3-l03.json?v=61d2fc6a2ed3d986",
  "u3-l04": "/data/lessons/es-latinoamerica/u3-l04.json?v=9c55ca45b9677ed2",
  "u3-l05": "/data/lessons/es-latinoamerica/u3-l05.json?v=302bbd6b7db4a977",
  "u3-l06": "/data/lessons/es-latinoamerica/u3-l06.json?v=85b7432bc1f0b8bb",
  "u4-l01": "/data/lessons/es-latinoamerica/u4-l01.json?v=cc764679db32a665",
  "u4-l02": "/data/lessons/es-latinoamerica/u4-l02.json?v=69a4fecd75457df8",
  "u4-l03": "/data/lessons/es-latinoamerica/u4-l03.json?v=1a3f54ad6696966b",
  "u4-l04": "/data/lessons/es-latinoamerica/u4-l04.json?v=1ccb83e51ab7c941",
  "u4-l05": "/data/lessons/es-latinoamerica/u4-l05.json?v=7f93f6526c89a5fb",
  "u4-l06": "/data/lessons/es-latinoamerica/u4-l06.json?v=a7aa8e75e0aaa168",
  "u4-l07": "/data/lessons/es-latinoamerica/u4-l07.json?v=ab706c949acdf783",
  "u4-l08": "/data/lessons/es-latinoamerica/u4-l08.json?v=ed12a0a13e332694",
  "u4-l09": "/data/lessons/es-latinoamerica/u4-l09.json?v=1ebba0edbb41ef1c"
};
/* </auto:lesson-urls> */
