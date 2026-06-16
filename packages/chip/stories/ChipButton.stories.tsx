import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { ChipButton, ChipButtonProps } from "../index";

const meta: Meta = {
  title: "Components/Chip/Button",
  component: ChipButton,
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

type Story = StoryObj<ChipButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    onClick: action("onClick"),
  },
};
