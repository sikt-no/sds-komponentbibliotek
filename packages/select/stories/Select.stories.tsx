import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import { SelectProps, Select } from "../index";
import { ListIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    label: "Label",
    options: [
      { label: "First item", value: "1" },
      { label: "Second item", value: "2" },
      { label: "Third item", value: "3" },
    ],
    value: "2",
  },
  render: (args) => {
    const [, setArgs] = useArgs();
    return (
      <Select
        {...args}
        onChange={(event) => setArgs({ value: event.target.value })}
      />
    );
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <ListIcon />,
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
    errorText: "Error",
  },
};
