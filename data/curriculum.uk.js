/* data/curriculum.uk.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/uk.js + bố cục bàn phím 104
   (Ukrainian). Sửa lời dạy ở data/courses/uk.js, sửa kho từ ở data/words/uk.js,
   rồi chạy lại:  node scripts/build-course.js --lang uk

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'uk',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'uk',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 104,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [104],
  progressKey: 'typingease-progress-uk-v1',
  badgesKey: 'typingease-badges-uk-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Основний ряд",
      summary: "Вісім клавіш під пальцями, потім П Р, У Ш і К Г — досить, щоб писати справжні українські слова, не дивлячись униз.",
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
      summary: "Верхній і нижній ряди, Shift і Enter — усі літери, крім х, ї та ґ біля правого краю.",
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
      title: "Цифри, крапка і швидкість",
      summary: "Ряд цифр, крапка і останні літери правого краю — х, ї, ґ, — потім довгі тексти в рівному темпі.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Цифри і правий край", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Швидкість", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Усі інші клавіші",
      summary: "Символи цієї клавіатури, яких курс ще не використовував (15), кожен там, де він справді стоїть у тексті.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Клавіші, що лишилися", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05'] },
        { id: 'finish', title: "Заверши розділ", lessons: ['u4-l06', 'u4-l07'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "А і О та пробіл", newKeys: ["а","о"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "В і Л", newKeys: ["в","л"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "І і Д", newKeys: ["і","д"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "Ф і Ж", newKeys: ["ф","ж"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Повторення", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "П і Р", newKeys: ["п","р"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "У і Ш", newKeys: ["у","ш"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "К і Г", newKeys: ["к","г"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Слабкі клавіші", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "Тест розділу 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "Е і Н", newKeys: ["е","н"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "Щ і Ц", newKeys: ["щ","ц"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "С і Т", newKeys: ["с","т"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "Ь і М", newKeys: ["ь","м"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Повторення", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Й і З", newKeys: ["й","з"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "И і Ч", newKeys: ["и","ч"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Я, Ю, Б і Є", newKeys: ["я","ю","б","є"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift і Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Слабкі клавіші", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "Тест розділу 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Ряд цифр", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Правий стовпчик", newKeys: [".","-","=","х","ї","ґ"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Адреси, посилання і цифри", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Тексти і темп 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Тексти і темп 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "Тест розділу 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "Апостроф, ~, ! і \"", newKeys: ["'","~","!","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "№, крапка з комою, % і двокрапка", newKeys: ["№",";","%",":"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "?, *, ( і )", newKeys: ["?","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_ і +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Кома", newKeys: [","], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "Усі знаки разом", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l07': { title: "Тест розділу 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    hint: "Поклади вказівні пальці на дві клавіші з рисками і пиши те, що бачиш, не дивлячись на клавіатуру."
  }
};
