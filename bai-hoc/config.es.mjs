/* bai-hoc/config.es.mjs — cau hinh trang lo trinh cho ban es.
 *
 * Mot file moi ngon ngu, khong phai mot bang CONFIG chung: them ngon ngu la them file, va hai
 * nguoi them hai ngon ngu cung luc thi khong dam vao nhau. bai-hoc/generate.mjs nap file nay
 * theo `--lang`.
 *
 * BANG CHUOI NAM O DAY, KHONG O i18n/ui.es.js. Day la cong cu chay luc build; chu no sinh ra da
 * nam san trong HTML khi trinh duyet nhan duoc. Day chung sang file i18n la bat moi khach tai
 * ve mot bang chuoi chi de dung lai thu da co trong trang.
 *
 * `null` trong `routes` = trang do chua co ban ngon ngu nay. Moi danh sach ben duoi loc null ra,
 * nen khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export default {
    out: path.join(root, 'es', 'lecciones', 'index.html'),
    url: 'https://typingease.site/es/lecciones/',
    alt: 'https://typingease.site/en/lessons/',
    curriculumScript: '/data/curriculum.es.js',
    ui: '/i18n/ui.es.js',
    // `null` = trang do chua co ban tieng Tay Ban Nha. Moi danh sach ben duoi loc null ra, nen
    // khong co lien ket nao tro vao 404 hay sang mot trang ngon ngu khac.
    routes: {
      home: '/es/', lessons: '/es/lecciones/', learn: '/es/aprender/', test: '/es/test-de-mecanografia/',
      progress: '/es/progreso/', games: '/es/juegos-de-mecanografia/', free: null, weak: null, guide: null, wpm: null
    },
    s: {
      title: c => `Curso de mecanografía: ${c.sequence.length} lecciones | TypingEase`,
      // Trang lo trinh cua MOT HO ban phim khac (--course es-latinoamerica…). Xem config.en.mjs.
      family: {
        // Tieu de <= 60 ky tu: "sin teclas muertas" qua dai cho mau chung nen co ban rieng.
        title: (c, f) => `${{ 'es-sin-teclas-muertas': 'Teclado latino sin teclas muertas: mecanografía' }[f.id] || `Teclado ${f.keyboard.replace(/^el teclado /, '')}: curso de mecanografía`} | TypingEase`,
        description: (c, f) => `Curso de mecanografía gratis sobre ${f.keyboard}: ${c.units.length} unidades y ${c.sequence.length} lecciones, de la fila de reposo a los textos largos.`,
        h1: (c, f) => `Curso de mecanografía · ${f.name} · ${c.sequence.length} lecciones`
      },
      description: c => `Curso de mecanografía gratis en español: ${c.units.length} unidades y ${c.sequence.length} lecciones, de la fila de reposo a los números, los signos y los textos largos, con eñe y tildes.`,
      nav: r => [[r.home, 'Practicar'], [r.lessons, 'Curso'], [r.progress, 'Progreso'], [r.test, 'Test'], [r.games, 'Juegos']],
      navAria: 'Navegación principal',
      enter: 'Empezar',
      eyebrow: 'El curso de TypingEase',
      h1: c => `Curso de mecanografía · ${c.sequence.length} lecciones · ${c.units.length} unidades`,
      intro: 'Desde las dos teclas con relieve hasta párrafos enteros a buen ritmo. Cada lección enseña\n          dos teclas nuevas repartidas en pantallas cortas, alternando ejercicios y ráfagas\n          cronometradas — unos cinco minutos cada una.',
      countDone: total => `0/${total} lecciones hechas`,
      cta: 'Empezar la lección 1',
      sideUnit: 'Unidades', sideOther: 'Más', sideAria: 'Lista de unidades',
      otherLinks: r => [[r.home, 'Elige tu teclado'], [r.test, 'Prueba de velocidad'], [r.progress, 'Tu progreso']],
      unitKicker: n => `Unidad ${n}`,
      locked: 'Cerrada',
      unitScore: 'lecciones hechas',
      noteNone: 'Esta unidad todavía se está escribiendo — las lecciones se irán abriendo.',
      noteSome: (ready, total) => `${ready} de ${total} lecciones están escritas; el resto viene en camino.`,
      kind: { keys: '', review: 'Repaso', weak: 'Personalizada', test: 'Prueba' },
      lessonMeta: (n, meta, tag) => `Lección ${n} · ${meta}${tag ? ` · ${tag}` : ''}`,
      seconds: n => `${n} segundos`, screens: n => `${n} pantallas`, minutes: n => `${n} min`,
      soon: 'Pronto',
      exploreEyebrow: 'Antes de empezar', exploreTitle: 'Conviene saberlo',
      explore: r => [
        [r.learn, 'Empieza por la fila de reposo', 'Ocho teclas, ocho dedos y la costumbre de no mirar hacia abajo. La primera unidad decide todas las demás.', 'Abrir la lección 1'],
        [r.home, 'Escribe en tu propio teclado', 'QWERTY, AZERTY, QWERTZ, devanagari, árabe, JIS — 119 distribuciones reales, y el curso sigue a la que elijas.', 'Ver las distribuciones']
      ],
      footerAria: 'Recursos de TypingEase',
      footerLinks: r => [[r.home, 'Practicar'], [r.lessons, 'Curso'], [r.progress, 'Progreso'], [r.test, 'Test de mecanografía'], [r.games, 'Juegos de mecanografía']],
      footerTag: 'Ve un poco más despacio y llegarás mucho más lejos.',
      switches: [['EN', '/en/lessons/', 'en', 'English version'], ['VI', '/bai-hoc/', 'vi', 'B\u1ea3n ti\u1ebfng Vi\u1ec7t']]
    }
};
