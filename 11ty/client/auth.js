// Nút Đăng nhập / tài khoản ở topbar + hộp thoại "Đăng nhập vào TypingEase" (docs/PLAN-dang-nhap.md, giai đoạn 2).
//
// Nạp dạng module bởi sw-register.js, như feedback.js, nên có mặt ở mọi trang; gắn vào
// `[data-site-header] .header-actions` (topbar nào của site cũng có). Chữ theo `<html lang>`, 27 ngôn ngữ.
//
// Luồng: nút Đăng nhập → hộp thoại modal (logo, tiêu đề, "Tiếp tục với Google") → firebase-init.js mở popup
// Google → ID token → POST /api/auth/session → server đặt cookie te_session (HttpOnly) + te_auth=1.
// Mở hộp thoại là bắt đầu tải SDK, để popup Google mở ngay trong cú bấm (Safari chặn popup mở trễ).
// Khi tải trang: có cookie te_auth thì vẽ ngay avatar từ bản lưu trong localStorage, rồi (tối đa mỗi giờ
// một lần) hỏi lại /api/me — vừa để biết phiên còn sống, vừa để server gia hạn phiên trượt.
// Khách chưa đăng nhập không gọi API nào.
//
// Phát sự kiện `typingease:auth` trên window ({ user, isNew } hoặc { user: null }) — phần đồng bộ dữ
// liệu (giai đoạn 3) nghe nó. Gọi từ console: `TypingEaseAuth.open()`, `.signOut()`, `.getUser()`.

import { preloadAuth, signInWithGoogle } from './firebase/firebase-init.js';

const STORE = 'typingease-account-v1';     // { user, checkedAt } — chỉ để vẽ nhanh, server là nguồn thật
const RECHECK_MS = 60 * 60 * 1000;
const QUIET_ERRORS = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request', 'auth/user-cancelled'];
const LOGO = '/assets/brand/typingease-snail-t-68.webp';

