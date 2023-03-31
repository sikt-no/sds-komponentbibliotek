import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TelInput, InputProps } from "../index";
import { SlidersIcon } from "@sikt/sds-icons";

export default {
  title: "Components/Input/Tel",
  component: TelInput,
  subcomponents: { SlidersIcon },
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
} as Meta;

const Template: Story<InputProps> = (args) => <TelInput {...args} />;

export const Default: Story<InputProps> = Template.bind({});

export const WithCustomIcon: Story<InputProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <SlidersIcon />,
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
