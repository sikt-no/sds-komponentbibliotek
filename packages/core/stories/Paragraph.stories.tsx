import { Meta, StoryObj } from "@storybook/react-webpack5";
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

export const SecondaryColor: Story = {
  args: {
    ...Regular.args,
    color: "secondary",
  },
};

export const CriticalColor: Story = {
  args: {
    ...Regular.args,
    color: "critical",
  },
};
