import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "editorial" | "application";
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

  return (
    <H
      className={clsx(
        `sds-typography-${variant}-headline`,
        `sds-typography-${variant}-headline--${size}`,
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
