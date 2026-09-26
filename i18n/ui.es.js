/* i18n/ui.es.js — lớp tiếng Tây Ban Nha.
 *
 * Nạp bởi mọi trang dưới /es/, bằng <script src="/i18n/ui.es.js"></script> đặt TRƯỚC mọi script
 * khác trên trang. Trang tiếng Việt không nạp gì cả: mỗi module dùng chung giữ bảng tiếng Việt
 * của nó làm mặc định sẵn có rồi trải object này lên trên, nên khách tiếng Việt không tải thêm
 * một byte nào và không chạy thêm một nhánh nào.
 *
 * Khoá thiếu ở đây thì hiện tiếng Việt. Đó là chủ ý — sai trông thấy vẫn hơn ô trống, và nếu cả
 * file này hỏng thì player tiếng Tây Ban Nha vẫn chạy chứ không trắng màn hình. Cũng có nghĩa là
 * tên khoá bên dưới phải khớp CHÍNH XÁC với bảng nó ghi đè; khoá bịa ra thì bị bỏ qua lặng lẽ.
 *
 * THỨ TỰ. keyboard/preferences.js là ES module và đọc `globalThis.TypingEaseUI`. Script thường
 * luôn chạy trước module có defer, nên một thẻ <script src> trơn cho file này là an toàn — nhưng
 * đừng thêm `defer`, nó sẽ đảo đúng thứ tự đó.
 */
