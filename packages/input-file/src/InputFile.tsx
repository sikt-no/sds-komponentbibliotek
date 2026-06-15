import { DropEvent } from "@react-types/shared";
import { Paragraph } from "@sikt/sds-core";
import { FormField } from "@sikt/sds-form";
import { UploadIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { forwardRef, ReactNode, useEffect, useId, useState } from "react";
import {
  Button,
  DropZone,
  DropZoneProps,
  FileDropItem,
  FileTrigger,
} from "react-aria-components";
import "./input-file.css";

export type FileError = "type" | "size" | "multiple";

export interface FileWithError extends File {
  error?: FileError[];
}

export interface InputFileProps extends DropZoneProps {
  label: NonNullable<ReactNode>;
  "aria-label": NonNullable<string>;
  /**
   * Text to show when the input is invalid to help the user enter correct value. This also sets `aria-invalid` &  `aria-errormessage`.
   */
  errorText?: ReactNode;
  /**
   * Text to show to help the user enter correct value. It's a better pattern to have enough information in the `label`.
   */
  helpText?: ReactNode;
  children?: ReactNode;
  className?: string;
  placeholder?: string;
  placeholderBridge?: string;
  triggerText?: ReactNode;
  onValueChange?: (newValue: (File | FileWithError)[]) => void;
  accept: string | string[];
  multiple?: boolean;
  capture?: "user" | "environment";
  value?: File[];
  maxFileSize?: number;
}

// INFO: https://github.com/adobe/react-spectrum/issues/5394

export const InputFile = forwardRef<HTMLDivElement, InputFileProps>(
  (
    {
      label,
      "aria-label": ariaLabel,
      errorText,
      helpText,
      children,
      className,
      placeholder = "Dra og slipp filer her,",
      placeholderBridge = "eller",
      triggerText = "Åpne filutforskeren",
      onValueChange,
      accept,
      multiple = false,
      capture,
      value,
      maxFileSize,
      ...rest
    },
    ref,
  ) => {
    const id = useId();
    const errorTextId = `${id}-error-text`;
    const helpTextId = `${id}-help-text`;
    const [files, setFiles] = useState(value ?? []);
    const inputId = { id };
    const acceptedFileTypes =
      typeof accept === "string" ? accept.split(",") : accept;
    const minFileSize = 0;

    const ariaDescribedBy =
      [errorText && errorTextId, helpText && helpTextId]
        .filter(Boolean)
        .join(" ") || undefined;

    useEffect(() => {
      if (value) {
        setFiles(value);
      }
    }, [value]);

    const validateFiles = (input: File[]) => {
      return input.map((file, index) => {
        const output: File | FileWithError = file;
        const errors: FileError[] = [];

        // DropZone getDropOperation={(types) => types.has('image/png') ? 'copy' : 'cancel'} doesn't handle this
        if (
          !acceptedFileTypes.some((accept) =>
            file.type.match(accept.replaceAll("*", ".*")),
          )
        ) {
          errors.push("type");
        }

        if (maxFileSize && maxFileSize < file.size) {
          errors.push("size");
        }

        if (minFileSize >= file.size) {
          errors.push("size");
        }

        // TODO: should this be accepted when file1 fails validation?
        if (!multiple && index > 0) {
          errors.push("multiple");
        }

        if (errors.length > 0) {
          (output as FileWithError).error = errors;
        }

        return output;
      });
    };

    const handleOnChange = (input: File[]) => {
      const output = validateFiles(input);
      setFiles([...files, ...output]);
      onValueChange?.([...files, ...output]);
    };

    const handleOnDrop = (e: DropEvent) => {
      const handler = async () => {
        const filtered = e.items.filter((item) => item.kind === "file");
        return await Promise.all(
          filtered.map((item: FileDropItem) => item.getFile()),
        );
      };

      handler()
        .then(handleOnChange)
        .catch((err: unknown) => {
          console.error(err);
          throw err;
        });
    };

    const handleOnSelect = (e: FileList | null) => {
      if (!e) return;
      const input = Array.from(e);
      handleOnChange(input);
    };

    return (
      <div className="sds-input-file-wrapper">
        <FormField
          className={clsx(
            "sds-input-file",
            errorText && `sds-input-file--error`,
            className,
          )}
          label={label}
          errorText={errorText}
          errorTextId={errorTextId}
          helpText={helpText}
          helpTextId={helpTextId}
          htmlFor={id}
        >
          <DropZone
            className={clsx(
              "sds-input-file__drop-zone",
              Boolean(errorText) && "sds-input-file__drop-zone--error",
            )}
            onDrop={handleOnDrop}
            aria-label={ariaLabel}
            aria-describedby={ariaDescribedBy}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText ? errorTextId : undefined}
            ref={ref}
            {...rest}
          >
            <div className="sds-input-file__drop-zone-icon">
              <UploadIcon />
            </div>
            <Paragraph className="sds-input-file__placeholder">
              {placeholder}
              {placeholderBridge && (
                <>
                  <br />
                  {placeholderBridge}
                </>
              )}
            </Paragraph>
            <FileTrigger
              {...inputId}
              onSelect={handleOnSelect}
              acceptedFileTypes={acceptedFileTypes}
              allowsMultiple={multiple}
              defaultCamera={capture}
            >
              <Button
                className={clsx(
                  "sds-button",
                  `sds-button--${errorText ? "critical" : "subtle"}`,
                )}
              >
                <span className="sds-button__label">{triggerText}</span>
              </Button>
            </FileTrigger>
          </DropZone>
        </FormField>
        {children}
      </div>
    );
  },
);

InputFile.displayName = "InputFile";
