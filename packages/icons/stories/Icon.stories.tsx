import { Meta, StoryObj } from "@storybook/react-vite";
import {
  NavigateToNextIcon,
  IconProps,
  LinkedInLogo as LinkedInLogoIcon,
  LogoIconsProps,
  SpinnerIcon,
} from "../index";

const meta = {
  title: "Components/Icons/Icon",
  component: NavigateToNextIcon,
} satisfies Meta<typeof NavigateToNextIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

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
