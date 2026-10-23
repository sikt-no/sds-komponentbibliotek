import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Fieldset } from "../../Fieldset";
import { Radio, type RadioProps } from "../index";

const meta: Meta<RadioProps> = {
  title: "SD3/Radio/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          "Single radio control with an inline label. Give every radio in a group the same `name`.",
      },
    },
  },
  argTypes: {
    children: { control: { type: "text" } },
  },
  args: {
    name: "cities",
    children: "Oslo",
  },
};

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const Critical: Story = {
  args: {
    "aria-invalid": true,
  },
};

export const CriticalChecked: Story = {
  args: {
    "aria-invalid": true,
    defaultChecked: true,
  },
};

export const WithFieldset: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Grouped under a `Fieldset` with a legend. `Fieldset.Content` owns the stacking and gap.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("oslo");
    const options = [
      { value: "oslo", label: "Oslo" },
      { value: "bergen", label: "Bergen" },
      { value: "trondheim", label: "Trondheim" },
    ];
    return (
      <Fieldset>
        <Fieldset.Legend>City</Fieldset.Legend>
        <Fieldset.Content>
          {options.map((o) => (
            <Radio
              key={o.value}
              name="city"
              value={o.value}
              checked={value === o.value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              {o.label}
            </Radio>
          ))}
        </Fieldset.Content>
      </Fieldset>
    );
  },
};
