# @sikt/sds-progress-indicator

Version: `3.1.0`  
Package slug: `progress-indicator` (under `packages/progress-indicator`)

## Install

```sh
npm i -s @sikt/sds-progress-indicator
```

```ts
import { ProgressIndicator } from "@sikt/sds-progress-indicator";
```

Add `@import "@sikt/sds-progress-indicator/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `ProgressIndicator`
- `ProgressIndicatorProps`
- `ProgressStep`
- `ProgressStepButton`
- `ProgressStepButtonProps`
- `ProgressStepLink`
- `ProgressStepLinkProps`
- `ProgressStepProps`

## Components

### ProgressIndicator

Source: `packages/progress-indicator/src/ProgressIndicator.tsx`

Extends: `HTMLAttributes<HTMLDivElement | HTMLDetailsElement>`

**Props**

| Prop           | Type                     | Required               | Default | Description                                                            |
| -------------- | ------------------------ | ---------------------- | ------- | ---------------------------------------------------------------------- |
| `className`    | `string`                 | no                     | —       | —                                                                      |
| `count`        | `number`                 | conditionally required | —       | Required unless `children` is set. Mutually exclusive with `children`. |
| `currentIndex` | `number`                 | yes                    | —       | —                                                                      |
| `expandable`   | `boolean`                | no                     | —       | —                                                                      |
| `heading`      | `NonNullable<ReactNode>` | yes                    | —       | —                                                                      |
| `open`         | `boolean`                | no                     | —       | —                                                                      |

### ProgressStep

Source: `packages/progress-indicator/src/ProgressStep.tsx`

Extends: `HTMLAttributes<HTMLLIElement>`

**Props**

| Prop        | Type      | Required | Default | Description |
| ----------- | --------- | -------- | ------- | ----------- |
| `className` | `string`  | no       | —       | —           |
| `current`   | `boolean` | no       | —       | —           |
| `index`     | `number`  | no       | `0`     | —           |

### ProgressStepButton

Source: `packages/progress-indicator/src/ProgressStepButton.tsx`

Extends: `ButtonHTMLAttributes<HTMLButtonElement>`

**Props**

| Prop      | Type      | Required | Default | Description |
| --------- | --------- | -------- | ------- | ----------- |
| `current` | `boolean` | no       | —       | —           |
| `index`   | `number`  | no       | `0`     | —           |

### ProgressStepLink

Source: `packages/progress-indicator/src/ProgressStepLink.tsx`

Extends: `AnchorHTMLAttributes<HTMLAnchorElement>`

**Props**

| Prop      | Type      | Required | Default | Description |
| --------- | --------- | -------- | ------- | ----------- |
| `asChild` | `boolean` | no       | `false` | —           |
| `current` | `boolean` | no       | —       | —           |
| `index`   | `number`  | no       | `0`     | —           |

## CSS class names

Available when `@sikt/sds-progress-indicator/dist/index.css` is imported.

- `.sds-progress-indicator`
- `.sds-progress-indicator--expandable`
- `.sds-progress-indicator__heading`
- `.sds-progress-indicator__heading-button`
- `.sds-progress-indicator__heading-content`
- `.sds-progress-indicator__heading-icon`
- `.sds-progress-indicator__step-bar`
- `.sds-progress-indicator__step-bar-item`
- `.sds-progress-indicator__step-bar-item--current`
- `.sds-progress-indicator__step-details`
- `.sds-progress-indicator__step-details-action`
- `.sds-progress-indicator__step-details-content`
- `.sds-progress-indicator__step-details-item`
- `.sds-progress-indicator__summary`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **ProgressIndicator**: Default, Expandable, WithoutDetails
