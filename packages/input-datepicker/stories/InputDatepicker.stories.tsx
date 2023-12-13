import { Meta, StoryObj } from "@storybook/react";
import { parseDate } from "@internationalized/date";
import { InputDatepicker, InputDatepickerProps } from "../index";

const meta: Meta = {
  title: "Components/InputDatePicker",
  component: InputDatepicker,
};

export default meta;

type Story = StoryObj<InputDatepickerProps>;

export const Default: Story = {
  args: {
    label: "Label",
    onChange: (e) => console.log(e),
  },
};

export const WithDate: Story = {
  args: {
    ...Default.args,
    value: parseDate(new Date().toISOString().substring(0, 10)),
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

export const WithCustomLocale: Story = {
  args: {
    ...Default.args,
    lang: "en-GB",
  },
};
