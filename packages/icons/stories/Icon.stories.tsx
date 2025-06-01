import { Meta, StoryObj } from "@storybook/react";
import {
  NavigateToNextIcon,
  IconProps,
  LinkedInLogo as LinkedInLogoIcon,
  LogoIconsProps,
  SpinnerIcon,
} from "../index";

const meta: Meta = {
  title: "Components/Icons/Icon",
  component: NavigateToNextIcon,
};

export default meta;

type Story = StoryObj<IconProps | LogoIconsProps>;

export const ArrowRight: Story = {
  render: (args: IconProps) => (
    <NavigateToNextIcon {...args} style={{ fontSize: "2rem" }} />
  ),
  args: {},
};

export const Spinner: Story = {
  render: (args: IconProps) => (
    <SpinnerIcon {...args} style={{ fontSize: "2rem" }} />
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
      <LinkedInLogoIcon style={{ fontSize: "2rem" }} {...args} />
    </a>
  ),
};
