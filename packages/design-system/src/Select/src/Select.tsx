import { ExpandShowIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { useContext, type SelectHTMLAttributes } from "react";
import type { Size } from "../../../types";
import { FieldContext } from "../../Field/src/FieldContext";
import "./select.css";

export interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "size"
> {
  size?: Size;
}

const caret = (
  <span data-part="caret">
    <ExpandShowIcon />
  </span>
);

export const Select = ({ size, className, children, ...rest }: SelectProps) => {
  const field = useContext(FieldContext);
  const { size: fieldSize, readOnly, ...fieldAttrs } = field ?? {};

  return (
    <span
      className={clsx("sd3-select", className)}
      data-size={size ?? fieldSize ?? "medium"}
    >
      <select
        {...fieldAttrs}
        aria-readonly={readOnly ? true : undefined}
        {...rest}
        data-part="control"
      >
        {children}
      </select>
      {caret}
    </span>
  );
};

Select.displayName = "Select";
