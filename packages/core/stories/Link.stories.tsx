import { Meta, StoryObj } from "@storybook/react";
import { Link, LinkProps } from "../index";

const meta: Meta = {
  title: "Core/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<LinkProps>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "#",
  },
};

export const Navigation: Story = {
  args: {
    ...Default.args,
    isNavigation: true,
  },
};

export const External: Story = {
  args: {
    ...Default.args,
    target: "_blank",
  },
};

export const Phone: Story = {
  args: {
    ...Default.args,
    href: "tel:#",
  },
};

export const Mail: Story = {
  args: {
    ...Default.args,
    href: "mailto:#",
  },
};
