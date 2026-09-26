/* tien-do/text/en.mjs — chữ TĨNH của trang tiến độ tiếng Anh, cho scripts/build-progress-pages.mjs.
 *
 * Mỗi ngôn ngữ một file cùng hình dạng này. Chữ do JS điền lúc chạy (chuỗi ngày, "0 / 10 phút",
 * lời khuyên, nhãn heatmap…) KHÔNG ở đây mà ở `progress` trong i18n/ui.<lang>.js — máy sinh gọi
 * chính các hàm đó để in giá trị ban đầu, nên hai nơi không thể lệch nhau. Nhãn menu, chân trang
 * và câu khẩu hiệu lấy từ bai-hoc/config.<lang>.mjs, cho khớp với trang lộ trình.
 *
 * `{n}` = số bài của khoá đang xem.
 */
export default {
  slug: 'progress',
  title: 'Your typing progress | TypingEase',
  description: 'See how your typing is going: every lesson scored, your best WPM and accuracy, a heat map of which keys you get wrong, your daily streak and your daily goal.',
  keepLearning: 'Keep learning',
  eyebrow: 'How you are doing',
  h1: 'Your typing progress',
  intro: 'Every number on this page is stored on this device and sent nowhere. Type one more lesson and it updates.',
  courseSwitch: 'Course',
  overviewAria: 'Overview',
  sumLessons: 'Lessons done',
  sumStars: 'Stars collected',
  sumWpm: 'Best WPM',
  sumAccuracy: 'Best accuracy',
  milestones: 'Milestones',
  badgesTitle: 'Badges',
  badgesIntro: 'Each badge is tied to a real number in the table below — there is no way to unlock one except by typing.',
  goalKicker: "Today's goal",
  goalAria: 'Pick a daily goal',
  minutes: n => `${n} min`,
  coachKicker: 'Your coach',
  coachTitle: 'Where you are',
  trendAria: 'Recent progress',
  keyByKey: 'Key by key',
  heatTitle: 'Keyboard heat map',
  heatText: 'Green keys are the ones you hit cleanly, amber ones are hit and miss, red ones are costing you speed. A key is only coloured once you have typed it enough times to say anything useful.',
  heatEmpty: 'Not enough data yet — type a few lessons and come back.',
  heatAria: 'Accuracy per key',
  courseKicker: 'The {n}-lesson course',
  resultsTitle: 'Every lesson, scored',
  resultsIntro: 'Your best run at each lesson, kept on this device.',
  clear: 'Clear history',
  columns: ['Lesson', 'Screens done', 'Stars', 'Best WPM', 'Accuracy'],
  keepGoing: 'Keep going',
  nextTitle: 'What to do next',
  courseCard: ['The full course', 'Every unit in order. Go back over a lesson you want to redo, or open the next unit early.', 'See the course'],
  layoutsCard: ['Type on your own keyboard', 'QWERTY, AZERTY, QWERTZ, Devanagari, Arabic, JIS — 119 real layouts, and the course follows the one you pick.', 'See the layouts']
};
