// Nút "Feedback" góc dưới + khung góp ý bật lên ngay trên nút — giống soldetector
// (frontend/src/FeedbackWidget.tsx): email tuỳ chọn, ô nội dung, nút gửi. Gửi về POST /api/feedback
// (functions/api/feedback.js, Cloudflare Pages Function), hàm đó chuyển tiếp thành tin nhắn Telegram.
//
// Nạp dạng module bởi sw-register.js — file có mặt trên mọi trang, như analytics.js. Chữ theo
// `<html lang>` cho 27 ngôn ngữ, cùng cách chọn với cookie-banner.js.
//
// Khung là <dialog> mở bằng show() (không modal, không phủ tối trang), neo ở góc dưới ngay trên
// nút; Esc, nút ✕ hoặc bấm ra ngoài thì đóng. Phím gõ trong khung bị chặn lan ra ngoài, nên bộ gõ
// của bài học / typing test (nghe keydown ở document) không tính chúng là phím gõ bài.
// Mở thử từ console: `TypingEaseFeedback.open()`.

const KEYS = ['fab', 'eyebrow', 'title', 'email', 'message', 'sending', 'close', 'error', 'thanks', 'thanksBody'];
const TEXT = {
  en: ['Feedback', 'Help us improve', 'Send feedback', 'Email (optional, for a reply)', 'What’s working, what’s not?', 'Sending…', 'Close', 'Couldn’t send — please try again.', 'Thanks for your feedback!', 'We read every note and use it to improve TypingEase.'],
  vi: ['Góp ý', 'Giúp chúng tôi làm tốt hơn', 'Gửi góp ý', 'Email (không bắt buộc, để nhận phản hồi)', 'Điều gì ổn, điều gì chưa ổn?', 'Đang gửi…', 'Đóng', 'Chưa gửi được — vui lòng thử lại.', 'Cảm ơn bạn đã góp ý!', 'Chúng tôi đọc mọi góp ý và dùng chúng để cải thiện TypingEase.'],
  es: ['Comentarios', 'Ayúdanos a mejorar', 'Enviar comentarios', 'Correo electrónico (opcional, para responderte)', '¿Qué funciona y qué no?', 'Enviando…', 'Cerrar', 'No se pudo enviar: inténtalo de nuevo.', '¡Gracias por tus comentarios!', 'Leemos cada mensaje y lo usamos para mejorar TypingEase.'],
  de: ['Feedback', 'Hilf uns, besser zu werden', 'Feedback senden', 'E-Mail (optional, für eine Antwort)', 'Was funktioniert gut, was nicht?', 'Wird gesendet…', 'Schließen', 'Senden fehlgeschlagen – bitte versuche es erneut.', 'Danke für dein Feedback!', 'Wir lesen jede Nachricht und nutzen sie, um TypingEase zu verbessern.'],
  it: ['Feedback', 'Aiutaci a migliorare', 'Invia un feedback', 'E-mail (facoltativa, per una risposta)', 'Cosa funziona e cosa no?', 'Invio in corso…', 'Chiudi', 'Invio non riuscito: riprova.', 'Grazie per il tuo feedback!', 'Leggiamo ogni messaggio e lo usiamo per migliorare TypingEase.'],
  fr: ['Avis', 'Aidez-nous à nous améliorer', 'Envoyer un avis', 'E-mail (facultatif, pour une réponse)', 'Qu’est-ce qui fonctionne, qu’est-ce qui ne va pas ?', 'Envoi…', 'Fermer', 'Envoi impossible — veuillez réessayer.', 'Merci pour votre avis !', 'Nous lisons chaque message et l’utilisons pour améliorer TypingEase.'],
  ar: ['ملاحظات', 'ساعدنا على التحسين', 'إرسال ملاحظات', 'البريد الإلكتروني (اختياري، للرد عليك)', 'ما الذي يعمل جيدًا، وما الذي لا يعمل؟', 'جارٍ الإرسال…', 'إغلاق', 'تعذّر الإرسال — يُرجى المحاولة مرة أخرى.', 'شكرًا على ملاحظاتك!', 'نقرأ كل ملاحظة ونستخدمها لتحسين TypingEase.'],
  bn: ['মতামত', 'আমাদের আরও ভালো করতে সাহায্য করুন', 'মতামত পাঠান', 'ইমেল (ঐচ্ছিক, উত্তর পেতে)', 'কী ভালো চলছে, কী চলছে না?', 'পাঠানো হচ্ছে…', 'বন্ধ করুন', 'পাঠানো যায়নি — আবার চেষ্টা করুন।', 'আপনার মতামতের জন্য ধন্যবাদ!', 'আমরা প্রতিটি মতামত পড়ি এবং TypingEase-কে আরও ভালো করতে কাজে লাগাই।'],
  zh: ['反馈', '帮助我们改进', '发送反馈', '邮箱（可选，便于回复）', '哪些做得好，哪些还不够？', '发送中…', '关闭', '发送失败——请重试。', '感谢你的反馈！', '我们会阅读每一条留言，并用它来改进 TypingEase。'],
  'zh-tw': ['意見回饋', '協助我們改進', '傳送意見回饋', '電子郵件（選填，方便回覆）', '哪些做得好，哪些還不夠？', '傳送中…', '關閉', '傳送失敗——請再試一次。', '感謝你的意見回饋！', '我們會閱讀每一則留言，並用來改進 TypingEase。'],
  nl: ['Feedback', 'Help ons verbeteren', 'Feedback sturen', 'E-mail (optioneel, voor een antwoord)', 'Wat werkt wel en wat niet?', 'Bezig met versturen…', 'Sluiten', 'Versturen mislukt — probeer het opnieuw.', 'Bedankt voor je feedback!', 'We lezen elke opmerking en gebruiken die om TypingEase te verbeteren.'],
  fil: ['Feedback', 'Tulungan kaming humusay', 'Magpadala ng feedback', 'Email (opsyonal, para makasagot kami)', 'Ano ang gumagana, ano ang hindi?', 'Ipinapadala…', 'Isara', 'Hindi naipadala — pakisubukan ulit.', 'Salamat sa iyong feedback!', 'Binabasa namin ang bawat mensahe at ginagamit ito para pagandahin ang TypingEase.'],
  he: ['משוב', 'עזרו לנו להשתפר', 'שליחת משוב', 'אימייל (לא חובה, כדי שנוכל להשיב)', 'מה עובד ומה לא?', 'שולח…', 'סגירה', 'השליחה נכשלה — נסו שוב.', 'תודה על המשוב!', 'אנחנו קוראים כל הודעה ומשתמשים בה כדי לשפר את TypingEase.'],
  hi: ['प्रतिक्रिया', 'हमें बेहतर बनाने में मदद करें', 'प्रतिक्रिया भेजें', 'ईमेल (वैकल्पिक, जवाब पाने के लिए)', 'क्या अच्छा चल रहा है, क्या नहीं?', 'भेजा जा रहा है…', 'बंद करें', 'भेजा नहीं जा सका — कृपया दोबारा कोशिश करें।', 'आपकी प्रतिक्रिया के लिए धन्यवाद!', 'हम हर टिप्पणी पढ़ते हैं और उसकी मदद से TypingEase को बेहतर बनाते हैं।'],
  id: ['Masukan', 'Bantu kami jadi lebih baik', 'Kirim masukan', 'Email (opsional, untuk balasan)', 'Apa yang berhasil, apa yang tidak?', 'Mengirim…', 'Tutup', 'Gagal mengirim — silakan coba lagi.', 'Terima kasih atas masukan Anda!', 'Kami membaca setiap catatan dan menggunakannya untuk meningkatkan TypingEase.'],
  ja: ['フィードバック', '改善にご協力ください', 'フィードバックを送る', 'メール（任意・返信用）', 'よかった点・改善してほしい点は？', '送信中…', '閉じる', '送信できませんでした。もう一度お試しください。', 'フィードバックありがとうございます！', 'いただいたご意見はすべて確認し、TypingEase の改善に役立てます。'],
  ko: ['의견', '더 나아지도록 도와주세요', '의견 보내기', '이메일 (선택, 답변 받을 주소)', '어떤 점이 좋고, 어떤 점이 아쉬우셨나요?', '보내는 중…', '닫기', '보내지 못했습니다 — 다시 시도해 주세요.', '의견 감사합니다!', '보내주신 모든 의견을 읽고 TypingEase를 개선하는 데 활용합니다.'],
  ms: ['Maklum balas', 'Bantu kami menambah baik', 'Hantar maklum balas', 'E-mel (pilihan, untuk balasan)', 'Apa yang berjaya, apa yang tidak?', 'Menghantar…', 'Tutup', 'Gagal menghantar — sila cuba lagi.', 'Terima kasih atas maklum balas anda!', 'Kami membaca setiap nota dan menggunakannya untuk menambah baik TypingEase.'],
  fa: ['بازخورد', 'به ما در بهبود کمک کنید', 'ارسال بازخورد', 'ایمیل (اختیاری، برای پاسخ)', 'چه چیزی خوب کار می‌کند و چه چیزی نه؟', 'در حال ارسال…', 'بستن', 'ارسال نشد — لطفاً دوباره تلاش کنید.', 'از بازخورد شما سپاسگزاریم!', 'ما هر یادداشت را می‌خوانیم و از آن برای بهبود TypingEase استفاده می‌کنیم.'],
  pl: ['Opinia', 'Pomóż nam się ulepszyć', 'Wyślij opinię', 'E-mail (opcjonalnie, w celu odpowiedzi)', 'Co działa, a co nie?', 'Wysyłanie…', 'Zamknij', 'Nie udało się wysłać — spróbuj ponownie.', 'Dziękujemy za opinię!', 'Czytamy każdą wiadomość i wykorzystujemy ją do ulepszania TypingEase.'],
  pt: ['Comentários', 'Ajude-nos a melhorar', 'Enviar comentários', 'E-mail (opcional, para resposta)', 'O que está funcionando e o que não está?', 'Enviando…', 'Fechar', 'Não foi possível enviar — tente novamente.', 'Obrigado pelo seu comentário!', 'Lemos cada mensagem e a usamos para melhorar o TypingEase.'],
  ru: ['Отзыв', 'Помогите нам стать лучше', 'Оставить отзыв', 'Email (по желанию, для ответа)', 'Что работает, а что нет?', 'Отправка…', 'Закрыть', 'Не удалось отправить — попробуйте ещё раз.', 'Спасибо за ваш отзыв!', 'Мы читаем каждое сообщение и используем его для улучшения TypingEase.'],
  sw: ['Maoni', 'Tusaidie kuboresha', 'Tuma maoni', 'Barua pepe (si lazima, ili tukujibu)', 'Nini kinafanya kazi, nini hakifanyi?', 'Inatuma…', 'Funga', 'Imeshindwa kutuma — tafadhali jaribu tena.', 'Asante kwa maoni yako!', 'Tunasoma kila ujumbe na kuutumia kuboresha TypingEase.'],
  th: ['ความคิดเห็น', 'ช่วยเราปรับปรุง', 'ส่งความคิดเห็น', 'อีเมล (ไม่บังคับ สำหรับการตอบกลับ)', 'อะไรที่ใช้งานได้ดี อะไรที่ยังไม่ดี?', 'กำลังส่ง…', 'ปิด', 'ส่งไม่สำเร็จ — กรุณาลองใหม่อีกครั้ง', 'ขอบคุณสำหรับความคิดเห็นของคุณ!', 'เราอ่านทุกข้อความและนำไปใช้ปรับปรุง TypingEase'],
  tr: ['Geri bildirim', 'Gelişmemize yardım edin', 'Geri bildirim gönder', 'E-posta (isteğe bağlı, yanıt için)', 'Neler iyi çalışıyor, neler çalışmıyor?', 'Gönderiliyor…', 'Kapat', 'Gönderilemedi — lütfen tekrar deneyin.', 'Geri bildiriminiz için teşekkürler!', 'Her notu okuyor ve TypingEase’i geliştirmek için kullanıyoruz.'],
  uk: ['Відгук', 'Допоможіть нам стати кращими', 'Залишити відгук', 'Email (за бажанням, для відповіді)', 'Що працює, а що ні?', 'Надсилання…', 'Закрити', 'Не вдалося надіслати — спробуйте ще раз.', 'Дякуємо за ваш відгук!', 'Ми читаємо кожне повідомлення і використовуємо його для покращення TypingEase.'],
  ur: ['رائے', 'بہتر بنانے میں ہماری مدد کریں', 'رائے بھیجیں', 'ای میل (اختیاری، جواب کے لیے)', 'کیا ٹھیک چل رہا ہے، کیا نہیں؟', 'بھیجا جا رہا ہے…', 'بند کریں', 'بھیجا نہیں جا سکا — براہ کرم دوبارہ کوشش کریں۔', 'آپ کی رائے کا شکریہ!', 'ہم ہر پیغام پڑھتے ہیں اور اسے TypingEase کو بہتر بنانے کے لیے استعمال کرتے ہیں۔']
};

