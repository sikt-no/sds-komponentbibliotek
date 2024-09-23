import { FormField } from "@sikt/sds-form";
import { CaretCircleDownIcon } from "@sikt/sds-icons";
import { clsx } from "clsx/lite";
import { ReactNode, useId, useState } from "react";
import {
  ComboBox as AriaCombobox,
  ComboBoxProps as AriaComboboxProps,
  Button,
  Header,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
  Section,
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
  ...props
}: ComboboxProps<T>) {
  const id = useId();
  const helpTextId = `${id}-help-text`;
  const [open, setOpen] = useState(false);

  function onOpenChangeHandler(isOpen: boolean) {
    setOpen(isOpen);
  }

  return (
    <FormField
      className={clsx(
        "sds-combobox",
        errorText && "sds-combobox--invalid",
        className,
      )}
      label={label}
      errorText={errorText}
      helpText={open ? "" : helpText}
      htmlFor={id}
      helpTextId={helpTextId}
    >
      <AriaCombobox
        menuTrigger={menuTrigger}
        onOpenChange={onOpenChangeHandler}
        id={id}
        aria-label={label}
        aria-labelledby={ariaLabelledBy}
        {...props}
      >
        <div className="sds-combobox__combobox">
          <Input className="sds-combobox__combobox-input" />
          <Button className="sds-combobox__combobox-button">
            <CaretCircleDownIcon />
          </Button>
        </div>
        <Popover className="sds-combobox__popover">
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
  return <Section>{children}</Section>;
}
