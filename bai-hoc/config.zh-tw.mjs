/* bai-hoc/config.zh-tw.mjs — cau hinh trang lo trinh cho ban zh-tw (tieng Trung phon the, go Chu am).
 *
 * Cung hinh dang voi config.zh.mjs — xem chu thich o config.es.mjs. bai-hoc/generate.mjs nap file
 * nay theo `--lang zh-tw`.
 *
 * `null` trong `routes` = trang do chua co ban tieng Trung phon the. Moi danh sach ben duoi loc
 * null ra, nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'zh-tw', 'kecheng', 'index.html'),
    url: 'https://typingease.site/zh-tw/kecheng/',
    // `alt` chi con la di san: hreflang nay dung tu bang ALTERNATES trong generate.mjs.
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.zh-tw.js',
    ui: '/i18n/ui.zh-tw.js',
    routes: {
      home: '/zh-tw/', lessons: '/zh-tw/kecheng/', learn: '/zh-tw/xuexi/', test: '/zh-tw/dazi-ceyan/',
      progress: '/zh-tw/jindu/', games: '/zh-tw/dazi-youxi/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `注音打字練習：${c.sequence.length} 課十指盲打 | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac. Hien chi co mot ho, nhung generate.mjs doi khoi
      // nay cho moi config, nen giu cho dong nhat.
      family: {
        title: (c, f) => `${f.name}打字練習：${c.sequence.length} 課 | TypingEase`,
        description: (c, f) => `在${f.keyboard}上逐鍵編排的免費打字練習：${c.units.length} 個單元、${c.sequence.length} 課，從基準列到聲調、符號和長文章。`,
        h1: (c, f) => `盲打課程 · ${f.name} · ${c.sequence.length} 課`
      },
      description: c => `${c.units.length} 個單元、${c.sequence.length} 課的免費注音打字練習，從基準列到聲調、符號和長文章，一個鍵一個鍵地練注音符號和聲調。`,
      nav: r => [[r.home, '練習'], [r.lessons, '課程'], [r.progress, '進度'], [r.test, '測驗'], [r.games, '遊戲']],
      navAria: '主要導覽',
      enter: '開始',
      eyebrow: 'TypingEase 課程',
      h1: c => `注音盲打課程 · ${c.sequence.length} 課 · ${c.units.length} 個單元`,
      intro: '從兩個有凸點的鍵，到節奏穩定的完整段落。你打的是注音符號和聲調，就像在注音輸入法裡打字一樣；\n          練習時把輸入法切到英文模式，頁面會把每個鍵換成它的注音符號。每一課教兩個新鍵，分成一頁一頁的短練習，\n          練習和限時連打交替進行，每課大約五分鐘。',
      countDone: total => `已完成 0/${total} 課`,
      cta: '開始第 1 課',
      sideUnit: '單元', sideOther: '其他', sideAria: '單元列表',
      otherLinks: r => [[r.home, '課程首頁'], [r.test, '打字速度測驗'], [r.progress, '你的進度']],
      unitKicker: n => `第 ${n} 單元`,
      locked: '未開放',
      unitScore: '課已完成',
      noteNone: '這個單元還在編寫中，課程會一課一課地開放。',
      noteSome: (ready, total) => `${total} 課中已寫好 ${ready} 課，其餘的隨後推出。`,
      kind: { keys: '', review: '複習', weak: '個人', test: '測驗' },
      lessonMeta: (n, meta, tag) => `第 ${n} 課 · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} 秒`, screens: n => `${n} 頁`, minutes: n => `${n} 分鐘`,
      soon: '即將推出',
      exploreEyebrow: '開始之前', exploreTitle: '值得知道',
      explore: r => [
        [r.learn, '從基準列開始', '八個鍵、八根手指，以及不低頭看鍵盤的習慣。第一個單元決定了之後的所有單元。', '打開第 1 課'],
        [r.home, '為什麼要練注音鍵盤', '用注音輸入法打國字，手指按下的是注音符號和聲調。練熟這些按鍵，打國字時就不用再看鍵盤。', '認識這門課']
      ],
      footerAria: 'TypingEase 資源',
      footerLinks: r => [[r.home, '練習'], [r.lessons, '課程'], [r.progress, '進度']],
      footerTag: '慢一點，你會走得更遠。',
      switches: [['EN', '/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
