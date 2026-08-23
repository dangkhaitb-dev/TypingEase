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
  vi:{nav:['Luyện gõ','Hướng dẫn','Thành tích'],login:'Đăng nhập',daily:'Luyện gõ mỗi ngày',hero:['Luyện gõ 10 ngón','online miễn phí.'],intro:'Cải thiện kỹ năng gõ 10 ngón với những bài tập rõ ràng và hoàn toàn miễn phí.',start:'Bắt đầu luyện gõ',learn:'Tìm hiểu cách luyện',ready:'Sẵn sàng chưa?',practice:'Luyện ngay bây giờ',basic:'Bài cơ bản',free:'Tự do',path:'Lộ trình 10 ngón',speed:'Tốc độ',accuracy:'Độ chính xác',time:'Thời gian',keyboard:'Bàn phím & ngón tay',results:'Thành tích bài học',benefits:'Tiến bộ từng phím bấm.'},
  en:{nav:['Practice','Guides','Progress'],login:'Sign in',daily:'Practice every day',hero:['Type faster.','Feel lighter.'],intro:'Improve touch typing with clear, focused exercises that are completely free.',start:'Start typing',learn:'Learn how it works',ready:'Ready to begin?',practice:'Practice now',basic:'Lessons',free:'Free type',path:'Touch typing course',speed:'Speed',accuracy:'Accuracy',time:'Time',keyboard:'Keyboard & fingers',results:'Lesson records',benefits:'Progress with every key.'},
  zh:{nav:['练习打字','指南','成绩'],login:'登录',daily:'每天练习打字',hero:['打得更快。','更加轻松。'],intro:'通过清晰、专注且完全免费的练习，提高十指盲打能力。',start:'开始练习',learn:'了解练习方法',ready:'准备好了吗？',practice:'立即练习',basic:'基础课程',free:'自由练习',path:'十指打字路径',speed:'速度',accuracy:'准确率',time:'时间',keyboard:'键盘与手指',results:'课程成绩',benefits:'每一次按键都有进步。'},
  ja:{nav:['タイピング練習','ガイド','記録'],login:'ログイン',daily:'毎日タイピング練習',hero:['もっと速く。','もっと楽に。'],intro:'分かりやすく無料の練習で、タッチタイピングを上達させましょう。',start:'練習を始める',learn:'練習方法を見る',ready:'準備はいいですか？',practice:'今すぐ練習',basic:'基本レッスン',free:'自由入力',path:'10本指の学習',speed:'速度',accuracy:'正確性',time:'時間',keyboard:'キーボードと指',results:'レッスン記録',benefits:'一打ずつ上達。'},
  ru:{nav:['Практика','Руководство','Результаты'],login:'Войти',daily:'Практикуйтесь каждый день',hero:['Печатайте быстрее.','Чувствуйте лёгкость.'],intro:'Улучшайте слепой набор с понятными и полностью бесплатными упражнениями.',start:'Начать печатать',learn:'Как тренироваться',ready:'Готовы начать?',practice:'Практиковаться',basic:'Уроки',free:'Свободный набор',path:'Путь десятипальцевой печати',speed:'Скорость',accuracy:'Точность',time:'Время',keyboard:'Клавиатура и пальцы',results:'Рекорды уроков',benefits:'Прогресс с каждой клавишей.'},
  pt:{nav:['Praticar','Guia','Resultados'],login:'Entrar',daily:'Pratique todos os dias',hero:['Digite mais rápido.','Com mais leveza.'],intro:'Melhore a digitação com exercícios claros, focados e totalmente gratuitos.',start:'Começar a praticar',learn:'Saber como praticar',ready:'Tudo pronto?',practice:'Pratique agora',basic:'Lições básicas',free:'Prática livre',path:'Percurso de digitação',speed:'Velocidade',accuracy:'Precisão',time:'Tempo',keyboard:'Teclado e dedos',results:'Resultados das lições',benefits:'Progresso a cada tecla.'},
  'pt-BR':{nav:['Praticar','Guia','Resultados'],login:'Entrar',daily:'Pratique todos os dias',hero:['Digite mais rápido.','Com mais leveza.'],intro:'Melhore sua digitação com exercícios claros, focados e totalmente gratuitos.',start:'Começar a treinar',learn:'Como praticar',ready:'Pronto para começar?',practice:'Treine agora',basic:'Lições básicas',free:'Prática livre',path:'Trilha de digitação',speed:'Velocidade',accuracy:'Precisão',time:'Tempo',keyboard:'Teclado e dedos',results:'Resultados das lições',benefits:'Progresso a cada tecla.'},
  ar:{nav:['التدريب','الدليل','النتائج'],login:'تسجيل الدخول',daily:'تدرّب كل يوم',hero:['اكتب أسرع.','براحة أكبر.'],intro:'حسّن الطباعة باللمس عبر تمارين واضحة ومجانية تماماً.',start:'ابدأ التدريب',learn:'تعرّف على الطريقة',ready:'هل أنت مستعد؟',practice:'تدرّب الآن',basic:'الدروس الأساسية',free:'تدريب حر',path:'مسار الطباعة بعشرة أصابع',speed:'السرعة',accuracy:'الدقة',time:'الوقت',keyboard:'لوحة المفاتيح والأصابع',results:'نتائج الدروس',benefits:'تقدم مع كل مفتاح.'},
  ms:{nav:['Latihan','Panduan','Pencapaian'],login:'Log masuk',daily:'Berlatih setiap hari',hero:['Taip lebih pantas.','Lebih selesa.'],intro:'Tingkatkan kemahiran menaip sentuh dengan latihan yang jelas dan percuma.',start:'Mula menaip',learn:'Cara berlatih',ready:'Sudah bersedia?',practice:'Berlatih sekarang',basic:'Pelajaran asas',free:'Latihan bebas',path:'Laluan menaip 10 jari',speed:'Kelajuan',accuracy:'Ketepatan',time:'Masa',keyboard:'Papan kekunci & jari',results:'Rekod pelajaran',benefits:'Maju pada setiap kekunci.'}
};
let activeLanguage = 'vi';
const homeActionText = {
  vi: { start:'Bắt đầu bài 1', speedTest:'Kiểm tra tốc độ 60 giây', continue:'Tiếp tục bài', trust:'Luyện gõ miễn phí, không cần đăng ký.', showAll:'Xem toàn bộ 30 bài', collapse:'Thu gọn' },
  en: { start:'Start lesson 1', speedTest:'Take the 60-second speed test', continue:'Continue lesson', trust:'Free typing practice, no sign-up required.', showAll:'View all 30 lessons', collapse:'Collapse' },
  zh: { start:'开始第 1 课', speedTest:'进行 60 秒速度测试', continue:'继续第', trust:'免费练习打字，无需注册。', showAll:'查看全部 30 课', collapse:'收起' },
  ja: { start:'レッスン 1 を始める', speedTest:'60秒スピードテスト', continue:'レッスンを続ける', trust:'無料で練習できます。登録は不要です。', showAll:'全30レッスンを見る', collapse:'閉じる' },
  ru: { start:'Начать урок 1', speedTest:'Тест скорости: 60 секунд', continue:'Продолжить урок', trust:'Бесплатная практика без регистрации.', showAll:'Показать все 30 уроков', collapse:'Свернуть' },
  pt: { start:'Começar a lição 1', speedTest:'Teste de velocidade de 60 segundos', continue:'Continuar lição', trust:'Pratique grátis, sem cadastro.', showAll:'Ver todas as 30 lições', collapse:'Mostrar menos' },
  'pt-BR': { start:'Começar a lição 1', speedTest:'Teste de velocidade de 60 segundos', continue:'Continuar lição', trust:'Pratique grátis, sem cadastro.', showAll:'Ver todas as 30 lições', collapse:'Mostrar menos' },
  ar: { start:'ابدأ الدرس 1', speedTest:'اختبار سرعة لمدة 60 ثانية', continue:'تابع الدرس', trust:'تدرب مجاناً، دون تسجيل.', showAll:'عرض الدروس الثلاثين', collapse:'عرض أقل' },
  ms: { start:'Mula pelajaran 1', speedTest:'Ujian kelajuan 60 saat', continue:'Sambung pelajaran', trust:'Latihan percuma, tanpa pendaftaran.', showAll:'Lihat semua 30 pelajaran', collapse:'Ringkaskan' }
};
function currentHomeActionText() { return homeActionText[activeLanguage] || homeActionText.en; }
const localizedUi = {
  vi: { errors:'Số lỗi', notYet:'Chưa có', next:'Bài tiếp theo →', retry:'↻ Làm lại bài này', perfect:'Hoàn thành xuất sắc! Bạn có thể sang bài tiếp theo hoặc luyện lại.', accuracy:'Bạn đã hoàn thành với độ chính xác {accuracy}%. Hãy luyện lại để cải thiện nhé.', exploreTag:'Tài nguyên TypingEase', exploreTitle:'Khám phá TypingEase', explore:[['Cách gõ 10 ngón','Hướng dẫn vị trí ngón tay, hàng phím cơ sở và cách luyện gõ đúng kỹ thuật cho người mới.','Xem hướng dẫn'],['Kiểm tra tốc độ đánh máy','Làm bài typing test 60 giây để kiểm tra WPM, độ chính xác và tốc độ gõ hiện tại của bạn.','Kiểm tra ngay'],['WPM là gì?','Tìm hiểu WPM, cách tính tốc độ đánh máy và vì sao WPM nên được xem cùng độ chính xác.','Tìm hiểu WPM']], game:{tab:'Trò chơi',kicker:'THỬ THÁCH 30 GIÂY',title:'Đấu tốc độ',description:'Gõ càng đúng và nhanh, điểm thành tích càng cao.',time:'Thời gian',score:'Điểm',best:'Kỷ lục',idle:'Nhấn bắt đầu để nhận thử thách.',placeholder:'Gõ tại đây khi thử thách bắt đầu...',start:'Bắt đầu thử thách',running:'Đang thi đấu...',status:'Mỗi lượt thi kéo dài 30 giây.',focus:'Tập trung, gõ nhanh và chính xác!',finish:'Hoàn thành! Bạn đạt {score} điểm.',replay:'Chơi lại'} },
  en: { errors:'Errors', notYet:'Not yet', next:'Next lesson →', retry:'↻ Try this lesson again', perfect:'Excellent! Continue to the next lesson or practise again.', accuracy:'You finished with {accuracy}% accuracy. Practise again to improve.', exploreTag:'TypingEase resources', exploreTitle:'Explore TypingEase', explore:[['How to touch type','Learn finger placement, the home row, and proper touch-typing technique for beginners.','View guide'],['Check typing speed','Take a 60-second typing test to check your WPM, accuracy, and current typing speed.','Check now'],['What is WPM?','Learn what WPM means, how typing speed is calculated, and why accuracy matters too.','Learn about WPM']], game:{tab:'Game',kicker:'30-SECOND CHALLENGE',title:'Speed challenge',description:'Type accurately and quickly to earn a higher score.',time:'Time',score:'Score',best:'Best',idle:'Press start to receive a challenge.',placeholder:'Type here when the challenge starts...',start:'Start challenge',running:'Competing...',status:'Each round lasts 30 seconds.',focus:'Focus, type quickly, and stay accurate!',finish:'Complete! You scored {score} points.',replay:'Play again'} },
  zh: { errors:'错误数', notYet:'暂无', next:'下一课 →', retry:'↻ 再练一次', perfect:'完成得很出色！继续下一课或再练一次。', accuracy:'你以 {accuracy}% 的准确率完成了练习。再练一次以继续提高。', exploreTag:'TypingEase 资源', exploreTitle:'探索 TypingEase', explore:[['十指打字方法','学习手指位置、基本键位和适合初学者的正确打字方法。','查看指南'],['测试打字速度','完成 60 秒打字测试，查看 WPM、准确率和当前打字速度。','立即测试'],['什么是 WPM？','了解 WPM、打字速度的计算方式，以及为什么准确率同样重要。','了解 WPM']], game:{tab:'游戏',kicker:'30 秒挑战',title:'速度挑战',description:'打得又快又准，获得更高分数。',time:'时间',score:'得分',best:'纪录',idle:'点击开始以获取挑战。',placeholder:'挑战开始后在这里输入...',start:'开始挑战',running:'挑战中...',status:'每轮持续 30 秒。',focus:'集中注意力，快速且准确地输入！',finish:'完成！你获得了 {score} 分。',replay:'再玩一次'} },
  ja: { errors:'ミス', notYet:'まだありません', next:'次のレッスン →', retry:'↻ このレッスンをもう一度', perfect:'素晴らしい完了です！次のレッスンへ進むか、もう一度練習できます。', accuracy:'正確率 {accuracy}% で完了しました。もう一度練習して上達しましょう。', exploreTag:'TypingEase のリソース', exploreTitle:'TypingEase を見る', explore:[['10本指入力の方法','指の位置、ホームポジション、初心者向けの正しいタッチタイピングを学びます。','ガイドを見る'],['入力速度をチェック','60秒テストで WPM、正確性、現在の入力速度を確認できます。','今すぐチェック'],['WPM とは？','WPM の意味、入力速度の計算方法、正確性が重要な理由を学びます。','WPM を学ぶ']], game:{tab:'ゲーム',kicker:'30秒チャレンジ',title:'スピードチャレンジ',description:'正確かつ速く入力して高得点を目指しましょう。',time:'時間',score:'スコア',best:'ベスト',idle:'開始を押してチャレンジを受け取りましょう。',placeholder:'チャレンジ開始後にここへ入力...',start:'チャレンジを開始',running:'挑戦中...',status:'1ラウンドは30秒です。',focus:'集中して、速く正確に入力しましょう！',finish:'完了！{score} 点を獲得しました。',replay:'もう一度'} },
  ru: { errors:'Ошибки', notYet:'Пока нет', next:'Следующий урок →', retry:'↻ Повторить этот урок', perfect:'Отлично! Перейдите к следующему уроку или потренируйтесь ещё раз.', accuracy:'Вы завершили урок с точностью {accuracy}%. Попробуйте ещё раз, чтобы улучшить результат.', exploreTag:'Ресурсы TypingEase', exploreTitle:'Откройте TypingEase', explore:[['Как печатать десятью пальцами','Изучите положение пальцев, домашний ряд и правильную технику для начинающих.','Открыть руководство'],['Проверить скорость печати','Пройдите 60-секундный тест, чтобы узнать WPM, точность и скорость печати.','Проверить сейчас'],['Что такое WPM?','Узнайте, что такое WPM, как рассчитывается скорость и почему важна точность.','Узнать о WPM']], game:{tab:'Игра',kicker:'30-СЕКУНДНЫЙ ВЫЗОВ',title:'Скоростной вызов',description:'Печатайте быстро и точно, чтобы набрать больше очков.',time:'Время',score:'Очки',best:'Рекорд',idle:'Нажмите «Начать», чтобы получить задание.',placeholder:'Печатайте здесь после начала задания...',start:'Начать вызов',running:'Идёт игра...',status:'Каждый раунд длится 30 секунд.',focus:'Сосредоточьтесь, печатайте быстро и точно!',finish:'Готово! Вы набрали {score} очков.',replay:'Играть снова'} },
  pt: { errors:'Erros', notYet:'Ainda não', next:'Próxima lição →', retry:'↻ Tentar esta lição novamente', perfect:'Excelente! Continue para a próxima lição ou pratique novamente.', accuracy:'Você concluiu com {accuracy}% de precisão. Pratique novamente para melhorar.', exploreTag:'Recursos TypingEase', exploreTitle:'Conheça o TypingEase', explore:[['Como digitar com dez dedos','Aprenda a posição dos dedos, a fileira base e a técnica correta para iniciantes.','Ver guia'],['Verificar velocidade de digitação','Faça um teste de 60 segundos para verificar WPM, precisão e velocidade atual.','Verificar agora'],['O que é WPM?','Entenda WPM, como a velocidade é calculada e por que a precisão também importa.','Saber mais sobre WPM']], game:{tab:'Jogo',kicker:'DESAFIO DE 30 SEGUNDOS',title:'Desafio de velocidade',description:'Digite com rapidez e precisão para ganhar mais pontos.',time:'Tempo',score:'Pontuação',best:'Recorde',idle:'Pressione iniciar para receber um desafio.',placeholder:'Digite aqui quando o desafio começar...',start:'Iniciar desafio',running:'Em desafio...',status:'Cada rodada dura 30 segundos.',focus:'Concentre-se, digite rápido e com precisão!',finish:'Concluído! Você marcou {score} pontos.',replay:'Jogar novamente'} },
  'pt-BR': { errors:'Erros', notYet:'Ainda não', next:'Próxima lição →', retry:'↻ Tentar esta lição novamente', perfect:'Excelente! Continue para a próxima lição ou pratique novamente.', accuracy:'Você concluiu com {accuracy}% de precisão. Pratique novamente para melhorar.', exploreTag:'Recursos TypingEase', exploreTitle:'Conheça o TypingEase', explore:[['Como digitar com dez dedos','Aprenda a posição dos dedos, a fileira base e a técnica correta para iniciantes.','Ver guia'],['Verificar velocidade de digitação','Faça um teste de 60 segundos para verificar WPM, precisão e velocidade atual.','Verificar agora'],['O que é WPM?','Entenda WPM, como a velocidade é calculada e por que a precisão também importa.','Saber mais sobre WPM']], game:{tab:'Jogo',kicker:'DESAFIO DE 30 SEGUNDOS',title:'Desafio de velocidade',description:'Digite com rapidez e precisão para ganhar mais pontos.',time:'Tempo',score:'Pontuação',best:'Recorde',idle:'Pressione iniciar para receber um desafio.',placeholder:'Digite aqui quando o desafio começar...',start:'Iniciar desafio',running:'Em desafio...',status:'Cada rodada dura 30 segundos.',focus:'Concentre-se, digite rápido e com precisão!',finish:'Concluído! Você marcou {score} pontos.',replay:'Jogar novamente'} },
  ar: { errors:'الأخطاء', notYet:'ليس بعد', next:'الدرس التالي ←', retry:'↻ أعد هذا الدرس', perfect:'أحسنت! يمكنك متابعة الدرس التالي أو التدريب مجدداً.', accuracy:'أنهيت التمرين بدقة {accuracy}%. تدرب مجدداً للتحسن.', exploreTag:'موارد TypingEase', exploreTitle:'استكشف TypingEase', explore:[['كيفية الكتابة بعشرة أصابع','تعلّم مواضع الأصابع وصف الارتكاز وطريقة الكتابة الصحيحة للمبتدئين.','عرض الدليل'],['اختبر سرعة الكتابة','أجرِ اختباراً لمدة 60 ثانية لمعرفة WPM والدقة وسرعة كتابتك الحالية.','اختبر الآن'],['ما هو WPM؟','تعرّف على WPM وطريقة حساب السرعة وأهمية الدقة.','تعرّف على WPM']], game:{tab:'لعبة',kicker:'تحدي 30 ثانية',title:'تحدي السرعة',description:'اكتب بسرعة ودقة لتحصل على نقاط أكثر.',time:'الوقت',score:'النقاط',best:'أفضل نتيجة',idle:'اضغط ابدأ لتلقي التحدي.',placeholder:'اكتب هنا عند بدء التحدي...',start:'ابدأ التحدي',running:'قيد التحدي...',status:'تستمر كل جولة 30 ثانية.',focus:'ركّز واكتب بسرعة ودقة!',finish:'اكتمل! حصلت على {score} نقطة.',replay:'العب مجدداً'} },
  ms: { errors:'Ralat', notYet:'Belum ada', next:'Pelajaran seterusnya →', retry:'↻ Cuba pelajaran ini lagi', perfect:'Cemerlang! Teruskan ke pelajaran seterusnya atau berlatih lagi.', accuracy:'Anda selesai dengan ketepatan {accuracy}%. Berlatih lagi untuk meningkat.', exploreTag:'Sumber TypingEase', exploreTitle:'Terokai TypingEase', explore:[['Cara menaip 10 jari','Pelajari kedudukan jari, baris asas dan teknik menaip yang betul untuk pemula.','Lihat panduan'],['Semak kelajuan menaip','Ambil ujian 60 saat untuk menyemak WPM, ketepatan dan kelajuan menaip semasa.','Semak sekarang'],['Apakah WPM?','Ketahui maksud WPM, cara kelajuan dikira dan sebab ketepatan juga penting.','Ketahui WPM']], game:{tab:'Permainan',kicker:'CABARAN 30 SAAT',title:'Cabaran kelajuan',description:'Taip dengan pantas dan tepat untuk memperoleh markah lebih tinggi.',time:'Masa',score:'Markah',best:'Rekod',idle:'Tekan mula untuk menerima cabaran.',placeholder:'Taip di sini apabila cabaran bermula...',start:'Mula cabaran',running:'Sedang mencabar...',status:'Setiap pusingan berlangsung 30 saat.',focus:'Fokus, taip pantas dan tepat!',finish:'Selesai! Anda memperoleh {score} mata.',replay:'Main lagi'} }
};
function currentLocalizedUi() { return localizedUi[activeLanguage] || localizedUi.en; }
function formatUi(template, values) { return Object.entries(values).reduce((text, [key, value]) => text.replace(`{${key}}`, value), template); }
const weakKeyUi = {
  vi:{title:'Phím cần luyện thêm',empty:'Bạn chưa có phím yếu nổi bật trong bài này.',practice:'Luyện phím yếu',mode:'Luyện phím yếu',mistakes:'{count} lỗi'},
  en:{title:'Keys to practise',empty:'You have no standout weak keys in this lesson.',practice:'Practise weak keys',mode:'Weak-key practice',mistakes:'{count} mistakes'},
  zh:{title:'需要多练的按键',empty:'本课没有明显需要加强的按键。',practice:'练习薄弱按键',mode:'薄弱按键练习',mistakes:'{count} 个错误'},
  ja:{title:'重点的練習キー',empty:'このレッスンでは目立った苦手なキーはありません。',practice:'苦手なキーを練習',mode:'苦手なキーの練習',mistakes:'{count} 回のミス'},
  ru:{title:'Клавиши для практики',empty:'В этом уроке нет заметно слабых клавиш.',practice:'Тренировать слабые клавиши',mode:'Тренировка слабых клавиш',mistakes:'{count} ошибок'},
  pt:{title:'Teclas para praticar',empty:'Não há teclas fracas em destaque nesta lição.',practice:'Praticar teclas fracas',mode:'Prática de teclas fracas',mistakes:'{count} erros'},
  'pt-BR':{title:'Teclas para praticar',empty:'Não há teclas fracas em destaque nesta lição.',practice:'Praticar teclas fracas',mode:'Prática de teclas fracas',mistakes:'{count} erros'},
  ar:{title:'مفاتيح تحتاج إلى تدريب',empty:'لا توجد مفاتيح ضعيفة بارزة في هذا الدرس.',practice:'تدرب على المفاتيح الضعيفة',mode:'تدريب المفاتيح الضعيفة',mistakes:'{count} أخطاء'},
  ms:{title:'Kekunci untuk dilatih',empty:'Tiada kekunci lemah yang menonjol dalam pelajaran ini.',practice:'Latih kekunci lemah',mode:'Latihan kekunci lemah',mistakes:'{count} kesilapan'}
};
function currentWeakKeyUi() { return weakKeyUi[activeLanguage] || weakKeyUi.en; }
const dailyGoalUi = {
  vi:{kicker:'Mục tiêu hôm nay',minutes:'{done} / {goal} phút',streak:'🔥 {count} ngày liên tục',best:'Kỷ lục: {count} ngày',goal:'{count} phút'},
  en:{kicker:"Today's goal",minutes:'{done} / {goal} min',streak:'🔥 {count}-day streak',best:'Best: {count} days',goal:'{count} min'},
  zh:{kicker:'今日目标',minutes:'{done} / {goal} 分钟',streak:'🔥 连续 {count} 天',best:'最佳：{count} 天',goal:'{count} 分钟'},
  ja:{kicker:'今日の目標',minutes:'{done} / {goal} 分',streak:'🔥 {count}日連続',best:'最長：{count}日',goal:'{count} 分'},
  ru:{kicker:'Цель на сегодня',minutes:'{done} / {goal} мин',streak:'🔥 Серия: {count} дн.',best:'Рекорд: {count} дн.',goal:'{count} мин'},
  pt:{kicker:'Meta de hoje',minutes:'{done} / {goal} min',streak:'🔥 {count} dias seguidos',best:'Recorde: {count} dias',goal:'{count} min'},
  'pt-BR':{kicker:'Meta de hoje',minutes:'{done} / {goal} min',streak:'🔥 {count} dias seguidos',best:'Recorde: {count} dias',goal:'{count} min'},
  ar:{kicker:'هدف اليوم',minutes:'{done} / {goal} دقيقة',streak:'🔥 {count} أيام متتالية',best:'الأفضل: {count} أيام',goal:'{count} دقيقة'},
  ms:{kicker:'Matlamat hari ini',minutes:'{done} / {goal} minit',streak:'🔥 {count} hari berturut-turut',best:'Rekod: {count} hari',goal:'{count} minit'}
};
function currentDailyGoalUi() { return dailyGoalUi[activeLanguage] || dailyGoalUi.en; }
function localizedLessonName(index) { return activeLanguage === 'vi' ? lessons[index][0] : `${siteLanguages[activeLanguage]?.basic || 'Lesson'} ${index + 1}`; }
const rows = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Back'],['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\'],['Caps','a','s','d','f','g','h','j','k','l',';','\'','Enter'],['Shift','z','x','c','v','b','n','m',',','.','/','Shift'],['Ctrl','Alt',' ' ,'Alt','Ctrl']];
const fingerMap = {q:'LP',a:'LP',z:'LP',w:'LR',s:'LR',x:'LR',e:'LM',d:'LM',c:'LM',r:'LI',f:'LI',v:'LI',t:'LI',g:'LI',b:'LI',y:'RI',h:'RI',n:'RI',u:'RI',j:'RI',m:'RI',i:'RM',k:'RM',',':'RM',o:'RR',l:'RR','.':'RR',p:'RP',';':'RP','/':'RP',' ':'LT',enter:'RP'};
let lessonIndex = 0, startedAt = null, interval = null, lessonCompleted = false, lessonsExpanded = false;
const prompt = document.querySelector('#prompt'), input = document.querySelector('#typing-input'), wpm = document.querySelector('#wpm'), accuracy = document.querySelector('#accuracy'), timer = document.querySelector('#timer'), feedback = document.querySelector('#feedback');
const currentLesson = () => weakPracticeActive ? weakPracticeText : lessons[lessonIndex][1];
const SCORE_STORAGE_KEY = 'goxanh-lesson-records-v2';
const WEAK_KEYS_STORAGE_KEY = 'typingease-weak-keys-v1';
let lessonRecords = {};
try { lessonRecords = JSON.parse(localStorage.getItem(SCORE_STORAGE_KEY)) || {}; } catch { lessonRecords = {}; }
let weakKeyRecords = {};
try { weakKeyRecords = JSON.parse(localStorage.getItem(WEAK_KEYS_STORAGE_KEY)) || {}; } catch { weakKeyRecords = {}; }
if (!weakKeyRecords || Array.isArray(weakKeyRecords)) weakKeyRecords = {};
let lessonWeakKeys = {}, recordedWeakKeyPositions = new Set(), observedInputLength = 0, weakPracticeActive = false, weakPracticeText = '';
const DAILY_GOAL_STORAGE_KEY = 'typingease-daily-goal-v1', DAILY_IDLE_MS = 45000, DAILY_HISTORY_DAYS = 90;
let dailyGoal = {};
try { dailyGoal = JSON.parse(localStorage.getItem(DAILY_GOAL_STORAGE_KEY)) || {}; } catch { dailyGoal = {}; }
dailyGoal = { goalMinutes:[5,10,15,20].includes(dailyGoal.goalMinutes) ? dailyGoal.goalMinutes : 10, days:dailyGoal.days && typeof dailyGoal.days === 'object' ? dailyGoal.days : {}, currentStreak:Number(dailyGoal.currentStreak) || 0, bestStreak:Number(dailyGoal.bestStreak) || 0, lastCompletedDate:dailyGoal.lastCompletedDate || '' };
let lastPracticeActivityAt = null;
function localDateKey(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
function dayBefore(key) { const [year, month, day] = key.split('-').map(Number), date = new Date(year, month - 1, day - 1); return localDateKey(date); }
function saveDailyGoal() { const cutoff = new Date(); cutoff.setDate(cutoff.getDate() - DAILY_HISTORY_DAYS); const cutoffKey = localDateKey(cutoff); Object.keys(dailyGoal.days).forEach(key => { if (key < cutoffKey) delete dailyGoal.days[key]; }); localStorage.setItem(DAILY_GOAL_STORAGE_KEY, JSON.stringify(dailyGoal)); }
function completeDailyGoal(key) { const day = dailyGoal.days[key]; if (!day || day.goalCompleted || day.practiceSeconds < dailyGoal.goalMinutes * 60) return; day.goalCompleted = true; if (dailyGoal.lastCompletedDate !== key) { dailyGoal.currentStreak = dailyGoal.lastCompletedDate === dayBefore(key) ? dailyGoal.currentStreak + 1 : 1; dailyGoal.lastCompletedDate = key; dailyGoal.bestStreak = Math.max(dailyGoal.bestStreak, dailyGoal.currentStreak); } }
function renderDailyGoal() { const key = localDateKey(), day = dailyGoal.days[key] || {practiceSeconds:0,goalCompleted:false}, ui = currentDailyGoalUi(), done = Math.floor(day.practiceSeconds / 60), ratio = Math.min(100, day.practiceSeconds / (dailyGoal.goalMinutes * 60) * 100); document.querySelector('#daily-goal-kicker').textContent = ui.kicker; document.querySelector('#daily-goal-title').textContent = formatUi(ui.minutes,{done,goal:dailyGoal.goalMinutes}); document.querySelector('#daily-goal-status').textContent = formatUi(ui.streak,{count:dailyGoal.currentStreak}); document.querySelector('#daily-best-streak').textContent = formatUi(ui.best,{count:dailyGoal.bestStreak}); const progress = document.querySelector('#daily-progress'); progress.style.setProperty('--daily-progress', `${ratio}%`); progress.setAttribute('aria-valuemax', String(dailyGoal.goalMinutes)); progress.setAttribute('aria-valuenow', String(Math.min(dailyGoal.goalMinutes, done))); document.querySelectorAll('[data-daily-goal]').forEach(button => { const selected = Number(button.dataset.dailyGoal) === dailyGoal.goalMinutes; button.classList.toggle('selected',selected); button.setAttribute('aria-pressed',String(selected)); button.textContent = formatUi(ui.goal,{count:button.dataset.dailyGoal}); }); }
function recordPracticeActivity(now = Date.now()) { const key = localDateKey(new Date(now)); dailyGoal.days[key] ||= {practiceSeconds:0,goalCompleted:false}; if (lastPracticeActivityAt && now - lastPracticeActivityAt <= DAILY_IDLE_MS) dailyGoal.days[key].practiceSeconds += (now - lastPracticeActivityAt) / 1000; lastPracticeActivityAt = now; completeDailyGoal(key); saveDailyGoal(); renderDailyGoal(); }
function setDailyGoal(minutes) { dailyGoal.goalMinutes = minutes; const key = localDateKey(); dailyGoal.days[key] ||= {practiceSeconds:0,goalCompleted:false}; completeDailyGoal(key); saveDailyGoal(); renderDailyGoal(); }
function formatDuration(seconds) { return seconds == null ? '--:--' : `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`; }
function normalizeWeakKey(character) { if (!character || character === '\n' || /\s/.test(character)) return ''; return character.toLocaleLowerCase(); }
function getTopWeakKeys(source = weakKeyRecords) { return Object.entries(source).filter(([, count]) => Number.isFinite(count) && count > 0).sort(([keyA, countA], [keyB, countB]) => countB - countA || keyA.localeCompare(keyB)).slice(0, 3); }
function trackWeakKeyErrors(value) {
  if (value.length < observedInputLength) { observedInputLength = value.length; return; }
  const lesson = currentLesson();
  let changed = false;
  for (let index = observedInputLength; index < value.length; index += 1) {
    const targetKey = normalizeWeakKey(lesson[index]);
    if (targetKey && value[index] !== lesson[index] && !recordedWeakKeyPositions.has(index)) {
      recordedWeakKeyPositions.add(index);
      lessonWeakKeys[targetKey] = (lessonWeakKeys[targetKey] || 0) + 1;
      weakKeyRecords[targetKey] = (Number(weakKeyRecords[targetKey]) || 0) + 1;
      changed = true;
    }
  }
  observedInputLength = value.length;
  if (changed) localStorage.setItem(WEAK_KEYS_STORAGE_KEY, JSON.stringify(weakKeyRecords));
}
function renderWeakKeys() {
  const ui = currentWeakKeyUi(), topKeys = getTopWeakKeys(lessonWeakKeys), list = document.querySelector('#weak-keys-list'), empty = document.querySelector('#weak-keys-empty'), practiceButton = document.querySelector('#practice-weak-keys');
  list.innerHTML = topKeys.map(([key, count]) => `<span class="weak-key"><b>${escapeHtml(key.toUpperCase())}</b><span>${formatUi(ui.mistakes, {count})}</span></span>`).join('');
  empty.hidden = topKeys.length > 0;
  practiceButton.hidden = topKeys.length === 0;
}
function buildWeakPractice(keys, source = weakKeyRecords) {
  const wordPool = ['report','proper','prepare','repeat','practice','part','trap','treat','start','street','tree','rate','train','try','writer','water','power','type','typing','project','progress','perfect','prompt','print','paper','pattern','target','better','return','reply','rapid','create','track'];
  const weakCounts = Object.fromEntries(keys.map(key => [key, Number(source[key]) || 1]));
  const maximumCount = Math.max(...Object.values(weakCounts), 1);
  const weightedKeys = keys.flatMap(key => Array(Math.max(1, Math.round(weakCounts[key] / maximumCount * 6))).fill(key));
  const scoreWord = word => [...word].reduce((score, character) => score + (weakCounts[character] || 0), 0);
  const matchingWords = wordPool.filter(word => scoreWord(word) > 0).sort((a, b) => scoreWord(b) - scoreWord(a) || a.length - b.length || a.localeCompare(b));
  const countWeakCharacters = text => [...text].filter(character => weakCounts[character.toLowerCase()]).length;
  const countTypedCharacters = text => [...text].filter(character => !/\s/.test(character)).length;
  const pieces = [];
  const add = value => { if (value && `${pieces.join(' ')} ${value}`.trim().length <= 80) pieces.push(value); };
  const drill = weightedKeys.join(' ');
  const combinations = weightedKeys.map((key, index) => `${key}${weightedKeys[(index + 1) % weightedKeys.length]}`).join(' ');
  let wordIndex = 0;
  add(drill);
  while (pieces.join(' ').length < 58 && matchingWords.length) {
    add(matchingWords[wordIndex % matchingWords.length]);
    add(combinations);
    wordIndex += 1;
  }
  while (pieces.join(' ').length < 58 || countWeakCharacters(pieces.join(' ')) / Math.max(1, countTypedCharacters(pieces.join(' '))) < 0.55) add(drill);
  return pieces.join(' ').trim();
}
function renderRecords() {
  const entries = Object.values(lessonRecords), completed = entries.length, perfectEntries = entries.filter(item => item.accuracy === 100);
  document.querySelector('#completed-count').textContent = `${completed} / ${lessons.length}`;
  document.querySelector('#best-wpm').textContent = `${Math.max(0, ...perfectEntries.map(item => item.wpm || 0))} WPM`;
  const fastest = perfectEntries.map(item => item.time).filter(Number.isFinite);
  document.querySelector('#best-time').textContent = formatDuration(fastest.length ? Math.min(...fastest) : null);
  document.querySelector('#results-body').innerHTML = lessons.map((lesson, index) => { const record = lessonRecords[index]; return `<tr><td>${String(index + 1).padStart(2,'0')} · ${lesson[0]}</td>${record ? `<td>${record.wpm} WPM</td><td>${record.accuracy}%</td><td>${formatDuration(record.time)}</td>` : `<td class="empty">${currentLocalizedUi().notYet}</td><td class="empty">--</td><td class="empty">--</td>`}</tr>`; }).join('');
  if (activeLanguage !== 'vi') document.querySelectorAll('#results-body tr').forEach((row, index) => { row.querySelector('td').textContent = `${String(index + 1).padStart(2,'0')} · ${localizedLessonName(index)}`; });
  document.querySelectorAll('#results-body .empty').forEach((cell, index) => { cell.textContent = index % 3 === 0 ? currentLocalizedUi().notYet : '--'; });
  updateContinueButton();
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
  document.querySelector('#free-feedback').textContent = activeLanguage === 'vi' ? (typed === freeText && freeText ? 'Hoan thanh! Hay chon mot doan van moi de luyen tiep.' : percent === 100 ? 'Rat tot, hay giu nhip go deu.' : 'Co ky tu chua dung, hay go cham lai mot chut.') : (siteLanguages[activeLanguage]?.practice || 'Practice');
  if (activeLanguage !== 'vi') document.querySelector('#free-feedback').textContent = siteLanguages[activeLanguage]?.practice || 'Practice';
}
function setFreeText(value) { freeText = value.trim(); resetFree(); freeSample.textContent = freeText || (activeLanguage === 'vi' ? 'Hay nhap hoac tao doan van de bat dau.' : (siteLanguages[activeLanguage]?.practice || 'Practice')); if (freeText) { drawFree(); freeInput.focus(); } }
function tickFree() { const seconds = Math.floor((Date.now() - freeStartedAt) / 1000); document.querySelector('#free-timer').textContent = `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`; }
const gamePhrases = [
  'quick fingers build steady typing habits every day', 'focus on accuracy and let your speed grow naturally',
  'smooth rhythm makes every keyboard challenge more enjoyable', 'practice with care and celebrate each small improvement'
];
const gameSample = document.querySelector('#game-sample'), gameInput = document.querySelector('#game-input');
let gameText = '', gameActive = false, gameSeconds = 30, gameCorrect = 0, gameInterval = null;
function setGameText() { gameText = `${gamePhrases[Math.floor(Math.random() * gamePhrases.length)]} ${gamePhrases[Math.floor(Math.random() * gamePhrases.length)]}.`; gameInput.value = ''; renderGame(); }
function renderGame() { const typed = gameInput.value; gameSample.innerHTML = [...gameText].map((char, index) => `<span class="${index < typed.length ? (typed[index] === char ? '' : 'wrong') : index === typed.length ? 'current' : ''}">${char === ' ' ? '&nbsp;' : escapeHtml(char)}</span>`).join(''); highlightGuide(gameText[typed.length]); }
function updateGameScore() { document.querySelector('#game-score').textContent = gameCorrect * 10; }
function finishGame() { clearInterval(gameInterval); gameActive = false; gameInput.disabled = true; const score = gameCorrect * 10, best = Math.max(Number(localStorage.getItem('typingease-game-best') || 0), score), gameUi = currentLocalizedUi().game; localStorage.setItem('typingease-game-best', best); document.querySelector('#game-best').textContent = best; document.querySelector('#game-status').textContent = formatUi(gameUi.finish, {score}); document.querySelector('#game-start').textContent = gameUi.replay; }
function startGame() { clearInterval(gameInterval); gameActive = true; gameSeconds = 30; gameCorrect = 0; const gameUi = currentLocalizedUi().game; document.querySelector('#game-time').textContent = gameSeconds; updateGameScore(); document.querySelector('#game-status').textContent = gameUi.focus; document.querySelector('#game-start').textContent = gameUi.running; gameInput.disabled = false; setGameText(); gameInput.focus(); gameInterval = setInterval(() => { gameSeconds -= 1; document.querySelector('#game-time').textContent = gameSeconds; if (gameSeconds <= 0) finishGame(); }, 1000); }

function makeKeyboard() {
  const keyboard = document.querySelector('#keyboard');
  keyboard.innerHTML = '';
  rows.forEach(row => { const line = document.createElement('div'); line.className = 'key-row'; row.forEach(label => { const key = document.createElement('span'); key.className = `key ${label.length > 1 ? 'wide' : ''} ${label === ' ' ? 'space' : ''} ${label === 'f' || label === 'j' ? 'home' : ''}`; key.dataset.key = label.toLowerCase(); key.textContent = label === ' ' ? 'Space' : label; line.append(key); }); keyboard.append(line); });
}
function renderLevels() {
  const isCollapsed = !lessonsExpanded && lessonIndex < 10;
  document.querySelector('#lesson-levels').innerHTML = lessons.map((item, i) => `<button class="level ${i === lessonIndex ? 'active' : ''} ${i < lessonIndex ? 'complete' : ''} ${isCollapsed && i >= 10 ? 'roadmap-hidden' : ''}" type="button" data-level="${i}"><b>${String(i + 1).padStart(2,'0')}</b>${localizedLessonName(i)}</button>`).join('');
  const weakUi = currentWeakKeyUi();
  document.querySelector('#lesson-title').textContent = weakPracticeActive ? weakUi.mode : localizedLessonName(lessonIndex);
  document.querySelector('#lesson-progress').textContent = weakPracticeActive ? weakUi.mode : (activeLanguage === 'vi' ? `Bài ${lessonIndex + 1} / ${lessons.length}` : `${localizedLessonName(lessonIndex)} / ${lessons.length}`);
  if (lessonIndex >= 10) lessonsExpanded = true;
  const lessonPath = document.querySelector('.lesson-path'), toggleButton = document.querySelector('#toggle-lessons'), actionText = currentHomeActionText();
  lessonPath.classList.toggle('is-expanded', lessonsExpanded);
  toggleButton.hidden = false;
  toggleButton.setAttribute('aria-expanded', String(lessonsExpanded));
  toggleButton.textContent = lessonsExpanded ? actionText.collapse : actionText.showAll;
}
function updateContinueButton() {
  const button = document.querySelector('#continue-lesson');
  const completedLessons = Object.keys(lessonRecords).map(Number).filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length);
  if (!completedLessons.length) { button.hidden = true; return; }
  const continueIndex = Math.min(Math.max(...completedLessons) + 1, lessons.length - 1);
  button.dataset.lesson = String(continueIndex);
  button.textContent = `${currentHomeActionText().continue} ${continueIndex + 1} →`;
  button.hidden = false;
}
function updateLessonState() { document.querySelector('.typing-card').classList.toggle('is-last-lesson', lessonIndex === lessons.length - 1); }
function updateLocalizedStaticUi() {
  const ui = currentLocalizedUi(), gameUi = ui.game;
  document.querySelectorAll('.mode-switch button')[2].textContent = gameUi.tab;
  document.querySelectorAll('.lesson-result span').forEach((item, index) => { item.textContent = [siteLanguages[activeLanguage]?.speed || 'Speed', siteLanguages[activeLanguage]?.accuracy || 'Accuracy', ui.errors, siteLanguages[activeLanguage]?.time || 'Time'][index]; });
  document.querySelector('#next-lesson').textContent = ui.next;
  document.querySelector('#retry-lesson').textContent = ui.retry;
  document.querySelector('#reset').title = ui.retry;
  const weakUi = currentWeakKeyUi();
  document.querySelector('#weak-keys-title').textContent = weakUi.title;
  document.querySelector('#weak-keys-empty').textContent = weakUi.empty;
  document.querySelector('#practice-weak-keys').textContent = weakUi.practice;
  document.querySelector('.game-kicker').textContent = gameUi.kicker;
  document.querySelector('.game-top h3').textContent = gameUi.title;
  document.querySelector('.game-top p:not(.game-kicker)').textContent = gameUi.description;
  document.querySelectorAll('.game-scoreboard span').forEach((item, index) => { item.textContent = [gameUi.time, gameUi.score, gameUi.best][index]; });
  gameInput.placeholder = gameUi.placeholder;
  if (gameActive) { document.querySelector('#game-start').textContent = gameUi.running; document.querySelector('#game-status').textContent = gameUi.focus; }
  else if (gameText) { document.querySelector('#game-start').textContent = gameUi.replay; document.querySelector('#game-status').textContent = formatUi(gameUi.finish, {score: gameCorrect * 10}); }
  else { document.querySelector('#game-sample').textContent = gameUi.idle; document.querySelector('#game-start').textContent = gameUi.start; document.querySelector('#game-status').textContent = gameUi.status; }
  document.querySelector('.explore-heading .eyebrow').innerHTML = `<i></i> ${ui.exploreTag}`;
  document.querySelector('#explore-title').textContent = ui.exploreTitle;
  document.querySelectorAll('.explore-card').forEach((card, index) => { const [title, description, cta] = ui.explore[index]; card.querySelector('h3').textContent = title; card.querySelector('p').textContent = description; card.querySelector('span').childNodes[0].nodeValue = `${cta} `; });
  document.querySelectorAll('.footer-links a').forEach((link, index) => { if (ui.explore[index]) link.textContent = ui.explore[index][0]; });
  document.querySelector('.footer-links').setAttribute('aria-label', ui.exploreTag);
  renderWeakKeys();
  renderDailyGoal();
}
function showLessonResult(correctCharacters, typedCharacters) {
  const seconds = Math.max(1, Math.floor((Date.now() - startedAt) / 1000));
  const minutes = Math.max(seconds / 60, 1 / 60), speed = Math.round(typedCharacters / 5 / minutes), resultAccuracy = Math.round(correctCharacters / typedCharacters * 100);
  document.querySelector('#result-wpm').textContent = `${speed} WPM`;
  document.querySelector('#result-accuracy').textContent = `${resultAccuracy}%`;
  document.querySelector('#result-errors').textContent = String(Math.max(0, typedCharacters - correctCharacters));
  document.querySelector('#result-time').textContent = formatDuration(seconds);
}
function highlightGuide(char) {
  const target = char === '\n' ? 'enter' : char?.toLowerCase() || '';
  document.querySelectorAll('.active-key,.active-finger').forEach(el => el.classList.remove('active-key','active-finger'));
  const matchedKeys = [...document.querySelectorAll(`.key[data-key="${target === ' ' ? ' ' : target}"]`)];
  const fallbackLabel = target === ' ' ? 'space' : target;
  (matchedKeys.length ? matchedKeys : [...document.querySelectorAll('.key')].filter(key => key.textContent.trim().toLowerCase() === fallbackLabel)).forEach(el => el.classList.add('active-key'));
  const finger = fingerMap[target]; if (finger) document.querySelector(`[data-finger="${finger}"]`)?.classList.add('active-finger');
}
function draw() {
  const lesson = currentLesson(), typed = input.value;
  prompt.innerHTML = [...lesson].map((char, index) => { const state = index < typed.length ? (typed[index] === char ? '' : 'wrong') : index === typed.length ? 'current' : ''; if (char === '\n' && lessonIndex >= 7) return `<br><span class="${state} enter-cue">↵ Enter</span><br>`; return `<span class="${state}">${char === ' ' ? '&nbsp;' : char}</span>`; }).join('');
  const correct = [...typed].filter((char, i) => char === lesson[i]).length, percent = typed.length ? Math.round(correct / typed.length * 100) : null;
  accuracy.innerHTML = `${percent ?? '--'}<small>%</small>`;
  if (!typed.length) setTimeout(() => { feedback.textContent = activeLanguage === 'vi' ? 'Bắt đầu gõ để xem độ chính xác của bạn.' : (siteLanguages[activeLanguage]?.practice || 'Practice'); }, 0);
  if (startedAt) { const minutes = Math.max((Date.now() - startedAt) / 60000, 1 / 60); wpm.innerHTML = `${Math.round(correct / 5 / minutes)} <small>WPM</small>`; }
  highlightGuide(lesson[typed.length]);
  if (typed.length >= lesson.length && !lessonCompleted) {
    lessonCompleted = true;
    clearInterval(interval);
    document.querySelector('.typing-card').classList.add('lesson-finished');
    if (!weakPracticeActive) saveLessonResult(correct, typed.length);
    showLessonResult(correct, typed.length);
    renderWeakKeys();
    const ui = currentLocalizedUi();
    feedback.textContent = percent === 100 ? ui.perfect : formatUi(ui.accuracy, {accuracy: percent});
  } else if (!lessonCompleted) {
    if (activeLanguage !== 'vi') feedback.textContent = siteLanguages[activeLanguage]?.practice || 'Practice';
    else feedback.textContent = percent === 100 ? 'Rất tốt, cứ giữ nhịp này nhé!' : 'Có vài ký tự chưa đúng, hãy gõ chậm lại một chút.';
  }
}
function reset(focus = false) { clearInterval(interval); startedAt = null; lessonCompleted = false; lessonWeakKeys = {}; recordedWeakKeyPositions = new Set(); observedInputLength = 0; input.value = ''; timer.textContent = '00:00'; wpm.innerHTML = '0 <small>WPM</small>'; feedback.textContent = activeLanguage === 'vi' ? 'Giữ các ngón tay ở hàng phím cơ sở nhé.' : (siteLanguages[activeLanguage]?.practice || 'Practice'); document.querySelector('.typing-card').classList.remove('lesson-finished'); renderWeakKeys(); draw(); if (focus) input.focus(); }
function setLesson(index) { weakPracticeActive = false; weakPracticeText = ''; lessonIndex = index; document.querySelector('#lesson-number').textContent = String(index + 1).padStart(2,'0'); document.querySelector('#lesson-title').textContent = localizedLessonName(index); document.querySelector('#lesson-progress').textContent = isEnglishHomepage ? `Lesson ${index + 1} / ${lessons.length}` : `Bài ${index + 1} / ${lessons.length}`; updateLessonState(); renderLevels(); reset(true); }
function startWeakPractice() { const currentKeys = getTopWeakKeys(lessonWeakKeys), selectedKeys = currentKeys.length ? currentKeys : getTopWeakKeys(), keys = selectedKeys.map(([key]) => key); if (!keys.length) return; weakPracticeActive = true; weakPracticeText = buildWeakPractice(keys, currentKeys.length ? lessonWeakKeys : weakKeyRecords); document.querySelector('#lesson-number').textContent = '★'; document.querySelector('.typing-card').classList.remove('is-last-lesson'); renderLevels(); reset(true); document.querySelector('.practice').scrollIntoView({behavior:'smooth'}); }
function openLesson(index) { setLesson(index); document.querySelector('.typing-card').scrollIntoView({behavior:'smooth', block:'start'}); setTimeout(() => input.focus(), 500); }
function tick() { const secs = Math.floor((Date.now() - startedAt) / 1000); timer.textContent = `${String(Math.floor(secs / 60)).padStart(2,'0')}:${String(secs % 60).padStart(2,'0')}`; }
input.addEventListener('input', () => { if (!startedAt && input.value) { startedAt = Date.now(); interval = setInterval(tick, 1000); } if (startedAt || input.value) recordPracticeActivity(); if (!weakPracticeActive) trackWeakKeyErrors(input.value); draw(); });
freeInput.addEventListener('input', () => { if (!freeText) return; if (!freeStartedAt && freeInput.value) { freeStartedAt = Date.now(); freeInterval = setInterval(tickFree, 1000); } if (freeStartedAt || freeInput.value) recordPracticeActivity(); drawFree(); });
gameInput.addEventListener('input', () => { if (!gameActive) return; const typed = gameInput.value; if (typed.length >= gameText.length) { gameCorrect += [...typed].filter((char, index) => char === gameText[index]).length; updateGameScore(); setGameText(); } else renderGame(); });
document.querySelector('#game-start').addEventListener('click', startGame);
document.querySelector('#game-best').textContent = localStorage.getItem('typingease-game-best') || 0;
document.querySelector('#use-text').addEventListener('click', () => setFreeText(customText.value));
document.querySelector('#random-text').addEventListener('click', () => { const next = freeSamples[Math.floor(Math.random() * freeSamples.length)]; customText.value = next; setFreeText(next); });
document.querySelector('#reset').addEventListener('click', () => reset(true));
document.querySelector('.start-button').addEventListener('click', () => openLesson(0));
const lessonLevels = document.querySelector('#lesson-levels');
lessonLevels.addEventListener('click', event => { const button = event.target.closest('.level[data-level]'); if (!button || !lessonLevels.contains(button)) return; const index = Number(button.dataset.level); if (Number.isInteger(index) && index >= 0 && index < lessons.length) openLesson(index); });
document.querySelector('#continue-lesson').addEventListener('click', event => { const index = Number(event.currentTarget.dataset.lesson); if (Number.isInteger(index) && index >= 0 && index < lessons.length) openLesson(index); });
document.querySelector('#toggle-lessons').addEventListener('click', () => { lessonsExpanded = !lessonsExpanded; renderLevels(); });
document.querySelectorAll('[data-scroll]').forEach(b => b.addEventListener('click', () => document.querySelector(b.dataset.scroll).scrollIntoView({behavior:'smooth'})));
document.querySelectorAll('.mode-switch button').forEach((button, index) => button.addEventListener('click', () => { document.querySelector('.mode-switch .selected').classList.remove('selected'); button.classList.add('selected'); const card = document.querySelector('.typing-card'); card.classList.remove('lesson-finished'); card.classList.toggle('free-mode', index === 1); card.classList.toggle('game-mode', index === 2); if (index !== 2 && gameActive) finishGame(); if (index === 0) input.focus(); else if (index === 1 && !freeText) { const sample = freeSamples[Math.floor(Math.random() * freeSamples.length)]; customText.value = sample; setFreeText(sample); } else if (index === 1) freeInput.focus(); }));
document.querySelector('#next-lesson').addEventListener('click', () => { document.querySelector('.typing-card').classList.remove('lesson-finished'); setLesson(Math.min(lessonIndex + 1, lessons.length - 1)); });
document.querySelector('#retry-lesson').addEventListener('click', () => { document.querySelector('.typing-card').classList.remove('lesson-finished'); reset(true); });
document.querySelector('#practice-weak-keys').addEventListener('click', startWeakPractice);
document.querySelectorAll('[data-daily-goal]').forEach(button => button.addEventListener('click', () => setDailyGoal(Number(button.dataset.dailyGoal))));
document.querySelector('#clear-results').addEventListener('click', () => { const message = activeLanguage === 'vi' ? 'Bạn có muốn xoá toàn bộ lịch sử thành tích?' : (siteLanguages[activeLanguage]?.results || 'Results'); if (confirm(message)) { lessonRecords = {}; localStorage.removeItem(SCORE_STORAGE_KEY); renderRecords(); } });
function applyLanguage(code) {
  const t = siteLanguages[code] || siteLanguages.vi;
  activeLanguage = code;
  document.documentElement.lang = code;
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.topbar nav a').forEach((link, index) => { link.textContent = t.nav[index]; });
  const loginButton = document.querySelector('.login');
  if (loginButton) loginButton.innerHTML = `${t.login} <span>→</span>`;
  if (!isEnglishHomepage) {
    document.querySelector('h1').innerHTML = `${t.hero[0]}<br><em>${t.hero[1]}</em>`;
    document.querySelector('.intro').textContent = t.intro;
  }
  const eyebrows = document.querySelectorAll('.eyebrow');
  eyebrows[0].innerHTML = `<i></i> ${t.daily}`; eyebrows[1].innerHTML = `<i></i> ${t.ready}`;
  const homeActions = currentHomeActionText();
  document.querySelector('.start-button').innerHTML = `${homeActions.start} <span>→</span>`;
  document.querySelector('.secondary-button').innerHTML = `${homeActions.speedTest} <span>→</span>`;
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
  document.querySelectorAll('.results-summary span').forEach((item, index) => { item.textContent = [extra.completed, extra.bestSpeed, extra.bestTime][index]; });
  document.querySelector('.benefits .eyebrow').innerHTML = `<i></i> ${extra.benefitTag}`; document.querySelector('footer p').textContent = extra.footer;
  if (!isEnglishHomepage) document.title = code === 'vi' ? 'Luyện gõ 10 ngón online miễn phí | TypingEase' : 'TypingEase — Touch typing practice';
  if (code !== 'vi') {
    document.querySelector('.mini-top span').textContent = t.practice; document.querySelector('.visual-card p').textContent = t.benefits;
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
    document.querySelector('.typing-card>.typing-label').textContent = 'Bắt đầu gõ tại đây'; input.placeholder = 'Nhấn vào đây và bắt đầu gõ...';
    document.querySelector('#feedback').textContent = 'Giữ các ngón tay ở hàng phím cơ sở nhé.';
    document.querySelectorAll('.finger-legend span').forEach((item, index) => { item.textContent = ['Út','Áp út','Giữa','Trỏ','Cái'][index]; });
    document.querySelectorAll('.finger-guide span').forEach((item, index) => { item.textContent = ['Út','Áp út','Giữa','Trỏ'][index]; });
    document.querySelectorAll('.hand span').forEach((item, index) => { item.textContent = index ? 'Bàn tay phải' : 'Bàn tay trái'; });
    document.querySelectorAll('.results-table th').forEach((item, index) => { item.textContent = ['Bài học','Tốc độ tốt nhất','Chính xác','Thời gian nhanh nhất'][index]; });
    document.querySelectorAll('.benefit-list h3').forEach((item, index) => { item.textContent = ['Học đúng tư thế','Luyện tập có nhịp','Theo dõi tiến bộ'][index]; });
    document.querySelectorAll('.benefit-list p').forEach((item, index) => { item.textContent = ['Làm quen vị trí các ngón tay trước khi tăng tốc độ.','Các bài học ngắn giúp bạn duy trì sự tập trung.','Biết tốc độ và độ chính xác của mình sau mỗi bài gõ.'][index]; });
  }
  if (isEnglishHomepage) {
    document.querySelector('#lesson-progress').textContent = `Lesson ${lessonIndex + 1} / ${lessons.length}`;
    document.querySelector('.tip-card .tip-number').textContent = 'QUICK TIP';
    document.querySelector('.tip-card h3').textContent = "Don't look at the keyboard";
    document.querySelector('.tip-card>p:not(.tip-number)').textContent = 'Place your index fingers on F and J. Their raised bumps help you find the home row without looking down.';
    document.querySelectorAll('.finger-legend span').forEach((item, index) => { item.textContent = ['Pinky','Ring','Middle','Index','Thumb'][index]; });
    document.querySelectorAll('.finger-guide span').forEach((item, index) => { item.textContent = ['Pinky','Ring','Middle','Index'][index]; });
    document.querySelectorAll('.hand b').forEach((item, index) => { item.textContent = ['Pinky','Ring','Middle','Index','Thumb','Thumb','Index','Middle','Ring','Pinky'][index]; });
    document.querySelectorAll('.hand span').forEach((item, index) => { item.textContent = index === 0 ? 'Left hand' : 'Right hand'; });
  }
  document.querySelector('.trust-row p').textContent = homeActions.trust;
  updateLocalizedStaticUi();
  renderLevels(); renderRecords();
  localStorage.setItem('typingease-language', code);
}
const isEnglishHomepage = document.documentElement.lang === 'en' && /^\/en\/?$/.test(location.pathname);
document.querySelector('#language').addEventListener('change', event => {
  if (isEnglishHomepage && event.target.value === 'vi') { location.href = '../'; return; }
  if (!isEnglishHomepage && event.target.value === 'en') { location.href = './en/'; return; }
  applyLanguage(event.target.value);
});
const savedLanguage = isEnglishHomepage ? 'en' : (localStorage.getItem('typingease-language') || 'vi');
document.querySelector('#language').value = savedLanguage;
applyLanguage(savedLanguage);
updateLessonState(); makeKeyboard(); renderLevels(); renderRecords(); draw();
