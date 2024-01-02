import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioInput, RadioFieldset, RadioFieldsetProps } from "../index";

const meta: Meta = {
  title: "Components/Radio/RadioFieldset",
  component: RadioFieldset,
};

export default meta;

type Story = StoryObj<RadioFieldsetProps>;

export const Default: Story = {
  args: {
    children: [
      <RadioInput key={1} label="Radio 1" value="1" />,
      <RadioInput key={2} label="Radio 2" value="2" />,
      <RadioInput key={3} label="Radio 3" value="3" />,
    ],
    legend: "Legend",
    value: "1",
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Text",
    value: "2",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: "Error!",
    value: "3",
  },
};
