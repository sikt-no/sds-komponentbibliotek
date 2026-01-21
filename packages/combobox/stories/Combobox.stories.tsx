import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Combobox, type ComboboxProps } from "../index";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<ComboboxProps>;

export const Default: Story = {
  args: {
    label: "Choose flavor of ice cream",
    name: "icecream",
    options: [
      { label: "Coconut", value: "1" },
      { label: "Strawberries", value: "2" },
      { label: "Chocolate", value: "3" },
      { label: "Vanilla", value: "4", selected: true },
      { label: "Licorice", value: "5" },
      { label: "Pistachios", value: "6" },
      { label: "Mango", value: "7" },
      { label: "Hazelnut", value: "8" },
    ],
    onChange: (e, newValue) => {
      console.log(e, newValue);
    },
  },
};

export const Multiple: Story = {
  args: {
    ...Default.args,
    multiple: true,
  },
};

export const WithHelpText: Story = {
  args: {
    ...Default.args,
    helpText: "Helpful text",
  },
};
