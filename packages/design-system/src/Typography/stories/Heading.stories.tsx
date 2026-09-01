import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Heading1 as Component,
  Heading2 as Component2,
  Heading3 as Component3,
  Heading4 as Component4,
  Heading5 as Component5,
  Heading6 as Component6,
  HeadingProps,
} from "../index";

const meta: Meta = {
  title: "SD3/Typography/Heading",
  component: Component,
};

export default meta;

type Story = StoryObj<HeadingProps>;

export const Heading1: Story = {
  args: {
    children: "Typography",
    variant: "application",
    size: "xxl",
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

export const Heading2: Story = {
  args: {
    ...Heading1.args,
    size: "xl",
  },
  argTypes: {
    ...Heading1.argTypes,
  },
  render: (args) => <Component2 {...args} />,
};

export const Heading3: Story = {
  args: {
    ...Heading1.args,
    size: "lg",
  },
  argTypes: {
    ...Heading1.argTypes,
  },
  render: (args) => <Component3 {...args} />,
};

export const Heading4: Story = {
  args: {
    ...Heading1.args,
    size: "md",
  },
  argTypes: {
    ...Heading1.argTypes,
  },
  render: (args) => <Component4 {...args} />,
};

export const Heading5: Story = {
  args: {
    ...Heading1.args,
    size: "sm",
  },
  argTypes: {
    ...Heading1.argTypes,
  },
  render: (args) => <Component5 {...args} />,
};

export const Heading6: Story = {
  args: {
    ...Heading1.args,
    size: "xs",
  },
  argTypes: {
    ...Heading1.argTypes,
  },
  render: (args) => <Component6 {...args} />,
};
