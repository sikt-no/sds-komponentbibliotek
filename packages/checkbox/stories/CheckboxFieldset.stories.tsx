import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  CheckboxFieldset,
  CheckboxInput,
  CheckboxInputProps,
  CheckboxFieldsetProps,
} from "../index";

const meta: Meta = {
  title: "Components/Checkbox/CheckboxFieldset",
  component: CheckboxFieldset,
};

export default meta;

type Story = StoryObj<CheckboxFieldsetProps & CheckboxInputProps>;

const Template: Story = {
  args: {
    legend: "Legend",
    children: [
      <CheckboxInput
        key={1}
        isChecked={true}
        label="Checkbox label"
        onChange={() => null}
      />,
    ],
  },
};

export const WithLegend = {
  ...Template,
  args: {
    ...Template.args,
    error: false,
    legend: "Legend",
    errorText: undefined,
    helpText: undefined,
  },
};

export const WithHelpText = {
  ...Template,
  args: {
    ...Template.args,
    error: false,
    legend: "Legend",
    errorText: undefined,
    helpText: "Help text",
  },
};

export const WithError = {
  ...Template,
  args: {
    children: [
      <CheckboxInput
        key={1}
        isChecked={true}
        label="Checkbox label"
        error={true}
        onChange={() => null}
      />,
    ],
    error: true,
    legend: "Legend with error icon",
    errorText: "Error text",
  },
};
