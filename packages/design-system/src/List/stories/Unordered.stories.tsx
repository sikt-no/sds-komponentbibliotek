import { Meta, StoryObj } from "@storybook/react-vite";
import { List, UnorderedListProps } from "../index";

const meta: Meta = {
  title: "SD3/List/Unordered",
  component: List.Unordered,
  subcomponents: { "List.Item": List.Item },
};

export default meta;

type Story = StoryObj<UnorderedListProps>;

export const Default: Story = {
  args: {
    children: [
      <List.Item key={0}>First Item</List.Item>,
      <List.Item key={1}>
        Second Item
        <List.Unordered>
          <List.Item key={10}>First Sub Item</List.Item>
          <List.Item key={11}>
            Second Sub Item
            <List.Unordered>
              <List.Item key={110}>First Sub Item</List.Item>
              <List.Item key={111}>Second Sub Item</List.Item>
            </List.Unordered>
          </List.Item>
        </List.Unordered>
      </List.Item>,
      <List.Item key={2}>Third Item</List.Item>,
    ],
  },
};
