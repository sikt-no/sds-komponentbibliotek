import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Badge, BadgeProps } from "../index";
import { Icon } from "../../icons/index";

export default {
  title: "Components/Badge",
  component: Badge,
  subcomponents: { Icon },
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
  icon: <Icon icon="check" />,
};
