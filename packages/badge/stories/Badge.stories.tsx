import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ConfirmIcon } from "../../icons/index";
import { Badge, BadgeProps } from "../index";

const meta: Meta = {
  title: "Components/Badge",
  component: Badge,
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "primary",
    visibility: "subtle",
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <ConfirmIcon />,
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    children: undefined,
    icon: <ConfirmIcon />,
    "aria-label": "Badge",
  },
};
