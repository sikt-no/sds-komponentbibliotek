import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./span.css";

interface SpanBaseProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Use to change element type into alternative React component.
   *
   * For example `<Component asChild><h2>` would result in a `<h2>` with all properties of this component.
   *
   * @default false
   */
  asChild?: boolean;
  className?: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  variant: "helper" | "overline" | "interaction";
}

interface HelperProps extends Omit<SpanBaseProps, "variant"> {
  size?: never;
  variant: "helper";
}

interface OverlineProps extends Omit<SpanBaseProps, "variant"> {
  size?: never;
  variant: "overline";
}

interface InteractionProps extends Omit<SpanBaseProps, "size" | "variant"> {
  size: "sm" | "md" | "lg";
  variant: "interaction";
}

export type SpanProps = HelperProps | OverlineProps | InteractionProps;

export const Span = ({
  asChild = false,
  className,
  size,
  variant,
  ...rest
}: SpanProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx("sd3-typography", className)}
      data-variant={variant}
      data-size={size}
      {...rest}
    />
  );
};

Span.displayName = "Span";
