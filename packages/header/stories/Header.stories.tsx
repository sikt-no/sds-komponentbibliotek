import { Link } from "@sikt/sds-core";
import { ApplicationStatus } from "@sikt/sds-message";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Header, HeaderProps } from "../index";
import "@sikt/sds-message/dist/index.css";

const meta: Meta = {
  title: "Components/Header",
  component: Header,
};

export default meta;

type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {
    logoLink: <Link href="//sikt.no">will be overwritten</Link>,
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

export const WithApplicationStatus: Story = {
  args: {
    ...Default.args,
    applicationStatus: (
      <ApplicationStatus variant="warning">Status message</ApplicationStatus>
    ),
  },
};
