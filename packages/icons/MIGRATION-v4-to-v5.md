# `@sikt/sds-icons` migration guide

Structured for AI agents. Every rename is listed as a mechanical string replacement.

## Scope

**Breaking:** 22 icons renamed to match the SDS Ikoner Figma file. One name (`user-profile`) is retargeted to a new visual. One icon added. No icons removed. Underlying Phosphor mappings are unchanged for all renamed icons.

Affected artifacts per icon:

- React component import — `PascalCase` + `Icon` suffix
- SVG asset filename — `kebab-case`
- Sprite fragment id — `kebab-case`

## Breaking behavior change: `user-profile`

The name `user-profile` / `UserProfileIcon` still exists but **now renders a different visual**. Figma split the previous icon into two:

- **Old** `user-profile` = user silhouette inside a circle border (Phosphor `user-circle`).
- **New** `user-profile` = plain user silhouette, no circle border (Phosphor `user`).
- The user-in-circle visual is now `user-profile-circle` / `UserProfileCircleIcon`.

Consumers using `UserProfileIcon` will silently get the new plain visual. If you want the old visual, rewrite `UserProfileIcon` → `UserProfileCircleIcon` (and `user-profile.svg` → `user-profile-circle.svg`, `#user-profile` → `#user-profile-circle`).

## Rename map

Each row is one icon. Apply the transformation to all three columns in your codebase.

| Old name (kebab)           | New name (kebab)              | Old React import            | New React import               |
| -------------------------- | ----------------------------- | --------------------------- | ------------------------------ |
| `locked-closed`            | `locked`                      | `LockedClosedIcon`          | `LockedIcon`                   |
| `unlocked-open`            | `unlocked`                    | `UnlockedOpenIcon`          | `UnlockedIcon`                 |
| `user-add`                 | `add-user-circle`             | `UserAddIcon`               | `AddUserCircleIcon`            |
| `user-remove`              | `remove-user-circle`          | `UserRemoveIcon`            | `RemoveUserCircleIcon`         |
| `help`                     | `help-circle`                 | `HelpIcon`                  | `HelpCircleIcon`               |
| `cancel`                   | `close`                       | `CancelIcon`                | `CloseIcon`                    |
| `ai`                       | `artificial-intelligence`     | `AiIcon`                    | `ArtificialIntelligenceIcon`   |
| `navigate-to-next-alt`     | `navigate-to-next-circle`     | `NavigateToNextAltIcon`     | `NavigateToNextCircleIcon`     |
| `navigate-to-previous-alt` | `navigate-to-previous-circle` | `NavigateToPreviousAltIcon` | `NavigateToPreviousCircleIcon` |
| `move-to-next-alt`         | `move-to-next-circle`         | `MoveToNextAltIcon`         | `MoveToNextCircleIcon`         |
| `move-to-previous-alt`     | `move-to-previous-circle`     | `MoveToPreviousAltIcon`     | `MoveToPreviousCircleIcon`     |
| `expand-show-alt`          | `expand-show-circle`          | `ExpandShowAltIcon`         | `ExpandShowCircleIcon`         |
| `collapse-hide-alt`        | `collapse-hide-circle`        | `CollapseHideAltIcon`       | `CollapseHideCircleIcon`       |
| `contextual-menu-alt`      | `contextual-menu-circle`      | `ContextualMenuAltIcon`     | `ContextualMenuCircleIcon`     |
| `add-alt`                  | `add-circle`                  | `AddAltIcon`                | `AddCircleIcon`                |
| `subtract-alt`             | `subtract-circle`             | `SubtractAltIcon`           | `SubtractCircleIcon`           |
| `bookmark-unchecked`       | `bookmark`                    | `BookmarkUncheckedIcon`     | `BookmarkIcon`                 |
| `bookmark-checked`         | `bookmark-filled`             | `BookmarkCheckedIcon`       | `BookmarkFilledIcon`           |
| `success-alt`              | `success-filled`              | `SuccessAltIcon`            | `SuccessFilledIcon`            |
| `info-alt`                 | `info-filled`                 | `InfoAltIcon`               | `InfoFilledIcon`               |
| `alert-alt`                | `alert-filled`                | `AlertAltIcon`              | `AlertFilledIcon`              |
| `failed-alt`               | `failed-filled`               | `FailedAltIcon`             | `FailedFilledIcon`             |

