/* content/games/fil.mjs — pahina ng mga laro sa pagta-type sa Filipino (tooling/pages/games.mjs). Ang
 * mga salita ay mula sa data/words/fil.js, ang parehong bangko ng kursong /fil/. Bố cục 117 = QWERTY Mỹ,
 * không phím chết, không có ñ: gõ thẳng. "Key", "space bar" để nguyên tiếng Anh như khoá học. */
export default {
  worlds: {"rain": "Hardin ng mga alitaptap", "race": "Karerahan sa takipsilim", "keys": "Estasyon sa kalawakan"},
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
    { h2: 'Libreng typing games: piliin ayon sa kung saan ka nahihirapan', html: `<p>Tatlong magkaibang bagay ang sinusubok ng tatlong laro sa itaas. Tinatanong ng Hanap-Key kung alam mo kung nasaan ang isang titik. Tinatanong ng Ulan ng Salita kung matatapos mo ang isang salitang Filipino bago ito bumagsak. Tinatanong ng Karera ng Anino kung kaya mong panatilihin ang ritmo sa isang buong hanay ng mga salita.</p>
<p>Piliin ang pinakamalapit sa problema mo ngayon. Kung bumababa pa ang mata mo sa keyboard, magsimula sa Hanap-Key. Kung kilala mo na ang mga titik pero nabibitin ka kapag pinagsasama na ang mga ito, subukan ang Ulan ng Salita. Kung maayos na ang mga salita pero nawawala ang ritmo sa gitna ng linya, gamitin ang Karera ng Anino. Walang account na kailangan, at hindi mo kailangang tapusin ang kurso bago maglaro.</p>
<p>Ang paninindigan ko: hindi lihim na shortcut sa mabilis na pagta-type ang mga laro. Kapag tumaas ang iskor pagkatapos ng sampung round, kadalasan nasanay ka lang sa laro, hindi nagbago ang mga daliri mo. Ang tunay na halaga ng isang round ay mabilis nitong ipinapakita kung saan ka sumasabit; mas mahalaga ang gagawin mo sa impormasyong iyon kaysa sa bagong record.</p>` },
    { h2: 'Ulan ng Salita: mga salitang Filipino, pati ilang may gitling', html: `<p>Pumili ng Madali, Katamtaman o Mahirap, saka simulan. I-type ang salitang nahuhulog at pindutin ang space bar; puwede rin ang Enter. Bawat salitang umabot sa ibaba ay bawas na isang buhay, at tapos ang round kapag naubos ang tatlo. Tuwing walong salita ang nabubura, tumataas ang yugto at bumibilis ang bagsak, kaya nagiging mahirap nang kusa ang round na nagsimulang madali.</p>
<p>Binabago ng antas ang haba ng mga salita. Hanggang limang titik lang sa Madali, hanggang walo sa Katamtaman, at buong bangko ng salita sa Mahirap. Maliliit na titik ang lahat, walang ñ at walang tuldik. Pero may ilang salitang may gitling: hindi lumalabas ang mga ito sa Madali, lumalabas ang <em>mag-aral</em> at <em>tag-ulan</em> sa Katamtaman, at ang <em>araw-araw</em> at <em>dahan-dahan</em> sa Mahirap.</p>
<h3>Huwag kalimutan ang gitling</h3>
<p>Ang gitling ay nasa hinliliit ng kanang kamay, sa itaas na hanay. Kapag nilaktawan mo ito, hindi tutugma ang <em>magaral</em> sa anumang salita at mabubura ang input mo. Basahin ang buong salita bago magsimula, at huwag lumipat sa ibang salita sa kalagitnaan.</p>
<p>Ang puntos ay haba ng salita na pinarami sa yugto. Ihambing lang ang iskor sa mga round na pareho ang antas.</p>` },
    { h2: 'Karera ng Anino: typing race laban sa bilis na ikaw ang pumili', html: `<p>Pang-isang manlalaro ang Karera ng Anino. Ang pace car sa tabi mo ay hindi ibang tao online at hindi rin replay ng mga dati mong pindot. Tumatakbo ito sa nakapirming bilis na pinili mo, mula 20 hanggang 80 WPM, o sa sarili mong record sa karera. Kung wala ka pang record, 30 WPM ang simula ng opsiyong iyon, at itinuturing na 15 ang anumang record na mas mababa sa 15 WPM.</p>
<p>Pindutin ang Simulan ang karera. Gagalaw lang ang kotse kapag na-type mo na ang unang titik, kaya may oras kang ilagay ang mga daliri sa gitnang hanay. Binubuo ang talata mula sa random na mga salitang Filipino na may dalawa hanggang siyam na titik, hiwalay sa espasyo, walang malaking titik o bantas. Puwedeng sumama rito ang <em>araw-araw</em> o <em>nag-aaral</em>, kaya bantayan ang gitling. Hindi ito pangungusap na mahuhulaan; kailangan mo itong basahin.</p>
<h3>Itama muna ang unang mali</h3>
<p>Umaabante ang kotse mo ayon sa tamang simula ng input mo. Kapag may maling titik sa umpisa, hindi gagalaw ang kotse kahit tama ang lahat ng kasunod. Hanapin ang unang mali, burahin gamit ang Backspace, at magpatuloy. Kung palagi kang talo nang malayo, ibaba ang bilis; kung tatlong beses kang madaling nanalo, itaas ng isang hakbang. Gumamit ng nakapirming bilis kapag gusto mong patas na ihambing ang ilang round.</p>` },
    { h2: 'Hanap-Key: keyboard typing practice para sa 26 na titik', html: `<p>May isang key na umiilaw sa keyboard sa screen. Pindutin ang parehong pisikal na key, saka hanapin ang susunod. Animnapung segundo ang isang round. Nadaragdagan ang Tama sa bawat tamang pindot, at pinuputol ng maling key ang Sunod-sunod. Tingnan ang dalawang numero: maraming tama pero maikling sunod-sunod ay kadalasang senyales na nanghuhula ka.</p>
<p>Binabasa ng Hanap-Key ang pisikal na puwesto ng key, hindi ang character na ginagawa ng system, kaya hindi ito apektado ng input setting ng computer mo. Mga titik lang sa pangunahing layer ng layout ng kurso ang target, mula a hanggang z. Hindi lumalabas ang semicolon, numero, gitling o bantas. Kailangan nito ng pisikal na keyboard; hindi ito gumagana sa keyboard sa screen ng phone.</p>
<h3>Bantayan ang dalawang hintuturo</h3>
<p>Sa touch typing, anim na titik ang hawak ng bawat hintuturo: r, t, f, g, v, b sa kaliwa at y, u, h, j, n, m sa kanan. Sila ang pinakamaraming galaw sa Filipino, dahil sa <em>ng</em> at <em>mga</em> na halos nasa bawat pangungusap. Kung mabagal ang mga target sa gitnang bahagi ng keyboard, tumingin sa screen, igalaw ang hintuturo, at ibalik ito sa f o j bago ang susunod na target. Alam lang ng laro kung aling key ang pinindot; hindi nito alam kung aling daliri ang ginamit mo o kung tumingin ka sa ibaba. Ikaw ang dapat magbantay niyon.</p>` },
    { h2: 'Mula sa resulta ng laro papunta sa susunod na aralin', html: `<p>Bago maglaro, pumili ng isang tanong. Nawawala ba ako sa puwesto pagkatapos ng ibabang hanay? Nakakalimutan ko ba ang space bar? Tuloy lang ba ako kahit may maling titik? Pagkatapos ng round, sagutin muna iyon bago pindutin ang Maglaro ulit. Masasanay ang talang gaya ng "mabagal sa b at n". Walang sinasabi ang "kailangang tumaas ang iskor".</p>
<p>Saka itugma ang tala sa yunit ng <a class="inline-link" href="{course}">kursong may {lessons} aralin</a>. Kung sa ibabang hanay sumasablay sa Hanap-Key, ulitin ang mga aralin sa z, x, c at v, b, n sa unang yunit. Kung sa gitling bumabagsak ang Ulan ng Salita, may mga gitling at bantas na aralin sa yunit ng Laki at Bantas. Kung laging naiipit ang kotse sa maagang mali sa Karera ng Anino, katumpakan ang problema, hindi bilis.</p>
<p>Para sa sukat ng typing speed na maihahambing, gamitin ang <a class="inline-link" href="{test}">typing test</a> sa parehong haba tuwina. Magkakaibang gawain ang sinusukat ng WPM sa Ulan ng Salita, sa Karera ng Anino at sa test, kaya huwag silang pagkumparahin. Sa browser lang na ito nakatala ang mga record ng laro, hiwalay sa bawat wika, at puwedeng mawala kapag binura ang data ng site.</p>` }
  ],
  faqTitle: 'Mga karaniwang tanong',
  faq: [
    ['Puwede ba akong makipaglaro sa ibang tao?', 'Hindi. Ang Karera ng Anino ay laban sa pace car na nananatili sa bilis na pinili mo, o sa sarili mong pinakamabilis. Walang ibang manlalaro at walang leaderboard.'],
    ['Saan naitatala ang pinakamataas kong iskor?', 'Sa browser na ito lang, sa device na ito. Walang account, at walang ipinapadala kahit saan.'],
    ['Puwede ba itong laruin sa phone?', 'Gumagana ang Ulan ng Salita at Karera ng Anino sa keyboard ng phone. Kailangan ng Hanap-Key ang totoong keyboard, dahil itinuturo nito kung nasaan ang mga key.'],
    ['Bakit hindi nabura ang tamang salita?', 'Dapat eksaktong tugma ito bago mo pindutin ang space bar. Tingnan kung may napasamang malaking titik o may nawawalang titik.'],
    ['Ano ang pinagkaiba ng Madali, Katamtaman at Mahirap sa Ulan ng Salita?', 'Gumagamit ang Madali ng mga salitang hanggang limang titik at pinakamabagal ang bagsak, hanggang walo ang Katamtaman, at lahat ng salita at pinakamabilis na bagsak ang Mahirap. Sa lahat ng antas, tumataas ang yugto tuwing walong salita ang nabubura.'],
    ['Bakit hindi nabura ang salitang may gitling?', 'Bahagi ng salita ang gitling. Ang mag-aral ay kailangang i-type nang may gitling; hindi tutugma ang magaral. Hinliliit ng kanang kamay ang pumipindot nito, sa itaas na hanay.']
  ],
  cta: { eyebrow: 'Gusto mong gumaling sa laro?', title: 'Matutong mag-touch type', text: '{lessons} aralin sa sarili mong keyboard layout, simula sa gitnang hanay.', button: 'Tingnan ang kurso' }
};
