import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Notification, NotificationProps } from "../index";

const meta: Meta = {
  title: "Components/Notification",
  component: Notification,
};

export default meta;

type Story = StoryObj<NotificationProps>;

export const Default: Story = {
  args: {
    count: 10,
    maxCount: 9,
  },
};

export const WithoutCount: Story = {
  args: {},
};
