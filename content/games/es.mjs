/* content/games/es.mjs — página de juegos en español (tooling/pages/games.mjs). Las palabras salen
 * de data/words/es.js, el mismo banco del curso /es/ (QWERTY español, ñ propia, tildes con tecla muerta). */
export default {
  worlds: {"rain": "Jardín de luciérnagas", "race": "Circuito al atardecer", "keys": "Estación espacial"},
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
    start: 'Empezar', placeholder: 'Escribe una de las palabras que caen y pulsa Espacio',
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
    { h2: 'Qué juego de mecanografía elegir según lo que hoy te frena', html: `<p>Los tres juegos usan las palabras del curso de español, pero cada uno aprieta en un sitio distinto. Si todavía dudas dónde está la ñ, abre <b>Caza de teclas</b>. Si las letras sueltas ya salen y lo que falla es terminar una palabra con tilde sin pararte, prueba <b>Lluvia de palabras</b>. Si escribes palabras enteras pero el ritmo se rompe a mitad de línea, lo tuyo es <b>Carrera fantasma</b>.</p>
<p>Conviene saber una cosa antes de jugar: las palabras de los juegos van en minúsculas y sin signos. No hay mayúsculas, ni ¿, ni ¡, ni comas. Eso los hace buenos para lo que hacen y flojos para todo lo demás, así que no sustituyen a la unidad del curso donde se aprenden Mayús, la puntuación y las tildes en mayúscula.</p>
<p>Mi opinión es que los juegos funcionan mejor después de una lección que en lugar de ella. Diez minutos de partida con un objetivo claro, como «no mirar la tilde» o «no perder la racha en la fila de arriba», valen más que una hora intentando batir un récord. Un récord se puede subir con trucos que luego no te sirven para escribir un correo; una racha limpia, no.</p>` },
    { h2: 'Lluvia de palabras: tildes y eñes antes de que toquen el suelo', html: `<p>Elige Fácil, Normal o Difícil y pulsa Empezar. Escribe una de las palabras que caen y pulsa Espacio o Intro para enviarla. Si coincide con una que sigue en pantalla, desaparece; si no, la casilla se vacía. Cada palabra que llega abajo te quita una vida, y con tres se acaba la partida. Cada ocho palabras eliminadas subes de fase y todo cae un poco más deprisa.</p>
<h3>La tilde cuenta</h3>
<p>«Mas» no elimina «más». El juego compara la palabra entera, tilde incluida, y la escribes como siempre: la ´ y después la vocal. El fallo típico con prisa es pulsar Espacio justo detrás de la ´: la tilde sale suelta, la palabra no coincide y pierdes lo escrito. Con la ñ, el error más común es escribir una n; de lejos parece igual, pero la palabra no se va.</p>
<h3>Qué hacer con los puntos</h3>
<p>Los puntos dependen de la longitud de la palabra y de la fase, y una vocal con tilde cuenta como una letra, aunque te cueste dos pulsaciones. Si en Difícil las palabras desaparecen antes de que llegues a leerlas, baja a Normal. En Fácil solo caen palabras cortas, y eso deja menos tildes en juego: está bien para calentar, no para practicar la tecla muerta.</p>` },
    { h2: 'Carrera fantasma: un reto contra tu propio ritmo, sin rivales', html: `<p>Aquí no compites con nadie. El fantasma es un coche que avanza a velocidad constante: 20, 30, 40, 60 u 80 PPM, o «Tu récord», que toma tu mejor carrera guardada (30 PPM si aún no tienes ninguna). No hay otros jugadores conectados ni clasificación, y el fantasma tampoco repite tus pulsaciones de una partida anterior: solo mantiene un ritmo.</p>
<p>Pulsa «Empezar carrera»; nadie se mueve hasta que escribes la primera letra. El texto son unos 170 caracteres de palabras del curso, en minúsculas y separadas por espacios. Tu coche avanza con la parte correcta del principio de lo que escribes: si te dejas una tilde al comienzo, todo lo que escribas detrás no te mueve hasta que la corrijas.</p>
<h3>Cómo elegir el ritmo</h3>
<p>Pon el fantasma un poco por debajo de lo que haces en el test, no por encima. La gracia está en llegar a la meta sin borrar a lo loco. Cuando le ganes tres veces seguidas con margen, súbelo un escalón. «Tu récord» sirve para mantener el nivel, pero si cambias de ritmo en cada partida no sabrás qué ha mejorado.</p>` },
    { h2: 'Caza de teclas: la ñ y el resto del teclado español, por posición', html: `<p>Una tecla se ilumina en el teclado de la pantalla; pulsa la misma en el tuyo sin mirar las manos. Tienes 60 segundos. Cada acierto suma y cada tecla equivocada corta la racha, así que al final mira las dos cifras: muchos aciertos con rachas cortas quieren decir que estás adivinando.</p>
<p>El juego reconoce la tecla por su posición física, no por la letra que escribe tu sistema. Eso tiene una consecuencia práctica: si tu teclado es latinoamericano y en pantalla ves el de España, la caza te enseñará posiciones que no son las tuyas. Cambia la distribución en los ajustes del teclado de la pantalla antes de jugar.</p>
<h3>Qué teclas salen</h3>
<p>Solo letras de la capa principal: de la a a la z, la ñ y también la ç, que el teclado de España tiene en tecla propia. La tecla de la tilde no sale nunca, porque sola no escribe nada; para practicarla está Lluvia de palabras. Fíjate en el meñique derecho: en este teclado carga con la ñ, la ç y la tilde, y suele ser el primero en perder la racha.</p>` },
    { h2: 'Del juego a la siguiente lección del curso', html: `<p>Antes de pulsar «Jugar otra vez», contesta una pregunta: ¿qué me ha hecho perder? Si fueron las tildes en Lluvia de palabras, las lecciones de la tecla muerta del <a class="inline-link" href="{course}">curso de {lessons} lecciones</a> son las que te tocan. Si en Caza de teclas la racha se cortaba siempre en la fila de arriba, repite las lecciones de la unidad 1 que van de la Q a la P. Si en Carrera fantasma llegabas tarde por corregir, las unidades «Ritmo y fluidez» y «Precisión y contrastes» trabajan justo eso en texto conectado.</p>
<p>Las cifras de los juegos no se comparan entre sí ni con el <a class="inline-link" href="{test}">test de mecanografía</a>: una partida de palabras cortas que caen y una carrera de 170 caracteres son tareas distintas, y el test incluye mayúsculas y signos que aquí no aparecen. Tus récords se guardan solo en este navegador.</p>
<p>Una nota útil cabe en una línea: «pierdo la ñ cuando vengo de la o», «freno en las palabras con ú». Apúntala, abre la lección que toca y deja el juego para el final de la sesión.</p>` }
  ],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    ['¿Puedo jugar contra otras personas?', 'No. En Carrera fantasma corres contra un fantasma que mantiene la velocidad que eliges, o tu propio récord. No hay otros jugadores ni clasificación.'],
    ['¿Dónde se guardan mis récords?', 'Solo en este navegador, en este dispositivo. No hace falta cuenta y no se envía nada a ningún servidor.'],
    ['¿Puedo jugar en el móvil?', 'Lluvia de palabras y Carrera fantasma funcionan con el teclado del móvil. Caza de teclas necesita un teclado de verdad, porque enseña dónde están las teclas.'],
    ['¿Por qué no desapareció una palabra bien escrita?', 'Tiene que coincidir exactamente antes de pulsar Espacio. Revisa si falta una tilde o una letra, o si se coló una mayúscula.'],
    ['¿Puedo practicar mayúsculas o los signos ¿ y ¡ en los juegos?', 'No. Las palabras de los juegos van en minúsculas y sin puntuación. Para Mayús, las vocales mayúsculas con tilde y los signos de apertura, usa las lecciones de la unidad 3 del curso.'],
    ['¿Sirven los juegos con el teclado latinoamericano?', 'Sí. Lluvia de palabras y Carrera fantasma comparan el texto, así que vale cualquier teclado que escriba tildes y eñes. Caza de teclas va por posición: cambia el teclado de la pantalla al tuyo para que la tecla iluminada sea la que pulsas.']
  ],
  cta: { eyebrow: '¿Quieres jugar mejor?', title: 'Aprende mecanografía', text: '{lessons} lecciones en tu propio teclado, empezando por la fila guía.', button: 'Ver el curso' }
};
