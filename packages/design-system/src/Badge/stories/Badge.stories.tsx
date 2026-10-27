import { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeProps } from "../index";

const meta: Meta = {
  title: "SD3/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: 10,
    maxNumber: 9,
    "aria-label": "10 nye meldinger",
  },
};

export const IsDot: Story = {
  args: {
    "aria-label": "Nye meldinger",
  },
};
