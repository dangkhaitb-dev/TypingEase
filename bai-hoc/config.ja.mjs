/* bai-hoc/config.ja.mjs — cau hinh trang lo trinh cho ban ja (/ja/renshu/).
 *
 * Mot file moi ngon ngu: bai-hoc/generate.mjs nap file nay theo `--lang ja`. Bang chuoi nam o
 * day, khong o i18n/ui.ja.js, vi day la cong cu chay luc build.
 *
 * Khoa tieng Nhat day go ROMAJI cho IME (xem data/courses/ja.js), nen phan gioi thieu noi thang
 * dieu do, va noi nguoi hoc tat IME khi luyen.
 *
 * `null` trong `routes` = trang do chua co ban tieng Nhat. Moi danh sach ben duoi loc null ra.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'ja', 'renshu', 'index.html'),
    url: 'https://typingease.site/ja/renshu/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.ja.js',
    ui: '/i18n/ui.ja.js',
    routes: {
      home: '/ja/', lessons: '/ja/renshu/', learn: '/ja/manabu/', test: null,
      progress: '/ja/shinchoku/', games: '/ja/typing-games/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `タッチタイピング練習：全${c.sequence.length}レッスン | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course ja-us). Xem config.en.mjs.
      family: {
        title: (c, f) => `${f.name}のタッチタイピング練習 | TypingEase`,
        description: (c, f) => `${f.keyboard}に合わせた無料のタッチタイピング練習です。ローマ字入力の打鍵を${c.units.length}ユニット・${c.sequence.length}レッスンで、ホームポジションから長い文章まで。`,
        h1: (c, f) => `タッチタイピング講座 · ${f.name} · 全 ${c.sequence.length} レッスン`
      },
      description: c => `JIS配列で学ぶ無料のタッチタイピング練習です。ローマ字入力の打鍵を${c.units.length}ユニット・${c.sequence.length}レッスンで、ホームポジションから数字、記号、長い文章まで。`,
      nav: r => [[r.home, '練習'], [r.lessons, 'コース'], [r.progress, '進み具合'], [r.test, 'テスト'], [r.games, 'ゲーム']],
      navAria: 'メインメニュー',
      enter: '始める',
      eyebrow: 'TypingEase の講座',
      h1: c => `タッチタイピング講座 · 全 ${c.sequence.length} レッスン · ${c.units.length} ユニット`,
      intro: 'この講座では、日本語を IME で入力するときのローマ字の打鍵を練習します。gakkou と打てば、\n          IME が「がっこう」にし、「学校」に変換します。練習中は IME をオフ（半角英数）にして、画面の\n          ローマ字をそのまま打ってください。各レッスンでは新しいキーを2つずつ、短い画面に分けて練習します。\n          1レッスンは5分ほどです。',
      countDone: total => `0/${total} レッスン完了`,
      cta: 'レッスン 1 を始める',
      sideUnit: 'ユニット', sideOther: 'そのほか', sideAria: 'ユニットの一覧',
      otherLinks: r => [[r.home, 'キーボードを選ぶ'], [r.test, 'タイピングテスト'], [r.progress, '進み具合']],
      unitKicker: n => `ユニット ${n}`,
      locked: 'ロック中',
      unitScore: 'レッスン完了',
      noteNone: 'このユニットはまだ準備中です。レッスンは順に開いていきます。',
      noteSome: (ready, total) => `${total} レッスンのうち ${ready} レッスンが用意できています。残りは準備中です。`,
      kind: { keys: '', review: '復習', weak: 'あなた用', test: 'テスト' },
      lessonMeta: (n, meta, tag) => `レッスン ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} 秒`, screens: n => `${n} 画面`, minutes: n => `${n} 分`,
      soon: '準備中',
      exploreEyebrow: '始める前に', exploreTitle: '知っておきたいこと',
      explore: r => [
        [r.learn, 'ホームポジションから始める', '8つのキー、8本の指、そして下を見ない習慣。最初のユニットが、そのあとのすべてを決めます。', 'レッスン 1 を開く'],
        [r.home, '自分のキーボードで打つ', 'QWERTY、AZERTY、QWERTZ、デーヴァナーガリー、アラビア文字、JIS。このサイトには本物の配列がそろっていて、講座は選んだ配列に合わせて進みます。', '配列を見る']
      ],
      footerAria: 'TypingEase の資料',
      footerLinks: r => [[r.home, '練習'], [r.lessons, 'コース'], [r.progress, '進み具合']],
      footerTag: '少しゆっくり打つほど、遠くまで行けます。',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
