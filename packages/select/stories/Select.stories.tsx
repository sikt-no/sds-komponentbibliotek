import React, { ChangeEvent } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SelectProps, Select } from "../index";
import { Icon } from "../../icons/index";

export default {
  title: "Components/Select",
  component: Select,
  subcomponents: { Icon },
  args: {
    label: "Label",
    options: [
      { label: "First item", value: "1" },
      { label: "Second item", value: "2" },
      { label: "Third item", value: "3" },
    ],
    onChange: (event: ChangeEvent<HTMLSelectElement>) => {
      console.log(event.target.value);
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default: Story<SelectProps> = Template.bind({});

export const WithIcon: Story<SelectProps> = Template.bind({});
WithIcon.args = {
  icon: <Icon icon="list" />,
};

export const WithHelpText: Story<SelectProps> = Template.bind({});
WithHelpText.args = {
  helpText: "Text",
};

export const WithError: Story<SelectProps> = Template.bind({});
WithError.args = {
  errorText: "Error",
};
