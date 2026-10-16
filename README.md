# TypingEase

Website luyện gõ mười ngón trên đúng bàn phím của người học (27 ngôn ngữ, 55 khoá, 119 bố cục),
dựng bằng Eleventy + Vite theo cùng cách tổ chức với typekute. Giao diện theo
[design system](docs/design-system.md): phong cách "keycap" của typekute, màu xanh lá/lime của
TypingEase.

## Chạy project

```sh
npm ci
npm run dev -- --port 4180        # Eleventy (watch) ghi .generated/site, Vite phục vụ
```

```sh
npm run build          # eleventy → .generated/site, rồi vite build → dist/
npm run preview        # phục vụ dist/
npm run build:clean    # xoá .generated/ và dist/ rồi build lại
```

`dist/` là site hoàn chỉnh. GitHub Actions (`.github/workflows/deploy.yml`) chạy `npm run check` +
`npm run build` rồi đăng `dist/` lên GitHub Pages — cần đặt Settings → Pages → Source là
"GitHub Actions". `.generated/` và `dist/` là đầu ra tự sinh, không sửa tay, không commit.

## Sửa ở đâu?

| Phạm vi | Nguồn để sửa |
|---|---|
| Trang viết tay (trang đầu, trang nhà từng ngôn ngữ, player, bài viết, công cụ) | `11ty/site/<đường dẫn URL>/index.html` |
| Trang sinh từ dữ liệu (lộ trình, player của họ bàn phím, test, trò chơi, tiến độ, pháp lý, chuyển hướng) | `tooling/pages/<loại>.mjs` + chữ trong `content/` |
| Chữ trang test / trò chơi / pháp lý / tiến độ | `content/typing-test/`, `content/games/`, `content/legal/`, `content/progress/` |
| Cấu hình + chuỗi của trang lộ trình | `content/roadmaps/config.<lang>.mjs` |
| Dữ liệu chạy ở trình duyệt (`/data/…`: khoá, bài, bàn phím, kho từ, `languages.js`) | `content/data/` |
| JS trình duyệt (`/script.js`, `/player.js`, `/keyboard/…`, `/i18n/ui.<lang>.js`…) | `11ty/client/` (cùng đường dẫn URL) |
| CSS (`/tokens.css`, `/base.css`, CSS từng trang) | `11ty/styles/` (cùng đường dẫn URL) |
| File chép nguyên (ảnh, three.js, `CNAME`, `robots.txt`, `sitemap.xml`) | `public/` |
| Khối chung chèn lúc build (mã băm `?v=`, hreflang, chân trang pháp lý, nút ☰, thẻ SEO) | `tooling/build/transforms.mjs` |
| Công cụ dữ liệu (sinh khoá, nhập từ typekute, băm, sitemap) | `tooling/data/` |
| Kiểm tra dữ liệu, e2e | `tooling/test/` |

Đường dẫn của từng loại nguồn gom trong `tooling/lib/paths.cjs`.

### Trang sinh từ dữ liệu

Mỗi module trong `tooling/pages/` trả về `[{ path, html }]`; `11ty/site/generated.11ty.js` ghi
chúng. Module chỉ ĐỌC (content/, 11ty/client/, trang viết tay làm khuôn) — Eleventy là nơi duy
nhất ghi file. Làm việc với một loại trang: `PAGES=roadmaps npx eleventy` (hoặc
`PAGES=none` để chỉ dựng trang viết tay).

### Sau khi đổi dữ liệu

| Đổi gì | Chạy |
|---|---|
| bài học hay chỉ mục `content/data/curriculum.*.js` | `npm run data:stamp` |
| thêm/bớt khoá, số bài của khoá | `npm run data:sync` |
| bài nếm thử (ngôn ngữ chưa có khoá) | `npm run data:tasters` |
| nhập lại giáo trình từ typekute | `npm run data:import -- --course <xx>` |
| ngày `<lastmod>` của sitemap | `npm run sitemap:lastmod` (sau `npm run build`) |

## Kiểm tra

```sh
npm run check          # dữ liệu khớp (--check của mọi công cụ) + validate bài + Telex/Hangul + kho từ
npm run build
npm run preview -- --port 8765
PW=<thư mục>/node_modules/playwright-core npm run test:e2e -- http://127.0.0.1:8765
```

Mọi thay đổi giao diện phải xem trên trình duyệt thật ở cả desktop và mobile, console sạch lỗi.

[Design system](docs/design-system.md) · [Kế hoạch](docs/PLAN.md) · [Quyết định](docs/DECISIONS.md)
