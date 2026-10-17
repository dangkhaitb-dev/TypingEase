// Banner xin phép dùng cookie analytics — giống solprompter (features/cookie-banner), chữ theo
// `<html lang>` cho 27 ngôn ngữ có trang pháp lý.
//
// Hai nút ngang hàng, không nút nào được làm nổi để "dụ" bấm đồng ý; chưa chọn thì analytics
// không tải. Mỗi dòng TEXT: [câu hỏi, Cho phép, Từ chối, aria-label, tên trang Quyền riêng tư,
// đường dẫn của nó]. Hai cột cuối chép từ content/legal/<lang>.mjs (footer.privacy, urls.privacy):
// trang bài học không có chân trang nên không lấy từ DOM được.
//
// Banner không lấy focus khi hiện — người đang gõ bài vẫn gõ tiếp; bấm nút xong thì trả focus về
// chỗ cũ. Nút có `data-cookie-settings` (trang Quyền riêng tư) mở lại banner để đổi ý.
// Xem thử ở localhost: `TypingEaseConsent.show()`.
import { getAnalyticsConsent, setAnalyticsConsent } from './cookie-consent.js';

const TEXT = {
  en: ['May we use analytics cookies to see how TypingEase is used? What you type is never sent.', 'Allow', 'Decline', 'Cookie consent', 'Privacy Policy', '/privacy/'],
  es: ['¿Podemos usar cookies de análisis para saber cómo se usa TypingEase? Lo que escribes nunca se envía.', 'Permitir', 'Rechazar', 'Consentimiento de cookies', 'Política de privacidad', '/es/privacy/'],
  de: ['Dürfen wir Analyse-Cookies verwenden, um zu sehen, wie TypingEase genutzt wird? Was du tippst, wird nie übertragen.', 'Erlauben', 'Ablehnen', 'Cookie-Einwilligung', 'Datenschutzerklärung', '/de/privacy/'],
  it: ['Possiamo usare cookie di analisi per capire come viene usato TypingEase? Ciò che digiti non viene mai inviato.', 'Consenti', 'Rifiuta', 'Consenso ai cookie', 'Informativa sulla privacy', '/it/privacy/'],
  fr: ['Pouvons-nous utiliser des cookies de mesure d’audience pour voir comment TypingEase est utilisé ? Ce que vous tapez n’est jamais envoyé.', 'Accepter', 'Refuser', 'Consentement aux cookies', 'Politique de confidentialité', '/fr/privacy/'],
  vi: ['Cho phép TypingEase dùng cookie phân tích để biết trang được dùng thế nào? Những gì bạn gõ không bao giờ được gửi đi.', 'Cho phép', 'Từ chối', 'Đồng ý cookie', 'Chính sách quyền riêng tư', '/vi/quyen-rieng-tu/'],
  ar: ['هل تسمح لنا باستخدام ملفات تعريف الارتباط التحليلية لمعرفة كيفية استخدام TypingEase؟ لا يُرسَل أبدًا ما تكتبه.', 'سماح', 'رفض', 'الموافقة على ملفات تعريف الارتباط', 'سياسة الخصوصية', '/ar/privacy/'],
  bn: ['TypingEase কীভাবে ব্যবহৃত হয় তা জানতে আমরা কি অ্যানালিটিক্স কুকি ব্যবহার করতে পারি? আপনি যা টাইপ করেন তা কখনও পাঠানো হয় না।', 'অনুমতি দিন', 'প্রত্যাখ্যান', 'কুকি সম্মতি', 'গোপনীয়তা নীতি', '/bn/privacy/'],
  zh: ['我们可以使用分析 Cookie 来了解 TypingEase 的使用情况吗？你输入的内容绝不会被发送。', '允许', '拒绝', 'Cookie 同意', '隐私政策', '/zh/privacy/'],
  'zh-tw': ['我們可以使用分析 Cookie 來了解 TypingEase 的使用情況嗎？你輸入的內容絕不會被傳送。', '允許', '拒絕', 'Cookie 同意', '隱私權政策', '/zh-tw/privacy/'],
  nl: ['Mogen we analytische cookies gebruiken om te zien hoe TypingEase wordt gebruikt? Wat je typt, wordt nooit verstuurd.', 'Toestaan', 'Weigeren', 'Cookietoestemming', 'Privacybeleid', '/nl/privacy/'],
  fil: ['Puwede ba kaming gumamit ng analytics cookies para makita kung paano ginagamit ang TypingEase? Hindi kailanman ipinapadala ang tina-type mo.', 'Payagan', 'Tanggihan', 'Pahintulot sa cookie', 'Patakaran sa Privacy', '/fil/privacy/'],
  he: ['האם נוכל להשתמש בעוגיות ניתוח כדי לראות איך משתמשים ב-TypingEase? מה שאתם מקלידים לעולם לא נשלח.', 'אישור', 'דחייה', 'הסכמה לעוגיות', 'מדיניות פרטיות', '/he/privacy/'],
  hi: ['क्या हम यह जानने के लिए एनालिटिक्स कुकीज़ का उपयोग कर सकते हैं कि TypingEase का उपयोग कैसे होता है? आप जो टाइप करते हैं, वह कभी नहीं भेजा जाता।', 'अनुमति दें', 'अस्वीकार करें', 'कुकी सहमति', 'गोपनीयता नीति', '/hi/privacy/'],
  id: ['Bolehkah kami memakai cookie analitik untuk melihat cara TypingEase digunakan? Apa yang Anda ketik tidak pernah dikirim.', 'Izinkan', 'Tolak', 'Persetujuan cookie', 'Kebijakan Privasi', '/id/privacy/'],
  ja: ['TypingEase の利用状況を知るために、分析用 Cookie を使用してもよろしいですか？入力した内容が送信されることはありません。', '許可する', '拒否する', 'Cookie の同意', 'プライバシーポリシー', '/ja/privacy/'],
  ko: ['TypingEase 이용 현황을 파악하기 위해 분석 쿠키를 사용해도 될까요? 입력한 내용은 절대 전송되지 않습니다.', '허용', '거부', '쿠키 동의', '개인정보처리방침', '/ko/privacy/'],
  ms: ['Bolehkah kami menggunakan kuki analitik untuk melihat cara TypingEase digunakan? Apa yang anda taip tidak pernah dihantar.', 'Benarkan', 'Tolak', 'Persetujuan kuki', 'Dasar Privasi', '/ms/privacy/'],
  fa: ['آیا اجازه می‌دهید از کوکی‌های تحلیلی استفاده کنیم تا ببینیم TypingEase چگونه استفاده می‌شود؟ آنچه تایپ می‌کنید هرگز ارسال نمی‌شود.', 'اجازه', 'رد', 'رضایت کوکی', 'حریم خصوصی', '/fa/privacy/'],
  pl: ['Czy możemy używać analitycznych plików cookie, aby sprawdzać, jak korzystasz z TypingEase? To, co piszesz, nigdy nie jest wysyłane.', 'Zezwól', 'Odrzuć', 'Zgoda na pliki cookie', 'Polityka prywatności', '/pl/privacy/'],
  pt: ['Podemos usar cookies de análise para saber como o TypingEase é usado? O que você digita nunca é enviado.', 'Permitir', 'Recusar', 'Consentimento de cookies', 'Política de Privacidade', '/pt/privacy/'],
  ru: ['Можно ли нам использовать аналитические файлы cookie, чтобы понимать, как используется TypingEase? То, что вы печатаете, никогда не отправляется.', 'Разрешить', 'Отклонить', 'Согласие на cookie', 'Политика конфиденциальности', '/ru/privacy/'],
  sw: ['Je, tunaweza kutumia vidakuzi vya uchanganuzi ili kuona jinsi TypingEase inavyotumika? Unachoandika hakitumwi kamwe.', 'Ruhusu', 'Kataa', 'Idhini ya vidakuzi', 'Sera ya Faragha', '/sw/privacy/'],
  th: ['เราขอใช้คุกกี้เพื่อการวิเคราะห์เพื่อดูว่ามีการใช้ TypingEase อย่างไรได้ไหม สิ่งที่คุณพิมพ์จะไม่ถูกส่งออกไปเลย', 'อนุญาต', 'ปฏิเสธ', 'ความยินยอมคุกกี้', 'นโยบายความเป็นส่วนตัว', '/th/privacy/'],
  tr: ['TypingEase’in nasıl kullanıldığını görmek için analiz çerezleri kullanabilir miyiz? Yazdıklarınız asla gönderilmez.', 'İzin ver', 'Reddet', 'Çerez onayı', 'Gizlilik Politikası', '/tr/privacy/'],
  uk: ['Чи можемо ми використовувати аналітичні файли cookie, щоб розуміти, як використовується TypingEase? Те, що ви друкуєте, ніколи не надсилається.', 'Дозволити', 'Відхилити', 'Згода на cookie', 'Політика конфіденційності', '/uk/privacy/'],
  ur: ['کیا ہم یہ جاننے کے لیے اینالیٹکس کوکیز استعمال کر سکتے ہیں کہ TypingEase کیسے استعمال ہوتا ہے؟ آپ جو ٹائپ کرتے ہیں وہ کبھی نہیں بھیجا جاتا۔', 'اجازت دیں', 'مسترد کریں', 'کوکی رضامندی', 'رازداری کی پالیسی', '/ur/privacy/']
};

