import type { HTMLAttributes } from "react";

export type DialogContentProps = HTMLAttributes<HTMLDivElement>;

export const DialogContent = ({
  className,
  children,
  ...rest
}: DialogContentProps) => (
  <div data-part="content" className={className} {...rest}>
    {children}
  </div>
);

DialogContent.displayName = "Dialog.Content";
