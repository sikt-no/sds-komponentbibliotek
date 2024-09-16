import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../../core/index";
import { Details, DetailsProps } from "../index";

const meta: Meta = {
  title: "Components/Details",
  component: Details,
};

export default meta;

type Story = StoryObj<DetailsProps>;

export const Default: Story = {
  args: {
    children: "Details",
    summary: "Summary",
    size: "large",
  },
};

export const Accordion: Story = {
  render: () => (
    <div data-testid="test">
      <Details
        summary={<Heading level="3">First Summary</Heading>}
        name="id"
        key={0}
      >
        First Details
      </Details>
      <Details
        summary={<Heading level="3">Second Summary</Heading>}
        name="id"
        key={1}
      >
        Second Details
      </Details>
      <Details
        summary={<Heading level="3">Third Summary</Heading>}
        name="id"
        key={2}
      >
        Third Details
      </Details>
    </div>
  ),
};
