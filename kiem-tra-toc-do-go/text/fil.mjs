/* kiem-tra-toc-do-go/text/fil.mjs — chữ tĩnh của trang test tốc độ gõ tiếng Filipino (/fil/typing-test/),
 * cho scripts/build-test-pages.mjs. `{lessons}` = số bài của khoá chính, `{course}` = trang lộ trình của nó.
 * Bố cục khoá học = Filipino 117, giống QWERTY Mỹ; đoạn văn không dùng ñ (khoá học không dạy phím đó).
 * Đơn vị WPM như ui.fil.js. Xưng "ikaw/mo"; "key", "keyboard", "Shift" giữ tiếng Anh. Không chia số nhiều.
 */
export default {
  slug: 'typing-test',
  title: 'Libreng typing speed test: WPM at katumpakan | TypingEase',
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
  wpmNote: 'WPM: ang bilang ng character na na-type mo, hinati sa lima, sa bawat minuto ng pagta-type.',
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
      html: '<p>Sa itaas ay may talatang Filipino na may malalaking titik, kuwit, tuldok at iba pang bantas. Sa loob ng oras na pinili mo, i-type itong muli nang tumpak hangga\'t maaari. Agad inihahambing ang bawat character sa halimbawa: normal ang tama, may kulay ang mali. Habang tumatakbo ang oras, puwede mong burahin ang mali gamit ang Backspace at itama ito.</p><p>Ginawa ang test para sa karaniwang QWERTY keyboard, ang layout ng halos lahat ng laptop at computer sa Pilipinas. Lahat ay kinukuwenta sa browser mismo, walang account o sign-up, at sa device na ito lang naitatala ang mga resulta mo.</p>'
    },
    {
      h2: 'Ano ang WPM',
      html: '<p>Ipinapakita ang bilis sa <em>WPM</em>, o words per minute: ilang salita ang na-type mo bawat minuto. Magkakaiba ang haba ng mga salita, kaya binibilang ang isang salita bilang limang character, kasama ang espasyo at bantas. Sa ganitong paraan, hindi nakadepende ang resulta sa kung maiikli o mahahaba ang mga salita sa talata.</p><p>Mahahaba ang maraming salitang Filipino dahil sa mga panlapi, gaya ng <em>pinakamagaganda</em> o <em>nagkakaintindihan</em>. Dahil limang character ang isang salita sa pagkuwenta, hindi nito pinabababa ang iskor mo. Kung gusto mong malaman ang character bawat minuto, i-multiply ang WPM sa lima: ang 40 WPM ay mga 200 character bawat minuto.</p>'
    },
    {
      h2: 'Ano ang binibilang na isang character',
      html: '<p>Isang character ang bawat titik, numero, espasyo at bantas. Isang character din ang malaking titik, kahit dalawang key ang kailangan: Shift at ang titik mismo. Ang sobra o kulang na character ay nag-uusog sa natitirang bahagi ng salita, kaya madaling makita ang ganitong mali.</p><p>Walang titik na may tuldik sa mga talata, at hindi rin ginagamit ang ñ, kaya lahat ng titik ay nasa QWERTY keyboard nang walang espesyal na kombinasyon. Ang madalas nakapagpapabagal ay ang malalaking titik sa simula ng pangungusap at sa mga pangalan, ang gitling sa mga salitang gaya ng <em>mag-aral</em> at <em>araw-araw</em>, at ang mga bantas na kailangan ng Shift, gaya ng tandang pananong at tutuldok.</p>'
    },
    {
      h2: '1, 5 o 10 minuto: alin ang pipiliin',
      html: '<p>Ang test na isang minuto o mas maikli ay pangunahing nagpapakita ng pinakamataas mong bilis. Buo ang pokus mo at halos hindi ka napapagod, pero malaki ang epekto ng isang mali sa huling resulta.</p><p>Iba ang sinusukat ng lima o sampung minuto: tibay. Unti-unting humihina ang atensyon, napapagod ang mga kamay, at doon nakikita kung tumatagal ang tamang teknik. Karaniwang mas mababa nang kaunti ang resulta kaysa sa maikling test, at mas malapit sa tunay mong bilis kapag sumusulat ka ng mahabang ulat o email. Para maihambing ang sarili mo sa dati mong resulta, piliin ang parehong haba tuwing magte-test ka.</p>'
    },
    {
      h2: 'Paano basahin ang katumpakan',
      html: '<p>Ipinapakita ng katumpakan kung gaano kalaking bahagi ng mga na-type mong character ang tugma sa halimbawa. Ang bilang ng mali sa tabi nito ay ang mga character na mali pa rin nang matapos ang test: hindi na binibilang ang naitamang mali, pero nagamit na ang oras sa pagtatama. Kasama sa WPM ang lahat ng na-type na character, pati ang mali, kaya ang mataas na bilis na may maraming mali ay mukhang mas maganda kaysa sa totoo.</p><p>Isang simpleng tuntunin: kung mas mababa sa 95% ang katumpakan mo, magdahan-dahan nang kaunti. Sa araw-araw na trabaho, may kapalit na oras ang bawat mali, at nasisira ang ritmo kapag madalas ang Backspace. Ipinapakita naman ng konsistensi kung pantay ang bilis mo sa buong test o pabago-bago.</p>'
    },
    {
      h2: 'Paano mag-type nang mas mabilis',
      html: '<ul><li>Matuto ng touch typing gamit ang sampung daliri mula sa gitnang hanay: kaliwang kamay sa A S D F, kanang kamay sa J K L at semicolon, hinlalaki sa space bar.</li><li>Huwag tumingin sa keyboard. Babagal ka muna, pero ito lang ang paraan para matandaan ng mga daliri ang puwesto ng bawat key.</li><li>Pindutin ang Shift gamit ang hinliliit ng kabilang kamay mula sa titik na gagawing malaki.</li><li>Mas mabuti ang sampung minuto araw-araw kaysa isang oras minsan sa isang linggo.</li><li>Unahin ang katumpakan. Susunod ang bilis kapag nakasanayan na ang galaw ng mga daliri.</li></ul><p>Inaayos ito nang hakbang-hakbang ng <a class="inline-link" href="{course}">kursong may {lessons} aralin</a>, sa sarili mong keyboard, mula sa gitnang hanay hanggang sa mga bantas.</p>'
    }
  ],
  faqTitle: 'Mga madalas itanong',
  faq: [
    ['Ano ang WPM?', 'Ang WPM ay words per minute, o salita bawat minuto. Binibilang ang isang salita bilang limang character, kasama ang espasyo, kaya hindi nakadepende ang resulta sa haba ng mga salita sa talata.'],
    ['Kailangan ko bang i-type ang ñ?', 'Hindi. Hindi gumagamit ng ñ o ng mga titik na may tuldik ang mga talata ng test, kaya sapat ang karaniwang QWERTY keyboard.'],
    ['Aling haba ang dapat kong piliin?', 'Ipinapakita ng isang minuto ang pinakamataas mong bilis, at ng lima o sampung minuto ang tibay mo. Para maihambing sa mga dating resulta, piliin palagi ang parehong haba.'],
    ['Puwede ba ito sa laptop?', 'Oo. Gumagamit ang test ng parehong QWERTY layout ng halos lahat ng laptop. Sa phone o tablet, gumamit ng pisikal na keyboard para may saysay ang resulta.'],
    ['Naitatala ba ang mga resulta ko?', 'Sa browser lang ng device na ito. Walang account at walang sign-up. Kapag binura mo ang data ng browser, mawawala rin ang kasaysayan.']
  ],
  cta: { eyebrow: 'Gusto mong mag-type nang mas mabilis?', title: 'Matutong mag-touch type', text: '{lessons} aralin sa sarili mong keyboard, simula sa gitnang hanay.', button: 'Tingnan ang kurso' }
};
