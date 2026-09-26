// Bảng tiếng Việt nằm ngay trong file, bản dịch chỉ trải lên trên — giống player.js,
// curriculum-page.js và progress-page.js. Trang tiếng Việt vì thế không tải thêm byte nào, còn
// một khoá thiếu bản dịch thì hiện tiếng Việt chứ không để trống.
//
// Bản trước đây gọi `text(vietnamese, english)` rồi dịch sang tiếng Nhật bằng cách dò NGƯỢC câu
// tiếng Anh đã dựng xong (`if (english === 'Ready when you are.')`). Cách đó vừa không cho
// ui.en.js ghi đè được gì, vừa hỏng lặng lẽ ngay khi ai đó sửa một dấu chấm trong câu tiếng Anh.
// Các trang /ja/ nay chỉ còn là trang chuyển hướng và không nạp file này, nên nhánh đó đã bỏ.
const T_VI = {
  passage: 'Gõ mười ngón là một kỹ năng được xây dựng từ những lần luyện tập bình tĩnh và đều đặn. Hãy giữ mắt trên màn hình, đặt các ngón tay về hàng phím cơ sở và ưu tiên từng ký tự chính xác. Khi thao tác trở nên quen thuộc, tốc độ của bạn sẽ cải thiện một cách tự nhiên và bền vững.',
  // Các đoạn nối tiếp nhau cho bài dài (tới 10 phút). Văn viết thường ngày, có dấu, có hoa, có dấu câu.
  passages: [
    'Gõ mười ngón là một kỹ năng được xây dựng từ những lần luyện tập bình tĩnh và đều đặn. Hãy giữ mắt trên màn hình, đặt các ngón tay về hàng phím cơ sở và ưu tiên từng ký tự chính xác. Khi thao tác trở nên quen thuộc, tốc độ của bạn sẽ cải thiện một cách tự nhiên và bền vững.',
    'Sáng nay trời mưa nhẹ, cả con phố như chậm lại. Người bán bánh mì ở đầu ngõ vẫn dọn hàng từ sớm, chiếc ô xanh che kín chiếc xe đẩy nhỏ. Ai đi ngang qua cũng dừng lại một chút, mua một ổ bánh nóng rồi vội vàng đi tiếp dưới làn mưa bay.',
    'Bà tôi có một khu vườn nhỏ sau nhà. Mỗi buổi chiều, bà tưới rau, nhổ cỏ và kể cho tôi nghe về những mùa thu hoạch ngày xưa. Có năm được mùa, cả xóm mang rổ sang xin rau muống, bà cho hết mà không lấy của ai một đồng nào.',
    'Chuyến tàu đêm rời ga lúc mười giờ kém mười lăm. Trong toa, có người đọc sách, có người ngủ gục trên vai bạn đồng hành. Tôi ngồi cạnh cửa sổ, nhìn những ngọn đèn nhà ai lướt qua trong bóng tối và nghĩ về những ngày sắp tới ở một thành phố mới.',
    'Muốn nấu một nồi canh chua ngon, bạn cần cà chua chín, dứa, đậu bắp và một ít me. Đun sôi nước, thả me vào cho ra vị chua, rồi cho cá vào sau cùng để thịt không bị nát. Nêm vừa ăn, rắc thêm rau thơm là có một bữa cơm nhà ấm áp.',
    'Độ chính xác đi trước tốc độ. Khi tay đã nhớ đúng đường đi của từng ngón, tốc độ sẽ tự tăng lên mà bạn không cần cố gắng. Còn nếu gõ nhanh nhưng sai nhiều, bạn sẽ mất thời gian quay lại sửa, và nhịp gõ cũng bị đứt quãng.',
    'Thư viện của trường mở cửa đến chín giờ tối. Những ngày gần kỳ thi, bàn nào cũng kín chỗ, chỉ nghe tiếng lật sách và tiếng bàn phím lách cách. Cô thủ thư đi một vòng, nhắc mọi người giữ yên lặng rồi mỉm cười quay về chỗ ngồi.',
    'Cuối tuần, cả nhà tôi thường đạp xe ra bờ hồ. Không khí buổi sớm trong lành, mặt nước phẳng lặng như gương. Chúng tôi dừng lại ăn một bát phở, uống một cốc trà đá, rồi thong thả đạp xe về khi nắng bắt đầu lên cao.'
  ],
  title: 'Test tốc độ gõ {seconds} giây',
  titleMinutes: 'Test tốc độ gõ {minutes} phút',
  ready: 'Sẵn sàng khi bạn muốn.',
  running: 'Đang tính kết quả theo thời gian thực.',
  finished: 'Đã hết {seconds} giây. Kết quả: {wpm} WPM, {accuracy}% chính xác, {errors} lỗi.',
  finishedMinutes: 'Đã hết {minutes} phút. Kết quả: {wpm} WPM, {accuracy}% chính xác, {errors} lỗi.',
  comparisonSame: 'Bằng kết quả lần trước.',
  comparisonDelta: '{delta} WPM so với lần trước',
  progressEmpty: 'Chưa có đủ dữ liệu. Hãy hoàn thành vài bài kiểm tra để xem tiến bộ của bạn.',
  progressNone: 'Chưa có dữ liệu tiến bộ.',
  metricEmpty: 'Chưa có dữ liệu cho chỉ số này.',
  chartEmpty: 'Chưa có dữ liệu phù hợp để vẽ biểu đồ.',
  chartLabel: '{metric} theo thời gian',
  trendEmpty: 'Chưa đủ dữ liệu để tính xu hướng.',
  trendSame: 'Không thay đổi so với đầu kỳ.',
  trendDelta: '{change} {measure} so với đầu kỳ.',
  // Đơn vị đứng sau con số trong `trendDelta`. Tiếng Việt vẫn gọi là Accuracy như trên nhãn HTML.
  measureAccuracy: '% Accuracy',
  progressSummary: '{count} bài test trong {days} ngày. WPM trung bình {wpm}, Accuracy trung bình {accuracy}%.',
  // Nhãn ngày trên trục hoành: '18/09' ở vi-VN, '09/18' ở en-US. Là dữ liệu chứ không phải câu
  // chữ, nhưng vẫn thuộc về bản dịch nên để cùng bảng.
  dateLocale: 'vi-VN'
};
const T = { ...T_VI, ...(window.TypingEaseUI?.test || {}) };
// Đơn vị tốc độ theo ngôn ngữ: PPM (es, pt), MPM (fr)… — cùng con số, chỉ khác tên.
const UNIT = T.wpmUnit || 'WPM';
const fill = (template, values = {}) =>
  Object.entries(values).reduce((text, [key, value]) => text.split(`{${key}}`).join(String(value)), template);
