import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, SecondaryButton as Button } from "./Button";

export default {
  title: "Components/Button/Secondary",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const SecondaryButton: Story<ButtonProps> = Template.bind({});
SecondaryButton.args = {
  children: "Secondary Button",
  onClick: () => {
    alert("click handler");
  },
};

export const SecondaryButtonIconLeft: Story<ButtonProps> = Template.bind({});
SecondaryButtonIconLeft.args = {
  children: "Secondary Button",
  iconLeft: "i",
  onClick: () => {
    alert("click handler");
  },
};

export const SecondaryButtonIconRight: Story<ButtonProps> = Template.bind({});
SecondaryButtonIconRight.args = {
  children: "Secondary Button",
  iconRight: "i",
  onClick: () => {
    alert("click handler");
  },
};
