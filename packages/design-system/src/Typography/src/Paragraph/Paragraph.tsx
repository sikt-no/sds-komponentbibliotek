import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./paragraph.css";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Use to change element type into alternative React component.
   *
   * For example `<Component asChild><h2>` would result in a `<h2>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export const Paragraph = ({
  asChild = false,
  className,
  size = "md",
  ...rest
}: ParagraphProps) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={clsx("sd3-typography", className)}
      data-variant="body"
      data-size={size}
      {...rest}
    />
  );
};

Paragraph.displayName = "Paragraph";
