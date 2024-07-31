import { Meta, StoryObj } from "@storybook/react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../icons/index";
import { ButtonLink, ButtonLinkProps } from "../index";

const meta: Meta = {
  title: "Components/Button/Link",
  component: ButtonLink,
};

export default meta;

type Story = StoryObj<ButtonLinkProps>;

export const Default: Story = {
  args: { children: "Button Link", href: "#link" },
};

export const IconRight: Story = {
  args: {
    ...Default.args,
    icon: <ArrowRightIcon />,
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <ArrowLeftIcon />,
    iconVariant: "left",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    icon: <ArrowRightIcon />,
    iconVariant: "only",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