const KEYS = ['signIn', 'account', 'signOut', 'error', 'title', 'subtitle', 'google', 'close'];
const TEXT = {
  en: ['Sign in', 'Account', 'Sign out', 'Couldn’t sign in — please try again.', 'Sign in to TypingEase', 'Save your progress and pick up where you left off on any device.', 'Continue with Google', 'Close'],
  vi: ['Đăng nhập', 'Tài khoản', 'Đăng xuất', 'Chưa đăng nhập được — vui lòng thử lại.', 'Đăng nhập vào TypingEase', 'Lưu tiến độ và học tiếp ở bất kỳ thiết bị nào.', 'Tiếp tục với Google', 'Đóng'],
  es: ['Iniciar sesión', 'Cuenta', 'Cerrar sesión', 'No se pudo iniciar sesión: inténtalo de nuevo.', 'Inicia sesión en TypingEase', 'Guarda tu progreso y continúa en cualquier dispositivo.', 'Continuar con Google', 'Cerrar'],
  de: ['Anmelden', 'Konto', 'Abmelden', 'Anmeldung fehlgeschlagen – bitte versuche es erneut.', 'Bei TypingEase anmelden', 'Speichere deinen Fortschritt und mach auf jedem Gerät weiter.', 'Weiter mit Google', 'Schließen'],
  it: ['Accedi', 'Account', 'Esci', 'Accesso non riuscito: riprova.', 'Accedi a TypingEase', 'Salva i tuoi progressi e riprendi da qualsiasi dispositivo.', 'Continua con Google', 'Chiudi'],
  fr: ['Se connecter', 'Compte', 'Se déconnecter', 'Connexion impossible — veuillez réessayer.', 'Se connecter à TypingEase', 'Enregistrez votre progression et reprenez sur n’importe quel appareil.', 'Continuer avec Google', 'Fermer'],
  ar: ['تسجيل الدخول', 'الحساب', 'تسجيل الخروج', 'تعذّر تسجيل الدخول — يُرجى المحاولة مرة أخرى.', 'تسجيل الدخول إلى TypingEase', 'احفظ تقدّمك وتابع من أي جهاز.', 'المتابعة باستخدام Google', 'إغلاق'],
  bn: ['সাইন ইন', 'অ্যাকাউন্ট', 'সাইন আউট', 'সাইন ইন করা যায়নি — আবার চেষ্টা করুন।', 'TypingEase-এ সাইন ইন করুন', 'আপনার অগ্রগতি সংরক্ষণ করুন এবং যেকোনো ডিভাইসে চালিয়ে যান।', 'Google দিয়ে চালিয়ে যান', 'বন্ধ করুন'],
  zh: ['登录', '账户', '退出登录', '登录失败——请重试。', '登录 TypingEase', '保存学习进度，在任何设备上继续练习。', '使用 Google 继续', '关闭'],
  'zh-tw': ['登入', '帳戶', '登出', '登入失敗——請再試一次。', '登入 TypingEase', '儲存學習進度，在任何裝置上繼續練習。', '使用 Google 繼續', '關閉'],
  nl: ['Inloggen', 'Account', 'Uitloggen', 'Inloggen mislukt — probeer het opnieuw.', 'Inloggen bij TypingEase', 'Bewaar je voortgang en ga verder op elk apparaat.', 'Doorgaan met Google', 'Sluiten'],
  fil: ['Mag-sign in', 'Account', 'Mag-sign out', 'Hindi nakapag-sign in — pakisubukan ulit.', 'Mag-sign in sa TypingEase', 'I-save ang iyong progreso at ituloy sa anumang device.', 'Magpatuloy gamit ang Google', 'Isara'],
  he: ['התחברות', 'חשבון', 'התנתקות', 'ההתחברות נכשלה — נסו שוב.', 'התחברות ל-TypingEase', 'שמרו את ההתקדמות והמשיכו מכל מכשיר.', 'המשך עם Google', 'סגירה'],
  hi: ['साइन इन', 'खाता', 'साइन आउट', 'साइन इन नहीं हो सका — कृपया दोबारा कोशिश करें।', 'TypingEase में साइन इन करें', 'अपनी प्रगति सहेजें और किसी भी डिवाइस पर जारी रखें।', 'Google के साथ जारी रखें', 'बंद करें'],
  id: ['Masuk', 'Akun', 'Keluar', 'Gagal masuk — silakan coba lagi.', 'Masuk ke TypingEase', 'Simpan kemajuan Anda dan lanjutkan di perangkat apa pun.', 'Lanjutkan dengan Google', 'Tutup'],
  ja: ['ログイン', 'アカウント', 'ログアウト', 'ログインできませんでした。もう一度お試しください。', 'TypingEase にログイン', '進捗を保存して、どの端末からでも続きから練習できます。', 'Google で続行', '閉じる'],
  ko: ['로그인', '계정', '로그아웃', '로그인하지 못했습니다 — 다시 시도해 주세요.', 'TypingEase에 로그인', '진도를 저장하고 어느 기기에서든 이어서 연습하세요.', 'Google로 계속하기', '닫기'],
  ms: ['Log masuk', 'Akaun', 'Log keluar', 'Gagal log masuk — sila cuba lagi.', 'Log masuk ke TypingEase', 'Simpan kemajuan anda dan sambung di mana-mana peranti.', 'Teruskan dengan Google', 'Tutup'],
  fa: ['ورود', 'حساب کاربری', 'خروج', 'ورود انجام نشد — لطفاً دوباره تلاش کنید.', 'ورود به TypingEase', 'پیشرفت خود را ذخیره کنید و در هر دستگاهی ادامه دهید.', 'ادامه با Google', 'بستن'],
  pl: ['Zaloguj się', 'Konto', 'Wyloguj się', 'Nie udało się zalogować — spróbuj ponownie.', 'Zaloguj się do TypingEase', 'Zapisz postępy i kontynuuj na dowolnym urządzeniu.', 'Kontynuuj z Google', 'Zamknij'],
  pt: ['Entrar', 'Conta', 'Sair', 'Não foi possível entrar — tente novamente.', 'Entrar no TypingEase', 'Salve seu progresso e continue em qualquer dispositivo.', 'Continuar com o Google', 'Fechar'],
  ru: ['Войти', 'Аккаунт', 'Выйти', 'Не удалось войти — попробуйте ещё раз.', 'Вход в TypingEase', 'Сохраняйте прогресс и продолжайте на любом устройстве.', 'Продолжить с Google', 'Закрыть'],
  sw: ['Ingia', 'Akaunti', 'Toka', 'Imeshindwa kuingia — tafadhali jaribu tena.', 'Ingia kwenye TypingEase', 'Hifadhi maendeleo yako na uendelee kwenye kifaa chochote.', 'Endelea na Google', 'Funga'],
  th: ['เข้าสู่ระบบ', 'บัญชี', 'ออกจากระบบ', 'เข้าสู่ระบบไม่สำเร็จ — กรุณาลองใหม่อีกครั้ง', 'เข้าสู่ระบบ TypingEase', 'บันทึกความคืบหน้าและฝึกต่อได้บนทุกอุปกรณ์', 'ดำเนินการต่อด้วย Google', 'ปิด'],
  tr: ['Giriş yap', 'Hesap', 'Çıkış yap', 'Giriş yapılamadı — lütfen tekrar deneyin.', 'TypingEase’e giriş yap', 'İlerlemeni kaydet ve istediğin cihazda kaldığın yerden devam et.', 'Google ile devam et', 'Kapat'],
  uk: ['Увійти', 'Обліковий запис', 'Вийти', 'Не вдалося увійти — спробуйте ще раз.', 'Вхід у TypingEase', 'Зберігайте прогрес і продовжуйте на будь-якому пристрої.', 'Продовжити з Google', 'Закрити'],
  ur: ['سائن ان', 'اکاؤنٹ', 'سائن آؤٹ', 'سائن ان نہیں ہو سکا — براہ کرم دوبارہ کوشش کریں۔', 'TypingEase میں سائن ان کریں', 'اپنی پیش رفت محفوظ کریں اور کسی بھی ڈیوائس پر جاری رکھیں۔', 'Google کے ساتھ جاری رکھیں', 'بند کریں']
};

