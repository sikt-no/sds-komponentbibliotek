import { Meta, StoryObj } from "@storybook/react-vite";
import {
  NavigateToNextIcon,
  NavigateToPreviousIcon,
  AlertIcon,
  EmailIcon,
  NotificationIcon,
  UserProfileIcon,
} from "../../icons/index";
import { Notification } from "../../notification/index";
import { Button, ButtonProps } from "../index";
import "../../notification/dist/index.css";

const meta: Meta = {
  title: "Components/Button/Button",
  component: Button,
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

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "subtle",
    size: "default",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
};

export const IconRight: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToNextIcon />,
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToPreviousIcon />,
    iconVariant: "left",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToNextIcon />,
    iconVariant: "only",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const WithNotification: Story = {
  args: {
    children: "Alerts",
    variant: "subtle",
    icon: <AlertIcon />,
    iconVariant: "only",
    notification: <Notification count={5} />,
  },
};

export const WithNotificationMaxCount: Story = {
  args: {
    children: "Inbox",
    variant: "transparent",
    icon: <EmailIcon />,
    iconVariant: "only",
    notification: <Notification count={150} maxCount={99} />,
  },
};

export const WithNotificationNoCount: Story = {
  args: {
    children: "Messages",
    variant: "transparent",
    icon: <NotificationIcon />,
    iconVariant: "only",
    notification: <Notification />,
  },
};

export const WithNotificationAndText: Story = {
  args: {
    children: "View feedback",
    variant: "subtle",
    notification: <Notification count={3} />,
  },
};

export const WithNotificationIconLeft: Story = {
  args: {
    children: "User activity",
    variant: "subtle",
    icon: <UserProfileIcon />,
    iconVariant: "left",
    notification: <Notification count={25} maxCount={9} />,
  },
};
