import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IconProps, ArrowRightIcon, SpinnerIcon } from "../index";

const meta: Meta = {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
};

export default meta;

type Story = StoryObj<IconProps>;

export const ArrowRight: Story = {
  render: (args) => (
    <ArrowRightIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
  ),
  args: {},
};

export const Spinner: Story = {
  render: (args) => (
    <SpinnerIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
  ),
  args: {},
};
