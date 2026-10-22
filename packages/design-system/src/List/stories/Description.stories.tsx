import { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListProps } from "../index";

const meta: Meta = {
  title: "SD3/List/Description",
  component: List.Description,
  subcomponents: { "List.Term": List.Term, "List.Details": List.Details },
};

export default meta;

type Story = StoryObj<ListProps>;

export const Default: Story = {
  args: {
    children: [
      <List.Term key={1}>First Term</List.Term>,
      <List.Details key={10}>Description of the first term</List.Details>,
      <List.Term key={2}>Second term</List.Term>,
      <List.Details key={20}>Description of the second term</List.Details>,
    ],
  },
};
