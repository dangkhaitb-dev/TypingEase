/* data/curriculum.ms-119-taster.js — SINH TỰ ĐỘNG, ĐỪNG SỬA TAY.
   Nguồn: scripts/build-tasters.js + bố cục bàn phím 119 (Malay (Jawi)).
   Bài nếm thử "hàng cơ sở" cho Malay: một bài, không cần kho từ. Chạy lại:
   node scripts/build-tasters.js
*/
window.TypingEaseCurriculum = {
  lang: 'ms',
  course: 'ms-119-taster',
  keyboardId: 119,
  layouts: [119],
  progressKey: 'typingease-progress-ms-119-taster-v1',
  badgesKey: 'typingease-badges-ms-119-taster-v1',
  features: [],

  units: [
    {
      id: 'u1',
      index: 1,
      title: 'The home row',
      summary: "The eight keys under your fingers on Malay (Jawi), and the space bar.",
      minAccuracy: 70,
      locked: false,
      unlockAfter: null,
      groups: [
        { id: 'start', title: 'Start here', lessons: ['u1-l01'] }
      ]
    }
  ],

  lessons: {
    'u1-l01': { title: "The home row", newKeys: ["ب","ت","ي","ن","س","م","ش","ک"," "], screens: 25, estMinutes: 5, kind: 'keys', ready: true }
  },

  sequence: [
    'u1-l01'
  ],

  starter: {
    lessonId: 'u1-l01',
    screen: 2,
    content: "ب ب بب\nببب\nبببببب بببببب",
    hint: 'Rest your index fingers on the two keys with bumps and type what you see, without looking at the keyboard.'
  }
};
