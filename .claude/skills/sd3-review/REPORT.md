# Report format (shared across all sd3-review agents)

Every agent writes to the path given in its dispatch prompt, using this shape:

```
# <axis> — <PascalCase>

## Blockers
- <file:line or story URL> — <finding>

## Warnings
- <file:line> — <finding>

## OK
- <one short line per check that passed, so the orchestrator can confirm the axis was walked>
```

Rules:

- **Blockers** fail CI, fail a11y, visibly diverge from Figma, or break a convention. The orchestrator reads them literally.
- **Warnings** are drift the user should see but can ship without.
- **OK** is not optional — list every check attempted that passed. One per line. If a check was skipped (e.g. axe couldn't run), say so under OK with `skipped:` — don't invent findings to fill silence.
- Keep each line terse. `file:line` beats prose. One finding per line.
- Do not flag SPEC.md drift. SPEC is a planning artefact, not a contract.
- Do not propose fixes. This skill reports drift; a separate run fixes it.
