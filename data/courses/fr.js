/* data/courses/fr.js — khoá học tiếng Pháp: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/fr/*.json khi
 * trình duyệt nhận được.
 *
 * AZERTY LÀ BỐ CỤC KHÓ NHẤT TRONG TIER 2, và hai công tắc ở dưới tồn tại vì nó:
 *
 *   shiftUnlocks: ['.']     Trên AZERTY, dấu chấm KHÔNG có ô riêng — nó là Maj + ô Comma (ô đó
 *                           in ra `;` khi không giữ Maj). Nên dấu chấm mở ra đúng ở bài dạy Maj,
 *                           không sớm hơn một bài nào. Không khai cái này thì khoá tiếng Pháp
 *                           không bao giờ dạy dấu chấm và mọi câu đều thiếu dấu kết.
 *
 *   digitsAreShifted: true  Hàng số của AZERTY không giữ Maj in ra `& é " ' ( - è _ ç à` — tức
 *                           là đúng những chữ có dấu của tiếng Pháp. Chữ số thật nằm ở tầng Maj.
 *                           Nên bài "hàng trên" dạy CẢ HAI TẦNG, và tiêu đề của nó nói đúng thế
 *                           thay vì gọi nó là "hàng số" như trên bàn phím Mỹ.
 *
 * Bố cục này cũng không dạy được â ê î ô û ë ï ü (dấu mũ nằm ở ô BracketLeft, ngoài kế hoạch) —
 * xem ghi chú đầu data/words/fr.js.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Xưng hô với người học bằng **tu**, nhất quán.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.fr = {
  lang: 'fr',
  name: 'Français',

  keyboardId: 181,

  progressKey: 'typingease-progress-fr-v1',
  badgesKey: 'typingease-badges-fr-v1',

  // Có ù é è ç à và dấu câu của AZERTY (`;` `:` `!` `)`), KHÔNG có dấu nháy trần vì nó chỉ là
  // một ký tự của hàng trên chứ không phải phím chữ, và một dòng luyện ngón toàn dấu nháy thì
  // không dạy gì cả.
  letterTest: "^[a-zéèçàù;:,.!)\\-]$",

  // Xem đầu file.
  shiftUnlocks: ['.'],
  digitsAreShifted: true,
  /*
   * CÁC HỌ KHÁC CỦA TIẾNG PHÁP. Mỗi họ là một khoá riêng (data/languages.js → `courses`), sinh
   * bằng `--course fr-<họ>`. Ở đây chỉ có phần KHÁC khoá AZERTY: công tắc nào không còn đúng, câu
   * dạy nào nói về một phím mà bố cục đó đặt chỗ khác. Mọi thứ không khai lại thì dùng bản ở trên.
   *
   * Cédille chết của bố cục Canada (ô BracketRight) KHÔNG được coi là phím chết: keyboard.js chưa
   * biết tô sáng chuỗi ¸ + c, nên từ có ç tự rơi khỏi khoá đó thay vì dạy một thứ màn hình không
   * chỉ được.
   */
  families: {
    // Canadian French (186): QWERTY. Hàng số là chữ số thật, dấu chấm có ô riêng, é ở ô Slash
    // (cột ngoài), còn ô Quote là dấu huyền chết — è à ù tới ở bài dấu câu.
    canadien: {
      shiftUnlocks: [],
      digitsAreShifted: false,
      teaching: {
        introEdge: "Les touches du bord droit, toutes à l'auriculaire. On y trouve ici le é, et l'accent circonflexe : une touche morte, qui sert à écrire â ê î ô û.",
        edgeBackToWords: 'Retour aux mots, avec le clavier entier disponible — é et accents circonflexes compris.',
        introDigits: "La rangée des chiffres est au-dessus de la rangée du haut. Chaque doigt y monte en ligne droite et redescend de même. Ce sont les plus longs trajets du cours.",
        titleDigits: 'La rangée des chiffres',
        summary: {
          edge: "La colonne du bord droit : six touches, toutes à l'auriculaire, dont le é et l'accent circonflexe.",
          shift: "Les majuscules avec l'auriculaire opposé, et le retour à la ligne.",
          digits: 'Les dix chiffres, chaque doigt montant en ligne droite.'
        },
        intro: {
          edge: "L'auriculaire droit s'occupe de plus de touches que n'importe quel autre doigt, et celles du bord sont celles que presque personne ne travaille. Sur ce clavier, elles comptent double : le é est là, et l'accent circonflexe aussi — une touche morte : on la frappe, puis on frappe la voyelle.",
          shift: "Jusqu'ici tout s'est écrit en minuscules. Maj change ça, et il y a une règle à prendre dès le début : c'est l'auriculaire de la main opposée à la lettre qui l'enfonce. Avec l'auriculaire du même côté, la main se tord et tu finis par regarder le clavier.",
          digits: "La rangée des chiffres est au-dessus de tout ce que tu as écrit jusqu'ici, et c'est là que les doigts vont le plus loin. On s'y trompe plus que partout ailleurs dans le cours, et ça se répare comme le reste : lentement d'abord."
        },
        congrats: {
          edge: "Avec le é et le circonflexe, presque tout le français courant s'écrit maintenant. C'est la colonne que la plupart des cours laissent de côté.",
          shift: "Avec Maj et Entrée, tu peux écrire un texte entier comme il s'écrit en dehors d'ici.",
          digits: "La rangée des chiffres est la plus difficile et la moins pratiquée ensuite. Reviens à cette leçon de temps en temps."
        },
        units: {
          u3: { title: 'Chiffres, signes et vitesse',
            summary: "La rangée des chiffres, le é et le circonflexe du bord droit, puis des paragraphes longs à rythme tenu." }
        },
        groups: { 'numbers-symbols': 'Chiffres et signes' }
      }
    },

    // Swiss French (187): QWERTZ. é và à ở hàng cơ sở, è và dấu mũ chết ở cột ngoài. Hàng số
    // không Maj là chữ số; tầng Maj của nó giữ + " * ç % & / ( ) = — kể cả ç, chữ duy nhất bố cục
    // này không có ô riêng. Nên bài hàng số dạy CẢ HAI TẦNG như AZERTY, nhưng theo chiều ngược lại.
    suisse: {
      shiftUnlocks: [],
      digitsAreShifted: true,
      teaching: {
        introDigits: "La rangée des chiffres est au-dessus de la rangée du haut. Sans Maj, elle donne les chiffres ; avec Maj, les signes — et le ç, qui n'a pas de touche à lui sur ce clavier.",
        drillDigitsShifted: 'Les mêmes touches avec Maj : les signes, et le ç.',
        titleDigits: 'Les chiffres et leurs signes',
        summary: {
          shift: "Les majuscules avec l'auriculaire opposé, et le retour à la ligne.",
          digits: 'Les chiffres sans Maj, les signes et le ç avec Maj — toute la rangée des chiffres.'
        },
        intro: {
          shift: "Jusqu'ici tout s'est écrit en minuscules. Maj change ça, et il y a une règle à prendre dès le début : c'est l'auriculaire de la main opposée à la lettre qui l'enfonce. Avec l'auriculaire du même côté, la main se tord et tu finis par regarder le clavier.",
          digits: "La rangée des chiffres porte deux étages sur ce clavier : les chiffres sans Maj, les signes avec — et le ç en fait partie, sur le 4. Les doigts y vont plus loin que partout ailleurs, et c'est la rangée où l'on se trompe le plus dans tout le cours."
        },
        congrats: {
          shift: "Avec Maj et Entrée, tu peux écrire un texte entier comme il s'écrit en dehors d'ici."
        },
        units: {
          u3: { title: 'Chiffres, signes et vitesse',
            summary: 'Les deux étages de la rangée des chiffres — le ç compris —, le bord droit, puis des paragraphes longs à rythme tenu.' }
        },
        groups: { 'numbers-symbols': 'Chiffres et signes' }
      }
    },

    // BÉPO (184): hàng cơ sở là a u i e , c t s r n m — có nguyên âm ngay bài 1, nên không bài nào
    // bị kéo lên. Dấu chấm có ô riêng (KeyV), dấu mũ chết ở ô KeyY (u2-l01), hàng trên không Maj
    // in ra " « » ( ) @ + - / *, chữ số ở tầng Maj. Cột ngoài là f z w ç — chữ thật, không phải dấu.
    bepo: {
      shiftUnlocks: [],
      digitsAreShifted: true,
      teaching: {
        introEdge: "Les touches du bord droit, toutes à l'auriculaire. Sur BÉPO, quatre d'entre elles sont des lettres : f, z, w et ç.",
        edgeBackToWords: 'Retour aux mots, avec le clavier entier disponible — f, z, w et ç compris.',
        introDigits: "Sur BÉPO, la rangée tout en haut donne sans Maj les guillemets, les parenthèses, l'arobase et les signes de calcul, et avec Maj les chiffres. C'est la rangée où les doigts vont le plus loin.",
        titleDigits: 'Les signes et les chiffres',
        summary: {
          edge: "La colonne du bord droit : six touches, toutes à l'auriculaire, dont f, z, w et ç.",
          shift: "Les majuscules avec l'auriculaire opposé, et le retour à la ligne.",
          digits: 'Les guillemets et les signes sans Maj, les chiffres avec Maj — toute la rangée des chiffres.'
        },
        intro: {
          edge: "L'auriculaire droit s'occupe de plus de touches que n'importe quel autre doigt, et celles du bord sont celles que presque personne ne travaille. Sur BÉPO, on y trouve des lettres : f, z, w et ç. Sans cette colonne, pas de fait, pas de zéro, pas de ça.",
          shift: "Jusqu'ici tout s'est écrit en minuscules. Maj change ça, et il y a une règle à prendre dès le début : c'est l'auriculaire de la main opposée à la lettre qui l'enfonce. Avec l'auriculaire du même côté, la main se tord et tu finis par regarder le clavier.",
          digits: "La rangée tout en haut d'un clavier BÉPO porte deux étages : les guillemets, les parenthèses et les signes sans Maj, les chiffres avec. Les doigts y vont plus loin que partout ailleurs, et c'est la rangée où l'on se trompe le plus dans tout le cours. Elle se répare comme le reste : lentement d'abord."
        },
        congrats: {
          edge: "Avec f, z, w et ç, il ne manque plus aucune lettre. C'est la colonne que la plupart des cours laissent de côté.",
          shift: "Avec Maj et Entrée, tu peux écrire un texte entier comme il s'écrit en dehors d'ici."
        },
        units: {
          u3: { title: 'Signes, chiffres et vitesse',
            summary: 'Les deux étages de la rangée des chiffres, les dernières lettres du bord droit, puis des paragraphes longs à rythme tenu.' }
        },
        groups: { 'numbers-symbols': 'Signes et chiffres' }
      }
    }
  },

  teaching: {
    and: ' et ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'la virgule', '.': 'le point', ';': 'le point-virgule', ':': 'les deux-points', "'": "l'apostrophe", '-': 'le tiret' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Toutes les autres touches',
      unitSummary: "Les {count} caractères de ce clavier que le cours n'a pas encore utilisés, chacun tapé là où il sert vraiment.",
      groupSymbols: 'Les touches qui restent',
      groupFinish: "Termine l'unité",
      titleNumberRow: 'Les signes de la rangée du haut',
      titleKeys: '{keys}',
      titleReview: 'Tous les signes ensemble',
      summaryKeys: 'Au programme : {keys}.',
      summaryReview: "Tous les signes de l'unité, mêlés aux mots et aux nombres.",
      summaryTest: 'Un test chronométré avec toutes les touches du clavier.',
      introLesson: "Des touches que le cours n'a pas encore utilisées : {keys}. {shiftNote}",
      shiftNote: "Chacune se fait avec Maj et une touche que tes doigts connaissent déjà — Maj à l'auriculaire de l'autre main.",
      shiftNoteMixed: "Certaines demandent Maj, avec l'auriculaire de l'autre main ; les autres ont leur propre touche, que le cours n'avait pas encore utilisée.",
      introKey: "C'est {finger} qui frappe {key}{shift}.",
      introKeyShift: ", avec Maj tenue par l'autre main",
      drillOne: "D'abord {key} sans rien autour, puis là où on s'en sert vraiment.",
      burst: 'Une série de petits morceaux avec ces caractères.',
      together: 'Tout ce que cette leçon a apporté, mélangé.',
      inWords: 'Des mots à nouveau, avec les signes à leur place.',
      introReview: "Aucune touche nouvelle. Tous les caractères de l'unité, mêlés aux mots et aux nombres.",
      reviewFirst: 'Les signes au même rythme que les lettres qui les entourent.',
      reviewLine: 'Garde le rythme à travers les signes ; ce sont des touches comme les autres.',
      congratsKeys: "{keys} : sous tes doigts maintenant. Le signe vient aussi facilement que la lettre d'à côté.",
      congratsReview: 'Toutes les touches de ce clavier ont eu leur tour.',
      introTest: 'Un test chronométré avec tout, signes compris.',
      congratsTest: "C'était le clavier entier. Il n'y reste aucune touche que ce cours ne t'ait pas apprise.",
      testText: 'Des mots, des nombres et des signes. Un même rythme du début à la fin.'
    },

    fingers: {
      LP: "l'auriculaire gauche", LR: "l'annulaire gauche", LM: 'le majeur gauche',
      LI: "l'index gauche", LT: 'le pouce gauche', RT: 'le pouce droit',
      RI: "l'index droit", RM: 'le majeur droit', RR: "l'annulaire droit",
      RP: "l'auriculaire droit"
    },

    /* --- cot ngoai cua ngon ut phai --- */
    introEdge: 'Les touches du bord droit, toutes à l\'auriculaire. Sur ce clavier, l\'une d\'elles est l\'accent circonflexe : une touche morte, qui sert à écrire â ê î ô û.',
    drillEdgePair: 'Maintenant {keys}. L\'auriculaire part vers l\'extérieur et revient ; la main ne suit pas.',
    burstEdge: 'Une série avec ce que tu as de cette colonne.',
    drillEdgeAll: 'Les six ensemble. C\'est l\'endroit du clavier où le poignet se tord le plus si le doigt ne revient pas.',
    burstEdgeWords: 'Des mots à nouveau, pour détendre la main après tout ce bord.',
    edgeBackToWords: 'Retour aux mots, avec le clavier entier disponible — y compris les accents circonflexes.',
    edgeClose: 'Des phrases entières pour terminer les leçons de touches.',

    /* --- màn giới thiệu phím --- */
    introKey: "C'est {finger} qui frappe cette touche. Trouve-la sans regarder, appuie une fois, et laisse le doigt revenir à sa place. Le retour compte autant que la frappe.",
    pressToContinue: 'Appuie sur <b>{key}</b> pour continuer',
    introSpace: "La barre d'espace appartient au pouce droit. Les pouces ne font rien d'autre, et c'est pour ça qu'on n'a jamais à la chercher.",
    pressSpace: "Appuie sur la <b>barre d'espace</b> pour continuer",

    /* --- luyện ngón --- */
    drillSpace: "Des groupes courts séparés par des espaces. Le pouce droit descend et remonte ; les autres doigts ne bougent pas de leur touche.",
    drillNew: "Seulement {key} et ce que tu connais déjà. Lentement, et que le doigt revienne à la rangée de repos après chaque frappe.",
    drillMixed: "Les nouvelles touches mélangées aux anciennes, comme elles apparaîtront dans les mots.",
    drillAgain: "Encore les deux nouvelles touches. Il n'y a pas encore de mots à écrire avec, et c'est normal.",
    drillWide: "Tout ce que tu as, en groupes courts. Regarde l'écran, pas tes mains.",
    drillAll: "Une dernière série avec tout ce qui a été vu jusqu'ici.",
    patternsBack: "On revient aux motifs un moment, pour vérifier que les doigts reviennent toujours à leur place.",

    /* --- ráfaga --- */
    burstKeys: "Des groupes courts, l'un après l'autre. Va jusqu'au bout même si tu en rates.",
    burstLonger: "Des groupes un peu plus longs. Se dépêcher n'aide pas encore.",
    burstWords: "Une série de mots courts contenant les nouvelles touches.",

    /* --- từ --- */
    wordsNew: "De vrais mots avec les nouvelles touches. Écris le mot entier d'un seul élan, pas lettre par lettre.",
    wordsOne: "Maintenant avec le poids sur <b>{key}</b>, celle que tu as le moins frappée.",
    wordsAll: "Tout ce que tu as, mélangé. Regarde combien de mots sortent déjà sans y penser.",

    /* --- ôn tập --- */
    introReview: "Aucune touche nouvelle dans cette leçon. Seulement celles que tu connais, plus vite et plus longtemps.",
    introReviewMixed: "Lettres, chiffres et signes ensemble, comme ils arrivent en dehors d'un cours.",
    pressEnter: 'Appuie sur <b>Entrée</b> pour commencer',
    reviewWords1: "Pour commencer, des mots isolés. Sans se presser : la vitesse vient de la précision, jamais l'inverse.",
    reviewBurst: "Une série courte. Termine la liste même si tu en laisses passer.",
    reviewWords2: "Cinq mots par ligne. Laisse les yeux passer devant les doigts.",
    reviewPatterns: "Des motifs à nouveau, pour vérifier que les doigts retournent à la rangée de repos.",
    reviewShort: "Des mots courts, à bon rythme. Ceux-là devraient presque sortir seuls.",
    reviewBurst2: "Plus de temps et plus de mots. Garde le même rythme du début à la fin.",
    reviewClose: "Des phrases entières. C'est là qu'on voit si la main revient toute seule.",
    reviewLast: "La dernière série. Si tu es arrivé jusqu'ici sans regarder le clavier, la leçon est faite.",

    /* --- Maj et Entrée --- */
    introShift: "Les majuscules se font avec l'auriculaire de la main opposée à la lettre. Maintiens Maj, frappe la lettre, relâche. Jamais avec l'auriculaire qui écrit.",
    pressShift: 'Maintiens <b>Maj</b> et frappe une lettre pour continuer',
    drillShift: "Majuscules et minuscules en alternance. L'auriculaire descend et remonte ; l'autre main ne bouge pas.",
    drillShiftUnlocks: "Maj donne aussi {keys}. Sur ce clavier, le point est Maj + la touche du point-virgule — il n'a pas de touche à lui.",
    wordsShift: "Des mots avec une majuscule au début, comme les noms propres.",
    introEnter: "Entrée revient à l'auriculaire droit, à droite de la rangée de repos. C'est la plus grande touche que ce doigt ait à atteindre.",
    pressEnterKey: 'Appuie sur <b>Entrée</b> pour continuer',
    drillEnter: "Une ligne, Entrée, une autre ligne. L'auriculaire sort et revient sans emmener la main.",
    shiftSentences: "Des phrases avec majuscule au début et point à la fin. Ça commence à ressembler à écrire pour de vrai.",
    shiftBurst: "Une série pour fixer ce que fait cette leçon.",
    shiftWords2: "Cinq par ligne, avec l'auriculaire qui travaille dans les deux sens.",
    shiftClose: "Pour finir, des phrases entières. Maj, lettre, relâche — sans s'arrêter pour y penser.",

    /* --- hàng trên: accents + chữ số --- */
    introDigits: "Sur un clavier AZERTY, la rangée du haut donne les accents sans Maj — é è ç à — et les chiffres avec Maj. C'est la seule rangée où les doigts montent au lieu de descendre, et c'est celle où l'on se trompe le plus.",
    drillDigitPair: "{keys} se tapent avec {finger} et le même doigt de l'autre main. Monte, frappe, redescends à la rangée de repos.",
    drillDigitIndex: "Les deux qui restent sont aux index, qui atteignent déjà plus de touches que n'importe quel autre doigt.",
    drillDigitsShifted: "Les mêmes touches avec Maj : c'est là que se trouvent les chiffres sur ce clavier.",
    burstDigits: "Une série courte avec ce que tu viens d'apprendre.",
    burstDigitsAll: "Les dix, mélangés. On rate beaucoup ici au début ; c'est normal.",
    digitsAll: "Toute la rangée, en groupes. Ne baisse pas les yeux pour chercher.",
    digitsBackToWords: "On revient aux mots un instant, pour que les mains se souviennent d'où elles habitent.",
    digitsClose: "Des phrases à nouveau, avec le clavier entier disponible.",

    /* --- đoạn văn --- */
    introProse: "Des textes longs et suivis. Ce qui s'entraîne ici, ce ne sont pas des touches nouvelles, mais tenir le même rythme sur plusieurs lignes.",
    proseLine: "Continue à lire devant ce que tu écris. Si tu t'arrêtes pour regarder, tu perds plus de temps qu'en corrigeant.",
    proseBurst: "Une dernière longue série pour finir.",

    /* --- phím yếu và kiểm tra --- */
    weakText: "Un exercice construit à partir des touches que tu rates le plus. Il change à chaque fois.",
    testText: "Aucune touche nouvelle. Écris à un rythme que tu peux tenir jusqu'au bout.",

    /* --- tiêu đề --- */
    titleFirst: "{keys}, plus la barre d'espace",
    titleKeys: '{keys}',
    titleReview: 'Révision',
    titleReviewMixed: 'Adresses, liens et chiffres',
    titleShift: 'Maj et Entrée',
    titleEdge: 'La colonne de droite',
    titleDigits: 'Les accents et les chiffres',
    titleProse: 'Textes et rythme {n}',
    titleWeak: 'Touches faibles',
    titleTest: "Test de l'unité {unit}",

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'La colonne du bord droit : six touches, toutes à l\'auriculaire, dont l\'accent circonflexe.',
      first: "Les deux touches à repère, la barre d'espace, et l'habitude de ne pas regarder en bas.",
      keys: 'Nouvelles touches : {keys}. Le doigt sort, frappe et revient.',
      review: 'Aucune touche nouvelle. Tout ce qui précède, plus vite et plus longtemps.',
      shift: "Les majuscules avec l'auriculaire opposé, le retour à la ligne, et le point.",
      digits: 'Les accents sans Maj, les chiffres avec Maj — toute la rangée du haut.',
      prose: 'Des paragraphes entiers, pour tenir le rythme au-delà d’une ligne.',
      weak: 'Un exercice construit avec les touches que tu rates le plus.',
      test: 'Un test chronométré avec tout ce qui a été appris.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'L\'auriculaire droit s\'occupe de plus de touches que n\'importe quel autre doigt, et celles du bord sont celles que presque personne ne travaille. L\'une d\'elles compte double ici : l\'accent circonflexe est une touche morte, on la frappe puis on frappe la voyelle, et c\'est comme ça que s\'écrivent être, même, hôtel et goût.',
      first: "Les touches qui portent un petit repère sont le point de départ. Les deux index s'y posent et n'en bougent plus ; tout le reste du cours se mesure depuis cette position. Commence par poser les deux mains et par ne regarder que l'écran.",
      keys: "Nouvelles touches dans cette leçon : {keys}. Elles se tapent avec {fingers}. Le mouvement est toujours le même — sortir, frapper, revenir — et c'est le retour qui s'entraîne, parce qu'un doigt resté dehors fait rater la lettre suivante.",
      review: "Cette leçon n'apprend rien de neuf. C'est le moment de vérifier que ce qui précède sort sans y penser, ce qui n'est pas la même chose que savoir où sont les touches.",
      shift: "Jusqu'ici tout s'est écrit en minuscules. Maj change ça, et il y a une règle à prendre dès le début : c'est l'auriculaire de la main opposée à la lettre qui l'enfonce. Avec l'auriculaire du même côté, la main se tord et tu finis par regarder le clavier. Sur ce clavier, Maj donne aussi le point, qui n'a pas de touche à lui.",
      digits: "La rangée du haut d'un clavier AZERTY porte deux étages : les accents sans Maj, les chiffres avec. Les doigts y montent au lieu de descendre, et c'est la rangée où l'on se trompe le plus dans tout le cours. Elle se répare comme le reste : lentement d'abord.",
      prose: "Tu as maintenant le clavier entier. Ce qui reste n'est plus d'apprendre des touches mais de tenir le rythme : lire devant, ne pas s'arrêter pour regarder, et ne pas accélérer en fin de ligne.",
      weak: "Cet exercice se construit avec les touches que toi tu rates, pas avec une liste fixe. Si tu changes, il change.",
      test: "Un test chronométré. Rien de neuf : seulement ce que tu sais déjà, à un rythme que tu peux tenir."
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Avec le circonflexe, il ne manque plus rien pour écrire du français normal. C\'est la colonne que la plupart des cours laissent de côté.',
      first: "Les mains sont posées. À partir d'ici, tout est une touche qu'on atteint depuis cette position et qu'on relâche.",
      keys: "De nouvelles touches sous les doigts. Si {keys} sortent déjà sans les chercher, la leçon a fait son travail.",
      review: "Rien de neuf et pourtant plus rapide. C'est exactement ce qui devait arriver.",
      shift: "Avec Maj, Entrée et le point, tu peux écrire un texte entier comme il s'écrit en dehors d'ici.",
      digits: "La rangée du haut est la plus difficile et la moins pratiquée ensuite. Reviens à cette leçon de temps en temps.",
      prose: "Des paragraphes entiers à rythme tenu. Ce n'est plus apprendre à taper ; c'est taper.",
      weak: "Les touches faibles cessent de l'être avec une minute par jour, pas avec une heure par mois.",
      test: "Test réussi. Le chiffre compte moins que le fait d'être arrivé au bout sans regarder."
    },

    units: {
      u1: { title: 'La rangée de repos',
        summary: "Huit touches sous les doigts, puis {reach} — de quoi écrire de vrais mots français sans regarder en bas." },
      u2: { title: "Le reste de l'alphabet",
        summary: "Rangée du haut, rangée du bas, ponctuation et majuscules — tout l'alphabet, plus Maj et Entrée." },
      u3: { title: 'Accents, chiffres et vitesse',
        summary: "Les deux étages de la rangée du haut, les signes de tous les jours, puis des paragraphes longs à rythme tenu." }
    },

    groups: {
      start: 'Commence ici',
      reach: 'On étire les doigts',
      finish: "Termine l'unité",
      'numbers-symbols': 'Accents et chiffres',
      speed: 'Vitesse'
    },

    starterHint: "Pose les index sur les deux touches à repère et écris ce que tu vois, sans regarder le clavier."
  }
};
