import React from "react";
import { Meta, Story } from "@storybook/react";
import { HeadingProps, Heading1 } from "../index";

export default {
  title: "Components/Core/Heading",
  component: Heading1,
  args: {
    children: "Heading",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading1 {...args} />;

export const Heading: Story<HeadingProps> = Template.bind({});
