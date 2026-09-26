# QUYẾT ĐỊNH THI HÀNH — chốt 5 câu hỏi mở của PLAN.md

Ngày 2026-09-09. Các quyết định dưới đây là **ràng buộc**; agent thực thi không cần hỏi lại.

## 1. Tiếng Việt có dấu (Unit 3) — LÀM, chỉ Telex
- Làm Unit 3 với **Telex mặc định, không có tuỳ chọn VNI** ở bản đầu.
- Bắt buộc **prototype `telex-match.js` trước** (5 âm tiết) rồi mới viết 8 bài của unit.
- Nếu prototype thất bại trên bất kỳ 2 trong 3 môi trường (Windows Unikey, macOS, Android Gboard):
  Unit 3 chạy `ascii-fallback` (không dấu) và ghi rõ hạn chế trên trang lộ trình. Không huỷ unit.
- Lý do: gõ tiếng Việt có dấu là điểm khác biệt duy nhất so với một bản clone typing.com. Rủi ro đã có đường lùi.

## 2. Tab "Trò chơi 30 giây" — BỎ. Tab "Tự do" — RA TRANG RIÊNG
- Xoá `.game-practice` khỏi trang chủ (trùng với test 30 s đã có).
- `.free-practice` chuyển sang `/luyen-tu-do/`.
- Không còn `mode-switch` trên trang chủ.
- Lý do: trang chủ phải một mục đích — đưa người mới vào bài học.

## 3. Lesson player — Ở `/hoc/` VỚI HASH ROUTE
- `/hoc/#u1-l04/5`. Không tạo 35 thư mục. Trang chủ và các bài SEO giữ nguyên URL.
- Lý do: focus mode thật, không phá SEO trang chủ.

## 4. Ngôn ngữ — RÚT DROPDOWN VỀ vi / en / ja
- Dropdown `#language` chỉ còn 3 lựa chọn. Nội dung bài học: vi đầy đủ, en/ja theo Phase 5.
- **Giữ nguyên** các bảng chuỗi zh/ru/pt/pt-BR/ar/ms trong `script.js` (không xoá code) để còn bật lại được.
- Lý do: 6 ngôn ngữ kia không có trang, không có hreflang, không có sitemap — chỉ là trang trí, và
  chọn 中文 rồi nhận bài tiếng Anh là trải nghiệm tệ hơn là không có lựa chọn đó.

## 5. Tiến độ cũ — KHÔNG MAP 1-1
- Người đã có `goxanh-lesson-records-v2`: hiện "Đã hoàn thành n bài ở giáo trình cũ", mở khoá Unit 1 + Unit 2,
  không cố map từng bài. Giữ lại record cũ trong localStorage (không xoá) để còn hiển thị ở `/tien-do/`.
- Lý do: 30 bài cũ và 35 bài mới khác nhau về cả thứ tự phím và cấu trúc screen; map giả sẽ sai.

---

# TRẠNG THÁI HIỆN TẠI (đọc trước khi làm)

## Phase 0 — XONG
- `script.js` `renderCoachTrend()`: đã sửa bug `chart.hidden` (SVGElement không có IDL `hidden`) →
  dùng `toggleAttribute` + class `has-trend` trên `#coach`.
- `coach.css`: thêm `.coach:not(.has-trend) .coach-body{grid-template-columns:1fr}` và
  `.coach-trend[hidden]{display:none}`.
- `script.js`: thêm dict `coachTrendHint` (9 ngôn ngữ); 3 trang index thêm `<p id="coach-trend-hint">`.
- `hands.js` + `hands.css`: gradient chuyển sang tông da, thêm stroke, opacity .94.
- `keyboard.css`: `.keyboard` background `#edf4f0` → `#dfe8e3`.
- **Lưu ý**: mục "mobile tràn ngang 390px" trong PLAN.md mục 0 là **chẩn đoán sai** — đó là do
  `--window-size=390` bị Chrome trên Windows kẹp lên ~500px khi chụp ảnh. Đo bằng CDP
  `Emulation.setDeviceMetricsOverride` thì `docScrollWidth === 390`, không tràn.
  `.results-table-wrap` đã có `overflow:auto` sẵn từ trước. Không cần sửa gì.

## Phase 1 — ĐANG LÀM, đã có `taster.js`
`taster.js` (mới, đã viết xong) là widget "gõ thử" cho hero: tự chứa engine nhỏ, dòng
`jjj fff jjj fff jf fj`, bàn phím thu gọn 4 hàng (`data-tkey`, KHÔNG dùng `data-key` để tránh
xung đột với `highlightGuide()` của `script.js`), ghost hands qua `TypingEaseHands.markup`,
tự chấm điểm và xếp lớp 3 bậc theo PLAN.md mục A3. Nó cần:
- `window.TypingEaseHome.openLesson(0)` — chưa tồn tại, phải export từ `script.js`.
- event `typingease:language` với `detail.language` — chưa tồn tại, phải dispatch trong `applyLanguage()`.
- `home.css` — chưa có.
- markup `<div id="taster"></div>` trong hero của cả 3 trang index — chưa có.

---

# CẠM BẪY ĐÃ GẶP (đừng lặp lại)

1. **`element.hidden` trên phần tử SVG không hoạt động.** `hidden` là IDL của `HTMLElement`;
   `SVGElement` không có. Gán `svg.hidden = true` chỉ tạo expando JS. Và cả `[hidden]` của UA
   stylesheet cũng không áp cho SVG → phải tự viết `selector[hidden]{display:none}` trong CSS.
2. **Chụp ảnh headless bằng `--window-size=390` là sai** — Chrome trên Windows kẹp bề rộng cửa sổ
   lên ~500px, ảnh bị cắt chứ trang không tràn. Muốn đo mobile thật thì dùng CDP
   `Emulation.setDeviceMetricsOverride`. Có script mẫu tại
   `%TEMP%\claude\C--Users-KHAI-Desktop-shopify-go10ngon\<session>\scratchpad\probe2.js`
   (node, không cần cài gói: dùng `fetch` + `WebSocket` sẵn của Node 24).
   Khởi động Chrome kèm `--remote-debugging-port=9222`.
3. **`applyLanguage()` trong `script.js` gán DOM theo THỨ TỰ selector**:
   `document.querySelectorAll('.eyebrow')[0]` và `[1]`, `document.querySelector('.intro')`,
   `document.querySelectorAll('.mode-switch button')[0..1]`, `.stats div span` theo index.
   Thêm phần tử mang các class đó vào TRƯỚC vị trí cũ sẽ làm lệch index và vỡ i18n.
   Khi thêm markup mới, **tránh dùng lại các class đó** hoặc phải cập nhật `applyLanguage()`.
4. **`highlightGuide()`, `reachForKey()`, `pressActiveFinger()` query toàn document**
   (`.key[data-key=...]`, `.hand-layer .finger`, `.active-key,.active-finger`). Thêm bàn phím
   hoặc hand layer thứ hai vào trang sẽ bị chúng can thiệp. Giải pháp đang dùng: bàn phím hero
   dùng `data-tkey` và tự highlight trong phạm vi `#taster-board`. Nếu cần, hãy **scope** các
   query đó về `.keyboard-demo` của bài học.
5. Sửa file bằng script Python có `assert count == 1` cho từng phép thay thế — các file CSS ở đây
   là một dòng rất dài, `sed` rất dễ thay sai chỗ.

# QUY TẮC CHUNG CHO MỌI AGENT

- Static site, vanilla JS, không thêm framework, không thêm bước build, không thêm dependency.
- Giữ nguyên mọi URL đang có + `sitemap.xml` + `hreflang` + `canonical`. Không phá SEO.
- **Không copy nội dung của typing.com** (bản quyền Teaching.com). Chỉ học cấu trúc. Text tự viết.
- Tiếng Việt là ngôn ngữ chính. Nội dung Unit 1-2 dùng tiếng Việt **không dấu** (đúng theo giáo trình).
- Server dev đang chạy: `http://127.0.0.1:8080` (python -m http.server tại thư mục project).
- Kiểm chứng bằng Chrome headless thật + xem ảnh, không chỉ đọc code. `console` phải sạch lỗi.
- KHÔNG commit, KHÔNG push. Để lại working tree cho user xem.

---

# QUYẾT ĐỊNH BỔ SUNG — chốt các khoảng trống schema (sau khi Phase 1 + Phase 2 xong)

Agent nội dung và agent player đều báo về cùng một số chỗ mơ hồ trong `PLAN.md` §C3/§C4.
Chốt như sau, **ràng buộc**:

1. **Tên field: dùng camelCase của §C4** (`type`, `newKey`, `keysSoFar`, `minAccuracy`, `seconds`).
   Bỏ hẳn cách gọi snake_case (`screen_type`, `new_key`, `time_limit`) — nó chỉ là di sản từ typing.com.
2. **Thời lượng: dùng `seconds`.** Không dùng `timeLimit`. Player hiện chấp nhận cả hai; dữ liệu chỉ ghi `seconds`.
3. **`screen` đánh số từ 1** ở mọi nơi hiển thị và ở hash route (`#u1-l04/5`), 0-based chỉ tồn tại bên trong
   `progress-store.js`. Ai gọi `recordScreen()` phải tự trừ 1.
4. **`minAccuracy`: 70 cho bài 1-4, 80 từ bài 5.** Bỏ con số 75 trong §C2/§C4.
5. **Bộ mã ngón (10 mã)**: `LP LR LM LI LT` / `RT RI RM RR RP`. `screen.finger` thắng `fingerMap` của
   `script.js` khi hai bên khác nhau (ví dụ dấu cách: dữ liệu ghi `RT`, `script.js` ghi `LT` — cả hai đều là
   "ngón cái", ưu tiên `screen.finger`).
6. **Xuống dòng cần Enter thật**: thêm field `linebreak` cho screen, giá trị `"space"` (mặc định, `\n` chỉ là
   ngắt dòng hiển thị và gõ bằng một dấu cách) hoặc `"enter"` (phải gõ Enter thật). Bắt buộc dùng
   `linebreak:"enter"` cho bài `u2-l09` (Enter/Shift). Validator phải kiểm field này.
7. **`kind:'test'` KHÔNG thêm vào `profile.js`.** Giữ `KINDS = ['lesson','weak','free']`; bài kiểm tra ghi
   `kind:'lesson'`, bài phím yếu ghi `kind:'weak'`. Không có logic nào phụ thuộc vào việc phân biệt `test`,
   nên đừng nới hợp đồng chỉ để cho đẹp.
8. **`dictation`** chỉ dùng cho typography (letters → giãn chữ, sentence → canh trái). Việc ngắt dòng do
   `\n` + `linebreak` quyết định, không do `dictation`.
9. **Ký hiệu cần Shift (Unit 4)**: `newKeys` phải ghi **phím vật lý không Shift** (ví dụ `-` cho `_`, `;` cho `:`,
   `/` cho `?`, `1` cho `!`), và thêm `shifted: true` cho screen đó, để chip "phím mới" sáng đúng phím.
10. **`weak-keys.js` phải nhận `allowedKeys`** và có bộ từ tiếng Việt — đang được sửa song song.
    Cho tới khi xong, player tự sinh drill và validate lại theo `keysSoFar` (đúng như nó đang làm).

## Khoảng trống tích hợp còn lại (Phase 3 phải xử lý)
Trang chủ hiện vẫn chạy **engine 30 bài cũ** trong `script.js`; `/hoc/` chạy **giáo trình 35 bài mới**.
Hai thứ chưa nối. Cụ thể:
- CTA của taster gọi `TypingEaseHome.openLesson(0)` → mở engine cũ ngay trên trang chủ, phải đổi thành
  điều hướng sang `/hoc/#u1-l01/7` và ghi công screen gõ thử qua
  `TypingEaseProgress.recordScreen('u1-l01', curriculum.starter.screen - 1, ...)`.
- Continue card đọc `goxanh-lesson-records-v2` (30 bài cũ), phải đọc `typingease-progress-v3`.
- Rail "Lộ trình 10 ngón" trên trang chủ vẫn là 30 bài cũ, phải đổi sang cây unit mới.

---

# TRẠNG THÁI CUỐI NGÀY 2026-09-09 — ĐỌC MỤC NÀY TRƯỚC KHI TIẾP TỤC

## Đã xong (đã kiểm chứng bằng Chrome thật, console sạch)
- **Phase 0** — vá coach card (bug `hidden` trên SVG), ghost hands tông da.
- **Phase 1** — hero "gõ thử" (`taster.js` + `home.css`), continue card, Enter-để-tiếp-tục,
  dropdown rút về vi/en/ja. `index.html` 20,5 KB → 8,1 KB.
- **Phase 2** — giáo trình Unit 1: `data/curriculum.vi.js` (cây 35 bài) +
  `data/lessons/vi/u1-l01..l10.json` (87 screen) + `scripts/validate-lessons.js` (PASS).
  Player `/hoc/` (`player.js`, `player.css`, `progress-store.js`, `keyboard-widget.js`,
  `hoc/index.html`) chạy đủ 5 screen type, hash route `#u1-l01/7`.
- **Phase 3** — nối trang chủ với player; tạo `/bai-hoc/`, `/tien-do/`, `/luyen-tu-do/`;
  dọn trang chủ (bỏ mode-switch, game, engine cũ, bảng thành tích, benefits).
  `script.js` 91 KB → 63 KB, engine cũ đã tách khỏi trang chủ hoàn toàn.
- **Ngoài kế hoạch** — `weak-keys.js` viết lại: 34 từ tiếng Anh → 220 từ tiếng Việt không dấu,
  thêm tham số `allowedKeys`. Sửa bug `&nbsp;` ở `/luyen-phim-yeu/` làm đo sai độ chính xác
  (gõ đúng vẫn bị tính 79%).

## Còn lại
- **Phase 4 (lớn nhất)** — 25 bài Unit 2-4 + prototype `telex-match.js`.
  Bắt buộc prototype Telex TRƯỚC khi viết 8 bài Unit 3 (quyết định số 1). Nhớ field
  `linebreak:"enter"` cho `u2-l09` (quyết định bổ sung số 6) và `shifted:true` cho ký hiệu Unit 4
  (số 9). Chạy `node scripts/validate-lessons.js` sau mỗi bài.
- **Phase 5** — `curriculum.en.js` + bài en/ja, huy hiệu, service worker.

## Nợ kỹ thuật nên dọn sớm
1. **~45 KB bảng chuỗi 6 ngôn ngữ chết trong `script.js`** (zh/ru/pt/pt-BR/ar/ms) — giữ lại theo
   quyết định số 4, nhưng dropdown chỉ còn 3 ngôn ngữ nên chúng không bao giờ được dùng.
2. **CSS chết**: trong `keyboard.css` (`.game-*`, `.lesson-path`, `.level`, `.toggle-lessons`,
   `.lesson-result`, `.tip-card`, `.stats`, `.prompt`, `#typing-input`) và `style.css`
   (`.hero-visual`, `.visual-card`, `.circle`, `.mode-switch`, `.practice-grid`, `.typing-card`,
   `.benefits`, `.trust-row`) — không còn markup nào dùng.
3. `/en/` `/ja/` hiện tên bài tiếng Việt kèm ghi chú — chờ Phase 5.
4. `/hoc/#<id-bịa>/1` hiện câu "id đã có trong lộ trình", sai với id không tồn tại.
5. `data/curriculum.vi.js` có `starter.hint` nhưng `taster.js` vẫn hardcode chuỗi riêng — trùng nguồn.

## Cách chạy lại
```
cd C:\Users\KHAI\Desktop\shopify\go10ngon
python -m http.server 8080          # rồi mở http://127.0.0.1:8080
node scripts/validate-lessons.js    # kiểm dữ liệu bài học
node bai-hoc/generate.mjs           # sinh lại /bai-hoc/ sau khi sửa curriculum
```
Đo mobile phải dùng CDP `Emulation.setDeviceMetricsOverride`, KHÔNG `--window-size` (cạm bẫy 2).

---

# TRẠNG THÁI CUỐI NGÀY 2026-09-14 — PHASE 4 ĐÃ XONG PHẦN NỘI DUNG

## Đã làm
- **Unit 2 (11 bài)** `u2-l01..u2-l11` — T Y, O W, C N, M V, ôn tập, Q P, B X, Z . , Enter+Shift,
  luyện phím yếu, kiểm tra 60 s. Tiếng Việt không dấu, đúng theo giáo trình.
- **Prototype Telex — ĐẠT** (điều kiện của quyết định 1). `telex-match.js` + `scripts/test-telex.js`
  (chạy: `node scripts/test-telex.js`). Kiểm cả hai lối gõ dấu (dấu ngay sau nguyên âm và dấu ở
  cuối âm tiết) trên 6 từ mẫu: không có ký tự nào bị chấm sai giữa chừng, lỗi thật vẫn bị bắt,
  phát hiện được "chưa bật bộ gõ", bản đồ phím vật lý cho heatmap đúng (ầ = a a f, đ = d d, ư = u w).
  Đã chạy thật trong Chrome: gõ qua chuỗi giá trị mà IME tạo ra cho screen `u3-l01/2` → 0 lỗi giả,
  kết thúc 100 %; gõ chuỗi Telex thô → hiện cảnh báo kèm nút "Gõ không dấu"; bấm nút thì cả bài
  chuyển sang bản không dấu và có nút quay lại. **Không phải dùng đường lùi ascii-fallback cho
  toàn Unit 3** — nó chỉ còn là lựa chọn cho máy không có bộ gõ.
- **Unit 3 (8 bài)** `u3-l01..u3-l08` — dấu sắc/huyền, hỏi/ngã/nặng, â ê ô đ, ă ư ơ, từ thông dụng,
  câu ngắn, luyện dấu hay sai, kiểm tra 60 s. Tất cả `inputMode: "telex"`.
- **Unit 4 (6 bài)** `u4-l01..u4-l06` — hàng số, ký hiệu, email/web/mật khẩu, hai bài đoạn văn,
  kiểm tra cuối 180 s.
- Tổng: **35/35 bài có nội dung, 289 screen, 15 313 ký tự**. `node scripts/validate-lessons.js` PASS.

## Thay đổi hợp đồng (cập nhật so với phần trên của file này)
1. **`linebreak: "enter"` đã có thật** trong player: `buildTarget(content, linebreak)` để `
` là ký
   tự phải gõ; Enter chỉ lọt vào textarea đúng vị trí đó; prompt hiện ⏎ thay cho ␣. Dùng ở
   `u2-l09`, `u3-l06`, `u4-l03`, `u4-l04`, `u4-l05`.
2. **Phím có tên** (`shift`, `enter`) hợp lệ trong `newKeys` và `keysSoFar`. Chữ HOA chỉ hợp lệ sau
   khi bài dạy `shift`; screen intro dạy chúng chờ đúng phím đó được nhấn (không gõ vào ô nhập).
3. **`newKeys` (số nhiều) trên screen `block`** — một screen giới thiệu nhiều phím cùng lúc, dùng cho
   hàng số (`u4-l01` dạy 4+5, 6+7, 3+8, 2+9, 1+0). Chip "PHÍM MỚI" hiện nhiều phím.
4. **Ký hiệu tầng Shift** (quyết định bổ sung 9): hợp lệ khi đã dạy `shift` + phím vật lý, theo bảng
   `SHIFT_MAP` (US layout) có trong cả validator lẫn `keyboard-widget.js`. Vì vậy `u4-l02` chỉ khai
   `newKeys: ['/', '-']`, còn `@ # : ? ! _` do các screen `shifted: true` dạy.
5. **`u3-l07` đổi từ `kind: 'weak'` (sinh runtime) sang `kind: 'review'` với nội dung viết tay**
   ("Luyện dấu hay sai"). Lý do: `weak-keys.js` chỉ sinh từ KHÔNG DẤU, mà gõ từ không dấu trong lúc
   bộ gõ Telex đang bật sẽ ra chữ sai (gõ `as` ra `á`) — một bài luyện tự đánh bẫy người học.
   `u1-l09` và `u2-l10` vẫn dùng weak-keys như cũ (Unit 1-2 không bật bộ gõ).
6. **minAccuracy**: `u3`/`u4` trong `curriculum.vi.js` hạ từ 85 xuống **80**, đúng quyết định bổ sung 4
   ("80 từ bài 5"), để chỉ mục và file bài không mâu thuẫn nhau.
7. **Tập phím telex tách riêng trong validator**: dấu thanh (s f r x j) và token tạo dấu
   (aa ee oo dd aw uw ow) chỉ tính là "đã dạy" khi một bài `inputMode: "telex"` TRƯỚC đó dạy chúng —
   học chữ cái `s` ở Unit 1 không có nghĩa là đã học dấu sắc. Nhờ vậy validator bắt được
   `u3-l02` dùng `đ` trước `u3-l03`, hay `u3-l03` dùng `ơ` trước `u3-l04` (đã xảy ra thật khi viết).

## Chấm điểm chế độ telex trong player
- Ba trạng thái mỗi ký tự: `ok` / `pending` (đang compose, màu vàng) / `bad`. Điểm được **tính lại từ
  đầu mỗi lần input đổi**, không cộng dồn theo phím — vì IME viết đè lên chữ đã gõ.
