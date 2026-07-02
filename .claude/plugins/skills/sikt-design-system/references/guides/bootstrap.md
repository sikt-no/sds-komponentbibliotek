# Bootstrap a new Sikt app

One-time setup for a fresh project. Read this when `@sikt/sds-core` is not yet a dependency, or when the user is starting a new product. For day-to-day styling work (tokens, layout, conventions) see `styling.md` instead.

## 1. Install packages

Every Sikt app starts with the same base. `@sikt/sds-core` is the only mandatory root — it ships the reset, font-face declarations, and all design tokens. Add a header, footer, and logo for the page shell:

```bash
npm install @sikt/sds-core @sikt/sds-header @sikt/sds-footer @sikt/sds-logo
```

Install additional component packages (`@sikt/sds-button`, `@sikt/sds-input`, …) as you reach for them — don't pre-install everything.

## 2. Create globals.css

One CSS file imports every SDS package's stylesheet. Component files import only JS — never CSS:

```css
/* globals.css */
@import url("@sikt/sds-core");
@import url("@sikt/sds-logo");
@import url("@sikt/sds-header");
@import url("@sikt/sds-footer");
```

Each new component package adds one `@import` line here. See `styling.md` for the import-path variants (bare name vs explicit path) and the `@layer` pattern for overrides.

## 3. Page shell

Every Sikt app has the same outer skeleton: `Header` + `<main>` + `Footer`. All three are required on every page — the Footer is not optional. See `patterns/footer.md` for the rationale and `patterns/header.md` for header structure.

The grid template gives the header its natural height, expands main to fill the remaining space, and pins the footer at the bottom. `100dvh` accounts for mobile browser chrome.

```tsx
import "./globals.css";
import { Header } from "@sikt/sds-header";
import { Footer } from "@sikt/sds-footer";
import styles from "./Shell.module.css";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Header logoText="App name" />
      <main id="main">{children}</main>
      <Footer lang="nb" />
    </div>
  );
}
```

```css
/* Shell.module.css */
.shell {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
}
```

## 4. Favicon

Use the Sikt favicon from `@sikt/sds-logo` — do not generate or substitute another icon when bootstrapping. The package ships Light and Dark variants as SVG plus PNGs at 16, 32, 180, 192, and 512 px:

- `@sikt/sds-logo/Favicon-Light.svg` / `@sikt/sds-logo/Favicon-Dark.svg`
- `@sikt/sds-logo/Favicon-Light@{16,32,180,192,512}px.png`
- `@sikt/sds-logo/Favicon-Dark@{16,32,180,192,512}px.png`

The minimum set for the document head is six `<link>` tags — SVG for modern browsers, 32 px PNG as fallback, 180 px PNG for Apple touch — with the Dark variant opt-in via `prefers-color-scheme`:

```html
<link rel="icon" sizes="any" href="…/Favicon-Light@32px.png" />
<link rel="icon" type="image/svg+xml" href="…/Favicon-Light.svg" />
<link rel="apple-touch-icon" href="…/Favicon-Light@180px.png" />
<link
  rel="icon"
  sizes="any"
  href="…/Favicon-Dark@32px.png"
  media="(prefers-color-scheme: dark)"
/>
<link
  rel="icon"
  type="image/svg+xml"
  href="…/Favicon-Dark.svg"
  media="(prefers-color-scheme: dark)"
/>
<link
  rel="apple-touch-icon"
  href="…/Favicon-Dark@180px.png"
  media="(prefers-color-scheme: dark)"
/>
```

The Light variant is the default; the Dark variant overrides it when the OS is in dark mode. Resolve each `href` using the project's framework conventions (asset imports, public-folder paths, CDN URLs — whichever fits) and keep the same six `<link>` tags.

## 5. Brand fonts & Content-Security-Policy

`@sikt/sds-core` does **not** bundle the Haffer brand font — its `@font-face` rules load the files from an external origin:

- `https://static.sikt.no/Haffer-Regular.woff2` (+ `.woff`)
- `https://static.sikt.no/Haffer-SemiBold.woff2` (+ `.woff`)

If your app sends a `Content-Security-Policy`, the browser blocks these unless `font-src` allows that origin. The symptom is subtle: nothing crashes, but text falls back to the system font (often Arial) and the console fills with:

> Refused to load https://static.sikt.no/Haffer-Regular.woff2 because it does not appear in the font-src directive of the Content Security Policy.

**Fix** — add `https://static.sikt.no` to the `font-src` directive wherever your CSP is defined (helmet, a custom middleware, a `<meta http-equiv>` tag, Next.js `headers()`, nginx, …):

```
/* ✅ */
font-src 'self' https://static.sikt.no;

/* ❌ — blocks the Haffer fonts, text falls back to Arial */
font-src 'self';
```

Notes:

- Only `font-src` matters here — fonts are **not** covered by `connect-src` or `style-src`. If you have no `font-src` at all, the browser falls back to `default-src`, so either widen that or add an explicit `font-src`.
- The CSP is usually applied by your server/framework, **not** the Vite dev server — so this often only shows up in a production build or when the backend serves the bundled client. Test the production path, not just `vite dev`.
- Prefer no external dependency? Self-host: copy the four woff/woff2 files into your app, redeclare the `@font-face` rules against your own origin, and then `font-src 'self'` is enough.
