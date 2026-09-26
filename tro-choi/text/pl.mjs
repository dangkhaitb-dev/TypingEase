/* tro-choi/text/pl.mjs — polska strona z grami do pisania (scripts/build-game-pages.mjs). Słowa pochodzą
 * z data/words/pl.js, tej samej listy co kurs na układzie Polski (programisty). Kurs nie uczy AltGr,
 * ale w grach pojawiają się też słowa z ą ć ę ł ń ó ś ź ż, więc wskazówka mówi, jak je wpisać. */
export default {
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
    { h2: 'Trzy gry, jedna umiejętność', html: '<p>Każda gra ćwiczy jedną część pisania bezwzrokowego. <b>Polowanie na klawisze</b> utrwala, gdzie jest każdy klawisz: podświetlony klawisz mówi, który palec ma się ruszyć, bez patrzenia w dół. <b>Deszcz słów</b> ćwiczy pisanie całych słów pod presją czasu. <b>Wyścig z duchem</b> ćwiczy równy rytm przez cały tekst, przeciwko samochodowi tempa ustawionemu na wybraną przez ciebie prędkość.</p>' },
    { h2: 'Na twoim własnym układzie klawiatury', html: '<p>Klawiatura na ekranie w Polowaniu na klawisze to układ Polski (programisty) z kursu, a klawisze są rozpoznawane po fizycznym położeniu, nie po znaku, który wpisuje system. Deszcz słów i Wyścig z duchem używają tych samych słów co <a class="inline-link" href="{course}">kurs z {lessons} lekcjami</a>, a do tego słów z polskimi literami, które piszesz z AltGr.</p>' },
    { h2: 'Jak wyciągnąć z tego korzyść', html: '<ul><li>Graj po lekcji; pięć do dziesięciu minut wystarczy.</li><li>Wybierz poziom, na którym większość słów wychodzi dobrze, i zejdź niżej, jeśli ciągle chybiasz.</li><li>W Wyścigu z duchem ustaw samochód tempa trochę poniżej swojej prawdziwej prędkości i podnoś go z czasem.</li><li>Do rzetelnego pomiaru prędkości użyj testów na czas z <a class="inline-link" href="{test}">kursu</a>, nie gry.</li></ul>' }
  ],
  faqTitle: 'Częste pytania',
  faq: [
    ['Czy mogę grać z innymi ludźmi?', 'Jeszcze nie. Wyścig z duchem to wyścig z samochodem tempa, który trzyma wybraną prędkość albo twój własny rekord. Nie ma innych graczy ani rankingu.'],
    ['Gdzie są zapisane moje rekordy?', 'Tylko w tej przeglądarce na tym urządzeniu. Bez konta i nic nie jest nigdzie wysyłane.'],
    ['Czy mogę grać na telefonie?', 'Deszcz słów i Wyścig z duchem działają z klawiaturą telefonu. Polowanie na klawisze wymaga prawdziwej klawiatury, bo uczy, gdzie są klawisze.'],
    ['Dlaczego poprawne słowo nie zniknęło?', 'Musi się zgadzać dokładnie, zanim naciśniesz Spację. Sprawdź, czy nie ma przypadkowej wielkiej litery, brakującej litery albo litery bez ogonka, jeśli zabrakło AltGr.']
  ],
  cta: { eyebrow: 'Chcesz grać lepiej?', title: 'Naucz się pisać bezwzrokowo', text: '{lessons} lekcji na twoim własnym układzie klawiatury, od rzędu podstawowego.', button: 'Zobacz kurs' }
};
