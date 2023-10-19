import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./toggle-segment.pcss";
import clsx from "clsx";
import { useFieldset } from "@sikt/sds-form";

export interface ToggleSegmentOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string | number;
  label: string;
  children?: ReactNode;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSegmentOption = forwardRef<
  HTMLInputElement,
  ToggleSegmentOptionProps
>(({ value, label, checked, onChange, children, ...rest }, ref) => {
  const { name } = useFieldset() ?? {};
  const generatedId = useId();
  const htmlForId = rest.id ?? generatedId;

  return (
    <div className="sds-toggle-segment__option">
      <input
        id={htmlForId}
        name={name}
        ref={ref}
        type="radio"
        onChange={onChange}
        className="sds-toggle-segment__input"
        value={value}
        checked={checked}
        {...rest}
      />
      <label
        className={clsx(
          "sds-toggle-segment__label",
          checked && "sds-toggle-segment__label--checked"
        )}
        htmlFor={htmlForId}
      >
        {label}
        {children}
      </label>
    </div>
  );
});
ToggleSegmentOption.displayName = "ToggleSegmentOption";

export default ToggleSegmentOption;
