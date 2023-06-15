import React, { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  CheckboxFieldset,
  CheckboxInput,
  CheckboxInputProps,
  CheckboxFieldsetProps,
} from "../index";

const meta: Meta = {
  title: "Components/Checkbox/CheckboxFieldset",
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<CheckboxFieldsetProps & CheckboxInputProps>;

const Template: Story = {
  argTypes: {
    label: { control: "text", defaultValue: "Checkbox label" },
    isChecked: { control: "boolean", defaultValue: true },
    disabled: { control: "boolean", defaultValue: false },
    onChange: { action: "changed" },
    legend: { control: "text", defaultValue: "Checkbox group label" },
    errorText: { control: "text", defaultValue: undefined },
    helpText: { control: "text", defaultValue: "Helper text" },
  },
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.isChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
      args.onChange && args.onChange(event);
    };

    useEffect(() => {
      setIsChecked(args.isChecked);
    }, [args.isChecked]);

    return (
      <CheckboxFieldset {...args}>
        <CheckboxInput
          {...args}
          isChecked={isChecked}
          onChange={handleChange}
        />
      </CheckboxFieldset>
    );
  },
};

export const WithLegend = {
  ...Template,
  args: {
    error: false,
    legend: "Legend with error icon",
    errorText: undefined,
    helpText: undefined,
  },
};

export const WithHelpText = {
  ...Template,
  args: {
    error: false,
    legend: "Legend",
    errorText: undefined,
    helpText: "Help text",
  },
};

export const WithError = {
  ...Template,
  args: {
    error: true,
    legend: "Legend with error icon",
    errorText: "Error text",
  },
};
