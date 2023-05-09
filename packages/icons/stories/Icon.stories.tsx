import React from "react";
import { Meta, Story } from "@storybook/react";
import { IconProps, ArrowRightIcon } from "../index";

export default {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
  tags: ["autodocs"],
} as Meta;

const Template: Story<IconProps> = (args) => (
  <ArrowRightIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
);

export const ArrowRight: Story<IconProps> = Template.bind({});
