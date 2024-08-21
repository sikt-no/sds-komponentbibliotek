import { Meta, StoryObj } from "@storybook/react";
import { Popover, PopoverProps } from "../index";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
};

export default meta;

type Story = StoryObj<PopoverProps>;

export const Default: Story = {
  args: {
    children: "Popover",
    target: "Target",
  },
};

export const Abbreviation: Story = {
  args: {
    children: <abbr>SDS</abbr>,
    target: "Sikt Design System",
  },
};
