import type { HTMLAttributes } from "react";

export interface DialogHeaderProps extends HTMLAttributes<HTMLElement> {
  /** Render a bottom divider line. */
  divider?: boolean;
}

export const DialogHeader = ({
  divider,
  className,
  children,
  ...rest
}: DialogHeaderProps) => (
  <header
    data-part="header"
    data-divider={divider ? "" : undefined}
    className={className}
    {...rest}
  >
    {children}
  </header>
);

DialogHeader.displayName = "Dialog.Header";
