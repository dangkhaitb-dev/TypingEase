/* tro-choi/text/fil.mjs — pahina ng mga laro sa pagta-type sa Filipino (scripts/build-game-pages.mjs). Ang
 * mga salita ay mula sa data/words/fil.js, ang parehong bangko ng kursong /fil/. Bố cục 117 = QWERTY Mỹ,
 * không phím chết, không có ñ: gõ thẳng. "Key", "space bar" để nguyên tiếng Anh như khoá học. */
export default {
  slug: 'laro-sa-pagta-type',
  title: 'Libreng laro sa pagta-type sa iyong keyboard | TypingEase',
  description: 'Tatlong libreng laro sa pagta-type: Ulan ng Salita, Karera ng Anino at Hanap-Key. Magsanay ng touch typing sa iyong keyboard sa browser, walang sign-up.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Pangunahing pahina',
  crumb: 'Mga laro sa pagta-type',
  eyebrow: 'Pagsasanay na parang laro',
  h1: 'Mga laro sa pagta-type',
  intro: 'Tatlong maikling laro sa pagitan ng mga aralin: burahin ang mga nahuhulog na salita, makipagkarera sa sarili mong bilis, at hanapin ang mga key sa keyboard sa screen. Sa device na ito lang naitatala ang pinakamataas mong iskor.',
  tabsAria: 'Pumili ng laro',
  locale: 'fil-PH',
  howAria: 'Paano maglaro',
  how: {
    rain: ['Nahuhulog ang mga salita mula sa itaas.', 'I-type ang salita nang eksakto.', 'Pindutin ang space bar para burahin ito. Tatlong makalusot, tapos na.'],
    race: ['Pumili ng bilis ng pace car.', 'I-type ang talata mula sa unang titik.', 'Abutin ang bandila bago ang pace car.'],
    keys: ['May isang key na umiilaw sa keyboard.', 'Sa screen ang tingin, saka pindutin ito.', 'Pindutin ang pinakamarami sa loob ng 60 segundo.']
  },
  modes: {
    rain: ['Ulan ng Salita', 'I-type ang nahuhulog na salita at pindutin ang space bar para burahin ito.'],
    race: ['Karera ng Anino', 'Tapusin ang talata bago ang pace car.'],
    keys: ['Hanap-Key', 'Pindutin ang umiilaw na key, pinakamarami sa loob ng 60 segundo.']
  },
  rain: {
    difficulty: 'Antas', easy: 'Madali', normal: 'Katamtaman', hard: 'Mahirap',
    score: 'Iskor', level: 'Yugto', lives: 'Buhay', best: 'Pinakamataas',
    start: 'Simulan', placeholder: 'I-type ang nahuhulog na salita, saka space bar',
    hint: 'Kapag tatlong salita ang umabot sa ibaba, tapos na ang laro. Walang tuldik o ñ: diretsong tinitipa ang bawat salita.'
  },
  race: {
    pace: 'Pace car', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Simulan ang karera', you: 'Ikaw', ghost: 'Pace', placeholder: 'I-type ang talata sa itaas, mula sa unang titik'
  },
  keys: {
    start: 'Simulan ang paghahanap', time: 'Segundo', hits: 'Tama', streak: 'Sunod-sunod', best: 'Pinakamataas',
    hint: 'Sa screen ang tingin, hindi sa kamay. Kinikilala ang mga key ayon sa posisyon, kaya gumagana ang anumang layout ng system.'
  },
  runtime: {
    over: 'Tapos na ang laro', again: 'Maglaro ulit', newBest: 'Bagong pinakamataas sa device na ito!',
    rainResult: '{score} puntos · {words} salitang nabura · {wpm} WPM · {accuracy}% tumama',
    raceReady: 'Tumatakbo ang pace car nang {wpm} WPM. Pindutin ang "Simulan ang karera", saka i-type ang unang titik para umalis.',
    raceGo: 'Takbo!', raceWin: 'Nauna ka!', raceLose: 'Ang pace car ang nanalo ngayon.',
    racePaused: 'Huminto. Pindutin ang "Simulan ang karera" para ulitin.',
    raceResult: '{seconds} segundo · {wpm} WPM · {accuracy}% katumpakan · pace car {ghost} WPM',
    paceBest: 'Pinakamabilis mo ({wpm} WPM)',
    keysResult: '{hits} tama · pinakamahabang sunod-sunod {streak} · {accuracy}% katumpakan'
  },
  sections: [
    { h2: 'Tatlong laro, iisang kasanayan', html: '<p>Bawat laro ay nagsasanay ng isang bahagi ng touch typing. Sa <b>Hanap-Key</b>, sinasanay kung nasaan ang bawat key: sinasabi ng umiilaw na key kung aling daliri ang gagalaw, nang hindi tumitingin sa ibaba. Sa <b>Ulan ng Salita</b>, sinasanay ang pagta-type ng buong salita habang may oras na humahabol. Sa <b>Karera ng Anino</b>, sinasanay ang pantay na ritmo sa buong talata, laban sa pace car na nasa bilis na pinili mo.</p>' },
    { h2: 'Sa sarili mong keyboard layout', html: '<p>Ang keyboard sa screen ng Hanap-Key ay ang layout ng kurso mo, ang Filipino, na kapareho ng American QWERTY key por key. Kinikilala ang mga key ayon sa pisikal na puwesto nito, hindi sa character na tinitipa ng system. Ang Ulan ng Salita at Karera ng Anino ay gumagamit ng parehong mga salita ng <a class="inline-link" href="{course}">kursong may {lessons} aralin</a>.</p>' },
    { h2: 'Paano ito mapapakinabangan', html: '<ul><li>Maglaro pagkatapos ng isang aralin; sapat na ang lima hanggang sampung minuto.</li><li>Pumili ng antas kung saan tama ang karamihan ng mga salita mo, at bumaba kung palaging sumasablay.</li><li>Sa Karera ng Anino, itakda ang pace car nang medyo mas mabagal sa tunay mong bilis at taasan ito paglaon.</li><li>Para sa totoong sukat ng bilis, kunin ang mga pagsusulit na may oras sa <a class="inline-link" href="{test}">kurso</a>, hindi ang laro.</li></ul>' }
  ],
  faqTitle: 'Mga karaniwang tanong',
  faq: [
    ['Puwede ba akong makipaglaro sa ibang tao?', 'Hindi pa. Ang Karera ng Anino ay laban sa pace car na nananatili sa bilis na pinili mo, o sa sarili mong pinakamabilis. Walang ibang manlalaro at walang leaderboard.'],
    ['Saan naitatala ang pinakamataas kong iskor?', 'Sa browser na ito lang, sa device na ito. Walang account, at walang ipinapadala kahit saan.'],
    ['Puwede ba itong laruin sa phone?', 'Gumagana ang Ulan ng Salita at Karera ng Anino sa keyboard ng phone. Kailangan ng Hanap-Key ang totoong keyboard, dahil itinuturo nito kung nasaan ang mga key.'],
    ['Bakit hindi nabura ang tamang salita?', 'Dapat eksaktong tugma ito bago mo pindutin ang space bar. Tingnan kung may napasamang malaking titik o may nawawalang titik.']
  ],
  cta: { eyebrow: 'Gusto mong gumaling sa laro?', title: 'Matutong mag-touch type', text: '{lessons} aralin sa sarili mong keyboard layout, simula sa gitnang hanay.', button: 'Tingnan ang kurso' }
};
