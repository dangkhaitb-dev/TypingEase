/* tro-choi/text/ko.mjs — 한국어 타자 게임 페이지 (scripts/build-game-pages.mjs). Kho từ là
 * data/words/ko.js: âm tiết Hangul, gõ QUA bộ gõ 두벌식 như khoá học. Mưa chữ và Đua với bóng so chữ
 * cuối cùng, và games.js bỏ qua phím cách khi đang ghép (isComposing), nên Space để bộ gõ chốt âm
 * tiết rồi mới xoá từ. Săn phím đọc event.code nên bộ gõ bật hay tắt đều được. Không có trang kiểm
 * tra tốc độ tiếng Hàn, nên {test} rơi về trang khoá học. */
export default {
  slug: 'taja-geim',
  title: '무료 타자 게임: 두벌식 한글 연습 | TypingEase',
  description: '무료 타자 게임 세 가지: 낱말 비, 페이스카 경주, 키 찾기. 브라우저에서 내 두벌식 자판으로 한글 타자를 연습해요. 가입은 필요 없어요.',
  breadcrumbAria: '이동 경로',
  homeCrumb: '첫 페이지',
  crumb: '타자 게임',
  eyebrow: '놀이처럼 하는 타자 연습',
  h1: '타자 게임',
  intro: '과와 과 사이에 할 수 있는 짧은 게임 세 가지예요. 떨어지는 낱말을 치워 없애고, 내가 고른 속도와 경주하고, 화면 자판에서 키를 찾아요. 최고 기록은 이 기기에만 저장돼요.',
  tabsAria: '게임 고르기',
  locale: 'ko-KR',
  howAria: '하는 법',
  how: {
    rain: ['낱말이 위에서 떨어져요.', '그 낱말을 한 글자도 틀리지 않게 쳐요.', '스페이스 바로 없애요. 세 개를 놓치면 끝나요.'],
    race: ['페이스카의 속도를 골라요.', '첫 글자부터 글을 쳐요.', '페이스카보다 먼저 결승선에 닿으면 이겨요.'],
    keys: ['자판에서 키 하나에 불이 들어와요.', '화면을 보면서 그 키를 눌러요.', '60초 동안 최대한 많이 맞혀요.']
  },
  modes: {
    rain: ['낱말 비', '떨어지는 낱말을 치고 스페이스 바로 없애요.'],
    race: ['페이스카 경주', '페이스카보다 먼저 글을 다 쳐요.'],
    keys: ['키 찾기', '불이 들어온 키를 60초 동안 최대한 많이 눌러요.']
  },
  rain: {
    difficulty: '난이도', easy: '쉬움', normal: '보통', hard: '어려움',
    score: '점수', level: '단계', lives: '목숨', best: '최고',
    start: '시작', placeholder: '떨어지는 낱말을 치고 스페이스 바',
    hint: '두벌식 한국어 입력기를 켜고 치세요. 마지막 글자가 조합 중이어도 스페이스 바가 글자를 확정하고 낱말을 없애 줘요. 낱말 세 개가 바닥에 닿으면 끝나요.'
  },
  race: {
    pace: '페이스카', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: '경주 시작', you: '나', ghost: '페이스', placeholder: '위의 글을 첫 글자부터 치세요'
  },
  keys: {
    start: '키 찾기 시작', time: '초', hits: '맞힘', streak: '연속', best: '최고',
    hint: '손이 아니라 화면을 보세요. 키는 자리로 읽으니 한/영 상태와 상관없이 할 수 있어요.'
  },
  runtime: {
    over: '게임 끝', again: '다시 하기', newBest: '이 기기에서 새 최고 기록이에요',
    rainResult: '{score}점 · 낱말 {words}개 · {wpm} WPM · 명중률 {accuracy}%',
    raceReady: '페이스카는 {wpm} WPM으로 달려요. "경주 시작"을 누르고 첫 글자를 치면 출발해요.',
    raceGo: '출발', raceWin: '먼저 들어왔어요', raceLose: '이번에는 페이스카가 이겼어요.',
    racePaused: '멈췄어요. "경주 시작"을 누르면 다시 시작해요.',
    raceResult: '{seconds}초 · {wpm} WPM · 정확도 {accuracy}% · 페이스카 {ghost} WPM',
    paceBest: '내 최고 기록 ({wpm} WPM)',
    keysResult: '{hits}번 맞힘 · 최장 연속 {streak} · 정확도 {accuracy}%'
  },
  sections: [
    { h2: '게임 세 가지, 기술 하나', html: '<p>게임마다 타자의 한 부분을 연습해요. <b>키 찾기</b>는 키마다 자리를 익히는 게임이에요. 불이 들어온 키를 보면 아래를 보지 않아도 어느 손가락이 움직일지 알 수 있어요. <b>낱말 비</b>는 시간에 쫓기면서 낱말을 통째로 치는 연습이에요. <b>페이스카 경주</b>는 내가 고른 속도로 달리는 페이스카를 상대로 글 전체를 고른 리듬으로 치는 연습이에요.</p>' },
    { h2: '내 두벌식 자판으로', html: '<p>키 찾기의 화면 자판은 강의와 같은 두벌식 자판이고, 키는 시스템이 내는 글자가 아니라 실제 자리로 읽어요. 왼손은 자음, 오른손은 모음을 맡아요. 낱말 비와 페이스카 경주에는 <a class="inline-link" href="{course}">{lessons}개 과 강의</a>와 같은 낱말이 나와요.</p>' },
    { h2: '효과를 보려면', html: '<ul><li>한 과를 마친 뒤에 하세요. 5분에서 10분이면 충분해요.</li><li>대부분의 낱말을 맞게 칠 수 있는 난이도를 고르고, 자꾸 놓치면 한 단계 내리세요.</li><li>페이스카 경주에서는 페이스카를 실제 속도보다 조금 느리게 두고, 조금씩 올리세요.</li><li>속도를 제대로 재려면 게임이 아니라 <a class="inline-link" href="{test}">강의</a>의 시간 제한 테스트를 치세요.</li></ul>' }
  ],
  faqTitle: '자주 묻는 질문',
  faq: [
    ['다른 사람과 겨룰 수 있나요?', '아직은 안 돼요. 페이스카 경주의 상대는 고른 속도를 지키는 페이스카나 내 최고 기록이에요. 다른 사람은 없고 순위표도 없어요.'],
    ['최고 기록은 어디에 저장되나요?', '이 기기의 이 브라우저에만 저장돼요. 계정이 필요 없고 어디로도 보내지 않아요.'],
    ['휴대폰으로 할 수 있나요?', '낱말 비와 페이스카 경주는 휴대폰의 한글 자판으로 할 수 있어요. 키 찾기는 키의 자리를 익히는 게임이라 실제 자판이 필요해요.'],
    ['맞게 쳤는데 낱말이 안 없어지는 건 왜인가요?', '스페이스 바를 누르기 전에 완전히 같아야 해요. 한국어 입력기가 꺼져 있으면 로마자가 입력돼요(Windows는 한/영 키로 켜세요). 받침이 다음 글자로 넘어가지 않았는지도 확인하세요.']
  ],
  cta: { eyebrow: '더 잘하고 싶다면', title: '타자를 제대로 배워 보세요', text: '내 자판으로 치는 {lessons}개 과. 기본 자리부터 시작해요.', button: '강의 보기' }
};
