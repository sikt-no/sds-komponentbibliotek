import { Meta, StoryObj } from "@storybook/react";
import { PaginationProps, Pagination } from "../index";

const meta: Meta = {
  title: "Components/Pagination",
  component: Pagination,
};

export default meta;

type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    "aria-label": "Sample pagination",
    count: 10,
    currentIndex: 0,
    handleClick: (index: number) => {
      alert(`click handler index ${index}`);
    },
  },
};
