# Responsive Design

How to write responsive CSS in SDS apps — breakpoints, mobile-first conventions, and layout patterns.

## Setup

Custom media queries require `postcss-custom-media`. Before suggesting the user install it, check whether it is already present:

```bash
cat package.json | grep postcss-custom-media
```

If it is missing, tell the user and let them decide whether to add it — do not install it automatically.

Import the custom media file at the top of any CSS module that needs breakpoints:

```css
@import url("@sikt/sds-tokens/dist/css/custom-media.css");
```

## Breakpoints

| Name        | Min-width | Custom media name                 |
| ----------- | --------- | --------------------------------- |
| `tablet`    | 720px     | `--sds-base-breakpoint-tablet`    |
| `desktop`   | 1024px    | `--sds-base-breakpoint-desktop`   |
| `ultrawide` | 1440px    | `--sds-base-breakpoint-ultrawide` |

**Always use the custom media name. Never write `min-width` with a raw pixel value.**

```css
/* ✅ Correct */
@media (--sds-base-breakpoint-tablet) { … }

/* ❌ Wrong — even if the pixel value matches */
@media (min-width: 720px) { … }
```

Raw pixel breakpoints are a bug — they couple the code to a value that can change in the token, and bypass the PostCSS abstraction entirely.

## Mobile-first approach

Write default CSS for narrow screens, then use `min-width` media queries to progressively enhance for wider screens. Do not use `max-width` queries.

```css
/* ✅ Mobile-first */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--sds-space-gap-small);
}

@media (--sds-base-breakpoint-tablet) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ❌ Desktop-first — don't do this */
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 719px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

## Layout conventions

On narrow screens, stack everything vertically by default. Add a `min-width` query to switch to a side-by-side layout on wider screens.

### Input + submit button

Stacked on mobile, side-by-side on tablet+. The input grows to fill available width.

```css
@import url("@sikt/sds-tokens/dist/css/custom-media.css");

/* Input + button: stacked on mobile, side-by-side on tablet+ */
.addRow {
  display: flex;
  flex-direction: column;
  gap: var(--sds-space-gap-small);
}

@media (--sds-base-breakpoint-tablet) {
  .addRow {
    flex-direction: row;
    align-items: flex-end;
  }

  .addRow > :first-child {
    flex: 1;
  }
}
```

### Content row with actions

Content stacked above actions on mobile, inline on tablet+.

```css
/* Content row with actions: stacked on mobile, inline on tablet+ */
.contentRow {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sds-space-gap-small);
}

@media (--sds-base-breakpoint-tablet) {
  .contentRow {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
```
