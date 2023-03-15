import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Featured } from "../Featured";
import { FeaturedProps } from "../Featured";

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
} as Meta;

const Template: Story<FeaturedProps> = (args) => (
  <Featured {...args} style={{ maxWidth: "500px" }} />
);

export const FeaturedBlock: Story<FeaturedProps> = Template.bind({});
