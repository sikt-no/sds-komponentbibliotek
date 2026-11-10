import type { HTMLAttributes, ReactNode } from "react";
import { InlineMessage } from "../../InlineMessage";
import { useFieldContext } from "./FieldContext";

export interface FieldValidationMessageProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "id"
> {
  children: ReactNode;
}

export const FieldValidationMessage = ({
  children,
  ...rest
}: FieldValidationMessageProps) => {
  const { id } = useFieldContext();
  return (
    <InlineMessage
      variant="critical"
      data-part="validation"
      {...rest}
      id={`${id}-validation`}
    >
      {children}
    </InlineMessage>
  );
};

FieldValidationMessage.displayName = "Field.ValidationMessage";
