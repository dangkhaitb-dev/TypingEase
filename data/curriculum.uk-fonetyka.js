/* data/curriculum.uk-fonetyka.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/uk.js (families.fonetyka) + bố cục bàn phím 135
   (Ukrainian (phonetic)). Sửa lời dạy ở data/courses/uk.js, sửa kho từ ở data/words/uk.js,
   rồi chạy lại:  node scripts/build-course.js --lang uk --course uk-fonetyka

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.

   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy Е і І
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.
*/
window.TypingEaseCurriculum = {
  lang: 'uk',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'uk-fonetyka',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 135,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [135],
  progressKey: 'typingease-progress-uk-fonetyka-v1',
  badgesKey: 'typingease-badges-uk-fonetyka-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Основний ряд",
      summary: "Вісім клавіш під пальцями, потім Е І, Г Х і Р У — досить, щоб писати справжні українські слова, не дивлячись униз.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Почни тут", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Пальці тягнуться", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Заверши розділ", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Решта абетки",
      summary: "Верхній і нижній ряди, Shift і Enter — усі літери, крім ш, щ і ю біля правого краю.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Почни тут", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Пальці тягнуться", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Заверши розділ", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Цифри, знаки і швидкість",
      summary: "Два поверхи ряду цифр — з крапкою і комою, — останні літери правого краю, потім довгі тексти в рівному темпі.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Цифри і знаки", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Швидкість", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Усі інші клавіші",
      summary: "Символи цієї клавіатури, яких курс ще не використовував (5), кожен там, де він справді стоїть у тексті.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Клавіші, що лишилися", lessons: ['u4-l01', 'u4-l02'] },
        { id: 'finish', title: "Заверши розділ", lessons: ['u4-l03', 'u4-l04'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "Ф і Й та пробіл", newKeys: ["ф","й"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "Д і К", newKeys: ["д","к"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "С і Л", newKeys: ["с","л"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "А і Ґ", newKeys: ["а","ґ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Е і І", newKeys: ["е","і"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l06': { title: "Повторення", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l07': { title: "Г і Х", newKeys: ["г","х"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "Р і У", newKeys: ["р","у"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Слабкі клавіші", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Тест розділу 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "Т і И", newKeys: ["т","и"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "О і В", newKeys: ["о","в"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "Ц і Н", newKeys: ["ц","н"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "М і Ж", newKeys: ["м","ж"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Повторення", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Я і П", newKeys: ["я","п"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "Б і Ь", newKeys: ["б","ь"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "З, Є, Ї і Ч", newKeys: ["з","є","ї","ч"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift і Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Слабкі клавіші", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Тест розділу 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Цифри та їхні знаки", newKeys: ["1","2","3","4","5","6","7","8","9","0","!","\"","#","*",":",",",".",";","(",")"], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Правий стовпчик", newKeys: ["/","-","=","ш","щ","ю"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Адреси, посилання і цифри", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Тексти і темп 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Тексти і темп 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Тест розділу 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "Апостроф, ~, _ і +", newKeys: ["'","~","_","+"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "?", newKeys: ["?"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "Усі знаки разом", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l04': { title: "Тест розділу 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l04'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ф ф фф\nфффф\nфффффф фффффф",
    hint: "Поклади вказівні пальці на дві клавіші з рисками і пиши те, що бачиш, не дивлячись на клавіатуру."
  }
};
