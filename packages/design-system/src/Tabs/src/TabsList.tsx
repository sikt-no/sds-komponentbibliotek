import type { HTMLAttributes, ReactNode } from "react";
import type { AriaLabelOrAriaLabelledby } from "../../../types";

export type TabsListProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "aria-label" | "aria-labelledby"
> & {
  children: ReactNode;
} & AriaLabelOrAriaLabelledby;

export const TabsList = ({ children, ...rest }: TabsListProps) => (
  <div role="tablist" data-part="list" {...rest}>
    {children}
  </div>
);
TabsList.displayName = "Tabs.List";
