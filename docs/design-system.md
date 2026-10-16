# TypingEase design system

The visual language follows typekute's ("keycap" UI: rounded type, raised keys, soft tinted
canvas) with TypingEase's own brand colours. Tokens live in `11ty/styles/tokens.css`; shared
components in `11ty/styles/base.css`. A raw hex value in a page stylesheet is a bug unless it is
listed under Exceptions — add a token instead.

## Brand colours

| Scale | Face (500) | Button face (600) | Edge (700) | Text-safe on white |
| --- | --- | --- | --- | --- |
| Green `--primary-*` | `#2a9a6c` | `#157a55` (logo green) | `#0f6244` | 600 (5.3:1), 700 (7.4:1) |
| Lime `--accent-*` | `#c8f05a` | — | `#a9d43a` (`--accent-600`) | 700 `#5c7a12` (4.9:1), 800 on accent-100 |

- **500 shades are never text.** Green 500 is 3.5:1, lime 500 is 1.3:1 on white.
- **Tints for surfaces, faces for marks.** Large backgrounds use 50–100; saturated faces are for
  small marks (dots, bars, badges, keycap faces, progress fills).

## Proportion: 60 / 30 / 10

- **60% neutral** — page `--canvas` (primary-50), white cards `--surface`, borders `--border`
  (ink-300), text `--text` (ink-800), headings ink-900, muted ink-600, placeholder ink-500.
- **30% green** — everything you can press or that says "you are here": primary buttons, links,
  the active nav item, selected tab/segment, focus ring, progress bars, the typing caret, timers.
- **10% lime** — one highlight per view: the new key of a lesson, a streak/personal best, the
  eyebrow bar, a "start here" marker. If two things are lime, one of them is wrong.

Semantic colours keep their jobs: `--success` (= brand green) correct/completed, `--error` red
for a wrong key or failure (never decoration), `--gold-*` only for stars and achievements.

## Shape: the keycap

Everything raised looks like a key: a face colour on a **4px bottom edge** (`--edge`) one or two
steps darker, **2px borders** (`--border-w`), generous radii.

| Element | Face | Border | Edge (box-shadow) | Radius |
| --- | --- | --- | --- | --- |
| Primary button | primary-600 | transparent | `--shadow-button` (primary-700) | `--r` 14px |
| Secondary button | white | ink-300 | `--shadow-edge` (ink-300) | `--r` |
| Card / panel | white | ink-300 | `--shadow-edge` | `--r-lg` 18px (big panels `--r-xl` 24px) |
| Selected item (nav, tab, list row) | primary-100 | primary-300 | none or primary-300 edge | `--r` |
| Number badge (lesson n°) | white | ink-300 | `0 3px 0 ink-300` | `--r-sm` 10px |

Interaction:
- hover: buttons lighten (`color-mix(in srgb, face 88%, white)`), white surfaces go primary-50,
  cards get a primary-300 border.
- active (press): `transform: translateY(2px)` and the edge shrinks to 2px — the key goes down.
- focus-visible: `--shadow-focus` (white gap + dark-green ring), combined with the edge shadow.
- Motion uses `--dur-fast` / `--ease`; `prefers-reduced-motion` turns them to 1ms.

Shadows are tinted (green/ink rgba), never `rgba(0,0,0,…)`.

## Type

- Body and UI: **Nunito** (`--font-body`, weights 400–900; has Vietnamese and Cyrillic). Headings
  900, labels/buttons 800, body 400–600.
- Typing text, stats, key labels: **Roboto Mono** (`--font-mono`).
- Small labels (eyebrows, table heads, nav items, tags): uppercase, 800–900, letter-spacing
  0.06–0.1em.
- One Google Fonts link on every page:
  `family=Nunito:wght@400;600;700;800;900&family=Roboto+Mono:wght@400;500;700&display=swap`.
  Scripts without Latin glyphs (Arabic, Devanagari, Thai, CJK…) fall back to system fonts.

## Layout

- Horizontal top bar (kept from TypingEase): logo left, menu centred, actions right. Menu items
  are uppercase pills; the active one is the "selected item" above. Under 900px the menu becomes
  the ☰ drop-down panel (a white card).
- Content width `--w-page` 1120px, reading width `--w-read` 760px, side gutter `--pad-x`.
- Breakpoints: 900px (tablet / narrow window) and 620px (phone).

## Exceptions

- **Finger colours** (`--fng-*` in `keyboard/keyboard.css`, `.finger-legend`): five semantic
  colours, one per finger, shared by the keyboard and the 3D hands.
- Artwork (game illustrations, SVG icons, flags) keeps its own colours.
- `forced-colors` blocks use system colours.
