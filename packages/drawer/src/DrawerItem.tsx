import clsx from "clsx";
import { ReactNode } from "react";

export interface DrawerItemProps {
  children: ReactNode;
  className?: string;
}

export const DrawerItem = ({ children, className }: DrawerItemProps) => {
  return <li className={clsx("sds-drawer-item", className)}>{children}</li>;
};
