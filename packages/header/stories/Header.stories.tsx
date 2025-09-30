import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Header, HeaderProps } from "../index";
import "./header-stories.css";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {
    logoHref: "//sikt.no",
  },
};

export const WithProductName: Story = {
  args: {
    ...Default.args,
    logoText: "My product",
  },
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    children: [
      <div key={0} className="mobile-only">
        Bar
      </div>,
      <div key={1}>Foo</div>,
    ],
  },
};
