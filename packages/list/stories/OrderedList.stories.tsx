import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { OrderedList, ListProps } from "../";
import { ListItem } from "../";

export default {
  title: "Components/List/Ordered",
  component: OrderedList,
  subcomponents: { ListItem },
} as Meta;

const Template: Story<ListProps> = (args) => <OrderedList {...args} />;

export const List = Template.bind({});
List.args = {
  children: [
    <ListItem key={0}>one</ListItem>,
    <ListItem key={0}>two</ListItem>,
    <ListItem key={0}>three</ListItem>,
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  children: [
    <ListItem key={0}>one</ListItem>,
    <ListItem key={0}>
      two
      <OrderedList>
        <ListItem key={0}>two.one</ListItem>
        <ListItem key={0}>two.two</ListItem>
      </OrderedList>
    </ListItem>,
    <ListItem key={0}>three</ListItem>,
  ],
};
