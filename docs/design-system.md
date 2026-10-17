# TypingEase design system

Clean, modern and refined, in the spirit of Apple's interfaces: content first, generous white
space, large confident type, quiet surfaces and one accent colour used sparingly. Tokens live in
`11ty/styles/tokens.css`; the shell and shared components in `11ty/styles/base.css`. A raw colour
in a page stylesheet is a bug unless it is listed under Exceptions — add a token instead.

## Colour

- **Neutrals carry the page.** Page `--canvas` (#fbfbfd), cards `--surface` (white), grey panels
  `--surface-alt` (#f5f5f7). Text `--ink-900` (#1d1d1f), secondary `--ink-600` (#6e6e73), captions
  `--ink-500`. Hairlines `--border` (8% black) and `--ink-200`; input borders `--border-strong`.
- **One accent: TypingEase green** (`--primary-600` #157a55, hover `--primary-700`). Use it for the
  primary button, links, the active/selected state, progress fills and the typing caret — nothing
  else. Large green areas are wrong; a tint (`--primary-50/100`) is the most a surface gets.
- **Lime** (`--accent-*`) is a tiny highlight at most once per view (the new key of a lesson,
  a personal best). Never a fill behind text.
- **Semantic:** `--error` only for wrong keys and failures, `--gold-*` only for stars/achievements,
  `--success` (green) for completed.

## Type

- System font: `--font-body` = SF Pro on Apple devices, Inter elsewhere (loaded from Google Fonts
  together with Roboto Mono). Typing text, timers and numbers: `--font-mono`.
- Display: h1 `clamp(40px, 6vw, 64px)`, weight 700, line-height 1.06, tracking `--track-display`
  (-0.025em). h2 `clamp(28px, 3.6vw, 40px)`. Card titles 19–21px weight 600, tracking -0.015em.
- Body 17px / 1.47, tracking -0.011em; intro paragraphs 21px in `--ink-600`.
- Small labels are **sentence case**, 12–14px, weight 500–600, no letter-spacing, no uppercase.
- Hierarchy comes from size + weight + colour, not from boxes, borders or ALL CAPS.

## Surfaces & shape

| Element | Look |
| --- | --- |
| Card / panel | white, no border, `--r-lg` 20px (big panels `--r-xl` 28px), `--shadow-card`; on hover lift 2px to `--shadow-lift` (only when clickable) |
| Grey tile inside a white card | `--surface-alt`, no shadow, `--r` 14px |
| Primary button | pill (`--r-pill`), `--primary-600` fill, white 17px weight 500, no shadow; hover `--primary-700` |
| Secondary button | pill, 1px `--primary-600` outline, green text; hover fills green |
| Tertiary / link button | green text, optional " ›" chevron, no box |
| Segmented control | `--surface-alt` track, `--r-pill`; selected segment white with `--shadow-sm` |
| Inputs / selects | white, 1px `--border-strong`, `--r` 14px, 44px tall; focus ring `--shadow-focus` |
| Chips / pills | `rgba(0,0,0,.05)` fill, `--r-pill`, 13px weight 500 |
| Selected item | `--primary-50` fill + green text, or a 2px green outline — never a heavy edge |

No bottom "keycap" edges, no 2px borders, no hard offset shadows. Separation comes from tone
(white on #fbfbfd/#f5f5f7), hairlines and soft shadows.

## Layout

- Sticky translucent top bar (`--glass` + `backdrop-filter`), 56px, hairline bottom border; 13px
  menu items; the active one is a subtle grey pill with weight 600.
- Content width `--w-page` 1080px, reading width `--w-read` 700px, gutter `--pad-x`.
- Section rhythm `--gap-section` 96px (smaller on phones). Prefer centred hero text.
- Breakpoints: 900px and 620px.

## Motion & feedback

- Short and calm: `--dur-fast` 160ms / `--dur` 280ms with `--ease` / `--ease-out`; no bounce.
- Press feedback is immediate (on `:active`): `transform: var(--press)` (scale .98).
- Hover lifts only clickable cards. Focus: `--shadow-focus` ring.
- `prefers-reduced-motion` turns durations to 1ms and press to none; `prefers-reduced-transparency`
  makes the glass solid.

## Exceptions

- **Finger colours** (`--fng-*` in `keyboard/keyboard.css`, `.finger-legend`): five semantic
  colours shared by the on-screen keyboard and the 3D hands (kept, but soft/pastel).
- Artwork (game illustrations, SVG icons, flags) keeps its own colours.
- `forced-colors` blocks use system colours.
