/* content/games/pl.mjs — polska strona z grami do pisania (tooling/pages/games.mjs). Słowa pochodzą
 * z data/words/pl.js, tej samej listy co kurs na układzie Polski (programisty). Kurs nie uczy AltGr,
 * ale w grach pojawiają się też słowa z ą ć ę ł ń ó ś ź ż, więc wskazówka mówi, jak je wpisać. */
export default {
  worlds: {"rain": "Ogród świetlików", "race": "Tor o zachodzie słońca", "keys": "Stacja kosmiczna"},
  slug: 'gry-do-pisania',
  title: 'Darmowe gry do pisania na klawiaturze | TypingEase',
  description: 'Trzy darmowe gry do pisania na klawiaturze: Deszcz słów, Wyścig z duchem i Polowanie na klawisze. Ćwicz pisanie bezwzrokowe w przeglądarce, bez konta.',
  breadcrumbAria: 'Ścieżka nawigacji',
  homeCrumb: 'Strona główna',
  crumb: 'Gry do pisania',
  eyebrow: 'Ćwiczenie, które przypomina zabawę',
  h1: 'Gry do pisania',
  intro: 'Trzy krótkie gry między lekcjami: zbijaj spadające słowa, ścigaj się z własnym tempem i szukaj klawiszy na klawiaturze na ekranie. Najlepsze wyniki zostają na tym urządzeniu.',
  tabsAria: 'Wybierz grę',
  locale: 'pl-PL',
  howAria: 'Jak grać',
  how: {
    rain: ['Słowa spadają z góry.', 'Wpisz słowo dokładnie tak, jak jest napisane.', 'Naciśnij Spację, żeby je zbić. Trzy pominięte i koniec gry.'],
    race: ['Wybierz prędkość samochodu tempa.', 'Pisz tekst od pierwszej litery.', 'Dojedź do flagi przed samochodem tempa.'],
    keys: ['Na klawiaturze zapala się klawisz.', 'Patrz na ekran i naciśnij go.', 'Traf jak najwięcej w 60 sekund.']
  },
  modes: {
    rain: ['Deszcz słów', 'Wpisz spadające słowo i naciśnij Spację, żeby je zbić.'],
    race: ['Wyścig z duchem', 'Skończ tekst, zanim zrobi to samochód tempa.'],
    keys: ['Polowanie na klawisze', 'Trafiaj w podświetlony klawisz, jak najwięcej razy w 60 sekund.']
  },
  rain: {
    difficulty: 'Poziom', easy: 'Łatwy', normal: 'Średni', hard: 'Trudny',
    score: 'Wynik', level: 'Etap', lives: 'Życia', best: 'Rekord',
    start: 'Start', placeholder: 'Wpisz spadające słowo, potem Spacja',
    hint: 'Polskie litery piszesz z prawym Altem (AltGr), na przykład AltGr + a daje ą, a AltGr + l daje ł. Trzy słowa na dole i gra się kończy.'
  },
  race: {
    pace: 'Samochód tempa', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Start wyścigu', you: 'Ty', ghost: 'Tempo', placeholder: 'Przepisz tekst powyżej, od pierwszej litery'
  },
  keys: {
    start: 'Zacznij polowanie', time: 'Sekundy', hits: 'Trafienia', streak: 'Seria', best: 'Rekord',
    hint: 'Patrz na ekran, nie na ręce. Klawisze są rozpoznawane po położeniu, więc działa każdy układ ustawiony w systemie.'
  },
  runtime: {
    over: 'Koniec gry', again: 'Zagraj jeszcze raz', newBest: 'Nowy rekord na tym urządzeniu',
    rainResult: '{score} pkt · zbite słowa: {words} · {wpm} WPM · celność {accuracy}%',
    raceReady: 'Samochód tempa jedzie z prędkością {wpm} WPM. Naciśnij „Start wyścigu”, a potem wpisz pierwszą literę, żeby ruszyć.',
    raceGo: 'Start!', raceWin: 'Wygrywasz: meta przed samochodem tempa.', raceLose: 'Tym razem wygrał samochód tempa.',
    racePaused: 'Zatrzymano. Naciśnij „Start wyścigu”, żeby zacząć od nowa.',
    raceResult: '{seconds} s · {wpm} WPM · dokładność {accuracy}% · samochód tempa {ghost} WPM',
    paceBest: 'Twój rekord ({wpm} WPM)',
    keysResult: 'Trafienia: {hits} · najdłuższa seria: {streak} · dokładność {accuracy}%'
  },
  sections: [
    { h2: 'Gry do pisania na klawiaturze: którą wybrać i po co', html: `<p>Każda z trzech gier sprawdza coś innego, więc wybieraj według tego, co cię dziś zatrzymuje, a nie według tego, która wygląda najładniej. Jeśli wciąż szukasz liter, otwórz <b>Polowanie na klawisze</b>: tam liczy się tylko to, czy palec trafia w miejsce. Jeśli litery już znasz, ale całe słowa rozsypują ci się pod presją, wybierz <b>Deszcz słów</b>. Jeśli słowa idą, ale w dłuższej linijce gubisz rytm, zagraj w <b>Wyścig z duchem</b>. Jedna gra na sesję wystarczy, jeśli wiesz, czego w niej szukasz.</p>
<p>Moim zdaniem gry najlepiej działają jako sprawdzian tego, co już zostało przećwiczone w lekcji. Nie nauczą cię, którym palcem wcisnąć AltGr, ani nie pokażą, że dłoń odjechała z rzędu podstawowego. Pokażą za to, co się dzieje z tymi ruchami, kiedy coś cię pogania. Dlatego najpierw lekcja, potem kilka rund, a nie odwrotnie. Rekordy zapisują się tylko w tej przeglądarce: nie ma konta, rankingu ani innych graczy.</p>` },
    { h2: 'Deszcz słów: polskie słowa z ogonkami pod presją czasu', html: `<p>Słowa spadają z góry. Wpisz jedno z nich i zatwierdź Spacją albo Enterem. Liczy się tylko całe słowo, które jeszcze jest na ekranie; trzy słowa, które dotkną dna, kończą rundę. Poziom ustawia długość słów: na łatwym mają od dwóch do pięciu liter, na średnim do ośmiu, a na trudnym mogą być dowolnie długie. Co osiem zbitych słów rośnie etap, a słowa spadają szybciej.</p>
<p>Słowa pochodzą z tej samej listy co kurs, są pisane małymi literami i bez interpunkcji. Mniej więcej co piąte zawiera polską literę, na przykład „jadł”, „skład” albo „kiedyś”. Słowo bez ogonka nie zostanie zaliczone, a nieudana próba czyści pole, więc „lad” zamiast „ład” kosztuje cię czas, a czasem życie.</p>
<h3>Na co patrzeć w tej grze</h3>
<p>Obserwuj, czy pomyłki dotyczą tych samych liter. Jeśli gubisz głównie ł i ś, to nie kwestia tempa, tylko AltGr puszczonego za wcześnie. Punkty to liczba liter pomnożona przez etap, więc długie słowa w późnych etapach dają najwięcej, ale też najłatwiej w nich o brakujący ogonek. Na trudnym poziomie nie warto zaczynać, dopóki na średnim większość słów nie znika przed połową ekranu.</p>` },
    { h2: 'Wyścig z duchem: wyścig z własnym tempem, nie z ludźmi', html: `<p>Wyścig z duchem to gra dla jednej osoby. „Duch” to samochód tempa, który jedzie równo z wybraną prędkością: 20, 30, 40, 60 albo 80 WPM. Możesz też wybrać swój rekord; jeśli jeszcze go nie masz, samochód rusza z 30 WPM. Nikt po drugiej stronie nie pisze i nie ma tu tabeli wyników. To wyzwanie z samym sobą.</p>
<p>Tekst ma około 170 znaków i składa się ze słów od dwóch do dziewięciu liter z tej samej listy co kurs, także z polskimi literami. Wyścig startuje dopiero wtedy, gdy wpiszesz pierwszy znak, więc spokojnie połóż palce na f i j.</p>
<h3>Pierwszy błąd zatrzymuje samochód</h3>
<p>Twój samochód jedzie tak daleko, jak sięga poprawny początek tego, co wpisałeś. Jeśli w trzecim słowie zabrakło ogonka, kolejne poprawne słowa nic nie dadzą, dopóki nie wrócisz i nie poprawisz tamtej litery. W polskim tekście to najczęściej e zamiast ę na końcu słowa. Ustaw tempo, przy którym masz czas spojrzeć na tekst, i podnoś je dopiero wtedy, gdy kilka razy z rzędu dojedziesz pierwszy bez cofania się.</p>` },
    { h2: 'Polowanie na klawisze: rząd podstawowy i litery bez AltGr', html: `<p>Na klawiaturze na ekranie zapala się litera. Naciśnij ją na fizycznej klawiaturze i od razu szukaj następnej. Runda trwa 60 sekund; trafienia rosną, a błędny klawisz przerywa serię. Patrz na obie liczby: dużo trafień przy krótkich seriach znaczy, że zgadujesz.</p>
<p>Gra rozpoznaje klawisze po fizycznym położeniu, nie po znaku, który wpisuje system. Na układzie programisty celem są litery nadrukowane na klawiszach, czyli od a do z. Polskich liter tu nie ma, bo każda z nich to AltGr i litera podstawowa, a nie osobny klawisz. Polowanie ćwiczy więc to, na czym AltGr się opiera: pewne trafienie w a, s, e, o, l, z, x, c i n bez patrzenia.</p>
<h3>Miejsca, które warto obserwować</h3>
<p>Na układzie programisty litery leżą tak jak na klawiaturze angielskiej, więc problemem rzadko jest samo położenie, częściej zasięg. Zwróć uwagę na q, z i p pod małymi palcami oraz na pary b–n i t–y, w których dwa palce wskazujące spotykają się na środku klawiatury. Ta gra wymaga prawdziwej klawiatury; na telefonie nie zadziała.</p>` },
    { h2: 'Jak zamienić wynik gry w następną lekcję', html: `<p>Przed rundą wybierz jedno pytanie, na przykład: czy gubię ogonki, czy spacje, czy rytm pod koniec linijki? Po rundzie odpowiedz na nie, zanim naciśniesz „Zagraj jeszcze raz”. Wynik gry ma sens tylko wtedy, gdy wskazuje konkretną lekcję.</p>
<ul><li>Słowa w Deszczu słów odrzucane przez brak ogonka: wróć w <a class="inline-link" href="{course}">kursie ({lessons} lekcji)</a> do ostatnich lekcji części „Litery i AltGr”, a później do „Kontrast ź, ż, z” i „Kontrast ł, ó, ą” w części „Precyzja”.</li>
<li>Krótkie serie w Polowaniu na klawisze przy q, w, x czy b: powtórz lekcje „Klawisze l, q, w”, „Klawisze x, c, v” albo „Klawisze b, n, m”.</li>
<li>Samochód tempa wygrywa, choć słowa znasz: przyda się część „Rytm”, w której ćwiczysz równe tempo na spójnym tekście.</li></ul>
<p>Wyniki z gier nie nadają się do porównywania z testem. Deszcz słów liczy punkty za słowa, wyścig mierzy tempo na krótkim tekście, a do pomiaru szybkości pisania służy <a class="inline-link" href="{test}">test pisania</a>, z jednakową długością i tym samym rodzajem tekstu za każdym razem.</p>` }
  ],
  faqTitle: 'Częste pytania',
  faq: [
    ['Czy mogę grać z innymi ludźmi?', 'Jeszcze nie. Wyścig z duchem to wyścig z samochodem tempa, który trzyma wybraną prędkość albo twój własny rekord. Nie ma innych graczy ani rankingu.'],
    ['Gdzie są zapisane moje rekordy?', 'Tylko w tej przeglądarce na tym urządzeniu. Bez konta i nic nie jest nigdzie wysyłane.'],
    ['Czy mogę grać na telefonie?', 'Deszcz słów i Wyścig z duchem działają z klawiaturą telefonu. Polowanie na klawisze wymaga prawdziwej klawiatury, bo uczy, gdzie są klawisze.'],
    ['Dlaczego poprawne słowo nie zniknęło?', 'Musi się zgadzać dokładnie, zanim naciśniesz Spację. Sprawdź, czy nie ma przypadkowej wielkiej litery, brakującej litery albo litery bez ogonka, jeśli zabrakło AltGr.'],
    ['Dlaczego w Polowaniu na klawisze nie ma ą ani ł?', 'Gra wybiera litery nadrukowane na klawiszach, a na układzie programisty polskie litery nie mają własnych klawiszy: każda to AltGr i litera podstawowa. Ogonki ćwiczysz w Deszczu słów, w Wyścigu z duchem i w lekcjach kursu.'],
    ['Czy w grach są wielkie litery i interpunkcja?', 'Nie. Słowa w Deszczu słów i tekst w Wyścigu z duchem są pisane małymi literami, bez kropek i przecinków. Shift, wielkie polskie litery i znaki interpunkcyjne ćwiczysz w trzeciej części kursu.']
  ],
  cta: { eyebrow: 'Chcesz grać lepiej?', title: 'Naucz się pisać bezwzrokowo', text: '{lessons} lekcji na twoim własnym układzie klawiatury, od rzędu podstawowego.', button: 'Zobacz kurs' }
};
