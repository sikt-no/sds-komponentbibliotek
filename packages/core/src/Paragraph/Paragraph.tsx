import tokens from "@sikt/sds-tokens";
import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";

interface BaseParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "label" | "overline";
  size?: "s" | "default" | "l";
  modifier?: "emphasis" | "strong" | "code" | "quote";
  className?: string;
  children: ReactNode;
  as?: ElementType;
  color?: Exclude<keyof typeof tokens.color.text, "on_strong">;
}

export interface LabelProps extends Omit<
  BaseParagraphProps,
  "variant" | "size"
> {
  variant: "label";
  size?: "default" | "l";
}

export interface OverlineProps extends Omit<
  BaseParagraphProps,
  "variant" | "size"
> {
  variant: "overline";
  size?: "default";
}

export interface BodyProps extends Omit<BaseParagraphProps, "variant"> {
  variant?: "body";
  size?: "s" | "default" | "l";
}

export type ParagraphProps = LabelProps | OverlineProps | BodyProps;

export const Paragraph = ({
  children,
  variant = "body",
  size = "default",
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
        `sds-typography-${variant}`,
        size !== "default" && `sds-typography-${variant}--${size}`,
        modifier && `sds-typography--${modifier}`,
        `sds-typography--color-${color}`,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
Paragraph.displayName = "Paragraph";
