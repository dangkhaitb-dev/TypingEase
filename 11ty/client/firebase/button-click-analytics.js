// Tự track mọi nút bấm — port từ solprompter (src/script/libs/firebase/button-click-analytics.ui.js),
// giữ nguyên cách đặt tên để số liệu hai site đọc theo cùng một kiểu.
//
// Một listener capture-phase trên document bắt mọi nút hiện có và nút sinh ra sau (thanh "có bản
// mới", kết quả bài, trò chơi), nên không phải gắn tay vào từng nút. Tên sự kiện là
// `<trang>_<nút>`; muốn tên cố định thì đặt `data-analytics-name` lên nút, hoặc
// `data-analytics-page` lên body / vùng chứa. input/select/textarea chỉ được track khi có
// `data-analytics-name` — không bao giờ gửi nội dung người dùng gõ.

import { initializeFirebase } from './firebase-init.js';

const BUTTON_SELECTOR = [
  'button',
  '[role="button"]',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]'
].join(', ');
const CHANGE_CONTROL_SELECTOR = [
  'input[data-analytics-name]',
  'select[data-analytics-name]',
  'textarea[data-analytics-name]'
].join(', ');

const FIREBASE_EVENT_NAME_LIMIT = 40;
const EVENT_PARAM_VALUE_LIMIT = 100;
const DYNAMIC_CLASS_NAMES = new Set([
  'active',
  'danger',
  'disabled',
  'hidden',
  'is-active',
  'is-disabled',
  'is-loading',
  'open',
  'primary',
  'secondary',
  'selected'
]);

function clip(value, limit = EVENT_PARAM_VALUE_LIMIT) {
  return String(value || '').slice(0, limit);
}

/**
 * Convert UI identifiers into stable, readable analytics segments.
 * Hyphens are kept here so the base name reads as page-button.
 */
export function toAnalyticsSegment(value, fallback = '') {
  const normalized = String(value || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
    .replace(/(^|-)button(?=-|$)/g, '$1btn');

  return normalized || fallback;
}

export function toActionName(value, fallback = 'btn') {
  const words = String(value || '')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return fallback;

  const actionName = words
    .map((word, index) => {
      const compact = word.replace(/button/gi, match => (match[0] === 'B' ? 'Btn' : 'btn'));
      if (index === 0) return compact.charAt(0).toLowerCase() + compact.slice(1);
      return compact.charAt(0).toUpperCase() + compact.slice(1);
    })
    .join('');

  return /^[a-z]/.test(actionName) ? actionName : `action${actionName}`;
}

function shortHash(value) {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36).padStart(7, '0').slice(-7);
}

/**
 * Firebase/GA4 event names only accept letters, numbers and underscores and
 * are limited to 40 characters. Keep the hyphenated name in the event_base
 * parameter, and send this compatible form as the actual event.
 */
export function toFirebaseEventName(baseName) {
  let eventName = String(baseName || 'btn-click')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/button/gi, match => (match[0] === 'B' ? 'Btn' : 'btn'))
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .replace(/_{2,}/g, '_');
  if (!/^[a-zA-Z]/.test(eventName) || /^(firebase|google|ga)_/i.test(eventName)) {
    eventName = `app_${eventName}`;
  }

  if (eventName.length <= FIREBASE_EVENT_NAME_LIMIT) return eventName;

  const suffix = shortHash(eventName);
  return `${eventName.slice(0, FIREBASE_EVENT_NAME_LIMIT - suffix.length - 1)}_${suffix}`;
}

// Tên trang lấy từ đoạn cuối của đường dẫn: /vi/kiem-tra-toc-do-go/ → kiem-tra-toc-do-go.
// Trang nhà của từng ngôn ngữ (/vi/, /es/… có <html lang> trùng tên thư mục) đều là `home`;
// ngôn ngữ đã đi riêng trong tham số `language`.
export function getPageAnalyticsName(doc = document, pageLocation = window.location) {
  const explicitName = doc.body?.dataset.analyticsPage;
  if (explicitName) return toAnalyticsSegment(explicitName, 'page');

  const path = decodeURIComponent(pageLocation?.pathname || '/')
    .replace(/\/index\.html$/i, '/')
    .replace(/\.html$/i, '')
    .replace(/^\/+|\/+$/g, '');
  const segments = path.split('/').filter(Boolean);

  if (segments.length === 0) return 'home';

  const documentLanguage = toAnalyticsSegment(doc.documentElement?.lang);
  if (segments.length === 1 && documentLanguage === toAnalyticsSegment(segments[0])) {
    return 'home';
  }

  return toAnalyticsSegment(segments.at(-1), 'home');
}

