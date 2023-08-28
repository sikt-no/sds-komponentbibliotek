import { Meta, StoryObj } from "@storybook/react";
import { CheckboxInput, CheckboxInputProps } from "../index";

const meta: Meta = {
  title: "Components/Checkbox/Checkbox",
  component: CheckboxInput,
};

export default meta;

type Story = StoryObj<CheckboxInputProps>;

export const Checked: Story = {
  args: {
    isChecked: true,
    label: "Checked checkbox",
  },
};

export const Unchecked: Story = {
  args: {
    isChecked: false,
    label: "Unchecked checkbox",
  },
};
