import { HTMLAttributes, ReactNode, forwardRef, useId, useMemo } from "react";
import clsx from "clsx";
import { FieldsetContext } from "./FieldsetContext";
import "./fieldset.pcss";

export interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
  className?: string;
  legend: string;
  name?: string;
  errorText?: string;
  helpText?: string;
  children: ReactNode;
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (
    { className, legend, name, errorText, helpText, children, ...rest },
    ref,
  ) => {
    const id = useId();

    const context = useMemo(
      () => ({ name: name ?? id, error: Boolean(errorText) }),
      [name, errorText],
    );

    return (
      <FieldsetContext.Provider value={context}>
        <fieldset
          ref={ref}
          className={clsx(
            "sds-form-fieldset",
            errorText && "sds-form-fieldset--error",
            className,
          )}
          aria-describedby={`${id}-help-text`}
          aria-invalid={Boolean(errorText)}
          aria-errormessage={errorText ? `${id}-help-text` : undefined}
          {...rest}
        >
          <legend className="sds-form-fieldset__legend">{legend}</legend>
          {children}
          {(errorText ?? helpText) && (
            <div
              className="sds-form-fieldset__help-text"
              id={`${id}-help-text`}
            >
              {errorText ?? helpText}
            </div>
          )}
        </fieldset>
      </FieldsetContext.Provider>
    );
  },
);
Fieldset.displayName = "Fieldset";
