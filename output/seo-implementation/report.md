# Triển khai content SEO EN/VI — 17/10/2026

Đã hoàn thành 10 trang pilot bằng ba agent: Sol 6.1 phụ trách homepage và test/practice; Astra phụ trách course và guide. Chưa deploy, chưa viết lại toàn bộ thị trường.

Nội dung ưu tiên nhiệm vụ thực tế: chọn bài, xác định lỗi, đọc WPM và accuracy, dùng văn bản riêng, hiểu tiến độ lưu tại trình duyệt. FAQ trả lời thao tác cụ thể. Quan điểm của chủ project được đưa vào đúng ngữ cảnh học có chủ đích khi bắt đầu sử dụng bàn phím và chuẩn bị kỹ năng máy tính cho trẻ. Không bịa trải nghiệm, không hứa trẻ chắc chắn học nhanh hơn, không gán lợi ích cho việc “chưa có trí nhớ cơ”.

## Số từ

Đếm theo khoảng trắng trong HTML main, bỏ navigation, script và control; tiếng Việt là số đơn vị phân tách bởi khoảng trắng, không phải phân đoạn từ ngôn ngữ học. Với khóa học chỉ tính phần biên tập, không tính danh sách bài.

| Trang | Số từ gần đúng |
|---|---:|
| `/` | 1548 |
| `/vi/` | 1817 |
| `/typing-test/` | 1580 |
| `/kiem-tra-toc-do-go/` | 1836 |
| `/practice/` | 1715 |
| `/luyen-tu-do/` | 1912 |
| `/lessons/` | 1641 |
| `/bai-hoc/` | 1732 |
| `/touch-typing/` | 1718 |
| `/cach-go-10-ngon/` | 1673 |

Toàn bộ main của hai khóa học dài hơn 2.000 từ vì có catalogue 156/173 bài. Không kéo dài mô tả để nhồi từ khóa. Mỗi trang có một H1; H2/H3 chia theo vấn đề người học. H4 chỉ cần khi có phân cấp thực sự.

## Thay đổi và kiểm chứng

- Bổ sung dữ liệu nội dung: `content/home/editorial.en-vi.mjs` và `content/roadmaps/editorial.en-vi.mjs`; homepage render qua `tooling/lib/home-seo-content.mjs`; tích hợp renderer đúng EN/VI.
- Cập nhật sáu source test/practice/guide, metadata homepage, sitemap lastmod cho 10 URL.
- Thêm CSS scoped cho bài đọc course, giới hạn chiều rộng 72ch.
- `npm run build`, `npm run check`, `git diff --check`: đạt.
- Static check 10 trang: không thiếu canonical/description, không trùng ID, không thiếu link nội bộ dạng file, JSON-LD parse được; executable scripts và ID cũ giữ nguyên. Không kiểm tra tất cả fragment link.
- Browser 20 lượt desktop/mobile: mỗi trang một H1, không tràn ngang, không ghi nhận console.error/runtime error.
- Smoke chức năng test EN/VI: nhập đoạn đầu đúng, accuracy100%, errors0, reset thành công. Practice EN/VI: nạp đoạn riêng, nhập đúng, hoàn thành với accuracy100%.
- Smoke dùng CDP nhập văn bản và DOM click cho nút; không gọi đây là kiểm thử chuột end-to-end. Các lượt click vật lý tự động trước đó không ổn định trên tab nền.
- Đã xem ảnh guide, practice, course và homepage. Ảnh homepage với animation mặc định trên tab nền bị trắng/mờ; chế độ reduced-motion hiển thị nội dung rõ. Chưa xác nhận toàn bộ animation mặc định ở foreground.
- 53 HTML course ngoài pilot chỉ đổi URL CSS fingerprint dùng chung; thay ngược fingerprint trong bộ nhớ cho SHA-256 khớp baseline 53/53. Nội dung các trang này không bị dịch/chèn prose EN/VI.
- Không sửa thay đổi có sẵn của người dùng tại `11ty/client/keyboard/hands-3d.js`.

## Phạm vi còn lại

Các thị trường khác vẫn theo kế hoạch, chưa triển khai content hàng loạt. Chưa có dữ liệu xếp hạng sau xuất bản; không cam kết traffic, FAQ rich result hay trích dẫn AI. Bộ keyword và volume là đầu vào của người dùng, không phải số liệu mới được xác minh trong lượt triển khai này.

## Jev

7 lượt gọi trong đợt triển khai và kiểm tra này. Hai kết luận mâu thuẫn độ tin cậy thấp (lịch sử test dùng chung và HTML đổi URL stylesheet) bị bác sau kiểm tra source/hash trực tiếp. Một kết luận “thiếu bằng chứng” về phạm vi EN/VI được kiểm tra thủ công từ danh sách file và renderer. Các kết luận build/static/smoke cuối được Jev xác nhận. Jev chỉ hỗ trợ rà soát, không thay kiểm chứng.

Bằng chứng: `static-checks.json`, `browser-checks.json`, `tool-smoke.json` và ảnh cùng thư mục. Kế hoạch tổng thể nằm ở `../seo-plan/ke-hoach-seo-content.md`.

## Làm rõ nguồn chỉnh sửa

`11ty/site/**/*.html` là source Eleventy theo cấu hình dự án, không phải HTML đầu ra. `.generated/site/` và `dist/` chỉ được tạo qua build, không sửa tay. Nội dung homepage đã được tách khỏi tooling sang `content/home/editorial.en-vi.mjs`; renderer chỉ dựng markup từ dữ liệu.