// Cùng cách chọn ngôn ngữ với legalFooter (tooling/lib/legal.mjs): zh-Hant / zh-TW → zh-tw, pt-BR → pt.
function text() {
  const raw = (document.documentElement.lang || 'en').toLowerCase();
  const code = TEXT[raw] ? raw : /^zh-(tw|hant)/.test(raw) ? 'zh-tw' : raw.split('-')[0];
  return TEXT[code] || TEXT.en;
}

let banner = null;

export function showCookieBanner() {
  if (banner || !document.body) return;
  const [message, allow, decline, label, policyLabel, policyUrl] = text();
  const returnFocus = document.activeElement;

  banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', label);
  const copy = document.createElement('p');
  copy.textContent = `${message} `;
  const link = document.createElement('a');
  link.href = policyUrl;
  link.textContent = policyLabel;
  copy.appendChild(link);
  const actions = document.createElement('div');
  actions.className = 'cookie-banner-actions';
  for (const [decision, caption] of [['denied', decline], ['granted', allow]]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.consent = decision;
    button.textContent = caption;
    actions.appendChild(button);
  }
  banner.append(copy, actions);

  banner.addEventListener('click', event => {
    const decision = event.target.closest('button')?.dataset.consent;
    if (!decision) return;
    setAnalyticsConsent(decision);
    banner.remove();
    banner = null;
    if (returnFocus && returnFocus !== document.body && document.contains(returnFocus)) {
      returnFocus.focus({ preventScroll: true });
    }
  });
  document.body.appendChild(banner);
}

/** Gọi một lần mỗi trang. `show`: hiện banner khi chưa chọn (analytics.js chỉ bật trên tên miền thật). */
export function initCookieBanner({ show }) {
  if (show && !getAnalyticsConsent()) showCookieBanner();
  document.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('[data-cookie-settings]')) showCookieBanner();
  });
  window.TypingEaseConsent = { show: showCookieBanner };
}
