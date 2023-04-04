import React, { HTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

export interface ListItemProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

export const ListItem = ({ children, className }: ListItemProps) => {
  return <li className={clsx("sds-list__item", className)}>{children}</li>;
};
