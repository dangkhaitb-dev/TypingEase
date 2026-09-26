/* tro-choi/text/sw.mjs — ukurasa wa michezo ya kuandika kwa Kiswahili (scripts/build-game-pages.mjs).
 * Maneno yanatoka data/words/sw.js, benki ileile ya kozi ya /sw/. Bố cục 118 = QWERTY Mỹ, không phím
 * chết: gõ thẳng. Thuật ngữ theo data/courses/sw.js (kitufe/vitufe, kibodi, kitufe cha nafasi). */
export default {
  live: false,
  slug: 'michezo-ya-kuandika',
  title: 'Michezo ya kuandika bure kwenye kibodi yako | TypingEase',
  description: 'Michezo mitatu ya kuandika bure: Mvua ya Maneno, Mbio za Kivuli na Windo la Vitufe. Jifunze kuandika kwa vidole kumi kwenye kibodi yako, bila kujisajili.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Ukurasa mkuu',
  crumb: 'Michezo ya kuandika',
  eyebrow: 'Mazoezi yanayohisi kama mchezo',
  h1: 'Michezo ya kuandika',
  intro: 'Michezo mitatu mifupi ya kucheza kati ya masomo: futa maneno yanayoanguka, shindana na kasi yako mwenyewe, na winda vitufe kwenye kibodi ya skrini. Alama zako bora zinahifadhiwa kwenye kifaa hiki tu.',
  tabsAria: 'Chagua mchezo',
  locale: 'sw-KE',
  howAria: 'Jinsi ya kucheza',
  how: {
    rain: ['Maneno yanaanguka kutoka juu.', 'Andika neno hilo sawasawa.', 'Bonyeza kitufe cha nafasi kulifuta. Ukikosa matatu, mchezo umekwisha.'],
    race: ['Chagua kasi ya gari la mwendo.', 'Andika kifungu kuanzia herufi ya kwanza.', 'Fika kwenye bendera kabla ya gari la mwendo.'],
    keys: ['Kitufe kimoja kinawaka kwenye kibodi.', 'Macho kwenye skrini, kisha kibonyeze.', 'Bonyeza vingi uwezavyo ndani ya sekunde 60.']
  },
  modes: {
    rain: ['Mvua ya Maneno', 'Andika neno linaloanguka na ubonyeze kitufe cha nafasi kulifuta.'],
    race: ['Mbio za Kivuli', 'Maliza kifungu kabla ya gari la mwendo.'],
    keys: ['Windo la Vitufe', 'Bonyeza kitufe kinachowaka, mara nyingi uwezavyo ndani ya sekunde 60.']
  },
  rain: {
    difficulty: 'Kiwango', easy: 'Rahisi', normal: 'Wastani', hard: 'Kigumu',
    score: 'Alama', level: 'Hatua', lives: 'Maisha', best: 'Bora',
    start: 'Anza', placeholder: 'Andika neno linaloanguka, kisha nafasi',
    hint: 'Maneno matatu yakifika chini, mchezo umekwisha. Kiswahili hakina herufi zenye alama: kila neno linaandikwa moja kwa moja.'
  },
  race: {
    pace: 'Gari la mwendo', paces: [20, 30, 40, 60, 80], paceLabel: wpm => `${wpm} WPM`,
    start: 'Anza mbio', you: 'Wewe', ghost: 'Mwendo', placeholder: 'Andika kifungu kilicho juu, kuanzia herufi ya kwanza'
  },
  keys: {
    start: 'Anza kuwinda', time: 'Sekunde', hits: 'Mapigo', streak: 'Mfululizo', best: 'Bora',
    hint: 'Macho kwenye skrini, si mikononi. Vitufe vinatambuliwa kwa mahali vilipo, kwa hiyo mpangilio wowote wa mfumo unafanya kazi.'
  },
  runtime: {
    over: 'Mchezo umekwisha', again: 'Cheza tena', newBest: 'Rekodi mpya kwenye kifaa hiki!',
    rainResult: 'Alama {score} · maneno {words} yamefutwa · {wpm} WPM · {accuracy}% sahihi',
    raceReady: 'Gari la mwendo linakwenda {wpm} WPM. Bonyeza "Anza mbio", kisha andika herufi ya kwanza kuanza.',
    raceGo: 'Nenda!', raceWin: 'Umefika kwanza!', raceLose: 'Safari hii gari la mwendo limeshinda.',
    racePaused: 'Imesimama. Bonyeza "Anza mbio" kuanza tena.',
    raceResult: 'Sekunde {seconds} · {wpm} WPM · usahihi {accuracy}% · gari la mwendo {ghost} WPM',
    paceBest: 'Rekodi yako ({wpm} WPM)',
    keysResult: 'Mapigo {hits} · mfululizo mrefu zaidi {streak} · usahihi {accuracy}%'
  },
  sections: [
    { h2: 'Michezo mitatu, ujuzi mmoja', html: '<p>Kila mchezo unafunza sehemu moja ya kuandika kwa vidole kumi. <b>Windo la Vitufe</b> linafunza mahali kila kitufe kilipo: kitufe kinachowaka kinakuambia kidole kipi kisogee, bila kutazama chini. <b>Mvua ya Maneno</b> inafunza kuandika maneno kamili chini ya shinikizo la muda. <b>Mbio za Kivuli</b> zinafunza mdundo ulio sawa katika kifungu kizima, dhidi ya gari la mwendo lenye kasi uliyochagua.</p>' },
    { h2: 'Kwenye mpangilio wa kibodi yako', html: '<p>Kibodi ya skrini katika Windo la Vitufe ni mpangilio wa kozi yako, Swahili (Kenya), unaofanana kitufe kwa kitufe na QWERTY ya Marekani. Vitufe vinatambuliwa kwa mahali vilipo kwenye kibodi, si kwa herufi ambayo mfumo unaandika. Mvua ya Maneno na Mbio za Kivuli zinatumia maneno yaleyale ya <a class="inline-link" href="{course}">kozi ya masomo {lessons}</a>.</p>' },
    { h2: 'Jinsi ya kunufaika', html: '<ul><li>Cheza baada ya somo; dakika tano hadi kumi zinatosha.</li><li>Chagua kiwango ambapo maneno mengi unayapata sawa, na ushuke ukiendelea kukosa.</li><li>Katika Mbio za Kivuli, weka gari la mwendo chini kidogo ya kasi yako halisi na uiongeze polepole.</li><li>Kwa kipimo halisi cha kasi, fanya majaribio yenye muda ndani ya <a class="inline-link" href="{test}">kozi</a>, si mchezo.</li></ul>' }
  ],
  faqTitle: 'Maswali ya kawaida',
  faq: [
    ['Naweza kucheza dhidi ya watu wengine?', 'Bado. Mbio za Kivuli ni dhidi ya gari la mwendo linaloshika kasi uliyochagua, au rekodi yako mwenyewe. Hakuna wachezaji wengine na hakuna jedwali la washindi.'],
    ['Alama zangu bora zinahifadhiwa wapi?', 'Kwenye kivinjari hiki tu, katika kifaa hiki. Hakuna akaunti, na hakuna kinachotumwa popote.'],
    ['Naweza kucheza kwenye simu?', 'Mvua ya Maneno na Mbio za Kivuli zinafanya kazi na kibodi ya simu. Windo la Vitufe linahitaji kibodi halisi, kwa sababu linafundisha mahali vitufe vilipo.'],
    ['Kwa nini neno sahihi halikufutika?', 'Lazima lilingane kabisa kabla ya kubonyeza kitufe cha nafasi. Angalia herufi kubwa iliyoingia kimakosa au herufi iliyokosekana.']
  ],
  cta: { eyebrow: 'Unataka kucheza vizuri zaidi?', title: 'Jifunze kuandika kwa vidole kumi', text: 'Masomo {lessons} kwenye mpangilio wa kibodi yako, kuanzia safu ya msingi.', button: 'Tazama kozi' }
};
