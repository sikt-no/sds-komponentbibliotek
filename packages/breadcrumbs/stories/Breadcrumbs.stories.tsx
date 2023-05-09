import React from "react";
import { Meta, Story } from "@storybook/react";
import { Breadcrumbs } from "../index";
import type { BreadcrumbsProps } from "../index";
import { BreadcrumbItem } from "../index";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  BreadcrumbItem,
  args: {
    "aria-label": "Navigation path",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<BreadcrumbsProps> = (args) => (
  <Breadcrumbs {...args}>
    <BreadcrumbItem>
      <a href="/">Level 1</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/">Level 2</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/">Level 3</a>
    </BreadcrumbItem>
  </Breadcrumbs>
);

export const Default: Story<BreadcrumbsProps> = Template.bind({});
