import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LogoProps, PrimaryLogo } from "../Logo";

export default {
  title: "Components/Logo/Primary",
  component: PrimaryLogo,
} as Meta;

const Template: Story<LogoProps> = (args) => <PrimaryLogo {...args} />;

export const Logo: Story<LogoProps> = Template.bind({});
