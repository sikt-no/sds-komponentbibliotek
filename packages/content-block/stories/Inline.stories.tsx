import React from "react";
import { Meta, Story } from "@storybook/react";
import { Inline, InlineProps } from "../index";

export default {
  title: "Components/ContentBlock/Inline",
  component: Inline,
  args: {
    imgSrc: "https://picsum.photos/600/600",
    imgAlt: "Stock photo",
    linkText: "Label",
    linkHref: "#",
    headingText: "Heading",
    text: "Text",
    type: "horizontal",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<InlineProps> = (args) => (
  <Inline {...args} style={{ maxWidth: "500px" }} />
);

export const InlineBlock: Story<InlineProps> = Template.bind({});
