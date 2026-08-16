const lessons = [
  ['Cơ sở: ASDF JKL;', 'asdf jkl; asdf jkl; asdf jkl; asdf jkl;'],
  ['Cơ sở: đổi tay', 'a s d f j k l; f d s a ; l k j'],
  ['Ngón trỏ trái', 'f f f r r r v v v f r v f r v'],
  ['Ngón trỏ phải', 'j j j u u u m m m j u m j u m'],
  ['Hai ngón trỏ', 'fj fj rf uj vm jm fr ju fv um'],
  ['Ngón giữa', 'd k d k e i c , d e c k i ,'],
  ['Ngón áp út', 's l s l w o x . s w x l o .'],
  ['Ngón út', 'a ; a ; q p z / a q z ; p /'],
  ['Hàng cơ sở dài', 'sad fall ask dad; all lads fall;'],
  ['Từ đơn giản', 'fall all ask sad dad flask salad'],
  ['Hàng trên: trái', 'q w e r t q w e r t tree water'],
  ['Hàng trên: phải', 'y u i o p y u i o p you type'],
  ['Hàng trên phối hợp', 'type writer quiet power your time'],
  ['Hàng dưới: trái', 'z x c v b z x c v b brave cave'],
  ['Hàng dưới: phải', 'n m , . / n m , . / minimum'],
  ['Hàng dưới phối hợp', 'zoom can move very calmly now'],
  ['Ba hàng: trái', 'read fast cave wax bad red face'],
  ['Ba hàng: phải', 'jump into moon pool milk kind'],
  ['Từ thông dụng 1', 'the quick brown fox jumps over'],
  ['Từ thông dụng 2', 'practice makes progress every day'],
  ['Câu ngắn 1', 'keep your hands on the home row.'],
  ['Câu ngắn 2', 'slow is smooth and smooth is fast.'],
  ['Chữ hoa', 'Hello World. Good Typing Starts Here.'],
  ['Số hàng trên', '123 456 789 0 123 456 789 0'],
  ['Dấu câu', 'hello, world. are you ready? yes!'],
  ['Email cơ bản', 'hello@example.com is a simple address.'],
  ['Tốc độ 1', 'focus on accuracy before you type faster'],
  ['Tốc độ 2', 'small daily practice builds strong habits'],
  ['Đoạn văn ngắn', 'typing with all ten fingers saves time every day.'],
  ['Thử thách cuối', 'keep calm, look ahead, and type with confidence!']
];
const lessonSecondLines = [
  'jkl; asdf jkl; asdf jkl; asdf', 'j f d s a ; l k j f d s a', 'v f r v f r v f r v f r',
  'm j u m j u m j u m j u', 'ju fr vm fj uj fr vm fj uj', 'e d c k i , e d c k i ,',
  'x s w l o . x s w l o .', 'z a q ; p / z a q ; p /', 'all dads ask; fall salad fast;',
  'glass flask falls; sad lads ask;', 'water tree were quiet at work', 'you type up your input properly',
  'write your quiet reply to power', 'cave brave wax can be exact', 'minimum memory moves normally', 'move now, zoom very calmly',
  'face red wax can be fast', 'milk and moon jump into room', 'over the lazy dog with ease',
  'daily practice makes typing easy', 'rest your wrists and relax now.', 'accuracy comes before quick speed.',
  'Typing Well Needs Calm Focus.', '098 765 432 1 098 765 432 1', 'wait; type, then check it.',
  'sample.user@typing.com is ready.', 'steady hands create better results', 'repeat good habits every morning',
  'each lesson helps your fingers learn.', 'finish with focus and enjoy progress!'
];
lessons.forEach((lesson, index) => { lesson[1] = `${lesson[1]}\n${lessonSecondLines[index]}`; });
const translations = {
  vi: {navPractice:'Luyện gõ',navGuide:'Hướng dẫn',navResults:'Thành tích',login:'Đăng nhập',dailyPractice:'Luyện gõ mỗi ngày',intro:'Cải thiện kỹ năng gõ 10 ngón với những bài tập ngắn, rõ ràng và hoàn toàn miễn phí.',start:'Bắt đầu luyện gõ',ready:'Sẵn sàng chưa?',practiceNow:'Luyện ngay bây giờ',basic:'Bài cơ bản',free:'Tự do',path:'Lộ trình 10 ngón',speed:'Tốc độ',accuracy:'Độ chính xác',time:'Thời gian',startHere:'Bắt đầu gõ tại đây'},
  en: {navPractice:'Typing practice',navGuide:'Guide',navResults:'Results',login:'Sign in',dailyPractice:'Practice every day',intro:'Improve your touch typing with clear, focused exercises that are completely free.',start:'Start typing',ready:'Ready to begin?',practiceNow:'Practice now',basic:'Lessons',free:'Free type',path:'Touch typing path',speed:'Speed',accuracy:'Accuracy',time:'Time',startHere:'Start typing here'},
  la: {navPractice:'Exercitatio',navGuide:'Ductio',navResults:'Profectus',login:'Intra',dailyPractice:'Cotidie exerce',intro:'Artem digitis decem scribendi exerce per lectiones claras atque gratuitas.',start:'Incipe scribere',ready:'Paratusne es?',practiceNow:'Nunc exerce',basic:'Lectiones',free:'Liber scribendi',path:'Iter digitorum decem',speed:'Celeritas',accuracy:'Diligentia',time:'Tempus',startHere:'Hic scribe'}
};
const siteLanguages = {
  vi:{nav:['Luyện gõ','Hướng dẫn','Thành tích'],login:'Đăng nhập',daily:'Luyện gõ mỗi ngày',hero:['Gõ nhanh hơn.','Thảnh thơi hơn.'],intro:'Cải thiện kỹ năng gõ 10 ngón với những bài tập rõ ràng và hoàn toàn miễn phí.',start:'Bắt đầu luyện gõ',learn:'Tìm hiểu cách luyện',ready:'Sẵn sàng chưa?',practice:'Luyện ngay bây giờ',basic:'Bài cơ bản',free:'Tự do',path:'Lộ trình 10 ngón',speed:'Tốc độ',accuracy:'Độ chính xác',time:'Thời gian',keyboard:'Bàn phím & ngón tay',results:'Thành tích bài học',benefits:'Tiến bộ từng phím bấm.'},
  en:{nav:['Practice','Guide','Results'],login:'Sign in',daily:'Practice every day',hero:['Type faster.','Feel lighter.'],intro:'Improve touch typing with clear, focused exercises that are completely free.',start:'Start typing',learn:'Learn how it works',ready:'Ready to begin?',practice:'Practice now',basic:'Lessons',free:'Free type',path:'Touch-typing path',speed:'Speed',accuracy:'Accuracy',time:'Time',keyboard:'Keyboard & fingers',results:'Lesson records',benefits:'Progress with every key.'},
  zh:{nav:['练习打字','指南','成绩'],login:'登录',daily:'每天练习打字',hero:['打得更快。','更加轻松。'],intro:'通过清晰、专注且完全免费的练习，提高十指盲打能力。',start:'开始练习',learn:'了解练习方法',ready:'准备好了吗？',practice:'立即练习',basic:'基础课程',free:'自由练习',path:'十指打字路径',speed:'速度',accuracy:'准确率',time:'时间',keyboard:'键盘与手指',results:'课程成绩',benefits:'每一次按键都有进步。'},
  ja:{nav:['タイピング練習','ガイド','記録'],login:'ログイン',daily:'毎日タイピング練習',hero:['もっと速く。','もっと楽に。'],intro:'分かりやすく無料の練習で、タッチタイピングを上達させましょう。',start:'練習を始める',learn:'練習方法を見る',ready:'準備はいいですか？',practice:'今すぐ練習',basic:'基本レッスン',free:'自由入力',path:'10本指の学習',speed:'速度',accuracy:'正確性',time:'時間',keyboard:'キーボードと指',results:'レッスン記録',benefits:'一打ずつ上達。'},
  ru:{nav:['Практика','Руководство','Результаты'],login:'Войти',daily:'Практикуйтесь каждый день',hero:['Печатайте быстрее.','Чувствуйте лёгкость.'],intro:'Улучшайте слепой набор с понятными и полностью бесплатными упражнениями.',start:'Начать печатать',learn:'Как тренироваться',ready:'Готовы начать?',practice:'Практиковаться',basic:'Уроки',free:'Свободный набор',path:'Путь десятипальцевой печати',speed:'Скорость',accuracy:'Точность',time:'Время',keyboard:'Клавиатура и пальцы',results:'Рекорды уроков',benefits:'Прогресс с каждой клавишей.'},
  pt:{nav:['Praticar','Guia','Resultados'],login:'Entrar',daily:'Pratique todos os dias',hero:['Digite mais rápido.','Com mais leveza.'],intro:'Melhore a digitação com exercícios claros, focados e totalmente gratuitos.',start:'Começar a praticar',learn:'Saber como praticar',ready:'Tudo pronto?',practice:'Pratique agora',basic:'Lições básicas',free:'Prática livre',path:'Percurso de digitação',speed:'Velocidade',accuracy:'Precisão',time:'Tempo',keyboard:'Teclado e dedos',results:'Resultados das lições',benefits:'Progresso a cada tecla.'},
  'pt-BR':{nav:['Praticar','Guia','Resultados'],login:'Entrar',daily:'Pratique todos os dias',hero:['Digite mais rápido.','Com mais leveza.'],intro:'Melhore sua digitação com exercícios claros, focados e totalmente gratuitos.',start:'Começar a treinar',learn:'Como praticar',ready:'Pronto para começar?',practice:'Treine agora',basic:'Lições básicas',free:'Prática livre',path:'Trilha de digitação',speed:'Velocidade',accuracy:'Precisão',time:'Tempo',keyboard:'Teclado e dedos',results:'Resultados das lições',benefits:'Progresso a cada tecla.'},
  ar:{nav:['التدريب','الدليل','النتائج'],login:'تسجيل الدخول',daily:'تدرّب كل يوم',hero:['اكتب أسرع.','براحة أكبر.'],intro:'حسّن الطباعة باللمس عبر تمارين واضحة ومجانية تماماً.',start:'ابدأ التدريب',learn:'تعرّف على الطريقة',ready:'هل أنت مستعد؟',practice:'تدرّب الآن',basic:'الدروس الأساسية',free:'تدريب حر',path:'مسار الطباعة بعشرة أصابع',speed:'السرعة',accuracy:'الدقة',time:'الوقت',keyboard:'لوحة المفاتيح والأصابع',results:'نتائج الدروس',benefits:'تقدم مع كل مفتاح.'},
  ms:{nav:['Latihan','Panduan','Pencapaian'],login:'Log masuk',daily:'Berlatih setiap hari',hero:['Taip lebih pantas.','Lebih selesa.'],intro:'Tingkatkan kemahiran menaip sentuh dengan latihan yang jelas dan percuma.',start:'Mula menaip',learn:'Cara berlatih',ready:'Sudah bersedia?',practice:'Berlatih sekarang',basic:'Pelajaran asas',free:'Latihan bebas',path:'Laluan menaip 10 jari',speed:'Kelajuan',accuracy:'Ketepatan',time:'Masa',keyboard:'Papan kekunci & jari',results:'Rekod pelajaran',benefits:'Maju pada setiap kekunci.'}
};
let activeLanguage = 'vi';
function localizedLessonName(index) { return activeLanguage === 'vi' ? lessons[index][0] : `${siteLanguages[activeLanguage]?.basic || 'Lesson'} ${index + 1}`; }
const rows = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Back'],['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],['Caps','a','s','d','f','g','h','j','k','l',';','\'','Enter'],['Shift','z','x','c','v','b','n','m',',','.','/','Shift'],['Ctrl','Alt',' ' ,'Alt','Ctrl']];
const fingerMap = {q:'LP',a:'LP',z:'LP',w:'LR',s:'LR',x:'LR',e:'LM',d:'LM',c:'LM',r:'LI',f:'LI',v:'LI',t:'LI',g:'LI',b:'LI',y:'RI',h:'RI',n:'RI',u:'RI',j:'RI',m:'RI',i:'RM',k:'RM',',':'RM',o:'RR',l:'RR','.':'RR',p:'RP',';':'RP','/':'RP',' ':'LT',enter:'RP'};
let lessonIndex = 0, startedAt = null, interval = null;
const prompt = document.querySelector('#prompt'), input = document.querySelector('#typing-input'), wpm = document.querySelector('#wpm'), accuracy = document.querySelector('#accuracy'), timer = document.querySelector('#timer'), feedback = document.querySelector('#feedback');
const currentLesson = () => lessons[lessonIndex][1];
const SCORE_STORAGE_KEY = 'goxanh-lesson-records-v2';
let lessonRecords = {};
try { lessonRecords = JSON.parse(localStorage.getItem(SCORE_STORAGE_KEY)) || {}; } catch { lessonRecords = {}; }
function formatDuration(seconds) { return seconds == null ? '--:--' : `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`; }
function renderRecords() {
  const entries = Object.values(lessonRecords), completed = entries.length, perfectEntries = entries.filter(item => item.accuracy === 100);
  document.querySelector('#completed-count').textContent = `${completed} / ${lessons.length}`;
  document.querySelector('#best-wpm').textContent = `${Math.max(0, ...perfectEntries.map(item => item.wpm || 0))} WPM`;
  const fastest = perfectEntries.map(item => item.time).filter(Number.isFinite);
  document.querySelector('#best-time').textContent = formatDuration(fastest.length ? Math.min(...fastest) : null);
  document.querySelector('#results-body').innerHTML = lessons.map((lesson, index) => { const record = lessonRecords[index]; return `<tr><td>${String(index + 1).padStart(2,'0')} · ${lesson[0]}</td>${record ? `<td>${record.wpm} WPM</td><td>${record.accuracy}%</td><td>${formatDuration(record.time)}</td>` : '<td class="empty">Chưa có</td><td class="empty">--</td><td class="empty">--</td>'}</tr>`; }).join('');
  if (activeLanguage !== 'vi') document.querySelectorAll('#results-body tr').forEach((row, index) => { row.querySelector('td').textContent = `${String(index + 1).padStart(2,'0')} · ${localizedLessonName(index)}`; });
  if (activeLanguage !== 'vi') document.querySelectorAll('#results-body .empty').forEach((cell, index) => { cell.textContent = index % 3 === 0 ? 'Not yet' : '--'; });
}
function saveLessonResult(correctCharacters, typedCharacters) {
  const seconds = Math.max(1, Math.floor((Date.now() - startedAt) / 1000));
  const minutes = Math.max(seconds / 60, 1 / 60), speed = Math.round(typedCharacters / 5 / minutes), resultAccuracy = Math.round(correctCharacters / typedCharacters * 100);
  const previous = lessonRecords[lessonIndex];
  const isBetterAccuracy = !previous || resultAccuracy > previous.accuracy;
  const isPerfectTiebreak = resultAccuracy === 100 && previous?.accuracy === 100 && (speed > previous.wpm || (speed === previous.wpm && seconds < previous.time));
  if (isBetterAccuracy || isPerfectTiebreak) lessonRecords[lessonIndex] = { wpm: speed, accuracy: resultAccuracy, time: seconds };
  localStorage.setItem(SCORE_STORAGE_KEY, JSON.stringify(lessonRecords));
  renderRecords();
}
const freeSamples = [
  'Daily typing practice helps you work faster, stay focused, and feel more confident at every computer task. Small improvements become meaningful when you keep a steady rhythm and give each key your full attention.',
  'A calm morning can begin with a warm drink, a clear plan, and a few quiet minutes of deliberate practice. Take your time, relax your shoulders, and let your fingers find each key without looking down.',
  'Accuracy matters before speed because correct movements build reliable habits for the future. As your hands become familiar with the keyboard, your speed will grow naturally through patient and consistent practice.',
  'Keep your eyes on the screen, rest your hands lightly, and allow every finger to return to its home position. Smooth typing is not a race; it is a skill that improves with care, balance, and repetition.'
];
let freeText = '', freeStartedAt = null, freeInterval = null;
const freeSample = document.querySelector('#free-sample'), freeInput = document.querySelector('#free-input'), customText = document.querySelector('#custom-text');
function escapeHtml(value) { return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function resetFree() { clearInterval(freeInterval); freeStartedAt = null; freeInput.value = ''; document.querySelector('#free-timer').textContent = '00:00'; document.querySelector('#free-wpm').textContent = '0 WPM'; document.querySelector('#free-accuracy').textContent = '--%'; }
function drawFree() {
  const typed = freeInput.value;
  freeSample.innerHTML = [...freeText].map((char, index) => `<span class="${index < typed.length ? (typed[index] === char ? '' : 'wrong') : index === typed.length ? 'current' : ''}">${char === ' ' ? '&nbsp;' : escapeHtml(char)}</span>`).join('');
  const correct = [...typed].filter((char, index) => char === freeText[index]).length;
  const percent = typed.length ? Math.round(correct / typed.length * 100) : null;
  document.querySelector('#free-accuracy').textContent = `${percent ?? '--'}%`;
  if (freeStartedAt) { const minutes = Math.max((Date.now() - freeStartedAt) / 60000, 1 / 60); document.querySelector('#free-wpm').textContent = `${Math.round(correct / 5 / minutes)} WPM`; }
  highlightGuide(freeText[typed.length]);
  if (typed === freeText && freeText) clearInterval(freeInterval);
  document.querySelector('#free-feedback').textContent = typed === freeText && freeText ? 'Hoan thanh! Hay chon mot doan van moi de luyen tiep.' : percent === 100 ? 'Rat tot, hay giu nhip go deu.' : 'Co ky tu chua dung, hay go cham lai mot chut.';
  if (activeLanguage !== 'vi') document.querySelector('#free-feedback').textContent = siteLanguages[activeLanguage]?.practice || 'Practice';
}
function setFreeText(value) { freeText = value.trim(); resetFree(); freeSample.textContent = freeText || 'Hay nhap hoac tao doan van de bat dau.'; if (freeText) { drawFree(); freeInput.focus(); } }
function tickFree() { const seconds = Math.floor((Date.now() - freeStartedAt) / 1000); document.querySelector('#free-timer').textContent = `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`; }

function makeKeyboard() {
  const keyboard = document.querySelector('#keyboard');
  rows.forEach(row => { const line = document.createElement('div'); line.className = 'key-row'; row.forEach(label => { const key = document.createElement('span'); key.className = `key ${label.length > 1 ? 'wide' : ''} ${label === ' ' ? 'space' : ''} ${label === 'f' || label === 'j' ? 'home' : ''}`; key.dataset.key = label.toLowerCase(); key.textContent = label === ' ' ? 'Space' : label; line.append(key); }); keyboard.append(line); });
}
function renderLevels() {
  document.querySelector('#lesson-levels').innerHTML = lessons.map((item, i) => `<button class="level ${i === lessonIndex ? 'active' : ''} ${i < lessonIndex ? 'complete' : ''}" type="button" data-level="${i}"><b>${String(i + 1).padStart(2,'0')}</b>${localizedLessonName(i)}</button>`).join('');
  document.querySelector('#lesson-title').textContent = localizedLessonName(lessonIndex);
  document.querySelector('#lesson-progress').textContent = activeLanguage === 'vi' ? `Bài ${lessonIndex + 1} / ${lessons.length}` : `${localizedLessonName(lessonIndex)} / ${lessons.length}`;
  document.querySelectorAll('.level').forEach(button => button.addEventListener('click', () => { document.querySelector('.typing-card').classList.remove('lesson-finished'); setLesson(Number(button.dataset.level)); }));
}
function highlightGuide(char) {
  const target = char === '\n' ? 'enter' : char?.toLowerCase() || '';
  document.querySelectorAll('.active-key,.active-finger').forEach(el => el.classList.remove('active-key','active-finger'));
  document.querySelectorAll(`.key[data-key="${target === ' ' ? ' ' : target}"]`).forEach(el => el.classList.add('active-key'));
  const finger = fingerMap[target]; if (finger) document.querySelector(`[data-finger="${finger}"]`)?.classList.add('active-finger');
}
function draw() {
  const lesson = currentLesson(), typed = input.value;
  prompt.innerHTML = [...lesson].map((char, index) => { const state = index < typed.length ? (typed[index] === char ? '' : 'wrong') : index === typed.length ? 'current' : ''; if (char === '\n' && lessonIndex >= 7) return `<br><span class="${state} enter-cue">↵ Enter</span><br>`; return `<span class="${state}">${char === ' ' ? '&nbsp;' : char}</span>`; }).join('');
  const correct = [...typed].filter((char, i) => char === lesson[i]).length, percent = typed.length ? Math.round(correct / typed.length * 100) : null;
  accuracy.innerHTML = `${percent ?? '--'}<small>%</small>`;
  if (!typed.length) setTimeout(() => { feedback.textContent = 'Bắt đầu gõ để xem độ chính xác của bạn.'; }, 0);
  if (startedAt) { const minutes = Math.max((Date.now() - startedAt) / 60000, 1 / 60); wpm.innerHTML = `${Math.round(correct / 5 / minutes)} <small>WPM</small>`; }
  highlightGuide(lesson[typed.length]);
  if (typed.length >= lesson.length) { clearInterval(interval); document.querySelector('.typing-card').classList.add('lesson-finished'); }
  if (activeLanguage !== 'vi') setTimeout(() => { feedback.textContent = siteLanguages[activeLanguage]?.practice || 'Practice'; }, 0);
  if (typed.length >= lesson.length) { saveLessonResult(correct, typed.length); setTimeout(() => { feedback.textContent = percent === 100 ? 'Hoàn thành xuất sắc! Bạn có thể sang bài tiếp theo hoặc luyện lại.' : `Bạn đã hoàn thành với độ chính xác ${percent}%. Hãy luyện lại để cải thiện nhé.`; }, 0); }
  if (typed === lesson) { clearInterval(interval); feedback.textContent = lessonIndex < lessons.length - 1 ? 'Xuất sắc! Chọn bài tiếp theo để tiếp tục.' : 'Bạn đã hoàn thành toàn bộ lộ trình!'; }
  else feedback.textContent = percent === 100 ? 'Rất tốt, cứ giữ nhịp này nhé!' : 'Có vài ký tự chưa đúng, hãy gõ chậm lại một chút.';
}
function reset(focus = false) { clearInterval(interval); startedAt = null; input.value = ''; timer.textContent = '00:00'; wpm.innerHTML = '0 <small>WPM</small>'; feedback.textContent = 'Giữ các ngón tay ở hàng phím cơ sở nhé.'; draw(); if (focus) input.focus(); }
function setLesson(index) { lessonIndex = index; document.querySelector('#lesson-number').textContent = String(index + 1).padStart(2,'0'); document.querySelector('#lesson-title').textContent = lessons[index][0]; document.querySelector('#lesson-progress').textContent = `Bài ${index + 1} / ${lessons.length}`; renderLevels(); reset(true); }
function tick() { const secs = Math.floor((Date.now() - startedAt) / 1000); timer.textContent = `${String(Math.floor(secs / 60)).padStart(2,'0')}:${String(secs % 60).padStart(2,'0')}`; }
input.addEventListener('input', () => { if (!startedAt && input.value) { startedAt = Date.now(); interval = setInterval(tick, 1000); } draw(); });
freeInput.addEventListener('input', () => { if (!freeText) return; if (!freeStartedAt && freeInput.value) { freeStartedAt = Date.now(); freeInterval = setInterval(tickFree, 1000); } drawFree(); });
document.querySelector('#use-text').addEventListener('click', () => setFreeText(customText.value));
document.querySelector('#random-text').addEventListener('click', () => { const next = freeSamples[Math.floor(Math.random() * freeSamples.length)]; customText.value = next; setFreeText(next); });
document.querySelector('#reset').addEventListener('click', () => reset(true));
document.querySelector('#reset').addEventListener('click', () => document.querySelector('.typing-card').classList.remove('lesson-finished'));
document.querySelectorAll('.start-button').forEach(b => b.addEventListener('click', () => { document.querySelector('.practice').scrollIntoView({behavior:'smooth'}); setTimeout(() => input.focus(), 500); }));
document.querySelectorAll('[data-scroll]').forEach(b => b.addEventListener('click', () => document.querySelector(b.dataset.scroll).scrollIntoView({behavior:'smooth'})));
document.querySelectorAll('.mode-switch button').forEach((button, index) => button.addEventListener('click', () => { document.querySelector('.mode-switch .selected').classList.remove('selected'); button.classList.add('selected'); const card = document.querySelector('.typing-card'); card.classList.remove('lesson-finished'); card.classList.toggle('free-mode', index === 1); if (index === 0) input.focus(); else if (!freeText) { const sample = freeSamples[Math.floor(Math.random() * freeSamples.length)]; customText.value = sample; setFreeText(sample); } else freeInput.focus(); }));
document.querySelector('#next-lesson').addEventListener('click', () => { document.querySelector('.typing-card').classList.remove('lesson-finished'); setLesson(Math.min(lessonIndex + 1, lessons.length - 1)); });
document.querySelector('#retry-lesson').addEventListener('click', () => { document.querySelector('.typing-card').classList.remove('lesson-finished'); reset(true); });
document.querySelector('#clear-results').addEventListener('click', () => { if (confirm('Bạn có muốn xoá toàn bộ lịch sử thành tích?')) { lessonRecords = {}; localStorage.removeItem(SCORE_STORAGE_KEY); renderRecords(); } });
function applyLanguage(code) {
  const t = siteLanguages[code] || siteLanguages.vi;
  activeLanguage = code;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('nav a').forEach((link, index) => { link.textContent = t.nav[index]; });
  document.querySelector('.login').innerHTML = `${t.login} <span>→</span>`;
  document.querySelector('h1').innerHTML = `${t.hero[0]}<br><em>${t.hero[1]}</em>`;
  document.querySelector('.intro').textContent = t.intro;
  const eyebrows = document.querySelectorAll('.eyebrow');
  eyebrows[0].innerHTML = `<i></i> ${t.daily}`; eyebrows[1].innerHTML = `<i></i> ${t.ready}`;
  document.querySelector('.start-button').innerHTML = `${t.start} <span>→</span>`;
  document.querySelector('.text-button').innerHTML = `${t.learn} <span>↓</span>`;
  document.querySelector('#practice-title').textContent = t.practice;
  document.querySelectorAll('.mode-switch button')[0].textContent = t.basic;
  document.querySelectorAll('.mode-switch button')[1].textContent = t.free;
  document.querySelector('.path-title strong').textContent = t.path;
  document.querySelectorAll('.stats div span').forEach((item, index) => { item.textContent = [t.speed, t.accuracy, t.time][index]; });
  document.querySelector('#keyboard-title').textContent = t.keyboard;
  document.querySelector('#results-title').textContent = t.results;
  document.querySelector('.benefits h2').innerHTML = `${t.benefits.split(' ').slice(0,-2).join(' ')}<br><em>${t.benefits.split(' ').slice(-2).join(' ')}</em>`;
  document.querySelector('footer p').textContent = code === 'vi' ? 'Gõ chậm một chút, rồi bạn sẽ đi rất xa.' : t.benefits;
  const extra = code === 'vi' ? {
    tip:'MẸO NHỎ', tipTitle:'Đừng nhìn bàn phím', tipText:'Đặt ngón trỏ lên phím F và J. Hai chấm nổi sẽ giúp bạn luôn tìm đúng vị trí.', freeTitle:'Luyện gõ tự do', freeInfo:'Chọn một đoạn văn của bạn hoặc tạo đề ngẫu nhiên.', custom:'Dán hoặc nhập đoạn văn bạn muốn luyện tại đây...', use:'Dùng đoạn văn này', random:'↻ Đoạn văn ngẫu nhiên', sample:'Hãy chọn một đoạn văn để bắt đầu luyện gõ.', type:'Gõ lại đoạn văn phía trên', clear:'Xoá lịch sử', records:'Điểm tốt nhất được lưu trên thiết bị này.', completed:'Đã hoàn thành', bestSpeed:'Tốc độ cao nhất (100%)', bestTime:'Thời gian nhanh nhất (100%)', keyboardInfo:'Phím cần gõ sẽ sáng màu xanh. Màu tương ứng trên bàn tay cho biết bạn nên dùng ngón nào.', benefitTag:'Đơn giản mà hiệu quả', footer:'Gõ chậm một chút, rồi bạn sẽ đi rất xa.'
  } : {
    tip:t.practice, tipTitle:t.keyboard, tipText:t.intro, freeTitle:t.free, freeInfo:t.intro, custom:t.start, use:t.start, random:t.practice, sample:t.practice, type:t.start, clear:t.results, records:t.results, completed:t.results, bestSpeed:t.speed, bestTime:t.time, keyboardInfo:t.intro, benefitTag:t.practice, footer:t.benefits
  };
  const tip = document.querySelector('.tip-card'); tip.querySelector('.tip-number').textContent = extra.tip; tip.querySelector('h3').textContent = extra.tipTitle; tip.querySelector('p:not(.tip-number)').textContent = extra.tipText;
  document.querySelector('.free-intro strong').textContent = extra.freeTitle; document.querySelector('.free-intro span').textContent = extra.freeInfo;
  customText.placeholder = extra.custom; document.querySelector('#use-text').textContent = extra.use; document.querySelector('#random-text').textContent = extra.random;
  document.querySelectorAll('.free-stats span').forEach((item, index) => { const labels = code === 'vi' ? ['Tốc độ','Chính xác','Thời gian'] : [t.speed, t.accuracy, t.time]; item.firstChild.textContent = `${labels[index]} `; });
  document.querySelector('#free-sample').textContent = extra.sample; document.querySelector('.free-practice .typing-label').textContent = extra.type; freeInput.placeholder = extra.type;
  document.querySelector('.keyboard-copy .eyebrow').innerHTML = `<i></i> ${code === 'vi' ? 'Quan sát vị trí tay' : 'Watch hand position'}`;
  document.querySelector('.keyboard-copy>p:not(.eyebrow)').textContent = extra.keyboardInfo;
  document.querySelector('.results-heading .eyebrow').innerHTML = `<i></i> ${code === 'vi' ? 'Tiến bộ của bạn' : 'Your progress'}`;
  document.querySelector('.results-heading p:not(.eyebrow)').textContent = extra.records; document.querySelector('#clear-results').textContent = extra.clear;
  document.querySelector('#next-lesson').textContent = code === 'vi' ? 'Bài tiếp theo →' : 'Next lesson →'; document.querySelector('#retry-lesson').textContent = code === 'vi' ? '↻ Làm lại bài này' : '↻ Try this lesson again';
  document.querySelectorAll('.results-summary span').forEach((item, index) => { item.textContent = [extra.completed, extra.bestSpeed, extra.bestTime][index]; });
  document.querySelector('.benefits .eyebrow').innerHTML = `<i></i> ${extra.benefitTag}`; document.querySelector('footer p').textContent = extra.footer;
  document.title = code === 'vi' ? 'TypingEase — Luyện gõ 10 ngón' : 'TypingEase — Touch typing practice';
  if (code !== 'vi') {
    document.querySelector('.mini-top span').textContent = t.practice; document.querySelector('.visual-card p').textContent = t.benefits;
    document.querySelector('.trust-row p').innerHTML = `<strong>12,000+</strong> ${t.daily}`;
    document.querySelector('.typing-card>.typing-label').textContent = t.start; input.placeholder = t.start;
    document.querySelector('#feedback').textContent = t.intro;
    document.querySelectorAll('.finger-legend span').forEach((item, index) => { item.textContent = [t.basic,t.free,t.practice,t.results,t.speed][index]; });
    document.querySelectorAll('.finger-guide span').forEach((item, index) => { item.textContent = [t.basic,t.free,t.practice,t.results][index]; });
    document.querySelectorAll('.hand span').forEach((item, index) => { item.textContent = index ? t.results : t.basic; });
    document.querySelectorAll('.results-table th').forEach((item, index) => { item.textContent = [t.basic,t.speed,t.accuracy,t.time][index]; });
    document.querySelectorAll('.benefit-list h3').forEach((item, index) => { item.textContent = [t.basic,t.practice,t.results][index]; });
    document.querySelectorAll('.benefit-list p').forEach(item => { item.textContent = t.intro; });
  } else {
    document.querySelector('.mini-top span').textContent = 'Bài học hôm nay'; document.querySelector('.visual-card p').textContent = 'Gõ đúng nhịp, từng phím một';
    document.querySelector('.trust-row p').innerHTML = '<strong>12.000+</strong> người đang luyện tập hôm nay';
    document.querySelector('.typing-card>.typing-label').textContent = 'Bắt đầu gõ tại đây'; input.placeholder = 'Nhấn vào đây và bắt đầu gõ...';
    document.querySelector('#feedback').textContent = 'Giữ các ngón tay ở hàng phím cơ sở nhé.';
    document.querySelectorAll('.finger-legend span').forEach((item, index) => { item.textContent = ['Út','Áp út','Giữa','Trỏ','Cái'][index]; });
    document.querySelectorAll('.finger-guide span').forEach((item, index) => { item.textContent = ['Út','Áp út','Giữa','Trỏ'][index]; });
    document.querySelectorAll('.hand span').forEach((item, index) => { item.textContent = index ? 'Bàn tay phải' : 'Bàn tay trái'; });
    document.querySelectorAll('.results-table th').forEach((item, index) => { item.textContent = ['Bài học','Tốc độ tốt nhất','Chính xác','Thời gian nhanh nhất'][index]; });
    document.querySelectorAll('.benefit-list h3').forEach((item, index) => { item.textContent = ['Học đúng tư thế','Luyện tập có nhịp','Theo dõi tiến bộ'][index]; });
    document.querySelectorAll('.benefit-list p').forEach((item, index) => { item.textContent = ['Làm quen vị trí các ngón tay trước khi tăng tốc độ.','Các bài học ngắn giúp bạn duy trì sự tập trung.','Biết tốc độ và độ chính xác của mình sau mỗi bài gõ.'][index]; });
  }
  renderLevels(); renderRecords();
  localStorage.setItem('typingease-language', code);
}
document.querySelector('#language').addEventListener('change', event => applyLanguage(event.target.value));
const savedLanguage = localStorage.getItem('typingease-language') || 'vi';
document.querySelector('#language').value = savedLanguage;
applyLanguage(savedLanguage);
makeKeyboard(); renderLevels(); renderRecords(); draw();
