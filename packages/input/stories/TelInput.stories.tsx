import { AdjustSettingsIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react";
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
    placeholder: "",
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
    helpText: "Text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: "Error!",
  },
};
