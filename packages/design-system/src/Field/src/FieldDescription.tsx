import type { HTMLAttributes, ReactNode } from "react";
import { Span } from "../../Typography";
import { useFieldContext } from "./FieldContext";

export interface FieldDescriptionProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "id"
> {
  children: ReactNode;
}

export const FieldDescription = ({
  children,
  ...rest
}: FieldDescriptionProps) => {
  const { id } = useFieldContext();
  return (
    <Span
      variant="helper"
      data-part="description"
      {...rest}
      id={`${id}-description`}
    >
      {children}
    </Span>
  );
};

FieldDescription.displayName = "Field.Description";
