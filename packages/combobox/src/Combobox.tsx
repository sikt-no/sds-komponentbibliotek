import "./combobox.pcss";

import { FormField } from "@sikt/sds-form";
import { CaretCircleDownIcon } from "@sikt/sds-icons";
import clsx from "clsx";
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

export interface ComboboxProps<T extends object>
  extends Omit<AriaComboboxProps<T>, "children" | "menuTrigger"> {
  children: React.ReactNode | ((item: T) => React.ReactNode);
  label: string;
  className?: string;
  errorText?: string;
  helpText?: string;
  menuTrigger?: "focus" | "manual" | "input";
}

export function Combobox<T extends object>({
  children,
  className,
  errorText,
  helpText,
  label,
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
