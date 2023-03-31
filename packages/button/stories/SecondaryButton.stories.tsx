import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { ButtonProps, SecondaryButton } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

export default {
  title: "Components/Button/Secondary",
  component: SecondaryButton,
  subcomponents: { ArrowRightIcon, ArrowLeftIcon },
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
