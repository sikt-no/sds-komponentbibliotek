import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SearchInput, InputProps } from "../index";
import { MapPinIcon } from "@sikt/sds-icons";

const meta: Meta = {
  title: "Components/Input/Search",
  component: SearchInput,
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
    icon: <MapPinIcon />,
  },
};

export const WithHelpText: Story = {
  args: { ...Default.args, helpText: "Text" },
};

export const WithError: Story = {
  args: { ...Default.args, errorText: "Error!" },
};

export const WithCustomActionLabel: Story = {
  args: { ...Default.args, actionProps: { label: "Finn resultater" } },
};
