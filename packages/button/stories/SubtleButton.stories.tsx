import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, SubtleButton } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Subtle",
  component: SubtleButton,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Button: Story = {
  args: {
    children: "Subtle Button",
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

export const Small: Story = {
  args: {
    ...Button.args,
    buttonSize: "small",
  },
};
