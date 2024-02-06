import { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  variant:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "huge"
    | "paragraph"
    | "overline";
  className?: string;
  children: ReactNode;
  isDynamic?: boolean;
}

interface HeadingLevels {
  level: "1" | "2" | "3" | "4" | "5" | "6";
}

export const Heading = ({
  children,
  level,
  variant,
  className,
  ...rest
}: HeadingProps & HeadingLevels) => {
  const H: ElementType = `h${level}`;

  return (
    <H
      className={clsx(
        "sds-typography-heading",
        `sds-typography-heading--${variant}`,
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
