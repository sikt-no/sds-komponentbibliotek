import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ScreenReaderOnlyProps, ScreenReaderOnly } from "../index";

const meta: Meta = {
  title: "Components/Core/ScreenReaderOnly",
  component: ScreenReaderOnly,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ScreenReaderOnlyProps>;

export const Focusable: Story = {
  args: {
    isFocusable: true,
    children: (
      <a href="#abc" className="sds-typography-link">
        Skip Link
      </a>
    ),
  },
};
