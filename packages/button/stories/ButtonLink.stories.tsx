import React from "react";
import { Meta, Story } from "@storybook/react";
import { ButtonLinkProps, ButtonLink } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

export default {
  title: "Components/Button/Link",
  component: ButtonLink,
  subcomponents: { ArrowRightIcon, ArrowLeftIcon },
  args: {
    children: "Button Link",
    href: "#link",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

export const Button: Story<ButtonLinkProps> = Template.bind({});

export const IconRight: Story<ButtonLinkProps> = Template.bind({});
IconRight.args = {
  icon: <ArrowRightIcon />,
};

export const IconLeft: Story<ButtonLinkProps> = Template.bind({});
IconLeft.args = {
  icon: <ArrowLeftIcon />,
  iconType: "left",
};

export const IconOnly: Story<ButtonLinkProps> = Template.bind({});
IconOnly.args = {
  icon: <ArrowRightIcon />,
  iconType: "only",
};
