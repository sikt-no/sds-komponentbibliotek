import { Meta, StoryObj } from "@storybook/react";
import { ButtonProps, Button } from "../index";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Button/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "subtle",
    size: "default",
    disabled: false,
    onClick: () => {
      alert("click handler");
    },
  },
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
