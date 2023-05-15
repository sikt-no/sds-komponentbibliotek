import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { LinkProps, Link } from "../index";

const meta: Meta = {
  title: "Components/Core/Link",
  component: Link,
  tags: ["autodocs"],
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
    className: "sds-typography-link--navigation",
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
