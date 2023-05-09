import React from "react";
import { Meta, Story } from "@storybook/react";
import { AbbreviationProps, Abbreviation } from "../index";

export default {
  title: "Components/Core/Abbreviation",
  component: Abbreviation,
  args: {
    children: "SDS",
    title: "Sikt Design System",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<AbbreviationProps> = (args) => <Abbreviation {...args} />;

export const Abbr: Story<AbbreviationProps> = Template.bind({});
