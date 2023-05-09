import React from "react";
import { Meta, Story } from "@storybook/react";
import { LogoProps, SecondaryLogo } from "../index";

export default {
  title: "Components/Logo/Secondary",
  component: SecondaryLogo,
  tags: ["autodocs"],
} as Meta;

const Template: Story<LogoProps> = (args) => <SecondaryLogo {...args} />;

export const Logo: Story<LogoProps> = Template.bind({});
