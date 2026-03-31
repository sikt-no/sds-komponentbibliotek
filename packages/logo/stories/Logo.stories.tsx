import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Logo } from "../index";

const meta = {
  title: "Components/Logo",
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "primary",
  },
};

export const Product: Story = {
  args: {
    productName: "My product",
  },
};
