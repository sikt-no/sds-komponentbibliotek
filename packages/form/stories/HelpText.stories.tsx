import { Meta, StoryObj } from "@storybook/react-webpack5";
import { HelpText, HelpTextProps } from "../index";

const meta: Meta = {
  title: "Components/Form/HelpText",
  component: HelpText,
};

export default meta;

type Story = StoryObj<HelpTextProps>;

export const Default: Story = {
  args: {
    children: "Help text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};
