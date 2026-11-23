# TSX branches

Load only the subsections whose SPEC condition fires.

## Compound sub-components — SPEC has a Slots table

1:1 with SPEC's Slots table. Don't invent extras, split one slot, or rename Figma's `slot` to `Actions`.

- Root renders `{children}`; CSS positions via `data-part` selectors. No `Children.toArray().filter()` reorder.
- Sub-component owns its DOM part: `<span data-part="icon" aria-hidden="true">`.
- `data-part` is a singular noun. The part IS the container — no `-container`/`-wrapper` suffix.
- `displayName = "Parent.Sub"`.
- Attach via `Object.assign` (Button pattern) or direct assign (Tag pattern). One per file.
- Text insets live on root `padding-inline` + `gap`, not a `Component.Label` sub-component.
- Export sub-component Props types from the barrel. Public path is `<Component>.<Sub>`.
- Detect sub-components only to set `data-*`, never to drive layout. Use `hasChildOfType` from `packages/design-system/utils/has-child-of-type.ts`. Fragment gotcha: `Children.toArray` treats `<>…</>` as one opaque child — stories with detection need `render:` + JSX siblings.
- Internal (fixed) slots: parent renders `<Parent.Sub>`, not a bare `<span data-part>`.

## `asChild` — SPEC asks for element-swap

Default off. Add when:

- Semantic root is `<a>` and consumers pass `next/link` / Remix `<Link>` / TanStack `<Link>`.
- Semantic root is `<img>` and consumers pass `next/image`.
- SPEC explicitly asks for element-swap.

Current users: `Button`, `Footer.Link`, `Header` link parts, `NavigationCard`, `ProgressIndicator.Step`. `Badge`, `Tag`, `StatusMessage`, `Details`, `Card` omit it.

Compound components: add `asChild` on leaves (`<Dialog.Trigger asChild>`), not the root. Omit on components wrapping a native form control.

Pattern (copy from `Button/src/Button.tsx`):

```tsx
import { Slot } from "@radix-ui/react-slot";
…
asChild?: boolean;
const Comp = asChild ? Slot : "button";
return <Comp ref={ref} className={…} data-variant={…} {...rest} />;
```

Ref is plain prop (`ref?: Ref<HTMLElement>`); React 19 forwards through `Slot`. Skip `forwardRef`. One test that `<Component asChild><a href="…">…</a></Component>` renders an `<a>` with the class + `data-*` preserved.

## i18n — SPEC has user-facing strings

Button labels, aria labels on internal controls, "Loading…" — follow Pagination's shape. Reference: `Pagination/src/Pagination.tsx:13-46`.

- Exported `<Component>I18n` interface with optional label fields.
- Exported `<Component>Locale` union (`"en" | "nb" | "nn"`).
- Private `<component>Locales` record of `Required<I18n>` presets.
- Private `resolveI18n()` helper that accepts a preset string OR a partial object and falls back to `nb` (Norwegian bokmål is Sikt's default).
- Prop: `i18n?: <Component>Locale | <Component>I18n`.

## Accessible name — no path to visible text

If the component (or a specific variant) has no visible text — Avatar initials/placeholder, pure icon-only, decorative-but-semantic SVG wrappers, modals that must be labelled — intersect its props with `AriaLabelOrAriaLabelledby` from `packages/design-system/types/index.ts`. That makes it a type error to omit both `aria-label` and `aria-labelledby` (or set both). Reference: `Avatar/src/Avatar.tsx:53-54`.

If the component can carry visible text via `children` or a label slot (Button, Tag, Chip, Details.Summary), let aria ride native `HTMLAttributes` passthrough and add a JSDoc hint on the children prop warning about icon-only usage. Reference: `Button/src/Button.tsx:43`.
