# @sikt/sds-chip

Version: `1.1.0`  
Package slug: `chip` (under `packages/chip`)

Chip component, Sikt component library

## Install

```sh
npm i -s @sikt/sds-chip
```

```ts
import { ChipButton } from "@sikt/sds-chip";
```

Add `@import "@sikt/sds-chip/dist/index.css";` to your app's `globals.css` — never import component CSS inside component files.

Also import CSS for transitive SDS dependencies (they render components from these packages internally):

- `@import "@sikt/sds-icons/dist/index.css";`

## Exports

- `ChipButton`
- `ChipButtonProps`
- `ChipToggle`
- `ChipToggleProps`

## Components

### ChipButton

Source: `packages/chip/src/Chip.tsx`

**Props**

| Prop        | Type     | Required | Default | Description |
| ----------- | -------- | -------- | ------- | ----------- |
| `className` | `string` | no       | —       | —           |

### ChipToggle

Source: `packages/chip/src/Chip.tsx`

**Props**

| Prop        | Type      | Required | Default | Description                                                     |
| ----------- | --------- | -------- | ------- | --------------------------------------------------------------- |
| `checked`   | `boolean` | no       | `false` | If the component is in a checked, active, pressed state or not. |
| `className` | `string`  | no       | —       | —                                                               |

## CSS class names

Available when `@sikt/sds-chip/dist/index.css` is imported.

- `.sds-chip`
- `.sds-chip--checked`
- `.sds-chip--toggle`
- `.sds-chip__icon`
- `.sds-chip__label`

## Storybook examples

Examples are visible at https://designsystem.sikt.no/ under the corresponding component.

- **ChipButton**: Default
- **ChipToggle**: Default
