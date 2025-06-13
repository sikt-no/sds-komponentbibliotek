import { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  ApplicationStatus as Component,
  ApplicationStatusProps,
} from "../index";

const meta: Meta = {
  title: "Components/Message/Application Status",
  component: Component,
};

export default meta;

type Story = StoryObj<ApplicationStatusProps>;

export const ApplicationStatus: Story = {
  args: {
    children: "Message",
    variant: "info",
  },
};
