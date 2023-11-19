import React, { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface ScreenReaderOnlyProps extends HTMLAttributes<HTMLSpanElement> {
  className?: string;
  children: ReactNode;
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
