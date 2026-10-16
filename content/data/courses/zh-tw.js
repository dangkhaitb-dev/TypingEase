/* data/courses/zh-tw.js — khoá học tiếng Trung phồn thể (Đài Loan), gõ CHÚ ÂM: cấu hình + lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/zh-tw/*.json
 * khi trình duyệt nhận được.
 *
 * Cùng hình dạng với data/courses/zh.js — nhưng lời dạy viết lại từ đầu: zh dạy pinyin chữ Latin,
 * còn khoá này dạy bàn phím Chú âm, nơi mỗi phím là một ký hiệu ㄅㄆㄇㄈ và hàng số mang ㄅ ㄉ ㄓ
 * ㄚ ㄞ ㄢ cùng bốn dấu thanh (ˇ ở 3, ˋ ở 4, ˊ ở 6, ˙ ở 7). Kho từ nằm ở data/words/zh-tw.js.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GÕ THEO VỊ TRÍ PHÍM (`typeByPosition`). Bộ gõ Chú âm của Microsoft đổi phím thành chữ Hán ngay khi
 * gõ, nên trang không thấy được phím vừa bấm. Người học luyện với bộ gõ ở CHẾ ĐỘ TIẾNG ANH (bấm
 * Shift một lần) hoặc chuyển sang bàn phím tiếng Anh; player.js đổi mã phím vật lý (event.code)
 * thành ký hiệu của bố cục 215 — bấm ô KeyA ra ㄇ. Lời dạy nói điều đó một lần, rõ ràng, ở bài 1
 * (intro.first), và player hiện `positionNote` (i18n/ui.zh-tw.js) khi phát hiện bộ gõ đang bật.
 *
 * DẤU CÂU. Bố cục chú âm không có phím dấu chấm hay dấu phẩy: ô Comma là ㄝ, ô Period là ㄡ, ô
 * Slash là ㄥ. Nên câu không có dấu kết thúc — generator chỉ thêm `.` khi phím `.` đã dạy, và ở
 * đây không bao giờ có. Không khai `sentenceEnd`.
 *
 * SHIFT. Chữ không phân hoa/thường (`caseless`), và các phím chú âm không có tầng Shift trong bố
 * cục. Bài Shift vì thế dạy `"` (Shift + ô Quote) — ký tự tầng Shift duy nhất trên những ô đã học.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Gọi người học là "你", xuyên suốt. Từ ngữ Đài Loan: 鍵盤, 課程, 單元, 課,
 * 練習, 進度, 準確率, 空白鍵, 基準列 (列 = hàng ngang ở Đài Loan).
 *
 * KHÔNG CÓ `families`. Chỉ một bố cục (215).
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse['zh-tw'] = {
  lang: 'zh-tw',
  name: '中文（注音）',

  // Bố cục 215 — "Taiwan (Zhuyin / 注音 — Standard)". Bài 1 dạy ㄑ (F) và ㄨ (J).
  keyboardId: 215,

  // Gõ theo ô phím vật lý — xem đầu file. build-course.js chép cờ này vào giáo trình.
  typeByPosition: true,

  // Không có chữ hoa: bài Shift dạy tầng Shift của các ô đã học.
  caseless: true,

  // Kho riêng: mã bài trùng nhau giữa các ngôn ngữ, dùng chung khoá là hai giáo trình ghi đè nhau.
  progressKey: 'typingease-progress-zh-tw-v1',
  badgesKey: 'typingease-badges-zh-tw-v1',

  // 37 ký hiệu chú âm (U+3105–U+3129) và dấu nháy ở ô Quote — mọi thứ nằm ở vùng chữ. Dấu thanh
  // nằm trên hàng số, như chữ số trên bàn phím khác, nên không vào bài luyện ngón.
  letterTest: "^[\\u3105-\\u3129']$",

  // Trong chế độ tiếng Anh của bộ gõ, ` và ~ là ký tự thật (không phải phím chết).
  symbolsLive: ['`', '~'],

  teaching: {
    and: ' 和 ',
    listSep: '、',
    // Tên phím trong danh sách (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: {
      "'": '引號鍵', '"': '雙引號', '=': '等號鍵', '[': '左方括號', ']': '右方括號', '\\': '反斜線鍵',
      'ˇ': '三聲鍵', 'ˋ': '四聲鍵', 'ˊ': '二聲鍵', '˙': '輕聲鍵'
    },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: '其餘所有按鍵',
      unitSummary: '這塊鍵盤上課程還沒用到的 {count} 個字元：左上角的鍵和 Shift 層剩下的符號。每一個都放在它平常出現的地方來練。',
      groupSymbols: '剩下的按鍵',
      groupFinish: '完成本單元',
      titleNumberRow: '數字列上的符號',
      titleKeys: '{keys}',
      titleReview: '所有符號一起練',
      summaryKeys: '本課內容：{keys}。',
      summaryReview: '本單元的全部符號，和注音詞混在一起。',
      summaryTest: '限時測驗，用上鍵盤上的每一個鍵。',
      introLesson: '課程還沒用到的按鍵：{keys}。{shiftNote}',
      shiftNote: '它們都是 Shift 加上你已經熟悉的鍵打出來的，Shift 由另一隻手的小指按住。',
      shiftNoteMixed: '一部分要按 Shift，由另一隻手的小指負責；其餘的有自己的鍵，課程之前還沒用過。',
      introKey: '{key} 由{finger}負責{shift}。找到它，按一下，手指再回到基準列。',
      introKeyShift: '，另一隻手同時按住 Shift',
      drillOne: '先單獨練 {key}，再放到它平常出現的地方。',
      burst: '一組組短片段，裡面都有這些字元。',
      together: '本課的全部內容，混在一起。',
      inWords: '再練注音詞，符號放在它該在的位置。',
      introReview: '沒有新鍵。本單元的全部字元，和注音詞混在一起，就像它們在真實的文字裡出現的那樣。',
      reviewFirst: '打符號時保持和前後注音一樣的節奏。',
      reviewLine: '遇到符號也不要亂了節奏，它們和別的鍵一樣只是鍵。',
      congratsKeys: '{keys}：現在已經在你的手指下了。按完符號後，手指和打注音時一樣，馬上回到基準列。',
      congratsReview: '這塊鍵盤上的每一個鍵都已經輪到過了。遇到符號時不要停頓，讓它和注音保持同一個節奏。',
      introTest: '限時測驗，包括符號在內的全部內容。用你能一直保持到最後的節奏來打。',
      congratsTest: '這就是整塊鍵盤。上面已經沒有課程沒教過的鍵了；以後每根手指都知道自己該去哪裡。',
      testText: '注音詞和符號。從頭到尾保持同一個節奏。'
    },

    fingers: {
      LP: '左手小指', LR: '左手無名指', LM: '左手中指',
      LI: '左手食指', LT: '左手拇指', RT: '右手拇指',
      RI: '右手食指', RM: '右手中指', RR: '右手無名指',
      RP: '右手小指'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: '鍵盤右邊緣的這些鍵都歸右手小指管：ㄥ、ㄦ，還有 = [ ] \\ 幾個符號。ㄥ 和 ㄦ 是最後兩個注音符號，有了它們，ㄕㄥ、ㄓㄨㄥ、ㄦˋ 這些音都打得出來了。這裡是小指伸得最遠的地方。',
    drillEdgePair: '現在練 {keys}。小指伸出去再收回來，手掌留在原位。',
    burstEdge: '一組組短練習，用上這一欄你已經學過的鍵。',
    drillEdgeAll: '六個鍵一起練。鍵盤的這個角落，手指不回位的話手腕最容易扭著。',
    burstEdgeWords: '再練一些注音詞，打了這麼多邊緣鍵之後讓手放鬆一下。',
    edgeBackToWords: '回到注音詞，現在所有注音符號都能用了。',
    edgeClose: '用完整的句子結束按鍵的部分。',

    /* --- màn giới thiệu phím --- */
    introKey: '這個鍵由{finger}負責。不看鍵盤找到它，按一下，然後讓手指回位。回去的路和按下去一樣重要。',
    pressToContinue: '按 <b>{key}</b> 繼續',
    introSpace: '空白鍵歸右手拇指。拇指不做別的事，所以你不需要找它。',
    pressSpace: '按 <b>空白鍵</b> 繼續',

    /* --- luyện ngón --- */
    drillSpace: '用空白隔開的短組合。右手拇指按下、抬起，其他手指留在原位。',
    drillNew: '只有 {key} 和你已經學過的鍵。慢慢來，每按一次都讓手指回到基準列。',
    drillMixed: '新鍵和舊鍵混在一起，就像以後在注音裡出現的那樣。',
    drillAgain: '兩個新鍵再練一遍。現在還拼不出用到它們的音，這很正常。',
    drillWide: '你已經學會的所有鍵，分成短組合。眼睛看螢幕，不看手。',
    drillAll: '用到目前為止學過的所有鍵，最後再練一輪。',
    patternsBack: '再回到組合練習，確認手指還能找到回去的路。',

    /* --- rentetan --- */
    burstKeys: '一組接一組的短組合。就算有打錯的，也一直打到最後。',
    burstLonger: '稍長一點的組合。現在求快還沒有用。',
    burstWords: '一組組短的注音，裡面有新學的鍵。',

    /* --- kata --- */
    wordsNew: '含有新鍵的真實注音。每個音一口氣打完，不要一個符號一個符號地想。',
    wordsOne: '現在重點放在 <b>{key}</b> 上，這是你按得最少的鍵。',
    wordsAll: '你會的全部內容，混在一起。留意有多少音已經不用想就打出來了。',

    /* --- ulangan --- */
    introReview: '這一課沒有新鍵。只有你已經認識的鍵，比以前更緊湊、更快。',
    introReviewMixed: '聲調、注音和最外一欄的鍵一起出現，就像平常打字那樣。',
    pressEnter: '按 <b>Enter</b> 開始',
    reviewWords1: '先從單個的音開始。不要著急：速度來自準確，從來不是反過來。',
    reviewBurst: '短的連續練習。即使有漏掉的，也把整組打完。',
    reviewWords2: '每行五個。讓眼睛走在手指前面。',
    reviewPatterns: '再練組合，確認手指還會回到基準列。',
    reviewShort: '短的音，保持好的節奏。這些現在應該差不多能自己打出來了。',
    reviewBurst2: '時間更長，內容更多。從頭到尾保持同一個節奏。',
    reviewClose: '一整行打完再停。在這裡能看出手是不是自己回到了原位。',
    reviewLast: '最後一輪。如果你打到這裡都沒看鍵盤，這一課就完成了。',

    /* --- Shift và Enter --- */
    introShift: '注音符號沒有大小寫，Shift 在這塊鍵盤上給的是鍵上的第二個字元，例如引號鍵上的「"」。用和那個鍵相反那隻手的小指按住 Shift，按鍵，兩個一起放開。注意：在注音輸入法裡，單獨按一下 Shift 會切換中英文模式；如果畫面上突然出現國字，再按一下 Shift 切回英文模式。',
    pressShift: '按住 <b>Shift</b> 再按一個鍵繼續',
    drillShiftUnlocks: '{keys} 在引號鍵的上層。右手小指按引號鍵，左手小指按住 Shift，然後一起放開。',
    drillShift: '按住 Shift，按鍵，放開。小指按下、抬起，另一隻手不動。',
    wordsShift: '回到注音。按完 Shift 之後，小指要回到基準列。',
    introEnter: 'Enter 歸右手小指，在引號鍵的右邊。這是小指要搆的最大的鍵。',
    pressEnterKey: '按 <b>Enter</b> 繼續',
    drillEnter: '一行一個名字，打完按 Enter 換行。小指伸出去再收回來，不要帶動整隻手。',
    shiftSentences: '一整行的注音，中間不要停下來想。',
    shiftBurst: '連續練習，鞏固這一課的內容。',
    shiftWords2: '每行五個。讓眼睛走在手指前面，Shift 用完就放開。',
    shiftClose: '最後再來一輪。按鍵、回位，中間不要停下來想。',

    /* --- hàng số --- */
    introDigits: '注音鍵盤的數字列上沒有要練的數字，放的是 ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ 和四個聲調：ˇ（三聲）在 3、ˋ（四聲）在 4、ˊ（二聲）在 6、˙（輕聲）在 7。一聲不加記號。聲調打在每個音的後面，例如 ㄋㄧˇㄏㄠˇ。每根手指都直直地向上伸，再用同樣的方式落回來，這是整個課程裡伸得最遠的地方。',
    drillDigitPair: '{keys} 由{finger}和另一隻手的同一根手指負責。向上，按下，落回基準列。',
    drillDigitIndex: '剩下的兩個歸食指：ㄓ 在 5，ˊ 在 6。食指負責的鍵本來就比別的手指多。',
    burstDigits: '短的連續練習，用上你已經學過的數字列按鍵。',
    burstDigitsAll: '整個數字列混在一起。一開始這裡會打錯很多，這很正常。',
    digitsAll: '整個數字列，分成組來練。不要低頭找 ˊ。',
    digitsBackToWords: '回到注音詞，現在可以加上聲調了。',
    digitsClose: '第一次打完整的句子：每個詞後面都有它的聲調。',

    /* --- đoạn văn --- */
    introProse: '連續的長文本。這裡練的不是新鍵，而是在幾行之間保持同一個節奏。',
    proseLine: '一直讀在你正在打的內容前面。停下來看鍵盤，比改錯花的時間更多。',
    proseBurst: '最後一段長的連續練習，作為結束。',

    /* --- phím yếu và kiểm tra --- */
    weakText: '用你最常打錯的鍵組成的練習。每次練習內容都會變。',
    testText: '沒有新鍵。用你能一直保持到最後的節奏來打。',

    /* --- tiêu đề --- */
    titleFirst: '{keys}，加上空白鍵',
    titleKeys: '{keys}',
    titleReview: '複習',
    titleReviewMixed: '聲調和整塊鍵盤',
    titleShift: 'Shift 和 Enter',
    titleEdge: '最外一欄：ㄥ 和 ㄦ',
    titleDigits: '數字列：聲調和 ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ',
    titleProse: '文章與節奏 {n}',
    titleWeak: '弱點鍵',
    titleTest: '第 {unit} 單元測驗',

    /* --- tóm tắt ở trang lộ trình --- */
    summary: {
      edge: '鍵盤右邊緣的一欄：ㄥ、ㄦ 和四個符號，都歸小指管。',
      first: '兩個有凸點的鍵、空白鍵，以及不低頭看鍵盤的習慣。',
      keys: '新鍵：{keys}。手指伸出去，按下，再回來。',
      review: '沒有新鍵。之前的全部內容，更緊湊、更快。',
      shift: 'Shift 和它上層的字元，以及換行。',
      digits: 'ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ 和四個聲調，每根手指直直向上。',
      prose: '完整的段落，讓節奏保持不只一行。',
      weak: '用你最常打錯的鍵組成的練習。',
      test: '限時測驗，包含所有學過的內容。'
    },

    /* --- lời mở bài --- */
    intro: {
      edge: '右手小指負責的鍵比其他手指都多，最外一欄的 ㄥ 和 ㄦ 也歸它管。它們離基準列最遠，所以方法不變：伸出去，按下，回來，不要把整隻手帶過去。',
      first: '這門課練的是注音鍵盤：每個鍵對應一個注音符號，例如 F 是 ㄑ、J 是 ㄨ。練習前請把注音輸入法切到英文模式（按一下 Shift），或者切換成英文鍵盤。輸入法開著的時候，它會把按鍵變成國字，頁面就看不到你按了哪個鍵；切到英文模式後，頁面會自己把每個鍵換成它的注音符號。先從兩個有小凸點的鍵開始，兩根食指放在上面，不離開；課程裡的其他一切都從這個位置出發。放好雙手，眼睛只看螢幕。',
      keys: '本課的新鍵：{keys}。由{fingers}負責。動作總是一樣：伸出去，按下，回來。練的正是回來這一步，因為手指停在外面，下一個符號就會打錯。',
      review: '這一課不教新東西。現在要確認之前學的不用想就能打出來，這和知道每個鍵在哪裡是兩回事。',
      shift: '注音符號沒有大小寫，但 Shift 還是要學對：它用和那個鍵相反那隻手的小指按。用同一側的小指，手會扭著，最後你就會去看鍵盤。這一課也教 Enter。',
      digits: '數字列在你打過的所有鍵上面，手指要伸得最遠。在注音鍵盤上，這一列放著聲調和六個注音符號，學完它，一般的詞和句子就都打得出來了。這裡打錯的會比課程其他部分多，解決的辦法還是一樣：先慢下來。',
      prose: '所有注音符號和聲調你都已經會了。剩下的不是學鍵，而是保持節奏：往前讀，不停下來看，行尾也不要加速。',
      weak: '這個練習是用你打錯的鍵組成的，不是固定的清單。你的情況變了，練習也會跟著變。',
      test: '限時測驗。沒有新內容：只有你已經會的，用你能保持住的節奏來打。'
    },

    /* --- lời kết bài --- */
    congrats: {
      edge: '所有注音符號現在都在你的手指下了。最外一欄是最少被練到的地方，時不時回來練練。',
      first: '你的手已經放到位置上了。從現在開始，一切都是從這個位置伸出去、再回來的鍵。',
      keys: '手指下的鍵越來越多了。如果 {keys} 已經不用找就能打出來，這一課就完成了它的任務。',
      review: '沒有新東西，但更快了。本來就應該是這樣：手指越少思考，節奏就越穩。',
      shift: '有了 Shift 和 Enter，你就能換行，也能打出按鍵上層的字元。',
      digits: '聲調是注音裡最常按的鍵之一。打每個音時，讓手指向上按完聲調後落回基準列。',
      prose: '完整的段落，節奏也保持住了。這已經不是在學打字，而是在打字。',
      weak: '弱點鍵靠每天一分鐘變強，而不是每月一小時。打錯時先放慢，準確了再提速。',
      test: '測驗結束。數字沒有那麼重要，重要的是你一直打到最後都沒有看鍵盤。'
    },

    units: {
      u1: { title: '基準列',
        summary: '手指下的八個鍵，然後是 {reach}，足夠不低頭打出一聲的注音。' },
      u2: { title: '上排和下排',
        summary: '上排、下排和引號鍵，再加上 Shift 和 Enter：除了數字列和最右邊一欄，所有注音符號都在這裡。' },
      u3: { title: '聲調、最外一欄和速度',
        summary: '數字列上的聲調和 ㄅ ㄉ ㄓ ㄚ ㄞ ㄢ、最外一欄的 ㄥ ㄦ，然後是保持節奏的長段落。' }
    },

    groups: {
      start: '從這裡開始',
      reach: '伸展手指',
      finish: '完成本單元',
      'numbers-symbols': '聲調和符號',
      speed: '速度'
    },

    starterHint: '先把輸入法切到英文模式，兩根食指放在有凸點的兩個鍵上，不看鍵盤，打出你看到的符號。'
  }
};