- **Lỗi đếm theo âm tiết** (`badTokens`), độ chính xác đếm theo ký tự.
- Ký tự còn `pending` thì screen chưa kết thúc, dù đã đủ độ dài.
- Ô nhập ở chế độ telex cho dư 16 ký tự (không cắt ngay ở độ dài đích) để còn nhận ra chuỗi Telex thô.
- 3 âm tiết thô liên tiếp → hiện cảnh báo "chưa bật bộ gõ" + nút chuyển ascii-fallback.
- Heatmap: ký tự có dấu được quy về phím vật lý (`telex.keysFor`), nên `/tien-do/` vẫn đúng phím.

## Còn lại
- **Phase 5** — `curriculum.en.js` + bài en/ja (fallback ja → en → vi), huy hiệu, service worker,
  âm click, `prefers-reduced-motion`.
- Nợ kỹ thuật cũ vẫn còn: ~45 KB bảng chuỗi 6 ngôn ngữ chết trong `script.js`; CSS chết trong
  `keyboard.css` / `style.css`; `/en/` `/ja/` vẫn hiện tên bài tiếng Việt; `/hoc/#<id-bịa>/1` báo sai.
- Chưa test trên macOS và Android Gboard (quyết định 1 yêu cầu 3 môi trường). Windows + Chrome đã
  đạt; hai môi trường kia cần người thật, và engine so khớp không phụ thuộc hệ điều hành vì nó chỉ
  đọc giá trị của ô nhập.

---

# 2026-09-14 (tối) — BÀN PHÍM + BÀN TAY THEO GIAO DIỆN TYPING.COM

Yêu cầu của user: bàn phím và hình bàn tay "giống hệt" bản typing-clone.

## Cách làm — dựng lại, KHÔNG copy tài sản của Teaching.com
- Bàn phím của typing.com là CSS thuần → chép lại **thông số** (đọc từ `app.min.745.css` trong clone):
  panel `#d9dadb` bo 20px padding 15/15/10, phím trắng bo 5px viền trên `#fff` dưới `#a9a9a9`, chữ Roboto Mono
  700 viết hoa `#4a4a4a`, phím đôi (shifted trên / main dưới, 12px), phím chức năng chữ thường canh trái/phải
  10-11px, phím cần gõ `#3295db` viền `#47a0df #3295db #2d86c5`, hàng cách 5px (10px màn cao), phím vuông tối đa 50px,
  mọi phím giãn đều với flex-basis theo `keyboards.json` (delete 74, tab 68, caps 83, enter 83, shift 108, cmd 70,
  space 336, backslash 48).
- Bàn tay của typing.com là **mô hình 3D WebGL** (`hand-default.compressed.gltf` + texture `base-1.jpg`) vẽ vào
  canvas rồi phủ `opacity:.5` + mask mờ dần + drop-shadow. Mô hình/texture là tài sản có bản quyền và site này
  public → **không copy file**. `hands.js` vẽ lại bằng SVG của mình theo cùng bố cục (ngón đặt trên hàng cơ sở,
  ngón cái trên phím cách, mờ dần ở cổ tay, ngón đang gõ nhuộm xanh `#37b3d6`), đầu ngón đo theo phím thật nên
  khớp mọi kích cỡ. Bàn tay **đứng yên** như typing.com (bỏ animation với ngón của bản cũ).

## File đổi
- `keyboard-widget.js` — markup phím mới (`.key-label`, `.key--duo`, `.key--special-l/-r`, flex-basis theo layout US),
  bỏ `reach()`; API giữ nguyên (`highlight/mark/press/layout/fingerFor/...`).
- `hands.js`, `hands.css` — hình tay mới; hook DOM giữ nguyên (`.hand-layer`, `.finger[data-finger][data-key]`,
  `.digit-press`, `.finger-glow`, `active-finger`, `pressing`) nên `taster.js` không phải đổi logic.
- `keyboard.css` — thêm khối `.kb-widget` / `.tc-board` (typing.com look). Rule `.keyboard/.key` cũ vẫn giữ cho
  heatmap `/tien-do/` và các chỗ khác.
- `player.css`, `home.css`, `taster.js` — bỏ rule kích cỡ phím cũ, board rộng 830px, chừa 210px dưới cho bàn tay;
  bàn phím hero dùng class `tc-board`.
- 6 trang HTML thêm font Roboto Mono (index, en, ja, hoc, luyen-tu-do, tien-do).

## Cạm bẫy mới
6. **Bash tool cắt lệnh dài (~>6 KB) → "unexpected EOF while looking for matching quote"**. Heredoc dài phải
   chia thành nhiều file phần rồi `cat` lại. Tool cũng gộp `\` thành `\` trong heredoc → tránh backslash
   trong chuỗi JS/Python (dùng `String.fromCharCode(92)` / `chr(92)`).
7. Chrome headless cache CSS/JS giữa các lần chạy CDP → screenshot cũ. `cdp.js` giờ luôn gọi
   `Network.setCacheDisabled`.

---

# 2026-09-16 — BÀN TAY 3D BẰNG SVG + NGÓN DI CHUYỂN (theo PLAN-ban-tay.md)

## Sửa nhận định 14/09
- Tay typing.com **không đứng yên**: cài đặt `animated_hands` mặc định bật → ngón di chuyển tới phím đích theo hàng
  (`top-row-3-left`, `bottom-row-2-right`... trong `hand-default.compressed.gltf`, 159 tư thế), tween 0,275 s, tốc độ
  thích ứng theo nhịp gõ. Chỉ khi người dùng tắt mới giữ tư thế home. Bản 14/09 làm tay tĩnh là do đọc thiếu.

## Cách làm (3 phase, chạy bằng 3 agent song song/tuần tự, mỗi agent sở hữu file riêng)
- **A — bàn phím** (`keyboard-widget.js`, `keyboard.css`, `player.js`, `taster.js`): `press()` nhún phím theo keyframe
  `keyPressDefault` gốc; `reject(ch)` nháy đỏ `keyRejected`; player/taster gọi trong `reactToKeystroke()` **trước**
  `paintPrompt()` (vì paint chuyển highlight sang phím kế). Telex: `ok`→press, `bad`→reject, `pending`→không.
  Nhãn phím chức năng giữ nhưng nhạt (#a9a9a9, 10px); typing.com ẩn hẳn.
- **B — hình tay** (`hands.js`, `hands.css`): vẫn SVG tự vẽ, không dùng tài sản Teaching.com. Ngón 2 đốt cong, gradient
  ống 5 stop + dải khớp sáng/tối dọc trục, bóng kẽ ngón (ellipse blur), `feDropShadow` từng ngón khai báo 1 lần trong
  `<defs>`, móng có shine. Lớp phủ đúng gốc: `opacity:.5` + `drop-shadow(0 -1px 1px rgba(0,0,0,.8))`. Glow: `#1fa0c8`
  đầu ngón → `#37b3d6` đặc 45% → tan 80%; `.glow-full` tô cả ngón.
- **C — chuyển động** (`hands.js`, `hands.css`, `keyboard-widget.js`): `TypingEaseHands.reach()` là hàm thuần trả
  transform: bàn tay (`.ghost-hand`) đi 35% vector, ngón đi 65% + xoay quanh gốc ≤12°; ngón đã nằm trên phím đích
  không dịch; tay kia rest. `transition: transform var(--hand-speed,.275s) cubic-bezier(.65,0,.35,1)`; `--hand-speed`
  = 0,09 + 0,36·clamp((avg−90)/610) với avg = trung bình 8 khoảng gõ gần nhất kẹp 70–1200 ms (đúng công thức gốc).
  Space → ngón cái **phải** (`FINGERS[' ']` = `RT`, `LT` vẫn hợp lệ cho `screen.finger`). Shift → ngón út tay đối
  diện tới phím Shift, `glow-full`. `create({animatedHands})` / `layout({animatedHands})`; tắt → host `.hands-static`.
  `prefers-reduced-motion` → `transition:none`.

## Kiểm định
- `scripts/e2e.js` (playwright-core + Chrome cài sẵn, không cần package.json):
  `PW=<…>/node_modules/playwright-core node scripts/e2e.js http://127.0.0.1:8765`. Server tĩnh bất kỳ phục vụ thư
  mục gốc. Mỗi test 1 context mới; `pageerror`/`console.error` làm FAIL. Bao phủ: load player, gõ đúng/sai, hết screen,
  Shift, Telex (mô phỏng IME bằng `fill`), hero, 1024/390px, reduced-motion, 5 trang không lỗi, pose ngón (Phase C).
- Sai số đầu ngón đo qua Playwright: |errX| ≤ 3,7 px trên các phím e x 5 p q /; Shift phải −5 px (phím rộng 108 px,
  vẫn trong phím).

## Cạm bẫy mới
8. **`element.dataset['is-animatingTimer']` ném DOMException** (tên có gạch nối + chữ thường không hợp lệ cho dataset).
   Lỗi này làm player chết sau đúng 1 phím vì `reactToKeystroke()` chạy trước `paintPrompt()`. Đã thay bằng
   `WeakMap` ở cả `keyboard-widget.js` và `taster.js`. Bài học: hiệu ứng phụ (press/reject) phải bọc try hoặc chạy
   **sau** logic chính; E2E bắt được ngay, screenshot tĩnh thì không.
9. Hai agent sửa song song chỉ an toàn khi **sở hữu file tách bạch**; agent Phase C phải sửa lỗi của Phase A trong
   file chung `keyboard-widget.js`, còn `taster.js` phải chờ điều phối viên sửa.

## Còn lại
- `taster.js` có `reach()` riêng cho bàn phím hero (xoay ngón quanh khớp), không dùng `TypingEaseHands.reach()` →
  hero và player động khác nhau. Nên gộp về một đường.
- Tông da hơi nâu hơn gốc (gốc hồng-xám); ngón vẫn thiếu rút ngắn phối cảnh ở đầu ngón. Chấp nhận ở opacity .5.
- Chưa có UI cho `animatedHands` (chỉ có API).

---

# 2026-09-16 (chiều) — TRANG CHỦ MỞ THẲNG LỘ TRÌNH + BỎ HẲN EN/JA

## Quyết định của chủ site
1. **Bỏ ô gõ thử ở đầu trang chủ.** Bàn phím + bàn tay ghost ở hero bị gỡ; vào trang là thấy ngay lộ trình
   bài học để chọn. Hero rút còn `h1` + `.intro` + một nút `#hero-go` ("▶ Bắt đầu Bài 1 · Hàng phím cơ sở").
2. **Site chỉ còn tiếng Việt.** Bỏ hẳn `/en/` và `/ja/`, bỏ dropdown chọn ngôn ngữ.

## Cách làm (3 agent song song, mỗi agent sở hữu file tách bạch — theo cạm bẫy 9)
- **Trang chủ** (`index.html`, `home.css`, xoá `taster.js`): thay `#taster` bằng `#hero-start`
  (`a#hero-go` + `.hero-note`); `body.is-returning #hero-start{display:none}` giữ nguyên cơ chế hai mặt
  của hero (người mới ↔ continue card). Bỏ `keyboard.css`, `hands.css`, `hands.js`, font Roboto Mono khỏi
  trang chủ. Thu hero: `.hero{min-height:auto;padding:48px 24px 28px}`, `h1` 58→44px.
- **`script.js`**: 606→425 dòng, 62,3→27,0 KB. Xoá dứt điểm nợ kỹ thuật số 1 (bảng chuỗi 8 ngôn ngữ chết):
  mọi bảng chỉ còn khoá `vi`, các hàm `current*Ui()` trả thẳng bản vi. Xoá `homepageLocale`/
  `isLocalizedHomepage`/`isEnglishHomepage` (base luôn `./`), xoá handler `#language`, xoá `startFromTaster`.
  `applyLanguage(code)` → `applyCopy()` và **không còn ghi đè `h1`/`.intro`/`document.title`** — từ nay HTML
  là nguồn sự thật cho tiêu đề trang chủ. Enter ở trang chủ: người cũ → `goContinue()`, người mới → `#hero-go`.
- **`en/` `ja/`**: 9 trang thành trang chuyển hướng 18 dòng (`meta refresh` + `location.replace` +
  `canonical` về đích + `robots: noindex, follow`), KHÔNG xoá trắng vì URL đã nằm trong kết quả tìm kiếm.
  Ánh xạ: `/en/` `/ja/`→`/`; `*/typing-test/`→`/kiem-tra-toc-do-go/`; `*/what-is-wpm/`→`/wpm-la-gi/`;
  `/ja/touch-typing/`→`/cach-go-10-ngon/`; `/en/how-to-type-faster/`→`/cach-tang-wpm/`;
  `/en/average-typing-speed/`→`/wpm-bao-nhieu-la-nhanh/`. Xoá `en/en.css`, xoá 9 URL khỏi `sitemap.xml`.
- **hreflang**: gỡ khỏi TẤT CẢ trang (kể cả `hreflang="vi"` và `x-default` tự trỏ vào chính nó — vô nghĩa
  khi chỉ còn một ngôn ngữ). `canonical` giữ nguyên ở mọi trang.

## Kiểm định
`scripts/e2e.js` 23/23 PASS. Test 7 cũ (gõ thử ở hero) thay bằng:
- **7** trang chủ: 0 phần tử khớp `#taster/.hand-layer/.keyboard/.kb-widget/.tc-board`, 0 bộ chọn ngôn ngữ,
  `#hero-go`→`/hoc/`, rail ≥10 bài, **`#roadmap-title` nằm trọn trong màn hình đầu**, Enter → `/hoc/`.
- **7b** lặp lại phép đo trên ở 1366×768 (màn laptop phổ biến nhất).
- **11b** cả 9 URL en/ja cũ phải dừng ở đúng trang tiếng Việt, `lang="vi"`, không 404.

## Còn lại
- Phase 5 rút gọn: không còn `curriculum.en.js`/bài en/ja nữa. Còn huy hiệu, service worker, âm click.
- `hands.js`/`keyboard-widget.js` vẫn dùng ở `/hoc/`, `/luyen-tu-do/`, `/tien-do/` — không đụng tới.
- Ghi chú lịch sử trong `PLAN.md` (dòng 94, 550, 596) và các mục DECISIONS.md cũ vẫn nhắc en/ja; giữ
  nguyên làm nhật ký, mục này là trạng thái mới nhất.
- `activeLanguage`, `siteLanguages`, `translations`, `coachTrendHint` còn tên trong `script.js` nhưng
  không còn ai đọc — dọn nốt khi tiện.

---

# 2026-09-16/17 — MỘT BỘ TOKEN CHO TOÀN BỘ CSS (ghi bù ngày 18/09)

Ba commit `97764b0` → `caff911` → `1fa2ef9` làm xong trước khi mục này được viết; chi tiết số liệu
nằm trong chính thông điệp commit, đây là phần quyết định.

## Vì sao
CSS đã thành ba tầng chồng nhau: `style.css` của landing page cũ, `keyboard.css` vá lên nó, rồi CSS
từng trang phủ lên trên. `keyboard.css` chỉ nạp ở 4/11 trang → nửa site chạy trên nền CHƯA vá, và đó
là lý do thật sự của việc "mỗi trang trông hơi khác nhau" — không phải do thiếu chăm chút từng trang.

## Quyết định
1. **`tokens.css` là nguồn duy nhất của màu, bo góc, bóng, cỡ chữ.** Quy ước cứng: không trang nào
   được khai báo màu mới — thiếu thì thêm token. 193 mã màu → 89, và phần còn lại đều có nghĩa
   (bảng phím mượn của typing.com, tông da bàn tay, thang nhiệt heatmap, màu cảnh báo).
2. **`style.css` chết hẳn**, phần còn sống chuyển sang `base.css` viết mỗi rule một dòng.
3. **Ba ngưỡng đáp ứng cho cả site: 620px, 900px, 901px.** Các cặp lệch một pixel (900/899, 600/599)
   là nguồn của lỗi "ở đúng 900px bàn tay bị cắt" — JS vẽ tay từ 900px trong khi CSS đã bỏ padding
   đáy từ 899px.
4. **Gộp file cùng khai báo một selector**: `coach.css` → `tien-do/progress.css`, `test-upgrade.css`
   → `test.css`. Đọc một file phải đủ biết khối đó trông thế nào.

## Còn lại
- Vài màu literal vẫn nằm trong `tien-do/progress.css` (`#4c6b5f`, `#e5f5df`, `#8ba396`) tuy token
  tương ứng (`--ink-soft`, `--surface-active`, `--muted-soft`) đã có. Đổi nốt khi động vào file.

---

# 2026-09-18 — PHASE 5: HUY HIỆU, SERVICE WORKER, ÂM CLICK, DỌN `script.js`

Phase 5 theo PLAN.md, đã trừ phần en/ja (bỏ từ 16/09). Bốn việc, không việc nào đụng vào engine gõ.

## 1. Huy hiệu (`badges.js` → `/tien-do/`)
- 10 huy hiệu, luật `{field, operand, value}` đúng như PLAN.md: bài đầu tiên · xong một unit ·
  30 sao · 90 sao · 3 ngày · 7 ngày · 40 WPM sạch · 60 WPM sạch · 5.000 phím · gõ được dấu.
- **Không có kho dữ liệu riêng.** `evaluate()` đọc lại chính ba nguồn mà trang tiến độ đang hiện
  (TypingEaseProgress, TypingEaseProfile, mục tiêu ngày) rồi so với bảng luật, nên huy hiệu không
  bao giờ lệch với con số ngay bên cạnh nó. Thứ duy nhất được lưu (`typingease-badges-v1`) là NGÀY
  mở khoá lần đầu — số liệu gốc không nhớ nổi mốc đó.
- **"40 WPM sạch" đo trên MỘT lượt**: max(wpm) của các lượt có accuracy ≥ 95, chứ không ghép
  max(wpm) của lượt này với max(accuracy) của lượt kia — ghép thế là tặng huy hiệu cho việc chưa ai
  làm được.
- **Huy hiệu chưa đạt vẫn hiện đủ tên + điều kiện + thanh tiến trình** ("60 / 90"). Giấu đi thành
  "???" chỉ gây tò mò đúng một lần rồi thành bực.
- Nút "Xoá lịch sử" nay xoá luôn `typingease-daily-goal-v1`. Trước đây nó chừa streak lại, mà hộp
  xác nhận thì viết "Xoá toàn bộ tiến độ và thành tích trên thiết bị này" — và huy hiệu chuỗi ngày
  sẽ đứng trơ một mình sau khi mọi thứ khác biến mất.

## 2. Service worker (`sw.js` + `sw-register.js`, nạp ở cả 11 trang)
- **Không precache cả site.** Site tĩnh, người dùng chỉ đi vài trang; tải sẵn 35 file bài cho người
  mới vào là tiêu băng thông của họ. PRECACHE đúng 9 file đủ mở trang chủ + vào học.
- **Mọi thứ đi mạng trước, cache chỉ là lưới đỡ khi mạng đứt** (sửa chiều cùng ngày, `sw.js` v2).
  Bản v1 cho CSS/JS đi cache-trước-cập-nhật-nền để vào bài nhanh hơn; cái giá là MỘT lần nạp thấy
  bản cũ sau mỗi lần deploy. Ngay chiều hôm đó nó đánh lừa đúng chủ site: sửa `base.css` xong, tải
  lại, vẫn thấy giao diện cũ và tưởng code sai. Người dùng thật cũng gặp đúng cảnh ấy, chỉ khác là
  họ không có cách nào để nghi ngờ. Tệ hơn: HTML mạng-trước ghép với CSS cache-trước nghĩa là trang
  MỚI có thể dính CSS CŨ. Tốc độ gần như không mất: `fetch()` trong service worker vẫn đi qua HTTP
  cache của trình duyệt nên lần thứ hai thường chỉ là một cú 304.
  Ngoại lệ duy nhất là font Google — URL bất biến nên cache trước, và lưu cả response opaque để
  trang offline còn đúng font.
- **Trang chưa từng mở mà mất mạng → trang offline tự chứa (503)**, KHÔNG phục vụ bản cache của
  trang chủ dưới URL đó: trang chủ dùng đường dẫn tương đối nên đặt nó ở `/luyen-phim-yeu/` là mọi
  liên kết lệch một cấp, vừa vỡ giao diện vừa nói dối người dùng về chỗ họ đang đứng.
- Đổi `VERSION` trong `sw.js` là dọn sạch cache cũ ở lần activate kế tiếp.

## 3. Âm click + phím tắt (`sound.js`, `player.js`, `hoc/index.html`)
- **Mặc định TẮT.** Người học mở site ở lớp, ở quán, ở văn phòng.
- WebAudio tổng hợp tại chỗ, không `<audio src>`: một cú click dài 30 ms mà tải file thì vừa thêm
  request vừa trễ so với phím bấm. Đúng/sai là hai xung khác nhau (cao-gọn / trầm-đục).
- Hai công tắc trong topbar player: 🔊 âm click, ✋ bàn tay động — đóng luôn nợ "chưa có UI cho
  `animatedHands`". Cả hai nhớ qua localStorage; mặc định của mỗi cái nằm ở phía ít làm phiền hơn
  (âm tắt, tay động bật như typing.com).
- **Phím tắt phải đi kèm Alt**: mọi phím trần đều là ký tự cần gõ, Ctrl/Cmd thuộc về trình duyệt.
  Alt+S âm · Alt+H tay · Alt+R làm lại bài.

## 4. Dọn `script.js` (−77 dòng)
Xoá hẳn di sản engine 30 bài cũ: `lessons`, `lessonSecondLines`, `translations`, `siteLanguages`,
`activeLanguage`, `homeActionText`, `weakKeyUi`, `coachUi`, `coachTrendHint`, `dailyGoalUi`, `rows`,
`fingerMap`, `localizedLessonName`. Không file nào còn gọi tới (mỗi trang mới có bảng chuỗi riêng).
Còn đúng `localizedUi`, `currentLocalizedUi`, `formatUi` vì trang chủ thật sự dùng.

