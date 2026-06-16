import { AdjustSettingsIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { InputProps, TelInput } from "../index";

const meta: Meta = {
  title: "Components/Input/Tel",
  component: TelInput,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    icon: <AdjustSettingsIcon />,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    value: "012345678",
    readOnly: true,
    helpText: "Readonly",
  },
};
