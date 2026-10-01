import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode, useId } from "react";
import type { Size } from "../../../types";
import { hasChildOfType } from "../../../utils/has-child-of-type";
import "./field.css";
import { FieldContext } from "./FieldContext";
import { FieldDescription } from "./FieldDescription";
import { FieldLabel } from "./FieldLabel";
import { FieldValidationMessage } from "./FieldValidationMessage";

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  size?: Size;
  disabled?: boolean;
  readOnly?: boolean;
  /** Base id used for the input, description and validation message. Auto-generated when omitted. */
  id?: string;
  children: ReactNode;
}

/** Builds a space-separated `aria-describedby` value from the parts present on the Field, or `undefined` when there are none. */
const getDescribedBy = (
  hasDescription: boolean,
  hasErrorMessage: boolean,
  inputId: string,
): string | undefined => {
  return (
    [
      hasDescription ? `${inputId}-description` : undefined,
      hasErrorMessage ? `${inputId}-validation` : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined
  );
};

const FieldRoot = ({
  size = "medium",
  disabled,
  readOnly,
  id,
  className,
  children,
  ...rest
}: FieldProps) => {
  const autoId = useId();
  const inputId = id ?? autoId;

  const hasDescription = hasChildOfType(children, FieldDescription);
  const hasValidation = hasChildOfType(children, FieldValidationMessage);
  const describedBy = getDescribedBy(hasDescription, hasValidation, inputId);

  return (
    <div
      className={clsx("sd3-field", className)}
      data-size={size}
      data-disabled={disabled ? true : undefined}
      data-readonly={readOnly ? true : undefined}
      data-invalid={hasValidation ? true : undefined}
      {...rest}
    >
      <FieldContext.Provider
        value={{
          id: inputId,
          "aria-describedby": describedBy,
          "aria-invalid": hasValidation ? true : undefined,
          disabled,
          readOnly,
          size,
        }}
      >
        {children}
      </FieldContext.Provider>
    </div>
  );
};

FieldRoot.displayName = "Field";

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Description: FieldDescription,
  ValidationMessage: FieldValidationMessage,
});
