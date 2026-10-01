import { LockedIcon } from "@sikt/sds-icons";
import type { LabelHTMLAttributes, ReactNode } from "react";
import { useFieldContext } from "./FieldContext";

export interface FieldLabelProps extends Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  "htmlFor"
> {
  children: ReactNode;
}

const lockedIcon = <LockedIcon data-part="icon" />;

export const FieldLabel = ({ children, ...rest }: FieldLabelProps) => {
  const { id, readOnly } = useFieldContext();

  return (
    <label data-part="label" {...rest} htmlFor={id}>
      {readOnly ? lockedIcon : null}
      {children}
    </label>
  );
};

FieldLabel.displayName = "Field.Label";
