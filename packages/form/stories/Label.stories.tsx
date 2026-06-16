import { Meta, StoryObj } from "@storybook/react-vite";
import { Label, LabelProps } from "../index";

const meta: Meta = {
  title: "Components/Form/Label",
  component: Label,
};

export default meta;

type Story = StoryObj<LabelProps>;

export const Default: Story = {
  args: {
    text: "Label",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    children: <div>AAA</div>,
  },
};
