/* data/curriculum.th.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/th.js + bố cục bàn phím 105
   (Thai (Kedmanee)). Sửa lời dạy ở data/courses/th.js, sửa kho từ ở data/words/th.js,
   rồi chạy lại:  node scripts/build-course.js --lang th

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'th',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'th',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 105,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [105],
  progressKey: 'typingease-progress-th-v1',
  badgesKey: 'typingease-badges-th-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "แถวเหย้า",
      summary: "แปดแป้นใต้นิ้ว ต่อด้วย เ และ ◌้, ◌ำ และ ร และ พ และ ◌ี พอจะพิมพ์คำไทยจริงได้โดยไม่ก้มมอง",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "เริ่มที่นี่", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "ยืดนิ้ว", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "จบหน่วย", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "ตัวอักษรที่เหลือ",
      summary: "แถวบน แถวล่าง อักขระที่ใช้บ่อยจากชั้น Shift และ Enter",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "เริ่มที่นี่", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "ยืดนิ้ว", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "จบหน่วย", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "แถวบนสุด เลขไทย และความเร็ว",
      summary: "แถวบนสุดทั้งสองชั้น คอลัมน์ริมขวา แล้วต่อด้วยข้อความยาวในจังหวะที่คงที่",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "แถวบนสุดและเลขไทย", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "ความเร็ว", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "แป้นที่เหลือทั้งหมด",
      summary: "อักขระอีก 28 ตัวบนแป้นพิมพ์นี้ที่บทเรียนยังไม่ได้ใช้ แต่ละตัวพิมพ์ในตำแหน่งที่มันถูกใช้จริง",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "แป้นที่ยังเหลือ", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "จบหน่วย", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ด และ ◌่ และแป้นเว้นวรรค", newKeys: ["ด","่"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ก และ า", newKeys: ["ก","า"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "ห และ ส", newKeys: ["ห","ส"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ฟ และ ว", newKeys: ["ฟ","ว"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "ทบทวน", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "เ และ ◌้", newKeys: ["เ","้"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "◌ำ และ ร", newKeys: ["ำ","ร"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "พ และ ◌ี", newKeys: ["พ","ี"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "แป้นที่ยังอ่อน", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "แบบทดสอบหน่วยที่ 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ะ และ ◌ั", newKeys: ["ะ","ั"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "น และ ไ", newKeys: ["น","ไ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "แ และ ◌ื", newKeys: ["แ","ื"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ท และ อ", newKeys: ["ท","อ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "ทบทวน", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ไม้ยมก (ๆ) และ ย", newKeys: ["ๆ","ย"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "◌ิ และ ป", newKeys: ["ิ","ป"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ผ, ใ, ม และ ง", newKeys: ["ผ","ใ","ม","ง"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift และ Enter", newKeys: ["shift","enter","โ","็","ฉ","ญ","ซ","ศ","ษ","ณ","์","ธ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "แป้นที่ยังอ่อน", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "แบบทดสอบหน่วยที่ 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "แถวบนสุดและเลขไทย", newKeys: ["ๅ","/","-","ภ","ถ","ุ","ึ","ค","ต","จ","+","๑","๒","๓","๔","ู","฿","๕","๖","๗"], screens: 12, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "คอลัมน์ริมขวา", newKeys: ["ฝ","ข","ช","บ","ล","ฃ"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "ตัวอักษร ตัวเลข และเครื่องหมาย", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "ข้อความและจังหวะ 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "ข้อความและจังหวะ 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "แบบทดสอบหน่วยที่ 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "ขีดล่าง (_), ร้อยละ (%), ๘ และ ๙", newKeys: ["_","%","๘","๙"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "๐, อัญประกาศ (\"), ฎ และ ฑ", newKeys: ["๐","\"","ฎ","ฑ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "ฤ, ฆ, ฏ และ ฌ", newKeys: ["ฤ","ฆ","ฏ","ฌ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "วงเล็บเปิด, วงเล็บปิด, ฮ และ ◌ฺ", newKeys: ["(",")","ฮ","ฺ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "◌ํ, ◌๊, ไปยาลน้อย (ฯ) และ ฐ", newKeys: ["ํ","๊","ฯ","ฐ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "จุลภาค (,), ฅ, ◌๋ และ มหัพภาค (.)", newKeys: [",","ฅ","๋","."], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "ปรัศนี (?), ฒ, ฬ และ ฦ", newKeys: ["?","ฒ","ฬ","ฦ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "อักขระทั้งหมดรวมกัน", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "แบบทดสอบหน่วยที่ 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l07',
    'u4-l08',
    'u4-l09'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ด ด ดด\nดดดด\nดดดดดด ดดดดดด",
    hint: "วางนิ้วชี้บนสองแป้นที่มีปุ่มนูน แล้วพิมพ์สิ่งที่เห็นโดยไม่ก้มมองแป้นพิมพ์"
  }
};
