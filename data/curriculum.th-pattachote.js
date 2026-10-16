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
      summary: "อักขระอีก 36 ตัวบนแป้นพิมพ์นี้ที่บทเรียนยังไม่ได้ใช้ แต่ละตัวพิมพ์ในตำแหน่งที่มันถูกใช้จริง",
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
    'u3-l02': { title: "คอลัมน์ริมขวา", newKeys: ["พ","๑","๖","ใ","ฌ",""], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "ตัวอักษร ตัวเลข และเครื่องหมาย", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "ข้อความและจังหวะ 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "ข้อความและจังหวะ 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "แบบทดสอบหน่วยที่ 3", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "ขีดล่าง (_), บาท (฿), บวก (+) และ อัญประกาศ (\")", newKeys: ["_","฿","+","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "ทับ (/), จุลภาค (,), ปรัศนี (?) และ มหัพภาค (.)", newKeys: ["/",",","?","."], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "วงเล็บเปิด, วงเล็บปิด, ยัติภังค์ (-) และ ร้อยละ (%)", newKeys: ["(",")","-","%"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "◌๊, ฤ, ไม้ยมก (ๆ) และ ญ", newKeys: ["๊","ฤ","ๆ","ญ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "ษ, ◌๋, ธ และ ฎ", newKeys: ["ษ","๋","ธ","ฎ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "ฏ, ฐ และ ภ", newKeys: ["ฏ","ฐ","ภ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
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

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/th-pattachote/u1-l01.json?v=7fb27f7a8e5251c9",
  "u1-l02": "/data/lessons/th-pattachote/u1-l02.json?v=7dd8663a31ca3fb7",
  "u1-l03": "/data/lessons/th-pattachote/u1-l03.json?v=b157b48a09055153",
  "u1-l04": "/data/lessons/th-pattachote/u1-l04.json?v=8f5bd5254a2e311e",
  "u1-l05": "/data/lessons/th-pattachote/u1-l05.json?v=94c03e0d2e7e2b7d",
  "u1-l06": "/data/lessons/th-pattachote/u1-l06.json?v=b7743df2d94b1223",
  "u1-l07": "/data/lessons/th-pattachote/u1-l07.json?v=69682f1d9a30cb3e",
  "u1-l08": "/data/lessons/th-pattachote/u1-l08.json?v=b35b5dda906ec20e",
  "u1-l09": "/data/lessons/th-pattachote/u1-l09.json?v=4695b79dbb689cf7",
  "u1-l10": "/data/lessons/th-pattachote/u1-l10.json?v=b30bb0ab1817bfc7",
  "u2-l01": "/data/lessons/th-pattachote/u2-l01.json?v=41fd8d482e9a5843",
  "u2-l02": "/data/lessons/th-pattachote/u2-l02.json?v=9b222d527f2f78e5",
  "u2-l03": "/data/lessons/th-pattachote/u2-l03.json?v=e1534df4c749ed4a",
  "u2-l04": "/data/lessons/th-pattachote/u2-l04.json?v=8f5effd0ff34f7a2",
  "u2-l05": "/data/lessons/th-pattachote/u2-l05.json?v=6d76f3ec37700291",
  "u2-l06": "/data/lessons/th-pattachote/u2-l06.json?v=dbea7055d9378cf4",
  "u2-l07": "/data/lessons/th-pattachote/u2-l07.json?v=8d8f080d45aea574",
  "u2-l08": "/data/lessons/th-pattachote/u2-l08.json?v=e381cdc2fe47d452",
  "u2-l09": "/data/lessons/th-pattachote/u2-l09.json?v=e0940f98c8a3f925",
  "u2-l10": "/data/lessons/th-pattachote/u2-l10.json?v=e166206517fdcf93",
  "u2-l11": "/data/lessons/th-pattachote/u2-l11.json?v=2ca5859f123033a3",
  "u3-l01": "/data/lessons/th-pattachote/u3-l01.json?v=c01f781b50195330",
  "u3-l02": "/data/lessons/th-pattachote/u3-l02.json?v=fa4b81a02e9fbacf",
  "u3-l03": "/data/lessons/th-pattachote/u3-l03.json?v=75414b9ba0e8026e",
  "u3-l04": "/data/lessons/th-pattachote/u3-l04.json?v=9e7d2b9862df3f7e",
  "u3-l05": "/data/lessons/th-pattachote/u3-l05.json?v=5241c6d4081a140d",
  "u3-l06": "/data/lessons/th-pattachote/u3-l06.json?v=e13fcea20833b2a1",
  "u4-l01": "/data/lessons/th-pattachote/u4-l01.json?v=7b181aca8fee0417",
  "u4-l02": "/data/lessons/th-pattachote/u4-l02.json?v=344779d854ca400a",
  "u4-l03": "/data/lessons/th-pattachote/u4-l03.json?v=2ff8c5c3f678b7bc",
  "u4-l04": "/data/lessons/th-pattachote/u4-l04.json?v=3c84d33f57999f29",
  "u4-l05": "/data/lessons/th-pattachote/u4-l05.json?v=c94ab1ee70bd8158",
  "u4-l06": "/data/lessons/th-pattachote/u4-l06.json?v=c0cd9131e6c32c7e",
  "u4-l07": "/data/lessons/th-pattachote/u4-l07.json?v=68dd7390074adeb4",
  "u4-l08": "/data/lessons/th-pattachote/u4-l08.json?v=3dcae1b636a3d1f2",
  "u4-l09": "/data/lessons/th-pattachote/u4-l09.json?v=8a09b11037143cc2",
  "u4-l10": "/data/lessons/th-pattachote/u4-l10.json?v=474832c764830e8f",
  "u4-l11": "/data/lessons/th-pattachote/u4-l11.json?v=a05d2d6515b3378c",
  "u4-l12": "/data/lessons/th-pattachote/u4-l12.json?v=b41a3bb00ae08d63"
};
/* </auto:lesson-urls> */