## 5. Nav của topbar về chính giữa (chiều 18/09)
`.topbar` từ `flex + space-between` sang lưới `1fr auto 1fr`. Với space-between, vị trí nav phụ
thuộc việc trang đó có nút CTA bên phải hay không — trang chủ không có nên nav dạt hẳn sang phải,
lệch hẳn so với các trang khác.
**Cột phải đặt TƯỜNG MINH, không dựa vào thứ tự.** Topbar có ba hình dạng (logo+nav, logo+nav+CTA,
logo+`← Trang chủ`); lưới xếp theo thứ tự nên phần tử thứ hai rơi vào cột giữa — đúng cho nav, sai
cho link `← Trang chủ` của 6 trang, và nó đã bị kéo vào giữa đúng một lần trước khi có test 20.
Dưới 900px nav ẩn, topbar quay lại flex để nút CTA về sát mép phải.

## Kiểm định
- `scripts/e2e.js` **27/27 PASS** (23 cũ + 4 mới: huy hiệu, công tắc, service worker, topbar).
  `PW=<…>/node_modules/playwright-core node scripts/e2e.js http://127.0.0.1:8765`
- `scripts/offline-check.js` **3/3 + 1 PASS** — script MỚI, tự dựng server rồi tự giết để mất mạng thật:
  bài đã học vẫn gõ được (60 phím, CSS về đủ), trang chủ vẫn mở, trang chưa mở ra đúng trang 503.
- `scripts/validate-lessons.js` PASS (289 screen, 15.311 ký tự) — không đụng nội dung, chạy cho chắc.
- Huy hiệu đo ở 390px và 820px: 0 px tràn ngang.

## Cạm bẫy mới
10. **`context.setOffline(true)` VÀ `context.route(..., route.abort())` của Playwright đều KHÔNG với
    tới fetch do service worker phát ra** (Chromium + playwright-core 1.49, đo 18/09/2026). Trang
    vẫn tải sống nhăn qua mạng và bài kiểm "offline" xanh lè một cách vô nghĩa — bản đầu của test 19
    "PASS" đúng theo kiểu đó. Cách trung thực duy nhất là **tắt hẳn server**, nên phần offline tách
    ra `scripts/offline-check.js` (nó sở hữu server của chính nó). Đừng gộp lại vào e2e.js.
11. **Service worker không chạy trong `launchPersistentContext` headless** (`serviceWorker.ready`
    treo vô hạn, `controller` = null) trong khi `chromium.launch()` + `newContext()` thì chạy bình
    thường. Muốn kiểm service worker thì dùng context thường.
12. **Cache-trước cho CSS/JS là cái bẫy tự đặt cho chính mình** — xem mục service worker ở trên.
    Đã bỏ (v2 đi mạng trước). Bài học rộng hơn: một chiến lược cache mà người sửa code không nhận
    ra là nó đang bật thì sẽ có ngày làm mất cả buổi để đi tìm một lỗi không tồn tại.
    `scripts/offline-check.js` nay có một phép đo giữ điều đó: hai lần gọi cùng một URL khi còn
    mạng phải ra hai giá trị khác nhau.
    Máy nào đã dính bản v1: tải lại một lần nữa là xong, hoặc Ctrl+Shift+R.
13. **`glob.glob()` trên Windows trả về đường dẫn có `\`**, nên `'/' in path` luôn False → script vá
    HTML đã chèn `src="sw-register.js"` (thiếu `../`) vào 3 trang con và chúng 404. E2E bắt được
    ngay ở test 10. Chuẩn hoá `p.replace(os.sep, '/')` trước khi kiểm tra đường dẫn.

## Còn lại
- Huy hiệu chỉ hiện ở `/tien-do/`; chưa có thông báo "vừa mở khoá" ngay trong player.
- Âm click chỉ có ở player `/hoc/`; `/luyen-tu-do/` và `/kiem-tra-toc-do-go/` chưa gọi `sound.click()`.
- `sw.js` chưa có thông báo "đã có bản mới, tải lại?" — mới chỉ có `postMessage('skip-waiting')`.
- Tông da bàn tay vẫn hơi nâu hơn gốc (từ 16/09, chưa động tới).

---

# 2026-09-18 (tối) — VẼ LẠI BÀN TAY

Chủ site: "nhìn rất xấu". Đúng — bản cũ là bốn cái ống thẳng song song cắm lên một khối bo tròn,
và mắt người nhận ra ngay đó không phải bàn tay.

## Chẩn đoán từng thứ một
1. **Đầu ngón đội vương miện**: `crease()` vẽ nếp gấp dưới móng bằng một chữ V, cộng với ellipse
   móng thành hình răng cưa. Nay nếp gấp là cung nông, và đầu ngón là mái vòm dựng bằng hai cubic
   chứ không phải nửa hình tròn ghép vào (`A r r` nhìn ra ngay là hình vẽ bằng ống).
2. **Ngón không thuôn**: bề ngang gần như không đổi từ gốc tới đầu. Nay `[1, .96, .98, .86, .72]` —
   phình nhẹ ở khớp giữa rồi thon lại, vì ngón người không thuôn đều một mạch.
3. **Bốn ngón song song**: `SPLAY` cho ngón xoè dần về phía ngón út, `CONVERGE` 0,86 để gốc chụm
   hơn đầu. Ngón cũng hẹp lại (0,62–0,74 bề ngang phím thay vì 0,82–1,02) nên có KHE giữa các ngón;
   không có khe thì bốn ngón dính thành một mảng.
4. **Mu bàn tay là khối bo tròn**: mép trên nay lượn theo từng đốt ngón và tụt xuống ở kẽ ngón
   (`WEB_DROP`), nên ngón mọc ra khỏi bàn tay chứ không phải dán lên. Thêm gò cái (chỗ phình giữa
   gốc ngón trỏ và cổ tay) và bốn vệt gân rất nhạt — thiếu gân thì mu bàn tay là mảng phẳng, mà
   mảng phẳng chính là thứ làm hình trông như đồ hoạ.
5. **Tay quá to**: cổ tay từ 3,0 xuống 2,0 bề ngang phím, lòng bàn tay và cẳng tay ngắn lại, độ tan
   kéo lên sớm hơn (0,7→2,3 thay vì 1,1→3,6 chiều cao phím). Cao 362px → 279px.
6. **Ngón cái**: trước nằm DƯỚI mu bàn tay nên tay phải gần như mất ngón cái. Nay vẽ ĐÈ lên, và
   gốc tan dần vào gò cái bằng mask, nếu không thì lộ một mép cắt phẳng giữa lòng bàn tay.
7. **Tương phản**: `opacity` .5 → .6 và gradient ống nhiều chặng hơn. Ở .5 mọi khối đều bị nền
   trắng nuốt, nên hình đã đúng vẫn trông bẹt.

## Kiểm định
`scripts/e2e.js` **27/27 PASS** — quan trọng nhất là 11-16 (tư thế ngón, sai số đầu ngón ≤ 3,7px so
với tâm phím, Shift, Space, tốc độ thích ứng, resize): hình đổi hẳn nhưng hợp đồng hình học thì
không, vì đầu ngón vẫn ghim vào đúng phím cơ sở như cũ.

## Còn lại
- Ngón vẫn hơi "xúc xích" ở đoạn giữa; muốn hơn nữa thì phải có phối cảnh thật (ngón ngắn lại theo
  chiều nhìn), tức là đổi cả mô hình chứ không chỉ đường nét.
- Tông da ấm hơn bản cũ nhưng vẫn là một tông duy nhất cho mọi người dùng.

---

# 2026-09-18 (đêm) — DỌN MỤC "CÒN LẠI" CỦA PHASE 5

Bốn việc nhỏ đứng ở mục "Còn lại" của Phase 5, gom lại làm một lần. Không đụng bàn tay.

## 1. Huy hiệu báo ngay trong player (`badges.js`, `player.js`, `player.css`, `hoc/index.html`)
- `TypingEaseBadges.earnedIds()` trả về những id ĐÃ CÓ mốc mở khoá trong localStorage. Player chụp
  ảnh này lúc mở trang (`knownBadges`); sau mỗi bảng kết quả gọi `evaluate()` và chỉ báo cái nào
  `earned` mà chưa có trong ảnh, rồi thêm vào ảnh → mỗi huy hiệu báo đúng MỘT lần. Huy hiệu đạt ở
  phiên trước mà chưa ghé /tien-do/ (mốc chưa ghi) cũng được báo ở lượt gõ kế — đúng ý.
- Báo ở cả bảng kết quả screen và bảng tổng kết bài, NHƯNG screen cuối thì nhường cho bảng bài:
  "Bước đầu tiên" thuộc khoảnh khắc xong bài, và bảng bài có chỗ hơn.
- `evaluate()` ở bảng bài phải gọi SAU `completeLesson()` + `unlock()` vì hai cái đó đổi số liệu.
- Markup: `.badge-notice` (role=status) chứa `.badge-notice-item[data-badge]` + link `../tien-do/#badges`.

## 2. Âm click ở `/luyen-tu-do/` và `/kiem-tra-toc-do-go/`
- Nạp `sound.js`, thêm nút `#sound-toggle` (class `.sound-toggle`, style ở `base.css`) cạnh nhãn ô gõ,
  bọc trong `.input-head` — nút nằm NGOÀI `<label>` vì bấm trong label là focus nhảy sang textarea.
- Cùng khoá `typingease-sound-v1` với player: bật một nơi là bật khắp site. Alt+S cũng hoạt động.
- Chỉ kêu khi ô nhập DÀI RA (so với `observed` / `heardLength`); xoá lùi thì im.

## 3. Thanh "có bản mới" (`sw-register.js`, `.update-bar` ở `base.css`)
- Vì sw.js đi mạng-trước, trang vừa nạp đã là bản mới; bản mới của chính service worker tìm thấy
  lúc nạp thì KHÔNG báo (bỏ qua 10 s đầu + lần cài đầu chưa có controller). Nếu báo, sau mỗi deploy
  mọi người vào site đều thấy một thanh vô nghĩa.
- Chỉ đáng báo khi tab mở lâu và có deploy trong lúc đó: `registration.update()` được gọi khi tab
  hiện trở lại (`visibilitychange`), cách nhau ≥ 15 phút; worker mới `activated` → hiện thanh với
  hai nút Tải lại / Để sau. Không tự reload, không cướp focus.
- `TypingEaseUpdate.show()/hide()` để e2e và để xem thanh mà không cần deploy.

## 4. `tien-do/progress.css`
- `#e5f5df` → `var(--surface-active)` (2 chỗ), `#0f6244` → `var(--green-dark)`. `#4c6b5f` và `#8ba396`
  giữ literal vì token gần nhất (`--ink-soft`, `--muted-soft`) KHÁC giá trị — đổi là đổi màu.

## Kiểm định
- `scripts/e2e.js` **31/31 PASS** (thêm 21 huy hiệu trong player, 22 âm click ×2 trang, 23 thanh bản
  mới); `scripts/offline-check.js` 3/3 + 1; validate-lessons PASS; test-telex PASS.
- Ảnh chụp: bảng kết quả screen + bài có khung huy hiệu, nút âm ở hai trang (desktop + 390px),
  thanh bản mới ở trang chủ. Console sạch.

## Cạm bẫy mới
14. **`page.goto('/hoc/')` rồi `goto('/hoc/#u1-l01/2')` là đổi hash, KHÔNG nạp lại trang** — profile
    gieo vào localStorage giữa hai lần không được đọc. Gieo ở trang khác (`/`) rồi mới mở player.
15. **Bọc `TypingEaseSound.click` từ ngoài thì đếm cả lúc công tắc tắt**, vì `enabled` kiểm bên trong.
    Muốn kiểm "tắt là im" thì kiểm `isOn()` + localStorage, đừng đếm lời gọi.
16. **Một số file dùng CRLF** (free-page.js, index.html của hai trang, …) nên script vá bằng chuỗi
    `
` không khớp. Chuẩn hoá về LF trước khi thay, ghi lại đúng kiểu cũ.

## Còn lại
- Tông da bàn tay vẫn một tông duy nhất (từ 16/09).
- Commit `2477dbf` (vẽ lại bàn tay) đang ở local, chưa push → live vẫn là `70a7ff4`.

---

# 2026-09-19 — BÀN TAY ẢNH ĐỨNG YÊN + ĐƯỜNG CHỈ PHÍM (thay bàn tay SVG động)

Chủ site đưa một ảnh minh hoạ kiểu "tay chụp thật đặt lên bàn phím, kẻ đường từ ngón tới phím" và
hỏi làm được không. Ba đường: (1) ảnh thật, tay đứng yên, đánh dấu ngón bằng vệt sáng + đường kẻ;
(2) ảnh thật cắt rời 10 ngón để cử động (lộ mép cắt, không khuyên); (3) giữ SVG động, vẽ tả thực
hơn (không tới mức ảnh). **Chốt cách 1.** Bàn tay SVV động (16/09–18/09) ngừng ở `2477dbf`.

## Mô hình mới (`hands.js`, `hands.css`, `keyboard-widget.js`)
- Hai `<img class="hand-photo">` đặt bằng **phép đồng dạng bình phương tối thiểu** (Umeyama, không
  lật, xoay kẹp ±8°) khớp 4 đầu ngón trong ảnh → 4 phím cơ sở đo trên trang. Vì vậy tay vẫn vừa
  mọi cỡ bàn phím và không cần sửa tay khi đổi ảnh: chỉ cần toạ độ đầu ngón.
- Mỗi ngón là `<g class="finger" data-finger data-key data-rx data-ry>` trong SVG `.hand-pointers`:
  `.finger-glow` (vệt sáng đầu ngón khi active), `.finger-line` (đường tới tâm phím đích, chỉ khi
  phím đích ≠ phím cơ sở của ngón → class `is-pointing`), `.finger-dot`. `press()` vẫn pulse
  `pressing` — nay là nhịp phóng to vệt sáng. Móc `active-finger`/`glow-full` giữ nguyên.
- `pointHands(moves)` thay `poseHands()`; bỏ hẳn `animatedHands`, `hands-static`, `--hand-speed`,
  bộ đo tốc độ thích ứng. `create()`/`layout()` chỉ còn `{compact, hands}`.
- Lớp tay `overflow:hidden` + `mask-image` tan dần từ `--hand-fade-from` (do hands.js đặt = hàng
  Space + 0,9 phím) tới đáy lớp, nên lòng bàn tay không tràn ra ngoài `padding-bottom` của board.
- Công tắc `#pt-hands` (Alt+H) của player đổi nghĩa: **hiện/ẩn bàn tay** (trước là bật/tắt chuyển
  động). Giữ khoá `typingease-hands-v1`; `applyViewport()` = `wideQuery && showHands`.

## Ảnh tay: VẼ, không phải ảnh chụp (`scripts/draw-hands.html` + `render-hands.js`)
- Tạo ảnh bằng AI không được: ElevenLabs gói miễn phí đã hết hạn mức ảnh trong NGÀY (chặn cứng, một
  biến thể cũng không qua). Không mất tiền. Kho stock (Unsplash/Pexels/Pngtree) toàn ảnh tay đang
  đặt trên bàn phím thật, không tách nền sạch được.
- Thử **vẽ lại từ đầu với phối cảnh thật** (ngón ngắn lại theo chiều nhìn, ba đốt rõ, móng bị nén):
  kết quả TỆ HƠN hẳn bản `2477dbf` — ngón hoá mập như găng cao su, lòng bàn tay hoá quả bóng. Bỏ.
  Bài học: bản vẽ ở `2477dbf` đã qua nhiều vòng chỉnh, muốn hơn nó thì phải là ảnh chụp thật, chứ
  vẽ tiếp thì công sức bỏ ra không đổi được gì.
- **Chốt**: ảnh giữ chỗ = chính bộ vẽ SVG đã dùng trên site 16/09–18/09, đóng gói lại thành
  `scripts/draw-hands.html` (tự chứa, mở bằng trình duyệt là xem được), chỉ đổi bảng da cho bớt nâu
  (việc "còn lại" từ 16/09). `scripts/render-hands.js` chụp nó ra ảnh và tự ghi khối HAND_PHOTOS.
- **WebP** chứ không PNG: cùng một bàn tay, PNG 292 KB → WebP 40 KB. Có kênh trong suốt, và trình
  duyệt nào chạy nổi site này cũng đọc được. `hand-photo.py` cũng xuất WebP.
- Ảnh ở khoá phím 104px nên rộng ~490px, đúng quãng gấp đôi cỡ hiển thị thường gặp (bàn phím 830px
  → phím ~52px): nét trên màn dày điểm ảnh mà không phải phóng to.

## Đường thay ảnh chụp thật (`scripts/hand-photo.py`, chỉ cần Pillow)
- `cut anh.jpg` tách nền trắng bằng flood-fill TỪ VIỀN (nên điểm sáng trên móng, trong lòng tay
  không bị thủng), cắt hai tay ở khe giữa, thu về 460px, kèm ảnh lưới 20px để đọc toạ độ đầu ngón.
- `anchors tips.json` ghi khối HAND_PHOTOS. Hướng dẫn chụp nằm ở docstring: tay trên nền trắng
  trơn, máy ảnh thẳng phía trên, cổ tay ở mép dưới, KHÔNG có bàn phím trong ảnh.
- Ảnh phải chụp **thẳng từ trên xuống** vì bàn phím của mình vẽ phẳng; ảnh mẫu chủ site gửi nhìn
  nghiêng, muốn góc đó thì phải vẽ lại cả bàn phím có mặt bên.

## Kiểm định
- `scripts/e2e.js` **31/31 PASS**: test 11–16 viết lại cho mô hình mới (ảnh tải được, 8 đầu ngón
  ghim đúng phím cơ sở ±8px, ngón cái ở hàng Space, đường kẻ trúng tâm E / Shift phải ±1,5px, tắt
  khi về phím cơ sở, `hands:false` gỡ lớp tay, resize đặt lại). Test 18 đổi theo nghĩa mới của
  công tắc. `offline-check.js` 3/3.
- Ảnh chụp thật ở 1280px: hai tư thế (E, Shift phải) đúng như thiết kế.

## Cạm bẫy mới
17. **Lấy bản cũ của một file để render thì `git show HEAD:file > tmp`, KHÔNG `git checkout -- file`**
    — lần này checkout đã ghi đè bản hands.js mới đang làm, phải viết lại từ ngữ cảnh phiên.
18. **Render lại SVG cũ sau khi đã thay hands.css** thì móng/gân đen kịt (path không có fill mặc
    định đen). Tiêm hands.js + hands.css bản cũ vào trang bằng addScriptTag/addStyleTag.
19. **`metrics.space.x` mà widget truyền là MÉP TRÁI của phím cách**, không phải tâm — đưa tâm vào
    là ngón cái lệch cả hai phím.

## Cạm bẫy mới (tiếp)
20. **`omitBackground` của Playwright chỉ bỏ nền của TRANG**, không bỏ `background` mà CSS đặt cho
    `<body>` hay cho phần tử nằm sau vật thể. Ảnh chụp ra alpha đặc kín 255 và phép cắt sát mép
    thành vô dụng. Phải tự tắt nền bằng `addStyleTag` trước khi chụp.
21. **Mọi phép `zoom`/`transform: scale` để xem cho vừa màn hình đều lọt vào ảnh**, vì Playwright
    chụp theo khung thật trên màn hình. Trang dựng ảnh thì đừng thu nhỏ gì cả.

## Còn lại
- Ảnh tay vẫn là hình VẼ. Muốn đẹp hơn thì chụp tay thật theo hướng dẫn ở `hand-photo.py`; sau khi
  thay nhớ chạy lại e2e (test 11 kiểm đầu ngón, 16 kiểm resize).
- Ngón cái trong hình vẽ nhìn vẫn như một cục tròn — điểm yếu cố hữu của bản vẽ, ảnh thật sẽ xong.

---

# 2026-09-19 (chiều) — BÀN TAY VẼ NÉT, KHÔNG TÔ MÀU

Chủ site gửi thêm một ảnh mẫu thứ hai: bàn tay kiểu **hình vẽ nét** đặt lên sơ đồ bàn phím — chỉ
đường viền đen mảnh, ruột rỗng, chữ trên phím đọc xuyên qua tay. Khác hẳn ảnh mẫu buổi sáng (tay
chụp thật). Chốt làm theo mẫu này.

## Vì sao nó thắng hẳn bàn tay tô màu
- **Không che phím.** Tay đặc, dù vẽ khéo đến đâu, cũng phủ lên đúng những phím người học đang cần
  nhìn. Trước phải hạ độ mờ xuống .62 cho đỡ che, đổi lại tay mờ nhợt. Nay .8 mà vẫn đọc được phím.
- **Vẽ nét chỉ cần đường đi đúng**, không cần tả khối. Hai lần vẽ tô màu trước đều chết ở chỗ dựng
  mu bàn tay và phối cảnh ngón; kiểu nét không có hai thứ đó.
- **SVG thay cho ảnh raster**: 2,5 KB mỗi bàn (WebP trước là 40 KB), nét tuyệt đối ở mọi cỡ, và
  `scripts/draw-hands.js` là Node THUẦN — không cần Chrome, không cần Pillow, không cần playwright.
  `draw-hands.html` + `render-hands.js` (vòng trước) bị xoá theo.

