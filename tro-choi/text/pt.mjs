/* tro-choi/text/pt.mjs — página de jogos em português do Brasil (scripts/build-game-pages.mjs). As palavras
 * vêm de data/words/pt.js, o mesmo banco do curso /pt/ (ABNT2: ç própria, ~ e ´ como teclas mortas). */
export default {
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
    { h2: 'Três jogos, uma habilidade', html: '<p>Cada jogo treina uma parte da digitação com os dez dedos. <b>Caça às teclas</b> treina onde fica cada tecla: a tecla acesa mostra qual dedo se mexe, sem olhar para baixo. <b>Chuva de palavras</b> treina digitar palavras inteiras com pressa. <b>Corrida fantasma</b> treina um ritmo constante ao longo de um texto, contra um fantasma na velocidade que você escolher.</p>' },
    { h2: 'No seu próprio teclado', html: '<p>O teclado na tela da Caça às teclas é o do curso, o ABNT2 com o ç na fileira de repouso, e as teclas são reconhecidas pela posição física, não pelo caractere que o seu sistema digita. Chuva de palavras e Corrida fantasma usam as mesmas palavras do <a class="inline-link" href="{course}">curso de {lessons} lições</a>, com acentos e tudo.</p>' },
    { h2: 'Como tirar proveito', html: '<ul><li>Jogue depois de uma lição; cinco a dez minutos bastam.</li><li>Escolha um nível em que você acerte a maioria das palavras, e desça se errar muito.</li><li>Na Corrida fantasma, deixe o fantasma um pouco abaixo da sua velocidade real e suba com o tempo.</li><li>Para medir a sua velocidade de verdade, use o <a class="inline-link" href="{test}">teste de digitação</a>, não um jogo.</li></ul>' }
  ],
  faqTitle: 'Perguntas frequentes',
  faq: [
    ['Posso jogar contra outras pessoas?', 'Ainda não. A Corrida fantasma é contra um fantasma que mantém a velocidade que você escolhe, ou o seu próprio recorde. Não há outros jogadores nem ranking.'],
    ['Onde ficam os meus recordes?', 'Só neste navegador, neste aparelho. Sem conta, e nada é enviado para lugar nenhum.'],
    ['Dá para jogar no celular?', 'Chuva de palavras e Corrida fantasma funcionam com o teclado do celular. A Caça às teclas precisa de um teclado de verdade, porque ensina onde ficam as teclas.'],
    ['Por que uma palavra certa não sumiu?', 'Ela precisa estar exatamente igual antes de você apertar Espaço. Veja se faltou um acento ou uma letra, ou se escapou uma maiúscula.']
  ],
  cta: { eyebrow: 'Quer jogar melhor?', title: 'Aprenda a digitar com os dez dedos', text: '{lessons} lições no seu próprio teclado, começando pela fileira de repouso.', button: 'Ver o curso' }
};
