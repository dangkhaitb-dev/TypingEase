/* content/typing-test/fr.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Pháp, cho
 * tooling/pages/typing-tests.mjs (cùng hình dạng với mẫu tiếng Anh).
 * `{lessons}` = số bài của khoá chính tiếng Pháp, `{course}` = URL trang lộ trình của khoá đó.
 */
export default {
  slug: 'test-de-frappe',
  title: 'Test de frappe : vitesse en MPM et précision | TypingEase',
  description: 'Test de frappe gratuit dans ton navigateur : tape 1, 5 ou 10 minutes et vois tes mots par minute, ta précision et tes erreurs. Sans inscription.',
  breadcrumbAria: "Fil d'Ariane",
  homeCrumb: 'Accueil',
  crumb: 'Test de frappe',
  eyebrow: 'Test de frappe gratuit',
  h1: 'Test de vitesse de frappe',
  intro: "Choisis une durée, de 15 secondes à 10 minutes, puis recopie le texte pour voir tes mots par minute, ta précision et tes erreurs. Le chrono démarre à ta première touche, pas sur un bouton.",
  durationAria: 'Durée du test',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Résultat en direct',
  stats: { time: 'Temps', wpm: 'MPM', accuracy: 'Précision', errors: 'Erreurs', consistency: 'Régularité' },
  promptAria: 'Le texte à taper',
  inputLabel: 'Commence à taper ici',
  soundTitle: 'Petit clic à chaque touche (Alt+S)',
  soundLabel: 'Clic des touches',
  placeholder: 'Clique ici et commence à taper...',
  restart: 'Recommencer',
  wpmNote: 'Les MPM comptent les caractères saisis, divisés par cinq, rapportés aux minutes passées à taper.',
  result: { title: 'Ton résultat' },
  progress: {
    eyebrow: "Journal d'entraînement", title: 'Tes progrès', rangeAria: 'Période', days: n => `${n} jours`,
    metricAria: 'Mesure affichée', note: 'Les résultats peuvent venir de tests de durées différentes.',
    summaryAria: 'Résumé des progrès', avgWpm: 'MPM moyens', bestWpm: 'Meilleurs MPM',
    avgAccuracy: 'Précision moyenne', count: 'Tests faits', chartAria: 'Graphique des progrès'
  },
  sections: [
    {
      h2: 'Comment fonctionne le test de frappe en ligne',
      html: `<p>Comme dans tout test de dactylographie, tu recopies le texte affiché au-dessus pendant la durée choisie. Le chrono ne part qu'à ta première touche, tu peux donc placer tes doigts sur la rangée de repos et lire la première ligne avant de commencer. Les caractères justes restent neutres, ceux qui ne correspondent pas passent en rouge, et tu peux revenir en arrière pour les corriger.</p><p>Les textes sont des paragraphes en français courant, avec leurs majuscules, leur ponctuation et leurs accents. Pour les tests longs, plusieurs paragraphes s'enchaînent dans un ordre différent à chaque fois, pour que tu ne tapes pas de mémoire.</p>`
    },
    {
      h2: 'Mots par minute : ce que dit le chiffre',
      html: `<p>Comme tout test de mots par minute, celui-ci donne la vitesse en MPM (WPM en anglais). Comme les mots n'ont pas tous la même longueur, la convention habituelle compte un « mot » pour cinq caractères, espaces et ponctuation compris. Le calcul est donc : caractères saisis, divisés par cinq, divisés par le nombre de minutes écoulées. Le chiffre bouge pendant que tu tapes et se fige à la fin du temps.</p><p>Cette convention permet de comparer deux tests entre eux, mais elle ne se traduit pas directement en nombre de vrais mots français : un texte plein de mots longs donnera à peu près les mêmes MPM qu'un texte fait de mots courts.</p>`
    },
    {
      h2: 'Les accents sur un clavier AZERTY',
      html: `<p>Sur l'AZERTY français, <em>é</em>, <em>è</em>, <em>à</em>, <em>ç</em> et <em>ù</em> ont chacun leur touche sur la rangée des chiffres ou à côté. Les autres accents passent par une touche morte : on appuie sur <em>^</em>, puis sur la voyelle, pour obtenir <em>â</em>, <em>ê</em>, <em>î</em>, <em>ô</em> ou <em>û</em>, et sur <em>Maj</em> + <em>^</em> pour le tréma de <em>ë</em> ou <em>ï</em>.</p><p>Pour le test, une lettre accentuée compte comme un seul caractère, même quand elle demande deux frappes. Un texte en français, riche en accents, donne donc souvent quelques MPM de moins qu'un texte anglais tapé à la même aisance : compare tes résultats entre eux, pas avec un score obtenu sur une autre langue.</p><p>Quelques détails pratiques : les textes utilisent l'apostrophe droite (la touche <em>4</em>) et des espaces simples, y compris devant <em>:</em> et <em>?</em>, là où la typographie soignée demanderait une espace insécable. Comme l'AZERTY standard n'a pas de touche directe pour les majuscules accentuées, aucune phrase du test ne commence par l'une d'elles. Le test marche aussi avec un autre clavier (BÉPO, suisse, belge, canadien) : il compare seulement les caractères, quelle que soit la touche qui les produit.</p>`
    },
    {
      h2: 'Test de frappe de 1 minute, 5 minutes ou 10 minutes',
      html: `<p>Une minute ou moins mesure ta vitesse de pointe : tu restes concentré du début à la fin, et une seule hésitation pèse lourd. Cinq ou dix minutes mesurent l'endurance, plus proche de la frappe réelle d'un courriel ou d'un compte rendu, et le score y est en général un peu plus bas. Pour suivre tes progrès, garde toujours la même durée.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Quelle durée choisir</caption><thead><tr><th scope="col">Durée</th><th scope="col">Ce qu'elle mesure</th></tr></thead><tbody><tr><th scope="row">15 ou 30 secondes</th><td>Un échauffement, ou un moyen d'isoler un geste précis comme la touche morte ^ sans que la fatigue entre en jeu.</td></tr><tr><th scope="row">Test de frappe 1 minute</th><td>Le format de référence pour comparer tes scores d'un jour à l'autre : assez court pour rester concentré, assez long pour qu'un faux départ ne décide pas de tout.</td></tr><tr><th scope="row">2 ou 3 minutes</th><td>L'étape intermédiaire quand une minute devient facile : les premières baisses d'attention apparaissent dans la régularité.</td></tr><tr><th scope="row">Test de frappe 5 minutes</th><td>L'équivalent d'un long courriel : tu vois si ta précision tient quand l'élan du début retombe.</td></tr><tr><th scope="row">Test de frappe 10 minutes</th><td>Un test d'endurance à garder pour quand tu tapes déjà sans regarder ; avant cela, il mesure surtout ta fatigue.</td></tr></tbody></table></div>`
    },
    {
      h2: 'Lire sa précision et juger son score',
      html: `<p>La précision est la part de caractères justes parmi tout ce qui se trouve dans la zone de saisie. Une faute corrigée avec la touche Retour arrière ne compte plus comme erreur, mais elle t'a coûté du temps, et cela se voit dans les MPM. La régularité indique si ton rythme reste stable ou s'il monte et descend par à-coups.</p><p>Un bon score dépend du texte, de la durée et de ce que tu as dû corriger. Des MPM un peu plus bas avec une précision au-dessus de 95 % valent mieux qu'un chiffre élevé couvert de rouge. Plutôt que de viser un nombre, sers-toi du test pour vérifier une chose : est-ce que tu tapes plus régulièrement, avec moins d'erreurs, que la semaine dernière ?</p>`
    },
    {
      h2: 'Test de frappe pour débutant',
      html: `<p>Pour un premier essai, je te déconseille le test de 10 minutes que beaucoup lancent « pour voir leur vrai niveau ». Prends 1 minute et tape chaque accent pour de bon : si tu écris <em>tete</em> au lieu de <em>tête</em> pour éviter la touche morte ^, le test compte une erreur, et c'est une habitude qu'il faudra défaire ensuite. Je préfère te voir finir à 20 MPM presque sans rouge qu'à 40 avec des accents manquants.</p><ul><li>Avant de commencer, vérifie dans un éditeur de texte que la touche 2 donne bien <em>é</em>. Ce test ne contrôle pas les touches défectueuses, mais un système réglé en QWERTY fausse tout.</li><li>Refais la même minute plusieurs jours avant de passer à 5 minutes.</li></ul><p>Si tu cherches encore le <em>é</em> des yeux, le <a class="inline-link" href="{course}">cours de {lessons} leçons</a> t'aidera davantage que de répéter le test.</p>`
    },
    {
      h2: 'Après le test : quoi travailler ensuite',
      html: `<ul><li>Apprends la place de chaque doigt sur la rangée de repos (<em>q s d f</em> et <em>j k l m</em>) et reviens-y après chaque touche.</li><li>Cherche la justesse d'abord : la vitesse suit la précision, jamais l'inverse.</li><li>Garde les yeux sur l'écran plutôt que sur le clavier, même pour les accents.</li><li>Entraîne-toi en séances courtes que tu tiendras vraiment, un peu chaque jour.</li><li>N'accélère que lorsque le mouvement ne demande plus de réflexion.</li></ul><p>Pour apprendre à taper au clavier sans regarder, le <a class="inline-link" href="{course}">cours de {lessons} leçons</a> met ces étapes dans l'ordre, avec des exercices de frappe sur ton propre clavier, des deux touches à repère tactile jusqu'aux paragraphes entiers.</p><p>Pour un plan de dix minutes centré sur le point, les chiffres et la touche morte, lis notre guide pour <a class="inline-link" href="/fr/taper-plus-vite-au-clavier/">taper plus vite au clavier</a>.</p>`
    }
  ],
  faqTitle: 'Questions fréquentes',
  faq: [
    ['Test mots par minute ou test WPM : quelle différence ?', "Aucune. MPM (mots par minute) est la traduction de WPM : un « mot » vaut cinq caractères, espaces compris, donc 45 MPM ici correspondent à 45 WPM sur un site anglophone."],
    ['Faut-il installer quelque chose pour ce test de vitesse de frappe en ligne ?', "Non. Le test tourne entièrement dans ton navigateur, sans téléchargement ni compte : il suffit d'un clavier réglé sur la bonne disposition."],
    ['Comment tester ma vitesse de frappe ?', "Choisis une durée, clique dans la zone de saisie et recopie le texte. Le chrono démarre à ta première touche et le résultat s'affiche à la fin du temps."],
    ['Les accents comptent-ils dans le calcul ?', "Oui. Une lettre accentuée compte comme un caractère, qu'elle ait sa propre touche comme é ou qu'elle passe par la touche morte ^ comme ê. Une erreur d'accent compte comme une erreur."],
    ['Vaut-il mieux faire un test de 1 minute ou de 10 minutes ?', "Une minute mesure ta vitesse de pointe, dix minutes ton endurance. Les deux sont utiles ; pour suivre tes progrès, reprends toujours la même durée."],
    ['Mes résultats sont-ils enregistrés ?', "Oui, mais seulement sur cet appareil, dans ton navigateur. Rien n'est envoyé ailleurs et aucun compte n'est nécessaire. Le graphique sous le test montre l'évolution de tes MPM et de ta précision."],
    ['Est-ce un test de vitesse de clavier ou un test des touches ?', "C'est ta vitesse de frappe qui est mesurée, pas le clavier. L'outil ne détecte pas les touches défectueuses : si une touche ne répond pas, vérifie-la dans un éditeur de texte avant de lancer le test."],
    ['Est-ce un bon test de frappe pour enfants ?', "Oui, avec un adulte à côté, mais il n'existe pas de mode enfant : les textes sont écrits pour des adultes. Choisis des durées de 15 à 60 secondes et regarde la précision avant les MPM."]
  ],
  cta: { eyebrow: 'Envie d\'un meilleur score ?', title: 'Apprends à taper à dix doigts', text: '{lessons} leçons sur ta propre disposition de clavier, en commençant par la rangée de repos.', button: 'Voir le cours' }
};
