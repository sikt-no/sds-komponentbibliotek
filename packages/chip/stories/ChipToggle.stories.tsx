import { Meta, StoryObj } from "@storybook/react-vite";
import { MouseEvent as ReactMouseEvent, useEffect, useState } from "react";
import { action } from "storybook/actions";
import { ChipToggle, ChipToggleProps } from "../index";

const meta: Meta = {
  title: "Components/Chip/Toggle",
  component: ChipToggle,
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

type Story = StoryObj<ChipToggleProps>;

const Template: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleClick = (event: ReactMouseEvent<HTMLButtonElement>) => {
      setIsChecked(!isChecked);
      args.onClick?.(event);
    };

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return <ChipToggle {...args} onClick={handleClick} checked={isChecked} />;
  },
};

export const Default: Story = {
  ...Template,
  args: {
    children: "Toggle",
    onClick: action("onClick"),
  },
};
