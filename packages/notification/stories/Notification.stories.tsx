import { Meta, StoryObj } from "@storybook/react-vite";
import { Notification } from "../index";

const meta = {
  title: "Components/Notification",
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 10,
    maxCount: 9,
  },
};

export const WithoutCount: Story = {
  args: {},
};
