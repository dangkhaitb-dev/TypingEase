/* kiem-tra-toc-do-go/text/pt.mjs — chữ tĩnh của trang kiểm tra tốc độ gõ tiếng Bồ Đào Nha (Brasil),
 * cho scripts/build-test-pages.mjs. Bàn phím ABNT2. `{lessons}` = số bài của khoá chính,
 * `{course}` = URL lộ trình của khoá.
 */
export default {
  slug: 'teste-de-digitacao',
  title: 'Teste de digitação: velocidade e precisão | TypingEase',
  description: 'Teste de digitação grátis no navegador: digite por 1, 5 ou 10 minutos no teclado ABNT2 e veja suas palavras por minuto, precisão e erros. Sem cadastro.',
  breadcrumbAria: 'Trilha de navegação',
  homeCrumb: 'Início',
  crumb: 'Teste de digitação',
  eyebrow: 'Teste de digitação grátis',
  h1: 'Teste de velocidade de digitação',
  intro: 'Escolha uma duração de 15 segundos a 10 minutos e digite o texto para ver suas palavras por minuto, a precisão e os erros. O relógio começa no primeiro toque, não num botão.',
  durationAria: 'Duração do teste',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Resultado ao vivo',
  stats: { time: 'Tempo', wpm: 'PPM', accuracy: 'Precisão', errors: 'Erros', consistency: 'Constância' },
  promptAria: 'O texto a digitar',
  inputLabel: 'Comece a digitar aqui',
  soundTitle: 'Clique de tecla enquanto você digita (Alt+S)',
  soundLabel: 'Clique de tecla',
  placeholder: 'Clique aqui e comece a digitar...',
  restart: 'Tentar de novo',
  wpmNote: 'O PPM conta os caracteres digitados, divididos por cinco, pelos minutos que você passou digitando.',
  result: { title: 'Seu resultado' },
  progress: {
    eyebrow: 'Histórico de prática', title: 'Seu progresso', rangeAria: 'Período', days: n => `${n} dias`,
    metricAria: 'Medida do gráfico', note: 'Os resultados podem vir de testes com durações diferentes.',
    summaryAria: 'Resumo do progresso', avgWpm: 'PPM médio', bestWpm: 'Melhor PPM',
    avgAccuracy: 'Precisão média', count: 'Testes feitos', chartAria: 'Gráfico de progresso'
  },
  sections: [
    {
      h2: 'Como funciona o teste de digitação',
      html: '<p>Escolha uma duração, de 15 segundos a 10 minutos, e digite o texto que aparece acima. O relógio só começa no primeiro toque, então dá para ler o começo com calma. Quando o tempo acaba, o teste mostra as suas palavras por minuto (PPM), a precisão, o número de erros e a constância, que diz o quanto o seu ritmo variou do início ao fim.</p><p>Os textos são parágrafos do dia a dia em português, com maiúsculas, pontuação e acentos, do jeito que se escreve de verdade. Se você chegar ao fim de um parágrafo antes do tempo, outro aparece logo em seguida.</p>'
    },
    {
      h2: 'Acentos e ç no teclado ABNT2',
      html: '<p>No teclado ABNT2, o <em>ç</em> tem tecla própria, logo à direita do L. Os acentos funcionam como teclas mortas: você aperta o acento, nada aparece, e ele surge junto com a letra seguinte. A tecla à direita do P dá o agudo (´) e, com Shift, a crase (`). A tecla à direita do Ç dá o til (~) e, com Shift, o circunflexo (^). Assim, <em>á</em> é ´ e depois a, <em>ã</em> é ~ e depois a, e <em>ê</em> é Shift+~ e depois e.</p><p>No teste, cada letra acentuada conta como um único caractere, mesmo custando dois toques. Por isso um texto com muitos ç, ã e ê sai um pouco mais devagar do que um texto sem acentos, e é normal que o seu PPM em português fique abaixo do que você faria num texto em inglês. Se você apertar um acento e depois uma letra que não o aceita, os dois aparecem separados, e isso conta como erro.</p>'
    },
    {
      h2: 'Como as palavras por minuto são calculadas',
      html: '<p>O PPM segue a mesma convenção do WPM usado em inglês: cada cinco caracteres digitados valem uma "palavra", com espaços e pontuação incluídos. O total é dividido pelos minutos que você passou digitando. Contar caracteres em vez de palavras reais deixa o resultado justo entre textos de palavras curtas e longas, como <em>pé</em> e <em>paralelepípedo</em>.</p><p>O número conta tudo o que está na caixa, certo ou errado. Por isso o PPM só faz sentido lido junto com a precisão: digitar rápido e errar muito não é ser rápido.</p>'
    },
    {
      h2: '1, 5 ou 10 minutos: qual duração escolher',
      html: '<p>Um teste de 1 minuto mede o seu pique: por pouco tempo, quase todo mundo consegue manter a atenção no máximo. Os testes de 15 e 30 segundos exageram esse efeito e servem mais para aquecer os dedos. Já um teste de 5 ou 10 minutos mede resistência: o cansaço aparece, a atenção oscila, os erros se acumulam, e o resultado fica mais perto do ritmo que você tem ao escrever um e-mail ou um trabalho longo.</p><p>Se o seu PPM cai muito entre o teste de 1 minuto e o de 10, a velocidade ainda depende de esforço e não de hábito. Para saber se está melhorando, compare sempre testes da mesma duração.</p>'
    },
    {
      h2: 'Como ler a precisão',
      html: '<p>A precisão é a parte do que está na caixa que confere com o texto original, caractere por caractere. Um acento esquecido, um ç que virou c ou uma maiúscula que saiu minúscula contam como erro, porque são caracteres diferentes. A comparação é feita posição por posição: se você pular uma letra, todo o resto fica desalinhado. Nesse caso, apague até o erro e continue dali. Um erro apagado e corrigido deixa de contar na precisão, mas o tempo gasto para voltar já saiu do seu PPM.</p><p>Uma precisão abaixo de 95% é sinal de que vale a pena desacelerar. Acima disso, ganhar velocidade fica mais fácil, porque você perde menos tempo corrigindo. Como referência aproximada, muitos cursos de digitação tratam 40 PPM com boa precisão como um ritmo confortável para o trabalho de escritório, mas o número que importa é o seu, comparado com você mesmo.</p>'
    },
    {
      h2: 'Como digitar mais rápido',
      html: '<ul><li>Deixe os dedos na fileira do meio (A S D F e J K L Ç) e volte para ela depois de cada palavra.</li><li>Não olhe para o teclado, nem para achar o ç ou os acentos: é justamente aí que o ritmo costuma quebrar.</li><li>Faça do acento e da letra um único movimento, ~ e a, ´ e e, sem pausa no meio.</li><li>Busque a precisão primeiro. A velocidade vem depois, quando os movimentos ficam automáticos.</li><li>Pratique pouco e todo dia: quinze minutos diários rendem mais do que duas horas no fim de semana.</li></ul><p>O <a class="inline-link" href="{course}">curso de {lessons} lições</a> ensina essas posições no teclado ABNT2, uma tecla de cada vez, incluindo o ç e as teclas de acento.</p>'
    }
  ],
  faqTitle: 'Perguntas frequentes',
  faq: [
    ['O que é PPM?', 'Palavras por minuto. Cada cinco caracteres digitados, contando espaços e pontuação, valem uma palavra. É o mesmo cálculo do WPM usado em inglês.'],
    ['Como faço o teste de digitação?', 'Escolha a duração, clique na caixa e comece a digitar o texto acima. O relógio começa no primeiro toque e para sozinho quando o tempo acaba.'],
    ['Letras com acento contam como erro a mais?', 'Não. Uma letra acentuada é um caractere só, mesmo exigindo dois toques no ABNT2. Ela só conta como erro se sair diferente do texto, por exemplo "a" no lugar de "ã".'],
    ['Qual duração devo escolher?', '1 minuto para medir o seu pique, 5 ou 10 minutos para ver o ritmo que você mantém num texto longo. Para acompanhar a evolução, repita sempre a mesma duração.'],
    ['Meus resultados ficam salvos?', 'Os últimos resultados ficam guardados apenas neste navegador, no seu aparelho, e aparecem no gráfico de progresso. Não há cadastro e nada é enviado para um servidor.'],
    ['Posso fazer o teste num teclado americano?', 'Pode, mas o texto tem ç e acentos. Num teclado americano configurado como "US Internacional", eles saem por outras teclas mortas (aspas simples e depois c dá ç, por exemplo). O resultado mais fiel é o do teclado que você usa todo dia.']
  ],
  cta: { eyebrow: 'Quer um resultado melhor?', title: 'Aprenda digitação com os dez dedos', text: '{lessons} lições no seu próprio teclado ABNT2, começando pela fileira do meio.', button: 'Ver o curso' }
};
