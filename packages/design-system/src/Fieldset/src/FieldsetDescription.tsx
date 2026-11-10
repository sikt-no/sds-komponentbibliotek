import type { HTMLAttributes, ReactNode } from "react";
import { Span } from "../../Typography";
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
    <Span variant="helper" data-part="description" {...rest} id={descriptionId}>
      {children}
    </Span>
  );
};

FieldsetDescription.displayName = "Fieldset.Description";
