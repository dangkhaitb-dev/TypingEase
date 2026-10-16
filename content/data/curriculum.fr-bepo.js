/* data/curriculum.fr-bepo.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/fr.js (families.bepo) + bố cục bàn phím 184
   (BÉPO). Sửa lời dạy ở data/courses/fr.js, sửa kho từ ở data/words/fr.js,
   rồi chạy lại:  node scripts/build-course.js --lang fr --course fr-bepo

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'fr',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'fr-bepo',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 184,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [184],
  progressKey: 'typingease-progress-fr-bepo-v1',
  badgesKey: 'typingease-badges-fr-bepo-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "La rangée de repos",
      summary: "Huit touches sous les doigts, puis la virgule et C, P D et O V — de quoi écrire de vrais mots français sans regarder en bas.",
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
      title: "Signes, chiffres et vitesse",
      summary: "Les deux étages de la rangée des chiffres, les dernières lettres du bord droit, puis des paragraphes longs à rythme tenu.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Signes et chiffres", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Vitesse", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Toutes les autres touches",
      summary: "Les 8 caractères de ce clavier que le cours n'a pas encore utilisés, chacun tapé là où il sert vraiment.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Les touches qui restent", lessons: ['u4-l01', 'u4-l02', 'u4-l03'] },
        { id: 'finish', title: "Termine l'unité", lessons: ['u4-l04', 'u4-l05'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "E et T, plus la barre d'espace", newKeys: ["e","t"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "I et S", newKeys: ["i","s"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "U et R", newKeys: ["u","r"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A et N", newKeys: ["a","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "La virgule et C", newKeys: [",","c"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "P et D", newKeys: ["p","d"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "O et V", newKeys: ["o","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test de l'unité 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "È", newKeys: ["è"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "L et É", newKeys: ["l","é"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "X et l'apostrophe", newKeys: ["x","'"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "Q et le point", newKeys: ["q","."], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "B et J", newKeys: ["b","j"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "K et Y", newKeys: ["k","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "À, H, G et M", newKeys: ["à","h","g","m"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Maj et Entrée", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test de l'unité 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Les signes et les chiffres", newKeys: ["\"","«","»","(",")","@","+","-","/","*","1","2","3","4","5","6","7","8","9","0"], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La colonne de droite", newKeys: ["f","=","%","z","w","ç"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Adresses, liens et chiffres", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Textes et rythme 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Textes et rythme 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test de l'unité 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "$, # et °", newKeys: ["$","#","°"], screens: 8, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "Le point-virgule, Ê, les deux-points et !", newKeys: [";","ê",":","!"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "?", newKeys: ["?"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "Tous les signes ensemble", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l05': { title: "Test de l'unité 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l05'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "e e ee\neeee\neeeeee eeeeee",
    hint: "Pose les index sur les deux touches à repère et écris ce que tu vois, sans regarder le clavier."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/fr-bepo/u1-l01.json?v=6de2af678dbdbcc6",
  "u1-l02": "/data/lessons/fr-bepo/u1-l02.json?v=a08609fd2046d80c",
  "u1-l03": "/data/lessons/fr-bepo/u1-l03.json?v=d33e4ac998205bfe",
  "u1-l04": "/data/lessons/fr-bepo/u1-l04.json?v=849c6c31a88192cf",
  "u1-l05": "/data/lessons/fr-bepo/u1-l05.json?v=64fd886d037db499",
  "u1-l06": "/data/lessons/fr-bepo/u1-l06.json?v=2482fe71da740978",
  "u1-l07": "/data/lessons/fr-bepo/u1-l07.json?v=f2036cd74665f350",
  "u1-l08": "/data/lessons/fr-bepo/u1-l08.json?v=7a3c9ba93acdd611",
  "u1-l09": "/data/lessons/fr-bepo/u1-l09.json?v=96314dddbc3f5224",
  "u1-l10": "/data/lessons/fr-bepo/u1-l10.json?v=11cdb019875ec11b",
  "u2-l01": "/data/lessons/fr-bepo/u2-l01.json?v=2e8911ece52e8ff5",
  "u2-l02": "/data/lessons/fr-bepo/u2-l02.json?v=6adc435de972c023",
  "u2-l03": "/data/lessons/fr-bepo/u2-l03.json?v=b68e32419c47f85b",
  "u2-l04": "/data/lessons/fr-bepo/u2-l04.json?v=9f70c87b1095c9cb",
  "u2-l05": "/data/lessons/fr-bepo/u2-l05.json?v=2a3deefe3a8f694d",
  "u2-l06": "/data/lessons/fr-bepo/u2-l06.json?v=8c6fdf59898fbf0b",
  "u2-l07": "/data/lessons/fr-bepo/u2-l07.json?v=c3934d2e451171a6",
  "u2-l08": "/data/lessons/fr-bepo/u2-l08.json?v=929001e35e6b06f8",
  "u2-l09": "/data/lessons/fr-bepo/u2-l09.json?v=de23fc8910a682ea",
  "u2-l10": "/data/lessons/fr-bepo/u2-l10.json?v=7b9bdbd2565c8074",
  "u2-l11": "/data/lessons/fr-bepo/u2-l11.json?v=62ca3d3fd40a4b93",
  "u3-l01": "/data/lessons/fr-bepo/u3-l01.json?v=f4da7603c9507944",
  "u3-l02": "/data/lessons/fr-bepo/u3-l02.json?v=5314ea9d7fe8f799",
  "u3-l03": "/data/lessons/fr-bepo/u3-l03.json?v=21e439305f48de95",
  "u3-l04": "/data/lessons/fr-bepo/u3-l04.json?v=5bedc885591fb382",
  "u3-l05": "/data/lessons/fr-bepo/u3-l05.json?v=13cb6d9275d5f6f9",
  "u3-l06": "/data/lessons/fr-bepo/u3-l06.json?v=d61e5080c5b64232",
  "u4-l01": "/data/lessons/fr-bepo/u4-l01.json?v=c87687b135a5ab98",
  "u4-l02": "/data/lessons/fr-bepo/u4-l02.json?v=5852b4d21c2d3cf5",
  "u4-l03": "/data/lessons/fr-bepo/u4-l03.json?v=e55fa9ee15f92962",
  "u4-l04": "/data/lessons/fr-bepo/u4-l04.json?v=276b71d76d3e867d",
  "u4-l05": "/data/lessons/fr-bepo/u4-l05.json?v=724bb7e02820c342"
};
/* </auto:lesson-urls> */