## Hình học (`scripts/draw-hands.js`)
- Mỗi ngón là một dải từ đầu ngón (trên phím cơ sở) xuôi về cổ tay, thu hẹp dần, đầu bo tròn bằng
  nửa đường tròn. Các dải **cắt nhau** trong lòng bàn tay và mọi đường để nguyên — mẫu vẽ cũng vậy,
  và nhờ thế không phải dựng mu bàn tay.
- Hai đường mép (bên ngón út, bên gò cái) khép bàn tay lại và chạy tiếp thành cổ tay. Đáy để mở,
  phần tan dần ở cổ tay là việc của mask trong `hands.css`.
- Tay phải là ảnh gương của tay trái, nên chỉ phải chỉnh một bàn tay.
- Bốn vòng chỉnh mới ra hình: (1) ngón dài tới hết khung → mạng nhện phủ nửa dưới bàn phím;
  (2) rút ngắn nhưng hội tụ lỏng → bốn dải rời, không ra bàn tay; (3) ngón cái mọc từ GIỮA đám bốn
  ngón nên thân bị che, chỉ còn cái đầu tròn nổi lên như móc câu — phải cho nó mọc từ gò cái ở mép
  ngoài; (4) rút ngắn cổ tay để nửa dưới bớt rối.

## Kiểm định
`scripts/e2e.js` **31/31 PASS** (không phải sửa test nào: hợp đồng vẫn là bốn đầu ngón khớp bốn phím
cơ sở), `offline-check.js` 3/3. Ảnh chụp ở 1024 và 1440: hình giữ nguyên tỉ lệ, đường chỉ phím trúng
tâm phím.

## Còn lại
- Đầu ngón cái nhìn vẫn hơi tròn ủng ở chỗ nối với gò cái.
- `scripts/hand-photo.py` vẫn dùng được nguyên vẹn nếu sau này chủ site muốn quay lại ảnh chụp thật
  (nó ghi cùng khối HAND_PHOTOS, chỉ khác đuôi file là .webp).

> **Đã bị thay thế (18/09, lúc merge).** Ba mục bên trên — vẽ lại bàn tay SVG, thay bằng ảnh
> chụp, rồi vẽ nét — đều thao tác trên `hands.js` / `hands.css` / `keyboard-widget.js`, và cả ba
> file đó bị mục dưới đây xoá. Giữ lại ở đây làm nhật ký; code lấy từ git nếu cần.

---

# 2026-09-18 (chiều) — Thay bàn phím + bàn tay bằng bản port từ typekute

Yêu cầu: **xoá toàn bộ bàn phím và bàn tay của dự án, thay bằng `cell js-keyboard-holder well` của
typekute** (bản clone typing.com nằm ở `../typekute`). Ba lựa chọn được chốt trước khi viết code:
copy đầy đủ stack 3D, lấy cả catalog 119 bố cục kèm nút Cài đặt, và **đổi hẳn sang API của
typekute** thay vì giữ vỏ `TypingEaseKeyboard` cũ.

## Đảo một quyết định cũ — và vì sao
`PLAN-ban-tay.md` (15/09) ghi: **không copy** `hand-default.compressed.gltf`, `base-1.jpg`,
`highlight-*.png` vì là tài sản của Teaching.com, và tự vẽ lại bàn tay bằng SVG. Quyết định đó nay
bị đảo theo yêu cầu của chủ dự án: các file trên đã được copy vào `assets/hands-3d/`, kèm
`three.module.min.js` + GLTFLoader + SkeletonUtils + BufferGeometryUtils vào `vendor/three/`.
Rủi ro bản quyền vẫn nguyên như mô tả cũ; nó chỉ được **chấp nhận**, không biến mất. Bản SVG tự vẽ
(`hands.js`, `hands.css`) đã bị xoá, muốn quay lại thì lấy từ git.

## Đã xoá
`keyboard-widget.js`, `hands.js`, `keyboard.css`, `hands.css` — cùng với chúng là mô hình DOM cũ
(`.key[data-pkey]`, `.hand-layer .finger[data-finger]`, `.ghost-hand`, `active-key`,
`active-finger`, `glow-full`, `--hand-speed`) và bản bàn phím compact cho điện thoại.

## Đã thêm
- `keyboard/keyboard.js` — port gần như nguyên văn `11ty/client/player/keyboard.js` của typekute:
  dựng DOM từ layout, `data-entry` làm định danh phím, `resolveKeyTarget` (shift/AltGr/phím chết),
  index + cache cho mỗi board, `highlightErrorKey` 250 ms. Chỉ đổi: liên kết Cài đặt dùng SVG nội
  tuyến thay cho sprite của họ, và nhãn tiếng Việt.
- `keyboard/hands-3d.js`, `hands-pose-map.js`, `gltf-unpack.js` — port, chỉ sửa đường dẫn import và
  đường dẫn asset. Thêm một đoạn: `prefers-reduced-motion` thì tay nhảy thẳng tư thế, không tween.
- `keyboard/preferences.js` — kho tuỳ chọn + hộp thoại Cài đặt, dựng lại bằng `.card` của player.css
  thay cho bộ modal/switch trong stylesheet vendor (giữ nguyên bộ luật phụ thuộc giữa các công tắc).
  Bản ghi cũ `typingease-hands-v1` được nuốt vào `typingease-keyboard-v1` ở lần đọc đầu tiên.
- `keyboard/keyboard.css` — lọc từ 745 KB CSS vendor xuống còn phần bàn phím + lớp tay, cộng khối
  `finger-theme` (5 màu ngón, `--fk` theo `key-<mã ký tự>`, nhá màu 2 giây qua `@property --fng-peek`).
- `keyboard/ready.js` + `keyboard/boot.js` — cầu nối: module chạy sau mọi `<script src>` thường nên
  player.js không thể đọc `window.NTKeyboard` ngay; `ready.js` dựng sẵn một lời hứa để chờ.
- `data/keyboards/` — catalog cắt nhỏ: `index.json` (16 KB, để đổ danh sách) + `layouts/<id>.json`
  (~4 KB mỗi bố cục). Nguồn 485 KB nạp một lần cho MỘT bàn phím là phí; `scripts/build-keyboards.mjs`
  cắt lại khi cần cập nhật.

## Ba trang dùng nó, ba kiểu khác nhau
| Trang | Bàn tay | Nhá màu ngón | Ghi chú |
|---|---|---|---|
| `/hoc/` | có (tắt ở ≤620px) | có | công tắc ✋ = `animatedHands` |
| `/luyen-tu-do/` | có (≥900px) | có | |
| `/tien-do/` | không | không | heatmap tự tô màu theo độ chính xác; hai lớp màu chồng nhau thì không đọc được lớp nào |

## Lệch có chủ ý so với bản gốc
- **Bỏ vòng viền quanh phím đích.** Bản gốc kẻ `0 0 0 2px var(--fk-line)` cho dễ thấy giữa lúc nhá
  màu; chủ dự án thấy rối mắt đúng ở chỗ phải nhìn nhất. Giữ lại bóng đổ + màu đậm hơn hàng xóm.
- **Chip "phím mới"** (`is-new`) không có trong bản gốc — họ dạy phím mới bằng màn hình riêng. Ở đây
  là một mảng màu ngón nhạt, không viền.
- **`pressKey`** (nhún phím khi gõ đúng): keyframe `keyPressDefault` có sẵn trong CSS vendor nhưng
  player của họ không gọi; player ở đây có gọi nên hàm này nằm ở `boot.js`, ngoài file port.
- **Bàn tay không với tới Shift.** Bản cũ cho ngón út tay kia chạy tới phím Shift; bảng tư thế của
  typekute chỉ có tư thế cho phím đích, nên giờ chỉ bàn phím chỉ ra Shift nào phải giữ.
- **Lối vào Cài đặt lên thanh trên cùng.** Bản gốc chỉ có MỘT lối vào: liên kết ở góc bàn phím —
  mà tắt "Hiện bàn phím" là cả board `display:none`, nuốt luôn liên kết đó; người học tự khoá mình
  ra ngoài, không bật lại được trừ khi xoá localStorage. Thêm nút ⚙ cạnh ↻ 🔊 ✋ (và phím tắt Alt+K),
  đúng chỗ typekute đặt cụm điều khiển của họ. Nhờ có nó, `.hide` ở trang bài học giữ nguyên
  `display:none` như bản gốc; hai trang còn lại (không có thanh đó) thì board xẹp lại chỉ còn dòng
  liên kết. Test 17b + 17c canh cả hai lối vào.
- **Ẩn bàn phím thì bài dồn lên đầu trang.** `.player-stage` căn `justify-content:flex-end` để bài
  nằm ngay trên bàn phím; bỏ bàn phím mà vẫn căn đáy thì cả bài tụt xuống mép dưới, chừa nửa màn
  hình trống phía trên. `player.js` gắn `.no-keyboard` lên `#player`, player.css đổi sang
  `flex-start` — cùng hình dạng mà typekute cho ra khi tắt bàn phím. Test 17b đo tâm thẻ bài phải
  nằm ở nửa trên khung.

## Kiểm định
- `scripts/e2e.js` **30/30 PASS** (`PW=<…>/playwright-core CHROME=<…> node scripts/e2e.js http://127.0.0.1:8765`).
  Năm phép kiểm về tay viết lại: tư thế không còn DOM để đo nên chúng đọc `board.dataset.finger`,
  `board.__ntHands.pose` và gọi thẳng `resolveHandSlots` của bảng tư thế; thêm test 17 cho hộp thoại
  Cài đặt (đổi bố cục sang British (PC) rồi dựng lại board).
- `scripts/offline-check.js` **3/3 + 1 PASS** — bài đã học vẫn gõ được khi tắt server.
- Chụp ở 1440px và 390px, cả ba trang: không tràn ngang, `cell js-keyboard-holder well` đúng như tên.

## Cạm bẫy mới
14. **WebGL trong headless cần cờ riêng.** Không có `--use-gl=angle --use-angle=swiftshader
    --enable-unsafe-swiftshader` thì `mountTypingHands` ném lỗi, lớp tay im lặng rơi về ảnh 2D rỗng,
    và mọi phép kiểm về tay xanh một cách vô nghĩa. Cờ đã đặt trong `scripts/e2e.js`.
15. **Module script chạy sau mọi script thường**, kể cả script khai báo `const NT = window.NTKeyboard`
    ở thân IIFE. Đó là lý do có `keyboard/ready.js`; đừng gộp nó vào `boot.js`.
16. **Mỗi bàn phím giữ một WebGL context** và Chrome chỉ cho 16 context mỗi tab rồi âm thầm giết cái
    cũ nhất (tay biến mất giữa bài). `hands-3d.js` gọi `forceContextLoss()` khi huỷ; player gọi
    `board.__ntHands.destroy()` ở `pagehide`. Đừng dựng bàn phím mới cho mỗi screen.

---

# 2026-09-18 (khuya) — BẤM PHÍM NÀO THÌ NGÓN ĐỘNG THEO PHÍM ĐÓ

Chủ site: "ngón tay không di chuyển khi bấm nút shift và nút enter … giờ bất kì bấm nút nào thì
ngón tay sẽ chuyển động theo nút tương ứng". Đo ra BỐN lỗi rời nhau, cùng cho một triệu chứng.

## 1. Phím đặc biệt gọi theo TÊN thì không ai nhận ra
`u2-l09` có hai màn intro `{"key": "shift"}` và `{"key": "enter"}` — tên viết thường. Cả hai đường
phân giải đều trượt: `resolveKeyTarget` chỉ so đúng chuỗi `"Enter"`/`"Backspace"`/`" "` rồi so ký
tự trên các ô **không** `other`, mà Shift/Enter/Tab/CapsLock đều `other: true`; `findLayoutEntry`
thì so NHÃN in trên phím (`"Shift ⇧"`, `"Enter ⏎"`). Kết quả đo được: 0 phím sáng,
`dataset.finger` = `thumb` (rác), hai tay nghỉ.

`keyboard/named-keys.js` là bảng tên DUY NHẤT cho phím không phải ký tự: nó biết "shift",
"Shift ⇧", "⇧ Shift" và mã 16 là cùng một phím. Cả `keyboard.js` lẫn `hands-pose-map.js` nay tra
chung bảng đó. Thêm phím đặc biệt mới thì thêm ở ĐÓ, đừng thêm vào một trong hai bên.

Phím có mặt ở cả hai bên (Shift, Ctrl, Alt, Cmd) mà gọi tên trần thì sáng CẢ HAI và đưa CẢ HAI
ngón út tới — gọi tên trần là chưa chỉ định bên nào, và bài dạy Shift cũng nói "ngón út bên kia".

## 2. Phím ở rìa rơi ra ngoài kho tư thế
Backspace ra chỉ số 7 trên hàng số bên phải, mà kho chỉ có 0–6 → `genericFingerId` trả `null` →
tay nghỉ. Nay kẹp vào tư thế vươn xa nhất CÒN CÓ THẬT thay vì bỏ cuộc. Đảo một dòng của bản gốc
("Do not manufacture a pose outside it") — có chủ ý: kẹp là dùng lại tầm với ngoài cùng, không
phải bịa clip mới.

## 3. Hàng Ctrl/Alt/Cmd chỉ có bảy ô
Công thức `column - 6` của các hàng chữ cho ra chỉ số NGƯỢC hướng ở bên phải: Ctrl phải (cột 7)
thành `right-bottom-row-1`, tức ngón TRỎ với vào trong. Nay đo bằng khoảng cách tính từ phím cách
đi ra, hai bên đối xứng. Hàng này không có clip riêng nên nó mượn hàng dưới liền trên — tay chỉ
đúng hướng nhưng đốt cuối không trùng khít phím. Chủ site đã chọn đánh đổi đó thay vì để tay im.
Riêng Option/Alt phải có clip riêng (`right-option`) nên không đi mượn.

## 4. Bảng tư thế trỏ vào clip KHÔNG có trong file GLTF
Lỗi sâu nhất, và là lỗi duy nhất không nhìn thấy được từ bảng: `POSE_MAP` map
`left-home-row-6` → `home-row-7-left` và `left-bottom-row-6` → `bottom-row-7-left`, mà mô hình
KHÔNG có hai clip đó (bên phải thì có). `setAnimationFrame` gặp clip thiếu thì im lặng rơi về
`default-<bên>` — nên Caps Lock và Shift TRÁI là hai phím "tra bảng ra kết quả đúng mà tay vẫn
đứng im". Mô hình lại CÓ `home-row-6-left` và `bottom-row-6-left`, đúng tầm với đó; bảng port từ
nguồn chỉ đơn giản bỏ qua chúng. `Hand.resolveFrame` nay lùi dần chỉ số tới clip gần nhất có thật
rồi mới chịu về tư thế nghỉ.

## Đổi một hành vi của bản gốc
Gõ chữ HOA nay đưa ngón út tay KIA tới Shift, trong khi tay chính gõ chữ. Bản gốc typekute chỉ tô
sáng phím Shift chứ để tay kia nghỉ, và `scripts/e2e.js` test 12 từng chốt đúng điều đó — test ấy
đã sửa theo. Lý do: chính lời bài u2-l09 dạy "ngón út bên kia giữ Shift".

## Hai ngoại lệ KHÔNG phải lỗi
Phím cách và dấu chấm phẩy để cả hai tay ở tư thế nghỉ, vì tư thế nghỉ vốn đã đặt ngón cái trên
phím cách và ngón út phải trên `;`. Dịch tay thêm mới là sai. Ngón phụ trách vẫn sáng.

## Kiểm chứng
`scripts/e2e.js` **32/32 PASS**. Test 12 sửa theo hành vi mới; thêm 12b và 12c. 12b là cái đáng
giữ nhất: nó duyệt MỌI phím lấy từ chính DOM bàn phím và đòi mỗi phím phải hoặc làm tay dịch bằng
một clip có thật, hoặc làm sáng ngón phụ trách — hỏi chính renderer xem clip nào được phát, nên nó
bắt được cả lỗi 4 mà mọi phép kiểm trên bảng đều bỏ lọt. `offline-check.js` 3/3 + 1.

## Còn lại
- Chế độ MỘT TAY: `single-home-row-comma-right` và `single-num-row-equals-right` cũng là clip
  không tồn tại (phím `'` và `=`), và `resolveFrame` chỉ lùi được theo chỉ số nên không đỡ được
  hai cái tên đó. Hiếm gặp, chưa sửa.
- `dataset.finger` của Ctrl là `thumb` vì layout ghi `finger: null` cho ControlLeft/Right. Đó là
  dữ liệu của bộ layout, không phải chỗ này.


# 2026-09-22 — `/` THÀNH TRANG ĐẦU TIẾNG ANH CÓ BỘ CHỌN BÀN PHÍM; BẢN VIỆT VỀ `/vi/`

## Quyết định của chủ site
1. **`/` đổi sang tiếng Anh.** Chấp nhận đánh đổi SEO: `/` đang xếp hạng cho truy vấn tiếng Việt,
   và đổi ngôn ngữ của nó là đổi trang mà Google đã biết. Đã nêu rõ rủi ro trước khi làm, chủ site
   xác nhận vẫn làm. Trang chủ tiếng Việt dời sang `/vi/`.
2. **Trang đầu theo phương án B**, không phải A (màn chọn ngôn ngữ chắn trước) hay C (lưới cờ):
   `/` vẫn là landing page thật, index được, có h1 và nội dung cho crawler đọc — bộ chọn nằm TRONG
   hero chứ không đứng trước nó. Bàn phím preview đổi ngay khi chọn ngôn ngữ.

## Ba trục tách rời — nền tảng của cả thiết kế
`data/languages.js` giữ ba cột mà người ta hay gộp làm một: ngôn ngữ muốn GÕ, bố cục bàn phím GÕ
TRÊN, và có GIÁO TRÌNH hay chưa. Bằng chứng rõ nhất là chính tiếng Việt: hầu hết người Việt gõ
Telex trên bàn phím US, nên `vi` mặc định layout 1 chứ không phải layout 208 ("Vietnamese", có
ă â ê ô trên hàng số). Chọn 208 thì gọn về mặt phân loại và sai với gần như mọi người dùng.

27 ngôn ngữ, 119 bố cục. Hai ngôn ngữ có giáo trình thật (en 27 bài, vi 35 bài); 25 ngôn ngữ còn
lại ở trạng thái `soon` — **vẫn dựng bàn phím đầy đủ**, và nút CTA nói thẳng là chưa có bài thay vì
giả vờ. Cho người Ả Rập xem đúng bàn phím của họ có giá trị hơn là giấu ngôn ngữ đó đi.

## Ba thứ chỉ lộ ra khi nhìn ảnh chụp thật
1. **Emoji cờ hỏng trên Windows.** Windows chưa bao giờ có font cờ, nên cặp regional-indicator rơi
   về hai chữ cái: bộ chọn hiện "us English", lưới hiện "sa العربية". Site dạy gõ 10 ngón thì
   người dùng ngồi trước bàn phím vật lý, tức Windows là đa số — đây là trường hợp THƯỜNG, không
   phải ngoại lệ. Bỏ hẳn cờ; lưới dùng huy hiệu mã ngôn ngữ. Cũng là nhãn thành thật hơn: cờ là
   quốc gia, đây là ngôn ngữ. Tiếng Ả Rập không phải Ả Rập Xê Út, tiếng Anh không phải nước Mỹ.
2. **Hero nhảy ngang ~170px khi đổi ngôn ngữ.** `grid-template-columns:1fr 1fr` thực chất là
   `minmax(auto,1fr)`, mà chiều rộng `auto` của một `<select>` là OPTION DÀI NHẤT của nó — nên
   khung co giãn theo ngôn ngữ đang chọn. `minmax(0,1fr)` khoá lại. Cùng lý do, `dir` trên
   `<option>` bị gỡ: nó lật căn lề của cả cái `<select>` khi chọn mục RTL.
3. **Màu ngón chỉ chạy cho layout Latin.** `keyboard.css` gán `--fk` qua bộ chọn `.key-<mã ký tự>`
   — đúng cách bản gốc typekute làm, hoàn hảo cho những layout nó ship kèm, và vô dụng với 100
   layout còn lại. Bàn phím Hindi/Ả Rập ra gần như trắng trơn, tức đúng thứ màu sắc sinh ra để
   dạy — ngón nào giữ phím nào — lại thiếu ở chính những layout người học ít quen nhất.
   `keyboard.js` nay ghi `data-finger` từ dữ liệu layout cho MỌI phím; `landing.css` tô từ đó.
   Nhóm ngón của dữ liệu trùng khít nhóm của bộ chọn cũ (1/10 út, 2/9 áp út, 3/8 giữa, 4/7 trỏ,
   5/6 cái) nên bàn phím US không đổi một pixel nào.
   Loại trừ `.key--special`: layout cũng ghi `finger` cho Tab/Ctrl/Alt/Cmd và ở các file không phải
   Latin thì đó rõ ràng là số điền cho đủ — layout 106 đặt Alt phải vào ngón áp út. Màu sai một
   cách tự tin còn dạy tệ hơn là không màu.

## Định tuyến
- `/` → tiếng Anh · `/vi/` → tiếng Việt · các trang tiếng Việt GIỮ NGUYÊN URL (`/bai-hoc/`,
  `/hoc/`, `/tien-do/`...). Slug của chúng là tiếng Việt nên không tranh chấp với tiếng Anh, và
  giữ nguyên là giữ nguyên toàn bộ SEO của chúng. Chỉ `/` là chỗ tranh chấp thật.
