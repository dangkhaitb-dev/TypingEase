/* data/words/es.js — kho từ tiếng Tây Ban Nha cho khoá /es/.
 *
 * Nạp hai đường, nên nó là biến toàn cục của trình duyệt chứ không phải module:
 *   - Node, qua `new Function('window', src)` — scripts/build-course.js, validate-lessons.js
 *   - Trình duyệt, qua <script src> — weak-keys.js, lấy làm kho luyện phím yếu
 *
 * BỐ CỤC LÀ 175 (Spanish, QWERTY có ñ ở ô Semicolon). Thứ tự phím vì thế là:
 *   f j · d k · s l · a ñ · [ôn] · g h · e i · r u · [yếu] · [kiểm tra]
 *   t y · o w · c n · m v · [ôn] · q p · b x · z . , ´ · Shift+Enter · [yếu] · [kiểm tra]
 *   hàng số · - ' · [ôn] · đoạn văn ×2 · [kiểm tra cuối]
 * Nhóm bên dưới ghi theo mốc đó. Nhóm chỉ là chú thích, KHÔNG phải cấu trúc: generator lọc
 * mảng `words` phẳng theo tập phím được phép, nên từ xếp nhầm nhóm thì vô hại. Chúng tồn tại
 * để người đọc thấy ngay khoá học mỏng ở chỗ nào.
 *
 * DẤU. á é í ó ú gõ bằng phím chết ´ (ô Quote), dạy ở u2-l08 — nên mọi từ có dấu đều nằm sau
 * mốc đó, và `typeableWith` trong scripts/lib/content.js tự chặn chúng khỏi các bài trước.
 * ñ thì KHÔNG phải phím chết: nó có phím riêng ngay hàng cơ sở, dạy ở bài 4. Đó là lý do
 * `año`, `niño`, `mañana` xuất hiện sớm hơn `está` hay `también` rất nhiều.
 * ü (pingüino, vergüenza) cần ¨ = Shift+´, nên cũng chỉ hợp lệ sau u2-l09; ở đây không dùng.
 *
 * NGUỒN GỐC. Từ vựng tiếng Tây Ban Nha thông dụng không thuộc về ai, nhưng một DANH SÁCH được
 * biên soạn thì có thể mang quyền biên tập mỏng — nên danh sách này dựng độc lập: từ vựng phổ
 * thông, xếp theo mốc phím ở trên, rồi soát tay. Không lấy từ nội dung bài của site dạy gõ nào
 * — xem luật "không chép typing.com" trong DECISIONS.md.
 *
 * LUẬT NHÀ cho mọi thứ thêm vào đây:
 *   - Chỉ /^[a-záéíóúñ']+$/. Không chữ hoa (Shift dạy muộn), không gạch nối.
 *   - Chính tả chuẩn Tây Ban Nha. Không trộn biến thể vùng miền trong cùng một màn.
 *   - Không danh từ riêng ngoài `names`; không từ cổ; không gì bạo lực, y khoa, chính trị hay
 *     khó chịu khi bị bắt gõ lại ba mươi lần.
 */
