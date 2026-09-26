/* data/courses/zh.js — khoá học tiếng Trung (giản thể): cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/zh/*.json khi
 * trình duyệt nhận được.
 *
 * Cùng hình dạng với data/courses/es.js — xem chú thích ở đó. Kho từ nằm ở data/words/zh.js.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * KHOÁ NÀY DẠY GÕ PINYIN. Người Trung Quốc gõ chữ Hán qua bộ gõ pinyin: tay gõ chữ Latin, bộ gõ
 * đổi ra chữ Hán. Trình duyệt kiểm tra ở đây không có bộ gõ, và cũng không cần: thứ được chấm là
 * chuỗi phím Latin, đúng thứ ngón tay phải thuộc. Lời dạy nói thẳng điều đó (intro.first) và
 * không hứa gì về chữ Hán mà khoá không kiểm được.
 *
 * DẤU CÂU. Trong chế độ tiếng Trung, phím , và . của bộ gõ ra ， và 。— cùng phím, cùng ngón.
 * Khoá gõ ký tự ASCII; lời dạy chỉ nói "thường" vì mỗi bộ gõ có thể tắt tuỳ chọn ấy.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Gọi người học là "你", xuyên suốt — không trộn "您".
 *
 * KHÔNG CÓ `families`. Chỉ một bố cục (217), trùng từng phím với QWERTY Mỹ.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.zh = {
  lang: 'zh',
  name: '中文（拼音）',

  // Bố cục 217 — "Chinese (Pinyin / QWERTY)", giống hệt QWERTY Mỹ: bài 4 dạy `a` và `;`.
  keyboardId: 217,

  // Kho riêng: mã bài trùng nhau giữa các ngôn ngữ, dùng chung khoá là hai giáo trình ghi đè nhau.
  progressKey: 'typingease-progress-zh-v1',
  badgesKey: 'typingease-badges-zh-v1',

  // Như data/courses/en.js: bàn phím Mỹ, chỉ a-z và dấu câu ở các ô chữ.
  letterTest: "^[a-z;',.\\/-]$",

  // Ký tự dấu nào là ký tự THẬT trên bố cục này, không phải phím chết — xem
  // scripts/lib/unit-symbols.js. Giống QWERTY Mỹ.
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' 和 ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': '逗号键', '.': '句号键', ';': '分号键', ':': '冒号', "'": '引号键', '-': '减号键', '/': '斜杠键' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: '其余所有按键',
      unitSummary: '这块键盘上课程还没用到的 {count} 个字符：括号、货币符号、Shift 层剩下的部分。每一个都放在它平时出现的地方来练。',
      groupSymbols: '剩下的按键',
      groupFinish: '完成本单元',
      titleNumberRow: '数字行上的符号',
      titleKeys: '{keys}',
      titleReview: '所有符号一起练',
      summaryKeys: '本课内容：{keys}。',
      summaryReview: '本单元的全部符号，和单词、数字混在一起。',
      summaryTest: '限时测验，用上键盘上的每一个键。',
      introLesson: '课程还没用到的按键：{keys}。{shiftNote}',
      shiftNote: '它们都是 Shift 加上你已经熟悉的键打出来的，Shift 由另一只手的小指按住。',
      shiftNoteMixed: '一部分要按 Shift，由另一只手的小指负责；其余的有自己的键，课程之前还没用过。',
      introKey: '{key} 由{finger}负责{shift}。找到它，按一下，手指再回到基准行。',
      introKeyShift: '，另一只手同时按住 Shift',
      drillOne: '先单独练 {key}，再放到它平时出现的地方。',
      burst: '一组组短片段，里面都有这些字符。',
      together: '本课的全部内容，混在一起。',
      inWords: '再练单词，符号放在它该在的位置。',
      introReview: '没有新键。本单元的全部字符，和单词、数字混在一起，就像它们在真实文本里出现的那样。',
      reviewFirst: '打符号时保持和前后字母一样的节奏。',
      reviewLine: '遇到符号也不要乱了节奏，它们和别的键一样只是键。',
      congratsKeys: '{keys}：现在已经在你的手指下了。另一只手按 Shift，符号就和旁边的字母一样容易打出。',
      congratsReview: '这块键盘上的每一个键都已经轮到过了。遇到符号时不要停顿，让它和字母保持同一个节奏。',
      introTest: '限时测验，包括符号在内的全部内容。用你能一直保持到最后的节奏来打。',
      congratsTest: '这就是整块键盘。上面已经没有课程没教过的键了；以后每个手指都知道自己该去哪里。',
      testText: '单词、数字和符号。从头到尾保持同一个节奏。'
    },

    fingers: {
      LP: '左手小指', LR: '左手无名指', LM: '左手中指',
      LI: '左手食指', LT: '左手拇指', RT: '右手拇指',
      RI: '右手食指', RM: '右手中指', RR: '右手无名指',
      RP: '右手小指'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: '键盘右边缘的这些键都归小指管。这是小指伸得最远的地方，也是以后最少被练到的键。',
    drillEdgePair: '现在练 {keys}。小指伸出去再收回来，手掌留在原位。',
    burstEdge: '一组组短练习，用上这一列你已经学过的键。',
    drillEdgeAll: '六个键一起练。键盘的这个角落，手指不回位的话手腕最容易拧着。',
    burstEdgeWords: '再练一些单词，打了这么多边缘键之后让手放松一下。',
    edgeBackToWords: '回到单词，现在整块键盘都能用了。',
    edgeClose: '用完整的句子结束按键部分。',

    /* --- màn giới thiệu phím --- */
    introKey: '这个键由{finger}负责。不看键盘找到它，按一下，然后让手指回位。回去的路和按下去一样重要。',
    pressToContinue: '按 <b>{key}</b> 继续',
    introSpace: '空格键归右手拇指。拇指不做别的事，所以你不需要找它。',
    pressSpace: '按 <b>空格</b> 继续',

    /* --- luyện ngón --- */
    drillSpace: '用空格隔开的短组合。右手拇指按下、抬起，其他手指留在原位。',
    drillNew: '只有 {key} 和你已经学过的键。慢慢来，每按一次都让手指回到基准行。',
    drillMixed: '新键和旧键混在一起，就像以后在拼音里出现的那样。',
    drillAgain: '两个新键再练一遍。现在还拼不出用到它们的词，这很正常。',
    drillWide: '你已经学会的所有键，分成短组合。眼睛看屏幕，不看手。',
    drillAll: '用到目前为止学过的所有键，最后再练一轮。',
    patternsBack: '再回到组合练习，确认手指还能找到回去的路。',

    /* --- rentetan --- */
    burstKeys: '一组接一组的短组合。就算有打错的，也一直打到最后。',
    burstLonger: '稍长一点的组合。现在求快还没有用。',
    burstWords: '一组组短拼音，里面有新学的键。',

    /* --- kata --- */
    wordsNew: '含有新键的真实拼音。每个词一口气打完，不要一个字母一个字母地想。',
    wordsOne: '现在重点放在 <b>{key}</b> 上，这是你按得最少的键。',
    wordsAll: '你会的全部内容，混在一起。留意有多少词已经不用想就打出来了。',

    /* --- ulangan --- */
    introReview: '这一课没有新键。只有你已经认识的键，比以前更紧凑、更快。',
    introReviewMixed: '字母、数字和符号一起出现，就像课程之外会遇到的那样。网址和邮箱通常是在输入法的英文模式下输入的。',
    pressEnter: '按 <b>Enter</b> 开始',
    reviewWords1: '先从单个的词开始。不要着急：速度来自准确，从来不是反过来。',
    reviewBurst: '短的连续练习。即使有漏掉的，也把整组打完。',
    reviewWords2: '每行五个词。让眼睛走在手指前面。',
    reviewPatterns: '再练组合，确认手指还会回到基准行。',
    reviewShort: '短词，保持好的节奏。这些现在应该差不多能自己打出来了。',
    reviewBurst2: '时间更长，词更多。从头到尾保持同一个节奏。',
    reviewClose: '完整的句子。在这里能看出手是不是自己回到了原位。',
    reviewLast: '最后一轮。如果你打到这里都没看键盘，这一课就完成了。',

    /* --- Shift và Enter --- */
    introShift: '大写字母用和字母相反那只手的小指按 Shift。按住 Shift，按字母，松开。不要用正在打字的那只手的小指。单独按一下 Shift，很多拼音输入法会在中英文之间切换；这里练的是按住 Shift 打大写字母的指法。',
    pressShift: '按住 <b>Shift</b> 再按一个字母继续',
    drillShift: '大写和小写交替出现。小指按下、抬起，另一只手不动。',
    wordsShift: '首字母大写的词，就像拼音写的人名和地名。',
    introEnter: 'Enter 归右手小指，在基准行的右边。这是小指要够的最大的键。在多数拼音输入法里，拼音还没选字时按 Enter，会把字母原样上屏。',
    pressEnterKey: '按 <b>Enter</b> 继续',
    drillEnter: '一行，Enter，下一行。小指伸出去再收回来，不要带动整只手。',
    shiftSentences: '句子以大写字母开头，以句号键结尾。在输入法的中文模式下，同一个键通常打出的是「。」。',
    shiftBurst: '连续练习，巩固这一课的内容。',
    shiftWords2: '每行五个，小指在两个方向上都要工作。',
    shiftClose: '最后是完整的句子。Shift、字母、松开，中间不要停下来想。',

    /* --- baris angka --- */
    introDigits: '数字行在上排键的上面。每个手指都直直地向上伸，再用同样的方式落回来。这是整个课程里伸得最远的地方。打拼音时，数字键还用来选择候选字，所以这一行值得练熟。',
    drillDigitPair: '{keys} 由{finger}和另一只手的同一个手指负责。向上，按下，落回基准行。',
    drillDigitIndex: '剩下的两个归食指，它负责的键本来就比别的手指多。',
    burstDigits: '短的连续练习，用上你已经学过的数字。',
    burstDigitsAll: '十个数字混在一起。一开始这里会打错很多，这很正常。',
    digitsAll: '整行数字，分成组来练。不要低头找数字 6。',
    digitsBackToWords: '先回到单词，让手记得自己的位置。',
    digitsClose: '再练句子，现在用上整块键盘。',

    /* --- teks panjang --- */
    introProse: '连续的长文本。这里练的不是新键，而是在几行之间保持同一个节奏。',
    proseLine: '一直读在你正在打的内容前面。停下来看键盘，比改错花的时间更多。',
    proseBurst: '最后一段长的连续练习，作为结束。',

    /* --- phím yếu và kiểm tra --- */
    weakText: '用你最常打错的键组成的练习。每次练习内容都会变。',
    testText: '没有新键。用你能一直保持到最后的节奏来打。',

    /* --- judul --- */
    titleFirst: '{keys}，加上空格',
    titleKeys: '{keys}',
    titleReview: '复习',
    titleReviewMixed: '地址、链接和数字',
    titleShift: 'Shift 和 Enter',
    titleEdge: '最外一列',
    titleDigits: '数字行',
    titleProse: '文本与节奏 {n}',
    titleWeak: '薄弱键',
    titleTest: '第 {unit} 单元测验',

    /* --- ringkasan di halaman peta kursus --- */
    summary: {
      edge: '键盘右边缘的一列：六个键，都归小指管。',
      first: '两个有凸起的键、空格键，以及不低头看键盘的习惯。',
      keys: '新键：{keys}。手指伸出去，按下，再回来。',
      review: '没有新键。之前的全部内容，更紧凑、更快。',
      shift: '用另一侧的小指打大写字母，以及换行。',
      digits: '十个数字，每个手指直直向上。',
      prose: '完整的段落，让节奏保持不止一行。',
      weak: '用你最常打错的键组成的练习。',
      test: '限时测验，包含所有学过的内容。'
    },

    /* --- pembuka --- */
    intro: {
      edge: '右手小指负责的键比其他手指都多，而它边上的这些键几乎没有人专门练过。它们离基准行最远，所以方法不变：伸出去，按下，回来，不要把整只手带过去。',
      first: '这门课练的是拼音的按键：你用十个手指打出不带声调的拼音字母，比如 nihao、zhongguo，输入法再把它们变成汉字。练习页面只检查你打的字母，所以不需要打开输入法。先从两个有小凸起的键开始，两个食指放在上面，不离开；课程里的其他一切都从这个位置出发。放好双手，眼睛只看屏幕。',
      keys: '本课的新键：{keys}。由{fingers}负责。动作总是一样：伸出去，按下，回来。练的正是回来这一步，因为手指停在外面，下一个字母就会打错。',
      review: '这一课不教新东西。现在要确认之前学的不用想就能打出来，这和知道每个键在哪里是两回事。',
      shift: '到目前为止都是小写。Shift 会改变这一点，有一条规则最好从一开始就学对：Shift 用和字母相反那只手的小指按。用同一侧的小指，手会拧着，最后你就会去看键盘。',
      digits: '数字行在你打过的所有键上面，手指要伸得最远。这里打错的会比课程其他部分多，解决的办法还是一样：先慢下来。',
      prose: '整块键盘你都已经会了。剩下的不是学键，而是保持节奏：往前读，不停下来看，行尾也不要加速。',
      weak: '这个练习是用你打错的键组成的，不是固定的列表。你的情况变了，练习也会跟着变。',
      test: '限时测验。没有新内容：只有你已经会的，用你能保持住的节奏来打。'
    },

    /* --- penutup --- */
    congrats: {
      edge: '几乎所有课程都只教一半的就是这一列。你的课程里不再是这样了。',
      first: '你的手已经放到位置上了。从现在开始，一切都是从这个位置伸出去、再回来的键。',
      keys: '手指下的键越来越多了。如果 {keys} 已经不用找就能打出来，这一课就完成了它的任务。',
      review: '没有新东西，但更快了。本来就应该是这样：手指越少思考，节奏就越稳。',
      shift: '有了 Shift 和 Enter，你就能像平时写东西一样打出完整的文本。',
      digits: '数字行是最难、以后也最少练到的一行。时不时回来练练这一课，手指向上伸之后记得落回基准行。',
      prose: '完整的段落，节奏也保持住了。这已经不是在学打字，而是在打字。',
      weak: '薄弱键靠每天一分钟变强，而不是每月一小时。打错时先放慢，准确了再提速。',
      test: '测验结束。数字没有那么重要，重要的是你一直打到最后都没有看键盘。'
    },

    units: {
      u1: { title: '基准行',
        summary: '手指下的八个键，然后是 {reach}，足够不低头打出真实的拼音。' },
      u2: { title: '其余字母',
        summary: '上排、下排、标点和大写字母：拼音用到的全部字母，再加上 Shift 和 Enter。' },
      u3: { title: '数字、符号和速度',
        summary: '数字行、常用符号、真实的网址和链接，然后是保持节奏的长段落。' }
    },

    groups: {
      start: '从这里开始',
      reach: '伸展手指',
      finish: '完成本单元',
      'numbers-symbols': '数字和符号',
      speed: '速度'
    },

    starterHint: '把两个食指放在有凸起的两个键上，不看键盘，打出你看到的内容。'
  }
};