// Nhiều đoạn văn (`T.passages`), xáo thứ tự rồi nối tiếp: bài 5 hay 10 phút cần vài nghìn ký tự, một
// đoạn cố định thì hết giữa chừng. Người gõ tới gần cuối là nối thêm một vòng nữa (`extendPassage`).
const ALL_PASSAGES = (Array.isArray(T.passages) && T.passages.length ? T.passages : [T.passage]).filter(Boolean);
// Ngôn ngữ có nhiều kiểu bàn phím mà không kiểu nào cũng gõ được mọi đoạn (Hindi Bolnagri thiếu phím ई ऊ
// ऐ औ): máy sinh in `window.TypingEaseTestCourses` = { mã khoá: [chỉ số đoạn gõ được] } và một ô
// #test-course. Chỉ lấy những đoạn gõ được trên bàn phím người học chọn; lựa chọn được nhớ.
const COURSE_PASSAGES = window.TypingEaseTestCourses || null;
const courseSelect = document.querySelector('#test-course');
const COURSE_KEY = `typingease-test-course-${(document.documentElement.lang || 'vi').toLowerCase()}-v1`;
if (courseSelect) {
  try { const saved = localStorage.getItem(COURSE_KEY); if (saved && COURSE_PASSAGES?.[saved]) courseSelect.value = saved; } catch { /* storage blocked */ }
}
const passagesFor = id => {
  const indexes = COURSE_PASSAGES?.[id];
  const list = indexes && indexes.length ? indexes.map(index => ALL_PASSAGES[index]).filter(Boolean) : ALL_PASSAGES;
  return list.length ? list : ALL_PASSAGES;
};
let PASSAGES = courseSelect ? passagesFor(courseSelect.value) : ALL_PASSAGES;
const shuffled = list => { const copy = [...list]; for (let i = copy.length - 1; i > 0; i -= 1) { const j = Math.floor(Math.random() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; };
let passage = '';
function extendPassage() {
  let order = shuffled(PASSAGES);
  // Không để một đoạn lặp lại liền kề chính nó ở chỗ nối hai vòng.
  if (passage && order.length > 1 && passage.endsWith(order[0])) order = [...order.slice(1), order[0]];
  passage = [passage, ...order].filter(Boolean).join(' ');
}
// Lịch sử theo ngôn ngữ: kết quả gõ tiếng Pháp không so với lần gõ tiếng Việt. Tiếng Việt và tiếng Anh
// giữ khoá cũ để không mất lịch sử đã có.
const PAGE_LANG = (document.documentElement.lang || 'vi').toLowerCase();
const HISTORY_KEY = T.historyKey || (['vi', 'en'].includes(PAGE_LANG.split('-')[0])
  ? 'typingease-speed-test-history-v1' : `typingease-speed-test-history-${PAGE_LANG}-v1`);
const promptElement = document.querySelector('#test-prompt');
const input = document.querySelector('#typing-input');
const timeElement = document.querySelector('#time-left');
const wpmElement = document.querySelector('#wpm');
const accuracyElement = document.querySelector('#accuracy');
const errorsElement = document.querySelector('#errors');
const consistencyElement = document.querySelector('#consistency');
const messageElement = document.querySelector('#test-message');
const titleElement = document.querySelector('#test-title');
const restartButton = document.querySelector('#restart');
const durationButtons = [...document.querySelectorAll('[data-duration]')];
// Các mức thời lượng đọc từ chính các nút trên trang (15 giây … 10 phút), không viết cứng ở đây.
const durations = durationButtons.map(button => Number(button.dataset.duration)).filter(Number.isFinite);
const resultElement = document.querySelector('#test-result');
const resultWpm = document.querySelector('#result-wpm');
const resultAccuracy = document.querySelector('#result-accuracy');
const resultErrors = document.querySelector('#result-errors');
const resultConsistency = document.querySelector('#result-consistency');
const comparisonElement = document.querySelector('#result-comparison');
const progressRangeButtons = [...document.querySelectorAll('[data-progress-range]')];
const progressMetricButtons = [...document.querySelectorAll('[data-progress-metric]')];
const progressEmpty = document.querySelector('#progress-empty');
const progressChartWrap = document.querySelector('#progress-chart-wrap');
const progressChart = document.querySelector('#progress-chart');
const progressTrend = document.querySelector('#progress-trend');
const progressSummaryText = document.querySelector('#progress-summary-text');
const progressAverageWpm = document.querySelector('#progress-average-wpm');
const progressBestWpm = document.querySelector('#progress-best-wpm');
const progressAverageAccuracy = document.querySelector('#progress-average-accuracy');
const progressTestCount = document.querySelector('#progress-test-count');
let selectedDuration = Number(durationButtons.find(button => button.getAttribute('aria-pressed') === 'true')?.dataset.duration) || 60;
let startedAt = null;
let timer = null;
let finished = false;
let wpmSamples = [];
let lastSampleSecond = 0;
let testHistory = loadHistory();
let progressRange = 7;
let progressMetric = 'wpm';

// Âm click — cùng công tắc với player và trang luyện tự do (`typingease-sound-v1`).
// Chỉ kêu khi ô nhập dài ra; xoá lùi thì im.
const sound = window.TypingEaseSound;
const soundToggle = document.querySelector('#sound-toggle');
let heardLength = 0;
const syncSound = () => soundToggle?.setAttribute('aria-pressed', String(Boolean(sound?.isOn())));
soundToggle?.addEventListener('click', () => { sound?.toggle(); syncSound(); input.focus(); });
document.addEventListener('keydown', event => {
  if (event.altKey && !event.ctrlKey && !event.metaKey && String(event.key).toLowerCase() === 's') {
    event.preventDefault(); sound?.toggle(); syncSound();
  }
});
syncSound();
function clickFor(value) {
  const index = value.length - 1;
  if (index >= 0 && value.length > heardLength) sound?.click(value[index] === passage[index] ? 'ok' : 'bad');
  heardLength = value.length;
}

function loadHistory() {
  try {
    const saved = JSON.parse(localStorage.getItem(HISTORY_KEY));
    return Array.isArray(saved) ? saved.filter(item => item && durations.includes(item.duration) && Number.isFinite(item.wpm)).slice(-15) : [];
  } catch {
    return [];
  }
}

function saveHistory(record) {
  testHistory = [...testHistory, record].slice(-15);
  try { localStorage.setItem(HISTORY_KEY, JSON.stringify(testHistory)); } catch { /* Storage can be unavailable in private browsing. */ }
  renderProgress();
}

// Dưới một phút: số giây trơn ("45"). Từ một phút trở lên: phút:giây ("4:05").
const clock = seconds => (seconds < 60 ? String(seconds) : `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`);

function renderPrompt() {
  const typed = input.value;
  if (typed.length > passage.length - 160) extendPassage();
  promptElement.innerHTML = [...passage].map((character, index) => {
    const state = index < typed.length ? (typed[index] === character ? '' : 'wrong') : index === typed.length ? 'current' : '';
    // Dấu cách để nguyên (không &nbsp;): .test-prompt là pre-wrap, nên dòng xuống ở giữa hai từ
    // chứ không cắt đôi một từ như trước.
    return `<span class="${state}">${character === '<' ? '&lt;' : character === '&' ? '&amp;' : character}</span>`;
  }).join('');
  // Khung chữ cao cố định (test.css); cuộn để dòng đang gõ luôn là dòng thứ hai.
  const current = promptElement.querySelector('.current');
  if (current) {
    // .test-prompt là offsetParent (position:relative), nên offsetTop của ký tự tính từ mép trong
    // khung. Chừa lại đúng một dòng phía trên dòng đang gõ.
    // Cuộn theo đúng lưới dòng: offsetTop của một ký tự nằm lệch nửa khoảng cách dòng so với đỉnh dòng.
    const style = getComputedStyle(promptElement);
    const line = parseFloat(style.lineHeight) || current.offsetHeight;
    const row = Math.floor((current.offsetTop + line / 2) / line);
    promptElement.scrollTop = Math.max(0, (row - 1) * line);
  }
}

function calculateMetrics(now = Date.now()) {
  const typed = input.value;
  const correct = [...typed].filter((character, index) => character === passage[index]).length;
  const errors = Math.max(0, typed.length - correct);
  const elapsedMinutes = startedAt ? Math.max((now - startedAt) / 60000, 1 / 60) : 0;
  const wpm = elapsedMinutes ? Math.round((typed.length / 5) / elapsedMinutes) : 0;
  const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : null;
  return { wpm: Number.isFinite(wpm) ? wpm : 0, accuracy: Number.isFinite(accuracy) ? accuracy : null, errors };
}

function calculateConsistency() {
  if (wpmSamples.length < 2) return null;
  const mean = wpmSamples.reduce((total, value) => total + value, 0) / wpmSamples.length;
  if (!Number.isFinite(mean) || mean <= 0) return null;
  const variance = wpmSamples.reduce((total, value) => total + (value - mean) ** 2, 0) / wpmSamples.length;
  const deviation = Math.sqrt(variance);
  const score = Math.round(Math.max(0, Math.min(100, 100 - (deviation / mean) * 100)));
  return Number.isFinite(score) ? score : null;
}

function setPercent(element, value) { element.innerHTML = `${value ?? '--'}<small>%</small>`; }

function updateMetrics(now = Date.now()) {
  const metrics = calculateMetrics(now);
  wpmElement.textContent = metrics.wpm;
  setPercent(accuracyElement, metrics.accuracy);
  errorsElement.textContent = metrics.errors;
  setPercent(consistencyElement, calculateConsistency());
  return metrics;
}

function collectWpmSample(now = Date.now()) {
  if (!startedAt) return;
  const elapsedSeconds = Math.floor((now - startedAt) / 1000);
  if (elapsedSeconds < 1 || elapsedSeconds === lastSampleSecond) return;
  lastSampleSecond = elapsedSeconds;
  wpmSamples.push(calculateMetrics(now).wpm);
}

function updateDurationUi() {
  const running = Boolean(startedAt && !finished);
  titleElement.textContent = fill(selectedDuration >= 60 && T.titleMinutes ? T.titleMinutes : T.title, { seconds: selectedDuration, minutes: selectedDuration / 60 });
  durationButtons.forEach(button => {
    const selected = Number(button.dataset.duration) === selectedDuration;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.disabled = running;
  });
}

function showResult(metrics, consistency) {
  resultWpm.textContent = `${metrics.wpm} ${UNIT}`;
  resultAccuracy.textContent = `${metrics.accuracy ?? '--'}%`;
  resultErrors.textContent = String(metrics.errors);
  resultConsistency.textContent = `${consistency ?? '--'}%`;
  const previous = [...testHistory].reverse().find(item => item.duration === selectedDuration);
  if (previous) {
    const difference = metrics.wpm - previous.wpm;
    comparisonElement.textContent = difference === 0
      ? T.comparisonSame
      : fill(T.comparisonDelta, { delta: `${difference > 0 ? '+' : ''}${difference}` });
    comparisonElement.hidden = false;
  } else {
    comparisonElement.hidden = true;
  }
  resultElement.hidden = false;
}

function endTest() {
  if (finished) return;
  const now = Date.now();
  collectWpmSample(now);
  const metrics = updateMetrics(now);
  const consistency = calculateConsistency();
  clearInterval(timer);
  finished = true;
  input.disabled = true;
  showResult(metrics, consistency);
  saveHistory({ duration: selectedDuration, wpm: metrics.wpm, accuracy: metrics.accuracy, errors: metrics.errors, consistency, timestamp: Date.now() });
  messageElement.textContent = fill(selectedDuration >= 60 && T.finishedMinutes ? T.finishedMinutes : T.finished, { seconds: selectedDuration, minutes: selectedDuration / 60, wpm: metrics.wpm, accuracy: metrics.accuracy ?? '--', errors: metrics.errors });
  updateDurationUi();
}

function tick() {
  if (!startedAt || finished) return;
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - startedAt) / 1000);
  timeElement.textContent = clock(Math.max(selectedDuration - elapsedSeconds, 0));
  collectWpmSample(now);
  updateMetrics(now);
  if (elapsedSeconds >= selectedDuration) endTest();
}

