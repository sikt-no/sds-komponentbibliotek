import React, {
  AnchorHTMLAttributes,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import clsx from "clsx";
import "./tab-link.pcss";

export interface TabLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  badge?: ReactNode;
  isSelected?: boolean;
}

export const TabLink = ({
  children,
  className,
  icon,
  badge,
  href,
  isSelected,
  ...rest
}: TabLinkProps) => {
  return (
    <a
      className={clsx(
        "sds-tabs__tab",
        "sds-tab-link",
        isSelected && "sds-tab-link--selected",
        className
      )}
      href={href}
      {...rest}
    >
      {icon && <div className="sds-tabs__tab-icon">{icon}</div>}
      {children}
      {badge && (
        <div className="sds-tabs__tab-badge">
          {isSelected
            ? isValidElement(badge) &&
              cloneElement(badge as ReactElement, { visibility: "high" })
            : badge}
        </div>
      )}
    </a>
  );
};
