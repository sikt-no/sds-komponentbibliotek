import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LinkProps, Link } from "../index";

export default {
  title: "Components/Core/Link",
  component: Link,
  args: {
    children: "Link",
    href: "#",
  },
} as Meta;

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Default: Story<LinkProps> = Template.bind({});

export const Navigation: Story<LinkProps> = Template.bind({});
Navigation.args = {
  className: "sds-typography-link--navigation",
};

export const External: Story<LinkProps> = Template.bind({});
External.args = {
  target: "_blank",
};

export const Phone: Story<LinkProps> = Template.bind({});
Phone.args = {
  href: "tel:#",
};

export const Mail: Story<LinkProps> = Template.bind({});
Mail.args = {
  href: "mailto:#",
};
