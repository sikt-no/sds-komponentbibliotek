import type { Meta, StoryObj } from "@storybook/react-vite";

import { InlineMessage, InlineMessageProps } from "../index";

const meta: Meta<InlineMessageProps> = {
  title: "SD3/InlineMessage",
  component: InlineMessage,
  parameters: {
    docs: {
      description: {
        component:
          "Short feedback message shown next to a form field or action.",
      },
    },
  },
  argTypes: {
    children: {
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
  },
};

export default meta;

type Story = StoryObj<InlineMessageProps>;

export const Default: Story = {
  args: { children: "Inline message" },
};

export const Wrapping: Story = {
  args: {
    children:
      "Passordet må være minst 12 tegn og inneholde både store og små bokstaver, tall og et spesialtegn.",
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "20rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "Wrapped lines flow under the text, not the icon.",
      },
    },
  },
};
