/* data/courses/sw.js — khoá học tiếng Swahili: cấu hình + toàn bộ lời dạy.
 *
 * Nạp bằng `new Function('window', src)` trong scripts/build-course.js. KHÔNG trang nào nạp file
 * này: nó là đầu vào lúc build, và mọi chữ trong đây đã nằm sẵn trong data/lessons/sw/*.json khi
 * trình duyệt nhận được.
 *
 * `{keys}` `{key}` `{finger}` `{fingers}` `{n}` `{unit}` `{reach}` là chỗ trống generator điền vào.
 *
 * GIỌNG VĂN. Ngắn, cụ thể, nói đúng việc đang xảy ra dưới ngón tay. Không tính từ quảng cáo,
 * không dấu chấm than. Ngôi thứ hai số ít xuyên suốt (bonyeza, vidole vyako).
 *
 * THUẬT NGỮ, giữ một bản cho cả khoá: kitufe/vitufe (phím), kibodi (bàn phím), safu ya msingi
 * (hàng cơ sở), kitufe cha nafasi (phím cách), kitengo (unit), somo/masomo (bài), marudio (ôn
 * tập), jaribio (kiểm tra), usahihi (độ chính xác). Tên ngón: kidole kidogo / cha pete / cha kati
 * / cha shahada / gumba. "Vitufe vyenye kivimbe" = hai phím có gờ F và J.
 *
 * Câu nào nói về phím đều để phím đứng sau "kitufe" hoặc làm chủ ngữ lớp ki-/vi- (kinabonyezwa,
 * vinabonyezwa), vì tên phím điền vào có thể là chữ, số hay dấu — không có lớp danh từ nào của
 * riêng nó để hoà hợp.
 */
