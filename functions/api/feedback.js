// POST /api/feedback — Cloudflare Pages Function nhận góp ý từ nút Feedback (11ty/client/feedback.js)
// và chuyển tiếp thành tin nhắn Telegram qua Bot API (sendMessage).
//
// Hai biến bí mật, đặt ở Cloudflare → Pages → typingease → Settings → Variables and Secrets:
//   TELEGRAM_BOT_TOKEN — token bot lấy từ @BotFather (dạng 123456:ABC…)
//   TELEGRAM_CHAT_ID   — id người / nhóm / kênh nhận tin (nhóm thường là số âm, kênh có thể là @ten_kenh)
// Thiếu một trong hai thì trả 503 và trình duyệt báo "chưa gửi được".
// Lấy chat id: nhắn cho bot (hoặc thêm bot vào nhóm rồi nhắn), mở
// https://api.telegram.org/bot<TOKEN>/getUpdates và đọc message.chat.id.
// Chạy thử ở máy: `npx wrangler pages dev dist` sau `npm run build`, hai biến để trong .dev.vars.

const LIMITS = { message: 4000, email: 200, page: 300, lang: 20 };
const RATINGS = { bad: '😞 bad', ok: '😐 ok', good: '😊 good' };
const TELEGRAM_LIMIT = 4096;   // Telegram nhận tối đa 4096 ký tự mỗi tin
const TIMEOUT_MS = 8000;

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

export async function onRequestPost({ request, env }) {
  const token = (env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (env.TELEGRAM_CHAT_ID || '').trim();
  if (!token || !chatId) return json({ error: 'feedback_not_configured' }, 503);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const field = name => (typeof body?.[name] === 'string' ? body[name].trim() : '');
  const message = field('message');
  if (!message || message.length > LIMITS.message) return json({ error: 'invalid_message' }, 422);
  const email = field('email').slice(0, LIMITS.email);
  const page = field('page').slice(0, LIMITS.page);
  const lang = field('lang').slice(0, LIMITS.lang);

  // Chữ thường, không parse_mode: nội dung người dùng gõ không cần escape và không vỡ định dạng.
  const text = [
    '📝 New TypingEase feedback',
    `Rating: ${RATINGS[field('rating')] || 'n/a'}`,
    `Email: ${email || 'n/a'}`,
    `Page: ${page || 'n/a'}${lang ? ` (${lang})` : ''}`,
    '',
    message
  ].join('\n').slice(0, TELEGRAM_LIMIT);

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, link_preview_options: { is_disabled: true } }),
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });
    if (!response.ok) {
      // Ghi lý do Telegram trả về (sai token, bot chưa được nhắn / chưa vào nhóm…) vào log của Pages.
      console.error('telegram sendMessage failed', response.status, await response.text().catch(() => ''));
      return json({ error: 'feedback_delivery_failed' }, 502);
    }
  } catch (error) {
    console.error('telegram sendMessage error', error);
    return json({ error: 'feedback_delivery_failed' }, 502);
  }
  return json({ ok: true });
}
