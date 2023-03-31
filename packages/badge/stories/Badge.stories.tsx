import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Badge, BadgeProps } from "../index";
import { CheckIcon } from "../../icons/index";

export default {
  title: "Components/Badge",
  component: Badge,
  subcomponents: { CheckIcon },
  args: {
    children: "Badge",
    badgeType: "action",
    visibility: "medium",
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Default: Story<BadgeProps> = Template.bind({});

export const IconLeft: Story<BadgeProps> = Template.bind({});
IconLeft.args = {
  icon: <CheckIcon />,
};
