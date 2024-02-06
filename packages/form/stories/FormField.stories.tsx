import { Meta, StoryObj } from "@storybook/react";
import { FormField, FormFieldProps } from "../index";

const meta: Meta = {
  title: "Components/Form/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<FormFieldProps>;

export const Default: Story = {
  args: {
    label: "Label",
    htmlFor: "input",
    children: <input id="input" />,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Help text",
    helpTextId: "help-text",
    children: <input id="input" aria-describedby="help-text" />,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    errorText: "Error!",
    children: (
      <input
        id="input"
        aria-describedby="help-text"
        aria-invalid
        aria-errormessage="help-text"
      />
    ),
  },
};
