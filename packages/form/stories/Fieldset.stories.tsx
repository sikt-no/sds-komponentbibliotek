import { Meta, StoryObj } from "@storybook/react";
import { Fieldset, FieldsetProps } from "../index";
import { CheckboxInput } from "../../checkbox";

const meta: Meta = {
  title: "Components/Form/Fieldset",
  component: Fieldset,
};

export default meta;

type Story = StoryObj<FieldsetProps>;

const Template: Story = {
  args: {
    legend: "Legend",
    children: [
      <CheckboxInput
        key={1}
        isChecked
        label="Checkbox label"
        onChange={() => null}
      />,
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
    ...Template.args,
    legend: "Legend",
    errorText: "Error text",
    helpText: undefined,
  },
};
