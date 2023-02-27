import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { HeadingProps, Heading1 } from "../index";

export default {
  title: "Components/Core/Heading",
  component: Heading1,
  args: {
    children: "Heading",
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading1 {...args} />;

export const Heading: Story<HeadingProps> = Template.bind({});
