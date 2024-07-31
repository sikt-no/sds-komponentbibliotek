import clsx from "clsx";
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "small" | "regular" | "large" | "lead";
  modifier?: "emphasis" | "strong" | "code" | "quote";
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

export const Paragraph = ({
  children,
  variant = "regular",
  modifier,
  className,
  as = "p",
  ...rest
}: ParagraphProps) => {
  const Component: ElementType = as;

  return (
    <Component
      className={clsx(
        "sds-typography-body",
        `sds-typography-body--${variant}`,
        modifier && `sds-typography-body--${modifier}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
