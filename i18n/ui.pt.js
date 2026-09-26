/* i18n/ui.pt.js — lớp tiếng Bồ Đào Nha (Brasil).
 *
 * Nạp bởi mọi trang dưới /pt/, bằng <script src="/i18n/ui.pt.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Mỗi module dùng chung giữ bảng tiếng Việt của nó làm mặc định rồi trải object
 * này lên trên. Khoá thiếu ở đây thì hiện tiếng Việt — nên tên khoá phải khớp CHÍNH XÁC với bảng
 * nó ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`.
 *
 * Xưng hô với người học bằng "você", như trong data/courses/pt.js.
 */
window.TypingEaseUI = {
  lang: 'pt',

  /* Tuyệt đối, vì /pt/aprender/ nằm sâu hai cấp. */
  routes: {
    home: '/pt/',
    lessons: '/pt/licoes/',
    learn: '/pt/aprender/',
    // Chưa có các trang này bằng tiếng Bồ. `null` là tín hiệu BỎ liên kết.
    test: '/pt/teste-de-digitacao/',
    progress: '/pt/progresso/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /pt/ */
  home: {
    nav: ['Praticar', 'Curso'],
    roadmapKicker: '{total} lições · {units} unidades',
    roadmapAll: 'Ver as {total} lições →',
    unitTitle: 'Unidade {index} · {title}',
    unitDone: '{done}/{total} lições ✓',
    railDone: '✓',
    railSoon: 'Em breve',
    railNote: 'As próximas unidades estão sendo escritas — as lições que ainda não abriram aparecem em cinza.',
    teaser: 'Unidade {index} · {title} ({count} lições)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Mais prática',
    shortcuts: [
      ['Teste de velocidade', 'Meça as suas palavras por minuto e a sua precisão.'],
      ['Teclas fracas', 'Exercícios feitos com as teclas que você mais erra.'],
      ['Prática livre', 'Cole o seu próprio texto e digite do seu jeito.']
    ],
    continueKicker: 'CONTINUAR',
    continueName: 'Lição {n} · {title}',
    continueCount: 'Unidade {unit} · tela {screen}/{screens}',
    continueGo: '▶ Continuar (Enter)',
    continueRedo: '↻ Refazer a lição {n}',
    continueMap: 'Ver o curso',
    streak: '🔥 {days} dias · {minutes} min hoje',
    coachWeak: 'Atenção: <b>{keys}</b> estão segurando você — que tal um minuto com elas?',
    legacy: 'Você terminou {n} lições do curso anterior — as unidades 1 e 2 já estão abertas.',
    doneKicker: 'MANTENHA O RITMO',
    doneName: 'Você terminou tudo o que está escrito',
    doneCount: 'A próxima unidade está a caminho. Revise uma lição para não perder o ritmo.',
    doneGo: '▶ Ver o curso (Enter)',
    exploreKicker: 'Recursos do TypingEase',
    footer: 'Vá um pouco mais devagar e você vai chegar muito mais longe.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. */
  localized: {
    exploreTitle: 'Conheça o TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá này không bao giờ đặt inputMode "telex". */
  player: {
    loading: 'Carregando a lição…',
    missingTitle: 'Esta lição ainda não tem conteúdo',
    missingBody: 'Nada foi carregado de <code>{path}</code>. A lição ainda está sendo escrita — tente mais tarde ou escolha outra no curso.',
    noCurriculum: 'O índice do curso não foi carregado (<code>data/curriculum.pt.js</code>).',
    fixtureNote: 'Rodando com o conteúdo de exemplo de <code>hoc/_fixture/</code> — a lição real ainda não está em <code>data/lessons/</code>.',
    screenOf: 'Tela {n} / {total}',
    newKey: 'TECLA NOVA',
    pressToContinue: 'Aperte <b>{key}</b> para continuar',
    enterToContinue: 'Aperte <b>Enter</b> para continuar',
    found: 'É essa.',
    foundBody: 'Lembre onde fica <b>{key}</b> — agora vamos praticar.',
    accuracyLive: '{accuracy}% de precisão',
    errorsLive: '{count} erros',
    tokensLive: '{count} palavras',
    great: 'Excelente.',
    good: 'Muito bem.',
    pass: 'Aprovado.',
    fail: 'Abaixo de {min}% — vale a pena refazer esta tela.',
    resultAccuracy: '{accuracy}% de precisão',
    resultWpm: '{wpm} PPM',
    resultErrors: '{count} erros',
    resultTokens: '{count} palavras corretas',
    slowKey: '<b>{key}</b> foi a sua tecla mais lenta ({ms} s cada) — deixe o dedo alcançá-la e voltar logo para a fila de repouso.',
    keepAccuracy: 'Diminua o ritmo e a precisão sobe — a velocidade vem depois, nunca o contrário.',
    continueEnter: 'Continuar → (Enter)',
    redoScreen: 'Refazer esta tela',
    redoScreenAdvised: 'Refazer esta tela (recomendado)',
    skipScreen: 'Pular',
    lessonDone: 'CONCLUÍDA',
    learned: 'Você já conhece {count} teclas:',
    statWpm: 'Velocidade',
    statAccuracy: 'Precisão',
    statTime: 'Tempo',
    statStars: 'Estrelas',
    technique: 'Vale a pena lembrar',
    weakTitle: 'Teclas que vale a pena praticar mais',
    weakButton: 'Praticar um minuto',
    unitProgress: '{unit} · {done}/{total} lições',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Voltar para a página inicial (Enter)',
    redoLesson: '↻ Começar a lição de novo',
    home: 'Página inicial',
    noMoreTitle: 'Você chegou ao fim do que está escrito',
    noMoreBody: 'A próxima unidade ainda está sendo feita. Enquanto isso, revise uma lição — uma segunda volta em bom ritmo vale mais do que parece.',
    notReadyTitle: 'Esta lição ainda não tem conteúdo',
    notReadyBody: '<b>{title}</b> está no curso, mas o conteúdo ainda está sendo escrito. Escolha uma lição que já esteja aberta.',
    weakPage: 'Prática de teclas fracas',
    badgeNew: 'Nova medalha',
    badgeAll: 'Ver todas as medalhas →',
    shiftFinger: 'o mindinho da outra mão',
    testPage: 'Teste de velocidade',
    mobileNote: 'Este curso foi feito para um teclado de computador — dez dedos precisam de dez teclas de verdade. Você pode experimentar no celular, mas volte para um teclado para aprender de verdade.',
    mobileNoteClose: 'Entendi',
    tapToType: 'Toque para digitar',
    menuTitle: 'Em pausa',
    menuResume: 'Continuar digitando',
    menuRedo: 'Refazer esta tela',
    menuSkip: 'Pular esta tela',
    menuExit: 'Voltar para a página inicial',
    clock: '{seconds} s',
    lessonNumber: 'Lição {number}',
    pageTitle: 'Lição · TypingEase',
    screenTip: 'Tela {number} · {type}',
    firstLesson: 'Voltar para a primeira lição'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'o mindinho esquerdo', LR: 'o anelar esquerdo', LM: 'o dedo médio esquerdo',
    LI: 'o indicador esquerdo', LT: 'o polegar esquerdo',
    RT: 'o polegar direito', RI: 'o indicador direito', RM: 'o dedo médio direito',
    RR: 'o anelar direito', RP: 'o mindinho direito'
  },

  /* keyboard/boot.js — cùng những ngón đó, theo tên mà BÀN PHÍM dùng. */
  keyboardFingers: {
    'left-pinky': 'o mindinho esquerdo', 'left-ring': 'o anelar esquerdo',
    'left-middle': 'o dedo médio esquerdo', 'left-index': 'o indicador esquerdo',
    'left-thumb': 'o polegar esquerdo', thumb: 'o polegar',
    'right-index': 'o indicador direito', 'right-middle': 'o dedo médio direito',
    'right-ring': 'o anelar direito', 'right-pinky': 'o mindinho direito'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Configurações do teclado',
    showKeyboard: 'Mostrar o teclado',
    showHands: 'Mostrar as mãos',
    rightHandOnly: 'Só a mão direita',
    leftHandOnly: 'Só a mão esquerda',
    animatedHands: 'As mãos acompanham as teclas',
    letterCase: 'Letras das teclas',
    uppercase: 'MAIÚSCULAS',
    lowercase: 'minúsculas',
    boardAria: 'Teclado na tela', keypadAria: 'Teclado numérico na tela',
    keyboardShape: 'Tipo de teclado', shapeAuto: 'Conforme o layout', shapeAnsi: '104 teclas (Shift esquerdo longo)', shapeIso: '105 teclas (tecla ao lado do Shift esquerdo)',
    layout: 'Layout do teclado',
    save: 'Salvar',
    cancel: 'Cancelar',
    close: 'Fechar'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} lições feitas`,
    legacy: n => `Você terminou ${n} lições do curso anterior — as unidades 1 e 2 já estão abertas.`,
    ctaResume: '▶ Continuar', ctaStart: '▶ Começar',
    ctaLesson: (verb, number, title) => `${verb} a lição ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Você chegou ao fim do que está escrito <span>→</span>',
    rowResume: (screen, total) => `▶ Continuar · tela ${screen}/${total}`,
    rowStart: '▶ Começar',
    rowDone: '✓ Feita',
    unlocked: 'Aberta',
    unlockAfter: n => `Abre depois da lição ${n}`,
    unlockNow: 'Abrir esta unidade agora'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ ghi lúc chạy; chữ tĩnh ở kiem-tra-toc-do-go/text/pt.mjs.
   * Các đoạn văn dưới đây chỉ dùng ký tự gõ được trên ABNT2 (ç, phím chết ´ ` ~ ^), không ngoặc cong. */
  test: {
    wpmUnit: 'PPM',
    passage: 'Aprender a digitar sem olhar para o teclado leva algumas semanas de prática calma. No começo, os dedos parecem lentos e a vontade de espiar as teclas é grande. Com o tempo, cada dedo encontra o seu lugar na fileira do meio, e as palavras começam a sair inteiras. Não é preciso correr: quem digita com atenção e poucos erros acaba ficando rápido quase sem perceber.',
    passages: [
      'Aprender a digitar sem olhar para o teclado leva algumas semanas de prática calma. No começo, os dedos parecem lentos e a vontade de espiar as teclas é grande. Com o tempo, cada dedo encontra o seu lugar na fileira do meio, e as palavras começam a sair inteiras. Não é preciso correr: quem digita com atenção e poucos erros acaba ficando rápido quase sem perceber.',
      'Choveu a noite inteira, e a manhã chegou com cheiro de terra molhada. Na rua, as crianças pulavam as poças a caminho da escola, enquanto os adultos seguravam os guarda-chuvas contra o vento. Perto do meio-dia, o céu clareou de repente e o sol secou as calçadas em poucos minutos. À tarde, quem passasse por ali nem diria que tinha chovido tanto.',
      'A feira do bairro começa cedo, antes das seis horas. Os feirantes montam as barracas, arrumam as frutas em pilhas coloridas e anunciam os preços em voz alta. Tem banana, laranja, mamão, abacaxi e verduras que ainda guardam o orvalho da madrugada. Quem chega por último encontra menos variedade, mas às vezes leva três maçãs pelo preço de duas.',
      'O trem saiu da estação pontualmente às oito e quinze. Pela janela, a cidade foi ficando para trás, e logo apareceram pastos, rios estreitos e pequenas casas com varandas. Uma senhora no banco da frente tricotava um cachecol azul, sem pressa, enquanto o rapaz ao lado lia um livro grosso. A viagem durou quase quatro horas, mas passou mais rápido do que eu esperava.',
      'Para fazer um bolo simples, basta misturar três ovos, duas xícaras de farinha, uma de açúcar e meia de óleo. Depois, junte uma xícara de leite morno e uma colher de fermento, mexendo devagar. Asse em forno médio por uns quarenta minutos. O segredo é não abrir a porta antes da hora; senão, a massa murcha e o bolo fica pesado. Espere esfriar um pouco antes de cortar.',
      'A biblioteca da cidade fica numa casa antiga, com janelas altas e um piso de madeira que range a cada passo. Lá dentro, o silêncio só é quebrado pelo som das páginas virando. Há estudantes preparando provas, aposentados lendo jornal e crianças escolhendo gibis na estante mais baixa. A bibliotecária conhece quase todos pelo nome e, quando alguém devolve um livro, sempre pergunta: "Já leu este aqui?"',
      'No domingo de manhã, a praça se enche de gente. Alguns caminham em volta do lago, outros andam de bicicleta ou sentam nos bancos para conversar. Um vendedor de pipoca estaciona o carrinho perto do coreto, e o cheiro de manteiga se espalha pelo ar. Quando o relógio da torre bate onze horas, as famílias começam a voltar para casa, pensando no almoço.',
      'Plantar uma horta pequena no quintal exige mais paciência do que espaço. Alface, cebolinha, salsa e tomate-cereja crescem bem em canteiros estreitos, desde que recebam sol pela manhã e água no fim da tarde. É bom observar as folhas todos os dias: manchas ou buracos indicam que algo não vai bem. A primeira colheita, mesmo modesta, costuma dar um orgulho enorme.',
      'Na segunda-feira, a equipe se reuniu às nove para planejar a semana. Cada pessoa contou em que estava trabalhando, quais tarefas estavam atrasadas e do que precisava para terminar. A conversa foi curta e objetiva, e ninguém saiu da sala sem saber o que fazer. Depois, com o café na mão, todos voltaram às suas mesas, e o escritório se encheu do barulho suave dos teclados.'
    ],
    title: 'Teste de digitação de {seconds} segundos',
    titleMinutes: 'Teste de digitação de {minutes} min',
    ready: 'Quando quiser, pode começar.',
    running: 'Calculando o seu resultado em tempo real.',
    finished: 'O tempo acabou depois de {seconds} segundos. Resultado: {wpm} PPM, {accuracy}% de precisão, {errors} erros.',
    finishedMinutes: 'O tempo acabou depois de {minutes} min. Resultado: {wpm} PPM, {accuracy}% de precisão, {errors} erros.',
    comparisonSame: 'Igual ao seu resultado anterior.',
    comparisonDelta: '{delta} PPM em relação ao resultado anterior',
    progressEmpty: 'Ainda não há dados suficientes. Faça alguns testes para ver o seu progresso.',
    progressNone: 'Ainda não há dados de progresso.',
    metricEmpty: 'Não há dados para esta medida.',
    chartEmpty: 'Não há dados adequados para desenhar este gráfico.',
    chartLabel: '{metric} ao longo do tempo',
    trendEmpty: 'Não há dados suficientes para calcular uma tendência.',
    trendSame: 'Nenhuma mudança desde o início deste período.',
    trendDelta: '{change} {measure} desde o início deste período.',
    measureAccuracy: 'pontos de precisão',
    accuracyName: 'Precisão',
    progressSummary: '{count} testes nos últimos {days} dias. PPM médio {wpm}, precisão média {accuracy}%.',
    dateLocale: 'pt-BR'
  },

  /* tien-do/progress-page.js — chữ trang tiến độ ghi lúc chạy; chữ tĩnh ở tien-do/text/pt.mjs. */
  progress: {
    levels: ['Começando', 'Pegando o jeito', 'Firme', 'Rápido', 'Fluente'],
    legacy: n => `Você terminou ${n} lições do curso anterior — as unidades 1 e 2 já estão abertas.`,
    unit: index => `Unidade ${index}`,
    soon: ' · em breve',
    trendHint: n => (n === 1 ? 'Mais uma lição e já dá para traçar uma tendência.'
      : `Mais ${n} lições e já dá para traçar uma tendência.`),
    stripLevel: level => `Nível: ${level}`,
    statWpm: 'PPM recente',
    statAccuracy: 'Precisão',
    statSessions: 'Sessões',
    target: (wpm, accuracy) => `Próxima meta: <b>${wpm}</b> PPM · <b>${accuracy}</b>% de precisão`,
    adviceStart: 'Faça uma lição e esta página vai saber em que ponto você está.',
    actionStart: 'Começar a lição 1 →',
    adviceWeak: keys => `${keys} estão segurando você — um minuto só com elas já faz muita diferença.`,
    actionWeak: keys => `Praticar ${keys} →`,
    adviceSteady: 'Você está avançando bem — uma lição por dia mantém o ritmo.',
    actionLesson: (number, title) => `Lição ${number} · ${title} →`,
    actionTest: 'Teste de velocidade →',
    actionLessons: 'Ver o curso →',
    heatLegend: 'Precisão por tecla',
    heatStrong: 'Firme',
    heatFair: 'Às vezes sim, às vezes não',
    heatWeak: 'Precisa de prática',
    badgeDate: at => new Date(at).toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Conquistada em ${date}` : 'Conquistada'),
    number: value => value.toLocaleString('pt-BR'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minutos`,
    streak: days => (days === 1 ? '🔥 1 dia seguido' : `🔥 ${days} dias seguidos`),
    bestStreak: days => (days === 1 ? 'Recorde: 1 dia' : `Recorde: ${days} dias`),
    today: minutes => (minutes === 1 ? '1 minuto hoje' : `${minutes} minutos hoje`),
    clearConfirm: 'Apagar todo o progresso e as notas guardados neste aparelho?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. */
  badges: {
    'first-step': { title: 'Primeiro passo', hint: 'Termine a sua primeira lição.' },
    'unit-1': { title: 'Uma unidade feita', hint: 'Termine uma unidade inteira.' },
    'stars-30': { title: '30 estrelas', hint: 'Junte 30 estrelas no curso.' },
    'stars-90': { title: '90 estrelas', hint: 'Junte 90 estrelas no curso.' },
    'streak-3': { title: 'Três dias seguidos', hint: 'Cumpra a sua meta diária três dias seguidos.' },
    'streak-7': { title: 'Uma semana inteira', hint: 'Cumpra a sua meta diária sete dias seguidos.' },
    'clean-40': { title: '40 PPM limpas', hint: 'Uma volta a 40 PPM com 95% de precisão ou mais.' },
    'clean-60': { title: '60 PPM limpas', hint: 'Uma volta a 60 PPM com 95% de precisão ou mais.' },
    'typed-5000': { title: '5.000 teclas', hint: 'Digite cinco mil toques no total.' }
  }
};
