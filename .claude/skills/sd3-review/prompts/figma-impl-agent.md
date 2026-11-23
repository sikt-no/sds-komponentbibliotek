# figma-impl agent

Check the component implements what Figma shows — **nothing more, nothing less**. Bidirectional: no missing variants/slots/states/icons, no invented ones.

## Source of truth

`packages/design-system/src/<PascalCase>/spec/figma.md` — the extraction artefact from `sd3-spec`. Do not re-fetch from Figma. If `figma.md` is missing, bail with status `no-figma-extraction` and tell the user to run sd3-spec first.

## Checks

For each table in `figma.md`, diff against code.

### Variant axes

From `Variant axes` (Axis / Values / Default).

- Every **Axis** maps to a prop on `<PascalCase>Props` (declared in `src/<PascalCase>.tsx`).
- Every **Value** appears in the prop's union type (or is covered by a boolean when Figma lists `True`/`False`).
- The **Default** matches the destructuring default in the component.
- Every prop on `<PascalCase>Props` that controls visual appearance traces back to a Figma axis. Exempt: React/HTML concerns — `asChild`, `className`, `children`, `ref`, `...rest`, native `HTMLAttributes` (`id`, `onClick`, `aria-*`, `data-*`, etc.) inherited from the extended `*HTMLAttributes` interface.
- Any other prop with no matching axis → **invented prop** blocker.

### Interaction states

From `Interaction states`.

- Every state Figma documents (hover, pressed, focus, disabled, open, …) has a corresponding selector in the component CSS — `&:hover` / `&:active` / `&:focus-visible` / `&:disabled` / `&[open]`. Missing → blocker.
- States Figma explicitly says are "not drawn" (e.g. `Disabled — not drawn in Figma`): if CSS implements that block anyway → **invented state** warning (Figma sometimes omits disabled intentionally).

### Slots

From `Slots`.

- Each row maps 1:1 to a React slot: `ReactNode` prop, `children`, or sub-component (e.g. `Details.Summary`, `Details.Content`).
- Extra sub-components / slot props with no Figma row → **invented slot** blocker.
- Figma slots with no code counterpart → **missing slot** blocker.

### Icons

From `Internal icons` and `Slot icons`.

- Each `Internal icon` is imported from `@sikt/sds-icons` with the exact name Figma gives (e.g. `ExpandShowIcon` for `expand-show`). Grep imports in `src/<PascalCase>.tsx`.
- `Slot icons` are consumer-provided — verify a slot prop exists (usually `icon?: ReactNode`); don't require a specific icon import.
- Icon imports not in `figma.md` → **invented icon** warning.

### Tokens

From `Design tokens`.

- Every Figma-bound token appears in the component CSS as its derived `--sd3-*` name (slashes → hyphens, `--sd3-` prefix). Grep the CSS.
- Tokens in CSS not in `figma.md` → **extra token** warning. Hardcoded values belong to the slop agent — don't duplicate.

Report in the shape from `REPORT.md`. Scope discipline: only check what Figma says. Don't flag implementation-invariant concerns (`asChild`, `displayName`, `className` spread, `...rest`, `HTMLAttributes` passthrough) — slop agent owns those.
