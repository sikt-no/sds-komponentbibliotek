import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SpinnerIcon } from "../SpinnerIcon";
import { IconProps } from "../build/index";

export default {
  title: "Components/Icons/SpinnerIcon",
  component: SpinnerIcon,
} as Meta;

const Template: Story<IconProps> = (args) => (
  <SpinnerIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
);

export const Spinner: Story<IconProps> = Template.bind({});
