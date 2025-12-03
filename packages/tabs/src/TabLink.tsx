import { Slot, Slottable } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { AnchorHTMLAttributes, ReactNode, forwardRef } from "react";
import "./tab-link.pcss";

export interface TabLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  isSelected?: boolean;
  asChild?: boolean;
}

export const TabLink = forwardRef<HTMLAnchorElement, TabLinkProps>(
  (
    {
      children,
      className,
      icon,
      badge,
      href,
      isSelected,
      asChild = false,
      ...rest
    }: TabLinkProps,
    ref,
  ) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        className={clsx(
          "sds-tabs__tab",
          "sds-tab-link",
          isSelected && "sds-tab-link--selected",
          className,
        )}
        href={href}
        ref={ref}
        {...rest}
      >
        {icon && <div className="sds-tabs__tab-icon">{icon}</div>}
        <Slottable>{children}</Slottable>
        {badge && <div className="sds-tabs__tab-badge">{badge}</div>}
      </Comp>
    );
  },
);

TabLink.displayName = "TabLink";
