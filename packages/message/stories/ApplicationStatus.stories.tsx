import { Header } from "@sikt/sds-header";
import "@sikt/sds-header/dist/index.css";

import { Meta, StoryObj } from "@storybook/react-vite";
import {
  ApplicationStatus as Component,
  ApplicationStatusProps,
} from "../index";

const meta: Meta = {
  title: "Components/Message/Application Status",
  component: Component,
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

type Story = StoryObj<ApplicationStatusProps>;

export const ApplicationStatus: Story = {
  args: {
    children: "Message",
    variant: "info",
  },
};

export const ApplicationStatusWithHeader: Story = {
  args: {
    children: "Message",
    variant: "info",
  },
  render: (args) => <Header applicationStatus={<Component {...args} />} />,
};
