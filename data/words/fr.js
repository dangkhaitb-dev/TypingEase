/* data/words/fr.js — kho từ tiếng Pháp cho khoá /fr/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 181 (French AZERTY), và nó là bố cục KHÓ NHẤT trong Tier 2. Ba chuyện riêng của nó
 * quyết định toàn bộ hình dạng kho từ này, nên đọc trước khi thêm bớt gì:
 *
 * 1. HÀNG CƠ SỞ KHÔNG CÓ NGUYÊN ÂM. `q s d f g h j k l m ù` — bốn bài đầu không viết nổi một từ
 *    tiếng Pháp nào. build-course.js phát hiện và tự kéo bài `e i` lên trước bài ôn tập, nên thứ
 *    tự thật là: f j · d k · s l · q m · **e i** · [ôn] · g h · r u · ...
 *
 * 2. `a` ĐẾN RẤT MUỘN — bài 16 (u2-l06). Trên AZERTY, `a` nằm ở ô KeyQ, tức hàng trên dưới ngón
 *    út trái, và kế hoạch dạy hàng trên theo thứ tự trỏ → giữa → áp út → út. Đó là kỷ luật hàng
 *    phím, và đảo nó đi để lấy `a` sớm là bỏ đúng cái đang được rèn. Hệ quả: gần hai unit đầu
 *    KHÔNG CÓ `a`, nên kho từ phải sống bằng vốn từ tiếng Pháp không có `a` — mà vốn đó rất rộng
 *    (`je`, `le`, `les`, `des`, `il`, `tout`, `vous`, `être` họ hàng...). Đừng "sửa" bằng cách
 *    nhét từ có `a` vào nhóm sớm: generator lọc theo phím đã dạy nên chúng chỉ đơn giản biến mất.
 *
 * 3. DẤU MŨ ĐÃ CÓ, từ 23/09/2026. `^` nằm ở ô BracketLeft, và bài `cột ngoài` (u3-l02)
 *    nay dạy ô đó — nên â ê î ô û GÕ ĐƯỢC, bằng cách gõ `^` rồi gõ nguyên âm. `être`, `même`,
 *    `hôtel`, `goût` đều có trong kho, và `typeableWith` tự giữ chúng lại cho tới bài đó.
 *    Còn `¨` (ë ï ü) là Shift + `^`, chưa dùng đến — tiếng Pháp cần nó ít hơn nhiều.
 *    é è ç à ù thì CÓ — chúng ở hàng số không-Shift và ở ô Quote, dạy tại u3-l01 và u2-l08.
 *
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc mảng
 * `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại. Chúng tồn tại để người
 * đọc thấy ngay khoá học mỏng ở chỗ nào.
 *
 * NGUỒN GỐC. Từ vựng tiếng Pháp thông dụng không thuộc về ai, nhưng một DANH SÁCH được biên soạn
 * thì có thể mang quyền biên tập mỏng — nên danh sách này dựng độc lập rồi soát tay. Không lấy từ
 * nội dung bài của site dạy gõ nào — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ: chỉ ký tự trong `alphabet`; không chữ hoa (Shift dạy ở u2-l09); không danh từ riêng
 * ngoài `names`; không từ cổ; không gì bạo lực, y khoa, chính trị hay khó chịu khi bị bắt gõ lại
 * ba mươi lần. Gác bằng `node scripts/check-words.js --lang fr`.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.fr = {
  lang: 'fr',

  // KHÔNG có â ê î ô û ë ï ü: xem ghi chú 3 ở đầu file. Có dấu nháy, vì nó ở hàng số (ô Digit4)
  // và được dạy ở u3-l01 — `l'eau`, `c'est`, `qu'il` là tiếng Pháp bình thường, bỏ đi thì không.
  alphabet: "abcdefghijklmnopqrstuvwxyzéèçàùâêîôû'",

  words: [
    // --- e i  (u1-l05, bài được kéo lên) -------------------------------------------------
    // Điểm đầu tiên trong khoá có từ tiếng Pháp thật. Mười phím: d e f i j k l m q s.
    'de', 'des', 'le', 'les', 'me', 'mes', 'se', 'ses', 'je', 'si', 'il', 'ils', 'if', 'ifs',
    'elle', 'elles', 'dis', 'dise', 'fil', 'fils', 'mil', 'mille', 'sel', 'selle', 'lis',
    'midi', 'lime', 'limes', 'mime', 'mimes', 'mise', 'mises', 'messe', 'idem', 'demi',
    'demis', 'ski', 'skis',

    // --- + g h  (u1-l07) ------------------------------------------------------------------
    // Vẫn chưa có u, nên nhóm này mỏng — và đó là hình dạng thật của ràng buộc.
    'gel', 'gels', 'gifle', 'gifles', 'glisse', 'glisses', 'hisse', 'hisses',

    // --- + r u  (u1-l08) ------------------------------------------------------------------
    // Có u là kho mở hẳn ra: phần lớn từ chức năng tiếng Pháp không cần a hay o.
    'rue', 'rues', 'sur', 'dur', 'dure', 'dures', 'durs', 'jure', 'jures', 'luge', 'luges',
    'huile', 'huiles', 'guide', 'guides', 'figure', 'figures', 'milieu', 'sud', 'lui',
    'huit', 'fille', 'filles', 'grise', 'grises', 'rigide', 'rigides', 'mesure', 'mesures',
    'musique', 'musiques', 'humide', 'humides', 'heure', 'heures', 'fleur', 'fleurs',
    'mur', 'murs', 'jus', 'dessus', 'surgir', 'mugir', 'gris', 'lourd', 'lisse', 'russe',
    'juger', 'diriger',

    // --- + t y  (u2-l01) ------------------------------------------------------------------
    'tu', 'te', 'tes', 'dit', 'dite', 'dites', 'suite', 'suites', 'site', 'sites', 'tir',
    'tirs', 'tire', 'tires', 'titre', 'titres', 'utile', 'utiles', 'style', 'styles',
    'tel', 'telle', 'telles', 'item', 'items', 'lettre', 'lettres', 'lutte', 'luttes',
    'mettre', 'guitare', 'liste', 'listes', 'triste', 'tristes', 'gestes', 'geste',
    'juillet', 'sujet', 'sujets', 'termes', 'terme',

    // --- + o z  (u2-l02) — chú ý: ô KeyW của AZERTY in ra z -------------------------------
    'mot', 'mots', 'dos', 'gros', 'os', 'joli', 'jolie', 'jolies', 'rose', 'roses', 'dose',
    'doses', 'mode', 'modes', 'mois', 'moi', 'toi', 'soi', 'mou', 'sous', 'tout', 'tous',
    'jour', 'jours', 'four', 'fours', 'mort', 'morte', 'sort', 'sorte', 'sortes', 'fort',
    'forte', 'sotte', 'motif', 'motifs', 'zeste', 'zestes', 'douze', 'toujours', 'soleil',
    'histoire', 'histoires', 'lourde', 'groupe', 'groupes', 'somme', 'sommes', 'route',
    'routes', 'outil', 'outils',

    // --- + c n  (u2-l03) ------------------------------------------------------------------
    'un', 'une', 'on', 'son', 'ton', 'mon', 'non', 'nos', 'nom', 'noms', 'cours', 'court',
    'courte', 'donc', 'dont', 'sont', 'cent', 'conte', 'contes', 'monde', 'mondes',
    'encore', 'ensuite', 'content', 'contente', 'nuit', 'nuits', 'notre', 'centre',
    'centres', 'contre', 'continue', 'continuer', 'commence', 'commencer', 'connu',
    'connue', 'incendie', 'onze', 'second', 'seconde', 'monsieur',

    // --- + `,` v  (u2-l04) — ô KeyM của AZERTY in ra dấu phẩy ----------------------------
    'vie', 'vies', 'vite', 'vin', 'vins', 'vient', 'venir', 'voir', 'voit', 'vous', 'vote',
    'votes', 'vertu', 'veut', 'vieux', 'ville', 'villes', 'vitesse', 'souvent', 'devient',
    'devenir', 'voici', 'voile', 'voiles', 'vivre', 'vivent', 'nouveau', 'nouvelle',
    'ouvrir', 'ouvre', 'envie', 'envies', 'devoir', 'devoirs', 'novembre', 'vendredi',

    // --- + a p  (u2-l06) — `a` cuối cùng cũng tới ----------------------------------------
    'a', 'la', 'ma', 'sa', 'ta', 'pas', 'par', 'pour', 'part', 'partie', 'parties', 'place',
    'places', 'plan', 'plans', 'plus', 'peu', 'peut', 'avec', 'avant', 'avoir', 'aller',
    'appel', 'appels', 'aussi', 'papier', 'papiers', 'parole', 'paroles', 'personne',
    'personnes', 'premier', 'prendre', 'petit', 'petite', 'petits',
    'grand', 'grande', 'grands', 'jamais', 'ainsi', 'alors', 'assez', 'autre',
    'autres', 'plupart', 'passer', 'passe', 'point', 'points', 'porte', 'portes',
    'proposer', 'propose', 'projet', 'projets', 'prix', 'moment', 'moments',
    'travail', 'travaux', 'temps', 'tant', 'quand', 'quant', 'salle', 'salles',

    // --- + b x  (u2-l07) ------------------------------------------------------------------
    'bien', 'bon', 'bonne', 'bonnes', 'beau', 'base', 'bases', 'bas', 'table', 'tables',
    'bureau', 'bureaux', 'bras', 'bruit', 'bruits', 'deux', 'dix', 'taxi', 'taxis',
    'exemple', 'exemples', 'expliquer', 'explique', 'besoin', 'besoins',
    'belle', 'belles', 'blanc', 'blanche', 'bord', 'bords', 'bouche', 'boire', 'banque',
    'banques', 'bateau', 'bateaux', 'baisse', 'exact', 'exacte', 'texte', 'textes',

    // --- + w : ; ù  (u2-l08) ---------------------------------------------------------------
    'ou', 'où', 'wagon', 'wagons', 'kiwi', 'kiwis',

    // --- + é è ç à và dấu nháy  (u3-l01) ---------------------------------------------------
    // Hàng số không-Shift của AZERTY in ra & é " ' ( - è _ ç à, tức là đúng những chữ có dấu
    // của tiếng Pháp. Chữ số thật nằm ở tầng Shift và được dạy trong cùng bài đó.
    'à', 'été', 'était', 'très', 'après', 'année', 'années', 'élève', 'élèves', 'école',
    'écoles', 'français', 'française', 'ça', 'garçon', 'garçons', 'leçon', 'leçons',
    'déjà', 'père', 'pères', 'mère', 'mères', 'frère', 'frères', 'première', 'problème',
    'problèmes', 'lumière', 'lumières', 'dernière', 'dernières', 'derrière',
    'idée', 'idées', 'journée', 'journées', 'soirée', 'soirées', 'entrée', 'entrées',
    'décide', 'décider', 'détail', 'détails', 'général', 'générale', 'société',
    'sociétés', 'réponse', 'réponses', 'résultat', 'résultats', 'règle', 'règles',
    'référence', 'préférer', 'préfère', 'espèce', 'espèces', 'modèle', 'modèles',
    'système', 'systèmes', 'célèbre', 'complète', 'complet', 'précis',
    'précise', 'décembre', 'février', 'succès', 'progrès', 'accès', 'près',
    "c'est", "n'est", "qu'il", "qu'elle", "l'eau", "l'école", "d'accord", "aujourd'hui",
    "j'ai", "s'il", "l'autre", "l'année", "d'abord", "jusqu'à", "n'a", "qu'on",

    // --- + dấu mũ  (u3-l02, cột ngoài của ngón út phải) ---------------------------------
    // Ô BracketLeft in ra `^`, một PHÍM CHẾT: gõ nó rồi gõ nguyên âm. `typeableWith` hiểu
    // chữ ghép qua phím chết, nên những từ này chỉ xuất hiện từ bài đó trở đi.
    // Trước đó khóa tiếng Pháp không gõ nổi `être` hay `même`.
    'être', 'même', 'mêmes', 'tête', 'têtes', 'fête', 'fêtes', 'forêt', 'forêts', 'arrêt',
    'arrêts', 'prêt', 'prête', 'bête', 'bêtes', 'rêve', 'rêves', 'ancêtre', 'âge', 'âges',
    'château', 'châteaux', 'bâtiment', 'théâtre', 'théâtres', 'pâte', 'hôtel', 'hôtels',
    'côté', 'côtés', 'côte', 'plutôt', 'bientôt', 'rôle', 'rôles', 'contrôle', 'dôme',
    'île', 'îles', 'dîner', 'dîners', 'maître', 'maîtres', 'paraître', 'connaître',
    'goût', 'goûts', 'coût', 'coûts', 'août', 'sûr', 'sûre', 'mûr', 'mûre', 'brûler',
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ và
     KHÔNG chứa dấu mũ (xem ghi chú 3 ở đầu file). */
  names: [
    'julie', 'marie', 'sophie', 'claire', 'louise', 'emilie', 'camille', 'juliette',
    'pierre', 'louis', 'thomas', 'nicolas', 'olivier', 'vincent', 'martin', 'lucas',
    'paris', 'lyon', 'lille', 'nantes', 'toulouse', 'bordeaux', 'rennes', 'dijon'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm — mà trên AZERTY dấu chấm CHÍNH LÀ
     Shift + ô Comma, nên hai thứ đó tới cùng một lúc. Mỗi câu phải đọc như tiếng Pháp bình
     thường, và không được chứa â ê î ô û ë ï ü. */
  sentences: [
    'il lit une lettre devant la porte',
    'nous partons demain matin pour la campagne',
    'la petite fille joue dans le jardin',
    "je voudrais un verre d'eau bien froide",
    'le train arrive à la gare dans une heure',
    'elle travaille dans un bureau près de la place',
    'tous les jours je passe devant cette boutique',
    'le livre que je cherche est sur la table',
    'il fait très beau depuis le début de la semaine',
    'nous avons besoin de deux personnes de plus',
    'la musique venait de la salle du fond',
    'mon frère habite dans une grande ville du sud',
    'je préfère écrire sans regarder le clavier',
    "les enfants sortent de l'école vers quatre heures",
    'elle a pris le premier train du matin',
    "il y a beaucoup de monde sur la route aujourd'hui",
    'nous parlons de ce projet depuis longtemps',
    'la porte du jardin reste ouverte toute la journée',
    'chaque personne avance à son propre rythme',
    'le temps passe vite quand le travail avance bien'
  ]
};
