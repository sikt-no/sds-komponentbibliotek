import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, SecondaryButton } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Secondary",
  component: SecondaryButton,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Button: Story = {
  args: {
    children: "Secondary Button",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
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
