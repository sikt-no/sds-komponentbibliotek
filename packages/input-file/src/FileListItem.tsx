import { Button, ButtonProps } from "@sikt/sds-button";
import { HelpText } from "@sikt/sds-form";
import { SpinnerIcon, TrashIcon, XIcon } from "@sikt/sds-icons";
import { clsx } from "clsx";
import { LiHTMLAttributes, ReactNode } from "react";

export type ByteConversion = "binary" | "decimal";

export interface FileListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  errorText?: ReactNode;
  fileSize?: number;
  bytesConversion?: ByteConversion;
  loading?: boolean;
  progressProps?: { label: string; value: number };
  removeActionProps?: Pick<ButtonProps, "onClick" | "type"> & { label: string };
}

const round = (n: number) => Math.round(n * 100) / 100;

const getFileSize = (n: number, conversion: ByteConversion) => {
  const kb = conversion === "binary" ? 1024 : 1000;
  const mb = kb ** 2;

  if (n < kb) {
    return `${n}B`;
  } else if (n >= kb && n < mb) {
    return `${round(n / kb)}KB`;
  } else {
    return `${round(n / mb)}MB`;
  }
};

export const FileListItem = ({
  children,
  className,
  errorText,
  fileSize,
  bytesConversion = "decimal",
  loading = false,
  progressProps,
  removeActionProps,
  ...rest
}: FileListItemProps) => {
  let icon = removeActionProps && <TrashIcon />;
  if (loading) {
    icon = <SpinnerIcon />;
  } else if (errorText) {
    icon = <XIcon />;
  }

  const size = fileSize && getFileSize(fileSize, bytesConversion);

  return (
    <li
      className={clsx(
        "sds-input-file-list__item",
        Boolean(errorText) && "sds-input-file-list__item--error",
        "ssds-typography-body--regular",
        className,
      )}
      {...rest}
    >
      <div className="sds-input-file-list__item-start">
        <div className="sds-input-file-list__item-name sds-typography-body--strong">
          {children}
        </div>
        {size && <div>{size}</div>}
        {errorText && (
          <HelpText error className="sds-input-file-list__item-error">
            {errorText}
          </HelpText>
        )}
      </div>
      <div className="sds-input-file-list__item-end">
        {progressProps && (
          <div
            role="progressbar"
            aria-valuenow={progressProps.value}
            aria-label={progressProps.label}
          >
            {progressProps.value}%
          </div>
        )}
        {!loading && removeActionProps && (
          <Button
            variant="transparent"
            size="small"
            iconVariant="only"
            icon={icon}
            type={removeActionProps.type ?? "button"}
            {...removeActionProps}
          >
            {removeActionProps.label}
          </Button>
        )}
        {loading && (
          <div className="sds-input-file-list__item-icon">
            <SpinnerIcon />
          </div>
        )}
      </div>
    </li>
  );
};
