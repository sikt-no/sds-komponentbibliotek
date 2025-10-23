import { clsx } from "clsx/lite";
import { LiHTMLAttributes, ReactNode } from "react";

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
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

ListItem.displayName = "ListItem";
