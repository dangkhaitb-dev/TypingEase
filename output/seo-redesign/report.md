# Rà soát nội dung và thiết kế SEO — 17/10/2026

Đã cập nhật 18 trang EN/VI: homepage, khóa học, hướng dẫn gõ, test, luyện tự do, game và sáu bài về WPM/tốc độ. Chỉnh ở nguồn 11ty, content và renderer; không sửa tay HTML đầu ra. Chưa deploy.

## Nội dung

- H2 gọi đúng chủ đề và việc người đọc cần làm; không đặt keyword chỉ dựa vào volume và không bịa volume mới.
- Sáu bài WPM/tốc độ được thu gọn còn năm phần nội dung chính và một khối thực hành/đọc tiếp. Mục lục, ghi nguồn không còn là H2 ngang hàng với nội dung chính.
- Viết lại các bài tiếng Việt cũ; bỏ bảng xếp loại tốc độ thiếu nguồn và số lượng bài học lỗi thời. Giữ nguồn nghiên cứu, nêu giới hạn mẫu khi so sánh WPM.
- Game EN/VI có nội dung mới về Word Rain, Ghost Race và Key Hunt, luật chơi, điểm số, lỗi nhập và FAQ. Không quảng cáo multiplayer hay replay không có.
- Quan điểm cá nhân ngắn và gắn với cách luyện; không bịa trải nghiệm hay hứa trẻ học nhanh hơn.
- Không thêm đoạn cho đủ quota. Sáu bài viết khoảng 1.484–1.844 từ; game khoảng EN1.691, VI1.862 theo cách đếm biên tập của agent.

## Bố cục

- Shared `11ty/styles/seo-reading.css`: chiều rộng đọc 760px, nhịp H2/H3/đoạn văn, mục lục hai cột desktop và một cột mobile, FAQ và CTA nhất quán.
- Homepage chia khu vực bắt đầu, bàn phím, luyện tập, kết quả và quan điểm; khối mở đầu ba lựa chọn, phần sau tiêu đề bên trái và bài đọc bên phải trên desktop.
- Công cụ và catalogue giữ ở trên. Game ẩn hướng dẫn khi chơi và hiện lại khi quay về.
- Tiêu đề phụ của màn game đổi từ H1 ẩn sang H2; ID và giao diện được giữ.

## Kiểm tra

- Build và npm run check đạt; git diff --check đạt.
- Static18 trang: một H1, không trùng ID, link/fragment nội dung hợp lệ, JSON-LD parse được; executable scripts giữ nguyên so với baseline. Player hash routes được xử lý như route JS thay vì DOM anchor.
- 36 lượt đọc desktop/mobile cuối không có lỗi H1, tràn ngang hay console/runtime; ảnh được kiểm tra cho homepage, bài viết, luyện tự do, khóa học và game. Dùng reduced-motion để kiểm tra bố cục ổn định.
- 12 smoke checks cho3 mode game ×2 ngôn ngữ ×2 viewport: panel, tiêu đề, ẩn/hiện hướng dẫn, quay lại, overflow và lỗi runtime. Dùng DOM click trên Chrome; không phải kiểm thử hoàn tất toàn bộ vòng chơi bằng chuột/bàn phím.

## Heading trước và sau

| Trang | H2 trước | H2 sau |
|---|---:|---:|
| `/` | 12 | 12 |
| `/vi/` | 12 | 12 |
| `/typing-test/` | 10 | 9 |
| `/kiem-tra-toc-do-go/` | 10 | 9 |
| `/practice/` | 8 | 8 |
| `/luyen-tu-do/` | 8 | 8 |
| `/lessons/` | 21 | 21 |
| `/bai-hoc/` | 21 | 21 |
| `/touch-typing/` | 7 | 7 |
| `/cach-go-10-ngon/` | 7 | 7 |
| `/average-typing-speed/` | 11 | 6 |
| `/how-to-type-faster/` | 12 | 6 |
| `/what-is-wpm/` | 11 | 6 |
| `/cach-tang-wpm/` | 11 | 6 |
| `/wpm-bao-nhieu-la-nhanh/` | 10 | 6 |
| `/wpm-la-gi/` | 9 | 6 |
| `/typing-games/` | 8 | 11 |
| `/tro-choi/` | 8 | 12 |

Số H2 toàn trang có thể gồm heading công cụ. Việc gộp ưu tiên ý nghĩa và phân cấp, không áp dụng một quota H2 chung. Danh sách heading cụ thể nằm trong static-checks.json.

## Phạm vi và Jev

Nội dung dài mới/rà soát tập trung EN/VI. Các ngôn ngữ khác chưa được viết lại hàng loạt; renderer game dùng chung nhận sửa cấp heading và stylesheet, không bị chèn nội dung EN/VI.
8 lượt Jev trong đợt này (root1, homepage/review3, articles3, games1). Một kết luận mâu thuẫn độ tin cậy thấp về cascade CSS bị bác sau kiểm tra specificity; lỗi cascade thực tế đã sửa. Các nhận định confidence thấp còn lại được đối chiếu bằng source/check output.

Bằng chứng: static-checks.json, browser-checks.json, game-smoke.json và ảnh cùng thư mục.

Một lượt chạy lại bị lỗi do đoạn thu log của harness được chèn trùng (khai báo `old` hai lần), không phải mã ứng dụng. Đã mở lại tab kiểm tra sạch và chạy lại bốn game views: đạt.
