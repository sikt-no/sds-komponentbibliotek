import React from "react";
import { Meta, Story } from "@storybook/react";
import { ParagraphProps, Paragraph } from "../index";

export default {
  title: "Components/Core/Paragraph",
  component: Paragraph,
  args: {
    children: "Paragraph",
    typographyType: "regular",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Small: Story<ParagraphProps> = Template.bind({});

export const AsSpan: Story<ParagraphProps> = Template.bind({});
AsSpan.args = {
  as: "span",
};
