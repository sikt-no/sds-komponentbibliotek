import { clsx } from "clsx/lite";
import { useContext, type FormHTMLAttributes } from "react";
import type { Size } from "../../../types";
import { FieldContext } from "../../Field/src/FieldContext";
import "./searchField.css";

export interface SearchFieldProps extends Omit<
  FormHTMLAttributes<HTMLFormElement>,
  "role"
> {
  /** Falls back to the enclosing `Field`'s size, then `"medium"`. */
  size?: Size;
  /** Labels the `<search>` landmark. */
  "aria-label"?: string;
  /** Labels the `<search>` landmark. */
  "aria-labelledby"?: string;
}

const SearchFieldRoot = ({
  size,
  className,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ...formProps
}: SearchFieldProps) => {
  const field = useContext(FieldContext);
  return (
    <search
      className="sd3-search-field-landmark"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
    >
      <form
        {...formProps}
        className={clsx("sd3-search-field", className)}
        data-size={size ?? field?.size ?? "medium"}
      >
        {children}
      </form>
    </search>
  );
};
SearchFieldRoot.displayName = "SearchField";

const SearchFieldDivider = () => (
  <span data-part="divider" aria-hidden="true" />
);
SearchFieldDivider.displayName = "SearchField.Divider";

export const SearchField = Object.assign(SearchFieldRoot, {
  Divider: SearchFieldDivider,
});
