import { Meta, StoryObj } from "@storybook/react-webpack5";
import { GuidePanel as Component, GuidePanelProps } from "../index";

const meta: Meta = {
  title: "Components/Message",
  component: Component,
};

export default meta;

type Story = StoryObj<GuidePanelProps>;

export const GuidePanel: Story = {
  args: {
    children: "Message",
    variant: "info",
  },
};
