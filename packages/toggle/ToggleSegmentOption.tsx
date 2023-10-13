import React, {
  ChangeEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";
import "./toggle-segment.pcss";
import clsx from "clsx";
import { useFieldset } from "@sikt/sds-form";

export interface ToggleSegmentOptionProps
  extends HTMLAttributes<HTMLDivElement> {
  value: string | number;
  label: string;
  children?: ReactNode;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export const ToggleSegmentOption = forwardRef<
  HTMLInputElement,
  ToggleSegmentOptionProps
>(({ value, inputProps, label, checked, onChange, ...rest }, ref) => {
  const { name } = useFieldset() ?? {};
  const generatedId = useId();
  const { id: inputPropsId, ...propsForInput } = inputProps ?? {};
  const htmlForId = inputPropsId ?? generatedId;

  return (
    <div className="sds-toggle-segment__option" {...rest}>
      <input
        {...propsForInput}
        id={htmlForId}
        name={name}
        ref={ref}
        type="radio"
        onChange={onChange}
        className="sds-toggle-segment__input"
        value={value}
        checked={checked}
      />
      <label
        className={clsx(
          "sds-toggle-segment__label",
          checked && "sds-toggle-segment__label--checked"
        )}
        htmlFor={htmlForId}
      >
        {label}
      </label>
    </div>
  );
});
ToggleSegmentOption.displayName = "ToggleSegmentOption";

export default ToggleSegmentOption;
