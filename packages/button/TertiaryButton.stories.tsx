import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, TertiaryButton as Button } from "./Button";

export default {
  title: "Components/Button/Tertiary",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const TertiaryButton: Story<ButtonProps> = Template.bind({});
TertiaryButton.args = {
  children: "Tertiary Button",
  onClick: () => {
    alert("click handler");
  },
};
