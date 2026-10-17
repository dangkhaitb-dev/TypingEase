# Trang chủ đa ngôn ngữ và cấu trúc H2

Ngày kiểm tra: 2026-10-18

Đã rà 27 trang chủ đang render: EN, VI, 24 locale khác trong bộ keyword người dùng và Hebrew ngoài bộ keyword. Mỗi trang có một H1, chín H2 tổng và năm mục hướng dẫn riêng cho ngôn ngữ. Các câu chữ trang trí trong phần giới thiệu sản phẩm đã chuyển về đoạn hiển thị, còn H2 dành cho nhóm nội dung có ý nghĩa.

EN/VI: các H2 nay nêu rõ typing test, touch typing, typing practice, WPM/accuracy; VI nêu luyện gõ 10 ngón, bàn phím/bộ gõ, test tốc độ gõ. ES, PT-BR, JA, KO, TH được sửa H1 theo truy vấn chủ chốt từ bộ keyword. Copy PT-BR sửa cách nói Bồ Đào Nha châu Âu trong phần chính.

Các locale khác có nội dung hướng dẫn 5 phần theo tình huống thật: chọn bài học hay test; đối chiếu layout và bộ gõ; một buổi luyện có mục tiêu; đọc tốc độ cùng độ chính xác; quan điểm ngắn về thói quen gõ. Đường dẫn liên kết đến đúng khóa, bài test và game của locale khi có. Nội dung nằm tại content/home và được renderer Eleventy đặt vào trang chủ; không chỉnh tay dist.

## Kiểm tra

- npm run build: đạt ở lần chạy cuối; npm run check: đạt. Lần build đầu va chạm với tác vụ khác đang chép dữ liệu bài học, báo ENOENT cho file bài UR; chạy lại sau đó đạt.
- Phân tích HTML 27 trang: H1 đúng một, H2 đúng chín, 5 section hướng dẫn, không trùng ID, không sai anchor nội bộ. 0 link nội bộ hỏng.
- Browser thật: 20 lượt desktop 1440px/mobile 390px cho EN, VI, ES, PT, JA, KO, TH, AR, ZH-TW, HE. Không tràn ngang; H1 và liên kết mục lục đạt. Đã xem ảnh desktop/mobile của ES, PT, JA, AR.
- Sitemap lastmod đã cập nhật đúng 27 homepage sang 2026-10-18.
- Các ngôn ngữ AM, HA, YO, IG trong keyword seed chưa có homepage ready trong dự án. Hebrew là locale ngoài seed đang có trang.

## Phạm vi các trang khác

Đã kiểm tra thêm 125 URL của 25 locale ngoài EN/VI: trang chủ, khóa học, test, game và bài viết WPM/tốc độ. Tất cả tồn tại và kiểm tra tĩnh không phát hiện lỗi H1, meta description, canonical, JSON-LD, ID hoặc link nội bộ. Đây là kiểm tra cấu trúc; không thay thế rà soát câu chữ từng ngôn ngữ hay thử toàn bộ chức năng. Nguồn bài học đang được sửa song song trong workspace, nên trạng thái nội dung ngoài homepage có thể còn thay đổi. Không ép tất cả trang đạt 1.500–2.000 từ khi văn bản đó không tạo thêm ích lợi cho người học. Số lượng từ theo khoảng trắng không áp dụng cho JA, ZH, TH.

## Jev

6 lượt ở nhánh audit/cập nhật locale và xác minh cuối (audit 2, nội dung 2, root 2). Đã bác xếp hạng ưu tiên của một lượt rerank vì không khớp volume người dùng cung cấp. Các kết luận confidence thấp về phạm vi locale và browser được kiểm tra trực tiếp bằng danh sách route, số section và kết quả 20 lượt xem.

Bằng chứng chi tiết: `home-languages.json`, `home-browser.json`, `locale-page-inventory.json`, `locale-static-qa.json` và ảnh `home-<locale>-<viewport>.png` cùng thư mục.
