/* tro-choi/text/zh-tw.mjs — 中文（注音）打字遊戲頁 (scripts/build-game-pages.mjs). Kho từ là
 * data/words/zh-tw.js: chuỗi ký hiệu chú âm đúng như gõ vào bộ gõ (thanh 1 không dấu). Gõ THEO VỊ TRÍ
 * PHÍM như khoá học: bộ gõ ở chế độ tiếng Anh, games.js đổi event.code thành ký hiệu của bố cục 215.
 * Điện thoại không gửi mã phím vật lý, nên cả ba trò đều cần bàn phím thật. Không có trang kiểm tra
 * tốc độ tiếng Trung phồn thể, nên {test} rơi về trang khoá học. */
export default {
  live: false,
  typeByPosition: true,
  slug: 'dazi-youxi',
  title: '免費注音打字遊戲：十指盲打練習 | TypingEase',
  description: '三個免費注音打字遊戲：單字雨、追影賽跑和找鍵。在瀏覽器裡用標準注音鍵盤練十指盲打，不用註冊，最好成績只存在這台裝置上。',
  breadcrumbAria: '導覽路徑',
  homeCrumb: '首頁',
  crumb: '打字遊戲',
  eyebrow: '像玩遊戲一樣練打字',
  h1: '注音打字遊戲',
  intro: '三個可以在課與課之間玩的小遊戲：打掉落下來的注音，和你自己選的速度賽跑，在螢幕鍵盤上找鍵。最好成績只儲存在這台裝置上。',
  tabsAria: '選擇遊戲',
  locale: 'zh-TW',
  howAria: '玩法',
  how: {
    rain: ['注音從上面落下來。', '把它一個符號不差地打出來。', '按空白鍵消掉它。漏掉三個就結束。'],
    race: ['幫領跑車選一個速度。', '從第一個符號開始打這段文字。', '比領跑車先到終點就贏了。'],
    keys: ['鍵盤上有一個鍵會亮起來。', '眼睛看螢幕，按下那個鍵。', '60 秒內按對越多越好。']
  },
  modes: {
    rain: ['單字雨', '打出正在落下的注音，按空白鍵消掉它。'],
    race: ['追影賽跑', '在領跑車之前打完這段文字。'],
    keys: ['找鍵', '按亮起來的鍵，60 秒內按對越多越好。']
  },
  rain: {
    difficulty: '難度', easy: '簡單', normal: '普通', hard: '困難',
    score: '得分', level: '關卡', lives: '生命', best: '最好',
    start: '開始', placeholder: '打出落下的注音，再按空白鍵',
    hint: '請把注音輸入法切到英文模式（按一下 Shift），頁面會把每個鍵換成它的注音符號。一聲不標，打完符號直接按空白鍵。讓三個詞落到底部，遊戲就結束。'
  },
  race: {
    pace: '領跑車', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: '開始賽跑', you: '你', ghost: '領跑', placeholder: '從第一個符號開始，打上面這段文字'
  },
  keys: {
    start: '開始找鍵', time: '秒', hits: '按對', streak: '連擊', best: '最好',
    hint: '眼睛看螢幕，不看手。按鍵依位置辨識，所以輸入法是什麼模式都可以。'
  },
  runtime: {
    over: '遊戲結束', again: '再玩一次', newBest: '這台裝置上的新紀錄！',
    rainResult: '{score} 分 · 消掉 {words} 個詞 · {wpm} WPM · 命中率 {accuracy}%',
    raceReady: '領跑車的速度是 {wpm} WPM。按「開始賽跑」，再打第一個符號出發。',
    raceGo: '出發！', raceWin: '你先到終點！', raceLose: '這次領跑車贏了。',
    racePaused: '已停止。按「開始賽跑」重新開始。',
    raceResult: '{seconds} 秒 · {wpm} WPM · 準確率 {accuracy}% · 領跑車 {ghost} WPM',
    paceBest: '你的最好成績（{wpm} WPM）',
    keysResult: '按對 {hits} 次 · 最長連擊 {streak} · 準確率 {accuracy}%'
  },
  sections: [
    { h2: '三個遊戲，一項本領', html: '<p>每個遊戲練盲打的一部分。<b>找鍵</b>練每個鍵的位置：亮起來的鍵告訴你哪根手指要動，不用低頭看。<b>單字雨</b>練在時間壓力下把整個詞的注音打出來。<b>追影賽跑</b>練整段文字的穩定節奏，對手是一輛依你選的速度前進的領跑車。</p>' },
    { h2: '用標準注音鍵盤', html: '<p>找鍵裡的螢幕鍵盤就是課程用的標準注音鍵盤，按鍵依實際位置辨識，而不是依系統打出的字元。單字雨和追影賽跑用的是和<a class="inline-link" href="{course}">{lessons} 課的課程</a>同一批詞，寫法和你在注音輸入法裡打的一樣：例如 你好 是 ㄋㄧˇㄏㄠˇ，聲調符號在數字列上。</p>' },
    { h2: '怎樣玩才有收穫', html: '<ul><li>學完一課後玩一下，五到十分鐘就夠了。</li><li>選一個大部分詞都能打對的難度，常常漏掉就降一級。</li><li>在追影賽跑裡，把領跑車設得比你的真實速度稍慢一點，再慢慢調高。</li><li>想認真測一次速度，請做<a class="inline-link" href="{test}">課程</a>裡的限時測驗，而不是看遊戲成績。</li></ul>' }
  ],
  faqTitle: '常見問題',
  faq: [
    ['可以和別人一起玩嗎？', '暫時不行。追影賽跑的對手是一輛保持你所選速度的領跑車，或者是你自己的最好成績。沒有其他玩家，也沒有排行榜。'],
    ['最好成績儲存在哪裡？', '只儲存在這台裝置的這個瀏覽器裡。不需要帳號，也不會傳送到任何地方。'],
    ['可以在手機上玩嗎？', '不太行。頁面是依實體鍵盤上每個鍵的位置換成注音符號，手機的螢幕鍵盤不會提供這個資訊，所以三個遊戲都需要實體鍵盤。'],
    ['為什麼打對了詞卻沒有消掉？', '按空白鍵之前必須完全一致。如果注音輸入法開著，它會把按鍵變成國字，頁面就看不到你按了哪個鍵：請按一下 Shift 切到英文模式。也檢查一下聲調符號有沒有打對。']
  ],
  cta: { eyebrow: '想玩得更好？', title: '學會盲打', text: '{lessons} 課，在標準注音鍵盤上練習，從基準列開始。', button: '查看課程' }
};
