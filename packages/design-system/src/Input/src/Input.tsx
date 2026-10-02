import { clsx } from "clsx/lite";
import { useContext, type InputHTMLAttributes } from "react";
import type { Size } from "../../../types";
import { FieldContext } from "../../Field/src/FieldContext";
import "./input.css";

export type InputType =
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "month"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type" | "size"
> {
  type?: InputType;
  size?: Size;
}

export const Input = ({
  type = "text",
  size,
  className,
  ...rest
}: InputProps) => {
  const field = useContext(FieldContext);
  const { size: fieldSize, ...fieldAttrs } = field ?? {};
  return (
    <input
      {...fieldAttrs}
      type={type}
      data-size={size ?? fieldSize ?? "medium"}
      {...rest}
      className={clsx("sd3-input", className)}
    />
  );
};
Input.displayName = "Input";
