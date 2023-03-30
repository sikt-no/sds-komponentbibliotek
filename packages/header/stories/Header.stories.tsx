import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { HeaderProps, Header } from "../index";

export default {
  title: "Components/Header",
  component: Header,
  args: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default: Story<HeaderProps> = Template.bind({});

export const WithLink: Story<HeaderProps> = Template.bind({});
WithLink.args = {
  logoHref: "//sikt.no",
};

export const WithText: Story<HeaderProps> = Template.bind({});
WithText.args = {
  logoHref: "//sikt.no",
  logoText: "Hello, World!",
};

export const WithContent: Story<HeaderProps> = Template.bind({});
WithContent.args = {
  logoHref: "//sikt.no",
  children: [
    <div key={0}>
      <a href="#link" style={{ padding: "0 10px" }}>
        Link
      </a>
      <a href="#link" style={{ padding: "0 10px" }}>
        Link
      </a>
    </div>,
    <div key={1} style={{ display: "flex", justifyContent: "end" }}>
      <a href="#link">Link</a>
    </div>,
  ],
};
