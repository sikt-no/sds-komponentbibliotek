import { Meta, StoryObj } from "@storybook/react-webpack5";
import { action } from "storybook/actions";
import { ChipButton, ChipButtonProps } from "../index";

const meta: Meta = {
  title: "Components/Chip/Button",
  component: ChipButton,
};

export default meta;

type Story = StoryObj<ChipButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: action("onClick"),
  },
};
