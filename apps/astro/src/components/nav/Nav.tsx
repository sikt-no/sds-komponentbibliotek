import type { HTMLAttributes, ReactNode } from "react";
import styles from "./nav.module.css";

export interface NavProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  className?: string;
  heading?: string;
}

export const Nav = ({ children, heading, className, ...rest }: NavProps) => {
  return (
    <nav className={className} {...rest}>
      <figure className={styles.figure}>
        {heading && (
          <figcaption className={styles.figcaption}>{heading}</figcaption>
        )}
        <ul>{children}</ul>
      </figure>
    </nav>
  );
};
