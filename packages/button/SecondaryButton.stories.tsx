import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, SecondaryButton } from "./Button";

export default {
  title: "Components/Button/Secondary",
  component: SecondaryButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <SecondaryButton {...args} />;

export const Button: Story<ButtonProps> = Template.bind({});
Button.args = {
  children: "Button",
  onClick: () => {
    alert("click handler");
  },
};
