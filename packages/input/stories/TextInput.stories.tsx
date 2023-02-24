import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TextInput, InputProps } from "../index";
import { Icon } from "@sikt/sds-icons";

export default {
  title: "Components/Input/Text",
  component: TextInput,
  subcomponents: { Icon },
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
} as Meta;

const Template: Story<InputProps> = (args) => <TextInput {...args} />;

export const Default: Story<InputProps> = Template.bind({});

export const WithCustomIcon: Story<InputProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <Icon icon="info" />,
};

export const WithHelpText: Story<InputProps> = Template.bind({});
WithHelpText.args = {
  helpText: "Text",
};

export const WithError: Story<InputProps> = Template.bind({});
WithError.args = {
  errorText: "Error!",
};
