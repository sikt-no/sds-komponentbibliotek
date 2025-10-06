import { Meta, StoryObj } from "@storybook/react-webpack5";
import {
  ProgressIndicator,
  ProgressIndicatorProps,
  ProgressStep,
  ProgressStepButton,
  ProgressStepLink,
} from "../index";

const meta: Meta = {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
};

export default meta;

type Story = StoryObj<ProgressIndicatorProps>;

export const Default: Story = {
  args: {
    heading: <>Second step</>,
    currentIndex: 1,
    children: [
      <ProgressStep key={1}>
        <ProgressStepButton
          onClick={() => {
            console.log("click");
          }}
        >
          First step
        </ProgressStepButton>
      </ProgressStep>,
      <ProgressStep key={2}>
        <ProgressStepLink href="#">Second step</ProgressStepLink>
      </ProgressStep>,
      <ProgressStep key={3}>Third step</ProgressStep>,
      <ProgressStep key={4}>Fourth step</ProgressStep>,
    ],
  },
};

export const WithoutDetails: Story = {
  args: {
    heading: <>Second step</>,
    currentIndex: 1,
    count: 4,
  },
};

export const Expandable: Story = {
  args: {
    heading: <>Second step</>,
    currentIndex: 1,
    expandable: true,
    children: [
      <ProgressStep key={1}>
        <ProgressStepButton
          onClick={() => {
            console.log("click");
          }}
        >
          First step
        </ProgressStepButton>
      </ProgressStep>,
      <ProgressStep key={2}>
        <ProgressStepLink href="#">Second step</ProgressStepLink>
      </ProgressStep>,
      <ProgressStep key={3}>Third step</ProgressStep>,
      <ProgressStep key={4}>Fourth step</ProgressStep>,
    ],
  },
};
