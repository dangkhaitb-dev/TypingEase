// Gửi một tin nhắn chữ thường qua bot Telegram của site (cùng bot với /api/feedback).
// Cần TELEGRAM_BOT_TOKEN và TELEGRAM_CHAT_ID (secret của Pages); thiếu thì bỏ qua, trả false.

const TELEGRAM_LIMIT = 4096;
const TIMEOUT_MS = 8000;

export async function sendTelegram(env, text) {
  const token = (env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (env.TELEGRAM_CHAT_ID || '').trim();
  if (!token || !chatId) return false;
  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text.slice(0, TELEGRAM_LIMIT), link_preview_options: { is_disabled: true } }),
    signal: AbortSignal.timeout(TIMEOUT_MS)
  });
  if (!response.ok) console.error('telegram sendMessage failed', response.status, await response.text().catch(() => ''));
  return response.ok;
}
