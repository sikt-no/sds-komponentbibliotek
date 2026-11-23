# <Component> — Spec

**Figma:** [<page-title>](<full URL from user>)
**Component folder:** `packages/design-system/src/<PascalCase>/`
**Replaces:** `<@sikt/sds-x, @sikt/sds-y>` or `none`
**Last synced:** <YYYY-MM-DD>
**Sources:** `./figma.md`, `./research.md`, `./prior-art.md`
**Follow-ups:** `./followups.md` (if present)

> This spec describes **what Figma plans + what best-practice sources prescribe.** It does not propose props, types, CSS, or folder layout — those are the implementation step's call.

## Resolved tradeoffs

Only present when the source files disagreed. One block per conflict.

- **<topic>**
  - Figma: <what figma.md said>
  - Research: <what research.md said>
  - Prior art: <what prior-art.md said>
  - Spec: <what this file records>
  - Reason: <one sentence>

Delete the entire heading if there were no conflicts.

## Overview

One sentence: what this component is.
One sentence: when to reach for it (and when not to).

> Internal use only. Not consumer-facing docs — those come from "Documentation text" at the bottom.

## Variant axes

| Axis    | Values                   | Default | Figma label mapping | Notes |
| ------- | ------------------------ | ------- | ------------------- | ----- |
| variant | strong, subtle, critical | subtle  | Fare → critical     |       |
| size    | default, small           | default |                     |       |

## Interaction states

List every state rendered in Figma: default, hover, focus-visible, active, disabled, loading, error, empty, expanded, selected — one line each describing the visible change.

## Slots

| Slot     | Content                  | Constraint                           |
| -------- | ------------------------ | ------------------------------------ |
| children | Label text               | Required unless `iconVariant="only"` |
| icon     | Icon (consumer-supplied) | Optional                             |

## Internal composition

Only when the component has conditional internal parts. Delete heading for simple components.

| Internal part    | Rendered when                                  | Notes                                     |
| ---------------- | ---------------------------------------------- | ----------------------------------------- |
| Dropdown listbox | Menu is open                                   | Contains items, optional add-item row     |
| Add-item row     | `allowAddNew=true` and no exact match on input | Caret-down icon; label localised per lang |

## Icons used

### Slot icons (consumer supplies)

| Slot | Example icon in Figma | Notes                      |
| ---- | --------------------- | -------------------------- |
| icon | `arrow-right`         | Consumer supplies any icon |

### Internal icons (component renders)

| Icon name    | Where it appears                  | Notes                                      |
| ------------ | --------------------------------- | ------------------------------------------ |
| `caret-down` | trigger, all variants             | Rotates to `caret-up` when `expanded=true` |
| `x`          | close button, dismissible variant |                                            |

## Accessibility

Sourced from `research.md`.

- **WAI-ARIA pattern:** <link to APG pattern + name, or "no exact match — closest is X">
- **Semantic element:** <inferred from pattern + Figma>
- **Keyboard map:**

| Key           | Action                    |
| ------------- | ------------------------- |
| Enter / Space | activate                  |
| Esc           | dismiss                   |
| ArrowDown     | move focus to next option |

- **ARIA attributes:** `aria-expanded`, `aria-controls`, `aria-selected` — expected roles and values per state.
- **Focus management:** <focus ring expectation, trapping, return target>
- **Screen reader name:** <how the accessible name is computed>

## Best-practice notes

Sourced from `research.md`. Short bullets. Each links the source it came from (APG, Inclusive Components, modern-web-guidance).

- <bullet> — source: <link>
- <bullet> — source: <link>

## Prior-art observations

Sourced from `prior-art.md`. Observations only — not prescriptions.

- **Legacy `@sikt/sds-*` surface (if replacing):** list of props and slots the legacy package exposed.
- **Neighbouring SDS patterns:** axes, labels, or defaults other SDS components use for the same concept (e.g. "SDS consistently calls the emphasis axis `variant` — this Figma proposal uses `type`").
- **Divergences from Figma:** places where the Figma proposal departs from existing SDS convention.

## Design tokens

Record what Figma binds. Whether these exist in the SD3 CSS catalog, and what to do about hardcoded values, is the implementation step's call.

### Figma-bound tokens

| Figma token                      | Current value | CSS property     | Applies to     |
| -------------------------------- | ------------- | ---------------- | -------------- |
| `color/background/action/strong` | `#003087`     | background-color | variant=strong |
| `spacing/small-1`                | `4px`         | padding-inline   | all variants   |

### Hidden-token values

Bindings that exist in Figma but don't surface via `get_variable_defs` and are defined in `packages/design-tokens/src/figma/**/*.tokens.json`. Delete the heading if none.

| Figma token             | CSS property     | Applies to     | Sikt gray (light) | Sikt white (light) | Sikt dark | Feide light | Feide dark |
| ----------------------- | ---------------- | -------------- | ----------------- | ------------------ | --------- | ----------- | ---------- |
| `color/brand/accent-01` | background-color | variant=strong | `#7351fb`         | `#7351fb`          | `#7351fb` | `#1F4698`   | `#306EC9`  |

### Hardcoded values

Values Figma is not binding to a variable **and** the hidden-token check ruled out.

| Raw value | CSS property | Applies to                      |
| --------- | ------------ | ------------------------------- |
| `#F2C4C4` | border-color | variant=critical, state=default |
| `2px`     | gap          | icon slot                       |

### Dimension-affecting asymmetries

Any dimension-affecting property (`border-width`, `padding`, `outline`, `gap`) Figma binds on **some but not all** variants. Delete heading if none.

| Property       | Variants that bind it | Variants that DON'T | Intent (consumer-visible size difference? y/n) |
| -------------- | --------------------- | ------------------- | ---------------------------------------------- |
| `border-width` | secondary             | primary, tertiary   | n — should be equalised                        |

## Reference screenshots

- ![strong](./screenshots/variant-strong.png)
- ![small](./screenshots/size-small.png)

## Open questions & gaps

Merged from `figma.md`, `research.md`, `prior-art.md`. Preserve hand-edited entries across re-syncs.

## Documentation text (verbatim from Figma)

Copy any explanatory text from the Figma page here, unedited.
