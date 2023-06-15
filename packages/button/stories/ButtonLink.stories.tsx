import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonLinkProps, ButtonLink } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Link",
  component: ButtonLink,
};

export default meta;

type Story = StoryObj<ButtonLinkProps>;

export const Button: Story = {
  args: { children: "Button Link", href: "#link" },
};

export const IconRight: Story = {
  args: {
    ...Button.args,
    icon: <ArrowRightIcon />,
  },
};

export const IconLeft: Story = {
  args: {
    ...Button.args,
    icon: <ArrowLeftIcon />,
    iconType: "left",
  },
};

export const IconOnly: Story = {
  args: {
    ...Button.args,
    icon: <ArrowRightIcon />,
    iconType: "only",
  },
};
