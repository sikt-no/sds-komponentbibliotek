import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { OrderedList, ListProps } from "../index";
import { ListItem } from "../index";

export default {
  title: "Components/List/Ordered",
  component: OrderedList,
  subcomponents: { ListItem },
} as Meta;

const Template: Story<ListProps> = (args) => <OrderedList {...args} />;

export const List = Template.bind({});
List.args = {
  children: [
    <ListItem key={0}>First Item</ListItem>,
    <ListItem key={1}>Second Item</ListItem>,
    <ListItem key={2}>Third Item</ListItem>,
  ],
};

export const Nested = Template.bind({});
Nested.args = {
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
};
