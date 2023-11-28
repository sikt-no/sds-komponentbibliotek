import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  IconProps,
  ArrowRightIcon,
  SpinnerIcon,
  LogoIconsProps,
  LinkedInLogo as LinkedInLogoIcon,
  XLogo as XLogoIcon,
} from "../index";

const meta: Meta = {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
};

export default meta;

type Story = StoryObj<IconProps | LogoIconsProps>;

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

export const LinkedInLogo: Story = {
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <a href="#linkedin">
      Linkedin
      <LinkedInLogoIcon style={{ fontSize: "calc(32rem / 16)" }} {...args} />
    </a>
  ),
};

export const XLogo: Story = {
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
  },
  render: (args) => (
    <a href="#x">
      X <XLogoIcon style={{ fontSize: "calc(32rem / 16)" }} {...args} />
    </a>
  ),
};
