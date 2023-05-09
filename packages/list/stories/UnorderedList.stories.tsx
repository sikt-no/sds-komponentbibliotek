import React from "react";
import { Meta, Story } from "@storybook/react";
import { UnorderedList, ListProps } from "../index";
import { ListItem } from "../index";

export default {
  title: "Components/List/Unordered",
  component: UnorderedList,
  subcomponents: { ListItem },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ListProps> = (args) => <UnorderedList {...args} />;

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
      <UnorderedList>
        <ListItem key={20}>First Sub Item</ListItem>
        <ListItem key={21}>Second Sub Item</ListItem>
      </UnorderedList>
    </ListItem>,
    <ListItem key={3}>Third Item</ListItem>,
  ],
};
