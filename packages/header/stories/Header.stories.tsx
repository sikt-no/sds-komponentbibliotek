import { Meta, StoryObj } from "@storybook/react";
import {
  HeaderProps,
  Header,
  HeaderNav,
  HeaderNavProps,
  HeaderCollapsibleMenu,
} from "../index";
import "../header.pcss";
import { Button } from "@sikt/sds-button";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps & HeaderNavProps>;

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

export const WithCollapsibleMenu: Story = {
  args: {
    logoHref: "//sikt.no",
    children: [
      <HeaderCollapsibleMenu key={1}>
        <HeaderNav>
          <a href="#link1" aria-current="page">
            Link 1
          </a>
          <a href="#link2">Link 2</a>
        </HeaderNav>
        <Button>Button</Button>
      </HeaderCollapsibleMenu>,
    ],
  },
};
