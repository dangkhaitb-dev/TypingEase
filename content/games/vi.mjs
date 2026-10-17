/* content/games/vi.mjs — chữ của trang trò chơi tiếng Việt (tooling/pages/games.mjs).
 * Tiếng Việt không có data/words/vi.js (khoá viết tay), nên kho từ nằm ở đây: từ thường ngày, có dấu,
 * gõ bằng Telex như trong Unit 3. Không tên riêng, không từ nhạy cảm. */
const WORDS = `
nhà cửa bàn ghế sách vở bút mực giấy trường lớp học bài thầy cô bạn bè mẹ cha anh chị em ông bà
cơm nước canh rau cá thịt trứng sữa bánh mì phở bún cháo chè trà cà phê đường muối tiêu ớt tỏi hành
sáng trưa chiều tối đêm ngày tháng năm tuần hôm nay mai qua sớm muộn nhanh chậm vui buồn khỏe mệt
đi đến về chạy nhảy bơi ngủ thức ăn uống nói nghe nhìn thấy đọc viết gõ phím chơi làm việc nghỉ
mưa nắng gió mây trời đất biển sông núi đồi rừng cây hoa lá cỏ quả trái chim cá mèo chó gà vịt
xanh đỏ vàng trắng đen tím hồng cam nâu xám sáng tối lớn nhỏ cao thấp dài ngắn rộng hẹp mới cũ
một hai ba bốn năm sáu bảy tám chín mười trăm nghìn triệu đầu cuối giữa trên dưới trong ngoài
xe đạp máy tàu thuyền đường phố chợ quán cửa hàng công viên thư viện bệnh viện sân bay ga bến
điện thoại máy tính bàn phím chuột màn hình mạng tin nhắn thư ảnh nhạc phim sách báo trang
yêu thương nhớ quên hiểu biết học hỏi thử cố gắng tập luyện kiên nhẫn chăm chỉ đều đặn chính xác
áo quần giày dép mũ nón túi ví đồng hồ kính khăn ô dù chăn gối giường tủ bếp phòng sân vườn
mùa xuân hạ thu đông tết lễ quà hoa đào mai bánh chưng pháo gia đình họ hàng làng quê thành phố
bác sĩ kỹ sư nông dân công nhân giáo viên học sinh sinh viên nhân viên đầu bếp ca sĩ họa sĩ
vui vẻ hạnh phúc bình tĩnh nhẹ nhàng cẩn thận tự tin thông minh khéo léo siêng năng hiền lành
bắt đầu kết thúc tiếp tục dừng lại quay về đi tiếp hoàn thành chiến thắng cố lên tuyệt vời
ngón tay bàn tay hàng phím dấu cách dấu chấm dấu phẩy chữ cái con số tốc độ lỗi sai điểm số
`.trim().split(/\s+/);

