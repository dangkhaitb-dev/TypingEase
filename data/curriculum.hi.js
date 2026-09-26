/* data/curriculum.hi.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/hi.js + bố cục bàn phím 106
   (Hindi (InScript)). Sửa lời dạy ở data/courses/hi.js, sửa kho từ ở data/words/hi.js,
   rồi chạy lại:  node scripts/build-course.js --lang hi

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'hi',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'hi',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 106,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [106],
  progressKey: 'typingease-progress-hi-v1',
  badgesKey: 'typingease-badges-hi-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "बीच की पंक्ति",
      summary: "उँगलियों के नीचे की आठ कुंजियाँ, फिर ु प, ा ग और ी ह — इतना कि बिना नीचे देखे असली हिंदी शब्द लिखे जा सकें।",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "यहाँ से शुरू करें", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "उँगलियों को फैलाना", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "यूनिट पूरी करें", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "बाकी अक्षर",
      summary: "ऊपर की पंक्ति, नीचे की पंक्ति, विराम चिह्न और शिफ़्ट की दूसरी परत — स्वर, महाप्राण व्यंजन और एंटर समेत।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "यहाँ से शुरू करें", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "उँगलियों को फैलाना", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "यूनिट पूरी करें", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "अंक, किनारा और गति",
      summary: "देवनागरी अंक, दाएँ किनारे के य ड ृ और नुक्ता, फिर लंबे अनुच्छेद एक जैसी लय में।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "अंक और किनारा", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "गति", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "बाकी सभी कुंजियाँ",
      summary: "इस कीबोर्ड के वे 25 अक्षर और चिह्न जिन्हें कोर्स ने अब तक इस्तेमाल नहीं किया, हर एक उसी जगह जहाँ वह सचमुच आता है।",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "बची हुई कुंजियाँ", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06', 'u4-l07'] },
        { id: 'finish', title: "यूनिट पूरी करें", lessons: ['u4-l08', 'u4-l09'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ि और र, साथ में स्पेस बार", newKeys: ["ि","र"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "हलंत और क", newKeys: ["्","क"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "े और त", newKeys: ["े","त"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ो और च", newKeys: ["ो","च"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "दोहराई", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "ु और प", newKeys: ["ु","प"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "ा और ग", newKeys: ["ा","ग"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ी और ह", newKeys: ["ी","ह"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "कमज़ोर कुंजियाँ", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "यूनिट 1 की परीक्षा", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ू और ब", newKeys: ["ू","ब"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "द और ै", newKeys: ["द","ै"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "म और ल", newKeys: ["म","ल"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "स और न", newKeys: ["स","न"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "दोहराई", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ौ और ज", newKeys: ["ौ","ज"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "व और अनुस्वार", newKeys: ["व","ं"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ॆ, बिंदु, अल्पविराम और ट", newKeys: ["ॆ",".",",","ट"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "शिफ़्ट और एंटर", newKeys: ["shift","enter","अ","आ","इ","ई","उ","ऊ","ए","ऐ","ओ","औ","ख","घ","छ","झ","ठ","थ","ध","फ","भ","श","ष","ण","ँ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "कमज़ोर कुंजियाँ", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "यूनिट 2 की परीक्षा", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "देवनागरी अंक", newKeys: ["१","२","३","४","५","६","७","८","९","०"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "दाईं ओर का कॉलम", newKeys: ["य","-","ृ","ड","़","ॉ"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "अक्षर, अंक और चिह्न", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "पाठ और लय 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "पाठ और लय 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "यूनिट 3 की परीक्षा", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "◌ॊ, ऒ, ऍ और ◌ॅ", newKeys: ["ॊ","ऒ","ऍ","ॅ"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, % और ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, ( और )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "◌ः और ऋ", newKeys: ["ः","ऋ"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "ऎ, ऩ और ऴ", newKeys: ["ऎ","ऩ","ऴ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "ङ, ढ, ञ और ऑ", newKeys: ["ङ","ढ","ञ","ऑ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "ऱ, ळ, पूर्ण विराम और य़", newKeys: ["ऱ","ळ","।","य़"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l08': { title: "सारे चिह्न एक साथ", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l09': { title: "यूनिट 4 की परीक्षा", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "ि ि िि\nिििि\nिििििि िििििि",
    hint: "दोनों तर्जनियाँ उभार वाली कुंजियों पर रखें और जो दिख रहा है उसे कीबोर्ड देखे बिना लिखें।"
  }
};
