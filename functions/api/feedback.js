// POST /api/feedback — Cloudflare Pages Function nhận góp ý từ nút Feedback (11ty/client/feedback.js)
// và chuyển tiếp sang một Discord webhook, như backend/app/routes/feedback.py của soldetector.
//
// URL webhook là bí mật: đặt ở Cloudflare → Pages → typingease → Settings → Variables and Secrets,
// tên FEEDBACK_WEBHOOK_URL. Chưa đặt thì trả 503 và trình duyệt báo "chưa gửi được".
// Chạy thử ở máy: `npx wrangler pages dev dist` sau `npm run build`, webhook để trong .dev.vars.

const LIMITS = { message: 4000, email: 200, page: 300, lang: 20 };
const RATINGS = { bad: '😞 bad', ok: '😐 ok', good: '😊 good' };
const DISCORD_LIMIT = 1990;   // Discord nhận tối đa 2000 ký tự mỗi tin
const TIMEOUT_MS = 8000;

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
});

export async function onRequestPost({ request, env }) {
  const webhook = (env.FEEDBACK_WEBHOOK_URL || '').trim();
  if (!webhook) return json({ error: 'feedback_not_configured' }, 503);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'invalid_json' }, 400); }
  const field = name => (typeof body?.[name] === 'string' ? body[name].trim() : '');
  const message = field('message');
  if (!message || message.length > LIMITS.message) return json({ error: 'invalid_message' }, 422);
  const email = field('email').slice(0, LIMITS.email);
  const page = field('page').slice(0, LIMITS.page);
  const lang = field('lang').slice(0, LIMITS.lang);

  const content = [
    '**New TypingEase feedback**',
    `Rating: ${RATINGS[field('rating')] || 'n/a'}`,
    `Email: ${email || 'n/a'}`,
    `Page: ${page || 'n/a'}${lang ? ` (${lang})` : ''}`,
    'Message:',
    message
  ].join('\n').slice(0, DISCORD_LIMIT);

  try {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'User-Agent': 'TypingEase-Feedback/1.0' },
      // allowed_mentions rỗng: chữ người dùng gõ "@everyone" không ping cả server.
      body: JSON.stringify({ content, allowed_mentions: { parse: [] } }),
      signal: AbortSignal.timeout(TIMEOUT_MS)
    });
    if (!response.ok) return json({ error: 'feedback_delivery_failed' }, 502);
  } catch {
    return json({ error: 'feedback_delivery_failed' }, 502);
  }
  return json({ ok: true });
}
