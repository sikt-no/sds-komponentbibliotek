import { Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import type { AnchorHTMLAttributes, ElementType, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./nav-button.module.css";

export interface NavButtonLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export const NavButtonLink = forwardRef<HTMLAnchorElement, NavButtonLinkProps>(
  ({ className, icon, href, children, ...rest }: NavButtonLinkProps, ref) => {
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
  },
);

NavButtonLink.displayName = "NavButtonLink";
