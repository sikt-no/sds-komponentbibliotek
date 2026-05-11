import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./menu-group.module.css";

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  heading?: string;
}

export const MenuGroup = ({
  children,
  heading,
  className,
  ...rest
}: MenuGroupProps) => {
  return (
    <div
      className={clsx(styles.group, className)}
      aria-label={heading}
      {...rest}
    >
      {heading && (
        <span className={styles.groupLabel} aria-hidden="true">
          {heading}
        </span>
      )}
      <ul>{children}</ul>
    </div>
  );
};
