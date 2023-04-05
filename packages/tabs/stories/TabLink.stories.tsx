import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { TabLink, TabLinkProps } from "../index";
import { InfoIcon } from "../../icons/index";
import { Badge } from "../../badge/index";

export default {
  title: "Components/Tabs/TabLink",
  component: TabLink,
  subcomponents: { InfoIcon, Badge },
  args: {
    children: "Tab Link",
    href: "#link",
    isSelected: true,
  },
} as Meta;

const Template: Story<TabLinkProps> = (args) => <TabLink {...args} />;

export const Default: Story<TabLinkProps> = Template.bind({});

export const WithIcon: Story<TabLinkProps> = Template.bind({});
WithIcon.args = {
  icon: <InfoIcon />,
};

export const WidthBadge: Story<TabLinkProps> = Template.bind({});
WidthBadge.args = {
  badge: <Badge>Badge</Badge>,
};
