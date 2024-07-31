import { Meta, StoryObj } from "@storybook/react";
import type { BreadcrumbsProps } from "../index";
import { Breadcrumbs, BreadcrumbItem } from "../index";

const meta: Meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<BreadcrumbsProps>;

const Template: Story = {
  args: {
    "aria-label": "Navigation path",
  },
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <a className="sds-typography-link" href="/">
          Level 1
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a className="sds-typography-link" href="/">
          Level 2
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a className="sds-typography-link" href="/">
          Level 3
        </a>
      </BreadcrumbItem>
    </Breadcrumbs>
  ),
};

export const Default: Story = { ...Template };
