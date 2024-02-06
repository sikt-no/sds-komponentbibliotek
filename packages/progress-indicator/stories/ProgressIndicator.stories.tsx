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

export const HideNumbers: Story = {
  args: {
    children: [
      <ProgressStep
        key={1}
        value={1}
        label="First step"
        status="complete"
        showNumber={false}
      />,
      <ProgressStep
        key={2}
        value={2}
        label="Second step"
        status="current"
        showNumber={false}
      />,
      <ProgressStep key={3} value={3} label="Third step" showNumber={false} />,
      <ProgressStep key={4} value={4} label="Fourth step" showNumber={false} />,
    ],
  },
};

export const HideLabels: Story = {
  args: {
    children: [
      <ProgressStep
        key={1}
        value={1}
        label="First step"
        status="complete"
        showLabel={false}
      />,
      <ProgressStep
        key={2}
        value={2}
        label="Second step"
        status="current"
        showLabel={false}
      />,
      <ProgressStep key={3} value={3} label="Third step" showLabel={false} />,
      <ProgressStep key={4} value={4} label="Fourth step" showLabel={false} />,
    ],
  },
};
