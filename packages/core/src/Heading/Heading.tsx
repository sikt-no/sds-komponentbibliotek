import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Represents two sets of heading styles. These should in most cases be used separately.
   * - Editorial is for applications with low complexity and enough space - that strive for a calm user interface.
   * - Application is for more compact, information dense and complex applications.
   *
   * @default "editorial"
   */
  variant?: "editorial" | "application";
  /**
   * Visual size of the heading.
   *
   * @default "m"
   */
  size?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";
  className?: string;
  children: ReactNode;
}

interface HeadingLevels {
  /**
   * Represent six levels of section headings. `<h1>` is the highest section level and `<h6> is the lowest.
   * A common navigation technique for users of screen reading software is to quickly jump from heading to heading in order to determine the content of the page. Because of this, it is important to not skip one or more heading levels.
   */
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
Heading.displayName = "Heading";

export const Heading1 = (props: HeadingProps) =>
  Heading({ ...props, level: "1" });
Heading1.displayName = "Heading1";
export const Heading2 = (props: HeadingProps) =>
  Heading({ ...props, level: "2" });
Heading2.displayName = "Heading2";
export const Heading3 = (props: HeadingProps) =>
  Heading({ ...props, level: "3" });
Heading3.displayName = "Heading3";
export const Heading4 = (props: HeadingProps) =>
  Heading({ ...props, level: "4" });
Heading4.displayName = "Heading4";
export const Heading5 = (props: HeadingProps) =>
  Heading({ ...props, level: "5" });
Heading5.displayName = "Heading5";
export const Heading6 = (props: HeadingProps) =>
  Heading({ ...props, level: "6" });
Heading6.displayName = "Heading6";
