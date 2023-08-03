import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  IconProps,
  ArrowRightIcon,
  SpinnerIcon,
  ThirdPartyIconsProps,
} from "../index";
import { LinkedInLogo, XLogo } from "../ThirdPartyIcons";

const meta: Meta = {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
};

export default meta;

type Story = StoryObj<IconProps | ThirdPartyIconsProps>;

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

export const Linkedin: Story = {
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <LinkedInLogo style={{ fontSize: "calc(32rem / 16)" }} {...args} />
  ),
};

export const XLogoIcon: Story = {
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "select" },
    },
  },
  render: (args) => (
    <XLogo style={{ fontSize: "calc(32rem / 16)" }} {...args} />
  ),
};
