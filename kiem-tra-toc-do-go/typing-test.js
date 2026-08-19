const passage = 'Gõ mười ngón là một kỹ năng được xây dựng từ những lần luyện tập bình tĩnh và đều đặn. Hãy giữ mắt trên màn hình, đặt các ngón tay về hàng phím cơ sở và ưu tiên từng ký tự chính xác. Khi thao tác trở nên quen thuộc, tốc độ của bạn sẽ cải thiện một cách tự nhiên và bền vững.';
const promptElement = document.querySelector('#test-prompt');
const input = document.querySelector('#typing-input');
const timeElement = document.querySelector('#time-left');
const wpmElement = document.querySelector('#wpm');
const accuracyElement = document.querySelector('#accuracy');
const errorsElement = document.querySelector('#errors');
const messageElement = document.querySelector('#test-message');
const restartButton = document.querySelector('#restart');
let startedAt = null;
let timer = null;
let finished = false;

function renderPrompt() {
  const typed = input.value;
  promptElement.innerHTML = [...passage].map((character, index) => {
    const state = index < typed.length ? (typed[index] === character ? '' : 'wrong') : index === typed.length ? 'current' : '';
    return `<span class="${state}">${character === ' ' ? '&nbsp;' : character}</span>`;
  }).join('');
}

function updateMetrics() {
  const typed = input.value;
  const correct = [...typed].filter((character, index) => character === passage[index]).length;
  const errors = typed.length - correct;
  const elapsedMinutes = startedAt ? Math.max((Date.now() - startedAt) / 60000, 1 / 60) : 0;
  const wpm = elapsedMinutes ? Math.round((typed.length / 5) / elapsedMinutes) : 0;
  const accuracy = typed.length ? Math.round((correct / typed.length) * 100) : null;
  wpmElement.textContent = Number.isFinite(wpm) ? wpm : 0;
  accuracyElement.innerHTML = `${accuracy ?? '--'}<small>%</small>`;
  errorsElement.textContent = errors;
}

function endTest() {
  clearInterval(timer);
  finished = true;
  input.disabled = true;
  messageElement.textContent = `Đã hết 60 giây. Kết quả: ${wpmElement.textContent} WPM, ${accuracyElement.textContent.replace('%', '%')} chính xác, ${errorsElement.textContent} lỗi.`;
}

function tick() {
  const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
  const secondsLeft = Math.max(60 - elapsedSeconds, 0);
  timeElement.textContent = secondsLeft;
  updateMetrics();
  if (secondsLeft === 0) endTest();
}

function beginTest() {
  if (startedAt || finished || !input.value) return;
  startedAt = Date.now();
  messageElement.textContent = 'Đang tính kết quả theo thời gian thực.';
  timer = setInterval(tick, 250);
}

function resetTest() {
  clearInterval(timer);
  startedAt = null;
  finished = false;
  input.disabled = false;
  input.value = '';
  timeElement.textContent = '60';
  wpmElement.textContent = '0';
  accuracyElement.innerHTML = '--<small>%</small>';
  errorsElement.textContent = '0';
  messageElement.textContent = 'Sẵn sàng khi bạn muốn.';
  renderPrompt();
  input.focus();
}

input.addEventListener('input', () => {
  beginTest();
  renderPrompt();
  updateMetrics();
});
restartButton.addEventListener('click', resetTest);
renderPrompt();
