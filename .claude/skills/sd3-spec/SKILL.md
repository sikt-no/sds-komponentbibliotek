---
name: sd3-spec
description: >
  Spec pipeline for a new SD3 component: three sub-agents extract Figma,
  external best practices, and SDS prior art into separate artefacts; the
  orchestrator synthesises `SPEC.md` from them. Feeds [[sd3-builder]].
  Use when the user wants a thorough, auditable spec, or for a component
  where the pattern isn't obvious.
  Trigger words: "sd3-spec", "spec pipeline", "thorough spec".
---

# SD3 Spec

Three sub-agents, one SPEC.md. The spec is **descriptive, not prescriptive**: it records what Figma plans and what best-practice sources prescribe. A separate implementation step decides HOW — props, types, CSS, folder layout are all out of scope here.

Everything the pipeline produces lands in `packages/design-system/src/<PascalCase>/spec/` and is checked in — the full audit trail, not scratch.

## Inputs

Ask up front:

1. Figma URL in SDS Komponenter (file key `0aelUwbn2Ivir3T2JfhdOo`).
2. PascalCase component name.

Reject the deprecated 2.0 file `RMhyuuEhXZ4vbKVrLQr4t4`.

### Auto-detect what it replaces

Kebab-case the component name and check `packages/<kebab>/`:

- `Combobox` → `packages/combobox/` → `replaces=@sikt/sds-combobox`
- `InputDatepicker` → `packages/input-datepicker/` → `replaces=@sikt/sds-input-datepicker`
- `FooBar` → `packages/foo-bar/` missing → `replaces=none`

Report the inference in the summary block (Step "Present + confirm"). The user overrides there if the auto-detect got it wrong (rename, merged legacy pkgs, net-new).

## Flow

1. Create `packages/design-system/src/<PascalCase>/spec/`.
2. **Figma agent** runs alone → `spec/figma.md` (+ `spec/screenshots/*.png`).
3. **Research + Prior-art agents** run in parallel in a single message, both reading `figma.md` → `spec/research.md` + `spec/prior-art.md`.
4. Orchestrator opens `SPEC-TEMPLATE.md`, reads all three artefacts, and fills every heading using the source table below. Done when every SPEC heading has content sourced from its named file, and `Resolved tradeoffs` is present iff a conflict was recorded.

## Launching sub-agents

Spawn via `Agent` with `subagent_type: "general-purpose"`. **Foreground only — never set `run_in_background: true`.** Background sub-agents don't inherit the project's `.claude/settings.local.json`, so `Write(.../packages/design-system/src/**)` and `Bash(npx … modern-web-guidance retrieve:*)` end up denied even though the parent has them allowed.

Figma runs alone first. Research + prior-art then go in parallel — put both `Agent` calls in the same message (the harness runs concurrent foreground calls in parallel). Prompt shape:

```
Read .claude/skills/sd3-spec/prompts/<agent>.md and follow it exactly.

Component:    <PascalCase>
Figma URL:    <url>
Replaces:     <sds-* list or "none">
Write to:     packages/design-system/src/<PascalCase>/spec/<agent>.md

<for research + prior-art:>
Also read:    packages/design-system/src/<PascalCase>/spec/figma.md

Report back: path to the artefact + a 5-line summary of top findings.
```

## Synthesis rules

Mechanical merge — each SPEC section has one authoritative source file:

| SPEC section           | Source                                            |
| ---------------------- | ------------------------------------------------- |
| Overview               | `figma.md`                                        |
| Variants               | `figma.md`                                        |
| States                 | `figma.md`                                        |
| Slots                  | `figma.md`                                        |
| Internal composition   | `figma.md`                                        |
| Icons                  | `figma.md`                                        |
| Design tokens          | `figma.md`                                        |
| Dimension asymmetries  | `figma.md`                                        |
| Reference screenshots  | `figma.md`                                        |
| Documentation text     | `figma.md`                                        |
| Accessibility          | `research.md`                                     |
| Best-practice notes    | `research.md`                                     |
| Prior-art observations | `prior-art.md`                                    |
| Open questions & gaps  | merge "Open questions" from all three + conflicts |
| Resolved tradeoffs     | orchestrator — see below                          |

### Resolved tradeoffs

Add this section at the top of SPEC.md **only if conflicts exist**. For each conflict:

```
- **<topic>**
  - Figma:    <what figma.md said>
  - Research: <what research.md said>
  - Prior art:<what prior-art.md said>
  - Spec:     <what SPEC records>
  - Reason:   <one sentence>
```

Never silently pick a side.

### Follow-ups (non-blocking)

Each agent's prompt instructs it to write a `## Follow-ups` section alongside `## Open questions`. Follow-ups are things worth remembering but not worth blocking SPEC.md on — "promote this hidden token in v2," "the Figma file is missing a loading state we'll likely need," etc.

Orchestrator merges those into `spec/followups.md` with provenance:

```markdown
# <Component> — Follow-ups

Non-blocking items raised by the pipeline. Triage into issues when picked up.

## From figma.md

- <item>

## From research.md

- <item>

## From prior-art.md

- <item>
```

In the confirmation summary, ask: **"File these as issues now, or leave for later triage?"** If the user says yes, draft one-line issue titles per item for them to copy. Don't call issue APIs here.

## Present + confirm

Before writing SPEC.md, show:

```
Component:       <PascalCase>  (new | update)
Replaces:        <sds-* packages or "none">
Figma page:      <url>
Variants:        <N axes, M total>
States:          <list>
Slots:           <N>
Tokens:          <N bound, M hardcoded flagged>
A11y pattern:    <APG name or "no match">
Prior-art flags: <N divergences from existing SDS patterns>
Open questions:  <N>  (blocking)
Follow-ups:      <N>  (non-blocking)
Conflicts:       <N>
```

Wait for confirmation. On update, show a diff vs. existing SPEC.md.

## Write + report

Write:

- `packages/design-system/src/<PascalCase>/spec/SPEC.md`
- `packages/design-system/src/<PascalCase>/spec/followups.md` (omit if no follow-ups)

Report:

- Paths to SPEC.md, followups.md, and the `spec/` folder.
- Open-question count — flag if non-zero.
- Follow-up count.
- Suggest moving to the implementation step when ready to build.
