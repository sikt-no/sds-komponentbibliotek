import { Meta, StoryObj } from "@storybook/react";
import {
  ArrowRightIcon,
  IconProps,
  LinkedInLogo as LinkedInLogoIcon,
  LogoIconsProps,
  SpinnerIcon,
} from "../index";

const meta: Meta = {
  title: "Components/Icons/Icon",
  component: ArrowRightIcon,
};

export default meta;

type Story = StoryObj<IconProps | LogoIconsProps>;

export const ArrowRight: Story = {
  render: (args: IconProps) => (
    <ArrowRightIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
  ),
  args: {},
};

export const Spinner: Story = {
  render: (args: IconProps) => (
    <SpinnerIcon {...args} style={{ fontSize: "calc(32rem / 16)" }} />
  ),
  args: {},
};

export const LinkedInLogo: Story = {
  argTypes: {
    color: {
      options: ["white", "black"],
      control: { type: "radio" },
    },
  },
  render: (args: LogoIconsProps) => (
    <a href="#linkedin">
      Linkedin
      <LinkedInLogoIcon style={{ fontSize: "calc(32rem / 16)" }} {...args} />
    </a>
  ),
};
