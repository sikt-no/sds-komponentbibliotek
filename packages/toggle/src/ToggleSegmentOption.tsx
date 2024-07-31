import "./toggle-segment.pcss";
import { useFieldset } from "@sikt/sds-form";
import { clsx } from "clsx/lite";
import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
  useId,
} from "react";

export interface ToggleSegmentOptionProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string | number;
  label: ReactNode;
  checked?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ToggleSegmentOption = forwardRef<
  HTMLInputElement,
  ToggleSegmentOptionProps
>(({ value, label, checked, onChange, className, ...rest }, ref) => {
  const { name } = useFieldset() ?? {};
  const generatedId = useId();
  const htmlForId = rest.id ?? generatedId;

  return (
    <div
      className={clsx(
        "sds-toggle-segment__option",
        checked && "sds-toggle-segment__option--checked",
        className,
      )}
    >
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
      <label className="sds-toggle-segment__label" htmlFor={htmlForId}>
        {label}
      </label>
    </div>
  );
});
ToggleSegmentOption.displayName = "ToggleSegmentOption";

export default ToggleSegmentOption;
