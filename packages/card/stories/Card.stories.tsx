import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../index";
import { CardProps } from "../index";
import { ButtonLink } from "../../button/index";
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
    image: (
      <picture>
        <source
          srcSet="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAADklEQVR42mNk+A+EQAAADAYCAElV3d0AAAAASUVORK5CYII="
          type="image/avif"
        />
        <source
          srcSet="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAADklEQVR42mNk+A+EQAAADAYCAElV3d0AAAAASUVORK5CYII="
          type="image/webp"
        />
        <img
          src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAADklEQVR42mNk+A+EQAAADAYCAElV3d0AAAAASUVORK5CYII="
          alt="Green color"
        />
      </picture>
    ),
    overlineText: "overline",
    headingText: "Heading",
    leadText: "Lead",
    children: <>Text</>,
    callToAction: (
      <ButtonLink variant="subtle" href="#" icon={<ArrowCircleRightIcon />}>
        Clickable label
      </ButtonLink>
    ),
  },
};
