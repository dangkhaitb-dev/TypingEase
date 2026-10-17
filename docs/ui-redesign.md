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

The hero uses seven distinct stock photographs. Six audience cards, the statement background and portrait arcs on other language homepages also use source photographs. These are illustrative stock photos, not testimonials or evidence of people using TypingEase. Actual app screenshots remain in the separate product preview and three steps. Do not synthesize people or replace screens inside these photographs.

Earlier AI assets and generation manifests are historical artifacts only and are not referenced by page templates.

## Carousel interaction

The hero retains the reference perspective, depth and rotation, with seven cards, pointer dragging, touch swiping and reduced-motion support. The hero has no visible next/previous, counter or pause control row. The six-item audience row supports native touch scroll, mouse dragging, arrow buttons and keyboard navigation with centered snapping. It initially centers the third card, keeping neighboring cards visible on both sides without the leading blank space.

## MiniMax-based layout system

`11ty/styles/home-canvas.css` is the final homepage layout layer, rewritten as one system rather than stacked visual overrides. Reference: https://design.minimax.io/vi.

The desktop hero uses a centered TypingEase identity, a short promise and a compact course action. Seven source photographs sit around it in the reference's varied sizes and positions. Labels, decorative eyebrow copy and the extra discovery link were removed from the hero. The canvas uses a faint dot pattern, soft neutral color and minimal shadows. Smaller screens retain swipeable photographs; the hero control row stays absent.

Below the hero: a large app preview, a horizontally scrollable three-step card row with real links and arrow navigation, a light two-column photography panel, the centered audience carousel, a quiet feature list, a two-column FAQ and a restrained final CTA. One spacing, border and corner-radius system runs throughout. Green remains the accent. No MiniMax branding, assets, copy or AI photographs are used.

### Reference typography

The EN/VI product homepage uses Outfit for headings, Inter for body and controls, and Abhaya Libre (800) for the hero serif accent, matching the families observed on MiniMax Design. Inter remains the fallback for Vietnamese glyphs outside Outfit’s coverage. Photo cards retain the rectangular, lightly rounded treatment from the supplied HTML reference; they are not circular.

Hero simplification: removed the mascot and course selector. The single Get started link opens the current locale’s lessons. Font files are served locally so hero typography does not depend on Google Fonts availability. MiniMax’s visible brand headline is SVG artwork, not its hidden H1 font; TypingEase retains its own typographic wordmark.

Photo layout correction: hero photography follows velprompt’s centered 3D arc beneath the copy, with 340×240 desktop cards (250×180 mobile), 1600px perspective, side rotation and depth/blur. The scattered MiniMax photo positions were removed. Seven real photos, swipe interaction, and no control bar remain.
