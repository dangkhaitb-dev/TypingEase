# Kế hoạch phân phối keyword và biên tập SEO — TypingEase

Ngày nghiên cứu: 17/10/2026. Phạm vi: nghiên cứu Google Search Central/web.dev, bộ seed keyword người dùng cung cấp, route và tính năng của project. Đây là kế hoạch; chưa thay đổi website hay xuất bản bài.

**Quyết định chính**

Xây nội dung quanh việc người dùng muốn hoàn thành: chọn cách học, làm test, đọc kết quả, sửa một lỗi cụ thể, luyện tiếp. Mỗi nhu cầu có một trang chủ lực; keyword giúp diễn đạt và kết nối nhu cầu đó với truy vấn. Không lấy cột L1–L4 trong spreadsheet làm cấp H1–H4.

Mục tiêu biên tập của chủ project là 1.500–2.000 từ cho mỗi landing/bài SEO được chọn. Công cụ xuất hiện trước phần giải thích dài. Không áp chỉ tiêu này cho player, tiến độ, redirect hoặc trang pháp lý. Google không quy định số từ, số heading hay mật độ keyword lý tưởng. Vì vậy, số từ là ngân sách nội dung của dự án, không phải điều kiện xếp hạng. [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

**1. Cách dùng volume và làm sạch bộ keyword**

Bảng hiện có 30 thị trường; route project đối chiếu được 26 ngôn ngữ trong bảng. Project còn có Hebrew nhưng người dùng chưa cung cấp seed cho ngôn ngữ này. Chưa có nguồn công cụ, tháng dữ liệu, phạm vi quốc gia, loại đối sánh hoặc số truy vấn thực tế; giữ nguyên dải volume đã cung cấp, không coi đó là số đo đã kiểm chứng.

Quy trình cho từng keyword:

1. Lưu nguyên truy vấn và ngôn ngữ, quốc gia nghiên cứu riêng biệt. EN không đồng nghĩa chỉ US; AR không đồng nghĩa toàn bộ nhu cầu chỉ ở Saudi Arabia.
2. Tách các cụm đang dính nhau thành từng dòng; chuẩn hóa khoảng trắng, Unicode; giữ bản có dấu để xuất bản.
3. Nhóm biến thể cùng nhu cầu: `mecanografia/mecanografía`, `타자연습/타자 연습`, đảo trật tự từ, online/free khi tính năng đúng. Không tạo một URL cho mỗi biến thể.
4. Bổ sung nguồn/ngày/geo/volume, truy vấn Search Console nếu có, mẫu kết quả tìm kiếm, URL đang phục vụ nhu cầu, mức phù hợp tính năng và người duyệt bản địa.
5. Chọn primary keyword sau khi đối chiếu intent. Một từ lượng tìm kiếm cao nhưng sai tính năng không được ưu tiên hơn một từ phù hợp.

Không cộng các dải 1M–10M của `typing test`, `typing speed test`, `type test` để tuyên bố tổng nhu cầu 3M–30M. Dữ liệu có thể gộp biến thể hoặc chồng lấn. Không suy ra keyword không ghi volume là volume thấp.

| Dải người dùng cung cấp | Ví dụ | Cách dùng trong kế hoạch |
|---|---|---|
| 1M–10M | EN typing/test; JA タイピング/タイピング練習 | Ưu tiên nghiên cứu trang chủ lực; chưa đủ căn cứ so sánh thứ hạng giữa các từ cùng dải |
| 100K–1M | EN practice/touch typing; ES mecanografía; KO 타자연습; TH ฝึกพิมพ์ | Xây landing hoặc khóa học đúng nhiệm vụ; không ép vào trang test |
| 10K–100K | VI luyện gõ 10 ngón; TR klavye hız testi; KO 한글 타자 연습 | Ưu tiên nếu sản phẩm và khả năng duyệt bản địa phù hợp |
| 1K–10K | TR klavye çalışması | Keyword phụ của khóa học/luyện tập, cần xác minh intent |
| Chưa có | Phần lớn long-tail và thị trường khác | Dùng như giả thuyết; ưu tiên câu hỏi giúp hoàn thành tác vụ, không tự gán số |

Thứ tự xét: tính năng đáp ứng → intent → chất lượng nội dung có thể tạo → nhu cầu đã kiểm chứng → công sức. Volume quyết định mức đầu tư giữa các trang phù hợp, không quyết định thứ tự mọi đề mục.

**2. Kiến trúc nội dung và ownership của keyword**

| Nhóm trang | Người dùng muốn gì? | Trang sở hữu nhu cầu | Không đưa vào trang này |
|---|---|---|---|
| Homepage ngôn ngữ | Tìm nơi học/luyện phù hợp | Head rộng, định hướng sang test/khóa học/luyện | Toàn bộ hướng dẫn WPM và giáo trình chi tiết |
| Test | Biết tốc độ và độ chính xác hiện tại | test, speed test, online/free, accuracy, thời lượng | Chẩn đoán phần cứng, lời hứa chứng chỉ chưa có |
| Khóa học/lộ trình | Biết bắt đầu ở đâu và học theo thứ tự | tutor, course, learn, beginner, 10 fingers | Toàn bộ bài lý thuyết nhập môn lặp lại từ guide |
| Luyện tự do | Có bài tập để làm ngay | practice, exercises, training | Bài giới thiệu dài trước vùng nhập |
| Guide phương pháp | Hiểu và thực hành một kỹ năng | touch typing/cách gõ, cách tăng tốc, sửa lỗi | Liệt kê mọi tính năng để bán công cụ |
| Định nghĩa/chỉ số | Hiểu công thức và giới hạn | WPM là gì, PPM, các đơn vị địa phương | Benchmark không nguồn |
| Benchmark | Biết nên so kết quả với điều kiện nào | average speed, tốc độ trung bình | Một ngưỡng “giỏi” cho mọi ngôn ngữ/thiết bị |
| Game | Luyện qua một cơ chế chơi thật | typing game, challenge, race phù hợp | Multiplayer/competition chưa tồn tại |

Trang cùng chủ đề vẫn có thể dùng chung vài từ một cách tự nhiên. Ownership có nghĩa một trang là đích chính cho một nhu cầu; không phải cấm nhắc từ đó ở các trang liên quan. Đánh giá sự trùng lặp bằng nhiệm vụ và nội dung, không chỉ bằng số lần xuất hiện keyword.

Luồng đề xuất: homepage ngôn ngữ → test hoặc lộ trình → công cụ học; test → giải thích kết quả → bài luyện phù hợp; bài hướng dẫn → bài thực hành. Menu và liên kết nội dung dùng `<a href>`, anchor mô tả đích như “Cách tính WPM”. Đây là khuyến nghị điều hướng, không có số link lý tưởng. [Google về liên kết](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

**3. Phân bổ cụ thể EN và VI — đợt triển khai đầu**

| URL hiện có | Primary candidate | Nhóm phụ/intent | Volume primary từ seed | Mục đích riêng |
|---|---|---|---|---|
| `/` | typing | Khám phá sản phẩm | 1M–10M | Chọn ngôn ngữ, layout, cách bắt đầu |
| `/typing-test/` | typing test | typing speed test, type test, online, WPM test, accuracy, 1/2/3/5/10 minute | 1M–10M | Test trước, giải thích đúng kết quả sau |
| `/practice/` | typing practice | exercises, training, touch typing practice | 100K–1M | Luyện ngay và biết chọn bài |
| `/lessons/` | typing tutor | learn touch typing, beginner, course | 10K–100K | Lộ trình khóa học, khác bài lý thuyết |
| `/touch-typing/` | touch typing | 10 finger typing, vị trí tay, phương pháp | 100K–1M | Học nguyên lý và thử thao tác |
| `/what-is-wpm/` | WPM meaning | WPM calculation | Chưa có; keyword mở rộng | Công thức, ví dụ, giới hạn |
| `/average-typing-speed/` | average typing speed | So sánh điểm có điều kiện | 10K–100K | Benchmark có nguồn |
| `/how-to-type-faster/` | how to type faster | Cải thiện tốc độ | Chưa có; mở rộng theo intent seed | Chẩn đoán và kế hoạch luyện |
| `/typing-games/` | typing game | typing challenge, typing race | Chưa có | Chọn trò, hiểu luật và ghost |
| `/vi/` | luyện gõ 10 ngón | gõ 10 ngón | 10K–100K | Chọn lộ trình phù hợp |
| `/kiem-tra-toc-do-go/` | test tốc độ gõ | test tốc độ gõ phím, kiểm tra tốc độ đánh máy, test WPM tiếng Việt, thời lượng | Chưa có | Đo và đọc kết quả |
| `/bai-hoc/` | học gõ 10 ngón | bài tập gõ 10 ngón | Chưa có | Chọn bài và hiểu lộ trình |
| `/luyen-tu-do/` | luyện gõ bàn phím | luyện đánh máy, luyện gõ phím | Chưa có | Luyện ngay |
| `/cach-go-10-ngon/` | cách gõ 10 ngón | Vị trí tay, thói quen nhìn bàn phím | Chưa có; mở rộng theo intent seed | Hướng dẫn thao tác |
| `/wpm-la-gi/` | WPM là gì | Cách tính WPM | Chưa có; mở rộng theo intent seed | Hiểu phép đo |
| `/wpm-bao-nhieu-la-nhanh/` | tốc độ gõ trung bình | WPM bao nhiêu là nhanh | Chưa có | So sánh đúng điều kiện |
| `/cach-tang-wpm/` | cách tăng tốc độ gõ | Cách tăng WPM | Chưa có | Chọn điểm cần luyện |
| `/tro-choi/` | trò chơi gõ phím | Game luyện gõ | Chưa có; mở rộng từ sản phẩm | Chọn trò và hiểu luật |

Các keyword mở rộng được ghi rõ; không coi là số liệu người dùng đã nghiên cứu. Các cặp home/course/guide cần kiểm tra SERP và query thực sau triển khai; không đồng thời tối ưu cả ba thành cùng một lời hứa.

Toàn bộ 30 thị trường nằm trong `keyword-page-map.csv`: 196 dòng kế hoạch, gồm trang hiện có, section trên trang và mục nghiên cứu. Đây không phải 196 URL cần tạo. Keyword phụ là các biến thể tiêu biểu được tách từ seed; các nhóm còn lại xử lý theo quy tắc ở mục 4. Đây chưa phải bản xuất đầy đủ từng keyword từ một công cụ đo volume.

**4. Các nhóm keyword phải xử lý riêng**

| Nhóm trong bộ seed | Phân bổ/quyết định |
|---|---|
| Mọi biến thể test 1/2/3/5/10 phút | Section trong trang test locale. Chỉ tách URL khi có nhu cầu, trải nghiệm và nội dung đủ khác; không tạo năm bài đổi số phút |
| Online/free | Secondary của trang test nếu trải nghiệm thực đáp ứng; không tạo trang “free” và “online” gần giống |
| Beginner | Hướng dẫn bắt đầu trong course hoặc test; chỉ tách beginner course nếu giáo trình khác có thật |
| Kids/children | Backlog nghiên cứu độ tuổi, nội dung, hướng dẫn giáo viên/phụ huynh. Không đổi title rồi gọi là khóa trẻ em |
| Keyboard test, test bàn phím, tes keyboard, test de teclado và tương đương | Kiểm tra SERP: có thể là phím hỏng/ghosting. Chưa gán vào speed test; cần công cụ riêng nếu muốn đáp ứng intent phần cứng |
| `fast 10 finger` | Chưa chốt ownership: có thể là truy vấn chung hoặc thiên về thương hiệu. Kiểm tra SERP thị trường trước; không dùng làm tên TypingEase |
| `type the alphabet` | Chỉ có landing khi có bài A–Z và cách chấm thật; không coi free practice bất kỳ là đủ |
| Online typing competition | Chưa nhắm lời hứa thi đấu nhiều người. Hiện game có ghost, không phải multiplayer |
| Typing race/challenge/game | Trang game hiện có, giải thích cơ chế thực |
| Cangjie/倉頡打字練習/倉頡打字測試 | Chưa xác minh hỗ trợ; backlog sản phẩm, không đưa vào H1 Zhuyin |
| Q/F klavye | Có nhu cầu layout riêng; liên kết khóa F hiện hữu khi đúng chức năng. Cần kiểm tra chế độ test Q/F trước khi hứa test riêng |
| Speed/words per minute không có “test” | Phân biệt định nghĩa, benchmark hay công cụ bằng SERP và query; không tự dồn tất cả vào trang test |
| FIL/SW dùng keyword tiếng Anh | Không chứng minh người dùng tìm nội dung bằng Filipino/Swahili. Cần tách ngôn ngữ truy vấn và ngôn ngữ nội dung |
| AM/HA/YO/IG | Chưa có locale/khóa học đã xác minh. Không tạo landing hứa hỗ trợ chỉ từ bộ từ tiếng Anh |

Mẫu kết quả kiểm tra cho `keyboard test` có các công cụ kiểm tra phím phản hồi, nên cần tách intent này. Đây là khảo sát giới hạn, không phải SERP audit đầy đủ của 30 quốc gia. [Ví dụ công cụ tự mô tả](https://www.keyboardtest.org/)

**5. Quy tắc H1–H4 và cách đặt keyword**

| Thành phần | Quy tắc biên tập | Ví dụ trang test VI |
|---|---|---|
| Title | Nêu nhu cầu chính, điểm khác biệt thật, thương hiệu nếu gọn | Test tốc độ gõ tiếng Việt: WPM và độ chính xác \| TypingEase |
| H1 | Một tiêu đề chính rõ ràng theo quy ước team; keyword chính/biến thể tự nhiên | Test tốc độ gõ tiếng Việt |
| Mở đầu | Trả lời đây là công cụ gì, dành cho ai, làm bước gì; không lặp nguyên H1 | Chọn thời lượng rồi gõ theo đoạn mẫu… |
| H2 | Những việc/câu hỏi chính theo thứ tự người dùng cần | Chọn thời lượng; Đọc kết quả; Luyện gì tiếp |
| H3 | Nhánh thực sự của H2, có thể chứa long-tail phù hợp | Test 1 phút; Test 5 phút; Test 10 phút |
| H4 | Chỉ khi H3 có vấn đề nhỏ cần tách; không bắt mọi trang phải có | Trong H3 “Thiết lập bộ gõ”: kiểm tra chế độ nhập cụ thể, nếu có nội dung thật |
| Meta description | Tóm tắt đúng trải nghiệm và kết quả trang | Đo WPM và độ chính xác… chọn bài luyện tiếp… |
| Anchor | Mô tả ích lợi trang đích | Xem cách tính WPM |
| Alt ảnh | Mô tả ảnh có ý nghĩa; không nhét keyword | Vị trí ngón trỏ trên hai phím F và J |

Không đặt primary vào mọi H2/H3. Không dùng “Test tốc độ gõ tốt nhất”, “Test tốc độ gõ số 1”, “Test tốc độ gõ nhanh nhất” thành ba heading rỗng. Không bẻ câu bản địa để khớp nguyên seed sai ngữ pháp.

Title 50–60 và description 150–160 ký tự có thể dùng để preview, không phải giới hạn Google. Google có thể chọn title link/snippet khác từ nội dung trang. [Title links](https://developers.google.com/search/docs/appearance/title-link), [Snippets](https://developers.google.com/search/docs/appearance/snippet)

Bản dàn ý H1–H4, keyword và ngân sách từng phần được cung cấp riêng trong `page-briefs.md`.

**6. Cách viết 1.500–2.000 từ có ích và tự nhiên**

Mỗi brief phải có: người đọc cụ thể; việc họ cần làm; điều họ đang vướng; bằng chứng/tính năng đã kiểm tra; nội dung riêng của trang; hành động tiếp theo.

Nguyên tắc giọng viết:

- Đi thẳng vào tình huống. “Bạn hay dừng lại ở các chữ có dấu?” hữu ích hơn “Trong kỷ nguyên số, kỹ năng đánh máy ngày càng quan trọng”.
- Giải thích nguyên nhân và thao tác. Thay “hãy nâng cao độ chính xác” bằng một ví dụ người đọc làm được.
- Dùng câu dài/ngắn theo ý nghĩa; không cố thêm tiếng lóng, lỗi chính tả hoặc câu kể giả để trông như người viết.
- Dùng thuật ngữ quen thuộc với từng thị trường. Bản dịch cần sửa cả ví dụ, thiết bị, layout và phương thức nhập.
- Viết “chúng tôi đã thử” chỉ khi có bản ghi thử. Không bịa tác giả, đánh giá, số người dùng hoặc chuyện tiến bộ.
- Không hứa “đạt 100 WPM trong 7 ngày”. Mục tiêu tiến bộ phải phụ thuộc trình độ, bài test và điều kiện.
- Viết title/description cuối cùng để khớp nội dung; đọc thành tiếng và cắt đoạn có thể đặt nguyên vào mọi website.

Ví dụ biên tập, không phải trích lời người dùng:

> Bạn vừa làm xong một bài test và thấy WPM thấp hơn hôm qua? Trước khi kết luận mình gõ chậm đi, hãy xem hai bài có cùng thời lượng, ngôn ngữ và loại văn bản không. Một đoạn có dấu câu hoặc nhiều từ lạ sẽ khiến bạn dừng lại nhiều hơn. Chọn lại điều kiện giống nhau rồi so cả tốc độ lẫn độ chính xác; như vậy bạn mới biết mình nên luyện thêm phần nào.

Nội dung 1.500–2.000 từ tính phần chính của trang, không cộng menu, footer, schema hoặc đoạn ẩn cho bot. Có thể dùng mục lục và disclosure tương tác để người dùng chọn đọc; không che nội dung với người dùng trong khi cố cung cấp riêng cho crawler.

Với JA/ZH/TH và ngôn ngữ không tách từ bằng dấu cách, không lấy whitespace count để nghiệm thu. Định nghĩa word segmentation theo locale nếu cần đếm; ưu tiên nội dung tương đương về độ sâu và có người bản địa duyệt. Không dịch rồi chèn khoảng trắng để đủ quota.

**7. FAQ thật: câu hỏi có ích, câu trả lời kiểm chứng được**

Ở giai đoạn kế hoạch, gọi là “câu hỏi đề xuất từ tác vụ và hành vi sản phẩm”. Chỉ gọi “thường gặp” theo nghĩa có dữ liệu khi đã có support log, phỏng vấn, query hoặc khảo sát. Câu hỏi do biên tập đề xuất vẫn có ích nếu vấn đề và câu trả lời là thật.

Nguồn lấy câu hỏi: query Search Console; câu hỏi support; quan sát người mới làm test; tình huống lỗi tái hiện được; giới hạn tính năng. Mỗi FAQ lưu: câu hỏi, lý do cần trả lời, bằng chứng, người duyệt, ngày kiểm tra.

Mẫu câu trả lời đã đối chiếu nội dung sản phẩm, cần smoke-test runtime trước xuất bản:

| Câu hỏi | Câu trả lời ngắn có thể dùng | Bằng chứng source |
|---|---|---|
| Test tiếng Nhật có cần bật IME không? | Không. Với bài test hiện tại, chuyển IME sang chế độ tắt/半角英数 và gõ chuỗi romaji đúng mẫu. Bài này đo phần gõ trước chuyển đổi, không đo thao tác chọn kana/kanji. | `content/typing-test/ja.mjs:39`, `:65` |
| Điểm test pinyin có phải số chữ Hán/phút không? | Không. Test hiện dùng pinyin không dấu thanh và chấm ký tự của chuỗi đó. Không quy đổi trực tiếp điểm này thành số chữ Hán nhập được mỗi phút. | `content/typing-test/zh.mjs:5`, `:16` |
| WPM tiếng Hàn có đổi thẳng thành 타수 được không? | Không có một hệ số cố định phù hợp mọi đoạn văn. Test hiện đếm âm tiết đã ghép cùng khoảng trắng/dấu câu, còn số lần nhấn phím phụ thuộc cách ghép từng âm tiết. | `content/typing-test/ko.mjs:27`, `:42`, `:64` |
| Ghost Race có đua với người chơi trực tuyến không? | Hiện đối thủ là ghost theo mức WPM hoặc kỷ lục của chính bạn; không phải người chơi trực tuyến khác. | Kiểm tra game đã thực hiện trong audit tính năng; cần giữ đồng bộ khi phát hành multiplayer |

Câu hỏi VI nên xác thực tiếp: “Sửa lỗi bằng Backspace ảnh hưởng điểm thế nào?”, “Bài test có tính dấu cách và dấu câu không?”, “Khi nào nên chọn 1 phút thay vì 5 phút?”, “Tôi nên luyện phím hay luyện bộ gõ trước?”. Không viết sẵn công thức tính điểm từ trí nhớ; đọc implementation và thử bằng input đã biết.

Không lặp cùng một FAQ trên mọi page. Không thêm 15 câu hỏi chỉ để chứa keyword. Thông thường 4–6 câu đúng vấn đề là đủ cho brief, nhưng đây là quy ước đề xuất, không phải chuẩn Google.

FAQ hữu ích không phụ thuộc rich result. Google đã ngừng FAQ rich results từ 7/5/2026; đừng dùng lợi ích hiển thị FAQ schema làm mục tiêu của kế hoạch. [Google Search updates](https://developers.google.com/search/updates)

**8. GEO/AEO trong kế hoạch này**

AEO được dùng ở đây theo nghĩa giúp người đọc/hệ thống tìm được câu trả lời rõ; GEO theo nghĩa tăng khả năng nội dung được hiểu và tham chiếu trong trải nghiệm tìm kiếm tạo sinh. Không bảo đảm được trích dẫn.

Đề xuất cho TypingEase:

1. Đặt câu trả lời trực tiếp ngay dưới heading hỏi đáp, sau đó giải thích điều kiện và ví dụ. Không cố ép mọi đoạn thành một độ dài chung.
2. Công khai cách đo: input nào được tính, lỗi đã sửa xử lý ra sao, công thức/đơn vị theo locale, điều kiện không so sánh được.
3. Tạo nội dung riêng từ công cụ: ví dụ thao tác có thể tái hiện, ảnh layout đúng, giải thích hành vi thật. Tránh gom mẹo chung từ nhiều bài thành một bài dài.
4. Dẫn nguồn ngay cạnh benchmark hoặc kết luận cần nguồn; ghi người phụ trách và ngày sửa khi thay đổi có ý nghĩa.
5. Giữ câu trả lời, metadata, canonical và liên kết trong HTML đầu ra. Structured data chỉ mô tả đúng loại nội dung và dữ kiện hiển thị; kiểm tra theo tài liệu hiện hành cho từng loại.
6. Với engine ngoài Google, kiểm tra tài liệu crawler/indexing chính thức của engine được chọn trước khi thay robots hoặc hứa có lợi ích từ file riêng. Lượt này chưa đánh giá đầy đủ Bing/ChatGPT/Perplexity.

Google nói nền tảng SEO vẫn áp dụng cho tìm kiếm tạo sinh; Google Search bỏ qua `llms.txt`, không cần schema đặc biệt hay văn bản viết riêng cho AI. Kết luận này chỉ nói về Google, không suy rộng thành mọi engine. [Hướng dẫn AI của Google](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

Schema cần phản ánh nội dung thực của trang; thêm markup không thay thế nội dung. [Google về structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

**9. SEO kỹ thuật cần giữ ổn định**

Điều kiện nền tảng để đủ khả năng index: Googlebot truy cập được, trang trả 200 và có nội dung indexable; đáp ứng không bảo đảm được index. Audit trước có request production trả 403 từ môi trường audit, nên cần URL Inspection để xác minh nguyên nhân trước khi kết luận. [Google technical requirements](https://developers.google.com/search/docs/essentials/technical)

Giữ Eleventy/static HTML hiện có; không đổi framework chỉ vì SEO. Google xử lý được JavaScript nhưng nội dung dựng sẵn giúp kiểm tra dễ hơn. [JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

Canonical, internal links và sitemap nên nhất quán; canonical là tín hiệu, không mệnh lệnh Google phải làm theo. [Canonicalization](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

Giữ URL từng locale hiện tại; không cần di chuyển `/pt/` sang `/pt-br/` hoặc gom mọi URL tiếng Việt vào `/vi/` chỉ để đẹp bảng. Hreflang HTML/HTTP/sitemap là các phương án tương đương; x-default được khuyến nghị, không bắt buộc. Các bản dịch phải tương đương về nhiệm vụ và có link đối ứng. [Localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions)

`lastmod` phản ánh thay đổi đáng kể, không phải ngày build; Google bỏ qua priority/changefreq. Sửa lỗi updater đã phát hiện thay vì đổi ngày đồng loạt. [Sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Mục tiêu trải nghiệm thực: LCP ≤2,5 giây, INP ≤200 ms, CLS ≤0,1 ở percentile 75, xét mobile/desktop. Chưa đo các chỉ số này cho project; không gọi điểm Lighthouse là bằng chứng field data. [Web Vitals](https://web.dev/articles/vitals)

**10. Triển khai theo đợt và nghiệm thu**

| Đợt | Việc làm | Đầu ra/điều kiện kết thúc |
|---|---|---|
| 0 — xác minh | Kiểm tra 403, Search Console, nguồn volume; chốt công thức và tính năng | Bảng sự thật, baseline, keyword ownership được duyệt |
| 1 — pilot VI/EN | Mỗi ngôn ngữ: test, course, practice, homepage, guide nhập môn | 10 trang được biên tập 1.500–2.000 từ/trang theo brief; công cụ không bị đẩy xuống; không lặp bài |
| 2 — nội dung hỗ trợ | WPM, benchmark, tăng tốc, game ở VI/EN | 8 trang được rà; benchmark chỉ phát hành khi có nguồn phù hợp |
| 3 — thị trường có sản phẩm | Theo năng lực duyệt native: JA/KO/TH/TR/ES và các locale còn lại | Test + course trước; homepage sau khi chốt vai trò; không nhân bản tự động toàn bộ |
| 4 — mở rộng cần nghiên cứu | FIL/SW English seeds; AM/HA/YO/IG; kids, hardware test, competition, Cangjie | Quyết định sản phẩm/nội dung trước khi cấp URL và giao bài |

Thứ tự locale ở đợt 3 là ứng viên theo seed và mức khác biệt sản phẩm; chưa phải bảng xếp hạng lợi nhuận/traffic. Chốt lại sau dữ liệu thị trường và khả năng duyệt nội dung. Không đặt deadline xuất bản hàng trăm bài trước khi thử quy trình trên pilot.

Checklist trước xuất bản mỗi trang:

- [ ] Nhu cầu và primary keyword rõ; không có trang khác đang giải quyết y hệt.
- [ ] Người dùng làm được việc chính ngay; phần dài nằm đúng vị trí.
- [ ] Title/H1 khớp chức năng; H2/H3 theo vấn đề; H4 chỉ khi cần.
- [ ] Đủ độ sâu và mục tiêu số từ; không có đoạn thêm chỉ để bù quota.
- [ ] Có ví dụ riêng, thao tác kiểm chứng được; số liệu/benchmark có nguồn.
- [ ] FAQ trả lời đúng, có bằng chứng; không bịa tần suất câu hỏi.
- [ ] Nội dung bản địa dùng đúng layout, đơn vị, phương thức nhập.
- [ ] Nội dung còn nguyên sau build; đặc biệt không bị home-presentation thay mất.
- [ ] Canonical/hreflang/sitemap và internal links nhất quán; không đưa player noindex thành SEO landing.
- [ ] Người biên tập đọc lại trên mobile/desktop và thử tác vụ chính.

Sau xuất bản: theo dõi query/page/country, impressions/clicks/CTR và index trong Search Console. Kết hợp tỷ lệ bắt đầu/hoàn thành test hoặc bài học; đây là chỉ số sản phẩm, không tuyên bố chúng là yếu tố ranking trực tiếp. So sánh theo nhóm trang, thiết bị, ngôn ngữ và ghi ngày thay đổi; không kết luận nguyên nhân từ CTR riêng lẻ. [Google Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start)

**Phương pháp và giới hạn**

Dùng skill seo-audit làm khung kiểm tra, ưu tiên tài liệu Google hiện hành khi checklist cũ nói khác. Nghiên cứu phân công Sol 6.1 phần kỹ thuật, Astra phần biên tập, agent chính tích hợp keyword/brief. Chưa có keyword export có cấu trúc, dữ liệu GSC hay khảo sát SERP đầy đủ 30 thị trường; bảng là kế hoạch triển khai có điều kiện, không dự báo tăng hạng.

Jev: 16 lần gọi trong lượt nghiên cứu/lập kế hoạch này (không cộng 6 lần ở audit trước). Giữ khóa học trong đợt pilot dù không nằm trong top 10 của lượt rerank: lựa chọn này theo mục tiêu sản phẩm, không theo thứ hạng gợi ý. Một kết luận về cách phân bổ theo intent được Jev đánh dấu cần review; agent chính đã đối chiếu trực tiếp mục 1–3 của kế hoạch và giữ kết luận. Không có kết luận sự thật nào bị Jev báo contradicted. Jev chỉ hỗ trợ sàng lọc/xác minh, không thay thế kiểm chứng sản phẩm.


**Bổ sung giọng tác giả theo ý chủ project**

Áp dụng [Giọng viết và quan điểm cá nhân](giong-viet-va-quan-diem.md): khuyến khích hướng dẫn từ khi người học bắt đầu dùng bàn phím thường xuyên; coi sự quen thuộc với bàn phím là sự chuẩn bị hữu ích cho học tập. Được dùng “tôi” để thể hiện quan điểm thật của người viết. Phân biệt quan điểm với bằng chứng; không khẳng định trẻ chưa có trí nhớ cơ hoặc chắc chắn học nhanh hơn rất nhiều. Đặt đoạn này trong ngân sách từ hiện có, thay nội dung giới thiệu chung, không lặp trên mọi trang.
