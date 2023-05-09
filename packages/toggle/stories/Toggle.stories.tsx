import React, { useEffect, useState } from "react";
import { Meta, Story } from "@storybook/react";
import { ToggleInput, ToggleInputProps } from "../index";

export default {
  title: "Components/Toggle",
  component: ToggleInput,
  args: {
    label: "Label",
    checked: true,
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ToggleInputProps> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    args.onChange && args.onChange(event);
  };

  useEffect(() => {
    setIsChecked(args.checked);
  }, [args.checked]);

  return <ToggleInput {...args} onChange={handleChange} checked={isChecked} />;
};

export const Default: Story<ToggleInputProps> = Template.bind({});

export const WithoutIcon: Story<ToggleInputProps> = Template.bind({});
WithoutIcon.args = {
  showIcons: false,
};

export const WithLabelFirst: Story<ToggleInputProps> = Template.bind({});
WithLabelFirst.args = {
  labelFirst: true,
};

export const WithError: Story<ToggleInputProps> = Template.bind({});
WithError.args = {
  errorText: "Error",
};
