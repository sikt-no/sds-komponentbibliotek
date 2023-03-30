import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { IconProps, ArrowRightIcon } from "../index";

export default {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <ArrowRightIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
);

export const ArrowRight: Story<IconProps> = Template.bind({});
