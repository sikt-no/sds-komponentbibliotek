import { Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import type { AnchorHTMLAttributes, ElementType, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./menu-button.module.css";

export interface MenuButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export const MenuButtonLink = forwardRef<
  HTMLAnchorElement,
  MenuButtonLinkProps
>(({ className, icon, href, children, ...rest }: MenuButtonLinkProps, ref) => {
  const Component: ElementType = href ? Link : "div";

  return (
    <Component
      ref={ref}
      href={href}
      className={clsx(styles.button, !href && styles.disabled, className)}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </Component>
  );
});

MenuButtonLink.displayName = "MenuButtonLink";
