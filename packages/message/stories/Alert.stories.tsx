import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Alert as Component, AlertProps, MessageButton } from "../index";

const meta: Meta = {
  title: "Components/Message/Alert",
  component: Component,
  subcomponents: { MessageButton },
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
