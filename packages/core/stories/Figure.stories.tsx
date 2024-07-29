import { Meta, StoryObj } from "@storybook/react";
import { FigureProps, Figure } from "../index";

const meta: Meta = {
  title: "Core/Figure",
  component: Figure,
};

export default meta;

type Story = StoryObj<FigureProps>;

export const Default: Story = {
  render: (args) => <Figure {...args} style={{ maxWidth: "300px" }} />,
  args: {
    children: [
      <img src="https://picsum.photos/400" alt="Lorem Picsum" key={0} />,
    ],
    figCaption: "Lorem Picsum",
  },
};

export const AspectRatio16x9: Story = {
  ...Default,
  args: {
    ...Default.args,
    aspectRatio: "16x9",
  },
};
