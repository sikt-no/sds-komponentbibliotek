import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge, BadgeProps } from "../index";
import { CheckIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    visibility: "subtle",
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <CheckIcon />,
  },
};
