/* data/curriculum.fr-suisse.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/fr.js (families.suisse) + bố cục bàn phím 187
   (Swiss French). Sửa lời dạy ở data/courses/fr.js, sửa kho từ ở data/words/fr.js,
   rồi chạy lại:  node scripts/build-course.js --lang fr --course fr-suisse

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.

   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy E et I
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.
*/
window.TypingEaseCurriculum = {
  lang: 'fr',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'fr-suisse',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 187,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [187],
  progressKey: 'typingease-progress-fr-suisse-v1',
  badgesKey: 'typingease-badges-fr-suisse-v1',
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
      summary: "Les deux étages de la rangée des chiffres — le ç compris —, le bord droit, puis des paragraphes longs à rythme tenu.",
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
      summary: "Les 13 caractères de ce clavier que le cours n'a pas encore utilisés, chacun tapé là où il sert vraiment.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Les touches qui restent", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04'] },
        { id: 'finish', title: "Termine l'unité", lessons: ['u4-l05', 'u4-l06'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F et J, plus la barre d'espace", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D et K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S et L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A et É", newKeys: ["a","é"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "E et I", newKeys: ["e","i"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l06': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l07': { title: "G et H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R et U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Test de l'unité 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T et Z", newKeys: ["t","z"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O et W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C et N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M et V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Révision", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q et P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B et X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Y, le point, la virgule et À", newKeys: ["y",".",",","à"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Maj et Entrée", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Touches faibles", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Test de l'unité 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Les chiffres et leurs signes", newKeys: ["1","2","3","4","5","6","7","8","9","0","+","\"","*","ç","%","&","/","(",")","="], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "La colonne de droite", newKeys: ["-","'","è","$"], screens: 8, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Adresses, liens et chiffres", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Textes et rythme 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Textes et rythme 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Test de l'unité 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "§, ° et ?", newKeys: ["§","°","?"], screens: 8, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "< et >", newKeys: ["<",">"], screens: 6, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "Ü, !, £ et Ö", newKeys: ["ü","!","£","ö"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "Ä, le point-virgule, les deux-points et _", newKeys: ["ä",";",":","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Tous les signes ensemble", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l06': { title: "Test de l'unité 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    hint: "Pose les index sur les deux touches à repère et écris ce que tu vois, sans regarder le clavier."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/fr-suisse/u1-l01.json?v=c5c7765b22c0674d",
  "u1-l02": "/data/lessons/fr-suisse/u1-l02.json?v=05dd09bab975165b",
  "u1-l03": "/data/lessons/fr-suisse/u1-l03.json?v=aa2e027c69c2cf32",
  "u1-l04": "/data/lessons/fr-suisse/u1-l04.json?v=adaab96f58dd49ea",
  "u1-l05": "/data/lessons/fr-suisse/u1-l05.json?v=567484f80e1117a9",
  "u1-l06": "/data/lessons/fr-suisse/u1-l06.json?v=29d0ef3e932a2ad4",
  "u1-l07": "/data/lessons/fr-suisse/u1-l07.json?v=1e23208df8ecc4c8",
  "u1-l08": "/data/lessons/fr-suisse/u1-l08.json?v=97521f6d0e44feac",
  "u1-l09": "/data/lessons/fr-suisse/u1-l09.json?v=2ed92356d47070da",
  "u1-l10": "/data/lessons/fr-suisse/u1-l10.json?v=d82e0773dcf62f9e",
  "u2-l01": "/data/lessons/fr-suisse/u2-l01.json?v=2667b002c7051626",
  "u2-l02": "/data/lessons/fr-suisse/u2-l02.json?v=bb5d94b8f21f6d6b",
  "u2-l03": "/data/lessons/fr-suisse/u2-l03.json?v=f2d18ed44856e5a8",
  "u2-l04": "/data/lessons/fr-suisse/u2-l04.json?v=440dd6aed5e900dd",
  "u2-l05": "/data/lessons/fr-suisse/u2-l05.json?v=87254061c11569fd",
  "u2-l06": "/data/lessons/fr-suisse/u2-l06.json?v=7ba4dc2d260cc45a",
  "u2-l07": "/data/lessons/fr-suisse/u2-l07.json?v=f9268acf9e6ca16a",
  "u2-l08": "/data/lessons/fr-suisse/u2-l08.json?v=7feb8c74af28a044",
  "u2-l09": "/data/lessons/fr-suisse/u2-l09.json?v=4c34c06cd13dfdd7",
  "u2-l10": "/data/lessons/fr-suisse/u2-l10.json?v=afe79cebdeca3df5",
  "u2-l11": "/data/lessons/fr-suisse/u2-l11.json?v=62cd2a8e66f701be",
  "u3-l01": "/data/lessons/fr-suisse/u3-l01.json?v=c5605a9010b3a8a4",
  "u3-l02": "/data/lessons/fr-suisse/u3-l02.json?v=311ab29aea28067c",
  "u3-l03": "/data/lessons/fr-suisse/u3-l03.json?v=131c80b74ba39de9",
  "u3-l04": "/data/lessons/fr-suisse/u3-l04.json?v=57fa74532125a4f6",
  "u3-l05": "/data/lessons/fr-suisse/u3-l05.json?v=3b359752715549f3",
  "u3-l06": "/data/lessons/fr-suisse/u3-l06.json?v=3a2103aab07575f6",
  "u4-l01": "/data/lessons/fr-suisse/u4-l01.json?v=75313d9da64611c9",
  "u4-l02": "/data/lessons/fr-suisse/u4-l02.json?v=6d6403308f840c6b",
  "u4-l03": "/data/lessons/fr-suisse/u4-l03.json?v=8b983e63f45f997d",
  "u4-l04": "/data/lessons/fr-suisse/u4-l04.json?v=a6ea7cd39356335d",
  "u4-l05": "/data/lessons/fr-suisse/u4-l05.json?v=0aef4b74dfe1c5a9",
  "u4-l06": "/data/lessons/fr-suisse/u4-l06.json?v=d373a09326c0fa58"
};
/* </auto:lesson-urls> */
