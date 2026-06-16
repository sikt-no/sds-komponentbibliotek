import { SettingsIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { EmailInput, InputProps } from "../index";

const meta: Meta = {
  title: "Components/Input/Email",
  component: EmailInput,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Input: Story = {
  args: {
    label: "Label",
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Input.args,
    icon: <SettingsIcon />,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Input.args,
    helpText: "Helpful text",
  },
};

export const WithError: Story = {
  args: {
    ...Input.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
};

export const Readonly: Story = {
  args: {
    ...Input.args,
    value: "example@sikt.no",
    readOnly: true,
    helpText: "Readonly",
  },
};
