import { ConfirmIcon, SubtractIcon } from "@sikt/sds-icons";
import { type InputHTMLAttributes, useEffect, useRef } from "react";

export interface CheckboxControlProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  indeterminate?: boolean;
}

export const CheckboxControl = ({
  indeterminate,
  ...rest
}: CheckboxControlProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    /* istanbul ignore else */
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

  return (
    <span data-part="indicator">
      <input {...rest} ref={inputRef} type="checkbox" data-part="control" />
      <span data-part="mark" data-mark="check">
        <ConfirmIcon />
      </span>
      <span data-part="mark" data-mark="minus">
        <SubtractIcon />
      </span>
    </span>
  );
};
