import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { DescriptionList, ListProps } from "../";
import { DescriptionTerm, DescriptionDetails } from "../";

export default {
  title: "Components/List/Description",
  component: DescriptionList,
  subcomponents: { DescriptionTerm, DescriptionDetails },
} as Meta;

const Template: Story<ListProps> = (args) => <DescriptionList {...args} />;

export const List = Template.bind({});
List.args = {
  children: [
    <DescriptionTerm key={0}>term</DescriptionTerm>,
    <DescriptionDetails key={0}>details about a term</DescriptionDetails>,
    <DescriptionTerm key={0}>term</DescriptionTerm>,
    <DescriptionDetails key={0}>details about another term</DescriptionDetails>,
  ],
};
