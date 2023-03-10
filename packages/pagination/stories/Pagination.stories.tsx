import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PaginationProps, Pagination } from "../index";

export default {
  title: "Components/Pagination",
  component: Pagination,
  args: {
    "aria-label": "Sample pagination",
    count: 10,
    currentIndex: 0,
    handleClick: (index: number) => alert(`click handler index ${index}`),
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default: Story<PaginationProps> = Template.bind({});
