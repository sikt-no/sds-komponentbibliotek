import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { LogoProps, SecondaryLogo } from "../Logo";

export default {
  title: "Components/Logo/Secondary",
  component: SecondaryLogo,
} as Meta;

const Template: Story<LogoProps> = (args) => <SecondaryLogo {...args} />;

export const Logo: Story<LogoProps> = Template.bind({});
