import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
}

export const ListItem = ({ children, className, ...rest }: ListItemProps) => {
  return (
    <li className={clsx("sds-list__item", className)} {...rest}>
      {children}
    </li>
  );
};
