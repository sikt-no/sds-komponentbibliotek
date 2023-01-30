import React, { HTMLAttributes } from "react";
import { clsx } from "clsx";

export interface ListItemProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

const ListItem = ({ children, className }: ListItemProps) => {
  return <li className={clsx("sds-list__item", className)}>{children}</li>;
};

export default ListItem;
