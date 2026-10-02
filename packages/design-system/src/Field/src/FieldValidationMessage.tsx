import { FailedFilledIcon } from "@sikt/sds-icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useFieldContext } from "./FieldContext";

export interface FieldValidationMessageProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
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
    <span data-part="validation" {...rest} id={`${id}-validation`}>
      <FailedFilledIcon data-part="icon" />
      {children}
    </span>
  );
};

FieldValidationMessage.displayName = "Field.ValidationMessage";
