import { Meta, StoryObj } from "@storybook/react-webpack5";
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
    helpText: "Helpful text",
    helpTextId: "input-help-text",
    children: <input id="input" aria-describedby="input-help-text" />,
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    helpTextId: "input-help-text",
    errorText: "Error: Message",
    errorTextId: "input-error-text",
    children: (
      <input
        id="input"
        aria-describedby="input-help-text input-error-text"
        aria-invalid
        aria-errormessage="input-error-text"
      />
    ),
  },
};
