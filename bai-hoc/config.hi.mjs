/* bai-hoc/config.hi.mjs — cau hinh trang lo trinh cho ban hi (tieng Hindi).
 *
 * Mot file moi ngon ngu: bai-hoc/generate.mjs nap file nay theo `--lang hi`. Chuoi o day nam
 * san trong HTML sinh ra, nen khong dua sang i18n/ui.hi.js.
 *
 * `null` trong `routes` = trang do chua co ban tieng Hindi. Moi danh sach ben duoi loc null ra.
 * Xung ho voi nguoi hoc bang "आप".
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'hi', 'path', 'index.html'),
    url: 'https://typingease.site/hi/path/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.hi.js',
    ui: '/i18n/ui.hi.js',
    routes: {
      home: '/hi/', lessons: '/hi/path/', learn: '/hi/seekhen/', test: null,
      progress: '/hi/pragati/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `हिंदी टच टाइपिंग कोर्स: ${c.sequence.length} पाठ | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course hi-bolnagri). Xem config.en.mjs.
      family: {
        title: (c, f) => `${f.name} कीबोर्ड पर हिंदी टाइपिंग कोर्स: ${c.sequence.length} पाठ | TypingEase`,
        description: (c, f) => `${f.keyboard} पर बना मुफ़्त हिंदी टाइपिंग कोर्स, एक-एक कुंजी करके: ${c.units.length} यूनिट और ${c.sequence.length} पाठ, बीच की पंक्ति से अंकों, चिह्नों और लंबे अनुच्छेदों तक।`,
        h1: (c, f) => `हिंदी टाइपिंग कोर्स · ${f.name} · ${c.sequence.length} पाठ`
      },
      description: c => `इनस्क्रिप्ट कीबोर्ड पर मुफ़्त हिंदी टच टाइपिंग कोर्स: ${c.units.length} यूनिट और ${c.sequence.length} पाठ, मात्राओं और व्यंजनों से लेकर शिफ़्ट वाले स्वरों, अंकों और लंबे अनुच्छेदों तक।`,
      nav: r => [[r.home, 'अभ्यास'], [r.lessons, 'कोर्स'], [r.progress, 'प्रगति'], [r.test, 'परीक्षा']],
      navAria: 'मुख्य नेविगेशन',
      enter: 'शुरू करें',
      eyebrow: 'TypingEase का कोर्स',
      h1: c => `हिंदी टाइपिंग कोर्स · ${c.sequence.length} पाठ · ${c.units.length} यूनिट`,
      intro: 'उभार वाली दो कुंजियों से लेकर अच्छी लय में पूरे अनुच्छेदों तक। हर पाठ दो नई कुंजियाँ\n          छोटी-छोटी स्क्रीनों में सिखाता है, अभ्यास और समय वाली झड़ियों को बारी-बारी से —\n          हर पाठ लगभग पाँच मिनट का।',
      countDone: total => `0/${total} पाठ पूरे`,
      cta: 'पाठ 1 शुरू करें',
      sideUnit: 'यूनिट', sideOther: 'और', sideAria: 'यूनिटों की सूची',
      otherLinks: r => [[r.home, 'अपना कीबोर्ड चुनें'], [r.test, 'गति परीक्षा'], [r.progress, 'आपकी प्रगति']],
      unitKicker: n => `यूनिट ${n}`,
      locked: 'बंद',
      unitScore: 'पाठ पूरे',
      noteNone: 'यह यूनिट अभी लिखी जा रही है — पाठ धीरे-धीरे खुलेंगे।',
      noteSome: (ready, total) => `${total} में से ${ready} पाठ लिखे जा चुके हैं; बाकी आ रहे हैं।`,
      kind: { keys: '', review: 'दोहराई', weak: 'आपके लिए', test: 'परीक्षा' },
      lessonMeta: (n, meta, tag) => `पाठ ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} सेकंड`, screens: n => `${n} स्क्रीन`, minutes: n => `${n} मिनट`,
      soon: 'जल्द',
      exploreEyebrow: 'शुरू करने से पहले', exploreTitle: 'जानने लायक',
      explore: r => [
        [r.learn, 'बीच की पंक्ति से शुरू करें', 'आठ कुंजियाँ, आठ उँगलियाँ और नीचे न देखने की आदत। पहली यूनिट बाकी सब तय करती है।', 'पाठ 1 खोलें'],
        [r.home, 'अपने कीबोर्ड पर लिखें', 'QWERTY, AZERTY, इनस्क्रिप्ट, अरबी, JIS — असली कीबोर्ड लेआउट, और कोर्स उसी के साथ चलता है जिसे आप चुनते हैं।', 'लेआउट देखें']
      ],
      footerAria: 'TypingEase के संसाधन',
      footerLinks: r => [[r.home, 'अभ्यास'], [r.lessons, 'कोर्स'], [r.progress, 'प्रगति']],
      footerTag: 'थोड़ा धीरे चलिए, बहुत दूर तक पहुँचेंगे।',
      switches: []
    }
};
