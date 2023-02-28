import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { AbbreviationProps, Abbreviation } from "../index";

export default {
  title: "Components/Core/Abbreviation",
  component: Abbreviation,
  args: {
    children: "SDS",
    title: "Sikt Design System",
  },
} as Meta;

const Template: Story<AbbreviationProps> = (args) => <Abbreviation {...args} />;

export const Abbr: Story<AbbreviationProps> = Template.bind({});
