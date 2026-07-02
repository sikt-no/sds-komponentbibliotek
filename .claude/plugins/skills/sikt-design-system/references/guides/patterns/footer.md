# Footer pattern

When to use and how to set up `Footer` from `@sikt/sds-footer`.

## Every Sikt product has a Footer

The Footer is part of the page shell — every page of every Sikt product renders inside the Header + main + Footer skeleton. It's not optional and not conditional on page type. Login pages, error pages, dashboards, settings, embedded admin tools — all of them ship with the Footer.

This is a brand and trust signal: Sikt-built products are visually consistent at the chrome level. A page missing its Footer reads as half-built.

If you're tempted to leave it out (e.g. on a very minimal page or an embedded view), reach for the user first and confirm — don't drop it silently.

## What the Footer ships

Unlike `Header`, the Footer is closed: it does not accept slots or children. It renders a fixed structure (Sikt logo, organisation info, links to privacy/cookies/accessibility, contact) that's localised based on the `lang` prop. Set the language, set the logo link, and you're done.

```tsx
import { Footer } from "@sikt/sds-footer";

<Footer lang="nb" />;
```

## Props that matter

- **`lang`** — `"nb" | "nn" | "en" | "se" | "smj" | "sma" | "fkv"`. Defaults to `"nb"`. Set it to match your app's locale. Drives the localized footer text.
- **`logoHref`** — defaults to `//sikt.no`. Override only if the product has its own canonical home that the Sikt logo should point to (rare — usually leave the default).

See `components/footer.md` for the full prop reference.

## Placement in the page shell

The Footer pins to the bottom of the viewport via the page-shell grid. See `bootstrap.md` for the shell pattern (`grid-template-rows: auto 1fr auto`).

## CSS dependency

`@sikt/sds-footer` renders the Sikt logo internally, so it transitively needs `@sikt/sds-logo` CSS. Add both:

```css
@import url("@sikt/sds-logo");
@import url("@sikt/sds-footer");
```
