import { Meta, StoryObj } from "@storybook/react";
import { LogoProps, Logo } from "../index";

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
