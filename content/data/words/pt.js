/* data/words/pt.js — kho từ tiếng Bồ Đào Nha (Brasil) cho khoá /pt/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 178 (ABNT2, bàn phím Brasil). Thứ tự phím vì thế là:
 *   f j · d k · s l · a ç · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ~ · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · ; - = ´ [ ] · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại.
 *
 * DẤU. ç có phím riêng ngay hàng cơ sở (ô Semicolon), dạy ở bài 4 — nên `faça`, `graça`,
 * `praça` tới rất sớm. ã õ gõ bằng phím chết ~ (ô Quote), dạy ở u2-l08. á é í ó ú gõ bằng
 * phím chết ´ (ô BracketLeft, cột ngoài), dạy ở u3-l02 — nên `é`, `já`, `está` tới muộn, và
 * câu văn của hai unit đầu phải viết được mà không có chúng.
 *
 * KHÔNG CÓ â ê ô à. Dấu mũ là Shift + ô Quote, dấu huyền là Shift + ô BracketLeft — cả hai là
 * phím chết ở TẦNG SHIFT, và kế hoạch của build-course.js không dạy phím chết tầng Shift nào.
 * Từ chứa chúng (`você`, `três`, `à`) sẽ bị lọc bỏ lặng lẽ, nên không đưa vào đây cho khỏi
 * tưởng là có dùng. Câu văn cũng tránh chúng.
 *
 * NGUỒN GỐC. Từ vựng thông dụng, dựng độc lập, xếp theo mốc phím rồi soát tay. Không lấy từ
 * nội dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ: chỉ chữ thường trong `alphabet`; chính tả Brasil theo Acordo Ortográfico
 * (`ideia`, không `idéia`); không danh từ riêng ngoài `names`; không gì bạo lực, y khoa, chính
 * trị hay khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.pt = {
  lang: 'pt',

  alphabet: 'abcdefghijklmnopqrstuvwxyzçãõáéíóú',

  words: [
    // --- a s d f j k l ç  (u1-l04) ------------------------------------------------------
    'a', 'as', 'da', 'das', 'fala', 'falas', 'sala', 'salas', 'asa', 'asas', 'ala', 'alas',
    'falsa', 'falsas', 'salsa', 'dada', 'dadas', 'fada', 'fadas', 'salada', 'saladas',
    'faça', 'faças', 'assa', 'assada', 'assadas', 'alfa', 'aja', 'ajas', 'faladas',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gala', 'galas', 'haja', 'saga', 'sagas', 'alga', 'algas', 'falha', 'falhas',
    'salgada', 'salgadas',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    'e', 'de', 'se', 'ela', 'elas', 'ele', 'eles', 'dele', 'dela', 'deles', 'delas',
    'sei', 'lei', 'leis', 'fila', 'filas', 'fiel', 'ideia', 'ideias', 'idade', 'idades',
    'fase', 'fases', 'fale', 'falei', 'filha', 'filhas', 'dia', 'dias', 'sede', 'seda',
    'lida', 'ideal', 'ideais', 'gelada', 'geladas', 'sigla', 'siglas', 'aldeia', 'aldeias',
    'desse', 'dessa', 'dessas', 'desses', 'essa', 'essas', 'esse', 'esses', 'saia', 'saias',
    'legal', 'legais', 'laje', 'lajes', 'deseja', 'desejas', 'ilha', 'ilhas', 'seja',
    'sejas', 'agilidade', 'fidelidade', 'lealdade', 'desfaça', 'filial', 'hei',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'eu', 'seu', 'seus', 'sua', 'suas', 'rua', 'ruas', 'ler', 'ser', 'dar', 'era', 'real',
    'reais', 'rede', 'redes', 'regra', 'regras', 'grade', 'grades', 'igual', 'iguais',
    'lugar', 'lugares', 'sair', 'saiu', 'usar', 'usa', 'dura', 'durar', 'guarda',
    'guardar', 'guia', 'guias', 'frase', 'frases', 'ruga', 'jarra', 'jarras', 'girar',
    'surgir', 'sugere', 'sugerir', 'fugir', 'agulha', 'saudade', 'saudades', 'segura',
    'seguir', 'segue', 'aula', 'aulas', 'alugar', 'aluga', 'desligar', 'ligar', 'liga',
    'gerar', 'geral', 'gerais', 'rasgar', 'larga', 'largas', 'regular', 'grudar', 'grau',
    'graus', 'graça', 'graças', 'raça', 'raças', 'sujar', 'feira', 'feiras', 'figura',
    'figuras', 'agradar', 'agrada', 'fria', 'frias', 'ria', 'riu',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    // Không có từ tiếng Bồ nào dùng y; bài này sống nhờ t.
    'te', 'tia', 'tias', 'terra', 'terras', 'tarde', 'tardes', 'sete', 'fita', 'fitas',
    'esta', 'estas', 'este', 'estes', 'estar', 'deste', 'desta', 'tirar', 'tira', 'trata',
    'tratar', 'triste', 'tristes', 'festa', 'festas', 'resta', 'restar', 'teste', 'testes',
    'tela', 'telas', 'lista', 'listas', 'artista', 'artistas', 'direita', 'atleta',
    'atletas', 'ter', 'frete', 'fruta', 'frutas', 'estrada', 'estradas', 'tarefa',
    'tarefas', 'gata', 'gatas', 'data', 'datas', 'sutil', 'atual', 'atuais', 'turista',
    'turistas', 'estudar', 'estuda', 'luta', 'lutar', 'justa', 'justiça', 'dieta',
    'flauta', 'falta', 'faltar', 'saltar', 'estrela', 'estrelas', 'utilidade', 'assistir',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'o', 'os', 'do', 'dos', 'ao', 'aos', 'isso', 'isto', 'todo', 'todos', 'toda', 'todas',
    'outro', 'outra', 'outros', 'outras', 'logo', 'lado', 'lados', 'lago', 'lagos', 'jogo',
    'jogos', 'fogo', 'gosto', 'gostar', 'sol', 'olho', 'olhos', 'forte', 'fortes', 'hoje',
    'hora', 'horas', 'sorte', 'rosa', 'rosas', 'dois', 'grosso', 'globo', 'gordo', 'filho',
    'filhos', 'folha', 'folhas', 'olhar', 'ouro', 'torta', 'oito', 'gol', 'roda', 'rodas',
    'foto', 'fotos', 'tudo', 'seguro', 'tesoura', 'teatro', 'gesto', 'rota', 'agosto',
    'jeito', 'direito', 'estudo', 'estudos', 'fora', 'solo', 'loja', 'lojas', 'alho',
    'galho', 'trilho', 'sorriso', 'orelha', 'feio', 'feriado', 'desejo', 'total', 'hotel',
    'futuro', 'tijolo', 'golfe', 'lote', 'estado', 'resultado', 'setor', 'autor', 'folga',
    'frio', 'tio', 'tios', 'rio', 'rios', 'roteiro', 'dourado', 'dourada', 'isolado',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'no', 'na', 'nos', 'nas', 'casa', 'casas', 'coisa', 'coisas', 'cada', 'caro', 'cara',
    'noite', 'noites', 'nada', 'nunca', 'antes', 'onde', 'conta', 'contas', 'conto',
    'contar', 'centro', 'cidade', 'cidades', 'cinco', 'cena', 'certo', 'certa', 'corte',
    'cor', 'cores', 'clara', 'claro', 'contra', 'contente', 'canto', 'cantar', 'criança',
    'crianças', 'dança', 'danças', 'dente', 'dentes', 'diferente', 'entre', 'gente',
    'grande', 'grandes', 'janela', 'janelas', 'jantar', 'junto', 'juntos', 'lento', 'linha',
    'linhas', 'longe', 'nosso', 'nossa', 'nossos', 'nossas', 'neta', 'neto', 'nota',
    'notas', 'sinal', 'tanto', 'tanta', 'tinta', 'uns', 'unha', 'escola', 'escolas',
    'escuro', 'escura', 'suco', 'sucos', 'cedo', 'cenoura', 'cinto', 'cliente', 'clientes',
    'conhecer', 'conhece', 'conselho', 'contato', 'criar', 'cuidado', 'curso', 'cursos',
    'curto', 'curta', 'doce', 'doces', 'dinheiro', 'dono', 'dona', 'encontro', 'encontrar',
    'fechar', 'fechado', 'fechada', 'ficar', 'fica', 'ficou', 'final', 'fundo', 'ganhar',
    'ganha', 'junho', 'linda', 'lindo', 'local', 'longo', 'longa', 'lanche', 'nascer',
    'ninho', 'onda', 'ondas', 'saco', 'sacola', 'secar', 'seco', 'seca', 'segundo',
    'segunda', 'senhor', 'senhora', 'senha', 'sentir', 'sente', 'sentido', 'sonho',
    'sonhos', 'sonhar', 'tocar', 'trocar', 'troca', 'ano', 'anos', 'cansado', 'cansada',
    'cachorro', 'cadeira', 'cadeiras', 'caneta', 'canetas', 'carne', 'carta', 'cartas',
    'calor', 'calça', 'calças', 'caderno', 'cadernos', 'chegar', 'chega', 'chegou',
    'chocolate', 'colher', 'correr', 'corre', 'costa', 'faca', 'facas', 'foco', 'sino',
    'tecido', 'antigo', 'antiga', 'agenda', 'andar', 'anda', 'nadar', 'norte', 'sul',
    'leste', 'escrito', 'escrita', 'conhecido', 'lição', 'coração', 'dançar', 'alcança',
    'lanchonete', 'chinelo', 'chinelos', 'alface', 'sacode',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'me', 'mas', 'mais', 'mesmo', 'mesma', 'muito', 'muita', 'muitos', 'muitas', 'mundo',
    'mesa', 'mesas', 'mar', 'menos', 'meio', 'meia', 'melhor', 'melhores', 'momento',
    'minuto', 'minutos', 'cama', 'camas', 'como', 'comer', 'comida', 'amigo', 'amiga',
    'amigos', 'amigas', 'homem', 'homens', 'nome', 'nomes', 'vida', 'vidas', 'ver', 'vai',
    'vou', 'vamos', 'vinte', 'verde', 'verdes', 'vento', 'ventos', 'viagem', 'viagens',
    'voltar', 'volta', 'novo', 'nova', 'novos', 'novas', 'livro', 'livros', 'noventa',
    'venda', 'vender', 'vale', 'valor', 'vila', 'visita', 'visitar', 'conversa',
    'conversar', 'movimento', 'animal', 'animais', 'uva', 'uvas', 'ave', 'aves', 'chave',
    'chaves', 'leve', 'nove', 'nuvem', 'nuvens', 'inverno', 'amor', 'calma', 'forma',
    'semana', 'semanas', 'cinema', 'chamar', 'chama', 'camisa', 'camisas', 'mala', 'malas',
    'maior', 'menor', 'menino', 'menina', 'meninos', 'meninas', 'montanha', 'mistura',
    'morar', 'mora', 'um', 'uma', 'umas', 'com', 'ontem', 'nenhum', 'nenhuma', 'algum',
    'alguma', 'alguns', 'algumas', 'tem', 'tenho', 'vem', 'fim', 'jardim', 'sim', 'assim',
    'ruim', 'mercado', 'medo', 'metade', 'metro', 'mulher', 'moeda', 'minha', 'minhas',
    'meu', 'meus', 'mochila', 'molhado', 'motor', 'mudar', 'muda', 'museu', 'madeira',
    'manter', 'mandar', 'marca', 'mato', 'mensagem', 'vaca', 'varanda', 'vaso', 'velho',
    'velha', 'vela', 'velas', 'verdade', 'vestido', 'viver', 'vive', 'voar', 'avenida',
    'caminho', 'caminhos', 'caminhar', 'cavalo', 'devagar', 'dever', 'deve', 'escrever',
    'escreve', 'estava', 'estavam', 'evitar', 'favor', 'levar', 'leva', 'lavar', 'lava',
    'ouvir', 'ouve', 'ovo', 'ovos', 'novela', 'navio', 'servir', 'serve', 'tomar', 'toma',
    'trem', 'viu', 'via', 'vista', 'vivo', 'viva', 'volume', 'vontade', 'mandioca',
    'melancia', 'morango', 'limonada', 'manteiga', 'cima', 'mil', 'milho', 'chuva',
    'almoço', 'começa', 'começar', 'começo', 'moça', 'força', 'mudança', 'lembrança',
    'avançar', 'segurança',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'que', 'quem', 'quer', 'quero', 'quase', 'quando', 'quanto', 'quatro', 'quinta',
    'quinze', 'quente', 'pequeno', 'pequena', 'pequenos', 'parque', 'aqui', 'porque',
    'pouco', 'pouca', 'poucos', 'pode', 'podem', 'poder', 'para', 'por', 'pai', 'pais',
    'parte', 'partes', 'passo', 'passar', 'pessoa', 'pessoas', 'perto', 'porta', 'portas',
    'ponto', 'pontos', 'prato', 'pratos', 'preto', 'preta', 'primeiro', 'primeira',
    'problema', 'programa', 'pronto', 'pronta', 'praia', 'praias', 'papel', 'pedra',
    'pedras', 'perder', 'pergunta', 'perguntas', 'pensar', 'pena', 'peso', 'pato', 'ponte',
    'quarto', 'quartos', 'quadro', 'aquele', 'aquela', 'aquilo', 'esquerda', 'tempo',
    'sempre', 'campo', 'empresa', 'simples', 'comprar', 'compra', 'compras', 'pior',
    'praça', 'praças', 'preço', 'preços', 'pedaço', 'espaço', 'serviço', 'esperança',
    'esperar', 'espera', 'perguntar', 'queijo', 'qualidade', 'qual', 'quais', 'pular',
    'depois', 'apenas', 'aprender', 'aprende', 'computador', 'copo', 'copos', 'corpo',
    'grupo', 'grupos', 'mapa', 'pedido', 'pedir', 'pede', 'pera', 'piada', 'planta',
    'plantas', 'poema', 'porto', 'posso', 'praticar', 'presente', 'primo', 'prima',
    'projeto', 'prova', 'quintal', 'quilo', 'roupa', 'roupas', 'sapato', 'sapatos', 'sopa',
    'tapete', 'jaqueta', 'etiqueta', 'esquina', 'pipoca', 'pimenta', 'passeio', 'passear',
    'pacote', 'palavra', 'palavras', 'parede', 'passagem', 'pasta', 'pequenas',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bem', 'bom', 'boa', 'boas', 'bons', 'bola', 'bolas', 'banco', 'barco', 'bairro',
    'bairros', 'baixo', 'baixa', 'beber', 'bebida', 'bonito', 'bonita', 'branco', 'branca',
    'braço', 'braços', 'brincar', 'cabelo', 'cabelos', 'abrir', 'abre', 'aberto', 'aberta',
    'acabar', 'acaba', 'sabe', 'saber', 'sabor', 'trabalho', 'trabalhar', 'trabalha',
    'lixo', 'caixa', 'caixas', 'deixar', 'deixa', 'peixe', 'peixes', 'exemplo', 'texto',
    'textos', 'sexta', 'roxo', 'roxa', 'puxar', 'mexer', 'sobre', 'sobrinho', 'sobrinha',
    'obrigado', 'obrigada', 'lembrar', 'lembra', 'bicicleta', 'biscoito', 'bolo', 'bolos',
    'bota', 'botas', 'bebe', 'abraço', 'abraços', 'cabeça', 'goiaba', 'embaixo', 'bagagem',
    'bandeira', 'banho', 'barato', 'barata', 'batata', 'batatas', 'beijo', 'biblioteca',
    'bilhete', 'blusa', 'boca', 'bolsa', 'bosque', 'brisa', 'buscar', 'busca', 'cebola',
    'dobrar', 'escova', 'livre', 'objeto', 'receber', 'recebe', 'sabonete', 'sobremesa',
    'tabela', 'explicar', 'explica', 'exato', 'extra', 'taxa', 'faixa', 'ameixa', 'queixo',
    'abacaxi', 'abacate', 'abelha', 'sabia', 'bela', 'belo', 'bala', 'bolacha', 'baixar',

    // --- + z . , ~  (u2-l08) — ã và õ mở ra từ đây --------------------------------------
    'não', 'mão', 'mãos', 'pão', 'pães', 'irmão', 'irmã', 'irmãos', 'irmãs', 'cão',
    'cães', 'avião', 'aviões', 'feijão', 'corações', 'lições', 'ação', 'ações', 'canção',
    'canções', 'informação', 'estação', 'estações', 'atenção', 'então', 'são', 'estão',
    'vão', 'dão', 'limão', 'botão', 'questão', 'questões', 'razão', 'verão', 'chão',
    'mamão', 'maçã', 'maçãs', 'manhã', 'manhãs', 'amanhã', 'lã', 'fã', 'fãs', 'opção',
    'opções', 'emoção', 'cidadão', 'educação', 'relação', 'população', 'mãe', 'mães',
    'põe', 'alemão', 'macarrão', 'opinião', 'melão', 'sabão', 'balão', 'caminhão',
    'televisão', 'visão', 'decisão', 'zero', 'zona', 'zonas', 'azul', 'azuis', 'dez',
    'doze', 'treze', 'quatorze', 'vez', 'vezes', 'voz', 'vozes', 'luz', 'luzes', 'paz',
    'feliz', 'felizes', 'fazer', 'faz', 'fazenda', 'dizer', 'diz', 'trazer', 'traz',
    'cozinha', 'cozinhar', 'beleza', 'certeza', 'natureza', 'rapaz', 'prazer', 'cruz',
    'arroz', 'juiz', 'talvez', 'xadrez', 'onze', 'raiz', 'nariz', 'vizinho', 'vizinha',
    'azeite', 'organizar', 'fazendo', 'zebra', 'fez', 'fiz', 'lazer', 'horizonte',
    'amizade', 'cartaz', 'capaz', 'duzentos',

    // --- + ; - = ´ [ ]  (u3-l02) — á é í ó ú mở ra từ đây -------------------------------
    'é', 'já', 'lá', 'até', 'está', 'também', 'só', 'pé', 'pés', 'café', 'avó', 'avós',
    'aí', 'país', 'países', 'saúde', 'fácil', 'difícil', 'rápido', 'rápida', 'música',
    'número', 'números', 'último', 'última', 'único', 'única', 'máquina', 'página',
    'páginas', 'sábado', 'prática', 'próximo', 'próxima', 'história', 'histórias',
    'família', 'famílias', 'água', 'árvore', 'árvores', 'médico', 'época', 'público',
    'possível', 'útil', 'móvel', 'móveis', 'há', 'ninguém', 'alguém', 'porém', 'parabéns',
    'através', 'açúcar', 'órgão', 'régua', 'sofá', 'após', 'dá', 'vá', 'nó', 'pó', 'cá',
    'chá', 'lápis', 'rádio', 'vídeo', 'vídeos', 'relógio', 'escritório', 'aniversário',
    'dicionário', 'memória', 'hotéis', 'papéis', 'sílaba', 'vírgula', 'técnica',
    'pássaro', 'óculos', 'ótimo', 'ótima', 'céu', 'chapéu', 'baú', 'saída', 'período',
    'sério', 'vários', 'várias', 'próprio', 'própria', 'maré', 'jacaré', 'picolé',
    'nível', 'agradável', 'açaí', 'órfão', 'difíceis', 'fáceis', 'lógico'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. `names` lọc KHÔNG qua phím chết,
     nên joão và belém chỉ nằm đây cho đủ, không bao giờ lên màn. */
  names: [
    'ana', 'maria', 'pedro', 'paulo', 'lucas', 'carlos', 'rafael', 'gabriel', 'marcos',
    'julia', 'beatriz', 'fernanda', 'camila', 'larissa', 'luiza', 'sofia', 'rita', 'clara',
    'tiago', 'felipe', 'bruno', 'rio', 'recife', 'salvador', 'curitiba', 'fortaleza',
    'manaus', 'santos', 'natal', 'joão', 'belém'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Khoảng nửa số câu không có dấu nào
     (ngoài ç): chúng là toàn bộ câu văn của unit 2, và của cả khoá "sem teclas mortas". */
  sentences: [
    'a casa nova tem uma porta verde',
    'o menino tem um livro novo na mochila',
    'minha mãe trabalha no centro da cidade',
    'eu não tenho tempo para essa viagem',
    'o gato dorme em cima da mesa de madeira',
    'todos os dias caminho até a praça',
    'a música do rádio é muito boa',
    'preciso comprar papel e dois cadernos',
    'o trem chega cedo pela manhã',
    'ela escreve cartas para os amigos',
    'faz muito calor aqui no verão',
    'as crianças brincam no jardim da escola',
    'quero aprender a digitar sem olhar para o teclado',
    'a janela do meu quarto dá para a rua',
    'meu pai prepara o almoço aos domingos',
    'o livro que procuro não está na mesa',
    'cada pessoa tem seu próprio ritmo',
    'a cidade muda muito durante o verão',
    'vamos caminhar pelo parque hoje de tarde',
    'o tempo passa rápido quando o trabalho vai bem',
    'minha irmã gosta de tomar café com leite',
    'o mercado fica aberto todos os dias',
    'ele deixou a chave em cima da cadeira',
    'a praia estava cheia no domingo',
    'escrevo devagar para errar menos'
  ]
};
