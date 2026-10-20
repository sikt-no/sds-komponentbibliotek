import type { HTMLAttributes, ReactNode } from "react";

export type FieldsetContentDirection = "vertical" | "horizontal";

export interface FieldsetContentProps extends HTMLAttributes<HTMLDivElement> {
  direction?: FieldsetContentDirection;
  children: ReactNode;
}

export const FieldsetContent = ({
  direction = "vertical",
  children,
  ...rest
}: FieldsetContentProps) => (
  <div data-part="content" data-direction={direction} {...rest}>
    {children}
  </div>
);

FieldsetContent.displayName = "Fieldset.Content";
