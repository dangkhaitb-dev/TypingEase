/* content/typing-test/fil.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Filipino (/fil/typing-test/),
 * cho tooling/pages/typing-tests.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 * Bố cục khoá học = Filipino 117, giống QWERTY Mỹ; đoạn văn không dùng ñ (khoá học không dạy phím đó).
 * Đơn vị WPM như ui.fil.js. Xưng "ikaw/mo"; "key", "keyboard", "Shift" giữ tiếng Anh. Không chia số nhiều.
 */
export default {
  slug: 'typing-test',
  title: 'Libreng typing speed test para sa WPM at katumpakan | TypingEase',
  description: 'Libreng typing test sa browser: mag-type nang 1, 5 o 10 minuto at makita ang iyong WPM, katumpakan at mga mali. Walang sign-up at walang account.',
  breadcrumbAria: 'Breadcrumb',
  homeCrumb: 'Pangunahing pahina',
  crumb: 'Typing test',
  eyebrow: 'Libreng typing test',
  h1: 'Typing speed test',
  intro: 'Pumili ng haba mula 15 segundo hanggang 10 minuto at i-type muli ang talata para makita ang iyong WPM, katumpakan at mga mali. Nagsisimula ang orasan sa unang pindot mo ng key, hindi sa isang button.',
  durationAria: 'Haba ng test',
  durationLabel: seconds => (seconds < 60 ? `${seconds} seg` : `${seconds / 60} min`),
  liveAria: 'Kasalukuyang resulta',
  stats: { time: 'Oras', wpm: 'WPM', accuracy: 'Katumpakan', errors: 'Mali', consistency: 'Konsistensi' },
  promptAria: 'Ang talatang ita-type',
  inputLabel: 'Magsimulang mag-type dito',
  soundTitle: 'Tunog ng key habang nagta-type (Alt+S)',
  soundLabel: 'Tunog ng key',
  placeholder: 'I-click dito at magsimulang mag-type...',
  restart: 'Subukan muli',
  wpmNote: 'Ang WPM ay ang bilang ng character na na-type mo, hinati sa lima, sa bawat minuto ng pagta-type.',
  result: { title: 'Ang resulta mo' },
  progress: {
    eyebrow: 'Talaan ng pagsasanay', title: 'Ang pag-unlad mo', rangeAria: 'Saklaw ng panahon',
    days: n => `${n} araw`,
    metricAria: 'Sukat sa chart', note: 'Maaaring galing ang mga resulta sa mga test na magkakaiba ang haba.',
    summaryAria: 'Buod ng pag-unlad', avgWpm: 'Karaniwang WPM', bestWpm: 'Pinakamataas na WPM',
    avgAccuracy: 'Karaniwang katumpakan', count: 'Mga natapos na test', chartAria: 'Chart ng pag-unlad'
  },
  sections: [
    {
      h2: 'Paano gumagana ang typing test',
      html: '<p>Sa itaas ay may talatang Filipino na may malalaking titik, kuwit, tuldok at iba pang bantas. Sa loob ng oras na pinili mo, i-type itong muli nang tumpak hangga\'t maaari. Agad inihahambing ang bawat character sa halimbawa: normal ang tama, may kulay ang mali. Habang tumatakbo ang oras, puwede mong burahin ang mali gamit ang Backspace at itama ito.</p><p>Ginawa ang online typing test na ito para sa karaniwang QWERTY keyboard, ang layout ng halos lahat ng laptop at computer sa Pilipinas. Sa browser mismo kinukuwenta ang lahat. Isa itong free typing test na walang account o sign-up, at sa device na ito lang naitatala ang mga resulta mo.</p>'
    },
    {
      h2: 'Ano ang WPM',
      html: '<p>Ipinapakita ang bilis sa <em>WPM</em>, o words per minute, ibig sabihin ay ilang salita ang na-type mo bawat minuto. Magkakaiba ang haba ng mga salita, kaya binibilang ang isang salita bilang limang character, kasama ang espasyo at bantas. Sa ganitong paraan, hindi nakadepende ang resulta sa kung maiikli o mahahaba ang mga salita sa talata.</p><p>Mahahaba ang maraming salitang Filipino dahil sa mga panlapi, gaya ng <em>pinakamagaganda</em> o <em>nagkakaintindihan</em>. Dahil limang character ang isang salita sa pagkuwenta, hindi nito pinabababa ang iskor mo. Kung gusto mong malaman ang character bawat minuto, i-multiply ang WPM sa lima: ang 40 WPM ay mga 200 character bawat minuto.</p>'
    },
    {
      h2: 'Ano ang binibilang na isang character',
      html: '<p>Isang character ang bawat titik, numero, espasyo at bantas. Isang character din ang malaking titik, kahit dalawang key ang kailangan: Shift at ang titik mismo. Kapag may sobra o kulang na character, naiuusog ang natitirang bahagi ng salita, kaya madaling makita ang ganitong mali.</p><p>Walang titik na may tuldik sa mga talata, at hindi rin ginagamit ang ñ, kaya lahat ng titik ay nasa QWERTY keyboard nang walang espesyal na kombinasyon. Ang madalas nakapagpapabagal ay ang malalaking titik sa simula ng pangungusap at sa mga pangalan, ang gitling sa mga salitang gaya ng <em>mag-aral</em> at <em>araw-araw</em>, at ang mga bantas na kailangan ng Shift, gaya ng tandang pananong at tutuldok.</p>'
    },
    {
      h2: 'Alin ang pipiliin mo, 1 minute, 5 minute o 10 minute typing test?',
      html: '<p>Pinakamataas mong bilis ang ipinapakita ng maikling test: buo ang pokus at halos walang pagod, pero malaki ang epekto ng isang mali. Tibay naman ang sinusukat ng mahabang test, kaya karaniwang mas mababa nang kaunti ang resulta, pero mas malapit sa tunay mong bilis kapag sumusulat ka ng mahabang ulat o email. Para maihambing ang sarili mo sa dati mong resulta, piliin ang parehong haba tuwing magte-test ka.</p><div class="guide-table-wrap"><table class="wpm-table"><caption>Kailan pipiliin ang bawat haba</caption><thead><tr><th scope="col">Haba</th><th scope="col">Kailan ito sulit</th></tr></thead><tbody><tr><th scope="row">15 o 30 segundo</th><td>Pampainit bago ang tunay na test, o pagsasanay sa iisang mahinang bahagi gaya ng gitling; masyadong pabago-bago ang numero para gawing rekord.</td></tr><tr><th scope="row">1 minute typing test</th><td>Pinakamainam na sukatan sa araw-araw; sapat ang haba para hindi isang mali lang ang magpasya, at sapat ang ikli para ulitin nang tatlong beses.</td></tr><tr><th scope="row">5 minute typing test</th><td>Subukan kapag matatag na ang WPM mo sa isang minuto; kapag malaki ang agwat ng dalawa, bumibigay ang teknik mo kapag napapagod.</td></tr><tr><th scope="row">10 minute typing test</th><td>Pinakamalapit sa tunay na trabaho, gaya ng pag-type ng minutes ng pulong; sapat na ang minsan sa isang linggo, dahil tinatakpan ng pagod ang pag-unlad sa araw-araw.</td></tr></tbody></table></div>'
    },
    {
      h2: 'Paano basahin ang katumpakan',
      html: '<p>Hindi lang bilis ang sinusukat dito, dahil typing accuracy test din ito. Ipinapakita ng katumpakan kung gaano kalaking bahagi ng mga na-type mong character ang tugma sa halimbawa. Ang bilang ng mali sa tabi nito ay ang mga character na mali pa rin nang matapos ang test: hindi na binibilang ang naitamang mali, pero nagamit na ang oras sa pagtatama. Kasama sa WPM ang lahat ng na-type na character, pati ang mali, kaya ang mataas na bilis na may maraming mali ay mukhang mas maganda kaysa sa totoo.</p><p>Isang simpleng tuntunin: kung mas mababa sa 95% ang katumpakan mo, magdahan-dahan nang kaunti. Sa araw-araw na trabaho, may kapalit na oras ang bawat mali, at nasisira ang ritmo kapag madalas ang Backspace. Ipinapakita naman ng konsistensi kung pantay ang bilis mo sa buong test o pabago-bago.</p>'
    },
    {
      h2: 'Ang payo ko sa mga nagsisimula',
      html: '<p>Kung bago ka pa lang at typing test for beginners ang hanap mo, may isang bagay akong hihilingin: huwag mong ikumpara agad ang unang WPM mo sa resulta mo sa isang English typing test. Puno ng gitling ang talatang Filipino, gaya ng <em>mag-aral</em> at <em>araw-araw</em>, at mahahaba ang mga salitang may panlapi, kaya puwedeng mas mababa nang kaunti ang numero mo rito kahit pareho ang galing mo. Ihambing mo lang ang sarili mo sa dati mong resulta sa test na ito, sa parehong haba.</p><p>Para sa una mong subok, piliin ang 1 minuto. Pagkatapos, tingnan muna ang katumpakan bago ang WPM: kasama sa WPM ang mga maling character, kaya mapanlinlang ang mataas na bilis na puno ng kulay. Kung naiipon ang mali sa gitling o sa malaking titik pagkatapos ng tuldok, doon ka magdahan-dahan, hindi sa buong talata.</p><p>Kung hinahanap mo pa ng mata ang bawat titik, mas makakatulong muna ang typing exercises ng <a class="inline-link" href="{course}">kursong may {lessons} aralin</a>.</p>'
    },
    {
      h2: 'Pagkatapos ng test: ano ang susunod na sanayin',
      html: '<ul><li>Matuto ng 10 finger typing (touch typing) mula sa gitnang hanay: kaliwang kamay sa A S D F, kanang kamay sa J K L at semicolon, hinlalaki sa space bar.</li><li>Huwag tumingin sa keyboard. Babagal ka muna, pero ito lang ang paraan para matandaan ng mga daliri ang puwesto ng bawat key.</li><li>Pindutin ang Shift gamit ang hinliliit ng kabilang kamay mula sa titik na gagawing malaki.</li><li>Mas mabuti ang sampung minutong typing practice araw-araw kaysa isang oras minsan sa isang linggo.</li><li>Unahin ang katumpakan. Susunod ang bilis kapag nakasanayan na ang galaw ng mga daliri.</li></ul><p>Itinuturo ito nang hakbang-hakbang ng <a class="inline-link" href="{course}">kursong may {lessons} aralin</a>, sa sarili mong keyboard, mula sa gitnang hanay hanggang sa mga bantas.</p><p>Para sa mas detalyadong plano sa tekstong Filipino, basahin ang gabay namin na <a class="inline-link" href="/fil/how-to-type-faster/">how to type faster</a>.</p>'
    }
  ],
  faqTitle: 'Mga madalas itanong',
  faq: [
    ['Ano ang WPM?', 'Ang WPM ay words per minute, o salita bawat minuto. Binibilang ang isang salita bilang limang character, kasama ang espasyo, kaya hindi nakadepende ang resulta sa haba ng mga salita sa talata.'],
    ['Kailangan ko bang i-type ang ñ?', 'Hindi. Hindi gumagamit ng ñ o ng mga titik na may tuldik ang mga talata ng test, kaya sapat ang karaniwang QWERTY keyboard.'],
    ['Aling haba ang dapat kong piliin?', 'Ipinapakita ng isang minuto ang pinakamataas mong bilis, at ng lima o sampung minuto ang tibay mo. Para maihambing sa mga dating resulta, piliin palagi ang parehong haba.'],
    ['Puwede ba ito sa laptop?', 'Oo. Gumagamit ang test ng parehong QWERTY layout ng halos lahat ng laptop. Sa phone o tablet, gumamit ng pisikal na keyboard para may saysay ang resulta.'],
    ['Puwede ba itong gamitin bilang keyboard test?', 'Hindi ito keyboard test na naghahanap ng sirang key, kundi typing speed test. Pero bago magsimula, tiyaking QWERTY ang layout at gumagana ang lahat ng key para hindi maapektuhan ang resulta.'],
    ['Puwede ba ito bilang typing test for kids?', 'Puwede itong subukan ng bata kasama ang isang nakatatanda, pero walang hiwalay na mode para sa bata at pang-adult ang mga talata. Pumili ng 15 hanggang 60 segundo at unahin ang katumpakan kaysa bilis.'],
    ['Maihahambing ko ba ang resulta ng WPM test na ito sa ibang site?', 'Oo, kung limang character bawat salita rin ang bilang nila. May mga typing speed test online na binibilang ang bawat pindot o ang tamang character lang, kaya ihambing nang may pag-iingat.'],
    ['Naitatala ba ang mga resulta ko?', 'Sa browser lang ng device na ito. Walang account at walang sign-up. Kapag binura mo ang data ng browser, mawawala rin ang kasaysayan.']
  ],
  cta: { eyebrow: 'Gusto mong mag-type nang mas mabilis?', title: 'Matutong mag-touch type', text: '{lessons} aralin sa sarili mong keyboard, simula sa gitnang hanay.', button: 'Tingnan ang kurso' }
};
