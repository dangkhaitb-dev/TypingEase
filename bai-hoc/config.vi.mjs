/* bai-hoc/config.vi.mjs — cau hinh trang lo trinh cho ban vi.
 *
 * Mot file moi ngon ngu, khong phai mot bang CONFIG chung: them ngon ngu la them file, va hai
 * nguoi them hai ngon ngu cung luc thi khong dam vao nhau. bai-hoc/generate.mjs nap file nay
 * theo `--lang`.
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.vi.js. Day la cong cu chay luc build; chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc. Day chung sang file i18n la bat moi khach tai
 * ve mot bang chuoi chi de dung lai thu da co trong trang.
 *
 * `null` trong `routes` = trang do chua co ban ngon ngu nay. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'bai-hoc', 'index.html'),
    url: 'https://typingease.site/bai-hoc/',
    alt: 'https://typingease.site/lessons/',
    curriculumScript: '/data/curriculum.vi.js',
    ui: null,
    routes: {
      home: '/vi/', lessons: '/bai-hoc/', learn: '/hoc/', test: '/kiem-tra-toc-do-go/',
      progress: '/tien-do/', free: '/luyen-tu-do/', weak: '/luyen-phim-yeu/', games: '/tro-choi/',
      guide: '/cach-go-10-ngon/', wpm: '/cach-tang-wpm/'
    },
    s: {
      title: c => `Lộ trình luyện gõ 10 ngón · ${c.sequence.length} bài | TypingEase`,
      description: c => `Lộ trình luyện gõ 10 ngón đầy đủ: ${c.units.length} unit, ${c.sequence.length} bài từ hàng phím cơ sở đến tiếng Việt có dấu, số và ký hiệu. Xem tiến độ từng bài và học tiếp ngay.`,
      nav: r => [[r.home, 'Luyện gõ'], [r.lessons, 'Lộ trình'], [r.progress, 'Tiến độ'], [r.test, 'Kiểm tra tốc độ'], [r.games, 'Trò chơi']],
      navAria: 'Điều hướng chính',
      enter: 'Vào học',
      eyebrow: 'Giáo trình TypingEase',
      h1: c => `Lộ trình gõ 10 ngón · ${c.sequence.length} bài · ${c.units.length} unit`,
      intro: 'Từ hai phím có gờ nổi đến đoạn văn tiếng Việt có dấu. Mỗi bài dạy hai phím mới,\n          chia thành nhiều screen ngắn, xen kẽ drill và bài gõ nhanh — khoảng năm phút một bài.',
      countDone: total => `Đã xong 0/${total} bài`,
      cta: 'Bắt đầu Bài 1',
      sideUnit: 'Unit', sideOther: 'Khác', sideAria: 'Danh sách unit',
      otherLinks: r => [[r.weak, 'Luyện phím yếu'], [r.test, 'Kiểm tra tốc độ'], [r.free, 'Luyện tự do'], [r.progress, 'Tiến độ của bạn']],
      unitKicker: n => `Unit ${n}`,
      locked: 'Chưa mở',
      unitScore: 'bài đã xong',
      noteNone: 'Nội dung unit này đang được viết — bạn sẽ thấy bài mở dần.',
      noteSome: (ready, total) => `Đã có nội dung cho ${ready}/${total} bài; phần còn lại đang được viết.`,
      kind: { keys: '', review: 'Ôn tập', weak: 'Cá nhân hoá', test: 'Kiểm tra' },
      lessonMeta: (n, meta, tag) => `Bài ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} giây`, screens: n => `${n} screen`, minutes: n => `${n}'`,
      soon: 'Sắp có',
      exploreEyebrow: 'Đọc thêm', exploreTitle: 'Trước khi bắt đầu',
      explore: r => [
        [r.guide, 'Cách gõ 10 ngón', 'Vị trí ngón tay trên hàng phím cơ sở, tư thế ngồi và những lỗi thường gặp của người mới.', 'Xem hướng dẫn'],
        [r.wpm, 'Cách tăng WPM', 'Vì sao độ chính xác đi trước tốc độ, và cách luyện để WPM tăng mà không sinh tật.', 'Đọc tiếp'],
        [r.test, 'Kiểm tra tốc độ gõ', 'Đo WPM và độ chính xác trong bài test từ 15 giây đến 10 phút để biết mình đang ở đâu.', 'Kiểm tra ngay']
      ],
      footerAria: 'Tài nguyên TypingEase',
      footerLinks: r => [[r.lessons, 'Lộ trình'], [r.progress, 'Tiến độ'], [r.free, 'Luyện tự do'], [r.games, 'Trò chơi gõ phím'], [r.guide, 'Cách gõ 10 ngón']],
      footerTag: 'Gõ chậm một chút, rồi bạn sẽ đi rất xa.',
      switches: [['EN', '/lessons/', 'en', 'English version'], ['ES', '/es/lecciones/', 'es', 'Versión en español']]
    }
};
