/* content/games/pt.mjs — página de jogos em português do Brasil (tooling/pages/games.mjs). As palavras
 * vêm de data/words/pt.js, o mesmo banco do curso /pt/ (ABNT2: ç própria, ~ e ´ como teclas mortas). */
export default {
  worlds: {"rain": "Jardim dos pirilampos", "race": "Circuito ao pôr do sol", "keys": "Estação espacial"},
  slug: 'jogos-de-digitacao',
  title: 'Jogos de digitação grátis no seu teclado | TypingEase',
  description: 'Três jogos de digitação grátis: Chuva de palavras, Corrida fantasma e Caça às teclas. Pratique no seu próprio teclado, no navegador, sem cadastro.',
  breadcrumbAria: 'Trilha de navegação',
  homeCrumb: 'Início',
  crumb: 'Jogos de digitação',
  eyebrow: 'Prática com cara de jogo',
  h1: 'Jogos de digitação',
  intro: 'Três jogos curtos para jogar entre uma lição e outra: elimine palavras que caem, corra contra o seu próprio ritmo e cace teclas num teclado na tela. Os seus recordes ficam neste aparelho.',
  tabsAria: 'Escolha um jogo',
  locale: 'pt-BR',
  howAria: 'Como jogar',
  how: {
    rain: ['As palavras caem do alto.', 'Digite a palavra exatamente, com acento.', 'Aperte Espaço para eliminá-la. Deixou passar três, acabou.'],
    race: ['Escolha a velocidade do fantasma.', 'Digite o texto desde a primeira letra.', 'Chegue à bandeira antes do fantasma.'],
    keys: ['Uma tecla acende no teclado.', 'Olhe para a tela, não para as mãos, e aperte.', 'Acerte o máximo que puder em 60 segundos.']
  },
  modes: {
    rain: ['Chuva de palavras', 'Digite a palavra que cai e aperte Espaço para eliminá-la.'],
    race: ['Corrida fantasma', 'Termine o texto antes do fantasma.'],
    keys: ['Caça às teclas', 'Aperte a tecla acesa, o máximo de vezes que puder em 60 segundos.']
  },
  rain: {
    difficulty: 'Nível', easy: 'Fácil', normal: 'Normal', hard: 'Difícil',
    score: 'Pontos', level: 'Fase', lives: 'Vidas', best: 'Recorde',
    start: 'Começar', placeholder: 'Digite uma palavra que cai e aperte Espaço',
    hint: 'Acentos como sempre, com as teclas mortas: ~ e depois a → ã, ´ e depois e → é. Se três palavras chegarem ao chão, o jogo acaba.'
  },
  race: {
    pace: 'Fantasma', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} PPM`,
    start: 'Começar corrida', you: 'Você', ghost: 'Fantasma', placeholder: 'Digite o texto acima, desde a primeira letra'
  },
  keys: {
    start: 'Começar a caça', time: 'Segundos', hits: 'Acertos', streak: 'Sequência', best: 'Recorde',
    hint: 'Olhe para a tela, não para as mãos. As teclas são lidas pela posição física, então qualquer layout do sistema funciona.'
  },
  runtime: {
    over: 'Fim de jogo', again: 'Jogar de novo', newBest: 'Novo recorde neste aparelho!',
    rainResult: '{score} pontos · {words} palavras eliminadas · {wpm} PPM · {accuracy}% de acerto',
    raceReady: 'O fantasma corre a {wpm} PPM. Aperte "Começar corrida" e digite a primeira letra para largar.',
    raceGo: 'Já!', raceWin: 'Você chegou primeiro!', raceLose: 'Desta vez o fantasma ganhou.',
    racePaused: 'Parado. Aperte "Começar corrida" para largar de novo.',
    raceResult: '{seconds} segundos · {wpm} PPM · {accuracy}% de precisão · fantasma {ghost} PPM',
    paceBest: 'Seu recorde ({wpm} PPM)',
    keysResult: '{hits} acertos · maior sequência {streak} · {accuracy}% de precisão'
  },
  sections: [
    { h2: 'Jogos de digitação: escolha pelo que está travando você hoje', html: `<p>Os três jogos usam as palavras do curso em português, mas cada um aperta num ponto diferente. Se você ainda hesita para achar o Ç, abra a <b>Caça às teclas</b>. Se as letras soltas já saem e o que falha é terminar uma palavra com til ou cedilha sem parar, vá de <b>Chuva de palavras</b>. Se você digita palavras inteiras mas o ritmo quebra no meio da linha, <b>Corrida fantasma</b>.</p>
<p>Vale saber uma coisa antes de jogar: as palavras dos jogos vêm em minúsculas e sem pontuação. Não tem maiúscula, vírgula nem ponto de interrogação. E entre os acentos aparecem ç, til, agudo e o õ, mas não circunflexo nem crase. Os jogos são bons no que fazem e fracos no resto; não substituem as lições de teclas mortas do curso.</p>
<p>A minha opinião: jogo funciona melhor depois de uma lição do que no lugar dela. Dez minutos de partida com um objetivo claro, como «não olhar para o til» ou «não perder a sequência na fileira de cima», valem mais do que uma hora tentando bater recorde. Recorde dá para subir com truque que depois não ajuda em nada a escrever um e-mail; uma sequência limpa, não.</p>` },
    { h2: 'Chuva de palavras: ç, til e acento antes de a palavra cair', html: `<p>Escolha Fácil, Normal ou Difícil e aperte Começar. Digite uma das palavras que estão caindo e aperte Espaço ou Enter para enviar. Se ela bate com uma palavra que ainda está na tela, some; se não bate, o campo é apagado. Cada palavra que chega ao chão custa uma vida, e com três o jogo acaba. A cada oito palavras eliminadas você sobe de fase e tudo cai um pouco mais rápido.</p>
<h3>O acento conta</h3>
<p>«Mao» não elimina «mão». O jogo compara a palavra inteira, com acento, e você digita como sempre: o til ou o agudo, depois a vogal. O erro clássico na pressa é apertar Espaço logo depois da tecla morta: o acento sai solto, a palavra não bate e você perde o que digitou. Com o ç, o erro mais comum é digitar c; de longe parece igual, mas a palavra não sai.</p>
<h3>O que fazer com os pontos</h3>
<p>Os pontos dependem do tamanho da palavra e da fase, e uma letra acentuada conta como uma letra só, mesmo custando dois toques. Se no Difícil as palavras somem antes de você conseguir ler, desça para o Normal. No Fácil caem só palavras curtas, com menos acentos: bom para aquecer, pouco útil para treinar as teclas mortas.</p>` },
    { h2: 'Corrida fantasma: um desafio contra o seu próprio ritmo', html: `<p>Aqui você não disputa com ninguém. O fantasma é um carro que anda em velocidade constante: 20, 30, 40, 60 ou 80 PPM, ou «Seu recorde», que usa a sua melhor corrida salva (30 PPM se você ainda não tiver nenhuma). Não há outros jogadores conectados nem ranking, e o fantasma também não repete os seus toques de uma partida anterior: ele só mantém um ritmo.</p>
<p>Aperte «Começar corrida»; ninguém sai do lugar até você digitar a primeira letra. O texto tem cerca de 170 caracteres com palavras do curso, em minúsculas e separadas por espaço. O seu carro anda conforme o trecho certo do começo do que você digitou: se você esquecer um til logo no início, nada do que vier depois faz o carro andar até você corrigir.</p>
<h3>Como escolher o ritmo</h3>
<p>Deixe o fantasma um pouco abaixo do que você faz no teste, não acima. A graça é chegar sem apagar tudo no desespero. Quando ganhar três vezes seguidas com folga, suba um degrau. «Seu recorde» serve para manter o nível, mas se você muda o ritmo a cada partida não fica sabendo o que melhorou.</p>` },
    { h2: 'Caça às teclas: as posições do ABNT2, com o Ç no lugar', html: `<p>Uma tecla acende no teclado da tela; aperte a mesma no seu teclado sem olhar para as mãos. São 60 segundos. Cada acerto soma e cada tecla errada quebra a sequência, então no fim olhe os dois números: muitos acertos com sequências curtas querem dizer que você está chutando.</p>
<p>O jogo reconhece a tecla pela posição física, não pela letra que o seu sistema digita. Na prática, ela funciona até num notebook com teclado americano: as letras de a a z ficam no mesmo lugar, e quando acender o Ç basta apertar a tecla à direita do L, a que no seu teclado traz impresso o ponto e vírgula. O que não bate são os acentos, que no americano ficam em outro lugar.</p>
<h3>Quais teclas aparecem</h3>
<p>Só as letras da camada principal: de a a z e o Ç. As teclas do agudo e do til nunca aparecem, porque sozinhas não escrevem nada; para treinar essas, a Chuva de palavras é o lugar. Repare no mindinho direito: no ABNT2 ele cuida do Ç, do til e do agudo, e costuma ser o primeiro a perder a sequência.</p>` },
    { h2: 'Do jogo para a próxima lição do curso', html: `<p>Antes de apertar «Jogar de novo», responda a uma pergunta: o que me fez perder? Se foram os acentos na Chuva de palavras, as lições de tecla morta da unidade 1 do <a class="inline-link" href="{course}">curso de {lessons} lições</a> são o lugar certo. Se na Caça às teclas a sequência quebrava sempre na fileira de cima, refaça as lições da unidade 1 que vão do Q ao P. Se na Corrida fantasma você chegava atrasado por corrigir demais, as unidades Ritmo contínuo e Precisão trabalham exatamente isso em texto corrido.</p>
<p>Os números dos jogos não se comparam entre si nem com o <a class="inline-link" href="{test}">teste de digitação</a>: uma partida de palavras curtas caindo e uma corrida de 170 caracteres são tarefas diferentes, e o teste tem maiúsculas e pontuação que aqui não aparecem. Os seus recordes ficam salvos só neste navegador.</p>
<p>Uma anotação útil cabe numa linha: «perco o ç quando venho do a», «travo nas palavras com õ». Anote, abra a lição certa e deixe o jogo para o fim da sessão.</p>` }
  ],
  faqTitle: 'Perguntas frequentes',
  faq: [
    ['Posso jogar contra outras pessoas?', 'Ainda não. A Corrida fantasma é contra um fantasma que mantém a velocidade que você escolhe, ou o seu próprio recorde. Não há outros jogadores nem ranking.'],
    ['Onde ficam os meus recordes?', 'Só neste navegador, neste aparelho. Sem conta, e nada é enviado para lugar nenhum.'],
    ['Dá para jogar no celular?', 'Chuva de palavras e Corrida fantasma funcionam com o teclado do celular. A Caça às teclas precisa de um teclado de verdade, porque ensina onde ficam as teclas.'],
    ['Por que uma palavra certa não sumiu?', 'Ela precisa estar exatamente igual antes de você apertar Espaço. Veja se faltou um acento ou uma letra, ou se escapou uma maiúscula.'],
    ['Dá para treinar circunflexo e crase nos jogos?', 'Não. As palavras dos jogos trazem ç, til, agudo e õ, mas não circunflexo nem crase, e vêm sempre em minúsculas. Para â, ê, ô, à e as maiúsculas acentuadas, use as lições das unidades 1 e 3 do curso.'],
    ['Os jogos funcionam num notebook com teclado americano?', 'A Chuva de palavras e a Corrida fantasma comparam o texto, então funcionam com qualquer teclado que digite os acentos. A Caça às teclas vai pela posição: as letras de a a z coincidem, e o Ç fica na tecla à direita do L, que no teclado americano mostra o ponto e vírgula.']
  ],
  cta: { eyebrow: 'Quer jogar melhor?', title: 'Aprenda a digitar com os dez dedos', text: '{lessons} lições no seu próprio teclado, começando pela fileira de repouso.', button: 'Ver o curso' }
};
