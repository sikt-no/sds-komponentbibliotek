import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  HeaderProps,
  Header,
  HeaderNav,
  HeaderNavProps,
  HeaderCollapsibleMenu,
} from "../index";
import "../header.pcss";
import "../../tabs/tabs.pcss";
import "../../tabs/tab-link.pcss";
import { Button } from "@sikt/sds-button";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps & HeaderNavProps>;

const Template: Story = {
  render: (args) => {
    return (
      <Header {...args}>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="https://sikt.no">Link 1</a>
          <a href="https://sikt.no">Link 2</a>
        </div>
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <a href="https://sikt.no">Link 3</a>
        </div>
      </Header>
    );
  },
};

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
  ...Template,
  args: {
    logoHref: "//sikt.no",
  },
};

export const WithHamburgerMenu: Story = {
  args: {
    logoHref: "//sikt.no",
    children: [
      <HeaderCollapsibleMenu key={1}>
        <HeaderNav>
          <a href="https://sikt.no">Link 1</a>
          <a href="https://sikt.no">Link 2</a>
        </HeaderNav>
        <Button>Button</Button>
      </HeaderCollapsibleMenu>,
    ],
  },
};
