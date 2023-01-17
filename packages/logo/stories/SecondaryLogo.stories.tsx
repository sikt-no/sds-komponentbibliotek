import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LogoProps, SecondaryLogo as Logo } from "../Logo";

export default {
  title: "Components/Logo/Secondary",
  component: Logo,
} as Meta;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const SecondaryLogo: Story<LogoProps> = Template.bind({});
SecondaryLogo.args = {};
