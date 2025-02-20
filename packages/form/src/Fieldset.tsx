import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode, forwardRef, useId, useMemo } from "react";
import { FieldsetContext } from "./FieldsetContext";
import "./fieldset.pcss";

interface FieldsetBaseProps
  extends Omit<
    HTMLAttributes<HTMLFieldSetElement>,
    "aria-label" | "aria-labelledby"
  > {
  className?: string;
  name?: string;
  errorText?: ReactNode;
  helpText?: ReactNode;
  children: ReactNode;
}

export type FieldsetProps = FieldsetBaseProps &
  (
    | {
        legend: NonNullable<ReactNode>;
        "aria-labelledby"?: never;
      }
    | {
        legend?: never;
        "aria-labelledby": string;
      }
  );

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (
    {
      className,
      legend,
      "aria-labelledby": ariaLabelledby,
      name,
      errorText,
      helpText,
      children,
      ...rest
    },
    ref,
  ) => {
    const id = useId();

    const context = useMemo(
      () => ({ name: name ?? id, error: Boolean(errorText) }),
      [name, id, errorText],
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
          aria-labelledby={ariaLabelledby}
          aria-describedby={
            (errorText ?? helpText) ? `${id}-help-text` : undefined
          }
          aria-invalid={Boolean(errorText)}
          aria-errormessage={errorText ? `${id}-help-text` : undefined}
          {...rest}
        >
          {legend !== undefined && (
            <legend className="sds-form-fieldset__legend">{legend}</legend>
          )}
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
