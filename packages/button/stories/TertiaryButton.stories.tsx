import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonProps, TertiaryButton } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

export default {
  title: "Components/Button/Tertiary",
  component: TertiaryButton,
  subcomponents: { ArrowRightIcon, ArrowLeftIcon },
  args: {
    children: "Tertiary Button",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ButtonProps> = (args) => <TertiaryButton {...args} />;

export const Button: Story<ButtonProps> = Template.bind({});

export const IconRight: Story<ButtonProps> = Template.bind({});
IconRight.args = {
  icon: <ArrowRightIcon />,
};

export const IconLeft: Story<ButtonProps> = Template.bind({});
IconLeft.args = {
  icon: <ArrowLeftIcon />,
  iconType: "left",
};

export const IconOnly: Story<ButtonProps> = Template.bind({});
IconOnly.args = {
  icon: <ArrowRightIcon />,
  iconType: "only",
};
