import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface AbbreviationProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  title: string;
}

/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
export const Abbreviation = ({
  children,
  className,
  title,
  ...rest
}: AbbreviationProps) => {
  return (
    <abbr
      className={clsx("sds-typography-abbr", className)}
      tabIndex={0}
      data-title={title}
      aria-label={title}
      {...rest}
    >
      {children}
    </abbr>
  );
};
/* eslint-enable jsx-a11y/no-noninteractive-tabindex */
