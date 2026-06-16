# Typography

Always use SDS typography components — never raw `<h1>`–`<h6>` or `<p>`. Raw elements bypass the SDS typography system and produce unstyled text.

```ts
import { Heading1, Heading2, Paragraph } from "@sikt/sds-core";
```

## Semantic level vs visual size

`Heading1`–`Heading6` decouple **semantic level** (the document outline, used by screen readers and search engines) from **visual size** (what the user sees). They can differ:

```tsx
// h2 in the DOM, but visually rendered at size "s"
<Heading2 size="s" variant="application">Søkeresultater</Heading2>

<Paragraph>Viser 10 av 42 treff.</Paragraph>
```

## Props

**`variant`** — controls spacing and density:

- `"editorial"` (default) — calm, spacious; for marketing pages and content-heavy UIs
- `"application"` — compact, information-dense; for admin interfaces, dashboards

**`size`** — visual size independent of semantic level: `"xxs"` → `"xxl"`, default `"m"`.

Pick the semantic heading level for the document outline, then override `size` to match the visual hierarchy.

## Dynamic heading level

When the heading level depends on context (e.g. a reusable card component that could sit under an `h1` or an `h2`), use `Heading` with the `level` prop instead of a fixed `Heading1`–`Heading6`:

```tsx
import { Heading } from "@sikt/sds-core";

<Heading level="2" size="s" variant="application">
  Søkeresultater
</Heading>;
```

`level` is required and accepts `"1"` – `"6"` as a string.

## Paragraph

`Paragraph` renders a `<p>` by default. Useful props:

- **`size`** — `"s"` | `"default"` | `"l"` (default: `"default"`)
- **`modifier`** — `"emphasis"` | `"strong"` | `"code"` | `"quote"` — applies typographic treatment
- **`color`** — `"primary"` | `"secondary"` | `"critical"` (default: `"primary"`)
- **`as`** — renders as another element, e.g. `as="span"`

## Link

`Link` from `@sikt/sds-core` renders a styled `<a>`. For router navigation, use `asChild`:

```tsx
import { Link } from "@sikt/sds-core";
import { NavLink } from "react-router-dom";

<Link asChild isNavigation>
  <NavLink to="/students">Studenter</NavLink>
</Link>;
```

External links (`target="_blank"` or `isExternal`) get an external icon automatically. Pass `noIcon` to suppress it. `href="mailto:"` and `href="tel:"` also get icons by default.

## ScreenReaderOnly

Visually hides content while keeping it accessible to screen readers. Use it to label icon-only controls:

```tsx
import { ScreenReaderOnly } from "@sikt/sds-core";

<button>
  <DeleteIcon />
  <ScreenReaderOnly>Slett rad</ScreenReaderOnly>
</button>;
```

Pass `isFocusable` to reveal the content when keyboard-focused — useful for skip links.

## Page hierarchy example

```tsx
import { Heading1, Heading2, Paragraph } from "@sikt/sds-core";

export function StudentPage() {
  return (
    <>
      <Heading1 variant="application" size="l">
        Studenter
      </Heading1>
      <Paragraph color="secondary">
        Oversikt over alle registrerte studenter.
      </Paragraph>

      <section>
        <Heading2 variant="application" size="m">
          Aktive
        </Heading2>
        {/* table */}
      </section>

      <section>
        <Heading2 variant="application" size="m">
          Tidligere
        </Heading2>
        {/* table */}
      </section>
    </>
  );
}
```

The semantic level defines the document outline for screen readers; `size` and `variant` control the visual result independently.
