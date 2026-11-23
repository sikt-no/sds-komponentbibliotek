# performance agent

Audit `packages/design-system/src/<PascalCase>/` for performance drift. SD3 is a small lib — this axis is intentionally thin. Flag only things that cost users measurable time or bytes.

## Checks

- **Bundle weight.** Grep imports in `src/<PascalCase>.tsx`. Flag any dependency that imports a large library for a trivial feature (date-fns for a formatter, lodash for `clsx`). `clsx` and `@radix-ui/react-slot` are expected; anything else needs justification.
- **Re-render triggers.** Grep for inline object/array literals passed as props to child components inside the render body (not hoisted). Flag with file:line.
- **CSS specificity / size.** `wc -l` the component CSS. If dramatically larger than peers in the folder, say so — don't prescribe a number.
- **No runtime style injection.** Grep for `style={{ ... }}` with computed values in hot paths; prefer CSS variables set on the root.

Report in the shape from `REPORT.md`. If nothing drifts, say so under OK. Don't invent problems.
