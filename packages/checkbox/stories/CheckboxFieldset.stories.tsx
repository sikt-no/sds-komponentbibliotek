import { Meta, StoryObj } from "@storybook/react";
import { Fieldset, FieldsetProps } from "../../form";
import { CheckboxInput } from "../index";

const meta: Meta = {
  title: "Components/Checkbox/CheckboxFieldset",
  component: Fieldset,
};

export default meta;

type Story = StoryObj<FieldsetProps>;

const Template: Story = {
  args: {
    legend: "Legend",
    children: [
      <CheckboxInput key={1} isChecked label="Checkbox label 1" />,
      <CheckboxInput key={2} label="Checkbox label 2" />,
      <CheckboxInput key={3} isChecked label="Checkbox label 3" />,
    ],
  },
};

export const WithLegend: Story = {
  ...Template,
  args: {
    ...Template.args,
    legend: "Legend",
    errorText: undefined,
    helpText: undefined,
  },
};

export const WithHelpText: Story = {
  ...Template,
  args: {
    ...Template.args,
    legend: "Legend",
    errorText: undefined,
    helpText: "Help text",
  },
};

export const WithError: Story = {
  ...Template,
  args: {
    children: [
      <CheckboxInput
        key={1}
        isChecked
        label="Checkbox label"
        error
        onChange={() => null}
      />,
    ],
    legend: "Legend with error icon",
    errorText: "Error text",
  },
};
