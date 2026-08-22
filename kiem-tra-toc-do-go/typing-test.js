const passage = 'Gõ mười ngón là một kỹ năng được xây dựng từ những lần luyện tập bình tĩnh và đều đặn. Hãy giữ mắt trên màn hình, đặt các ngón tay về hàng phím cơ sở và ưu tiên từng ký tự chính xác. Khi thao tác trở nên quen thuộc, tốc độ của bạn sẽ cải thiện một cách tự nhiên và bền vững.';
const HISTORY_KEY = 'typingease-speed-test-history-v1';
const durations = [15, 30, 60, 120];
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
const resultElement = document.querySelector('#test-result');
const resultWpm = document.querySelector('#result-wpm');
const resultAccuracy = document.querySelector('#result-accuracy');
const resultErrors = document.querySelector('#result-errors');
const resultConsistency = document.querySelector('#result-consistency');
const comparisonElement = document.querySelector('#result-comparison');
let selectedDuration = 60;
let startedAt = null;
let timer = null;
let finished = false;
let wpmSamples = [];
let lastSampleSecond = 0;
let testHistory = loadHistory();

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
}

function renderPrompt() {
  const typed = input.value;
  promptElement.innerHTML = [...passage].map((character, index) => {
    const state = index < typed.length ? (typed[index] === character ? '' : 'wrong') : index === typed.length ? 'current' : '';
    return `<span class="${state}">${character === ' ' ? '&nbsp;' : character}</span>`;
  }).join('');
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
  titleElement.textContent = `Test tốc độ gõ ${selectedDuration} giây`;
  durationButtons.forEach(button => {
    const selected = Number(button.dataset.duration) === selectedDuration;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
    button.disabled = running;
  });
}

function showResult(metrics, consistency) {
  resultWpm.textContent = `${metrics.wpm} WPM`;
  resultAccuracy.textContent = `${metrics.accuracy ?? '--'}%`;
  resultErrors.textContent = String(metrics.errors);
  resultConsistency.textContent = `${consistency ?? '--'}%`;
  const previous = [...testHistory].reverse().find(item => item.duration === selectedDuration);
  if (previous) {
    const difference = metrics.wpm - previous.wpm;
    comparisonElement.textContent = difference === 0 ? 'Bằng kết quả lần trước.' : `${difference > 0 ? '+' : ''}${difference} WPM so với lần trước`;
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
  messageElement.textContent = `Đã hết ${selectedDuration} giây. Kết quả: ${metrics.wpm} WPM, ${metrics.accuracy ?? '--'}% chính xác, ${metrics.errors} lỗi.`;
  updateDurationUi();
}

function tick() {
  if (!startedAt || finished) return;
  const now = Date.now();
  const elapsedSeconds = Math.floor((now - startedAt) / 1000);
  timeElement.textContent = Math.max(selectedDuration - elapsedSeconds, 0);
  collectWpmSample(now);
  updateMetrics(now);
  if (elapsedSeconds >= selectedDuration) endTest();
}

function beginTest() {
  if (startedAt || finished || !input.value) return;
  startedAt = Date.now();
  messageElement.textContent = 'Đang tính kết quả theo thời gian thực.';
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
  timeElement.textContent = String(selectedDuration);
  wpmElement.textContent = '0';
  setPercent(accuracyElement, null);
  errorsElement.textContent = '0';
  setPercent(consistencyElement, null);
  resultElement.hidden = true;
  comparisonElement.hidden = true;
  messageElement.textContent = 'Sẵn sàng khi bạn muốn.';
  updateDurationUi();
  renderPrompt();
  if (focus) input.focus();
}

durationButtons.forEach(button => button.addEventListener('click', () => {
  if (startedAt && !finished) return;
  selectedDuration = Number(button.dataset.duration);
  resetTest(false);
}));
input.addEventListener('input', () => {
  beginTest();
  renderPrompt();
  updateMetrics();
});
restartButton.addEventListener('click', () => resetTest());
resetTest(false);
