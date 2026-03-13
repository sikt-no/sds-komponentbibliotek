import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Link, LinkProps } from "../index";

const meta: Meta = {
  title: "Core/Link",
  component: Link,
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<LinkProps>;

export const Default: Story = {
  args: {
    children: "Link",
    href: "#",
  },
};

export const Navigation: Story = {
  args: {
    ...Default.args,
    isNavigation: true,
  },
};

export const External: Story = {
  args: {
    ...Default.args,
    target: "_blank",
  },
};

export const Phone: Story = {
  args: {
    ...Default.args,
    href: "tel:#",
  },
};

export const Mail: Story = {
  args: {
    ...Default.args,
    href: "mailto:#",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <NavigateToNextIcon />,
  },
};
