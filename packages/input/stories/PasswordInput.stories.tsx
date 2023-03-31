import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PasswordInput, InputProps } from "../index";
import { UserCircleIcon } from "@sikt/sds-icons";

export default {
  title: "Components/Input/Password",
  component: PasswordInput,
  subcomponents: { UserCircleIcon },
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
} as Meta;

const Template: Story<InputProps> = (args) => <PasswordInput {...args} />;

export const Default: Story<InputProps> = Template.bind({});

export const WithCustomIcon: Story<InputProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <UserCircleIcon />,
  iconPosition: "end",
};

export const WithHelpText: Story<InputProps> = Template.bind({});
WithHelpText.args = {
  helpText: "Text",
};

export const WithError: Story<InputProps> = Template.bind({});
WithError.args = {
  errorText: "Error!",
};
