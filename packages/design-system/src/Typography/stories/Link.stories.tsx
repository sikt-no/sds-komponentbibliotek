import { NavigateToNextIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Link as Component, LinkProps as ComponentProps } from "../index";

const meta: Meta = {
  title: "SD3/Typography/Link",
  component: Component,
};

export default meta;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {
  args: {
    children: "Typography",
    href: "#",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
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
    children: (
      <>
        Typography
        <Component.Icon>
          <NavigateToNextIcon />
        </Component.Icon>
      </>
    ),
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
