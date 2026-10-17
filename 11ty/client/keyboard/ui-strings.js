// keyboard/ui-strings.js — thay cho `t()` của typekute (lib/i18n/loader.js) trong keyboard.js.
//
// Thứ tự: chữ TypingEase đã dịch trong i18n/ui.<lang>.js (`TypingEaseUI.keyboard`) → bảng dưới,
// chép từ bundle i18n của typekute (dist/i18n/<pack>/bundle.json; pt lấy pack `br`) → tiếng Anh.
// Chỉ năm khoá bàn phím dùng tới, nên không nạp cả bundle.
const TYPEKUTE = {
  "ar": {"settings.title": "إعدادات لوحة المفاتيح", "player.onScreenKeyboard": "لوحة مفاتيح على الشاشة", "player.onScreenNumberPad": "لوحة أرقام على الشاشة", "player.fullwidthAlphanumericMode": "وضع ألفانيمري بعرض كامل", "player.alphanumericMode": "وضع ألفانيمري"},
  "bn": {"settings.title": "কীবোর্ড সেটিংস", "player.onScreenKeyboard": "অন-স্ক্রিন কীবোর্ড", "player.onScreenNumberPad": "অন-স্ক্রিন নম্বর প্যাড", "player.fullwidthAlphanumericMode": "পূর্ণ-প্রস্থ আল্ফানিউমেরিক মোড", "player.alphanumericMode": "আল্ফানিউমেরিক মোড"},
  "de": {"settings.title": "Tastatureinstellungen", "player.onScreenKeyboard": "Bildschirmtastatur", "player.onScreenNumberPad": "Bildschirm-Zahlenblock", "player.fullwidthAlphanumericMode": "Vollbreitiger alphanumerischer Modus", "player.alphanumericMode": "Alphanumerischer Modus"},
  "en": {"settings.title": "Keyboard Settings", "player.onScreenKeyboard": "On-screen keyboard", "player.onScreenNumberPad": "On-screen number pad", "player.fullwidthAlphanumericMode": "Full-width alphanumeric mode", "player.alphanumericMode": "Alphanumeric mode"},
  "es": {"settings.title": "Configuración de Teclado", "player.onScreenKeyboard": "Teclado en la pantalla", "player.onScreenNumberPad": "Teclado numérico en la pantalla", "player.fullwidthAlphanumericMode": "Modo alfanumérico de ancho completo", "player.alphanumericMode": "Modo alfanumérico"},
  "fa": {"settings.title": "تنظیمات صفحه‌کلید", "player.onScreenKeyboard": "صفحه‌کلید درون صفحه", "player.onScreenNumberPad": "تاشوماره درون صفحه", "player.fullwidthAlphanumericMode": "حالتٔ تمام‌عرض الفبایی-عددی", "player.alphanumericMode": "حالتٔ الفبایی-عددی"},
  "fil": {"settings.title": "Mga Setting ng Keyboard", "player.onScreenKeyboard": "Keyboard sa screen", "player.onScreenNumberPad": "Number pad sa screen", "player.fullwidthAlphanumericMode": "Buong-lapad na alphanumeric na mode", "player.alphanumericMode": "Alphanumeric na mode"},
  "fr": {"settings.title": "Paramètres du clavier", "player.onScreenKeyboard": "Clavier à l'écran", "player.onScreenNumberPad": "Pavé numérique à l'écran", "player.fullwidthAlphanumericMode": "Mode alphanumérique pleine largeur", "player.alphanumericMode": "Mode alphanumérique"},
  "hi": {"settings.title": "कीबोर्ड सेटिंग्स", "player.onScreenKeyboard": "ऑन-स्क्रीन कीबोर्ड", "player.onScreenNumberPad": "ऑन-स्क्रीन संख्या पैड", "player.fullwidthAlphanumericMode": "पूर्ण चौड़ाई अल्फान्यूमेरिक मोड", "player.alphanumericMode": "अल्फान्यूमेरिक मोड"},
  "id": {"settings.title": "Pengaturan Papan Ketik", "player.onScreenKeyboard": "Papan ketik di layar", "player.onScreenNumberPad": "Bantalan angka di layar", "player.fullwidthAlphanumericMode": "Mode alfanumerik lebar penuh", "player.alphanumericMode": "Mode alfanumerik"},
  "it": {"settings.title": "Impostazioni della tastiera", "player.onScreenKeyboard": "Tastiera sullo schermo", "player.onScreenNumberPad": "Tastierino numerico sullo schermo", "player.fullwidthAlphanumericMode": "Modalità alfanumerica a larghezza intera", "player.alphanumericMode": "Modalità alfanumerica"},
  "ja": {"settings.title": "キーボード設定", "player.onScreenKeyboard": "スクリーンキーボード", "player.onScreenNumberPad": "スクリーン数字パッド", "player.fullwidthAlphanumericMode": "全幅英数字モード", "player.alphanumericMode": "英数字モード"},
  "ko": {"settings.title": "키보드 설정", "player.onScreenKeyboard": "화면 키보드", "player.onScreenNumberPad": "화면 숫자판", "player.fullwidthAlphanumericMode": "전자 영숫자 모드", "player.alphanumericMode": "영숫자 모드"},
  "ms": {"settings.title": "Tetapan Papan Kekunci", "player.onScreenKeyboard": "Papan kekunci di skrin", "player.onScreenNumberPad": "Pad nombor di skrin", "player.fullwidthAlphanumericMode": "Mod alfanumerik penuh lebar", "player.alphanumericMode": "Mod alfanumerik"},
  "nl": {"settings.title": "Toetsenbordinstellingen", "player.onScreenKeyboard": "On-screen toetsenbord", "player.onScreenNumberPad": "On-screen numpad", "player.fullwidthAlphanumericMode": "Volledig-breed alfanumerieke modus", "player.alphanumericMode": "Alfanumerieke modus"},
  "pl": {"settings.title": "Ustawienia Klawiatury", "player.onScreenKeyboard": "Klawiatura na ekranie", "player.onScreenNumberPad": "Klawiatura numeryczna na ekranie", "player.fullwidthAlphanumericMode": "Tryb pełnej szerokości alfanumerycznej", "player.alphanumericMode": "Tryb alfanumeryczny"},
  "pt": {"settings.title": "Configurações de Teclado", "player.onScreenKeyboard": "Teclado na tela", "player.onScreenNumberPad": "Teclado numérico na tela", "player.fullwidthAlphanumericMode": "Modo alfanumérico de largura completa", "player.alphanumericMode": "Modo alfanumérico"},
  "ru": {"settings.title": "Параметры клавиатуры", "player.onScreenKeyboard": "Экранная клавиатура", "player.onScreenNumberPad": "Экранная цифровая клавиатура", "player.fullwidthAlphanumericMode": "Режим полноширинных буквенно-цифровых символов", "player.alphanumericMode": "Буквенно-цифровой режим"},
  "sw": {"settings.title": "Mipangilio ya Kibodi", "player.onScreenKeyboard": "Kibodi kwenye skrini", "player.onScreenNumberPad": "Pad ya nambari kwenye skrini", "player.fullwidthAlphanumericMode": "Hali kamili ya alphanumeric", "player.alphanumericMode": "Hali ya alphanumeric"},
  "th": {"settings.title": "การตั้งค่าแป้นพิมพ์", "player.onScreenKeyboard": "แป้นพิมพ์บนหน้าจอ", "player.onScreenNumberPad": "แผ่นตัวเลขบนหน้าจอ", "player.fullwidthAlphanumericMode": "โหมดอักขระเต็มความกว้าง", "player.alphanumericMode": "โหมดอักษรตัวเลข"},
  "tr": {"settings.title": "Ayarlar", "player.onScreenKeyboard": "Ekranda klavye", "player.onScreenNumberPad": "Ekranda numpad", "player.fullwidthAlphanumericMode": "Tam genişlik alfanümerik modu", "player.alphanumericMode": "Alfanümerik modu"},
  "uk": {"settings.title": "Налаштування клавіатури", "player.onScreenKeyboard": "Клавіатура на екрані", "player.onScreenNumberPad": "Цифрова панель на екрані", "player.fullwidthAlphanumericMode": "Повноширокий буквено-цифровий режим", "player.alphanumericMode": "Буквено-цифровий режим"},
  "ur": {"settings.title": "کی بورڈ کی ترتیبات", "player.onScreenKeyboard": "سکرین پر کی بورڈ", "player.onScreenNumberPad": "سکرین پر نمبر پیڈ", "player.fullwidthAlphanumericMode": "مکمل چوڑائی حروف اور اعداد والا موڈ", "player.alphanumericMode": "حروف اور اعداد والا موڈ"},
  "vi": {"settings.title": "Cài đặt bàn phím", "player.onScreenKeyboard": "Bàn phím trên màn hình", "player.onScreenNumberPad": "Bàn phím số trên màn hình", "player.fullwidthAlphanumericMode": "Chế độ chữ và số toàn chiều rộng", "player.alphanumericMode": "Chế độ chữ và số"},
  "zh": {"settings.title": "键盘设置", "player.onScreenKeyboard": "屏上键盘", "player.onScreenNumberPad": "屏上数字键盘", "player.fullwidthAlphanumericMode": "全宽字母数字模式", "player.alphanumericMode": "字母数字模式"},
  "zh-tw": {"settings.title": "鍵盤設定", "player.onScreenKeyboard": "螢幕上的鍵盤", "player.onScreenNumberPad": "螢幕上的數字鍵盤", "player.fullwidthAlphanumericMode": "全寬英數字模式", "player.alphanumericMode": "英數字模式"}
};

// Khoá typekute → khoá trong `TypingEaseUI.keyboard` của site này.
const SITE_KEYS = {
  'settings.title': 'title',
  'player.onScreenKeyboard': 'boardAria',
  'player.onScreenNumberPad': 'keypadAria'
};

const VI_DEFAULTS = {
  'settings.title': 'Cài đặt bàn phím',
  'player.onScreenKeyboard': 'Bàn phím trên màn hình',
  'player.onScreenNumberPad': 'Bàn phím số trên màn hình'
};

function pageLang() {
  const lang = String(globalThis.document?.documentElement?.lang || 'vi').toLowerCase();
  if (TYPEKUTE[lang]) return lang;
  if (lang === 'zh-hant' || lang === 'zh-tw') return 'zh-tw';
  return lang.split('-')[0];
}

export function t(key) {
  const site = globalThis.TypingEaseUI?.keyboard?.[SITE_KEYS[key]];
  if (site) return site;
  const lang = pageLang();
  if (lang === 'vi' && VI_DEFAULTS[key]) return VI_DEFAULTS[key];
  return TYPEKUTE[lang]?.[key] || TYPEKUTE.en?.[key] || VI_DEFAULTS[key] || key;
}
