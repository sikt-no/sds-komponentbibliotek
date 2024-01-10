import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../index";
import { CardProps } from "../index";
import { ButtonLink } from "../../button/ButtonLink";
import { ArrowCircleRightIcon } from "../../icons/index";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
};

export default meta;

type Story = StoryObj<CardProps>;

const Template: Story = {
  render: (args) => <Card {...args} style={{ maxWidth: "500px" }} />,
};

export const Default: Story = {
  ...Template,
  args: {
    imgSrc:
      "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAADklEQVR42mNk+A+EQAAADAYCAElV3d0AAAAASUVORK5CYII=",
    imgAlt: "This is an image",
    overlineText: "overline",
    headingText: "Heading",
    children: <>Text</>,
    callToAction: (
      <ButtonLink variant="subtle" href="#" icon={<ArrowCircleRightIcon />}>
        Clickable label
      </ButtonLink>
    ),
  },
};
