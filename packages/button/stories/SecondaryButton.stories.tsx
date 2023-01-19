import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, SecondaryButton } from "../Button";

export default {
  title: "Components/Button/Secondary",
  component: SecondaryButton,
  args: {
    children: "Secondary Button",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <SecondaryButton {...args} />;

export const Button: Story<ButtonProps> = Template.bind({});

export const IconRight: Story<ButtonProps> = Template.bind({});
IconRight.args = {
  icon: "i",
};

export const IconLeft: Story<ButtonProps> = Template.bind({});
IconLeft.args = {
  icon: "i",
  iconType: "left",
};

export const IconOnly: Story<ButtonProps> = Template.bind({});
IconOnly.args = {
  icon: "i",
  iconType: "only",
};
