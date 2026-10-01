import type { HTMLAttributes, ReactNode } from "react";
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
    <span data-part="description" {...rest} id={`${id}-description`}>
      {children}
    </span>
  );
};

FieldDescription.displayName = "Field.Description";
