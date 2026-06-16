import { Meta, StoryObj } from "@storybook/react-vite";
import {
  NavigateToNextIcon,
  NavigateToPreviousIcon,
  AlertIcon,
  EmailIcon,
  MessageIcon,
  FeedbackIcon,
} from "../../icons/index";
import { Notification } from "../../notification/index";
import { ButtonLink, ButtonLinkProps } from "../index";
import "../../notification/dist/index.css";

const meta: Meta = {
  title: "Components/Button/Link",
  component: ButtonLink,
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

type Story = StoryObj<ButtonLinkProps>;

export const Default: Story = {
  args: { children: "Button Link", href: "#link" },
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

export const AsChild: Story = {
  args: {
    ...Default.args,
    children: <a href="/path/to/target">Link</a>,
    asChild: true,
    icon: <NavigateToNextIcon />,
    iconVariant: "only",
  },
};

export const WithNotification: Story = {
  args: {
    children: "View alerts",
    href: "#alerts",
    variant: "subtle",
    icon: <AlertIcon />,
    iconVariant: "only",
    notification: <Notification count={5} />,
  },
};

export const WithNotificationMaxCount: Story = {
  args: {
    children: "Inbox",
    href: "#inbox",
    variant: "transparent",
    icon: <EmailIcon />,
    iconVariant: "only",
    notification: <Notification count={150} maxCount={99} />,
  },
};

export const WithNotificationAndText: Story = {
  args: {
    children: "View all messages",
    href: "#messages",
    variant: "subtle",
    icon: <MessageIcon />,
    iconVariant: "right",
    notification: <Notification count={12} maxCount={9} />,
  },
};

export const WithFeedbackNotification: Story = {
  args: {
    children: "User feedback",
    href: "#feedback",
    variant: "subtle",
    icon: <FeedbackIcon />,
    iconVariant: "left",
    notification: <Notification count={3} />,
  },
};
