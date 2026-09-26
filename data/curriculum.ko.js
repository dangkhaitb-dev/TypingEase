/* data/curriculum.ko.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/ko.js + bố cục bàn phím 214
   (Korean (2-set / 두벌식, 104-key compatible)). Sửa lời dạy ở data/courses/ko.js, sửa kho từ ở data/words/ko.js,
   rồi chạy lại:  node scripts/build-course.js --lang ko

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'ko',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'ko',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 214,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [214],
  progressKey: 'typingease-progress-ko-v1',
  badgesKey: 'typingease-badges-ko-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "기본 자리",
      summary: "손가락 여덟 개 아래의 키, 그다음 ㅎ ㅗ, ㄷ ㅑ, ㄱ ㅕ — 아래를 보지 않고 한국어 낱말을 칠 수 있을 만큼이에요.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "여기서 시작", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "손가락 뻗기", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "단원 마무리", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "나머지 자모",
      summary: "윗줄, 아랫줄, 문장 부호, 그리고 Shift로 치는 된소리 — 모든 자모와 Shift, Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "여기서 시작", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "손가락 뻗기", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "단원 마무리", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "숫자, 기호, 속도",
      summary: "숫자 줄, 오른쪽 끝의 기호, 그리고 같은 박자로 치는 긴 문단.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "숫자와 기호", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "속도", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "나머지 모든 키",
      summary: "이 자판에서 아직 쓰지 않은 22개의 기호를, 실제로 쓰이는 자리에서 하나씩 익혀요.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "남은 키", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05', 'u4-l06'] },
        { id: 'finish', title: "단원 마무리", lessons: ['u4-l07', 'u4-l08'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "ㄹ, ㅓ, 그리고 스페이스 바", newKeys: ["ㄹ","ㅓ"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "ㅇ, ㅏ", newKeys: ["ㅇ","ㅏ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "ㄴ, ㅣ", newKeys: ["ㄴ","ㅣ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "ㅁ, 쌍반점", newKeys: ["ㅁ",";"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "복습", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "ㅎ, ㅗ", newKeys: ["ㅎ","ㅗ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "ㄷ, ㅑ", newKeys: ["ㄷ","ㅑ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "ㄱ, ㅕ", newKeys: ["ㄱ","ㅕ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "약한 키", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "1단원 시험", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "ㅅ, ㅛ", newKeys: ["ㅅ","ㅛ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "ㅐ, ㅈ", newKeys: ["ㅐ","ㅈ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "ㅊ, ㅜ", newKeys: ["ㅊ","ㅜ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "ㅡ, ㅍ", newKeys: ["ㅡ","ㅍ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "복습", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "ㅂ, ㅔ", newKeys: ["ㅂ","ㅔ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "ㅠ, ㅌ", newKeys: ["ㅠ","ㅌ"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "ㅋ, 마침표, 쉼표, 작은따옴표", newKeys: ["ㅋ",".",",","'"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift와 Enter", newKeys: ["shift","enter","ㄸ","ㄲ","ㅆ","ㅒ","ㅉ","ㅃ","ㅖ"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "약한 키", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "2단원 시험", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "숫자 줄", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "오른쪽 끝 줄", newKeys: ["/","-","=","[","]","\\"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "주소, 링크, 숫자", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "글과 박자 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "글과 박자 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "3단원 시험", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "`, ~, !, @", newKeys: ["`","~","!","@"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "#, $, %, ^", newKeys: ["#","$","%","^"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "&, *, (, )", newKeys: ["&","*","(",")"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "_, +", newKeys: ["_","+"], screens: 7, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "{, }, |, 쌍점", newKeys: ["{","}","|",":"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "\", <, >, ?", newKeys: ["\"","<",">","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l07': { title: "모든 기호 함께", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l08': { title: "4단원 시험", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    'u4-l08'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ㄹ ㄹ ㄹㄹ\nㄹㄹㄹㄹ\nㄹㄹㄹㄹㄹㄹ ㄹㄹㄹㄹㄹㄹ",
    hint: "두 검지를 돌기가 있는 키에 올리고, 자판을 보지 말고 보이는 대로 쳐 보세요. 두벌식 한국어 입력기가 켜져 있어야 해요."
  }
};
