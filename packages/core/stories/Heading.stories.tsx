import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HeadingProps, Heading1 } from "../index";

const meta: Meta = {
  title: "Components/Core/Heading",
  component: Heading1,
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const Heading: Story = {
  args: {
    children: "Heading",
  },
};
