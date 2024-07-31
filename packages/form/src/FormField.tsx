import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";
import { HelpText } from "./HelpText";
import { Label } from "./Label";
import "./form-field.pcss";

export interface FormFieldProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> {
  className?: string;
  label: ReactNode;
  errorText?: ReactNode;
  helpText?: ReactNode;
  /**
   * ID of the form element inside children.
   */
  htmlFor: string;
  /**
   * ID for help text and error text element, needs to be set if either of those is.
   */
  helpTextId?: string;
}

export const FormField = ({
  className,
  label,
  errorText,
  helpText,
  htmlFor,
  helpTextId,
  children,
  ...rest
}: FormFieldProps) => {
  return (
    <div
      className={clsx(
        "sds-form-field",
        errorText && "sds-form-field--error",
        className,
      )}
    >
      <Label
        text={label}
        error={Boolean(errorText)}
        htmlFor={htmlFor}
        {...rest}
      >
        {children}
      </Label>
      {(errorText ?? helpText) && (
        <HelpText id={helpTextId} error={Boolean(errorText)}>
          {errorText ?? helpText}
        </HelpText>
      )}
    </div>
  );
};
