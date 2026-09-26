/* kiem-tra-toc-do-go/text/fr.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Pháp, cho
 * scripts/build-test-pages.mjs (cùng hình dạng với mẫu tiếng Anh).
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
      h2: 'Comment fonctionne le test de frappe',
      html: `<p>Tu recopies le texte affiché au-dessus pendant la durée choisie. Le chrono ne part qu'à ta première touche, tu peux donc placer tes doigts sur la rangée de repos et lire la première ligne avant de commencer. Les caractères justes restent neutres, ceux qui ne correspondent pas passent en rouge, et tu peux revenir en arrière pour les corriger.</p><p>Les textes sont des paragraphes en français courant, avec leurs majuscules, leur ponctuation et leurs accents. Pour les tests longs, plusieurs paragraphes s'enchaînent dans un ordre différent à chaque fois, pour que tu ne tapes pas de mémoire.</p>`
    },
    {
      h2: 'Mots par minute : ce que dit le chiffre',
      html: `<p>La vitesse est donnée en mots par minute (MPM, ou WPM en anglais). Comme les mots n'ont pas tous la même longueur, la convention habituelle compte un « mot » pour cinq caractères, espaces et ponctuation compris. Le calcul est donc : caractères saisis, divisés par cinq, divisés par le nombre de minutes écoulées. Le chiffre bouge pendant que tu tapes et se fige à la fin du temps.</p><p>Cette convention permet de comparer deux tests entre eux, mais elle ne se traduit pas directement en nombre de vrais mots français : un texte plein de mots longs donnera à peu près les mêmes MPM qu'un texte fait de mots courts.</p>`
    },
    {
      h2: 'Les accents sur un clavier AZERTY',
      html: `<p>Sur l'AZERTY français, <em>é</em>, <em>è</em>, <em>à</em>, <em>ç</em> et <em>ù</em> ont chacun leur touche sur la rangée des chiffres ou à côté. Les autres accents passent par une touche morte : on appuie sur <em>^</em>, puis sur la voyelle, pour obtenir <em>â</em>, <em>ê</em>, <em>î</em>, <em>ô</em> ou <em>û</em>, et sur <em>Maj</em> + <em>^</em> pour le tréma de <em>ë</em> ou <em>ï</em>.</p><p>Pour le test, une lettre accentuée compte comme un seul caractère, même quand elle demande deux frappes. Un texte en français, riche en accents, donne donc souvent quelques MPM de moins qu'un texte anglais tapé à la même aisance : compare tes résultats entre eux, pas avec un score obtenu sur une autre langue.</p><p>Quelques détails pratiques : les textes utilisent l'apostrophe droite (la touche <em>4</em>) et des espaces simples, y compris devant <em>:</em> et <em>?</em>, là où la typographie soignée demanderait une espace insécable. Comme l'AZERTY standard n'a pas de touche directe pour les majuscules accentuées, aucune phrase du test ne commence par l'une d'elles. Le test marche aussi avec un autre clavier (BÉPO, suisse, belge, canadien) : il compare seulement les caractères, quelle que soit la touche qui les produit.</p>`
    },
    {
      h2: '1 minute, 5 ou 10 minutes : quelle durée choisir',
      html: `<p>Un test de 1 minute, ou même de 15 ou 30 secondes, mesure surtout ta vitesse de pointe : tu restes concentré du début à la fin et une seule hésitation pèse lourd dans le résultat. C'est pratique pour un essai rapide ou pour vérifier un geste précis, comme un accent qui te ralentit.</p><p>Un test de 5 ou 10 minutes mesure l'endurance, ce qui ressemble davantage à la frappe réelle d'un courriel ou d'un compte rendu. La fatigue et les petites pertes d'attention apparaissent, et le score est en général un peu plus bas que sur une minute. Si tu veux suivre tes progrès, garde toujours la même durée d'une fois sur l'autre.</p>`
    },
    {
      h2: 'Lire sa précision et juger son score',
      html: `<p>La précision est la part de caractères justes parmi tout ce qui se trouve dans la zone de saisie. Une faute corrigée avec la touche Retour arrière ne compte plus comme erreur, mais elle t'a coûté du temps, et cela se voit dans les MPM. La régularité indique si ton rythme reste stable ou s'il monte et descend par à-coups.</p><p>Un bon score dépend du texte, de la durée et de ce que tu as dû corriger. Des MPM un peu plus bas avec une précision au-dessus de 95 % valent mieux qu'un chiffre élevé couvert de rouge. Plutôt que de viser un nombre, sers-toi du test pour vérifier une chose : est-ce que tu tapes plus régulièrement, avec moins d'erreurs, que la semaine dernière ?</p>`
    },
    {
      h2: 'Comment taper plus vite',
      html: `<ul><li>Apprends la place de chaque doigt sur la rangée de repos (<em>q s d f</em> et <em>j k l m</em>) et reviens-y après chaque touche.</li><li>Cherche la justesse d'abord : la vitesse suit la précision, jamais l'inverse.</li><li>Garde les yeux sur l'écran plutôt que sur le clavier, même pour les accents.</li><li>Entraîne-toi en séances courtes que tu tiendras vraiment, un peu chaque jour.</li><li>N'accélère que lorsque le mouvement ne demande plus de réflexion.</li></ul><p>Le <a class="inline-link" href="{course}">cours de {lessons} leçons</a> met ces étapes dans l'ordre, sur ton propre clavier, des deux touches à repère tactile jusqu'aux paragraphes entiers.</p>`
    }
  ],
  faqTitle: 'Questions fréquentes',
  faq: [
    ['Que veut dire MPM ?', "Mots par minute : le nombre de « mots » de cinq caractères, espaces compris, que tu tapes en une minute. C'est la même mesure que le WPM anglais."],
    ['Comment tester ma vitesse de frappe ?', "Choisis une durée, clique dans la zone de saisie et recopie le texte. Le chrono démarre à ta première touche et le résultat s'affiche à la fin du temps."],
    ['Les accents comptent-ils dans le calcul ?', "Oui. Une lettre accentuée compte comme un caractère, qu'elle ait sa propre touche comme é ou qu'elle passe par la touche morte ^ comme ê. Une erreur d'accent compte comme une erreur."],
    ['Vaut-il mieux faire un test de 1 minute ou de 10 minutes ?', "Une minute mesure ta vitesse de pointe, dix minutes ton endurance. Les deux sont utiles ; pour suivre tes progrès, reprends toujours la même durée."],
    ['Mes résultats sont-ils enregistrés ?', "Oui, mais seulement sur cet appareil, dans ton navigateur. Rien n'est envoyé ailleurs et aucun compte n'est nécessaire. Le graphique sous le test montre l'évolution de tes MPM et de ta précision."]
  ],
  cta: { eyebrow: 'Envie d\'un meilleur score ?', title: 'Apprends à taper à dix doigts', text: '{lessons} leçons sur ta propre disposition de clavier, en commençant par la rangée de repos.', button: 'Voir le cours' }
};
