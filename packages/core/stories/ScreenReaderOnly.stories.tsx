import { Meta, StoryObj } from "@storybook/react-vite";
import { ScreenReaderOnly, ScreenReaderOnlyProps } from "../index";

const meta: Meta = {
  title: "Core/ScreenReaderOnly",
  component: ScreenReaderOnly,
};

export default meta;

type Story = StoryObj<ScreenReaderOnlyProps>;

export const Focusable: Story = {
  args: {
    isFocusable: true,
    children: (
      <a href="#abc" className="sds-typography-link">
        Skip Link
      </a>
    ),
  },
};
