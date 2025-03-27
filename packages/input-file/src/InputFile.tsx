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
import "./input-file.pcss";

export type FileError = "type" | "size" | "multiple";

export interface FileWithError extends File {
  error?: FileError[];
}

export interface InputFileProps extends DropZoneProps {
  label: NonNullable<ReactNode>;
  "aria-label": NonNullable<string>;
  errorText?: ReactNode;
  helpText?: ReactNode;
  className?: string;
  placeholder?: string;
  placeholderBridge?: string;
  triggerText?: ReactNode;
  onChange?: (newValue: (File | FileWithError)[]) => void;
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
      className,
      placeholder = "Dra og slipp filer her,",
      placeholderBridge = "eller",
      triggerText = "Åpne filutforskeren",
      onChange,
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
    const helpTextId = `${id}-help-text`;
    const [files, setFiles] = useState<(File | FileWithError)[]>(value ?? []);
    const inputId = { id };
    const acceptedFileTypes =
      typeof accept === "string" ? accept.split(",") : accept;

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
      onChange?.([...files, ...output]);
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
      <FormField
        className={clsx(
          "sds-input-file",
          errorText && `sds-input-file--error`,
          className,
        )}
        label={label}
        errorText={errorText}
        helpText={helpText}
        htmlFor={id}
        helpTextId={helpTextId}
      >
        <DropZone
          className={clsx(
            "sds-input-file__drop-zone",
            Boolean(errorText) && "sds-input-file__drop-zone--error",
          )}
          onDrop={handleOnDrop}
          aria-label={ariaLabel}
          aria-describedby={(errorText ?? helpText) ? helpTextId : undefined}
          aria-invalid={Boolean(errorText)}
          aria-errormessage={errorText ? helpTextId : undefined}
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
    );
  },
);

InputFile.displayName = "InputFile";
