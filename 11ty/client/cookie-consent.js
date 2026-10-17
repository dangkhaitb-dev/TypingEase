// Lựa chọn cookie analytics của người dùng — nguồn sự thật duy nhất, giống
// solprompter (src/script/utils/cookie-consent.js). Mọi nơi đọc/ghi qua các hàm này.
//
// Lưu trong localStorage chứ không phải cookie: đây là chính lựa chọn "có cho cookie không", và
// cùng chỗ với tiến độ học. Trình duyệt chặn localStorage thì coi như chưa chọn — banner hiện lại,
// analytics không bao giờ tự bật.

const CONSENT_KEY = 'typingease-analytics-consent';
export const CONSENT_EVENT = 'typingease:analytics-consent';

/** @returns {'granted' | 'denied' | null} null = chưa chọn */
export function getAnalyticsConsent() {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

/** Ghi lựa chọn và báo cho analytics.js để bật/tắt ngay, không cần tải lại trang. */
export function setAnalyticsConsent(decision) {
  if (decision !== 'granted' && decision !== 'denied') return;
  try { window.localStorage.setItem(CONSENT_KEY, decision); } catch { /* vẫn áp dụng cho trang này */ }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { consent: decision } }));
}

export const isAnalyticsGranted = () => getAnalyticsConsent() === 'granted';
