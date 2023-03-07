import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { SpinnerIconProps, SpinnerIcon } from "../SpinnerIcon";

export default {
  title: "Components/Icons/SpinnerIcon",
  component: SpinnerIcon,
} as Meta;

const Template: Story<SpinnerIconProps> = (args) => (
  <SpinnerIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
);

export const Spinner: Story<SpinnerIconProps> = Template.bind({});
