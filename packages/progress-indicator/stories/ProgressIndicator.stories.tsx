import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  ProgressIndicator,
  ProgressStep,
  ProgressIndicatorProps,
  ProgressStepProps,
} from "../index";

const meta: Meta = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<ProgressIndicatorProps & ProgressStepProps>;

export const Default: Story = {
  args: {
    children: [
      <ProgressStep key={1} value={1} label="First step" status="complete" />,
      <ProgressStep key={2} value={2} label="Second step" status="current" />,
      <ProgressStep key={3} value={3} label="Third step" />,
      <ProgressStep key={4} value={4} label="Fourth step" />,
    ],
  },
};
