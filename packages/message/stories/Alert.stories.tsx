import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Alert as Component, AlertProps, MessageButton } from "../index";

const meta: Meta = {
  title: "Components/Message/Alert",
  component: Component,
  subcomponents: { MessageButton },
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

type Story = StoryObj<AlertProps>;

export const Alert: Story = {
  args: {
    children: "Message",
    variant: "critical",
    callToAction: (
      <MessageButton icon={<NavigateToNextIcon />}>Action</MessageButton>
    ),
  },
};
