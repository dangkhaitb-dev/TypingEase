/* kiem-tra-toc-do-go/text/nl.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Hà Lan (/nl/typetest/),
 * cho scripts/build-test-pages.mjs (cùng hình dạng với mẫu tiếng Anh).
 * `{lessons}` = số bài của khoá chính tiếng Hà Lan, `{course}` = URL trang lộ trình của khoá đó.
 * Đợt 2: `live: false` — đã soạn sẵn, chưa xuất bản.
 */
export default {
  live: false,
  slug: 'typetest',
  title: 'Typetest: meet je typsnelheid online | TypingEase',
  description: 'Gratis typetest in je browser: typ 1, 5 of 10 minuten en zie je woorden per minuut (WPM), nauwkeurigheid en fouten. Zonder account.',
  breadcrumbAria: 'Kruimelpad',
  homeCrumb: 'Start',
  crumb: 'Typetest',
  eyebrow: 'Gratis typetest',
  h1: 'Typetest: hoe snel typ jij?',
  intro: 'Kies een duur tussen 15 seconden en 10 minuten en typ de tekst over. Je ziet je WPM, nauwkeurigheid en fouten. De klok start bij je eerste aanslag, niet met een knop.',
  durationAria: 'Duur van de test',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Actueel resultaat',
  stats: { time: 'Tijd', wpm: 'WPM', accuracy: 'Nauwkeurigheid', errors: 'Fouten', consistency: 'Regelmaat' },
  promptAria: 'De tekst om over te typen',
  inputLabel: 'Begin hier met typen',
  soundTitle: 'Klikgeluid bij elke toets (Alt+S)',
  soundLabel: 'Toetsklik',
  placeholder: 'Klik hier en begin met typen...',
  restart: 'Opnieuw',
  wpmNote: 'WPM telt de getypte tekens, gedeeld door vijf, per minuut typtijd. Keer vijf geeft dat ongeveer je aanslagen per minuut.',
  result: { title: 'Je resultaat' },
  progress: {
    eyebrow: 'Oefenlogboek', title: 'Je voortgang', rangeAria: 'Periode', days: n => `${n} dagen`,
    metricAria: 'Waarde in de grafiek', note: 'De resultaten kunnen uit tests van verschillende duur komen.',
    summaryAria: 'Samenvatting van je voortgang', avgWpm: 'Gemiddelde WPM', bestWpm: 'Beste WPM',
    avgAccuracy: 'Gemiddelde nauwkeurigheid', count: 'Tests', chartAria: 'Voortgangsgrafiek'
  },
  sections: [
    {
      h2: 'Zo werkt de typetest',
      html: '<p>Bovenaan staat een Nederlandse tekst met hoofdletters, leestekens en af en toe een letter met accent. Je typt hem in de gekozen tijd zo nauwkeurig mogelijk over. Elk teken wordt meteen vergeleken met het voorbeeld: goede tekens blijven rustig staan, foute worden gemarkeerd. Met de Backspace-toets kun je fouten verbeteren zolang de tijd loopt.</p><p>In Nederland typen de meeste mensen op een QWERTY-toetsenbord, meestal ingesteld op <em>Verenigde Staten (internationaal)</em>, soms op de Nederlandse indeling. De letters staan in beide gevallen op dezelfde plek, alleen een paar leestekens verschillen. Kijk dus even welke indeling je gebruikt voordat je begint.</p>'
    },
    {
      h2: 'WPM, woorden per minuut en aanslagen',
      html: '<p><em>WPM</em> staat voor <em>words per minute</em>, in het Nederlands woorden per minuut. Omdat woorden verschillend lang zijn, telt een woord hier altijd als vijf tekens, spaties en leestekens meegerekend. Zo kun je resultaten vergelijken, ook als de ene tekst lange woorden heeft en de andere korte. Dat is handig in het Nederlands, waar samenstellingen als <em>kruiswoordpuzzel</em> of <em>onderhoudsbeurt</em> gewoon zijn.</p><p>Op school en bij typecursussen hoor je ook vaak <em>aanslagen per minuut</em>. De omrekening is eenvoudig: WPM keer vijf is ongeveer het aantal aanslagen per minuut. 40 WPM komt dus neer op zo\'n 200 aanslagen.</p>'
    },
    {
      h2: 'Accenten, hoofdletters en je toetsenbord',
      html: '<p>Nederlands heeft weinig accenten, maar ze komen voor: <em>één</em>, <em>café</em>, <em>ideeën</em>. Je typt ze met een dode toets. Op de indeling Verenigde Staten (internationaal) typ je eerst de apostrof en dan de e voor é, of het aanhalingsteken en dan de e voor ë. Op de Nederlandse indeling hebben het accent en het trema een eigen toets rechts van de letters. Zo\'n letter telt als één teken, ook al druk je twee toetsen in. Hetzelfde geldt voor een hoofdletter met Shift.</p><p>Let op met de internationale indeling: een apostrof of aanhalingsteken wacht op de volgende toets. Wil je het teken los typen, druk dan daarna op de spatiebalk. Wie dat vergeet, krijgt een letter met accent waar een gewone letter hoort, en dat telt als een fout. De teksten in deze test gebruiken daarom maar zelden een accent.</p>'
    },
    {
      h2: '1, 5 of 10 minuten: welke duur past bij je?',
      html: '<p>Een test van een minuut of korter meet vooral je topsnelheid. Je kunt je volledig concentreren, vermoeidheid speelt nauwelijks mee, en één fout weegt zwaar door.</p><p>Vijf of tien minuten laten iets anders zien: je snelheid op lange afstand. Na een tijdje zakt je concentratie en worden je handen moe, en juist dan blijkt of je techniek houdt. Het resultaat ligt meestal iets lager dan bij de korte test en komt dichter bij wat je echt haalt als je een lange e-mail of een verslag schrijft. Vergelijk jezelf daarom altijd met dezelfde duur, anders vergelijk je een sprint met een duurloop.</p>'
    },
    {
      h2: 'Nauwkeurigheid goed lezen',
      html: '<p>De nauwkeurigheid is het deel van de getypte tekens dat klopt met het voorbeeld. Het aantal fouten ernaast laat zien hoeveel tekens aan het eind nog verkeerd staan. WPM telt alle getypte tekens, ook de foute. Een hoge snelheid met veel fouten ziet er dus beter uit dan hij is.</p><p>Een ruwe vuistregel: zit je onder ongeveer 95 procent, ga dan wat langzamer. Elke fout kost in het dagelijks werk tijd om te verbeteren, en wie steeds naar Backspace grijpt, raakt zijn ritme kwijt. De regelmaat laat zien of je tempo tijdens de test gelijk blijft of sterk op en neer gaat.</p>'
    },
    {
      h2: 'Sneller typen: wat echt helpt',
      html: '<ul><li>Leer blind typen met tien vingers vanaf de thuisrij: links ASDF, rechts JKL en de toets ernaast, de duimen op de spatiebalk.</li><li>Kijk niet naar de toetsen. In het begin ga je langzamer, maar alleen zo wordt de weg naar elke toets vanzelf.</li><li>Oefen de leestekens en de dode toetsen apart, want daar gaat het bij de meeste mensen mis.</li><li>Oefen liever elke dag tien minuten dan een keer per week een uur.</li><li>Let eerst op nauwkeurigheid. De snelheid komt vanzelf als de bewegingen goed zitten.</li></ul><p>De <a class="inline-link" href="{course}">cursus met {lessons} lessen</a> leert je stap voor stap blind typen op het Nederlandse toetsenbord, van de thuisrij tot de leestekens.</p>'
    }
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    ['Wat betekent WPM?', 'WPM betekent woorden per minuut. Een woord telt als vijf tekens, spaties meegerekend. Zo zijn resultaten te vergelijken, hoe lang de woorden ook zijn.'],
    ['Hoe reken ik WPM om naar aanslagen per minuut?', 'Vermenigvuldig je WPM met vijf. 50 WPM is ongeveer 250 aanslagen per minuut.'],
    ['Telt een letter met accent als een teken?', 'Ja. Een é of ë telt als één teken, ook al typ je hem met een dode toets en dus met twee aanslagen. Een hoofdletter met Shift telt ook als één teken.'],
    ['Werkt de test met de indeling Verenigde Staten (internationaal)?', 'Ja. De letters staan op dezelfde plek als op de Nederlandse indeling. Let alleen op de apostrof en het aanhalingsteken: dat zijn dode toetsen, dus druk daarna op de spatiebalk als je het teken los wilt typen.'],
    ['Welke testduur moet ik kiezen?', 'Een minuut laat je topsnelheid zien, vijf of tien minuten je snelheid op lange afstand. Kies voor een vergelijking met eerdere resultaten steeds dezelfde duur.'],
    ['Worden mijn resultaten bewaard?', 'Alleen in je browser op dit apparaat. Er is geen account en je hoeft je niet aan te melden. Als je je browsergegevens wist, is ook je geschiedenis weg.']
  ],
  cta: { eyebrow: 'Sneller worden?', title: 'Leer blind typen', text: '{lessons} lessen op je eigen toetsenbord, te beginnen bij de thuisrij.', button: 'Naar de cursus' }
};
