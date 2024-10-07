import tokens from "@sikt/sds-tokens";
import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "small" | "regular" | "large" | "lead";
  modifier?: "emphasis" | "strong" | "code" | "quote";
  className?: string;
  children: ReactNode;
  as?: ElementType;
  color?: Exclude<keyof typeof tokens.color.text, "on_strong">;
}

export const Paragraph = ({
  children,
  variant = "regular",
  modifier,
  className,
  as = "p",
  color = "primary",
  ...rest
}: ParagraphProps) => {
  const Component: ElementType = as;

  return (
    <Component
      className={clsx(
        "sds-typography-body",
        `sds-typography-body--${variant}`,
        modifier && `sds-typography-body--${modifier}`,
        `sds-typography-paragraph--color-${color}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
