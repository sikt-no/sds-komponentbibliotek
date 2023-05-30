import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TextArea, InputProps } from "../index";
import { InfoIcon } from "@sikt/sds-icons";

export default {
  title: "Components/Input/TextArea",
  component: TextArea,
  subcomponents: { InfoIcon },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    inputProps: { rows: 2 },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <TextArea {...args} />;

export const Default: Story<InputProps> = Template.bind({});

export const WithCustomIcon: Story<InputProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <InfoIcon />,
};

export const WithHelpText: Story<InputProps> = Template.bind({});
WithHelpText.args = {
  helpText: "Text",
};

export const WithError: Story<InputProps> = Template.bind({});
WithError.args = {
  errorText: "Error!",
};
