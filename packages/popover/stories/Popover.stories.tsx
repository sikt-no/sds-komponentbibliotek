import { Meta, StoryObj } from "@storybook/react-webpack5";
import { Popover, PopoverProps, Tooltip as TooltipComp } from "../index";

const meta: Meta = {
  title: "Components/Popover",
  component: Popover,
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

export const Tooltip: Story = {
  args: {
    children: "Tooltip",
    target: "Target",
  },
  render: (args) => <TooltipComp {...args} />,
};
