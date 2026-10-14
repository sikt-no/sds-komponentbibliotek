import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { InputChip, InputChipProps } from "../index";

const meta: Meta<InputChipProps> = {
  title: "SD3/Chip/InputChip",
  component: InputChip,
  parameters: {
    docs: {
      description: {
        component: "Dismissible chip. Consumer removes it on click.",
      },
    },
  },
  argTypes: {
    children: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<InputChipProps>;

export const Default: Story = {
  args: { children: "Oslo" },
};

export const Multiple: Story = {
  render: () => {
    const [chips, setChips] = useState(["Oslo", "Bergen", "Trondheim"]);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {chips.map((label) => (
          <InputChip
            key={label}
            aria-label={`Fjern ${label}`}
            onClick={() => {
              setChips((prev) => prev.filter((c) => c !== label));
            }}
          >
            {label}
          </InputChip>
        ))}
      </div>
    );
  },
};
