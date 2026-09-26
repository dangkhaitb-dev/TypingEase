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
      summary: "Les 7 caractères de ce clavier que le cours n'a pas encore utilisés, chacun tapé là où il sert vraiment.",
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
    'u2-l01': { title: "È et ^", newKeys: ["è","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
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
    'u4-l01': { title: "$, #, ° et le point-virgule", newKeys: ["$","#","°",";"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "Les deux-points", newKeys: [":"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "! et ?", newKeys: ["!","?"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
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
