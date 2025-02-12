import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useEffect, useState } from "react";
import { ToggleButton, ToggleButtonProps } from "../index";

const meta: Meta = {
  title: "Components/Toggle/ToggleButton",
  component: ToggleButton,
};

export default meta;

type Story = StoryObj<ToggleButtonProps>;

const Template: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      args.onChange?.(event);
    };

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <ToggleButton {...args} onChange={handleChange} checked={isChecked} />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    checked: false,
    label: "Label",
  },
};
