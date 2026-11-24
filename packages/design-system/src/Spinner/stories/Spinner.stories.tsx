import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner, type SpinnerProps } from "../index";

const meta: Meta<SpinnerProps> = {
  title: "SD3/Spinner",
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: "Signals that work is in progress.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<SpinnerProps>;

export const Default: Story = {};

export const Sizing: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "var(--sd3-space-component-400)",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "var(--sd3-typography-size-text-body-md)" }}>
        <Spinner {...args} />
      </span>
      <span style={{ fontSize: "var(--sd3-typography-size-application-lg)" }}>
        <Spinner {...args} />
      </span>
      <span style={{ fontSize: "var(--sd3-typography-size-editorial-md)" }}>
        <Spinner {...args} />
      </span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Sizes with the parent `font-size`. `width`/`height` override.",
      },
    },
  },
};
