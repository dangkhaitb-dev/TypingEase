/* data/curriculum.fr-canadien.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/fr.js (families.canadien) + bố cục bàn phím 186
   (Canadian French). Sửa lời dạy ở data/courses/fr.js, sửa kho từ ở data/words/fr.js,
   rồi chạy lại:  node scripts/build-course.js --lang fr --course fr-canadien

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.

   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy E et I
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.
*/
window.TypingEaseCurriculum = {
  lang: 'fr',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'fr-canadien',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 186,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [186],
  progressKey: 'typingease-progress-fr-canadien-v1',
  badgesKey: 'typingease-badges-fr-canadien-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "La rangée de repos",
      summary: "Huit touches sous les doigts, puis E I, G H et R U — de quoi écrire de vrais mots français sans regarder en bas.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Commence ici", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "On étire les doigts", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Termine l'unité", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Le reste de l'alphabet",
      summary: "Rangée du haut, rangée du bas, ponctuation et majuscules — tout l'alphabet, plus Maj et Entrée.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Commence ici", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "On étire les doigts", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Termine l'unité", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Chiffres, signes et vitesse",
      summary: "La rangée des chiffres, le é et le circonflexe du bord droit, puis des paragraphes longs à rythme tenu.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Chiffres et signes", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Vitesse", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Toutes les autres touches",
      summary: "Les 19 caractères de ce clavier que le cours n'a pas encore utilisés, chacun tapé là où il sert vraiment.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Les touches qui restent", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06'] },
        { id: 'finish', title: "Termine l'unité", lessons: ['u4-l07', 'u4-l08'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F et J, plus la barre d'espace", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D et K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S et L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A et le point-virgule", newKeys: ["a",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "E et I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l06': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l07': { title: "G et H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R et U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test de l'unité 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T et Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O et W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C et N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M et V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q et P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B et X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, le point et la virgule", newKeys: ["z",".",","], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Maj et Entrée", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test de l'unité 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "La rangée des chiffres", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La colonne de droite", newKeys: ["é","-","=","<"], screens: 8, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Adresses, liens et chiffres", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Textes et rythme 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Textes et rythme 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test de l'unité 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "#, |, ! et \"", newKeys: ["#","|","!","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "/, $, % et ?", newKeys: ["/","$","%","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( et )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ et +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "«, », > et les deux-points", newKeys: ["«","»",">",":"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "L'apostrophe", newKeys: ["'"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "Tous les signes ensemble", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l08': { title: "Test de l'unité 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "f f ff\nffff\nffffff ffffff",
    hint: "Pose les index sur les deux touches à repère et écris ce que tu vois, sans regarder le clavier."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/fr-canadien/u1-l01.json?v=c5c7765b22c0674d",
  "u1-l02": "/data/lessons/fr-canadien/u1-l02.json?v=05dd09bab975165b",
  "u1-l03": "/data/lessons/fr-canadien/u1-l03.json?v=aa2e027c69c2cf32",
  "u1-l04": "/data/lessons/fr-canadien/u1-l04.json?v=d8fd494f026c92b7",
  "u1-l05": "/data/lessons/fr-canadien/u1-l05.json?v=28e6621ce9595e62",
  "u1-l06": "/data/lessons/fr-canadien/u1-l06.json?v=362a3e61abbb662c",
  "u1-l07": "/data/lessons/fr-canadien/u1-l07.json?v=949c480f05b9b66c",
  "u1-l08": "/data/lessons/fr-canadien/u1-l08.json?v=742235391e67d6c6",
  "u1-l09": "/data/lessons/fr-canadien/u1-l09.json?v=b10a1dbd4d4c6948",
  "u1-l10": "/data/lessons/fr-canadien/u1-l10.json?v=e130b691ff55a8eb",
  "u2-l01": "/data/lessons/fr-canadien/u2-l01.json?v=a9dc691308bb4f72",
  "u2-l02": "/data/lessons/fr-canadien/u2-l02.json?v=d6b554fc736e5134",
  "u2-l03": "/data/lessons/fr-canadien/u2-l03.json?v=d3227f13b5adadea",
  "u2-l04": "/data/lessons/fr-canadien/u2-l04.json?v=e53e30a2fca3de5f",
  "u2-l05": "/data/lessons/fr-canadien/u2-l05.json?v=c93ecf1566416856",
  "u2-l06": "/data/lessons/fr-canadien/u2-l06.json?v=178a7b188a8319b1",
  "u2-l07": "/data/lessons/fr-canadien/u2-l07.json?v=2e40c07cbf5f6931",
  "u2-l08": "/data/lessons/fr-canadien/u2-l08.json?v=e6225ddc2b70dbac",
  "u2-l09": "/data/lessons/fr-canadien/u2-l09.json?v=438dcb5ab78d7234",
  "u2-l10": "/data/lessons/fr-canadien/u2-l10.json?v=42b9a3310dc9f6f5",
  "u2-l11": "/data/lessons/fr-canadien/u2-l11.json?v=ae7e94d37c6aba63",
  "u3-l01": "/data/lessons/fr-canadien/u3-l01.json?v=47b2e08b00ddd56f",
  "u3-l02": "/data/lessons/fr-canadien/u3-l02.json?v=3be69cb3f27de5e2",
  "u3-l03": "/data/lessons/fr-canadien/u3-l03.json?v=019b3b6487103486",
  "u3-l04": "/data/lessons/fr-canadien/u3-l04.json?v=bb270b619f5eace5",
  "u3-l05": "/data/lessons/fr-canadien/u3-l05.json?v=6ed49edc28f0137b",
  "u3-l06": "/data/lessons/fr-canadien/u3-l06.json?v=bd71b95f54c11116",
  "u4-l01": "/data/lessons/fr-canadien/u4-l01.json?v=353930325f414841",
  "u4-l02": "/data/lessons/fr-canadien/u4-l02.json?v=ddf861eb65f7ae88",
  "u4-l03": "/data/lessons/fr-canadien/u4-l03.json?v=7c7ecbc5dc38e51d",
  "u4-l04": "/data/lessons/fr-canadien/u4-l04.json?v=5ed6ebd67500d22c",
  "u4-l05": "/data/lessons/fr-canadien/u4-l05.json?v=0efc4c5d61fd210e",
  "u4-l06": "/data/lessons/fr-canadien/u4-l06.json?v=4e3f71fa441aebff",
  "u4-l07": "/data/lessons/fr-canadien/u4-l07.json?v=dc132f3aea425258",
  "u4-l08": "/data/lessons/fr-canadien/u4-l08.json?v=8d9c38a3817accfd"
};
/* </auto:lesson-urls> */
