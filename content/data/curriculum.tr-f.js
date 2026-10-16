/* data/curriculum.tr-f.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-course.js + data/courses/tr.js (families.f) + bố cục bàn phím 205
   (Turkish F). Sửa lời dạy ở data/courses/tr.js, sửa kho từ ở data/words/tr.js,
   rồi chạy lại:  node scripts/build-course.js --lang tr --course tr-f

   Thứ tự dạy phím KHÔNG viết tay: nó suy từ ô phím vật lý của chính bố cục này, nên bài 4 dạy
   đúng hai phím mà bàn phím này đặt ở vị trí út hàng cơ sở, bất kể chúng là chữ gì.
*/
window.TypingEaseCurriculum = {
  lang: 'tr',
  // Ma khoa: thu muc data/lessons/<course>/ ma player tai bai tu do.
  course: 'tr-f',
  // Bo cuc ma khoa nay duoc SINH RA tu, va vi the la bo cuc phai hien tren man hinh.
  // keyboard/preferences.js doc no khi nguoi hoc chua tu chon ban phim nao.
  keyboardId: 205,
  // Ca ho: moi bo cuc ra dung cung chuoi phim nay. Ban phim da luu nam ngoai danh sach thi
  // khong duoc hien o day — no se ve mot ban phim ma bai hoc khong day.
  layouts: [205],
  progressKey: 'typingease-progress-tr-f-v1',
  badgesKey: 'typingease-badges-tr-f-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: "Temel sıra",
      summary: "Parmaklarının altında sekiz tuş, sonra Ü T, Ğ N ve I R — aşağı bakmadan gerçek Türkçe kelimeler yazmaya yeter.",
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
      summary: "Üst sıra, alt sıra, nokta ve büyük harfler — Türk alfabesinin tamamı, artı Shift ve Enter.",
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
      title: "Sayılar, işaretler ve hız",
      summary: "Sayı sırası, sağ kenardaki virgül ve işaretler, sonra uzun paragraflar sabit bir ritimle.",
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
    'u1-l01': { title: "A ve K, bir de boşluk tuşu", newKeys: ["a","k"," "], screens: 13, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l02': { title: "E ve M", newKeys: ["e","m"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l03': { title: "İ ve L", newKeys: ["i","l"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l04': { title: "U ve Y", newKeys: ["u","y"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l05': { title: "Tekrar", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u1-l06': { title: "Ü ve T", newKeys: ["ü","t"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l07': { title: "Ğ ve N", newKeys: ["ğ","n"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l08': { title: "I ve R", newKeys: ["ı","r"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u1-l09': { title: "Zayıf tuşlar", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u1-l10': { title: "1. ünite testi", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u2-l01': { title: "O ve D", newKeys: ["o","d"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l02': { title: "H ve G", newKeys: ["h","g"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l03': { title: "V ve Z", newKeys: ["v","z"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l04': { title: "S ve C", newKeys: ["s","c"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l05': { title: "Tekrar", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u2-l06': { title: "F ve P", newKeys: ["f","p"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l07': { title: "Ç ve Ö", newKeys: ["ç","ö"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l08': { title: "J, nokta, B ve Ş", newKeys: ["j",".","b","ş"], screens: 15, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l09': { title: "Shift ve Enter", newKeys: ["shift","enter"], screens: 9, estMinutes: 5, kind: 'keys', ready: true },
    'u2-l10': { title: "Zayıf tuşlar", newKeys: [], screens: 1, estMinutes: 2, kind: 'weak', seconds: 120, ready: true },
    'u2-l11': { title: "2. ünite testi", newKeys: [], screens: 1, estMinutes: 1, kind: 'test', seconds: 60, ready: true },
    'u3-l01': { title: "Sayı sırası", newKeys: ["1","2","3","4","5","6","7","8","9","0"], screens: 11, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l02': { title: "Dış sütun", newKeys: [",","/","-","q","w","x"], screens: 9, estMinutes: 6, kind: 'keys', ready: true },
    'u3-l03': { title: "Hepsi bir arada", newKeys: [], screens: 8, estMinutes: 5, kind: 'review', ready: true },
    'u3-l04': { title: "Metin ve ritim 1", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l05': { title: "Metin ve ritim 2", newKeys: [], screens: 7, estMinutes: 6, kind: 'review', ready: true },
    'u3-l06': { title: "3. ünite testi", newKeys: [], screens: 1, estMinutes: 3, kind: 'test', seconds: 180, ready: true },
    'u4-l01': { title: "Yeni tuşlar: +, yıldız, ! ve \"", newKeys: ["+","*","!","\""], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l02': { title: "Yeni tuşlar: $, %, & ve kesme işareti", newKeys: ["$","%","&","'"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l03': { title: "Yeni tuşlar: (, ), = ve ?", newKeys: ["(",")","=","?"], screens: 11, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l04': { title: "Yeni tuşlar: _", newKeys: ["_"], screens: 5, estMinutes: 5, kind: 'keys', ready: true },
    'u4-l05': { title: "Yeni tuşlar: <, >, iki nokta üst üste ve noktalı virgül", newKeys: ["<",">",":",";"], screens: 10, estMinutes: 5, kind: 'keys', ready: true },
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
    content: "a a aa\naaaa\naaaaaa aaaaaa",
    hint: "İşaret parmaklarını kabartmalı iki tuşa koy ve klavyeye bakmadan gördüğünü yaz."
  }
};

/* <auto:lesson-urls> — SINH TỰ ĐỘNG bởi scripts/stamp-data.mjs, ĐỪNG SỬA TAY */
window.TypingEaseCurriculum.lessonUrls = {
  "u1-l01": "/data/lessons/tr-f/u1-l01.json?v=fd43188f9657e3ea",
  "u1-l02": "/data/lessons/tr-f/u1-l02.json?v=aa1213e183facea5",
  "u1-l03": "/data/lessons/tr-f/u1-l03.json?v=9a1163f2e0268ae9",
  "u1-l04": "/data/lessons/tr-f/u1-l04.json?v=14502b310d9f2e61",
  "u1-l05": "/data/lessons/tr-f/u1-l05.json?v=817f1f6db73de4f3",
  "u1-l06": "/data/lessons/tr-f/u1-l06.json?v=b187a46b261dd594",
  "u1-l07": "/data/lessons/tr-f/u1-l07.json?v=948b47a509d3bfc0",
  "u1-l08": "/data/lessons/tr-f/u1-l08.json?v=ce84c73cb0dde7cb",
  "u1-l09": "/data/lessons/tr-f/u1-l09.json?v=2e10c50d0cfd8040",
  "u1-l10": "/data/lessons/tr-f/u1-l10.json?v=60fe2193c81033fc",
  "u2-l01": "/data/lessons/tr-f/u2-l01.json?v=9711168cf01dbbb1",
  "u2-l02": "/data/lessons/tr-f/u2-l02.json?v=0aa818ba04996c90",
  "u2-l03": "/data/lessons/tr-f/u2-l03.json?v=a0fd99391601ea4a",
  "u2-l04": "/data/lessons/tr-f/u2-l04.json?v=7ad0b11dbe755db2",
  "u2-l05": "/data/lessons/tr-f/u2-l05.json?v=6b83a1433b6fb915",
  "u2-l06": "/data/lessons/tr-f/u2-l06.json?v=29a5094673134199",
  "u2-l07": "/data/lessons/tr-f/u2-l07.json?v=8e328e8b0fa7a28e",
  "u2-l08": "/data/lessons/tr-f/u2-l08.json?v=84c47c7e6b7a5a1f",
  "u2-l09": "/data/lessons/tr-f/u2-l09.json?v=32700362f6ecc764",
  "u2-l10": "/data/lessons/tr-f/u2-l10.json?v=bce57da7befbd167",
  "u2-l11": "/data/lessons/tr-f/u2-l11.json?v=d035cd60e8b54e18",
  "u3-l01": "/data/lessons/tr-f/u3-l01.json?v=1a638112fc9bc247",
  "u3-l02": "/data/lessons/tr-f/u3-l02.json?v=e6c124c87f98c07c",
  "u3-l03": "/data/lessons/tr-f/u3-l03.json?v=c877987bdba0932a",
  "u3-l04": "/data/lessons/tr-f/u3-l04.json?v=dbd417cc8bf6d580",
  "u3-l05": "/data/lessons/tr-f/u3-l05.json?v=8a22c1c9f4c038fa",
  "u3-l06": "/data/lessons/tr-f/u3-l06.json?v=f696bb27bb120ffb",
  "u4-l01": "/data/lessons/tr-f/u4-l01.json?v=767fdef7437f92a6",
  "u4-l02": "/data/lessons/tr-f/u4-l02.json?v=4c69bf9239067443",
  "u4-l03": "/data/lessons/tr-f/u4-l03.json?v=eb754bc75c7c7249",
  "u4-l04": "/data/lessons/tr-f/u4-l04.json?v=b79cb3f770a34dbe",
  "u4-l05": "/data/lessons/tr-f/u4-l05.json?v=6297183a8184c5c8",
  "u4-l06": "/data/lessons/tr-f/u4-l06.json?v=55b680121f0e9e3e",
  "u4-l07": "/data/lessons/tr-f/u4-l07.json?v=3adb1556a188836f"
};
/* </auto:lesson-urls> */
