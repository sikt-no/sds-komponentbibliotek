import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Section, SectionProps } from "../index";
import { ButtonLink } from "../../button/index";
import { ArrowCircleRightIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Section",
  component: Section,
};

export default meta;

type Story = StoryObj<SectionProps>;

export const Default: Story = {
  args: {
    headingText: "Header",
    children: "",
  },
};

export const WithChildren: Story = {
  args: {
    ...Default.args,
    children: "Section content",
  },
};

export const WithCallToAction: Story = {
  args: {
    ...Default.args,
    callToAction: (
      <ButtonLink variant="subtle" href="#" icon={<ArrowCircleRightIcon />}>
        Clickable label
      </ButtonLink>
    ),
  },
};
