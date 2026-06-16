import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { TextAreaProps, TextArea } from "../index";

const meta: Meta = {
  title: "Components/Input/TextArea",
  component: TextArea,
};

export default meta;

type Story = StoryObj<TextAreaProps>;

export const Default: Story = {
  args: {
    label: "Label",
  },
};

export const WithRows: Story = {
  args: {
    ...Default.args,
    rows: 10,
  },
};

export const WithCustomIcon: Story = {
  args: {
    ...Default.args,
    icon: <InfoIcon />,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
    errorText: "Error: Message",
  },
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    value: "Value",
    readOnly: true,
    helpText: "Readonly",
  },
};
