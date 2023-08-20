import { Meta, StoryObj } from "@storybook/react";
import { LogoProps, PrimaryLogo } from "../index";

const meta: Meta = {
  title: "Components/Logo/Primary",
  component: PrimaryLogo,
};

export default meta;

type Story = StoryObj<LogoProps>;

export const Logo: Story = {};
