/* content/games/sw.mjs — ukurasa wa michezo ya kuandika kwa Kiswahili (tooling/pages/games.mjs).
 * Maneno yanatoka data/words/sw.js, benki ileile ya kozi ya /sw/. Bố cục 118 = QWERTY Mỹ, không phím
 * chết: gõ thẳng. Thuật ngữ theo data/courses/sw.js (kitufe/vitufe, kibodi, kitufe cha nafasi). */
export default {
  worlds: {"rain": "Bustani ya vimulimuli", "race": "Uwanja wa mbio wakati wa machweo", "keys": "Kituo cha anga"},
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
    { h2: 'Michezo ya kuandika bure (typing game): chagua kulingana na kinachokukwamisha', html: `<p>Michezo mitatu iliyo juu inapima mambo matatu tofauti. Windo la Vitufe linauliza kama unajua herufi fulani iko wapi. Mvua ya Maneno inauliza kama unaweza kumaliza neno la Kiswahili kabla halijafika chini. Mbio za Kivuli zinauliza kama unaweza kushika mdundo katika mstari mzima wa maneno.</p>
<p>Chagua mchezo ulio karibu zaidi na tatizo lako la sasa. Kama macho bado yanashuka kwenye kibodi, anza na Windo la Vitufe. Kama herufi unazijua lakini unakwama unapoziunganisha, jaribu Mvua ya Maneno. Kama maneno yanakwenda vizuri lakini mdundo unapotea katikati ya mstari, tumia Mbio za Kivuli. Hakuna akaunti inayohitajika, na huhitaji kumaliza kozi ili kucheza.</p>
<p>Msimamo wangu: michezo si njia ya siri ya kuandika haraka. Alama zikipanda baada ya mizunguko kumi, mara nyingi ni kwa sababu umeuzoea mchezo, si kwamba vidole vyako vimebadilika. Thamani halisi ya mzunguko mmoja ni kwamba unaonyesha haraka mahali unapokwama; unachofanya na habari hiyo baadaye ni muhimu kuliko rekodi mpya.</p>` },
    { h2: 'Mvua ya Maneno: maneno ya Kiswahili, pamoja na yenye apostrofi', html: `<p>Chagua Rahisi, Wastani au Kigumu, kisha anza. Andika neno linaloanguka na ubonyeze kitufe cha nafasi; Enter pia inafanya kazi. Kila neno linalofika chini linachukua maisha moja, na mzunguko unaisha maisha matatu yakiisha. Kila maneno manane yanapofutwa, hatua inapanda na maneno yanaanguka kwa kasi zaidi, kwa hiyo mzunguko ulioanza kwa urahisi unakuwa mgumu wenyewe.</p>
<p>Kiwango kinabadilisha urefu wa maneno. Rahisi hutumia maneno ya hadi herufi tano, Wastani hadi nane, na Kigumu benki nzima ya maneno. Maneno yote ni ya herufi ndogo, bila herufi kubwa wala alama za uakifishaji, isipokuwa apostrofi. Hata kwenye Rahisi unaweza kukutana na <em>ng'aa</em> au <em>ng'oa</em>; kwenye Wastani <em>ng'ombe</em> na <em>ng'ambo</em>; na kwenye Kigumu <em>ng'ang'ania</em>, yenye apostrofi mbili.</p>
<h3>Usiruke apostrofi</h3>
<p>Apostrofi iko chini ya kidole kidogo cha kulia, karibu na Enter. Ukiiruka, <em>ngombe</em> haitalingana na neno lolote na kile ulichoandika kitafutika. Soma neno zima kabla ya kuanza, na usihamie neno lingine katikati.</p>
<p>Alama hutolewa kwa urefu wa neno ukizidishwa na hatua. Linganisha alama na mizunguko ya kiwango kilekile tu.</p>` },
    { h2: 'Mbio za Kivuli: shindana na kasi uliyoichagua mwenyewe', html: `<p>Mbio za Kivuli ni mchezo wa mchezaji mmoja. Gari la mwendo lililo kando yako si mtu mwingine mtandaoni, na si marudio ya mibonyezo yako ya zamani. Linakwenda kwa kasi isiyobadilika uliyoichagua, kuanzia 20 hadi 80 WPM, au kwa rekodi yako mwenyewe ya mbio. Kama bado huna rekodi, chaguo hilo linaanza kwa 30 WPM, na rekodi iliyo chini ya 15 WPM huhesabiwa kama 15.</p>
<p>Bonyeza Anza mbio. Gari linasogea tu unapoandika herufi ya kwanza, kwa hiyo una muda wa kuweka vidole kwenye safu ya msingi. Kifungu hujengwa kwa maneno ya Kiswahili ya herufi mbili hadi tisa yaliyochaguliwa bila mpangilio, yakitenganishwa kwa nafasi, bila herufi kubwa wala nukta. Maneno kama <em>ng'ombe</em> au <em>ning'inia</em> yanaweza kujitokeza. Si sentensi unayoweza kubashiri; lazima uisome.</p>
<h3>Sahihisha kosa la kwanza</h3>
<p>Gari lako linasonga kulingana na mwanzo sahihi wa ulichoandika. Herufi moja ikikosewa mapema, kuongeza herufi sahihi baada yake hakutalisogeza gari. Tafuta kosa la kwanza, lifute kwa Backspace, kisha endelea. Kama unashindwa vibaya kila mara, punguza kasi; ukishinda kwa urahisi mara tatu mfululizo, panda hatua moja. Tumia kasi isiyobadilika unapotaka kulinganisha mizunguko kadhaa kwa haki.</p>` },
    { h2: 'Windo la Vitufe: mazoezi ya kibodi (keyboard practice) kwa herufi 26', html: `<p>Kitufe kimoja kinawaka kwenye kibodi ya skrini. Bonyeza kitufe halisi kilicho mahali palepale, kisha tafuta lengo linalofuata. Mzunguko mmoja ni sekunde 60. Kila mbonyezo sahihi unaongeza Mapigo, na kitufe kisicho sahihi kinavunja Mfululizo. Angalia namba zote mbili: mapigo mengi yenye mfululizo mfupi mara nyingi yanamaanisha unabahatisha.</p>
<p>Windo la Vitufe linasoma mahali kitufe kilipo kwenye kibodi, si herufi ambayo mfumo unaitoa, kwa hiyo mpangilio wa kompyuta yako haujalishi hapa. Malengo ni herufi za safu kuu za mpangilio wa kozi tu, a hadi z. Nukta-mkato, apostrofi, nambari na alama hazijitokezi. Mchezo huu unahitaji kibodi halisi; haufanyi kazi na kibodi ya skrini ya simu.</p>
<h3>Herufi zote zina nafasi sawa</h3>
<p>Windo la Vitufe huchagua kila moja ya herufi 26 kwa nafasi sawa, hata q na x ambazo karibu hazitumiki katika Kiswahili. Kwa hiyo usihuzunike ukikosa q mara mbili; zingatia makosa kwenye herufi unazoziandika kila siku, kama a, i, u na k. Mchezo unajua tu kitufe kilichobonyezwa; haujui ulitumia kidole kipi wala kama ulitazama chini. Hilo ni jukumu lako kuliangalia.</p>` },
    { h2: 'Kutoka matokeo ya mchezo hadi somo linalofuata', html: `<p>Kabla ya kucheza, chagua swali moja. Je, napoteza mahali baada ya safu ya chini? Nasahau kitufe cha nafasi? Naendelea kuandika baada ya herufi isiyo sahihi? Baada ya mzunguko, jibu swali hilo kabla ya kubonyeza Cheza tena. Dokezo kama "nachelewa kwenye b na n" linaweza kufanyiwa mazoezi. "Alama zinapaswa kupanda" halisemi chochote.</p>
<p>Kisha linganisha dokezo hilo na kitengo cha <a class="inline-link" href="{course}">kozi ya masomo {lessons}</a>. Kama Windo la Vitufe linaonyesha safu ya chini ina shida, rudia masomo ya z, x, c na v, b, n katika kitengo cha kwanza. Kama Mvua ya Maneno inakwama kwenye apostrofi, somo la alama . , ' katika kitengo cha Herufi Kubwa na Uakifishaji ndilo linaloifundisha. Kama Mbio za Kivuli hukwama kila mara kwenye kosa la mapema, tatizo ni usahihi, si kasi.</p>
<p>Kwa kipimo cha kasi kinachoweza kulinganishwa, tumia <a class="inline-link" href="{test}">jaribio la kuandika</a> kwa muda uleule kila mara. WPM ya Mvua ya Maneno, ya Mbio za Kivuli na ya jaribio hupima kazi tofauti, kwa hiyo usizilinganishe. Rekodi za michezo huhifadhiwa kwenye kivinjari hiki tu, tofauti kwa kila lugha, na zinaweza kupotea data ya tovuti ikifutwa.</p>` }
  ],
  faqTitle: 'Maswali ya kawaida',
  faq: [
    ['Naweza kucheza dhidi ya watu wengine?', 'Bado. Mbio za Kivuli ni dhidi ya gari la mwendo linaloshika kasi uliyochagua, au rekodi yako mwenyewe. Hakuna wachezaji wengine na hakuna jedwali la washindi.'],
    ['Alama zangu bora zinahifadhiwa wapi?', 'Kwenye kivinjari hiki tu, katika kifaa hiki. Hakuna akaunti, na hakuna kinachotumwa popote.'],
    ['Naweza kucheza kwenye simu?', 'Mvua ya Maneno na Mbio za Kivuli zinafanya kazi na kibodi ya simu. Windo la Vitufe linahitaji kibodi halisi, kwa sababu linafundisha mahali vitufe vilipo.'],
    ['Kwa nini neno sahihi halikufutika?', 'Lazima lilingane kabisa kabla ya kubonyeza kitufe cha nafasi. Angalia herufi kubwa iliyoingia kimakosa au herufi iliyokosekana.'],
    ['Kuna tofauti gani kati ya Rahisi, Wastani na Kigumu katika Mvua ya Maneno?', 'Rahisi hutumia maneno ya hadi herufi tano na maneno huanguka polepole zaidi, Wastani hadi herufi nane, na Kigumu maneno yote kwa kasi kubwa zaidi. Katika viwango vyote, hatua hupanda kila maneno manane yanapofutwa.'],
    ["Kwa nini ng'ombe haikufutika?", "Apostrofi ni sehemu ya neno. Andika ng'ombe pamoja na apostrofi; ngombe haitalingana. Kama apostrofi haitokei mara moja, huenda kompyuta iko kwenye mpangilio wa US-International, ambapo apostrofi husubiri herufi inayofuata."]
  ],
  cta: { eyebrow: 'Unataka kucheza vizuri zaidi?', title: 'Jifunze kuandika kwa vidole kumi', text: 'Masomo {lessons} kwenye mpangilio wa kibodi yako, kuanzia safu ya msingi.', button: 'Tazama kozi' }
};
