import React, { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  typographyType?: "small" | "regular" | "large" | "lead";
  modifierType?: "emphasis" | "strong" | "code" | "quote";
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export const Paragraph = ({
  children,
  typographyType = "regular",
  modifierType,
  className,
  as = "p",
  ...rest
}: ParagraphProps) => {
  const Component: ElementType = as;

  return (
    <Component
      className={clsx(
        "sds-typography-body",
        `sds-typography-body--${typographyType}`,
        modifierType && `sds-typography-body--${modifierType}`,
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
