import { Meta, StoryObj } from "@storybook/react";
import { Paragraph, ParagraphProps } from "../index";

const meta: Meta = {
  title: "Core/Paragraph",
  component: Paragraph,
};

export default meta;

type Story = StoryObj<ParagraphProps>;

export const Regular: Story = {
  args: {
    children: "Paragraph",
    variant: "regular",
  },
};

export const AsSpan: Story = {
  args: {
    ...Regular.args,
    as: "span",
  },
};
