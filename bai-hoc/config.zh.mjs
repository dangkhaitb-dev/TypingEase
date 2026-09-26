/* bai-hoc/config.zh.mjs — cau hinh trang lo trinh cho ban zh (tieng Trung gian the, go pinyin).
 *
 * Cung hinh dang voi config.es.mjs — xem chu thich o do. bai-hoc/generate.mjs nap file nay
 * theo `--lang zh`.
 *
 * `null` trong `routes` = trang do chua co ban tieng Trung. Moi danh sach ben duoi loc null
 * ra, nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'zh', 'kecheng', 'index.html'),
    url: 'https://typingease.site/zh/kecheng/',
    // `alt` chi con la di san: hreflang nay dung tu bang ALTERNATES trong generate.mjs.
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.zh.js',
    ui: '/i18n/ui.zh.js',
    routes: {
      home: '/zh/', lessons: '/zh/kecheng/', learn: '/zh/xuexi/', test: null,
      progress: '/zh/jindu/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `拼音打字练习：${c.sequence.length} 课十指盲打 | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac. Tieng Trung hien chi co mot ho, nhung
      // generate.mjs doi khoi nay cho moi config, nen giu cho dong nhat.
      family: {
        title: (c, f) => `${f.name}打字练习：${c.sequence.length} 课 | TypingEase`,
        description: (c, f) => `在${f.keyboard}上逐键编排的免费打字练习：${c.units.length} 个单元、${c.sequence.length} 课，从基准行到数字、符号和长文本。`,
        h1: (c, f) => `盲打课程 · ${f.name} · ${c.sequence.length} 课`
      },
      description: c => `${c.units.length} 个单元、${c.sequence.length} 课的免费拼音打字练习，从基准行到数字、符号和长文本。练的是输入法里真正要打的拼音字母，不带声调。`,
      nav: r => [[r.home, '练习'], [r.lessons, '课程'], [r.progress, '进度'], [r.test, '测试']],
      navAria: '主导航',
      enter: '开始',
      eyebrow: 'TypingEase 课程',
      h1: c => `拼音盲打课程 · ${c.sequence.length} 课 · ${c.units.length} 个单元`,
      intro: '从两个有凸起的键，到节奏稳定的完整段落。你打的是拼音字母，不带声调，就像在输入法里打字一样，\n          输入法再把它们变成汉字。每一课教两个新键，分成一屏一屏的短练习，练习和限时连打交替进行，\n          每课大约五分钟。',
      countDone: total => `已完成 0/${total} 课`,
      cta: '开始第 1 课',
      sideUnit: '单元', sideOther: '其他', sideAria: '单元列表',
      otherLinks: r => [[r.home, '课程首页'], [r.test, '打字速度测试'], [r.progress, '你的进度']],
      unitKicker: n => `第 ${n} 单元`,
      locked: '未开放',
      unitScore: '课已完成',
      noteNone: '这个单元还在编写中，课程会一课一课地开放。',
      noteSome: (ready, total) => `${total} 课中已写好 ${ready} 课，其余的随后推出。`,
      kind: { keys: '', review: '复习', weak: '个人', test: '测验' },
      lessonMeta: (n, meta, tag) => `第 ${n} 课 · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} 秒`, screens: n => `${n} 屏`, minutes: n => `${n} 分钟`,
      soon: '即将推出',
      exploreEyebrow: '开始之前', exploreTitle: '值得知道',
      explore: r => [
        [r.learn, '从基准行开始', '八个键、八个手指，以及不低头看键盘的习惯。第一个单元决定了之后的所有单元。', '打开第 1 课'],
        [r.home, '为什么练拼音', '用拼音输入法打汉字，手指实际按下的是拼音字母。练熟这些按键，打汉字时就不用再看键盘。', '了解这门课']
      ],
      footerAria: 'TypingEase 资源',
      footerLinks: r => [[r.home, '练习'], [r.lessons, '课程'], [r.progress, '进度']],
      footerTag: '慢一点，你会走得更远。',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