- `/en/` (từng là trang chủ tiếng Anh, rồi thành trang chuyển hướng về bản Việt) nay chuyển về `/`.
- **KHÔNG auto-redirect theo `navigator.language`.** Googlebot crawl từ Mỹ, nên nó sẽ chỉ bao giờ
  thấy bản tiếng Anh và nửa tiếng Việt của site lặng lẽ hết index. Thay bằng một dòng banner tắt
  được, và nhớ lựa chọn vào localStorage.
- `routes` tiếng Anh: trang nào chưa tồn tại thì để `null`, và mọi nơi tiêu thụ BỎ liên kết chứ
  không trỏ vào trang 404 hay vào bài tiếng Việt. `player.js` đã có sẵn nếp đó cho `R.weak`; nay
  `R.progress`/`R.test` cũng được chặn, và `generate.mjs` sinh nav bằng danh sách lọc null.

## Lớp i18n mở lại cho trang chủ
`script.js` từng bị dọn sạch còn đúng khoá `vi` khi site rút về một ngôn ngữ. Nay `currentHomeUi()`
và `currentLocalizedUi()` phủ `TypingEaseUI.home` / `.localized` lên bảng tiếng Việt — đúng cơ chế
`player.js`, `curriculum-page.js`, `progress-page.js` vẫn dùng. Khoá thiếu thì hiện tiếng Việt: sai
trông thấy vẫn hơn ô trống, và ui.en.js hỏng thì trang chủ tiếng Anh vẫn chạy.

## Service worker
VERSION v3 → v4. Bắt buộc: bản `/` nằm trong runtime cache v3 là trang TIẾNG VIỆT. Mạng-trước nên
nó chỉ hiện khi mất mạng, nhưng "mất mạng thì thấy trang ngôn ngữ khác" vẫn là sai.
PRECACHE chỉ còn shell của `/`. `/vi/` và `curriculum.vi.js` đứng ngoài — cache lối-đi-thật giữ
chúng ngay sau lần ghé đầu, còn tải sẵn cả hai giáo trình cho mọi khách là đúng thứ đầu file nói
là không làm. Bàn phím của hero cũng đứng ngoài: mất mạng lần đầu thì landing.js thay nó bằng một
dòng chữ và cả trang còn lại vẫn dùng được.

## Kiểm định
`scripts/e2e.js` **34/34 PASS**. Test 7/7b chuyển sang `/vi/`; thêm:
- **7c** `/`: bộ chọn ≥20 ngôn ngữ, mặc định `en`, dựng ≥55 phím thật, KHÔNG có canvas (bàn tay 3D
  không được kéo theo vào trang đầu), đổi sang `ar` thì nhãn phím phải thành chữ Ả Rập còn bàn phím
  tiếng Anh thì không, nút phải chuyển sang kiểu phụ và ghi chú phải nói rõ chưa có bài, và nạp lại
  trang phải nhớ đúng lựa chọn.
- **11b** sửa: `/en/` `/ja/` nay về `/` và trang đích nói tiếng Anh; 7 URL bài viết còn lại vẫn về
  đúng bài tiếng Việt.
- **11c** mới: mọi trang tiếng Việt phải có lối về `/vi/` và không trang nào còn liên kết trỏ thẳng
  về `/` — nơi bây giờ là một trang ngôn ngữ khác.

## Còn lại
- 25 ngôn ngữ `soon`. Phân tầng đã chốt: Tier 2 = layout Latin sinh tự động từ chính `finger` +
  `hardware` trong layout JSON (chỉ cần thêm word list + bảng UI mỗi ngôn ngữ); Tier 3 = RTL
  (ar fa he ur, phải lật cả player), IME (ja zh ko, phải chấm điểm theo chuỗi đã commit chứ không
  theo từng phím vì IME nuốt keystroke), Indic (hi bn, phải so theo grapheme cluster).
- Font: "Be Vietnam Pro" không có glyph Ả Rập/Devanagari/Thái/Hebrew/Hangul/CJK. Hiện rơi về
  system-ui và render đúng trên máy thử, nhưng mỗi ngôn ngữ Tier 3 sẽ cần font riêng, nạp có
  điều kiện theo `script` trong `data/languages.js`.
- `navigator.keyboard.getLayoutMap()` đọc được layout VẬT LÝ thật của người dùng và sẽ đoán đúng
  hơn `navigator.language`. Chưa dùng: trường `type` trong `index.json` không đáng tin (layout 181
  tên "French (AZERTY)" mà ghi `type:"qwerty"`), nên không có gì để khớp kết quả vào.

## Bốn trang tiếng Anh còn thiếu (làm song song bằng 4 agent)
`/en/typing-test/`, `/en/progress/`, `/en/practice/`, `/en/touch-typing/` — trước đó cả bốn URL đều
là trang chuyển hướng về bài tiếng Việt, nên mọi liên kết tới chúng phải bị giấu đi. Nay là trang
thật; `routes` tiếng Anh bật lại đủ, chỉ `weak` và `wpm` còn `null`.

Phân việc theo QUYỀN SỞ HỮU FILE (cạm bẫy 9): mỗi agent một trang + đúng một file JS dùng chung mà
nó phải thêm lớp i18n vào (`typing-test.js`, `progress-page.js`, `free-page.js`), không ai được
sửa `i18n/ui.en.js` — mỗi agent nộp bảng chuỗi ra scratchpad, việc ghép do một mình chỗ này làm.

**Cách chia đó vẫn hỏng một lần, và đáng ghi lại.** Hai agent muốn xem trang mình render tiếng Anh
nên dán tạm bảng chuỗi vào `ui.en.js` rồi hoàn tác bằng `git checkout -- i18n/ui.en.js`. File đó
đang có thay đổi CHƯA COMMIT, nên checkout kéo nó về HEAD và xoá luôn phần người khác vừa viết.
Bài học: cấm sửa một file dùng chung là chưa đủ — phải cấm cả `git checkout` lên nó, vì trong một
cây làm việc bẩn thì lệnh đó không phải "hoàn tác thay đổi của tôi" mà là "vứt thay đổi của mọi
người". Khắc phục: script ghép ở scratchpad chạy lại được nhiều lần, mỗi bước tự kiểm tra đã có
chưa rồi mới chèn. Lần sau: hoặc cấp `isolation: worktree`, hoặc bắt kiểm chứng bằng cách chèn
`window.TypingEaseUI.<khoá> = {...}` từ console thay vì sửa file.

## Hai lỗi cũ lộ ra nhờ đợt này
1. **Chú thích `curriculum.en.js` nói sai số.** "9 of the 12 most common English letters" — Unit 1
   dạy A D E F G H I J K L R S U, đối chiếu ETAOINSHRDLC thì được 8 (E A I S H R D L), thiếu
   T O N C. Phát hiện khi có người định nhắc lại con số đó trên một trang công khai và cộng không
   ra. Đã sửa thành 8 kèm danh sách chữ, để lần sau kiểm được. Một con số trong chú thích rồi sẽ
   có ngày bị trích dẫn.
2. **`badges.js` không có móc i18n.** `TypingEaseUI.badges` nằm trong `ui.en.js` từ đầu mà KHÔNG
   file nào đọc, nên huy hiệu hiện tiếng Việt trên cả khoá tiếng Anh — ở bảng `/en/progress/` lẫn
   ở thông báo "New badge" player.js bật ra giữa bài. Lớp phủ nay đặt ngay trên `LIST` trong
   `badges.js` nên mọi nơi tiêu thụ cùng đúng; chỉ `title`/`hint` được phủ, còn `icon`/`rules`/
   `requires`/`id` là cơ chế. Cũng gỡ khoá `typed-20000` trong `ui.en.js` — huy hiệu đó chưa bao
   giờ tồn tại. `.lang-switch` cũng vậy: có trong markup của 4 trang mà không có một luật CSS nào
   trong cả repo, nên hiện ra như `<a>` mặc định xanh dương giữa một topbar không có gì xanh dương.

## Còn lại sau đợt này
- `profile.js` (`typingease-profile-v1`) và kho mục tiêu ngày (`typingease-daily-goal-v1`) KHÔNG
  tách theo ngôn ngữ. Nên bài/sao/WPM/huy hiệu thì riêng mỗi khoá, còn coach, heatmap từng phím và
  streak lại dùng chung cho cả máy. Phím dấu tiếng Việt vì thế làm lệch heatmap của người học
  tiếng Anh trên cùng máy. Là hành vi cũ, nhưng cần một quyết định có ý thức.
- `luyen-tu-do/free-page.js`: `mountKeyboard()` kết thúc bằng `draw()`, mà `draw()` với target rỗng
  ghi đè `#free-sample` thành `''` — nên dòng gợi ý dựng sẵn trong HTML bị xoá ngay lúc bàn phím
  gắn vào, ở CẢ hai ngôn ngữ. Lỗi cũ, chưa sửa vì đụng vào hành vi bản Việt.
- `/en/how-to-type-faster/`, `/en/what-is-wpm/`, `/en/average-typing-speed/` vẫn là trang chuyển
  hướng sang bài tiếng Việt. Ba bài viết tiếng Anh còn nợ.


# 2026-09-23 — TIER 2: SINH CẢ MỘT KHOÁ HỌC TỪ BỐ CỤC BÀN PHÍM

## Quyết định của chủ site
Làm RỘNG trước: mở thêm ngôn ngữ dùng bảng chữ Latin bằng cách sinh tự động, thay vì làm SÂU
(Nhật/Ấn/Ả Rập). Tiếng Tây Ban Nha là ngôn ngữ đầu tiên đi qua đường đó, và là bằng chứng bộ máy
chạy thật.

## Ý tưởng cốt lõi, và nó đúng tới đâu
Khoá tiếng Anh có 27 công thức viết tay. Viết 27 bài văn cho mỗi ngôn ngữ mới là thứ không nhân
bản nổi — nhưng đó cũng không phải phần khó thật. Phần khó thật là THỨ TỰ DẠY PHÍM, và nó SUY RA
ĐƯỢC: mỗi file trong `data/keyboards/layouts/` đã ghi sẵn `hardware` (ô phím vật lý) và `finger`
(ngón phụ trách) cho từng phím.

Nên bản kế hoạch trong `scripts/build-course.js` viết bằng VỊ TRÍ, không bằng chữ cái: "bài 4 dạy
ô KeyA và ô Semicolon". Trên QWERTY Mỹ ra `a` và `;`. Trên bố cục Tây Ban Nha ra **`a` và `ñ`** —
tức là chữ đặc trưng nhất của tiếng Tây Ban Nha nằm ngay hàng cơ sở dưới ngón út phải, và người
học chạm vào nó ở bài thứ tư. Trên AZERTY ra `q` và `m`. Trên QWERTZ Đức ra `a` và `ö`.
Một bản kế hoạch, đúng cho mọi bàn phím Latin, và đúng theo nghĩa mạnh.

## Bốn thứ chỉ lộ ra khi thật sự chạy nó
1. **Hàng cơ sở AZERTY không có nguyên âm.** `q s d f g h j k l m ù` — bốn bài đầu không viết nổi
   một từ tiếng Pháp nào, và bài ôn tập thứ năm không có gì để ôn. `promoteVowel` phát hiện bằng
   cách HỎI KHO TỪ ("tới đây đã viết nổi từ nào chưa"), không bằng một danh sách nguyên âm chốt
   cứng, rồi kéo bài phím gần nhất lên trước bài ôn tập. Bàn phím có sẵn `a` thì không bị đụng.
   Đã kiểm 12 bố cục Tier 2: chỉ AZERTY rơi vào cảnh này.
2. **Chữ có dấu cần phím chết.** á é í ó ú gõ bằng ´ rồi tới nguyên âm, và ´ nằm ở ô Quote — dạy ở
   u2-l08. Trước khi có `typeableWith(text, keys, deadKeys)`, kho từ tiếng Tây Ban Nha hoặc phải
   bỏ hết dấu (tức không còn là tiếng Tây Ban Nha) hoặc phải nhét từ có dấu vào bài mà người học
   chưa gõ nổi. Ô Quote vì thế được đưa vào bài dạy dấu câu cho MỌI bố cục: trên QWERTY nó là dấu
   nháy, trên bố cục có dấu nó mở ra cả hệ thống dấu. `ñ` thì khác — nó có phím riêng nên tới sớm
   hơn `está` rất nhiều.
3. **Giáo trình phải quyết định BÀN PHÍM.** Player luôn dựng bố cục 1 (US Standard) vì đó là
   `DEFAULTS.keyboardId`. Đúng cho tiếng Anh và tiếng Việt — cả hai dạy trên US QWERTY. Sai hẳn
   cho tiếng Tây Ban Nha: bài 4 bảo bấm `ñ`, trên một bàn phím không có phím đó. Nay `curriculum`
   khai `keyboardId` và `loadKeyboardPreferences()` đọc nó khi người dùng chưa tự chọn. Lựa chọn
   đã lưu vẫn thắng — đổi bàn phím trong Cài đặt là một quyết định có ý thức.
4. **`generate.mjs` giả định chỉ có hai ngôn ngữ.** Hai dòng hreflang viết thẳng bằng
   `lang === 'en' ? url : alt`: đúng khi có hai bản, im lặng sai ngay khi có bản thứ ba — trang
   tiếng Tây Ban Nha sẽ tự khai mình là bản tiếng Việt. Nay có bảng `ALTERNATES`, và nút đổi ngôn
   ngữ thành DANH SÁCH, vì với ba bản thì "một nút đổi ngôn ngữ" không còn trả lời được "đổi sang
   cái nào".

## Bộ gác mới, và vì sao nó cần thiết
`scripts/check-words.js` so mọi từ với bảng chữ mà chính kho từ khai. Bản nháp đầu của
`data/words/es.js` lọt **bốn mục viết bằng chữ Cyrillic và chữ Hán** (`урна`, `해`, `留`, `ределя`)
cùng 23 mục trùng lặp. Trên một danh sách 400 từ thì không ai soát bằng mắt ra; một phép so bảng
chữ cái bắt ngay. Sai chính tả vẫn phải soát tay, nhưng từ viết bằng hệ chữ khác thì máy phải chặn.

## Tách bộ sinh nội dung
`scripts/lib/content.js` giữ seeded-RNG, mẫu luyện ngón, xếp dòng từ, burst — dùng chung cho cả
khoá viết tay lẫn khoá sinh tự động. Phép chốt của lần tách: `build-lessons-en.js --check` phải
báo 27 file tiếng Anh ra BYTE Y HỆT. Nó báo đúng thế, trước và sau.

## Kiểm định
`scripts/e2e.js` **45/45 PASS** (thêm test 21: khoá tiếng Tây Ban Nha phải bám đúng bố cục — bài 4
dạy Ñ, và bàn phím trên màn hình phải có phím ấy). `validate-lessons.js` PASS cho cả ba ngôn ngữ.
`build-course.js --lang es --check` 28 file khớp. `check-words.js --lang es` PASS.
417 liên kết nội bộ tuyệt đối đều trỏ tới file có thật.

## Giá của ngôn ngữ Tier 2 TIẾP THEO, đo từ chính lần này
Bộ máy đã xong và dùng lại được nguyên vẹn. Mỗi ngôn ngữ mới còn đúng năm thứ, tất cả đều là DỮ LIỆU:
- `data/words/<lang>.js` — ~500 từ + 20 câu, soát bằng `check-words.js`. **Đây là phần nặng nhất**,
  và là phần duy nhất cần người biết ngôn ngữ đó soát lại.
- `data/courses/<lang>.js` — ~60 mẫu lời dạy.
- `i18n/ui.<lang>.js` — bảng UI, chép từ `ui.es.js` rồi dịch.
- Một khối CONFIG trong `bai-hoc/generate.mjs`, và hai trang (`/<lang>/`, `/<lang>/<player>/`).
- Một dòng trong `data/languages.js` đổi `soon` → `ready`, cộng sitemap.
Không phải sửa một dòng nào trong `build-course.js` — trừ khi bố cục đó đặt dấu câu ở chỗ khác.

## Đã biết trước cho các bố cục còn lại
- **AZERTY (fr) và Türkçe** đặt `.` và `,` KHÔNG ở ô Period/Comma: AZERTY để `:` `;` ở đó, Türkçe
  để `ç` `ö`. Khoá vẫn sinh đúng (dạy theo vị trí), nhưng luật viết hoa đầu câu của generator kiểm
  `keys.has('.')` nên nó chỉ bật khi bài dạy đúng ô có dấu chấm. Cần xem lại khi tới hai ngôn ngữ đó.
- **Tiếng Pháp** còn cần dấu nháy (`'` nằm ở hàng số trên AZERTY) cho `l'eau`, `c'est`, `d'accord`.


# 2026-09-23 (tối) — PHÁP, ĐỨC, Ý: BA KHOÁ TIER 2 CÙNG LÚC

## Cách chia việc
Ba ngôn ngữ, ba agent song song, quyền sở hữu file TUYỆT ĐỐI rời nhau: mỗi agent chỉ được đụng
`data/words/<lang>.js`, `data/courses/<lang>.js`, `i18n/ui.<lang>.js`, `bai-hoc/config.<lang>.mjs`
và hai trang HTML của mình. Bộ máy (`build-course.js`, `lib/content.js`, `check-words.js`),
`data/languages.js`, `sitemap.xml`, `scripts/e2e.js` là của chỗ này, không ai khác.

Brief mở đầu bằng **lệnh cấm `git checkout`/`restore`/`stash`/`reset`** — sự cố ngày 22/09 xảy ra
đúng vì một agent "hoàn tác thay đổi của tôi" trên một cây làm việc bẩn và xoá luôn việc người khác.

## Tách cấu hình trang lộ trình ra file riêng
`bai-hoc/generate.mjs` từng giữ một object `CONFIG` chung cho mọi ngôn ngữ. Ba người thêm ba ngôn
ngữ cùng lúc là ba lần tranh chấp trên một file. Nay mỗi ngôn ngữ một file `bai-hoc/config.<lang>.mjs`,
generate.mjs nạp theo `--lang`. Thêm ngôn ngữ không còn phải sửa file mà ngôn ngữ khác cũng dùng.

## AZERTY — và đây mới là chỗ bộ máy thật sự bị thử
Tiếng Pháp lộ ra ba thứ mà tiếng Tây Ban Nha không lộ:

1. **Hàng cơ sở không có nguyên âm** (`q s d f g h j k l m ù`). `promoteVowel` đã viết sẵn từ lần
   trước chạy đúng: nó thử bài `g h` (vẫn không có nguyên âm, hỏng), rồi `e i` (đủ từ), và kéo bài
   đó lên trước bài ôn tập. Thứ tự thật của khoá tiếng Pháp vì thế là
   `f j · d k · s l · q m · **e i** · [ôn] · g h · r u`.
2. **Dấu chấm KHÔNG có ô riêng** — nó là Maj + ô `;`. Không xử lý thì khoá tiếng Pháp không bao giờ
   dạy dấu chấm và mọi câu đều thiếu dấu kết. Thêm `shiftUnlocks: ['.']`: ký tự mở ra đúng ở bài
   dạy Maj, và bài đó có một màn riêng cho nó — vì validator đòi mọi phím trong `newKeys` phải được
   một màn gõ thật giới thiệu.
3. **Chữ số nằm ở tầng Maj.** Hàng số không-Maj của AZERTY in ra `& é " ' ( - è _ ç à` — tức đúng
   những chữ có dấu của tiếng Pháp. Thêm `digitsAreShifted: true`: bài đó dạy CẢ HAI TẦNG, và tiêu
   đề của nó là *"Les accents et les chiffres"* chứ không phải "hàng số" như trên bàn phím Mỹ.
   Đây là chỗ thiết kế "dạy theo vị trí vật lý" trả công: không ai phải quyết định rằng é è ç à nên
   dạy ở bài 22 — bàn phím quyết định, và nó quyết định đúng.

**Một màn hỏng lộ ra khi đọc kết quả:** bài Maj chỉ mở ra MỘT ký tự (dấu chấm), nên bộ sinh xếp
cặp cho ra ba dòng chỉ có `.` — một màn không dạy gì. Sửa: dưới ba ký tự thì gắn chúng vào cuối
những từ ngắn đã gõ được, ra `notre. donc. lutte. soi.` — đúng thứ người học sẽ gõ thật.

## Cái AZERTY KHÔNG làm được, và nói thẳng ra
`^` và `¨` nằm ở ô BracketLeft, ngoài kế hoạch — nên **â ê î ô û ë ï ü không gõ được trong khoá
này**. Không có `être`, `même`, `août`, `hôtel`, `goût`. Đây là mất mát thật. Cách xử lý ĐÚNG là
loại chúng khỏi kho từ, không phải viết chúng thiếu dấu cho qua: một khoá dạy gõ mà in ra tiếng
Pháp sai chính tả thì dạy sai, và người học gõ lại cái sai đó ba mươi lần.
Cùng lý do: `a` chỉ đến ở bài 16 (ô KeyQ là hàng trên, ngón út trái, và kế hoạch dạy hàng trên
theo thứ tự trỏ → giữa → áp út → út). Kho từ phải sống bằng vốn từ tiếng Pháp không có `a` —
381/473 từ trong `data/words/fr.js` không có `a`, và đó là chủ ý chứ không phải tình cờ.

