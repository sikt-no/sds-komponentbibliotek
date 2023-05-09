import React from "react";
import { Meta, Story } from "@storybook/react";
import { ScreenReaderOnlyProps, ScreenReaderOnly } from "../index";

export default {
  title: "Components/Core/ScreenReaderOnly",
  component: ScreenReaderOnly,
  args: {
    children: "ScreenReaderOnly",
    isFocusable: true,
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ScreenReaderOnlyProps> = (args) => (
  <ScreenReaderOnly {...args} />
);

export const Focusable: Story<ScreenReaderOnlyProps> = Template.bind({});
Focusable.args = {
  children: (
    <a href="#abc" className="sds-typography-link">
      Skip Link
    </a>
  ),
};
