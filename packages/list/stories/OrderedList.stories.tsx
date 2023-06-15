import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { OrderedList, ListProps } from "../index";
import { ListItem } from "../index";

const meta: Meta = {
  title: "Components/List/Ordered",
  component: OrderedList,
};

export default meta;

type Story = StoryObj<ListProps>;

export const List: Story = {
  args: {
    children: [
      <ListItem key={0}>First Item</ListItem>,
      <ListItem key={1}>Second Item</ListItem>,
      <ListItem key={2}>Third Item</ListItem>,
    ],
  },
};

export const Nested: Story = {
  args: {
    children: [
      <ListItem key={0}>First Item</ListItem>,
      <ListItem key={1}>
        Second Item
        <OrderedList>
          <ListItem key={20}>First Sub Item</ListItem>
          <ListItem key={21}>Second Sub Item</ListItem>
        </OrderedList>
      </ListItem>,
      <ListItem key={2}>Third Item</ListItem>,
    ],
  },
};
