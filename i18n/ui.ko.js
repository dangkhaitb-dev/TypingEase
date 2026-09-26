/* i18n/ui.ko.js — lớp tiếng Hàn.
 *
 * Nạp bởi mọi trang dưới /ko/, bằng <script src="/i18n/ui.ko.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên — khoá thiếu ở đây thì hiện tiếng Việt, nên tên khoá phải khớp CHÍNH XÁC bảng nó
 * ghi đè.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — đừng
 * thêm `defer`.
 *
 * Giọng văn: 해요체, nhất quán với data/courses/ko.js.
 */
window.TypingEaseUI = {
  lang: 'ko',

  /* Tuyệt đối, vì /ko/baeugi/ nằm sâu hai cấp. `null` = trang đó chưa có bản tiếng Hàn: player
     BỎ liên kết thay vì trỏ sang bản ngôn ngữ khác. */
  routes: {
    home: '/ko/',
    lessons: '/ko/gangui/',
    learn: '/ko/baeugi/',
    test: null,
    progress: '/ko/jindo/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /ko/ */
  home: {
    nav: ['연습', '강의'],
    roadmapKicker: '{total}개 과 · {units}개 단원',
    roadmapAll: '{total}개 과 모두 보기 →',
    unitTitle: '{index}단원 · {title}',
    unitDone: '{done}/{total}과 ✓',
    railDone: '✓',
    railSoon: '준비 중',
    railNote: '다음 단원은 지금 쓰고 있어요. 아직 열리지 않은 과는 회색으로 보여요.',
    teaser: '{index}단원 · {title} ({count}개 과)',
    teaserLocked: '🔒',
    shortcutsTitle: '더 연습하기',
    shortcuts: [
      ['타자 속도 시험', '분당 타수와 정확도를 재요.'],
      ['약한 키', '자주 틀리는 키로 만든 연습이에요.'],
      ['자유 연습', '원하는 글을 붙여 넣고 직접 쳐요.']
    ],
    continueKicker: '이어서 하기',
    continueName: '{n}과 · {title}',
    continueCount: '{unit}단원 · 화면 {screen}/{screens}',
    continueGo: '▶ 이어서 하기 (Enter)',
    continueRedo: '↻ {n}과 다시 하기',
    continueMap: '강의 보기',
    streak: '🔥 {days}일 · 오늘 {minutes}분',
    coachWeak: '<b>{keys}</b> 키가 속도를 늦추고 있어요. 1분만 연습해 볼까요?',
    legacy: '이전 과정에서 {n}개 과를 마쳤어요. 1단원과 2단원이 이미 열려 있어요.',
    doneKicker: '박자 유지하기',
    doneName: '지금까지 쓰인 과를 모두 마쳤어요',
    doneCount: '다음 단원을 준비하고 있어요. 박자를 잃지 않도록 한 과를 복습해 보세요.',
    doneGo: '▶ 강의 보기 (Enter)',
    exploreKicker: 'TypingEase 자료',
    footer: '조금 천천히 가면 훨씬 멀리 가요.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi` */
  localized: {
    exploreTitle: 'TypingEase 둘러보기',
    explore: []
  },

  /* player.js — bảng `T`. Có bốn khoá bộ gõ (imeNote…): player dùng chúng khi thấy người học gõ
     ra chữ Latin hoặc jamo rời, tức là bộ gõ tiếng Hàn chưa bật. */
  player: {
    loading: '과를 불러오는 중이에요…',
    missingTitle: '이 과는 아직 내용이 없어요',
    missingBody: '<code>{path}</code>에서 아무것도 불러오지 못했어요. 이 과는 아직 쓰는 중이에요. 나중에 다시 시도하거나 강의에서 다른 과를 고르세요.',
    noCurriculum: '강의 목록(<code>data/curriculum.ko.js</code>)을 불러오지 못했어요.',
    fixtureNote: '<code>hoc/_fixture/</code>의 예시 내용으로 실행 중이에요. 실제 과는 아직 <code>data/lessons/</code>에 없어요.',
    screenOf: '화면 {n} / {total}',
    newKey: '새 키',
    pressToContinue: '<b>{key}</b> 키를 눌러 계속해요',
    enterToContinue: '<b>Enter</b>를 눌러 계속해요',
    found: '바로 그 키예요.',
    foundBody: '<b>{key}</b> 키의 자리를 기억하세요. 이제 연습해요.',
    accuracyLive: '정확도 {accuracy}%',
    errorsLive: '오류 {count}개',
    tokensLive: '{count}개',
    great: '아주 좋아요.',
    good: '좋아요.',
    pass: '통과했어요.',
    fail: '{min}%보다 낮아요. 이 화면을 다시 해 보는 게 좋아요.',
    resultAccuracy: '정확도 {accuracy}%',
    resultWpm: '{wpm} WPM',
    resultErrors: '오류 {count}개',
    resultTokens: '맞게 친 묶음 {count}개',
    slowKey: '<b>{key}</b> 키가 가장 느렸어요(한 번에 {ms}초). 손가락이 닿으면 바로 기본 자리로 돌아오게 하세요.',
    keepAccuracy: '박자를 늦추면 정확도가 올라가요. 속도는 그 뒤에 와요.',
    continueEnter: '계속 → (Enter)',
    redoScreen: '이 화면 다시 하기',
    redoScreenAdvised: '이 화면 다시 하기 (권장)',
    skipScreen: '건너뛰기',
    lessonDone: '완료',
    learned: '지금까지 배운 키 {count}개:',
    statWpm: '속도',
    statAccuracy: '정확도',
    statTime: '시간',
    statStars: '별',
    technique: '기억해 둘 것',
    weakTitle: '더 연습하면 좋은 키',
    weakButton: '1분 연습하기',
    unitProgress: '{unit} · {done}/{total}과',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ 첫 페이지로 (Enter)',
    redoLesson: '↻ 이 과를 처음부터',
    home: '첫 페이지',
    noMoreTitle: '지금까지 쓰인 내용을 모두 마쳤어요',
    noMoreBody: '다음 단원은 아직 만드는 중이에요. 그동안 한 과를 복습해 보세요. 좋은 박자로 한 번 더 치는 것은 생각보다 효과가 커요.',
    notReadyTitle: '이 과는 아직 내용이 없어요',
    notReadyBody: '<b>{title}</b>은 강의에 있지만 내용은 아직 쓰는 중이에요. 이미 열린 과를 고르세요.',
    weakPage: '약한 키 연습',
    badgeNew: '새 배지',
    badgeAll: '배지 모두 보기 →',
    imeNote: '한국어 입력기가 꺼져 있는 것 같아요. 글자가 로마자나 낱자로 입력되고 있어요. 두벌식 한국어 입력기를 켜세요(Windows는 한/영 키).',
    imeNoteButton: '낱자 그대로 채점',
    asciiNote: '지금은 입력 중인 글자를 조합 없이 바로 채점하고 있어요. 입력기를 켠 다음 옆 버튼을 누르면 원래대로 돌아가요.',
    asciiNoteButton: '원래대로',
    shiftFinger: '반대쪽 손 소지',
    testPage: '타자 속도 시험',
    mobileNote: '이 과정은 컴퓨터 자판용이에요. 열 손가락에는 진짜 키 열 개가 필요해요. 휴대폰에서도 해 볼 수는 있지만, 제대로 배우려면 자판으로 돌아오세요.',
    mobileNoteClose: '알겠어요',
    tapToType: '눌러서 입력',
    menuTitle: '일시 정지',
    menuResume: '계속 치기',
    menuRedo: '이 화면 다시 하기',
    menuSkip: '이 화면 건너뛰기',
    menuExit: '첫 페이지로',
    clock: '{seconds}초',
    lessonNumber: '{number}과',
    pageTitle: '과 · TypingEase',
    screenTip: '화면 {number} · {type}',
    firstLesson: '첫 과로 돌아가기'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: '왼손 소지', LR: '왼손 약지', LM: '왼손 중지',
    LI: '왼손 검지', LT: '왼손 엄지',
    RT: '오른손 엄지', RI: '오른손 검지', RM: '오른손 중지',
    RR: '오른손 약지', RP: '오른손 소지'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng */
  keyboardFingers: {
    'left-pinky': '왼손 소지', 'left-ring': '왼손 약지',
    'left-middle': '왼손 중지', 'left-index': '왼손 검지',
    'left-thumb': '왼손 엄지', thumb: '엄지',
    'right-index': '오른손 검지', 'right-middle': '오른손 중지',
    'right-ring': '오른손 약지', 'right-pinky': '오른손 소지'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: '자판 설정',
    showKeyboard: '자판 보이기',
    showHands: '손 보이기',
    rightHandOnly: '오른손만',
    leftHandOnly: '왼손만',
    animatedHands: '손이 키를 따라 움직여요',
    letterCase: '키 글자',
    uppercase: '대문자',
    lowercase: '소문자',
    boardAria: '화면 자판', keypadAria: '화면 숫자 키패드',
    keyboardShape: '자판 모양', shapeAuto: '배열에 맞춤', shapeAnsi: '104키 (왼쪽 Shift가 긴 자판)', shapeIso: '105키 (왼쪽 Shift 옆에 키가 있는 자판)',
    layout: '자판 배열',
    save: '저장',
    cancel: '취소',
    close: '닫기'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b}과 완료`,
    legacy: n => `이전 과정에서 ${n}개 과를 마쳤어요. 1단원과 2단원이 이미 열려 있어요.`,
    ctaResume: '▶ 이어서 하기', ctaStart: '▶ 시작하기',
    ctaLesson: (verb, number, title) => `${verb} · ${number}과 · ${title} <span>→</span>`,
    ctaAllDone: '지금까지 쓰인 과를 모두 마쳤어요 <span>→</span>',
    rowResume: (screen, total) => `▶ 이어서 하기 · 화면 ${screen}/${total}`,
    rowStart: '▶ 시작하기',
    rowDone: '✓ 완료',
    unlocked: '열림',
    unlockAfter: n => `${n}과를 마치면 열려요`,
    unlockNow: '이 단원 지금 열기'
  },

  /* kiem-tra-toc-do-go/typing-test.js — bảng `test`: chữ trang kiểm tra tốc độ ghi lúc chạy và các đoạn
     văn để gõ (tới 10 phút). Hangul gõ QUA bộ gõ 두벌식; WPM = âm tiết (cùng dấu cách, dấu câu) chia năm. */
  test: {
    passage: '타자 연습은 처음 며칠이 가장 어렵다. 자판을 보지 않고 치려고 하면 손가락이 자꾸 엉뚱한 키를 누르고, 속도는 오히려 느려진다. 그래도 조금만 참으면 달라진다. 왼손은 자음을, 오른손은 모음을 맡는다는 것을 손이 기억하기 시작하면 글자가 저절로 이어진다. 하루에 십 분씩이라도 꾸준히 연습하는 것이 일주일에 한 번 오래 하는 것보다 낫다. 정확하게 치는 습관이 먼저 자리를 잡아야 속도도 따라온다. 처음 일주일은 속도를 재지 말고, 틀린 글자가 몇 개인지만 세어 보자. 틀리는 글자가 줄어들면 그때부터 조금씩 빠르게 쳐도 늦지 않다. 손목은 책상에 누르지 말고 가볍게 띄워 두는 편이 덜 피곤하다.',
    passages: [
      '타자 연습은 처음 며칠이 가장 어렵다. 자판을 보지 않고 치려고 하면 손가락이 자꾸 엉뚱한 키를 누르고, 속도는 오히려 느려진다. 그래도 조금만 참으면 달라진다. 왼손은 자음을, 오른손은 모음을 맡는다는 것을 손이 기억하기 시작하면 글자가 저절로 이어진다. 하루에 십 분씩이라도 꾸준히 연습하는 것이 일주일에 한 번 오래 하는 것보다 낫다. 정확하게 치는 습관이 먼저 자리를 잡아야 속도도 따라온다. 처음 일주일은 속도를 재지 말고, 틀린 글자가 몇 개인지만 세어 보자. 틀리는 글자가 줄어들면 그때부터 조금씩 빠르게 쳐도 늦지 않다. 손목은 책상에 누르지 말고 가볍게 띄워 두는 편이 덜 피곤하다.',
      '아침에는 하늘이 맑아서 우산을 챙기지 않았다. 그런데 점심이 지나자 서쪽에서 먹구름이 몰려오고 바람이 차가워졌다. 길을 걷던 사람들은 가게 처마 밑으로 뛰어 들어가거나 가방으로 머리를 가렸다. 비는 삼십 분쯤 세차게 내리다가 갑자기 그쳤다. 젖은 도로 위로 햇빛이 다시 비치자 건물 사이에 희미한 무지개가 걸렸다. 공기에서는 흙냄새와 풀냄새가 났고, 아이들은 물웅덩이를 밟으며 즐거워했다. 저녁이 되자 바람은 다시 선선해졌고, 하늘에는 별이 하나둘 떠올랐다. 창문을 조금 열어 두니 빗물에 씻긴 공기가 방 안까지 들어왔다. 내일 아침에는 우산을 꼭 가방에 넣어 두기로 했다.',
      '토요일 아침의 시장은 늘 사람들로 붐빈다. 채소 가게 앞에는 배추와 무, 파가 수북이 쌓여 있고, 과일 가게에서는 사과와 배를 한 바구니씩 담아 판다. 생선 가게 주인은 큰 목소리로 오늘 들어온 고등어를 자랑한다. 할머니 한 분이 고추를 고르며 값을 묻자 주인은 웃으면서 한 줌을 더 얹어 준다. 떡집 앞에서는 갓 찐 떡에서 김이 모락모락 피어오른다. 장바구니가 무거워질수록 발걸음은 느려지지만 기분은 좋아진다. 시장 한쪽에서는 순대와 어묵을 파는 작은 가게가 손님을 부른다. 장을 다 본 사람들은 그 앞 긴 의자에 앉아 뜨거운 국물로 몸을 녹이고 간다. 해가 높이 뜰 무렵이면 상인들도 한숨 돌리며 늦은 아침을 먹는다.',
      '기차는 정해진 시간에 정확히 출발했다. 창밖으로 논과 밭이 끝없이 이어지고, 가끔 작은 역과 낮은 지붕의 집들이 지나갔다. 옆자리의 대학생은 이어폰을 끼고 책을 읽었고, 앞자리의 아이는 창문에 얼굴을 붙이고 산을 셌다. 한 시간쯤 지나자 승무원이 간식 수레를 밀고 지나갔다. 나는 따뜻한 커피를 한 잔 사서 천천히 마셨다. 도착까지는 아직 두 시간이 남았지만 전혀 지루하지 않았다. 창밖 풍경을 보면서 오랜만에 좋아하는 노래를 들었다. 기차가 긴 터널을 지나갈 때마다 창문에 내 얼굴이 비쳤다가 사라졌다. 종착역에 가까워지자 사람들은 하나둘 짐을 챙기기 시작했다.',
      '된장찌개를 끓이는 데에는 특별한 재료가 필요하지 않다. 냄비에 물을 붓고 멸치 몇 마리를 넣어 국물을 우린다. 국물이 끓으면 멸치를 건지고 된장을 풀어 넣는다. 감자와 애호박, 양파를 먹기 좋은 크기로 썰어 넣고 십 분쯤 더 끓인다. 두부는 마지막에 넣어야 부서지지 않는다. 대파와 고추를 조금 올리면 향이 살아난다. 밥 한 공기와 김치만 있으면 저녁 한 끼로 충분하다. 남은 찌개는 식혀서 냉장고에 넣어 두면 다음 날 아침에 데워 먹을 수 있다. 하루가 지나면 맛이 더 깊어진다고 말하는 사람도 많다. 된장의 양은 집집마다 다르니, 처음에는 조금 적게 넣고 맛을 보면서 더하는 것이 좋다.',
      '동네 도서관은 주말에도 여섯 시까지 문을 연다. 열람실에는 긴 책상이 줄지어 있고, 학생들은 시험 준비를 하느라 조용히 책장을 넘긴다. 창가 자리에서는 할아버지들이 신문을 펼쳐 놓고 천천히 읽는다. 어린이 코너에는 알록달록한 그림책과 푹신한 의자가 있어서 아이들이 엎드려 책을 본다. 사서는 자주 오는 사람들의 얼굴을 거의 다 알고, 무엇을 읽을지 고민하는 사람에게 기꺼이 책을 골라 준다. 창밖으로 나무가 보이는 자리는 오후가 되면 햇살이 들어 특히 인기가 많다. 문을 닫기 삼십 분 전이 되면 조용한 음악이 흘러나오고, 사람들은 읽던 책을 제자리에 꽂아 두고 하나둘 자리에서 일어난다.',
      '가을이 되면 동네 뒷산은 붉고 노란 색으로 물든다. 등산로 입구에서 정상까지는 한 시간 남짓 걸리는데, 길이 완만해서 누구나 오를 수 있다. 중간쯤에 있는 약수터에서 물을 한 모금 마시고 잠깐 쉬어 간다. 발밑에서는 마른 낙엽이 바스락거리고, 나무 사이로 다람쥐가 빠르게 지나간다. 정상에 서면 멀리 강과 도시가 한눈에 들어온다. 내려오는 길에는 다리가 조금 떨리지만 마음은 한결 가벼워진다. 산 아래 작은 식당에서 따뜻한 칼국수를 한 그릇 먹으면 하루가 완벽하게 끝난다. 다음 주에는 조금 더 높은 산에 가 보자고 친구와 약속했다. 그때는 도시락과 따뜻한 차를 챙겨 가기로 했다.',
      '겨울 내내 베란다에 세워 두었던 자전거를 꺼냈다. 먼저 바퀴에 바람을 넣고 브레이크가 잘 듣는지 확인했다. 체인이 말라서 삐걱거렸기 때문에 기름을 몇 방울 떨어뜨렸다. 젖은 걸레로 먼지를 닦아 내고 안장 높이도 다시 맞췄다. 강변 자전거 길로 나가자 봄바람이 얼굴에 부드럽게 닿았다. 벚꽃은 아직 피지 않았지만 나뭇가지마다 꽃봉오리가 가득했다. 다음 주말에는 조금 더 멀리 가 보기로 했다. 돌아오는 길에는 공원 벤치에 앉아 물을 마시며 잠깐 쉬었다. 강물 위로 햇빛이 반짝이고, 멀리서 아이들이 연을 날리고 있었다. 오랜만에 몸을 움직이니 기분까지 가벼워졌다.',
      '아파트 게시판에 공지가 붙었다. 이번 토요일 오전에 주민들이 함께 놀이터와 화단을 정리한다는 내용이었다. 당일 아침이 되자 사람들이 하나둘 모여들었다. 누구는 빗자루를 들고 오고, 누구는 꽃모종을 한 상자 가져왔다. 아이들은 떨어진 나뭇잎을 주워 봉투에 담았고, 어른들은 낡은 의자에 새로 페인트를 칠했다. 일이 끝난 뒤에는 다 같이 음료수를 나눠 마셨다. 그날 이후 엘리베이터에서 인사를 나누는 이웃이 부쩍 늘었다. 작은 일이었지만 동네가 한결 깨끗해졌고, 놀이터에서 노는 아이들의 목소리도 더 밝게 들렸다. 다음 달에도 다시 모이자는 이야기가 자연스럽게 나왔다.',
      '자판을 보지 않고 치는 것이 왜 중요할까? 눈이 화면과 자판 사이를 오가면 그때마다 읽던 자리를 잃어버리기 때문이다. 처음에는 느리더라도 화면만 보고 치는 연습을 해 보자. 틀린 글자가 나오면 백스페이스로 지우고 다시 치면 된다. 쌍자음은 시프트 키를 누른 채로 치고, 시프트는 반대쪽 손의 새끼손가락으로 누른다. 한 달쯤 지나면 긴 글을 칠 때도 손가락이 알아서 움직이는 것을 느낄 수 있다. 처음 몇 주는 답답하게 느껴질 수 있지만, 그 시기를 넘기면 타자는 생각하지 않아도 되는 일이 된다. 조급해하지 말고 오늘도 몇 분만 연습해 보자.'
    ],
    title: '{seconds}초 타자 테스트',
    titleMinutes: '{minutes}분 타자 테스트',
    ready: '준비되면 시작하세요.',
    running: '결과를 실시간으로 계산하고 있어요.',
    finished: '{seconds}초가 지났어요. 결과: {wpm} WPM, 정확도 {accuracy}%, 오타 {errors}개.',
    finishedMinutes: '{minutes}분이 지났어요. 결과: {wpm} WPM, 정확도 {accuracy}%, 오타 {errors}개.',
    accuracyName: '정확도',
    comparisonSame: '지난번 결과와 같아요.',
    comparisonDelta: '지난번 결과보다 {delta} WPM',
    progressEmpty: '아직 데이터가 부족해요. 테스트를 몇 번 치면 여기에 진행 상황이 나타나요.',
    progressNone: '아직 진행 데이터가 없어요.',
    metricEmpty: '이 지표에는 데이터가 없어요.',
    chartEmpty: '이 그래프를 그릴 데이터가 없어요.',
    chartLabel: '시간에 따른 {metric} 변화',
    trendEmpty: '추세를 계산하기에는 데이터가 부족해요.',
    trendSame: '이 기간이 시작된 뒤로 변화가 없어요.',
    trendDelta: '이 기간이 시작된 뒤로 {change} {measure}.',
    measureAccuracy: '%p (정확도)',
    progressSummary: '최근 {days}일 동안 테스트 {count}번. 평균 {wpm} WPM, 평균 정확도 {accuracy}%.',
    dateLocale: 'ko-KR'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy. Cùng hình dạng với ui.en.js. */
  progress: {
    levels: ['시작 단계', '감 잡는 중', '안정', '빠름', '능숙'],
    legacy: n => `이전 과정에서 ${n}개 과를 마쳤어요. 1단원과 2단원이 이미 열려 있어요.`,
    unit: index => `${index}단원`,
    soon: ' · 준비 중',
    // Tiếng Hàn không chia số nhiều ở đây.
    trendHint: n => `${n}개 과만 더 치면 추세를 그릴 만큼 데이터가 모여요.`,
    stripLevel: level => `수준: ${level}`,
    statWpm: '최근 WPM',
    statAccuracy: '정확도',
    statSessions: '연습 횟수',
    target: (wpm, accuracy) => `다음 목표: <b>${wpm}</b> WPM · 정확도 <b>${accuracy}</b>%`,
    adviceStart: '한 과를 치면 이 페이지가 지금 실력을 알려 줘요.',
    actionStart: '1과 시작하기 →',
    adviceWeak: keys => `${keys} 키가 발목을 잡고 있어요. 그 키만 1분 연습해도 효과가 커요.`,
    actionWeak: keys => `${keys} 연습하기 →`,
    adviceSteady: '잘 나아가고 있어요. 하루 한 과면 이 박자를 지킬 수 있어요.',
    actionLesson: (number, title) => `${number}과 · ${title} →`,
    actionTest: '타자 속도 시험 →',
    actionLessons: '강의 보기 →',
    heatLegend: '키별 정확도',
    heatStrong: '안정적',
    heatFair: '들쭉날쭉',
    heatWeak: '연습 필요',
    badgeDate: at => new Date(at).toLocaleDateString('ko-KR', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `${date} 획득` : '획득'),
    number: value => value.toLocaleString('ko-KR'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal}분`,
    streak: days => `🔥 ${days}일 연속`,
    bestStreak: days => `최고: ${days}일`,
    today: minutes => `오늘 ${minutes}분`,
    clearConfirm: '이 기기에 저장된 진도와 점수를 모두 지울까요?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. */
  badges: {
    'first-step': { title: '첫걸음', hint: '첫 과를 마치세요.' },
    'unit-1': { title: '한 단원 완료', hint: '단원 하나를 모두 마치세요.' },
    'stars-30': { title: '별 30개', hint: '강의에서 별을 30개 모으세요.' },
    'stars-90': { title: '별 90개', hint: '강의에서 별을 90개 모으세요.' },
    'streak-3': { title: '3일 연속', hint: '하루 목표를 3일 연속으로 채우세요.' },
    'streak-7': { title: '일주일 내내', hint: '하루 목표를 7일 연속으로 채우세요.' },
    'clean-40': { title: '깔끔한 40 WPM', hint: '정확도 95% 이상으로 40 WPM을 한 번 내세요.' },
    'clean-60': { title: '깔끔한 60 WPM', hint: '정확도 95% 이상으로 60 WPM을 한 번 내세요.' },
    'typed-5000': { title: '5,000타', hint: '모두 합쳐 5,000번 키를 누르세요.' }
  }
};
