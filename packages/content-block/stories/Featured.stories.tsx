import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Featured } from "../index";
import { FeaturedProps } from "../index";

const meta: Meta = {
  title: "Components/ContentBlock/Featured",
  component: Featured,
};

export default meta;

type Story = StoryObj<FeaturedProps>;

const Template: Story = {
  render: (args) => <Featured {...args} style={{ maxWidth: "500px" }} />,
};

export const FeaturedBlock: Story = {
  ...Template,
  args: {
    imgSrc: "https://picsum.photos/600/600",
    imgAlt: "This is an image",
    imgPosition: "first",
    linkText: "Label",
    linkHref: "#",
    overlineText: "overline",
    headingText: "Heading",
    text: "Text",
  },
};
