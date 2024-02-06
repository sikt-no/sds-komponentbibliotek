import { ChangeEvent, useEffect, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch, ToggleSwitchProps } from "../index";

const meta: Meta = {
  title: "Components/Toggle/ToggleSwitch",
  component: ToggleSwitch,
};

export default meta;

type Story = StoryObj<ToggleSwitchProps>;

const Template: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const checked = event.target.checked;
      setIsChecked(checked);
      args.onChange && args.onChange(event);
    };

    useEffect(() => {
      setIsChecked(args.checked);
    }, [args.checked]);

    return (
      <ToggleSwitch {...args} onChange={handleChange} checked={isChecked} />
    );
  },
};

export const Default: Story = {
  ...Template,
  args: {
    label: "Label",
    checked: true,
  },
};

export const WithoutIcon: Story = {
  ...Template,
  args: {
    ...Default.args,
    showIcons: false,
  },
};

export const WithLabelFirst: Story = {
  ...Template,
  args: {
    ...Default.args,
    labelFirst: true,
  },
};

export const WithError: Story = {
  ...Template,
  args: { ...Default.args, error: true },
};