## Machine-readable map

```json
{
  "renames": [
    { "old": "locked-closed", "new": "locked" },
    { "old": "unlocked-open", "new": "unlocked" },
    { "old": "user-add", "new": "add-user-circle" },
    { "old": "user-remove", "new": "remove-user-circle" },
    { "old": "help", "new": "help-circle" },
    { "old": "cancel", "new": "close" },
    { "old": "ai", "new": "artificial-intelligence" },
    { "old": "navigate-to-next-alt", "new": "navigate-to-next-circle" },
    { "old": "navigate-to-previous-alt", "new": "navigate-to-previous-circle" },
    { "old": "move-to-next-alt", "new": "move-to-next-circle" },
    { "old": "move-to-previous-alt", "new": "move-to-previous-circle" },
    { "old": "expand-show-alt", "new": "expand-show-circle" },
    { "old": "collapse-hide-alt", "new": "collapse-hide-circle" },
    { "old": "contextual-menu-alt", "new": "contextual-menu-circle" },
    { "old": "add-alt", "new": "add-circle" },
    { "old": "subtract-alt", "new": "subtract-circle" },
    { "old": "bookmark-unchecked", "new": "bookmark" },
    { "old": "bookmark-checked", "new": "bookmark-filled" },
    { "old": "success-alt", "new": "success-filled" },
    { "old": "info-alt", "new": "info-filled" },
    { "old": "alert-alt", "new": "alert-filled" },
    { "old": "failed-alt", "new": "failed-filled" }
  ]
}
```

## Migration recipe

For each rename in the map, apply these three whole-word replacements across the codebase:

1. **React components** — replace the PascalCase form:
   `<Old>Icon` → `<New>Icon` (e.g. `AddAltIcon` → `AddCircleIcon`).
   Applies to import specifiers and JSX usages.

2. **Asset paths** — replace the kebab-case form when it appears in SVG asset URLs:
   `@sikt/sds-icons/dist/assets/<old>.svg` → `@sikt/sds-icons/dist/assets/<new>.svg`.

3. **Sprite fragment ids** — replace the kebab-case form inside `<use href="…#<name>">`:
   `#<old>` → `#<new>`.

Use word-boundary matches to avoid false positives:

- The old name `add-alt` must not match `add-alt-something-else` — anchor on `Icon`, `.svg`, or `#`/end-of-string.
- The rename `ai` → `artificial-intelligence` is high-risk for false positives. Only rewrite `AiIcon`, `ai.svg`, and `#ai` (with `#` prefix and end-of-token). Do **not** touch other occurrences of `ai`.
- The renames `help` → `help-circle` and `cancel` → `close` are high-risk for false positives — `help` and `cancel` are common substrings and English words. Only rewrite `HelpIcon`, `help.svg`, `#help`, `CancelIcon`, `cancel.svg`, and `#cancel` (with anchors as above).

## Before / after examples

**React:**

```diff
- import { AddAltIcon, ExpandShowAltIcon } from "@sikt/sds-icons";
+ import { AddCircleIcon, ExpandShowCircleIcon } from "@sikt/sds-icons";

- <AddAltIcon />
+ <AddCircleIcon />
```

**SVG asset path:**

```diff
- <img src="@sikt/sds-icons/dist/assets/locked-closed.svg" />
+ <img src="@sikt/sds-icons/dist/assets/locked.svg" />
```

**Sprite:**

```diff
- <use href="@sikt/sds-icons/dist/sds-icons.svg#bookmark-checked" />
+ <use href="@sikt/sds-icons/dist/sds-icons.svg#bookmark-filled" />
```

## Verification

After applying replacements:

1. TypeScript must compile — the old React names no longer exist as exports from `@sikt/sds-icons`.
2. Grep for the old names to catch stragglers (see the map above).
3. Load the app and confirm no missing-icon placeholders render.
