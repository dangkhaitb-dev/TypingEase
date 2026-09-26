/* tro-choi/text/fr.mjs — page des jeux en français (scripts/build-game-pages.mjs). Les mots viennent de
 * data/words/fr.js, la même banque que le cours /fr/ (AZERTY : é è à ç ù ont leur propre touche). */
export default {
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
    { h2: 'Trois jeux, une seule compétence', html: '<p>Chaque jeu travaille une partie de la frappe à l’aveugle. <b>Chasse aux touches</b> travaille l’emplacement de chaque touche : la touche allumée te dit quel doigt bouge, sans baisser les yeux. <b>Pluie de mots</b> entraîne à taper des mots entiers sous la pression du temps. <b>Course fantôme</b> entraîne un rythme régulier sur tout un texte, contre un fantôme réglé à la vitesse que tu choisis.</p>' },
    { h2: 'Sur ton propre clavier', html: '<p>Le clavier à l’écran de Chasse aux touches est celui du cours, l’AZERTY français, et les touches sont reconnues par leur position physique, pas par le caractère que tape ton système. Pluie de mots et Course fantôme utilisent les mêmes mots que le <a class="inline-link" href="{course}">cours de {lessons} leçons</a>, accents compris.</p>' },
    { h2: 'Comment en tirer quelque chose', html: '<ul><li>Joue après une leçon ; cinq à dix minutes suffisent.</li><li>Choisis un niveau où tu réussis la plupart des mots, et redescends si tu rates souvent.</li><li>Dans Course fantôme, règle le fantôme un peu sous ta vraie vitesse et monte-le avec le temps.</li><li>Pour mesurer vraiment ta vitesse, passe le <a class="inline-link" href="{test}">test de frappe</a>, pas un jeu.</li></ul>' }
  ],
  faqTitle: 'Questions fréquentes',
  faq: [
    ['Puis-je jouer contre d’autres personnes ?', 'Pas encore. Course fantôme se joue contre un fantôme qui garde la vitesse que tu choisis, ou ton propre record. Il n’y a pas d’autres joueurs ni de classement.'],
    ['Où sont gardés mes records ?', 'Seulement dans ce navigateur, sur cet appareil. Pas de compte, et rien n’est envoyé nulle part.'],
    ['Puis-je jouer sur un téléphone ?', 'Pluie de mots et Course fantôme marchent avec le clavier du téléphone. Chasse aux touches demande un vrai clavier, parce qu’il apprend où sont les touches.'],
    ['Pourquoi un mot juste n’a pas disparu ?', 'Il doit correspondre exactement avant que tu appuies sur Espace. Vérifie s’il manque un accent ou une lettre, ou si une majuscule s’est glissée.']
  ],
  cta: { eyebrow: 'Envie de mieux jouer ?', title: 'Apprends à taper à l’aveugle', text: '{lessons} leçons sur ton propre clavier, en commençant par la rangée de repos.', button: 'Voir le cours' }
};
