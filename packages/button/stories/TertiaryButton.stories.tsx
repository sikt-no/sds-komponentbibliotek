import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, TertiaryButton } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Tertiary",
  component: TertiaryButton,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Button: Story = {
  args: {
    children: "Tertiary Button",
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
