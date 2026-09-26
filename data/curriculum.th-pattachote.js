/* data/curriculum.th-pattachote.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/th.js (families.pattachote) + bố cục bàn phím 136
   (Thai (Pattachote)). Sửa lời dạy ở data/courses/th.js, sửa kho từ ở data/words/th.js,
   rồi chạy lại:  node scripts/build-course.js --lang th --course th-pattachote

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'th',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'th-pattachote',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 136,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [136],
  progressKey: 'typingease-progress-th-pattachote-v1',
  badgesKey: 'typingease-badges-th-pattachote-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "แถวเหย้า",
      summary: "แปดแป้นใต้นิ้ว ต่อด้วย ◌ั และ ◌ี, ย ม และ อ ด พอจะพิมพ์คำไทยจริงได้โดยไม่ก้มมอง",
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
      title: "เลขไทย คอลัมน์ริมขวา และความเร็ว",
      summary: "แถวเลขไทย คอลัมน์ริมขวา แล้วต่อด้วยข้อความยาวในจังหวะที่คงที่",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "เลขไทยและแป้นริมขวา", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "ความเร็ว", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "แป้นที่เหลือทั้งหมด",
      summary: "อักขระอีก 37 ตัวบนแป้นพิมพ์นี้ที่บทเรียนยังไม่ได้ใช้ แต่ละตัวพิมพ์ในตำแหน่งที่มันถูกใช้จริง",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "แป้นที่ยังเหลือ", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07', 'u4-l08', 'u4-l09', 'u4-l10'] },
        { id: 'finish', title: "จบหน่วย", lessons: ['u4-l11', 'u4-l12'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ก และ า และแป้นเว้นวรรค", newKeys: ["ก","า"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ง และ น", newKeys: ["ง","น"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "ท และ เ", newKeys: ["ท","เ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "◌้ และ ไ", newKeys: ["้","ไ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "ทบทวน", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "◌ั และ ◌ี", newKeys: ["ั","ี"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "ย และ ม", newKeys: ["ย","ม"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "อ และ ด", newKeys: ["อ","ด"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "แป้นที่ยังอ่อน", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "แบบทดสอบหน่วยที่ 1", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ร และ ◌่", newKeys: ["ร","่"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "ว และ ต", newKeys: ["ว","ต"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "ล และ ค", newKeys: ["ล","ค"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ส และ ห", newKeys: ["ส","ห"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "ทบทวน", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "◌็ และ แ", newKeys: ["็","แ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "◌ิ และ ป", newKeys: ["ิ","ป"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "บ, จ, ะ และ ข", newKeys: ["บ","จ","ะ","ข"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift และ Enter", newKeys: ["shift","enter","ำ","ื","ุ","ึ","ช","ผ","ถ","โ","ณ","์"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "แป้นที่ยังอ่อน", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "แบบทดสอบหน่วยที่ 2", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "แถวเลขไทย", newKeys: ["=","๒","๓","๔","๕","ู","๗","๘","๙","๐"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "คอลัมน์ริมขวา", newKeys: ["พ","๑","๖","ใ","ฌ","ๅ"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "ตัวอักษร ตัวเลข และเครื่องหมาย", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "ข้อความและจังหวะ 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "ข้อความและจังหวะ 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "แบบทดสอบหน่วยที่ 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "ขีดล่าง (_), บาท (฿), บวก (+) และ อัญประกาศ (\")", newKeys: ["_","฿","+","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "ทับ (/), จุลภาค (,), ปรัศนี (?) และ มหัพภาค (.)", newKeys: ["/",",","?","."], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "วงเล็บเปิด, วงเล็บปิด, ยัติภังค์ (-) และ ร้อยละ (%)", newKeys: ["(",")","-","%"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "◌๊, ฤ, ไม้ยมก (ๆ) และ ญ", newKeys: ["๊","ฤ","ๆ","ญ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "ษ, ◌๋, ธ และ ฎ", newKeys: ["ษ","๋","ธ","ฎ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "ฏ, ฐ, ภ และ ◌ฺ", newKeys: ["ฏ","ฐ","ภ","ฺ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "ฝ, ซ, ฒ และ ไปยาลน้อย (ฯ)", newKeys: ["ฝ","ซ","ฒ","ฯ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "ฦ, ◌ํ, ฆ และ ฑ", newKeys: ["ฦ","ํ","ฆ","ฑ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l09': { title: "ศ, ฮ, ฟ และ ฉ", newKeys: ["ศ","ฮ","ฟ","ฉ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l10': { title: "ฬ", newKeys: ["ฬ"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l11': { title: "อักขระทั้งหมดรวมกัน", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l12': { title: "แบบทดสอบหน่วยที่ 4", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l09',
    'u4-l10',
    'u4-l11',
    'u4-l12'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ก ก กก\nกกกก\nกกกกกก กกกกกก",
    hint: "วางนิ้วชี้บนสองแป้นที่มีปุ่มนูน แล้วพิมพ์สิ่งที่เห็นโดยไม่ก้มมองแป้นพิมพ์"
  }
};
