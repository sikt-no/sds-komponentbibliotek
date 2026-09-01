import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Paragraph as Component,
  ParagraphProps as ComponentProps,
} from "../index";

const meta: Meta = {
  title: "SD3/Typography/Paragraph",
  component: Component,
};

export default meta;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
  args: {
    children: "Typography",
    size: "md",
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
