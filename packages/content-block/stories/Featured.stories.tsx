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
    buttonLabel: "Label",
    overline: "overline",
    heading: "Heading",
    text: "Text",
    imgPosition: "first",
    padding: "large",
    type: "horizontal",
    linkTarget: "#",
    altText: "This is an image",
  },
} as Meta;

const Template: Story<FeaturedProps> = (args) => <Featured {...args} />;

export const FeaturedBlock: Story<FeaturedProps> = Template.bind({});
