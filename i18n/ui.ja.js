/* i18n/ui.ja.js — lớp tiếng Nhật.
 *
 * Nạp bởi mọi trang dưới /ja/ (trừ ba trang cũ /ja/typing-test/, /ja/touch-typing/,
 * /ja/what-is-wpm/), bằng <script src="/i18n/ui.ja.js"></script> đặt TRƯỚC mọi script khác trên
 * trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object này lên
 * trên, nên khoá thiếu ở đây thì hiện tiếng Việt — tên khoá phải khớp CHÍNH XÁC bảng nó ghi đè.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 *
 * Thể lịch sự です/ます, không dấu chấm than, không gọi tên người học.
 */
window.TypingEaseUI = {
  lang: 'ja',

  /* Tuyệt đối, vì /ja/manabu/ nằm sâu hai cấp. */
  routes: {
    home: '/ja/',
    lessons: '/ja/renshu/',
    learn: '/ja/manabu/',
    // Chưa có các trang này bằng tiếng Nhật. `null` là tín hiệu BỎ liên kết.
    test: null,
    progress: '/ja/shinchoku/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /ja/ */
  home: {
    nav: ['練習', 'コース'],
    roadmapKicker: '{total} レッスン · {units} ユニット',
    roadmapAll: '{total} レッスンをすべて見る →',
    unitTitle: 'ユニット {index} · {title}',
    unitDone: '{done}/{total} レッスン ✓',
    railDone: '✓',
    railSoon: '準備中',
    railNote: 'この先のユニットは準備中です。まだ開いていないレッスンは灰色で表示されます。',
    teaser: 'ユニット {index} · {title}（{count} レッスン）',
    teaserLocked: '🔒',
    shortcutsTitle: 'ほかの練習',
    shortcuts: [
      ['タイピングテスト', '1分間に打てる語数と正確さを測ります。'],
      ['苦手なキー', 'よく間違えるキーから作る練習です。'],
      ['自由練習', '好きな文章を貼りつけて、そのまま打ちます。']
    ],
    continueKicker: '続きから',
    continueName: 'レッスン {n} · {title}',
    continueCount: 'ユニット {unit} · 画面 {screen}/{screens}',
    continueGo: '▶ 続ける（Enter）',
    continueRedo: '↻ レッスン {n} をやり直す',
    continueMap: 'コースを見る',
    streak: '🔥 {days} 日連続 · 今日 {minutes} 分',
    coachWeak: '<b>{keys}</b> で速度が落ちています。1分だけ練習しませんか。',
    legacy: '以前のコースで {n} レッスンを終えています。ユニット 1 と 2 はもう開いています。',
    doneKicker: 'このリズムを保つ',
    doneName: '用意されたレッスンをすべて終えました',
    doneCount: '次のユニットを準備中です。リズムを忘れないよう、どれかのレッスンを復習してください。',
    doneGo: '▶ コースを見る（Enter）',
    exploreKicker: 'TypingEase の資料',
    footer: '少しゆっくり打つほど、遠くまで行けます。',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'TypingEase について',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Nhật không bao giờ đặt inputMode
     "telex". */
  player: {
    loading: 'レッスンを読み込んでいます…',
    missingTitle: 'このレッスンにはまだ内容がありません',
    missingBody: '<code>{path}</code> から何も読み込めませんでした。レッスンはまだ準備中です。あとでもう一度試すか、コースから別のレッスンを選んでください。',
    noCurriculum: 'コースの目次（<code>data/curriculum.ja.js</code>）を読み込めませんでした。',
    fixtureNote: '<code>hoc/_fixture/</code> のサンプル内容で動いています。本物のレッスンはまだ <code>data/lessons/</code> にありません。',
    screenOf: '画面 {n} / {total}',
    newKey: '新しいキー',
    pressToContinue: '<b>{key}</b> を押して次へ',
    enterToContinue: '<b>Enter</b> を押して次へ',
    found: 'そのキーです。',
    foundBody: '<b>{key}</b> の位置を覚えておいてください。これから練習します。',
    accuracyLive: '正確さ {accuracy}%',
    errorsLive: 'ミス {count}',
    tokensLive: '{count} 語',
    great: 'とてもよくできました。',
    good: 'よくできました。',
    pass: '合格です。',
    fail: '{min}% に届きませんでした。この画面はやり直す価値があります。',
    resultAccuracy: '正確さ {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: 'ミス {count}',
    resultTokens: '正しく打てた語 {count}',
    slowKey: 'いちばん遅かったキーは <b>{key}</b> です（1回 {ms} 秒）。指を伸ばして押したら、すぐにホームポジションへ戻してください。',
    keepAccuracy: '少しゆっくり打つと正確さが上がります。速さはそのあとから付いてきます。',
    continueEnter: '次へ →（Enter）',
    redoScreen: 'この画面をやり直す',
    redoScreenAdvised: 'この画面をやり直す（おすすめ）',
    skipScreen: 'スキップ',
    lessonDone: '完了',
    learned: '覚えたキーは {count} 個です：',
    statWpm: '速さ',
    statAccuracy: '正確さ',
    statTime: '時間',
    statStars: '星',
    technique: '覚えておきたいこと',
    weakTitle: 'もう少し練習したいキー',
    weakButton: '1分だけ練習する',
    unitProgress: '{unit} · {done}/{total} レッスン',
    nextLesson: '▶ {title}（Enter）',
    finishAll: '▶ トップページに戻る（Enter）',
    redoLesson: '↻ レッスンを最初からやり直す',
    home: 'トップページ',
    noMoreTitle: '用意されたレッスンの最後まで来ました',
    noMoreBody: '次のユニットはまだ準備中です。そのあいだに、どれかのレッスンを復習してください。いいリズムでの二周目には、思った以上の効果があります。',
    notReadyTitle: 'このレッスンにはまだ内容がありません',
    notReadyBody: '<b>{title}</b> はコースにありますが、内容はまだ準備中です。すでに開いているレッスンを選んでください。',
    weakPage: '苦手なキーの練習',
    badgeNew: '新しいバッジ',
    badgeAll: 'バッジをすべて見る →',
    shiftFinger: '反対の手の小指',
    testPage: 'タイピングテスト',
    mobileNote: 'このコースはパソコンのキーボード向けです。10本の指には、10本分の本物のキーが必要です。スマートフォンでも試せますが、身につけるにはキーボードで練習してください。',
    mobileNoteClose: 'わかりました',
    tapToType: 'タップして入力',
    menuTitle: '一時停止中',
    menuResume: '入力を続ける',
    menuRedo: 'この画面をやり直す',
    menuSkip: 'この画面をスキップ',
    menuExit: 'トップページに戻る',
    clock: '{seconds} 秒',
    lessonNumber: 'レッスン {number}',
    pageTitle: 'レッスン · TypingEase',
    screenTip: '画面 {number} · {type}',
    firstLesson: '最初のレッスンに戻る'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: '左手の小指', LR: '左手の薬指', LM: '左手の中指',
    LI: '左手の人差し指', LT: '左手の親指',
    RT: '右手の親指', RI: '右手の人差し指', RM: '右手の中指',
    RR: '右手の薬指', RP: '右手の小指'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': '左手の小指', 'left-ring': '左手の薬指',
    'left-middle': '左手の中指', 'left-index': '左手の人差し指',
    'left-thumb': '左手の親指', thumb: '親指',
    'right-index': '右手の人差し指', 'right-middle': '右手の中指',
    'right-ring': '右手の薬指', 'right-pinky': '右手の小指'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'キーボードの設定',
    showKeyboard: 'キーボードを表示',
    showHands: '手を表示',
    rightHandOnly: '右手だけ',
    leftHandOnly: '左手だけ',
    animatedHands: '手がキーの動きに合わせて動く',
    letterCase: 'キーの文字',
    uppercase: '大文字',
    lowercase: '小文字',
    boardAria: '画面上のキーボード', keypadAria: '画面上のテンキー',
    keyboardShape: 'キーボードの形', shapeAuto: '配列に合わせる', shapeAnsi: '104キー（左 Shift が長い）', shapeIso: '105キー（左 Shift の横にキーがある）',
    layout: 'キー配列',
    save: '保存',
    cancel: 'キャンセル',
    close: '閉じる'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} レッスン完了`,
    legacy: n => `以前のコースで ${n} レッスンを終えています。ユニット 1 と 2 はもう開いています。`,
    ctaResume: '▶ 続ける', ctaStart: '▶ 始める',
    ctaLesson: (verb, number, title) => `${verb} · レッスン ${number} · ${title} <span>→</span>`,
    ctaAllDone: '用意されたレッスンの最後まで来ました <span>→</span>',
    rowResume: (screen, total) => `▶ 続ける · 画面 ${screen}/${total}`,
    rowStart: '▶ 始める',
    rowDone: '✓ 完了',
    unlocked: '開いています',
    unlockAfter: n => `レッスン ${n} のあとで開きます`,
    unlockNow: 'このユニットを今すぐ開く'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `test`: chữ trang kiểm tra tốc độ ghi lúc chạy và các đoạn
     văn để gõ (tới 10 phút). ROMAJI chữ thường gõ khi TẮT IME, quy ước của data/words/ja.js. */
  test: {
    passage: 'taipingu no renshuu ha, saisho no isshuukann ga ichibann muzukashii desu. ki-bo-do wo minai de utou to suruto, yubi ga chigau ki- wo oshite shimai, hayasa ha kaette ochimasu. demo, sukoshi gamann suruto kawatte kimasu. hitosashiyubi wo f to j no ue ni oite, hoka no yubi mo yoko ni narabete okimasu. mainichi juppunn demo tsudukeru hou ga, isshuukann ni ichido nagaku yaru yori mo kouka ga arimasu. mazu ha seikaku ni utsu koto, hayasa ha sono ato ni tsuite kimasu.',
    passages: [
      'taipingu no renshuu ha, saisho no isshuukann ga ichibann muzukashii desu. ki-bo-do wo minai de utou to suruto, yubi ga chigau ki- wo oshite shimai, hayasa ha kaette ochimasu. demo, sukoshi gamann suruto kawatte kimasu. hitosashiyubi wo f to j no ue ni oite, hoka no yubi mo yoko ni narabete okimasu. mainichi juppunn demo tsudukeru hou ga, isshuukann ni ichido nagaku yaru yori mo kouka ga arimasu. mazu ha seikaku ni utsu koto, hayasa ha sono ato ni tsuite kimasu.',
      'asa ha sora ga harete ite, kasa ha iranai to omoimashita. keredo, ohiru wo sugiru to nishi kara kuroi kumo ga yatte kite, kaze ga tsumetaku narimashita. michi wo aruite ita hitotachi ha, mise no noki shita ni hashitte hairimashita. ame ha sanjuppunn hodo hageshiku futte, kyuu ni yamimashita. nureta douro ni mata hi ga sasu to, biru no aida ni usui niji ga kakarimashita. kuuki ha tsuchi to kusa no nioi ga shite, kodomotachi ha mizutamari de asonde imashita.',
      'doyoubi no asa, eki no chikaku no ichiba ha itsumo nigiyaka desu. yaoya no mae ni ha daikonn ya hakusai, negi ga yama no you ni tsunde ari, kudamonoya de ha ringo to nashi wo kago ni irete utte imasu. sakanaya no shujinn ha ookina koe de kyou no saba wo susumete imasu. obaasann ga ninjinn wo erande nedann wo kiku to, shujinn ha waratte hitotsu omake wo tsukete kuremashita. kaimono bukuro ga omoku naru hodo, aruku no ha osoku narimasu ga, kibunn ha yoku narimasu.',
      'densha ha jikann doori ni eki wo demashita. mado no soto ni ha tanbo to hatake ga tsuduki, tokidoki chiisana eki to hikui yane no ie ga miemashita. tonari no seki no gakusei ha honn wo yonde ite, mae no seki no kodomo ha mado ni kao wo tsukete yama wo kazoete imashita. ichijikann hodo suru to, shanai hanbai no wagonn ga kimashita. watashi ha atatakai ko-hi- wo katte, yukkuri nomimashita. tsuku made mada nijikann arimashita ga, sukoshi mo taikutsu de ha arimasenn deshita.',
      'misoshiru wo tsukuru no ni, tokubetsu na zairyou ha irimasenn. nabe ni mizu wo irete, dashi wo torimasu. yu ga waitara, toufu to wakame wo iremasu. hi wo yowaku shite kara, miso wo sukoshi zutsu tokashimasu. misoshiru ha futtou saseru to kaori ga nigete shimau node, ki wo tsukete kudasai. saigo ni kizanda negi wo chirasu to, iro mo kaori mo yoku narimasu. atatakai gohann to tsukemono ga areba, sore dake de rippa na asagohann ni narimasu.',
      'machi no toshokann ha, doyoubi mo nichiyoubi mo rokuji made aite imasu. etsuranshitsu ni ha nagai tsukue ga narande ite, gakusei ga shizuka ni shikenn benkyou wo shite imasu. madogiwa no seki de ha, otoshiyori ga shinbunn wo hirogete yukkuri yonde imasu. kodomo no ko-na- ni ha ehonn to yawarakai isu ga ari, kodomotachi ga sono ue de honn wo hiraite imasu. shisho no hito ha yoku kuru hito no kao wo hotondo oboete ite, nani wo yomu ka mayotte iru hito ni ha, yorokonde honn wo erande kuremasu.',
      'aki ni naru to, machi no ura no yama ha akai iro to kiiro ni somarimasu. tozanguchi kara choujou made ha ichijikann sukoshi kakarimasu ga, michi ga yuruyaka na node dare demo noboremasu. tochuu no mizuba de mizu wo hitokuchi nonde, sukoshi yasumimasu. ashimoto de ha kareha ga kasakasa to oto wo tate, ki no aida wo risu ga sutto hashitte ikimasu. choujou ni tatsu to, tooku no kawa to machi ga yoku miemasu. kaerimichi ha ashi ga sukoshi tsukaremasu ga, kokoro ha zutto karuku narimasu.',
      'fuyu no aida zutto beranda ni oite ita jitensha wo dashimashita. mazu taiya ni kuuki wo irete, bure-ki ga chanto kiku ka tashikamemashita. che-nn ga kawaite kishinde ita node, abura wo suuteki tarashimashita. nureta zoukinn de hokori wo fuite, sadoru no takasa mo naoshimashita. kawazoi no michi ni deru to, haru no kaze ga yasashiku kao ni atarimashita. sakura ha mada saite imasenn deshita ga, eda ni ha tsubomi ga takusann tsuite imashita. raishuu ha motto tooku made itte miyou to omoimasu.',
      'manshonn no keijibann ni oshirase ga hararemashita. konshuu no doyoubi no gozenn ni, juuninn ga issho ni kouenn to kadann wo souji suru to iu naiyou deshita. toujitsu no asa ni naru to, hito ga hitori, futari to atsumatte kimashita. houki wo motte kuru hito mo ireba, hana no nae wo hako de motte kuru hito mo imashita. kodomotachi ha ochiba wo hirotte fukuro ni ire, otona ha furui benchi ni penki wo nurimashita. sono hi kara, erebe-ta- de aisatsu wo suru kinjo no hito ga zuibunn fuemashita.',
      'ki-bo-do wo minai de utsu no ga taisetsu na riyuu ha kantann desu. me ga gamenn to te no aida wo ittari kitari suru to, sono tabi ni yonde ita basho wo miushinatte shimau kara desu. saisho ha osokute mo, gamenn dake wo mite utsu renshuu wo shite mimashou. machigaeta moji ga detara, bakkusupe-su de keshite, mou ichido uchinaoseba daijoubu desu. ikkagetsu hodo tatsu to, nagai bunshou wo utsu toki mo, yubi ga shizenn ni ugoku no wo kanjiru hazu desu.'
    ],
    title: '{seconds}秒タイピングテスト',
    titleMinutes: '{minutes}分タイピングテスト',
    ready: '準備ができたら打ち始めてください。',
    running: '結果をリアルタイムで計算しています。',
    finished: '{seconds}秒が終わりました。結果：{wpm} WPM、正確さ {accuracy}%、ミス {errors}。',
    finishedMinutes: '{minutes}分が終わりました。結果：{wpm} WPM、正確さ {accuracy}%、ミス {errors}。',
    accuracyName: '正確さ',
    comparisonSame: '前回と同じ結果です。',
    comparisonDelta: '前回の結果から {delta} WPM',
    progressEmpty: 'まだデータが足りません。テストを何回か受けると、ここに進み具合が表示されます。',
    progressNone: 'まだ進み具合のデータがありません。',
    metricEmpty: 'この指標のデータはありません。',
    chartEmpty: 'このグラフを描けるデータがありません。',
    chartLabel: '{metric}の推移',
    trendEmpty: '傾向を計算するにはデータが足りません。',
    trendSame: 'この期間の初めから変化はありません。',
    trendDelta: 'この期間の初めから {change} {measure}。',
    measureAccuracy: 'ポイント（正確さ）',
    progressSummary: '直近{days}日間のテストは{count}回。平均 {wpm} WPM、平均の正確さ {accuracy}%。',
    dateLocale: 'ja-JP'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy. Cùng hình dạng với ui.en.js. */
  progress: {
    levels: ['はじめたばかり', '慣れてきた', '安定', '速い', 'すらすら'],
    legacy: n => `以前のコースで ${n} レッスンを終えています。ユニット 1 と 2 はもう開いています。`,
    unit: index => `ユニット ${index}`,
    soon: ' · 準備中',
    // Tiếng Nhật không có số nhiều.
    trendHint: n => `あと ${n} レッスンで、傾向を描けるだけのデータがそろいます。`,
    stripLevel: level => `レベル：${level}`,
    statWpm: '最近の WPM',
    statAccuracy: '正確さ',
    statSessions: '練習回数',
    target: (wpm, accuracy) => `次の目標：<b>${wpm}</b> WPM · 正確さ <b>${accuracy}</b>%`,
    adviceStart: 'レッスンをひとつ終えると、このページにいまの位置が表示されます。',
    actionStart: 'レッスン 1 を始める →',
    adviceWeak: keys => `${keys} で速度が落ちています。そのキーだけを1分練習するだけでも大きく違います。`,
    actionWeak: keys => `${keys} を練習する →`,
    adviceSteady: '順調に進んでいます。1日1レッスンでこのペースを保てます。',
    actionLesson: (number, title) => `レッスン ${number} · ${title} →`,
    actionTest: 'タイピングテスト →',
    actionLessons: 'コースを見る →',
    heatLegend: 'キーごとの正確さ',
    heatStrong: '安定',
    heatFair: 'ばらつきあり',
    heatWeak: '要練習',
    badgeDate: at => new Date(at).toLocaleDateString('ja-JP', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} に獲得` : '獲得済み'),
    number: value => value.toLocaleString('ja-JP'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} 分`,
    streak: days => `🔥 ${days} 日連続`,
    bestStreak: days => `最長：${days} 日`,
    today: minutes => `今日 ${minutes} 分`,
    clearConfirm: 'この端末に保存されている進み具合と成績をすべて削除しますか。'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. */
  badges: {
    'first-step': { title: '最初の一歩', hint: '最初のレッスンを終える。' },
    'unit-1': { title: 'ユニット完了', hint: 'ユニットをひとつ最後まで終える。' },
    'stars-30': { title: '星 30 個', hint: 'コースで星を 30 個集める。' },
    'stars-90': { title: '星 90 個', hint: 'コースで星を 90 個集める。' },
    'streak-3': { title: '3日連続', hint: '1日の目標を3日続けて達成する。' },
    'streak-7': { title: '1週間連続', hint: '1日の目標を7日続けて達成する。' },
    'clean-40': { title: '正確に 40 WPM', hint: '正確さ 95% 以上で 40 WPM を出す。' },
    'clean-60': { title: '正確に 60 WPM', hint: '正確さ 95% 以上で 60 WPM を出す。' },
    'typed-5000': { title: '5,000 打鍵', hint: '合計で 5,000 回キーを押す。' }
  }
};
