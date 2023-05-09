import React from "react";
import { Meta, Story } from "@storybook/react";
import { DescriptionList, ListProps } from "../index";
import { DescriptionTerm, DescriptionDetails } from "../index";

export default {
  title: "Components/List/Description",
  component: DescriptionList,
  subcomponents: { DescriptionTerm, DescriptionDetails },
  tags: ["autodocs"],
} as Meta;

const Template: Story<ListProps> = (args) => <DescriptionList {...args} />;

export const List = Template.bind({});
List.args = {
  children: [
    <DescriptionTerm key={1}>First Term</DescriptionTerm>,
    <DescriptionDetails key={10}>
      Description of the first term
    </DescriptionDetails>,
    <DescriptionTerm key={2}>Second term</DescriptionTerm>,
    <DescriptionDetails key={20}>
      Description of the second term
    </DescriptionDetails>,
  ],
};
