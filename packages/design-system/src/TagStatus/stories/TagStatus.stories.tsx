import type { Meta, StoryObj } from "@storybook/react-vite";

import { TagStatus, TagStatusProps } from "../index";

const meta: Meta<TagStatusProps> = {
  title: "SD3/TagStatus",
  component: TagStatus,
  parameters: {
    docs: {
      description: {
        component:
          "Semantic status label with a locked icon per variant. Reach for `TagStatus` when the tag communicates state the user should recognise (success, info, warning, critical). For arbitrary tagging or categorical colours, use `Tag`.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default meta;

type Story = StoryObj<TagStatusProps>;

export const Default: Story = {
  args: { variant: "info", children: "Info" },
};
