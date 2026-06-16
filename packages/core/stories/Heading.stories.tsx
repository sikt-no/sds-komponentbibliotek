import { Meta, StoryObj } from "@storybook/react-vite";
import { Heading1, HeadingProps } from "../index";

const meta: Meta = {
  title: "Core/Heading",
  component: Heading1,
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

type Story = StoryObj<HeadingProps>;

export const Heading: Story = {
  args: {
    children: "Heading",
  },
};
