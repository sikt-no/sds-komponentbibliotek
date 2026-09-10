/** @default undefined */
export type Category = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

/** @default "right" */
export type IconPosition = "right" | "left";

/** @default "primary" */
export type VariantButton =
  "primary" | "primary-sublte" | "secondary" | "tertiary";

/** @default "brand" */
export type Variant =
  | "brand"
  | "neutral"
  | "transparent"
  | "critical"
  | "warning"
  | "info"
  | "success";

/** @default "standard" */
export type SizeDensity = "standard" | "compact";

/** @default "medium" */
export type Size = "small" | "medium" | "large";

/** @default "default" */
export type State = "default" | "disabled" | "busy";

/**
 * Requires exactly one of `aria-label` or `aria-labelledby`. Intersect into a
 * component's props to force consumers to supply an accessible name at compile
 * time. Setting both is rejected — `aria-labelledby` wins at runtime and
 * leaves `aria-label` as dead code.
 */
export type AriaLabelOrAriaLabelledby =
  | {
      "aria-label": string;
      "aria-labelledby"?: never;
    }
  | {
      "aria-labelledby": string;
      "aria-label"?: never;
    };
