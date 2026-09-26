/* data/curriculum.zh-tw.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/zh-tw.js + bố cục bàn phím 215
   (Taiwan (Zhuyin / 注音 — Standard)). Sửa lời dạy ở data/courses/zh-tw.js, sửa kho từ ở data/words/zh-tw.js,
   rồi chạy lại:  node scripts/build-course.js --lang zh-tw

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.

   Hàng cơ sở của bố cục này không có nguyên âm dùng được, nên bài dạy ㄕ 和 ㄘ
   đã được kéo lên trước bài ôn tập — nếu không thì bài ôn tập không có từ nào để ôn.
*/
window.TypingEaseCurriculum = {
  lang: 'zh-tw',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'zh-tw',
  // Go THEO VI TRI PHIM (Chu am Dai Loan): bo go Chu am doi phim thanh chu Han nen trang khong doc
  // duoc phim vua bam. Nguoi hoc tat bo go (che do tieng Anh); player.js doi ma phim vat ly
  // (event.code) thanh ky tu cua bo cuc nay. Xem data/courses/zh-tw.js.
  typeByPosition: true,
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 215,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [215],
  progressKey: 'typingease-progress-zh-tw-v1',
  badgesKey: 'typingease-badges-zh-tw-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "基準列",
      summary: "手指下的八個鍵，然後是 ㄕ ㄘ、ㄍ ㄛ 和 ㄐ ㄧ，足夠不低頭打出一聲的注音。",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "從這裡開始", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "伸展手指", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "完成本單元", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "上排和下排",
      summary: "上排、下排和引號鍵，再加上 Shift 和 Enter：除了數字列和最右邊一欄，所有注音符號都在這裡。",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "從這裡開始", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "伸展手指", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "完成本單元", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "聲調、最外一欄和速度",
      summary: "數字列上的聲調和 ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ、最外一欄的 ㄥ ㄦ，然後是保持節奏的長段落。",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "聲調和符號", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "速度", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "其餘所有按鍵",
      summary: "這塊鍵盤上課程還沒用到的 6 個字元：左上角的鍵和 Shift 層剩下的符號。每一個都放在它平常出現的地方來練。",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "剩下的按鍵", lessons: ['u4-l01', 'u4-l02'] },
        { id: 'finish', title: "完成本單元", lessons: ['u4-l03', 'u4-l04'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ㄑ 和 ㄨ，加上空白鍵", newKeys: ["ㄑ","ㄨ"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ㄎ 和 ㄜ", newKeys: ["ㄎ","ㄜ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "ㄋ 和 ㄠ", newKeys: ["ㄋ","ㄠ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ㄇ 和 ㄤ", newKeys: ["ㄇ","ㄤ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "ㄕ 和 ㄘ", newKeys: ["ㄕ","ㄘ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l06': { title: "複習", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l07': { title: "ㄍ 和 ㄛ", newKeys: ["ㄍ","ㄛ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ㄐ 和 ㄧ", newKeys: ["ㄐ","ㄧ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "弱點鍵", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "第 1 單元測驗", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ㄔ 和 ㄗ", newKeys: ["ㄔ","ㄗ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "ㄟ 和 ㄊ", newKeys: ["ㄟ","ㄊ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "ㄏ 和 ㄙ", newKeys: ["ㄏ","ㄙ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ㄩ 和 ㄒ", newKeys: ["ㄩ","ㄒ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "複習", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ㄆ 和 ㄣ", newKeys: ["ㄆ","ㄣ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ㄖ 和 ㄌ", newKeys: ["ㄖ","ㄌ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ㄈ、ㄡ、ㄝ 和 引號鍵", newKeys: ["ㄈ","ㄡ","ㄝ","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift 和 Enter", newKeys: ["shift","enter","\""], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "弱點鍵", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "第 2 單元測驗", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "數字列：聲調和 ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ", newKeys: ["ㄅ","ㄉ","ˇ","ˋ","ㄓ","ˊ","˙","ㄚ","ㄞ","ㄢ"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "最外一欄：ㄥ 和 ㄦ", newKeys: ["ㄥ","ㄦ","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "聲調和整塊鍵盤", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "文章與節奏 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "文章與節奏 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "第 3 單元測驗", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`、~ 和 +", newKeys: ["`","~","+"], screens: 8, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "{、} 和 |", newKeys: ["{","}","|"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "所有符號一起練", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l04': { title: "第 4 單元測驗", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "ㄑ ㄑ ㄑㄑ\nㄑㄑㄑㄑ\nㄑㄑㄑㄑㄑㄑ ㄑㄑㄑㄑㄑㄑ",
    hint: "先把輸入法切到英文模式，兩根食指放在有凸點的兩個鍵上，不看鍵盤，打出你看到的符號。"
  }
};
