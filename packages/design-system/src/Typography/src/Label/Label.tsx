import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./label.css";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * Use to change element type into alternative React component.
   *
   * For example `<Component asChild><h2>` would result in a `<h2>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
  className?: string;
  size?: "lg";
}

export const Label = ({
  asChild = false,
  className,
  size,
  ...rest
}: LabelProps) => {
  const Comp = asChild ? Slot : "label";

  return (
    <Comp
      className={clsx("sd3-typography", className)}
      data-variant="label"
      data-size={size}
      {...rest}
    />
  );
};

Label.displayName = "Label";
