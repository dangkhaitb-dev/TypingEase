/* content/games/fr.mjs — page des jeux en français (tooling/pages/games.mjs). Les mots viennent de
 * data/words/fr.js, la même banque que le cours /fr/ (AZERTY : é è à ç ù ont leur propre touche). */
export default {
  worlds: {"rain": "Jardin des lucioles", "race": "Circuit au crépuscule", "keys": "Station spatiale"},
  slug: 'jeux-de-dactylographie',
  title: 'Jeux de dactylographie gratuits sur ton clavier | TypingEase',
  description: 'Trois jeux de dactylographie gratuits : Pluie de mots, Course fantôme et Chasse aux touches. Entraîne-toi sur ton vrai clavier, dans le navigateur.',
  breadcrumbAria: "Fil d'Ariane",
  homeCrumb: 'Accueil',
  crumb: 'Jeux de dactylographie',
  eyebrow: "De l'entraînement qui ressemble à un jeu",
  h1: 'Jeux de dactylographie',
  intro: 'Trois petits jeux à faire entre deux leçons : détruis les mots qui tombent, fais la course contre ton propre rythme et chasse les touches sur un clavier à l’écran. Tes records restent sur cet appareil.',
  tabsAria: 'Choisis un jeu',
  locale: 'fr-FR',
  howAria: 'Comment jouer',
  how: {
    rain: ['Des mots tombent du haut.', 'Tape le mot exactement, accents compris.', 'Appuie sur Espace pour le détruire. Trois ratés et c’est fini.'],
    race: ['Choisis la vitesse du fantôme.', 'Tape le texte depuis la première lettre.', 'Arrive au drapeau avant le fantôme.'],
    keys: ['Une touche s’allume sur le clavier.', 'Garde les yeux sur l’écran et appuie dessus.', 'Touches-en le plus possible en 60 secondes.']
  },
  modes: {
    rain: ['Pluie de mots', 'Tape le mot qui tombe et appuie sur Espace pour le détruire.'],
    race: ['Course fantôme', 'Termine le texte avant le fantôme.'],
    keys: ['Chasse aux touches', 'Appuie sur la touche allumée, le plus de fois possible en 60 secondes.']
  },
  rain: {
    difficulty: 'Niveau', easy: 'Facile', normal: 'Normal', hard: 'Difficile',
    score: 'Score', level: 'Manche', lives: 'Vies', best: 'Record',
    start: 'Commencer', placeholder: 'Tape un mot qui tombe, puis Espace',
    hint: 'Sur l’AZERTY, é, è, à, ç et ù ont leur propre touche : tape-les directement. Si trois mots touchent le bas, la partie est finie.'
  },
  race: {
    pace: 'Fantôme', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} MPM`,
    start: 'Lancer la course', you: 'Toi', ghost: 'Fantôme', placeholder: 'Tape le texte ci-dessus, depuis la première lettre'
  },
  keys: {
    start: 'Lancer la chasse', time: 'Secondes', hits: 'Touches', streak: 'Série', best: 'Record',
    hint: 'Les yeux sur l’écran, pas sur les mains. Les touches sont lues par leur position physique, donc n’importe quelle disposition système convient.'
  },
  runtime: {
    over: 'Partie terminée', again: 'Rejouer', newBest: 'Nouveau record sur cet appareil !',
    rainResult: '{score} points · {words} mots détruits · {wpm} MPM · {accuracy} % dans le mille',
    raceReady: 'Le fantôme roule à {wpm} MPM. Appuie sur « Lancer la course », puis tape la première lettre pour partir.',
    raceGo: 'Partez !', raceWin: 'Tu es arrivé le premier !', raceLose: 'Le fantôme a gagné cette fois.',
    racePaused: 'Arrêté. Appuie sur « Lancer la course » pour repartir.',
    raceResult: '{seconds} secondes · {wpm} MPM · {accuracy} % de précision · fantôme {ghost} MPM',
    paceBest: 'Ton record ({wpm} MPM)',
    keysResult: '{hits} touches · plus longue série {streak} · {accuracy} % de précision'
  },
  sections: [
    { h2: 'Jeux de dactylographie : lequel choisir selon ce qui te bloque', html: `<p>Les trois jeux ne travaillent pas la même chose. <b>Chasse aux touches</b> demande seulement de trouver une touche : c’est le bon choix si tu cherches encore où sont le è ou le ç. <b>Pluie de mots</b> demande de finir un mot entier, accents compris, avant qu’il tombe : il convient quand les lettres sont connues mais que les mots hésitent. <b>Course fantôme</b> demande de tenir une ligne entière sans perdre le fil : à réserver au moment où les mots passent, mais où le rythme se casse au bout de quelques secondes.</p>
<p>Mon conseil va contre l’envie naturelle : ne commence pas par la course. Tant que tu regardes le clavier pour trouver une touche morte ou un chiffre, la course t’apprend surtout à te dépêcher en regardant tes mains. Commence par le jeu qui correspond à ta difficulté, même s’il te paraît moins amusant, et garde la course pour plus tard.</p>
<p>Aucun des trois ne te dit si tu tapes « bien ». Ils te montrent un endroit précis où ça coince : une touche qui t’échappe, un mot que tu abandonnes, une faute qui bloque la voiture. C’est cet endroit qu’il faut emporter dans la leçon suivante, pas le score.</p>` },
    { h2: 'Pluie de mots : les accents comptent jusqu’au bout', html: `<p>Les mots viennent de la même banque que le cours, tous en minuscules. Tape un mot qui tombe, puis valide avec Espace ou Entrée. Il doit correspondre exactement : « tete » ne fait pas tomber « tête ». Si trois mots touchent le bas, la partie s’arrête. En Facile, les mots font au plus cinq lettres ; en Normal, huit au plus ; en Difficile, il n’y a plus cette limite. Tous les huit mots détruits, la manche augmente et les mots tombent plus vite.</p>
<h3>Les mots qui coûtent une frappe de plus</h3>
<p>Les mots à é, è, à, ç ne coûtent pas plus de frappes que les autres, puisque ces lettres ont leur touche. Les mots en ê, â, î, ô ou û, comme « fête », « forêt » ou « même », demandent la touche morte ^ puis la voyelle : deux gestes pendant que le mot descend. Quelques mots portent aussi une apostrophe, comme « aujourd’hui » ou « jusqu’à », tapée sans Maj sur la touche 4. Si tu rates surtout ces mots-là, ce n’est pas un problème de vitesse, c’est la touche morte qui n’est pas encore automatique.</p>
<p>Les points dépendent de la longueur du mot et de la manche en cours. Ils servent à comparer deux parties au même niveau, pas à juger ta précision en général.</p>` },
    { h2: 'Course fantôme : une course contre ton propre rythme', html: `<p>Soyons clairs : il n’y a pas d’autre joueur. Le fantôme est une voiture qui roule à vitesse constante, celle que tu choisis entre 20 et 80 MPM, ou celle de ton record de course enregistré dans ce navigateur. Sans record, cette option part de 30 MPM ; un record très bas est relevé à 15 MPM. Il n’y a ni classement ni partie en ligne. Le défi, c’est toi contre une allure que tu fixes.</p>
<p>Appuie sur « Lancer la course » : la course démarre à ta première lettre, ce qui te laisse le temps de poser les mains. Le texte est fait de mots de la banque du cours, à recopier dans l’ordre avec leurs espaces.</p>
<h3>Une faute bloque la voiture</h3>
<p>Ta voiture avance jusqu’à la première faute, pas plus loin. Si tu tapes « tres » au lieu de « très », tout ce que tu écris ensuite ne compte pas tant que tu n’as pas corrigé le e. Sur un texte français, ce sont souvent les accents qui arrêtent la voiture, plus que les lettres. Choisis une allure qui te laisse le temps de revenir en arrière : si tu perds à chaque fois, baisse-la et garde-la fixe plusieurs courses de suite pour pouvoir comparer.</p>` },
    { h2: 'Chasse aux touches : la rangée des chiffres de l’AZERTY', html: `<p>Une touche s’allume sur le clavier à l’écran ; appuie sur la même touche de ton clavier. Tu as 60 secondes. Chaque bonne touche s’ajoute au compteur, une mauvaise touche casse ta série. Regarde les deux résultats : beaucoup de touches avec des séries courtes, c’est souvent qu’on devine au lieu de savoir.</p>
<p>Sur l’AZERTY, le jeu allume toutes les touches qui portent une lettre en position de base. Ça inclut é, è, ç et à, qui sont sur la rangée des chiffres, et ù, à droite de m. C’est le seul des trois jeux qui t’oblige à trouver ces touches sans le mot autour pour t’aider. Si é et è te font hésiter dans un texte, c’est ici qu’il faut venir : l’une est au-dessus de z, l’autre au-dessus de u, et c’est cette distance que la main doit apprendre.</p>
<p>Le jeu lit la position physique de la touche, d’après le clavier affiché. Il ne vérifie pas quel doigt tu as utilisé, ni si tu as regardé tes mains : ça, c’est à toi de l’observer. Il faut un vrai clavier ; sur un téléphone, ce jeu ne fonctionne pas.</p>` },
    { h2: 'Du jeu à la leçon suivante', html: `<p>Avant de lancer une partie, choisis une seule question : est-ce que je cherche encore le ç ? Est-ce que j’oublie la touche morte dans « fête » ? Est-ce que ma voiture s’arrête toujours sur un accent ? Après la partie, réponds-y avant d’appuyer sur « Rejouer ». Une note comme « è et é confondus » se transforme en exercice. « Je dois faire mieux » ne se transforme en rien.</p>
<p>Si c’est une touche qui t’échappe, retourne au groupe Accents ou à l’unité des chiffres du <a class="inline-link" href="{course}">cours de {lessons} leçons</a>. Si ce sont les mots longs ou les élisions, l’unité Texte relié est faite pour ça. Si tu veux savoir où en est ta vitesse réelle, passe le <a class="inline-link" href="{test}">test de frappe</a> : un score de jeu et un score de test ne mesurent pas la même chose, ne les compare pas.</p>
<p>Tes records restent dans ce navigateur, séparés par langue. Arrête de rejouer quand tu ne fais plus que regarder l’animation ; c’est le bon moment pour revenir à une leçon.</p>` }
  ],
  faqTitle: 'Questions fréquentes',
  faq: [
    ['Puis-je jouer contre d’autres personnes ?', 'Pas encore. Course fantôme se joue contre un fantôme qui garde la vitesse que tu choisis, ou ton propre record. Il n’y a pas d’autres joueurs ni de classement.'],
    ['Où sont gardés mes records ?', 'Seulement dans ce navigateur, sur cet appareil. Pas de compte, et rien n’est envoyé nulle part.'],
    ['Puis-je jouer sur un téléphone ?', 'Pluie de mots et Course fantôme marchent avec le clavier du téléphone. Chasse aux touches demande un vrai clavier, parce qu’il apprend où sont les touches.'],
    ['Pourquoi un mot juste n’a pas disparu ?', 'Il doit correspondre exactement avant que tu appuies sur Espace. Vérifie s’il manque un accent ou une lettre, ou si une majuscule s’est glissée.'],
    ['Pourquoi Chasse aux touches m’allume é ou ç ?', 'Sur l’AZERTY, é, è, ç, à et ù ont leur propre touche, sans Maj. Le jeu allume toutes les touches qui portent une lettre en position de base, donc celles-là aussi. Elles sont sur la rangée des chiffres, sauf ù, à droite de m.'],
    ['Quel jeu choisir quand on débute ?', 'Chasse aux touches si tu cherches encore les touches, Pluie de mots en Facile quand les lettres sont connues. Garde Course fantôme pour plus tard, avec une allure basse et fixe. Si tu ne sais pas encore quel doigt va où, commence par la leçon 1 du cours et reviens ensuite.']
  ],
  cta: { eyebrow: 'Envie de mieux jouer ?', title: 'Apprends à taper à l’aveugle', text: '{lessons} leçons sur ton propre clavier, en commençant par la rangée de repos.', button: 'Voir le cours' }
};
