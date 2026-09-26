/* data/curriculum.vi.js — chỉ mục giáo trình tiếng Việt (PLAN.md C4/C5).
   Nạp bằng <script src="/data/curriculum.vi.js"></script>, KHÔNG fetch.
   Gán vào window.TypingEaseCurriculum.

   Ghi chú hợp đồng:
   - `sequence` là thứ tự tuyến tính 35 bài (dùng để tính tập phím luỹ tiến và "bài kế tiếp").
     Nó luôn khớp với thứ tự phẳng units[] -> groups[] -> lessons[]; scripts/validate-lessons.js kiểm điều này.
   - `lessons[id].screens` là SỐ SCREEN; phải khớp `screens.length` của data/lessons/vi/<id>.json.
   - `lessons[id].ready === false` nghĩa là chưa có file JSON nội dung (Phase 4 sẽ viết).
   - `starter.screen` đánh số TỪ 1 (giống "Screen 5 / 11" và hash /hoc/#u1-l04/5).
   - Khoá unit là khoá MỀM: `locked: true` + `unlockAfter`, player luôn cho "Mở sớm" (DECISIONS.md).
*/
window.TypingEaseCurriculum = {
  lang: 'vi',
  // US Standard. Khai ro thay vi dua vao mac dinh cua keyboard/preferences.js: tu khi
  // giao trinh quyet dinh ban phim, mot chi muc khong khai gi la mot chi muc im lang
  // nhan bat cu thu gi mac dinh dang la.
  keyboardId: 1,
  course: 'vi',
  // CHI bo cuc US. Khoa nay day Telex tren ban phim My; cac bo cuc 208-212 ("Vietnamese") go dau
  // truc tiep bang phim rieng, tuc la mot khoa khac han chua ai viet. keyboard/preferences.js
  // khong ve mot bo cuc da luu nam ngoai danh sach nay o day.
  layouts: [1],
  progressKey: 'typingease-progress-v3',
  badgesKey: 'typingease-badges-v1',
  // Tinh nang rieng cua giao trinh nay. `badges.js` an nhung huy hieu doi tinh nang khong co,
  // nen mot giao trinh khong day dau se khong co o huy hieu xam vinh vien.
  features: ['telex'],

  units: [
    {
      id: 'u1',
      index: 1,
      title: 'Hàng phím cơ sở',
      summary: 'Tám phím hàng giữa, rồi G H, E I, R U — đủ để gõ từ tiếng Việt không dấu.',
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'bat-dau', title: 'Bắt đầu', lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'vuon-xa', title: 'Vươn xa', lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 've-dich', title: 'Về đích', lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: 'Mở rộng bàn phím',
      summary: 'Hàng trên, hàng dưới, dấu câu và viết hoa — 20+ phím, vẫn viết không dấu.',
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'bat-dau', title: 'Bắt đầu', lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'vuon-xa', title: 'Vươn xa', lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 've-dich', title: 'Về đích', lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: 'Gõ tiếng Việt có dấu',
      summary: 'Dấu thanh và nguyên âm theo kiểu Telex, rồi từ và câu tiếng Việt thật.',
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'dau-thanh', title: 'Dấu thanh', lessons: ['u3-l01', 'u3-l02'] },
        { id: 'nguyen-am', title: 'Nguyên âm', lessons: ['u3-l03', 'u3-l04'] },
        { id: 'tu-va-cau', title: 'Từ và câu', lessons: ['u3-l05', 'u3-l06'] },
        { id: 've-dich', title: 'Về đích', lessons: ['u3-l07', 'u3-l08'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: 'Số, ký hiệu và tốc độ',
      summary: 'Hàng số, ký hiệu thường dùng, email/web và đoạn văn dài.',
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l08',
      groups: [
        { id: 'so-va-ky-hieu', title: 'Số và ký hiệu', lessons: ['u4-l01', 'u4-l02', 'u4-l03'] },
        { id: 'toc-do', title: 'Tốc độ', lessons: ['u4-l04', 'u4-l05', 'u4-l06'] }
      ]
    }
    // Khối dưới đây do scripts/build-unit-symbols.js ghi (unit "mọi phím còn lại"). Đừng sửa tay.
    // <auto:symbols:units>
    , {
      id: 'u5',
      index: 5,
      // Sinh bởi scripts/build-unit-symbols.js — đừng sửa tay trong khối này.
      autoSymbols: true,
      title: "Mọi phím còn lại",
      summary: "21 ký tự trên bàn phím mà khoá chưa dùng tới — ngoặc, ký hiệu tiền, phần còn lại của tầng Shift — mỗi ký tự gõ đúng chỗ nó hay đứng.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u4-l06',
      groups: [
        { id: 'symbols', title: "Những phím còn lại", lessons: ['u5-l01', 'u5-l02', 'u5-l03', 'u5-l04', 'u5-l05', 'u5-l06'] },
        { id: 'finish', title: "Về đích", lessons: ['u5-l07', 'u5-l08'] }
      ]
    }
    // </auto:symbols:units>
  ],

  /* kind: keys | review | weak | test */
  lessons: {
    'u1-l01': { title: 'J, F và dấu cách', newKeys: ['j', 'f', ' '], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: 'D và K', newKeys: ['d', 'k'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: 'S và L', newKeys: ['s', 'l'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: 'A và dấu chấm phẩy', newKeys: ['a', ';'], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u1-l05': { title: 'Ôn tập hàng cơ sở', newKeys: [], screens: 9, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: 'G và H', newKeys: ['g', 'h'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: 'E và I', newKeys: ['e', 'i'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: 'R và U', newKeys: ['r', 'u'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: 'Luyện phím yếu', newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: 'Kiểm tra Unit 1', newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },

    'u2-l01': { title: 'T và Y', newKeys: ['t', 'y'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: 'O và W', newKeys: ['o', 'w'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: 'C và N', newKeys: ['c', 'n'], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u2-l04': { title: 'M và V', newKeys: ['m', 'v'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: 'Ôn tập 20 phím', newKeys: [], screens: 9, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: 'Q và P', newKeys: ['q', 'p'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: 'B và X', newKeys: ['b', 'x'], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: 'Z, dấu chấm và dấu phẩy', newKeys: ['z', '.', ','], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u2-l09': { title: 'Enter và Shift (viết hoa)', newKeys: ['shift', 'enter'], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: 'Luyện phím yếu', newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: 'Kiểm tra Unit 2', newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },

    'u3-l01': { title: 'Dấu sắc và dấu huyền', newKeys: ['s', 'f'], screens: 10, estMinutes: 5, kind: 'keys', inputMode: 'telex', ready: true },
    'u3-l02': { title: 'Dấu hỏi, ngã, nặng', newKeys: ['r', 'x', 'j'], screens: 10, estMinutes: 5, kind: 'keys', inputMode: 'telex', ready: true },
    'u3-l03': { title: 'Â Ê Ô và Đ', newKeys: ['aa', 'ee', 'oo', 'dd'], screens: 10, estMinutes: 5, kind: 'keys', inputMode: 'telex', ready: true },
    'u3-l04': { title: 'Ă Ư Ơ', newKeys: ['aw', 'uw', 'ow'], screens: 10, estMinutes: 5, kind: 'keys', inputMode: 'telex', ready: true },
    'u3-l05': { title: 'Từ thông dụng tiếng Việt', newKeys: [], screens: 9, estMinutes: 5, kind: 'review', inputMode: 'telex', ready: true },
    'u3-l06': { title: 'Câu ngắn', newKeys: [], screens: 8, estMinutes: 5, kind: 'review', inputMode: 'telex', ready: true },
    'u3-l07': { title: 'Luyện dấu hay sai', newKeys: [], screens: 1, estMinutes: 2, kind: 'review', seconds: 120, inputMode: 'telex', ready: true },
    'u3-l08': { title: 'Kiểm tra Unit 3', newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, inputMode: 'telex', ready: true },

    'u4-l01': { title: 'Số 1-5 và 6-0', newKeys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    /* DECISIONS.md bổ sung 9: newKeys ghi PHÍM VẬT LÝ. @ # : ? ! _ nằm ở tầng Shift của các phím
       số và của / ; - đã dạy, nên phím mới thật sự của bài này chỉ là / và -. */
    'u4-l02': { title: 'Ký hiệu thường gặp', newKeys: ['/', '-'], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: 'Email, web và mật khẩu', newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u4-l04': { title: 'Đoạn văn và tốc độ 1', newKeys: [], screens: 7, estMinutes: 5, kind: 'review', inputMode: 'telex', ready: true },
    'u4-l05': { title: 'Đoạn văn và tốc độ 2', newKeys: [], screens: 7, estMinutes: 6, kind: 'review', inputMode: 'telex', ready: true },
    'u4-l06': { title: 'Tổng kết và Kiểm tra cuối', newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, inputMode: 'telex', ready: true }
    // Khối dưới đây do scripts/build-unit-symbols.js ghi (unit "mọi phím còn lại"). Đừng sửa tay.
    // <auto:symbols:lessons>
    , 'u5-l01': { title: "`, ~, $ và %", newKeys: ["`","~","$","%"], screens: 10, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l02': { title: "^, &, * và (", newKeys: ["^","&","*","("], screens: 11, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l03': { title: "), = và +", newKeys: [")","=","+"], screens: 8, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l04': { title: "[, {, ] và }", newKeys: ["[","{","]","}"], screens: 9, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l05': { title: "\\, |, dấu nháy và \"", newKeys: ["\\","|","'","\""], screens: 9, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l06': { title: "< và >", newKeys: ["<",">"], screens: 7, estMinutes: 5, kind: 'keys', ready: true }
    , 'u5-l07': { title: "Mọi ký hiệu cùng lúc", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true }
    , 'u5-l08': { title: "Kiểm tra Unit 5", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
    // </auto:symbols:lessons>
  },

  sequence: [
    'u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05', 'u1-l06', 'u1-l07', 'u1-l08', 'u1-l09', 'u1-l10',
    'u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05', 'u2-l06', 'u2-l07', 'u2-l08', 'u2-l09', 'u2-l10', 'u2-l11',
    'u3-l01', 'u3-l02', 'u3-l03', 'u3-l04', 'u3-l05', 'u3-l06', 'u3-l07', 'u3-l08',
    'u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06'
    // Khối dưới đây do scripts/build-unit-symbols.js ghi (unit "mọi phím còn lại"). Đừng sửa tay.
    // <auto:symbols:sequence>
    , 'u5-l01', 'u5-l02', 'u5-l03', 'u5-l04', 'u5-l05', 'u5-l06', 'u5-l07', 'u5-l08'
    // </auto:symbols:sequence>
  ],

  /* Dòng gõ thử ở hero trang chủ — inline để không phải chờ fetch.
     Trùng ĐÚNG content của screen 6 (block giới thiệu dấu cách) của bài u1-l01,
     nên nếu người mới bấm "Bắt đầu Bài 1" thì screen đó được tính là đã xong (PLAN.md A3). */
  starter: {
    lessonId: 'u1-l01',
    screen: 6,
    content: 'jjj fff jjj fff jf fj',
    hint: 'Đặt hai ngón trỏ lên F và J — hai phím có gờ nổi — rồi gõ chữ đang sáng.'
  }
};
