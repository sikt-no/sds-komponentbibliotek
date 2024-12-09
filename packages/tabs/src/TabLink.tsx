import { type BadgeProps } from "@sikt/sds-badge";
import { clsx } from "clsx/lite";
import {
  AnchorHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
  isValidElement,
  PropsWithChildren,
} from "react";
import "./tab-link.pcss";

export interface TabLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  isSelected?: boolean;
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
      ...rest
    }: TabLinkProps,
    ref,
  ) => {
    return (
      <a
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
        {children}
        {badge && (
          <div className="sds-tabs__tab-badge">
            {isSelected
              ? isValidElement(badge) &&
                cloneElement(
                  badge as ReactElement<PropsWithChildren<BadgeProps>>,
                  { visibility: "strong" },
                )
              : badge}
          </div>
        )}
      </a>
    );
  },
);

TabLink.displayName = "TabLink";
