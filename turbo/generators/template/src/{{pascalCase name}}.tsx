import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./{{kebabCase name}}.pcss";

export interface {{pascalCase name}}Props extends HTMLAttributes<HTMLDivElement> {
  /* props goes here */
  className?: string;
}

export const {{pascalCase name}} = ({ className, ...rest }: {{pascalCase name}}Props) => {
  /* logic goes here */
  return (
    <div
      className={clsx("sds-{{kebabCase name}}", className)}
      {...rest}
    />
  );
};

{{pascalCase name}}.displayName = "{{pascalCase name}}";
