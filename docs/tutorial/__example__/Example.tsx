import { HTMLAttributes } from "react";
import clsx from "clsx";
import "./example.pcss";

export interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  /* props goes here */
  className?: string;
}

export const Example = ({ className, ...rest }: ExampleProps) => {
  /* logic goes here */
  return <div className={clsx("sds-example", className)} {...rest}></div>;
};
