import { Meta, StoryObj } from "@storybook/react";
import { LogoProps, SecondaryLogo } from "../index";

const meta: Meta = {
  title: "Components/Logo/Secondary",
  component: SecondaryLogo,
};

export default meta;

type Story = StoryObj<LogoProps>;

export const Logo: Story = {};
