import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, type InputProps } from "../index";

const meta: Meta<InputProps> = {
  title: "SD3/Input",
  component: Input,
  args: {
    "aria-label": "Organization",
  },
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "Sikt",
  },
};

export const Error: Story = {
  args: {
    "aria-invalid": true,
    defaultValue: "Sikt",
  },
};
