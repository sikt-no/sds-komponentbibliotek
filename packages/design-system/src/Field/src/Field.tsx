import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode, useContext, useId } from "react";
import type { Size } from "../../../types";
import { hasChildOfType } from "../../../utils/has-child-of-type";
import { FieldsetContext } from "../../Fieldset/src/FieldsetContext";
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

const FieldRoot = ({
  size = "medium",
  disabled,
  readOnly,
  id,
  className,
  children,
  ...rest
}: FieldProps) => {
  const fieldset = useContext(FieldsetContext);
  const effectiveDisabled = disabled ?? fieldset?.disabled;

  const autoId = useId();
  const inputId = id ?? autoId;

  const hasDescription = hasChildOfType(children, FieldDescription);
  const hasValidation = hasChildOfType(children, FieldValidationMessage);

  const describedBy =
    [
      hasDescription ? `${inputId}-description` : null,
      hasValidation ? `${inputId}-validation` : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <div
      className={clsx("sd3-field", className)}
      data-size={size}
      data-disabled={effectiveDisabled ? true : undefined}
      data-readonly={readOnly ? true : undefined}
      data-invalid={hasValidation ? true : undefined}
      {...rest}
    >
      <FieldContext.Provider
        value={{
          id: inputId,
          "aria-describedby": describedBy,
          "aria-errormessage": hasValidation
            ? `${inputId}-validation`
            : undefined,
          "aria-invalid": hasValidation ? true : undefined,
          disabled: effectiveDisabled,
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
