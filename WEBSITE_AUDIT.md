# WEBSITE_AUDIT.md
*Birken Lakeside Resort — Pre-Edit Codebase Audit*
*Generated: 2026-05-17 — READ-ONLY pass, no files modified.*

---

## 1. Framework, Major Dependencies, and Folder Structure

### Framework & Stack

| Item | Detail |
|------|--------|
| **Framework** | Static React 18 site — **no Next.js, no build pipeline** |
| **Routing** | Hash-based client-side routing (`#/stay`, `#/cabin/wild-west`, etc.) via `app.jsx` |
| **JSX** | Babel transpiled in the browser at runtime (CDN) |
| **Deployment** | Vercel; `vercel.json` rewrites all paths to `index.html` for SPA behaviour |
| **CSS** | Plain CSS custom properties — **no Tailwind, no CSS modules** |
| **Fonts** | Google Fonts CDN: Bebas Neue, Montserrat, DM Sans |

### `package.json` Dependencies

```json
devDependencies:
  esbuild   ^0.28.0   (build helper, not part of page-serving pipeline)
  serve     ^14.2.1   (local dev server: npm run dev)
  sharp     ^0.34.5   (image processing utility)
```

React 18.3.1 and ReactDOM 18.3.1 are loaded from **unpkg CDN** in `index.html`; they are not listed in `package.json`.

### Top-Level Folder Structure

```
BirkenLakesideResortWebsite7/
├── index.html                  ← SPA entry point; all <meta>, CDN scripts, loader
├── 404.html                    ← Vercel 404 → SPA fallback
├── vercel.json                 ← Rewrite rules
├── styles.css                  ← ALL styles (1 343 lines, CSS custom props)
├── data.js                     ← ALL cabin + area + menu data (global window objects)
├── app.jsx / app.js            ← Hash router; mounts page components
├── layout.jsx / layout.js      ← Shared nav + footer
├── page-home.jsx / page-home.js
├── page-stay.jsx / page-stay.js
├── page-rest.jsx / page-rest.js ← Gatherings, Weddings, Grille, Area, About, Book, Contact
├── assets/                     ← All image assets + PDF (see §7)
├── package.json
├── README.md
├── CLAUDE_CODE_HANDOFF.md
└── [legacy images at root — duplicates of assets/ content]
```

> **Note:** Each `.jsx` file has a pre-compiled `.js` sibling (Babel output). The browser loads the `.js` files; the `.jsx` files are the human-editable source.

---

## 2. Page Content Locations

All page content is **hardcoded JSX** — no MDX, no CMS, no external API. Structured data (cabin list, area attractions, menu items) lives in `data.js` as `window.*` globals.

| Page | Source file | Content type |
|------|-------------|--------------|
| **Home** | `page-home.jsx` | JSX; hero copy hardcoded; cabin grid rendered from `window.CABINS` |
| **Stay** (listing + cabin detail) | `page-stay.jsx` | JSX; cabin cards from `window.CABINS`; detail view routed by `cabin.id` |
| **Gatherings** | `page-rest.jsx` lines 1–100 | JSX; fully hardcoded copy |
| **Weddings** | `page-rest.jsx` lines 103–189 | JSX; fully hardcoded copy |
| **Area** | `page-rest.jsx` lines 250–349 | JSX; attraction cards from `window.AREA` array in `data.js` |
| **About Us** | `page-rest.jsx` lines 351+ | JSX; fully hardcoded copy |

---

## 3. Cabin Data Location

**Single file: `data.js`**

All cabin and glamping data is defined in the `window.CABINS` array. Each object contains: `id`, `name`, `type`, `guests`, `beds`, `price`, `description`, `features[]`, `images[]`.

| Cabin | `data.js` approx. lines | Type |
|-------|--------------------------|------|
| Wild West | 4–16 | cabin |
| Morocco | 18–30 | cabin |
| Mexico | 32–44 | cabin |
| Love Shack | 46–58 | cabin |
| Library | 60–72 | cabin |
| Chapel | 74–86 | cabin |
| Bunk House | 88–100 | cabin |
| Plaid | 102–114 | glamping |
| Saffron | 116–128 | glamping |
| **Leopard** | **NOT IN `data.js`** | glamping |

> **⚠ Leopard is missing from `data.js`.** Two image assets exist (`assets/glamping_leopard_exterior.jpg`, `assets/glamping_leopard_interior.jpg`) but no CABINS entry. It does not appear on the Stay page. This appears to be a tent that was photographed but not yet added to the data. Flag before any cabin-data edits.

---

## 4. Global Styling System

### Files

| File | Role |
|------|------|
| `styles.css` | Single global stylesheet, 1 343 lines — all component styles |
| `index.html` | Inline `<style>` block for the loading screen only |

### CSS Custom Properties (Theme Tokens)

Defined in `styles.css` `:root` block (lines 6–22):

```css
--forest:   #1D3D2D   /* primary dark green */
--forest-2: #162D20
--forest-3: #0F2017
--cabin:    #9B2B1F   /* cabin red */
--cabin-2:  #7A2218
--cedar:    #C4743A   /* Warm Cedar — orange accent */
--cream:    #F3EADC   /* off-white background */
--cream-2:  #E5DDD0
--mist:     #8FA89E
--stone:    #6D695E
--stone-2:  #C4B9A8
--serif:    'Bebas Neue', sans-serif
--ui:       'Montserrat', sans-serif
--body:     'DM Sans', sans-serif
```

