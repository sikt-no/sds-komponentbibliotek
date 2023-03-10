import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { Inline, InlineProps } from "../Inline";

export default {
  title: "Components/ContentBlock/Inline",
  component: Inline,
  args: {
    imgSrc: "https://picsum.photos/600/600",
    buttonLabel: "Label",
    heading: "Heading",
    text: "Text",
    padding: "medium",
    type: "horizontal",
  },
} as Meta;

const Template: Story<InlineProps> = (args) => <Inline {...args} />;

export const InlineBlock: Story<InlineProps> = Template.bind({});
