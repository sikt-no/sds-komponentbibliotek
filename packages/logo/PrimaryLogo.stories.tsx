import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LogoProps, PrimaryLogo as Logo } from "./Logo";

export default {
  title: "Components/Logo/Primary",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const PrimaryLogo: Story<LogoProps> = Template.bind({});
PrimaryLogo.args = {};
