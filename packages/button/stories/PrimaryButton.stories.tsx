import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, PrimaryButton as Button } from "../Button";

export default {
  title: "Components/Button/Primary",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton: Story<ButtonProps> = Template.bind({});
PrimaryButton.args = {
  children: "Primary Button",
  onClick: () => {
    alert("click handler");
  },
};

export const PrimaryButtonIconRight: Story<ButtonProps> = Template.bind({});
PrimaryButtonIconRight.args = {
  children: "Primary Button",
  icon: "i",
  onClick: () => {
    alert("click handler");
  },
};

export const PrimaryButtonIconLeft: Story<ButtonProps> = Template.bind({});
PrimaryButtonIconLeft.args = {
  children: "Primary Button",
  icon: "i",
  iconType: "left",
  onClick: () => {
    alert("click handler");
  },
};

export const PrimaryButtonIconOnly: Story<ButtonProps> = Template.bind({});
PrimaryButtonIconOnly.args = {
  children: "Primary Button",
  icon: "i",
  iconType: "only",
  onClick: () => {
    alert("click handler");
  },
};

export const PrimaryButtonLight: Story<ButtonProps> = Template.bind({});
PrimaryButtonLight.args = {
  children: "Primary Button",
  color: "light",
  onClick: () => {
    alert("click handler");
  },
};
