import React from "react";
import { Meta, Story } from "@storybook/react";
import { LogoProps, PrimaryLogo } from "../index";

export default {
  title: "Components/Logo/Primary",
  component: PrimaryLogo,
  tags: ["autodocs"],
} as Meta;

const Template: Story<LogoProps> = (args) => <PrimaryLogo {...args} />;

export const Logo: Story<LogoProps> = Template.bind({});
