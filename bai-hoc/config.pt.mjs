/* bai-hoc/config.pt.mjs — cấu hình trang lộ trình tiếng Bồ Đào Nha (Brasil) cho bai-hoc/generate.mjs.
 *
 * Chạy:  node bai-hoc/generate.mjs --lang pt   →  pt/licoes/index.html
 *
 * BẢNG CHUỖI NẰM Ở ĐÂY, KHÔNG Ở i18n/ui.pt.js. Đây là công cụ chạy lúc build; chữ nó sinh ra
 * đã nằm sẵn trong HTML khi trình duyệt nhận được.
 *
 * ĐƯỜNG DẪN TUYỆT ĐỐI, vì cùng một chuỗi được dùng cho trang sâu hai cấp (/pt/licoes/) lẫn cho
 * các liên kết trỏ về gốc.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
  out: path.join(root, 'pt', 'licoes', 'index.html'),
  url: 'https://typingease.site/pt/licoes/',
  // `alt` chỉ còn là di sản: hreflang nay dựng từ bảng ALTERNATES trong generate.mjs.
  alt: 'https://typingease.site/lessons/',
  curriculumScript: '/data/curriculum.pt.js',
  ui: '/i18n/ui.pt.js',

  routes: {
    home: '/pt/', lessons: '/pt/licoes/', learn: '/pt/aprender/',
    // Chưa có bản tiếng Bồ. `null` là tín hiệu BỎ liên kết.
    test: '/pt/teste-de-digitacao/', progress: '/pt/progresso/', games: '/pt/jogos-de-digitacao/', free: null, weak: null, guide: null, wpm: null
  },

  s: {
    title: c => `Curso de digitação online: ${c.sequence.length} lições | TypingEase`,
    // Trang lộ trình của MỘT HỌ bàn phím khác (--course pt-sem-teclas-mortas). Xem config.en.mjs.
    family: {
      title: (c, f) => `Curso de digitação: ${f.name} | TypingEase`,
      description: (c, f) => `Curso de digitação gratuito feito sobre ${f.keyboard}, tecla por tecla: ${c.units.length} unidades e ${c.sequence.length} lições, da fila de repouso aos textos longos.`,
      h1: (c, f) => `Curso de digitação · ${f.name} · ${c.sequence.length} lições`
    },
    description: c => `Curso de digitação online e gratuito: ${c.units.length} unidades e ${c.sequence.length} lições no teclado ABNT2, da fila de repouso aos números, aos sinais e aos textos longos.`,
    nav: r => [[r.home, 'Praticar'], [r.lessons, 'Curso'], [r.progress, 'Progresso'], [r.test, 'Teste de velocidade'], [r.games, 'Jogos']],
    navAria: 'Navegação principal',
    enter: 'Começar',
    eyebrow: 'O curso do TypingEase',
    h1: c => `Curso de digitação · ${c.sequence.length} lições · ${c.units.length} unidades`,
    intro: 'Das duas teclas com relevo até parágrafos inteiros em bom ritmo. Cada lição ensina\n          duas teclas novas em telas curtas, alternando exercícios e rajadas cronometradas —\n          uns cinco minutos cada uma.',
    countDone: total => `0/${total} lições feitas`,
    cta: 'Começar a lição 1',
    sideUnit: 'Unidades', sideOther: 'Mais', sideAria: 'Lista de unidades',
    otherLinks: r => [[r.home, 'Escolha o seu teclado'], [r.test, 'Teste de velocidade'], [r.progress, 'O seu progresso']],
    unitKicker: n => `Unidade ${n}`,
    locked: 'Fechada',
    unitScore: 'lições feitas',
    noteNone: 'Esta unidade ainda está sendo escrita — as lições vão abrir aos poucos.',
    noteSome: (ready, total) => `${ready} de ${total} lições estão escritas; o resto está a caminho.`,
    kind: { keys: '', review: 'Revisão', weak: 'Personalizada', test: 'Teste' },
    lessonMeta: (n, meta, tag) => `Lição ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
    seconds: n => `${n} segundos`, screens: n => `${n} telas`, minutes: n => `${n} min`,
    soon: 'Em breve',
    exploreEyebrow: 'Antes de começar', exploreTitle: 'Vale a pena saber',
    explore: r => [
      [r.learn, 'Comece pela fila de repouso', 'Oito teclas, oito dedos e o hábito de não olhar para baixo. A primeira unidade decide todas as outras.', 'Abrir a lição 1'],
      [r.home, 'Digite no seu próprio teclado', 'QWERTY, AZERTY, QWERTZ, devanágari, árabe, JIS — layouts reais, e o curso acompanha o que você escolher.', 'Ver os layouts']
    ],
    footerAria: 'Recursos do TypingEase',
    footerLinks: r => [[r.lessons, 'Curso'], [r.learn, 'Lições'], [r.progress, 'Progresso'], [r.test, 'Teste de velocidade'], [r.games, 'Jogos de digitação']],
    footerTag: 'Vá um pouco mais devagar e você vai chegar muito mais longe.',
    switches: [
      ['EN', '/lessons/', 'en', 'English version'],
      ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']
    ]
  }
};
