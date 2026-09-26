/* tro-choi/text/vi.mjs — chữ của trang trò chơi tiếng Việt (scripts/build-game-pages.mjs).
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
  url: '/tro-choi/',
  title: 'Trò chơi gõ phím 10 ngón miễn phí | TypingEase',
  description: 'Ba trò chơi luyện gõ phím 10 ngón miễn phí: Mưa chữ, Đua với bóng và Săn phím, trên đúng bàn phím của bạn, gõ tiếng Việt có dấu bằng Telex.',
  breadcrumbAria: 'Đường dẫn',
  homeCrumb: 'Trang chủ',
  crumb: 'Trò chơi gõ phím',
  eyebrow: 'Luyện gõ mà như chơi',
  h1: 'Trò chơi gõ phím',
  intro: 'Ba trò chơi ngắn để luyện gõ 10 ngón giữa các bài học: phá chữ rơi, đua với chính tốc độ của bạn, và săn từng phím trên bàn phím ảo. Kỷ lục chỉ lưu trên máy này.',
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
    { h2: 'Ba trò chơi, một kỹ năng', html: '<p>Mỗi trò rèn một phần của việc gõ 10 ngón. <b>Săn phím</b> luyện vị trí từng phím: phím nào sáng thì ngón nào bấm, không nhìn xuống. <b>Mưa chữ</b> luyện gõ trọn một từ dưới áp lực thời gian, kể cả từ có dấu. <b>Đua với bóng</b> luyện nhịp gõ đều qua cả một đoạn văn, với một chiếc xe chạy đúng tốc độ bạn chọn làm mốc.</p>' },
    { h2: 'Trên đúng bàn phím của bạn', html: '<p>Bàn phím ảo trong Săn phím là bố cục của khoá học, và phím được nhận theo vị trí vật lý, không theo chữ mà hệ điều hành gõ ra. Các từ trong Mưa chữ và Đua với bóng là tiếng Việt có dấu, gõ bằng Telex như ở Unit 3 của <a class="inline-link" href="{course}">lộ trình {lessons} bài</a>.</p>' },
    { h2: 'Chơi thế nào cho có ích', html: '<ul><li>Chơi sau khi học xong một bài, năm đến mười phút là đủ.</li><li>Chọn độ khó mà bạn gõ đúng được phần lớn các từ; sai nhiều thì hạ xuống.</li><li>Trong Đua với bóng, đặt xe bóng chậm hơn tốc độ thật một chút, rồi tăng dần.</li><li>Muốn đo tốc độ nghiêm túc thì dùng <a class="inline-link" href="{test}">bài kiểm tra tốc độ</a>, không phải trò chơi.</li></ul>' }
  ],
  faqTitle: 'Câu hỏi thường gặp',
  faq: [
    ['Có chơi với người khác được không?', 'Chưa. Đua với bóng là đua với một chiếc xe chạy đều ở tốc độ bạn chọn, hoặc ở kỷ lục của chính bạn. Không có người chơi nào khác và không có bảng xếp hạng.'],
    ['Kỷ lục được lưu ở đâu?', 'Chỉ trong trình duyệt trên máy này. Không cần tài khoản và không có gì được gửi đi.'],
    ['Chơi trên điện thoại được không?', 'Mưa chữ và Đua với bóng dùng được bàn phím ảo của điện thoại. Săn phím cần bàn phím thật vì nó dạy vị trí các phím.'],
    ['Vì sao gõ đúng mà không phá được chữ?', 'Từ phải khớp hoàn toàn, kể cả dấu, rồi mới bấm Space. Nếu bộ gõ đang tắt thì chữ sẽ ra không dấu.']
  ],
  cta: { eyebrow: 'Muốn chơi giỏi hơn?', title: 'Học gõ 10 ngón từ đầu', text: 'Lộ trình {lessons} bài đi từ hàng phím cơ sở tới gõ tiếng Việt có dấu bằng Telex.', button: 'Xem lộ trình' }
};
