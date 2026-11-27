# Figma Code Connect 2.0 — `figma/<PascalCase>.figma.ts`

References: `packages/design-system/src/Button/figma/Button.figma.ts`, `packages/design-system/src/StatusMessage/figma/StatusMessage.figma.ts`. Open one before writing.

fileKey (SDS Komponenter 3.0): `0aelUwbn2Ivir3T2JfhdOo`. Reject the deprecated 2.0 file `RMhyuuEhXZ4vbKVrLQr4t4`.

**Never rename to `.figma.tsx`.** That is the 1.0 React-parser syntax and is silently ignored by the `figma.config.json` glob (`packages/design-*/**/figma/*.figma.ts`). Delete any `.figma.tsx` the generator or a previous skill version produced.

## Edits to the generator's stub

1. Replace `<node-id>` in `// url=` with the **component-set URL** — the one Code Connect binds against. Source it from `spec/figma.md`'s `## Code Connect inputs` block (or the equivalent `**URL:**` field on the chosen component set). **Do not** copy SPEC.md's top-of-file Figma link blindly if the spec pre-dates the url-source fix — that may still be a page/frame link. Sanity check: the `node-id` you drop in must appear under `## Code Connect inputs` in `figma.md`; if not, stop and reconcile before continuing.
2. Expand the default export: prop mappings + `example: figma.code\`…\``+`metadata: { nestable: true }`.

## Discover real Figma props first

Don't guess prop names or types from SPEC or `get_metadata` variant symbols. SPEC describes the consumer surface (`children`, `disabled`, `indeterminate`); Figma exposes raw names (`labelText`, `showSecondaryText`, a `state` enum whose values include `Disabled`). `get_metadata` only lists variant axes.

Authoritative source: `mcp__figma-remote-mcp__get_design_context` with `disableCodeConnect: true` — returns the exact TS interface Figma generates.

- Open a session with `mcp__figma-remote-mcp__create_session` first (fileKey + task description). Reuse the returned `sessionId` on subsequent calls.
- Query **every variant branch** and union the results. Booleans like `isBorder=True` can gate other props (`showSecondaryText`, `secondaryText`) that don't surface on the other branch.
- Enum keys are case-sensitive and match Figma's labels exactly (`Disabled`, not `disabled`; `True`/`False`, not `true`/`false`).
- If `get_design_context` responds with the "SUPER IMPORTANT" Code Connect diversion, retry with `disableCodeConnect: true`.

## DRY `figma.selectedInstance` when a slot is involved

Slots have no `figma.properties.*` shorthand — mixing `figma.properties.enum(...)` with a lone `.getSlot(...)` reads inconsistent. Extract once:

```ts
const instance = figma.selectedInstance;
const variant = instance.getEnum("variant", {
  Strong: "strong",
  Subtle: "subtle",
  Critical: "critical",
});
const label = instance.getString("label");
const slot = instance.getSlot("slot");
```

Enum/boolean/string-only files stay on `figma.properties.*` shorthand.

## Prefer `figma.helpers.react.renderProp`

```ts
example: figma.code`
  <<PascalCase>${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("disabled", disabled)}>
    ${label}
  </<PascalCase>>`,
```

Emits `""` for falsy, `" disabled"` for `true`, `' label="x"'` for strings, `" count={42}"` for numbers. Handles the leading-space and JSX quoting automatically. Only fall back to inline `${…}` for values that must always render as literal content.

## Reference template

```ts
// url=<url from SPEC — must contain 0aelUwbn2Ivir3T2JfhdOo>
// component=<PascalCase>

import figma from "figma";

const instance = figma.selectedInstance;
const variant = instance.getEnum("variant", {
  Strong: "strong",
  Subtle: "subtle",
  Critical: "critical",
});
const disabled = instance.getBoolean("disabled");
const label = instance.getString("label");

export default {
  id: "<PascalCase>",
  imports: [`import { <PascalCase> } from "@sikt/sd3-design-system"`],
  example: figma.code`
    <<PascalCase>${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("disabled", disabled)}>
      ${label}
    </<PascalCase>>`,
  metadata: { nestable: true },
};
```

Differences from 1.0:

- File-level `// url=…` + `// component=…` directives (required and recommended respectively).
- `import figma from "figma"` — not `"@figma/code-connect"`.
- No JSX; use `figma.code\`…\``with`${…}` interpolation.
- Default export shape: `{ id, imports, example, metadata: { nestable: true } }`. **No `links` field** (raw templates don't support it).

## Nested instances and slots

```ts
// Nested instance (Instance Swap in Figma):
const iconSnippet = figma.selectedInstance.findInstance("Icon").executeTemplate().example;

// Slot (named layer in Figma):
const contentSlot = figma.selectedInstance.getSlot("Content");

example: figma.code`
  <Card>
    <Card.Icon>${iconSnippet}</Card.Icon>
    <Card.Content>${contentSlot}</Card.Content>
  </Card>`,
```

Both return `ResultSection[]` — Code Connect substitutes the connected child snippet at the interpolation site. `metadata.nestable: true` on the child enables this.

## Guardrails

- Only map props from the merged `get_design_context` interface. Skip visual-only states (`state=Hover`/`state=Pressed` — those are CSS pseudo-states) and code-only props with no Figma counterpart.
- Figma `showX` toggles ARE useful here: they decide whether a slot renders in the generated snippet (`showSecondaryText ? figma.code\`<Foo.HelpText>${helpText}</Foo.HelpText>\` : ""`).
- If SPEC has no Figma URL yet, delete the file rather than ship a stub.
- Validate: `npx figma connect parse --dry-run` must exit 0 with the file in the output. Publish (`npx figma connect publish`) is out of scope for this skill.
