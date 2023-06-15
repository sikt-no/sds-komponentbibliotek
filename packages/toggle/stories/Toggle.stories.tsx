import React, { useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToggleInput, ToggleInputProps } from "../index";

const meta: Meta = {
  title: "Components/Toggle",
  component: ToggleInput,
};

export default meta;

type Story = StoryObj<ToggleInputProps>;

const Template: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      args.onChange && args.onChange(event);
    };

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <ToggleInput {...args} onChange={handleChange} checked={isChecked} />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: "Label",
    checked: true,
  },
};

export const WithoutIcon: Story = {
  ...Template,
  args: {
    ...Default.args,
    showIcons: false,
  },
};

export const WithLabelFirst: Story = {
  ...Template,
  args: {
    ...Default.args,
    labelFirst: true,
  },
};

export const WithError: Story = {
  ...Template,
  args: { ...Default.args, errorText: "Error" },
};
