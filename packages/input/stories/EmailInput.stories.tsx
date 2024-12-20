import { SettingsIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react";
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
    placeholder: "Placeholder",
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
    helpText: "Text",
  },
};

export const WithError: Story = {
  args: {
    ...Input.args,
    errorText: "Error!",
  },
};
