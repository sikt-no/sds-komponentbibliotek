import React, { HTMLAttributes, useId, ReactNode, forwardRef } from "react";
import { WarningIcon } from "@sikt/sds-icons";
import clsx from "clsx";
import "./checkbox-fieldset.pcss";

export interface CheckboxFieldsetProps
  extends HTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  legend: string;
  name?: string;
  errorText?: string;
  helpText?: string;
  children: ReactNode;
  error?: boolean;
}

export const CheckboxFieldset = forwardRef<
  HTMLFieldSetElement,
  CheckboxFieldsetProps
>(
  (
    { className, legend, errorText, helpText, children, error, ...rest },
    ref
  ) => {
    const id = useId();
    return (
      <fieldset
        ref={ref}
        className={clsx("sds-checkbox-fieldset", className)}
        aria-describedby={`${id}-help-text`}
        aria-invalid={Boolean(errorText)}
        aria-errormessage={errorText ? `${id}-help-text` : undefined}
        {...rest}
      >
        <legend
          className={clsx(
            "sds-checkbox-fieldset__legend",
            error && "sds-checkbox-fieldset--error"
          )}
        >
          {errorText && (
            <WarningIcon className="sds-checkbox-fieldset__legend-icon" />
          )}

          {legend}
        </legend>
        <div className="sds-checkbox-fieldset__children">{children}</div>
        {(errorText || helpText) && (
          <div
            className={clsx(
              "sds-checkbox-fieldset__help-text",
              errorText && "sds-checkbox-fieldset--error"
            )}
            id={`${id}-help-text`}
          >
            {errorText || helpText}
          </div>
        )}
      </fieldset>
    );
  }
);
CheckboxFieldset.displayName = "CheckboxFieldset";