### Warm Cedar (Orange) Eyebrow / Subtitle Style

The `.eyebrow` class is the canonical orange label style.

```css
/* styles.css lines 66–71 */
.eyebrow {
  font-family: var(--ui);          /* Montserrat */
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--cedar);             /* #C4743A */
}
```

Used throughout: hero eyebrows, section numbers, cabin card price badges, section titles, pill labels, and menu prices.

---

## 5. Hero Components and Viewport-Height Behaviour

### Home Hero

- **File:** `page-home.jsx` lines 6–29
- **CSS class:** `.hero`
- **Height (from `styles.css` lines 276–278):**
  ```css
  height: 100vh;
  height: 100svh;   /* overrides on supporting browsers — avoids mobile chrome bar */
  min-height: 640px;
  ```

### Weddings Hero

- **File:** `page-rest.jsx` lines 107–129
- **CSS class:** `.hero` + `.weddings-hero`
- **Height:** Same `100vh / 100svh` base, plus:
  ```css
  /* styles.css line 42 */
  .weddings-hero { height: 100svh !important; }
  ```

### Cabin Detail Hero (for reference)

- **CSS class:** `.cabin-hero`
- **Height (`styles.css` lines 812–819):** Same `100vh / 100svh / min-height: 640px` pattern.

All three heroes use the same dual-value progressive-enhancement approach (`100vh` fallback, `100svh` preferred).

---

## 6. Wi-Fi / Amenities Copy

### Wi-Fi

| File | Line | Copy |
|------|------|------|
| `page-home.jsx` | 85 | `"Mountain Wi-Fi — great for an email, great for streaming. That's by design."` |
| `page-home.js` | 20 | Same (compiled output — edit the `.jsx`, not the `.js`) |

No other Wi-Fi mentions found in the repo.

### Amenities

Amenities are represented in two places:

1. **Per-cabin `features` arrays** in `data.js` (e.g., `"Wood stove"`, `"Lake view"`, `"Full kitchen"`, `"Pet friendly"`). Rendered as feature pills on the cabin detail page (`page-stay.jsx`).
2. **Gatherings "What's Included" grid** in `page-rest.jsx` (lines 70–91): firepit, canoes, kayaks, sound system, coffee, linens, catered meals, A/V, staff — hardcoded JSX.

---

## 7. Image Assets

### Folder

```
assets/               ← primary image store (all production images)
```

Several legacy images also exist at the repo root (e.g., `hero-cabins.jpeg`, `mexico-ext.jpeg`) — these appear to be leftover duplicates from an earlier structure.

### Referencing Method

Images are referenced as **plain relative paths** in JSX inline styles and CSS background-image declarations. No `next/image`, no `<img>` srcsets. Examples:

```jsx
// JSX inline style
style={{ backgroundImage: 'url(assets/wildwest-ext.jpeg)' }}

// CSS
background-image: url('../assets/red-cabins-grove.jpeg');
```

### Notable Assets

| Asset | Notes |
|-------|-------|
| `assets/glamping_leopard_exterior.jpg` | Exists but Leopard has no `data.js` entry |
| `assets/glamping_leopard_interior.jpg` | Same |
| `assets/BLR_Wedding_Inquiry_Pack_v3.pdf` | Wedding enquiry PDF linked from Weddings page |
| `assets/weddings-hero.png` | Weddings hero background |

---

## 8. Schema.org / JSON-LD Structured Data

**None found.**

Grep for `schema.org`, `application/ld+json`, `@type`, `JsonLd` across all files returned zero matches.

`index.html` contains only standard Open Graph (`og:*`) and Twitter Card (`twitter:*`) meta tags. No JSON-LD, no microdata, no RDFa.

---

## 9. FAQ Component or Page

**None found.**

Grep for `FAQ`, `faq`, `frequently asked`, `accordion`, `Accordion` across all files returned zero matches. There is no FAQ page, no FAQ section, and no collapsible/accordion UI component anywhere in the codebase.

---

## 10. Occurrences of "45 min" and "45 minutes"

**Zero occurrences.** Exhaustive case-insensitive grep across all `.html`, `.jsx`, `.js`, `.css`, `.json`, `.md`, `.mdx`, `.ts`, `.tsx` files returned no matches for either string.

The site consistently uses **"55 minutes"** (or "55 min") for the Whistler distance everywhere:

| File | Line | Copy |
|------|------|------|
| `index.html` | 6 | `<meta name="description" … "55 minutes from Whistler …">` |
| `index.html` | 20 | `<meta name="twitter:description" … "55 min from Whistler">` |
| `page-home.jsx` | 21 | Hero sub-line: `"55 min from Whistler"` |
| `page-home.jsx` | 39 | Story section: `"Gates Lake is 55 minutes from Whistler"` |
| `page-rest.jsx` | 121 | Weddings hero: `"55 min from Whistler"` |
| `page-rest.jsx` | 260 | Area page heading: `"55 MINUTES / FROM WHISTLER"` |
| `page-rest.jsx` | 503 | Contact footer: `"55 min from Whistler · 2.5 hrs from Vancouver"` |
| `layout.jsx` | 164 | Footer: `"55 min from Whistler · 2.5 hrs from Vancouver"` |
| `data.js` | 135 | Area entry for Whistler Village: `"55 min drive"` |

No "45 min/minutes" correction is needed — the site is already consistent at 55 minutes.

---

*End of audit. No files were modified.*
