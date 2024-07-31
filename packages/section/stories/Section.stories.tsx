import { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "../../button/index";
import { ArrowCircleRightIcon } from "../../icons/index";
import { Section, SectionProps } from "../index";

const meta: Meta = {
  title: "Components/Section",
  component: Section,
};

export default meta;

type Story = StoryObj<SectionProps>;

export const Default: Story = {
  args: {
    headingText: "Header",
    children: "Section content",
  },
};

export const WithCallToAction: Story = {
  args: {
    headingText: "Header",
    callToAction: (
      <ButtonLink variant="subtle" href="#" icon={<ArrowCircleRightIcon />}>
        Clickable label
      </ButtonLink>
    ),
  },
};
