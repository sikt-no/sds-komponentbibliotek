import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode, forwardRef, useId, useMemo } from "react";
import { FieldsetContext } from "./FieldsetContext";
import "./fieldset.pcss";
import { HelpText } from "./HelpText";

interface FieldsetBaseProps extends Omit<
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
        /**
         * Id (or id's) that identifies the element (or elements) that labels the element it is applied to. For accessibility these should NOT be visually hidden.
         */
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
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;

    const context = useMemo(
      () => ({ name: name ?? id, error: Boolean(errorText) }),
      [name, id, errorText],
    );

    const ariaDescribedBy =
      [errorText && errorTextId, helpText && helpTextId]
        .filter(Boolean)
        .join(" ") || undefined;

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
          aria-describedby={ariaDescribedBy}
          aria-invalid={Boolean(errorText)}
          aria-errormessage={errorText ? errorTextId : undefined}
          {...rest}
        >
          {legend !== undefined && (
            <legend className="sds-form-fieldset__legend">{legend}</legend>
          )}
          {children}
          {helpText && <HelpText id={helpTextId}>{helpText}</HelpText>}
          {errorText && (
            <HelpText id={errorTextId} error>
              {errorText}
            </HelpText>
          )}
        </fieldset>
      </FieldsetContext.Provider>
    );
  },
);
Fieldset.displayName = "Fieldset";
