/* content/legal/sw.mjs — Kuhusu / Masharti ya Huduma / Sera ya Faragha, Kiswahili.
 * Tafsiri ya content/legal/en.mjs (toleo la Kiingereza ndilo linalotumika). Xưng "wewe", thuật ngữ
 * khớp i18n/ui.sw.js. `{email}` na `{privacy}` hujazwa na jenereta.
 */
export default {
  lang: 'sw',
  footer: { about: 'Kuhusu', terms: 'Masharti ya Huduma', privacy: 'Sera ya Faragha' },
  breadcrumbAria: 'Njia ya ukurasa',
  home: 'Ukurasa mkuu',
  updatedLabel: 'Ilisasishwa mwisho',
  prevails: 'Hii ni tafsiri. Ikiwa inatofautiana na toleo la Kiingereza, toleo la Kiingereza ndilo linalotumika.',
  pages: {
    about: {
      title: 'Kuhusu TypingEase: vidole kumi kwenye kibodi yako mwenyewe',
      description: 'Kozi ya bure ya TypingEase ya kuandika kwa vidole kumi, kwenye kibodi halisi katika lugha 27. Bila akaunti wala matangazo; maendeleo hubaki kifaani mwako.',
      eyebrow: 'Kuhusu',
      h1: 'Kuhusu TypingEase',
      lead: 'TypingEase ni kozi ya bure ya kuandika kwa vidole kumi inayokufundisha kuandika kwenye kibodi unayoitumia kweli, kwa lugha yako mwenyewe.',
      sections: [
        { h2: 'Tunachotengeneza', html: '<p>Programu nyingi za kufundisha kuandika hufundisha kibodi ya QWERTY ya Kimarekani na kubadilisha tu majina ya vitufe kwa kila mtu mwingine. TypingEase hujenga kila kozi kutokana na mpangilio wenyewe: AZERTY, QWERTZ, BÉPO, Dvorak, Colemak, kibodi za Kiarabu, Kiebrania, Kithai, Devanagari na Kibengali, Hangul ya seti mbili ya Kikorea, JIS ya Kijapani, Pinyin na Zhuyin za Kichina, na nyinginezo. Somo la kwanza huanza kila mara kwenye vitufe vya safu ya nyumbani ya mpangilio wako, na kila neno unaloandika linatumia vitufe ambavyo tayari unaweza kuvifikia.</p><p>Kando ya kozi kuna jaribio la kasi ya kuandika, michezo ya kuandika na ukurasa wa maendeleo, katika lugha ambazo viko tayari.</p>' },
        { h2: 'Jinsi inavyofanya kazi', html: '<ul><li>Ni bure kutumia, bila akaunti na bila kujisajili.</li><li>Hakuna matangazo. Takwimu za matumizi zisizokutambulisha hukusanywa tu ukiziruhusu kwenye bango la vidakuzi.</li><li>Masomo, alama na mipangilio yako huhifadhiwa kwenye kivinjari chako mwenyewe tu.</li><li>Kila kitu huendeshwa kwenye kivinjari; ukurasa ukishapakiwa, sehemu kubwa ya tovuti hufanya kazi hata bila mtandao.</li></ul>' },
        { h2: 'Nani yuko nyuma yake', html: '<p>TypingEase ni mradi huru unaoendeshwa kutoka Vietnam. Maudhui ya kozi katika kila lugha yaliandikwa kwa ajili ya tovuti hii na hukaguliwa na kuboreshwa kadiri muda unavyokwenda; ukiona kosa katika lugha yako, tungependa kujua.</p>' },
        { h2: 'Mawasiliano', html: '<p>Maswali, masahihisho na mapendekezo: <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' }
      ]
    },
    terms: {
      title: 'Masharti ya Huduma | TypingEase',
      description: 'Masharti ya kutumia TypingEase, kozi ya bure ya kuandika kwa vidole kumi: unachoruhusiwa kufanya, tunachotoa na tusichoahidi, na jinsi ya kuwasiliana nasi.',
      eyebrow: 'Kisheria',
      h1: 'Masharti ya Huduma',
      lead: 'Masharti haya yanatumika unapotumia typingease.site. Kwa kutumia tovuti, unakubali masharti haya. Ikiwa hukubaliani nayo, tafadhali usitumie tovuti hii.',
      sections: [
        { h2: '1. Huduma', html: '<p>TypingEase (“sisi”) hutoa masomo ya bure ya kuandika kwa vidole kumi, jaribio la kuandika, michezo ya kuandika na ukurasa wa maendeleo kwenye kivinjari (“huduma”). Huduma ni bure na haihitaji akaunti.</p>' },
        { h2: '2. Kutumia huduma', html: '<p>Unaweza kutumia huduma kwa ajili ya kujifunza binafsi, nyumbani, shuleni au kazini, ikiwa ni pamoja na darasani. Unakubali kutofanya yafuatayo:</p><ul><li>kuingilia tovuti, kuielemea au kujaribu kuvunja usalama wake;</li><li>kunakili, kuchapisha upya au kuuza masomo, maandishi au orodha za maneno za tovuti kama bidhaa yako mwenyewe;</li><li>kutumia huduma kwa njia inayovunja sheria.</li></ul>' },
        { h2: '3. Maudhui na haki miliki', html: '<p>Masomo, maandishi, orodha za maneno, michoro na muundo wa tovuti ni mali ya TypingEase isipokuwa imeelezwa vinginevyo. Unaweza kuweka kiungo kwa ukurasa wowote na kushiriki picha za skrini za matokeo yako mwenyewe. Programu na fonti za wahusika wengine zinazotumika kwenye tovuti (kwa mfano three.js na Google Fonts) zinabaki chini ya leseni zao wenyewe.</p>' },
        { h2: '4. Data yako', html: '<p>Maendeleo na mipangilio yako huhifadhiwa kwenye kivinjari chako mwenyewe, si kwenye seva zetu. Wewe ndiye unayewajibika kuzitunza: kufuta data ya kivinjari kunazifuta, na hatuwezi kuzirejesha. Jinsi tunavyoshughulikia data imeelezwa katika <a class="inline-link" href="{privacy}">Sera ya Faragha</a>.</p>' },
        { h2: '5. Hakuna dhamana', html: '<p>Huduma hutolewa “kama ilivyo” na “kadiri inavyopatikana”. Tunajitahidi kuhakikisha masomo ni sahihi na tovuti inapatikana, lakini hatuhakikishi kwamba haina makosa, haikatiki, au inafaa kwa madhumuni fulani, kama vile kujiandaa kwa mtihani maalum. Kasi za kuandika na alama zinazoonyeshwa na huduma ni za mazoezi na si cheti rasmi.</p>' },
        { h2: '6. Kikomo cha dhima', html: '<p>Kwa kiwango kinachoruhusiwa na sheria, TypingEase haiwajibiki kwa hasara yoyote isiyo ya moja kwa moja au inayotokana na matokeo, wala kwa upotevu wa data, unaotokana na matumizi yako ya huduma. Hakuna chochote katika masharti haya kinachopunguza haki ulizo nazo chini ya sheria ya kumlinda mlaji ambazo haziwezi kuondolewa.</p>' },
        { h2: '7. Mabadiliko', html: '<p>Tunaweza kubadilisha huduma au masharti haya. Masharti yanapobadilika, tunasasisha tarehe iliyo juu ya ukurasa huu. Kuendelea kutumia tovuti baada ya mabadiliko kunamaanisha kwamba unakubali masharti mapya.</p>' },
        { h2: '8. Sheria na mawasiliano', html: '<p>Masharti haya yanaongozwa na sheria za Vietnam. Maswali kuhusu masharti haya: <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' }
      ]
    },
    privacy: {
      title: 'Sera ya Faragha | TypingEase',
      description: 'TypingEase haina akaunti wala matangazo. Maendeleo yako ya kuandika hubaki kivinjarini mwako, na vidakuzi vya takwimu hutumika tu ukiviruhusu. Hiki ndicho hasa kinachokusanywa na kuhifadhiwa.',
      eyebrow: 'Kisheria',
      h1: 'Sera ya Faragha',
      lead: 'Kwa ufupi: hatukuulizi kamwe wewe ni nani, na unachoandika hubaki kwenye kivinjari chako. Ukiruhusu tu, tunakusanya takwimu za matumizi zisizokutambulisha ili kuboresha tovuti.',
      sections: [
        { h2: '1. Sisi ni nani', html: '<p>TypingEase huendesha typingease.site. Kwa jambo lolote linalohusu faragha, tuandikie kwa <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' },
        { h2: '2. Tunachokusanya', html: '<p>Ukichagua “Ruhusu” kwenye bango la vidakuzi tu, tovuti hutumia Google Analytics (kupitia Google Firebase) kukusanya takwimu za matumizi zisizokutambulisha:</p><ul><li>kurasa unazofungua, na vitufe na mipangilio unayotumia (vinatambuliwa kwa kitufe, si kwa chochote unachoandika);</li><li>matokeo ya masomo na majaribio ya kuandika: somo, muda, kasi, usahihi na idadi ya makosa;</li><li>lugha ya ukurasa, na taarifa za jumla za kiufundi ambazo Google Analytics hupata yenyewe, kama vile aina ya kifaa, kivinjari, ukubwa wa skrini na nchi au jiji kwa makadirio.</li></ul><p>Hii hutuonyesha ni masomo gani yanafanya kazi na wapi wanafunzi hukwama. Haikutambulishi kwetu: tovuti haina akaunti, na Google Analytics haihifadhi anwani yako ya IP.</p><p>Hatukusanyi kamwe, iwe kwa ruhusa yako au bila ruhusa yako:</p><ul><li>majina, anwani za barua pepe wala manenosiri: huduma haina usajili;</li><li>unachoandika katika masomo, majaribio na michezo, ambacho huchakatwa kwenye kivinjari chako na hakitumwi kwetu;</li><li>data kwa ajili ya matangazo: hatuonyeshi matangazo na hatuuzi wala kushiriki data.</li></ul>' },
        { h2: '3. Vidakuzi na chaguo lako', html: '<p>Katika ziara yako ya kwanza, bango hukuuliza kama unaruhusu vidakuzi vya takwimu.</p><ul><li><b>Kataa.</b> Hakuna takwimu zinazopakiwa na hakuna vidakuzi vinavyowekwa. Tovuti hufanya kazi vilevile kabisa.</li><li><b>Ruhusu.</b> Google Analytics huweka vidakuzi <code>_ga</code> na <code>_ga_*</code>, ambavyo huhifadhi kitambulisho cha nasibu kwa hadi miaka miwili ili ziara za kurudia ziweze kuhesabiwa.</li></ul><p>Chaguo lako lenyewe huhifadhiwa kwenye hifadhi ya ndani ya kivinjari chako, si kwenye kidakuzi. Unaweza kulibadilisha wakati wowote; ukiondoa idhini yako, takwimu husimama na vidakuzi vyake hufutwa.</p><p><button type="button" class="secondary-button" data-cookie-settings>Mipangilio ya vidakuzi</button></p>' },
        { h2: '4. Kinachohifadhiwa kwenye kifaa chako', html: '<p>Ili kukumbuka maendeleo yako, tovuti hutumia hifadhi ya ndani ya kivinjari chako (localStorage) kwenye kifaa chako mwenyewe. Humo huhifadhiwa maendeleo yako ya masomo na nyota, beji, historia ya majaribio ya kuandika, alama bora za michezo, lengo lako la kila siku na siku zako mfululizo, mipangilio yako ya kibodi na sauti, lugha uliyochagua na chaguo lako la vidakuzi. Tovuti pia husakinisha service worker inayohifadhi nakala za kurasa na faili zake yenyewe ili ipakie haraka zaidi na ifanye kazi bila mtandao.</p><p>Taarifa hizi haziondoki kamwe kwenye kifaa chako. Unaweza kuzifuta wakati wowote kwa kitufe cha “Futa historia” kwenye ukurasa wa maendeleo, au kwa kufuta data ya tovuti ya typingease.site katika mipangilio ya kivinjari chako.</p>' },
        { h2: '5. Wahusika wengine', html: '<ul><li><b>Upangishaji.</b> Tovuti imepangishwa kwenye Cloudflare Pages. Kama mpangishaji yeyote wa wavuti, Cloudflare huchakata data za kiufundi kama vile anwani yako ya IP na aina ya kivinjari chako ili kuwasilisha kurasa na kulinda tovuti dhidi ya matumizi mabaya. Tazama sera ya faragha ya Cloudflare.</li><li><b>Fonti.</b> Kurasa hupakia fonti kutoka Google Fonts, kwa hiyo kivinjari chako hutuma ombi, pamoja na anwani yako ya IP, kwa seva za Google. Tazama sera ya faragha ya Google.</li><li><b>Takwimu.</b> Kwa idhini yako tu, takwimu za matumizi huchakatwa na Google Analytics, huduma ya Google LLC, ambayo inaweza kuzichakata kwenye seva zilizo nje ya nchi yako. Tazama sera ya faragha ya Google na “Jinsi Google hutumia taarifa kutoka kwa tovuti zinazotumia huduma zetu”.</li></ul><p>Hatupokei data binafsi kutoka kwa watoa huduma hawa, na hatutumii data yao kwa matangazo.</p>' },
        { h2: '6. Watoto', html: '<p>Huduma inaweza kutumiwa na wanafunzi wa umri wowote. Haimwombi mtu yeyote, wakiwemo watoto, data binafsi, na takwimu hufanya kazi tu baada ya mtu anayetumia kifaa kuziruhusu.</p>' },
        { h2: '7. Haki zako', html: '<p>Hatuna data yoyote inayotuambia wewe ni nani, na data iliyo kwenye kifaa chako iko chini ya udhibiti wako kama ilivyoelezwa hapo juu. Unaweza kuondoa idhini yako ya takwimu wakati wowote kwa kitufe cha “Mipangilio ya vidakuzi” kilicho hapo juu; takwimu za matumizi zilizokwisha kukusanywa huhifadhiwa na Google Analytics kwa kipindi maalum kisichozidi miezi 14, kisha hufutwa. Ukiwa na swali au ombi, wasiliana nasi kwa anwani iliyo hapo juu.</p>' },
        { h2: '8. Mabadiliko ya sera hii', html: '<p>Ikiwa jinsi tovuti inavyoshughulikia data itabadilika, tutasasisha ukurasa huu na tarehe yake kabla mabadiliko hayo hayajaanza kutumika.</p>' }
      ]
    }
  }
};
