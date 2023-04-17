import React, {
  ChangeEvent,
  HTMLAttributes,
  ReactNode,
  useId,
  useMemo,
} from "react";
import clsx from "clsx";
import "./radio-fieldset.pcss";
import { WarningIcon } from "@sikt/sds-icons";
import { RadioFieldsetContext } from "./RadioFieldsetContext";

export interface RadioFieldsetProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, "onChange"> {
  className?: string;
  legend: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  errorText?: string;
  helpText?: string;
  children: ReactNode;
}

export const RadioFieldset = ({
  className,
  legend,
  name,
  onChange,
  value,
  errorText,
  helpText,
  children,
  ...rest
}: RadioFieldsetProps) => {
  const id = useId();

  const context = useMemo(
    () => ({ name: name ?? id, onChange, value, error: Boolean(errorText) }),
    [name, onChange, value]
  );

  return (
    <RadioFieldsetContext.Provider value={context}>
      <fieldset
        className={clsx(
          "sds-radio-fieldset",
          errorText && `sds-radio-fieldset--error`,
          className
        )}
        aria-describedby={`${id}-help-text`}
        aria-invalid={Boolean(errorText)}
        aria-errormessage={errorText ? `${id}-help-text` : undefined}
        {...rest}
      >
        <legend className="sds-radio-fieldset__legend">
          {errorText && (
            <WarningIcon className="sds-radio-fieldset__legend-error-icon" />
          )}{" "}
          {legend}
        </legend>
        {children}
        {(errorText ?? helpText) && (
          <div className="sds-radio-fieldset__help-text" id={`${id}-help-text`}>
            {errorText ?? helpText}
          </div>
        )}
      </fieldset>
    </RadioFieldsetContext.Provider>
  );
};
