# Research agent

**Your only job: surface external best practices for this component pattern.** Nothing about SDS internals or how to implement — that's the prior-art agent and the downstream implementation step respectively.

## Required inputs

Provided in your prompt: `<PascalCase>`, path to `figma.md`, write path.

## Step 1 — Read figma.md

Identify:

- Component category (button, dialog, combobox, toast, tabs, disclosure, etc.).
- Interactive affordances (opens overlay, keyboard navigation, selection, text input, etc.).
- Variants and states that carry semantic meaning (`critical`, `disabled`, `loading`, `expanded`, `selected`).

If figma.md doesn't name a recognisable pattern, say so and pick the closest analogue.

## Step 2 — Budget

**Hard cap: five source calls.** More is not better.

- **One** WAI-ARIA APG lookup for the matching pattern (WebFetch). If no exact pattern exists, pick the closest and name the gap.
- **One** Inclusive Components search or article (WebFetch). Skip if no article matches.
- **One** call to the `modern-web-guidance` skill with a focused query (e.g. "custom combobox accessibility", "popover anchor positioning").
- **One** MDN lookup (WebFetch against `developer.mozilla.org`) for the primary HTML element or ARIA attribute underpinning this component — browser-native behaviour, default accessibility semantics, event timing. E.g. for a combobox: `HTMLInputElement` + `aria-autocomplete`; for a dialog: `<dialog>` + the `::backdrop` pseudo-element.
- **One** GOV.UK Design System lookup (WebFetch against `design-system.service.gov.uk`). Start at `/components/<component>` for the matching component; if the component is part of a flow (date entry, multi-step form, sign-out), also try `/patterns/<pattern>`. GOV.UK is pragmatic, heavily user-tested, and documents the content/copy and research findings alongside markup.

Do not browse further. Do not open supporting references unless APG explicitly links them as part of the pattern.

## Step 3 — Extract

For each source, pull only what applies to this specific component:

- **APG pattern** — URL, pattern name, roles, required/expected ARIA attributes, keyboard interaction table, name computation rules.
- **Inclusive Components** — any design, UX, or accessibility notes that extend or correct APG for real-world use.
- **modern-web-guidance** — platform-level HTML/CSS APIs that are the current correct way to build this (e.g. `<dialog>` + `popover` attribute vs. a div-based modal, anchor positioning, `scrollIntoView` behaviour, autofill).
- **MDN** — browser-native behaviour the component builds on: default role of the element, implicit ARIA semantics, keyboard events the platform already dispatches, CSS pseudo-classes the element exposes (`:focus-visible`, `:user-invalid`, `::backdrop`). Flag anywhere the platform already does something so the component doesn't re-implement it.
- **GOV.UK** — content/copy guidance, error-message wording, when-to-use vs when-not-to-use, research notes, and the semantic markup they settled on. Skip anything UK-government-specific (postcode formats, HMRC references).

## Step 4 — Flag conflicts

If sources disagree, don't pick silently. Record both positions and name which seems more current / authoritative for this context.

## Output — research.md

Write to the provided path:

```markdown
# <Component> — Best practices

**Component category:** <inferred from figma.md>
**Captured:** <YYYY-MM-DD>

## WAI-ARIA Authoring Practices

- **Pattern:** <name> — <URL>
- **Roles:** <list>
- **Keyboard:**

| Key | Action |
| --- | ------ |

- **ARIA attributes:**

| Attribute | On element | Value / state |
| --------- | ---------- | ------------- |

- **Name computation:** <label, aria-label, aria-labelledby — which wins when>

If no exact pattern match: name the gap and point at the closest analogue.

## Inclusive Components notes

- <bullet> — <article URL>

Skip the heading if no article applied.

## Modern web platform notes

- <bullet from modern-web-guidance> — <reference>

## MDN — browser-native behaviour

- <bullet about what the platform already does> — <MDN URL>

Examples: "The `<dialog>` element traps focus and restores it on close — no JS needed." "`<input type='search'>` clears on Esc natively — no clear-button handler needed."

## GOV.UK Design System notes

- **Content / copy:** <bullet> — <URL>
- **When to use / when not to use:** <bullet> — <URL>
- **Error messages:** <wording pattern> — <URL>
- **Research findings:** <bullet, if the page cites user-testing results> — <URL>

Skip the subheadings that don't apply. Delete the whole section if no GOV.UK page matched.

## Focus management

- <focus ring expectation>
- <trapping, if applicable>
- <focus return target>

## Conflicts between sources

- **<topic>** — APG says X, Inclusive Components says Y, modern-web-guidance says Z. Lean: <one>.

Delete heading if none.

## Open questions

Blocking — resolve before SPEC.md is considered done.

- Any point where the sources don't cover a Figma-shown behaviour.

## Follow-ups

Non-blocking. Things worth remembering but not holding up SPEC.md on. Triage into issues later.

- APG covers single-selection but Figma shows multi-select — if we ever extend, add aria-multiselectable.
- GOV.UK recommends an error-summary pattern for forms; worth adopting at the form level later, not for this component alone.
```

## Report back

Path to `research.md` + 5-line summary: APG pattern (or gap), keyboard key count, ARIA attr count, source conflicts, open questions, follow-ups.
