import { Meta, StoryObj } from "@storybook/react-webpack5";
import { HelpText } from "../index";

const meta = {
  title: "Components/Form/HelpText",
  component: HelpText,
} satisfies Meta<typeof HelpText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Helpful text",
  },
};

export const WithError: Story = {
  args: {
    ...Default.args,
    children: "Error: Message",
    error: true,
  },
};
