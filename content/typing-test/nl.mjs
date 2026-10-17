/* content/typing-test/nl.mjs — chữ TĨNH của trang kiểm tra tốc độ gõ tiếng Hà Lan (/nl/typetest/),
 * cho tooling/pages/typing-tests.mjs (cùng hình dạng với mẫu tiếng Anh).
 * `{lessons}` = số bài của khoá chính tiếng Hà Lan, `{course}` = URL trang lộ trình của khoá đó.
 * Đợt 2: `live: false` — đã soạn sẵn, chưa xuất bản.
 */
export default {
  slug: 'typetest',
  title: 'Typetest online: typsnelheid testen | TypingEase',
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
      html: '<p><em>WPM</em> staat voor <em>words per minute</em>, in het Nederlands woorden per minuut. Omdat woorden verschillend lang zijn, telt een woord hier altijd als vijf tekens, spaties en leestekens meegerekend. Zo kun je resultaten vergelijken, ook als de ene tekst lange woorden heeft en de andere korte. Gebruikt een andere woorden per minuut test dezelfde regel, dan kun je dat getal dus naast dit resultaat leggen. Dat is handig in het Nederlands, waar samenstellingen als <em>kruiswoordpuzzel</em> of <em>onderhoudsbeurt</em> gewoon zijn.</p><p>Op school en bij typecursussen hoor je ook vaak <em>aanslagen per minuut</em>. De omrekening is eenvoudig: WPM keer vijf is ongeveer het aantal aanslagen per minuut. 40 WPM komt dus neer op zo\'n 200 aanslagen.</p>'
    },
    {
      h2: 'Accenten, hoofdletters en je toetsenbord',
      html: '<p>Nederlands heeft weinig accenten, maar ze komen voor: <em>één</em>, <em>café</em>, <em>ideeën</em>. Je typt ze met een dode toets. Op de indeling Verenigde Staten (internationaal) typ je eerst de apostrof en dan de e voor é, of het aanhalingsteken en dan de e voor ë. Op de Nederlandse indeling hebben het accent en het trema een eigen toets rechts van de letters. Zo\'n letter telt als één teken, ook al druk je twee toetsen in. Hetzelfde geldt voor een hoofdletter met Shift.</p><p>Let op met de internationale indeling: een apostrof of aanhalingsteken wacht op de volgende toets. Wil je het teken los typen, druk dan daarna op de spatiebalk. Wie dat vergeet, krijgt een letter met accent waar een gewone letter hoort, en dat telt als een fout. De teksten in deze test gebruiken daarom maar zelden een accent.</p>'
    },
    {
      h2: 'Typetest van 1 minuut, 5 of 10 minuten: welke duur past bij je?',
      html: '<p>Een minuut of korter meet vooral je topsnelheid: vermoeidheid speelt nauwelijks mee en één fout weegt zwaar door. Vijf of tien minuten tonen je snelheid op lange afstand, dichter bij een lange e-mail of een verslag, en dat resultaat ligt meestal iets lager. Vergelijk jezelf daarom altijd met dezelfde duur, anders vergelijk je een sprint met een duurloop.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Welke duur waarvoor</caption><thead><tr><th scope="col">Duur</th><th scope="col">Wanneer kiezen</th></tr></thead><tbody><tr><th scope="row">15 of 30 seconden</th><td>Om op te warmen of om één zwak punt te testen, zoals de losse apostrof op de internationale indeling.</td></tr><tr><th scope="row">Typetest 1 minuut</th><td>De standaard om dag na dag te vergelijken: kort genoeg om geconcentreerd te blijven, lang genoeg dat een rommelige start niet alles bepaalt.</td></tr><tr><th scope="row">2 of 3 minuten</th><td>De tussenstap als een minuut makkelijk gaat; in de regelmaat zie je de eerste concentratiedips.</td></tr><tr><th scope="row">Typetest 5 minuten</th><td>Ongeveer een lange e-mail: je ziet of je nauwkeurigheid overeind blijft als het tempo van het begin wegzakt.</td></tr><tr><th scope="row">Typetest 10 minuten</th><td>Een duurtest voor wie al blind typt; daarvoor meet hij vooral vermoeidheid.</td></tr></tbody></table></div>'
    },
    {
      h2: 'Nauwkeurigheid goed lezen',
      html: '<p>De nauwkeurigheid is het deel van de getypte tekens dat klopt met het voorbeeld. Het aantal fouten ernaast laat zien hoeveel tekens aan het eind nog verkeerd staan. WPM telt alle getypte tekens, ook de foute. Een hoge snelheid met veel fouten ziet er dus beter uit dan hij is.</p><p>Een ruwe vuistregel: zit je onder ongeveer 95 procent, ga dan wat langzamer. Elke fout kost in het dagelijks werk tijd om te verbeteren, en wie steeds naar Backspace grijpt, raakt zijn ritme kwijt. De regelmaat laat zien of je tempo tijdens de test gelijk blijft of sterk op en neer gaat.</p>'
    },
    {
      h2: 'Typetest voor beginners',
      html: '<p>Als je net begint, zou ik bij je eerste typetest de WPM even negeren en naar de regelmaat kijken. Wie gelijkmatig typt, ook al is het traag, heeft de toetsen al in de vingers. Wie in pieken typt en dan stilvalt, zoekt nog. Die regelmaat zegt mij meer over je volgende stap dan het getal ernaast.</p><ul><li>Kies 30 seconden of 1 minuut. Bij vijf of tien minuten meet je in het begin vooral vermoeidheid.</li><li>Typ je op Verenigde Staten (internationaal), oefen dan eerst een losse apostrof met de spatiebalk erachter. Een fout die de dode toets veroorzaakt, zegt niets over je typsnelheid, maar drukt wel je nauwkeurigheid.</li><li>Typ je nog met twee vingers, dan raad ik je aan eerst blind typen te oefenen in de <a class="inline-link" href="{course}">cursus</a>: {lessons} lessen, te beginnen bij de thuisrij.</li></ul>'
    },
    {
      h2: 'Na de test: wat je daarna oefent',
      html: '<ul><li>Leer blind typen met tien vingers vanaf de thuisrij: links ASDF, rechts JKL en de toets ernaast, de duimen op de spatiebalk.</li><li>Kijk niet naar de toetsen. In het begin ga je langzamer, maar alleen zo wordt de weg naar elke toets vanzelf.</li><li>Oefen de leestekens en de dode toetsen apart, want daar gaat het bij de meeste mensen mis.</li><li>Oefen liever elke dag tien minuten dan een keer per week een uur.</li><li>Let eerst op nauwkeurigheid. De snelheid komt vanzelf als de bewegingen goed zitten.</li></ul><p>Wil je gerichte typeoefeningen, dan leert de <a class="inline-link" href="{course}">cursus met {lessons} lessen</a> je stap voor stap blind typen op het Nederlandse toetsenbord, van de thuisrij tot de leestekens.</p><p>Een plan van tien minuten voor de apostrof, het trema en lange samenstellingen staat in onze gids over <a class="inline-link" href="/nl/sneller-typen/">sneller typen</a>.</p>'
    }
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    ['Wat betekent WPM?', 'WPM betekent woorden per minuut. Een woord telt als vijf tekens, spaties meegerekend. Zo zijn resultaten te vergelijken, hoe lang de woorden ook zijn.'],
    ['Geeft deze WPM test ook aanslagen per minuut?', 'Niet apart, maar je rekent het zelf om: vermenigvuldig je WPM met vijf. 50 WPM is ongeveer 250 aanslagen per minuut.'],
    ['Telt een letter met accent als een teken?', 'Ja. Een é of ë telt als één teken, ook al typ je hem met een dode toets en dus met twee aanslagen. Een hoofdletter met Shift telt ook als één teken.'],
    ['Werkt de test met de indeling Verenigde Staten (internationaal)?', 'Ja. De letters staan op dezelfde plek als op de Nederlandse indeling. Let alleen op de apostrof en het aanhalingsteken: dat zijn dode toetsen, dus druk daarna op de spatiebalk als je het teken los wilt typen.'],
    ['Welke testduur moet ik kiezen?', 'Een minuut laat je topsnelheid zien, vijf of tien minuten je snelheid op lange afstand. Kies voor een vergelijking met eerdere resultaten steeds dezelfde duur.'],
    ['Is dit een goede typetest voor kinderen?', 'Ja, het liefst samen met een volwassene. Er is geen aparte kindermodus en de teksten zijn gewone proza. Korte tests van 15 tot 60 seconden werken het best, en nauwkeurigheid telt meer dan snelheid.'],
    ['Worden mijn resultaten bewaard?', 'Alleen in je browser op dit apparaat. Er is geen account en je hoeft je niet aan te melden. Als je je browsergegevens wist, is ook je geschiedenis weg.']
  ],
  cta: { eyebrow: 'Sneller worden?', title: 'Leer blind typen', text: '{lessons} lessen op je eigen toetsenbord, te beginnen bij de thuisrij.', button: 'Naar de cursus' }
};
