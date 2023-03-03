import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Breadcrumbs } from "../Breadcrumbs";
import type { BreadcrumbsProps } from "../Breadcrumbs";
import { BreadcrumbItem } from "../BreadcrumbItem";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  BreadcrumbItem,
  args: {
    "aria-label": "Navigation path",
  },
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
