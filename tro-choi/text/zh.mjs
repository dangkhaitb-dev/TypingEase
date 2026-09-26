/* tro-choi/text/zh.mjs — 中文（拼音）打字游戏页 (scripts/build-game-pages.mjs). Kho từ là
 * data/words/zh.js: pinyin không dấu thanh, viết liền, ü = v — đúng chuỗi phím Latin khoá học chấm.
 * Trang so chữ Latin, nên người học tắt bộ gõ hoặc chuyển nó sang chế độ tiếng Anh. Không có trang
 * kiểm tra tốc độ tiếng Trung, nên {test} rơi về trang khoá học. */
export default {
  live: false,
  slug: 'dazi-youxi',
  title: '免费打字游戏：用拼音练盲打 | TypingEase',
  description: '三个免费打字游戏：单词雨、追影赛跑和找键。在浏览器里用你自己的键盘练拼音盲打，不用注册，最好成绩只保存在本机。',
  breadcrumbAria: '面包屑导航',
  homeCrumb: '主页',
  crumb: '打字游戏',
  eyebrow: '像玩游戏一样练打字',
  h1: '打字游戏',
  intro: '三个可以在课与课之间玩的小游戏：打掉落下来的拼音，和你自己选的速度赛跑，在屏幕键盘上找键。最好成绩只保存在这台设备上。',
  tabsAria: '选择游戏',
  locale: 'zh-CN',
  howAria: '玩法',
  how: {
    rain: ['拼音从上面落下来。', '把它一个字母不差地打出来。', '按空格键消掉它。漏掉三个就结束。'],
    race: ['给领跑车选一个速度。', '从第一个字母开始打这段文字。', '比领跑车先到终点就赢了。'],
    keys: ['键盘上有一个键会亮起来。', '眼睛看屏幕，按下那个键。', '60 秒内按对越多越好。']
  },
  modes: {
    rain: ['单词雨', '打出正在落下的拼音，按空格键消掉它。'],
    race: ['追影赛跑', '在领跑车之前打完这段文字。'],
    keys: ['找键', '按亮起来的键，60 秒内按对越多越好。']
  },
  rain: {
    difficulty: '难度', easy: '简单', normal: '普通', hard: '困难',
    score: '得分', level: '关卡', lives: '生命', best: '最好',
    start: '开始', placeholder: '打出落下的拼音，再按空格键',
    hint: '这里打的是拼音字母本身（不带声调，ü 打 v），请关掉输入法或切到英文模式。让三个词落到底部，游戏就结束。'
  },
  race: {
    pace: '领跑车', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: '开始赛跑', you: '你', ghost: '领跑', placeholder: '从第一个字母开始，打上面这段文字'
  },
  keys: {
    start: '开始找键', time: '秒', hits: '按对', streak: '连击', best: '最好',
    hint: '眼睛看屏幕，不看手。按键按位置识别，所以输入法开着还是关着都可以。'
  },
  runtime: {
    over: '游戏结束', again: '再玩一次', newBest: '这台设备上的新纪录！',
    rainResult: '{score} 分 · 消掉 {words} 个词 · {wpm} WPM · 命中率 {accuracy}%',
    raceReady: '领跑车的速度是 {wpm} WPM。按"开始赛跑"，再打第一个字母出发。',
    raceGo: '出发！', raceWin: '你先到终点！', raceLose: '这次领跑车赢了。',
    racePaused: '已停止。按"开始赛跑"重新开始。',
    raceResult: '{seconds} 秒 · {wpm} WPM · 准确率 {accuracy}% · 领跑车 {ghost} WPM',
    paceBest: '你的最好成绩（{wpm} WPM）',
    keysResult: '按对 {hits} 次 · 最长连击 {streak} · 准确率 {accuracy}%'
  },
  sections: [
    { h2: '三个游戏，一项本领', html: '<p>每个游戏练盲打的一部分。<b>找键</b>练每个键的位置：亮起来的键告诉你哪根手指要动，不用低头看。<b>单词雨</b>练在时间压力下把整个拼音打出来。<b>追影赛跑</b>练整段文字的稳定节奏，对手是一辆按你选的速度前进的领跑车。</p>' },
    { h2: '用你自己的键盘', html: '<p>找键里的屏幕键盘就是课程用的拼音键盘（和美式 QWERTY 一键不差），按键按实际位置识别，而不是按系统打出的字符。单词雨和追影赛跑用的是和<a class="inline-link" href="{course}">{lessons} 课的课程</a>同一批拼音词，比如 nihao、pengyou、lvse：正是你在拼音输入法里打的那串字母。</p>' },
    { h2: '怎样玩才有收获', html: '<ul><li>学完一课后玩一会儿，五到十分钟就够了。</li><li>选一个大部分词都能打对的难度，老是漏掉就降一级。</li><li>在追影赛跑里，把领跑车设得比你的真实速度稍慢一点，再慢慢调高。</li><li>想认真测一次速度，请做<a class="inline-link" href="{test}">课程</a>里的限时测验，而不是看游戏成绩。</li></ul>' }
  ],
  faqTitle: '常见问题',
  faq: [
    ['可以和别人一起玩吗？', '暂时不行。追影赛跑的对手是一辆保持你所选速度的领跑车，或者是你自己的最好成绩。没有其他玩家，也没有排行榜。'],
    ['最好成绩保存在哪里？', '只保存在这台设备的这个浏览器里。不需要账号，也不会发送到任何地方。'],
    ['可以在手机上玩吗？', '单词雨和追影赛跑可以用手机键盘玩，请切到英文键盘。找键需要实体键盘，因为它教的是每个键在哪里。'],
    ['为什么打对了词却没有消掉？', '按空格键之前必须完全一致。如果输入法开着，空格键会把拼音变成汉字，词就对不上了：请关掉输入法或切到英文模式。也检查一下有没有多打或漏打字母。']
  ],
  cta: { eyebrow: '想玩得更好？', title: '学会盲打', text: '{lessons} 课，在你自己的键盘上练习，从基准行开始。', button: '查看课程' }
};
