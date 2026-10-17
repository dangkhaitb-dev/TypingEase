/* data/curriculum.pt-sem-teclas-mortas.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/pt.js (families.sem-teclas-mortas) + bố cục bàn phím 179
   (Portuguese (Brazil ABNT2, no dead keys)). Sửa lời dạy ở data/courses/pt.js, sửa kho từ ở data/words/pt.js,
   rồi chạy lại:  node scripts/build-course.js --lang pt --course pt-sem-teclas-mortas

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'pt',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'pt-sem-teclas-mortas',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 179,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [179],
  progressKey: 'typingease-progress-pt-sem-teclas-mortas-v1',
  badgesKey: 'typingease-badges-pt-sem-teclas-mortas-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "A fila de repouso",
      summary: "Oito teclas debaixo dos dedos, o ç entre elas, e depois G H, E I e R U — o bastante para escrever palavras de verdade sem olhar para baixo.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Comece aqui", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Esticando os dedos", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Feche a unidade", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "O resto do alfabeto",
      summary: "Fila de cima, fila de baixo, pontuação e maiúsculas — o alfabeto inteiro, mais Shift e Enter. Neste teclado o til é um caractere de verdade, não uma tecla morta.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Comece aqui", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Esticando os dedos", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Feche a unidade", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Números, sinais e velocidade",
      summary: "A fila dos números, a coluna da borda direita, e depois parágrafos longos em ritmo constante.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Números e sinais", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Velocidade", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Todas as outras teclas",
      summary: "Os 24 caracteres deste teclado que o curso ainda não usou, cada um digitado onde ele realmente aparece.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "As teclas que faltam", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08'] },
        { id: 'finish', title: "Feche a unidade", lessons: ['u4-l09', 'u4-l10'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F e J, mais a barra de espaço", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D e K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S e L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A e Ç", newKeys: ["a","ç"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Revisão", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G e H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E e I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R e U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Teclas fracas", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Teste da unidade 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T e Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O e W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C e N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M e V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Revisão", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q e P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B e X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, o ponto, a vírgula e o til", newKeys: ["z",".",",","~"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift e Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Teclas fracas", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Teste da unidade 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "A fila dos números", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "A coluna da direita", newKeys: [";","-","=","'","[","]"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Endereços, links e números", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Textos e ritmo 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Textos e ritmo 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Teste da unidade 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "\", !, @ e #", newKeys: ["\"","!","@","#"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "$, %, ¨ e &", newKeys: ["$","%","¨","&"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "*, (, ) e _", newKeys: ["*","(",")","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "+", newKeys: ["+"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "\\ e |", newKeys: ["\\","|"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "`, {, } e ^", newKeys: ["`","{","}","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "<, > e os dois-pontos", newKeys: ["<",">",":"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "/ e ?", newKeys: ["/","?"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "Todos os sinais juntos", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l10': { title: "Teste da unidade 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l09',
    'u4-l10'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "f f ff\nffff\nffffff ffffff",
    hint: "Apoie os indicadores nas duas teclas com relevo e escreva o que você vê, sem olhar para o teclado."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/pt-sem-teclas-mortas/u1-l01.json?v=3503619e33e7a7c3",
  "u1-l02": "/data/lessons/pt-sem-teclas-mortas/u1-l02.json?v=52227667428b0e13",
  "u1-l03": "/data/lessons/pt-sem-teclas-mortas/u1-l03.json?v=bd67ae781c1beddf",
  "u1-l04": "/data/lessons/pt-sem-teclas-mortas/u1-l04.json?v=9529d9c0402b33b3",
  "u1-l05": "/data/lessons/pt-sem-teclas-mortas/u1-l05.json?v=a0d864044d9053b4",
  "u1-l06": "/data/lessons/pt-sem-teclas-mortas/u1-l06.json?v=19c03b83e68b8d81",
  "u1-l07": "/data/lessons/pt-sem-teclas-mortas/u1-l07.json?v=63ea33fa3ba4a114",
  "u1-l08": "/data/lessons/pt-sem-teclas-mortas/u1-l08.json?v=32d1dbf86508989e",
  "u1-l09": "/data/lessons/pt-sem-teclas-mortas/u1-l09.json?v=23083d8fa5665555",
  "u1-l10": "/data/lessons/pt-sem-teclas-mortas/u1-l10.json?v=9e3cf02860ffe7be",
  "u2-l01": "/data/lessons/pt-sem-teclas-mortas/u2-l01.json?v=dcc381d2bbefa0a4",
  "u2-l02": "/data/lessons/pt-sem-teclas-mortas/u2-l02.json?v=8d67d20be28ca4b1",
  "u2-l03": "/data/lessons/pt-sem-teclas-mortas/u2-l03.json?v=6d1634b6118910a6",
  "u2-l04": "/data/lessons/pt-sem-teclas-mortas/u2-l04.json?v=102ff86793e764bd",
  "u2-l05": "/data/lessons/pt-sem-teclas-mortas/u2-l05.json?v=80ff6e534c52b46b",
  "u2-l06": "/data/lessons/pt-sem-teclas-mortas/u2-l06.json?v=7737f9194cfacca0",
  "u2-l07": "/data/lessons/pt-sem-teclas-mortas/u2-l07.json?v=561542e79e998382",
  "u2-l08": "/data/lessons/pt-sem-teclas-mortas/u2-l08.json?v=8be784828df6d18e",
  "u2-l09": "/data/lessons/pt-sem-teclas-mortas/u2-l09.json?v=8e0dbcadfaff7c10",
  "u2-l10": "/data/lessons/pt-sem-teclas-mortas/u2-l10.json?v=ac5976754eaf1de5",
  "u2-l11": "/data/lessons/pt-sem-teclas-mortas/u2-l11.json?v=bb4ffc0378fbb50e",
  "u3-l01": "/data/lessons/pt-sem-teclas-mortas/u3-l01.json?v=bda746d5bbfe68a2",
  "u3-l02": "/data/lessons/pt-sem-teclas-mortas/u3-l02.json?v=200675273b152fe8",
  "u3-l03": "/data/lessons/pt-sem-teclas-mortas/u3-l03.json?v=708df530511e2c15",
  "u3-l04": "/data/lessons/pt-sem-teclas-mortas/u3-l04.json?v=c340feda679329b7",
  "u3-l05": "/data/lessons/pt-sem-teclas-mortas/u3-l05.json?v=2136bb8cdc1ac9ff",
  "u3-l06": "/data/lessons/pt-sem-teclas-mortas/u3-l06.json?v=d0a3cf8470154b70",
  "u4-l01": "/data/lessons/pt-sem-teclas-mortas/u4-l01.json?v=4701fe5a2e17ccf1",
  "u4-l02": "/data/lessons/pt-sem-teclas-mortas/u4-l02.json?v=cbc4afa9cac21076",
  "u4-l03": "/data/lessons/pt-sem-teclas-mortas/u4-l03.json?v=b17d7393c08cdbf9",
  "u4-l04": "/data/lessons/pt-sem-teclas-mortas/u4-l04.json?v=cc7ed5ca9c54c5b5",
  "u4-l05": "/data/lessons/pt-sem-teclas-mortas/u4-l05.json?v=19f13a99d2a433ec",
  "u4-l06": "/data/lessons/pt-sem-teclas-mortas/u4-l06.json?v=440c96c49c1273f5",
  "u4-l07": "/data/lessons/pt-sem-teclas-mortas/u4-l07.json?v=40cc29e03a466cac",
  "u4-l08": "/data/lessons/pt-sem-teclas-mortas/u4-l08.json?v=5cd45ee5b664b5f1",
  "u4-l09": "/data/lessons/pt-sem-teclas-mortas/u4-l09.json?v=c60c31d4acc05883",
  "u4-l10": "/data/lessons/pt-sem-teclas-mortas/u4-l10.json?v=0af126e6c56d6a59"
};
/* </auto:lesson-urls> */
