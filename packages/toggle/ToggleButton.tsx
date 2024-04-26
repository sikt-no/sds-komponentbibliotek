import { ChangeEventHandler, forwardRef, ReactNode, useId } from "react";
import clsx from "clsx";
import { PlusCircleIcon } from "@sikt/sds-icons";
import "./toggle-button.pcss";

export interface ToggleButtonProps {
  checked?: boolean;
  label: ReactNode;
  showIcons?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ checked, label, showIcons = true, onChange, className, ...rest }, ref) => {
    const toggleButtonId = useId();
    return (
      <div className={clsx("sds-toggle-button", className)} {...rest}>
        <input
          ref={ref}
          type="checkbox"
          className="sds-toggle-button__input"
          onChange={onChange}
          readOnly={!onChange}
          checked={checked}
          aria-checked={checked}
          id={toggleButtonId}
        />
        <label
          className={clsx(
            "sds-toggle-button__label",
            checked && "sds-toggle-button__label--checked",
          )}
          htmlFor={toggleButtonId}
        >
          <div className="sds-toggle-button__label-text">{label}</div>
          {showIcons && (
            <PlusCircleIcon
              className={clsx(
                "sds-toggle-button__icon",
                checked && "sds-toggle-button__icon--checked",
              )}
            />
          )}
        </label>
      </div>
    );
  },
);
ToggleButton.displayName = "ToggleButton";
