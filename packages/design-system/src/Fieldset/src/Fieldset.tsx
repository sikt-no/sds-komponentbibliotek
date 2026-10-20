import { clsx } from "clsx/lite";
import { FieldsetHTMLAttributes, ReactNode, useId } from "react";
import { hasChildOfType } from "../../../utils/has-child-of-type";
import { FieldsetContent } from "./FieldsetContent";
import { FieldsetContext, FieldsetSize } from "./FieldsetContext";
import { FieldsetDescription } from "./FieldsetDescription";
import { FieldsetLegend } from "./FieldsetLegend";
import { FieldsetValidationMessage } from "./FieldsetValidationMessage";
import "./fieldset.css";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  size?: FieldsetSize;
  disabled?: boolean;
  id?: string;
  children: ReactNode;
}

const FieldsetRoot = ({
  size = "medium",
  disabled,
  id,
  className,
  children,
  ...rest
}: FieldsetProps) => {
  const autoId = useId();
  const baseId = id ?? autoId;
  const descriptionId = `${baseId}-description`;
  const validationId = `${baseId}-validation`;

  const hasDescription = hasChildOfType(children, FieldsetDescription);
  const hasValidation = hasChildOfType(children, FieldsetValidationMessage);

  const describedBy = hasDescription ? descriptionId : undefined;
  const errorMessage = hasValidation ? validationId : undefined;

  return (
    <fieldset
      className={clsx("sd3-fieldset", className)}
      data-size={size}
      data-disabled={disabled ? true : undefined}
      aria-invalid={hasValidation ? true : undefined}
      disabled={disabled}
      aria-describedby={describedBy}
      aria-errormessage={errorMessage}
      {...rest}
    >
      <FieldsetContext.Provider
        value={{ id: baseId, size, disabled, descriptionId, validationId }}
      >
        {children}
      </FieldsetContext.Provider>
    </fieldset>
  );
};

FieldsetRoot.displayName = "Fieldset";

export const Fieldset = Object.assign(FieldsetRoot, {
  Legend: FieldsetLegend,
  Description: FieldsetDescription,
  Content: FieldsetContent,
  ValidationMessage: FieldsetValidationMessage,
});