window.TypingEaseUI = {
  lang: 'es',

  /* Tuyệt đối, vì /es/aprender/ nằm sâu hai cấp và một liên kết tương đối viết cho /hoc/ sẽ
     giải ra /es/luyen-phim-yeu/ — đúng độ sâu, sai tên, 404 lặng lẽ. */
  routes: {
    home: '/es/',
    lessons: '/es/lecciones/',
    learn: '/es/aprender/',
    // Chưa có ba trang này bằng tiếng Tây Ban Nha. `null` là tín hiệu BỎ liên kết, không phải
    // trỏ sang bản tiếng Anh hay tiếng Việt — xem cách `R.weak` bị chặn trong player.js.
    test: '/es/test-de-mecanografia/',
    progress: '/es/progreso/',
    free: null,
    weak: null,
    guide: null
  },

  /* script.js — bảng `homeUi` của trang chủ /es/ */
  home: {
    nav: ['Practicar', 'Curso'],
    roadmapKicker: '{total} lecciones · {units} unidades',
    roadmapAll: 'Ver las {total} lecciones →',
    unitTitle: 'Unidad {index} · {title}',
    unitDone: '{done}/{total} lecciones ✓',
    railDone: '✓',
    railSoon: 'Pronto',
    railNote: 'Las unidades siguientes se están escribiendo — las lecciones que aún no están abiertas salen en gris.',
    teaser: 'Unidad {index} · {title} ({count} lecciones)',
    teaserLocked: '🔒',
    shortcutsTitle: 'Más práctica',
    shortcuts: [
      ['Prueba de velocidad', 'Mide tus pulsaciones por minuto y tu precisión.'],
      ['Teclas flojas', 'Ejercicios hechos con las teclas que más fallas.'],
      ['Práctica libre', 'Pega tu propio texto y escríbelo a tu manera.']
    ],
    continueKicker: 'CONTINUAR',
    continueName: 'Lección {n} · {title}',
    continueCount: 'Unidad {unit} · pantalla {screen}/{screens}',
    continueGo: '▶ Continuar (Enter)',
    continueRedo: '↻ Repetir la lección {n}',
    continueMap: 'Ver el curso',
    streak: '🔥 {days} días · {minutes} min hoy',
    coachWeak: 'Atención: <b>{keys}</b> te están frenando — ¿un minuto con ellas?',
    legacy: 'Terminaste {n} lecciones del curso anterior — las unidades 1 y 2 ya están abiertas.',
    doneKicker: 'MANTÉN EL RITMO',
    doneName: 'Has terminado todo lo que está escrito',
    doneCount: 'La siguiente unidad está en camino. Repasa una lección para no perder el ritmo.',
    doneGo: '▶ Ver el curso (Enter)',
    exploreKicker: 'Recursos de TypingEase',
    footer: 'Ve un poco más despacio y llegarás mucho más lejos.',
    contentVi: ''
  },

  /* script.js — bảng `localizedUi`. Trang chủ /es/ chưa có khối explore nào, nên chỉ hai khoá
     mà `applyCopy()` thật sự đọc. */
  localized: {
    exploreTitle: 'Descubre TypingEase',
    explore: []
  },

  /* player.js — bảng `T`. Không có khoá Telex: khoá tiếng Tây Ban Nha không bao giờ đặt
     inputMode "telex", nên nhánh mã đó không tới được. */
  player: {
    loading: 'Cargando la lección…',
    missingTitle: 'Esta lección todavía no tiene contenido',
    missingBody: 'No se ha cargado nada desde <code>{path}</code>. La lección aún se está escribiendo — inténtalo más tarde o elige otra en el curso.',
    noCurriculum: 'No se ha cargado el índice del curso (<code>data/curriculum.es.js</code>).',
    fixtureNote: 'Funcionando con el contenido de ejemplo de <code>hoc/_fixture/</code> — la lección real aún no está en <code>data/lessons/</code>.',
    screenOf: 'Pantalla {n} / {total}',
    newKey: 'TECLA NUEVA',
    pressToContinue: 'Pulsa <b>{key}</b> para continuar',
    enterToContinue: 'Pulsa <b>Enter</b> para continuar',
    found: 'Esa es.',
    foundBody: 'Recuerda dónde está <b>{key}</b> — vamos a practicarla ahora.',
    accuracyLive: '{accuracy}% de precisión',
    errorsLive: '{count} errores',
    tokensLive: '{count} palabras',
    great: 'Excelente.',
    good: 'Muy bien.',
    pass: 'Aprobado.',
    fail: 'Por debajo del {min}% — merece la pena repetir esta pantalla.',
    resultAccuracy: '{accuracy}% de precisión',
    resultWpm: '{wpm} PPM',
    resultErrors: '{count} errores',
    resultTokens: '{count} palabras correctas',
    slowKey: '<b>{key}</b> ha sido tu tecla más lenta ({ms} s cada una) — deja que el dedo la alcance y vuelva enseguida a la fila de reposo.',
    keepAccuracy: 'Baja el ritmo y la precisión sube — la velocidad viene detrás, nunca al revés.',
    continueEnter: 'Continuar → (Enter)',
    redoScreen: 'Repetir esta pantalla',
    redoScreenAdvised: 'Repetir esta pantalla (recomendado)',
    skipScreen: 'Saltar',
    lessonDone: 'COMPLETADA',
    learned: 'Ya conoces {count} teclas:',
    statWpm: 'Velocidad',
    statAccuracy: 'Precisión',
    statTime: 'Tiempo',
    statStars: 'Estrellas',
    technique: 'Vale la pena recordarlo',
    weakTitle: 'Teclas que conviene practicar más',
    weakButton: 'Practicar un minuto',
    unitProgress: '{unit} · {done}/{total} lecciones',
    nextLesson: '▶ {title} (Enter)',
    finishAll: '▶ Volver a la página principal (Enter)',
    redoLesson: '↻ Empezar la lección otra vez',
    home: 'Página principal',
    noMoreTitle: 'Has llegado al final de lo que está escrito',
    noMoreBody: 'La siguiente unidad todavía se está haciendo. Mientras tanto, repasa una lección — una segunda vuelta a buen ritmo vale más de lo que parece.',
    notReadyTitle: 'Esta lección todavía no tiene contenido',
    notReadyBody: '<b>{title}</b> está en el curso, pero su contenido aún se está escribiendo. Elige una lección que ya esté abierta.',
    weakPage: 'Práctica de teclas flojas',
    badgeNew: 'Nueva insignia',
    badgeAll: 'Ver todas las insignias →',
    shiftFinger: 'el meñique de la otra mano',
    testPage: 'Prueba de velocidad',
    mobileNote: 'Este curso está hecho para un teclado de ordenador — diez dedos necesitan diez teclas de verdad. Puedes probarlo en el móvil, pero vuelve a un teclado para aprender de verdad.',
    mobileNoteClose: 'Entendido',
    tapToType: 'Toca para escribir',
    menuTitle: 'En pausa',
    menuResume: 'Seguir escribiendo',
    menuRedo: 'Repetir esta pantalla',
    menuSkip: 'Saltar esta pantalla',
    menuExit: 'Volver a la página principal',
    clock: '{seconds} s',
    lessonNumber: 'Lección {number}',
    pageTitle: 'Lección · TypingEase',
    screenTip: 'Pantalla {number} · {type}',
    firstLesson: 'Volver a la primera lección'
  },

  /* player.js — FINGER_NAMES, theo mã mà dữ liệu bài học dùng */
  fingers: {
    LP: 'el meñique izquierdo', LR: 'el anular izquierdo', LM: 'el corazón izquierdo',
    LI: 'el índice izquierdo', LT: 'el pulgar izquierdo',
    RT: 'el pulgar derecho', RI: 'el índice derecho', RM: 'el corazón derecho',
    RR: 'el anular derecho', RP: 'el meñique derecho'
  },

  /* keyboard/boot.js — cùng những ngón đó, nhưng theo tên mà BÀN PHÍM dùng. Hai bảng, vì dữ
     liệu bài học và widget bàn phím gọi tên ngón khác nhau. */
  keyboardFingers: {
    'left-pinky': 'el meñique izquierdo', 'left-ring': 'el anular izquierdo',
    'left-middle': 'el corazón izquierdo', 'left-index': 'el índice izquierdo',
    'left-thumb': 'el pulgar izquierdo', thumb: 'el pulgar',
    'right-index': 'el índice derecho', 'right-middle': 'el corazón derecho',
    'right-ring': 'el anular derecho', 'right-pinky': 'el meñique derecho'
  },

  /* keyboard/preferences.js — hộp thoại cài đặt và liên kết mở nó */
  keyboard: {
    title: 'Ajustes del teclado',
    showKeyboard: 'Mostrar el teclado',
    showHands: 'Mostrar las manos',
    rightHandOnly: 'Solo la mano derecha',
    leftHandOnly: 'Solo la mano izquierda',
    animatedHands: 'Las manos siguen a las teclas',
    letterCase: 'Letras de las teclas',
    uppercase: 'MAYÚSCULAS',
    lowercase: 'minúsculas',
    boardAria: 'Teclado en pantalla', keypadAria: 'Teclado numérico en pantalla',
    keyboardShape: 'Tipo de teclado', shapeAuto: 'Según la distribución', shapeAnsi: '104 teclas (Mayús izquierda larga)', shapeIso: '105 teclas (tecla junto a Mayús izquierda)',
    layout: 'Distribución del teclado',
    save: 'Guardar',
    cancel: 'Cancelar',
    close: 'Cerrar'
  },

  /* bai-hoc/curriculum-page.js — chỉ những chữ mà script GHI lúc chạy */
  curriculum: {
    done: (a, b) => `${a}/${b} lecciones hechas`,
    legacy: n => `Terminaste ${n} lecciones del curso anterior — las unidades 1 y 2 ya están abiertas.`,
    ctaResume: '▶ Continuar', ctaStart: '▶ Empezar',
    ctaLesson: (verb, number, title) => `${verb} la lección ${number} · ${title} <span>→</span>`,
    ctaAllDone: 'Has llegado al final de lo que está escrito <span>→</span>',
    rowResume: (screen, total) => `▶ Continuar · pantalla ${screen}/${total}`,
    rowStart: '▶ Empezar',
    rowDone: '✓ Hecha',
    unlocked: 'Abierta',
    unlockAfter: n => `Se abre después de la lección ${n}`,
    unlockNow: 'Abrir esta unidad ahora'
  },

  /* kiem-tra-toc-do-go/typing-test.js — chữ JS của trang test (/es/test-de-mecanografia/) + các đoạn văn để gõ */
  test: {
    wpmUnit: 'PPM',
    passage: 'Aprender a escribir sin mirar el teclado lleva su tiempo, pero cada sesión cuenta. Coloca los dedos en la fila central, con los índices sobre la F y la J, y deja que cada uno se ocupe de sus teclas. Al principio irás despacio y te equivocarás a menudo; es normal. Lo importante es no perder la calma, corregir el error y seguir. Poco a poco, los movimientos se vuelven automáticos y la velocidad llega sola.',
    passages: [
      'Aprender a escribir sin mirar el teclado lleva su tiempo, pero cada sesión cuenta. Coloca los dedos en la fila central, con los índices sobre la F y la J, y deja que cada uno se ocupe de sus teclas. Al principio irás despacio y te equivocarás a menudo; es normal. Lo importante es no perder la calma, corregir el error y seguir. Poco a poco, los movimientos se vuelven automáticos y la velocidad llega sola.',
      'El lunes amaneció nublado y con un viento frío que venía del norte. A media mañana empezó a llover con fuerza, y la gente se refugiaba en los portales mientras esperaba a que pasara el chaparrón. Por la tarde, sin embargo, el cielo se abrió de repente y salió un sol tímido. Los niños volvieron a la plaza, los bares sacaron las mesas a la terraza y el suelo mojado brilló durante un buen rato.',
      'Los sábados por la mañana el mercado del barrio se llena de vida. En los puestos hay tomates, pimientos, naranjas y manzanas de todos los colores. La frutera saluda a cada cliente por su nombre y siempre añade una mandarina de regalo. ¿Cuánto cuestan las fresas hoy? Un poco más que la semana pasada, pero están dulces y huelen de maravilla. Al salir, uno lleva la bolsa llena y la sensación de haber hecho algo bien.',
      'El tren salió de la estación a las ocho y cuarto, con cinco minutos de retraso. Desde la ventanilla se veían campos de trigo, pueblos pequeños con una cigüeña en lo alto del campanario y algún río que brillaba entre los árboles. En el vagón, una pareja jugaba a las cartas, un estudiante repasaba sus apuntes y una señora mayor dormía con el bolso sobre las rodillas. El viaje duraba tres horas, y nadie parecía tener prisa.',
      'Para preparar una buena tortilla de patatas no hace falta mucho: patatas, huevos, aceite de oliva, sal y, si te gusta, un poco de cebolla. Pela las patatas, córtalas en láminas finas y fríelas a fuego lento hasta que estén tiernas. Después, escúrrelas y mézclalas con los huevos batidos. Cuaja la mezcla en la sartén, dale la vuelta con ayuda de un plato y déjala un minuto más. ¡Ya está lista para comer!',
      'La biblioteca municipal abre de nueve a nueve, y en época de exámenes no queda ni una silla libre. Se oye el roce de las páginas, algún bolígrafo que cae al suelo y el tecleo suave de los portátiles. La bibliotecaria pasea entre las mesas y recuerda, en voz baja, que está prohibido comer. A las siete, muchos salen a estirar las piernas, compran un café en la esquina y vuelven con energía para una última hora de estudio.',
      'La precisión es más importante que la rapidez. Si escribes deprisa pero cometes muchos errores, pierdes más tiempo corrigiendo del que ganas. En cambio, cuando cada dedo sabe exactamente adónde ir, la velocidad aumenta sin esfuerzo. Por eso conviene practicar despacio, fijarse en las tildes y en la eñe, y no mirar el teclado aunque cueste. Dentro de unas semanas notarás la diferencia, y te sorprenderá lo lejos que has llegado.',
      'Los domingos salimos temprano a pasear por el parque que hay junto al río. A esa hora el aire es fresco, los corredores pasan en silencio y los perros se saludan con curiosidad. Nos sentamos en un banco a la sombra de un pino, compartimos un bocadillo y miramos cómo los patos se acercan a la orilla. Cuando el sol empieza a calentar, volvemos a casa despacio, cansados y contentos, sin mirar el reloj ni una sola vez.',
      'Mi vecina del tercero se ha mudado a otra ciudad por trabajo. Antes de irse, llamó a todas las puertas para despedirse y dejó una nota en el portal: "Gracias por estos años, os echaré de menos". Ahora su piso está vacío y el edificio parece más silencioso. Esta mañana me ha escrito un mensaje: dice que el nuevo barrio es tranquilo, que ya ha encontrado una panadería buena y que vendrá a visitarnos en verano.'
    ],
    title: 'Test de mecanografía de {seconds} segundos',
    titleMinutes: 'Test de mecanografía de {minutes} min',
    ready: 'Empieza cuando quieras.',
    running: 'Calculando tu resultado en tiempo real.',
    finished: 'Se acabaron los {seconds} segundos. Resultado: {wpm} PPM, {accuracy}% de precisión, {errors} errores.',
    finishedMinutes: 'Se acabaron los {minutes} min. Resultado: {wpm} PPM, {accuracy}% de precisión, {errors} errores.',
    comparisonSame: 'Igual que tu resultado anterior.',
    comparisonDelta: '{delta} PPM respecto a tu resultado anterior',
    progressEmpty: 'Todavía no hay datos suficientes. Haz unos cuantos tests para ver tu progreso.',
    progressNone: 'Aún no hay datos de progreso.',
    metricEmpty: 'No hay datos para este indicador.',
    chartEmpty: 'No hay datos adecuados para dibujar este gráfico.',
    chartLabel: '{metric} a lo largo del tiempo',
    trendEmpty: 'No hay datos suficientes para calcular una tendencia.',
    trendSame: 'Sin cambios desde el inicio de este periodo.',
    trendDelta: '{change} {measure} desde el inicio de este periodo.',
    measureAccuracy: 'puntos de precisión',
    accuracyName: 'Precisión',
    progressSummary: '{count} tests en los últimos {days} días. PPM medias: {wpm}; precisión media: {accuracy}%.',
    dateLocale: 'es-ES'
  },

  /* tien-do/progress-page.js — chữ mà trang tiến độ ghi lúc chạy (xem khối `progress` của ui.en.js) */
  progress: {
    levels: ['Empezando', 'En camino', 'Constante', 'Rápido', 'Fluido'],
    legacy: n => `Terminaste ${n} lecciones del curso anterior — las unidades 1 y 2 ya están abiertas.`,
    unit: index => `Unidad ${index}`,
    soon: ' · pronto',
    trendHint: n => (n === 1 ? 'Una lección más y habrá datos suficientes para dibujar una tendencia.'
      : `${n} lecciones más y habrá datos suficientes para dibujar una tendencia.`),
    stripLevel: level => `Nivel: ${level}`,
    statWpm: 'PPM recientes',
    statAccuracy: 'Precisión',
    statSessions: 'Sesiones',
    target: (wpm, accuracy) => `Siguiente meta: <b>${wpm}</b> PPM · <b>${accuracy}</b>% de precisión`,
    adviceStart: 'Haz una lección y esta página sabrá dónde estás.',
    actionStart: 'Empezar la lección 1 →',
    adviceWeak: keys => `${keys} te están frenando — un minuto solo con ellas vale mucho.`,
    actionWeak: keys => `Practicar ${keys} →`,
    adviceSteady: 'Vas avanzando — una lección al día mantiene el ritmo.',
    actionLesson: (number, title) => `Lección ${number} · ${title} →`,
    actionTest: 'Prueba de velocidad →',
    actionLessons: 'Ver el curso →',
    heatLegend: 'Precisión por tecla',
    heatStrong: 'Segura',
    heatFair: 'Irregular',
    heatWeak: 'Hay que trabajarla',
    badgeDate: at => new Date(at).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
    badgeEarned: date => (date ? `Conseguida el ${date}` : 'Conseguida'),
    number: value => value.toLocaleString('es-ES'),
    dailyGoal: (minutes, goal) => `${minutes} / ${goal} minutos`,
    streak: days => `🔥 ${days} ${days === 1 ? 'día seguido' : 'días seguidos'}`,
    bestStreak: days => `Récord: ${days} ${days === 1 ? 'día' : 'días'}`,
    today: minutes => `${minutes} ${minutes === 1 ? 'minuto' : 'minutos'} hoy`,
    clearConfirm: '¿Borrar todo el progreso y las puntuaciones guardadas en este dispositivo?'
  },

  /* badges.js — chỉ tiêu đề và gợi ý; luật vẫn nằm trong mã. Không có `telex`: giáo trình
     tiếng Tây Ban Nha khai `features: []` nên badges.js bỏ hẳn huy hiệu đó. */
  badges: {
    'first-step': { title: 'Primer paso', hint: 'Termina tu primera lección.' },
    'unit-1': { title: 'Una unidad hecha', hint: 'Termina una unidad entera.' },
    'stars-30': { title: '30 estrellas', hint: 'Reúne 30 estrellas en el curso.' },
    'stars-90': { title: '90 estrellas', hint: 'Reúne 90 estrellas en el curso.' },
    'streak-3': { title: 'Tres días seguidos', hint: 'Cumple tu objetivo diario tres días seguidos.' },
    'streak-7': { title: 'Una semana entera', hint: 'Cumple tu objetivo diario siete días seguidos.' },
    'clean-40': { title: '40 PPM limpias', hint: 'Una vuelta a 40 PPM con un 95% de precisión o más.' },
    'clean-60': { title: '60 PPM limpias', hint: 'Una vuelta a 60 PPM con un 95% de precisión o más.' },
    'typed-5000': { title: '5.000 teclas', hint: 'Escribe cinco mil pulsaciones en total.' }
  }
};
