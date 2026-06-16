# Styling

CSS setup, tokens, layout patterns, and conventions for SDS apps.

## CSS import pattern

`@sikt/sds-core` is the only required root import — it includes the reset, font-face, and all design tokens as CSS custom properties. Add one line per installed component package after it.

The correct import format depends on your CSS bundler. All SDS packages expose a `"style"` export condition and a `./dist/index.css` path — use whichever form your bundler resolves.

**Bare package name** — works in bundlers that resolve the `"style"` export condition (e.g. Vite):

```css
/* globals.css */
@import url("@sikt/sds-core");
@import url("@sikt/sds-button");
@import url("@sikt/sds-input");
```

**Explicit path** — works in any bundler regardless of export condition support:

```css
/* globals.css */
@import "@sikt/sds-core/dist/index.css";
@import "@sikt/sds-button/dist/index.css";
@import "@sikt/sds-input/dist/index.css";
```

Using `@layer` is optional but recommended when you need to override SDS styles — unlayered app styles always win over layered ones:

```css
@import url("@sikt/sds-core") layer(sds);
@import url("@sikt/sds-button") layer(sds);
```

Component files import only JS — never CSS:

```tsx
// ✅ Component file
import { Button } from "@sikt/sds-button";

// ❌ Never import CSS in component files — it goes in globals.css only
import "@sikt/sds-button/dist/index.css";
```

## sds-core global side effects

`@sikt/sds-core` sets two global CSS rules that affect all elements. Do not re-declare these in your own reset or global styles:

- `interpolate-size: allow-keywords` — enables CSS transitions on keyword sizes (e.g. `height: auto`). Re-declaring it is harmless but redundant; overriding it with `numeric-only` will break SDS animations.
- `prefers-reduced-motion` media query — SDS already disables its own animations for users who prefer reduced motion. Adding your own `prefers-reduced-motion` block is fine for app-specific animations, but do not reset or override the SDS-level declaration.

```css
/* ❌ Don't replicate what sds-core already sets */
*,
*::before,
*::after {
  interpolate-size: allow-keywords; /* already set by sds-core */
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  } /* too broad — kills SDS transitions too */
}
```

## `@sikt/sds-tokens` — only needed for direct token access in JS

`sds-core` already provides all design tokens as CSS custom properties (`--sds-*`). Only import `@sikt/sds-tokens` directly if you need token values in JavaScript (e.g. for a chart library or canvas):

```ts
import tokens from "@sikt/sds-tokens/dist/js/tokens.mjs";
```

For responsive breakpoints in CSS modules, import the custom media file:

```css
@import url("@sikt/sds-tokens/dist/css/custom-media.css");
```

## Design tokens

Reference tokens via CSS custom properties — never use hardcoded values:

```css
/* ✅ Correct */
.section {
  padding: var(--sds-space-padding-medium);
  color: var(--sds-color-text-primary);
  background: var(--sds-color-layout-default);
  gap: var(--sds-space-gap-small);
}

/* ❌ Wrong */
.section {
  padding: 16px;
  color: #333;
  gap: 12px;
}
```

Token names are not guessable — always look them up in the reference files before writing them:

```bash
# Quick lookup from the built token JS
node -e "
const t = require('node_modules/@sikt/sds-tokens/dist/js/tokens.js');
Object.entries(t.space.gap).forEach(([k,v]) => console.log('--sds-' + v.path.join('-'), '=', v.\$value));
"
```

Color tokens use `light-dark()` internally — they switch automatically with `color-scheme`. Do not add manual dark-mode overrides.

### Checking for deprecated tokens

Before using any `--sds-*` value, verify it is not deprecated:

```bash
node -e "
const t = require('node_modules/@sikt/sds-tokens/dist/js/tokens.js');
function walk(obj) {
  if (!obj || typeof obj !== 'object') return;
  if (obj['\$deprecated'] && obj['\$deprecated'] !== false && obj.path)
    console.log('DEPRECATED: --sds-' + obj.path.join('-'), '| use:', obj['\$deprecated']);
  Object.values(obj).forEach(v => { if (typeof v === 'object') walk(v); });
}
walk(t);
"
```

Use only the replacement shown in the deprecation message.

## CSS is for placement only

Your CSS has one job: positioning elements relative to each other. SDS components style themselves.

- Use `display: flex` or `display: grid` for all layout.
- Use `gap` with a verified gap token for all spacing between elements.
- Never write raw pixel values for `gap`, `margin`, or `padding` — every size must come from a token.
- Never use `opacity`, `filter`, `transform`, `color`, or `visibility` on a wrapper to change how SDS components look. This breaks the design system's intentional states. If a different visual state is needed, check whether the component exposes a prop (e.g. `disabled`).
- Never write `style={{...}}` inline — use a CSS module with SDS tokens instead.

```css
/* ✅ Correct */
.row {
  display: flex;
  gap: var(--sds-space-gap-small);
  align-items: center;
}

/* ❌ Wrong */
.row {
  display: flex;
  gap: 8px;
}
```

## Responsive layout

For PostCSS setup, breakpoints, conventions, and layout patterns → `references/guides/responsive.md`.

## Page shell pattern

Every new Sikt app starts with a header + main + footer shell:

```bash
npm install @sikt/sds-core @sikt/sds-header @sikt/sds-footer @sikt/sds-logo
```

```css
/* globals.css */
@import url("@sikt/sds-core");
@import url("@sikt/sds-logo");
@import url("@sikt/sds-header");
@import url("@sikt/sds-footer");
```

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

`grid-template-rows: auto 1fr auto` gives the header its natural height, expands main to fill remaining space, and pins the footer at the bottom. `100dvh` accounts for mobile browser chrome.

## Verifying CSS completeness

After the dev server is running, extract all SDS class names from the rendered HTML and confirm each has a corresponding CSS import:

```bash
curl -s http://localhost:<port> | grep -o 'class="[^"]*"' | grep -o 'sds-[a-z-]*' | sort -u
```

For each distinct prefix (e.g. `sds-button`, `sds-header`), confirm the package's CSS is in `globals.css`. A broken layout with correct class names in the DOM almost always means a missing CSS import.
