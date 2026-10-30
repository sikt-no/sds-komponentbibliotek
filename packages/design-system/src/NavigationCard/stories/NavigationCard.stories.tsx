import { InfoIcon } from "@sikt/sds-icons";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../../../index";
import { NavigationCard, NavigationCardProps } from "../index";

const meta: Meta = {
  title: "SD3/NavigationCard",
  component: NavigationCard,
};

export default meta;

type Story = StoryObj<NavigationCardProps>;

export const Default: Story = {
  args: {
    href: "#route",
    children: [
      <NavigationCard.Icon key={0}>
        <InfoIcon />
      </NavigationCard.Icon>,
      <NavigationCard.Content key={1}>
        <NavigationCard.Heading>Heading</NavigationCard.Heading>
        <NavigationCard.Body>Body</NavigationCard.Body>
      </NavigationCard.Content>,
    ],
  },
};

export const WithTag: Story = {
  args: {
    href: "#route",
    children: [
      <NavigationCard.Icon key={0}>
        <InfoIcon />
      </NavigationCard.Icon>,
      <NavigationCard.Content key={1}>
        <NavigationCard.Heading>Heading</NavigationCard.Heading>
        <NavigationCard.Body>Body</NavigationCard.Body>
      </NavigationCard.Content>,
      <Tag color="brand" visibility="strong" key={2}>
        Tag
      </Tag>,
    ],
  },
};