// Cùng cách chọn ngôn ngữ với feedback.js / cookie-banner.js: zh-Hant / zh-TW → zh-tw, pt-BR → pt.
function text() {
  const raw = (document.documentElement.lang || 'en').toLowerCase();
  const code = TEXT[raw] ? raw : /^zh-(tw|hant)/.test(raw) ? 'zh-tw' : raw.split('-')[0];
  const row = TEXT[code] || TEXT.en;
  return Object.fromEntries(KEYS.map((key, i) => [key, row[i]]));
}

const USER_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>';
const GOOGLE_ICON = '<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z"/></svg>';
// Phím gõ trong hộp thoại không được tới các listener keydown ở document (bộ gõ bài học / typing test).
const CONTAINED = ['keydown', 'keyup', 'keypress', 'beforeinput', 'input', 'compositionstart', 'compositionupdate', 'compositionend'];

function el(tag, props = {}, children = []) {
  const node = Object.assign(document.createElement(tag), props);
  node.append(...children);
  return node;
}

const hasHintCookie = () => /(?:^|;\s*)te_auth=1(?:;|$)/.test(document.cookie);
const readStore = () => { try { return JSON.parse(localStorage.getItem(STORE)) || null; } catch { return null; } };
const writeStore = value => {
  try { value ? localStorage.setItem(STORE, JSON.stringify(value)) : localStorage.removeItem(STORE); } catch { /* storage blocked */ }
};

function buildDialog(t, onGoogle) {
  const close = el('button', { type: 'button', className: 'auth-close', textContent: '✕' });
  close.setAttribute('aria-label', t.close);
  const logo = el('img', { className: 'auth-logo', src: LOGO, width: 64, height: 64, alt: '', decoding: 'async' });
  const google = el('button', { type: 'button', className: 'auth-google', innerHTML: GOOGLE_ICON });
  google.append(el('span', { textContent: t.google }));
  const error = el('p', { className: 'auth-error', role: 'alert', hidden: true, textContent: t.error });

  const dialog = el('dialog', { className: 'auth-dialog' }, [
    el('div', { className: 'auth-card' }, [
      close, logo,
      el('h2', { className: 'auth-title', id: 'auth-title', textContent: t.title }),
      el('p', { className: 'auth-subtitle', textContent: t.subtitle }),
      google, error
    ])
  ]);
  dialog.setAttribute('aria-labelledby', 'auth-title');
  for (const type of CONTAINED) dialog.addEventListener(type, event => event.stopPropagation());
  close.addEventListener('click', () => dialog.close());
  // Bấm ra nền tối (chính phần tử <dialog>, ngoài thẻ .auth-card) thì đóng.
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  google.addEventListener('click', onGoogle);
  document.body.append(dialog);

  return {
    open() {
      error.hidden = true;
      dialog.showModal();
      google.focus();
      preloadAuth().catch(() => {});
    },
    close: () => dialog.close(),
    setBusy(busy) { google.disabled = busy; google.setAttribute('aria-busy', String(busy)); },
    showError() { error.hidden = false; },
    hideError() { error.hidden = true; }
  };
}

