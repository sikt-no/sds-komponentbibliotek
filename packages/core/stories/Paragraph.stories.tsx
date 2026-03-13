import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Paragraph, ParagraphProps } from "../index";

const meta: Meta = {
  title: "Core/Paragraph",
  component: Paragraph,
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

type Story = StoryObj<ParagraphProps>;

export const Regular: Story = {
  args: {
    children: "Paragraph",
  },
};

export const AsSpan: Story = {
  args: {
    ...Regular.args,
    as: "span",
  },
};

export const AsHeading3: Story = {
  args: {
    ...Regular.args,
    as: "h3",
  },
};

export const ColorSecondary: Story = {
  args: {
    ...Regular.args,
    color: "secondary",
  },
};

export const ColorCritical: Story = {
  args: {
    ...Regular.args,
    color: "critical",
  },
};
