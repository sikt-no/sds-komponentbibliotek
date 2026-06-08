import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Figure, FigureProps } from "../index";
import siktStol from "./sikt-stol.jpg";

const meta: Meta = {
  title: "Core/Figure",
  component: Figure,
};

export default meta;

type Story = StoryObj<FigureProps>;

export const Default: Story = {
  render: (args) => <Figure {...args} style={{ maxWidth: "300px" }} />,
  args: {
    children: [<img src={siktStol} alt="Sikt-stol" key={0} />],
    figCaption: "A chair from Sikt's office",
  },
};

export const AspectRatio16x9: Story = {
  ...Default,
  args: {
    ...Default.args,
    aspectRatio: "16x9",
  },
};
