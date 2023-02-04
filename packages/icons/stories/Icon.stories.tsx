import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { IconProps, Icon } from "../Icon";

export default {
  title: "Components/Icons/Icon",
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const ArrowRight: Story<IconProps> = Template.bind({});
ArrowRight.args = {
  icon: "arrow-right",
};
