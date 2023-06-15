import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ParagraphProps, Paragraph } from "../index";

const meta: Meta = {
  title: "Components/Core/Paragraph",
  component: Paragraph,
};

export default meta;

type Story = StoryObj<ParagraphProps>;

export const Regular: Story = {
  args: {
    children: "Paragraph",
    typographyType: "regular",
  },
};

export const AsSpan: Story = {
  args: {
    ...Regular.args,
    as: "span",
  },
};
