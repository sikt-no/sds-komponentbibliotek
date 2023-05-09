import React from "react";
import { Meta, Story } from "@storybook/react";
import { SpinnerIcon } from "../index";
import { IconProps } from "../index";

export default {
  title: "Components/Icons/SpinnerIcon",
  component: SpinnerIcon,
  tags: ["autodocs"],
} as Meta;

const Template: Story<IconProps> = (args) => (
  <SpinnerIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
);

export const Spinner: Story<IconProps> = Template.bind({});
