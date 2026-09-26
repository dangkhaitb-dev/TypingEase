/* data/curriculum.tr.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/tr.js + bố cục bàn phím 204
   (Turkish Q). Sửa lời dạy ở data/courses/tr.js, sửa kho từ ở data/words/tr.js,
   rồi chạy lại:  node scripts/build-course.js --lang tr

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'tr',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'tr',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 204,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [204],
  progressKey: 'typingease-progress-tr-v1',
  badgesKey: 'typingease-badges-tr-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Temel sıra",
      summary: "Parmaklarının altında sekiz tuş, sonra G H, E I ve R U — aşağı bakmadan gerçek Türkçe kelimeler yazmaya yeter.",
      minAccuracy: 80,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: "Buradan başla", lessons: ['u1-l01', 'u1-l02', 'u1-l03', 'u1-l04', 'u1-l05'] },
        { id: 'reach', title: "Parmakları uzat", lessons: ['u1-l06', 'u1-l07', 'u1-l08'] },
        { id: 'finish', title: "Üniteyi bitir", lessons: ['u1-l09', 'u1-l10'] }
      ]
    },
    {
      id: 'u2',
      index: 2,
      title: "Alfabenin geri kalanı",
      summary: "Üst sıra, alt sıra, Ç, Ö, İ ve büyük harfler — Ğ ve Ü dışında bütün alfabe, artı Shift ve Enter.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u1-l10',
      groups: [
        { id: 'start', title: "Buradan başla", lessons: ['u2-l01', 'u2-l02', 'u2-l03', 'u2-l04', 'u2-l05'] },
        { id: 'reach', title: "Parmakları uzat", lessons: ['u2-l06', 'u2-l07', 'u2-l08', 'u2-l09'] },
        { id: 'finish', title: "Üniteyi bitir", lessons: ['u2-l10', 'u2-l11'] }
      ]
    },
    {
      id: 'u3',
      index: 3,
      title: "Sayılar, Ğ, Ü ve hız",
      summary: "Sayı sırası, sağ kenardaki Ğ, Ü, nokta ve virgül, sonra uzun paragraflar sabit bir ritimle.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u2-l11',
      groups: [
        { id: 'numbers-symbols', title: "Sayılar ve işaretler", lessons: ['u3-l01', 'u3-l02', 'u3-l03'] },
        { id: 'speed', title: "Hız", lessons: ['u3-l04', 'u3-l05', 'u3-l06'] }
      ]
    },
    {
      id: 'u4',
      index: 4,
      title: "Kalan bütün tuşlar",
      summary: "Bu klavyede kursun henüz kullanmadığı 17 karakter, her biri gerçekten kullanıldığı yerde.",
      minAccuracy: 80,
      locked: true,
      unlockAfter: 'u3-l06',
      groups: [
        { id: 'symbols', title: "Kalan tuşlar", lessons: ['u4-l01', 'u4-l02', 'u4-l03', 'u4-l04', 'u4-l05'] },
        { id: 'finish', title: "Üniteyi bitir", lessons: ['u4-l06', 'u4-l07'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "F ve J, bir de boşluk tuşu", newKeys: ["f","j"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "D ve K", newKeys: ["d","k"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "S ve L", newKeys: ["s","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "A ve Ş", newKeys: ["a","ş"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Tekrar", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "G ve H", newKeys: ["g","h"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "E ve I", newKeys: ["e","ı"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "R ve U", newKeys: ["r","u"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Zayıf tuşlar", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "1. ünite testi", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "T ve Y", newKeys: ["t","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "O ve W", newKeys: ["o","w"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "C ve N", newKeys: ["c","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "M ve V", newKeys: ["m","v"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Tekrar", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "Q ve P", newKeys: ["q","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "B ve X", newKeys: ["b","x"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "Z, Ç, Ö ve İ", newKeys: ["z","ç","ö","i"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift ve Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Zayıf tuşlar", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "2. ünite testi", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Sayı sırası", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Dış sütun", newKeys: [".","*","-","ğ","ü",","], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Hepsi bir arada", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Metin ve ritim 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Metin ve ritim 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "3. ünite testi", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "Yeni tuşlar: \", É, ! ve kesme işareti", newKeys: ["\"","é","!","'"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "Yeni tuşlar: +, %, & ve eğik çizgi", newKeys: ["+","%","&","/"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "Yeni tuşlar: (, ), = ve ?", newKeys: ["(",")","=","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "Yeni tuşlar: _", newKeys: ["_"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Yeni tuşlar: <, >, noktalı virgül ve iki nokta üst üste", newKeys: ["<",">",";",":"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l06': { title: "Bütün işaretler bir arada", newKeys: [], screens: 6, estMinutes: 5, kind: 'review', ready: true },
    'u4-l07': { title: "4. ünite testi", newKeys: [], screens: 1, estMinutes: 2, kind: 'test', seconds: 120, ready: true }
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
    content: "f f ff\nffff\nffffff ffffff",
    hint: "İşaret parmaklarını kabartmalı iki tuşa koy ve klavyeye bakmadan gördüğünü yaz."
  }
};
