import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
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

export const ExternalMultiline: Story = {
  args: {
    ...Default.args,
    isExternal: true,
    children: "The market fit team has been doing",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "10rem" }}>
        Can someone from the shareholder value team deep dive into this and
        report back? I want us to sunset the results-driven ecosystem and run up
        the flagpole the market fit. Once we take ownership of the robust ask,
        the rest is just headcount <Story /> a great job trying to table the
        deep dive.
      </div>
    ),
  ],
};
