/* bai-hoc/config.ko.mjs — cau hinh trang lo trinh cho ban ko (tieng Han, 두벌식).
 *
 * Mot file moi ngon ngu; bai-hoc/generate.mjs nap file nay theo `--lang`. Bang chuoi nam o day
 * vi day la cong cu chay luc build — chu no sinh ra da nam san trong HTML.
 *
 * `null` trong `routes` = trang do chua co ban tieng Han. Moi danh sach ben duoi loc null ra.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'ko', 'gangui', 'index.html'),
    url: 'https://typingease.site/ko/gangui/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.ko.js',
    ui: '/i18n/ui.ko.js',
    routes: {
      home: '/ko/', lessons: '/ko/gangui/', learn: '/ko/baeugi/', test: null,
      progress: '/ko/jindo/', games: '/ko/taja-geim/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `한글 타자 연습 강의: ${c.sequence.length}개 과 | TypingEase`,
      family: {
        title: (c, f) => `${f.name} 한글 타자 연습: ${c.sequence.length}개 과 | TypingEase`,
        description: (c, f) => `${f.keyboard}에 맞춰 키 하나씩 만든 무료 한글 타자 연습이에요. ${c.units.length}개 단원, ${c.sequence.length}개 과로 기본 자리부터 숫자, 기호, 긴 글까지 배워요.`,
        h1: (c, f) => `한글 타자 연습 · ${f.name} · ${c.sequence.length}개 과`
      },
      description: c => `${c.units.length}개 단원, ${c.sequence.length}개 과로 이루어진 무료 한글 타자 연습 강의. 두벌식 자판으로 기본 자리부터 된소리, 숫자, 기호, 긴 글까지 배워요.`,
      nav: r => [[r.home, '연습'], [r.lessons, '강의'], [r.progress, '진도'], [r.test, '시험'], [r.games, '게임']],
      navAria: '주 메뉴',
      enter: '시작하기',
      eyebrow: 'TypingEase 강의',
      h1: c => `한글 타자 연습 · ${c.sequence.length}개 과 · ${c.units.length}개 단원`,
      intro: '돌기가 있는 두 키에서 시작해 긴 문단을 같은 박자로 치는 데까지 가요. 과마다 새 키 두 개를\n          짧은 화면으로 나눠 연습과 시간 제한 묶음을 번갈아 해요. 한 과에 5분 정도예요.\n          두벌식 자판에서 한국어 입력기를 켜고 쳐요.',
      countDone: total => `0/${total}과 완료`,
      cta: '1과 시작하기',
      sideUnit: '단원', sideOther: '더 보기', sideAria: '단원 목록',
      otherLinks: r => [[r.home, '자판 고르기'], [r.test, '타자 속도 시험'], [r.progress, '내 진도']],
      unitKicker: n => `${n}단원`,
      locked: '잠김',
      unitScore: '과 완료',
      noteNone: '이 단원은 아직 쓰는 중이에요. 과가 차례로 열려요.',
      noteSome: (ready, total) => `${total}개 과 중 ${ready}개가 준비됐어요. 나머지는 곧 나와요.`,
      kind: { keys: '', review: '복습', weak: '맞춤 연습', test: '시험' },
      lessonMeta: (n, meta, tag) => `${n}과 · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n}초`, screens: n => `화면 ${n}개`, minutes: n => `${n}분`,
      soon: '준비 중',
      exploreEyebrow: '시작하기 전에', exploreTitle: '알아 두면 좋아요',
      explore: r => [
        [r.learn, '기본 자리부터 시작하세요', '여덟 개의 키, 여덟 손가락, 그리고 아래를 보지 않는 습관. 첫 단원이 나머지를 모두 정해요.', '1과 열기'],
        [r.home, '두벌식 한국어 입력기가 필요해요', '이 강의는 두벌식 자판을 한국어 입력기로 치는 과정이에요. 왼손은 자음, 오른손은 모음을 맡고, 입력기가 자모를 글자로 모아 줘요.', '자판 보기']
      ],
      footerAria: 'TypingEase 자료',
      footerLinks: r => [[r.home, '연습'], [r.lessons, '강의'], [r.progress, '진도']],
      footerTag: '조금 천천히 가면 훨씬 멀리 가요.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
