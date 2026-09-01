import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { ElementType, HTMLAttributes, ReactNode } from "react";
import "./heading.css";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Use to change element type into alternative React component.
   *
   * For example `<Component asChild><h2>` would result in a `<h2>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  /**
   * Represents two sets of heading styles. These should in most cases be used separately.
   * - Application is for more compact, information dense and complex applications.
   * - Editorial is for applications with low complexity and enough space - that strive for a calm user interface.
   *
   * @default "application"
   */
  variant?: "application" | "editorial";
  /**
   * Visual size of the heading.
   *
   * @default "md"
   */
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

interface HeadingTypes {
  /**
   * Represent six levels of section headings. `<h1>` is the highest section level and `<h6> is the lowest.
   * A common navigation technique for users of screen reading software is to quickly jump from heading to heading in order to determine the content of the page. Because of this, it is important to not skip one or more heading levels.
   */
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({
  asChild = false,
  className,
  children,
  variant = "application",
  size = "md",
  type,
  ...rest
}: HeadingProps & HeadingTypes) => {
  const Comp = asChild ? Slot : (type as ElementType);

  return (
    <Comp
      className={clsx("sd3-typography", className)}
      data-variant={variant}
      data-size={size}
      {...rest}
    >
      {children}
    </Comp>
  );
};

export const Heading1 = (props: HeadingProps) => (
  <Heading {...props} type="h1" />
);
Heading1.displayName = "Heading1";

export const Heading2 = (props: HeadingProps) => (
  <Heading {...props} type="h2" />
);
Heading2.displayName = "Heading2";

export const Heading3 = (props: HeadingProps) => (
  <Heading {...props} type="h3" />
);
Heading3.displayName = "Heading3";

export const Heading4 = (props: HeadingProps) => (
  <Heading {...props} type="h4" />
);
Heading4.displayName = "Heading4";

export const Heading5 = (props: HeadingProps) => (
  <Heading {...props} type="h5" />
);
Heading5.displayName = "Heading5";

export const Heading6 = (props: HeadingProps) => (
  <Heading {...props} type="h6" />
);
Heading6.displayName = "Heading6";
