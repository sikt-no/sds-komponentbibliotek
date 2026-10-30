import { clsx } from "clsx/lite";
import {
  Children,
  type HTMLAttributes,
  isValidElement,
  type KeyboardEvent,
  ReactElement,
  type ReactNode,
  useRef,
  useState,
} from "react";
import type { Size } from "../../../types";
import { ToggleGroupContext } from "./ToggleGroupContext";
import { ToggleGroupItem, type ToggleGroupItemProps } from "./ToggleGroupItem";
import "./toggle-group.css";

const NAVIGATION_KEYS = [
  "ArrowRight",
  "ArrowDown",
  "ArrowLeft",
  "ArrowUp",
  "Home",
  "End",
];

const findFirstEnabledItemValue = (children: ReactNode): string | undefined => {
  const isValid = (
    child: ReactNode,
  ): child is ReactElement<ToggleGroupItemProps> =>
    isValidElement<ToggleGroupItemProps>(child) &&
    child.type === ToggleGroupItem &&
    !child.props.disabled;
  const first = Children.toArray(children).find(isValid);
  return first?.props.value;
};

export interface ToggleGroupProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  /** Item size. Cascades to every `ToggleGroup.Item`. */
  size?: Size;
  /** Controlled selected value. Must match the `value` of exactly one `ToggleGroup.Item`. */
  value?: string;
  /** Uncontrolled initial selection. */
  defaultValue?: string;
  /** Fired when the selected value changes. */
  onChange?: (value: string) => void;
  /** Accessible name for the group. */
  "aria-label": string;
  /** Disables every item in the group. */
  disabled?: boolean;
  children?: ReactNode;
}

const ToggleGroupRoot = ({
  size = "medium",
  value,
  defaultValue,
  onChange,
  disabled,
  className,
  children,
  onKeyDown,
  ...rest
}: ToggleGroupProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const groupRef = useRef<HTMLDivElement>(null);

  const handleItemChange = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (!NAVIGATION_KEYS.includes(event.key)) return;

    const items = Array.from(
      groupRef.current?.querySelectorAll<HTMLButtonElement>(
        '[role="radio"]:not(:disabled)',
      ) ?? [],
    );

    if (items.length === 0) return;

    const currentIndex = items.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const last = items.length - 1;

    let nextIndex = currentIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % items.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = currentIndex <= 0 ? last : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = last;
    }

    event.preventDefault();
    items[nextIndex]?.focus();
  };

  const fallbackTabStopValue =
    currentValue === undefined
      ? findFirstEnabledItemValue(children)
      : undefined;

  return (
    // The group isn't focusable; roving tabindex on items handles focus.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      ref={groupRef}
      role="radiogroup"
      className={clsx("sd3-toggle-group", className)}
      data-size={size}
      aria-disabled={disabled ? true : undefined}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <ToggleGroupContext.Provider
        value={{
          size,
          selectedValue: currentValue,
          fallbackTabStopValue,
          onItemChange: handleItemChange,
          disabled,
        }}
      >
        {children}
      </ToggleGroupContext.Provider>
    </div>
  );
};
ToggleGroupRoot.displayName = "ToggleGroup";

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item: ToggleGroupItem,
});
