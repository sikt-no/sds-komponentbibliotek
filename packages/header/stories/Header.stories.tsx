import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Header, HeaderProps } from "../index";

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

export const WithSlots: Story = {
  args: {
    ...Default.args,
    leftSlot: <div>Foo</div>,
    rightSlot: <div>Bar</div>,
    children: <div>Baz</div>,
  },
};
