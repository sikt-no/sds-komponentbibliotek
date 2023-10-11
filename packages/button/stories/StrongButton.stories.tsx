import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, StrongButton } from "../index";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Strong",
  component: StrongButton,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Button: Story = {
  args: {
    children: "Strong Button",
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
