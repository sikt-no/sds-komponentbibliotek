import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Inline, InlineProps } from "../index";

const meta: Meta = {
  title: "Components/ContentBlock/Inline",
  component: Inline,
};

export default meta;

type Story = StoryObj<InlineProps>;

const Template: Story = {
  render: (args) => <Inline {...args} style={{ maxWidth: "500px" }} />,
};
export const InlineBlock: Story = {
  ...Template,
  args: {
    imgSrc: "https://picsum.photos/600/600",
    imgAlt: "Stock photo",
    linkText: "Label",
    linkHref: "#",
    headingText: "Heading",
    text: "Text",
  },
};
