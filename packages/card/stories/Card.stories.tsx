import { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonLink } from "../../button/index";
import { NavigateToNextAltIcon } from "../../icons/index";
import { Card, CardProps } from "../index";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
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
          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAD0lEQVR4AWK6d+/efxAGAAAA//8tpnlSAAAABklEQVQDACAZBzUcVQ5LAAAAAElFTkSuQmCC"
          type="image/avif"
        />
        <source
          srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAD0lEQVR4AWK6d+/efxAGAAAA//8tpnlSAAAABklEQVQDACAZBzUcVQ5LAAAAAElFTkSuQmCC"
          type="image/webp"
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAYAAAD0In+KAAAAD0lEQVR4AWK6d+/efxAGAAAA//8tpnlSAAAABklEQVQDACAZBzUcVQ5LAAAAAElFTkSuQmCC"
          alt="Placeholder"
        />
      </picture>
    ),
    overlineText: "overline",
    headingText: "Heading",
    leadText: "Lead",
    children: <>Text</>,
    callToAction: (
      <ButtonLink variant="subtle" href="#" icon={<NavigateToNextAltIcon />}>
        Action
      </ButtonLink>
    ),
  },
};
