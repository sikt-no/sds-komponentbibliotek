import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TabLink, TabLinkProps } from "../index";
import { InfoIcon } from "../../icons/index";
import { Badge } from "../../badge/index";

const meta: Meta = {
  title: "Components/Tabs/TabLink",
  component: TabLink,
};

export default meta;

type Story = StoryObj<TabLinkProps>;

export const Default: Story = {
  args: {
    children: "Tab Link",
    href: "#link",
    isSelected: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};

export const WidthBadge: Story = {
  args: {
    ...Default.args,
    badge: <Badge>Badge</Badge>,
  },
};