## Phép đo thay thế
Test 21 cũ chốt cứng cho tiếng Tây Ban Nha ("bài 4 phải dạy Ñ"). Một phép đo phải sửa mỗi lần thêm
ngôn ngữ là một phép đo sẽ không được sửa. Nay nó đọc `data/languages.js`, lọc ra mọi khoá SINH TỰ
ĐỘNG đã sẵn sàng, và so HÀNG CƠ SỞ THẬT trên màn hình với hàng cơ sở trong file bố cục. Không còn
hằng số ngôn ngữ nào; thêm khoá mới là nó tự được kiểm.

## Sáu lỗi mà tiếng Đức và tiếng Ý lộ ra — tất cả đều nằm trong bộ máy, không nằm ở dữ liệu
Đây là phần đáng giá nhất của đợt này. Hai agent làm đúng việc được giao và báo về những thứ
KHÔNG phải của họ, thay vì lách qua. Cả sáu đều đã sửa.

1. **PHÍM CHẾT KHÔNG ĐƯỢC NỐI DÂY — và không có gì báo.** `scripts/lib/content.js` có
   `typeableWith(text, keys, deadKeys)` từ hồi làm tiếng Tây Ban Nha, nhưng `build-course.js`
   KHÔNG BAO GIỜ truyền `deadKeys`. Hậu quả chỉ thấy khi đi đếm: **70 từ có dấu sắc trong
   `data/words/es.js` không xuất hiện ở MỘT bài nào.** Khoá tiếng Tây Ban Nha đang dạy thứ tiếng
   Tây Ban Nha không dấu — `esta`/`está`, `si`/`sí`, `mas`/`más` là ba cặp khác nghĩa hẳn.
   Mọi gate đều xanh suốt thời gian đó, vì không gate nào hỏi "kho từ có được dùng hết không".
   Sửa: `deadIn(keys)` lọc phím chết ra khỏi chính tập phím đã dạy — không cần đường ống mới —
   và `validate-lessons.js` học luật chữ ghép (phím chết + chữ gốc, cả hai phải đã dạy).
   Nay từ có dấu tiếng Tây Ban Nha xuất hiện từ u2-l08 trở đi.

2. **Tiếng Đức không viết hoa danh từ.** Kho từ bắt buộc viết thường (đúng — `haus` phải gõ được
   ở u1-l08 trong khi Shift tới u2-l09), và bộ sinh chỉ viết hoa chữ ĐẦU CÂU. Nên mọi câu tiếng
   Đức sinh ra đều sai chính tả: *"Die katze schläft den ganzen tag auf dem sofa."* Với tiếng Tây
   Ban Nha điều này vô hình; với tiếng Đức nó là lỗi dễ thấy nhất trong cả khoá, và người học gõ
   lại cái sai đó ba mươi lần. Sửa: `check-words.js` nay CHO PHÉP chữ hoa trong `sentences`
   (vẫn cấm trong `words`), và `typeableWith` vốn đã đòi Shift cho chữ hoa nên câu viết hoa tự
   động chỉ xuất hiện sau bài dạy Shift. Kho tiếng Đức viết lại 20 câu đúng chính tả.

3. **`upper('ß')` trả về `'SS'`.** `'ß'.toUpperCase()` là hai ký tự, nên tiêu đề bài u3-l02 tiếng
   Đức đọc là *"- und SS"* trong khi nội dung của nó vẫn là `ß` đúng. Luật mới: viết hoa mà làm
   ĐỔI ĐỘ DÀI thì giữ nguyên dạng thường. Cùng lỗi ở widget bàn phím, nhưng qua CSS
   `text-transform: uppercase` — thêm class `key--nocase` cho những phím như thế.

4. **Tiêu đề bốn phím đọc như một danh sách hỏng**: *"Y und . und , und Ä"*. `keyList` nay nối
   bằng dấu phẩy và chỉ dùng liên từ cho cặp cuối: *"Y, ., , und Ä"*. Đúng ở mọi ngôn ngữ.

5. **Màn luyện Shift bỏ sót đúng chữ đặc trưng của ngôn ngữ.** Nó lấy 16 chữ đầu sau khi xáo, và
   một lần xáo không may ném cả Ä lẫn Ö ra khỏi bài Shift của tiếng Đức — trong khi Ä/Ö có Shift
   chính là thứ bài ấy tồn tại để dạy. Nay chữ ngoài ASCII được xếp lên đầu rồi mới xáo phần còn
   lại. Không để cho may rủi.

6. **`hasSentences` không tính `shift`.** Nó kiểm `step.newKeys.includes(ch)` — một phép so KÝ TỰ
   — nên ở bài Shift (`newKeys = ['shift','enter']`) mọi câu viết hoa bị coi là chưa gõ được, và
   đúng cái bài dạy chữ hoa lại nhận về danh sách từ trong khi lời dạy hứa là câu. Sửa cùng lúc
   với (1): tập phím sau bước được tính qua bảng `NAMED`, nên `shift` thành `SHIFT` và
   `typeableWith` nhận ra ngay.

**Cộng thêm một lỗi chất lượng**: mỗi màn gieo bộ ngẫu nhiên riêng, nên hai màn cạnh nhau rút
trùng câu — một bài từng kết ba màn liên tiếp bằng cùng một câu. Nay có một tập `used` sống theo
cả bài; đo lại: không bài nào của bốn ngôn ngữ còn một câu lặp.

## Hai giới hạn của bố cục, nói thẳng chứ không giấu
- **Tiếng Ý không gõ được `è`** — dạng chia của *essere*, gần như là từ hay gặp nhất trong tiếng
  Ý viết. Nó nằm ở ô `BracketLeft`, cùng `ì` (Equal) và `ù` (Backslash), mà kế hoạch dừng ở
  `KeyP`/`Semicolon`/`Quote`. Cũng chính lý do đó khiến tiếng Đức mất `ü` (`für`, `über`, `fünf`)
  và tiếng Pháp mất cả họ dấu mũ. Đây là một lỗ CÓ HỆ THỐNG, không phải chuyện riêng của ngôn ngữ
  nào, và cách sửa đúng là dạy thêm nhóm phím rìa phải — chưa làm trong đợt này.
- **Tiếng Ý khai `letterTest` không có `ò à`** (khác tiếng Tây Ban Nha có `ñ`), vì Shift+ò trên
  bàn phím Ý ra `ç` chứ không ra `Ò` — một dòng `Òò` là dòng không ai gõ được. Đúng, nhưng cách
  sửa gọn hơn nằm ở `build-course.js`: loại chữ không-Shift-được khỏi riêng màn `shiftpairs`,
  thay vì loại khỏi toàn bộ `letterTest`.

## Kiểm định cuối
`scripts/e2e.js` **48/48 PASS** — test 21 nay tự chạy cho cả bốn khoá sinh tự động (es, fr, de, it).
`validate-lessons.js` PASS cho cả sáu ngôn ngữ. `check-words.js` PASS cho bốn kho.
`--check` khớp: 28 file mỗi khoá sinh tự động, 27 file khoá tiếng Anh viết tay.
644 liên kết nội bộ tuyệt đối đều trỏ tới file có thật. `offline-check.js` 3/3 + 1.

