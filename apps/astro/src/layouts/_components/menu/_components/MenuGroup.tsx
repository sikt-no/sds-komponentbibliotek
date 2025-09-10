import { clsx } from "clsx/lite";
import type { HTMLAttributes, ReactNode } from "react";
import styles from "./menu-group.module.css";

export interface MenuGroupProps extends HTMLAttributes<HTMLElement> {
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
    <figure className={clsx(styles.figure, className)} {...rest}>
      {heading && (
        <figcaption className={styles.figcaption}>{heading}</figcaption>
      )}
      <ul>{children}</ul>
    </figure>
  );
};
