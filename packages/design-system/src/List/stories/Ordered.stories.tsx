import { Meta, StoryObj } from "@storybook/react-vite";
import { List, OrderedListProps } from "../index";

const meta: Meta = {
  title: "SD3/List/Ordered",
  component: List.Ordered,
  subcomponents: { "List.Item": List.Item },
};

export default meta;

type Story = StoryObj<OrderedListProps>;

export const Default: Story = {
  args: {
    children: [
      <List.Item key={0}>First Item</List.Item>,
      <List.Item key={1}>
        Second Item
        <List.Ordered>
          <List.Item key={20}>First Sub Item</List.Item>
          <List.Item key={21}>Second Sub Item</List.Item>
        </List.Ordered>
      </List.Item>,
      <List.Item key={2}>Third Item</List.Item>,
    ],
  },
};
