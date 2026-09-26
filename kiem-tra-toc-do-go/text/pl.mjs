/* kiem-tra-toc-do-go/text/pl.mjs — statyczny tekst polskiej strony testu pisania (/pl/test-pisania/),
 * dla scripts/build-test-pages.mjs. `{lessons}` = liczba lekcji głównego kursu, `{course}` = jego URL.
 * Fala 2: `live: false` — strona przygotowana, publikacja później.
 */
export default {
  slug: 'test-pisania',
  title: 'Test pisania: sprawdź szybkość pisania online | TypingEase',
  description: 'Darmowy test pisania w przeglądarce: pisz przez 1, 5 lub 10 minut na polskiej klawiaturze i sprawdź WPM, dokładność oraz liczbę błędów. Bez logowania.',
  breadcrumbAria: 'Ścieżka nawigacji',
  homeCrumb: 'Start',
  crumb: 'Test pisania',
  eyebrow: 'Darmowy test pisania',
  h1: 'Test szybkości pisania',
  intro: 'Wybierz czas od 15 sekund do 10 minut i przepisz tekst. Zobaczysz WPM, dokładność i błędy. Zegar rusza przy pierwszym naciśnięciu klawisza, a nie po kliknięciu przycisku.',
  durationAria: 'Czas testu',
  durationLabel: seconds => (seconds < 60 ? `${seconds} s` : `${seconds / 60} min`),
  liveAria: 'Bieżący wynik',
  stats: { time: 'Czas', wpm: 'WPM', accuracy: 'Dokładność', errors: 'Błędy', consistency: 'Równomierność' },
  promptAria: 'Tekst do przepisania',
  inputLabel: 'Zacznij pisać tutaj',
  soundTitle: 'Klik klawiszy podczas pisania (lewy Alt+S)',
  soundLabel: 'Klik klawiszy',
  placeholder: 'Kliknij tutaj i zacznij pisać...',
  restart: 'Jeszcze raz',
  wpmNote: 'WPM to liczba wpisanych znaków podzielona przez pięć, na minutę pisania. Pomnożona przez pięć daje w przybliżeniu liczbę znaków na minutę.',
  result: { title: 'Twój wynik' },
  progress: {
    eyebrow: 'Dziennik ćwiczeń', title: 'Twoje postępy', rangeAria: 'Okres', days: n => `${n} ${n === 1 ? 'dzień' : 'dni'}`,
    metricAria: 'Wskaźnik na wykresie', note: 'Wyniki mogą pochodzić z testów o różnej długości.',
    summaryAria: 'Podsumowanie postępów', avgWpm: 'Średnie WPM', bestWpm: 'Najlepsze WPM',
    avgAccuracy: 'Średnia dokładność', count: 'Liczba testów', chartAria: 'Wykres postępów'
  },
  sections: [
    {
      h2: 'Jak działa test pisania',
      html: '<p>Na górze widzisz polski tekst z wielkimi literami, znakami interpunkcyjnymi i polskimi znakami diakrytycznymi. Przepisujesz go w wybranym czasie tak dokładnie, jak potrafisz. Każdy znak jest od razu porównywany z wzorem: poprawne zostają bez zmian, błędne są zaznaczane. Dopóki czas płynie, możesz poprawiać błędy klawiszem Backspace.</p><p>Test jest przygotowany pod układ <em>polski (programisty)</em>, czyli zwykłą klawiaturę QWERTY, na której polskie litery wpisuje się z prawym Altem. To domyślny układ w Polsce. Jeśli w systemie masz włączony rzadko używany układ maszynistki (QWERTZ) albo sam angielski, litery Z i Y mogą być zamienione, a ą czy ę w ogóle się nie pojawią. Sprawdź więc przed startem ustawienia klawiatury.</p>'
    },
    {
      h2: 'WPM, słowa i znaki na minutę',
      html: '<p><em>WPM</em> to skrót od angielskiego „words per minute”, czyli słowa na minutę. Ponieważ słowa mają różną długość, jedno słowo liczy się tu zawsze jako pięć znaków, łącznie ze spacjami i znakami interpunkcyjnymi. Dzięki temu wyniki da się porównywać bez względu na to, czy tekst ma krótkie, czy długie wyrazy. A w polszczyźnie długich wyrazów nie brakuje.</p><p>W Polsce szybkość pisania często podaje się też w <em>znakach na minutę</em>. Przeliczenie jest proste: WPM razy pięć daje mniej więcej liczbę znaków na minutę. 40 WPM to zatem około 200 znaków na minutę.</p>'
    },
    {
      h2: 'Jak liczą się ą, ę, ł, ż i inne polskie litery',
      html: '<p>W układzie programisty każdą polską literę wpisujesz, trzymając prawy Alt (AltGr) i naciskając literę podstawową: Alt+A daje ą, Alt+E daje ę, Alt+L daje ł, Alt+O daje ó. Dwie litery trzeba zapamiętać osobno: ż to Alt+Z, a ź to Alt+X. Wielkie Ą czy Ż wymagają jeszcze klawisza Shift. Mimo że naciskasz dwa albo trzy klawisze, każda taka litera liczy się jako jeden znak, tak samo jak zwykłe a czy s.</p><p>Litera bez ogonka jest błędem: kto wpisze „zolw” zamiast „żółw”, ma w tym słowie trzy pomyłki. To celowe, bo w prawdziwym pisaniu też chcesz trafiać polskie znaki bez zastanowienia. Najczęstsze potknięcia to pomylenie ż z ź oraz zbyt wczesne puszczenie Alta, przez co zamiast ś pojawia się s.</p>'
    },
    {
      h2: 'Test na 1, 5 czy 10 minut: który wybrać?',
      html: '<p>Test trwający minutę lub krócej mierzy przede wszystkim Twoje tempo szczytowe. Możesz się w pełni skupić, zmęczenie prawie nie gra roli, a pojedynczy błąd mocno wpływa na wynik.</p><p>Pięć lub dziesięć minut pokazuje coś innego: tempo, które potrafisz utrzymać. W pewnym momencie koncentracja słabnie, dłonie się męczą i właśnie wtedy widać, czy technika się sprawdza. Wynik jest zwykle trochę niższy niż w krótkim teście i bliższy temu, co naprawdę osiągasz, pisząc długiego maila albo sprawozdanie. Porównując się z samym sobą, wybieraj zawsze ten sam czas, inaczej zestawiasz sprint z biegiem na długi dystans.</p>'
    },
    {
      h2: 'Jak czytać dokładność',
      html: '<p>Dokładność to odsetek wpisanych znaków, które zgadzają się ze wzorem. Liczba błędów obok pokazuje, ile znaków na końcu nadal jest niepoprawnych. WPM liczy wszystkie wpisane znaki, także błędne, więc wysokie tempo przy wielu pomyłkach wygląda lepiej, niż jest w rzeczywistości.</p><p>Przyjmij prostą zasadę: jeśli dokładność spada poniżej mniej więcej 95 procent, warto zwolnić. Każdy błąd w codziennej pracy kosztuje czas na poprawkę, a ciągłe sięganie po Backspace wybija z rytmu. Równomierność pokazuje, czy Twoje tempo w trakcie testu jest stabilne, czy mocno się waha.</p>'
    },
    {
      h2: 'Jak pisać szybciej: co naprawdę pomaga',
      html: '<ul><li>Naucz się pisać bezwzrokowo dziesięcioma palcami, zaczynając od środkowego rzędu: lewa ręka na ASDF, prawa na JKL i średniku, kciuki na spacji.</li><li>Nie patrz na klawisze. Na początku zwolnisz, ale tylko tak droga do każdego klawisza staje się automatyczna.</li><li>Prawy Alt naciskaj kciukiem prawej ręki, a literę palcem, który i tak jest do niej przypisany. Wtedy polskie znaki nie wybijają dłoni z pozycji.</li><li>Ćwicz codziennie po dziesięć minut zamiast raz w tygodniu przez godzinę.</li><li>Najpierw dbaj o dokładność. Tempo przyjdzie, gdy ruchy się utrwalą.</li></ul><p><a class="inline-link" href="{course}">Kurs z {lessons} lekcjami</a> prowadzi krok po kroku przez polską klawiaturę, od środkowego rzędu aż po polskie znaki.</p>'
    }
  ],
  faqTitle: 'Częste pytania',
  faq: [
    ['Co oznacza WPM?', 'WPM to słowa na minutę (ang. words per minute). Jedno słowo liczy się jako pięć znaków, łącznie ze spacjami. Dzięki temu wyniki można porównywać niezależnie od długości wyrazów.'],
    ['Jak przeliczyć WPM na znaki na minutę?', 'Pomnóż wynik WPM przez pięć. 50 WPM to w przybliżeniu 250 znaków na minutę.'],
    ['Czy ą, ę albo ż liczą się jako jeden znak?', 'Tak. Każda polska litera to jeden znak, choć wpisujesz ją z prawym Altem, a wielką literę dodatkowo z Shiftem. Litera bez ogonka lub kreski, na przykład z zamiast ż, liczy się jako błąd.'],
    ['Jaki czas testu wybrać?', 'Minuta pokazuje Twoje tempo szczytowe, pięć lub dziesięć minut tempo, które utrzymujesz dłużej. Porównując wyniki z wcześniejszymi, wybieraj zawsze ten sam czas.'],
    ['Czy moje wyniki są zapisywane?', 'Tylko w Twojej przeglądarce na tym urządzeniu. Nie ma konta ani logowania. Jeśli usuniesz dane przeglądarki, historia również zniknie.'],
    ['Czy test działa z układem maszynistki?', 'Tak, bo liczą się wpisane znaki, a nie naciśnięte klawisze. Ułożenie liter jest tam jednak inne (QWERTZ), a wskazówki na tej stronie zakładają układ programisty, najczęściej używany w Polsce. Dla układu maszynistki jest osobna wersja kursu.']
  ],
  cta: { eyebrow: 'Chcesz pisać szybciej?', title: 'Naucz się pisać bezwzrokowo', text: 'Lekcje na Twojej własnej klawiaturze, od środkowego rzędu po polskie znaki. Liczba lekcji: {lessons}.', button: 'Przejdź do kursu' }
};