function beginTest() {
  if (startedAt || finished || !input.value) return;
  startedAt = Date.now();
  messageElement.textContent = T.running;
  updateDurationUi();
  timer = setInterval(tick, 250);
}

function resetTest(focus = true) {
  clearInterval(timer);
  startedAt = null;
  finished = false;
  wpmSamples = [];
  lastSampleSecond = 0;
  input.disabled = false;
  input.value = '';
  passage = '';
  extendPassage();
  timeElement.textContent = clock(selectedDuration);
  wpmElement.textContent = '0';
  setPercent(accuracyElement, null);
  errorsElement.textContent = '0';
  setPercent(consistencyElement, null);
  resultElement.hidden = true;
  comparisonElement.hidden = true;
  messageElement.textContent = T.ready;
  updateDurationUi();
  renderPrompt();
  if (focus) input.focus();
}

function localDay(timestamp) {
  const date = new Date(timestamp);
  if (!Number.isFinite(date.getTime())) return null;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getProgressRecords() {
  const today = localDay(Date.now());
  const cutoff = new Date(today.getFullYear(), today.getMonth(), today.getDate() - (progressRange - 1)).getTime();
  return testHistory.filter(record => Number.isFinite(record.timestamp) && record.timestamp >= cutoff && Number.isFinite(record.wpm));
}

function groupProgressByDay(records) {
  const groups = new Map();
  records.forEach(record => {
    const day = localDay(record.timestamp);
    if (!day) return;
    const key = day.getTime();
    const group = groups.get(key) || { day, wpm: [], accuracy: [], count: 0 };
    group.wpm.push(record.wpm);
    if (Number.isFinite(record.accuracy)) group.accuracy.push(record.accuracy);
    group.count += 1;
    groups.set(key, group);
  });
  return [...groups.values()].sort((a, b) => a.day - b.day).map(group => ({
    ...group,
    averageWpm: group.wpm.reduce((total, value) => total + value, 0) / group.wpm.length,
    averageAccuracy: group.accuracy.length ? group.accuracy.reduce((total, value) => total + value, 0) / group.accuracy.length : null
  }));
}

function formatProgressDate(date) { return date.toLocaleDateString(T.dateLocale, { day: '2-digit', month: '2-digit' }); }

function renderProgressChart(groups) {
  const values = groups.map(group => progressMetric === 'wpm' ? group.averageWpm : group.averageAccuracy).filter(Number.isFinite);
  const width = 640, height = 220, left = 48, right = 18, top = 20, bottom = 38;
  const minValue = progressMetric === 'accuracy' ? 0 : Math.max(0, Math.floor(Math.min(...values) - 10));
  const maxValue = progressMetric === 'accuracy' ? 100 : Math.ceil(Math.max(...values) + 10);
  const valueRange = Math.max(1, maxValue - minValue);
  const chartWidth = width - left - right, chartHeight = height - top - bottom;
  const x = index => groups.length === 1 ? left + chartWidth / 2 : left + index * chartWidth / (groups.length - 1);
  const y = value => top + (maxValue - value) / valueRange * chartHeight;
  const path = groups.map((group, index) => `${index ? 'L' : 'M'}${x(index).toFixed(1)},${y(progressMetric === 'wpm' ? group.averageWpm : group.averageAccuracy).toFixed(1)}`).join(' ');
  const grid = [0, .5, 1].map(step => { const value = Math.round(maxValue - step * valueRange); const lineY = top + step * chartHeight; return `<line class="grid" x1="${left}" y1="${lineY}" x2="${width - right}" y2="${lineY}"/><text class="axis-label" x="8" y="${lineY + 4}">${value}${progressMetric === 'accuracy' ? '%' : ''}</text>`; }).join('');
  const labels = groups.map((group, index) => (groups.length <= 6 || index === 0 || index === groups.length - 1 || index % Math.ceil(groups.length / 4) === 0) ? `<text class="axis-label" text-anchor="middle" x="${x(index)}" y="${height - 13}">${formatProgressDate(group.day)}</text>` : '').join('');
  const points = groups.map((group, index) => { const value = progressMetric === 'wpm' ? group.averageWpm : group.averageAccuracy; return `<circle class="point" cx="${x(index)}" cy="${y(value)}" r="4"><title>${formatProgressDate(group.day)}: ${Math.round(value)}${progressMetric === 'accuracy' ? '%' : ` ${UNIT}`}</title></circle>`; }).join('');
  progressChart.innerHTML = `${grid}<path class="line" d="${path}"/>${points}${labels}`;
  progressChart.setAttribute('aria-label', fill(T.chartLabel, { metric: progressMetric === 'wpm' ? UNIT : (T.accuracyName || 'Accuracy') }));
}

function renderProgress() {
  const records = getProgressRecords();
  const groups = groupProgressByDay(records);
  const chartGroups = groups.filter(group => Number.isFinite(progressMetric === 'wpm' ? group.averageWpm : group.averageAccuracy));
  progressEmpty.textContent = T.progressEmpty;
  const accuracyRecords = records.filter(record => Number.isFinite(record.accuracy));
  const averageWpm = records.length ? Math.round(records.reduce((total, record) => total + record.wpm, 0) / records.length) : null;
  const bestWpm = records.length ? Math.max(...records.map(record => record.wpm)) : null;
  const averageAccuracy = accuracyRecords.length ? Math.round(accuracyRecords.reduce((total, record) => total + record.accuracy, 0) / accuracyRecords.length) : null;
  progressAverageWpm.textContent = averageWpm ?? '--';
  progressBestWpm.textContent = bestWpm ?? '--';
  progressAverageAccuracy.textContent = `${averageAccuracy ?? '--'}%`;
  progressTestCount.textContent = String(records.length);
  progressRangeButtons.forEach(button => { const selected = Number(button.dataset.progressRange) === progressRange; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
  progressMetricButtons.forEach(button => { const selected = button.dataset.progressMetric === progressMetric; button.classList.toggle('selected', selected); button.setAttribute('aria-pressed', String(selected)); });
  if (!records.length) {
    progressEmpty.hidden = false;
    progressChartWrap.hidden = true;
    progressTrend.textContent = '';
    progressSummaryText.textContent = T.progressNone;
    return;
  }
  if (!chartGroups.length) {
    progressEmpty.hidden = false;
    progressChartWrap.hidden = true;
    progressTrend.textContent = T.metricEmpty;
    progressSummaryText.textContent = T.chartEmpty;
    return;
  }
  progressEmpty.hidden = true;
  progressChartWrap.hidden = false;
  renderProgressChart(chartGroups);
  const measure = progressMetric === 'wpm' ? UNIT : T.measureAccuracy;
  if (chartGroups.length < 2) {
    progressTrend.className = 'progress-trend';
    progressTrend.textContent = T.trendEmpty;
  } else {
    const first = progressMetric === 'wpm' ? chartGroups[0].averageWpm : chartGroups[0].averageAccuracy;
    const last = progressMetric === 'wpm' ? chartGroups.at(-1).averageWpm : chartGroups.at(-1).averageAccuracy;
    const change = Math.round(last - first);
    progressTrend.className = `progress-trend ${change > 0 ? 'positive' : change < 0 ? 'negative' : ''}`;
    progressTrend.textContent = change === 0
      ? T.trendSame
      : fill(T.trendDelta, { change: `${change > 0 ? '+' : ''}${change}`, measure });
  }
  progressSummaryText.textContent = fill(T.progressSummary, { count: records.length, days: progressRange, wpm: averageWpm ?? '--', accuracy: averageAccuracy ?? '--' });
}

courseSelect?.addEventListener('change', () => {
  PASSAGES = passagesFor(courseSelect.value);
  try { localStorage.setItem(COURSE_KEY, courseSelect.value); } catch { /* storage blocked */ }
  resetTest(false);
});
durationButtons.forEach(button => button.addEventListener('click', () => {
  if (startedAt && !finished) return;
  selectedDuration = Number(button.dataset.duration);
  resetTest(false);
}));
// Gõ theo VỊ TRÍ phím (Chú âm Đài Loan): trang in sẵn `window.TypingEaseTestKeys` = { mã phím: [chữ,
// chữ khi giữ Shift] } của bố cục khoá học (scripts/build-test-pages.mjs). Người gõ để bộ gõ ở chế độ
// tiếng Anh; phím vật lý được đổi thành ký tự của bố cục — cùng luật với player.js và trò chơi.
const POSITION_KEYS = window.TypingEaseTestKeys || null;
if (POSITION_KEYS) input.addEventListener('keydown', event => {
  if (event.isComposing || event.key === 'Process' || event.ctrlKey || event.metaKey || event.altKey) return;
  const slot = POSITION_KEYS[event.code];
  const character = slot && (event.shiftKey ? slot[1] : slot[0]);
  if (!character) return;
  event.preventDefault();
  const start = input.selectionStart ?? input.value.length, end = input.selectionEnd ?? start;
  input.setRangeText(character, start, end, 'end');
  input.dispatchEvent(new Event('input'));
});
input.addEventListener('input', () => {
  if (!finished) clickFor(input.value);
  beginTest();
  renderPrompt();
  updateMetrics();
});
restartButton.addEventListener('click', () => resetTest());
progressRangeButtons.forEach(button => button.addEventListener('click', () => { progressRange = Number(button.dataset.progressRange); renderProgress(); }));
progressMetricButtons.forEach(button => button.addEventListener('click', () => { progressMetric = button.dataset.progressMetric; renderProgress(); }));
resetTest(false);
renderProgress();
