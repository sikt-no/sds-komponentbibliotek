import { FormField } from "@sikt/sds-form";
import { ExpandShowAltIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { ReactNode, useId } from "react";
import {
  ComboBox as AriaCombobox,
  ComboBoxProps as AriaComboboxProps,
  Button,
  Header,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxSection,
  Popover,
  PopoverProps,
} from "react-aria-components";
import "./combobox.pcss";

interface ComboboxBaseProps<T extends object>
  extends Omit<
    AriaComboboxProps<T>,
    "children" | "menuTrigger" | "aria-label" | "aria-labelledby"
  > {
  children: React.ReactNode | ((item: T) => React.ReactNode);
  className?: string;
  errorText?: string;
  helpText?: string;
  menuTrigger?: "focus" | "manual" | "input";
  popoverProps?: PopoverProps;
}

export type ComboboxProps<T extends object> = ComboboxBaseProps<T> &
  (
    | {
        label: string;
        "aria-labelledby"?: never;
      }
    | {
        label?: never;
        "aria-labelledby": string;
      }
  );

export function Combobox<T extends object>({
  children,
  className,
  errorText,
  helpText,
  label,
  "aria-labelledby": ariaLabelledBy,
  menuTrigger = "focus",
  popoverProps,
  ...props
}: ComboboxProps<T>) {
  const id = useId();
  const errorTextId = `${id}-error-text`;
  const helpTextId = `${id}-help-text`;

  const ariaDescribedBy =
    [errorText && errorTextId, helpText && helpTextId]
      .filter(Boolean)
      .join(" ") || undefined;

  return (
    <FormField
      className={clsx(
        "sds-combobox",
        errorText && "sds-combobox--invalid",
        className,
      )}
      label={label}
      errorText={errorText}
      errorTextId={errorTextId}
      helpText={helpText}
      helpTextId={helpTextId}
      htmlFor={id}
    >
      <AriaCombobox
        menuTrigger={menuTrigger}
        id={id}
        aria-label={label}
        aria-labelledby={ariaLabelledBy}
        {...props}
      >
        <div className="sds-combobox__combobox">
          <Input
            className="sds-combobox__combobox-input"
            aria-describedby={ariaDescribedBy}
            aria-invalid={Boolean(errorText)}
            aria-errormessage={errorText ? errorTextId : undefined}
          />
          <Button className="sds-combobox__combobox-button">
            <ExpandShowAltIcon />
          </Button>
        </div>
        <Popover className="sds-combobox__popover" {...popoverProps}>
          <ListBox className="sds-combobox__listbox">{children}</ListBox>
        </Popover>
      </AriaCombobox>
    </FormField>
  );
}

export function ComboboxItem({
  className,
  ...props
}: ListBoxItemProps & { className?: string }) {
  return (
    <ListBoxItem className={clsx("sds-combobox__item", className)} {...props} />
  );
}

export function ComboboxHeader({ children }: { children: ReactNode }) {
  return <Header className="sds-combobox__header">{children}</Header>;
}

export function ComboboxSection({ children }: { children: ReactNode }) {
  return <ListBoxSection>{children}</ListBoxSection>;
}
