/* phap-ly/text/en.mjs — About / Terms of Service / Privacy Policy, ENGLISH MASTER.
 * Every other phap-ly/text/<lang>.mjs is a translation of this file and says the English version
 * prevails. Facts here must stay true to the code: no accounts, no cookies, no analytics, no ads;
 * progress lives in localStorage; Google Fonts; hosting on Cloudflare Pages. Change the facts here
 * first, then have the translations updated. `{email}` is filled in by the generator.
 */
export default {
  lang: 'en',
  urls: { about: '/about/', terms: '/terms/', privacy: '/privacy/' },
  footer: { about: 'About', terms: 'Terms of Service', privacy: 'Privacy Policy' },
  breadcrumbAria: 'Breadcrumb',
  home: 'Home',
  updatedLabel: 'Last updated',
  prevails: '',
  pages: {
    about: {
      title: 'About TypingEase: touch typing on your own keyboard',
      description: 'TypingEase is a free touch-typing course built on real keyboard layouts in 27 languages. No account, no ads, and your progress stays on your device.',
      eyebrow: 'About',
      h1: 'About TypingEase',
      lead: 'TypingEase is a free touch-typing course that teaches you to type on the keyboard you actually use, in your own language.',
      sections: [
        { h2: 'What we make', html: '<p>Most typing tutors teach an American QWERTY keyboard and relabel the keys for everyone else. TypingEase builds each course from the layout itself: AZERTY, QWERTZ, BÉPO, Dvorak, Colemak, the Arabic, Hebrew, Thai, Devanagari and Bengali keyboards, Korean two-set Hangul, Japanese JIS, Chinese Pinyin and Zhuyin, and more. The first lesson always starts on the home-row keys of your layout, and every word you type is one you can already reach.</p><p>Next to the course there are a typing speed test, typing games and a progress page, in the languages where they are ready.</p>' },
        { h2: 'How it works', html: '<ul><li>Free to use, with no account and no signup.</li><li>No advertising, no analytics and no tracking cookies.</li><li>Your lessons, scores and settings are stored only in your own browser.</li><li>Everything runs in the browser; once a page has loaded, most of the site also works offline.</li></ul>' },
        { h2: 'Who is behind it', html: '<p>TypingEase is an independent project run from Vietnam. The course content in each language was written for this site and is reviewed and improved over time; if you spot a mistake in your language, we would like to hear about it.</p>' },
        { h2: 'Contact', html: '<p>Questions, corrections and suggestions: <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' }
      ]
    },
    terms: {
      title: 'Terms of Service | TypingEase',
      description: 'The terms for using TypingEase, the free touch-typing course: what you may do, what we provide and do not promise, and how to contact us.',
      eyebrow: 'Legal',
      h1: 'Terms of Service',
      lead: 'These terms apply when you use typingease.site. By using the site you agree to them. If you do not agree, please do not use the site.',
      sections: [
        { h2: '1. The service', html: '<p>TypingEase (“we”) provides free touch-typing lessons, a typing test, typing games and a progress page in a web browser (the “service”). The service is free of charge and requires no account.</p>' },
        { h2: '2. Using the service', html: '<p>You may use the service for personal learning, at home, at school or at work, including in a classroom. You agree not to:</p><ul><li>interfere with the site, overload it or try to break its security;</li><li>copy, republish or sell the site’s lessons, texts or word lists as your own product;</li><li>use the service in a way that breaks the law.</li></ul>' },
        { h2: '3. Content and intellectual property', html: '<p>The lessons, texts, word lists, illustrations and design of the site belong to TypingEase unless stated otherwise. You may link to any page and share screenshots of your own results. Third-party software and fonts used on the site (for example three.js and Google Fonts) remain under their own licences.</p>' },
        { h2: '4. Your data', html: '<p>Your progress and settings are stored in your own browser, not on our servers. You are responsible for keeping them: clearing your browser data deletes them, and we cannot restore them. How we handle data is described in the <a class="inline-link" href="{privacy}">Privacy Policy</a>.</p>' },
        { h2: '5. No warranty', html: '<p>The service is provided “as is” and “as available”. We work to keep lessons correct and the site available, but we do not guarantee that it is free of errors, uninterrupted, or suitable for a particular purpose, such as preparing for a specific exam. Typing speeds and scores shown by the service are for practice and are not an official certification.</p>' },
        { h2: '6. Limitation of liability', html: '<p>To the extent the law allows, TypingEase is not liable for any indirect or consequential loss, or for loss of data, arising from your use of the service. Nothing in these terms limits rights you have under consumer law that cannot be excluded.</p>' },
        { h2: '7. Changes', html: '<p>We may change the service or these terms. When the terms change, we update the date at the top of this page. Continuing to use the site after a change means you accept the new terms.</p>' },
        { h2: '8. Law and contact', html: '<p>These terms are governed by the laws of Vietnam. Questions about these terms: <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' }
      ]
    },
    privacy: {
      title: 'Privacy Policy | TypingEase',
      description: 'TypingEase has no accounts, no cookies, no analytics and no ads. Your typing progress stays in your own browser. Here is exactly what is stored and where.',
      eyebrow: 'Legal',
      h1: 'Privacy Policy',
      lead: 'Short version: we do not collect your personal data. Your lessons and scores are saved in your own browser and never sent to us.',
      sections: [
        { h2: '1. Who we are', html: '<p>TypingEase operates typingease.site. For anything related to privacy, write to <a class="inline-link" href="mailto:{email}">{email}</a>.</p>' },
        { h2: '2. What we do not collect', html: '<ul><li>No accounts, names, email addresses or passwords: the service has no signup.</li><li>No cookies are set by TypingEase.</li><li>No analytics, advertising or tracking scripts, and no selling or sharing of data.</li><li>What you type in lessons, tests and games is processed in your browser and is not sent to us.</li></ul>' },
        { h2: '3. What is stored on your device', html: '<p>To remember your progress, the site uses your browser’s local storage (localStorage) on your own device. It holds your lesson progress and stars, badges, typing-test history, game best scores, your daily goal and streak, your keyboard and sound settings, and your chosen language. The site also installs a service worker that keeps copies of its own pages and files so that it loads faster and works offline.</p><p>This information never leaves your device. You can delete it at any time with the “Clear history” button on the progress page, or by clearing the site data for typingease.site in your browser settings.</p>' },
        { h2: '4. Third parties', html: '<ul><li><b>Hosting.</b> The site is hosted on Cloudflare Pages. Like any web host, Cloudflare processes technical data such as your IP address and browser type to deliver pages and protect the site from abuse. See Cloudflare’s privacy policy.</li><li><b>Fonts.</b> Pages load fonts from Google Fonts, so your browser sends a request, including your IP address, to Google’s servers. See Google’s privacy policy.</li></ul><p>We do not receive personal data from these providers for our own use.</p>' },
        { h2: '5. Children', html: '<p>The service can be used by learners of any age and collects no personal data from anyone, including children.</p>' },
        { h2: '6. Your rights', html: '<p>Because we hold no personal data about you, there is nothing for us to access, correct or delete on our side; the data on your device is under your control as described above. If you have a question or a request, contact us at the address above.</p>' },
        { h2: '7. Changes to this policy', html: '<p>If the way the site handles data changes, for example if we ever add analytics, we will update this page and its date before the change takes effect.</p>' }
      ]
    }
  }
};
