import { Meta, StoryObj } from "@storybook/react-vite";
import { Span as Component, SpanProps as ComponentProps } from "../index";

const meta: Meta = {
  title: "SD3/Typography/Span",
  component: Component,
};

export default meta;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};
