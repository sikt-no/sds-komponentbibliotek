import React, { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  typographyType?: "small" | "regular" | "large" | "lead";
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export const Paragraph = ({
  children,
  typographyType = "regular",
  className,
  as = "p",
  ...rest
}: ParagraphProps) => {
  const Component: ElementType = as;

  return (
    <Component
      {...rest}
      className={clsx(
        "sds-typography-body",
        `sds-typography-body--${typographyType}`,
        className
      )}
    >
      {children}
    </Component>
  );
};
