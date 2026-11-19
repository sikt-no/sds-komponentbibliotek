import type { HTMLAttributes } from "react";

export interface DialogFooterProps extends HTMLAttributes<HTMLElement> {
  /** Render a top divider line. */
  divider?: boolean;
}

export const DialogFooter = ({
  divider,
  className,
  children,
  ...rest
}: DialogFooterProps) => (
  <footer
    data-part="footer"
    data-divider={divider ? "" : undefined}
    className={className}
    {...rest}
  >
    {children}
  </footer>
);

DialogFooter.displayName = "Dialog.Footer";
