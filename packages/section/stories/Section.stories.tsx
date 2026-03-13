import { Meta, StoryObj } from "@storybook/react-webpack5";
import { ButtonLink } from "../../button/index";
import { NavigateToNextAltIcon } from "../../icons/index";
import { Section, SectionProps } from "../index";

const meta: Meta = {
  title: "Components/Section",
  component: Section,
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
      <ButtonLink variant="subtle" href="#" icon={<NavigateToNextAltIcon />}>
        Action
      </ButtonLink>
    ),
  },
};
