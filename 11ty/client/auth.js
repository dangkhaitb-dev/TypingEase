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
// Có phiên thì đồng bộ tiến độ với tài khoản (account-sync.js); Đăng xuất thì đẩy nốt thay đổi rồi xoá
// dữ liệu tài khoản khỏi máy. Phát sự kiện `typingease:auth` trên window ({ user, isNew } hoặc
// { user: null }). Gọi từ console: `TypingEaseAuth.open()`, `.signOut()`, `.getUser()`.

import { preloadAuth, reauthenticateWithGoogle, signInWithGoogle } from './firebase/firebase-init.js';
import { clearSyncedData, flushSync, hasInteracted, startSync, stopSync } from './account-sync.js';

const STORE = 'typingease-account-v1';     // { user, checkedAt } — chỉ để vẽ nhanh, server là nguồn thật
const RELOAD_MARK = 'typingease-sync-reloaded-at';   // sessionStorage: chống tải lại liên tục
const RECHECK_MS = 60 * 60 * 1000;
const QUIET_ERRORS = ['auth/popup-closed-by-user', 'auth/cancelled-popup-request', 'auth/user-cancelled'];
const LOGO = '/assets/brand/typingease-snail-t-68.webp';

const KEYS = ['signIn', 'account', 'signOut', 'error', 'title', 'subtitle', 'google', 'close', 'synced', 'reload', 'later', 'deleteAccount', 'deleteTitle', 'deleteBody', 'deleteConfirm', 'cancel', 'deleteError', 'wrongAccount'];
const TEXT = {
  en: ['Sign in', 'Account', 'Sign out', 'Couldn’t sign in — please try again.', 'Sign in to TypingEase', 'Save your progress and pick up where you left off on any device.', 'Continue with Google', 'Close', 'Your progress was updated from another device.', 'Reload', 'Later', 'Delete account', 'Delete your account?', 'This permanently deletes your account and the progress saved in it, on every device. Progress on this device is removed too. To confirm, you will sign in with Google once more.', 'Delete permanently', 'Cancel', 'Couldn’t delete the account — please try again.', 'That is a different Google account. Choose the account you are signed in with.'],
  vi: ['Đăng nhập', 'Tài khoản', 'Đăng xuất', 'Chưa đăng nhập được — vui lòng thử lại.', 'Đăng nhập vào TypingEase', 'Lưu tiến độ và học tiếp ở bất kỳ thiết bị nào.', 'Tiếp tục với Google', 'Đóng', 'Tiến độ vừa được cập nhật từ thiết bị khác.', 'Tải lại', 'Để sau', 'Xoá tài khoản', 'Xoá tài khoản của bạn?', 'Tài khoản và tiến độ đã lưu trong đó sẽ bị xoá vĩnh viễn trên mọi thiết bị. Tiến độ trên máy này cũng bị xoá. Để xác nhận, bạn sẽ đăng nhập bằng Google thêm một lần.', 'Xoá vĩnh viễn', 'Huỷ', 'Chưa xoá được tài khoản — vui lòng thử lại.', 'Đó là một tài khoản Google khác. Hãy chọn đúng tài khoản bạn đang đăng nhập.'],
  es: ['Iniciar sesión', 'Cuenta', 'Cerrar sesión', 'No se pudo iniciar sesión: inténtalo de nuevo.', 'Inicia sesión en TypingEase', 'Guarda tu progreso y continúa en cualquier dispositivo.', 'Continuar con Google', 'Cerrar', 'Tu progreso se actualizó desde otro dispositivo.', 'Recargar', 'Más tarde', 'Eliminar cuenta', '¿Eliminar tu cuenta?', 'Se eliminarán para siempre tu cuenta y el progreso guardado en ella, en todos tus dispositivos. El progreso de este dispositivo también se borrará. Para confirmarlo, volverás a iniciar sesión con Google.', 'Eliminar para siempre', 'Cancelar', 'No se pudo eliminar la cuenta: inténtalo de nuevo.', 'Esa es otra cuenta de Google. Elige la cuenta con la que has iniciado sesión.'],
  de: ['Anmelden', 'Konto', 'Abmelden', 'Anmeldung fehlgeschlagen – bitte versuche es erneut.', 'Bei TypingEase anmelden', 'Speichere deinen Fortschritt und mach auf jedem Gerät weiter.', 'Weiter mit Google', 'Schließen', 'Dein Fortschritt wurde von einem anderen Gerät aktualisiert.', 'Neu laden', 'Später', 'Konto löschen', 'Konto löschen?', 'Dein Konto und der darin gespeicherte Fortschritt werden auf allen Geräten endgültig gelöscht. Auch der Fortschritt auf diesem Gerät wird entfernt. Zur Bestätigung meldest du dich noch einmal mit Google an.', 'Endgültig löschen', 'Abbrechen', 'Konto konnte nicht gelöscht werden – bitte versuche es erneut.', 'Das ist ein anderes Google-Konto. Wähle das Konto, mit dem du angemeldet bist.'],
  it: ['Accedi', 'Account', 'Esci', 'Accesso non riuscito: riprova.', 'Accedi a TypingEase', 'Salva i tuoi progressi e riprendi da qualsiasi dispositivo.', 'Continua con Google', 'Chiudi', 'I tuoi progressi sono stati aggiornati da un altro dispositivo.', 'Ricarica', 'Più tardi', 'Elimina account', 'Eliminare il tuo account?', 'Il tuo account e i progressi salvati verranno eliminati definitivamente su tutti i dispositivi. Anche i progressi su questo dispositivo verranno rimossi. Per confermare, accederai di nuovo con Google.', 'Elimina definitivamente', 'Annulla', 'Impossibile eliminare l’account: riprova.', 'Questo è un altro account Google. Scegli l’account con cui hai effettuato l’accesso.'],
  fr: ['Se connecter', 'Compte', 'Se déconnecter', 'Connexion impossible — veuillez réessayer.', 'Se connecter à TypingEase', 'Enregistrez votre progression et reprenez sur n’importe quel appareil.', 'Continuer avec Google', 'Fermer', 'Votre progression a été mise à jour depuis un autre appareil.', 'Recharger', 'Plus tard', 'Supprimer le compte', 'Supprimer votre compte ?', 'Votre compte et la progression qui y est enregistrée seront supprimés définitivement, sur tous vos appareils. La progression sur cet appareil sera aussi effacée. Pour confirmer, vous vous reconnecterez une fois avec Google.', 'Supprimer définitivement', 'Annuler', 'Impossible de supprimer le compte — veuillez réessayer.', 'C’est un autre compte Google. Choisissez le compte avec lequel vous êtes connecté.'],
  ar: ['تسجيل الدخول', 'الحساب', 'تسجيل الخروج', 'تعذّر تسجيل الدخول — يُرجى المحاولة مرة أخرى.', 'تسجيل الدخول إلى TypingEase', 'احفظ تقدّمك وتابع من أي جهاز.', 'المتابعة باستخدام Google', 'إغلاق', 'تم تحديث تقدّمك من جهاز آخر.', 'إعادة التحميل', 'لاحقًا', 'حذف الحساب', 'هل تريد حذف حسابك؟', 'سيُحذف حسابك والتقدّم المحفوظ فيه نهائيًا على جميع أجهزتك، وسيُمسح التقدّم على هذا الجهاز أيضًا. للتأكيد، ستسجّل الدخول باستخدام Google مرة أخرى.', 'حذف نهائي', 'إلغاء', 'تعذّر حذف الحساب — يُرجى المحاولة مرة أخرى.', 'هذا حساب Google مختلف. اختر الحساب الذي سجّلت الدخول به.'],
  bn: ['সাইন ইন', 'অ্যাকাউন্ট', 'সাইন আউট', 'সাইন ইন করা যায়নি — আবার চেষ্টা করুন।', 'TypingEase-এ সাইন ইন করুন', 'আপনার অগ্রগতি সংরক্ষণ করুন এবং যেকোনো ডিভাইসে চালিয়ে যান।', 'Google দিয়ে চালিয়ে যান', 'বন্ধ করুন', 'অন্য একটি ডিভাইস থেকে আপনার অগ্রগতি হালনাগাদ হয়েছে।', 'রিলোড করুন', 'পরে', 'অ্যাকাউন্ট মুছুন', 'আপনার অ্যাকাউন্ট মুছবেন?', 'আপনার অ্যাকাউন্ট ও এতে সংরক্ষিত অগ্রগতি সব ডিভাইস থেকে স্থায়ীভাবে মুছে যাবে। এই ডিভাইসের অগ্রগতিও মুছে যাবে। নিশ্চিত করতে আপনাকে আরেকবার Google দিয়ে সাইন ইন করতে হবে।', 'স্থায়ীভাবে মুছুন', 'বাতিল', 'অ্যাকাউন্ট মোছা যায়নি — আবার চেষ্টা করুন।', 'এটি অন্য একটি Google অ্যাকাউন্ট। যে অ্যাকাউন্টে সাইন ইন করেছেন সেটি বেছে নিন।'],
  zh: ['登录', '账户', '退出登录', '登录失败——请重试。', '登录 TypingEase', '保存学习进度，在任何设备上继续练习。', '使用 Google 继续', '关闭', '你的进度已从另一台设备更新。', '重新加载', '稍后', '删除账户', '要删除你的账户吗？', '你的账户及其中保存的进度将在所有设备上被永久删除，这台设备上的进度也会被清除。为确认操作，你需要再用 Google 登录一次。', '永久删除', '取消', '无法删除账户——请重试。', '这是另一个 Google 账户。请选择你当前登录的账户。'],
  'zh-tw': ['登入', '帳戶', '登出', '登入失敗——請再試一次。', '登入 TypingEase', '儲存學習進度，在任何裝置上繼續練習。', '使用 Google 繼續', '關閉', '你的進度已從另一台裝置更新。', '重新載入', '稍後', '刪除帳戶', '要刪除你的帳戶嗎？', '你的帳戶及其中儲存的進度將在所有裝置上被永久刪除，這台裝置上的進度也會被清除。為確認操作，你需要再用 Google 登入一次。', '永久刪除', '取消', '無法刪除帳戶——請再試一次。', '這是另一個 Google 帳戶。請選擇你目前登入的帳戶。'],
  nl: ['Inloggen', 'Account', 'Uitloggen', 'Inloggen mislukt — probeer het opnieuw.', 'Inloggen bij TypingEase', 'Bewaar je voortgang en ga verder op elk apparaat.', 'Doorgaan met Google', 'Sluiten', 'Je voortgang is bijgewerkt vanaf een ander apparaat.', 'Opnieuw laden', 'Later', 'Account verwijderen', 'Je account verwijderen?', 'Je account en de voortgang die erin is opgeslagen worden op al je apparaten definitief verwijderd. Ook de voortgang op dit apparaat wordt gewist. Ter bevestiging log je nog één keer in met Google.', 'Definitief verwijderen', 'Annuleren', 'Account verwijderen mislukt — probeer het opnieuw.', 'Dat is een ander Google-account. Kies het account waarmee je bent ingelogd.'],
  fil: ['Mag-sign in', 'Account', 'Mag-sign out', 'Hindi nakapag-sign in — pakisubukan ulit.', 'Mag-sign in sa TypingEase', 'I-save ang iyong progreso at ituloy sa anumang device.', 'Magpatuloy gamit ang Google', 'Isara', 'Na-update ang iyong progreso mula sa ibang device.', 'I-reload', 'Mamaya', 'I-delete ang account', 'I-delete ang iyong account?', 'Permanenteng mabubura ang iyong account at ang progresong naka-save dito, sa lahat ng device. Mabubura rin ang progreso sa device na ito. Para kumpirmahin, mag-sign in ka ulit gamit ang Google.', 'I-delete nang permanente', 'Kanselahin', 'Hindi na-delete ang account — pakisubukan ulit.', 'Ibang Google account iyan. Piliin ang account na naka-sign in ka.'],
  he: ['התחברות', 'חשבון', 'התנתקות', 'ההתחברות נכשלה — נסו שוב.', 'התחברות ל-TypingEase', 'שמרו את ההתקדמות והמשיכו מכל מכשיר.', 'המשך עם Google', 'סגירה', 'ההתקדמות שלך עודכנה ממכשיר אחר.', 'טעינה מחדש', 'אחר כך', 'מחיקת החשבון', 'למחוק את החשבון?', 'החשבון וההתקדמות השמורה בו יימחקו לצמיתות בכל המכשירים. גם ההתקדמות במכשיר הזה תימחק. לאישור, תתחברו שוב עם Google.', 'מחיקה לצמיתות', 'ביטול', 'לא הצלחנו למחוק את החשבון — נסו שוב.', 'זה חשבון Google אחר. בחרו את החשבון שאיתו התחברתם.'],
  hi: ['साइन इन', 'खाता', 'साइन आउट', 'साइन इन नहीं हो सका — कृपया दोबारा कोशिश करें।', 'TypingEase में साइन इन करें', 'अपनी प्रगति सहेजें और किसी भी डिवाइस पर जारी रखें।', 'Google के साथ जारी रखें', 'बंद करें', 'आपकी प्रगति किसी दूसरे डिवाइस से अपडेट हुई है।', 'फिर से लोड करें', 'बाद में', 'खाता हटाएँ', 'अपना खाता हटाएँ?', 'आपका खाता और उसमें सहेजी गई प्रगति सभी डिवाइस से हमेशा के लिए हट जाएगी। इस डिवाइस की प्रगति भी हट जाएगी। पुष्टि के लिए आपको एक बार फिर Google से साइन इन करना होगा।', 'हमेशा के लिए हटाएँ', 'रद्द करें', 'खाता हटाया नहीं जा सका — कृपया दोबारा कोशिश करें।', 'यह कोई दूसरा Google खाता है। वही खाता चुनें जिससे आपने साइन इन किया है।'],
  id: ['Masuk', 'Akun', 'Keluar', 'Gagal masuk — silakan coba lagi.', 'Masuk ke TypingEase', 'Simpan kemajuan Anda dan lanjutkan di perangkat apa pun.', 'Lanjutkan dengan Google', 'Tutup', 'Kemajuan Anda diperbarui dari perangkat lain.', 'Muat ulang', 'Nanti', 'Hapus akun', 'Hapus akun Anda?', 'Akun Anda dan kemajuan yang tersimpan di dalamnya akan dihapus permanen di semua perangkat. Kemajuan di perangkat ini juga akan dihapus. Untuk konfirmasi, Anda akan masuk dengan Google sekali lagi.', 'Hapus permanen', 'Batal', 'Gagal menghapus akun — silakan coba lagi.', 'Itu akun Google yang berbeda. Pilih akun yang sedang Anda gunakan untuk masuk.'],
  ja: ['ログイン', 'アカウント', 'ログアウト', 'ログインできませんでした。もう一度お試しください。', 'TypingEase にログイン', '進捗を保存して、どの端末からでも続きから練習できます。', 'Google で続行', '閉じる', '別の端末から進捗が更新されました。', '再読み込み', 'あとで', 'アカウントを削除', 'アカウントを削除しますか？', 'アカウントと保存された進捗が、すべての端末から完全に削除されます。この端末の進捗も消去されます。確認のため、もう一度 Google でログインします。', '完全に削除', 'キャンセル', 'アカウントを削除できませんでした。もう一度お試しください。', '別の Google アカウントです。ログイン中のアカウントを選んでください。'],
  ko: ['로그인', '계정', '로그아웃', '로그인하지 못했습니다 — 다시 시도해 주세요.', 'TypingEase에 로그인', '진도를 저장하고 어느 기기에서든 이어서 연습하세요.', 'Google로 계속하기', '닫기', '다른 기기에서 진도가 업데이트되었습니다.', '새로고침', '나중에', '계정 삭제', '계정을 삭제할까요?', '계정과 계정에 저장된 진도가 모든 기기에서 영구적으로 삭제됩니다. 이 기기의 진도도 지워집니다. 확인을 위해 Google로 한 번 더 로그인합니다.', '영구 삭제', '취소', '계정을 삭제하지 못했습니다 — 다시 시도해 주세요.', '다른 Google 계정입니다. 로그인한 계정을 선택해 주세요.'],
  ms: ['Log masuk', 'Akaun', 'Log keluar', 'Gagal log masuk — sila cuba lagi.', 'Log masuk ke TypingEase', 'Simpan kemajuan anda dan sambung di mana-mana peranti.', 'Teruskan dengan Google', 'Tutup', 'Kemajuan anda dikemas kini dari peranti lain.', 'Muat semula', 'Nanti', 'Padam akaun', 'Padam akaun anda?', 'Akaun anda dan kemajuan yang disimpan di dalamnya akan dipadam secara kekal pada semua peranti. Kemajuan pada peranti ini juga akan dipadam. Untuk mengesahkan, anda akan log masuk dengan Google sekali lagi.', 'Padam secara kekal', 'Batal', 'Gagal memadam akaun — sila cuba lagi.', 'Itu akaun Google yang lain. Pilih akaun yang anda gunakan untuk log masuk.'],
  fa: ['ورود', 'حساب کاربری', 'خروج', 'ورود انجام نشد — لطفاً دوباره تلاش کنید.', 'ورود به TypingEase', 'پیشرفت خود را ذخیره کنید و در هر دستگاهی ادامه دهید.', 'ادامه با Google', 'بستن', 'پیشرفت شما از دستگاه دیگری به‌روز شد.', 'بارگذاری دوباره', 'بعداً', 'حذف حساب', 'حساب خود را حذف می‌کنید؟', 'حساب شما و پیشرفت ذخیره‌شده در آن برای همیشه از همهٔ دستگاه‌ها حذف می‌شود. پیشرفت روی این دستگاه هم پاک می‌شود. برای تأیید، یک بار دیگر با Google وارد می‌شوید.', 'حذف برای همیشه', 'لغو', 'حذف حساب انجام نشد — لطفاً دوباره تلاش کنید.', 'این یک حساب Google دیگر است. حسابی را انتخاب کنید که با آن وارد شده‌اید.'],
  pl: ['Zaloguj się', 'Konto', 'Wyloguj się', 'Nie udało się zalogować — spróbuj ponownie.', 'Zaloguj się do TypingEase', 'Zapisz postępy i kontynuuj na dowolnym urządzeniu.', 'Kontynuuj z Google', 'Zamknij', 'Twoje postępy zostały zaktualizowane z innego urządzenia.', 'Odśwież', 'Później', 'Usuń konto', 'Usunąć konto?', 'Twoje konto i zapisane w nim postępy zostaną trwale usunięte na wszystkich urządzeniach. Postępy na tym urządzeniu również zostaną usunięte. Aby potwierdzić, zalogujesz się jeszcze raz przez Google.', 'Usuń na zawsze', 'Anuluj', 'Nie udało się usunąć konta — spróbuj ponownie.', 'To inne konto Google. Wybierz konto, na które jesteś zalogowany.'],
  pt: ['Entrar', 'Conta', 'Sair', 'Não foi possível entrar — tente novamente.', 'Entrar no TypingEase', 'Salve seu progresso e continue em qualquer dispositivo.', 'Continuar com o Google', 'Fechar', 'Seu progresso foi atualizado a partir de outro dispositivo.', 'Recarregar', 'Mais tarde', 'Excluir conta', 'Excluir sua conta?', 'Sua conta e o progresso salvo nela serão excluídos permanentemente em todos os dispositivos. O progresso neste dispositivo também será apagado. Para confirmar, você entrará com o Google mais uma vez.', 'Excluir permanentemente', 'Cancelar', 'Não foi possível excluir a conta — tente novamente.', 'Essa é outra conta do Google. Escolha a conta com a qual você entrou.'],
  ru: ['Войти', 'Аккаунт', 'Выйти', 'Не удалось войти — попробуйте ещё раз.', 'Вход в TypingEase', 'Сохраняйте прогресс и продолжайте на любом устройстве.', 'Продолжить с Google', 'Закрыть', 'Ваш прогресс обновлён с другого устройства.', 'Перезагрузить', 'Позже', 'Удалить аккаунт', 'Удалить аккаунт?', 'Ваш аккаунт и сохранённый в нём прогресс будут навсегда удалены на всех устройствах. Прогресс на этом устройстве тоже будет стёрт. Для подтверждения нужно ещё раз войти через Google.', 'Удалить навсегда', 'Отмена', 'Не удалось удалить аккаунт — попробуйте ещё раз.', 'Это другой аккаунт Google. Выберите аккаунт, под которым вы вошли.'],
  sw: ['Ingia', 'Akaunti', 'Toka', 'Imeshindwa kuingia — tafadhali jaribu tena.', 'Ingia kwenye TypingEase', 'Hifadhi maendeleo yako na uendelee kwenye kifaa chochote.', 'Endelea na Google', 'Funga', 'Maendeleo yako yamesasishwa kutoka kifaa kingine.', 'Pakia upya', 'Baadaye', 'Futa akaunti', 'Futa akaunti yako?', 'Akaunti yako na maendeleo yaliyohifadhiwa ndani yake yatafutwa kabisa kwenye vifaa vyote. Maendeleo kwenye kifaa hiki pia yatafutwa. Ili kuthibitisha, utaingia tena kwa kutumia Google.', 'Futa kabisa', 'Ghairi', 'Imeshindwa kufuta akaunti — tafadhali jaribu tena.', 'Hiyo ni akaunti nyingine ya Google. Chagua akaunti uliyoingia nayo.'],
  th: ['เข้าสู่ระบบ', 'บัญชี', 'ออกจากระบบ', 'เข้าสู่ระบบไม่สำเร็จ — กรุณาลองใหม่อีกครั้ง', 'เข้าสู่ระบบ TypingEase', 'บันทึกความคืบหน้าและฝึกต่อได้บนทุกอุปกรณ์', 'ดำเนินการต่อด้วย Google', 'ปิด', 'ความคืบหน้าของคุณได้รับการอัปเดตจากอุปกรณ์อื่น', 'โหลดใหม่', 'ภายหลัง', 'ลบบัญชี', 'ลบบัญชีของคุณใช่ไหม', 'บัญชีและความคืบหน้าที่บันทึกไว้จะถูกลบถาวรจากทุกอุปกรณ์ ความคืบหน้าบนอุปกรณ์นี้ก็จะถูกลบด้วย เพื่อยืนยัน คุณจะต้องเข้าสู่ระบบด้วย Google อีกครั้ง', 'ลบถาวร', 'ยกเลิก', 'ลบบัญชีไม่สำเร็จ — กรุณาลองใหม่อีกครั้ง', 'นี่เป็นบัญชี Google อื่น โปรดเลือกบัญชีที่คุณใช้เข้าสู่ระบบอยู่'],
  tr: ['Giriş yap', 'Hesap', 'Çıkış yap', 'Giriş yapılamadı — lütfen tekrar deneyin.', 'TypingEase’e giriş yap', 'İlerlemeni kaydet ve istediğin cihazda kaldığın yerden devam et.', 'Google ile devam et', 'Kapat', 'İlerlemen başka bir cihazdan güncellendi.', 'Yeniden yükle', 'Sonra', 'Hesabı sil', 'Hesabın silinsin mi?', 'Hesabın ve içinde kayıtlı ilerlemen tüm cihazlarda kalıcı olarak silinecek. Bu cihazdaki ilerleme de silinecek. Onaylamak için Google ile bir kez daha giriş yapacaksın.', 'Kalıcı olarak sil', 'İptal', 'Hesap silinemedi — lütfen tekrar deneyin.', 'Bu başka bir Google hesabı. Giriş yaptığın hesabı seç.'],
  uk: ['Увійти', 'Обліковий запис', 'Вийти', 'Не вдалося увійти — спробуйте ще раз.', 'Вхід у TypingEase', 'Зберігайте прогрес і продовжуйте на будь-якому пристрої.', 'Продовжити з Google', 'Закрити', 'Ваш прогрес оновлено з іншого пристрою.', 'Перезавантажити', 'Пізніше', 'Видалити обліковий запис', 'Видалити обліковий запис?', 'Ваш обліковий запис і збережений у ньому прогрес буде назавжди видалено на всіх пристроях. Прогрес на цьому пристрої теж буде стерто. Для підтвердження потрібно ще раз увійти через Google.', 'Видалити назавжди', 'Скасувати', 'Не вдалося видалити обліковий запис — спробуйте ще раз.', 'Це інший обліковий запис Google. Виберіть той, через який ви увійшли.'],
  ur: ['سائن ان', 'اکاؤنٹ', 'سائن آؤٹ', 'سائن ان نہیں ہو سکا — براہ کرم دوبارہ کوشش کریں۔', 'TypingEase میں سائن ان کریں', 'اپنی پیش رفت محفوظ کریں اور کسی بھی ڈیوائس پر جاری رکھیں۔', 'Google کے ساتھ جاری رکھیں', 'بند کریں', 'آپ کی پیش رفت کسی دوسرے ڈیوائس سے اپ ڈیٹ ہوئی ہے۔', 'دوبارہ لوڈ کریں', 'بعد میں', 'اکاؤنٹ حذف کریں', 'اپنا اکاؤنٹ حذف کریں؟', 'آپ کا اکاؤنٹ اور اس میں محفوظ پیش رفت تمام ڈیوائسز سے مستقل طور پر حذف ہو جائے گی۔ اس ڈیوائس کی پیش رفت بھی مٹ جائے گی۔ تصدیق کے لیے آپ کو ایک بار پھر Google سے سائن ان کرنا ہوگا۔', 'مستقل طور پر حذف کریں', 'منسوخ کریں', 'اکاؤنٹ حذف نہیں ہو سکا — براہ کرم دوبارہ کوشش کریں۔', 'یہ کوئی دوسرا Google اکاؤنٹ ہے۔ وہی اکاؤنٹ منتخب کریں جس سے آپ نے سائن ان کیا ہے۔']
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

// Hộp thoại "Xoá tài khoản?": cùng khung với hộp đăng nhập; nút xác nhận màu đỏ mở lại popup Google
// (đúng chủ tài khoản mới xoá được — xem functions/api/account.js), nút Huỷ được focus sẵn.
function buildDeleteDialog(t, onConfirm) {
  const confirm = el('button', { type: 'button', className: 'auth-danger', textContent: t.deleteConfirm });
  const cancel = el('button', { type: 'button', className: 'auth-secondary', textContent: t.cancel });
  const error = el('p', { className: 'auth-error', role: 'alert', hidden: true });
  const dialog = el('dialog', { className: 'auth-dialog' }, [
    el('div', { className: 'auth-card auth-card--danger' }, [
      el('h2', { className: 'auth-title', id: 'auth-delete-title', textContent: t.deleteTitle }),
      el('p', { className: 'auth-subtitle', textContent: t.deleteBody }),
      el('div', { className: 'auth-actions' }, [cancel, confirm]),
      error
    ])
  ]);
  dialog.setAttribute('aria-labelledby', 'auth-delete-title');
  for (const type of CONTAINED) dialog.addEventListener(type, event => event.stopPropagation());
  cancel.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  confirm.addEventListener('click', onConfirm);
  document.body.append(dialog);
  return {
    open() { error.hidden = true; dialog.showModal(); cancel.focus(); preloadAuth().catch(() => {}); },
    close: () => dialog.close(),
    setBusy(busy) { confirm.disabled = cancel.disabled = busy; confirm.setAttribute('aria-busy', String(busy)); },
    showError(message) { error.textContent = message; error.hidden = false; }
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
  const deleteButton = el('button', { type: 'button', className: 'account-delete', textContent: t.deleteAccount });
  const menu = el('div', { className: 'account-menu', hidden: true }, [name, email, signOutButton, deleteButton]);

  const root = el('div', { className: 'account' }, [signInButton, accountButton, menu]);
  host.append(root);
  const dialog = typeof HTMLDialogElement === 'function' ? buildDialog(t, signIn) : null;
  const deleteDialog = typeof HTMLDialogElement === 'function' ? buildDeleteDialog(t, deleteAccount) : null;
  deleteButton.hidden = !deleteDialog;

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
    syncFor(next);
    if (announce && changed) window.dispatchEvent(new CustomEvent('typingease:auth', { detail: { user: next, isNew } }));
  }

  // Phiên còn → đồng bộ tiến độ (account-sync.js). Phiên mất (hết hạn, bị đăng xuất ở máy khác) → chỉ
  // ngừng đồng bộ, dữ liệu trên máy để nguyên; lần đăng nhập sau gộp lại vào tài khoản.
  function syncFor(next) {
    if (next?.id) startSync(next, { onRemoteChange });
    else stopSync();
  }

  // Dữ liệu trên máy vừa được thay bằng / gộp với tài khoản, nhưng trang đang chạy còn giữ bản cũ trong
  // bộ nhớ. Vừa đăng nhập, hoặc người dùng chưa đụng vào trang → tải lại luôn. Đang học dở → hỏi.
  function onRemoteChange({ initial }) {
    let reloadedRecently = false;
    try { reloadedRecently = Date.now() - Number(sessionStorage.getItem(RELOAD_MARK)) < 20000; } catch { /* bị chặn */ }
    if (initial || (!hasInteracted() && !reloadedRecently)) {
      try { sessionStorage.setItem(RELOAD_MARK, String(Date.now())); } catch { /* bị chặn */ }
      location.reload();
      return;
    }
    showSyncBar();
  }

  let syncBar = null;
  function showSyncBar() {
    if (syncBar) return;
    // Cùng khuôn với thanh "có bản mới" của sw-register.js (.update-bar trong base.css).
    syncBar = el('div', { className: 'update-bar', role: 'status' }, [
      el('span', { textContent: t.synced }),
      el('button', { type: 'button', className: 'is-primary', textContent: t.reload, onclick: () => location.reload() }),
      el('button', { type: 'button', textContent: t.later, onclick: () => { syncBar.remove(); syncBar = null; } })
    ]);
    document.body.append(syncBar);
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

  // Đẩy nốt thay đổi lên tài khoản, rồi xoá dữ liệu tài khoản khỏi máy (máy có thể dùng chung) và tải
  // lại trang để mọi phần đang hiển thị tiến độ về trạng thái khách trống.
  async function signOut() {
    closeMenu();
    try { await flushSync(); } catch { /* mất mạng: phần chưa đẩy được thì mất cùng máy */ }
    try { await fetch('/api/auth/logout', { method: 'POST' }); } catch { /* offline: cookie phiên tự hết hạn */ }
    document.cookie = 'te_auth=; Max-Age=0; Path=/; Secure; SameSite=Lax';
    clearSyncedData();
    setUser(null);
    location.reload();
  }

  // Xoá tài khoản: đăng nhập lại bằng Google → server xoá tài khoản, mọi phiên và dữ liệu đồng bộ → xoá bản
  // ghi bên Firebase → xoá dữ liệu tài khoản khỏi máy → tải lại trang như một khách mới.
  async function deleteAccount() {
    if (busy) return;
    busy = true;
    deleteDialog.setBusy(true);
    let reauth = null;
    try {
      reauth = await reauthenticateWithGoogle();
      const response = await fetch('/api/account', {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ idToken: reauth.idToken })
      });
      const result = await response.json().catch(() => ({}));
      if (result.error === 'wrong_account') { reauth.cancel(); deleteDialog.showError(t.wrongAccount); return; }
      if (!response.ok) throw new Error(`delete ${response.status}`);
      await reauth.remove();
      clearSyncedData();
      document.cookie = 'te_auth=; Max-Age=0; Path=/; Secure; SameSite=Lax';
      setUser(null);
      window.TypingEaseAnalytics?.track('account_deleted');
      location.reload();
    } catch (failure) {
      reauth?.cancel();
      if (!QUIET_ERRORS.includes(failure?.code)) { console.warn('delete account failed', failure); deleteDialog.showError(t.deleteError); }
    } finally {
      busy = false;
      deleteDialog.setBusy(false);
    }
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
  deleteButton.addEventListener('click', () => { closeMenu(); deleteDialog?.open(); });
  root.addEventListener('keydown', event => { if (event.key === 'Escape' && !menu.hidden) { event.preventDefault(); closeMenu({ restoreFocus: true }); } });
  document.addEventListener('pointerdown', event => { if (!root.contains(event.target)) closeMenu(); });
  // Đăng nhập / đăng xuất ở tab khác thì tab này đổi theo.
  window.addEventListener('storage', event => {
    if (event.key !== STORE) return;
    const next = readStore()?.user || null;
    if ((next?.id || null) !== (user?.id || null)) { user = next; render(); syncFor(next); }
  });

  const stored = readStore();
  if (hasHintCookie()) {
    user = stored?.user || { id: '', name: '', email: '', photo: null };
    render();
    syncFor(user);    // chưa có bản lưu (id rỗng) thì refresh() bên dưới bắt đầu đồng bộ khi biết id
    if (!stored?.user || Date.now() - (stored.checkedAt || 0) > RECHECK_MS) refresh();
  } else {
    if (stored) writeStore(null);   // cookie đã hết hạn / bị xoá: bản lưu không còn đúng
    render();
  }

  return { open: () => (dialog ? dialog.open() : signIn()), signOut, getUser: () => user };
}

const host = document.querySelector('[data-site-header] .header-actions');
if (host) window.TypingEaseAuth = build(host);
