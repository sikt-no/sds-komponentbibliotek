import { Meta, StoryObj } from "@storybook/react";
import { Heading1, HeadingProps } from "../index";

const meta: Meta = {
  title: "Core/Heading",
  component: Heading1,
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const Heading: Story = {
  args: {
    children: "Heading",
  },
};
