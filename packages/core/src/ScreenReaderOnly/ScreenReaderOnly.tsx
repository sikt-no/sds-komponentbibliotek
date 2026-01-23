import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode } from "react";

export interface ScreenReaderOnlyProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: ReactNode;
  /**
   * Will make the element visible when navigated to with keyboard.
   */
  isFocusable?: boolean;
}

export const ScreenReaderOnly = ({
  children,
  className,
  isFocusable,
  ...rest
}: ScreenReaderOnlyProps) => {
  return (
    <span
      className={clsx(
        "sds-screen-reader-only",
        isFocusable && "sds-screen-reader-only--focusable",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
};
ScreenReaderOnly.displayName = "ScreenReaderOnly";
