import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { FooterProps, Footer } from "../index";

export default {
  title: "Components/Footer",
  component: Footer,
  args: {
    lang: "nb",
  },
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default: Story<FooterProps> = Template.bind({});

export const WithContent: Story<FooterProps> = Template.bind({});
WithContent.args = {
  children: [
    <div key={0}>
      <h3>Header</h3>
      <ul>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
      </ul>
    </div>,
    <div key={1}>
      <h3>Header</h3>
      <ul>
        <li>
          <a href="#link">Link</a>
        </li>
      </ul>
    </div>,
  ],
};