// Nút của TypingEase hay chỉ phân biệt bằng data-* (data-duration="15", data-progress-metric="wpm"),
// nên sau các khoá quen thuộc thì lấy thuộc tính data-* đầu tiên còn lại, thay vì rơi xuống
// aria-label — thứ đổi theo ngôn ngữ trang và với chữ không Latin thì chuẩn hoá ra rỗng.
function getSemanticDataName(button) {
  const keys = ['action', 'act', 'role', 'cmd', 'view', 'toggle', 'tab', 'align'];
  for (const key of keys) {
    const value = button.dataset?.[key];
    if (value) return `${key}-${value}`;
  }
  const [key, value] = Object.entries(button.dataset || {})
    .find(([name, data]) => data && !name.startsWith('analytics')) || [];
  return key ? `${key}-${value}` : '';
}

function getStableClassName(button) {
  return [...(button.classList || [])].find(className => (
    className
    && !DYNAMIC_CLASS_NAMES.has(className)
    && !className.startsWith('is-')
    && !className.startsWith('has-')
  )) || '';
}

export function getButtonAnalyticsName(button, actionTarget = button) {
  const explicitControl = actionTarget?.closest?.('[data-analytics-name]');
  const explicitName = button.contains?.(explicitControl)
    ? explicitControl.dataset.analyticsName
    : button.dataset?.analyticsName;
  if (explicitName) return toActionName(explicitName);

  if (button.id) return toAnalyticsSegment(button.id, 'btn');

  const semanticDataName = getSemanticDataName(button);
  if (semanticDataName) return toAnalyticsSegment(semanticDataName, 'btn');

  const stableClassName = getStableClassName(button);
  if (stableClassName) return toAnalyticsSegment(stableClassName, 'btn');

  const accessibleName = button.getAttribute?.('aria-label') || button.getAttribute?.('title');
  if (accessibleName) return toAnalyticsSegment(accessibleName, 'btn');

  const inputName = button.getAttribute?.('name') || button.getAttribute?.('type');
  return toAnalyticsSegment(inputName, 'btn');
}

export function buildButtonClickEvent(button, {
  doc = document,
  pageLocation = window.location,
  pageName,
  actionTarget = button
} = {}) {
  const contextPage = button.closest?.('[data-analytics-page]')?.dataset.analyticsPage;
  const resolvedPageName = toAnalyticsSegment(
    contextPage || pageName || getPageAnalyticsName(doc, pageLocation),
    'page'
  );
  const buttonName = getButtonAnalyticsName(button, actionTarget);
  const eventBase = `${resolvedPageName}-${buttonName}`;

  return {
    name: toFirebaseEventName(eventBase),
    params: {
      event_base: clip(eventBase),
      page_name: clip(resolvedPageName),
      action_name: clip(buttonName),
      button_name: clip(buttonName),
      page_path: clip(pageLocation?.pathname || '/'),
      language: clip((doc.documentElement?.lang || 'en').toLowerCase())
    }
  };
}

export function buildControlChangeEvent(control, options = {}) {
  const analyticsEvent = buildButtonClickEvent(control, {
    ...options,
    actionTarget: control
  });
  const { button_name: controlName, ...params } = analyticsEvent.params;
  return {
    ...analyticsEvent,
    params: {
      ...params,
      control_name: controlName
    }
  };
}

/**
 * Track every current and future button through one capture-phase listener.
 * Dynamic UI (update bar, result cards, games) is covered automatically.
 */
export function initButtonClickTracking({
  root = document,
  doc = document,
  pageLocation = window.location,
  pageName,
  loadClient = initializeFirebase
} = {}) {
  let clientPromise;

  const getClient = () => {
    if (!clientPromise) {
      clientPromise = Promise.resolve().then(() => loadClient()).catch(() => null);
    }
    return clientPromise;
  };

  const send = analyticsEvent => {
    void getClient().then(client => {
      if (!client?.analytics || typeof client.logEvent !== 'function') return;
      client.logEvent(client.analytics, analyticsEvent.name, analyticsEvent.params);
    });
  };

  const onClick = event => {
    const target = event.target instanceof Element ? event.target : null;
    const button = target?.closest(BUTTON_SELECTOR);
    if (!button || (root !== doc && !root.contains(button))) return;

    send(buildButtonClickEvent(button, {
      doc,
      pageLocation,
      pageName,
      actionTarget: target
    }));
  };

  const onChange = event => {
    const control = event.target instanceof Element
      ? event.target.closest(CHANGE_CONTROL_SELECTOR)
      : null;
    if (!control || (root !== doc && !root.contains(control))) return;
    send(buildControlChangeEvent(control, { doc, pageLocation, pageName }));
  };

  root.addEventListener('click', onClick, true);
  root.addEventListener('change', onChange, true);
  return () => {
    root.removeEventListener('click', onClick, true);
    root.removeEventListener('change', onChange, true);
  };
}
