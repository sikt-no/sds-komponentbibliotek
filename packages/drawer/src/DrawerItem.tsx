import { ReactNode } from "react";
import clsx from "clsx";

export interface DrawerItemProps {
  children: ReactNode;
  className?: string;
}

export const DrawerItem = ({ children, className }: DrawerItemProps) => {
  return <li className={clsx("sds-drawer-item", className)}>{children}</li>;
};
