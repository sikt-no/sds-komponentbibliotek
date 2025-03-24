import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "huge"
    | "paragraph"
    | "overline"
    | "editorial"
    | "application";
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  className?: string;
  children: ReactNode;
}

interface HeadingLevels {
  level: "1" | "2" | "3" | "4" | "5" | "6";
}

export const Heading = ({
  children,
  level,
  variant = "editorial",
  size = "m",
  className,
  ...rest
}: HeadingProps & HeadingLevels) => {
  const H: ElementType = `h${level}`;
  const isDeprecated = !["editorial", "application"].includes(variant);

  if (isDeprecated) {
    console.warn(
      `Deprecated <Heading /> variant. Please use variant "editorial" (default) or "application".`,
    );
  }

  return (
    <H
      className={clsx(
        isDeprecated && "sds-typography-heading",
        isDeprecated && `sds-typography-heading--${variant}`,
        !isDeprecated && `sds-typography-${variant}-headline`,
        !isDeprecated && `sds-typography-${variant}-headline--${size}`,
        className,
      )}
      {...rest}
    >
      {children}
    </H>
  );
};

export const Heading1 = (props: HeadingProps) =>
  Heading({ ...props, level: "1" });
export const Heading2 = (props: HeadingProps) =>
  Heading({ ...props, level: "2" });
export const Heading3 = (props: HeadingProps) =>
  Heading({ ...props, level: "3" });
export const Heading4 = (props: HeadingProps) =>
  Heading({ ...props, level: "4" });
export const Heading5 = (props: HeadingProps) =>
  Heading({ ...props, level: "5" });
export const Heading6 = (props: HeadingProps) =>
  Heading({ ...props, level: "6" });