window.TypingEaseCourse = window.TypingEaseCourse || {};
window.TypingEaseCourse.sw = {
  lang: 'sw',
  name: 'Kiswahili',

  // Bố cục 118 — Swahili (Kenya), giống QWERTY Mỹ từng phím. Không có phím chết, nên ^ ` ~ là
  // ký tự thật và unit ký hiệu dạy được chúng, như khoá tiếng Anh.
  keyboardId: 118,

  progressKey: 'typingease-progress-sw-v1',
  badgesKey: 'typingease-badges-sw-v1',

  letterTest: "^[a-z;',.\\/-]$",
  symbolsLive: ['^', '`', '~'],

  teaching: {
    and: ' na ',
    // Tên dấu câu trong danh sách phím (tiêu đề, tóm tắt) — xem keyName() trong build-course.js.
    keyNames: { ',': 'koma', '.': 'nukta', ';': 'nukta mkato', ':': 'nukta pacha', "'": 'ritifaa', '-': 'kistari', '/': 'mkwaju' },

    /* --- unit cuối: mọi phím còn lại (scripts/lib/unit-symbols.js) --- */
    symbols: {
      unitTitle: 'Vitufe vingine vyote',
      unitSummary: 'Alama {count} za kibodi hii ambazo kozi bado haijazitumia, kila moja ikiandikwa pale inapotumika kweli.',
      groupSymbols: 'Vitufe vilivyobaki',
      groupFinish: 'Maliza kitengo',
      titleNumberRow: 'Alama za safu ya namba',
      titleKeys: '{keys}',
      titleReview: 'Alama zote pamoja',
      summaryKeys: 'Katika somo hili: {keys}.',
      summaryReview: 'Alama zote za kitengo hiki, zikichanganywa na maneno na namba.',
      summaryTest: 'Jaribio lenye muda, na kila kitufe cha kibodi.',
      introLesson: 'Vitufe ambavyo kozi bado haijavitumia: {keys}. {shiftNote}',
      shiftNote: 'Vyote vinapatikana kwa Shift pamoja na kitufe ambacho vidole vyako tayari vinakijua — Shift kwa kidole kidogo cha mkono mwingine.',
      shiftNoteMixed: 'Baadhi vinahitaji Shift, kwa kidole kidogo cha mkono mwingine; vingine viko kwenye kitufe ambacho kozi haijakitumia bado.',
      introKey: 'Kitufe {key} ni cha {finger}{shift}.',
      introKeyShift: ', huku Shift ikishikwa na mkono mwingine',
      drillOne: 'Kwanza {key} peke yake, kisha pale kinapotumika kweli.',
      burst: 'Mfululizo wa vipande vifupi vyenye alama hizi.',
      together: 'Kila kitu kutoka somo hili, kwa mchanganyiko.',
      inWords: 'Maneno tena, na alama zikiwa mahali pake.',
      introReview: 'Hakuna kitufe kipya. Alama zote za kitengo hiki, zikichanganywa na maneno na namba.',
      reviewFirst: 'Andika alama kwa mwendo uleule wa herufi zinazozizunguka.',
      reviewLine: 'Endelea na mdundo uleule hata kwenye alama; ni vitufe kama vingine.',
      congratsKeys: '{keys}: sasa viko chini ya vidole vyako. Shift kwa mkono mwingine, na alama inakuja kwa urahisi kama herufi iliyo kando yake.',
      congratsReview: 'Kila kitufe cha kibodi hii kimepata zamu yake.',
      introTest: 'Jaribio lenye muda, na kila kitu, alama zikiwemo.',
      congratsTest: 'Hiyo ndiyo kibodi nzima. Hakuna kitufe kilichobaki ambacho kozi hii haijakufundisha.',
      testText: 'Maneno, namba na alama. Shika mwendo mmoja tangu mwanzo hadi mwisho.'
    },

    fingers: {
      LP: 'kidole kidogo cha kushoto', LR: 'kidole cha pete cha kushoto', LM: 'kidole cha kati cha kushoto',
      LI: 'kidole cha shahada cha kushoto', LT: 'kidole gumba cha kushoto', RT: 'kidole gumba cha kulia',
      RI: 'kidole cha shahada cha kulia', RM: 'kidole cha kati cha kulia', RR: 'kidole cha pete cha kulia',
      RP: 'kidole kidogo cha kulia'
    },

    /* --- cột ngoài của ngón út phải --- */
    introEdge: 'Vitufe vya ukingo wa kulia, vyote ni vya kidole kidogo. Ndivyo vinavyokinyoosha kidole hicho mbali zaidi, na ndivyo vinavyofanyiwa mazoezi kidogo zaidi baadaye.',
    drillEdgePair: 'Sasa {keys}. Kidole kidogo kinatoka nje na kurudi; mkono unabaki palepale.',
    burstEdge: 'Mfululizo na vitufe vya safu hii ulivyonavyo hadi sasa.',
    drillEdgeAll: 'Vyote sita pamoja. Hapa ndipo kifundo cha mkono hujipinda zaidi kama kidole hakirudi kwenye safu ya msingi.',
    burstEdgeWords: 'Maneno tena, ili kulegeza mkono baada ya ukingo huo wote.',
    edgeBackToWords: 'Turudi kwenye maneno, na kibodi nzima ikiwa tayari.',
    edgeClose: 'Sentensi kamili ili kufunga masomo ya vitufe.',

    /* --- màn giới thiệu phím --- */
    introKey: 'Kitufe hiki ni cha {finger}. Kitafute bila kutazama, kibonyeze mara moja, kisha acha kidole kirudi mahali pake. Kurudi ni muhimu kama kubonyeza.',
    pressToContinue: 'Bonyeza <b>{key}</b> ili kuendelea',
    introSpace: 'Kitufe cha nafasi ni cha kidole gumba cha kulia. Vidole gumba havifanyi kazi nyingine, ndiyo sababu hutakitafuta kamwe.',
    pressSpace: 'Bonyeza <b>kitufe cha nafasi</b> ili kuendelea',

    /* --- luyện ngón --- */
    drillSpace: 'Vikundi vifupi vyenye nafasi kati yao. Kidole gumba cha kulia kinashuka na kupanda; vidole vingine vinabaki palepale.',
    drillNew: '{key} tu na vile unavyovijua tayari. Polepole, na kidole kirudi kwenye safu ya msingi baada ya kila mbonyezo.',
    drillMixed: 'Vitufe vipya vikichanganywa na vya zamani, jinsi vitakavyotokea ndani ya maneno.',
    drillAgain: 'Vitufe viwili vipya mara nyingine. Bado hakuna maneno ya kuandika navyo, na hilo ni kawaida.',
    drillWide: 'Kila ulicho nacho, kwa vikundi vifupi. Macho kwenye skrini, si kwenye mikono.',
    drillAll: 'Mzunguko wa mwisho na yote uliyojifunza hadi hapa.',
    patternsBack: 'Turudi kwenye mifumo kwa muda, kuhakikisha vidole bado vinapata njia ya kurudi.',

    /* --- mfululizo --- */
    burstKeys: 'Vikundi vifupi, kimoja baada ya kingine. Endelea hadi mwisho hata ukikosea kimoja.',
    burstLonger: 'Vikundi virefu kidogo. Haraka bado haisaidii.',
    burstWords: 'Mfululizo wa maneno mafupi yenye vitufe vipya.',

    /* --- maneno --- */
    wordsNew: 'Maneno halisi yenye vitufe vipya. Andika kila neno kwa mkupuo mmoja, si herufi kwa herufi.',
    wordsOne: 'Sasa uzito uko kwenye <b>{key}</b>, kitufe ulichobonyeza mara chache zaidi.',
    wordsAll: 'Kila ulicho nacho, kimechanganywa. Angalia ni maneno mangapi tayari yanakuja bila kufikiri.',

    /* --- marudio --- */
    introReview: 'Hakuna kitufe kipya katika somo hili. Ni vile tu unavyovijua, kwa mfululizo zaidi na kwa kasi zaidi kuliko ulivyoviandika hadi sasa.',
    introReviewMixed: 'Herufi, namba na alama pamoja, jinsi zinavyotokea nje ya kozi.',
    pressEnter: 'Bonyeza <b>Enter</b> ili kuanza',
    reviewWords1: 'Kuanza, maneno moja moja. Bila haraka: kasi hutokana na usahihi, si kinyume chake.',
    reviewBurst: 'Mfululizo mfupi. Maliza orodha hata ukikosea neno moja.',
    reviewWords2: 'Maneno matano kwa mstari. Acha macho yatangulie mbele ya vidole.',
    reviewPatterns: 'Mifumo tena, kuhakikisha vidole bado vinarudi kwenye safu ya msingi.',
    reviewShort: 'Maneno mafupi, kwa mwendo mzuri. Haya yanapaswa kuja karibu yenyewe sasa.',
    reviewBurst2: 'Muda zaidi na maneno zaidi. Shika mwendo uleule tangu mwanzo hadi mwisho.',
    reviewClose: 'Sentensi kamili. Hapa ndipo utaona kama mkono unarudi wenyewe mahali pake.',
    reviewLast: 'Mzunguko wa mwisho. Kama umefika hapa bila kutazama kibodi, somo limekamilika.',

    /* --- Shift na Enter --- */
    introShift: 'Herufi kubwa huandikwa kwa kidole kidogo cha mkono ulio kinyume na herufi. Shikilia Shift, bonyeza herufi, achia. Kamwe si kwa kidole kidogo cha mkono unaoandika herufi hiyo.',
    pressShift: 'Shikilia <b>Shift</b> na ubonyeze herufi ili kuendelea',
    drillShift: 'Herufi kubwa na ndogo kwa kupokezana. Kidole kidogo kinashuka na kupanda; mkono mwingine haubadilishi mahali.',
    wordsShift: 'Maneno yanayoanza kwa herufi kubwa, kama majina.',
    introEnter: 'Enter ni kitufe cha kidole kidogo cha kulia, upande wa kulia wa safu ya msingi. Ndicho kitufe kikubwa zaidi ambacho kidole hicho kinapaswa kukifikia.',
    pressEnterKey: 'Bonyeza <b>Enter</b> ili kuendelea',
    drillEnter: 'Mstari mmoja, Enter, mstari mwingine. Kidole kidogo kinatoka na kurudi bila kuuvuta mkono.',
    shiftSentences: 'Sentensi zenye herufi kubwa mwanzoni na nukta mwishoni. Sasa inafanana na kuandika halisi.',
    shiftBurst: 'Mfululizo wa kuimarisha somo hili.',
    shiftWords2: 'Matano kwa mstari, kidole kidogo kikifanya kazi pande zote mbili.',
    shiftClose: 'Kufunga, sentensi nzima. Shift, herufi, achia — bila kusimama kufikiri.',

    /* --- hàng số --- */
    introDigits: 'Safu ya namba iko juu ya safu ya juu. Kila kidole kinapanda moja kwa moja na kushuka vivyo hivyo. Hapa ndipo vidole vinapofika mbali zaidi katika kozi.',
    drillDigitPair: 'Vitufe {keys} vinabonyezwa na {finger} na kidole hichohicho cha mkono mwingine. Panda, bonyeza, rudi kwenye safu ya msingi.',
    drillDigitIndex: 'Viwili vilivyobaki ni vya vidole vya shahada, ambavyo tayari vinafikia vitufe vingi kuliko kidole kingine chochote.',
    burstDigits: 'Mfululizo mfupi na namba ulizo nazo.',
    burstDigitsAll: 'Zote kumi, zikichanganywa. Mwanzoni utakosea sana hapa; ni kawaida.',
    digitsAll: 'Safu nzima, kwa vikundi. Usiangalie chini kutafuta 6.',
    digitsBackToWords: 'Turudi kwenye maneno kwa muda, ili mikono ikumbuke mahali pake.',
    digitsClose: 'Sentensi tena, sasa na kibodi nzima ikiwa tayari.',

    /* --- đoạn văn --- */
    introProse: 'Maandishi marefu na mfululizo. Kinachofanyiwa mazoezi hapa si vitufe vipya, bali kudumisha mdundo uleule kwa mistari kadhaa.',
    proseLine: 'Endelea kusoma mbele ya unachoandika. Ukisimama kutazama, unapoteza muda zaidi kuliko kusahihisha.',
    proseBurst: 'Mfululizo mmoja mrefu wa mwisho kumaliza.',

    /* --- phím yếu và kiểm tra --- */
    weakText: 'Zoezi lililotengenezwa kutokana na vitufe unavyokosea zaidi. Hubadilika kila unapofanya mazoezi.',
    testText: 'Hakuna vitufe vipya. Andika kwa mwendo unaoweza kuudumisha hadi mwisho.',

    /* --- tiêu đề --- */
    titleFirst: '{keys}, pamoja na kitufe cha nafasi',
    titleKeys: '{keys}',
    titleReview: 'Marudio',
    titleReviewMixed: 'Anwani, viungo na namba',
    titleShift: 'Shift na Enter',
    titleEdge: 'Safu ya ukingo',
    titleDigits: 'Safu ya namba',
    titleProse: 'Maandishi na mdundo {n}',
    titleWeak: 'Vitufe dhaifu',
    titleTest: 'Jaribio la kitengo {unit}',

    /* --- tóm tắt trên trang lộ trình --- */
    summary: {
      edge: 'Safu ya ukingo wa kulia: vitufe sita, vyote vya kidole kidogo.',
      first: 'Vitufe viwili vyenye kivimbe, kitufe cha nafasi, na mazoea ya kutotazama chini.',
      keys: 'Vitufe vipya: {keys}. Kidole kinatoka, kinabonyeza na kurudi.',
      review: 'Hakuna kitufe kipya. Yote yaliyotangulia, kwa mfululizo zaidi na kwa kasi zaidi.',
      shift: 'Herufi kubwa kwa kidole kidogo cha upande wa pili, na kuruka mstari.',
      digits: 'Namba kumi, kila kidole kikipanda moja kwa moja.',
      prose: 'Aya nzima, ili kudumisha mdundo zaidi ya mstari mmoja.',
      weak: 'Zoezi linalotengenezwa kwa vitufe unavyokosea zaidi.',
      test: 'Jaribio lenye muda na yote uliyojifunza.'
    },

    /* --- mở bài --- */
    intro: {
      edge: 'Kidole kidogo cha kulia kinabeba vitufe vingi kuliko kidole kingine chochote, na vile vya ukingo ndivyo vinavyofanyiwa mazoezi kidogo kuliko vyote. Viko mbali na safu ya msingi kuliko vingine, kwa hiyo mbinu ni ileile: toka, bonyeza na rudi, bila kuuvuta mkono nyuma yake.',
      first: 'Vitufe vyenye kivimbe kidogo ndipo unapoanzia. Vidole viwili vya shahada vinakaa hapo na havihami; kila kitu kingine katika kozi kinapimwa kutoka mahali hapo. Anza kwa kuweka mikono yote miwili na kutazama skrini tu.',
      keys: 'Vitufe vipya katika somo hili: {keys}. Vinabonyezwa na {fingers}. Mwendo ni uleule kila mara — toka, bonyeza na rudi — na kurudi ndiko kunakofanyiwa mazoezi, kwa sababu kidole kikibaki nje, herufi inayofuata inakosewa.',
      review: 'Somo hili halifundishi kitu kipya. Ni wakati wa kuhakikisha kwamba yaliyotangulia yanakuja bila kufikiri, jambo ambalo ni tofauti na kujua kila kitufe kiko wapi.',
      shift: 'Hadi sasa kila kitu kimeandikwa kwa herufi ndogo. Shift inabadilisha hilo, na ina kanuni moja inayofaa kujifunzwa vizuri tangu mwanzo: inabonyezwa na kidole kidogo cha mkono ulio kinyume na herufi. Ukitumia kidole kidogo cha upande uleule, mkono unajipinda na unaishia kutazama kibodi.',
      digits: 'Safu ya namba iko juu ya kila kitu ulichoandika hadi sasa, na ndipo vidole vinapofika mbali zaidi. Utakosea hapa kuliko mahali pengine popote katika kozi, na hilo linarekebishwa kama mengine yote: polepole kwanza.',
      prose: 'Sasa una kibodi nzima. Kilichobaki si kujifunza vitufe bali kudumisha mdundo: soma mbele, usisimame kutazama, na usiongeze kasi mwishoni mwa mstari.',
      weak: 'Zoezi hili linajengwa kwa vitufe unavyokosea wewe, si kwa orodha ya kudumu. Ukibadilika, nalo linabadilika.',
      test: 'Jaribio lenye muda. Hakuna jipya: ni yale unayoyajua tu, kwa mwendo unaoweza kuudumisha.'
    },

    /* --- kết bài --- */
    congrats: {
      edge: 'Safu hiyo ndiyo inayoachwa nusu katika karibu kila kozi. Si katika yako tena.',
      first: 'Mikono yako sasa iko mahali pake. Kuanzia hapa, kila kitu ni vitufe vinavyofikiwa kutoka mahali hapa na kuachiwa tena.',
      keys: 'Vitufe zaidi chini ya vidole vyako. Kama {keys} vinakuja bila kuvitafuta, somo limefanya kazi yake.',
      review: 'Hakuna jipya, na bado kwa kasi zaidi. Hicho ndicho hasa kilichopaswa kutokea.',
      shift: 'Kwa Shift na Enter unaweza kuandika maandishi kamili kama yanavyoandikwa nje ya hapa.',
      digits: 'Safu ya namba ndiyo ngumu zaidi na ndiyo inayofanyiwa mazoezi kidogo baadaye. Rudi kwenye somo hili mara kwa mara.',
      prose: 'Aya nzima kwa mdundo thabiti. Huku si kujifunza kuandika tena; huku ni kuandika.',
      weak: 'Vitufe dhaifu huacha kuwa dhaifu kwa dakika moja kila siku, si kwa saa moja kila mwezi.',
      test: 'Umefaulu jaribio. Namba si muhimu kuliko ukweli kwamba umefika mwisho bila kutazama.'
    },

    units: {
      u1: { title: 'Safu ya msingi',
        summary: 'Vitufe vinane chini ya vidole, kisha {reach} — vya kutosha kuandika maneno halisi bila kutazama chini.' },
      u2: { title: 'Alfabeti iliyobaki',
        summary: 'Safu ya juu, safu ya chini, alama za uakifishaji, ritifaa na herufi kubwa — alfabeti nzima, pamoja na Shift na Enter.' },
      u3: { title: 'Namba, alama na kasi',
        summary: 'Safu ya namba, alama za kila siku, anwani na viungo halisi, kisha aya ndefu kwa mdundo thabiti.' }
    },

    groups: {
      start: 'Anza hapa',
      reach: 'Kunyoosha vidole',
      finish: 'Maliza kitengo',
      'numbers-symbols': 'Namba na alama',
      speed: 'Kasi'
    },

    starterHint: 'Weka vidole vya shahada kwenye vitufe viwili vyenye kivimbe, na uandike unachokiona bila kutazama kibodi.'
  }
};
