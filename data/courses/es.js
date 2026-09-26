/* data/courses/es.js — khoá học tiếng Tây Ban Nha: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/es/*.json khi
 * trình duyệt nhận được. Đẩy nó ra runtime là bắt mọi khách tải một bảng chữ chỉ để dựng lại thứ
 * đã có trong file bài học.
 *
 * ĐÂY LÀ TOÀN BỘ PHẦN PHẢI DỊCH cho một ngôn ngữ Tier 2. Thứ tự dạy phím thì suy từ bố cục bàn
 * phím (scripts/build-course.js), kho từ nằm ở data/words/es.js, còn chỗ này là lời dạy —
 * khoảng 60 mẫu câu có chỗ trống. Ngôn ngữ mới = ba file này cộng một bảng UI.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` là chỗ trống generator điền vào. Mẫu nào
 * không có chỗ trống thì là câu cố định — vẫn để ở đây, vì nó vẫn phải dịch.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Nó không hay bằng 27 bài văn viết tay của khoá tiếng Anh và không giả vờ
 * là thế; nhưng nó là lời dạy thật, đúng ngữ pháp, và đúng với những gì người học đang làm.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.es = {
  lang: 'es',
  name: 'Español',

  // Bố cục 175 — QWERTY Tây Ban Nha. Ô Semicolon in ra ñ, nên bài 4 dạy `a` và `ñ`: chữ đặc
  // trưng nhất của tiếng Tây Ban Nha nằm ngay hàng cơ sở, dưới ngón út phải, và người học chạm
  // vào nó ở bài thứ tư. Trên QWERTY Mỹ đúng ô đó là dấu chấm phẩy.
  keyboardId: 175,

  // Kho riêng, cùng lý do như mọi khoá khác: mã bài trùng nhau giữa các ngôn ngữ, dùng chung
  // khoá là hai giáo trình ghi đè lên nhau.
  progressKey: 'typingease-progress-es-v1',
  badgesKey: 'typingease-badges-es-v1',

  // Chữ cái nào được coi là "phím chữ" khi dựng bài luyện ngón. Có ñ, KHÔNG có ´: ´ là phím
  // chết, gõ một mình nó không hiện ra gì cả, nên một dòng luyện ngón chứa ´ trần là một dòng
  // người học không gõ nổi.
  letterTest: "^[a-zñ;',.\\/-]$",
  /*
   * CÁC HỌ KHÁC CỦA TIẾNG TÂY BAN NHA. Mỗi họ là một khoá riêng (data/languages.js → `courses`),
   * sinh bằng `--course es-<họ>`. Ở đây chỉ có phần KHÁC khoá 175; mọi thứ khác dùng bản ở dưới.
   * Bốn bố cục "Spanish" trong danh mục KHÔNG cùng một chuỗi phím — build-course.js giải lại kế
   * hoạch trên từng bố cục và đã tách chúng ra thành ba họ.
   */
  families: {
    // Latin America (174): ô Quote in ra `{`, dấu sắc chết nằm ở ô BracketLeft. Nên tildes KHÔNG
    // tới ở bài dấu câu như trên bố cục Tây Ban Nha, mà ở bài cột ngoài của unit 3.
    latinoamerica: {
      teaching: {
        introEdge: 'Las teclas del borde derecho, todas del meñique. En este teclado, una de ellas es la tilde: una tecla muerta que sirve para escribir á é í ó ú.',
        edgeBackToWords: 'De vuelta a las palabras, con el teclado entero disponible — tildes incluidas.',
        summary: { edge: 'La columna del borde derecho: seis teclas, todas del meñique, entre ellas la tilde.' },
        intro: {
          edge: 'El meñique derecho lleva más teclas que ningún otro dedo, y las del borde son las que casi nadie practica. En este teclado, una de ellas vale doble: la tilde es una tecla muerta. Se pulsa ella y después la vocal, y así se escriben más, está, también y canción.'
        },
        congrats: { edge: 'Con la tilde ya casi no falta nada para escribir español de verdad. Esa columna es la que se queda a medias en casi todos los cursos.' },
        units: {
          u2: { title: 'El resto del alfabeto',
            summary: 'Fila superior, fila inferior, signos de puntuación y mayúsculas — el alfabeto entero, más Shift y Enter. Las tildes llegan en la unidad siguiente, porque este teclado las pone en el borde derecho.' }
        }
      }
    },

    // Latin America, no dead keys (177): chữ cái y hệt bố cục 175, chỉ khác một ô ở cột ngoài
    // (`¿` thay cho `¡`). Không câu dạy nào nói tới ô đó, nên không cần lớp phủ nào.
    'sin-teclas-muertas': {}
  },

  teaching: {
    and: ' y ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'la coma', '.': 'el punto', ';': 'el punto y coma', ':': 'los dos puntos', "'": 'el apóstrofo', '-': 'el guion' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Todas las demás teclas',
      unitSummary: 'Los {count} caracteres de este teclado que el curso aún no ha usado, cada uno escrito donde de verdad se usa.',
      groupSymbols: 'Las teclas que faltan',
      groupFinish: 'Cierra la unidad',
      titleNumberRow: 'Los signos de la fila de números',
      titleKeys: '{keys}',
      titleReview: 'Todos los signos juntos',
      summaryKeys: 'En esta lección: {keys}.',
      summaryReview: 'Todos los signos de la unidad, mezclados con palabras y números.',
      summaryTest: 'Una prueba cronometrada con todas las teclas del teclado.',
      introLesson: 'Teclas que el curso todavía no ha usado: {keys}. {shiftNote}',
      shiftNote: 'Todas salen con Shift y una tecla que tus dedos ya conocen — Shift con el meñique de la otra mano.',
      shiftNoteMixed: 'Algunas necesitan Shift, con el meñique de la otra mano; las demás tienen su propia tecla, que el curso aún no había usado.',
      introKey: 'Es {finger} el que pulsa {key}{shift}.',
      introKeyShift: ', con Shift en la otra mano',
      drillOne: 'Primero {key}, sin nada alrededor, y después donde de verdad se usa.',
      burst: 'Una ráfaga de trozos cortos con estos caracteres.',
      together: 'Todo lo de esta lección, mezclado.',
      inWords: 'Otra vez palabras, con los signos en su sitio.',
      introReview: 'Ninguna tecla nueva. Todos los caracteres de la unidad, mezclados con palabras y números.',
      reviewFirst: 'Los signos, al mismo ritmo que las letras que los rodean.',
      reviewLine: 'Mantén el ritmo también en los signos; son teclas como las demás.',
      congratsKeys: '{keys}: ya bajo tus dedos. El signo sale tan fácil como la letra de al lado.',
      congratsReview: 'Todas las teclas de este teclado han tenido su turno.',
      introTest: 'Una prueba cronometrada con todo, signos incluidos.',
      congratsTest: 'Eso era el teclado entero. No queda en él ninguna tecla que este curso no te haya enseñado.',
      testText: 'Palabras, números y signos. Un mismo ritmo de principio a fin.'
    },

    fingers: {
      LP: 'el meñique izquierdo', LR: 'el anular izquierdo', LM: 'el corazón izquierdo',
      LI: 'el índice izquierdo', LT: 'el pulgar izquierdo', RT: 'el pulgar derecho',
      RI: 'el índice derecho', RM: 'el corazón derecho', RR: 'el anular derecho',
      RP: 'el meñique derecho'
    },

    /* --- cot ngoai cua ngon ut phai --- */
    introEdge: 'Las teclas del borde derecho, todas del meñique. Son los estiramientos más largos que hace ese dedo, y las que menos se practican después.',
    drillEdgePair: 'Ahora {keys}. El meñique sale hacia fuera y vuelve; la mano no se va con él.',
    burstEdge: 'Una ráfaga con lo que llevas de esta columna.',
    drillEdgeAll: 'Las seis juntas. Es la parte del teclado donde más se tuerce la muñeca si el dedo no vuelve.',
    burstEdgeWords: 'Palabras otra vez, para soltar la mano después de tanto borde.',
    edgeBackToWords: 'De vuelta a las palabras, con el teclado entero disponible.',
    edgeClose: 'Frases completas para cerrar la unidad de teclas.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Esta tecla la lleva {finger}. Búscala sin mirar, pulsa una vez y deja que el dedo vuelva a su sitio. La vuelta importa tanto como la pulsación.',
    pressToContinue: 'Pulsa <b>{key}</b> para continuar',
    introSpace: 'La barra espaciadora es del pulgar derecho. Los pulgares no hacen nada más, y por eso nunca hay que buscarla.',
    pressSpace: 'Pulsa la <b>barra espaciadora</b> para continuar',

    /* --- luyện ngón --- */
    drillSpace: 'Grupos cortos separados por espacios. El pulgar derecho baja y sube; los demás dedos no se mueven de su sitio.',
    drillNew: 'Solo {key} y lo que ya sabes. Despacio, y que el dedo regrese a la fila de reposo después de cada pulsación.',
    drillMixed: 'Las teclas nuevas mezcladas con las anteriores, que es como aparecerán en las palabras.',
    drillAgain: 'Otra vez las dos teclas nuevas. Todavía no hay palabras que escribir con ellas, y eso es normal.',
    drillWide: 'Todo lo que llevas, en grupos cortos. Mira la pantalla, no las manos.',
    drillAll: 'Una última tanda con todo lo aprendido hasta aquí.',
    patternsBack: 'Volvemos a los patrones un momento, para comprobar que los dedos siguen regresando a su sitio.',

    /* --- ráfaga --- */
    burstKeys: 'Grupos cortos, uno detrás de otro. Cuenta hasta el final aunque falles alguno.',
    burstLonger: 'Grupos algo más largos. La prisa no ayuda todavía.',
    burstWords: 'Una ráfaga de palabras cortas con las teclas nuevas dentro.',

    /* --- palabras --- */
    wordsNew: 'Palabras de verdad con las teclas nuevas. Escribe la palabra entera de un tirón, no letra por letra.',
    wordsOne: 'Ahora con el peso en <b>{key}</b>, que es la que menos veces has pulsado.',
    wordsAll: 'Todo lo que tienes, mezclado. Fíjate en cuántas palabras ya te salen sin pensarlas.',

    /* --- repaso --- */
    introReview: 'Ninguna tecla nueva en esta lección. Solo las que ya conoces, más seguidas y más rápido de lo que las has escrito hasta ahora.',
    introReviewMixed: 'Letras, números y signos juntos, que es como aparecen fuera de un curso.',
    pressEnter: 'Pulsa <b>Enter</b> para empezar',
    reviewWords1: 'Para empezar, palabras sueltas. Sin prisa: la velocidad sale de la precisión, nunca al revés.',
    reviewBurst: 'Una ráfaga corta. Termina la lista aunque se te escape alguna.',
    reviewWords2: 'Cinco palabras por línea. Deja que los ojos vayan por delante de los dedos.',
    reviewPatterns: 'Patrones otra vez, para comprobar que los dedos siguen volviendo a la fila de reposo.',
    reviewShort: 'Palabras cortas, a buen ritmo. Estas deberían salir ya casi solas.',
    reviewBurst2: 'Más tiempo y más palabras. Mantén el mismo ritmo de principio a fin.',
    reviewClose: 'Frases completas. Aquí es donde se nota si la mano vuelve sola a su sitio.',
    reviewLast: 'La última tanda. Si has llegado hasta aquí sin mirar el teclado, la lección está hecha.',

    /* --- Shift y Enter --- */
    introShift: 'Las mayúsculas se hacen con el meñique de la mano contraria a la letra. Mantén Shift, pulsa la letra, suelta. Nunca con el mismo meñique que escribe.',
    pressShift: 'Mantén <b>Shift</b> y pulsa una letra para continuar',
    drillShift: 'Mayúsculas y minúsculas alternando. El meñique baja y sube; la otra mano no se mueve de sitio.',
    wordsShift: 'Palabras con mayúscula al principio, como los nombres propios.',
    introEnter: 'Enter es del meñique derecho, a la derecha de la fila de reposo. Es la tecla más grande que ese dedo tiene que alcanzar.',
    pressEnterKey: 'Pulsa <b>Enter</b> para continuar',
    drillEnter: 'Una línea, Enter, otra línea. El meñique sale y vuelve sin arrastrar la mano.',
    shiftSentences: 'Frases con mayúscula inicial y punto final. Ya se parece a escribir de verdad.',
    shiftBurst: 'Una ráfaga para asentar lo de esta lección.',
    shiftWords2: 'Cinco por línea, con el meñique trabajando en las dos direcciones.',
    shiftClose: 'Para cerrar, frases enteras. Shift, letra, suelta — sin pararse a pensarlo.',

    /* --- hàng số --- */
    introDigits: 'La fila de números está por encima de la fila superior. Cada dedo sube en línea recta y baja igual. Son los estiramientos más largos del curso.',
    drillDigitPair: '{keys} se pulsan con {finger} y el mismo dedo de la otra mano. Sube, pulsa, baja a la fila de reposo.',
    drillDigitIndex: 'Los dos que quedan son de los índices, que ya alcanzan más teclas que ningún otro dedo.',
    burstDigits: 'Una ráfaga corta con los números que llevas.',
    burstDigitsAll: 'Los diez, mezclados. Al principio se falla mucho aquí; es normal.',
    digitsAll: 'Toda la fila, en grupos. No bajes la vista para buscar el 6.',
    digitsBackToWords: 'Volvemos a las palabras un momento, para que las manos recuerden dónde viven.',
    digitsClose: 'Frases otra vez, ya con todo el teclado disponible.',

    /* --- đoạn văn --- */
    introProse: 'Textos largos y seguidos. Lo que se entrena aquí no son teclas nuevas, sino aguantar el mismo ritmo durante varias líneas.',
    proseLine: 'Sigue leyendo por delante de lo que escribes. Si te paras a mirar, pierdes más tiempo que corrigiendo.',
    proseBurst: 'Una última ráfaga larga para terminar.',

    /* --- phím yếu và kiểm tra --- */
    weakText: 'Un ejercicio hecho a partir de las teclas que más fallas. Cambia cada vez que practicas.',
    testText: 'Sin teclas nuevas. Escribe a un ritmo que puedas sostener hasta el final.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, más la barra espaciadora',
    titleKeys: '{keys}',
    titleReview: 'Repaso',
    titleReviewMixed: 'Direcciones, enlaces y números',
    titleShift: 'Shift y Enter',
    titleEdge: 'La columna exterior',
    titleDigits: 'La fila de números',
    titleProse: 'Textos y ritmo {n}',
    titleWeak: 'Teclas flojas',
    titleTest: 'Prueba de la unidad {unit}',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'La columna del borde derecho: seis teclas, todas del meñique.',
      first: 'Las dos teclas con relieve, la barra espaciadora, y la costumbre de no mirar hacia abajo.',
      keys: 'Teclas nuevas: {keys}. El dedo sale, pulsa y vuelve.',
      review: 'Ninguna tecla nueva. Todo lo anterior, más seguido y más rápido.',
      shift: 'Mayúsculas con el meñique contrario, y el salto de línea.',
      digits: 'Los diez números, cada dedo subiendo en línea recta.',
      prose: 'Párrafos enteros, para sostener el ritmo más de una línea.',
      weak: 'Un ejercicio generado con las teclas que más fallas.',
      test: 'Una prueba cronometrada con todo lo aprendido.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'El meñique derecho lleva más teclas que ningún otro dedo, y las del borde son las que casi nadie practica. Se salen de la fila de reposo más que cualquier otra, así que el truco es el de siempre: sale, pulsa y vuelve, sin arrastrar la mano detrás.',
      first: 'Las teclas con un pequeño relieve son el punto de partida. Los dos índices se apoyan ahí y no se van; todo lo demás del curso se mide desde esa posición. Empieza colocando las dos manos y mirando solo a la pantalla.',
      keys: 'Teclas nuevas en esta lección: {keys}. Se pulsan con {fingers}. El movimiento es siempre el mismo — salir, pulsar y volver — y la vuelta es la parte que se entrena, porque si el dedo se queda fuera, la siguiente letra sale mal.',
      review: 'Esta lección no enseña nada nuevo. Es el momento de comprobar que lo anterior sale sin pensarlo, que es distinto de saber dónde está cada tecla.',
      shift: 'Hasta aquí todo se ha escrito en minúsculas. Shift lo cambia, y tiene una regla que conviene aprender bien desde el principio: lo pulsa el meñique de la mano contraria a la letra. Con el meñique del mismo lado, la mano se tuerce y acabas mirando el teclado.',
      digits: 'La fila de números queda por encima de todo lo que has escrito hasta ahora, y es donde los dedos llegan más lejos. Se falla más aquí que en ninguna otra parte del curso, y se arregla igual que el resto: despacio primero.',
      prose: 'Ya tienes el teclado entero. Lo que queda no es aprender teclas sino sostener el ritmo: leer por delante, no pararse a mirar y no acelerar al final de la línea.',
      weak: 'Este ejercicio se construye con las teclas que tú fallas, no con una lista fija. Si cambias, cambia él.',
      test: 'Una prueba cronometrada. No hay nada nuevo: solo lo que ya sabes, a un ritmo que puedas mantener.'
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Esa columna es la que se queda a medias en casi todos los cursos. Ya no en el tuyo.',
      first: 'Ya tienes las manos colocadas. A partir de aquí todo son teclas que se alcanzan desde esta posición y se vuelven a soltar.',
      keys: 'Más teclas bajo los dedos. Si {keys} ya te salen sin buscarlas, la lección ha hecho su trabajo.',
      review: 'Nada nuevo y aun así más rápido. Eso es exactamente lo que debía pasar.',
      shift: 'Con Shift y Enter puedes escribir un texto entero tal y como se escribe fuera de aquí.',
      digits: 'La fila de números es la que más cuesta y la que menos se practica después. Vuelve a esta lección de vez en cuando.',
      prose: 'Párrafos enteros a ritmo sostenido. Eso ya no es aprender a teclear; es teclear.',
      weak: 'Las teclas flojas dejan de serlo con un minuto al día, no con una hora al mes.',
      test: 'Prueba superada. El número importa menos que el hecho de haber llegado al final sin mirar.'
    },

    units: {
      u1: { title: 'La fila de reposo',
        summary: 'Ocho teclas bajo los dedos, después {reach} — suficiente para escribir palabras de verdad sin mirar hacia abajo.' },
      u2: { title: 'El resto del alfabeto',
        summary: 'Fila superior, fila inferior, signos de puntuación, tildes y mayúsculas — el alfabeto entero, más Shift y Enter.' },
      u3: { title: 'Números, signos y velocidad',
        summary: 'La fila de números, los signos de cada día, direcciones y enlaces reales, y después párrafos largos a ritmo sostenido.' }
    },

    groups: {
      start: 'Empieza aquí',
      reach: 'Estirando los dedos',
      finish: 'Cierra la unidad',
      'numbers-symbols': 'Números y signos',
      speed: 'Velocidad'
    },

    starterHint: 'Apoya los índices en las dos teclas con relieve y escribe lo que veas, sin mirar el teclado.'
  }
};
