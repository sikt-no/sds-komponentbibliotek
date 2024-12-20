import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react";
import { Alert as Component, AlertProps, MessageButton } from "../index";

const meta: Meta = {
  title: "Components/Message",
  component: Component,
  subcomponents: { MessageButton },
};

export default meta;

type Story = StoryObj<AlertProps>;

export const Alert: Story = {
  args: {
    children: "Message",
    callToAction: (
      <MessageButton icon={<NavigateToNextIcon />}>Action</MessageButton>
    ),
  },
};
