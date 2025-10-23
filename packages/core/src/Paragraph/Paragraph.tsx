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

export interface LabelProps
  extends Omit<BaseParagraphProps, "variant" | "size"> {
  variant: "label";
  size?: "default" | "l";
}

export interface OverlineProps
  extends Omit<BaseParagraphProps, "variant" | "size"> {
  variant: "overline";
  size?: "default";
}

export interface BodyProps extends Omit<BaseParagraphProps, "variant"> {
  variant?: "body";
  size?: "s" | "default" | "l";
}

export interface DeprecatedParagraphProps
  extends Omit<BaseParagraphProps, "variant" | "size"> {
  variant?: "small" | "regular" | "large" | "lead";
  size?: undefined;
}

export type ParagraphProps =
  | DeprecatedParagraphProps
  | LabelProps
  | OverlineProps
  | BodyProps;

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
  const isDeprecated = !["body", "label", "overline"].includes(variant);

  if (isDeprecated) {
    console.warn(
      `Deprecated <Paragraph /> variant. Please use variant "body", "label" or "overline".`,
    );
  }

  return (
    <Component
      className={clsx(
        isDeprecated && "sds-typography-body",
        isDeprecated && `sds-typography-body--${variant}`,
        !isDeprecated && `sds-typography-${variant}`,
        !isDeprecated &&
          size !== "default" &&
          `sds-typography-${variant}--${size}`,
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
