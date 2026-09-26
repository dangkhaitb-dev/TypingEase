/* bai-hoc/config.th.mjs — cau hinh trang lo trinh cho ban th (tieng Thai).
 *
 * Mot file moi ngon ngu: bai-hoc/generate.mjs nap file nay theo `--lang th`. Bang chuoi nam o day,
 * khong o i18n/ui.th.js — day la cong cu chay luc build.
 *
 * `null` trong `routes` = trang do chua co ban tieng Thai; moi danh sach ben duoi loc null ra.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'th', 'bot-rian', 'index.html'),
    url: 'https://typingease.site/th/bot-rian/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.th.js',
    ui: '/i18n/ui.th.js',
    routes: {
      home: '/th/', lessons: '/th/bot-rian/', learn: '/th/rian/', test: '/th/thotsop-phim/',
      progress: '/th/khwam-kuebna/', games: '/th/kem-fuek-phim/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `หลักสูตรพิมพ์สัมผัสภาษาไทย: ${c.sequence.length} บทเรียน | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course th-pattachote). Xem config.en.mjs.
      family: {
        title: (c, f) => `หลักสูตรพิมพ์สัมผัสแป้น${f.name}: ${c.sequence.length} บทเรียน | TypingEase`,
        description: (c, f) => `หลักสูตรพิมพ์สัมผัสฟรีที่สร้างบน${f.keyboard} ทีละแป้น: ${c.units.length} หน่วย ${c.sequence.length} บทเรียน ตั้งแต่แถวเหย้าไปจนถึงเลขไทย เครื่องหมาย และข้อความยาว`,
        h1: (c, f) => `หลักสูตรพิมพ์สัมผัส · ${f.name} · ${c.sequence.length} บทเรียน`
      },
      description: c => `หลักสูตรพิมพ์สัมผัสภาษาไทยฟรีบนแป้นพิมพ์เกษมณี: ${c.units.length} หน่วย ${c.sequence.length} บทเรียน ตั้งแต่แถวเหย้า ฟ ห ก ด ่ า ส ว ไปจนถึงเลขไทย เครื่องหมาย และข้อความยาว`,
      nav: r => [[r.home, 'ฝึกพิมพ์'], [r.lessons, 'บทเรียน'], [r.progress, 'ความก้าวหน้า'], [r.test, 'ทดสอบ'], [r.games, 'เกม']],
      navAria: 'เมนูหลัก',
      enter: 'เริ่ม',
      eyebrow: 'หลักสูตรของ TypingEase',
      h1: c => `หลักสูตรพิมพ์สัมผัส · ${c.sequence.length} บทเรียน · ${c.units.length} หน่วย`,
      intro: 'ตั้งแต่สองแป้นที่มีปุ่มนูนไปจนถึงข้อความทั้งย่อหน้าในจังหวะที่ดี แต่ละบทสอนแป้นใหม่สองแป้น\n          แบ่งเป็นหน้าจอสั้น ๆ สลับระหว่างแบบฝึกกับชุดจับเวลา ใช้เวลาประมาณห้านาทีต่อบท',
      countDone: total => `เรียนแล้ว 0/${total} บท`,
      cta: 'เริ่มบทที่ 1',
      sideUnit: 'หน่วย', sideOther: 'เพิ่มเติม', sideAria: 'รายการหน่วย',
      otherLinks: r => [[r.home, 'เลือกแป้นพิมพ์'], [r.test, 'ทดสอบความเร็ว'], [r.progress, 'ความก้าวหน้าของคุณ']],
      unitKicker: n => `หน่วยที่ ${n}`,
      locked: 'ยังไม่เปิด',
      unitScore: 'บทที่เรียนแล้ว',
      noteNone: 'หน่วยนี้ยังเขียนอยู่ บทเรียนจะเปิดทีละบท',
      noteSome: (ready, total) => `เขียนเสร็จแล้ว ${ready} จาก ${total} บท ที่เหลือกำลังตามมา`,
      kind: { keys: '', review: 'ทบทวน', weak: 'เฉพาะตัว', test: 'ทดสอบ' },
      lessonMeta: (n, meta, tag) => `บทที่ ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} วินาที`, screens: n => `${n} หน้าจอ`, minutes: n => `${n} นาที`,
      soon: 'เร็ว ๆ นี้',
      exploreEyebrow: 'ก่อนเริ่ม', exploreTitle: 'ควรรู้ไว้',
      explore: r => [
        [r.learn, 'เริ่มที่แถวเหย้า', 'แปดแป้น แปดนิ้ว และนิสัยไม่ก้มมองแป้นพิมพ์ หน่วยแรกเป็นตัวกำหนดหน่วยที่เหลือทั้งหมด', 'เปิดบทที่ 1'],
        [r.home, 'พิมพ์บนแป้นพิมพ์ของคุณเอง', 'QWERTY, AZERTY, QWERTZ, เกษมณี, ปัตตะโชติ, อาหรับ, JIS ผังแป้นพิมพ์จริง 119 แบบ และบทเรียนจะตามผังที่คุณเลือก', 'ดูผังแป้นพิมพ์']
      ],
      footerAria: 'แหล่งเรียนรู้ของ TypingEase',
      footerLinks: r => [[r.home, 'ฝึกพิมพ์'], [r.lessons, 'บทเรียน'], [r.progress, 'ความก้าวหน้า']],
      footerTag: 'ช้าลงอีกนิด แล้วจะไปได้ไกลกว่าเดิมมาก',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'Bản tiếng Việt']]
    }
};
