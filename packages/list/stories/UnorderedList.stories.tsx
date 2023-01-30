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
      <UnorderedList key={0}>
        <ListItem key={0}>two.one</ListItem>
        <ListItem key={0}>two.two</ListItem>
      </UnorderedList>
    </ListItem>,
    <ListItem key={0}>three</ListItem>,
  ],
};
