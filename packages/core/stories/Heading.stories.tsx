import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { HeadingProps, Heading1 } from "../index";

export default {
  title: "Components/Core/Heading",
  component: Heading1,
  args: {
    children: "Heading",
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading1 {...args} />;

export const Page: Story<HeadingProps> = Template.bind({});
Page.args = {
  headingType: "page",
};

export const Section: Story<HeadingProps> = Template.bind({});
Section.args = {
  headingType: "section",
};

export const Component: Story<HeadingProps> = Template.bind({});
Component.args = {
  headingType: "component",
};

export const Group: Story<HeadingProps> = Template.bind({});
Group.args = {
  headingType: "group",
};

export const Paragraph: Story<HeadingProps> = Template.bind({});
Paragraph.args = {
  headingType: "paragraph",
};

export const Overline: Story<HeadingProps> = Template.bind({});
Overline.args = {
  headingType: "overline",
};
