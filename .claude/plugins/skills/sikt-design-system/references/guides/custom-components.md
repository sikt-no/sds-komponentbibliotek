# Custom components

Build a custom component only when no SDS component covers the need, or when the user explicitly asks for one. Check `references/guides/component-decision-tree.md` and `references/index.md` first.

## Rules

1. **Use semantic HTML** — reach for the element that already has the right role and behaviour before adding ARIA. `<button>` handles keyboard, click, and focus for free. `<a>` handles navigation. `<details>` handles disclosure. Native elements are always preferred over `<div role="...">`.
2. **Style with SDS tokens only** — never hardcode a pixel value, hex colour, or font size. Look up every value in `references/tokens/` before writing CSS.
3. **A11y first** — add `aria-label`, `aria-describedby`, or `role` only when semantic HTML alone is not enough. Always verify with a screen reader or axe before declaring done.

## Focus styling

SDS defines a single focus token that all components use:

```css
/* Defined in @sikt/sds-core: */
--sds-focus-outline: var(--sds-focus-outline-width) dashed
  var(--sds-color-layout-focus-border);
```

Apply it on `:focus-visible` (not `:focus`) so mouse users aren't affected:

```css
.myButton:focus-visible {
  outline: var(--sds-focus-outline);
  outline-offset: var(--sds-base-size-xxs);
}
```

## Example — stat card

A clickable summary tile that SDS doesn't provide natively.

```tsx
// StatCard.tsx
interface StatCardProps {
  label: string;
  value: string | number;
  href: string;
}

export function StatCard({ label, value, href }: StatCardProps) {
  return (
    <a href={href} className={styles.card}>
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </a>
  );
}
```

```css
/* StatCard.module.css */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--sds-space-gap-small);
  padding: var(--sds-space-padding-medium);
  background: var(--sds-color-layout-elevated);
  border-radius: var(--sds-base-size-xs);
  color: var(--sds-color-text-primary);
  text-decoration: none;
}

.card:hover {
  background: var(--sds-color-layout-elevated-hover);
}

.card:focus-visible {
  outline: var(--sds-focus-outline);
  outline-offset: var(--sds-base-size-xxs);
}

.value {
  font-size: var(--sds-typography-application-heading-medium-size);
  font-weight: var(--sds-typography-application-heading-medium-weight);
  line-height: var(--sds-typography-application-heading-medium-line-height);
}

.label {
  font-size: var(--sds-typography-label-medium-size);
  color: var(--sds-color-text-subtle);
}
```

`<a>` gives keyboard focus, Enter activation, and link semantics for free. No ARIA needed.

## A11y checklist

Before finishing any custom component:

- [ ] Is there a native HTML element that already does this? Use it instead.
- [ ] Does every interactive element have a visible `:focus-visible` style using `--sds-focus-outline`?
- [ ] Does every interactive element have a text label accessible to screen readers (visible text, `aria-label`, or `aria-labelledby`)?
- [ ] Does the component work with keyboard only (Tab, Enter, Space, arrow keys where applicable)?
- [ ] Does the component work with `color-scheme: dark` (tokens handle this automatically — do not override with hardcoded colours)?
