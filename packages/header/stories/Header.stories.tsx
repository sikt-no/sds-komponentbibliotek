import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { HeaderProps, Header } from "../index";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {},
};

export const WithLink: Story = {
  args: {
    logoHref: "//sikt.no",
  },
};

export const WithText: Story = {
  args: {
    logoHref: "//sikt.no",
    logoText: "Hello, World!",
  },
};

export const WithContent: Story = {
  args: {
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
  },
};
