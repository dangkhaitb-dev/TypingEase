-- Tài khoản, phiên đăng nhập và dữ liệu đồng bộ (docs/PLAN-dang-nhap.md).
-- Áp: `npx wrangler d1 migrations apply typingease --remote` (bỏ --remote để áp vào D1 local khi dev).

CREATE TABLE users (
  id TEXT PRIMARY KEY,                 -- uuid riêng của site, không phụ thuộc Firebase
  firebase_uid TEXT NOT NULL UNIQUE,
  email TEXT,
  display_name TEXT,
  photo_url TEXT,
  provider TEXT NOT NULL,
  created_at INTEGER NOT NULL,         -- ms epoch
  last_login_at INTEGER NOT NULL
);

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,         -- SHA-256 (hex) của cookie te_session; bản gốc không lưu
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL,
  last_seen_at INTEGER NOT NULL,
  expires_at INTEGER NOT NULL,
  user_agent TEXT
);
CREATE INDEX sessions_user ON sessions(user_id);

CREATE TABLE user_data (
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  key TEXT NOT NULL,                   -- trùng tên khoá localStorage, vd 'typingease-progress-v3'
  data TEXT NOT NULL,                  -- JSON
  rev INTEGER NOT NULL DEFAULT 1,      -- tăng mỗi lần ghi; PUT /api/sync so baseRev với nó
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (user_id, key)
);
