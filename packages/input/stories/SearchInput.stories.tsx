import React from "react";
import { Meta, Story } from "@storybook/react";
import { SearchInput, InputProps } from "../index";
import { MapPinIcon } from "@sikt/sds-icons";

export default {
  title: "Components/Input/Search",
  component: SearchInput,
  subcomponents: { MapPinIcon },
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<InputProps> = (args) => <SearchInput {...args} />;

export const Default: Story<InputProps> = Template.bind({});

export const WithCustomIcon: Story<InputProps> = Template.bind({});
WithCustomIcon.args = {
  icon: <MapPinIcon />,
  iconPosition: "start",
};

export const WithHelpText: Story<InputProps> = Template.bind({});
WithHelpText.args = {
  helpText: "Text",
};

export const WithError: Story<InputProps> = Template.bind({});
WithError.args = {
  errorText: "Error!",
};
