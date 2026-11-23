# a11y agent

Audit `packages/design-system/src/<PascalCase>/` for accessibility drift.

## First rule of ARIA

**No ARIA is better than bad ARIA. Prefer correct HTML before reaching for `aria-*` or `role=`.** Native elements come with the right role, keyboard, and screen-reader semantics for free; ARIA only patches gaps. Every `aria-*` / `role=` in the component source must have a specific reason native HTML cannot satisfy — otherwise it's drift.

## Checks

- **Native-first audit.** Grep the source for `role=` and `aria-*`. For each hit, verify a native element couldn't do the same job. Blockers:
  - `role="button"` on a `<div>` / `<span>` — use `<button>`.
  - `role="link"` on a `<div>` / `<span>` — use `<a>`.
  - `role="checkbox" | "radio" | "switch" | "textbox"` on a non-input — use the native input.
  - `aria-expanded` / `aria-controls` on a disclosure that could use `<details>` / `<summary>`.
  - `aria-label` / `aria-labelledby` where visible text already labels the control.
  - `aria-disabled="true"` instead of the native `disabled` on a form control.
  - `tabIndex={0}` on something that should be a `<button>` or `<a>`.
- **Axe via Storybook iframe.** For each story in `stories/<PascalCase>.stories.tsx`, load `http://localhost:6006/iframe.html?viewMode=story&id=sd3-<kebab>--<story-id>` and run axe against it (prefer `npx @axe-core/cli` if available; otherwise mark `skipped:` under OK). Report serious/critical violations with selector.
- **Accessible name.** Every interactive element reachable through the component has an accessible name — visible text first, `aria-label` / `aria-labelledby` only as last resort. Icon-only triggers are the common offender.
- **Keyboard.** List the keys the component responds to. Flag any interactive role not reachable via Tab or without visible focus. Prefer a native element over an `onKeyDown` handler whenever native would handle the key for free.
- **Focus ring.** Grep the component CSS for `:focus-visible` — must declare BOTH `outline: var(--sd3-focus-outline)` AND `box-shadow: var(--sds-focus-box-shadow)`. One alone is a blocker.
- **sds-icons.** `@sikt/sds-icons` roots ship with `aria-hidden="true"`; wrapping them in an aria-hidden span is redundant (warning).

Report in the shape from `REPORT.md`.
