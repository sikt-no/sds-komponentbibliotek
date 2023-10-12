import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../index";
import { CardProps } from "../index";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<CardProps>;

const Template: Story = {
  render: (args) => <Card {...args} style={{ maxWidth: "500px" }} />,
};

export const Default: Story = {
  ...Template,
  args: {
    imgSrc: "https://picsum.photos/600/600",
    imgAlt: "This is an image",
    linkText: "Label",
    linkHref: "#",
    overlineText: "overline",
    headingText: "Heading",
    text: "Text",
  },
};
