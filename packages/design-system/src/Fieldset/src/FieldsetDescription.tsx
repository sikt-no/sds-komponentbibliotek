import type { HTMLAttributes, ReactNode } from "react";
import { useFieldsetContext } from "./FieldsetContext";

export interface FieldsetDescriptionProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
  "id"
> {
  children: ReactNode;
}

export const FieldsetDescription = ({
  children,
  ...rest
}: FieldsetDescriptionProps) => {
  const { descriptionId } = useFieldsetContext();
  return (
    <span data-part="description" {...rest} id={descriptionId}>
      {children}
    </span>
  );
};

FieldsetDescription.displayName = "Fieldset.Description";
