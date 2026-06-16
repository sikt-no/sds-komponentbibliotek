# Dialog pattern

When to use modal vs non-modal dialogs. For implementation details see `references/components/dialog.md`.

## Modal dialogs

Block all other interaction until the user completes or cancels the task.

**Use when:**

- Alerting the user to a critical error that must be resolved
- Confirming an irreversible action (delete, publish, submit)
- Collecting mandatory input required to proceed
- Breaking a complex task into a focused sub-step

**Avoid when:**

- The task contains sub-tasks — never nest modals inside modals
- The workflow is extensive — use a dedicated page or multi-step flow instead

## Non-modal dialogs

Allow the user to interact with the rest of the UI while the dialog is open.

**Use when:**

- Providing supplementary functionality alongside the primary task (filtering, text formatting)
- Showing an alternative view of content (form summary, task overview)
- Local menus on large screens
- Displaying optional help information that only some users need

**Avoid when:**

- The user must make a decision before they can continue — use a modal instead

## Tradeoff to keep in mind

Modals are effective at preventing errors, but they interrupt flow and can frustrate experienced users who already know what they're doing. Use them deliberately and test with real users.
