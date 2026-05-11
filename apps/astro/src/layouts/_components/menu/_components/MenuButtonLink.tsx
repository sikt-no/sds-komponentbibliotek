import { Link } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./menu-button.module.css";

export interface MenuButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export const MenuButtonLink = forwardRef<
  HTMLAnchorElement,
  MenuButtonLinkProps
>(({ className, icon, href, children, ...rest }: MenuButtonLinkProps, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      className={clsx(styles.button, className)}
      {...rest}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </Link>
  );
});

MenuButtonLink.displayName = "MenuButtonLink";
