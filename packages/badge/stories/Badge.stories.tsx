import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Badge, BadgeProps } from "../index";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {},
};
