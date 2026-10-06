import { clsx } from "clsx/lite";
import { useContext, type TextareaHTMLAttributes } from "react";
import { FieldContext } from "../../Field/src/FieldContext";
import "./textarea.css";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...rest }: TextareaProps) => {
  const field = useContext(FieldContext);
  return (
    <textarea
      id={field?.id}
      aria-describedby={field?.["aria-describedby"]}
      aria-errormessage={field?.["aria-errormessage"]}
      aria-invalid={field?.["aria-invalid"]}
      disabled={field?.disabled}
      readOnly={field?.readOnly}
      {...rest}
      className={clsx("sd3-textarea", className)}
    />
  );
};
Textarea.displayName = "Textarea";
