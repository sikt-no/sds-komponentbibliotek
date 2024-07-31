import { Meta, StoryObj } from "@storybook/react";
import { Abbreviation, AbbreviationProps } from "../index";

const meta: Meta = {
  title: "Core/Abbreviation",
  component: Abbreviation,
};

export default meta;

type Story = StoryObj<AbbreviationProps>;

export const Abbr: Story = {
  args: {
    children: "SDS",
    title: "Sikt Design System",
  },
};
