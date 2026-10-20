import { FailedFilledIcon } from "@sikt/sds-icons";
import type { HTMLAttributes, ReactNode } from "react";
import { useFieldsetContext } from "./FieldsetContext";

export interface FieldsetValidationMessageProps extends Omit<
  HTMLAttributes<HTMLSpanElement>,
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
    <span data-part="validation" role="alert" {...rest} id={validationId}>
      <FailedFilledIcon data-part="icon" />
      {children}
    </span>
  );
};

FieldsetValidationMessage.displayName = "Fieldset.ValidationMessage";
