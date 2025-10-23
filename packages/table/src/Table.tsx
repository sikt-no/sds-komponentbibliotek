import { ScreenReaderOnly } from "@sikt/sds-core";
import { clsx } from "clsx/lite";
import { HTMLAttributes, ReactNode, TableHTMLAttributes } from "react";
import "./table.pcss";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  showCaption?: boolean;
  caption: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement> & { "data-testid"?: string };
}

export const Table = ({
  className,
  showCaption,
  caption,
  children,
  wrapperProps,
  ...rest
}: TableProps) => {
  return (
    <div className={clsx("sds-table", className)} {...wrapperProps}>
      <table className="sds-table__table" {...rest}>
        <caption className={clsx(showCaption && "sds-table__caption")}>
          {showCaption ? (
            caption
          ) : (
            <ScreenReaderOnly>{caption}</ScreenReaderOnly>
          )}
        </caption>
        {children}
      </table>
    </div>
  );
};

Table.displayName = "Table";
