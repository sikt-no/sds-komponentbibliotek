import { clsx } from "clsx/lite";
import { ReactNode } from "react";

export interface DrawerContentProps {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const DrawerContent = ({
  children,
  ariaLabel = "Sidepanel navigasjon",
  className,
  ...rest
}: DrawerContentProps) => {
  return (
    <section
      aria-label={ariaLabel}
      className={clsx("sds-drawer-content", className)}
      {...rest}
    >
      {children}
    </section>
  );
};