## Vá lỗ BracketLeft: bài "cột ngoài của ngón út phải"
Kế hoạch dừng ở `KeyP` / `Semicolon` / `Quote`, nên sáu ô KHÔNG BAO GIỜ được dạy: `Slash`,
`Minus`, `Equal`, `BracketLeft`, `BracketRight`, `Backslash`. Trên bàn phím Mỹ đó là `/ - = [ ] \`
— tiếng Anh không thiếu gì. Trên các bố cục khác thì đó là CHỮ:

| | Equal | BracketLeft | Backslash |
|---|---|---|---|
| **Ý** | `ì` | **`è`** | `ù` |
| **Đức** | `´` | **`ü`** | `#` |
| **Pháp** | `=` | **`^`** (phím chết) | `*` |
| **T.B.Nha** | `¡` | `` ` `` (phím chết) | `ç` |

Tức là khoá tiếng Ý không gõ nổi **`è`** — dạng chia của *essere*, gần như là từ hay gặp nhất
trong tiếng Ý viết. Tiếng Đức mất `für`, `über`, `fünf`, `Glück`. Tiếng Pháp mất cả họ dấu mũ:
`être`, `même`, `hôtel`, `goût`. **Một lỗ, ba ngôn ngữ** — đúng dấu hiệu của lỗi ở bộ máy chứ
không ở dữ liệu.

**Cách vá.** Cả sáu ô đều là `finger: 10` trong MỌI file bố cục — chúng vốn là một nhóm: cột
ngoài cùng của ngón út phải, ngón phải với xa nhất và được luyện ít nhất. Nên bài `Slash + Minus`
cũ (u3-l02) thành bài **"cột ngoài"** dạy cả sáu. Số bài vẫn là 27, cấu trúc unit không đổi.
Màn hình theo hình dạng của bài hàng số — một intro cho cả nhóm rồi ba màn cặp — vì mười hai màn
intro đọc như một danh sách chứ không như một bài học.

Một chi tiết nhỏ mà thiếu thì hỏng cả ý nghĩa: màn "quay lại với từ" của bài đó được **ưu tiên
theo chính những chữ nó vừa mở ra**. Không có dòng ấy thì một bài dạy `è` lại có màn từ không
chứa `è` nào.

**Và phải sửa kho từ, không chỉ kế hoạch.** Ba file `data/words/*.js` đang ghi chú rằng những chữ
ấy "không gõ được" — điều vừa hết đúng. Đã mở `alphabet`, thêm nhóm từ mới (55 từ dấu mũ tiếng
Pháp, 33 từ `ü` tiếng Đức, 23 từ `è ì ù` tiếng Ý) và viết lại chú thích. Thêm bài mà không thêm
từ thì bài đó dạy những phím không bài nào dùng — tệ hơn là không dạy.

**Kiểm chứng trong trình duyệt, cả bốn ngôn ngữ**: mở `u3-l02`, quét mọi dòng của từng màn tìm
chữ mới, rồi gõ thật vào ô nhập. IT `èì ìè`, DE `ü´ ´ü`, ES `` `¡ ¡` ``, FR `donc sommes déjà
forêts` — tất cả đều gõ được và thanh trạng thái báo đúng ngôn ngữ.

*(Phép kiểm đầu tiên báo tiếng Pháp hỏng, và nó sai: nó chỉ soi DÒNG ĐẦU mỗi màn, còn `forêt`
nằm ở dòng ba. Một phép đo quá hẹp báo sai về sản phẩm đúng cũng nguy hiểm như phép đo bỏ lọt.)*

**Còn lại sau lần vá này**: `Backquote` (ngón út TRÁI: `` ` `` trên Mỹ, `²` trên AZERTY, `^` trên
QWERTZ Đức, `\` trên Ý) vẫn chưa dạy. Không ngôn ngữ nào trong bốn khoá hiện tại cần nó.
Dấu `¨` của tiếng Pháp (ë ï ü) là Shift + `^`, nay về mặt cơ chế đã gõ được nhưng kho từ chưa dùng.


# 2026-09-23 (đêm) — KẾ HOẠCH: KHOÁ HỌC THEO HỌ CHUỖI PHÍM, TRANG ĐẦU CHỈ CÒN BÀN PHÍM

## Lỗi thật mà yêu cầu này sửa
Trên `/`, chọn bàn phím BÉPO thì bàn phím trên màn hình đổi sang BÉPO — nhưng nút "Bắt đầu" vẫn dẫn
vào khoá AZERTY (`landing.js`: `cta.href = course.href`, bố cục đã chọn không đi vào đâu). Người
học nhìn bàn phím BÉPO, làm bài dạy vị trí AZERTY. Cùng loại lỗi với tiếng Việt: bố cục 208–212
("Vietnamese", ă â ê ô đ ở hàng số, gõ trực tiếp) đang hiện khoá Telex — sai hoàn toàn.

## Ma trận khả thi (đo thật, scratchpad/matrix.js)
Giải bản kế hoạch dạy phím trên từng bố cục của 6 ngôn ngữ có kho từ; đếm từ ở bài ôn tập đầu:
US QWERTY 26 · **Dvorak 64** · **Colemak 83** · Workman 67 · AZERTY 0 (tự kéo nguyên âm) ·
**BÉPO 35, không cần kéo** · Neo 32. Mọi bố cục đều chạy, không ô nào thiếu. Các bố cục "lạ" cho
khoá học GIÀU HƠN QWERTY vì chúng được thiết kế để đặt chữ hay gặp lên hàng cơ sở.
Nhưng nhiều bố cục giải ra CÙNG một chuỗi: US/UK/CA/Intl y hệt, 4 bố cục Tây Ban Nha y hệt,
3 QWERTZ Đức y hệt. Sinh mỗi bố cục một khoá là tạo ~20 khoá trùng byte.

## Bốn quyết định của chủ site
1. **Khoá học = HỌ CHUỖI PHÍM, không phải bố cục.** Bố cục cùng chuỗi 27 bài dùng chung khoá; bàn
   phím trên màn hình vẫn hiện đúng biến thể. 32 bố cục → 14 họ sinh tự động + vi viết tay = 15 khoá:
   en: qwerty · dvorak · colemak(+DH) · workman — fr: azerty(+OSS) · canadien · suisse · bépo —
   it: italiano · mac(`am`) · dvorak — de: qwertz · neo — es: 1 — vi: 1.
2. **URL họ không-mặc-định: `/fr/bepo/`** (lộ trình) và `/fr/bepo/apprendre/` (player). Họ mặc định
   giữ nguyên URL đang có. Dữ liệu `data/curriculum.fr-bepo.js`, `data/lessons/fr-bepo/`. Mỗi họ
   một `canonical`; KHÔNG hreflang giữa các họ (cùng ngôn ngữ, không phải bản dịch của nhau).
3. **Tiếng Việt tạm chỉ hiện bố cục US (1).** Năm bố cục 208–212 chờ khoá "gõ trực tiếp".
4. **Làm cả giai đoạn D**: 21 ngôn ngữ chưa có kho từ nhận một bài "hàng cơ sở" luyện ngón (không
   cần từ), để bấm vào không ra trang trống.

## Thay đổi kỹ thuật bắt buộc
- Player hiện suy mọi thứ từ `<html lang>` (`player.js:343` → `/data/lessons/${LANG}/`; weak-keys.js
  cũng vậy). Một trang không phục vụ được hai khoá. Nay đọc mã khoá từ `<html data-course="fr-bepo">`.
- `build-course.js --lang fr --layout 184` → đặt tên file theo họ.
- Trang đầu: BỎ `#course` (lộ trình tiếng Anh — nội dung một ngôn ngữ trên trang trung lập ngôn ngữ);
  lưới bàn phím thành thân trang, MỘT thẻ mỗi họ ghi số biến thể, bấm → thẳng lộ trình họ đó; CTA
  hero dẫn vào cặp (ngôn ngữ, họ). Thẻ "Tiếp tục" về trang chủ từng ngôn ngữ vì `/` không biết
  tiến độ của 15 kho khác nhau.
- Tiếng Anh cần một bảng lời dạy `data/courses/en.js` (~60 câu) cho các họ sinh tự động; họ QWERTY
  tiếng Anh vẫn dùng 27 công thức viết tay.

## Giai đoạn
A. player/generator đọc `data-course`, tên file theo họ, `--layout` — ½ phiên
B. sinh 14 họ + bảng lời dạy en + 8 họ không-mặc-định × 2 trang (bằng script) — 1 phiên
C. trang đầu, sitemap, mở rộng test 21 cho mọi họ — ½ phiên
D. bài nếm thử "hàng cơ sở" cho 21 ngôn ngữ — ½ phiên

## Rủi ro biết trước
Khoá tiếng Anh sinh tự động đọc khác giọng bản viết tay — chấp nhận, người dùng Dvorak đang có
KHÔNG GÌ CẢ. Neo và BÉPO có tầng Shift/phím chết lạ — qua ma trận rồi nhưng phải kiểm trong trình
duyệt như bài cột ngoài. Chủ site yêu cầu đổi model trước khi làm.

---

# 2026-09-23 (khuya) — ĐÃ LÀM: KHOÁ HỌC THEO HỌ CHUỖI PHÍM, TRANG ĐẦU, BÀI NẾM THỬ

Kế hoạch ở mục trên đã làm đủ bốn giai đoạn A–D. Chưa commit, chưa push.

## Số họ thật: 18 khoá, không phải 15
`build-course.js` giờ GIẢI LẠI bản kế hoạch trên từng bố cục của một họ và từ chối build nếu một
bố cục ra khác phím/khác ngón (`checkFamily`). Chạy nó lần đầu đã bác ba chỗ gộp của bản kế hoạch:
- **Tây Ban Nha không phải một họ mà ba**: 174 Latin America đặt `{` ở ô Quote và ´ ở BracketLeft
  (dấu sắc tới ở unit 3, không phải u2-l08); 177 khác 175 ở ô Equal (`¿` thay `¡`).
- **Colemak-DH ≠ Colemak**: dời G/H/D/V/Z/B/M/C/X.
- **Swiss German ≠ QWERTZ Đức**: không có ß, cột ngoài khác.
Danh sách cuối (data/languages.js → `courses`): en (viết tay: 1,120,128,123,125) · en-dvorak ·
en-colemak · en-colemak-dh · en-workman · es (175,176) · es-latinoamerica · es-sin-teclas-muertas ·
de (188,189) · de-schweiz · de-neo · it (194,195) · it-mac · it-dvorak · fr (181,183) · fr-canadien ·
fr-suisse · fr-bepo · vi (viết tay, chỉ 1). 16 khoá sinh tự động, 12 khoá MỚI.

## Cơ chế
- `data/languages.js` → `courses[]` là nguồn duy nhất: id, name, keyboard (cụm từ trong ngôn ngữ
  đó, cho tiêu đề), layouts, href, roadmap, handwritten. build-course, generate.mjs, build-family-pages,
  landing.js, e2e test 21 đều đọc nó.
- `data/courses/<lang>.js` → `families.<slug>`: lớp phủ công tắc + câu dạy cho họ đó (BÉPO không có
  shiftUnlocks; it-mac và fr-suisse dạy hai tầng hàng số; câu nói "Ü ở mép phải" bị viết lại cho Neo…).
- `data/courses/en.js` MỚI: ~90 câu dạy tiếng Anh cho bốn họ sinh tự động.
- Chỗ trống `{reach}` trong tóm tắt unit 1 (trước đó chốt cứng "G H, E I, R U" — sai trên mọi họ khác).
- `T.keyNames`: dấu câu trong tiêu đề/tóm tắt gọi bằng tên ("La virgule et C", "Z, el punto, la coma y ´").
- player.js đọc thư mục bài từ `<html data-course>` → `curriculum.course` → `lang`.
- keyboard/preferences.js: lựa chọn đã lưu CHỈ thắng khi nằm trong `curriculum.layouts`; hộp cài đặt
  chỉ liệt kê bố cục của họ. Lựa chọn ngoài họ không bị xoá.
- Trang: `scripts/build-family-pages.js` (player = bản sao player họ mặc định, 4 chỗ đổi; lộ trình =
  `generate.mjs --course`; chèn sitemap). Lộ trình họ: canonical riêng, KHÔNG hreflang.
- `node scripts/build-course.js` không tham số = build lại mọi khoá sinh tự động; `--check` kiểm cả 16.

## Lỗi cũ tìm thấy dọc đường, đã sửa
- **Mọi khoá sinh tự động hiện `<b>` nguyên văn** ("Pulsa <b>F</b> para continuar"): player escape
  `text`/`hint`. Máy sinh giờ bỏ thẻ khi ghi. Đổi nội dung bài của es/de/it/fr mặc định (chỉ phần chữ).
- `hasSentences` đòi ≥ 3 câu (BÉPO chết ở u2-l05 với "có 1 câu là đủ"); bài kiểm tra 4 dòng đòi ≥ 4.

## Trang đầu `/`
Bỏ `#course` (lộ trình tiếng Anh) và continue card tiếng Anh. Lưới thành thân trang: MỘT THẺ MỖI KHOÁ
(link thẳng tới lộ trình), rồi chip cho 21 ngôn ngữ chưa có khoá. CTA đi theo BỐ CỤC đang chọn —
lỗi gốc (BÉPO → khoá AZERTY) đã có test ở 7c. "Tiếp tục" đọc kho tiến độ của chính khoá đó
(`progressKeyOf` trong landing.js — CÙNG luật với build-course.js, sửa một bên phải sửa bên kia).

## Tiếng Việt chỉ US
`layouts: [1]` ở cả languages.js lẫn curriculum.vi.js. Test 17 (đổi bố cục) chuyển sang khoá tiếng Anh;
test 17d mới: đã lưu 208 mà vào /hoc/ vẫn vẽ US.

## Giai đoạn D — bài nếm thử
`scripts/build-tasters.js`: 21 khoá `<code>-taster`, một bài "hàng cơ sở" (25 màn, không cần từ)
trên bố cục ĐẦU TIÊN của ngôn ngữ, trang `/try/<code>/` (noindex, giao diện tiếng Anh). CTA trang đầu
của ngôn ngữ chưa có khoá: "Try the home row on this keyboard".

## Còn thiếu / biết trước
- Trang tiến độ (/tien-do/, /en/progress/) chỉ đọc kho của họ mặc định; tiến độ BÉPO, Dvorak… không hiện ở đó.
- Bài nếm thử chỉ có cho bố cục đầu của mỗi ngôn ngữ (Arabic 110, không có 141).
- Cédille chết của fr-canadien không dạy: keyboard.js chưa biết tô ¸+c, nên từ có ç tự rơi khỏi khoá.
- Lời dạy tiếng Anh sinh tự động đọc khác giọng bản viết tay — đã chấp nhận ở kế hoạch.
- Chưa ai đọc bản ngữ các lớp phủ families (fr/es/de/it) — nên nhờ người bản ngữ đọc lại trước khi push.

---

# 2026-09-24 — GIAI ĐOẠN 1 + 2 SAU KHI NGHIÊN CỨU typingstudy.com

typingstudy.com dạy HẾT mọi ký tự của từng bố cục (15 bài cho US, 18 cho Đức/Tây Ban Nha, 24 cho
BÉPO, 25 cho Telex/VNI) và cho chọn khung 104/105 phím. Đo lại khoá của mình: mỗi khoá còn 8–27 ký
tự chưa dạy (khoá Đức không có `? ! :`), và KHÔNG bố cục nào có phím 105. Chủ site chọn sửa hai lỗ
này trước khi mở rộng ngôn ngữ. Chỉ học cấu trúc, không lấy nội dung chữ của họ.

## Giai đoạn 2 — phím 105 (ISO)
- `scripts/add-iso-key.js`: bảng 31 bố cục (mã ≥ 100) + ký tự Windows ở ô `IntlBackslash`
  (`< >`; `\ |` cho UK/ABNT2; `` ` ~ `` cho UK Mac; `« »` Canada; `ê` BÉPO; `] [` Hà Lan). Chèn sau
  Shift trái, Shift trái ngắn đi 45px, ghi `geometry.physicalStandard = 'iso'` (+ index.json).
  File nguồn layouts.json không còn, nên đây là sửa thẳng dữ liệu; script chạy lại được, có `--check`.
- `keyboard/keyboard.js` `shapedLayout()` + tuỳ chọn `keyboardShape` (auto/ansi/iso) trong Cài đặt,
  dịch 6 ngôn ngữ. ISO trên bố cục US = bản sao phím Backslash (đúng như Windows).
- `keyboard/hands-pose-map.js`: cột tư thế tay BỎ QUA ô IntlBackslash — không thì Z, X, C… lệch một
  cột và tay 3D với sang phím bên cạnh. Đã kiểm: `w` trên AZERTY = tư thế của `z` trên US.

## Giai đoạn 1 — unit "mọi phím còn lại"
- `scripts/lib/unit-symbols.js` (dùng chung): ký tự bố cục có mà NỘI DUNG các bài chưa từng dùng →
  chia bài theo hàng số / tay trái / tay phải (≤ 4 ký tự), mỗi ký hiệu đặt đúng chỗ nó hay đứng
  (`mond!`, `(prüfung)`, `27 = 7`, `57°`, `$12`), rồi một bài ôn + một bài kiểm tra 120 s.
- Phím chết (`´ ` ^ ~ ¨ ˇ ¸`) KHÔNG dạy trừ khi khoá khai `symbolsLive` (en và vi: `^ ` ~`; it: `^`).
  AltGr chưa dạy (player chưa biết chỉ AltGr).
- Khoá sinh tự động: build-course.js gọi nó sau bài 27 → unit 4, 5–9 bài tuỳ bố cục.
- Khoá viết tay: `scripts/build-unit-symbols.js` ghi vào ba cặp dấu `<auto:symbols:*>` trong
  curriculum.en.js / curriculum.vi.js; phần viết tay không bị đụng. en: unit 4 (7 bài, 19 ký tự);
  vi: unit 5 (8 bài, 21 ký tự, gõ ascii, từ không dấu lấy từ chính các bài của khoá — lọc bỏ mảnh
  luyện ngón bằng luật âm tiết: có nguyên âm, không f j w z).
- Số bài giờ khác nhau theo khoá (BÉPO 32 … Ý 36, vi 43). `build-family-pages.js` ghi `lessons`/
  `units` của từng khoá vào data/languages.js từ chỉ mục; trang đầu đọc từ đó. Số ghi cứng trên các
  trang chủ ngôn ngữ đã sửa tay.
- Máy sinh giờ xoá file bài thừa khi số bài giảm (trước đó để lại "file lạc").

## Lệnh
`node scripts/add-iso-key.js --check` · `node scripts/build-course.js` · `node scripts/build-unit-symbols.js`
· `node scripts/build-family-pages.js` · `node bai-hoc/generate.mjs --lang <x>` (6 ngôn ngữ).

## Điều phối (2026-09-24): 2 agent song song, mỗi agent chỉ sở hữu file của mình, cấm git checkout
- Agent test: thêm e2e 22a–22e (phím 105 AZERTY, ansi/iso, hộp Cài đặt, chơi hết một màn unit 4,
  tư thế tay w=z). Toàn bộ: 67/67 PASS, offline 3/3.
- Agent rà soát văn bản fr/es/de/it: sửa cả MẪU CÂU DÙNG CHUNG, không chỉ phần họ/ký hiệu — "zwei
  neue Tasten" cho bài bốn phím, "revient à le majeur" (~40 chỗ), "coger" (tục ở Mỹ Latinh), "Mayús"
  lệch với "Shift" của phần còn lại, v.v. Thêm `':'` vào keyNames es/de.
- Còn để ngỏ: tóm tắt unit 1 có dấu câu đọc lủng củng ("puis la virgule et C, P D et O V"); fr-suisse
  chưa có câu riêng cho cột ngoài (è, ¨ chết); AZERTY congrats.edge nói "không thiếu gì" dù ë ï ü chưa
  dạy; phím chết và AltGr chưa dạy ở đâu cả; `«` của fr-canadien (ô ISO) chưa đối chiếu với bàn phím thật.

---

# 2026-09-24 — GIAI ĐOẠN 3, NHÓM 1: INDONESIA, MÃ LAI, FILIPINO, SWAHILI (chưa commit)

Bốn bố cục 115–118 y hệt US QWERTY (chỉ khác ở chỗ ghi chữ hoa tầng Shift), nên máy sinh chạy
nguyên. Mỗi ngôn ngữ một agent, song song, mỗi agent chỉ sở hữu file của ngôn ngữ đó (kho từ, lời
dạy, ui.<lang>.js, config roadmap, trang chủ + player); lead giữ mọi file dùng chung và ghép cuối.

| khoá | URL | từ | câu | bài |
|---|---|---|---|---|
| id | /id/ · /id/pelajaran/ · /id/belajar/ | 633 (532 dùng) | 21 | 35 |
| ms | /ms/ · /ms/pelajaran/ · /ms/belajar/ | 680 (578 dùng) | 21 | 35 |
| fil | /fil/ · /fil/aralin/ · /fil/matuto/ | 805 (634 dùng) | 22 | 35 |
| sw | /sw/ · /sw/masomo/ · /sw/jifunze/ | 614 (534 dùng) | 21 | 35 |

Filipino: bố cục 117 không có ñ → kho không có từ ñ. Swahili: từ có dấu nháy (ng'ombe) vào từ u2-l08.
`/sw/` (thư mục) không đụng `/sw.js` (service worker) — đã kiểm; đừng thêm rewrite `/sw` → `/sw.js`.

## Sửa dùng chung dọc đường
- `slice(0, 2)` trên `<html lang>` (player, badges, progress-store, weak-keys) biến `fil` thành `fi` →
  nay cắt ở `-`.
- weak-keys.js chỉ đọc `drill` của kho từ → bài phím yếu của es/fr/de/it lấy TỪ TIẾNG VIỆT. Nay
  rơi về `words` khi kho không có `drill`.
- Màn "giờ dồn vào phím X" (wordsOne) nói về q/x trong khi không từ nào chứa chúng (ms/id) → chọn
  phím mới đầu tiên có ≥ 4 từ; không có thì là màn luyện ngón. Đổi đúng một bài cũ (fr u2-l04), và
  bài đó cũng từng mắc đúng lỗi này.
- `aria-label` bàn phím chốt cứng tiếng Việt → đọc `keyboard.boardAria/keypadAria` từ ui.<lang>.js.
- Bố cục LẺ của ngôn ngữ đã có khoá (ms 119 Jawi): build-tasters.js sinh `/try/<code>-<id>/`, trang
  đầu dẫn tới đó thay vì khoá Latin. Bài nếm thử cũ của ngôn ngữ vừa có khoá tự bị xoá.
- `data/languages.js`: bốn mục vẫn nằm trong nhóm chú thích "keyboard now, course later" dù đã ready
  — chỉ là thứ tự trong file, landing.js tự xếp lại.

Kiểm chứng: 24 khoá validator PASS · check-words 8 kho PASS · build-lessons-en 27 khớp · e2e 71/71 ·
offline 3/3.

---

# 2026-09-24 — Topbar: bỏ ô đổi ngôn ngữ, thay bằng một ô "Trang chủ" về `/`

Theo yêu cầu chủ site. Mười ngôn ngữ làm dãy ô EN/VI/ES… dài ra mà vẫn không trả lời được "đổi
sang cái nào"; trang `/` (chọn ngôn ngữ + bàn phím) trả lời được. `.lang-switch` không còn trên trang
nào; `.home-switch` (base.css, cao 46px bằng `.secondary-button`) nhãn theo `<html lang>`: Home, Trang
chủ, Inicio, Accueil, Startseite, Home, Beranda, Laman utama, Home, Mwanzo.
- Trang lộ trình: `bai-hoc/generate.mjs` (bảng HOME_SWITCH); `s.switches` trong config.*.mjs bỏ không dùng.
- `/` không có ô này (nó sẽ trỏ về chính nó); header-actions để trống.
- Sáu trang bài viết/ứng dụng tiếng Việt từng có "← Trang chủ" → `/vi/` trên topbar: thay bằng ô mới
  về `/`, để một nhãn không mang hai nghĩa. Logo và breadcrumb vẫn về `/vi/`.
- hreflang trong <head> giữ nguyên — đó là cho máy tìm kiếm, không phải cho người đọc.
- e2e: 11c bỏ qua `.home-switch`; 11d đổi tên; 11f mới kiểm mọi trang trong sitemap. 72/72 PASS.

---

# 2026-09-24 — `/` đổi TOÀN BỘ ngôn ngữ theo bộ chọn ngôn ngữ ("Choose a language" / "Chọn ngôn ngữ")

Theo yêu cầu chủ site. `landing-i18n.js` (mới) giữ chữ của trang đầu cho 10 ngôn ngữ có khoá, cùng
`routes` từng ngôn ngữ thật sự có (progress/test/free/guide; null = ẩn mục đó). landing.js
`applyLanguage()` đổi `<html lang>`, `<title>`, h1, đoạn mở, nhãn bộ chọn, nút + ghi chú, nhóm trong
danh sách, khối lưới, lối tắt (ẩn ô/khối khi ngôn ngữ chưa có trang), menu trên, chân trang. Ngôn
ngữ chưa có bảng (ar, hi…) → tiếng Anh. Lựa chọn được nhớ (khoá cũ `typingease-language-v1`), nên
lần sau trang mở thẳng bằng ngôn ngữ ấy.
- HTML gốc của `/` vẫn là tiếng Anh: đó là bản Google đọc, và hreflang trong <head> không đổi.
- Bỏ dải "This site is available in …": trang tự đổi ngôn ngữ rồi, dải đó thừa.
- sw.js v5: landing-i18n.js vào PRECACHE; quét cache v4 (còn ô EN/VI/ES cũ).
- e2e 7c: chọn tiếng Pháp → lang=fr, tiêu đề tiếng Pháp, menu về /fr/lecons/ và không còn /en/.
  Toàn bộ 72/72 PASS, offline 3/3.
- Câu chữ của 8 ngôn ngữ ngoài en/vi là bản tôi viết, chưa ai bản ngữ đọc.

---

# 2026-09-24 — 16 ngôn ngữ còn lại có khoá: nl pl pt tr ru uk ar fa ur he hi bn th zh ja ko

Theo yêu cầu chủ site ("làm tiếp các ngôn ngữ còn lại"). Mỗi ngôn ngữ một agent (kho từ
`data/words/<L>.js`, `data/courses/<L>.js`, `i18n/ui.<L>.js`, `bai-hoc/config.<L>.mjs`, trang
`/<L>/` và `/<L>/<học>/`); tôi giữ file chung. 26/27 ngôn ngữ nay 'ready', 54 khoá (28 họ bàn phím).
- Hạ tầng mới trong build-course.js/player: CHỮ KHÔNG HOA-THƯỜNG (`caseless`: bài Shift dạy tầng
  Shift), RTL (`textDir()`, `dir="rtl"` cho trang lộ trình, bàn phím luôn LTR, letter-spacing 0 cho
  chữ nối nét), BỘ GÕ HANGUL (`hangul-match.js`, composer thứ hai cạnh Telex; `scripts/test-hangul.js`),
  hoa/thường theo locale (İ ı tiếng Thổ), `sentenceEnd` (। Hindi/Bengali), `listSep` (، ), chữ số bản
  ngữ trong unit "mọi phím còn lại", ký tự trình bày Ả Rập (ﻻ) quy về ل ا khi so.
- Trang đầu: `landing-i18n.js` thêm 16 bảng (26 ngôn ngữ); chọn ngôn ngữ RTL thì cả `<html dir>` lật;
  fa/bn điền số bài bằng chữ số bản ngữ (Intl.NumberFormat).
- `/ja/` không còn chuyển về `/`: nay là trang nhà khoá tiếng Nhật (romaji qua IME). e2e 11b sửa theo.
- sitemap: 32 URL mới (trang nhà + lộ trình) + lộ trình các họ phụ.
- Kho từ tiếng Anh: bỏ dấu phẩy trong hai câu (check-words bắt); 3 file en-* sinh lại.
- build-course: bài chỉ có MỘT phím trọng tâm thì cụm luyện nhanh ghép nó với các phím đã học (trước
  đó ra 3 cụm, validator đòi ≥4 — hi-bolnagri u2-l06).
- CHƯA LÀM: zh-tw (Zhuyin: IME đổi phím thành chữ Hán, chưa có cách chấm). zh chỉ Pinyin trên US.
- Giới hạn biết: AltGr và phím chết trên tầng Shift chưa dạy (pl programmer, pt â ê); nhãn phím Hebrew
  hiển thị chưa đẹp; ngắt dòng chữ Thái (không có dấu cách) là thẩm mỹ. Toàn bộ câu chữ 16 ngôn ngữ do
  agent viết, chưa người bản ngữ nào đọc.

---

# 2026-09-24 — Trang tiến độ cho mọi ngôn ngữ (trước chỉ có vi và en)

Theo yêu cầu chủ site ("thêm trang tiến độ vào các ngôn ngữ còn thiếu, cho đồng bộ"). 24 trang mới
`/<lang>/<slug>/` (es/progreso, fr/progres, de/fortschritt, ru/progress, ar/taqaddum, ja/shinchoku…).
- `scripts/build-progress-pages.mjs` sinh cả 25 trang (gồm /en/progress/, trước viết tay) từ ba
  nguồn: `tien-do/text/<lang>.mjs` (chữ tĩnh), `progress` trong `i18n/ui.<lang>.js` (chữ JS, cũng
  dùng để in giá trị ban đầu), `bai-hoc/config.<lang>.mjs` (menu/chân trang/khẩu hiệu — khớp trang
  lộ trình). `--check` so byte. /tien-do/ vẫn viết tay; máy sinh chỉ thay khối hreflang của nó để
  26 trang khai hreflang qua lại.
- MỘT trang cho mọi khoá của ngôn ngữ: `?course=fr-bepo` chọn khoá (mỗi khoá một kho tiến độ,
  `progressKey`), một script nhỏ nạp `data/curriculum.<khoá>.js` bằng document.write TRƯỚC
  progress-store.js/badges.js. Ngôn ngữ nhiều khoá có hàng nút chọn khoá. Lộ trình của các họ và
  thông báo huy hiệu trong player trỏ về trang kèm `?course=` của khoá đó. Tiếng Anh cũng được
  hàng chọn khoá (QWERTY/Dvorak/Colemak/Colemak-DH/Workman).
- Nối dây: `routes.progress` trong 24 ui.<lang>.js, 24 config.<lang>.mjs (de thêm mục menu), bảng
  landing-i18n.js; mục "Tiến độ" trên menu + chân trang 24 trang nhà `/<lang>/`; sitemap +24.
  `bai-hoc/home-switch.mjs` tách bảng nhãn "Trang chủ" để hai máy sinh dùng chung. sw.js v7.
- Chữ 24 ngôn ngữ do 8 agent viết (dùng lại thuật ngữ sẵn có của từng ngôn ngữ), chưa ai bản ngữ đọc.
  Còn lệch nhỏ: số bài/WPM trên trang fa/bn vẫn in chữ số Latin ở vài chỗ do JS chung điền.

---

# 2026-09-25 — Tiếng Trung phồn thể (Đài Loan): khoá Chú âm, gõ theo VỊ TRÍ phím

Chủ site chọn hướng "Chú âm, tắt bộ gõ". Bộ gõ Chú âm biến phím thành chữ Hán ngay khi gõ nên trang
không đọc được phím vừa bấm; người học để bộ gõ ở chế độ tiếng Anh (Shift) và trang tự đổi.
- `typeByPosition: true` (data/courses/zh-tw.js → data/curriculum.zh-tw.js). player.js: keydown trên
  ô nhập tra `event.code` trong bố cục của khoá (215) và chèn ký tự Chú âm (KeyA → ㄇ), không phụ
  thuộc bố cục hệ điều hành. Phím đang soạn bộ gõ (`isComposing`/"Process") thì để nguyên và hiện
  `player.positionNote` (bảo tắt bộ gõ). Nội dung khoá là CHÚ ÂM (ㄋㄧˇㄏㄠˇ), không phải chữ Hán.
- 31 bài / 256 màn trên bố cục 215; kho 609 từ, 24 câu (agent viết, chưa người bản ngữ đọc). Dấu thanh
  (ˇ ˋ ˊ ˙ ở hàng số) chỉ đến ở Unit 3 theo kế hoạch hàng phím chung — Unit 1–2 chỉ có âm tiết thanh 1.
  Không luyện bước chọn chữ Hán (giới hạn đã chấp nhận).
- `<html lang>` của trang sinh: mã vùng viết hoa (zh-tw → zh-TW) ở generate.mjs và
  build-progress-pages.mjs. /try/zh-tw/ tự bị xoá (build-tasters). e2e 22f gõ một màn u3 có dấu thanh
  chỉ bằng mã phím vật lý. sw.js v8. 27/27 ngôn ngữ có khoá.

---

# 2026-09-25 — Logo TypingEase về `/` trên mọi trang

Theo yêu cầu chủ site: bấm logo là về trang chọn ngôn ngữ và bàn phím, không còn về trang nhà của
từng ngôn ngữ (/fr/, /vi/…). 218 liên kết `.brand` trong 109 trang HTML, cộng hai máy sinh
(bai-hoc/generate.mjs, scripts/build-progress-pages.mjs) — cả topbar lẫn chân trang. Trang nhà từng
ngôn ngữ vẫn tới được qua menu ("Luyện gõ"/"Practice"…) và breadcrumb. e2e 11c: loại `.brand` khỏi
luật "không trỏ về /" và kiểm logo phải về `/`. sw.js v9.

---

# 2026-09-25 — Đợt 0 SEO: dọn sạch trước khi tăng trưởng (chống bị Google coi là spam)

Theo yêu cầu chủ site, sau khi đối chiếu bảng từ khoá của chủ site với chính sách spam của Google.
- 27 trang tiến độ → `noindex, follow`, bỏ hreflang, ra khỏi sitemap (Google chỉ thấy 27 bản trạng
  thái trống cùng khuôn — dạng trang cửa ngõ). build-progress-pages.mjs; /tien-do/ sửa tay.
- 6 trang chuyển hướng cũ (/en/what-is-wpm/…, /ja/typing-test/…) trỏ về trang CÙNG ngôn ngữ, không
  sang bài tiếng Việt; bỏ câu "TypingEase nay chỉ còn bản tiếng Việt". e2e 11b sửa theo.
- Tiêu đề ≤ 60 ký tự (CJK ≤ 32), mô tả 120–155 (CJK 50–80), mỗi trang một từ khoá chính lấy từ bảng
  của chủ site (L3 cho trang nhà/lộ trình, L2 cho trang test), không nhồi, không hứa điều trang
  không có. 5 agent viết theo ngôn ngữ, sửa ở nguồn (config.<lang>.mjs, <lang>/index.html).
  /tr/ đang ghi 35 bài, thật là 34 — đã sửa.
- `scripts/lib/seo-head.mjs`: khối OG + Twitter + JSON-LD giữa `<!-- seo:head -->`. JSON-LD chỉ khai
  điều có thật: WebSite + Organization ở `/`, Course ở trang lộ trình, WebApplication ở hai trang
  test; không AggregateRating/Review/FAQ mới (FAQPage cũ của 2 bài tiếng Việt giữ nguyên — nội dung
  có thật trên trang). bai-hoc/generate.mjs in khối cho lộ trình; `scripts/build-seo-head.mjs` in cho
  trang viết tay, dựng cụm hreflang đủ 27 trang nhà (trước chỉ một chiều), điền `<lastmod>` thật
  (ngày commit nếu file sạch, không thì ngày sửa file). `--check` có. build-family-pages.js nhận
  dòng sitemap có lastmod.
- Ảnh chia sẻ `assets/og-image.png` 1200×630, không chữ ngôn ngữ nào ngoài logo (phím nhiều hệ chữ).
- e2e 11g canh các luật trên. 106/106 PASS. sw.js v10.
- Chưa làm (các đợt sau): trang test tốc độ cho từng ngôn ngữ (Đợt 1), người bản ngữ đọc lại.

---

# 2026-09-25 — Đợt 1 SEO, đợt tung thứ nhất: trang test tốc độ es / pt / fr / de

Nhắm nhóm từ khoá lớn nhất trong bảng của chủ site (L2 "test tốc độ", L4 "test 1/5/10 phút") mà
trước đây chỉ vi và en có trang.
- Công cụ (kiem-tra-toc-do-go/typing-test.js, dùng chung): nhiều đoạn văn (`T.passages`) xáo rồi nối
  tiếp, gần hết thì nối thêm vòng nữa; thời lượng đọc từ nút trên trang, nay 15 s, 30 s, 1, 2, 3, 5,
  10 phút; đồng hồ phút:giây; khung chữ 5 dòng cố định, cuộn theo dòng đang gõ (khoảng đệm là viền
  trong suốt để không lộ nửa dòng); dấu cách không còn là &nbsp; nên chữ không bị cắt giữa từ (lỗi
  có từ bản cũ); đơn vị theo ngôn ngữ `T.wpmUnit` (PPM, MPM); lịch sử riêng từng ngôn ngữ (vi/en giữ
  khoá cũ). vi và en: thêm 7 đoạn văn mỗi bên, sửa số bài cũ (35→43 vi, 27→34 en).
- `scripts/build-test-pages.mjs`: MỘT trang mỗi ngôn ngữ, chọn thời lượng bằng nút — không bao giờ một
  trang mỗi thời lượng (trang cửa ngõ). Bật một ngôn ngữ = có `kiem-tra-toc-do-go/text/<lang>.mjs` +
  bảng `test` trong ui.<lang>.js (≥ 4 đoạn). In khối OG/JSON-LD WebApplication, cụm hreflang chung với
  /kiem-tra-toc-do-go/ và /en/typing-test/ (máy sinh thay khối hreflang của hai trang viết tay).
- URL: /es/test-de-mecanografia/, /pt/teste-de-digitacao/, /fr/test-de-frappe/, /de/tipptest/.
  routes.test nối ở ui/config/landing; menu + chân trang của trang nhà, lộ trình, tiến độ; sitemap.
- Chữ 4 ngôn ngữ (9–10 đoạn văn, 6 mục bài viết, FAQ) do 4 agent viết, chưa người bản ngữ đọc.
- e2e 11h: mọi trang test theo ngôn ngữ trong sitemap gõ thật 15 giây ra kết quả đúng đơn vị, bài
  10 phút nối thêm văn bản. 107/107 PASS. sw.js v11.
- Đợt tung tiếp theo (đề xuất): it, nl, pl, tr, ru (gõ trực tiếp, không bộ gõ). ja/zh/zh-tw cần cách
  chấm riêng cho bộ gõ; ko phải kiểm hành vi âm tiết đang ghép trước khi bật.

---

# 2026-09-25 — Hoàn thiện sau Đợt 1: nội dung đợt 2 viết sẵn, CLS, breadcrumb, câu chữ cũ

- Đợt tung 2 (it, nl, pl, tr, ru) VIẾT SẴN nhưng chưa bật: `live: false` trong kiem-tra-toc-do-go/text/
  <lang>.mjs; build-test-pages.mjs bỏ qua và in "chờ đợt sau". Bật = xoá dòng đó, nối routes.test
  (ui/config/landing/menu trang nhà), thêm sitemap, chạy các máy sinh. wpmUnit: it PPM, tr KDK, ru сл/мин.
- CLS (điện thoại, 4G chậm): `/` 0,354 → 0,052 (giữ chỗ cho bàn phím xem trước bằng aspect-ratio khi
  chưa nạp), `/fr/` 0,101 → 0,033 và `/vi/` 0,114 → ~0 (home.css: main cao ≥ 1 màn hình, giữ chỗ cho
  unit-rail/unit-teasers khi còn trống). LCP các trang được index 1,0–1,6 s.
- BreadcrumbList JSON-LD cho trang có breadcrumb HIỂN THỊ (trang test sinh + /en/typing-test/,
  /kiem-tra-toc-do-go/…); không trùng với các bài tiếng Việt đã tự khai.
- Câu "15, 30, 60 hoặc 120 giây" đã sai từ khi có bài 10 phút: sửa ở 27 bảng landing-i18n, ui.en.js,
  script.js, index.html, vi/index.html, config.en/vi.mjs, luyen-tu-do, tien-do.
- sw.js v12. 107/107 PASS.

---

# 2026-09-25 — Trang trò chơi gõ phím (phần 1: vi + en)

Theo yêu cầu chủ site ("làm cả trang game, nghiên cứu và lên kế hoạch"). Đối thủ: chữ rơi (ZType,
Falling Words), đua gõ nhiều người (TypeRacer, Nitro Type — cần máy chủ), kho game trẻ em (typing.com,
KidzType). Điểm khác của TypingEase: trò chơi chạy trên ĐÚNG bố cục và ngôn ngữ của khoá học.
- MỘT trang mỗi ngôn ngữ, ba trò chọn bằng thẻ (không tách trang theo trò/độ khó — trang cửa ngõ):
  Mưa chữ (từ rơi, gõ + Space để phá, 3 mạng, lên màn mỗi 8 từ), Đua với bóng (đua với xe chạy đều ở
  20–80 WPM hoặc kỷ lục của chính mình — KHÔNG có người chơi khác và trang nói rõ), Săn phím (60 giây,
  phím sáng trên bàn phím ảo của khoá, nhận theo event.code nên đúng với mọi bố cục hệ điều hành).
- tro-choi/games.js + games.css (dùng lại khung trang test); scripts/build-game-pages.mjs sinh trang
  từ tro-choi/text/<lang>.mjs; kho từ in thẳng vào trang (vi: kho có dấu gõ Telex trong file chữ; ngôn
  ngữ khác: data/words/<lang>.js của khoá). Tung theo đợt, `live: false` như trang test.
  JSON-LD WebApplication/GameApplication + breadcrumb. Kỷ lục chỉ localStorage, không bảng xếp hạng.
- /tro-choi/ và /en/typing-games/: menu + chân trang (config vi/en → lộ trình, họ, tiến độ; / và /vi/
  tĩnh + landing-i18n routes.games), sitemap.
- Sửa kèm: `.inline-link` trên trang test trước giờ ra màu xanh mặc định (kiểu chỉ có trong article.css).
- e2e 11i chơi thật cả ba trò trên hai trang. 108/108 PASS. sw.js v13.
- Kế hoạch: đợt game 2 = ko (타자 게임), ja (タイピングゲーム), th (เกมฝึกพิมพ์) — có từ khoá riêng trong bảng
  của chủ site, nhưng cần kiểm bộ gõ (ko ghép âm tiết, ja romaji) trước; đợt 3 = es pt fr de (trùng
  ngôn ngữ đã có trang test). Chế độ mới cân nhắc sau: lọc từ theo phím đã học trong khoá.

---

# 2026-09-25 — Hình minh hoạ cho trang trò chơi

Theo góp ý chủ site ("có hình ảnh minh hoạ dễ hiểu thì hay"). `scripts/lib/game-art.mjs`: SVG vẽ tay,
in thẳng vào trang (không file ảnh, không thư viện, KHÔNG chữ trong hình → một bộ hình cho mọi ngôn
ngữ): ảnh thu nhỏ 120×72 trên ba thẻ chọn trò; hướng dẫn ba bước có biểu tượng ở đầu mỗi trò (chữ ở
`how` trong tro-choi/text/<lang>.mjs, máy sinh báo lỗi nếu thiếu); cảnh nền Mưa chữ (mây, cỏ); xe đua
SVG thay cho viên thuốc trong Đua với bóng. Tất cả aria-hidden. CLS trang game vẫn 0,002. sw.js v14.

---

# 2026-09-25 — Trò chơi cho 25 ngôn ngữ còn lại: nội dung đủ cả, bật đợt đầu es/pt/fr/de

Theo yêu cầu chủ site ("làm thêm các ngôn ngữ khác", "điều phối agent cho nhanh"): 5 agent viết song
song tro-choi/text/<lang>.mjs cho 25 ngôn ngữ, mỗi file nói đúng cách gõ của khoá (phím chết, AltGr
tiếng Ba Lan, bộ gõ Hàn ghép âm tiết, romaji tắt IME, pinyin, Chú âm theo vị trí phím, thứ tự nguyên âm
Thái, chữ giống nhau Ả Rập/Ba Tư/Urdu, chữ cuối Hebrew…). Kho từ = data/words/<lang>.js của khoá.
- BẬT: es /es/juegos-de-mecanografia/, pt /pt/jogos-de-digitacao/, fr /fr/jeux-de-dactylographie/,
  de /de/tippspiele/ (menu, chân trang, landing, trang nhà, sitemap, hreflang tự động).
- CHỜ (`live: false`, đã thử trong Chrome qua `build-game-pages.mjs --preview` → _preview/, đã xoá): it
  ar bn zh zh-tw nl fil he hi id ja ko ms fa pl ru sw th tr uk ur — cả 21 trang: Mưa chữ phá được từ,
  Săn phím tính điểm, RTL đúng chiều, không lỗi console, không tràn ngang.
- Bật một đợt: `python <scratchpad>/enable-games.py it:Giochi nl:Spellen …` (bỏ `live`, nối
  config/landing/menu trang nhà/sitemap) rồi chạy generate.mjs + các máy sinh + build-seo-head.
- Bộ gõ Hàn kiểm bằng CDP Input.imeSetComposition: đang ghép không nộp, Space sau khi ghép thì phá từ.
- CSS: đường đua RTL chạy từ phải sang trái, cờ đích bên trái; chữ không Latin trong trò chơi dùng font
  không đơn cách (DM Mono làm chữ Ả Rập đứt nét). e2e 11i chơi mọi trang game trong sitemap.
  108/108 PASS. sw.js v15.

---

# 2026-09-26 — Giới thiệu / Điều khoản / Quyền riêng tư cho 27 ngôn ngữ

Theo yêu cầu chủ site (tín hiệu tin cậy E-E-A-T; bắt buộc nếu sau này chạy quảng cáo). Chủ site chọn:
email support@typingease.site, người vận hành "TypingEase" (Việt Nam), hosting Cloudflare Pages.
- Nội dung khớp sự thật của mã (đã kiểm): không tài khoản, không cookie, không analytics/quảng cáo;
  tiến độ, huy hiệu, kỷ lục, tuỳ chọn trong localStorage; service worker; bên thứ ba duy nhất: Google
  Fonts (IP) và Cloudflare (log kỹ thuật). Luật áp dụng: Việt Nam. Đổi hành vi site → sửa en.mjs trước.
- phap-ly/text/en.mjs là BẢN GỐC có hiệu lực; 26 bản dịch (5 agent, dịch sát nghĩa, cùng thẻ/chỗ trống)
  in câu "nếu khác bản tiếng Anh thì bản tiếng Anh áp dụng" + liên kết English. scripts/build-legal-pages.mjs
  sinh 81 trang: /about/ /terms/ /privacy/ (en), /vi/gioi-thieu/ /vi/dieu-khoan/ /vi/quyen-rieng-tu/,
  /<lang>/about|terms|privacy/. About: index + sitemap + hreflang + breadcrumb; Terms/Privacy:
  `noindex, follow` (không cần xếp hạng; hàng chục bản dịch của cùng một văn bản không nên vào chỉ mục).
- Dòng "About · Terms · Privacy" theo ngôn ngữ ở chân MỌI trang: scripts/lib/legal.mjs `legalFooter()`,
  in bởi generate.mjs, build-progress/test/game/legal-pages; trang viết tay do build-seo-head.mjs chèn
  (khối <!-- legal -->). Mã lang có đuôi (zh-Hans) quy về zh.
- Giọng xưng hô giữ như cả site (tu/du, 해요체…) — văn bản pháp lý ở Pháp/Đức/Hàn thường trang trọng hơn;
  đổi thì đổi cả site. e2e 11j. 109/109 PASS. sw.js v16.

---

# 2026-09-26 — Chân trang ba cột: dòng pháp lý ở giữa

Theo yêu cầu chủ site: bỏ hàng liên kết lộ trình/bài học (`.footer-links`) ở chân MỌI trang, dòng
Giới thiệu · Điều khoản · Quyền riêng tư vào giữa. base.css: lưới `1fr auto 1fr` — logo | pháp lý |
khẩu hiệu + ©; ≤ 900px xếp dọc căn giữa (logo, pháp lý, khẩu hiệu), ẩn dấu "·". Liên kết pháp lý: chữ
xanh đậm, nền nhạt khi rê chuột. Máy sinh (generate.mjs, progress/test/game/legal) không in nav nữa;
build-seo-head.mjs gỡ nav khỏi trang viết tay. Sửa kèm: `footer span` thu nhỏ nhầm chữ "Ease" của logo
(nay `footer > span`). config.<lang>.mjs `footerLinks` còn đó nhưng không dùng.
Lưu ý: ≤ 900px menu trên bị ẩn (.topbar nav display:none), nên trên điện thoại các trang không còn liên
kết chéo tới lộ trình/tiến độ/test ở chân trang. 109/109 PASS. sw.js v17.

---

# 2026-09-26 — Nút ☰ menu trên điện thoại

Chủ site đồng ý bổ sung sau khi chân trang bỏ hàng liên kết (≤ 900px menu trên cùng vốn bị ẩn, nên điện
thoại mất lối sang Lộ trình/Tiến độ/Test/Trò chơi). `menu.js`: không dựng menu thứ hai — gắn nút ☰
vào .header-actions, bấm thì CHÍNH `.topbar > nav` thành bảng thả xuống rộng hết màn hình (đúng ngôn
ngữ, cả `/` nơi landing.js vẽ lại nav). Esc / bấm ra ngoài / bấm liên kết thì đóng; aria-expanded,
aria-controls, nhãn đọc = aria-label của nav. Trên màn rộng nút ẩn.
- base.css: `.topbar.is-menu-open > nav` cần `justify-self:stretch` — `.topbar nav` mang
  `justify-self:center`, mà với phần tử position:absolute thì nó co về vừa nội dung dù left/right = 0.
- Nạp `<script src="/menu.js" defer>`: 5 máy sinh in sẵn; build-seo-head.mjs chèn vào trang viết tay có
  topbar chứa nav (204 trang). menu.js vào PRECACHE. e2e 11k. 110/110 PASS. sw.js v18.

---

# 2026-09-26 — Trang test tốc độ viết sẵn cho 16 ngôn ngữ còn lại (chưa bật)

Theo yêu cầu chủ site ("làm các việc chưa làm"). 4 agent viết kiem-tra-toc-do-go/text/<lang>.mjs + bảng
`test` trong ui.<lang>.js cho uk id ms fil sw hi bn th ar fa ur he ko ja zh zh-tw, `live: false`.
Cùng đợt 2 (it nl pl ru tr), 21 trang test đang CHỜ; đã dựng thử bằng `build-test-pages.mjs --preview`
(→ _preview-test/, đã xoá) và gõ thật 15 giây trong Chrome: đúng đơn vị, 100%, không lỗi console.
- Đoạn văn gõ ĐÚNG như khoá học: ja romaji tắt IME theo quy ước data/words/ja.js; zh pinyin không
  dấu, ü = v; zh-tw Chú âm (typeByPosition); ko Hangul qua bộ gõ (kiểm CDP: âm tiết đang ghép không
  tính lỗi); ar/fa/ur/he/hi/bn/th chỉ ký tự bố cục của khoá gõ được (agent kiểm từng ký tự).
- typing-test.js: gõ theo vị trí phím khi trang in `window.TypingEaseTestKeys` (máy sinh đọc bố cục
  khoá nếu file chữ có `typeByPosition`). test.css: font không đơn cách cho chữ không Latin.
- Cần nhớ khi BẬT: /ja/typing-test/ hiện là trang chuyển hướng cũ (→ /ja/) — trang thật sẽ thay nó,
  phải sửa bảng REDIRECTS của e2e 11b. Bengali: bố cục 107 không có phím cho nguyên âm độc lập ngoài অ
  (chỉ AltGr), đoạn văn tránh các từ đó — trang nói rõ. Hindi 106 không có ? : ! → đoạn văn không dùng.
- sw.js v19.

---

# 2026-09-26 — Rà trang test/game theo TỪNG KIỂU BÀN PHÍM của mỗi ngôn ngữ

Theo yêu cầu chủ site ("phù hợp với từng ngôn ngữ và loại bàn phím tương ứng"). Theo ngôn ngữ thì cả
27 đã có nội dung test + game (phần lớn đang `live: false`). Rà theo kiểu bàn phím: 65 họ/bố cục, đoạn
văn test + kho từ game, đúng luật typeableWith (phím chính/Shift/AltGr, phím chết). 62 gõ được trọn vẹn.
- Urdu CRULP (139) không có ؤ: 1 đoạn văn đổi گاؤں → بستیاں.
- Pháp Canada (186): ç gõ bằng phím chết ¸ + c — gõ được thật; kiểm tra của trang/trò chơi hiểu ¸.
- Hindi Bolnagri (137): dữ liệu bố cục không có ई ऊ ऐ औ (có trong mọi đoạn và 29 từ). Thêm 5 đoạn văn
  không dùng chúng (agent, kiểm bằng typeableWith trên 106 và 137). build-test-pages.mjs: nếu các họ của
  một ngôn ngữ không gõ được cùng một bộ đoạn → in ô #test-course + `window.TypingEaseTestCourses`
  ({khoá: [chỉ số đoạn]}); typing-test.js chỉ dùng các đoạn đó, nhớ lựa chọn. Hiện chỉ trang Hindi có ô.
  Máy sinh báo lỗi nếu một họ gõ được < 4 đoạn.
- tro-choi/games.js: lọc kho từ theo bố cục ĐANG CHỌN (ký tự chính/Shift/AltGr, chữ hoa, dấu ghép bằng
  phím chết ´ ` ^ ~ ¨ ¸); không lọc vi (Telex) và ko (bộ gõ ghép); còn < 60 từ thì giữ nguyên kho.
- 110/110 PASS. sw.js v20.

---

# 2026-09-26 — Đợt 2: bật 5 trang test + 5 trang trò chơi

Chủ site chọn "bật 1 đợt ngay" thay vì đợi 1–2 tuần. Vẫn giữ nhịp tung dần (chống nội dung hàng loạt):
đợt này 10 trang, 16 ngôn ngữ test và 16 ngôn ngữ game vẫn `live: false`.
- Test: it /it/test-di-battitura/, nl /nl/typetest/, pl /pl/test-pisania/, ru /ru/test-skorosti-pechati/,
  tr /tr/klavye-hiz-testi/.
- Trò chơi: ko /ko/taja-geim/, ja /ja/typing-games/, th /th/kem-fuek-phim/, it /it/giochi-di-dattilografia/,
  nl /nl/typespelletjes/.
- Mỗi trang: bỏ `live: false`; routes.test/games ở ui.<L>.js (chỉ test), bai-hoc/config.<L>.mjs (+ nav),
  landing-i18n.js (routes + nhãn nav); thêm link vào menu /<L>/index.html; sitemap. Chạy lại generate.mjs
  cho 8 ngôn ngữ, family/progress/test/game/legal/tasters/seo-head — mọi `--check` khớp.
- e2e 11h/11i không còn danh sách cứng: đọc slug từ kiem-tra-toc-do-go/text và tro-choi/text, lấy URL có
  trong sitemap. Đợt sau chỉ cần bật, test tự phủ.
- sw.js v21.

---

# 2026-09-26 — Đợt 3: thêm 5 trang test + 5 trang trò chơi

Chủ site yêu cầu bật đợt 3 ngay sau đợt 2 (cùng ngày).
- Test: ko /ko/taja-teseuteu/, ja /ja/typing-test/ (thay trang chuyển hướng cũ → bỏ dòng đó khỏi
  REDIRECTS của e2e 11b), th /th/thotsop-phim/, uk /uk/test-shvydkosti-druku/, id /id/tes-mengetik/.
- Trò chơi: pl /pl/gry-do-pisania/, ru /ru/igry-dlya-pechati/, tr /tr/klavye-oyunlari/,
  uk /uk/ihry-dlia-druku/, id /id/game-mengetik/.
- Có 14 trang test sinh + 2 viết tay, 16 trang trò chơi. Còn chờ (cả test lẫn game): ar bn zh zh-tw fil he hi
  ms fa sw ur.
- sw.js v22.

---

# 2026-09-26 — Đợt 4 + 5: mọi ngôn ngữ còn lại

Chủ site yêu cầu bật luôn đợt 4 và 5 rồi deploy. Test + trò chơi cho ms fil sw zh zh-tw ar fa ur he hi bn
(22 trang). Giờ cả 27 ngôn ngữ đều có trang test (25 sinh + 2 viết tay) và trang trò chơi (27), không còn
file chữ nào `live: false`. Cách chống spam từ nay dựa vào chất lượng từng trang (nội dung riêng mỗi
ngôn ngữ, một trang mỗi ngôn ngữ, không trang theo thời lượng), vì không còn tung dần được nữa.
sw.js v23.
