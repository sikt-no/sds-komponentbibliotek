import { clsx } from "clsx/lite";
import { HTMLAttributes } from "react";
import "./{{kebabCase newPackageName}}.pcss";

export interface {{pascalCase newPackageName}}Props extends HTMLAttributes<HTMLDivElement> {
  /* props goes here */
  className?: string;
}

export const {{pascalCase newPackageName}} = ({ className, ...rest }: {{pascalCase newPackageName}}Props) => {
  /* logic goes here */
  return (
    <div
      className={clsx("sds-{{kebabCase newPackageName}}", className)}
      {...rest}
    />
  );
};
