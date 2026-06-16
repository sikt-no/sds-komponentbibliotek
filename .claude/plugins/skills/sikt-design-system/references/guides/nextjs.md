# Next.js

SDS works with Next.js but has a few specific requirements. Read this guide whenever the project has `next` in `package.json`.

## CSS imports — always use explicit paths

Next.js does not resolve the `"style"` export condition used by SDS packages, so the bare package name form **does not work**. Always use the explicit `dist/index.css` path:

```css
/* globals.css */

/* ❌ Fails in Next.js */
@import url("@sikt/sds-core");
@import url("@sikt/sds-button");

/* ✅ Works in Next.js */
@import "@sikt/sds-core/dist/index.css";
@import "@sikt/sds-button/dist/index.css";
```

## Where to import global CSS

**App Router** — import in `app/layout.tsx`:

```tsx
// app/layout.tsx
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
```

**Pages Router** — import in `pages/_app.tsx`:

```tsx
// pages/_app.tsx
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

## `'use client'` — required for all SDS components

Next.js App Router renders components as React Server Components by default. SDS components use React hooks internally, so any file that imports an SDS component must have `'use client'` at the top:

```tsx
// ✅ Correct
"use client";

import { Button } from "@sikt/sds-button";
import { TextInput } from "@sikt/sds-input";

export function SearchForm() {
  return <TextInput label="Søk" />;
}
```

```tsx
// ❌ Will fail at runtime — missing 'use client'
import { Button } from "@sikt/sds-button";
```

This applies to layout components too — if `Header` or `Footer` from SDS are used in `app/layout.tsx`, that layout file needs `'use client'`. Alternatively, extract them into a separate client component wrapper.

## Navigation — using Next.js `<Link>` with SDS components

Next.js requires its own `<Link>` component for client-side navigation. SDS navigation components support this via the `asChild` prop, which transfers all SDS styling and behaviour onto the child element instead of rendering its own `<a>`.

### `ButtonLink` with Next.js routing

```tsx
"use client";

import NextLink from "next/link";
import { ButtonLink } from "@sikt/sds-button";

// ✅ Renders a Next.js <Link> with full ButtonLink styling
<ButtonLink asChild variant="strong">
  <NextLink href="/students">Studenter</NextLink>
</ButtonLink>

// ❌ Wrong — plain <a>, bypasses Next.js router
<ButtonLink href="/students">Studenter</ButtonLink>
```

### `Link` (inline text link) with Next.js routing

```tsx
"use client";

import NextLink from "next/link";
import { Link } from "@sikt/sds-core";

// ✅ Renders a Next.js <Link> with SDS link styling
<Link asChild>
  <NextLink href="/about">Om oss</NextLink>
</Link>;
```

`asChild` works on any SDS component that accepts it — check the component's prop table for `asChild: boolean`. The child element receives all props (including `href`, event handlers, and SDS class names) so Next.js prefetching and client-side routing work as normal.

## Fonts — do not use `next/font` for Haffer

`@sikt/sds-core` already declares `@font-face` rules for the Haffer brand font, loading from `https://static.sikt.no`. Do **not** use `next/font` to load Haffer — it will conflict with sds-core's declarations.

If the project has a Content-Security-Policy, add `static.sikt.no` to `font-src` in `next.config`:

```ts
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "font-src 'self' https://static.sikt.no;",
          },
        ],
      },
    ];
  },
};
```

See `references/guides/fonts-and-csp.md` for full CSP guidance.

## `color-scheme: only dark` — LightningCSS bug in Next.js 15+

Next.js 15+ uses Turbopack by default, which bundles CSS via LightningCSS. LightningCSS has a bug where `color-scheme: only dark` (used internally by SDS components like Footer) does not work correctly, causing `light-dark()` values to resolve as if in light mode. This makes text and logos invisible against the footer's dark background.

**Fix:** enable the `light-dark-function` feature in `postcss-preset-env`, which polyfills `light-dark()` at build time so LightningCSS never has to handle it at runtime.

```js
// postcss.config.mjs
export default {
  plugins: [
    [
      "postcss-preset-env",
      {
        features: {
          "light-dark-function": true,
        },
      },
    ],
  ],
};
```

If the project already uses `postcss-preset-env`, just add `"light-dark-function": true` to the existing `features` object.

This is safe to add regardless of whether Turbopack or webpack is the active bundler — it runs at the PostCSS level before either bundler processes the CSS.

## `@layer` with Next.js

The `@layer` pattern from `references/guides/styling.md` works in Next.js without modification:

```css
@import "@sikt/sds-core/dist/index.css" layer(sds);
@import "@sikt/sds-button/dist/index.css" layer(sds);

/* App styles — unlayered, always win over sds layer */
.my-class {
  color: var(--sds-color-text-primary);
}
```
