/* content/typing-test/es.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Tây Ban Nha (/es/test-de-mecanografia/),
 * cho tooling/pages/typing-tests.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 */
export default {
  slug: 'test-de-mecanografia',
  title: 'Test de mecanografía: mide tus PPM y precisión | TypingEase',
  description: 'Test de mecanografía gratis en el navegador: escribe 1, 5 o 10 minutos con tu teclado español y mira tus PPM, tu precisión y tus errores. Sin registro.',
  breadcrumbAria: 'Ruta de navegación',
  homeCrumb: 'Inicio',
  crumb: 'Test de mecanografía',
  eyebrow: 'Test gratuito',
  h1: 'Test de mecanografía',
  intro: 'Elige una duración, de 15 segundos a 10 minutos, y copia el texto para ver tus palabras por minuto, tu precisión y tus errores. El reloj empieza con la primera tecla, no con un botón.',
  durationAria: 'Duración del test',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Resultado en directo',
  stats: { time: 'Tiempo', wpm: 'PPM', accuracy: 'Precisión', errors: 'Errores', consistency: 'Constancia' },
  promptAria: 'El texto que hay que escribir',
  inputLabel: 'Empieza a escribir aquí',
  soundTitle: 'Clic de tecla mientras escribes (Alt+S)',
  soundLabel: 'Clic de tecla',
  placeholder: 'Haz clic aquí y empieza a escribir...',
  restart: 'Repetir',
  wpmNote: 'Las PPM cuentan los caracteres que has escrito, divididos entre cinco, por cada minuto de escritura.',
  result: { title: 'Tu resultado' },
  progress: {
    eyebrow: 'Registro de práctica', title: 'Tu progreso', rangeAria: 'Periodo', days: n => `${n} días`,
    metricAria: 'Dato del gráfico', note: 'Los resultados pueden venir de tests de distinta duración.',
    summaryAria: 'Resumen del progreso', avgWpm: 'PPM medias', bestWpm: 'Mejores PPM',
    avgAccuracy: 'Precisión media', count: 'Tests hechos', chartAria: 'Gráfico de progreso'
  },
  sections: [
    { h2: 'Cómo funciona el test de mecanografía online',
      html: '<p>Como en cualquier test de velocidad de escritura, copias el texto de arriba durante el tiempo que hayas elegido. TypingEase compara lo que escribes con el original carácter a carácter y actualiza sobre la marcha las palabras por minuto, la precisión y el número de errores. Todo ocurre en tu navegador: no hace falta cuenta y ninguna pulsación sale de tu ordenador. Los resultados se guardan solo en este dispositivo, para que el gráfico de abajo pueda enseñarte cómo han ido los últimos días.</p>' },
    { h2: 'Qué son las palabras por minuto (PPM)',
      html: '<p>PPM significa <em>palabras por minuto</em>; en inglés verás la misma medida como WPM. Para que el número no dependa de si el texto tiene palabras cortas o largas, se usa una convención: cinco caracteres cuentan como una palabra, espacios incluidos. La fórmula es sencilla: caracteres escritos, divididos entre cinco, divididos entre los minutos que has estado escribiendo. Este test PPM la calcula en directo, así que la cifra se mueve mientras escribes y se queda fija cuando termina el tiempo.</p>' },
    { h2: 'Tildes, eñe y signos de apertura',
      html: '<p>El texto está en español de verdad, con sus mayúsculas, sus tildes y sus signos, porque es lo que escribes cada día. En el teclado de España la <em>ñ</em> tiene tecla propia, a la derecha de la L. Las vocales con tilde, en cambio, se escriben con una tecla muerta: pulsas la tecla del acento, que está a la derecha de la Ñ, y después la vocal. La diéresis de <em>pingüino</em> es la misma tecla con Mayús, y los signos <em>¡</em> y <em>¿</em> están en la tecla que queda a la derecha del 0 y del apóstrofo.</p>'
        + '<p>El test cuenta caracteres, no pulsaciones: una <em>á</em> vale un carácter aunque te cueste dos teclas. Por eso un texto con muchas tildes da unas PPM algo más bajas que uno sin ellas, y conviene comparar tus resultados con tus propios intentos en español, no con cifras de tests en inglés. En el teclado latinoamericano el acento está en otro sitio; hay un <a class="inline-link" href="/es/latinoamerica/">curso para el teclado latinoamericano</a> que enseña exactamente esas posiciones.</p>' },
    { h2: '1 minuto, 5 o 10: qué mide cada duración',
      html: '<p>Un test corto mide tu velocidad punta, cuánto rindes concentrado y fresco; uno largo mide la resistencia, y suele dar menos PPM pero se parece más a cómo escribes en el trabajo o en clase. Si vas a comparar semanas, elige siempre la misma duración.</p>'
        + '<div class="guide-table-wrap"><table class="wpm-table"><caption>Qué te dice cada duración</caption><thead><tr><th scope="col">Duración</th><th scope="col">Para qué sirve</th></tr></thead><tbody>'
        + '<tr><th scope="row">15 o 30 segundos</th><td>Calentamiento: suelta los dedos, pero una sola duda cambia mucho la cifra.</td></tr>'
        + ''
        + '<tr><th scope="row">Test de mecanografía 1 minuto</th><td>Tu referencia de velocidad punta, y la duración más fácil de repetir cada día.</td></tr>'
        + '<tr><th scope="row">2 o 3 minutos</th><td>Se acaba el impulso del arranque y se ve si la precisión aguanta sin él.</td></tr>'
        + ''
        + '<tr><th scope="row">Test de mecanografía 5 minutos</th><td>Mide resistencia: lo interesante es cuánto baja la cifra respecto a tu minuto.</td></tr>'
        + '<tr><th scope="row">Test de mecanografía 10 minutos</th><td>Lo más parecido a redactar un correo largo; resérvalo para cuando el de 5 ya te salga estable.</td></tr>'
        + '</tbody></table></div>' },
    { h2: 'Cómo leer la precisión',
      html: '<p>La precisión es el porcentaje de caracteres correctos sobre todo lo que queda escrito. Si borras un error y lo corriges, deja de contar como fallo, pero el tiempo que has perdido sí se nota en las PPM. Una precisión baja casi siempre significa que vas más rápido de lo que tus dedos saben ir: baja un poco el ritmo hasta que los errores sean raros y la velocidad volverá a subir por sí sola. La constancia compara tu velocidad segundo a segundo; una cifra alta indica que mantienes un paso regular en vez de acelerar y frenar.</p>' },
    { h2: 'Test de mecanografía para principiantes',
      html: '<p>Para el primer intento te doy un consejo que va contra lo habitual: no elijas 10 minutos para «ver tu nivel real». Elige 1 minuto y escribe cada tilde, porque aquí cuenta: si te saltas la tecla muerta y escribes <em>camion</em>, el test lo marca como error. Prefiero que salgas de tu primer test de velocidad de mecanografía con 20 PPM limpias que con 40 llenas de rojo, porque la tilde que hoy te saltas será mañana un hábito que desaprender.</p>'
        + '<ul><li>Antes, comprueba en otro programa que la <em>ñ</em> sale a la derecha de la L. Esto no es un test de teclado para detectar teclas rotas, pero si el sistema está en distribución inglesa, el resultado no vale nada.</li><li>Repite el mismo minuto varios días y solo entonces prueba 5 minutos.</li></ul>'
        + '<p>Quien todavía busca la ñ con la vista avanzará más con el <a class="inline-link" href="{course}">curso de {lessons} lecciones</a> que repitiendo este test.</p>' },
    { h2: 'Después del test: qué practicar',
      html: '<ul><li>Aprende la posición de cada dedo en la fila central, con los índices sobre la F y la J, y vuelve a ella después de cada tecla.</li><li>Primero la precisión. La velocidad llega después de acertar, nunca al revés.</li><li>Practica las tildes y la eñe con el meñique derecho hasta que no tengas que pensarlas.</li><li>Mantén la vista en la pantalla aunque al principio vayas más despacio.</li><li>Para practicar mecanografía, haz sesiones cortas que de verdad puedas mantener: mejor diez minutos al día que una hora a la semana.</li></ul>'
        + '<p>El <a class="inline-link" href="{course}">curso de {lessons} lecciones</a> pone todo esto en orden sobre el teclado español, con ejercicios de mecanografía que van desde las dos teclas con relieve hasta textos completos con tildes.</p>'
        + '<p>Si quieres un plan paso a paso, en esta guía explicamos <a class="inline-link" href="/es/escribir-mas-rapido/">cómo escribir más rápido en el teclado</a> sin perder las tildes por el camino.</p>' }
  ],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    ['¿Qué son las PPM?', 'Las palabras por minuto: cuántas palabras de cinco caracteres escribes en un minuto. Es la misma medida que en inglés se llama WPM.'],
    ['¿Cómo empiezo?', 'Elige una duración y empieza a escribir el texto en el cuadro de arriba. El reloj arranca con la primera tecla que pulses.'],
    ['¿Cuentan las tildes como errores?', 'Solo si faltan o están mal. Una vocal con tilde es un carácter distinto de la vocal sin tilde, así que escribir «camion» en lugar de «camión» cuenta como un error.'],
    ['¿Qué duración debo elegir?', 'Un minuto sirve para medir tu velocidad punta; cinco o diez minutos muestran si mantienes el ritmo. Para seguir tu progreso, repite siempre la misma duración.'],
    ['¿Puedo mirar el teclado durante el test?', 'Puedes, y al principio casi todo el mundo lo hace. Intenta acostumbrarte a mirar la pantalla: sobre ese hábito se construye la velocidad.'],
    ['¿Se guardan mis resultados?', 'Sí, pero solo en este navegador y en este dispositivo. No hay cuenta ni servidor: si borras los datos del navegador, el historial desaparece.'],
    ['¿Sirve como test de mecanografía para niños?', 'Sí, aunque no tiene un modo infantil: los textos son prosa normal para adultos. Lo mejor es que un niño lo haga acompañado, con duraciones de 15 a 60 segundos y fijándose más en la precisión que en las PPM.']
  ],
  cta: { eyebrow: '¿Quieres mejorar tu resultado?', title: 'Aprende mecanografía al tacto', text: '{lessons} lecciones sobre tu propio teclado, empezando por la fila central.', button: 'Ver el curso' }
};
