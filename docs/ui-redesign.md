# Shared interface

All non-redirect pages use the same site header, built by `tooling/lib/site-header.mjs` through the Eleventy `shared-header` transform. Navigation labels and routes come from `content/roadmaps/config.<lang>.mjs`; course-specific routes come from the language catalogue. Change the shared component rather than editing individual generated headers. The lesson player keeps its controls in a contextual toolbar below the site navigation.

`11ty/styles/design-system.css` is loaded after page styles through the `design-shell` transform. The primary colour remains TypingEase green (`#157a55`). System typography, neutral surfaces, consistent spacing and reduced-motion/transparency preferences apply across the site.

`11ty/client/interface-icons.js` supplies original, monochrome SVG interface icons. They follow the visual direction of native interfaces but are not Apple SF Symbols. It enhances labelled controls and decorative icon containers only; it does not change lesson content or keyboard characters.

Existing lesson tests in `tooling/test/e2e.js` refer to older lesson IDs such as `u1-l01`; current Vietnamese lessons use IDs such as `vi-01-001`. UI validation must use the current catalogue when exercising the player.

After building and starting the preview server, run `PW=/path/to/playwright-core CHROME=/path/to/chrome node tooling/test/ui-shell.cjs http://127.0.0.1:8765`. This checks shared-header coverage across built pages, 13 representative routes at desktop/tablet/mobile sizes, menu behavior, the green accent, overflow and a current lesson's typing controls. Set `UI_OUT` to a directory to save screenshots.

## Homepage reference

The English and Vietnamese homepages follow the supplied `velprompt.html` product presentation: dotted hero, green italic serif emphasis, compact course selector, seven-card 3D carousel, real application preview, three steps, full-width photo statement, six photo audience cards, resources, FAQ and a multi-column footer. `tooling/lib/product-landing.mjs` supplies the localized sections through the home-presentation transform.

The hero contains no typing demo or keyboard. Its language selector and “Get started” / “Bắt đầu học” button open the selected course roadmap. `11ty/client/product-landing.js` also switches the lesson, roadmap and typing-test preview images together with their destination links. Original application captures are in `content/media/product-ui/`; the site serves their WebP versions from `public/assets/product-ui/`.

Run `tooling/test/home-presentation.cjs` with the same PW/CHROME, base URL and optional UI_OUT settings as the UI shell check to validate the product homepages on desktop and mobile.

## Homepage photography — real photographs only

The user requires actual photographs of real people, with no AI-generated or AI-edited images. All homepage photography now comes from the Unsplash sources listed in `docs/home-people-sources.json`. Original downloads are retained in `content/media/people/`; the site serves WebP files from `public/assets/people/`.

The hero uses seven distinct stock photographs. Six audience cards, the statement background and portrait arcs on other language homepages also use source photographs. These are illustrative stock photos, not testimonials or evidence of people using TypingEase. Actual app screenshots remain in the separate product preview and four feature cards. Do not synthesize people or replace screens inside these photographs.

Earlier AI assets and generation manifests are historical artifacts only and are not referenced by page templates.

## Carousel interaction

The hero retains the reference perspective, depth and rotation, with seven cards, pointer dragging, touch swiping and reduced-motion support. The hero has no visible next/previous, counter or pause control row. The six-item audience row supports native touch scroll, mouse dragging, arrow buttons and keyboard navigation with centered snapping. It initially centers the third card, keeping neighboring cards visible on both sides without the leading blank space.

## MiniMax-based layout system

Reference: https://design.minimax.io/vi. The homepage header is transparent and scrolls with the page using the supplied glass geometry. It contains Course, Test, Game and a native language picker. Inner pages retain the shared application navigation. The original generated typing mascot is available as PNG and served as WebP in the header and hero.

The H1 reads “Learn to type free”, entirely in Outfit; only “type” is green. Inter is used for body copy and controls. The single black-and-white Get started action opens the locale’s course. Fonts are served locally. The background uses light #d2d4d8 dots, radius .9px with a soft edge at1.1px, spaced24px apart.

Seven real photos follow velprompt’s centered 3D arc beneath the hero, with340×240 desktop cards and250×180 mobile cards,1600px perspective, depth, rotation and side blur. No visible hero control bar. The hero and lower card rails use a2-second idle delay, pause on hover/focus/drag or hidden tabs, and respect reduced motion. Lower rails reverse at their ends.

Below the hero: four real UI previews (lesson, course, test, games), four feature cards, a light two-column photo panel, six captioned audience cards, open two-column capability lists, FAQ and a dotted closing CTA. Screenshots were refreshed from the running EN/VI application. People photos remain unmodified stock; generated imagery is limited to the explicitly requested brand mascot.

Screenshot refresh: lesson/course/games/progress captures are1280×836; test captures are1280×476 after trimming empty lower space. Header is excluded. Preview images retain natural ratios; cards use100% image width instead of the inherited145%. The v3 original PNG brand mark is a restrained black keyboard symbol with small cutout eyes and three keys.

Language homepages share the EN product presentation (VI keeps its existing copy), with locale-specific course, lesson, test, game and progress URLs from the roadmap configurations. Original document locale/SEO metadata remains; English presentation sections declare their content language and left-to-right direction even on RTL document routes.

Latest correction: homepage header is absolute, so it scrolls away with the page. Hero photographs now use seven source Pexels images showing actual hands typing; sources and licenses are recorded in docs/hero-typing-sources.json.

Hero photo selection retains five original context-rich stock photographs (learner, student, team, coworking, creative) and two new typing close-ups (light and overhead), preserving varied people, colors and framing.

Final hero mix keeps four original photos (learner, team, coworking, creative) and three typing photos (light, overhead, outdoors); the blue-wall denim portrait is removed from the hero. Header logo44px desktop/38px mobile; hero logo88px desktop/48px mobile (40px at320px screens).
