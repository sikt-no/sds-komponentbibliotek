import React from "react";
import { Meta, Story } from "@storybook/react";
import { Section, SectionProps } from "../Section";

export default {
  title: "Components/Section",
  component: Section,
  args: {
    headingText: "Header",
    children: "",
    link: "internet.com",
  },
  tags: ["autodocs"],
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default: Story<SectionProps> = Template.bind({});
export const WithLink: Story<SectionProps> = Template.bind({});
WithLink.args = {
  linkLabel: "Clickable label",
  linkHref: "www.internet.com",
};

export const WithChildren: Story<SectionProps> = Template.bind({});
WithChildren.args = {
  children: "Section content",
};

export const WithLinkAndChildren: Story<SectionProps> = Template.bind({});
WithLinkAndChildren.args = {
  linkLabel: "Clickable label",
  linkHref: "www.internet.com",
  children: "Section content",
};
