import React from "react";
import { Meta, Story } from "@storybook/react";
import { Featured } from "../index";
import { FeaturedProps } from "../index";

export default {
  title: "Components/ContentBlock/Featured",
  component: Featured,
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
  tags: ["autodocs"],
} as Meta;

const Template: Story<FeaturedProps> = (args) => (
  <Featured {...args} style={{ maxWidth: "500px" }} />
);

export const FeaturedBlock: Story<FeaturedProps> = Template.bind({});
