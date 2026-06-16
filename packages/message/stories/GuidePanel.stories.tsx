import { Meta, StoryObj } from "@storybook/react-vite";
import { GuidePanel as Component, GuidePanelProps } from "../index";

const meta: Meta = {
  title: "Components/Message/Guide Panel",
  component: Component,
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<GuidePanelProps>;

export const GuidePanel: Story = {
  args: {
    children: "Message",
    variant: "info",
  },
};
