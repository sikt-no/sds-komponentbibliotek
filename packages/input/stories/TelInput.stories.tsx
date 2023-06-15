import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TelInput, InputProps } from "../index";
import { SlidersIcon } from "@sikt/sds-icons";

const meta: Meta = {
  title: "Components/Input/Tel",
  component: TelInput,
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
    icon: <SlidersIcon />,
    iconPosition: "end",
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
