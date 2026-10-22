import { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListProps } from "../index";

const meta: Meta = {
  title: "SD3/List/Unordered",
  component: List.Unordered,
  subcomponents: { "List.Item": List.Item },
};

export default meta;

type Story = StoryObj<ListProps>;

export const Default: Story = {
  args: {
    children: [
      <List.Item key={0}>First Item</List.Item>,
      <List.Item key={1}>
        Second Item
        <List.Unordered>
          <List.Item key={20}>First Sub Item</List.Item>
          <List.Item key={21}>Second Sub Item</List.Item>
        </List.Unordered>
      </List.Item>,
      <List.Item key={3}>Third Item</List.Item>,
    ],
  },
};
