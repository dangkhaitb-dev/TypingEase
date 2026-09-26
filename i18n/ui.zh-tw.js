/* i18n/ui.zh-tw.js — lớp tiếng Trung phồn thể (Đài Loan).
 *
 * Nạp bởi mọi trang dưới /zh-tw/, bằng <script src="/i18n/ui.zh-tw.js"></script> đặt TRƯỚC mọi
 * script khác trên trang. Cùng hình dạng với i18n/ui.es.js — xem chú thích ở đó. Khoá thiếu ở đây
 * thì hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC với bảng nó ghi đè.
 *
 * Đừng thêm `defer` cho thẻ script của file này: keyboard/preferences.js (ES module) đọc
 * `globalThis.TypingEaseUI` và cần nó có sẵn.
 *
 * Giao diện bằng chữ Hán phồn thể, từ ngữ Đài Loan (鍵盤, 課程, 單元, 螢幕, 列 = hàng ngang); thứ người
 * học GÕ là ký hiệu chú âm (xem data/words/zh-tw.js). `player.positionNote` là khoá riêng của khoá
 * gõ theo vị trí phím: player.js hiện nó khi phát hiện bộ gõ Chú âm đang bật.
 */
window.TypingEaseUI = {
  lang: 'zh-tw',

  /* Tuyệt đối, vì /zh-tw/xuexi/ nằm sâu hai cấp. */
  routes: {
    home: '/zh-tw/',
    lessons: '/zh-tw/kecheng/',
    learn: '/zh-tw/xuexi/',
    // Chưa có các trang này bằng tiếng Trung phồn thể. `null` là tín hiệu BỎ liên kết.
    test: '/zh-tw/dazi-ceyan/',
    progress: '/zh-tw/jindu/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /zh-tw/ */
  home: {
    nav: ['練習', '課程'],
    roadmapKicker: '{total} 課 · {units} 個單元',
    roadmapAll: '查看全部 {total} 課 →',
    unitTitle: '第 {index} 單元 · {title}',
    unitDone: '{done}/{total} 課 ✓',
    railDone: '✓',
    railSoon: '即將推出',
    railNote: '下一個單元正在編寫中，還沒開放的課程顯示為灰色。',
    teaser: '第 {index} 單元 · {title}（{count} 課）',
    teaserLocked: '🔒',
    shortcutsTitle: '其他練習',
    shortcuts: [
      ['打字速度測驗', '測一測你每分鐘打多少字、準確率多少。'],
      ['弱點鍵', '用你最常打錯的鍵組成的練習。'],
      ['自由練習', '貼上你自己的文字，按自己的方式來打。']
    ],
    continueKicker: '繼續',
    continueName: '第 {n} 課 · {title}',
    continueCount: '第 {unit} 單元 · 第 {screen}/{screens} 頁',
    continueGo: '▶ 繼續（Enter）',
    continueRedo: '↻ 重新練第 {n} 課',
    continueMap: '查看課程',
    streak: '🔥 {days} 天 · 今天 {minutes} 分鐘',
    coachWeak: '注意：<b>{keys}</b> 讓你慢了下來，花一分鐘練練這些鍵？',
    legacy: '你已經完成了舊版課程的 {n} 課，第 1 和第 2 單元已經開放。',
    doneKicker: '保持節奏',
    doneName: '已經寫好的課程你都完成了',
    doneCount: '下一個單元正在準備中。重練一課，別讓節奏跑掉了。',
    doneGo: '▶ 查看課程（Enter）',
    exploreKicker: 'TypingEase 資源',
    footer: '慢一點，你會走得更遠。',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: '認識 TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: '正在載入課程…',
    missingTitle: '這一課還沒有內容',
    missingBody: '沒有從 <code>{path}</code> 載入到任何內容。這一課還在編寫中，稍後再試，或者在課程頁選擇別的課。',
    noCurriculum: '課程索引沒有載入（<code>data/curriculum.zh-tw.js</code>）。',
    fixtureNote: '正在使用 <code>hoc/_fixture/</code> 裡的範例內容，<code>data/lessons/</code> 裡還沒有真正的課程。',
    screenOf: '第 {n} / {total} 頁',
    newKey: '新鍵',
    pressToContinue: '按 <b>{key}</b> 繼續',
    enterToContinue: '按 <b>Enter</b> 繼續',
    found: '就是它。',
    foundBody: '記住 <b>{key}</b> 的位置，現在來練它。',
    accuracyLive: '準確率 {accuracy}%',
    errorsLive: '{count} 個錯誤',
    tokensLive: '{count} 個詞',
    great: '非常好。',
    good: '不錯。',
    pass: '通過。',
    fail: '低於 {min}%，這一頁值得再練一次。',
    resultAccuracy: '準確率 {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} 個錯誤',
    resultTokens: '{count} 個詞正確',
    slowKey: '<b>{key}</b> 是你最慢的鍵（每次 {ms} 秒）。讓手指伸過去，然後馬上回到基準列。',
    keepAccuracy: '把節奏放慢，準確率就會上來，速度隨後就到，從來不是反過來。',
    continueEnter: '繼續 →（Enter）',
    redoScreen: '重練這一頁',
    redoScreenAdvised: '重練這一頁（建議）',
    skipScreen: '跳過',
    lessonDone: '完成',
    learned: '你已經認識 {count} 個鍵：',
    statWpm: '速度',
    statAccuracy: '準確率',
    statTime: '時間',
    statStars: '星星',
    technique: '值得記住',
    weakTitle: '需要再練的鍵',
    weakButton: '練一分鐘',
    unitProgress: '{unit} · {done}/{total} 課',
    nextLesson: '▶ {title}（Enter）',
    finishAll: '▶ 回到首頁（Enter）',
    redoLesson: '↻ 從頭開始這一課',
    home: '首頁',
    noMoreTitle: '已經寫好的部分你都練完了',
    noMoreBody: '下一個單元還在編寫中。在那之前，重練一課：用好的節奏再練一遍，比看起來更有用。',
    notReadyTitle: '這一課還沒有內容',
    notReadyBody: '<b>{title}</b> 在課程裡，但內容還在編寫中。請選擇已經開放的課程。',
    weakPage: '弱點鍵練習',
    badgeNew: '新徽章',
    badgeAll: '查看全部徽章 →',
    shiftFinger: '另一隻手的小指',
    testPage: '打字速度測驗',
    mobileNote: '這門課是為電腦鍵盤設計的：十根手指需要十個真正的按鍵。你可以在手機上試試，但要真正學會，還是回到鍵盤前。',
    mobileNoteClose: '知道了',
    // Khoá gõ theo vị trí phím: hiện khi phát hiện bộ gõ Chú âm đang bật (player.js).
    positionNote: '注音輸入法好像開著。請把它切到英文模式（按一下 Shift），或者切換成英文鍵盤：頁面會自己把每個鍵換成它的注音符號。',
    tapToType: '點一下開始打字',
    menuTitle: '已暫停',
    menuResume: '繼續打字',
    menuRedo: '重練這一頁',
    menuSkip: '跳過這一頁',
    menuExit: '回到首頁',
    clock: '{seconds} 秒',
    lessonNumber: '第 {number} 課',
    pageTitle: '課程 · TypingEase',
    screenTip: '第 {number} 頁 · {type}',
    firstLesson: '回到第一課'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: '左手小指', LR: '左手無名指', LM: '左手中指',
    LI: '左手食指', LT: '左手拇指',
    RT: '右手拇指', RI: '右手食指', RM: '右手中指',
    RR: '右手無名指', RP: '右手小指'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': '左手小指', 'left-ring': '左手無名指',
    'left-middle': '左手中指', 'left-index': '左手食指',
    'left-thumb': '左手拇指', thumb: '拇指',
    'right-index': '右手食指', 'right-middle': '右手中指',
    'right-ring': '右手無名指', 'right-pinky': '右手小指'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: '鍵盤設定',
    showKeyboard: '顯示鍵盤',
    showHands: '顯示雙手',
    rightHandOnly: '只顯示右手',
    leftHandOnly: '只顯示左手',
    animatedHands: '雙手跟著按鍵動',
    letterCase: '鍵帽上的字母',
    uppercase: '大寫',
    lowercase: '小寫',
    boardAria: '螢幕鍵盤', keypadAria: '螢幕數字鍵盤',
    keyboardShape: '鍵盤類型', shapeAuto: '依配置自動選擇', shapeAnsi: '104 鍵（左 Shift 較長）', shapeIso: '105 鍵（左 Shift 旁邊多一個鍵）',
    layout: '鍵盤配置',
    save: '儲存',
    cancel: '取消',
    close: '關閉'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `已完成 ${a}/${b} 課`,
    legacy: n => `你已經完成了舊版課程的 ${n} 課，第 1 和第 2 單元已經開放。`,
    ctaResume: '▶ 繼續', ctaStart: '▶ 開始',
    ctaLesson: (verb, number, title) => `${verb}第 ${number} 課 · ${title} <span>→</span>`,
    ctaAllDone: '已經寫好的部分你都練完了 <span>→</span>',
    rowResume: (screen, total) => `▶ 繼續 · 第 ${screen}/${total} 頁`,
    rowStart: '▶ 開始',
    rowDone: '✓ 已完成',
    unlocked: '已開放',
    unlockAfter: n => `完成第 ${n} 課後開放`,
    unlockNow: '現在就開放這個單元'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `test`: chữ trang kiểm tra tốc độ ghi lúc chạy và các đoạn
     văn để gõ (tới 10 phút). CHÚ ÂM như data/words/zh-tw.js, không dấu câu, gõ theo vị trí phím. */
  test: {
    passage: 'ㄍㄤ ㄎㄞㄕˇ ㄒㄩㄝˊ ㄉㄚˇㄗˋ ㄉㄜ˙ ㄕˊㄏㄡˋ ㄗㄨㄟˋ ㄋㄢˊ ㄉㄜ˙ ㄕˋ ㄑㄧㄢˊ ㄐㄧˇ ㄊㄧㄢ ㄅㄨˋ ㄎㄢˋ ㄐㄧㄢˋㄆㄢˊ ㄉㄚˇㄗˋ ㄕㄡˇㄓˇ ㄔㄤˊㄔㄤˊ ㄢˋ ㄘㄨㄛˋ ㄐㄧㄢˋ ㄙㄨˋㄉㄨˋ ㄧㄝˇ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄇㄢˋ ㄓˇㄧㄠˋ ㄐㄧㄢㄔˊ ㄒㄧㄚˋㄑㄩˋ ㄑㄧㄥˊㄎㄨㄤˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄍㄞˇㄅㄧㄢˋ ㄇㄟˇㄊㄧㄢ ㄌㄧㄢˋㄒㄧˊ ㄕˊ ㄈㄣㄓㄨㄥ ㄅㄧˇ ㄧ ㄍㄜ˙ ㄒㄧㄥㄑㄧˊ ㄌㄧㄢˋ ㄧ ㄘˋ ㄌㄧㄤˇ ㄍㄜ˙ ㄒㄧㄠˇㄕˊ ㄍㄥˋ ㄧㄡˇ ㄒㄧㄠˋㄍㄨㄛˇ ㄒㄧㄢ ㄅㄚˇ ㄓㄨㄣˇㄑㄩㄝˋㄌㄩˋ ㄊㄧˊㄍㄠ ㄙㄨˋㄉㄨˋ ㄗˋㄖㄢˊ ㄏㄨㄟˋ ㄍㄣ ㄕㄤˋㄌㄞˊ',
    passages: [
      'ㄍㄤ ㄎㄞㄕˇ ㄒㄩㄝˊ ㄉㄚˇㄗˋ ㄉㄜ˙ ㄕˊㄏㄡˋ ㄗㄨㄟˋ ㄋㄢˊ ㄉㄜ˙ ㄕˋ ㄑㄧㄢˊ ㄐㄧˇ ㄊㄧㄢ ㄅㄨˋ ㄎㄢˋ ㄐㄧㄢˋㄆㄢˊ ㄉㄚˇㄗˋ ㄕㄡˇㄓˇ ㄔㄤˊㄔㄤˊ ㄢˋ ㄘㄨㄛˋ ㄐㄧㄢˋ ㄙㄨˋㄉㄨˋ ㄧㄝˇ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄇㄢˋ ㄓˇㄧㄠˋ ㄐㄧㄢㄔˊ ㄒㄧㄚˋㄑㄩˋ ㄑㄧㄥˊㄎㄨㄤˋ ㄐㄧㄡˋ ㄏㄨㄟˋ ㄍㄞˇㄅㄧㄢˋ ㄇㄟˇㄊㄧㄢ ㄌㄧㄢˋㄒㄧˊ ㄕˊ ㄈㄣㄓㄨㄥ ㄅㄧˇ ㄧ ㄍㄜ˙ ㄒㄧㄥㄑㄧˊ ㄌㄧㄢˋ ㄧ ㄘˋ ㄌㄧㄤˇ ㄍㄜ˙ ㄒㄧㄠˇㄕˊ ㄍㄥˋ ㄧㄡˇ ㄒㄧㄠˋㄍㄨㄛˇ ㄒㄧㄢ ㄅㄚˇ ㄓㄨㄣˇㄑㄩㄝˋㄌㄩˋ ㄊㄧˊㄍㄠ ㄙㄨˋㄉㄨˋ ㄗˋㄖㄢˊ ㄏㄨㄟˋ ㄍㄣ ㄕㄤˋㄌㄞˊ',
      'ㄗㄠˇㄕㄤˋ ㄊㄧㄢ ㄏㄣˇ ㄑㄧㄥˊ ㄨㄛˇ ㄐㄧㄡˋ ㄇㄟˊㄧㄡˇ ㄉㄞˋ ㄩˇㄙㄢˇ ㄎㄜˇㄕˋ ㄍㄨㄛˋ ㄌㄜ˙ ㄓㄨㄥㄨˇ ㄒㄧㄅㄧㄢ ㄆㄧㄠ ㄌㄞˊ ㄧ ㄉㄚˋ ㄆㄧㄢˋ ㄨㄩㄣˊ ㄈㄥ ㄧㄝˇ ㄅㄧㄢˋ ㄌㄥˇ ㄌㄜ˙ ㄌㄨˋㄕㄤˋ ㄉㄜ˙ ㄒㄧㄥˊㄖㄣˊ ㄧㄡˇㄉㄜ˙ ㄆㄠˇㄐㄧㄣˋ ㄕㄤㄉㄧㄢˋ ㄉㄨㄛˇ ㄩˇ ㄧㄡˇㄉㄜ˙ ㄩㄥˋ ㄅㄠㄅㄠ ㄉㄤˇㄓㄨˋ ㄊㄡˊ ㄩˇ ㄒㄧㄚˋ ㄌㄜ˙ ㄔㄚˋㄅㄨˋㄉㄨㄛ ㄅㄢˋ ㄍㄜ˙ ㄒㄧㄠˇㄕˊ ㄏㄡˋㄌㄞˊ ㄊㄨˊㄖㄢˊ ㄊㄧㄥˊ ㄌㄜ˙ ㄊㄞˋㄧㄤˊ ㄧㄡˋ ㄔㄨㄌㄞˊ ㄌㄜ˙ ㄌㄧㄤˇ ㄉㄨㄥˋ ㄉㄚˋㄌㄡˊ ㄓㄨㄥㄐㄧㄢ ㄔㄨㄒㄧㄢˋ ㄌㄜ˙ ㄧ ㄉㄠˋ ㄉㄢˋㄉㄢˋ ㄉㄜ˙ ㄘㄞˇㄏㄨㄥˊ ㄎㄨㄥㄑㄧˋ ㄌㄧˇ ㄧㄡˇ ㄋㄧˊㄊㄨˇ ㄍㄣ ㄑㄧㄥㄘㄠˇ ㄉㄜ˙ ㄨㄟˋㄉㄠˋ ㄏㄞˊㄗ˙ㄇㄣ˙ ㄗㄞˋ ㄕㄨㄟˇㄎㄥ ㄌㄧˇ ㄘㄞˇ ㄌㄞˊ ㄘㄞˇ ㄑㄩˋ ㄨㄢˊ ㄉㄜ˙ ㄏㄣˇ ㄎㄞㄒㄧㄣ',
      'ㄓㄡㄇㄛˋ ㄗㄠˇㄕㄤˋ ㄐㄧㄚ ㄈㄨˋㄐㄧㄣˋ ㄉㄜ˙ ㄘㄞˋㄕˋㄔㄤˇ ㄗㄨㄥˇㄕˋ ㄏㄣˇ ㄖㄜˋㄋㄠˋ ㄘㄞˋㄊㄢ ㄕㄤˋ ㄉㄨㄟㄇㄢˇ ㄌㄜ˙ ㄅㄞˊㄘㄞˋ ㄌㄨㄛˊㄅㄛ˙ ㄍㄣ ㄘㄨㄥ ㄕㄨㄟˇㄍㄨㄛˇㄊㄢ ㄕㄤˋ ㄅㄞˇ ㄓㄜ˙ ㄆㄧㄥˊㄍㄨㄛˇ ㄍㄣ ㄐㄩˊㄗ˙ ㄇㄞˋ ㄩˊ ㄉㄜ˙ ㄌㄠˇㄅㄢˇ ㄉㄚˋㄕㄥ ㄐㄧㄠˋㄇㄞˋ ㄕㄨㄛ ㄐㄧㄣㄊㄧㄢ ㄉㄜ˙ ㄩˊ ㄊㄜˋㄅㄧㄝˊ ㄒㄧㄣㄒㄧㄢ ㄧ ㄨㄟˋ ㄌㄠˇㄋㄞˇㄋㄞ˙ ㄊㄧㄠ ㄌㄜ˙ ㄏㄣˇ ㄐㄧㄡˇ ㄉㄜ˙ ㄉㄧˋㄍㄨㄚ ㄧㄡˋ ㄍㄣ ㄌㄠˇㄅㄢˇ ㄊㄠˇㄐㄧㄚˋㄏㄨㄢˊㄐㄧㄚˋ ㄗㄨㄟˋㄏㄡˋ ㄌㄠˇㄅㄢˇ ㄒㄧㄠˋ ㄓㄜ˙ ㄉㄨㄛ ㄙㄨㄥˋ ㄊㄚ ㄧ ㄅㄚˇ ㄒㄧㄤㄘㄞˋ ㄅㄠㄗ˙ㄉㄧㄢˋ ㄇㄣˊㄎㄡˇ ㄇㄠˋ ㄓㄜ˙ ㄖㄜˋㄑㄧˋ ㄒㄧㄤㄨㄟˋ ㄆㄧㄠ ㄉㄜ˙ ㄏㄣˇ ㄩㄢˇ ㄘㄞˋㄌㄢˊㄗ˙ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄓㄨㄥˋ ㄒㄧㄣㄑㄧㄥˊ ㄑㄩㄝˋ ㄩㄝˋ ㄌㄞˊ ㄩㄝˋ ㄏㄠˇ',
      'ㄏㄨㄛˇㄔㄜ ㄓㄨㄣˇㄕˊ ㄔㄨㄈㄚ ㄌㄜ˙ ㄔㄨㄤ ㄨㄞˋ ㄕˋ ㄧ ㄆㄧㄢˋ ㄆㄧㄢˋ ㄉㄠˋㄊㄧㄢˊ ㄍㄣ ㄘㄞˋㄩㄢˊ ㄧㄡˇ ㄕˊㄏㄡˋ ㄏㄨㄟˋ ㄐㄧㄥㄍㄨㄛˋ ㄒㄧㄠˇ ㄔㄜㄓㄢˋ ㄍㄣ ㄧ ㄆㄞˊ ㄆㄞˊ ㄞˇ ㄈㄤˊㄗ˙ ㄆㄤˊㄅㄧㄢ ㄉㄜ˙ ㄉㄚˋㄒㄩㄝˊㄕㄥ ㄉㄞˋ ㄓㄜ˙ ㄦˇㄐㄧ ㄎㄢˋ ㄕㄨ ㄑㄧㄢˊㄇㄧㄢˋ ㄉㄜ˙ ㄒㄧㄠˇ ㄋㄢˊㄏㄞˊ ㄅㄚˇ ㄌㄧㄢˇ ㄊㄧㄝ ㄗㄞˋ ㄔㄨㄤㄏㄨˋ ㄕㄤˋ ㄕㄨˇ ㄕㄢ ㄍㄨㄛˋ ㄌㄜ˙ ㄧ ㄍㄜ˙ ㄉㄨㄛ ㄒㄧㄠˇㄕˊ ㄈㄨˊㄨˋㄩㄢˊ ㄊㄨㄟ ㄓㄜ˙ ㄉㄧㄢˇㄒㄧㄣㄔㄜ ㄗㄡˇ ㄍㄨㄛˋㄌㄞˊ ㄨㄛˇ ㄇㄞˇ ㄌㄜ˙ ㄧ ㄅㄟ ㄖㄜˋ ㄎㄚㄈㄟ ㄇㄢˋㄇㄢˋ ㄉㄜ˙ ㄏㄜ ㄌㄧˊ ㄉㄠˋ ㄓㄢˋ ㄏㄞˊ ㄧㄡˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄒㄧㄠˇㄕˊ ㄎㄜˇㄕˋ ㄨㄛˇ ㄧㄉㄧㄢˇ ㄧㄝˇ ㄅㄨˋ ㄐㄩㄝˊㄉㄜ˙ ㄨˊㄌㄧㄠˊ',
      'ㄈㄢㄑㄧㄝˊ ㄔㄠˇ ㄉㄢˋ ㄕˋ ㄧ ㄉㄠˋ ㄐㄧㄢˇㄉㄢ ㄉㄜ˙ ㄐㄧㄚㄔㄤˊㄘㄞˋ ㄒㄧㄢ ㄅㄚˇ ㄌㄧㄤˇ ㄎㄜ ㄈㄢㄑㄧㄝˊ ㄑㄧㄝㄔㄥˊ ㄒㄧㄠˇ ㄎㄨㄞˋ ㄗㄞˋ ㄅㄚˇ ㄙㄢ ㄎㄜ ㄉㄢˋ ㄉㄚˇㄙㄢˋ ㄐㄧㄚ ㄧㄉㄧㄢˇ ㄧㄢˊ ㄍㄨㄛ ㄌㄧˇ ㄉㄠˋ ㄧㄡˊ ㄧㄡˊ ㄖㄜˋ ㄌㄜ˙ ㄧˇㄏㄡˋ ㄅㄚˇ ㄉㄢˋ ㄉㄠˋ ㄐㄧㄣˋㄑㄩˋ ㄔㄠˇ ㄧㄒㄧㄚˋ ㄐㄧㄡˋ ㄒㄧㄢ ㄔㄥˊ ㄑㄧˇㄌㄞˊ ㄖㄢˊㄏㄡˋ ㄈㄤˋ ㄈㄢㄑㄧㄝˊ ㄔㄠˇ ㄉㄠˋ ㄔㄨ ㄓ ㄗㄞˋ ㄅㄚˇ ㄉㄢˋ ㄉㄠˋ ㄏㄨㄟˊㄑㄩˋ ㄐㄧㄚ ㄧㄉㄧㄢˇ ㄊㄤˊ ㄍㄣ ㄧㄢˊ ㄗㄨㄟˋㄏㄡˋ ㄙㄚˇ ㄧㄉㄧㄢˇ ㄘㄨㄥㄏㄨㄚ ㄆㄟˋㄕㄤˋ ㄧ ㄨㄢˇ ㄅㄞˊㄈㄢˋ ㄐㄧㄡˋ ㄕˋ ㄏㄣˇ ㄏㄠˇ ㄉㄜ˙ ㄨㄢˇㄘㄢ',
      'ㄕㄜˋㄑㄩ ㄉㄜ˙ ㄊㄨˊㄕㄨㄍㄨㄢˇ ㄓㄡㄇㄛˋ ㄧㄝˇ ㄎㄞ ㄉㄠˋ ㄨㄢˇㄕㄤˋ ㄌㄧㄡˋ ㄉㄧㄢˇ ㄩㄝˋㄌㄢˇㄕˋ ㄌㄧˇ ㄅㄞˇ ㄓㄜ˙ ㄔㄤˊㄔㄤˊ ㄉㄜ˙ ㄓㄨㄛㄗ˙ ㄒㄩㄝˊㄕㄥㄇㄣ˙ ㄢㄐㄧㄥˋ ㄉㄜ˙ ㄓㄨㄣˇㄅㄟˋ ㄎㄠˇㄕˋ ㄎㄠˋ ㄔㄨㄤ ㄉㄜ˙ ㄨㄟˋㄗ˙ ㄕㄤˋ ㄐㄧˇ ㄨㄟˋ ㄌㄠˇㄖㄣˊ ㄋㄚˊ ㄓㄜ˙ ㄅㄠˋㄓˇ ㄇㄢˋㄇㄢˋ ㄎㄢˋ ㄦˊㄊㄨㄥˊㄑㄩ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄘㄞˇㄙㄜˋ ㄏㄨㄟˋㄅㄣˇ ㄍㄣ ㄖㄨㄢˇㄖㄨㄢˇ ㄉㄜ˙ ㄕㄚㄈㄚ ㄒㄧㄠˇㄆㄥˊㄧㄡˇ ㄆㄚ ㄗㄞˋ ㄕㄤˋㄇㄧㄢˋ ㄈㄢ ㄕㄨ ㄍㄨㄢˇㄩㄢˊ ㄖㄣˋㄉㄜ˙ ㄐㄧㄏㄨ ㄙㄨㄛˇㄧㄡˇ ㄉㄜ˙ ㄌㄠˇ ㄉㄨˊㄓㄜˇ ㄧㄡˇ ㄖㄣˊ ㄅㄨˋ ㄓㄉㄠˋ ㄍㄞ ㄐㄧㄝˋ ㄕㄣˊㄇㄜ˙ ㄕㄨ ㄊㄚ ㄗㄨㄥˇㄕˋ ㄏㄣˇ ㄌㄜˋㄧˋ ㄅㄤㄇㄤˊ ㄊㄨㄟㄐㄧㄢˋ',
      'ㄑㄧㄡㄊㄧㄢ ㄧ ㄉㄠˋ ㄕㄜˋㄑㄩ ㄏㄡˋㄇㄧㄢˋ ㄉㄜ˙ ㄕㄢ ㄐㄧㄡˋ ㄅㄧㄢˋㄔㄥˊ ㄌㄜ˙ ㄏㄨㄥˊㄙㄜˋ ㄍㄣ ㄏㄨㄤˊㄙㄜˋ ㄘㄨㄥˊ ㄕㄢㄐㄧㄠˇ ㄉㄠˋ ㄕㄢㄉㄧㄥˇ ㄉㄚˋㄍㄞˋ ㄧㄠˋ ㄗㄡˇ ㄧ ㄍㄜ˙ ㄉㄨㄛ ㄒㄧㄠˇㄕˊ ㄕㄢㄌㄨˋ ㄅㄨˋ ㄉㄡˇ ㄕㄟˊ ㄉㄡ ㄆㄚˊ ㄉㄜ˙ ㄕㄤˋㄑㄩˋ ㄅㄢˋㄌㄨˋ ㄕㄤˋ ㄧㄡˇ ㄧ ㄎㄡˇ ㄕㄢㄑㄩㄢˊ ㄉㄚˋㄐㄧㄚ ㄉㄡ ㄏㄨㄟˋ ㄗㄞˋ ㄋㄚˋㄌㄧˇ ㄏㄜ ㄎㄡˇ ㄕㄨㄟˇ ㄊㄧㄥˊ ㄒㄧㄚˋㄌㄞˊ ㄔㄨㄢˇ ㄎㄡˇ ㄑㄧˋ ㄐㄧㄠˇㄒㄧㄚˋ ㄉㄜ˙ ㄌㄨㄛˋㄧㄝˋ ㄕㄚㄕㄚ ㄗㄨㄛˋㄒㄧㄤˇ ㄙㄨㄥㄕㄨˇ ㄘㄨㄥˊ ㄕㄨˋㄓ ㄓㄐㄧㄢ ㄏㄣˇ ㄎㄨㄞˋ ㄉㄜ˙ ㄆㄠˇ ㄍㄨㄛˋㄑㄩˋ ㄓㄢˋ ㄗㄞˋ ㄕㄢㄉㄧㄥˇ ㄕㄤˋ ㄩㄢˇㄔㄨˋ ㄉㄜ˙ ㄏㄜˊㄌㄧㄡˊ ㄍㄣ ㄔㄥˊㄕˋ ㄉㄡ ㄎㄢˋ ㄉㄜ˙ ㄑㄧㄥㄑㄧㄥㄔㄨˇㄔㄨˇ ㄒㄧㄚˋ ㄕㄢ ㄉㄜ˙ ㄕˊㄏㄡˋ ㄊㄨㄟˇ ㄧㄡˇ ㄉㄧㄢˇ ㄙㄨㄢ ㄒㄧㄣㄌㄧˇ ㄑㄩㄝˋ ㄑㄧㄥㄙㄨㄥ ㄌㄜ˙ ㄏㄣˇ ㄉㄨㄛ',
      'ㄓㄥˇㄍㄜˋ ㄉㄨㄥㄊㄧㄢ ㄐㄧㄠˇㄊㄚˋㄔㄜ ㄉㄡ ㄈㄤˋ ㄗㄞˋ ㄧㄤˊㄊㄞˊ ㄕㄤˋ ㄔㄨㄣㄊㄧㄢ ㄌㄞˊ ㄌㄜ˙ ㄨㄛˇ ㄅㄚˇ ㄊㄚ ㄊㄨㄟ ㄌㄜ˙ ㄔㄨㄌㄞˊ ㄒㄧㄢ ㄅㄤ ㄌㄨㄣˊㄊㄞ ㄉㄚˇㄑㄧˋ ㄗㄞˋ ㄐㄧㄢˇㄔㄚˊ ㄕㄚㄔㄜ ㄌㄧㄥˊ ㄅㄨˋ ㄌㄧㄥˊ ㄌㄧㄢˋㄗ˙ ㄍㄢ ㄌㄜ˙ ㄑㄧˊ ㄑㄧˇㄌㄞˊ ㄧㄓˊ ㄒㄧㄤˇ ㄙㄨㄛˇㄧˇ ㄉㄧ ㄌㄜ˙ ㄐㄧˇ ㄉㄧ ㄧㄡˊ ㄩㄥˋ ㄕ ㄇㄠˊㄐㄧㄣ ㄘㄚ ㄍㄢㄐㄧㄥˋ ㄏㄨㄟㄔㄣˊ ㄧㄡˋ ㄅㄚˇ ㄗㄨㄛˋㄉㄧㄢˋ ㄊㄧㄠˊ ㄍㄠ ㄌㄜ˙ ㄧㄉㄧㄢˇ ㄑㄧˊ ㄉㄠˋ ㄏㄜˊㄅㄧㄢ ㄉㄜ˙ ㄗˋㄒㄧㄥˊㄔㄜㄉㄠˋ ㄕㄤˋ ㄔㄨㄣㄈㄥ ㄑㄧㄥㄑㄧㄥ ㄉㄜ˙ ㄔㄨㄟ ㄗㄞˋ ㄌㄧㄢˇ ㄕㄤˋ ㄧㄥㄏㄨㄚ ㄏㄞˊ ㄇㄟˊ ㄎㄞ ㄎㄜˇㄕˋ ㄓㄊㄡˊ ㄕㄤˋ ㄧˇㄐㄧㄥ ㄓㄤˇㄇㄢˇ ㄌㄜ˙ ㄏㄨㄚㄅㄠ ㄨㄛˇ ㄉㄚˇㄙㄨㄢˋ ㄒㄧㄚˋ ㄍㄜ˙ ㄓㄡㄇㄛˋ ㄑㄧˊ ㄉㄜ˙ ㄍㄥˋ ㄩㄢˇ ㄧㄒㄧㄝ',
      'ㄕㄜˋㄑㄩ ㄉㄜ˙ ㄍㄨㄥㄅㄨˋㄌㄢˊ ㄊㄧㄝ ㄔㄨ ㄌㄜ˙ ㄧ ㄓㄤ ㄊㄨㄥㄓ ㄓㄜˋㄍㄜ˙ ㄒㄧㄥㄑㄧˊㄌㄧㄡˋ ㄕㄤˋㄨˇ ㄓㄨˋㄏㄨˋㄇㄣ˙ ㄧㄠˋ ㄧㄑㄧˇ ㄓㄥˇㄌㄧˇ ㄧㄡˊㄌㄜˋㄔㄤˇ ㄍㄣ ㄏㄨㄚㄩㄢˊ ㄋㄚˋ ㄊㄧㄢ ㄗㄠˇㄕㄤˋ ㄉㄚˋㄐㄧㄚ ㄧ ㄍㄜ˙ ㄐㄧㄝ ㄧ ㄍㄜ˙ ㄉㄜ˙ ㄌㄞˊ ㄌㄜ˙ ㄧㄡˇ ㄖㄣˊ ㄋㄚˊ ㄓㄜ˙ ㄙㄠˋㄅㄚˇ ㄧㄡˇ ㄖㄣˊ ㄅㄢ ㄌㄞˊ ㄧ ㄒㄧㄤ ㄏㄨㄚㄇㄧㄠˊ ㄏㄞˊㄗ˙ㄇㄣ˙ ㄅㄚˇ ㄉㄧㄠˋ ㄗㄞˋ ㄉㄧˋㄕㄤˋ ㄉㄜ˙ ㄕㄨˋㄧㄝˋ ㄐㄧㄢˇ ㄑㄧˇㄌㄞˊ ㄓㄨㄤ ㄐㄧㄣˋ ㄉㄞˋㄗ˙ ㄉㄚˋㄖㄣˊㄇㄣ˙ ㄅㄤ ㄐㄧㄡˋ ㄧˇㄗ˙ ㄕㄨㄚ ㄕㄤˋ ㄒㄧㄣ ㄑㄧ ㄗㄨㄛˋㄨㄢˊ ㄧˇㄏㄡˋ ㄉㄚˋㄐㄧㄚ ㄧㄑㄧˇ ㄏㄜ ㄌㄜ˙ ㄧㄉㄧㄢˇ ㄧㄣˇㄌㄧㄠˋ ㄘㄨㄥˊ ㄋㄚˋ ㄊㄧㄢ ㄑㄧˇ ㄗㄞˋ ㄉㄧㄢˋㄊㄧ ㄌㄧˇ ㄏㄨˋㄒㄧㄤ ㄉㄚˇ ㄓㄠㄏㄨ ㄉㄜ˙ ㄌㄧㄣˊㄐㄩ ㄇㄧㄥˊㄒㄧㄢˇ ㄉㄨㄛ ㄌㄜ˙',
      'ㄉㄚˇㄗˋ ㄉㄜ˙ ㄕˊㄏㄡˋ ㄗㄨㄟˋㄏㄠˇ ㄅㄨˋㄧㄠˋ ㄎㄢˋ ㄐㄧㄢˋㄆㄢˊ ㄧㄣㄨㄟˋ ㄧㄢˇㄐㄧㄥ ㄗㄞˋ ㄧㄥˊㄇㄨˋ ㄍㄣ ㄐㄧㄢˋㄆㄢˊ ㄓㄐㄧㄢ ㄌㄞˊㄏㄨㄟˊ ㄎㄢˋ ㄇㄟˇ ㄘˋ ㄉㄡ ㄏㄨㄟˋ ㄓㄠˇ ㄅㄨˋ ㄉㄠˋ ㄍㄤㄘㄞˊ ㄉㄨˊ ㄉㄠˋ ㄉㄜ˙ ㄨㄟˋㄓˋ ㄍㄤ ㄎㄞㄕˇ ㄙㄨㄟㄖㄢˊ ㄇㄢˋ ㄧㄒㄧㄝ ㄧㄝˇ ㄧㄠˋ ㄐㄧㄢㄔˊ ㄓˇ ㄎㄢˋ ㄧㄥˊㄇㄨˋ ㄉㄚˇ ㄘㄨㄛˋ ㄌㄜ˙ ㄐㄧㄡˋ ㄩㄥˋ ㄊㄨㄟˋㄍㄜˊㄐㄧㄢˋ ㄕㄢㄉㄧㄠˋ ㄗㄞˋ ㄉㄚˇ ㄧ ㄅㄧㄢˋ ㄕㄥㄉㄧㄠˋ ㄈㄨˊㄏㄠˋ ㄉㄡ ㄗㄞˋ ㄕㄨˋㄗˋㄌㄧㄝˋ ㄕㄤˋ ㄧ ㄕㄥ ㄇㄟˊㄧㄡˇ ㄈㄨˊㄏㄠˋ ㄉㄚˋㄍㄞˋ ㄧ ㄍㄜ˙ ㄩㄝˋ ㄧˇㄏㄡˋ ㄋㄧˇ ㄏㄨㄟˋ ㄈㄚㄒㄧㄢˋ ㄐㄧㄡˋㄙㄨㄢˋ ㄉㄚˇ ㄏㄣˇ ㄔㄤˊ ㄉㄜ˙ ㄨㄣˊㄓㄤ ㄕㄡˇㄓˇ ㄧㄝˇ ㄏㄨㄟˋ ㄗˋㄐㄧˇ ㄓㄠˇㄉㄠˋ ㄐㄧㄢˋㄨㄟˋ'
    ],
    title: '{seconds} 秒打字測試',
    titleMinutes: '{minutes} 分鐘打字測試',
    ready: '準備好了就開始打吧。',
    running: '正在即時計算你的成績。',
    finished: '{seconds} 秒時間到。成績：{wpm} WPM，準確率 {accuracy}%，錯誤 {errors} 個。',
    finishedMinutes: '{minutes} 分鐘時間到。成績：{wpm} WPM，準確率 {accuracy}%，錯誤 {errors} 個。',
    accuracyName: '準確率',
    comparisonSame: '和上次成績一樣。',
    comparisonDelta: '比上次 {delta} WPM',
    progressEmpty: '資料還不夠。多做幾次測試，這裡就會顯示你的進度。',
    progressNone: '還沒有進度資料。',
    metricEmpty: '這個指標還沒有資料。',
    chartEmpty: '沒有可以畫這張圖表的資料。',
    chartLabel: '{metric}隨時間的變化',
    trendEmpty: '資料太少，還算不出趨勢。',
    trendSame: '從這段時間開始到現在沒有變化。',
    trendDelta: '從這段時間開始到現在 {change} {measure}。',
    measureAccuracy: '個百分點（準確率）',
    progressSummary: '最近 {days} 天做了 {count} 次測試。平均 {wpm} WPM，平均準確率 {accuracy}%。',
    dateLocale: 'zh-TW'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy. Cùng hình dạng với ui.en.js. */
  progress: {
    levels: ['起步', '漸入佳境', '穩定', '快速', '熟練'],
    legacy: n => `你已經完成了舊版課程的 ${n} 課，第 1 和第 2 單元已經開放。`,
    unit: index => `第 ${index} 單元`,
    soon: ' · 即將推出',
    // Tiếng Trung không có số nhiều: chỉ đổi 一 / 兩.
    trendHint: n => (n === 1 ? '再練一課，就有足夠的資料畫出趨勢。'
      : `再練${n === 2 ? '兩' : ` ${n} `}課，就有足夠的資料畫出趨勢。`),
    stripLevel: level => `程度：${level}`,
    statWpm: '最近的 WPM',
    statAccuracy: '準確率',
    statSessions: '練習次數',
    target: (wpm, accuracy) => `下一個目標：<b>${wpm}</b> WPM · 準確率 <b>${accuracy}</b>%`,
    adviceStart: '練一課，這個頁面就能知道你現在的程度。',
    actionStart: '開始第 1 課 →',
    adviceWeak: keys => `${keys} 讓你慢了下來，單獨練上一分鐘，效果會很明顯。`,
    actionWeak: keys => `練習 ${keys} →`,
    adviceSteady: '你在穩定前進，每天一課就能保持節奏。',
    actionLesson: (number, title) => `第 ${number} 課 · ${title} →`,
    actionTest: '打字速度測驗 →',
    actionLessons: '查看課程 →',
    heatLegend: '每個鍵的準確率',
    heatStrong: '穩定',
    heatFair: '時對時錯',
    heatWeak: '需要練習',
    badgeDate: at => new Date(at).toLocaleDateString('zh-TW', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} 獲得` : '已獲得'),
    number: value => value.toLocaleString('zh-TW'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} 分鐘`,
    streak: days => `🔥 連續 ${days} 天`,
    bestStreak: days => `最長：${days} 天`,
    today: minutes => `今天 ${minutes} 分鐘`,
    clearConfirm: '要刪除這台裝置上儲存的所有進度和成績嗎？'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: '第一步', hint: '完成你的第一課。' },
    'unit-1': { title: '完成一個單元', hint: '完成一整個單元。' },
    'stars-30': { title: '30 顆星', hint: '在課程中累計獲得 30 顆星星。' },
    'stars-90': { title: '90 顆星', hint: '在課程中累計獲得 90 顆星星。' },
    'streak-3': { title: '連續三天', hint: '連續三天達到每日目標。' },
    'streak-7': { title: '整整一週', hint: '連續七天達到每日目標。' },
    'clean-40': { title: '準確的 40 WPM', hint: '一次練習達到 40 WPM，準確率 95% 以上。' },
    'clean-60': { title: '準確的 60 WPM', hint: '一次練習達到 60 WPM，準確率 95% 以上。' },
    'typed-5000': { title: '5000 次按鍵', hint: '累計按鍵五千次。' }
  }
};
