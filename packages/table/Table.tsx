import React, { TableHTMLAttributes, ReactNode, HTMLAttributes } from "react";
import clsx from "clsx";
import { ScreenReaderOnly } from "@sikt/sds-core";
import "./table.pcss";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  className?: string;
  tableType?: "full" | "inline";
  hideCaption?: boolean;
  caption: ReactNode;
  footerText?: ReactNode;
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export const Table = ({
  className,
  tableType = "full",
  hideCaption,
  caption,
  children,
  footerText,
  wrapperProps,
  ...rest
}: TableProps) => {
  return (
    <div
      className={clsx("sds-table", `sds-table--${tableType}`, className)}
      {...wrapperProps}
    >
      <table className="sds-table__table" {...rest}>
        {hideCaption ? (
          <ScreenReaderOnly>{caption}</ScreenReaderOnly>
        ) : (
          <caption className="sds-table__caption sds-typography-heading--paragraph">
            {caption}
          </caption>
        )}

        {children}
      </table>
      {footerText && (
        <div className="sds-table__footer-text sds-typography-body--small">
          {footerText}
        </div>
      )}
    </div>
  );
};

export type InlineTableProps = Omit<TableProps, "tableType">;

export const InlineTable = (props: InlineTableProps) => (
  <Table tableType="inline" hideCaption {...props} />
);
