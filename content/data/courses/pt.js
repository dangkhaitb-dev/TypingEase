/* data/courses/pt.js — khoá học tiếng Bồ Đào Nha (Brasil): cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/pt/*.json khi
 * trình duyệt nhận được.
 *
 * BỐ CỤC 178 — ABNT2. Ba điều quyết định hình dạng khoá:
 *   - ô Semicolon in ra ç: bài 4 dạy `a` và `ç`, chữ đặc trưng của tiếng Bồ nằm ngay hàng cơ sở.
 *   - ô Quote là phím chết ~ (Shift: ^ chết): ã õ tới ở bài dấu câu u2-l08.
 *   - ô BracketLeft là phím chết ´ (Shift: ` chết): á é í ó ú tới ở bài cột ngoài u3-l02.
 * Dấu chấm có ô riêng và hàng số là chữ số thật, nên không cần `shiftUnlocks` hay
 * `digitsAreShifted`. Không khai `symbolsLive`: trên Windows cả ~ ^ ´ ` của ABNT2 đều là phím chết.
 * â ê ô à (Shift + phím chết) không dạy được — xem ghi chú đầu data/words/pt.js.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Tiếng Bồ Brasil, xưng hô với người học bằng **você**, nhất quán.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.pt = {
  lang: 'pt',
  name: 'Português',

  keyboardId: 178,

  progressKey: 'typingease-progress-pt-v1',
  badgesKey: 'typingease-badges-pt-v1',

  // Có ç và dấu câu của vùng chữ (; , . - và dấu nháy của bố cục không phím chết). KHÔNG có
  // ~ ´: trên ABNT2 chúng là phím chết, gõ một mình không hiện ra gì.
  letterTest: "^[a-zç;',.\\-]$",

  /*
   * CÁC HỌ KHÁC. Chỉ phần KHÁC khoá 178; mọi thứ không khai lại thì dùng bản ở dưới.
   *
   * ABNT2 sem teclas mortas (179): chữ cái y hệt 178, nhưng ô BracketLeft in ra dấu nháy ' thay
   * cho ´, và ~ ^ ` là KÝ TỰ THẬT. Trên bàn phím này không gõ được á é í ó ú, cũng không gõ được
   * ã õ — câu nào nói tới dấu thì phải viết lại.
   */
  families: {
    'sem-teclas-mortas': {
      symbolsLive: ['~', '^', '`', '¨'],
      teaching: {
        introEdge: 'As teclas da borda direita, todas do mindinho. Neste teclado, uma delas é o apóstrofo, e nenhuma é tecla morta.',
        edgeBackToWords: 'De volta às palavras, com o teclado inteiro disponível.',
        summary: {
          edge: 'A coluna da borda direita: seis teclas, todas do mindinho, entre elas o apóstrofo.'
        },
        intro: {
          edge: 'O mindinho direito cuida de mais teclas do que qualquer outro dedo, e as da borda são as que quase ninguém pratica. Elas ficam mais longe da fila de repouso do que qualquer outra, então o truque é o de sempre: sair, apertar e voltar, sem arrastar a mão junto.'
        },
        congrats: {
          edge: 'Essa coluna é a que fica pela metade em quase todos os cursos. No seu, não.'
        },
        units: {
          u2: { title: 'O resto do alfabeto',
            summary: 'Fila de cima, fila de baixo, pontuação e maiúsculas — o alfabeto inteiro, mais Shift e Enter. Neste teclado o til é um caractere de verdade, não uma tecla morta.' },
          u3: { title: 'Números, sinais e velocidade',
            summary: 'A fila dos números, a coluna da borda direita, e depois parágrafos longos em ritmo constante.' }
        }
      }
    }
  },

  teaching: {
    and: ' e ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: {
      ',': 'a vírgula', '.': 'o ponto', ';': 'o ponto e vírgula', ':': 'os dois-pontos',
      "'": 'o apóstrofo', '-': 'o hífen', '~': 'o til', '´': 'o acento agudo'
    },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Todas as outras teclas',
      unitSummary: 'Os {count} caracteres deste teclado que o curso ainda não usou, cada um digitado onde ele realmente aparece.',
      groupSymbols: 'As teclas que faltam',
      groupFinish: 'Feche a unidade',
      titleNumberRow: 'Os sinais da fila dos números',
      titleKeys: '{keys}',
      titleReview: 'Todos os sinais juntos',
      summaryKeys: 'Nesta lição: {keys}.',
      summaryReview: 'Todos os sinais da unidade, misturados com palavras e números.',
      summaryTest: 'Um teste cronometrado com todas as teclas do teclado.',
      introLesson: 'Teclas que o curso ainda não usou: {keys}. {shiftNote}',
      shiftNote: 'Todas saem com Shift e uma tecla que os seus dedos já conhecem — Shift com o mindinho da outra mão.',
      shiftNoteMixed: 'Algumas precisam de Shift, com o mindinho da outra mão; as outras têm tecla própria, que o curso ainda não tinha usado.',
      introKey: 'Quem aperta {key} é {finger}{shift}.',
      introKeyShift: ', com Shift na outra mão',
      drillOne: 'Primeiro {key} sozinho, e depois onde ele realmente aparece.',
      burst: 'Uma rajada de trechos curtos com estes caracteres.',
      together: 'Tudo o que esta lição trouxe, misturado.',
      inWords: 'Palavras de novo, com os sinais no lugar.',
      introReview: 'Nenhuma tecla nova. Todos os caracteres da unidade, misturados com palavras e números.',
      reviewFirst: 'Os sinais, no mesmo ritmo das letras em volta deles.',
      reviewLine: 'Mantenha o ritmo também nos sinais; são teclas como as outras.',
      congratsKeys: '{keys}: agora debaixo dos seus dedos. O sinal sai tão fácil quanto a letra ao lado.',
      congratsReview: 'Todas as teclas deste teclado já tiveram a sua vez.',
      introTest: 'Um teste cronometrado com tudo, sinais incluídos.',
      congratsTest: 'Esse era o teclado inteiro. Não sobrou nele nenhuma tecla que este curso não tenha ensinado a você.',
      testText: 'Palavras, números e sinais. O mesmo ritmo do começo ao fim.'
    },

    fingers: {
      LP: 'o mindinho esquerdo', LR: 'o anelar esquerdo', LM: 'o dedo médio esquerdo',
      LI: 'o indicador esquerdo', LT: 'o polegar esquerdo', RT: 'o polegar direito',
      RI: 'o indicador direito', RM: 'o dedo médio direito', RR: 'o anelar direito',
      RP: 'o mindinho direito'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'As teclas da borda direita, todas do mindinho. Neste teclado, uma delas é o acento agudo: uma tecla morta, que serve para escrever á é í ó ú.',
    drillEdgePair: 'Agora {keys}. O mindinho sai para fora e volta; a mão não vai junto.',
    burstEdge: 'Uma rajada com o que você já tem desta coluna.',
    drillEdgeAll: 'As seis juntas. É a parte do teclado em que o pulso mais se torce se o dedo não volta.',
    burstEdgeWords: 'Palavras de novo, para soltar a mão depois de tanta borda.',
    edgeBackToWords: 'De volta às palavras, com o teclado inteiro disponível — acentos agudos incluídos.',
    edgeClose: 'Frases inteiras para fechar as lições de teclas.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Esta tecla é d{finger}. Encontre-a sem olhar, aperte uma vez e deixe o dedo voltar para o lugar. A volta importa tanto quanto o toque.',
    pressToContinue: 'Aperte <b>{key}</b> para continuar',
    introSpace: 'A barra de espaço é do polegar direito. Os polegares não fazem mais nada, e é por isso que nunca é preciso procurá-la.',
    pressSpace: 'Aperte a <b>barra de espaço</b> para continuar',

    /* --- luyện ngón --- */
    drillSpace: 'Grupos curtos separados por espaços. O polegar direito desce e sobe; os outros dedos não saem das suas teclas.',
    drillNew: 'Só {key} e o que você já sabe. Devagar, e com o dedo voltando à fila de repouso depois de cada toque.',
    drillMixed: 'As teclas novas misturadas com as anteriores, que é como elas vão aparecer nas palavras.',
    drillAgain: 'De novo as duas teclas novas. Ainda não há palavras para escrever com elas, e isso é normal.',
    drillWide: 'Tudo o que você já tem, em grupos curtos. Olhe para a tela, não para as mãos.',
    drillAll: 'Uma última série com tudo o que foi visto até aqui.',
    patternsBack: 'Voltamos aos padrões por um momento, para conferir que os dedos continuam voltando para o lugar.',

    /* --- rajadas --- */
    burstKeys: 'Grupos curtos, um atrás do outro. Vá até o fim mesmo que erre algum.',
    burstLonger: 'Grupos um pouco mais longos. A pressa ainda não ajuda.',
    burstWords: 'Uma rajada de palavras curtas com as teclas novas.',

    /* --- palavras --- */
    wordsNew: 'Palavras de verdade com as teclas novas. Escreva a palavra inteira de uma vez, não letra por letra.',
    wordsOne: 'Agora com o peso em <b>{key}</b>, a que você menos apertou.',
    wordsAll: 'Tudo o que você tem, misturado. Repare em quantas palavras já saem sem pensar.',

    /* --- revisão --- */
    introReview: 'Nenhuma tecla nova nesta lição. Só as que você já conhece, mais seguidas e mais rápidas do que até agora.',
    introReviewMixed: 'Letras, números e sinais juntos, que é como eles aparecem fora de um curso.',
    pressEnter: 'Aperte <b>Enter</b> para começar',
    reviewWords1: 'Para começar, palavras soltas. Sem pressa: a velocidade vem da precisão, nunca o contrário.',
    reviewBurst: 'Uma rajada curta. Termine a lista mesmo que alguma escape.',
    reviewWords2: 'Cinco palavras por linha. Deixe os olhos irem na frente dos dedos.',
    reviewPatterns: 'Padrões de novo, para conferir que os dedos continuam voltando à fila de repouso.',
    reviewShort: 'Palavras curtas, em bom ritmo. Estas já deveriam sair quase sozinhas.',
    reviewBurst2: 'Mais tempo e mais palavras. Mantenha o mesmo ritmo do começo ao fim.',
    reviewClose: 'Frases inteiras. É aqui que se vê se a mão volta sozinha para o lugar.',
    reviewLast: 'A última série. Se você chegou até aqui sem olhar para o teclado, a lição está feita.',

    /* --- Shift e Enter --- */
    introShift: 'As maiúsculas se fazem com o mindinho da mão oposta à letra. Segure Shift, aperte a letra, solte. Nunca com o mesmo mindinho que escreve.',
    pressShift: 'Segure <b>Shift</b> e aperte uma letra para continuar',
    drillShift: 'Maiúsculas e minúsculas alternadas. O mindinho desce e sobe; a outra mão não sai do lugar.',
    wordsShift: 'Palavras com maiúscula no começo, como os nomes próprios.',
    introEnter: 'Enter é do mindinho direito, à direita da fila de repouso. É a maior tecla que esse dedo precisa alcançar.',
    pressEnterKey: 'Aperte <b>Enter</b> para continuar',
    drillEnter: 'Uma linha, Enter, outra linha. O mindinho sai e volta sem arrastar a mão.',
    shiftSentences: 'Frases com maiúscula no começo e ponto no final. Já parece escrever de verdade.',
    shiftBurst: 'Uma rajada para fixar o que esta lição trouxe.',
    shiftWords2: 'Cinco por linha, com o mindinho trabalhando nas duas direções.',
    shiftClose: 'Para fechar, frases inteiras. Shift, letra, solta — sem parar para pensar.',

    /* --- fila dos números --- */
    introDigits: 'A fila dos números fica acima da fila de cima. Cada dedo sobe em linha reta e desce do mesmo jeito. São os alcances mais longos do curso.',
    drillDigitPair: '{keys} se apertam com {finger} e o mesmo dedo da outra mão. Suba, aperte, desça para a fila de repouso.',
    drillDigitIndex: 'Os dois que faltam são dos indicadores, que já alcançam mais teclas do que qualquer outro dedo.',
    burstDigits: 'Uma rajada curta com os números que você já tem.',
    burstDigitsAll: 'Os dez, misturados. No começo se erra muito aqui; é normal.',
    digitsAll: 'A fila inteira, em grupos. Não baixe os olhos para procurar o 6.',
    digitsBackToWords: 'Voltamos às palavras por um momento, para as mãos lembrarem onde moram.',
    digitsClose: 'Frases de novo, já com o teclado inteiro disponível.',

    /* --- textos --- */
    introProse: 'Textos longos e seguidos. O que se treina aqui não são teclas novas, mas manter o mesmo ritmo por várias linhas.',
    proseLine: 'Continue lendo à frente do que você escreve. Se parar para olhar, perde mais tempo do que corrigindo.',
    proseBurst: 'Uma última rajada longa para terminar.',

    /* --- teclas fracas e testes --- */
    weakText: 'Um exercício feito a partir das teclas que você mais erra. Ele muda a cada vez.',
    testText: 'Sem teclas novas. Escreva num ritmo que você consiga manter até o fim.',

    /* --- títulos --- */
    titleFirst: '{keys}, mais a barra de espaço',
    titleKeys: '{keys}',
    titleReview: 'Revisão',
    titleReviewMixed: 'Endereços, links e números',
    titleShift: 'Shift e Enter',
    titleEdge: 'A coluna da direita',
    titleDigits: 'A fila dos números',
    titleProse: 'Textos e ritmo {n}',
    titleWeak: 'Teclas fracas',
    titleTest: 'Teste da unidade {unit}',

    /* --- resumos na página do percurso --- */
    summary: {
      edge: 'A coluna da borda direita: seis teclas, todas do mindinho, entre elas o acento agudo.',
      first: 'As duas teclas com relevo, a barra de espaço, e o hábito de não olhar para baixo.',
      keys: 'Teclas novas: {keys}. O dedo sai, aperta e volta.',
      review: 'Nenhuma tecla nova. Tudo o que veio antes, mais seguido e mais rápido.',
      shift: 'Maiúsculas com o mindinho oposto, e a quebra de linha.',
      digits: 'Os dez números, cada dedo subindo em linha reta.',
      prose: 'Parágrafos inteiros, para manter o ritmo por mais de uma linha.',
      weak: 'Um exercício gerado com as teclas que você mais erra.',
      test: 'Um teste cronometrado com tudo o que foi aprendido.'
    },

    /* --- abertura --- */
    intro: {
      edge: 'O mindinho direito cuida de mais teclas do que qualquer outro dedo, e as da borda são as que quase ninguém pratica. Neste teclado, uma delas vale em dobro: o acento agudo é uma tecla morta. Você aperta a tecla e depois a vogal, e é assim que se escrevem é, já, está e também.',
      first: 'As teclas com um pequeno relevo são o ponto de partida. Os dois indicadores se apoiam ali e não saem; todo o resto do curso se mede a partir dessa posição. Comece colocando as duas mãos e olhando só para a tela.',
      keys: 'Teclas novas nesta lição: {keys}. Elas se apertam com {fingers}. O movimento é sempre o mesmo — sair, apertar e voltar — e a volta é a parte que se treina, porque se o dedo fica fora, a letra seguinte sai errada.',
      review: 'Esta lição não ensina nada novo. É a hora de conferir que o que veio antes sai sem pensar, o que é diferente de saber onde fica cada tecla.',
      shift: 'Até aqui tudo foi escrito em minúsculas. Shift muda isso, e tem uma regra que vale aprender bem desde o começo: quem aperta é o mindinho da mão oposta à letra. Com o mindinho do mesmo lado, a mão se torce e você acaba olhando para o teclado.',
      digits: 'A fila dos números fica acima de tudo o que você escreveu até agora, e é onde os dedos vão mais longe. Aqui se erra mais do que em qualquer outra parte do curso, e se conserta como o resto: devagar primeiro.',
      prose: 'Você já tem o teclado inteiro. O que falta não é aprender teclas, mas manter o ritmo: ler à frente, não parar para olhar e não acelerar no fim da linha.',
      weak: 'Este exercício é montado com as teclas que você erra, não com uma lista fixa. Se você muda, ele muda.',
      test: 'Um teste cronometrado. Não há nada novo: só o que você já sabe, num ritmo que consiga manter.'
    },

    /* --- encerramento --- */
    congrats: {
      edge: 'Com o acento agudo, quase nada falta para escrever português de verdade. Essa coluna é a que fica pela metade em quase todos os cursos.',
      first: 'As mãos estão no lugar. A partir daqui, tudo é uma tecla que se alcança desta posição e se solta de novo.',
      keys: 'Mais teclas debaixo dos dedos. Se {keys} já saem sem procurar, a lição fez o seu trabalho.',
      review: 'Nada novo e mesmo assim mais rápido. É exatamente o que devia acontecer.',
      shift: 'Com Shift e Enter você consegue escrever um texto inteiro do jeito que se escreve fora daqui.',
      digits: 'A fila dos números é a mais difícil e a menos praticada depois. Volte a esta lição de vez em quando.',
      prose: 'Parágrafos inteiros em ritmo constante. Isso já não é aprender a digitar; é digitar.',
      weak: 'As teclas fracas deixam de ser fracas com um minuto por dia, não com uma hora por mês.',
      test: 'Teste concluído. O número importa menos do que ter chegado ao fim sem olhar.'
    },

    units: {
      u1: { title: 'A fila de repouso',
        summary: 'Oito teclas debaixo dos dedos, o ç entre elas, e depois {reach} — o bastante para escrever palavras de verdade sem olhar para baixo.' },
      u2: { title: 'O resto do alfabeto',
        summary: 'Fila de cima, fila de baixo, pontuação, o til e as maiúsculas — o alfabeto inteiro, mais Shift e Enter. O til é uma tecla morta: com ele vêm o ã e o õ.' },
      u3: { title: 'Números, acentos e velocidade',
        summary: 'A fila dos números, o acento agudo na borda direita, e depois parágrafos longos em ritmo constante.' }
    },

    groups: {
      start: 'Comece aqui',
      reach: 'Esticando os dedos',
      finish: 'Feche a unidade',
      'numbers-symbols': 'Números e sinais',
      speed: 'Velocidade'
    },

    starterHint: 'Apoie os indicadores nas duas teclas com relevo e escreva o que você vê, sem olhar para o teclado.'
  }
};