// Cùng cách chọn ngôn ngữ với cookie-banner.js: zh-Hant / zh-TW → zh-tw, pt-BR → pt.
function text() {
  const raw = (document.documentElement.lang || 'en').toLowerCase();
  const code = TEXT[raw] ? raw : /^zh-(tw|hant)/.test(raw) ? 'zh-tw' : raw.split('-')[0];
  const row = TEXT[code] || TEXT.en;
  return Object.fromEntries(KEYS.map((key, i) => [key, row[i]]));
}

const ICON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
// Phím gõ trong khung không được tới các listener keydown ở document (bộ gõ bài học).
const CONTAINED = ['keydown', 'keyup', 'keypress', 'beforeinput', 'input', 'compositionstart', 'compositionupdate', 'compositionend'];

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

function build() {
  const t = text();
  const fab = el('button', { type: 'button', className: 'feedback-fab', innerHTML: ICON });
  fab.setAttribute('aria-haspopup', 'dialog');
  fab.setAttribute('aria-expanded', 'false');
  fab.setAttribute('aria-label', t.title);
  fab.append(el('span', { textContent: t.fab }));

  const email = el('input', { className: 'feedback-input', id: 'feedback-email', type: 'email', name: 'email', maxLength: 200, autocomplete: 'email', placeholder: 'you@example.com' });
  const message = el('textarea', { className: 'feedback-input feedback-message', id: 'feedback-message', name: 'message', required: true, maxLength: 4000, rows: 5, placeholder: t.message });
  const error = el('p', { className: 'feedback-error', role: 'alert', hidden: true, textContent: t.error });
  const send = el('button', { type: 'submit', className: 'feedback-send', textContent: t.title, disabled: true });
  const form = el('form', { className: 'feedback-form', noValidate: true }, [
    el('label', { className: 'feedback-label', htmlFor: 'feedback-email', textContent: t.email }), email,
    el('label', { className: 'feedback-label', htmlFor: 'feedback-message', textContent: t.fab }), message,
    error, send
  ]);
  const thanksClose = el('button', { type: 'button', className: 'feedback-send', textContent: t.close });
  const thanks = el('div', { className: 'feedback-thanks', hidden: true }, [
    el('div', { className: 'feedback-thanks-icon', textContent: '✓' }),
    el('h2', { className: 'feedback-title', textContent: t.thanks }),
    el('p', { textContent: t.thanksBody }),
    thanksClose
  ]);
  thanks.firstChild.setAttribute('aria-hidden', 'true');
  const close = el('button', { type: 'button', className: 'feedback-close', textContent: '✕' });
  close.setAttribute('aria-label', t.close);
  const head = el('div', { className: 'feedback-head' }, [
    el('p', { className: 'feedback-eyebrow', textContent: t.eyebrow }),
    el('h2', { className: 'feedback-title', id: 'feedback-title', textContent: t.title })
  ]);

  // Khung bật lên ngay trên nút, không phủ tối trang: <dialog> mở bằng show() (không modal).
  const dialog = el('dialog', { className: 'feedback-dialog' }, [close, head, form, thanks]);
  dialog.setAttribute('aria-labelledby', 'feedback-title');
  dialog.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); hide(); } });
  for (const type of CONTAINED) dialog.addEventListener(type, event => event.stopPropagation());

  let sending = false;
  let closeTimer = 0;
  const sync = () => { send.disabled = sending || !message.value.trim(); };
  const reset = () => {
    form.reset();
    error.hidden = true;
    head.hidden = form.hidden = false;
    thanks.hidden = true;
    sync();
  };
  const show = () => {
    if (!thanks.hidden) reset();   // mở lại sau khi đã gửi xong thì bắt đầu từ form trống
    dialog.show();
    fab.setAttribute('aria-expanded', 'true');
    email.focus();
  };
  function hide() {
    clearTimeout(closeTimer);
    if (!dialog.open) return;
    const hadFocus = dialog.contains(document.activeElement);
    dialog.close();
    fab.setAttribute('aria-expanded', 'false');
    if (hadFocus) fab.focus({ preventScroll: true });
  }

  fab.addEventListener('click', () => (dialog.open ? hide() : show()));
  message.addEventListener('input', sync);
  for (const button of [close, thanksClose]) button.addEventListener('click', hide);
  // Bấm ra ngoài khung (trừ chính nút) thì đóng, như một popover.
  document.addEventListener('pointerdown', event => {
    if (dialog.open && !dialog.contains(event.target) && !fab.contains(event.target)) hide();
  });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const body = message.value.trim();
    if (!body || sending) return;
    sending = true;
    send.textContent = t.sending;
    error.hidden = true;
    sync();
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: body, email: email.value.trim(), page: location.pathname, lang: document.documentElement.lang || '' })
      });
      if (!response.ok) throw new Error(`feedback ${response.status}`);
      head.hidden = form.hidden = true;
      thanks.hidden = false;
      thanksClose.focus();
      closeTimer = setTimeout(hide, 2500);
      window.TypingEaseAnalytics?.track('feedback_sent');
    } catch {
      error.hidden = false;
    } finally {
      sending = false;
      send.textContent = t.title;
      sync();
    }
  });

  document.body.append(dialog, fab);
  return { open: show, close: hide };
}

if (document.body && typeof HTMLDialogElement === 'function') {
  window.TypingEaseFeedback = build();
}
