import type { HTMLAttributes, ReactNode } from "react";
import { InlineMessage } from "../../InlineMessage";
import { useFieldsetContext } from "./FieldsetContext";

export interface FieldsetValidationMessageProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "id" | "role"
> {
  children: ReactNode;
}

export const FieldsetValidationMessage = ({
  children,
  ...rest
}: FieldsetValidationMessageProps) => {
  const { validationId } = useFieldsetContext();
  return (
    <InlineMessage
      variant="critical"
      data-part="validation"
      role="alert"
      {...rest}
      id={validationId}
    >
      {children}
    </InlineMessage>
  );
};

FieldsetValidationMessage.displayName = "Fieldset.ValidationMessage";
