/* kiem-tra-toc-do-go/text/sw.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Swahili (/sw/jaribio-la-kuandika/),
 * cho scripts/build-test-pages.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 * Thị trường SW tìm bằng tiếng Anh ("typing test"), nên tiêu đề giữ cụm đó trong ngoặc. Số đứng sau danh
 * từ như mọi chỗ khác của ui.sw.js ("masomo {lessons}", "dakika 5"). Bố cục 118 = QWERTY Mỹ.
 */
export default {
  slug: 'jaribio-la-kuandika',
  title: 'Jaribio la kasi ya kuandika (typing test) | TypingEase',
  description: 'Jaribio la kasi ya kuandika bure kwenye kivinjari: andika kwa dakika 1, 5 au 10 na uone WPM, usahihi na makosa yako kwenye kibodi yako. Bila kujisajili.',
  breadcrumbAria: 'Njia ya ukurasa',
  homeCrumb: 'Mwanzo',
  crumb: 'Jaribio la kuandika',
  eyebrow: 'Jaribio bure',
  h1: 'Jaribio la kasi ya kuandika',
  intro: 'Chagua muda kuanzia sekunde 15 hadi dakika 10, kisha andika upya maandishi yaliyo hapa chini ili uone kasi yako kwa maneno kwa dakika (WPM), usahihi na makosa. Saa inaanza unapobonyeza kitufe cha kwanza, si unapobofya kitufe cha kuanza.',
  durationAria: 'Muda wa jaribio',
  durationLabel: seconds => (seconds < 60 ? `sekunde ${seconds}` : `dakika ${seconds / 60}`),
  liveAria: 'Matokeo ya sasa',
  stats: { time: 'Muda', wpm: 'WPM', accuracy: 'Usahihi', errors: 'Makosa', consistency: 'Uthabiti' },
  promptAria: 'Maandishi ya kuandika',
  inputLabel: 'Anza kuandika hapa',
  soundTitle: 'Mlio wa vitufe unapoandika (Alt+S)',
  soundLabel: 'Mlio wa vitufe',
  placeholder: 'Bofya hapa na uanze kuandika...',
  restart: 'Jaribu tena',
  wpmNote: 'WPM ni herufi ulizoandika, ukigawanya kwa tano, kwa kila dakika ya kuandika. Zidisha kwa tano upate takriban idadi ya herufi kwa dakika.',
  result: { title: 'Matokeo yako' },
  progress: {
    eyebrow: 'Kumbukumbu ya mazoezi', title: 'Maendeleo yako', rangeAria: 'Kipindi',
    days: n => `siku ${n}`,
    metricAria: 'Kipimo kwenye chati', note: 'Matokeo yanaweza kutoka kwenye majaribio ya muda tofauti.',
    summaryAria: 'Muhtasari wa maendeleo', avgWpm: 'Wastani wa WPM', bestWpm: 'WPM bora zaidi',
    avgAccuracy: 'Wastani wa usahihi', count: 'Majaribio yaliyofanywa', chartAria: 'Chati ya maendeleo'
  },
  sections: [
    {
      h2: 'Jaribio linavyofanya kazi',
      html: '<p>Juu kuna maandishi ya Kiswahili yenye herufi kubwa, koma na nukta. Katika muda uliouchagua unayaandika upya kwa usahihi kadiri unavyoweza. Kila herufi inalinganishwa mara moja na maandishi ya mfano: herufi sahihi zinabaki za kawaida, na zisizo sahihi zinaonyeshwa kwa rangi. Muda ukiwa bado unaendelea, unaweza kufuta kosa kwa kitufe cha Backspace na kulisahihisha.</p><p>Hesabu yote inafanyika ndani ya kivinjari chako. Hakuna akaunti wala usajili, na matokeo yanahifadhiwa kwenye kifaa hiki pekee. Maandishi ni marefu ya kutosha kwa dakika 10: aya kadhaa hufuatana moja baada ya nyingine, kwa hiyo hutaandika kitu kilekile mara mbili katika jaribio moja.</p>'
    },
    {
      h2: 'WPM: maneno kwa dakika',
      html: '<p>Kasi inaonyeshwa kwa <em>maneno kwa dakika</em>, kwa Kiingereza WPM (words per minute). Maneno yana urefu tofauti, kwa hiyo neno moja huhesabiwa kama herufi tano, pamoja na nafasi na alama za uandishi. Hili lina maana hasa kwa Kiswahili: neno moja kama <em>nitakupigia</em> lina herufi kumi na moja, na kuhesabu maneno halisi kungeifanya kasi yako ionekane ndogo kuliko ilivyo.</p><p>Kwa sababu hiyo, WPM ya jaribio hili inalinganishwa moja kwa moja na WPM ya majaribio ya Kiingereza yanayotumia kanuni hiyohiyo ya herufi tano. Ukitaka herufi kwa dakika, zidisha WPM kwa tano: 40 WPM ni takriban herufi 200 kwa dakika. Linganisha namba za tovuti tofauti kwa tahadhari, kwa sababu baadhi huhesabu kila kitufe na nyingine huhesabu herufi sahihi pekee.</p>'
    },
    {
      h2: 'Kibodi ya Kiswahili: herufi zipi zinahesabiwa',
      html: '<p>Kiswahili kinaandikwa kwa herufi za Kilatini bila alama juu ya herufi, kwa hiyo jaribio hili linatumia mpangilio wa kawaida wa <em>QWERTY</em>, ule unaokuja na kompyuta nyingi Afrika Mashariki. Kila herufi, nafasi na alama huhesabiwa kama herufi moja. Herufi kubwa pia ni herufi moja, ingawa inahitaji vitufe viwili: Shift na herufi yenyewe.</p><p>Kiswahili kina mahali pake pagumu. Alama ya <em>\'</em> katika maneno kama ng\'ombe na ng\'ambo iko chini ya kidole kidogo cha kulia, karibu na Enter, na ni rahisi kuisahau. Silabi kama <em>ny</em>, <em>ch</em> na <em>sh</em> hurudiwa mara nyingi, kwa hiyo mikono yote miwili hufanya kazi kwa zamu. Herufi q na x karibu hazitumiki kabisa, lakini herufi ya kuruka au ya ziada husogeza neno lote lililobaki, na kosa hilo linaonekana mara moja.</p>'
    },
    {
      h2: 'Dakika 1, 5 au 10: uchague ipi',
      html: '<p>Jaribio la dakika moja au chini ya hapo linaonyesha zaidi kasi yako ya juu. Unaweza kuzingatia kikamilifu na uchovu hauna nafasi, lakini kosa moja linaathiri matokeo sana.</p><p>Dakika tano au kumi zinapima kitu kingine: ustahimilivu. Umakini hupungua polepole, mikono huchoka, na hapo ndipo inaonekana kama mbinu yako inashikilia. Matokeo mara nyingi huwa chini kidogo kuliko jaribio fupi, na karibu zaidi na kasi unayoandika nayo barua ndefu au ripoti. Ili ujilinganishe na wewe mwenyewe, chagua muda uleule kila mara, vinginevyo unalinganisha mbio fupi na mbio ndefu.</p>'
    },
    {
      h2: 'Jinsi ya kusoma usahihi',
      html: '<p>Usahihi unaonyesha sehemu ya herufi ulizoandika ambazo zinalingana na mfano. Idadi ya makosa kando yake ni herufi ambazo bado si sahihi mwishoni mwa jaribio: kosa ulilosahihisha haliendelei kuhesabiwa, lakini muda wa kulisahihisha tayari umetumika. WPM inahesabu herufi zote ulizoandika, hata zisizo sahihi, kwa hiyo kasi kubwa yenye makosa mengi inaonekana bora kuliko ilivyo kweli.</p><p>Kanuni rahisi: usahihi ukiwa chini ya asilimia 95, punguza mwendo. Katika kazi ya kila siku kila kosa linagharimu muda, na kubonyeza Backspace mara kwa mara kunavunja mdundo. Uthabiti unaonyesha kama unashika mwendo mmoja katika jaribio zima au kasi yako inapanda na kushuka sana.</p>'
    },
    {
      h2: 'Jinsi ya kuandika haraka zaidi',
      html: '<ul><li>Jifunze kuandika kwa vidole kumi bila kutazama, kuanzia safu ya msingi: mkono wa kushoto kwenye A S D F, mkono wa kulia kwenye J K L na ;, vidole gumba kwenye kitufe cha nafasi.</li><li>Usiangalie kibodi. Mwanzoni kasi itashuka, lakini ni njia pekee ya kufanya njia ya kila kitufe iwe ya kawaida kwa vidole.</li><li>Fanya mazoezi ya ziada ya alama ya \' na ya silabi zinazorudiwa kama ny, ch na sh.</li><li>Dakika kumi kila siku ni bora kuliko saa moja mara moja kwa wiki.</li><li>Zingatia usahihi kwanza. Kasi itakuja miondoko ikishakuwa ya mazoea.</li></ul><p><a class="inline-link" href="{course}">Kozi ya kuandika kwa vidole kumi (masomo {lessons})</a> inakuongoza hatua kwa hatua kwenye kibodi yako, kuanzia safu ya msingi hadi alama za uandishi.</p>'
    }
  ],
  faqTitle: 'Maswali yanayoulizwa mara kwa mara',
  faq: [
    ['WPM ni nini?', 'Ni maneno kwa dakika, kwa Kiingereza words per minute. Neno moja huhesabiwa kama herufi tano, pamoja na nafasi, kwa hiyo matokeo hayategemei urefu wa maneno ya maandishi.'],
    ['Nitapataje herufi kwa dakika?', 'Zidisha WPM kwa tano. 40 WPM ni takriban herufi 200 kwa dakika. Jaribio lenyewe linaonyesha kasi kwa WPM pekee.'],
    ['Nichague muda gani?', 'Dakika moja inaonyesha kasi yako ya juu, dakika tano au kumi zinaonyesha ustahimilivu. Ili ulinganishe na matokeo ya zamani, chagua muda uleule kila mara.'],
    ['Je, matokeo yangu yanahifadhiwa?', 'Ndiyo, lakini kwenye kivinjari cha kifaa hiki pekee. Hakuna akaunti wala usajili. Ukifuta data ya kivinjari, historia nayo itafutika.'],
    ['Ninahitaji kibodi maalum ya Kiswahili?', 'Hapana. Kiswahili hakina herufi zenye alama, kwa hiyo kibodi ya kawaida ya QWERTY inatosha. Mpangilio wa Swahili (Kenya) kwenye Windows ni sawa na QWERTY kwa kila kitufe.'],
    ['Je, jaribio hili lina cheti?', 'Hapana. Ni zana ya mazoezi ya kujipima mwenyewe, haitoi cheti wala orodha ya washindi.']
  ],
  cta: { eyebrow: 'Unataka kuandika haraka zaidi?', title: 'Jifunze kuandika kwa vidole kumi', text: 'Masomo {lessons} kwenye kibodi yako mwenyewe, kuanzia safu ya msingi.', button: 'Tazama kozi' }
};
