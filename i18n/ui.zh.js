/* i18n/ui.zh.js — lớp tiếng Trung (giản thể).
 *
 * Nạp bởi mọi trang dưới /zh/, bằng <script src="/i18n/ui.zh.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Cùng hình dạng với i18n/ui.es.js — xem chú thích ở đó. Khoá thiếu ở đây thì
 * hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC với bảng nó ghi đè.
 *
 * Đừng thêm `defer` cho thẻ script của file này: keyboard/preferences.js (ES module) đọc
 * `globalThis.TypingEaseUI` và cần nó có sẵn.
 *
 * Giao diện bằng chữ Hán giản thể; thứ người học GÕ là pinyin chữ Latin (xem data/words/zh.js).
 */
window.TypingEaseUI = {
  lang: 'zh',

  /* Tuyệt đối, vì /zh/xuexi/ nằm sâu hai cấp. */
  routes: {
    home: '/zh/',
    lessons: '/zh/kecheng/',
    learn: '/zh/xuexi/',
    // Chưa có các trang này bằng tiếng Trung. `null` là tín hiệu BỎ liên kết.
    test: null,
    progress: '/zh/jindu/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /zh/ */
  home: {
    nav: ['练习', '课程'],
    roadmapKicker: '{total} 课 · {units} 个单元',
    roadmapAll: '查看全部 {total} 课 →',
    unitTitle: '第 {index} 单元 · {title}',
    unitDone: '{done}/{total} 课 ✓',
    railDone: '✓',
    railSoon: '即将推出',
    railNote: '下一个单元正在编写中，还没开放的课程显示为灰色。',
    teaser: '第 {index} 单元 · {title}（{count} 课）',
    teaserLocked: '🔒',
    shortcutsTitle: '其他练习',
    shortcuts: [
      ['打字速度测试', '测一测你每分钟打多少词、准确率多少。'],
      ['薄弱键', '用你最常打错的键组成的练习。'],
      ['自由练习', '粘贴你自己的文本，按自己的方式来打。']
    ],
    continueKicker: '继续',
    continueName: '第 {n} 课 · {title}',
    continueCount: '第 {unit} 单元 · 第 {screen}/{screens} 屏',
    continueGo: '▶ 继续（Enter）',
    continueRedo: '↻ 重新练第 {n} 课',
    continueMap: '查看课程',
    streak: '🔥 {days} 天 · 今天 {minutes} 分钟',
    coachWeak: '注意：<b>{keys}</b> 让你慢了下来，花一分钟练练这些键？',
    legacy: '你已经完成了旧版课程的 {n} 课，第 1 和第 2 单元已经开放。',
    doneKicker: '保持节奏',
    doneName: '已经写好的课程你都完成了',
    doneCount: '下一个单元正在准备中。重练一课，别让节奏丢了。',
    doneGo: '▶ 查看课程（Enter）',
    exploreKicker: 'TypingEase 资源',
    footer: '慢一点，你会走得更远。',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: '了解 TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: '正在加载课程…',
    missingTitle: '这一课还没有内容',
    missingBody: '没有从 <code>{path}</code> 加载到任何内容。这一课还在编写中，稍后再试，或者在课程页选择别的课。',
    noCurriculum: '课程索引没有加载（<code>data/curriculum.zh.js</code>）。',
    fixtureNote: '正在使用 <code>hoc/_fixture/</code> 里的示例内容，<code>data/lessons/</code> 里还没有真正的课程。',
    screenOf: '第 {n} / {total} 屏',
    newKey: '新键',
    pressToContinue: '按 <b>{key}</b> 继续',
    enterToContinue: '按 <b>Enter</b> 继续',
    found: '就是它。',
    foundBody: '记住 <b>{key}</b> 的位置，现在来练它。',
    accuracyLive: '准确率 {accuracy}%',
    errorsLive: '{count} 处错误',
    tokensLive: '{count} 个词',
    great: '非常好。',
    good: '不错。',
    pass: '通过。',
    fail: '低于 {min}%，这一屏值得再练一次。',
    resultAccuracy: '准确率 {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: '{count} 处错误',
    resultTokens: '{count} 个词正确',
    slowKey: '<b>{key}</b> 是你最慢的键（每次 {ms} 秒）。让手指伸过去，然后马上回到基准行。',
    keepAccuracy: '把节奏放慢，准确率就会上来，速度随后就到，从来不是反过来。',
    continueEnter: '继续 →（Enter）',
    redoScreen: '重练这一屏',
    redoScreenAdvised: '重练这一屏（建议）',
    skipScreen: '跳过',
    lessonDone: '完成',
    learned: '你已经认识 {count} 个键：',
    statWpm: '速度',
    statAccuracy: '准确率',
    statTime: '时间',
    statStars: '星星',
    technique: '值得记住',
    weakTitle: '需要再练的键',
    weakButton: '练一分钟',
    unitProgress: '{unit} · {done}/{total} 课',
    nextLesson: '▶ {title}（Enter）',
    finishAll: '▶ 返回主页（Enter）',
    redoLesson: '↻ 从头开始这一课',
    home: '主页',
    noMoreTitle: '已经写好的部分你都练完了',
    noMoreBody: '下一个单元还在编写中。在那之前，重练一课：用好的节奏再练一遍，比看上去更有用。',
    notReadyTitle: '这一课还没有内容',
    notReadyBody: '<b>{title}</b> 在课程里，但内容还在编写中。请选择已经开放的课程。',
    weakPage: '薄弱键练习',
    badgeNew: '新徽章',
    badgeAll: '查看全部徽章 →',
    shiftFinger: '另一只手的小指',
    testPage: '打字速度测试',
    mobileNote: '这门课是为电脑键盘设计的：十个手指需要十个真正的按键。你可以在手机上试试，但要真正学会，还是回到键盘前。',
    mobileNoteClose: '知道了',
    tapToType: '点击开始打字',
    menuTitle: '已暂停',
    menuResume: '继续打字',
    menuRedo: '重练这一屏',
    menuSkip: '跳过这一屏',
    menuExit: '返回主页',
    clock: '{seconds} 秒',
    lessonNumber: '第 {number} 课',
    pageTitle: '课程 · TypingEase',
    screenTip: '第 {number} 屏 · {type}',
    firstLesson: '回到第一课'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: '左手小指', LR: '左手无名指', LM: '左手中指',
    LI: '左手食指', LT: '左手拇指',
    RT: '右手拇指', RI: '右手食指', RM: '右手中指',
    RR: '右手无名指', RP: '右手小指'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': '左手小指', 'left-ring': '左手无名指',
    'left-middle': '左手中指', 'left-index': '左手食指',
    'left-thumb': '左手拇指', thumb: '拇指',
    'right-index': '右手食指', 'right-middle': '右手中指',
    'right-ring': '右手无名指', 'right-pinky': '右手小指'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: '键盘设置',
    showKeyboard: '显示键盘',
    showHands: '显示双手',
    rightHandOnly: '只显示右手',
    leftHandOnly: '只显示左手',
    animatedHands: '双手跟随按键',
    letterCase: '键帽上的字母',
    uppercase: '大写',
    lowercase: '小写',
    boardAria: '屏幕键盘', keypadAria: '屏幕数字小键盘',
    keyboardShape: '键盘类型', shapeAuto: '按布局自动选择', shapeAnsi: '104 键（左 Shift 较长）', shapeIso: '105 键（左 Shift 旁边多一个键）',
    layout: '键盘布局',
    save: '保存',
    cancel: '取消',
    close: '关闭'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `已完成 ${a}/${b} 课`,
    legacy: n => `你已经完成了旧版课程的 ${n} 课，第 1 和第 2 单元已经开放。`,
    ctaResume: '▶ 继续', ctaStart: '▶ 开始',
    ctaLesson: (verb, number, title) => `${verb}第 ${number} 课 · ${title} <span>→</span>`,
    ctaAllDone: '已经写好的部分你都练完了 <span>→</span>',
    rowResume: (screen, total) => `▶ 继续 · 第 ${screen}/${total} 屏`,
    rowStart: '▶ 开始',
    rowDone: '✓ 已完成',
    unlocked: '已开放',
    unlockAfter: n => `完成第 ${n} 课后开放`,
    unlockNow: '现在就开放这个单元'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `test`: chữ trang kiểm tra tốc độ ghi lúc chạy và các đoạn
     văn để gõ (tới 10 phút). PINYIN không dấu thanh, ü = v, TẮT bộ gõ, quy ước của data/words/zh.js. */
  test: {
    passage: 'gang kaishi xue dazi de shihou, zui nan de shi tou ji tian. bu kan jianpan dazi, shouzhi zongshi an cuo jian, sudu ye hui bian man. dan zhiyao jianchi xiaqu, qingkuang jiu hui gaibian. ba liang zhi shou de shizhi fang zai f he j shang, qita shouzhi yici paikai. meitian lianxi shi fenzhong, bi yi zhou lian yi ci liang ge xiaoshi geng you xiaoguo. xian ba zhunquelv tigao, sudu ziran hui gen shanglai.',
    passages: [
      'gang kaishi xue dazi de shihou, zui nan de shi tou ji tian. bu kan jianpan dazi, shouzhi zongshi an cuo jian, sudu ye hui bian man. dan zhiyao jianchi xiaqu, qingkuang jiu hui gaibian. ba liang zhi shou de shizhi fang zai f he j shang, qita shouzhi yici paikai. meitian lianxi shi fenzhong, bi yi zhou lian yi ci liang ge xiaoshi geng you xiaoguo. xian ba zhunquelv tigao, sudu ziran hui gen shanglai.',
      'zaoshang tian hen qing, wo jiu meiyou dai yusan. keshi guo le zhongwu, xibian piao lai yi da pian wuyun, feng ye bian leng le. lushang de xingren youde pao jin shangdian duo yu, youde yong bao dangzhu tou. yu xia le chabuduo ban ge xiaoshi, houlai turan ting le. taiyang you chulai le, liang dong dalou zhongjian chuxian le yi dao dandan de caihong. kongqi li you nitu he qingcao de weidao, haizimen zai shuikeng li cai lai cai qu, wan de hen kaixin.',
      'zhoumo zaoshang, jia fujin de caishichang zongshi hen renao. caitan shang dui man le baicai, luobo he cong, shuiguotan shang bai zhe pingguo he li. mai yu de laoban da sheng yaohe, shuo jintian de yu tebie xinxian. yi wei nainai tiao le hen jiu de tudou, you gen laoban tao jia huan jia, zuihou laoban xiao zhe duo song le ta yi ba xiangcai. mantou pu menkou mao zhe reqi, xiangwei piao de hen yuan. cailanzi yue lai yue zhong, xinqing que yue lai yue hao.',
      'huoche zhundian chufa le. chuang wai shi yi pian pian daotian he caidi, you shihou hui jingguo xiao chezhan he yi pai pai xiao fangzi. pangbian de daxuesheng dai zhe erji kan shu, qianmian de xiao nanhai ba lian tie zai chuanghu shang shu shan. guo le yi ge duo xiaoshi, chengwuyuan tui zhe xiaochiche zou guolai. wo mai le yi bei re kafei, manman de he. li daozhan hai you liang ge xiaoshi, dan wo yidian ye bu juede wuliao.',
      'xihongshi chao jidan shi yi dao jiandan de jiachangcai. xian ba liang ge xihongshi qie cheng xiao kuai, zai ba san ge jidan da san, jia yidian yan. guo li dao you, you re le yihou ba jidan dao jinqu, chao yixia jiu xian cheng chulai. ranhou fang xihongshi, chao dao chu zhi, zai ba jidan dao huiqu, jia yidian tang he yan. zuihou sa yidian conghua, pei shang yi wan mifan, jiu shi yi dun hen hao de wanfan.',
      'xiaoqu de tushuguan zhoumo ye kai dao wanshang liu dian. yuelanshi li bai zhe changchang de zhuozi, xueshengmen zai anjing de fuxi, zhunbei kaoshi. kao chuang de weizi shang, ji wei laoren na zhe baozhi manman kan. ertong qu you hen duo caise huiben he ruanruan de shafa, xiaopengyou pa zai shangmian fan shu. guanliyuan renshi jihu suoyou de laoduzhe, youren bu zhidao gai jie shenme shu, ta zongshi hen leyi bangmang tuijian.',
      'qiutian yi dao, xiaoqu houmian de shan jiu bian cheng le hongse he huangse. cong shanjiao dao shanding dagai yao zou yi ge duo xiaoshi, shanlu bu dou, shei dou neng pa shangqu. banlu shang you yi yan shanquan, dajia dou hui zai nali he kou shui, tingxialai chuan kou qi. jiaoxia de luoye shasha zuoxiang, songshu cong shuzhi zhijian kuaisu pao guoqu. zhan zai shanding shang, yuanchu de he he chengshi dou kan de qingqingchuchu. xia shan de shihou tui you dian suan, xinli que qingsong le hen duo.',
      'zhengge dongtian, zixingche dou fang zai yangtai shang. chuntian lai le, wo ba ta tui le chulai. xian gei luntai da qi, zai jiancha shache ling bu ling. lianzi gan le, qi qilai yizhi xiang, suoyi di le ji di you. yong shi maojin ca ganjing huichen, you ba zuodian tiao gao le yidian. qi dao hebian de zixingchedao shang, chunfeng qingqing de chui zai lian shang. yinghua hai mei kai, keshi zhitou shang yijing zhang man le huabao. wo dasuan xia ge zhoumo qi de geng yuan yixie.',
      'xiaoqu de gonggaolan shang tie chu le yi zhang tongzhi, zhe ge zhouliu shangwu, jumin yiqi zhengli youleyuan he huayuan. na tian zaoshang, dajia yi ge jie yi ge de lai le. youren na zhe saoba, youren ban lai yi xiang huamiao. haizimen ba diao zai dishang de shuye jian qilai zhuang jin daizi, darenmen gei jiu yizi shua shang xin qi. gan wan huo yihou, dajia yiqi he le dian yinliao. cong na tian qi, zai dianti li huxiang da zhaohu de linju mingxian duo le.',
      'dazi de shihou zuihao bu yao kan jianpan. yinwei yanjing zai pingmu he jianpan zhijian laihui kan, mei ci dou hui zhaobudao gangcai du dao de weizhi. kaishi de shihou suiran man yixie, ye yao jianchi zhi kan pingmu. da cuo le jiu yong tuigejian shandiao, zai da yi bian. pinyin li de v jiu shi dai liang dian de u, biru lvse he nvhai. dagai yi ge yue yihou, ni hui faxian, jishi da hen chang de wenzhang, shouzhi ye hui ziji zhaodao jianwei.'
    ],
    title: '{seconds} 秒打字测试',
    titleMinutes: '{minutes} 分钟打字测试',
    ready: '准备好了就开始打吧。',
    running: '正在实时计算你的成绩。',
    finished: '{seconds} 秒时间到。成绩：{wpm} WPM，准确率 {accuracy}%，错误 {errors} 个。',
    finishedMinutes: '{minutes} 分钟时间到。成绩：{wpm} WPM，准确率 {accuracy}%，错误 {errors} 个。',
    accuracyName: '准确率',
    comparisonSame: '和上次成绩一样。',
    comparisonDelta: '比上次 {delta} WPM',
    progressEmpty: '数据还不够。多做几次测试，这里就会显示你的进步。',
    progressNone: '还没有进步数据。',
    metricEmpty: '这个指标还没有数据。',
    chartEmpty: '没有可以画这张图表的数据。',
    chartLabel: '{metric}随时间的变化',
    trendEmpty: '数据太少，还算不出趋势。',
    trendSame: '从这段时间开始到现在没有变化。',
    trendDelta: '从这段时间开始到现在 {change} {measure}。',
    measureAccuracy: '个百分点（准确率）',
    progressSummary: '最近 {days} 天做了 {count} 次测试。平均 {wpm} WPM，平均准确率 {accuracy}%。',
    dateLocale: 'zh-CN'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy. Cùng hình dạng với ui.en.js. */
  progress: {
    levels: ['起步', '渐入佳境', '稳定', '快速', '熟练'],
    legacy: n => `你已经完成了旧版课程的 ${n} 课，第 1 和第 2 单元已经开放。`,
    unit: index => `第 ${index} 单元`,
    soon: ' · 即将推出',
    // Tiếng Trung không có số nhiều: chỉ đổi 一 / 两.
    trendHint: n => (n === 1 ? '再练一课，就有足够的数据画出趋势。'
      : `再练${n === 2 ? '两' : ` ${n} `}课，就有足够的数据画出趋势。`),
    stripLevel: level => `水平：${level}`,
    statWpm: '最近的 WPM',
    statAccuracy: '准确率',
    statSessions: '练习次数',
    target: (wpm, accuracy) => `下一个目标：<b>${wpm}</b> WPM · 准确率 <b>${accuracy}</b>%`,
    adviceStart: '练一课，这个页面就能知道你现在的水平。',
    actionStart: '开始第 1 课 →',
    adviceWeak: keys => `${keys} 让你慢了下来，单独练上一分钟，效果会很明显。`,
    actionWeak: keys => `练习 ${keys} →`,
    adviceSteady: '你在稳步前进，每天一课就能保持节奏。',
    actionLesson: (number, title) => `第 ${number} 课 · ${title} →`,
    actionTest: '打字速度测试 →',
    actionLessons: '查看课程 →',
    heatLegend: '每个键的准确率',
    heatStrong: '稳定',
    heatFair: '时对时错',
    heatWeak: '需要练习',
    badgeDate: at => new Date(at).toLocaleDateString('zh-CN', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} 获得` : '已获得'),
    number: value => value.toLocaleString('zh-CN'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} 分钟`,
    streak: days => `🔥 连续 ${days} 天`,
    bestStreak: days => `最长：${days} 天`,
    today: minutes => `今天 ${minutes} 分钟`,
    clearConfirm: '要删除这台设备上保存的所有进度和成绩吗？'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`. */
  badges: {
    'first-step': { title: '第一步', hint: '完成你的第一课。' },
    'unit-1': { title: '完成一个单元', hint: '完成一整个单元。' },
    'stars-30': { title: '30 颗星', hint: '在课程中累计获得 30 颗星。' },
    'stars-90': { title: '90 颗星', hint: '在课程中累计获得 90 颗星。' },
    'streak-3': { title: '连续三天', hint: '连续三天达到每日目标。' },
    'streak-7': { title: '整整一周', hint: '连续七天达到每日目标。' },
    'clean-40': { title: '准确的 40 WPM', hint: '一次练习达到 40 WPM，准确率 95% 或以上。' },
    'clean-60': { title: '准确的 60 WPM', hint: '一次练习达到 60 WPM，准确率 95% 或以上。' },
    'typed-5000': { title: '5000 次按键', hint: '累计按键五千次。' }
  }
};
