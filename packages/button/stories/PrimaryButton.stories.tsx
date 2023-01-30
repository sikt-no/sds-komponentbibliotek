import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, PrimaryButton } from "../";

export default {
  title: "Components/Button/Primary",
  component: PrimaryButton,
  args: {
    children: "Primary Button",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

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

export const Light: Story<ButtonProps> = Template.bind({});
Light.args = {
  color: "light",
};
