---
name: sd3-review
description: >
  Audit a shipped SD3 component for drift across four axes in parallel
  sub-agents: accessibility, AI-slop + SD3 conventions, performance, and
  figma-impl (code matches the Figma extraction — nothing more, nothing
  less). Read-only: reports drift, does not fix. Use when the user wants to review, audit, or check
  a built SD3 component before release.
  Trigger words: "review component", "sd3-review", "audit component".
---

# SD3 Review

Four sub-agents, each owning one **axis**. Each reports **drift** on its axis; the orchestrator merges into one punch list. **Read-only** — no code is edited.

Everything lands in `packages/design-system/src/<PascalCase>/review/` — sibling to `spec/`, **gitignored**. Reviews are ephemeral; re-run the skill when you need a fresh one.

## Input

**PascalCase component name** (e.g. `Details`). The skill reads `packages/design-system/src/<PascalCase>/`. If missing, ask.

## Preflight

In parallel:

- `mkdir -p packages/design-system/src/<PascalCase>/review/` — fails if the component folder is missing; if it does, stop and tell the user the folder doesn't exist.
- `curl -sf http://localhost:6006/iframe.html >/dev/null` — if Storybook isn't up, tell the user to `npm run dev:storybook` and pause. The a11y axis needs it.

## Dispatch

Spawn all four agents in a single message via `Agent` with `subagent_type: "general-purpose"`. Prompt shape:

```
Read .claude/skills/sd3-review/prompts/<agent>.md and
.claude/skills/sd3-review/REPORT.md. Follow them exactly.

Component: <PascalCase>
Write to:  packages/design-system/src/<PascalCase>/review/<agent>.md

Report back: path to the artefact + one line per blocker/warning found.
```

The four agents: `a11y`, `slop`, `performance`, `figma-impl`.

## Synthesis

Open each agent's report. Merge into `review/REVIEW-<YYYY-MM-DD>.md`:

```
# Review: <PascalCase> — <YYYY-MM-DD>

## Blockers
- <axis> · <file:line> — <finding>

## Warnings
- <axis> · <finding>

## OK
- a11y: <one-line>
- slop: <one-line>
- performance: <one-line>
- figma-impl: <one-line>

## Agent reports
- review/a11y.md
- review/slop.md
- review/performance.md
- review/figma-impl.md
```

Classification:

- **Blocker** — fails accessibility, fails CI, visibly diverges from Figma, or breaks an SD3 convention the memories mark as drift.
- **Warning** — soft drift: redundant argType, missing JSDoc, prose with AI tells, bundle-size regression without reason.
- **OK** — one line per axis so the user can confirm the axis was actually walked.

End with **one recommendation** — the smallest next action that clears the biggest blocker. Do not attempt the fix.

## Terminal summary

Print Blockers, Warnings, OK, and the recommendation inline. Link the full report path at the bottom.
