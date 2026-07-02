---
name: sikt-design-system
description: Build UIs using the Sikt Design System (@sikt/sds-* packages). Use whenever the user asks about SDS components, variants/sizes, CSS class names, design tokens, brand colors, or which icon to import. Also use when the user asks to build any form, page, or UI component in a Sikt project — even if they don't mention SDS by name.
---

# Sikt Design System

Always read `references/guides/rules.md` before writing any code.

## Where to look

1. **Core rules** (mandatory patterns, common errors, verify checklist) → `references/guides/rules.md`
2. **Component API** → `references/components/<slug>.md` — when working with a specific component's props or examples; start with `references/index.md` for the full list
3. **Tokens** → `references/tokens/colors.md`, `spacing.md`, `typography.md`, `effects.md`, `base.md` — when writing any CSS value
4. **Icons** → `references/icons.md` — when adding any icon or visual symbol
5. **Which component to use?** → `references/guides/component-decision-tree.md` — when choosing which SDS component fits the situation
6. **Forms / validation** → `references/guides/forms.md` — when implementing inputs, labels, fieldsets, or validation
7. **CSS setup** → `references/guides/styling.md` — when configuring `globals.css` or writing layout CSS
8. **Bootstrap a new app** (package install, page shell, favicon, Haffer fonts, CSP) → `references/guides/bootstrap.md` — when `@sikt/sds-core` is not yet a dependency, or when setting up a fresh Sikt project
9. **Next.js** (CSS imports, App Router, `'use client'`, fonts) → `references/guides/nextjs.md` — when the project uses Next.js
10. **Responsive design** (breakpoints, mobile-first, layout patterns) → `references/guides/responsive.md` — when writing CSS that needs breakpoints
11. **Typography** (Heading vs visual size, variants) → `references/guides/typography.md` — when picking a heading level or sizing body text
12. **Header pattern** → `references/guides/patterns/header.md` — when filling slots in the app header
13. **Footer pattern** → `references/guides/patterns/footer.md` — when setting up the page shell or asked about omitting the footer
14. **Dialog pattern** → `references/guides/patterns/dialog.md` — when deciding between modal and non-modal dialogs
15. **Custom components** → `references/guides/custom-components.md` — only when no SDS component covers the need
