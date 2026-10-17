/* data/courses/ko.js — khoá học tiếng Hàn: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/ko/*.json khi
 * trình duyệt nhận được.
 *
 * BỐ CỤC 214 — 두벌식 (2-set), gõ QUA BỘ GÕ tiếng Hàn. Phím in ra jamo, bộ gõ ghép jamo thành âm
 * tiết (ㅎ ㅏ ㄴ → 한). `inputMode: 'hangul'` bật cả ba thứ ở build-course.js (âm tiết gõ được khi
 * mọi jamo đã dạy, bài luyện ngón ra âm tiết, bài Shift ra âm tiết có phụ âm căng) và bộ chấm
 * hangul-match.js ở player. Tay trái giữ phụ âm, tay phải giữ nguyên âm — nên mỗi bài dạy một
 * phụ âm và một nguyên âm, và từ bài 3 đã có từ thật để gõ.
 *
 * CHỮ KHÔNG PHÂN HOA/THƯỜNG: bài Shift dạy TẦNG SHIFT (ㅃ ㅉ ㄸ ㄲ ㅆ ㅒ ㅖ), không dạy chữ hoa.
 * `shiftUnlocks` khai thẳng bảy jamo đó — không để generator tự chọn, vì tự chọn thì nó lấy cả `:`
 * của ô Semicolon (dạy ở bài 4) và chen dấu hai chấm vào bài phụ âm căng.
 *
 * Hàng số và mọi dấu câu là của bàn phím Mỹ: 두벌식 chỉ thay các ô chữ. Trên Windows, ^ ` ~ là
 * ký tự thật (không phải phím chết), nên chúng nằm trong `symbolsLive`.
 *
 * GIỌNG VĂN. 해요체, ngắn, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo, không
 * dấu chấm than. Tên jamo không kèm tiểu từ (와/과, 을/를 đổi theo âm cuối): luôn viết "ㄹ 키를".
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.ko = {
  lang: 'ko',
  name: '한국어',

  keyboardId: 214,

  progressKey: 'typingease-progress-ko-v1',
  badgesKey: 'typingease-badges-ko-v1',

  // Bộ gõ ghép: phím là jamo, chữ là âm tiết. Xem đầu file và "BỘ GÕ GHÉP" trong build-course.js.
  inputMode: 'hangul',

  // Jamo tương thích (U+3131–U+318E) trên các ô chữ. Không có dấu câu: dòng luyện ngón của khoá
  // này là âm tiết ghép (hangulDrill), không phải chuỗi phím rời.
  letterTest: '^[\\u3131-\\u318E]$',

  // Xem đầu file: tầng Shift của các ô chữ đã dạy, theo đúng thứ tự dạy.
  shiftUnlocks: ['ㄸ', 'ㄲ', 'ㅆ', 'ㅒ', 'ㅉ', 'ㅃ', 'ㅖ'],

  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ', ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': '쉼표', '.': '마침표', ';': '쌍반점', ':': '쌍점', "'": '작은따옴표', '-': '붙임표' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: '나머지 모든 키',
      unitSummary: '이 자판에서 아직 쓰지 않은 {count}개의 기호를, 실제로 쓰이는 자리에서 하나씩 익혀요.',
      groupSymbols: '남은 키',
      groupFinish: '단원 마무리',
      titleNumberRow: '숫자 줄의 기호',
      titleKeys: '{keys}',
      titleReview: '모든 기호 함께',
      summaryKeys: '이번에 익힐 키: {keys}.',
      summaryReview: '이 단원의 기호를 모두 낱말, 숫자와 섞어서 쳐요.',
      summaryTest: '자판의 모든 키로 치는 시간 제한 시험이에요.',
      introLesson: '아직 쓰지 않은 키예요: {keys}. {shiftNote}',
      shiftNote: '모두 Shift와 이미 아는 키로 쳐요. Shift는 다른 손 소지로 눌러요.',
      shiftNoteMixed: '어떤 것은 다른 손 소지로 Shift를 눌러야 하고, 나머지는 아직 쓰지 않은 자기 키가 있어요.',
      introKey: '{key} 키는 {finger}로 쳐요{shift}. 친 다음에는 손가락이 기본 자리로 돌아와요.',
      introKeyShift: '. Shift는 다른 손으로 눌러요',
      drillOne: '먼저 {key} 하나만, 그다음 실제로 쓰이는 자리에서 쳐요.',
      burst: '이 기호가 들어간 짧은 묶음을 연달아 쳐요.',
      together: '이번 과에서 익힌 것을 모두 섞었어요.',
      inWords: '다시 낱말이에요. 기호는 원래 있을 자리에 있어요.',
      introReview: '새 키는 없어요. 이 단원의 기호를 모두 낱말, 숫자와 섞어서 쳐요.',
      reviewFirst: '기호도 옆 글자와 같은 박자로 쳐요.',
      reviewLine: '기호에서 멈추지 말고 박자를 이어 가세요. 다른 키와 똑같은 키예요.',
      congratsKeys: '{keys}: 이제 손가락이 알아요. 기호가 옆 글자만큼 쉽게 나와요.',
      congratsReview: '이 자판의 모든 키를 한 번씩 다 쳤어요. 기호가 나와도 박자가 끊기지 않으면 충분해요.',
      introTest: '기호까지 모두 들어간 시간 제한 시험이에요. 새 키는 없고, 끝까지 지킬 수 있는 박자로 치면 돼요.',
      congratsTest: '자판 전체를 다 배웠어요. 이 과정이 가르치지 않은 키는 하나도 남지 않았어요.',
      testText: '낱말, 숫자, 기호가 섞여 있어요. 처음부터 끝까지 같은 박자로 치세요.'
    },

    fingers: {
      LP: '왼손 소지', LR: '왼손 약지', LM: '왼손 중지',
      LI: '왼손 검지', LT: '왼손 엄지', RT: '오른손 엄지',
      RI: '오른손 검지', RM: '오른손 중지', RR: '오른손 약지',
      RP: '오른손 소지'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: '오른쪽 끝의 키들이에요. 모두 오른손 소지로 쳐요. 두벌식에서도 이 자리는 미국식 자판과 같은 기호예요: / - = [ ] \\.',
    drillEdgePair: '이제 {keys}. 소지만 바깥으로 나갔다 돌아와요. 손 전체는 따라가지 않아요.',
    burstEdge: '이 줄에서 익힌 키로 짧은 묶음을 쳐요.',
    drillEdgeAll: '여섯 개를 함께 쳐요. 손가락이 돌아오지 않으면 손목이 가장 많이 꺾이는 자리예요.',
    burstEdgeWords: '다시 낱말이에요. 가장자리를 오래 친 손을 풀어 줘요.',
    edgeBackToWords: '자판 전체를 쓸 수 있는 상태로 다시 낱말을 쳐요.',
    edgeClose: '키를 배우는 과는 여기까지예요. 문장으로 마무리해요.',

    /* --- màn giới thiệu phím --- */
    introKey: '이 키는 {finger}로 쳐요. 보지 않고 찾아서 한 번 누르고, 손가락을 제자리로 돌려놓으세요. 돌아오는 것도 누르는 것만큼 중요해요.',
    pressToContinue: '<b>{key}</b> 키를 눌러 계속해요',
    introSpace: '스페이스 바는 오른손 엄지가 맡아요. 엄지는 다른 키를 치지 않아서 스페이스 바를 찾을 필요가 없어요.',
    pressSpace: '<b>스페이스 바</b>를 눌러 계속해요',

    /* --- luyện ngón --- */
    drillSpace: '짧은 묶음 사이에 띄어쓰기를 넣어요. 오른손 엄지만 내려갔다 올라오고, 다른 손가락은 자기 키 위에 그대로 있어요.',
    drillNew: '{key} 키와 이미 아는 키만 써요. 입력기가 자음과 모음을 글자로 모아 줘요. 천천히, 한 번 칠 때마다 손가락을 기본 자리로 돌려놓으세요.',
    drillMixed: '새 키와 전에 배운 키를 섞었어요. 낱말 안에서 만날 모습 그대로예요.',
    drillAgain: '새 키 두 개를 한 번 더 쳐요.',
    drillWide: '지금까지 배운 키를 모두 짧은 묶음으로 쳐요. 손이 아니라 화면을 보세요.',
    drillAll: '지금까지 배운 것으로 마지막 한 줄씩 쳐요.',
    patternsBack: '잠깐 연습 묶음으로 돌아가요. 손가락이 늘 제자리로 돌아오는지 확인해요.',

    /* --- burst --- */
    burstKeys: '짧은 묶음이 하나씩 나와요. 틀려도 끝까지 가세요.',
    burstLonger: '조금 더 긴 묶음이에요. 아직은 서두른다고 빨라지지 않아요.',
    burstWords: '새 키가 들어간 짧은 낱말을 연달아 쳐요.',

    /* --- từ --- */
    wordsNew: '새 키가 들어간 진짜 낱말이에요. 글자 하나씩 끊지 말고 낱말 전체를 한 번에 쳐요.',
    wordsOne: '이번에는 가장 적게 친 <b>{key}</b> 키에 무게를 두어요.',
    wordsAll: '배운 것을 모두 섞었어요. 벌써 생각하지 않아도 나오는 낱말이 얼마나 많은지 보세요.',

    /* --- ôn tập --- */
    introReview: '이번 과에는 새 키가 없어요. 아는 키만으로 더 빠르게, 더 오래 쳐요.',
    introReviewMixed: '글자, 숫자, 기호가 수업 밖에서처럼 함께 나와요.',
    pressEnter: '<b>Enter</b>를 눌러 시작해요',
    reviewWords1: '먼저 낱말 하나씩이에요. 서두르지 마세요. 속도는 정확함에서 나오고, 그 반대는 없어요.',
    reviewBurst: '짧은 묶음이에요. 놓치는 것이 있어도 목록을 끝까지 쳐요.',
    reviewWords2: '한 줄에 다섯 낱말이에요. 눈이 손가락보다 먼저 가게 두세요.',
    reviewPatterns: '다시 연습 묶음이에요. 손가락이 기본 자리로 돌아오는지 확인해요.',
    reviewShort: '짧은 낱말을 좋은 박자로 쳐요. 거의 저절로 나와야 해요.',
    reviewBurst2: '시간도 낱말도 더 많아요. 처음부터 끝까지 같은 박자를 지켜요.',
    reviewClose: '이제 문장이에요. 손이 저절로 돌아오는지 여기서 보여요.',
    reviewLast: '마지막 묶음이에요. 여기까지 자판을 보지 않고 왔다면 이 과는 끝났어요.',

    /* --- Shift và Enter --- */
    introShift: '두벌식에서 Shift는 같은 키의 두 번째 글자를 줘요. ㄷ 키는 ㄸ, ㄱ 키는 ㄲ, ㅅ 키는 ㅆ, ㅐ 키는 ㅒ가 돼요. Shift는 그 키와 반대쪽 손의 소지로 누르고, 키를 친 다음 놓아요.',
    pressShift: '<b>Shift</b>를 누른 채 키를 하나 눌러 계속해요',
    drillShift: 'Shift를 누른 글자와 누르지 않은 글자를 번갈아 쳐요.',
    drillShiftUnlocks: 'Shift로 나오는 글자: {keys}. 된소리 자음은 왼손 키라서 오른손 소지로, ㅒ와 ㅖ는 오른손 키라서 왼손 소지로 Shift를 눌러요.',
    wordsShift: '이제 낱말이에요. 된소리나 ㅒ, ㅖ가 나오면 반대쪽 소지로 Shift를 눌러요.',
    introEnter: 'Enter는 오른손 소지가 맡아요. 기본 자리 오른쪽에 있고, 이 손가락이 닿아야 하는 가장 큰 키예요.',
    pressEnterKey: '<b>Enter</b>를 눌러 계속해요',
    drillEnter: '한 줄 치고 Enter, 그리고 다음 줄. 소지만 나갔다 돌아오고 손은 따라가지 않아요.',
    shiftSentences: '끝에 마침표가 있는 문장이에요. 마침표는 오른손 약지로 쳐요.',
    shiftBurst: '이번 과에서 익힌 것을 굳히는 묶음이에요.',
    shiftWords2: '한 줄에 다섯 낱말이에요. ㅆ, ㄲ, ㅃ가 나오면 반대쪽 소지로 Shift를 눌러요.',
    shiftClose: '마지막으로 문장이에요. Shift, 키, 놓기 — 멈춰서 생각하지 않고 이어서 쳐요.',

    /* --- hàng số --- */
    introDigits: '숫자 줄은 윗줄보다 한 줄 더 위에 있어요. 두벌식에서도 숫자와 기호는 미국식 자판과 같아요. 손가락이 곧게 올라갔다가 곧게 내려와요. 이 과정에서 가장 먼 거리예요.',
    drillDigitPair: '{keys}: {finger}와 다른 손의 같은 손가락으로 쳐요. 올라가서 치고, 기본 자리로 내려와요.',
    drillDigitIndex: '남은 두 개는 검지로 쳐요. 검지는 이미 다른 어떤 손가락보다 많은 키를 맡고 있어요.',
    burstDigits: '방금 배운 숫자로 짧은 묶음을 쳐요.',
    burstDigitsAll: '열 개를 섞었어요. 처음에는 여기서 많이 틀려요. 괜찮아요.',
    digitsAll: '숫자 줄 전체를 묶음으로 쳐요. 눈을 내려서 찾지 마세요.',
    digitsBackToWords: '잠깐 낱말로 돌아가요. 손이 자기 자리를 기억하도록요.',
    digitsClose: '자판 전체를 쓸 수 있는 상태로 다시 문장을 쳐요.',

    /* --- đoạn văn --- */
    introProse: '길게 이어지는 글이에요. 여기서 연습하는 것은 새 키가 아니라, 여러 줄 동안 같은 박자를 지키는 것이에요.',
    proseLine: '치고 있는 곳보다 앞을 읽으세요. 멈춰서 자판을 보면 고치는 것보다 시간이 더 걸려요.',
    proseBurst: '마지막으로 긴 묶음 하나를 쳐요.',

    /* --- phím yếu và kiểm tra --- */
    weakText: '가장 자주 틀리는 키로 만든 연습이에요. 할 때마다 달라져요.',
    testText: '새 키는 없어요. 끝까지 지킬 수 있는 박자로 치세요.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, 그리고 스페이스 바',
    titleKeys: '{keys}',
    titleReview: '복습',
    titleReviewMixed: '주소, 링크, 숫자',
    titleShift: 'Shift와 Enter',
    titleEdge: '오른쪽 끝 줄',
    titleDigits: '숫자 줄',
    titleProse: '글과 박자 {n}',
    titleWeak: '약한 키',
    titleTest: '{unit}단원 시험',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: '오른쪽 끝 줄: 모두 오른손 소지로 치는 여섯 개의 기호 키.',
      first: '돌기가 있는 두 키, 스페이스 바, 그리고 아래를 보지 않는 습관.',
      keys: '새 키: {keys}. 손가락이 나가서 치고 돌아와요.',
      review: '새 키는 없어요. 앞에서 배운 것을 더 빠르게, 더 오래.',
      shift: 'Shift로 치는 된소리 자음과 ㅒ ㅖ, 그리고 줄 바꾸기.',
      digits: '열 개의 숫자, 손가락마다 곧게 올라가서 쳐요.',
      prose: '한 줄을 넘어서도 박자를 지키는 긴 문단.',
      weak: '가장 자주 틀리는 키로 만든 연습.',
      test: '배운 것을 모두 쓰는 시간 제한 시험.'
    },

    /* --- mở bài --- */
    intro: {
      edge: '오른손 소지는 다른 어떤 손가락보다 많은 키를 맡는데, 가장자리 키는 거의 아무도 연습하지 않아요. 한글 글자는 없지만 / - = [ ] \\ 는 주소, 날짜, 계산에서 자주 나와요.',
      first: '작은 돌기가 있는 키가 출발점이에요. 두 검지를 그 위에 올리고 떠나지 않아요. 이 과정의 모든 것은 이 자리에서 재요. 두벌식 한국어 입력기를 켜고, 두 손을 올린 다음 화면만 보세요.',
      keys: '이번 과의 새 키: {keys}. {fingers}로 쳐요. 움직임은 늘 같아요 — 나가서 치고 돌아오기. 연습하는 것은 돌아오는 쪽이에요. 밖에 남은 손가락은 다음 글자를 틀리게 하니까요.',
      review: '이번 과에서는 새로 배우는 것이 없어요. 앞에서 배운 것이 생각 없이 나오는지 확인하는 시간이에요. 키가 어디 있는지 아는 것과는 다른 일이에요.',
      shift: '두벌식에는 대문자가 없어요. 대신 Shift는 같은 키의 두 번째 글자를 줘요: ㅂ ㅈ ㄷ ㄱ ㅅ 키는 ㅃ ㅉ ㄸ ㄲ ㅆ, ㅐ ㅔ 키는 ㅒ ㅖ. 규칙은 하나예요. Shift는 그 키와 반대쪽 손의 소지로 눌러요. 같은 쪽 소지로 누르면 손이 비틀리고 결국 자판을 보게 돼요.',
      digits: '숫자 줄은 지금까지 친 모든 줄보다 위에 있고, 손가락이 가장 멀리 가는 곳이에요. 이 과정에서 가장 많이 틀리는 줄이지만, 고치는 방법은 같아요: 처음에는 천천히.',
      prose: '이제 자판 전체를 가졌어요. 남은 것은 키를 배우는 것이 아니라 박자를 지키는 것이에요: 앞을 읽고, 멈춰서 보지 않고, 줄 끝에서 서두르지 않기.',
      weak: '이 연습은 정해진 목록이 아니라 내가 틀리는 키로 만들어져요. 내가 달라지면 연습도 달라져요.',
      test: '시간 제한 시험이에요. 새로운 것은 없어요. 이미 아는 것을 끝까지 지킬 수 있는 박자로 쳐요.'
    },

    /* --- kết bài --- */
    congrats: {
      edge: '가장자리까지 끝났어요. 대부분의 과정이 건너뛰는 줄이에요.',
      first: '손이 자리를 잡았어요. 이제부터는 모두 이 자리에서 닿아서 치고 놓는 키예요.',
      keys: '새 키가 손가락 아래에 들어왔어요. {keys} 키가 찾지 않아도 나온다면 이 과는 할 일을 다 했어요.',
      review: '새것은 없는데 더 빨라졌어요. 딱 그렇게 되어야 해요.',
      shift: 'Shift와 Enter로 이제 된소리와 줄 바꾸기까지, 수업 밖에서 쓰는 글을 그대로 칠 수 있어요.',
      digits: '숫자 줄은 가장 어렵고, 나중에 가장 덜 연습하는 줄이에요. 가끔 이 과로 돌아오세요.',
      prose: '긴 문단을 같은 박자로 쳤어요. 이제는 타자를 배우는 것이 아니라 타자를 치는 거예요.',
      weak: '약한 키는 한 달에 한 시간이 아니라 하루에 일 분으로 약하지 않게 돼요.',
      test: '시험 통과. 숫자보다 자판을 보지 않고 끝까지 온 것이 더 중요해요.'
    },

    units: {
      u1: { title: '기본 자리',
        summary: '손가락 여덟 개 아래의 키, 그다음 {reach} — 아래를 보지 않고 한국어 낱말을 칠 수 있을 만큼이에요.' },
      u2: { title: '나머지 자모',
        summary: '윗줄, 아랫줄, 문장 부호, 그리고 Shift로 치는 된소리 — 모든 자모와 Shift, Enter.' },
      u3: { title: '숫자, 기호, 속도',
        summary: '숫자 줄, 오른쪽 끝의 기호, 그리고 같은 박자로 치는 긴 문단.' }
    },

    groups: {
      start: '여기서 시작',
      reach: '손가락 뻗기',
      finish: '단원 마무리',
      'numbers-symbols': '숫자와 기호',
      speed: '속도'
    },

    starterHint: '두 검지를 돌기가 있는 키에 올리고, 자판을 보지 말고 보이는 대로 쳐 보세요. 두벌식 한국어 입력기가 켜져 있어야 해요.'
  }
};
