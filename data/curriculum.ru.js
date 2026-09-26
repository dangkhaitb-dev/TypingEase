/* data/curriculum.ru.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/ru.js + bố cục bàn phím 103
   (Russian). Sửa lời dạy ở data/courses/ru.js, sửa kho từ ở data/words/ru.js,
   rồi chạy lại:  node scripts/build-course.js --lang ru

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'ru',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'ru',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 103,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [103],
  progressKey: 'typingease-progress-ru-v1',
  badgesKey: 'typingease-badges-ru-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Основной ряд",
      summary: "Восемь клавиш под пальцами, затем П Р, У Ш и К Г — достаточно, чтобы писать настоящие русские слова, не глядя вниз.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Начни здесь", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Пальцы тянутся", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Заверши раздел", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Остальной алфавит",
      summary: "Верхний ряд, нижний ряд и заглавные буквы — весь алфавит, кроме х и ъ у правого края, плюс Shift и Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Начни здесь", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Пальцы тянутся", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Заверши раздел", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Цифры, край клавиатуры и скорость",
      summary: "Ряд цифр, точка, х и ъ у правого края, затем длинные абзацы в ровном темпе.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Цифры и край клавиатуры", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Скорость", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Все остальные клавиши",
      summary: "Символы этой клавиатуры, которые курс еще не использовал (15), каждый там, где он на самом деле нужен.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Оставшиеся клавиши", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05'] },
        { id: 'finish', title: "Заверши раздел", lessons: ['u4-l06', 'u4-l07'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "Пробел, А и О", newKeys: ["а","о"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "В и Л", newKeys: ["в","л"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "Ы и Д", newKeys: ["ы","д"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "Ф и Ж", newKeys: ["ф","ж"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Повторение", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "П и Р", newKeys: ["п","р"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "У и Ш", newKeys: ["у","ш"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "К и Г", newKeys: ["к","г"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Слабые клавиши", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Тест раздела 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "Е и Н", newKeys: ["е","н"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "Щ и Ц", newKeys: ["щ","ц"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "С и Т", newKeys: ["с","т"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "Ь и М", newKeys: ["ь","м"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Повторение", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Й и З", newKeys: ["й","з"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "И и Ч", newKeys: ["и","ч"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Я, Ю, Б и Э", newKeys: ["я","ю","б","э"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift и Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Слабые клавиши", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Тест раздела 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Ряд цифр", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Правый столбец", newKeys: [".","-","=","х","ъ","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Повторение со всей клавиатурой", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Текст и темп 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Текст и темп 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Тест раздела 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "Ё, !, \" и №", newKeys: ["ё","!","\"","№"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "Точка с запятой, %, двоеточие и ?", newKeys: [";","%",":","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "*, (, ) и _", newKeys: ["*","(",")","_"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "+", newKeys: ["+"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Косая черта и запятая", newKeys: ["/",","], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "Все знаки вместе", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l07': { title: "Тест раздела 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l07'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "а а аа\nаааа\nаааааа аааааа",
    hint: "Положи указательные пальцы на две клавиши с выступом и набирай то, что видишь, не глядя на клавиатуру."
  }
};
