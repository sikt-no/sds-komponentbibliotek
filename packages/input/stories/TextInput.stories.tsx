import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react";
import { InputProps, TextInput } from "../index";

const meta: Meta = {
  title: "Components/Input/Text",
  component: TextInput,
};

export default meta;

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: "Error!",
  },
};
