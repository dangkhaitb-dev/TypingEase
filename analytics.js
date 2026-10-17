(function (global) {
  // Firebase Analytics (GA4) cho typingease.site — CHỈ sau khi người dùng đồng ý.
  //
  // Dùng thẳng gtag.js thay vì Firebase JS SDK: trên web, Firebase Analytics CHÍNH LÀ gtag.js bọc
  // thêm một lớp, còn site này tĩnh, không có bundler — nạp cả SDK chỉ để gọi gtag là phí. Dữ liệu
  // vẫn vào đúng property gắn với project Firebase `typingease-75e4f` (qua measurement ID).
  //
  // Không nhúng trực tiếp vào từng trang: sw-register.js đã có mặt trên mọi trang không phải trang
  // chuyển hướng, và nó chèn file này — một chỗ duy nhất thay vì sửa 300 trang và 10 máy sinh.
  //
  // Đồng ý trước, tải sau: gtag.js đặt cookie `_ga`, nên trước khi người dùng bấm "Cho phép" thì
  // KHÔNG có request nào tới Google (không gtag.js, không google-analytics). Lựa chọn nằm ở
  // localStorage; bấm "Cho phép" là tải gtag.js và đếm trang ngay, không cần tải lại. Đổi ý lúc nào
  // cũng được qua dòng "Cài đặt cookie" mà file này chèn vào chân trang (`.footer-legal`); từ chối
  // sau khi đã cho phép thì tắt gtag và xoá cookie `_ga`. Chữ của thanh nằm luôn ở đây (27 ngôn
  // ngữ) để không phải sinh lại trang nào.
  //
  // Chỉ chạy trên tên miền thật: e2e, preview và localhost không được làm bẩn số liệu. e2e đặt
  // `window.TYPINGEASE_ANALYTICS_FORCE = true` trước khi trang chạy để thử luồng đồng ý.
  //
  // Sự kiện tuỳ chỉnh: gọi `TypingEaseAnalytics.track(tên, { ... })`. Hàm luôn tồn tại (kể cả khi
  // không track) nên nơi gọi không phải kiểm tra gì; `language` được gắn tự động. Sự kiện trước
  // khi đồng ý bị bỏ, không xếp hàng chờ.
  const MEASUREMENT_ID = 'G-5E3FSNW2WL';
  const STORE = 'typingease-analytics-consent-v1';
  const ENABLED = /(^|\.)typingease\.site$/.test(global.location.hostname) || global.TYPINGEASE_ANALYTICS_FORCE === true;
  const doc = global.document;
  const lang = () => (doc.documentElement.lang || 'en').toLowerCase();

  // [câu hỏi, cho phép, từ chối, chi tiết, cài đặt cookie]
  const TEXT = {
    en: ['May we use Google Analytics cookies to count visits and improve TypingEase?', 'Allow', 'Decline', 'Details', 'Cookie settings'],
    vi: ['Cho phép TypingEase dùng cookie Google Analytics để đếm lượt truy cập và cải thiện trang?', 'Cho phép', 'Từ chối', 'Chi tiết', 'Cài đặt cookie'],
    es: ['¿Podemos usar cookies de Google Analytics para contar visitas y mejorar TypingEase?', 'Permitir', 'Rechazar', 'Detalles', 'Configuración de cookies'],
    pt: ['Podemos usar cookies do Google Analytics para contar visitas e melhorar o TypingEase?', 'Permitir', 'Recusar', 'Detalhes', 'Configurações de cookies'],
    fr: ['Pouvons-nous utiliser des cookies Google Analytics pour compter les visites et améliorer TypingEase ?', 'Accepter', 'Refuser', 'Détails', 'Paramètres des cookies'],
    de: ['Dürfen wir Cookies von Google Analytics verwenden, um Besuche zu zählen und TypingEase zu verbessern?', 'Erlauben', 'Ablehnen', 'Details', 'Cookie-Einstellungen'],
    it: ['Possiamo usare i cookie di Google Analytics per contare le visite e migliorare TypingEase?', 'Consenti', 'Rifiuta', 'Dettagli', 'Impostazioni cookie'],
    nl: ['Mogen we cookies van Google Analytics gebruiken om bezoeken te tellen en TypingEase te verbeteren?', 'Toestaan', 'Weigeren', 'Details', 'Cookie-instellingen'],
    pl: ['Czy możemy używać plików cookie Google Analytics, aby liczyć odwiedziny i ulepszać TypingEase?', 'Zezwól', 'Odrzuć', 'Szczegóły', 'Ustawienia cookie'],
    ru: ['Можно ли использовать файлы cookie Google Analytics, чтобы считать посещения и улучшать TypingEase?', 'Разрешить', 'Отклонить', 'Подробнее', 'Настройки cookie'],
    uk: ['Чи можемо ми використовувати файли cookie Google Analytics, щоб рахувати відвідування й покращувати TypingEase?', 'Дозволити', 'Відхилити', 'Докладніше', 'Налаштування cookie'],
    tr: ['Ziyaretleri saymak ve TypingEase’i geliştirmek için Google Analytics çerezlerini kullanabilir miyiz?', 'İzin ver', 'Reddet', 'Ayrıntılar', 'Çerez ayarları'],
    id: ['Bolehkah kami memakai cookie Google Analytics untuk menghitung kunjungan dan meningkatkan TypingEase?', 'Izinkan', 'Tolak', 'Detail', 'Pengaturan cookie'],
    ms: ['Bolehkah kami menggunakan kuki Google Analytics untuk mengira lawatan dan menambah baik TypingEase?', 'Benarkan', 'Tolak', 'Butiran', 'Tetapan kuki'],
    fil: ['Puwede ba naming gamitin ang cookies ng Google Analytics para bilangin ang mga pagbisita at pagandahin ang TypingEase?', 'Payagan', 'Tanggihan', 'Detalye', 'Mga setting ng cookie'],
    sw: ['Je, tunaweza kutumia vidakuzi vya Google Analytics kuhesabu matembeleo na kuboresha TypingEase?', 'Ruhusu', 'Kataa', 'Maelezo', 'Mipangilio ya vidakuzi'],
    ja: ['訪問数を数えて TypingEase を改善するため、Google アナリティクスの Cookie を使用してもよろしいですか？', '許可する', '拒否する', '詳細', 'Cookie 設定'],
    ko: ['방문 수를 집계하고 TypingEase를 개선하기 위해 Google 애널리틱스 쿠키를 사용해도 될까요?', '허용', '거부', '자세히', '쿠키 설정'],
    zh: ['我们可以使用 Google Analytics Cookie 统计访问量并改进 TypingEase 吗？', '允许', '拒绝', '详情', 'Cookie 设置'],
    'zh-tw': ['我們可以使用 Google Analytics Cookie 統計造訪次數並改善 TypingEase 嗎？', '允許', '拒絕', '詳情', 'Cookie 設定'],
    th: ['เราขอใช้คุกกี้ของ Google Analytics เพื่อนับจำนวนการเข้าชมและปรับปรุง TypingEase ได้ไหม', 'อนุญาต', 'ปฏิเสธ', 'รายละเอียด', 'ตั้งค่าคุกกี้'],
    hi: ['क्या हम विज़िट गिनने और TypingEase को बेहतर बनाने के लिए Google Analytics कुकी का उपयोग कर सकते हैं?', 'अनुमति दें', 'अस्वीकार करें', 'विवरण', 'कुकी सेटिंग'],
    bn: ['ভিজিট গুনতে ও TypingEase উন্নত করতে আমরা কি Google Analytics কুকি ব্যবহার করতে পারি?', 'অনুমতি দিন', 'প্রত্যাখ্যান', 'বিস্তারিত', 'কুকি সেটিংস'],
    ar: ['هل تسمح لنا باستخدام ملفات تعريف الارتباط من Google Analytics لإحصاء الزيارات وتحسين TypingEase؟', 'سماح', 'رفض', 'التفاصيل', 'إعدادات ملفات تعريف الارتباط'],
    fa: ['آیا اجازه می‌دهید برای شمارش بازدیدها و بهبود TypingEase از کوکی‌های Google Analytics استفاده کنیم؟', 'اجازه می‌دهم', 'رد', 'جزئیات', 'تنظیمات کوکی'],
    he: ['האם נוכל להשתמש בקובצי Cookie של Google Analytics כדי לספור ביקורים ולשפר את TypingEase?', 'לאשר', 'לדחות', 'פרטים', 'הגדרות Cookie'],
    ur: ['کیا ہم وزٹس گننے اور TypingEase کو بہتر بنانے کے لیے Google Analytics کوکیز استعمال کر سکتے ہیں؟', 'اجازت دیں', 'مسترد کریں', 'تفصیلات', 'کوکی ترتیبات']
  };
  // Cùng cách quy `<html lang>` về mã ngôn ngữ như scripts/lib/legal.mjs: zh-Hant / zh-TW → zh-tw.
  const code = () => {
    const raw = lang();
    return TEXT[raw] ? raw : /^zh-(tw|hant)/.test(raw) ? 'zh-tw' : TEXT[raw.split('-')[0]] ? raw.split('-')[0] : 'en';
  };

  // localStorage có thể ném (chế độ riêng tư, bị chặn): khi đó lựa chọn chỉ sống trong trang này.
  let memory = null;
  const readChoice = () => { try { return global.localStorage.getItem(STORE) || memory; } catch { return memory; } };
  const saveChoice = value => { memory = value; try { global.localStorage.setItem(STORE, value); } catch { /* xem trên */ } };

  let loaded = false;
  const granted = () => ENABLED && readChoice() === 'granted';

  global.TypingEaseAnalytics = {
    track(name, params) {
      if (granted() && loaded) global.gtag('event', name, { language: lang(), ...params });
    },
    // Cho e2e và cho dòng "Cài đặt cookie": mở lại thanh hỏi.
    openSettings: () => showBar(),
    consent: () => readChoice()
  };
  if (!ENABLED) return;

  function load() {
    global[`ga-disable-${MEASUREMENT_ID}`] = false;
    if (loaded) { global.gtag('config', MEASUREMENT_ID, { content_group: lang() }); return; }
    loaded = true;
    global.dataLayer = global.dataLayer || [];
    global.gtag = function () { global.dataLayer.push(arguments); };
    global.gtag('js', new Date());
    global.gtag('config', MEASUREMENT_ID, { content_group: lang() });
    const script = doc.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
    // Bị chặn (adblock, mất mạng) thì thôi: trang không phụ thuộc gì vào analytics.
    script.onerror = () => {};
    doc.head.appendChild(script);
  }

  function stop() {
    global[`ga-disable-${MEASUREMENT_ID}`] = true;
    // Xoá `_ga`, `_ga_<id>` ở mọi miền mà gtag có thể đã đặt (tên miền và miền cha).
    const host = global.location.hostname;
    const domains = ['', host, `.${host}`, '.typingease.site'];
    for (const pair of doc.cookie.split(';')) {
      const name = pair.split('=')[0].trim();
      if (!/^_ga/.test(name)) continue;
      for (const domain of domains)
        doc.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ''}`;
    }
  }

  let bar = null;
  function privacyUrl() {
    // Chân trang (nếu có) đã mang đúng URL của ngôn ngữ này; liên kết cuối là Quyền riêng tư.
    const links = doc.querySelectorAll('.footer-legal a:not([data-act])');
    if (links.length) return links[links.length - 1].getAttribute('href');
    const lc = code();
    return lc === 'en' ? '/privacy/' : lc === 'vi' ? '/vi/quyen-rieng-tu/' : `/${lc}/privacy/`;
  }
  function showBar() {
    if (bar) return;
    if (!doc.body) { doc.addEventListener('DOMContentLoaded', showBar, { once: true }); return; }
    const [question, allow, decline, details, settings] = TEXT[code()];
    bar = doc.createElement('div');
    bar.className = 'consent-bar';
    bar.id = 'consent-bar';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', settings);
    const text = doc.createElement('p');
    text.textContent = `${question} `;
    const link = doc.createElement('a');
    link.href = privacyUrl();
    link.textContent = details;
    text.appendChild(link);
    bar.appendChild(text);
    for (const [act, label] of [['decline', decline], ['allow', allow]]) {
      const button = doc.createElement('button');
      button.type = 'button';
      button.dataset.act = act;
      button.textContent = label;
      if (act === 'allow') button.className = 'is-primary';
      bar.appendChild(button);
    }
    bar.addEventListener('click', event => {
      const act = event.target.closest('button')?.dataset.act;
      if (!act) return;
      saveChoice(act === 'allow' ? 'granted' : 'denied');
      if (act === 'allow') load(); else stop();
      bar.remove();
      bar = null;
    });
    doc.body.appendChild(bar);
  }

  function addSettingsLink() {
    const footer = doc.querySelector('.footer-legal');
    if (!footer || footer.querySelector('[data-act="consent"]')) return;
    const sep = doc.createElement('span');
    sep.setAttribute('aria-hidden', 'true');
    sep.textContent = ' · ';
    const link = doc.createElement('a');
    link.href = '#';
    link.dataset.act = 'consent';
    link.textContent = TEXT[code()][4];
    link.addEventListener('click', event => { event.preventDefault(); showBar(); });
    footer.append(sep, link);
  }

  if (readChoice() === 'granted') load();
  else if (readChoice() !== 'denied') showBar();
  if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', addSettingsLink, { once: true });
  else addSettingsLink();
})(window);
