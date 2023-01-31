import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { UnorderedList, ListProps } from "../";
import { ListItem } from "../";

export default {
  title: "Components/List/Unordered",
  component: UnorderedList,
  subcomponents: { ListItem },
} as Meta;

const Template: Story<ListProps> = (args) => <UnorderedList {...args} />;

export const List = Template.bind({});
List.args = {
  children: [
    <ListItem key={0}>First Item</ListItem>,
    <ListItem key={0}>Second Item</ListItem>,
    <ListItem key={0}>Third Item</ListItem>,
  ],
};

export const Nested = Template.bind({});
Nested.args = {
  children: [
    <ListItem key={0}>First Item</ListItem>,
    <ListItem key={0}>
      Second Item
      <UnorderedList key={0}>
        <ListItem key={0}>First Sub Item</ListItem>
        <ListItem key={0}>Second Sub Item</ListItem>
      </UnorderedList>
    </ListItem>,
    <ListItem key={0}>Third Item</ListItem>,
  ],
};
