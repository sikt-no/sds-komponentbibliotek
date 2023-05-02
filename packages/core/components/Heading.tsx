import React, { HTMLAttributes, ReactNode, ElementType } from "react";
import clsx from "clsx";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingType:
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "paragraph"
    | "overline";
  className?: string;
  children: ReactNode;
  isDynamic?: boolean;
}

interface HeadingLevels {
  headingLevel: "1" | "2" | "3" | "4" | "5" | "6";
}

const Heading = ({
  children,
  headingLevel,
  headingType,
  className,
  isDynamic = false,
  ...rest
}: HeadingProps & HeadingLevels) => {
  const H: ElementType = `h${headingLevel}`;

  return (
    <H
      {...rest}
      className={clsx(
        "sds-typography-heading",
        `sds-typography-heading--${headingType}`,
        isDynamic && "sds-typography-heading--dynamic",
        className
      )}
    >
      {children}
    </H>
  );
};

export const Heading1 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "1" });
export const Heading2 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "2" });
export const Heading3 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "3" });
export const Heading4 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "4" });
export const Heading5 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "5" });
export const Heading6 = (props: HeadingProps) =>
  Heading({ ...props, headingLevel: "6" });
