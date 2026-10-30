import type { ReactNode } from "react";
import { Button, type ButtonProps } from "../../Button";
import { useToggleGroupContext } from "./ToggleGroupContext";

export interface ToggleGroupItemProps extends Omit<
  ButtonProps,
  "role" | "aria-checked" | "variant" | "size" | "value" | "asChild"
> {
  /** The value this item represents. Unique within the group. */
  value: string;
  /** Label text and/or a `ToggleGroup.Item.Icon`. Icon-only items require `aria-label`. */
  children?: ReactNode;
}

const ToggleGroupItemRoot = ({
  value,
  disabled,
  onClick,
  children,
  ...rest
}: ToggleGroupItemProps) => {
  const ctx = useToggleGroupContext();
  const checked = ctx.selectedValue === value;
  const itemDisabled = disabled ?? ctx.disabled;
  const isFallbackTabStop = ctx.fallbackTabStopValue === value;

  return (
    <Button
      {...rest}
      role="radio"
      aria-checked={checked}
      tabIndex={checked || isFallbackTabStop ? 0 : -1}
      variant={checked ? "primary" : "tertiary"}
      size={ctx.size}
      disabled={itemDisabled}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) ctx.onItemChange(value);
      }}
    >
      {children}
    </Button>
  );
};
ToggleGroupItemRoot.displayName = "ToggleGroup.Item";

export const ToggleGroupItem = Object.assign(ToggleGroupItemRoot, {
  Icon: Button.Icon,
});
