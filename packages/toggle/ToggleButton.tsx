import React, { ChangeEventHandler, ReactNode, useId } from "react";
import "./toggle-button.pcss";
import clsx from "clsx";
import { PlusCircleIcon } from "@sikt/sds-icons";

export type ToggleButtonProps = {
  checked?: boolean;
  label: ReactNode;
  showIcons?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const ToggleButton = ({
  checked,
  label,
  showIcons = true,
  onChange,
  ...rest
}: ToggleButtonProps) => {
  const toggleButtonId = useId();
  return (
    <div className="sds-toggle-button" {...rest}>
      <input
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
          checked && "sds-toggle-button__label--checked"
        )}
        htmlFor={toggleButtonId}
      >
        <div className="sds-toggle-button__label-text">{label}</div>
        {showIcons && (
          <PlusCircleIcon
            className={clsx(
              "sds-toggle-button__icon",
              checked && "sds-toggle-button__icon--checked"
            )}
          />
        )}
      </label>
    </div>
  );
};
