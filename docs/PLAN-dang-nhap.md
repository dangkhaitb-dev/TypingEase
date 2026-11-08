# KẾ HOẠCH ĐĂNG NHẬP + ĐỒNG BỘ TIẾN ĐỘ

> Firebase Auth (chỉ Google) → Cloudflare Pages Functions (`functions/api/`, là Workers, cùng tên miền) → D1.
> Đã chốt: chỉ đăng nhập Google · tài khoản có sẵn đăng nhập trên máy có dữ liệu khách thì **tự merge,
> không hỏi** · đăng xuất thì **xoá dữ liệu tài khoản khỏi máy** (máy có thể dùng chung).

## 1. Kiến trúc

```
Trình duyệt ── Firebase Auth (signInWithPopup Google, chỉ nạp SDK khi bấm nút) ──► ID token
     └─ POST /api/auth/session {idToken} ──► functions/api/auth/session.js
                                              ├─ verify RS256 bằng JWKS của Google (WebCrypto, không dependency)
                                              ├─ upsert users (D1)
                                              └─ tạo sessions (D1) → Set-Cookie te_session (HttpOnly) + te_auth=1
Sau đó trình duyệt gọi signOut() của Firebase: phiên do server quản, trang thường không tải Firebase Auth.
```

Không dùng session cookie của Firebase (cần Admin SDK, tối đa 14 ngày). Không tách Worker ra subdomain
riêng: cùng tên miền thì cookie là first-party (Safari ITP không đụng), không cần CORS, deploy chung site.

## 2. Phiên đăng nhập

- `te_session`: 32 byte ngẫu nhiên, `HttpOnly; Secure; SameSite=Lax; Path=/`, 180 ngày. D1 chỉ giữ SHA-256.
- Trượt: request có phiên mà `last_seen_at` cũ hơn 24h thì gia hạn thêm 180 ngày (tối đa 1 lần ghi D1/ngày/phiên).
- `te_auth=1` (JS đọc được, không bí mật): vẽ ngay nút Tài khoản/Đăng nhập, khách thì không gọi API nào.
- POST/PUT/DELETE: `Origin` phải trùng origin của site (chống CSRF, cộng thêm SameSite=Lax).
- Tạo phiên chỉ nhận ID token có `auth_time` trong 5 phút gần nhất và provider `google.com`.
- Đăng xuất: xoá phiên; `?all=1` xoá mọi phiên của user.

## 3. D1 — `migrations/0001_auth.sql`

`users` (id uuid, firebase_uid UNIQUE, email, display_name, photo_url, provider, created_at, last_login_at)
· `sessions` (token_hash PK, user_id, created_at, last_seen_at, expires_at, user_agent)
· `user_data` (user_id, key, data JSON, rev, updated_at; PK (user_id, key)) — một dòng mỗi khoá localStorage.

## 4. API

| Endpoint | Việc |
|---|---|
| `POST /api/auth/session` | verify token, upsert user, tạo phiên → `{ user, isNew }` |
| `GET /api/me` | user hoặc 401 (kèm gia hạn cookie khi tới hạn) |
| `POST /api/auth/logout` | xoá phiên (`?all=1`: mọi phiên) |
| `GET /api/sync` | mọi khoá `{ key, data, rev }` |
| `PUT /api/sync` | `{ items: [{ key, data, baseRev }] }`; lệch rev → 409 kèm bản server |
| `DELETE /api/account` | xoá tài khoản + dữ liệu |

## 5. Đồng bộ (client merge, server giữ rev)

`11ty/client/account-sync.js`: registry khoá → `merge(local, remote)` **idempotent** (merge lại không cộng trùng).

| Khoá | Merge |
|---|---|
| `typingease-progress-*-v3` | từng màn max sao; bestWpm/bestAccuracy max; unlocked hợp; current mới hơn |
| `typingease-profile-v1` attempts | hợp, bỏ trùng theo at+kind+wpm, giữ 120 mới nhất |
| `profile.keys`, `typingease-weak-keys-v1` | bộ đếm → lưu theo `deviceId`, mỗi máy ghi đè phần mình, đọc thì cộng |
| `typingease-daily-goal-v1` | mỗi ngày max practiceSeconds, OR goalCompleted, tính lại streak |
| badges, lịch sử test, trò chơi | hợp + bỏ trùng; điểm cao max |
| âm thanh, bàn phím, khoá test | ghi sau thắng (`updatedAt`) |

- Đăng nhập: GET sync → merge từng khoá với dữ liệu khách trên máy → PUT khoá đổi → ghi localStorage → reload
  + toast. Tài khoản mới: remote rỗng nên dữ liệu khách lên nguyên vẹn.
- Đang dùng: `TypingEaseSync.markDirty(key)` trong các `save()` hiện có; debounce 5s; `visibilitychange`
  → `fetch(..., { keepalive: true })`; tải trang pull lại nếu lần pull trước quá 5 phút; mất mạng giữ cờ dirty.
- Đăng xuất: xoá các khoá đã đồng bộ khỏi localStorage, về khách trống.

## 6. Giao diện

`11ty/client/auth.js` nạp lười `firebase-auth.js` (cùng CDN 12.8.0 với firebase-init.js) · nút topbar
Đăng nhập ↔ avatar + menu (Đồng bộ ngay · Đăng xuất · Xoá tài khoản) · lời mời trên /tien-do/ · chuỗi i18n
26 ngôn ngữ (vi/en trước) · trang quyền riêng tư (cookie phiên = thiết yếu, tách khỏi đồng ý Analytics).

## 7. Giai đoạn

| # | Việc | Trạng thái |
|---|---|---|
| 0 | D1 `typingease` (id trong `wrangler.toml`) đã tạo + migrate remote; `TELEGRAM_CHAT_ID` chuyển sang secret (có wrangler.toml thì biến thường trên dashboard bị bỏ qua). Còn: bật Google trong Firebase Console | gần xong |
| 1 | `functions/_lib/*`, `/api/auth/session`, `/api/me`, `/api/auth/logout`; test verify token | xong |
| 2 | `auth.js` (nạp qua sw-register.js), `signInWithGoogle()` trong firebase-init.js, CSS trong base.css, sw.js bỏ qua `/api/` | xong, chưa thử popup Google thật |
| 3 | `/api/sync`, `account-sync.js`, merge lúc đăng nhập, debounce/keepalive, gắn markDirty | |
| 4 | test merge (idempotent, không cộng trùng bộ đếm), e2e | |
| 5 | i18n, pháp lý, bật vi/en trước | |
