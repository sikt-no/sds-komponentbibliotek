import { Meta, StoryObj } from "@storybook/react";
import { Section, SectionProps } from "../Section";

const meta: Meta = {
  title: "Components/Section",
  component: Section,
};

export default meta;

type Story = StoryObj<SectionProps>;

export const Default: Story = {
  args: {
    headingText: "Header",
    children: "",
    link: "internet.com",
  },
};

export const WithLink: Story = {
  args: {
    ...Default.args,
    linkLabel: "Clickable label",
    linkHref: "www.internet.com",
  },
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    children: "Section content",
  },
};

export const WithLinkAndChildren: Story = {
  args: {
    ...Default.args,
    linkLabel: "Clickable label",
    linkHref: "www.internet.com",
    children: "Section content",
  },
};
