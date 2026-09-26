/* tro-choi/text/es.mjs — página de juegos en español (scripts/build-game-pages.mjs). Las palabras salen
 * de data/words/es.js, el mismo banco del curso /es/ (QWERTY español, ñ propia, tildes con tecla muerta). */
export default {
  slug: 'juegos-de-mecanografia',
  title: 'Juegos de mecanografía gratis en tu teclado | TypingEase',
  description: 'Tres juegos de mecanografía gratis: Lluvia de palabras, Carrera fantasma y Caza de teclas. Practica en tu propio teclado, en el navegador y sin registro.',
  breadcrumbAria: 'Ruta de navegación',
  homeCrumb: 'Inicio',
  crumb: 'Juegos de mecanografía',
  eyebrow: 'Práctica que parece un juego',
  h1: 'Juegos de mecanografía',
  intro: 'Tres juegos cortos para jugar entre lección y lección: elimina palabras que caen, corre contra tu propio ritmo y caza teclas en un teclado en pantalla. Tus mejores marcas se quedan en este dispositivo.',
  tabsAria: 'Elige un juego',
  locale: 'es-ES',
  howAria: 'Cómo se juega',
  how: {
    rain: ['Las palabras caen desde arriba.', 'Escribe la palabra tal cual, con sus tildes.', 'Pulsa Espacio para eliminarla. Si se te escapan tres, se acaba.'],
    race: ['Elige la velocidad del fantasma.', 'Escribe el texto desde la primera letra.', 'Llega a la meta antes que el fantasma.'],
    keys: ['Una tecla se ilumina en el teclado.', 'Mira la pantalla, no las manos, y púlsala.', 'Acierta todas las que puedas en 60 segundos.']
  },
  modes: {
    rain: ['Lluvia de palabras', 'Escribe la palabra que cae y pulsa Espacio para eliminarla.'],
    race: ['Carrera fantasma', 'Termina el texto antes que el fantasma.'],
    keys: ['Caza de teclas', 'Pulsa la tecla iluminada, todas las veces que puedas en 60 segundos.']
  },
  rain: {
    difficulty: 'Nivel', easy: 'Fácil', normal: 'Normal', hard: 'Difícil',
    score: 'Puntos', level: 'Fase', lives: 'Vidas', best: 'Récord',
    start: 'Empezar', placeholder: 'Escribe una palabra que cae y pulsa Espacio',
    hint: 'Las tildes se escriben como siempre: la tecla ´ y luego la vocal (´ + a → á). Si tres palabras llegan abajo, se acaba la partida.'
  },
  race: {
    pace: 'Fantasma', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} PPM`,
    start: 'Empezar carrera', you: 'Tú', ghost: 'Fantasma', placeholder: 'Escribe el texto de arriba, desde la primera letra'
  },
  keys: {
    start: 'Empezar a cazar', time: 'Segundos', hits: 'Aciertos', streak: 'Racha', best: 'Récord',
    hint: 'Mira la pantalla, no las manos. Las teclas se leen por su posición física, así que sirve cualquier distribución del sistema.'
  },
  runtime: {
    over: 'Fin de la partida', again: 'Jugar otra vez', newBest: '¡Nuevo récord en este dispositivo!',
    rainResult: '{score} puntos · {words} palabras eliminadas · {wpm} PPM · {accuracy}% de acierto',
    raceReady: 'El fantasma va a {wpm} PPM. Pulsa «Empezar carrera» y escribe la primera letra para salir.',
    raceGo: '¡Ya!', raceWin: '¡Has llegado primero!', raceLose: 'Esta vez ganó el fantasma.',
    racePaused: 'Parado. Pulsa «Empezar carrera» para volver a salir.',
    raceResult: '{seconds} segundos · {wpm} PPM · {accuracy}% de precisión · fantasma {ghost} PPM',
    paceBest: 'Tu récord ({wpm} PPM)',
    keysResult: '{hits} aciertos · racha más larga {streak} · {accuracy}% de precisión'
  },
  sections: [
    { h2: 'Tres juegos, una sola habilidad', html: '<p>Cada juego entrena una parte de la mecanografía. <b>Caza de teclas</b> trabaja dónde está cada tecla: la tecla iluminada te dice qué dedo se mueve, sin mirar abajo. <b>Lluvia de palabras</b> entrena escribir palabras enteras con prisa. <b>Carrera fantasma</b> entrena un ritmo regular en todo un texto, contra un fantasma que va a la velocidad que elijas.</p>' },
    { h2: 'En tu propio teclado', html: '<p>El teclado en pantalla de Caza de teclas es el del curso, el QWERTY español con la ñ en la fila guía, y las teclas se reconocen por su posición física, no por el carácter que escribe tu sistema. Lluvia de palabras y Carrera fantasma usan las mismas palabras que el <a class="inline-link" href="{course}">curso de {lessons} lecciones</a>, tildes incluidas.</p>' },
    { h2: 'Cómo sacarle partido', html: '<ul><li>Juega después de una lección; con cinco o diez minutos basta.</li><li>Elige un nivel en el que aciertes la mayoría de las palabras, y baja si fallas mucho.</li><li>En Carrera fantasma, pon el fantasma un poco por debajo de tu velocidad real y súbelo con el tiempo.</li><li>Para medir tu velocidad de verdad usa el <a class="inline-link" href="{test}">test de mecanografía</a>, no un juego.</li></ul>' }
  ],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    ['¿Puedo jugar contra otras personas?', 'Todavía no. Carrera fantasma es contra un fantasma que mantiene la velocidad que eliges, o tu propio récord. No hay otros jugadores ni clasificación.'],
    ['¿Dónde se guardan mis récords?', 'Solo en este navegador, en este dispositivo. Sin cuenta, y no se envía nada a ningún sitio.'],
    ['¿Puedo jugar en el móvil?', 'Lluvia de palabras y Carrera fantasma funcionan con el teclado del móvil. Caza de teclas necesita un teclado de verdad, porque enseña dónde están las teclas.'],
    ['¿Por qué no desapareció una palabra bien escrita?', 'Tiene que coincidir exactamente antes de pulsar Espacio. Revisa si falta una tilde o una letra, o si se coló una mayúscula.']
  ],
  cta: { eyebrow: '¿Quieres jugar mejor?', title: 'Aprende mecanografía', text: '{lessons} lecciones en tu propio teclado, empezando por la fila guía.', button: 'Ver el curso' }
};
