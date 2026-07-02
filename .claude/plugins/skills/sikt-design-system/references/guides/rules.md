# Core rules

Mandatory patterns and common errors for SDS development. Read this before writing any code.

## Required root imports

`@sikt/sds-core` is the only required root import — it bundles the reset, font-face, and all design tokens. Every component package also needs its own CSS imported. The format depends on the bundler — see `styling.md` for bundler-specific examples and `@layer` usage.

## Page shell — Header + main + Footer

Every page in a Sikt product renders inside the shared shell: `Header` from `@sikt/sds-header`, a `<main>`, and `Footer` from `@sikt/sds-footer`. This is non-negotiable — the Footer is not optional even on minimal pages, login pages, or embedded views. A Sikt product without a Footer reads as half-built and breaks brand consistency.

When asked to build a page or set up an app, ship the full shell unless the user explicitly says otherwise. See `bootstrap.md` for the shell layout and `patterns/footer.md` for the Footer convention.

## Typography — never use raw HTML elements

All text must use SDS typography components from `@sikt/sds-core`. Raw `<h1>`–`<h6>` and `<p>` bypass the SDS typography system and produce unstyled text.

```tsx
// ✅
import { Heading1, Paragraph } from "@sikt/sds-core";
<Heading1 variant="application">Tittel</Heading1>
<Paragraph>Brødtekst</Paragraph>

// ❌
<h1>Tittel</h1>
<p>Brødtekst</p>
```

See `typography.md` for `size`, `variant`, dynamic `level`, and `Paragraph` props.

## Icons — never use ASCII symbols

Never use text characters as icons in buttons, links, or any UI element. This includes `+`, `-`, `→`, `←`, `>`, `<`, `×`, `✓`, and any other symbol or emoji used as a visual affordance.

Always use a named icon component from `@sikt/sds-icons`. Look up the right icon in `../icons.md` before writing code.

```tsx
// ✅
import { AddIcon, ArrowRightIcon } from "@sikt/sds-icons";
<Button icon={<AddIcon />}>Legg til</Button>
<Button icon={<ArrowRightIcon />} iconVariant="right">Neste</Button>

// ❌
<Button>+ Legg til</Button>
<Button>Neste →</Button>
```

If no icon fits, leave the button/link text-only — do not substitute a character.

## Tokens — never invent values

All sizes, spacing, colors, and typography must come from SDS tokens (`--sds-*` CSS custom properties). Do not invent new values.

- **No hardcoded sizes or spacing** — every `gap`, `padding`, `margin`, `width`, `max-width`, `min-width`, `height`, `border-radius`, etc. must use a token. Layout constraints are not exempt: `max-width: 640px` is just as wrong as `padding: 16px`.
  ```css
  /* ✅ */
  max-width: var(--sds-space-grid-max-width);
  /* ❌ */
  max-width: 640px;
  ```
- **No hardcoded colors** — every `color`, `background`, `border-color`, etc. must use a token.
- **No hardcoded font sizes or weights** — use typography tokens or SDS typography components.
- **No raw pixel breakpoints** — never write `@media (min-width: 720px)`. Always use the custom media name: `@media (--sds-base-breakpoint-tablet)`. See `responsive.md`.
- If no token fits, stop and ask the user rather than inventing a value or using a raw pixel/hex.

Look up valid tokens in `../tokens/` before writing any CSS value.

## API mismatch — prop doesn't exist, wrong type, component not found

The reference docs reflect the **latest published version** of each package. If the user's project has an older version installed, the API may differ.

1. Check the version in the reference: open `../components/<slug>.md` and note the `Version:` line at the top.
2. Check the installed version: `node_modules/@sikt/<package-name>/package.json` → `"version"`.
3. If they differ, the mismatch is the likely cause. Recommend updating:
   ```sh
   npm install @sikt/<package-name>@latest
   ```
4. If the user cannot or does not want to update, read the actual API from their installed package instead of the reference doc:
   - TypeScript types: `node_modules/@sikt/<package-name>/index.d.ts`
   - Source props: `node_modules/@sikt/<package-name>/src/<Component>.tsx`
   - Use only what exists there — do not assume any prop from the reference doc is available.

## Verify before declaring done

- **Typecheck**: `npm run lint:ts` — catches wrong prop names, missing required props, `onChange` signature mismatches
- **CSS**: if a component renders unstyled, a CSS import is missing — check `styling.md`
- **Console**: check for runtime warnings (missing `aria-label`, deprecated props)
- **No invented values**: scan every CSS file you wrote for raw numbers (`px`, `rem`, bare `%` widths, hex colors). Each one is a bug — replace with a token or ask the user.
