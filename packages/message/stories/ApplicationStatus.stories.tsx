import { Meta, StoryObj } from "@storybook/react";
import {
  ApplicationStatus as Component,
  ApplicationStatusProps,
} from "../index";

const meta: Meta = {
  title: "Components/Message",
  component: Component,
};

export default meta;

type Story = StoryObj<ApplicationStatusProps>;

export const ApplicationStatus: Story = {
  args: {
    children: "Message",
  },
};