function build(host) {
  const t = text();
  let user = null, busy = false;

  const signInButton = el('button', { type: 'button', className: 'account-signin', innerHTML: USER_ICON });
  signInButton.append(el('span', { textContent: t.signIn }));
  signInButton.setAttribute('aria-haspopup', 'dialog');

  const avatar = el('span', { className: 'account-avatar' });
  const accountButton = el('button', { type: 'button', className: 'account-button' }, [avatar]);
  accountButton.setAttribute('aria-haspopup', 'true');
  accountButton.setAttribute('aria-expanded', 'false');

  const name = el('strong', { className: 'account-name' });
  const email = el('span', { className: 'account-email' });
  const signOutButton = el('button', { type: 'button', className: 'account-signout', textContent: t.signOut });
  const menu = el('div', { className: 'account-menu', hidden: true }, [name, email, signOutButton]);

  const root = el('div', { className: 'account' }, [signInButton, accountButton, menu]);
  host.append(root);
  const dialog = typeof HTMLDialogElement === 'function' ? buildDialog(t, signIn) : null;

  function paintAvatar() {
    avatar.replaceChildren();
    const label = user?.name || user?.email || t.account;
    const initial = label.trim().charAt(0).toUpperCase() || '•';
    if (user?.photo) {
      // Ảnh Google (lh3.googleusercontent.com) trả 403 khi có Referer của site khác.
      const img = el('img', { src: user.photo, alt: '', width: 32, height: 32, referrerPolicy: 'no-referrer', decoding: 'async' });
      img.addEventListener('error', () => { avatar.replaceChildren(initial); }, { once: true });
      avatar.append(img);
    } else avatar.append(initial);
    accountButton.setAttribute('aria-label', `${t.account}: ${label}`);
    accountButton.title = label;
    name.textContent = user?.name || t.account;
    email.textContent = user?.email || '';
    email.hidden = !user?.email;
  }

  function render() {
    signInButton.hidden = Boolean(user);
    accountButton.hidden = !user;
    if (user) paintAvatar(); else closeMenu();
  }

  function setUser(next, { isNew = false, announce = true } = {}) {
    const changed = (user?.id || null) !== (next?.id || null);
    user = next;
    writeStore(next ? { user: next, checkedAt: Date.now() } : null);
    render();
    if (announce && changed) window.dispatchEvent(new CustomEvent('typingease:auth', { detail: { user: next, isNew } }));
  }

  function openMenu() { menu.hidden = false; accountButton.setAttribute('aria-expanded', 'true'); signOutButton.focus(); }
  function closeMenu({ restoreFocus = false } = {}) {
    if (menu.hidden) return;
    menu.hidden = true;
    accountButton.setAttribute('aria-expanded', 'false');
    if (restoreFocus) accountButton.focus({ preventScroll: true });
  }

  async function signIn() {
    if (busy) return;
    busy = true;
    dialog?.hideError();
    dialog?.setBusy(true);
    try {
      const idToken = await signInWithGoogle();
      const response = await fetch('/api/auth/session', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ idToken })
      });
      if (!response.ok) throw new Error(`session ${response.status}`);
      const { user: signedIn, isNew } = await response.json();
      dialog?.close();
      setUser(signedIn, { isNew });
      accountButton.focus({ preventScroll: true });
      window.TypingEaseAnalytics?.track(isNew ? 'sign_up' : 'login', { method: 'google' });
    } catch (failure) {
      if (!QUIET_ERRORS.includes(failure?.code)) { console.warn('sign-in failed', failure); dialog?.showError(); }
    } finally {
      busy = false;
      dialog?.setBusy(false);
    }
  }

  async function signOut() {
    closeMenu();
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch { /* offline: cookie phiên tự hết hạn */ }
    document.cookie = 'te_auth=; Max-Age=0; Path=/; Secure; SameSite=Lax';
    setUser(null);
    signInButton.focus({ preventScroll: true });
  }

  // Hỏi lại server: phiên còn không (bị đăng xuất ở thiết bị khác, hết hạn), tên/ảnh có đổi không.
  async function refresh() {
    try {
      const response = await fetch('/api/me');
      if (response.status === 401) setUser(null);
      else if (response.ok) setUser((await response.json()).user, { announce: false });
    } catch { /* offline: giữ trạng thái đang có */ }
  }

  // Trình duyệt quá cũ không có <dialog>: bấm nút thì vào thẳng popup Google.
  signInButton.addEventListener('click', () => (dialog ? dialog.open() : signIn()));
  accountButton.addEventListener('click', () => (menu.hidden ? openMenu() : closeMenu()));
  signOutButton.addEventListener('click', signOut);
  root.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { event.preventDefault(); closeMenu({ restoreFocus: true }); } });
  document.addEventListener('pointerdown', event => { if (!root.contains(event.target)) closeMenu(); });
  // Đăng nhập / đăng xuất ở tab khác thì tab này đổi theo.
  window.addEventListener('storage', event => {
    if (event.key !== STORE) return;
    const next = readStore()?.user || null;
    if ((next?.id || null) !== (user?.id || null)) { user = next; render(); }
  });

  const stored = readStore();
  if (hasHintCookie()) {
    user = stored?.user || { id: '', name: '', email: '', photo: null };
    render();
    if (!stored?.user || Date.now() - (stored.checkedAt || 0) > RECHECK_MS) refresh();
  } else {
    if (stored) writeStore(null);   // cookie đã hết hạn / bị xoá: bản lưu không còn đúng
    render();
  }

  return { open: () => (dialog ? dialog.open() : signIn()), signOut, getUser: () => user };
}

const host = document.querySelector('[data-site-header] .header-actions');
if (host) window.TypingEaseAuth = build(host);