window.TypingEaseWords = window.TypingEaseWords || {};
window.TypingEaseWords.es = {
  lang: 'es',

  // Bộ chữ hợp lệ, để scripts/check-words.js gác được. Để máy so thay vì so bằng mắt:
  // bản nháp đầu của file này lọt bốn mục viết bằng chữ Cyrillic và chữ Hán, và trên một danh
  // sách 400 từ thì không ai soát ra.
  alphabet: "abcdefghijklmnñopqrstuvwxyzáéíóú'",

  words: [
    // --- a s d f j k l ñ  (u1-l04) ------------------------------------------------------
    // Điểm đầu tiên trong khoá có từ tiếng Tây Ban Nha thật. Danh sách ngắn, và đó là hình
    // dạng thật của ràng buộc, không phải chỗ trống cần độn từ bịa.
    'a', 'al', 'la', 'las', 'sal', 'sala', 'salas', 'ala', 'alas', 'falda', 'faldas',
    'salsa', 'falsa', 'falsas', 'asada', 'asadas', 'salada', 'saladas', 'dada', 'dadas',

    // --- + g h  (u1-l06) ----------------------------------------------------------------
    'gala', 'galas', 'haga', 'hagas', 'algas', 'alga', 'gafas', 'gafa',
    'hallas', 'halla', 'hadas', 'hada',

    // --- + e i  (u1-l07) ----------------------------------------------------------------
    // Hai nguyên âm này mở ra phần lớn từ chức năng của tiếng Tây Ban Nha.
    'el', 'de', 'del', 'les', 'ella', 'ellas', 'esa', 'esas', 'ese',
    'edad', 'edades', 'idea', 'ideas', 'isla', 'islas', 'feliz', 'fila', 'filas',
    'hijas', 'hija', 'hielo', 'hielos', 'lejos', 'dije', 'dijes', 'hilo', 'hilos',
    'seda', 'sedas', 'sede', 'sedes', 'sigla', 'siglas', 'falla', 'fallas', 'selva',
    'ideal', 'ideales', 'hallé', 'niña', 'niñas', 'añade', 'seña', 'señas',

    // --- + r u  (u1-l08) ----------------------------------------------------------------
    'su', 'sus', 'uña', 'uñas', 'duda', 'dudas', 'lugar', 'lugares', 'sur', 'aire',
    'aires', 'rueda', 'ruedas', 'regla', 'reglas', 'grande', 'grandes', 'iguales',
    'igual', 'llega', 'llegar', 'llegada', 'seguir', 'seguridad',
    'guardar', 'guarda', 'guardia', 'águila', 'sugerir', 'salir', 'salida', 'salidas',
    'usar', 'usada', 'usadas', 'juega', 'jugar', 'juegas', 'humilde',
    'figura', 'figuras',

    // --- + t y  (u2-l01) ----------------------------------------------------------------
    'y', 'este', 'esta', 'estas', 'estar', 'gente', 'gentes', 'siete',
    'tarde', 'tardes', 'tierra', 'tierras', 'fuerte', 'fuertes', 'gusta', 'gustar',
    'juguete', 'juguetes', 'ayuda', 'ayudar', 'ayudas', 'suerte',
    'altura', 'alturas', 'estudia', 'estudiar',
    'llevar', 'llevas', 'hasta', 'trae', 'traer', 'traes', 'destaca',

    // --- + o w  (u2-l02) ----------------------------------------------------------------
    'o', 'lo', 'los', 'todo', 'todos', 'toda', 'todas', 'otro', 'otros', 'otra', 'otras',
    'solo', 'sola', 'solas', 'siglo', 'siglos', 'grupo', 'grupos', 'juego', 'juegos',
    'fuego', 'fuegos', 'dedo', 'dedos', 'hijos', 'hijo', 'trabajo', 'trabajos',
    'largo', 'larga', 'largas', 'seguro', 'segura', 'siguiente', 'oreja', 'orejas',
    'agosto', 'reloj', 'relojes', 'oeste', 'oro', 'toro', 'toros', 'gota', 'gotas',
    'rojo', 'roja', 'rojas', 'ojo', 'ojos', 'sueldo', 'sueldos',

    // --- + c n  (u2-l03) ----------------------------------------------------------------
    'en', 'con', 'no', 'un', 'una', 'unas', 'unos', 'son', 'nada', 'nadie',
    'antes', 'entonces', 'cuando', 'cuanto', 'cuenta', 'cuentas', 'cosa', 'cosas',
    'casa', 'casas', 'cielo', 'cielos', 'ciudad', 'ciudades', 'nunca', 'noche', 'noches',
    'nuestro', 'nuestra', 'nuevo', 'nueva', 'nuevas', 'centro', 'centros',
    'cuerda', 'cuerdas', 'ciencia', 'ciencias', 'conocer', 'conoce', 'cantar', 'canta',
    'canciones', 'carta', 'cartas', 'corto', 'corta', 'cortas', 'año', 'años', 'niño',
    'niños', 'mañana', 'señor', 'señora', 'caña', 'cañas', 'sueño', 'sueños', 'dueño',
    'engaño', 'daño', 'danza', 'once', 'doce', 'trece', 'catorce', 'quince',

    // --- + m v  (u2-l04) ----------------------------------------------------------------
    'me', 'mi', 'mis', 'mas', 'muy', 'más', 'como', 'cómo', 'mismo', 'misma', 'mismas',
    'mucho', 'mucha', 'muchas', 'menos', 'mejor', 'mejores', 'mundo', 'mundos', 'mesa',
    'mesas', 'madre', 'madres', 'mar', 'mares', 'mano', 'manos', 'medio', 'medios',
    'momento', 'momentos', 'minuto', 'minutos', 'mes', 'meses', 'vida', 'vidas', 'ver',
    'vez', 'veces', 'verdad', 'verdades', 'viene', 'venir', 'vamos', 'vale', 'valor',
    'valores', 'verde', 'verdes', 'viento', 'vientos', 'viaje', 'viajes', 'vecino',
    'vecinos', 'ventana', 'ventanas', 'nombre', 'nombres', 'hombre', 'hombres',
    'siempre', 'también', 'camino', 'caminos', 'comida', 'comidas', 'comer', 'come',

    // --- + q p  (u2-l06) ----------------------------------------------------------------
    'que', 'qué', 'porque', 'para', 'por', 'pero', 'poco', 'poca', 'pocas', 'puede',
    'pueden', 'parte', 'partes', 'punto', 'puntos', 'palabra', 'palabras', 'padre',
    'padres', 'papel', 'papeles', 'puerta', 'puertas', 'pueblo', 'pueblos', 'primero',
    'primera', 'persona', 'personas', 'pregunta', 'preguntas', 'pequeño', 'pequeña',
    'plaza', 'plazas', 'planta', 'plantas', 'precio', 'precios', 'proyecto', 'proyectos',
    'quiere', 'quieres', 'queda', 'quedar', 'aquel', 'aquella', 'aquí',
    'esperar', 'espera', 'campo', 'campos', 'tiempo', 'tiempos',

    // --- + b x  (u2-l07) ----------------------------------------------------------------
    'bien', 'bueno', 'buena', 'buenas', 'buenos', 'bajo', 'baja', 'bajas', 'blanco',
    'blanca', 'blancas', 'boca', 'bocas', 'brazo', 'brazos', 'buscar', 'busca', 'beber',
    'bebe', 'libro', 'libros', 'libre', 'libres', 'trabajar', 'trabaja',
    'hombro', 'hombros', 'cambio', 'cambios', 'cambiar', 'sabe', 'saber',
    'sabes', 'debe', 'deber', 'debes', 'recibir', 'recibe', 'escribir', 'escribe',
    'público', 'exacto', 'exacta', 'examen', 'texto', 'textos',
    'experiencia', 'explicar', 'explica', 'extraño', 'extraña',

    // --- + z . , ´  (u2-l08) — dấu sắc mở ra từ đây ------------------------------------
    'zapato', 'zapatos', 'zona', 'zonas', 'razón', 'razones',
    'paz', 'luz', 'luces', 'voz', 'voces', 'cabeza', 'cabezas', 'fuerza', 'fuerzas',
    'comenzar', 'comienza', 'empezar', 'empieza', 'azul', 'azules', 'felices',
    'está', 'están', 'estás', 'así', 'allí', 'ahí', 'días', 'día', 'después',
    'según', 'además', 'jamás', 'quizás', 'adiós', 'país', 'países',
    'último', 'última', 'único', 'única', 'rápido', 'rápida', 'fácil', 'difícil',
    'árbol', 'árboles', 'música', 'músicas', 'número', 'números', 'práctica',
    'teléfono', 'teléfonos', 'césped', 'cámara', 'cámaras', 'máquina', 'máquinas',
    'página', 'páginas', 'línea', 'líneas', 'época', 'épocas', 'médico', 'médicos',
    'ángulo', 'ángulos', 'océano', 'océanos', 'jardín', 'jardines', 'común', 'comunes',
    'acción', 'acciones', 'atención', 'canción', 'estación', 'estaciones',
    'información', 'situación', 'relación', 'relaciones', 'educación', 'operación'
  ],

  /* Tên riêng cho bài dạy Shift và cho những câu cần chủ ngữ. Ngắn, thông dụng, dễ gõ. */
  names: [
    'ana', 'elena', 'laura', 'marta', 'carmen', 'lucía', 'sara', 'julia',
    'pablo', 'carlos', 'javier', 'daniel', 'miguel', 'andrés', 'sergio', 'tomás',
    'madrid', 'sevilla', 'granada', 'valencia', 'bogotá', 'lima', 'quito', 'panamá'
  ],

  /* Câu cho các màn `dictation: 'sentence'`. Không viết hoa, không dấu chấm cuối: generator tự
     thêm cả hai khi giáo trình đã dạy Shift và dấu chấm. Mỗi câu phải đọc như tiếng Tây Ban Nha
     bình thường, không phải như một bài tập ngữ âm. */
  sentences: [
    'la casa nueva tiene una puerta verde',
    'el niño lee un libro en la sala',
    'mi madre trabaja en el centro de la ciudad',
    'no tengo tiempo para ese viaje',
    'el gato duerme sobre la mesa de madera',
    'todos los días camino hasta la plaza',
    'la música de la radio es muy buena',
    'necesito comprar papel y dos libros',
    'el tren llega a las siete de la mañana',
    'ella escribe cartas a sus amigos',
    'hace mucho calor en el mes de agosto',
    'los niños juegan en el jardín de la escuela',
    'quiero aprender a escribir sin mirar el teclado',
    'la ventana de mi cuarto da a la calle',
    'mi padre prepara la comida los domingos',
    'el libro que busco no está en la mesa',
    'cada persona tiene su propio ritmo',
    'la ciudad cambia mucho durante el verano',
    'vamos a caminar por el parque esta tarde',
    'el tiempo pasa rápido cuando trabajas bien'
  ]
};
