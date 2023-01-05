import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, PrimaryButton } from "./Button";

export default {
  title: "Components/Button/Primary",
  component: PrimaryButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

export const Primary: Story<ButtonProps> = Template.bind({});
Primary.args = {
  children: "Primary",
  onClick: () => {
    alert("click handler");
  },
};
