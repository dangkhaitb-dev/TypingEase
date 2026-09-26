/* data/courses/vi.js — lời dạy tiếng Việt cho phần SINH TỰ ĐỘNG của khoá tiếng Việt.
 *
 * Khoá tiếng Việt viết tay (35 bài, Telex) không đi qua build-course.js. File này chỉ phục vụ unit
 * cuối "mọi phím còn lại" mà scripts/build-unit-symbols.js sinh ra và ghi vào khối <auto:symbols>
 * của data/curriculum.vi.js. Nạp bằng `new Function('window', src)`; không trang nào nạp nó.
 *
 * Unit đó gõ ở chế độ `ascii`, không Telex: nó dạy ký hiệu, và từ trong đó là từ KHÔNG DẤU lấy từ
 * chính các bài unit 1–2 — gõ Telex thì "nhas" sẽ thành "nhá" giữa bài dạy dấu ngoặc.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.vi = {
  lang: 'vi',
  name: 'Tiếng Việt',
  // Bàn phím US: ^ ` ~ là ký tự thật, không phải phím chết.
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' và ',
    keyNames: { ',': 'dấu phẩy', '.': 'dấu chấm', ';': 'dấu chấm phẩy', "'": 'dấu nháy', '-': 'gạch ngang', '/': 'gạch chéo' },
    fingers: {
      LP: 'ngón út trái', LR: 'ngón áp út trái', LM: 'ngón giữa trái', LI: 'ngón trỏ trái', LT: 'ngón cái trái',
      RT: 'ngón cái phải', RI: 'ngón trỏ phải', RM: 'ngón giữa phải', RR: 'ngón áp út phải', RP: 'ngón út phải'
    },
    pressToContinue: 'Nhấn {key} để tiếp tục',
    titleTest: 'Kiểm tra Unit {unit}',

    symbols: {
      unitTitle: 'Mọi phím còn lại',
      unitSummary: '{count} ký tự trên bàn phím mà khoá chưa dùng tới — ngoặc, ký hiệu tiền, phần còn lại của tầng Shift — mỗi ký tự gõ đúng chỗ nó hay đứng.',
      groupSymbols: 'Những phím còn lại',
      groupFinish: 'Về đích',
      titleNumberRow: 'Ký hiệu trên hàng số',
      titleKeys: '{keys}',
      titleReview: 'Mọi ký hiệu cùng lúc',
      summaryKeys: 'Những phím cuối: {keys}.',
      summaryReview: 'Mọi ký hiệu của unit, trộn vào từ và số.',
      summaryTest: 'Bài kiểm tra có giờ với mọi phím trên bàn phím.',
      introLesson: 'Những phím khoá học chưa dùng tới: {keys}. {shiftNote}',
      shiftNote: 'Tất cả đều là Shift cộng một phím ngón tay bạn đã quen — Shift bằng ngón út của bàn tay kia.',
      shiftNoteMixed: 'Vài ký tự cần Shift, bằng ngón út của bàn tay kia; số còn lại nằm trên một phím khoá học chưa dùng.',
      introKey: '{key} do {finger} phụ trách{shift}.',
      introKeyShift: ', giữ Shift bằng tay kia',
      drillOne: 'Gõ riêng {key} trước, rồi gõ nó ở đúng chỗ nó hay đứng.',
      burst: 'Một loạt mẩu ngắn có những ký tự này.',
      together: 'Mọi thứ của bài này, trộn lẫn.',
      inWords: 'Lại là từ, với ký hiệu ở đúng chỗ của nó.',
      introReview: 'Không có phím mới. Mọi ký tự của unit, trộn vào từ và số.',
      reviewFirst: 'Gõ ký hiệu cùng nhịp với chữ cái bên cạnh nó.',
      reviewLine: 'Giữ nhịp qua các ký hiệu; chúng cũng chỉ là phím như mọi phím khác.',
      congratsKeys: '{keys}: giờ đã nằm dưới ngón tay bạn. Shift bằng tay kia, và ký hiệu ra dễ như chữ cái bên cạnh.',
      congratsReview: 'Mọi phím trên bàn phím này đều đã có lượt của nó.',
      introTest: 'Bài kiểm tra có giờ với tất cả, kể cả ký hiệu.',
      congratsTest: 'Đó là cả bàn phím. Không còn phím nào trên đó mà khoá học chưa dạy bạn.',
      testText: 'Từ, số và ký hiệu. Giữ một nhịp từ đầu tới cuối.'
    }
  }
};
