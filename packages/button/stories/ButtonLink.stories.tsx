import { Meta, StoryObj } from "@storybook/react-webpack5";
import { NavigateToNextIcon, NavigateToPreviousIcon } from "../../icons/index";
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
    icon: <NavigateToNextIcon />,
  },
};

export const IconLeft: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToPreviousIcon />,
    iconVariant: "left",
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToNextIcon />,
    iconVariant: "only",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};
