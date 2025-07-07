import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Logo, LogoProps } from "../index";

const meta: Meta = {
  title: "Components/Logo",
  component: Logo,
};

export default meta;

type Story = StoryObj<LogoProps>;

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