export default {
  worlds: {"rain": "Khu vườn đom đóm", "race": "Đường đua hoàng hôn", "keys": "Trạm không gian"},
  url: '/tro-choi/',
  title: "Trò chơi gõ phím: Mưa chữ, đua và săn phím | TypingEase",
  description: "Chơi ba trò luyện gõ phím miễn phí: Mưa chữ, Đua với bóng và Săn phím. Gõ tiếng Việt có dấu, chọn tốc độ xe bóng và luyện vị trí phím, không cần đăng ký.",
  breadcrumbAria: 'Đường dẫn',
  homeCrumb: 'Trang chủ',
  crumb: 'Trò chơi gõ phím',
  eyebrow: 'Luyện gõ mà như chơi',
  h1: "Trò chơi gõ phím miễn phí để luyện từ và vị trí bàn phím",
  intro: "Chọn một trò để bắt đầu: phá từ rơi trong Mưa chữ, gõ theo mốc tốc độ ở Đua với bóng hoặc tìm phím sáng trong Săn phím. Không cần đăng ký. Phần hướng dẫn bên dưới giúp bạn chọn việc cần luyện và hiểu kết quả.",
  tabsAria: 'Chọn trò chơi',
  locale: 'vi-VN',
  words: WORDS,
  howAria: "Cách chơi",
  how: {
    rain: ["Từ rơi từ trên xuống.", "Gõ đúng từ đó, có dấu như bình thường.", "Bấm Space để phá. Để lọt ba từ là thua."],
    race: ["Chọn tốc độ cho xe bóng.", "Gõ đoạn văn từ chữ đầu tiên.", "Về đích trước xe bóng là thắng."],
    keys: ["Một phím sáng lên trên bàn phím.", "Nhìn màn hình, bấm đúng phím đó.", "Trúng càng nhiều càng tốt trong 60 giây."]
  },
  modes: {
    rain: ['Mưa chữ', 'Gõ đúng từ đang rơi rồi bấm Space để phá nó.'],
    race: ['Đua với bóng', 'Gõ hết đoạn văn trước chiếc xe chạy đều.'],
    keys: ['Săn phím', 'Bấm trúng phím đang sáng, càng nhiều càng tốt trong 60 giây.']
  },
  rain: {
    difficulty: 'Độ khó', easy: 'Dễ', normal: 'Vừa', hard: 'Khó',
    score: 'Điểm', level: 'Màn', lives: 'Mạng', best: 'Kỷ lục',
    start: 'Bắt đầu', placeholder: 'Gõ từ đang rơi rồi bấm Space',
    hint: 'Gõ tiếng Việt có dấu bằng Telex (ví dụ: nhaf → nhà). Để lọt ba từ xuống đáy là hết lượt.'
  },
  race: {
    pace: 'Tốc độ xe bóng', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Bắt đầu đua', you: 'Bạn', ghost: 'Bóng', placeholder: 'Gõ đoạn văn ở trên, bắt đầu từ chữ đầu tiên'
  },
  keys: {
    start: 'Bắt đầu săn', time: 'Giây', hits: 'Trúng', streak: 'Chuỗi', best: 'Kỷ lục',
    hint: 'Nhìn màn hình, không nhìn tay. Phím được tra theo vị trí trên bàn phím, nên bộ gõ tiếng Việt bật hay tắt đều được.'
  },
  runtime: {
    over: 'Hết lượt', again: 'Chơi lại', newBest: 'Kỷ lục mới trên máy này!',
    rainResult: '{score} điểm · phá {words} từ · {wpm} WPM · {accuracy}% gõ trúng',
    raceReady: 'Xe bóng chạy {wpm} WPM. Bấm "Bắt đầu đua", rồi gõ chữ đầu tiên là xuất phát.',
    raceGo: 'Xuất phát!', raceWin: 'Bạn về đích trước!', raceLose: 'Xe bóng về trước lần này.',
    racePaused: 'Đã dừng. Bấm "Bắt đầu đua" để đua lại.',
    raceResult: '{seconds} giây · {wpm} WPM · {accuracy}% chính xác · xe bóng {ghost} WPM',
    paceBest: 'Kỷ lục của bạn ({wpm} WPM)',
    keysResult: '{hits} phím trúng · chuỗi dài nhất {streak} · {accuracy}% chính xác'
  },
  sections: [
    { h2: "Ba trò chơi gõ phím miễn phí, mỗi trò cho một việc", html: `<p>Bạn vừa học xong một nhóm phím và muốn thử dùng chúng trong một nhiệm vụ khác? Chọn một trò phía trên để bắt đầu. Săn phím luyện tìm đúng vị trí, Mưa chữ đòi gõ trọn từ trước khi nó rơi xuống đáy, còn Đua với bóng cho bạn một mốc tốc độ để bám theo khi chép đoạn chữ. Không cần đăng ký tài khoản để chơi.</p>
<p>Nếu vẫn phải nhìn xuống tìm chữ, thử Săn phím. Nếu nhớ vị trí nhưng kết hợp các chữ còn chậm, thử Mưa chữ ở mức dễ. Nếu gõ từng từ được mà hay mất nhịp khi nối tiếp, chọn Đua với bóng. Ba trò được chia theo việc cần tập, không xếp hạng từ trò dễ đến trò dành cho người giỏi.</p>
<p>Một lượt chơi vẫn có ích dù bạn không thắng. Nhận ra mình hay bỏ dấu cách hoặc đặt tay lệch sau một phím xa cũng là thông tin để chọn việc luyện tiếp. Điểm số chỉ cho biết một phần của lượt chơi.</p>` },
    { h2: "Mưa chữ: gõ từ đang rơi và bấm Space", html: `<p>Chọn mức Dễ, Vừa hoặc Khó rồi bắt đầu. Nhìn một từ còn trên màn hình, gõ vào ô nhập và bấm Space để gửi. Trên bàn phím vật lý, Enter cũng gửi từ. Chữ gõ phải khớp với một từ đang rơi; gõ lại từ của lượt trước không có tác dụng nếu nó không xuất hiện trong lượt này.</p>
<p>Mỗi từ chạm đáy làm mất một mạng. Để lọt ba từ thì lượt chơi kết thúc. Mức khó quyết định điều kiện ban đầu như tốc độ rơi và độ dài của từ. Khi bạn phá được nhiều từ, màn tăng lên và trò chơi nhanh hơn. Vì vậy, một lượt bắt đầu khá nhẹ vẫn có thể trở nên khó dù bạn không đổi mức.</p>
<h3>Đọc hết từ trước khi quyết định gõ</h3>
<p>Thử chọn một từ có thể hoàn thành thay vì gõ nửa chừng rồi chuyển sang từ khác. Nếu mục tiêu đã gần đáy, cân nhắc xem còn đủ thời gian không. Khi phần lớn từ biến mất trước lúc bạn đọc xong, hạ độ khó để còn kịp nhìn mình đang gõ gì.</p>
<p>Gửi sai sẽ xóa phần vừa nhập. Hãy xem lại từ định gõ, đặc biệt là chữ có dấu. Phần được tô sáng chỉ cho biết bạn đang khớp đầu từ; nó chưa có nghĩa là đã phá được mục tiêu. Bạn vẫn cần hoàn thành đúng từ rồi gửi.</p>
<h3>Điểm Mưa chữ cho biết điều gì?</h3>
<p>Điểm được tính theo độ dài từ và màn hiện tại. Tỷ lệ gõ trúng trong kết quả dựa trên số lần gửi khớp, không phải phép kiểm tra từng ngón tay. Điểm cao hơn có thể đến từ lượt kéo dài hơn hoặc màn cao hơn. Hãy so các lượt có điều kiện tương tự thay vì coi đây là một điểm đánh giá chung cho mọi việc đánh máy.</p>` },
    { h2: "Đua với bóng: luyện gõ theo tốc độ đã chọn", html: `<p>Trong trò này, xe bóng chạy đều ở mốc bạn chọn. Có các mốc 20, 30, 40, 60 và 80 WPM, cùng lựa chọn dựa trên kỷ lục đua đã lưu. Đây là trò một người chơi: xe bên cạnh không phải người đang kết nối trực tuyến và cũng không phát lại từng lần bấm của bạn ở lượt cũ.</p>
<p>Bấm Bắt đầu đua rồi đọc dãy chữ. Xe bắt đầu chạy khi bạn nhập ký tự đầu tiên, nên bạn có thể tìm vị trí tay trước. Chép từ đầu, chú ý cả dấu cách. Nội dung được ghép từ kho từ của trò chơi; hãy đọc thứ đang hiển thị thay vì đoán phần tiếp theo theo một câu chuyện quen.</p>
<h3>Tìm lỗi đầu tiên khi xe không tiến</h3>
<p>Xe của bạn đi theo phần đầu văn bản đã khớp. Nếu có một ký tự sai ở phía trước, phía sau gõ đúng bao nhiêu thì xe vẫn dừng ở chỗ ấy. Tìm lỗi đầu tiên, sửa rồi kiểm tra lại dấu cách. Gõ nhiều ký tự hơn và hoàn thành đúng văn bản là hai việc khác nhau.</p>
<p>Chọn mốc vừa đủ để bạn còn thấy lỗi và kịp sửa. Nếu lượt nào cũng gõ cuống cuồng, hạ tốc độ xe bóng. Khi đã giữ được nhịp, thử mốc cao hơn rồi quan sát chuyển động nào bắt đầu gây vướng. Không cần chọn mức cao nhất chỉ vì nó có trong danh sách.</p>
<h3>Lựa chọn kỷ lục của bạn hoạt động ra sao?</h3>
<p>Khi chưa có kỷ lục đua, lựa chọn này dùng mốc 30 WPM. Khi có kết quả đã lưu, nó dùng kết quả ấy làm tốc độ mục tiêu, với mốc tối thiểu 15 WPM. Xe không mô phỏng những chỗ bạn từng dừng. Nếu muốn so vài lượt với cùng mục tiêu, hãy chọn một mốc cố định.</p>` },
    { h2: "Săn phím: trò chơi luyện vị trí bàn phím", html: `<p>Một phím sáng lên trên bàn phím ảo. Bấm vị trí tương ứng trên bàn phím vật lý rồi tìm mục tiêu tiếp theo. Lượt chơi kéo dài 60 giây. Bấm đúng tăng số lần trúng; bấm nhầm sẽ làm đứt chuỗi hiện tại. Xem cả số trúng lẫn chuỗi dài nhất để phân biệt lượt gõ có kiểm soát với lượt đoán nhanh.</p>
<p>Săn phím đọc vị trí vật lý theo bố cục đang hiển thị. Mưa chữ và Đua với bóng lại kiểm tra văn bản bạn nhập. Trước khi chơi, nhìn xem bố cục trên màn hình có đúng thứ mình muốn tập không. Vì cách kiểm tra khác nhau nên bộ gõ tiếng Việt quan trọng với hai trò kia, còn với Săn phím thì bật hay tắt đều được.</p>
<h3>Quan sát ngón tay là việc bạn tự làm</h3>
<p>Thử tìm mục tiêu rồi bấm khi mắt vẫn hướng lên màn hình. Nếu cần nhìn xuống, hãy dùng lần nhìn ấy để xác nhận một vị trí và quay lại quan sát mục tiêu. Trò chơi biết phím nào được bấm; nó không kiểm tra bạn dùng ngón nào hoặc có nhìn tay hay không.</p>
<p>Săn phím chọn mục tiêu chữ từ bố cục có sẵn, không phải bài kiểm tra đầy đủ mọi dấu câu, Shift và cách gõ cả đoạn. Khi tìm phím đã quen hơn, chuyển sang từ hoặc một bài học phối hợp các phím. Trúng nhiều là kết quả tốt cho nhiệm vụ này, nhưng chưa có nghĩa mọi loại văn bản đều đã dễ.</p>` },
    { h2: "Gõ tiếng Việt có dấu trong trò chơi", html: `<p>Mưa chữ và Đua với bóng cần văn bản có dấu khớp mục tiêu. Hãy dùng bộ gõ tiếng Việt của thiết bị; nếu dùng Telex, kiểm tra một từ ngắn như “nhà” trước. Trang chỉ nhận chữ mà bộ gõ đã ghép xong; nó không có bộ chuyển Telex riêng để tự biến “nhaf” thành “nhà”. Nếu vẫn hiện chuỗi thô, kiểm tra bộ gõ trước khi thử lại.</p>
<p>Chú ý phần chữ sau khi bộ gõ đã ghép xong rồi mới gửi từ. Khi đổi thiết bị hoặc bàn phím, cách nhập có thể khác. Một lượt chơi sai chế độ nhập không chứng minh bạn đã quên vị trí phím. Hãy kiểm tra bộ gõ trước, rồi mới đánh giá kỹ năng.</p>` },
    { h2: "Dùng trò chơi gõ 10 ngón giữa các bài học", html: `<p>Trước lượt chơi, chọn một câu hỏi nhỏ: mình có bỏ dấu cách, mất vị trí sau một phím xa hay gõ tiếp dù đã có lỗi? Sau lượt, trả lời câu đó trước khi chơi lại. Ghi chú “hay lệch tay sau P” giúp bạn tìm bài phù hợp hơn câu “cần điểm cao hơn”.</p>
<p>Nếu một chuyển động cứ gây vướng, quay lại <a class="inline-link" href="{course}">lộ trình {lessons} bài học gõ</a>. Khi muốn có một mốc tốc độ riêng, dùng <a class="inline-link" href="{test}">bài kiểm tra tốc độ gõ</a>. Kết quả giữa trò chơi và bài test không mô tả cùng một nhiệm vụ, nên đừng so trực tiếp chỉ vì cùng thấy chữ WPM.</p>
<p>Mỗi trò ở đây thu việc luyện lại thành một nhiệm vụ rõ ràng: tìm phím, gõ trọn từ, nhận ra lỗi. Như vậy người mới có việc cụ thể để làm, thay vì chỉ nghe lời khuyên “gõ nhanh lên”. Với trẻ bắt đầu dùng máy tính để viết bài hoặc tìm tài liệu, những việc nhỏ ấy là bước chuẩn bị để tự làm, không phải lý do đặt mốc tốc độ của người lớn để thi đua.</p>
<p>Người đã dùng máy tính lâu cũng có thể chọn một chỗ gây vướng để luyện. Khi chỉ còn bấm chơi lại để đuổi điểm, hãy đổi nhiệm vụ hoặc ghi điều muốn thử trong buổi sau. Trò chơi có ích hơn khi bạn biết mình đang quan sát điều gì.</p>` }
  ],
  faqTitle: "Câu hỏi thường gặp về trò chơi gõ phím",
  faq: [
    [
        "Có đua với người chơi khác không?",
        "Không. Đua với bóng dùng xe chạy đều ở tốc độ đã chọn hoặc dựa trên kỷ lục của bạn. Không có đối thủ trực tuyến hay bảng xếp hạng công khai. Chọn một mốc cố định nếu bạn muốn giữ cùng mục tiêu qua vài lượt."
    ],
    [
        "Kỷ lục được lưu ở đâu?",
        "Các trò lưu kỷ lục theo ngôn ngữ trong bộ nhớ cục bộ của trình duyệt. Đây không phải tài khoản tự đồng bộ sang thiết bị khác. Xóa dữ liệu trang có thể làm mất kỷ lục; khi trình duyệt chặn lưu trữ, kết quả có thể không được giữ lại."
    ],
    [
        "Vì sao gõ xong mà Mưa chữ không nhận?",
        "Kiểm tra từ còn trên màn hình hay đã chạm đáy, rồi đối chiếu toàn bộ chữ và dấu. Phần đầu được tô sáng chưa đủ: cần khớp cả từ và bấm Space hoặc Enter. Nếu còn chuỗi Telex thô, kiểm tra bộ gõ tiếng Việt."
    ],
    [
        "Vì sao xe của tôi đứng lại dù vẫn gõ?",
        "Tiến độ chạy theo phần đầu đã khớp của văn bản. Một lỗi phía trước giữ tiến độ lại dù các chữ sau trông đúng. Tìm chỗ sai đầu tiên, sửa và kiểm tra dấu cách thay vì tiếp tục gõ thêm phía sau."
    ],
    [
        "Chơi trên điện thoại được không?",
        "Mưa chữ và Đua với bóng nhận chữ từ bàn phím ảo, nhưng cách hoạt động còn tùy bàn phím và trình duyệt. Săn phím cần sự kiện vị trí phím vật lý. Gõ trên điện thoại là nhiệm vụ khác với luyện ngón trên máy tính."
    ]
],
  cta: { eyebrow: 'Muốn chơi giỏi hơn?', title: 'Học gõ 10 ngón từ đầu', text: 'Lộ trình {lessons} bài đi từ hàng phím cơ sở tới gõ tiếng Việt có dấu bằng Telex.', button: 'Xem lộ trình' }
};
