import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterChip, FilterChipProps } from "../index";

const meta: Meta<FilterChipProps> = {
  title: "SD3/Chip/FilterChip",
  component: FilterChip,
  parameters: {
    docs: {
      description: {
        component: "Toggle chip. Consumer flips `pressed` on click.",
      },
    },
  },
  argTypes: {
    children: { control: { type: "text" } },
  },
};

export default meta;

type Story = StoryObj<FilterChipProps>;

export const Default: Story = {
  args: { children: "Oslo" },
};

export const Multiple: Story = {
  render: () => {
    const [pressed, setPressed] = useState<Record<string, boolean>>({});
    const labels = ["Oslo", "Bergen", "Trondheim"];
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {labels.map((label) => (
          <FilterChip
            key={label}
            aria-label={`Filtrer på ${label}`}
            pressed={pressed[label] ?? false}
            onClick={() => {
              setPressed((prev) => ({ ...prev, [label]: !prev[label] }));
            }}
          >
            {label}
          </FilterChip>
        ))}
      </div>
    );
  },
};
