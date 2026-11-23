# Storybook stories — `stories/<PascalCase>.stories.tsx`

Reference: `packages/design-system/src/StatusMessage/stories/StatusMessage.stories.tsx`. Open it before writing.

## Rules

- **All text is English** — story names, descriptions, `args` strings, `aria-*` values. Norwegian lives in `astro/<kebab>.mdx`.
- Title `SD3/<Display Name With Spaces>` (e.g. `SD3/Status Message`). File stays PascalCase. Renaming after ship breaks Playwright story-ID refs.
- `parameters.docs.description.component` — one sentence what + one sentence when.
- `argTypes` — only override what `react-docgen-typescript` can't infer (e.g. `children: { control: { type: "text" }, table: { type: { summary: "ReactNode" } } }`).
- `Default` + composition stories only. A story earns its place by showing composition, polymorphism, non-obvious aria, or interaction. No per-enum-value stories, no `AllVariants` matrix.
- Composition args pattern: text + text + boolean story-only args under `table: { category: "Composition" }`; shared `render:` on meta.
- Realistic children content (`"Your password must be at least 12 characters and contain…"`, not `"This message is long enough that it wraps…"`).
- `args` contains required-no-default props and non-default overrides only.
- `on*` no-callback stories need explicit `undefined` — preview config auto-wraps every `on*`-prefixed prop.
- Import from `../index`, not `../src/`. Renderer is `@storybook/react-vite`.
- Icon selector: use `_stories/iconArgType.ts` (`iconArgType` + `IconComponent`). Import, drop into `argTypes.icon`, inject via `render`.

### Stories are copy-paste templates

Consumers paste these into their product; every example must be fully accessible.

- Icon-only buttons, dismiss affordances, nav regions → `aria-label`.
- Modals, dialogs → `aria-labelledby` or `aria-label`.
- Form inputs → associated `<label>` + matching `id` / `htmlFor`.
- Help text, error messages → `aria-describedby` wiring.
- SPEC-required announcements → `aria-live` region hooks.
- Props intersected with `AriaLabelOrAriaLabelledby` → pass one (TS enforces; don't `@ts-expect-error`).

A story that trips axe in the controls panel will trip axe in production.

## Shape

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { <PascalCase>, <PascalCase>Props } from "../index";

const meta: Meta<<PascalCase>Props> = {
  title: "SD3/<Display Name With Spaces>",
  component: <PascalCase>,
  parameters: {
    docs: {
      description: {
        component: "<one sentence what>. <one sentence when>.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<<PascalCase>Props>;

export const Default: Story = { args: { children: "…" } };
```
